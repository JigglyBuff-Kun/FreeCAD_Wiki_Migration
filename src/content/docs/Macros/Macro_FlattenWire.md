---
title: FlattenWire
---

|                                                                                                                                                                                                                                                              |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| FlattenWire                                                                                                                                                                                                                                                  |
| Description                                                                                                                                                                                                                                                  |
| This macro flattens draft wires that are not planar to their median Z coordinate Macro version: 1.1 Last modified: 2021-10-27 FreeCAD version: All Download: [ToolBar Icon](https://www.freecadweb.org/wiki/images/2/2f/Macro_FlattenWire.png) Author: Yorik |
| Author                                                                                                                                                                                                                                                       |
| [Yorik](/User:Yorik "User:Yorik")                                                                                                                                                                                                                            |
| Download                                                                                                                                                                                                                                                     |
| [ToolBar Icon](https://www.freecadweb.org/wiki/images/2/2f/Macro_FlattenWire.png)                                                                                                                                                                            |
| Links                                                                                                                                                                                                                                                        |
| [Macros recipes](/Macros_recipes "Macros recipes") [How to install macros](/How_to_install_macros "How to install macros") [How to customize toolbars](/Customize_Toolbars "Customize Toolbars")                                                             |
| Macro Version                                                                                                                                                                                                                                                |
| 1.1                                                                                                                                                                                                                                                          |
| Date last modified                                                                                                                                                                                                                                           |
| 2021-10-27                                                                                                                                                                                                                                                   |
| FreeCAD Version(s)                                                                                                                                                                                                                                           |
| All                                                                                                                                                                                                                                                          |
| Default shortcut                                                                                                                                                                                                                                             |
| _None_                                                                                                                                                                                                                                                       |
| See also                                                                                                                                                                                                                                                     |
| _None_                                                                                                                                                                                                                                                       |
|                                                                                                                                                                                                                                                              |
|                                                                                                                                                                                                                                                              |

## Description

This macro flattens draft wires that are not planar to their median Z coordinate.

## Script

ToolBar Icon
![](/images/Macro_FlattenWire.png)

**Macro_FlattenWire.FCMacro**

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

Retrieved from "<http://wiki.freecad.org/index.php?title=Macro_FlattenWire/en&oldid=1086160>"
