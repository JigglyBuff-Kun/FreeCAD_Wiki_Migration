---
title: FaceToSketch
---

|                                                                                                                                                                                                                                      |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| FaceToSketch                                                                                                                                                                                                                         |
| Popis                                                                                                                                                                                                                                |
| Konvertuje povrch do náčrtu bez vazeb. Version macro : 1.0 Date last modification : 2013-12-23 FreeCAD version : All Download : [ToolBar Icon](https://www.freecadweb.org/wiki/images/6/6e/Macro_FaceToSketch.png) Autor: Jreinhardt |
| Autor                                                                                                                                                                                                                                |
| [Jreinhardt](/index.php?title=User:Jreinhardt&action=edit&redlink=1 "User:Jreinhardt (page does not exist)")                                                                                                                         |
| Download                                                                                                                                                                                                                             |
| [ToolBar Icon](https://www.freecadweb.org/wiki/images/6/6e/Macro_FaceToSketch.png)                                                                                                                                                   |
| Odkazy                                                                                                                                                                                                                               |
| [Makro recepty                                                                                                                                                                                                                       | ](/Macros_recipes/cs "Macros recipes/cs") [Jak nainstalovat makra](/How_to_install_macros/cs "How to install macros/cs") [Jak přizpůsobit panely nástrojů](/Customize_Toolbars/cs "Customize Toolbars/cs") |
| Verze                                                                                                                                                                                                                                |
| 1.0                                                                                                                                                                                                                                  |
| Datum poslední úpravy                                                                                                                                                                                                                |
| 2013-12-23                                                                                                                                                                                                                           |
| Verze FreeCAD                                                                                                                                                                                                                        |
| All                                                                                                                                                                                                                                  |
| Výchozí zástupce                                                                                                                                                                                                                     |
| _None_                                                                                                                                                                                                                               |
| Viz též                                                                                                                                                                                                                              |
| _None_                                                                                                                                                                                                                               |
|                                                                                                                                                                                                                                      |
|                                                                                                                                                                                                                                      |

## Description

Toto makro rozloží tvar funkcí ![](/images/Draft_Downgrade.png) [Draft Downgrade](/Draft_Downgrade "Draft Downgrade") a transformuje povrch vybraný v náčrtu bez vazeb s možností dalších úprav.

## Script

ToolBar Icon ![](/images/Macro_FaceToSketch.png)

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

Retrieved from "<http://wiki.freecad.org/index.php?title=Macro_FaceToSketch/cs&oldid=692262>"
