---
title: Makrodefinicja Duplicate Selection
---

|                                                                                                                                                                                                                                                                          |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Macro Duplicate Selection                                                                                                                                                                                                                                                |
| Description                                                                                                                                                                                                                                                              |
| This macro changes the mouse cursor to "ForbiddenCursor" if a selection is duplicated. Macro version: 00.00 Last modified: 2016-06-06 FreeCAD version: 0.16 Download: [ToolBar Icon](https://wiki.freecad.org/images/5/54/Macro_Duplicate_Selection.png) Author: Mario52 |
| Author                                                                                                                                                                                                                                                                   |
| [Mario52](/User:Mario52 "User:Mario52")                                                                                                                                                                                                                                  |
| Download                                                                                                                                                                                                                                                                 |
| [ToolBar Icon](https://wiki.freecad.org/images/5/54/Macro_Duplicate_Selection.png)                                                                                                                                                                                       |
| Links                                                                                                                                                                                                                                                                    |
| [Macros recipes](/Macros_recipes "Macros recipes") [How to install macros](/How_to_install_macros "How to install macros") [How to customize toolbars](/Customize_Toolbars "Customize Toolbars")                                                                         |
| Macro Version                                                                                                                                                                                                                                                            |
| 00.00                                                                                                                                                                                                                                                                    |
| Date last modified                                                                                                                                                                                                                                                       |
| 2016-06-06                                                                                                                                                                                                                                                               |
| FreeCAD Version(s)                                                                                                                                                                                                                                                       |
| 0.16                                                                                                                                                                                                                                                                     |
| Default shortcut                                                                                                                                                                                                                                                         |
| _None_                                                                                                                                                                                                                                                                   |
| See also                                                                                                                                                                                                                                                                 |
| _None_                                                                                                                                                                                                                                                                   |
|                                                                                                                                                                                                                                                                          |
|                                                                                                                                                                                                                                                                          |

## Description

This macro changes the mouse cursor to "ForbiddenCursor" if a selection is duplicated.

## Usage

Run the macro, the macro stays resident in memory.

Select your objects. If a selected objects is a duplicate the "ForbiddenCursor" mouse cursor is displayed.

## Script

Icon for the toolbar ![](/images/Macro_Duplicate_Selection.png)

**Macro_Duplicate_Selection.FCMacro**

```
# -*- coding: utf-8 -*-
import FreeCADGui
import PySide
from PySide import QtGui ,QtCore
from PySide.QtGui import *
from PySide.QtCore import *

__title__   = "Macro_Duplicate_Selection"
__author__  = "Mario52"
__url__     = "http://www.freecadweb.org/index-fr.html"
__version__ = "00.00"
__date__    = "06/06/2016"

__Help__    = "Start the macro select the object IN THE 3D VIEW the ForbiddenCursor stay if the selection is duplicate"

def selectionObject():
    sel = FreeCADGui.Selection.getSelection()
    x  = []
    del x[:]
    for a in range(len(sel)):
       x.append(sel[a].Name)
    doublet = 0
    for i in range(len(sel)):
        for ii in range((i+1),len(sel)):
            if x[i] == x[ii]:
                doublet = 1
                break
    if doublet == 1:
        QtGui.QApplication.setOverrideCursor(QtGui.QCursor(QtCore.Qt.ForbiddenCursor))
#        FreeCAD.Console.PrintError("HELP "+sel[-1].Name+" duplicate selection"+"\n")
    else:
        QtGui.QApplication.setOverrideCursor(QtGui.QCursor(QtCore.Qt.ArrowCursor))

class SelObserver:
    def addSelection(self,doc,obj,sub,pnt):   # Selection
        selectionObject()
    def removeSelection(self,doc,obj,sub):    # Effacer l'objet salectionne
        selectionObject()
    def setPreselection(self, doc, obj, sub):
        selectionObject()
    def clearSelection(self,doc):             # Si clic sur l'ecran, effacer la selection
        selectionObject()
#    def setSelection(self,doc):               # Selection dans Combo View pour quitter la fonction
#        App.Console.PrintMessage("Fin Macro_Duplicate"+"\n")
#        QtGui.QApplication.setOverrideCursor(QtGui.QCursor(QtCore.Qt.ArrowCursor))
#        FreeCADGui.Selection.removeObserver(s)# desinstalle la fonction residente

s=SelObserver()
FreeCADGui.Selection.addObserver(s)    # installe la fonction en mode resident
```

## Links

The forum discussion [Duplicate Objects when more than one face selected](http://forum.freecadweb.org/viewtopic.php?f=3&t=15994)

Retrieved from "<http://wiki.freecad.org/index.php?title=Macro_Duplicate_Selection/pl&oldid=1345251>"
