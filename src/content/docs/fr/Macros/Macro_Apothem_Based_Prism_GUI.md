---
title: Apothem Based Prism GUI
---

|                                                                                                                                                                                                                                            |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Apothem Based Prism                                                                                                                                                                                                                        |
| Description                                                                                                                                                                                                                                |
| Crée un Apothem Based sur un Prisme. Version macro : 1.0 Date dernière modification : 2014-12-31 Version FreeCAD : All Téléchargement : [ToolBar Icon](https://www.freecadweb.org/wiki/images/4/4e/Part_Prism_Apothem.svg) Auteur: Quick61 |
| Auteur                                                                                                                                                                                                                                     |
| [Quick61](/User:Quick61 "User:Quick61")                                                                                                                                                                                                    |
| Téléchargement                                                                                                                                                                                                                             |
| [ToolBar Icon](https://www.freecadweb.org/wiki/images/4/4e/Part_Prism_Apothem.svg)                                                                                                                                                         |
| Liens                                                                                                                                                                                                                                      |
| [Page des macros](/Macros_recipes/fr "Macros recipes/fr") [Comment installer une macro](/How_to_install_macros/fr "How to install macros/fr") [Comment créer une barre d'outils](/Customize_Toolbars/fr "Customize Toolbars/fr")           |
| Version Macro                                                                                                                                                                                                                              |
| 1.0                                                                                                                                                                                                                                        |
| Dernière modification                                                                                                                                                                                                                      |
| 2014-12-31                                                                                                                                                                                                                                 |
| Version(s) FreeCAD                                                                                                                                                                                                                         |
| All                                                                                                                                                                                                                                        |
| Raccourci clavier                                                                                                                                                                                                                          |
| _None_                                                                                                                                                                                                                                     |
| Voir aussi                                                                                                                                                                                                                                 |
| _None_                                                                                                                                                                                                                                     |
|                                                                                                                                                                                                                                            |
|                                                                                                                                                                                                                                            |

## Description

Cette macro présente à l'utilisateur une fenêtre de dialogue pour fournir la distance entre les centres, le nombre de côtés, et la hauteur permettra de créer un prisme sur la base du apothème ou in radius d'un polygone.

## Utilisation

Copiez la macro dans votre répertoire des macros. lancez la macro ou créez un bouton raccourci dans une barre d'outils.

Lorsqu'elle est exécuté, le Macro présente à l'utilisateur une boîte de dialogue comme illustrée ci-dessous. Entrez d'abord la distance souhaitée entre les alvéoles. Cela peut être un nombre quelconque et peut inclure une valeur décimale, la macro ne reconnait pas les entrées fractionnaires. Ensuite, entrez le nombre de côtés. Ce nombre est un nombre entier et doit être un nombre pair pour des résultats corrects. Enfin entrez la hauteur que vous souhaitez donner au prisme. Encore une fois, cela peut être un nombre quelconque et peut inclure une valeur décimale. Cliquez sur OK et le prisme sera créé dans votre document.

![](/images/ABP_Screenshot.png)

## Script

ToolBar Icon ![](/images/Part_Prism_Apothem.svg)

**Macro_Apothem_Based_Prism_GUI.FCMacro**

```
# # # # # # # # # # #
#
# Apothem Based Prism
#
# This script will take the input of the distance between flats, (apothem, aka inradius),
# and the number of sidesfor a regular polygon along with a height and produce a
# correctly sized prism derived from the circumradius.
#
# # # # # # # # # # #

import FreeCAD, FreeCADGui, Part, PartGui, math
from FreeCAD import Base
from PySide import QtGui, QtCore
from math import cos, radians
App = FreeCAD
Gui = FreeCADGui

class p():


    def priSm(self):

        try:
            dbf = float(self.d1.text())
            nos = int(self.d2.text())
            hth = float(self.d3.text())
            aR = dbf / 2
            op1 = 180/float(nos)
            coS = cos(math.radians(op1))
            cR = aR / coS
            prism=App.ActiveDocument.addObject("Part::Prism","Prism")
            prism.Polygon=nos
            prism.Circumradius=cR
            prism.Height=hth
            prism.Placement=Base.Placement(Base.Vector(0.00,0.00,0.00),Base.Rotation(0.00,0.00,0.00,1.00))
            prism.Label='Prism'
            App.ActiveDocument.recompute()
            Gui.SendMsgToActiveView("ViewFit")
        except:
            FreeCAD.Console.PrintError("Unable to complete task")

            self.close()

    def close(self):
        self.dialog.hide()


#
# Make dialog box and get input for distance between flats, number of sides, and height
#

    def __init__(self):
        self.dialog = None

        self.dialog = QtGui.QDialog()
        self.dialog.resize(280,110)

        self.dialog.setWindowTitle("Apothem Based Prism")
        la = QtGui.QVBoxLayout(self.dialog)

        iN1 = QtGui.QLabel("Distance Between Flats")
        la.addWidget(iN1)
        self.d1 = QtGui.QLineEdit()
        la.addWidget(self.d1)

        iN2 = QtGui.QLabel("Number Of Sides (Best results - use even numbers)")
        la.addWidget(iN2)
        self.d2 = QtGui.QLineEdit()
        la.addWidget(self.d2)

        iN3 = QtGui.QLabel("Prism Height")
        la.addWidget(iN3)
        self.d3 = QtGui.QLineEdit()
        la.addWidget(self.d3)

        okbox = QtGui.QDialogButtonBox(self.dialog)
        okbox.setOrientation(QtCore.Qt.Horizontal)
        okbox.setStandardButtons(QtGui.QDialogButtonBox.Cancel|QtGui.QDialogButtonBox.Ok)
        la.addWidget(okbox)
        QtCore.QObject.connect(okbox, QtCore.SIGNAL("accepted()"), self.priSm)
        QtCore.QObject.connect(okbox, QtCore.SIGNAL("rejected()"), self.close)
        QtCore.QMetaObject.connectSlotsByName(self.dialog)
        self.dialog.show()
        self.dialog.exec_()

p()
```

## Ajouts

Le fichier icône SVG pour utiliser dans votre barre d'outils.

![](/images/Part_Prism_Apothem.svg)

## Remerciements

Remerciement à [shoogen](http://forum.freecadweb.org/memberlist.php?mode=viewprofile&u=765) développeur et à [wandererfan](http://forum.freecadweb.org/memberlist.php?mode=viewprofile&u=1375) pour leur aide précieuse et les conseils dans la mise au point de cette macro.

Retrieved from "<http://wiki.freecad.org/index.php?title=Macro_Apothem_Based_Prism_GUI/fr&oldid=692007>"
