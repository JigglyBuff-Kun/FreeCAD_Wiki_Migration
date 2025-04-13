---
title: Makrodefinicja Rotate ViewAxonometric
---

|                                                                                                                                                                                                                                                                |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Macro Rotate ViewAxonometric                                                                                                                                                                                                                                   |
| Description                                                                                                                                                                                                                                                    |
| This macro rotates the current view in ViewAxonometric. Macro version: 01.00 Last modified: 2010-11-17 FreeCAD version: All Download: [ToolBar Icon](https://www.freecadweb.org/wiki/images/2/2e/Macro_Rotate_View_with_Y_pointing_upwards_.png) Author: Yorik |
| Author                                                                                                                                                                                                                                                         |
| [Yorik](/User:Yorik "User:Yorik")                                                                                                                                                                                                                              |
| Download                                                                                                                                                                                                                                                       |
| [ToolBar Icon](https://www.freecadweb.org/wiki/images/2/2e/Macro_Rotate_View_with_Y_pointing_upwards_.png)                                                                                                                                                     |
| Links                                                                                                                                                                                                                                                          |
| [Macros recipes](/Macros_recipes "Macros recipes") [How to install macros](/How_to_install_macros "How to install macros") [How to customize toolbars](/Customize_Toolbars "Customize Toolbars")                                                               |
| Macro Version                                                                                                                                                                                                                                                  |
| 01.00                                                                                                                                                                                                                                                          |
| Date last modified                                                                                                                                                                                                                                             |
| 2010-11-17                                                                                                                                                                                                                                                     |
| FreeCAD Version(s)                                                                                                                                                                                                                                             |
| All                                                                                                                                                                                                                                                            |
| Default shortcut                                                                                                                                                                                                                                               |
| _None_                                                                                                                                                                                                                                                         |
| See also                                                                                                                                                                                                                                                       |
| [Macro_Rotate_View](/Macro_Rotate_View "Macro Rotate View")                                                                                                                                                                                                    |
|                                                                                                                                                                                                                                                                |
|                                                                                                                                                                                                                                                                |

## Description

This macro rotates the current view in ViewAxonometric (as is: Y).

You have two options:

- mode 1 : axonometric view with Y pointing upwards ![axonometric view with Y pointing upwards](/images/Macro_Rotate_View_with_Y_pointing_upwards_.png) mode 1
- mode 2 : axonometric view with Z pointing upwards ![axonometric view with Z pointing upwards](/images/Macro_Rotate_View_with_Z_pointing_upwards_.png) mode 2 (uncomment for use)

## Usage

For use the two macros, copy the first macro and name it "**Macro_Rotate_ViewAxonometric_Y**" (mode 1) without change the code and use this icon ![axonometric view with Y pointing upwards](/images/Macro_Rotate_View_with_Y_pointing_upwards_.png)

Copy the second macro and name it "**Macro_Rotate_ViewAxonometric_Z**" (mode 2) and:

comment the line

**11** _#rot.setValue(coin.SbVec3f(1,0,0),-math.pi/2) # Y pointing upwards (mode 1)_

and uncomment the line

**12** _rot.setValue(coin.SbVec3f(0,0,1),math.pi/2) # Z pointing upwards (mode 2 uncomment for use)_ and use this icon ![axonometric view with Z pointing upwards](/images/Macro_Rotate_View_with_Z_pointing_upwards_.png)

## Script

- mode 1 : ToolBar Icon ![](/images/Macro_Rotate_View_with_Y_pointing_upwards_.png)
- mode 2 : ToolBar Icon ![](/images/Macro_Rotate_View_with_Z_pointing_upwards_.png) (uncomment for use)

**Macro_Rotate_ViewAxonometric.FCMacro**

```
import math
import pivy
from pivy import coin

Gui.activeDocument().activeView().viewAxonometric()
Gui.SendMsgToActiveView("ViewFit")

cam = Gui.ActiveDocument.ActiveView.getCameraNode()
rot = coin.SbRotation()

rot.setValue(coin.SbVec3f(1,0,0),-math.pi/2) # Y pointing upwards (mode 1)
#rot.setValue(coin.SbVec3f(0,0,1),math.pi/2) # Z pointing upwards (mode 2 uncomment for use)
nrot = cam.orientation.getValue() * rot
cam.orientation = nrot
Gui.SendMsgToActiveView("ViewFit")
```

Retrieved from "<http://wiki.freecad.org/index.php?title=Macro_Rotate_ViewAxonometric/pl&oldid=1345960>"
