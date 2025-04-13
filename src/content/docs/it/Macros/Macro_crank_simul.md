---
title: crank simul
---

|                                                                                                                                                                                                                                                                                                                   |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Crank Simul                                                                                                                                                                                                                                                                                                       |
| Descrizione                                                                                                                                                                                                                                                                                                       |
| Simulazione di cinematismo biella manovella. Versione macro: 1.0 Ultima modifica: 2014-06-13 Versione FreeCAD: All Download: [ToolBar Icon](https://www.freecadweb.org/wiki/images/0/04/Macro_crank_simul.png) The file [crank_simul.fcstd](http://forum.freecadweb.org/download/file.php?id=5954) Autore: kwahoo |
| Autore                                                                                                                                                                                                                                                                                                            |
| [kwahoo](/index.php?title=User:Kwahoo&action=edit&redlink=1 "User:Kwahoo (page does not exist)")                                                                                                                                                                                                                  |
| Download                                                                                                                                                                                                                                                                                                          |
| [ToolBar Icon](https://www.freecadweb.org/wiki/images/0/04/Macro_crank_simul.png) The file [crank_simul.fcstd](http://forum.freecadweb.org/download/file.php?id=5954)                                                                                                                                             |
| Link                                                                                                                                                                                                                                                                                                              |
| [Raccolta di macro](/Macros_recipes/it "Macros recipes/it") [Come installare le macro](/How_to_install_macros/it "How to install macros/it") [Personalizzare la toolbar](/Customize_Toolbars/it "Customize Toolbars/it")                                                                                          |
| Versione macro                                                                                                                                                                                                                                                                                                    |
| 1.0                                                                                                                                                                                                                                                                                                               |
| Data ultima modifica                                                                                                                                                                                                                                                                                              |
| 2014-06-13                                                                                                                                                                                                                                                                                                        |
| Versioni di FreeCAD                                                                                                                                                                                                                                                                                               |
| All                                                                                                                                                                                                                                                                                                               |
| Scorciatoia                                                                                                                                                                                                                                                                                                       |
| _Nessuna_                                                                                                                                                                                                                                                                                                         |
| Vedere anche                                                                                                                                                                                                                                                                                                      |
| _Nessuno_                                                                                                                                                                                                                                                                                                         |
|                                                                                                                                                                                                                                                                                                                   |
|                                                                                                                                                                                                                                                                                                                   |

## Descrizione

La mia semplice animazione utilizza sketch e il suo solutore per determinare la posizione del pistone e la posizione/rotazione della biella.

![](/images/Crank_00.gif)

## Uso

Per provare l'animazione:

Scaricare i file e poi copiare il codice nella console Python di FreeCAD.

1. Aprire il file allegato

Per interrompere l'animazione digitare:
"**animation.stop()**"

## Il File

[crank_simul.fcstd](http://forum.freecadweb.org/download/file.php?id=5954)

## Lo Script

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

## Link

La discussione nel forum: [Inline-four engine animation](http://forum.freecadweb.org/viewtopic.php?f=24&t=6815&hilit=animation#p55092)

Il blog: [freecad-tutorial.blogspot](http://freecad-tutorial.blogspot.be/)

Retrieved from "<http://wiki.freecad.org/index.php?title=Macro_crank_simul/it&oldid=1066759>"
