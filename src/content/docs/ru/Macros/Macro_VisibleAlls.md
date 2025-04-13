---
title: Макрос "VisibleAlls"
---
|  |
| --- |
| Macro VisibleAlls |
| Description |
| This macro display all objects in the document (Visibility True).  Macro version: 00.01 Last modified: 2015-11-12 FreeCAD version: All Download: [ToolBar Icon](https://www.freecadweb.org/wiki/images/1/19/Macro_VisibleAlls.png) Author: Mario52 |
| Author |
| [Mario52](/User:Mario52 "User:Mario52") |
| Download |
| [ToolBar Icon](https://www.freecadweb.org/wiki/images/1/19/Macro_VisibleAlls.png) |
| Links |
| [Macros recipes](/Macros_recipes "Macros recipes") [How to install macros](/How_to_install_macros "How to install macros") [How to customize toolbars](/Customize_Toolbars "Customize Toolbars") |
| Macro Version |
| 00.01 |
| Date last modified |
| 2015-11-12 |
| FreeCAD Version(s) |
| All |
| Default shortcut |
| *None* |
| See also |
| [Macro Toggle Visibility2 1-2](/Macro_Toggle_Visibility2_1-2 "Macro Toggle Visibility2 1-2") [Macro Toggle Visibility2 2-2](/Macro_Toggle_Visibility2_2-2 "Macro Toggle Visibility2 2-2") [Macro\_Toggle\_Visibility](/Macro_Toggle_Visibility "Macro Toggle Visibility") [Macro\_HiddenAlls](/Macro_HiddenAlls "Macro HiddenAlls") [Macro If Selected Stay If Not Then Delete](/Macro_If_Selected_Stay_If_Not_Then_Delete "Macro If Selected Stay If Not Then Delete") |
|  |
|  |

## Описание

Данный макрос делает видимыми все объекты в активном документе (Устанавливает параметр Visibility каждого объекта равным True).

## Скрипт

ToolBar Icon
![](/images/Macro_VisibleAlls.png)

**Macro\_VisibleAlls.FCMacro**

```
import FreeCAD
#Macro_VisibleAlls
__title__="Macro_DisplayAllObjects"
__author__ = "Mario52"
__url__     = "http://www.freecadweb.org/index-fr.html"
__version__ = "00.00"
__date__    = "11/11/2015"

try:
    for ShapeNameObj in FreeCAD.ActiveDocument.Objects:   # displyed alls objects
        #print ShapeNameObj.Name
        FreeCADGui.ActiveDocument.getObject(ShapeNameObj.Name).Visibility = True
except Exception:
    None
```

Retrieved from "<http://wiki.freecad.org/index.php?title=Macro_VisibleAlls/ru&oldid=1086221>"