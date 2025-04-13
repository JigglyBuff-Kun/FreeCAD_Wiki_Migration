---
title: Make Arc 3 Points
---

|                                                                                                                                                                                                                                                     |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Macro Make Arc 3 Points                                                                                                                                                                                                                             |
| Description                                                                                                                                                                                                                                         |
| Crée un arc sur 3 points sélectionnés. Version macro : 01.00 Date dernière modification : 2016-07-14 Version FreeCAD : All Téléchargement : [ToolBar Icon](https://www.freecadweb.org/wiki/images/9/92/Macro_Make_Arc_3_Points.png) Auteur: Mario52 |
| Auteur                                                                                                                                                                                                                                              |
| [Mario52](/User:Mario52 "User:Mario52")                                                                                                                                                                                                             |
| Téléchargement                                                                                                                                                                                                                                      |
| [ToolBar Icon](https://www.freecadweb.org/wiki/images/9/92/Macro_Make_Arc_3_Points.png)                                                                                                                                                             |
| Liens                                                                                                                                                                                                                                               |
| [Page des macros](/Macros_recipes/fr "Macros recipes/fr") [Comment installer une macro](/How_to_install_macros/fr "How to install macros/fr") [Comment créer une barre d'outils](/Customize_Toolbars/fr "Customize Toolbars/fr")                    |
| Version Macro                                                                                                                                                                                                                                       |
| 01.00                                                                                                                                                                                                                                               |
| Dernière modification                                                                                                                                                                                                                               |
| 2016-07-14                                                                                                                                                                                                                                          |
| Version(s) FreeCAD                                                                                                                                                                                                                                  |
| All                                                                                                                                                                                                                                                 |
| Raccourci clavier                                                                                                                                                                                                                                   |
| _None_                                                                                                                                                                                                                                              |
| Voir aussi                                                                                                                                                                                                                                          |
| _None_                                                                                                                                                                                                                                              |
|                                                                                                                                                                                                                                                     |
|                                                                                                                                                                                                                                                     |

## Description

Cette macro crée un arc sur 3 points sélectionnés.

## Utilisation

Lancez la macro, sélectionnez 3 points, un arc sera créé les coordonnées et la longueur de l'arc sont affichés dans la vue rapport.

(PS: il n'est pas obligé de tenir la touche Ctrl enfoncée)

## Script

L'icône pour votre barre d'outils ![](/images/Macro_Make_Arc_3_Points.png)

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

Retrieved from "<http://wiki.freecad.org/index.php?title=Macro_Make_Arc_3_Points/fr&oldid=693113>"
