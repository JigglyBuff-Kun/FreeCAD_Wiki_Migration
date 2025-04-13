---
title: FlächeZuSkizze
---

|                                                                                                                                                                                                                                                                                                                                                                                             |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| FaceToSketch                                                                                                                                                                                                                                                                                                                                                                                |
| Beschreibung                                                                                                                                                                                                                                                                                                                                                                                |
| Dieses Makro zerlegt Ihre Form mit der Funktion Entwurf Herabstufen und transformiert die in einer Skizze ausgewählte Fläche ohne Beschränkungen und bereit zur Änderung. Versionsmakro : 1.0 Datum der letzten Änderung : 2013-12-23 FreeCAD version : Alle Herunterladen : [WerkzeugLeisten Symbol](https://www.freecadweb.org/wiki/images/6/6e/Macro_FaceToSketch.png) Autor: Jreinhardt |
| Autor                                                                                                                                                                                                                                                                                                                                                                                       |
| [Jreinhardt](/index.php?title=User:Jreinhardt&action=edit&redlink=1 "User:Jreinhardt (page does not exist)")                                                                                                                                                                                                                                                                                |
| Herunterladen                                                                                                                                                                                                                                                                                                                                                                               |
| [WerkzeugLeisten Symbol](https://www.freecadweb.org/wiki/images/6/6e/Macro_FaceToSketch.png)                                                                                                                                                                                                                                                                                                |
| Links                                                                                                                                                                                                                                                                                                                                                                                       |
| [Makros Rezepte](/Macros_recipes/de "Macros recipes/de") [Wie installiere ich Makros](/How_to_install_macros/de "How to install macros/de") [So passen Sie Symbolleisten an](/Customize_Toolbars/de "Customize Toolbars/de")                                                                                                                                                                |
| Macro-Version                                                                                                                                                                                                                                                                                                                                                                               |
| 1.0                                                                                                                                                                                                                                                                                                                                                                                         |
| Datum der letzten Änderung                                                                                                                                                                                                                                                                                                                                                                  |
| 2013-12-23                                                                                                                                                                                                                                                                                                                                                                                  |
| FreeCAD-Version(s)                                                                                                                                                                                                                                                                                                                                                                          |
| Alle                                                                                                                                                                                                                                                                                                                                                                                        |
| Standardverknüpfung                                                                                                                                                                                                                                                                                                                                                                         |
| _None_                                                                                                                                                                                                                                                                                                                                                                                      |
| Siehe auch                                                                                                                                                                                                                                                                                                                                                                                  |
| _None_                                                                                                                                                                                                                                                                                                                                                                                      |
|                                                                                                                                                                                                                                                                                                                                                                                             |
|                                                                                                                                                                                                                                                                                                                                                                                             |

## Beschreibung

Dieses Makro zerlegt deine Form mit der Funktion ![](/src/assets/images/Draft_Downgrade.svg) [Enwurf Herabstufen](/Draft_Downgrade/de "Draft Downgrade/de") und überführt die gewählte Fläche in eine Skizze ohne Beschränkungen, die dann bearbeitet werden kann.

## Skript

Werkzeugleistensymbol ![](/src/assets/images/Macro_FaceToSketch.png)

**Macro_FaceToSketch.FCMacro**

```
import Draft

wires,_faces = Draft.downgrade(FreeCADGui.Selection.getSelection(),delete=True)

sketch = Draft.makeSketch(wires[0:1])
for wire in wires[1:]:
    Draft.makeSketch([wire],addTo=sketch)

for wire in wires:
    FreeCAD.ActiveDocument.removeObject(wire.Name)
```

Retrieved from "<http://wiki.freecad.org/index.php?title=Macro_FaceToSketch/de&oldid=958875>"
