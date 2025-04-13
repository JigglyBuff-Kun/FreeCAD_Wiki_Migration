---
title: Makrodefinicja FaceToSketch
---
|  |
| --- |
| FaceToSketch |
| Opis |
| To makro rozbija twoją formę za pomocą funkcji Rozbij kształt środowiska Rysunek Roboczy i przekształca ścianę wybraną w szkicu bez ograniczeń, gotową do modyfikacji.  Macro version: 1.0 Last modified: 2013-12-23 FreeCAD version: Wszystkie Download: [Ikonka paska narzędzi](https://www.freecadweb.org/wiki/images/6/6e/Macro_FaceToSketch.png) Autor: Jreinhardt |
| Autor |
| [Jreinhardt](/index.php?title=User:Jreinhardt&action=edit&redlink=1 "User:Jreinhardt (page does not exist)") |
| Do pobrania |
| [Ikonka paska narzędzi](https://www.freecadweb.org/wiki/images/6/6e/Macro_FaceToSketch.png) |
| Odnośniki |
| [Przepisy na makropolecenia](/Macros_recipes/pl "Macros recipes/pl") [Jak zainstalować makrodefinicje](/How_to_install_macros/pl "How to install macros/pl") [Dostosowanie pasków narzędzi](/Customize_Toolbars/pl "Customize Toolbars/pl") |
| Wersja Makrodefinicji |
| 1.0 |
| Data zmian |
| 2013-12-23 |
| Wersja FreeCAD |
| Wszystkie |
| Domyślny skrót |
| *Brak* |
| Zobacz również |
| *-* |
|  |
|  |

## Opis

To makro rozbija twoją formę za pomocą funkcji ![](/images/Draft_Downgrade.svg) [Rozbij kształt](/Draft_Downgrade/pl "Draft Downgrade/pl") środowiska Rysunek Roboczy i przekształca ścianę wybraną w szkicu bez ograniczeń, gotową do modyfikacji.

## Tworzenie skryptów

Ikonka paska narzędzi ![](/images/Macro_FaceToSketch.png)

**Macro\_FaceToSketch.FCMacro**

```
import Draft
  
wires,_faces = Draft.downgrade(FreeCADGui.Selection.getSelection(),delete=True)
  
sketch = Draft.makeSketch(wires[0:1])
for wire in wires[1:]:
    Draft.makeSketch([wire],addTo=sketch)
  
for wire in wires:
    FreeCAD.ActiveDocument.removeObject(wire.Name)
```

Retrieved from "<http://wiki.freecad.org/index.php?title=Macro_FaceToSketch/pl&oldid=1067348>"