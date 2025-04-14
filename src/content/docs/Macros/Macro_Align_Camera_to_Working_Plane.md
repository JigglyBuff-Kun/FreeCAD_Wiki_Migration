---
title: Align Camera to Working Plane
---

|                                                                                                                                                                                                                                                                                                         |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Macro Align Camera to Working Plane                                                                                                                                                                                                                                                                     |
| Description                                                                                                                                                                                                                                                                                             |
| This macro aligns the camera to the current [Draft Working Plane](/Draft_SelectPlane "Draft SelectPlane") Macro version: 0.1 Last modified: 2017-03-16 FreeCAD version: All Download: [ToolBar Icon](https://www.freecadweb.org/wiki/images/f/fd/Macro_Align_Camera_to_Working_Plane.png) Author: yorik |
| Author                                                                                                                                                                                                                                                                                                  |
| [yorik](/User:Yorik "User:Yorik")                                                                                                                                                                                                                                                                       |
| Download                                                                                                                                                                                                                                                                                                |
| [ToolBar Icon](https://www.freecadweb.org/wiki/images/f/fd/Macro_Align_Camera_to_Working_Plane.png)                                                                                                                                                                                                     |
| Links                                                                                                                                                                                                                                                                                                   |
| [Macros recipes](/Macros_recipes "Macros recipes") [How to install macros](/How_to_install_macros "How to install macros") [How to customize toolbars](/Customize_Toolbars "Customize Toolbars")                                                                                                        |
| Macro Version                                                                                                                                                                                                                                                                                           |
| 0.1                                                                                                                                                                                                                                                                                                     |
| Date last modified                                                                                                                                                                                                                                                                                      |
| 2017-03-16                                                                                                                                                                                                                                                                                              |
| FreeCAD Version(s)                                                                                                                                                                                                                                                                                      |
| All                                                                                                                                                                                                                                                                                                     |
| Default shortcut                                                                                                                                                                                                                                                                                        |
| _None_                                                                                                                                                                                                                                                                                                  |
| See also                                                                                                                                                                                                                                                                                                |
| [Macro Align Working Plane to Camera](/Macro_Align_Working_Plane_to_Camera "Macro Align Working Plane to Camera")                                                                                                                                                                                       |
|                                                                                                                                                                                                                                                                                                         |
|                                                                                                                                                                                                                                                                                                         |

## Description

This macro aligns the camera to the current [Draft Working Plane](/Draft_SelectPlane "Draft SelectPlane")

## Usage

- Set the [Draft Working Plane](/Draft_SelectPlane "Draft SelectPlane") to your liking.
- Run the macro.

## Script

ToolBar Icon
![](/images/Macro_Align_Camera_to_Working_Plane.png)

**Macro_Align_Camera_to_Working_Plane.FCMacro**

```
import FreeCAD,FreeCADGui
c = FreeCADGui.ActiveDocument.ActiveView.getCameraNode()
r = FreeCAD.DraftWorkingPlane.getRotation().Rotation.Q
c.orientation.setValue(r)
```

Retrieved from "<http://wiki.freecad.org/index.php?title=Macro_Align_Camera_to_Working_Plane/en&oldid=1086133>"
