---
title: hinge
---

|                                                                                                                                                                                                                                                                                     |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Simulates hinge movement                                                                                                                                                                                                                                                            |
| Description                                                                                                                                                                                                                                                                         |
| Hinge simulation. Macro version: 1.0 Last modified: 2014-09-09 FreeCAD version: All Download: The File [20140908b_Hinge-1.fcstd](http://forum.freecadweb.org/download/file.php?id=7628) [ToolBar Icon](https://www.freecadweb.org/wiki/images/a/a8/Macro_hinge.png) Author: Mario52 |
| Author                                                                                                                                                                                                                                                                              |
| [Mario52](/User:Mario52 "User:Mario52")                                                                                                                                                                                                                                             |
| Download                                                                                                                                                                                                                                                                            |
| The File [20140908b_Hinge-1.fcstd](http://forum.freecadweb.org/download/file.php?id=7628) [ToolBar Icon](https://www.freecadweb.org/wiki/images/a/a8/Macro_hinge.png)                                                                                                               |
| Links                                                                                                                                                                                                                                                                               |
| [Macros recipes](/Macros_recipes "Macros recipes") [How to install macros](/How_to_install_macros "How to install macros") [How to customize toolbars](/Customize_Toolbars "Customize Toolbars")                                                                                    |
| Macro Version                                                                                                                                                                                                                                                                       |
| 1.0                                                                                                                                                                                                                                                                                 |
| Date last modified                                                                                                                                                                                                                                                                  |
| 2014-09-09                                                                                                                                                                                                                                                                          |
| FreeCAD Version(s)                                                                                                                                                                                                                                                                  |
| All                                                                                                                                                                                                                                                                                 |
| Default shortcut                                                                                                                                                                                                                                                                    |
| _None_                                                                                                                                                                                                                                                                              |
| See also                                                                                                                                                                                                                                                                            |
| _None_                                                                                                                                                                                                                                                                              |
|                                                                                                                                                                                                                                                                                     |
|                                                                                                                                                                                                                                                                                     |

## Description

Simulates hinge movement

![](/images/Hing_00.gif)

## Uses

Open the 2 files (20140908b_Hinge-1.FCMacro and 20140908b_Hinge-1.FCStd) in FreeCAD with 2 screens (Menu: Windows > Tile) and click in the window and the macro and click F6 (debug macro) to run the macro or run the macro with ![](/images/Std_DlgMacroExecuteDirect.svg)

![](/images/Hing_01.png)

## The File

[20140908b_Hinge-1.fcstd](http://forum.freecadweb.org/download/file.php?id=7628)

## Script

ToolBar Icon ![](/images/Macro_hinge.png)

**20140908b_Hinge-1.FCMacro**

```
import FreeCAD, FreeCADGui, Draft, Part
from FreeCAD import Base
import time

ii = 0
pas = 0
for ii2 in range(180):
    if pas == 0:
        if ii > 90:
            pas = 1
        ii += 5
    else:
        if ii < 1:
            pas = 0
        ii -= 5

    App.getDocument("_0140908b_Hinge_1").Fusion.Placement=App.Placement(App.Vector(0,0,0), App.Rotation(App.Vector(0,0,1),ii), App.Vector(44.4,6.9,0))
    App.Console.PrintMessage(str(ii2)+"  " + str(ii)+"  " + str(pas) +"\n")
    Gui.updateGui()
    time.sleep(0) #modify the time here
```

## Link

The discussion page [Struggling with LinearPattern (again)](http://forum.freecadweb.org/viewtopic.php?f=3&t=7606&p=62086#p62086)

Retrieved from "<http://wiki.freecad.org/index.php?title=Macro_hinge/en&oldid=711083>"
