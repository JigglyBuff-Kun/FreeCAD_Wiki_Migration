---
title: Animated Constrain
---

|                                                                                                                                                                                                                                                                                                                                                                                             |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Animated Constrain                                                                                                                                                                                                                                                                                                                                                                          |
| Description                                                                                                                                                                                                                                                                                                                                                                                 |
| Animer une contrainte dans une esquisse dans FreeCAD Version macro : 1.0 Date dernière modification : 2015-05-20 Version FreeCAD : All Téléchargement : [Icône de la barre d'outils](https://www.freecadweb.org/wiki/images/a/af/Macro_Animated_Constrain.png) Pas de fichier pour les essais [Voir l'animation sur YouTube.](https://www.youtube.com/watch?v=kmqDcomLnk0) Auteur: psicofil |
| Auteur                                                                                                                                                                                                                                                                                                                                                                                      |
| [psicofil](/index.php?title=User:Psicofil&action=edit&redlink=1 "User:Psicofil (page does not exist)")                                                                                                                                                                                                                                                                                      |
| Téléchargement                                                                                                                                                                                                                                                                                                                                                                              |
| [Icône de la barre d'outils](https://www.freecadweb.org/wiki/images/a/af/Macro_Animated_Constrain.png) Pas de fichier pour les essais [Voir l'animation sur YouTube.](https://www.youtube.com/watch?v=kmqDcomLnk0)                                                                                                                                                                          |
| Liens                                                                                                                                                                                                                                                                                                                                                                                       |
| [Page des macros](/Macros_recipes/fr "Macros recipes/fr") [Comment installer une macro](/How_to_install_macros/fr "How to install macros/fr") [Comment créer une barre d'outils](/Customize_Toolbars/fr "Customize Toolbars/fr")                                                                                                                                                            |
| Version Macro                                                                                                                                                                                                                                                                                                                                                                               |
| 1.0                                                                                                                                                                                                                                                                                                                                                                                         |
| Dernière modification                                                                                                                                                                                                                                                                                                                                                                       |
| 2015-05-20                                                                                                                                                                                                                                                                                                                                                                                  |
| Version(s) FreeCAD                                                                                                                                                                                                                                                                                                                                                                          |
| All                                                                                                                                                                                                                                                                                                                                                                                         |
| Raccourci clavier                                                                                                                                                                                                                                                                                                                                                                           |
| _None_                                                                                                                                                                                                                                                                                                                                                                                      |
| Voir aussi                                                                                                                                                                                                                                                                                                                                                                                  |
| _None_                                                                                                                                                                                                                                                                                                                                                                                      |
|                                                                                                                                                                                                                                                                                                                                                                                             |
|                                                                                                                                                                                                                                                                                                                                                                                             |

## Description

Macro simple pour animer les contraintes d'angles dans Sketcher. Basée sur le travail de @microelly. Animez une contrainte et examinez les effets obtenus.

Temporary code for external macro link. Do not use this code. This code is used exclusively by [Addon Manager](/Std_AddonMgr "Std AddonMgr"). _Link for optional manual installation: [Macro](https://raw.githubusercontent.com/psicofil/Macros_FreeCAD/master/Macros/AnimatedConstrain.FCMacro)_

```

# This code is copied instead of the original macro code
# to guide the user to the online download page.
# Use it if the code of the macro is larger than 64 KB and cannot be included in the wiki
# or if the RAW code URL is somewhere else in the wiki.

from PySide import QtGui, QtCore

diag = QtGui.QMessageBox(QtGui.QMessageBox.Information,
    "Information",
    "This macro must be downloaded from this link\n"
    "\n"
    "https://raw.githubusercontent.com/psicofil/Macros_FreeCAD/master/Macros/AnimatedConstrain.FCMacro" + "\n"
    "\n"
    "Quit this window to access the download page")

diag.setWindowFlags(QtCore.Qt.WindowStaysOnTopHint)
diag.setWindowModality(QtCore.Qt.ApplicationModal)
diag.exec_()

import webbrowser
webbrowser.open("https://raw.githubusercontent.com/psicofil/Macros_FreeCAD/master/Macros/AnimatedConstrain.FCMacro")

```

<class="rawcodeurl"><a href="<https://raw.githubusercontent.com/psicofil/Macros_FreeCAD/master/Macros/AnimatedConstrain.FCMacro>">raw code</a>

## Script

```
La macro peut être téléchargée dans le dépôt github suivant: Macro_Animated_Constrain.FCMacro

```

Icône de la barre d'outils ![](/images/Macro_Animated_Constrain.png)

**AnimatedConstrain.FCMacro**

```
# -*- coding: utf-8 -*-
# Mesh with GMSH inside of FreeCAD
# Author: Gomez Lucio
# License: LGPL v 2.1
# Date: 17/05/2015

import FreeCAD
from PySide import QtGui,QtCore
import math
import time

class AnimConstrain(QtGui.QWidget):
    def __init__(self):
        super(AnimConstrain, self).__init__()
        self.initUI()
    def initUI(self):
        # Window
        self.setWindowFlags(QtCore.Qt.WindowStaysOnTopHint)
        self.setWindowTitle("Animated Constrain")
        self.resize(240, 240)
        # Content
        self.l_initial = QtGui.QLabel(" Initital (deg)",self)
        self.le_initial = QtGui.QLineEdit(self)
        self.le_initial.setText("0")
        self.l_final = QtGui.QLabel(" Final (deg)",self)
        self.le_final = QtGui.QLineEdit(self)
        self.le_final.setText("360")
        self.l_interval = QtGui.QLabel(" Interval (deg/step) ",self)
        self.le_interval = QtGui.QLineEdit(self)
        self.le_interval.setText("5")
        # Constrain Type
        self.l_type_constrain = QtGui.QLabel("<b>Type of Constrain :<b>",self)
        self.rb_angle = QtGui.QRadioButton(" Angle(deg)",self)
        self.rb_angle.setChecked(QtCore.Qt.Checked)
        self.rb_length = QtGui.QRadioButton(" Length(mm)",self)
        self.rb_length.setEnabled(False)
        # Parameters
        self.l_parameters = QtGui.QLabel("<b>Parameters :<b>",self)
        self.cb_repeat = QtGui.QCheckBox("  Repeat",self)
        self.bt_start = QtGui.QPushButton("Start",self)
        self.bt_stop = QtGui.QPushButton("Stop",self)
        # LAYOUT
        layout = QtGui.QGridLayout()
        layout.addWidget(self.l_type_constrain, 0, 0)
        layout.addWidget(self.rb_angle, 1, 0)
        layout.addWidget(self.rb_length, 1, 1)
        layout.addWidget(self.l_parameters, 2, 0)
        layout.addWidget(self.l_initial, 3, 0)
        layout.addWidget(self.le_initial, 3, 1)
        layout.addWidget(self.l_final, 4, 0)
        layout.addWidget(self.le_final, 4, 1)
        layout.addWidget(self.l_interval, 5, 0)
        layout.addWidget(self.le_interval, 5, 1)
        layout.addWidget(self.cb_repeat, 6, 0)
        layout.addWidget(self.bt_start, 7, 0)
        layout.addWidget(self.bt_stop, 7, 1)
        self.setLayout(layout)
        self.show()
        # CONNECTS
        QtCore.QObject.connect(self.bt_start, QtCore.SIGNAL("pressed()"),self.start)
        QtCore.QObject.connect(self.bt_stop, QtCore.SIGNAL("pressed()"),self.stop)
        self.cb_repeat.stateChanged.connect(self.repeat_state)
        self.repeat = True

    def repeat_state(self, state):
        if state == QtCore.Qt.Checked:
            self.repeat = False
        else:
            self.repeat = True

    def start(self):
        App.Console.PrintMessage('Start ')
        self.timer = QtCore.QTimer()
        QtCore.QObject.connect(self.timer, QtCore.SIGNAL("timeout()"), self.proceed)
        self.timer.start(50)
        self.an = float(eval(self.le_initial.text()))
        self.interv = float(eval(self.le_interval.text()))
        self.final = float(eval(self.le_final.text()))
        #self.proceed()

    def proceed(self):
        if self.an >= self.final and self.repeat:
	  self.stop()
	else:
          try:
             self.an = self.an + self.interv if self.an < (360.0) else 0.0
             angle = self.an
             App.Console.PrintMessage(str(angle)+"  ")
             App.ActiveDocument.Sketch.setDatum(cs,App.Units.Quantity((str(angle)+' deg')))
             App.ActiveDocument.recompute()
          except:
	     App.Console.PrintError('Error on setDatum in constrain  ')
	     self.stop()

    def stop(self):
        self.timer.stop()
        App.Console.PrintMessage(" End")
        App.ActiveDocument.recompute()

# RUN WIDGET
try:
   s = Gui.Selection.getSelectionEx()
   cs=s[0].SubElementNames[0]
   cs=int(cs[10:])-1
   AnimConstrain()
except:
   App.Console.PrintError('Select one anlge constrain First  ')
```

## Liens

La page de discussion sur le forum [Macro Animated Constrain](http://forum.freecadweb.org/viewtopic.php?f=22&t=11017)

[Voir l'animation sur YouTube.](https://www.youtube.com/watch?v=kmqDcomLnk0)

Retrieved from "<http://wiki.freecad.org/index.php?title=Macro_Animated_Constrain/fr&oldid=1182551>"
