---
title: Visibilità oggetti
---

|                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Visibilità oggetti                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| Descrizione                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| Nasconde gli oggetti non selezionati e piu. Versione macro: 00.02 Ultima modifica: 2015-11-12 Versione FreeCAD: All Download: [ToolBar Icon](https://www.freecadweb.org/wiki/images/4/42/Macro_SelectVisible.png) Autore: Mario52                                                                                                                                                                                                                                                |
| Autore                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| [Mario52](/User:Mario52 "User:Mario52")                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| Download                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| [ToolBar Icon](https://www.freecadweb.org/wiki/images/4/42/Macro_SelectVisible.png)                                                                                                                                                                                                                                                                                                                                                                                              |
| Link                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| [Raccolta di macro](/Macros_recipes/it "Macros recipes/it") [Come installare le macro](/How_to_install_macros/it "How to install macros/it") [Personalizzare la toolbar](/Customize_Toolbars/it "Customize Toolbars/it")                                                                                                                                                                                                                                                         |
| Versione macro                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| 00.02                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| Data ultima modifica                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| 2015-11-12                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| Versioni di FreeCAD                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| All                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| Scorciatoia                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| _Nessuna_                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| Vedere anche                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| [Macro Toggle Visibility2 1-2](/Macro_Toggle_Visibility2_1-2/it "Macro Toggle Visibility2 1-2/it") [Macro Toggle Visibility2 2-2](/Macro_Toggle_Visibility2_2-2/it "Macro Toggle Visibility2 2-2/it") [Macro VisibleAlls](/Macro_VisibleAlls/it "Macro VisibleAlls/it") [Macro HiddenAlls](/Macro_HiddenAlls/it "Macro HiddenAlls/it") [Macro If Selected Stay If Not Then Delete](/Macro_If_Selected_Stay_If_Not_Then_Delete/it "Macro If Selected Stay If Not Then Delete/it") |
|                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
|                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |

## Descrizione

Questo è un insieme di tre macro correlate che servono per gestire la visibilità degli oggetti nella scheda Modello:

1. gli oggetti selezionati in un documento sono resi visibili, mentre gli oggetti che non sono stati selezionati vengono resi invisibili
   - se non ci sono oggetti selezionati allora tutti gli oggetti sono nascosti
   - se vengono selezionati tutti gli oggetti allora tutti gli oggetti vengono resi visibili

Objects that are selected in a document are made visible while objects that are not selected are made invisible.

- if no objects are selected then all objects are hidden
- if all objects are selected then all objects are made visible

## Uso

Copiare la macro e l'icona nella cartella delle macro ed eseguirle (vedere [Come installare le macro](/How_to_install_macros/it "How to install macros/it"))

Copy the macro and the icon in your folder macros and run (see [How to install macros](/How_to_install_macros "How to install macros"))

## ToggleVisibility

Selezionare gli oggetti in una delle viste di FreeCAD. Questa macro rende visibili tutti gli oggetti selezionati e nasconde tutti gli oggetti non selezionati.

Using the selection of objects in the one of the FreeCAD views, this macro makes all selected objects visible and hides all objects which are not selected.

Se non ci sono oggetti selezionati tutti gli oggetti vengono nascosti

Se tutti gli oggetti sono nascosti e nella Vista Combinata non ci sono oggetti selezionati, rende visibili tutti gli oggetti

La nuova versione (00.02) comprende le tre macro in una

## Script

L'icona per la vostra toolBar ![](/images/Macro_SelectVisible.png)

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

La discussione nel forum [Proposal: select one or more pieces, hide the others.](http://forum.freecadweb.org/viewtopic.php?f=8&t=13152)

The discussion on the forum [Proposal: select one or more pieces, hide the others.](http://forum.freecadweb.org/viewtopic.php?f=8&t=13152)

## Version

ver 00.02 12/11/2015 **macro Macro_SelectVisible** : hidden the objects not selected, if not object selected displayed all objects, hidden all objects. This version include the tree macro in one

ver 00.02 12/11/2015 **macro Macro_SelectVisible** : hidden the objects not selected, if not object selected displayed all objects, hidden all objects. This version include the tree macro in one

Retrieved from "<http://wiki.freecad.org/index.php?title=Macro_Toggle_Visibility/it&oldid=1075975>"
