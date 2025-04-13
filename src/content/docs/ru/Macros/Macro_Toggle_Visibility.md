---
title: Toggle Visibility/ru
---

|                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Toggle Visibility                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| Toggling Hidden/Display all objects not selected. objects that are selected in a document are made visible while objects that are not selected are made invisible. if no objects are selected then all objects are hidden. if all objects are selected then all objects are made visible. Macro version: 00.02 Last modified: 2015-11-12 FreeCAD version: All Download: [ToolBar Icon](https://www.freecadweb.org/wiki/images/4/42/Macro_SelectVisible.png) Author: Mario52 |
| Author                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| [Mario52](/User:Mario52 "User:Mario52")                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| Download                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| [ToolBar Icon](https://www.freecadweb.org/wiki/images/4/42/Macro_SelectVisible.png)                                                                                                                                                                                                                                                                                                                                                                                         |
| Links                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| [Macros recipes](/Macros_recipes "Macros recipes") [How to install macros](/How_to_install_macros "How to install macros") [How to customize toolbars](/Customize_Toolbars "Customize Toolbars")                                                                                                                                                                                                                                                                            |
| Macro Version                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| 00.02                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| Date last modified                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| 2015-11-12                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| FreeCAD Version(s)                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| All                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| Default shortcut                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| _None_                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| See also                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| [Macro Toggle Visibility2 1-2](/Macro_Toggle_Visibility2_1-2 "Macro Toggle Visibility2 1-2") [Macro Toggle Visibility2 2-2](/Macro_Toggle_Visibility2_2-2 "Macro Toggle Visibility2 2-2") [Macro VisibleAlls](/Macro_VisibleAlls "Macro VisibleAlls") [Macro HiddenAlls](/Macro_HiddenAlls "Macro HiddenAlls") [Macro If Selected Stay If Not Then Delete](/Macro_If_Selected_Stay_If_Not_Then_Delete "Macro If Selected Stay If Not Then Delete")                          |
|                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
|                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |

## Description

Objects that are selected in a document are made visible while objects that are not selected are made invisible.

- if no objects are selected then all objects are hidden
- if all objects are selected then all objects are made visible

## How To Use

Copy the macro and the icon in your folder macros and run (see [How to install macros](/How_to_install_macros "How to install macros"))

## Toggle Visibility

Using the selection of objects in the one of the FreeCAD views, this macro makes all selected objects visible and hides all objects which are not selected.

If no object(s) are selected then all objects are hidden.

If all objects are hidden and there is no selection in ComboView then all object are made visible.

This version new version (00.02) include the tree macro in one.

## Скрипт

The macro icon ![](/images/Macro_SelectVisible.png)

**Macro_ToggleSelectedObjectVisibility.FCMacro**

```
import FreeCAD
# Macro_ToggleSelectedObjectVisibility
__title__="Macro_ToggleSelectedObjectVisibility"
__author__ = "Mario52"
__url__     = "http://www.freecadweb.org/index-fr.html"
__version__ = "00.02"
__date__    = "12/11/2015"

try:
    compt = 0
    for ShapeNameObj in FreeCAD.ActiveDocument.Objects:                                   # list alls objet for test if alls hidden
        if (FreeCADGui.ActiveDocument.getObject(ShapeNameObj.Name).Visibility == False) and (Gui.Selection.isSelected(ShapeNameObj) == False):
            compt += 1                                                                    # if hidden : compt += 1
            #print "False : ",ShapeNameObj.Name
    if compt == len(FreeCAD.ActiveDocument.Objects):                                      # if (compt = Alls objects hidden) then Visibility = True
        for ShapeNameObj in FreeCAD.ActiveDocument.Objects:
            FreeCADGui.ActiveDocument.getObject(ShapeNameObj.Name).Visibility = True      # Visibility = True
            #print "True  : ",ShapeNameObj.Name
        compt = 0
    else :
        for ShapeNameObj in FreeCAD.ActiveDocument.Objects:                               # hidde objects not selecteds
            if Gui.Selection.isSelected(ShapeNameObj) == False:
                FreeCADGui.ActiveDocument.getObject(ShapeNameObj.Name).Visibility = False # if objects is not selected then Visibility = False (Hidden)
                #print "False : ",ShapeNameObj.Name
            else:
                FreeCADGui.ActiveDocument.getObject(ShapeNameObj.Name).Visibility = True  # if objects are hidden and selected then Visibility = True and hidden alls objects visibles
                #print "True  : ",ShapeNameObj.Name
except Exception:
    None
```

## Link

The discussion on the forum [Proposal: select one or more pieces, hide the others.](http://forum.freecadweb.org/viewtopic.php?f=8&t=13152)

## Version

ver 00.02 12/11/2015 **macro Macro_SelectVisible** : hidden the objects not selected, if not object selected displayed all objects, hidden all objects. This version include the tree macro in one

Retrieved from "<http://wiki.freecad.org/index.php?title=Macro_Toggle_Visibility/ru&oldid=1077034>"
