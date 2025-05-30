---
title: Spring
---

|                                                                                                                                                                                                                                                                                                                  |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Spring Simul                                                                                                                                                                                                                                                                                                     |
| Description                                                                                                                                                                                                                                                                                                      |
| Simulates the compression and decompression of a spring. Macro version: 1.0 Last modified: 2014-09-29 FreeCAD version: All Download: The file [Spring.FCStd](http://forum.freecadweb.org/download/file.php?id=7679) [ToolBar Icon](https://www.freecadweb.org/wiki/images/2/2d/Macro_Spring.png) Author: Mario52 |
| Author                                                                                                                                                                                                                                                                                                           |
| [Mario52](/User:Mario52 "User:Mario52")                                                                                                                                                                                                                                                                          |
| Download                                                                                                                                                                                                                                                                                                         |
| The file [Spring.FCStd](http://forum.freecadweb.org/download/file.php?id=7679) [ToolBar Icon](https://www.freecadweb.org/wiki/images/2/2d/Macro_Spring.png)                                                                                                                                                      |
| Links                                                                                                                                                                                                                                                                                                            |
| [Macros recipes](/Macros_recipes "Macros recipes") [How to install macros](/How_to_install_macros "How to install macros") [How to customize toolbars](/Customize_Toolbars "Customize Toolbars")                                                                                                                 |
| Macro Version                                                                                                                                                                                                                                                                                                    |
| 1.0                                                                                                                                                                                                                                                                                                              |
| Date last modified                                                                                                                                                                                                                                                                                               |
| 2014-09-29                                                                                                                                                                                                                                                                                                       |
| FreeCAD Version(s)                                                                                                                                                                                                                                                                                               |
| All                                                                                                                                                                                                                                                                                                              |
| Default shortcut                                                                                                                                                                                                                                                                                                 |
| _None_                                                                                                                                                                                                                                                                                                           |
| See also                                                                                                                                                                                                                                                                                                         |
| _None_                                                                                                                                                                                                                                                                                                           |
|                                                                                                                                                                                                                                                                                                                  |
|                                                                                                                                                                                                                                                                                                                  |

## Description

Simulates the compression and decompression of a spring.

![](/images/Spring_00.gif)

## Uses

Open the 2 files below (Spring.FCMacro and Spring.FCStd) in FreeCAD with 2 screens (Menu: Windows → Tile) and click in the window and the macro then press F6 (debug macro) to run the macro or run the macro with ![](/images/Std_DlgMacroExecuteDirect.svg)

![](/images/Spring_02.png)

## The File

[Spring.FCStd](http://forum.freecadweb.org/download/file.php?id=7679)

## Script

ToolBar Icon ![](/images/Macro_Spring.png)

**Spring.FCMacro**

```
import FreeCAD, FreeCADGui, Draft, Part
from FreeCAD import Base
import time

ii = iib = FreeCAD.getDocument("Spring").getObject("Helix001").Pitch.Value
i = ib = FreeCAD.getDocument("Spring").getObject("Helix001").Height.Value

pas = 1

for ii2 in range(int(60)):
    if pas == 0:
        if ii > iib-1:
            pas = 1
        else:
            ii += 1
            i = (ii * 10)
    else:
        if ii < 2:
            pas = 0
        else:
            ii -= 1
            i = (ii * 10)

    FreeCAD.getDocument("Spring").getObject("Helix001").Pitch = ii
    FreeCAD.getDocument("Spring").getObject("Helix001").Height = i
    App.Console.PrintMessage(str(ii2)+"  " + str(ii)+"  " + str(i)+"  " + str(pas) +"\n")
    Gui.updateGui()
    time.sleep(0.1)
```

## Link

The forum discussion page: [scripting animations](http://forum.freecadweb.org/viewtopic.php?f=22&t=7449#p62193)

Retrieved from "<http://wiki.freecad.org/index.php?title=Macro_Spring/en&oldid=710852>"
