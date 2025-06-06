---
title: Print SceneGraph
---

|                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Macro_Print_SceneGraph                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| Cette macro parcourt le SceneGraph et imprime tous les nœuds et leurs champs dans la fenêtre Report View. Elle peut être utilisée à titre d'information ou vous pouvez ajouter du code pour modifier certaines parties de la SceneGraph ou imprimer plus de détails pour des types de nœuds particuliers. Version macro : 00.03 Date dernière modification : 2017-10-24 Version FreeCAD : 0.16.6703 Téléchargement : [Icône de la barre d'outils](https://wiki.freecad.org/images/0/0b/Macro_Print_SceneGraph.png) Auteur: Aleph0 |
| Auteur                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| [Aleph0](/index.php?title=User:Aleph0&action=edit&redlink=1 "User:Aleph0 (page does not exist)")                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| Téléchargement                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| [Icône de la barre d'outils](https://wiki.freecad.org/images/0/0b/Macro_Print_SceneGraph.png)                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| Liens                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| [Page des macros](/Macros_recipes/fr "Macros recipes/fr") [Comment installer une macro](/How_to_install_macros/fr "How to install macros/fr") [Comment créer une barre d'outils](/Customize_Toolbars/fr "Customize Toolbars/fr")                                                                                                                                                                                                                                                                                                  |
| Version Macro                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| 00.03                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| Dernière modification                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| 2017-10-24                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| Version(s) FreeCAD                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| 0.16.6703                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| Raccourci clavier                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| _None_                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| Voir aussi                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| _None_                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
|                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
|                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |

## Description

Cette macro parcourt la vue3D et imprime tous les nœuds et leurs champs dans la fenêtre Report View. Il peut être utilisé uniquement à titre d'information ou vous pouvez ajouter du code pour modifier des parties du SceneGraph d'une manière ou imprimer plus de détails pour des types particuliers de nœud.

## Script

Icône de la barre d'outils
![](/images/Macro_Print_SceneGraph.png)

**Macro_Print_SceneGraph.FCMacro**

```
# -*- coding: utf-8 -*-
"""
***************************************************************************
*                                                                         *
*   This macro traverses the SceneGraph and prints all the nodes and      *
*   their fields in the Report View window. It can be used just for       *
*   information or you can add code to modify parts of the SceneGraph in  *
*   some way or print more details for particular types of node.          *
*                                                                         *
***************************************************************************
*   Copyright © 2017 Richard P. Parkins, M. A.                          *
*                                                                         *
*   This file is a supplement to the FreeCAD CAx development system.      *
*                                                                         *
*   This program is free software; you can redistribute it and/or modify  *
*   it under the terms of the GNU Lesser General Public License (LGPL)    *
*   as published by the Free Software Foundation; either version 2 of     *
*   the License, or (at your option) any later version.                   *
*   for detail see the LICENCE text file.                                 *
*                                                                         *
*   This software is distributed in the hope that it will be useful,      *
*   but WITHOUT ANY WARRANTY; without even the implied warranty of        *
*   MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the         *
*   GNU Library General Public License for more details.                  *
*                                                                         *
*   You should have received a copy of the GNU Library General Public     *
*   License along with this macro; if not, write to the Free Software     *
*   Foundation, Inc., 59 Temple Place, Suite 330, Boston, MA  02111-1307  *
*   USA                                                                   *
***************************************************************************
"""
__title__   = "Print_SceneGraph"
__author__  = "Aleph0"
__version__ = "00.03"
__date__    = "24/10/2017"
__Comment__ = "SceneGraph explorer"
__Wiki__ = "http://www.freecadweb.org/wiki/index.php?title=Macro_Print_SceneGraph"
__Help__ = "see first few lines of macro text"
__Status__ = "stable"
__Requires__ = "freecad 0.16"

#OS: Ubuntu 14.04.5 LTS
#Word size of OS: 64-bit
#Word size of FreeCAD: 64-bit
#Version: 0.16.6703 (Git)
#Build type: None
#Branch: releases/FreeCAD-0-16
#Hash: 2ce5c8d2e3020d05005ed71f710e09e9aa561f40
#Python version: 2.7.6
#Qt version: 4.8.6
#Coin version: 4.0.0a
#OCC version: 6.8.0.oce-0.17

import FreeCAD
from pivy import coin
import PySide
from PySide import QtGui, QtCore

def printFields(node,indent):
    nm = node.getName().__str__()
    if nm != "":
        FreeCAD.Console.PrintLog(indent+"name: "+nm+"\n")
    fl = node.getFieldData()
    for i in range(fl.getNumFields()):
        name = fl.getFieldName(i)
        if name.__str__() != "point":
            val = node.getField(fl.getFieldName(i)).get()
            FreeCAD.Console.PrintLog(indent+str(name)+" -> "+str(val)+"\n")

def printTree(node,indent):
    FreeCAD.Console.PrintLog(indent+node.__str__()+"\n")
    if node.getTypeId().getName().__str__() == "Coordinate3":
        points=node.point
        for i in range(points.getNum()):
            FreeCAD.Console.PrintLog(indent+" "+str(i)+": "+str(points[i].getValue())+"\n")
    if node.getTypeId().getName().__str__() == "Coordinate4":
        points=node.point
        for i in range(points.getNum()):
            FreeCAD.Console.PrintLog(indent+" "+str(i)+": "+str(points[i].getValue())+"\n")
    printFields(node,indent+" ")
    if node.getChildren().__str__() != "None":
        for i in range(node.getNumChildren()):
            printTree(node.getChild(i),indent+" ")

ad = FreeCADGui.ActiveDocument
if ad == None:
    FreeCAD.Console.PrintLog("No active document\n")
else:
    QtGui.QApplication.setOverrideCursor(QtGui.QCursor(QtCore.Qt.WaitCursor))
    printTree(ad.ActiveView.getViewer().getSoEventManager().getSceneGraph(), "")
    QtGui.QApplication.restoreOverrideCursor()
```

Retrieved from "<http://wiki.freecad.org/index.php?title=Macro_Print_SceneGraph/fr&oldid=1345523>"
