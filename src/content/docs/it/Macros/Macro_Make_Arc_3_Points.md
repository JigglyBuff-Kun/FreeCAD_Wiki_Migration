---
title: Arco da 3 punti
---

|                                                                                                                                                                                                                                |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Arco da 3 punti                                                                                                                                                                                                                |
| Descrizione                                                                                                                                                                                                                    |
| Crea un arco da 3 punti selezionati. Versione macro: 01.00 Ultima modifica: 2016-07-14 Versione FreeCAD: All Download: [ToolBar Icon](https://www.freecadweb.org/wiki/images/9/92/Macro_Make_Arc_3_Points.png) Autore: Mario52 |
| Autore                                                                                                                                                                                                                         |
| [Mario52](/User:Mario52 "User:Mario52")                                                                                                                                                                                        |
| Download                                                                                                                                                                                                                       |
| [ToolBar Icon](https://www.freecadweb.org/wiki/images/9/92/Macro_Make_Arc_3_Points.png)                                                                                                                                        |
| Link                                                                                                                                                                                                                           |
| [Raccolta di macro](/Macros_recipes/it "Macros recipes/it") [Come installare le macro](/How_to_install_macros/it "How to install macros/it") [Personalizzare la toolbar](/Customize_Toolbars/it "Customize Toolbars/it")       |
| Versione macro                                                                                                                                                                                                                 |
| 01.00                                                                                                                                                                                                                          |
| Data ultima modifica                                                                                                                                                                                                           |
| 2016-07-14                                                                                                                                                                                                                     |
| Versioni di FreeCAD                                                                                                                                                                                                            |
| All                                                                                                                                                                                                                            |
| Scorciatoia                                                                                                                                                                                                                    |
| _Nessuna_                                                                                                                                                                                                                      |
| Vedere anche                                                                                                                                                                                                                   |
| _Nessuno_                                                                                                                                                                                                                      |
|                                                                                                                                                                                                                                |
|                                                                                                                                                                                                                                |

## Descrizione

Questa macro crea un arco da 3 punti selezionati

## Utilizzo

Avviare la macro, poi selezionare 3 punti. Viene creato uno arco. Le coordinate e la lunghezza dell'arco sono visualizzati nella vista rapporto.

Nota:non è necessario tenere premuto il tasto Ctrl

## Script

L'icona per la barra degli strumenti: ![](/images/Macro_Make_Arc_3_Points.png)

**Macro_Make_Arc_3_Points.FCMacro**

```
# -*- coding: utf-8 -*-
from FreeCAD import Base

__title__   = "Macro_Make_Arc_3_points"
__author__  = "Mario52"
__url__     = "http://www.freecadweb.org/index-fr.html"
__version__ = "00.02"
__date__    = "29/07/2019"

global selected; selected = []
App = FreeCAD

class SelObserver:
    print( "Create Arc to 3 points ...")
    def addSelection(self,doc,obj,sub,pnt):  # Selection
        global selected
        selected.append(pnt)
        if len(selected) == 1:
            print( "Point 1 : ",FreeCAD.Vector(selected[0]))
        elif len(selected) == 2:
            print( "Point 2 : ",FreeCAD.Vector(selected[1]))
        elif len(selected) == 3:
            print( "Point 3 : ",FreeCAD.Vector(selected[2]))
            try:
                C1 = Part.Arc(FreeCAD.Vector(selected[0]),FreeCAD.Vector(selected[1]),FreeCAD.Vector(selected[2]))
                S1 = Part.Shape([C1])
                W = Part.Wire(S1.Edges)
                Part.show(W)
                App.ActiveDocument.ActiveObject.Label   = "Arc_3_Points"
                print( "Length  : ",W.Length)
            except Exception:
                print( "Three points are collinear or bad selection")
            del selected[:]
            FreeCADGui.Selection.removeObserver(s)
            print( "End Make_Arc_3_Points")
            print( "_____________________")

s=SelObserver()
FreeCADGui.Selection.addObserver(s)
```

Retrieved from "<http://wiki.freecad.org/index.php?title=Macro_Make_Arc_3_Points/it&oldid=1186682>"
