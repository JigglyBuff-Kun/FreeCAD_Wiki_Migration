---
title: simulation d'un vilebrequin
---

|                                                                                                                                                                                                                                                                                                                                   |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Crank Simul                                                                                                                                                                                                                                                                                                                       |
| Description                                                                                                                                                                                                                                                                                                                       |
| Simulation de mouvement d'un vilebrequin. Version macro : 1.0 Date dernière modification : 2014-06-13 Version FreeCAD : All Téléchargement : [ToolBar Icon](https://www.freecadweb.org/wiki/images/0/04/Macro_crank_simul.png) The file [crank_simul.fcstd](http://forum.freecadweb.org/download/file.php?id=5954) Auteur: kwahoo |
| Auteur                                                                                                                                                                                                                                                                                                                            |
| [kwahoo](/index.php?title=User:Kwahoo&action=edit&redlink=1 "User:Kwahoo (page does not exist)")                                                                                                                                                                                                                                  |
| Téléchargement                                                                                                                                                                                                                                                                                                                    |
| [ToolBar Icon](https://www.freecadweb.org/wiki/images/0/04/Macro_crank_simul.png) The file [crank_simul.fcstd](http://forum.freecadweb.org/download/file.php?id=5954)                                                                                                                                                             |
| Liens                                                                                                                                                                                                                                                                                                                             |
| [Page des macros](/Macros_recipes/fr "Macros recipes/fr") [Comment installer une macro](/How_to_install_macros/fr "How to install macros/fr") [Comment créer une barre d'outils](/Customize_Toolbars/fr "Customize Toolbars/fr")                                                                                                  |
| Version Macro                                                                                                                                                                                                                                                                                                                     |
| 1.0                                                                                                                                                                                                                                                                                                                               |
| Dernière modification                                                                                                                                                                                                                                                                                                             |
| 2014-06-13                                                                                                                                                                                                                                                                                                                        |
| Version(s) FreeCAD                                                                                                                                                                                                                                                                                                                |
| All                                                                                                                                                                                                                                                                                                                               |
| Raccourci clavier                                                                                                                                                                                                                                                                                                                 |
| _None_                                                                                                                                                                                                                                                                                                                            |
| Voir aussi                                                                                                                                                                                                                                                                                                                        |
| _None_                                                                                                                                                                                                                                                                                                                            |
|                                                                                                                                                                                                                                                                                                                                   |
|                                                                                                                                                                                                                                                                                                                                   |

## Description

Cette animation simple utilise une esquisse et le solveur afin de déterminer la position et la rotation du piston et de la bielle.

![](/images/Crank_00.gif)

## Utilisation

Pour tester l'animation :

Télécharger les fichiers et copier le code dans la console Python de FreeCAD.

1. Ouvrir le fichier joint

Pour stopper l'animation, taper dans la console :
"**animation.stop()**"

## Le fichier

[crank_simul.fcstd](http://forum.freecadweb.org/download/file.php?id=5954)

## Script

ToolBar Icon ![](/images/Macro_crank_simul.png)

**crank_simul.FCMacro**

```
import FreeCAD as App, FreeCADGui as Gui, Part, time, sys, math, Draft, DraftGeomUtils
from PySide import QtGui,QtCore

class Animation(object):
    def __init__(self):
        App.Console.PrintMessage('init')

        App.ActiveDocument.recompute()

        self.timer = QtCore.QTimer()
        QtCore.QObject.connect(self.timer, QtCore.SIGNAL("timeout()"), self.my_update)
        self.timer.start(50)

        self.an = 0.1

    def my_update(self):
        string = '{0}'.format(self.an)
        self.an = self.an + 0.01 if self.an < (2 * math.pi) else 0.0

        angle = math.degrees(self.an)
        App.ActiveDocument.Sketch.setDatum(5,App.Units.Quantity(str(angle)+' deg'))
        App.ActiveDocument.recompute()
        p1 = App.ActiveDocument.Sketch.Shape.Vertexes[0].Point
        p2 = App.ActiveDocument.Sketch.Shape.Vertexes[1].Point
        conrodangle = math.degrees(Draft.DraftVecUtils.angle(App.Vector(1,0,0),(p1-p2))) - 90
        App.ActiveDocument.getObject("Cylinder").Placement = App.Placement(p1,App.Rotation(App.Vector(1,0,0),-90))
        App.ActiveDocument.getObject("Sketch001").Placement = App.Placement(p1,App.Rotation(App.Vector(0,0,1),conrodangle))

    def stop(self):
        self.timer.stop()


animation = Animation()
```

## Liens

La discussion sur le forum (en anglais) [Inline-four engine animation](http://forum.freecadweb.org/viewtopic.php?f=24&t=6815&hilit=animation#p55092)

Le blogue [freecad-tutorial.blogspot](http://freecad-tutorial.blogspot.be/)

Retrieved from "<http://wiki.freecad.org/index.php?title=Macro_crank_simul/fr&oldid=1066761>"
