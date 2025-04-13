---
title: Kurbel Simulation
---

|                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Crank Simul                                                                                                                                                                                                                                                                                                                                                                                                                           |
| Beschreibung                                                                                                                                                                                                                                                                                                                                                                                                                          |
| Meine einfache Animation verwendet Skizze und Skizzierer Löser, um die Kolbenposition und die Pleuelposition/-rotation zu bestimmen. Versionsmakro : 1.0 Datum der letzten Änderung : 2014-06-13 FreeCAD version : Alle Herunterladen : [Werkzeugleiste Symbol](https://www.freecadweb.org/wiki/images/0/04/Macro_crank_simul.png) Die Datei [crank_simul.fcstd](http://forum.freecadweb.org/download/file.php?id=5954) Autor: kwahoo |
| Autor                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| [kwahoo](/index.php?title=User:Kwahoo&action=edit&redlink=1 "User:Kwahoo (page does not exist)")                                                                                                                                                                                                                                                                                                                                      |
| Herunterladen                                                                                                                                                                                                                                                                                                                                                                                                                         |
| [Werkzeugleiste Symbol](https://www.freecadweb.org/wiki/images/0/04/Macro_crank_simul.png) Die Datei [crank_simul.fcstd](http://forum.freecadweb.org/download/file.php?id=5954)                                                                                                                                                                                                                                                       |
| Links                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| [Makros Rezepte](/Macros_recipes/de "Macros recipes/de") [Wie installiere ich Makros](/How_to_install_macros/de "How to install macros/de") [So passen Sie Symbolleisten an](/Customize_Toolbars/de "Customize Toolbars/de")                                                                                                                                                                                                          |
| Macro-Version                                                                                                                                                                                                                                                                                                                                                                                                                         |
| 1.0                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| Datum der letzten Änderung                                                                                                                                                                                                                                                                                                                                                                                                            |
| 2014-06-13                                                                                                                                                                                                                                                                                                                                                                                                                            |
| FreeCAD-Version(s)                                                                                                                                                                                                                                                                                                                                                                                                                    |
| Alle                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| Standardverknüpfung                                                                                                                                                                                                                                                                                                                                                                                                                   |
| _None_                                                                                                                                                                                                                                                                                                                                                                                                                                |
| Siehe auch                                                                                                                                                                                                                                                                                                                                                                                                                            |
| _None_                                                                                                                                                                                                                                                                                                                                                                                                                                |
|                                                                                                                                                                                                                                                                                                                                                                                                                                       |
|                                                                                                                                                                                                                                                                                                                                                                                                                                       |

## Beschreibung

Meine einfache Animation verwendet Skizze und Skizzierer Löser, um die Kolbenposition und die Pleuelposition/-rotation zu bestimmen.

![](/src/assets/images/Crank_00.gif)

## Anwendung

Zum Testen der Animation:

Lade die Dateien herunter und kopiere den Code in die FreeCAD
Python Konsole.

1. Öffne die angehängte Datei

Um die Animation anzuhalten tippe:
"**animation.stop()**"

## Die Datei

[crank_simul.fcstd](http://forum.freecadweb.org/download/file.php?id=5954)

## Skript

ToolBar Icon ![](/src/assets/images/Macro_crank_simul.png)

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

## Verweise

Die Forum Diskussion [Animation eines Reihenvierzylindermotors](http://forum.freecadweb.org/viewtopic.php?f=24&t=6815&hilit=animation#p55092)

Der Blog [freecad-tutorial.blogspot](http://freecad-tutorial.blogspot.be/)

Retrieved from "<http://wiki.freecad.org/index.php?title=Macro_crank_simul/de&oldid=824827>"
