---
title: Makrodefinicja ExpandTreeItem
---

|                                                                                                                                                                                                                                                                                                                |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Macro ExpandTreeItem                                                                                                                                                                                                                                                                                           |
| Description                                                                                                                                                                                                                                                                                                    |
| This macro expands selected tree and all sub trees in the tree view. If there is no selection, all trees are expanded. Macro version: 00.02 Last modified: 2019-07-25 FreeCAD version: All Download: [ToolBar Icon](https://www.freecadweb.org/wiki/images/9/94/Macro_ExpandTreeItem.svg) Author: wmayer, UR\_ |
| Author                                                                                                                                                                                                                                                                                                         |
| [wmayer, UR\_](/index.php?title=User:Wmayer,_UR&action=edit&redlink=1 "User:Wmayer, UR (page does not exist)")                                                                                                                                                                                                 |
| Download                                                                                                                                                                                                                                                                                                       |
| [ToolBar Icon](https://www.freecadweb.org/wiki/images/9/94/Macro_ExpandTreeItem.svg)                                                                                                                                                                                                                           |
| Links                                                                                                                                                                                                                                                                                                          |
| [Macros recipes](/Macros_recipes "Macros recipes") [How to install macros](/How_to_install_macros "How to install macros") [How to customize toolbars](/Customize_Toolbars "Customize Toolbars")                                                                                                               |
| Macro Version                                                                                                                                                                                                                                                                                                  |
| 00.02                                                                                                                                                                                                                                                                                                          |
| Date last modified                                                                                                                                                                                                                                                                                             |
| 2019-07-25                                                                                                                                                                                                                                                                                                     |
| FreeCAD Version(s)                                                                                                                                                                                                                                                                                             |
| All                                                                                                                                                                                                                                                                                                            |
| Default shortcut                                                                                                                                                                                                                                                                                               |
| _None_                                                                                                                                                                                                                                                                                                         |
| See also                                                                                                                                                                                                                                                                                                       |
| _None_                                                                                                                                                                                                                                                                                                         |
|                                                                                                                                                                                                                                                                                                                |
|                                                                                                                                                                                                                                                                                                                |

## Description

Expands selected tree and all sub trees in the tree view.

if selected tree is already expanded, this tree and all sub trees are collapsed.

if there is no selection, all trees are expanded.

![](/images/Collapsed00.gif)

## Usage

Copy the macro in your macro directory, create your tool bar and launch.

## Script

ToolBar Icon .PNG ![](/images/Macro_ExpandTreeItem.png) and the .SVG ![](/images/Macro_ExpandTreeItem.svg)

**Macro_ExpandTreeItem.FCMacro**

```
# -*- coding: utf-8 -*-
#
# Expands selected tree and all sub trees in the tree view.
# if selected tree is already expanded this tree and all sub trees are collapsed True/False
# if there is no selection all trees are expanded
#
__Title__    = "Macro ExpandTreeItem"
__Author__   = "wmayer, UR_"
__Version__  = "00.02"
__Date__     = "2019-07-25"

import PySide
from PySide import QtGui ,QtCore
from PySide.QtGui import *
from PySide.QtCore import *

def toggleAll(tree, item, collapse):
    if collapse == False:
        tree.expandItem(item)
    elif collapse == True:
        tree.collapseItem(item)

    for i in range(item.childCount()):
        toggleAll(tree, item.child(i), collapse)

mw = Gui.getMainWindow()
trees = mw.findChildren(QtGui.QTreeWidget)

for tree in trees:
    items = tree.selectedItems()

    try:
        if items == []:
            #tree.selectAll()                          # select all object
            for obj in FreeCAD.ActiveDocument.Objects: # select obj.OutList
                if len(obj.OutList) != 0:
                    Gui.Selection.addSelection(obj)
                    items = tree.selectedItems()
            for item in items:
                toggleAll(tree, item, False)
    except Exception:
        None

    for item in items:
            if item.isExpanded() == True:
                toggleAll(tree, item, True)
        #            print ("collapsing")
            else:
                toggleAll(tree, item, False)
        #            print ("expanding")
```

## Link

[Objektbaum mit einem Klick komplett aufklappen?](https://forum.freecadweb.org/viewtopic.php?f=13&t=29406)

Retrieved from "<http://wiki.freecad.org/index.php?title=Macro_ExpandTreeItem/pl&oldid=1155863>"
