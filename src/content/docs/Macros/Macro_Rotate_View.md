---
title: Rotate View
---

|                                                                                                                                                                                                                                                                                                                 |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Macro Rotate View by 90°                                                                                                                                                                                                                                                                                        |
| Description                                                                                                                                                                                                                                                                                                     |
| This macro rotates the current view by 90° to the left. Only works if you are in [Top view](/Std_ViewTop "Std ViewTop"). Macro version: 01.00 Last modified: 2010-11-17 FreeCAD version: All Download: [ToolBar Icon](https://wiki.freecad.org/images/a/a0/Macro_Rotate_View_view_90_Degrees.png) Author: Yorik |
| Author                                                                                                                                                                                                                                                                                                          |
| [Yorik](/User:Yorik "User:Yorik")                                                                                                                                                                                                                                                                               |
| Download                                                                                                                                                                                                                                                                                                        |
| [ToolBar Icon](https://wiki.freecad.org/images/a/a0/Macro_Rotate_View_view_90_Degrees.png)                                                                                                                                                                                                                      |
| Links                                                                                                                                                                                                                                                                                                           |
| [Macros recipes](/Macros_recipes "Macros recipes") [How to install macros](/How_to_install_macros "How to install macros") [How to customize toolbars](/Customize_Toolbars "Customize Toolbars")                                                                                                                |
| Macro Version                                                                                                                                                                                                                                                                                                   |
| 01.00                                                                                                                                                                                                                                                                                                           |
| Date last modified                                                                                                                                                                                                                                                                                              |
| 2010-11-17                                                                                                                                                                                                                                                                                                      |
| FreeCAD Version(s)                                                                                                                                                                                                                                                                                              |
| All                                                                                                                                                                                                                                                                                                             |
| Default shortcut                                                                                                                                                                                                                                                                                                |
| _None_                                                                                                                                                                                                                                                                                                          |
| See also                                                                                                                                                                                                                                                                                                        |
| [Macro Rotate ViewAxonometric](/Macro_Rotate_ViewAxonometric "Macro Rotate ViewAxonometric"), [Macro Rotate View Free](/Macro_Rotate_View_Free "Macro Rotate View Free")                                                                                                                                        |
|                                                                                                                                                                                                                                                                                                                 |
|                                                                                                                                                                                                                                                                                                                 |

## Description

This macro rotates the current view by 90° to the left.

## Limitations

Only works if you are in Top view: [![Std_ViewTop](/src/assets/images/View-top.svg)](/Std_ViewTop "Std_ViewTop ") [XY (top)](/Std_ViewTop "Std ViewTop")

## Script

ToolBar Icon ![](/src/assets/images/Macro_Rotate_View_view_90_Degrees.png)

**Macro_Rotate_View_90_Degrees.FCMacro**

```
import math
from pivy import coin
cam = Gui.ActiveDocument.ActiveView.getCameraNode()
rot = coin.SbRotation()
rot.setValue(coin.SbVec3f(0,0,1),math.pi/2)
nrot = cam.orientation.getValue() * rot
cam.orientation = nrot
```

Retrieved from "<http://wiki.freecad.org/index.php?title=Macro_Rotate_View/en&oldid=1345953>"
