---
title: ExpandTreeItem
---

|                                                                                                                                                                                                                                                                                                                                                                                                               |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Macro ExpandTreeItem                                                                                                                                                                                                                                                                                                                                                                                          |
| Description                                                                                                                                                                                                                                                                                                                                                                                                   |
| Cette macro développe l'arborescence sélectionnée et toutes les sous-arborescences dans l'arborescence. S'il n'y a pas de sélection, toutes les arborescences sont développées. Version macro : 00.02 Date dernière modification : 2019-07-25 Version FreeCAD : Tous Téléchargement : [Icône de la barre d'outils](https://www.freecadweb.org/wiki/images/9/94/Macro_ExpandTreeItem.svg) Auteur: wmayer, UR\_ |
| Auteur                                                                                                                                                                                                                                                                                                                                                                                                        |
| [wmayer, UR\_](/index.php?title=User:Wmayer,_UR&action=edit&redlink=1 "User:Wmayer, UR (page does not exist)")                                                                                                                                                                                                                                                                                                |
| Téléchargement                                                                                                                                                                                                                                                                                                                                                                                                |
| [Icône de la barre d'outils](https://www.freecadweb.org/wiki/images/9/94/Macro_ExpandTreeItem.svg)                                                                                                                                                                                                                                                                                                            |
| Liens                                                                                                                                                                                                                                                                                                                                                                                                         |
| [Page des macros](/Macros_recipes/fr "Macros recipes/fr") [Comment installer une macro](/How_to_install_macros/fr "How to install macros/fr") [Comment créer une barre d'outils](/Customize_Toolbars/fr "Customize Toolbars/fr")                                                                                                                                                                              |
| Version Macro                                                                                                                                                                                                                                                                                                                                                                                                 |
| 00.02                                                                                                                                                                                                                                                                                                                                                                                                         |
| Dernière modification                                                                                                                                                                                                                                                                                                                                                                                         |
| 2019-07-25                                                                                                                                                                                                                                                                                                                                                                                                    |
| Version(s) FreeCAD                                                                                                                                                                                                                                                                                                                                                                                            |
| Tous                                                                                                                                                                                                                                                                                                                                                                                                          |
| Raccourci clavier                                                                                                                                                                                                                                                                                                                                                                                             |
| _None_                                                                                                                                                                                                                                                                                                                                                                                                        |
| Voir aussi                                                                                                                                                                                                                                                                                                                                                                                                    |
| _None_                                                                                                                                                                                                                                                                                                                                                                                                        |
|                                                                                                                                                                                                                                                                                                                                                                                                               |
|                                                                                                                                                                                                                                                                                                                                                                                                               |

## Description

Développe l'arborescence sélectionnée et toutes les sous-arborescences dans l'arborescence.

si l'arborescence sélectionnée est déjà déroulé, cette arborescence et tous les sous-arborescences sont réduites.

s'il n'y a pas de sélection, toutes les arborescences sont sont développées.

![](/images/Collapsed00.gif)

## Utilisation

Copier la macro dans votre répertoire de macros, créez votre barre d'outils avec le bouton et lancez la macro.

## Script

L'icone pour votre barre d'outils .PNG ![](/images/Macro_ExpandTreeItem.png) et .SVG ![](/images/Macro_ExpandTreeItem.svg)

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

## Lien

[Objektbaum mit einem Klick komplett aufklappen?](https://forum.freecadweb.org/viewtopic.php?f=13&t=29406)

Retrieved from "<http://wiki.freecad.org/index.php?title=Macro_ExpandTreeItem/fr&oldid=1083213>"
