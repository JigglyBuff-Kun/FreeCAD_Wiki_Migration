---
title: Makrodefinicja FlattenWire
---
|  |
| --- |
| FlattenWire |
| Opis |
| To makro dokonuje spłaszczenia projektów polilinii, które nie są planarne względem ich środkowej współrzędnej Z.  Macro version: 1.1 Last modified: 2021-10-27 FreeCAD version: Wszystkie Download: [ToolBar Icon](https://www.freecadweb.org/wiki/images/2/2f/Macro_FlattenWire.png) Autor: Yorik |
| Autor |
| [Yorik](/User:Yorik "User:Yorik") |
| Do pobrania |
| [ToolBar Icon](https://www.freecadweb.org/wiki/images/2/2f/Macro_FlattenWire.png) |
| Odnośniki |
| [Przepisy na makropolecenia](/Macros_recipes/pl "Macros recipes/pl") [Jak zainstalować makrodefinicje](/How_to_install_macros/pl "How to install macros/pl") [Dostosowanie pasków narzędzi](/Customize_Toolbars/pl "Customize Toolbars/pl") |
| Wersja Makrodefinicji |
| 1.1 |
| Data zmian |
| 2021-10-27 |
| Wersja FreeCAD |
| Wszystkie |
| Domyślny skrót |
| *Brak* |
| Zobacz również |
| *-* |
|  |
|  |

## Opis

To makro dokonuje spłaszczenia projektów polilinii, które nie są planarne względem ich środkowej współrzędnej Z.

## Tworzenie skryptów

Ikonka paska narzędzi
![](/images/Macro_FlattenWire.png)

**Macro\_FlattenWire.FCMacro**

```
import FreeCAD
obj = FreeCAD.ActiveDocument.ActiveObject
z = 0
for p in obj.Points: z += p.z
z = z/len(obj.Points)
newpoints = []
for p in obj.Points: newpoints.append(FreeCAD.Vector(p.x, p.y, z))
obj.Points = newpoints
```

Retrieved from "<http://wiki.freecad.org/index.php?title=Macro_FlattenWire/pl&oldid=1086161>"