---
title: Visibilità oggetti 2 1-2
---

|                                                                                                                                                                                                                                                                                             |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Commuta visibilità                                                                                                                                                                                                                                                                          |
| Descrizione                                                                                                                                                                                                                                                                                 |
| Questa macro lavora con **Macro Toggle Visibility2 2-2** Nasconde tutti gli oggetti selezionati. Versione macro: 00.02b Ultima modifica: 2017-07-27 Versione FreeCAD: All Download: [ToolBar Icon](https://www.freecadweb.org/wiki/images/d/d7/Macro_SelectVisible2.png) Autore: openfablab |
| Autore                                                                                                                                                                                                                                                                                      |
| [openfablab](/index.php?title=User:Openfablab&action=edit&redlink=1 "User:Openfablab (page does not exist)")                                                                                                                                                                                |
| Download                                                                                                                                                                                                                                                                                    |
| [ToolBar Icon](https://www.freecadweb.org/wiki/images/d/d7/Macro_SelectVisible2.png)                                                                                                                                                                                                        |
| Link                                                                                                                                                                                                                                                                                        |
| [Raccolta di macro](/Macros_recipes/it "Macros recipes/it") [Come installare le macro](/How_to_install_macros/it "How to install macros/it") [Personalizzare la toolbar](/Customize_Toolbars/it "Customize Toolbars/it")                                                                    |
| Versione macro                                                                                                                                                                                                                                                                              |
| 00.02b                                                                                                                                                                                                                                                                                      |
| Data ultima modifica                                                                                                                                                                                                                                                                        |
| 2017-07-27                                                                                                                                                                                                                                                                                  |
| Versioni di FreeCAD                                                                                                                                                                                                                                                                         |
| All                                                                                                                                                                                                                                                                                         |
| Scorciatoia                                                                                                                                                                                                                                                                                 |
| _Nessuna_                                                                                                                                                                                                                                                                                   |
| Vedere anche                                                                                                                                                                                                                                                                                |
| [Macro Toggle Visibility2 2-2](/Macro_Toggle_Visibility2_2-2/it "Macro Toggle Visibility2 2-2/it") [Macro_Toggle_Visibility](/Macro_Toggle_Visibility/it "Macro Toggle Visibility/it")                                                                                                      |
|                                                                                                                                                                                                                                                                                             |
|                                                                                                                                                                                                                                                                                             |

## Descrizione

Questa macro lavora con [Macro Toggle Visibility2 2-2](/Macro_Toggle_Visibility2_2-2/it "Macro Toggle Visibility2 2-2/it")

Questo è un insieme di tre macro correlate che servono per gestire la visibilità degli oggetti nella scheda Modello:

1. gli oggetti selezionati in un documento sono resi visibili, mentre gli oggetti che non sono stati selezionati vengono resi invisibili
   - se non ci sono oggetti selezionati allora tutti gli oggetti sono nascosti
   - se vengono selezionati tutti gli oggetti allora tutti gli oggetti vengono resi visibili
2. rende visibili tutti gli oggetti

## Uso

Copiare le macro e le icone nella cartella delle macro ed eseguirle (vedere [Come installare le macro](/How_to_install_macros/it "How to install macros/it"))

## ToggleVisibility

Selezionare gli oggetti in una delle viste di FreeCAD. Questa macro rende visibili tutti gli oggetti selezionati e nasconde tutti gli oggetti non selezionati.

Se non ci sono oggetti selezionati tutti gli oggetti vengono nascosti

Se tutti gli oggetti sono nascosti e nella Vista Combinata non ci sono oggetti selezionati, rende visibili tutti gli oggetti

## Script 1

ToolBar Icon ![](/images/Macro_SelectVisible2.png)

**Macro_Toggle_Visibility2_1-2.FCMacro**

```
import FreeCAD
# "Macro_Toggle_Visibility2_1-2" associate with "Macro_Toggle_Visibility2_2-2"
__title__="Macro_Toggle_Visibility2_1-2"
__author__ = "openfablab"
__url__     = "http://www.freecadweb.org/index-fr.html"
__version__ = "00.02b"
__date__    = "27/07/2017"
FreeCAD.actual=[]
try:
    compt = 0
    for ShapeNameObj in FreeCAD.ActiveDocument.Objects:                                   # list alls objet for test if alls hidden
        if (FreeCADGui.ActiveDocument.getObject(ShapeNameObj.Name).Visibility == False) and (Gui.Selection.isSelected(ShapeNameObj) == False):
            compt += 1                                                                    # if hidden : compt += 1
            #print "False : ",ShapeNameObj.Name
        elif Gui.Selection.isSelected(ShapeNameObj) == False:
            FreeCAD.actual.append(ShapeNameObj.Name)
            #print "Actual : ",ShapeNameObj.Name
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

## Script 2

ToolBar ![](/images/Macro_VisibleAlls2.png)

Seconda macro [Macro Toggle Visibility2 2-2](/Macro_Toggle_Visibility2_2-2/it "Macro Toggle Visibility2 2-2/it")

## Link

La discussione sul forum [Re: Proposal: select one or more pieces, hide the others.](https://forum.freecadweb.org/viewtopic.php?f=8&t=13152&start=10#p184056)

Idea originale [Macro_Toggle_Visibility](https://www.freecadweb.org/wiki/index.php?title=Macro_Toggle_Visibility)

Retrieved from "<http://wiki.freecad.org/index.php?title=Macro_Toggle_Visibility2_1-2/it&oldid=692577>"
