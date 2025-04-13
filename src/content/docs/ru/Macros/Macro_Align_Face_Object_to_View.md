---
title: Align Face Object to View/ru
---

|                                                                                                                                                                                                                                                                      |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Macro Align Face Object to View                                                                                                                                                                                                                                      |
| Description                                                                                                                                                                                                                                                          |
| This macro directs the face of the object on the side of the ActiveView. Macro version: 0.1 Last modified: 2015-01-16 FreeCAD version: All Download: [ToolBar Icon](https://www.freecadweb.org/wiki/images/d/d5/Macro_Align_Face_Object_to_View.png) Author: Mario52 |
| Author                                                                                                                                                                                                                                                               |
| [Mario52](/User:Mario52 "User:Mario52")                                                                                                                                                                                                                              |
| Download                                                                                                                                                                                                                                                             |
| [ToolBar Icon](https://www.freecadweb.org/wiki/images/d/d5/Macro_Align_Face_Object_to_View.png)                                                                                                                                                                      |
| Links                                                                                                                                                                                                                                                                |
| [Macros recipes](/Macros_recipes "Macros recipes") [How to install macros](/How_to_install_macros "How to install macros") [How to customize toolbars](/Customize_Toolbars "Customize Toolbars")                                                                     |
| Macro Version                                                                                                                                                                                                                                                        |
| 0.1                                                                                                                                                                                                                                                                  |
| Date last modified                                                                                                                                                                                                                                                   |
| 2015-01-16                                                                                                                                                                                                                                                           |
| FreeCAD Version(s)                                                                                                                                                                                                                                                   |
| All                                                                                                                                                                                                                                                                  |
| Default shortcut                                                                                                                                                                                                                                                     |
| _None_                                                                                                                                                                                                                                                               |
| See also                                                                                                                                                                                                                                                             |
| [FCCamera](/File:FCCamera_00.png "FCCamera") [Macro_FCCamera](/Macro_FCCamera "Macro FCCamera")                                                                                                                                                                      |
|                                                                                                                                                                                                                                                                      |
|                                                                                                                                                                                                                                                                      |

## Description

This macro directs the face of the object on the side of the ActiveView (camera). In the case of the face of a borehole (or internal or cylinder) face drilling facing the screen.

## Usage

- Select your object and run the macro.
- Your object will be of the camera.

## Скрипт

ToolBar Icon
![](/images/Macro_Align_Face_Object_to_View.png)

**Macro_Align_Face_Object_to_View.FCMacro**

```
# This macro directs the face of the object on the side of the ActiveView (camera)
# extact FCCamera
# 16/01/2015

__title__="Macro_Align_Face_Object_to_View"
__author__ = "Mario52"

import pivy
from pivy import coin

try:
    v=Gui.Selection.getSelectionEx()[0].SubObjects[0].Surface.Axis    # to Axis
#    v = Gui.Selection.getSelectionEx()[0].SubObjects[0].normalAt(0,0) # normalAt
    r=App.Rotation(App.Vector(0,0,1),v)
    Gui.ActiveDocument.ActiveView.setCameraOrientation(r.Q)
except Exception:
    App.Console.PrintError("Select a face and run the macro"+"\n")
```

## Links

Original macro by wmayer [Looking for some helpful GUI-commands](http://forum.freecadweb.org/viewtopic.php?f=3&t=7029&p=56735&hilit=Shape.Face4#p56735)

Retrieved from "<http://wiki.freecad.org/index.php?title=Macro_Align_Face_Object_to_View/ru&oldid=1086139>"
