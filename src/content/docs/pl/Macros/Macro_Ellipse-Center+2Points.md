---
title: Makrodefinicja Elipsa przez środek i dwa punkty
---

|                                                                                                                                                                                                                                                                                                     |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Macro Ellipse-Center+2Points                                                                                                                                                                                                                                                                        |
| Description                                                                                                                                                                                                                                                                                         |
| Makes an ellipse by selecting three points (in this order): centre, major radius and minor radius Macro version: 02.00 Last modified: 2019-07-29 FreeCAD version: All Download: [ToolBar Icon](https://www.freecadweb.org/wiki/images/6/66/Macro_Ellipse-Center%2B2Points.png) Author: Eriossoltero |
| Author                                                                                                                                                                                                                                                                                              |
| [Eriossoltero](/User:Eriossoltero "User:Eriossoltero")                                                                                                                                                                                                                                              |
| Download                                                                                                                                                                                                                                                                                            |
| [ToolBar Icon](https://www.freecadweb.org/wiki/images/6/66/Macro_Ellipse-Center%2B2Points.png)                                                                                                                                                                                                      |
| Links                                                                                                                                                                                                                                                                                               |
| [Macros recipes](/Macros_recipes "Macros recipes") [How to install macros](/How_to_install_macros "How to install macros") [How to customize toolbars](/Customize_Toolbars "Customize Toolbars")                                                                                                    |
| Macro Version                                                                                                                                                                                                                                                                                       |
| 02.00                                                                                                                                                                                                                                                                                               |
| Date last modified                                                                                                                                                                                                                                                                                  |
| 2019-07-29                                                                                                                                                                                                                                                                                          |
| FreeCAD Version(s)                                                                                                                                                                                                                                                                                  |
| All                                                                                                                                                                                                                                                                                                 |
| Default shortcut                                                                                                                                                                                                                                                                                    |
| _None_                                                                                                                                                                                                                                                                                              |
| See also                                                                                                                                                                                                                                                                                            |
| _None_                                                                                                                                                                                                                                                                                              |
|                                                                                                                                                                                                                                                                                                     |
|                                                                                                                                                                                                                                                                                                     |

## Description

Makes an ellipse by selecting three points (in this order): centre, major radius and minor radius

![](/images/EllipseCenter2Point.png)

## Latest

The latest version of the macro is to be found at [EllipseCenter2Points.FCMacro](https://github.com/FreeCAD/FreeCAD-macros/blob/master/ObjectCreation/EllipseCenter2Points.FCMacro) but the easiest way to install this macro is through the [Addon Manager](/Std_AddonMgr "Std AddonMgr").

## Script

ToolBar Icon ![](/images/Macro_Ellipse-Center%2B2Points.png)

**Macro_EllipseCenter2Points.FCMacro**

```
# Macro Begin: Ellipse-Center+2Points.FCMacro +++++++++++++++++++++++++++++++++++++++++++++++++
# http://freecad-tutorial.blogspot.com/2011/12/engine-9-poly-v-belt.html
# https://www.freecadweb.org/wiki/User:Eriossoltero
# 13/03/2012, 29/07/2019
import Part, FreeCAD, math, PartGui, FreeCADGui
from FreeCAD import Base

# get the selected objects, with first selection for the trajectory and second for the section
# Adapted from:
# Macro Begin: Ellipse-Center+2Points.FCMacro +++++++++++++++++++++++++++++++++++++++++++++++++
# http://freecad-tutorial.blogspot.com/2011/12/engine-9-poly-v-belt.html
import Part, FreeCAD, math, PartGui, FreeCADGui
from FreeCAD import Base

# get the selected objects, with first selection for the trajectory and second for the section
# Adapted from:
# http://freecad-tutorial.blogspot.com/2011/12/engine-9-poly-v-belt.html
s = FreeCADGui.Selection.getSelection()
try:
    sel1=s[0].Shape
    sel2=s[1].Shape
    sel3=s[2].Shape
    pt_center = sel1.Point
    pt_radmay = sel2.Point
    pt_radmen = sel3.Point

    # create Part object in the current document
    myObject=App.ActiveDocument.addObject("Part::Feature","Ellipse")

    # create a shape and assign it to the current document
    ellipse = Part.Ellipse(pt_radmay, pt_radmen, pt_center)
    myObject.Shape = ellipse.toShape()
    # Macro End: Ellipse-Center+2Points.FCMacro +++++++++++++++++++++++++++++++++++++++++++++++++

except:
    print( "Wrong selection")
    print( "First:centre, Second:major radius and Third:minor radius")
```

Retrieved from "<http://wiki.freecad.org/index.php?title=Macro_Ellipse-Center%2B2Points/pl&oldid=1079551>"
