---
title: FaceToSketch
---

|                                                                                                                                                                                                                                                                                                                                              |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| FaceToSketch                                                                                                                                                                                                                                                                                                                                 |
| Description                                                                                                                                                                                                                                                                                                                                  |
| This macro breaks down your form with function Draft Downgrade and transforms the face selected in a sketch without constraints, and ready to be modified. Macro version: 1.0 Last modified: 2013-12-23 FreeCAD version: All Download: [ToolBar Icon](https://www.freecadweb.org/wiki/images/6/6e/Macro_FaceToSketch.png) Author: Jreinhardt |
| Author                                                                                                                                                                                                                                                                                                                                       |
| [Jreinhardt](/index.php?title=User:Jreinhardt&action=edit&redlink=1 "User:Jreinhardt (page does not exist)")                                                                                                                                                                                                                                 |
| Download                                                                                                                                                                                                                                                                                                                                     |
| [ToolBar Icon](https://www.freecadweb.org/wiki/images/6/6e/Macro_FaceToSketch.png)                                                                                                                                                                                                                                                           |
| Links                                                                                                                                                                                                                                                                                                                                        |
| [Macros recipes](/Macros_recipes "Macros recipes") [How to install macros](/How_to_install_macros "How to install macros") [How to customize toolbars](/Customize_Toolbars "Customize Toolbars")                                                                                                                                             |
| Macro Version                                                                                                                                                                                                                                                                                                                                |
| 1.0                                                                                                                                                                                                                                                                                                                                          |
| Date last modified                                                                                                                                                                                                                                                                                                                           |
| 2013-12-23                                                                                                                                                                                                                                                                                                                                   |
| FreeCAD Version(s)                                                                                                                                                                                                                                                                                                                           |
| All                                                                                                                                                                                                                                                                                                                                          |
| Default shortcut                                                                                                                                                                                                                                                                                                                             |
| _None_                                                                                                                                                                                                                                                                                                                                       |
| See also                                                                                                                                                                                                                                                                                                                                     |
| _None_                                                                                                                                                                                                                                                                                                                                       |
|                                                                                                                                                                                                                                                                                                                                              |
|                                                                                                                                                                                                                                                                                                                                              |

## Description

This macro breaks down your form with function ![](/src/assets/images/Draft_Downgrade.svg) [Draft Downgrade](/Draft_Downgrade "Draft Downgrade") and transforms the face selected in a sketch without constraints, and ready to be modified.

## Script

ToolBar Icon ![](/src/assets/images/Macro_FaceToSketch.png)

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

Retrieved from "<http://wiki.freecad.org/index.php?title=Macro_FaceToSketch/en&oldid=692264>"
