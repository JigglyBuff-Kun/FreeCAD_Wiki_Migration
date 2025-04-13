---
title: Align Working Plane to Camera/ru
---

|                                                                                                                                                                                                                                                                                                                            |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Macro Align Working Plane to Camera                                                                                                                                                                                                                                                                                        |
| Description                                                                                                                                                                                                                                                                                                                |
| This macro moves the current [Draft Working Plane](/Draft_SelectPlane "Draft SelectPlane") to the center of the current view Macro version: 1.0 Last modified: 2017-05-10 FreeCAD version: All Download: [ToolBar Icon](https://www.freecadweb.org/wiki/images/0/01/Macro_Align_Working_Plane_to_Camera.png) Author: yorik |
| Author                                                                                                                                                                                                                                                                                                                     |
| [yorik](/User:Yorik "User:Yorik")                                                                                                                                                                                                                                                                                          |
| Download                                                                                                                                                                                                                                                                                                                   |
| [ToolBar Icon](https://www.freecadweb.org/wiki/images/0/01/Macro_Align_Working_Plane_to_Camera.png)                                                                                                                                                                                                                        |
| Links                                                                                                                                                                                                                                                                                                                      |
| [Macros recipes](/Macros_recipes "Macros recipes") [How to install macros](/How_to_install_macros "How to install macros") [How to customize toolbars](/Customize_Toolbars "Customize Toolbars")                                                                                                                           |
| Macro Version                                                                                                                                                                                                                                                                                                              |
| 1.0                                                                                                                                                                                                                                                                                                                        |
| Date last modified                                                                                                                                                                                                                                                                                                         |
| 2017-05-10                                                                                                                                                                                                                                                                                                                 |
| FreeCAD Version(s)                                                                                                                                                                                                                                                                                                         |
| All                                                                                                                                                                                                                                                                                                                        |
| Default shortcut                                                                                                                                                                                                                                                                                                           |
| _None_                                                                                                                                                                                                                                                                                                                     |
| See also                                                                                                                                                                                                                                                                                                                   |
| [Macro Align Camera to Working Plane](/Macro_Align_Camera_to_Working_Plane "Macro Align Camera to Working Plane") [Macro Align Camera to Working Plane](/File:Macro_Align_Camera_to_Working_Plane.png "Macro Align Camera to Working Plane")                                                                               |
|                                                                                                                                                                                                                                                                                                                            |
|                                                                                                                                                                                                                                                                                                                            |

## Description

This macro moves the current [Draft Working Plane](/Draft_SelectPlane "Draft SelectPlane") to the center of the current view. It is useful when you are working quite far from the grid center.

## Usage

- Move the view to the zone where you want to look at.
- Run the macro.

## Скрипт

ToolBar Icon
![](/images/Macro_Align_Working_Plane_to_Camera.png)

**Macro_Align_Working_Plane_to_Camera.FCMacro**

```
import FreeCAD,FreeCADGui
cam = FreeCAD.Vector(FreeCADGui.ActiveDocument.ActiveView.getCameraNode().position.getValue().getValue())
pos = FreeCAD.DraftWorkingPlane.projectPoint(cam)
FreeCAD.DraftWorkingPlane.position = pos
FreeCADGui.Snapper.setGrid()
```

Retrieved from "<http://wiki.freecad.org/index.php?title=Macro_Align_Working_Plane_to_Camera/ru&oldid=1086149>"
