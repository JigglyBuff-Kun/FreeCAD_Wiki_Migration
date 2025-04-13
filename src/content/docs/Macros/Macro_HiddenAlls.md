---
title: HiddenAlls
---

|                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Macro HiddenAlls                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| Description                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| This macro hidden all objects in the document (Visibility False). Macro version: 00.01 Last modified: 2015-11-12 FreeCAD version: All Download: [ToolBar Icon](https://www.freecadweb.org/wiki/images/d/d6/Macro_HiddenAlls.png) Author: Mario52                                                                                                                                                                                                                        |
| Author                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| [Mario52](/User:Mario52 "User:Mario52")                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| Download                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| [ToolBar Icon](https://www.freecadweb.org/wiki/images/d/d6/Macro_HiddenAlls.png)                                                                                                                                                                                                                                                                                                                                                                                        |
| Links                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| [Macros recipes](/Macros_recipes "Macros recipes") [How to install macros](/How_to_install_macros "How to install macros") [How to customize toolbars](/Customize_Toolbars "Customize Toolbars")                                                                                                                                                                                                                                                                        |
| Macro Version                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| 00.01                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| Date last modified                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| 2015-11-12                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| FreeCAD Version(s)                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| All                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| Default shortcut                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| _None_                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| See also                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| [Macro Toggle Visibility2 1-2](/Macro_Toggle_Visibility2_1-2 "Macro Toggle Visibility2 1-2") [Macro Toggle Visibility2 2-2](/Macro_Toggle_Visibility2_2-2 "Macro Toggle Visibility2 2-2") [Macro_Toggle_Visibility](/Macro_Toggle_Visibility "Macro Toggle Visibility") [Macro VisibleAlls](/Macro_VisibleAlls "Macro VisibleAlls") [Macro If Selected Stay If Not Then Delete](/Macro_If_Selected_Stay_If_Not_Then_Delete "Macro If Selected Stay If Not Then Delete") |
|                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
|                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |

## Description

This macro hidden all objects in the document (Visibility False).

## Script

ToolBar Icon
![](/src/assets/images/Macro_HiddenAlls.png)

**Macro_HidenAlls.FCMacro**

```
import FreeCAD
#Macro_HideAllObjects
__title__="Macro_HideAlls"
__author__ = "Mario52"
__url__     = "http://www.freecadweb.org/index-fr.html"
__version__ = "00.00"
__date__    = "11/11/2015"

try:
    for ShapeNameObj in FreeCAD.ActiveDocument.Objects:   # hidden alls objects
        #print ShapeNameObj.Name
        FreeCADGui.ActiveDocument.getObject(ShapeNameObj.Name).Visibility = False
except Exception:
    None
```

Retrieved from "<http://wiki.freecad.org/index.php?title=Macro_HiddenAlls/en&oldid=1086170>"
