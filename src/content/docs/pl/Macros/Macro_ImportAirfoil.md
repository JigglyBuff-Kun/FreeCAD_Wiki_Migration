---
title: Makrodefinicja Import profilu lotniczego
---

|                                                                                                                                                                                                                                    |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ImportAirfoil                                                                                                                                                                                                                      |
| Description                                                                                                                                                                                                                        |
| Macro for Airfoil coordinates import. Macro version: 1.0.0 Last modified: 2022-01-08 FreeCAD version: 0.18.4 and above Download: [ToolBar Icon](https://wiki.freecad.org/images/3/37/ImportAirfoil.svg) Author: Miloš Petrašinović |
| Author                                                                                                                                                                                                                             |
| [Miloš Petrašinović](/index.php?title=User:Milo%C5%A1_Petra%C5%A1inovi%C4%87&action=edit&redlink=1 "User:Miloš Petrašinović (page does not exist)")                                                                                |
| Download                                                                                                                                                                                                                           |
| [ToolBar Icon](https://wiki.freecad.org/images/3/37/ImportAirfoil.svg)                                                                                                                                                             |
| Links                                                                                                                                                                                                                              |
| [Macros recipes](/Macros_recipes "Macros recipes") [How to install macros](/How_to_install_macros "How to install macros") [How to customize toolbars](/Customize_Toolbars "Customize Toolbars")                                   |
| Macro Version                                                                                                                                                                                                                      |
| 1.0.0                                                                                                                                                                                                                              |
| Date last modified                                                                                                                                                                                                                 |
| 2022-01-08                                                                                                                                                                                                                         |
| FreeCAD Version(s)                                                                                                                                                                                                                 |
| 0.18.4 and above                                                                                                                                                                                                                   |
| Default shortcut                                                                                                                                                                                                                   |
| _None_                                                                                                                                                                                                                             |
| See also                                                                                                                                                                                                                           |
| [Github repository](https://github.com/VAZMFB/FreeCAD-ImportAirfoil)                                                                                                                                                               |
|                                                                                                                                                                                                                                    |
|                                                                                                                                                                                                                                    |

## Description

Macro for Airfoil coordinates import. It is possible, using simple dialog, to scale the airfoil, rotate, translate in the plane, translate along the span, select the plane and the main axis, as well as turn the geometry into a sketch. It is possible to import coordinates saved in the most commonly used formats.

## Usage

Run the macro program and follow the instructions.

![](/images/ImportAirfoil_ss.png)

## Script

ToolBar Icon
![](/images/ImportAirfoil.svg)

**ImportAirfoil.FCMacro**

```
# Airfoil import macro
# After selecting the file with the coordinates of the airfoil
# data processing and modeling of the airfoil are performed.
# It is possible, using simple dialog, to scale the airfoil, rotate,
# translate in the plane, translate along the span, select the plane and
# the main axis, as well as turn the geometry into a sketch. It is possible
# to import coordinates saved in the most commonly used formats.
# Airfoil import is based on:
#  https://github.com/VAZMFB/Python-importAirfoil
# Author: Milos D. Petrasinovic <mpetrasinovic@mas.bg.ac.rs>
# Structural Analysis of Flying Vehicles
# Faculty of Mechanical Engineering, University of Belgrade
# Department of Aerospace Engineering, Flying structures
# https://vazmfb.com
# Belgrade, 2022
#
# --------------------
#
# Copyright (C) 2022 Milos Petrasinovic <info@vazmfb.com>
#
# This program is free software: you can redistribute it and/or modify
# it under the terms of the GNU Lesser General Public License as
# published by the Free Software Foundation, either version 3 of the
# License, or (at your option) any later version.
#
# This program is distributed in the hope that it will be useful,
# but WITHOUT ANY WARRANTY; without even the implied warranty of
# MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
# GNU Lesser General Public License for more details.
#
# You should have received a copy of the GNU Lesser General Public License
# along with this program.  If not, see <https://www.gnu.org/licenses/>.
#
# --------------------
#
# Based on:
# Airfoil Import and Scale 2.1.2
# (c) quick61
#
# --------------------

__Name__ = 'ImportAirfoil'
__Comment__ = 'Airfoil import macro'
__Author__ = 'Milos Petrasinovic <mpetrasinovic@mas.bg.ac.rs>'
__Version__ = '1.0.0'
__Date__ = '2022-01-06'
__License__ = 'GPL-3.0-or-later'
__Web__ = 'https://github.com/VAZMFB/FreeCAD-ImportAirfoil'
__Wiki__ = 'https://wiki.freecadweb.org/Macro_ImportAirfoil'
__Icon__ = 'https://wiki.freecad.org/images/3/37/ImportAirfoil.svg'
__Help__ = 'Run the macro program and follow the instructions!'
__Status__ = 'stable'
__Requires__ = 'Freecad >= 0.19'
__Communication__ = 'https://github.com/VAZMFB/FreeCAD-ImportAirfoil/issues/'
__Files__ = 'ImportAirfoil.svg'

import FreeCAD as App
from PySide import QtCore, QtGui
from PySide.QtGui import QFileDialog, QLineEdit, QRadioButton, QMessageBox
import Draft, importAirfoilDAT
import numpy as np
import subprocess
import sys
import os
import re

global filename
global nameFile

msgBox = QtGui.QMessageBox()
msgBox.setWindowTitle("ImportAirfoil")
msgBox.setText("In the next window, select the file with the coordinates of the airfoil.")
msgBox.exec_()

try:
    filename, filefilter = QtGui.QFileDialog.getOpenFileName(QtGui.qApp.activeWindow(), 'Select the file with the coordinates:', '*.dat;*.txt;*.af')
except Exception:
    param = FreeCAD.ParamGet("User parameter:BaseApp/Preferences/Macro")
    path = param.GetString("MacroPath", "") + "/"
    filename, filefilter = QFileDialog.getOpenFileName(None, "Select the file with the coordinates:", path, "*.dat;*.txt;*.af")

nameFile = filename.split("/")[-1][:-4]

class DrawAP():
    def __init__(self):
        self.dialog = None
        self.lt = 0
        self.alpha = 0
        self.h0 = 0
        self.plane = None
        self.mirror = None
        self.dh = 0
        self.dv = 0
        self.db = 0
        self.sketch = None

        # Dialog window
        self.dialog = QtGui.QDialog()
        self.dialog.resize(350, 100)
        self.dialog.setWindowTitle("ImportAirfoil")
        la = QtGui.QVBoxLayout(self.dialog)
        tx = QtGui.QLabel("Length of airfoil chord [mm]:")
        la.addWidget(tx)
        self.lt = QtGui.QLineEdit("1000")
        la.addWidget(self.lt)
        tx = QtGui.QLabel("The angle of rotation [deg]:")
        la.addWidget(tx)
        self.alpha = QtGui.QLineEdit("0")
        la.addWidget(self.alpha)
        tx = QtGui.QLabel("The relative position of the axis of rotation [% of chord]:")
        la.addWidget(tx)
        self.h0 = QtGui.QLineEdit("25")
        la.addWidget(self.h0)
        tx = QtGui.QLabel("Plane selection [XY = 1, YZ = 2, ZX = 3]:")
        la.addWidget(tx)
        self.plane = QtGui.QLineEdit("1")
        la.addWidget(self.plane)
        tx = QtGui.QLabel("Vertical mirroring [NO = 0, YES = 1]:")
        la.addWidget(tx)
        self.mirror = QtGui.QLineEdit("0")
        la.addWidget(self.mirror)
        tx = QtGui.QLabel("Change axis [NO = 0, YES = 1]:")
        la.addWidget(tx)
        self.flip = QtGui.QLineEdit("0")
        la.addWidget(self.flip)
        tx = QtGui.QLabel("Translation along the horizontal axis [mm]:")
        la.addWidget(tx)
        self.dh = QtGui.QLineEdit("0")
        la.addWidget(self.dh)
        tx = QtGui.QLabel("Translation along the vertical axis [mm]:")
        la.addWidget(tx)
        self.dv = QtGui.QLineEdit("0")
        la.addWidget(self.dv)
        tx = QtGui.QLabel("Translation along the span [mm]:")
        la.addWidget(tx)
        self.db = QtGui.QLineEdit("0")
        la.addWidget(self.db)
        tx = QtGui.QLabel("Create a Sketch [NO = 0, YES = 1]:")
        la.addWidget(tx)
        self.sketch = QtGui.QLineEdit("0")
        la.addWidget(self.sketch)

        # Add OK / Cancel buttons
        okBox = QtGui.QDialogButtonBox(self.dialog)
        okBox.setOrientation(QtCore.Qt.Horizontal)
        okBox.setStandardButtons(QtGui.QDialogButtonBox.Cancel
```

## Links

The forum discussion [New Macro: ImportAirfoil](https://forum.freecadweb.org/viewtopic.php?f=22&t=65085)

Retrieved from "<http://wiki.freecad.org/index.php?title=Macro_ImportAirfoil/pl&oldid=1344652>"
