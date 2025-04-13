---
title: If Selected Stay If Not Then Delete
---

|                                                                                                                                                                                                                                                                                                                                                                                              |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Macro If Selected Stay If Not Then Delete                                                                                                                                                                                                                                                                                                                                                    |
| Description                                                                                                                                                                                                                                                                                                                                                                                  |
| This macro delete all objects not selected. Macro version: 00.03b Last modified: 2023-09-24 FreeCAD version: All Download: [ToolBar Icon](https://www.freecadweb.org/wiki/images/6/62/Macro_If_Selected_Stay_If_Not_Then_Delete.png) Author: Mario52                                                                                                                                         |
| Author                                                                                                                                                                                                                                                                                                                                                                                       |
| [Mario52](/User:Mario52 "User:Mario52")                                                                                                                                                                                                                                                                                                                                                      |
| Download                                                                                                                                                                                                                                                                                                                                                                                     |
| [ToolBar Icon](https://www.freecadweb.org/wiki/images/6/62/Macro_If_Selected_Stay_If_Not_Then_Delete.png)                                                                                                                                                                                                                                                                                    |
| Links                                                                                                                                                                                                                                                                                                                                                                                        |
| [Macros recipes](/Macros_recipes "Macros recipes") [How to install macros](/How_to_install_macros "How to install macros") [How to customize toolbars](/Customize_Toolbars "Customize Toolbars")                                                                                                                                                                                             |
| Macro Version                                                                                                                                                                                                                                                                                                                                                                                |
| 00.03b                                                                                                                                                                                                                                                                                                                                                                                       |
| Date last modified                                                                                                                                                                                                                                                                                                                                                                           |
| 2023-09-24                                                                                                                                                                                                                                                                                                                                                                                   |
| FreeCAD Version(s)                                                                                                                                                                                                                                                                                                                                                                           |
| All                                                                                                                                                                                                                                                                                                                                                                                          |
| Default shortcut                                                                                                                                                                                                                                                                                                                                                                             |
| _None_                                                                                                                                                                                                                                                                                                                                                                                       |
| See also                                                                                                                                                                                                                                                                                                                                                                                     |
| [Macro Toggle Visibility2 1-2](/Macro_Toggle_Visibility2_1-2 "Macro Toggle Visibility2 1-2") [Macro Toggle Visibility2 2-2](/Macro_Toggle_Visibility2_2-2 "Macro Toggle Visibility2 2-2") [Macro_Toggle_Visibility](/Macro_Toggle_Visibility "Macro Toggle Visibility") [Macro HiddenAlls](/Macro_HiddenAlls "Macro HiddenAlls") [Macro_VisibleAlls](/Macro_VisibleAlls "Macro VisibleAlls") |
|                                                                                                                                                                                                                                                                                                                                                                                              |
|                                                                                                                                                                                                                                                                                                                                                                                              |

## Description

This macro delete all objects not selected !!.

## Script

ToolBar Icon
![](/src/assets/images/Macro_If_Selected_Stay_If_Not_Then_Delete.png)

**Macro_If_Selected_Stay_If_Not_Then_Delete.FCMacro**

```
import FreeCAD
import Draft
# 16/06/2016, 21/02/2018, 22/09/2023, 24/09/2023
# Macro_SelectVisible series
__title__   = "Macro_If_Selected_Stay_If_Not_Then_Delete"
__author__  = "Mario52"
__url__     = "http://www.freecadweb.org/index-fr.html"
__version__ = "00.03b"
__date__    = "24/09/2023"

App = FreeCAD
try:
    for ShapeNameObj in FreeCAD.ActiveDocument.Objects:
        if str(ShapeNameObj) == "<group object>":
            if len(Draft.get_group_contents(ShapeNameObj)) == 0:
                App.ActiveDocument.removeObject(ShapeNameObj.Name)        # remove group not selecteds
        else:
            if Gui.Selection.isSelected(ShapeNameObj):
                None
            else:
                App.ActiveDocument.removeObject(ShapeNameObj.Name)        # remove objects not selecteds

    for ShapeNameGroup in FreeCAD.ActiveDocument.Objects:
        if (str(ShapeNameGroup) == "<group object>"):
            if len(Draft.get_group_contents(ShapeNameGroup)) == 0:
                App.ActiveDocument.removeObject(ShapeNameGroup.Name)      # remove group emptied
except Exception:
    None
```

Retrieved from "<http://wiki.freecad.org/index.php?title=Macro_If_Selected_Stay_If_Not_Then_Delete/en&oldid=1305239>"
