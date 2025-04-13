---
title: Align Object to View
---

|                                                                                                                                                                                                                                                   |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Macro Align Object to View                                                                                                                                                                                                                        |
| Description                                                                                                                                                                                                                                       |
| This macro aligns the selected object to the current View. Macro version: 0.1 Last modified: 2015-01-16 FreeCAD version: All Download: [ToolBar Icon](https://www.freecadweb.org/wiki/images/f/f4/Macro_Align_Object_to_View.png) Author: Mario52 |
| Author                                                                                                                                                                                                                                            |
| [Mario52](/User:Mario52 "User:Mario52")                                                                                                                                                                                                           |
| Download                                                                                                                                                                                                                                          |
| [ToolBar Icon](https://www.freecadweb.org/wiki/images/f/f4/Macro_Align_Object_to_View.png)                                                                                                                                                        |
| Links                                                                                                                                                                                                                                             |
| [Macros recipes](/Macros_recipes "Macros recipes") [How to install macros](/How_to_install_macros "How to install macros") [How to customize toolbars](/Customize_Toolbars "Customize Toolbars")                                                  |
| Macro Version                                                                                                                                                                                                                                     |
| 0.1                                                                                                                                                                                                                                               |
| Date last modified                                                                                                                                                                                                                                |
| 2015-01-16                                                                                                                                                                                                                                        |
| FreeCAD Version(s)                                                                                                                                                                                                                                |
| All                                                                                                                                                                                                                                               |
| Default shortcut                                                                                                                                                                                                                                  |
| _None_                                                                                                                                                                                                                                            |
| See also                                                                                                                                                                                                                                          |
| [FCCamera](/File:FCCamera_00.png "FCCamera") [Macro_FCCamera](/Macro_FCCamera "Macro FCCamera")                                                                                                                                                   |
|                                                                                                                                                                                                                                                   |
|                                                                                                                                                                                                                                                   |

## Description

This macro aligns and Position the selected object to the current View.

## Usage

- Direct your view, select your object and run the macro
- Your object will be the placement of the camera coordinates

## Script

ToolBar Icon ![](/src/assets/images/Macro_Align_Object_to_View.png)

**Macro_Align_Object_to_View.FCMacro**

```
# This macro place your object selected to the position ActiveView (camera)
# extact FCCamera
# 16/01/2015

__title__  ="Align Object to View"
__author__ = "Mario52"
__date__   = "16/01/2015"
__version__= "0.1"

import pivy
from pivy import coin

sel = FreeCADGui.Selection.getSelection()
Nameelement = sel[0].Name
App.Console.PrintMessage(str(Nameelement)+"\n")

pl = FreeCAD.Placement()
pl.Rotation = FreeCADGui.ActiveDocument.ActiveView.getCameraOrientation()
pl.Base = FreeCAD.Vector(0.0,0.0,0.0)

App.ActiveDocument.getObject(Nameelement).Placement=pl
```

## Example

- ![Your object in its original position XY.](/src/assets/images/Macro_Align_Object_to_View_01.png)

  Your object in its original position XY.

- ![Rotate the screen X? Y? Z? or use this macro Macro_Rotate_View for precise rotation.](/src/assets/images/Macro_Align_Object_to_View_02.png)

  Rotate the screen X? Y? Z? or use this macro [Macro_Rotate_View](/Macro_Rotate_View "Macro Rotate View") for precise rotation.

- [![Select the object and run the macro (the object face the screen).](/src/assets/images/Macro_Align_Object_to_View_03.png)](/File:Macro_Align_Object_to_View_03.png "Select the object and run the macro (the object face the screen).")

  Select the object and run the macro (the object face the screen).

- [![Your object return in the XY display and in its new coordinates position (Placement,Angle)](/src/assets/images/Macro_Align_Object_to_View_04.png)](/File:Macro_Align_Object_to_View_04.png "Your object return in the XY display and in its new coordinates position (Placement,Angle)")

  Your object return in the XY display and in its new coordinates position (Placement,Angle)

## Credits

Tanks Simplified code to rentlau_64

Retrieved from "<http://wiki.freecad.org/index.php?title=Macro_Align_Object_to_View/en&oldid=691988>"
