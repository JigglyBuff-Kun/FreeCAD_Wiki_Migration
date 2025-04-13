---
title: ExpandTreeItem
---

|                                                                                                                                                                                                                                                                                                                                                             |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Macro ExpandTreeItem                                                                                                                                                                                                                                                                                                                                        |
| Descrizione                                                                                                                                                                                                                                                                                                                                                 |
| Questa macro espande l'albero selezionato e tutti i sottoalberi nella visualizzazione ad albero. Se non c'è alcuna selezione, tutti gli alberi vengono espansi. Versione macro: 00.02 Ultima modifica: 2019-07-25 Versione FreeCAD: All Download: [ToolBar Icon](https://www.freecadweb.org/wiki/images/9/94/Macro_ExpandTreeItem.svg) Autore: wmayer, UR\_ |
| Autore                                                                                                                                                                                                                                                                                                                                                      |
| [wmayer, UR\_](/index.php?title=User:Wmayer,_UR&action=edit&redlink=1 "User:Wmayer, UR (page does not exist)")                                                                                                                                                                                                                                              |
| Download                                                                                                                                                                                                                                                                                                                                                    |
| [ToolBar Icon](https://www.freecadweb.org/wiki/images/9/94/Macro_ExpandTreeItem.svg)                                                                                                                                                                                                                                                                        |
| Link                                                                                                                                                                                                                                                                                                                                                        |
| [Raccolta di macro](/Macros_recipes/it "Macros recipes/it") [Come installare le macro](/How_to_install_macros/it "How to install macros/it") [Personalizzare la toolbar](/Customize_Toolbars/it "Customize Toolbars/it")                                                                                                                                    |
| Versione macro                                                                                                                                                                                                                                                                                                                                              |
| 00.02                                                                                                                                                                                                                                                                                                                                                       |
| Data ultima modifica                                                                                                                                                                                                                                                                                                                                        |
| 2019-07-25                                                                                                                                                                                                                                                                                                                                                  |
| Versioni di FreeCAD                                                                                                                                                                                                                                                                                                                                         |
| All                                                                                                                                                                                                                                                                                                                                                         |
| Scorciatoia                                                                                                                                                                                                                                                                                                                                                 |
| _Nessuna_                                                                                                                                                                                                                                                                                                                                                   |
| Vedere anche                                                                                                                                                                                                                                                                                                                                                |
| _Nessuno_                                                                                                                                                                                                                                                                                                                                                   |
|                                                                                                                                                                                                                                                                                                                                                             |
|                                                                                                                                                                                                                                                                                                                                                             |

## Descrizione

Espande l'albero selezionato e tutti i sottoalberi nella vista ad albero.

se l'albero selezionato è già espanso, questo albero e tutti gli alberi secondari verranno compressi.

se non ci sono selezioni, tutti gli alberi vengono espansi.

![](/images/Collapsed00.gif)

## Utilizzo

Copiare la macro nella directory macro, creare la barra degli strumenti e avviare la macro.

## Script

Icona della barra degli strumenti .PNG ![](/images/Macro_ExpandTreeItem.png) e .SVG ![](/images/Macro_ExpandTreeItem.svg)

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

Retrieved from "<http://wiki.freecad.org/index.php?title=Macro_ExpandTreeItem/it&oldid=1358899>"
