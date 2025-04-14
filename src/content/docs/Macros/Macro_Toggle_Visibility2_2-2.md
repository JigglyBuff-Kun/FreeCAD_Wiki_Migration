---
title: Toggle Visibility2 2-2
---

|                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Macro Toggle Visibility2 2-2                                                                                                                                                                                                                                                                                                                                                                                                                          |
| Description                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| This macro must be used with **Macro_Toggle_Visibility2_1-2** This macro makes all objects visible respecting the original visible and hidden objects after use the [Macro Toggle Visibility2 1-2](/Macro_Toggle_Visibility2_1-2 "Macro Toggle Visibility2 1-2") Macro version: 00.02b Last modified: 2017-07-27 FreeCAD version: All Download: [ToolBar Icon](https://www.freecadweb.org/wiki/images/e/ec/Macro_VisibleAlls2.png) Author: openfablab |
| Author                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| [openfablab](/index.php?title=User:Openfablab&action=edit&redlink=1 "User:Openfablab (page does not exist)")                                                                                                                                                                                                                                                                                                                                          |
| Download                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| [ToolBar Icon](https://www.freecadweb.org/wiki/images/e/ec/Macro_VisibleAlls2.png)                                                                                                                                                                                                                                                                                                                                                                    |
| Links                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| [Macros recipes](/Macros_recipes "Macros recipes") [How to install macros](/How_to_install_macros "How to install macros") [How to customize toolbars](/Customize_Toolbars "Customize Toolbars")                                                                                                                                                                                                                                                      |
| Macro Version                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| 00.02b                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| Date last modified                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| 2017-07-27                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| FreeCAD Version(s)                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| All                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| Default shortcut                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| _None_                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| See also                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| [Macro Toggle Visibility2 1-2](/Macro_Toggle_Visibility2_1-2 "Macro Toggle Visibility2 1-2") [Macro Toggle Visibility](/Macro_Toggle_Visibility "Macro Toggle Visibility")                                                                                                                                                                                                                                                                            |
|                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
|                                                                                                                                                                                                                                                                                                                                                                                                                                                       |

## Description

This macro must be used with **[Macro Toggle Visibility2 1-2](/Macro_Toggle_Visibility2_1-2 "Macro Toggle Visibility2 1-2")**

This macro makes all objects visible respecting the original visible and hidden objects after use the [Macro Toggle Visibility2 1-2](/Macro_Toggle_Visibility2_1-2 "Macro Toggle Visibility2 1-2")

## How To Use

Copy the macros and the icons in your folder macros and run (see [How to install macros](/How_to_install_macros "How to install macros"))

## Script

This macro makes all objects visible respecting the original visible and hidden objects after use the [Macro_Toggle_Visibility2_1-2](/Macro_Toggle_Visibility2_1-2 "Macro Toggle Visibility2 1-2") macro.

ToolBar Icon ![](/images/Macro_VisibleAlls2.png)

**Macro_DisplayAllObjects2_2-2.FCMacro**

```
import FreeCAD
#original name "Macro_VisibleAlls" pratical name "Macro_Toggle_Visibility2_2-2" "Macro_Toggle_Visibility2_1-2" associate with "Macro_Toggle_Visibility2_2-2"
__title__="Macro_DisplayAllObjects2_2-2"
__author__ = "openfablab"
__url__     = "http://www.freecadweb.org/index-fr.html"
__version__ = "00.00b"
__date__    = "27/07/2017"

try:
    for ShapeNameObj in FreeCAD.actual:   # displyed alls objects
        #print ShapeNameObj
        FreeCADGui.ActiveDocument.getObject(ShapeNameObj).Visibility = True
except Exception:
    None
```

Retrieved from "<http://wiki.freecad.org/index.php?title=Macro_Toggle_Visibility2_2-2/en&oldid=692580>"
