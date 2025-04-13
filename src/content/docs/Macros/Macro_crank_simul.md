---
title: crank simul
---

|                                                                                                                                                                                                                                                                                                                                                                                 |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Crank Simul                                                                                                                                                                                                                                                                                                                                                                     |
| Description                                                                                                                                                                                                                                                                                                                                                                     |
| My simple animation uses sketch and sketcher solver to determine piston position and conrod position/rotation. Macro version: 1.0 Last modified: 2014-06-13 FreeCAD version: All Download: [ToolBar Icon](https://www.freecadweb.org/wiki/images/0/04/Macro_crank_simul.png) The file [crank_simul.fcstd](http://forum.freecadweb.org/download/file.php?id=5954) Author: kwahoo |
| Author                                                                                                                                                                                                                                                                                                                                                                          |
| [kwahoo](/index.php?title=User:Kwahoo&action=edit&redlink=1 "User:Kwahoo (page does not exist)")                                                                                                                                                                                                                                                                                |
| Download                                                                                                                                                                                                                                                                                                                                                                        |
| [ToolBar Icon](https://www.freecadweb.org/wiki/images/0/04/Macro_crank_simul.png) The file [crank_simul.fcstd](http://forum.freecadweb.org/download/file.php?id=5954)                                                                                                                                                                                                           |
| Links                                                                                                                                                                                                                                                                                                                                                                           |
| [Macros recipes](/Macros_recipes "Macros recipes") [How to install macros](/How_to_install_macros "How to install macros") [How to customize toolbars](/Customize_Toolbars "Customize Toolbars")                                                                                                                                                                                |
| Macro Version                                                                                                                                                                                                                                                                                                                                                                   |
| 1.0                                                                                                                                                                                                                                                                                                                                                                             |
| Date last modified                                                                                                                                                                                                                                                                                                                                                              |
| 2014-06-13                                                                                                                                                                                                                                                                                                                                                                      |
| FreeCAD Version(s)                                                                                                                                                                                                                                                                                                                                                              |
| All                                                                                                                                                                                                                                                                                                                                                                             |
| Default shortcut                                                                                                                                                                                                                                                                                                                                                                |
| _None_                                                                                                                                                                                                                                                                                                                                                                          |
| See also                                                                                                                                                                                                                                                                                                                                                                        |
| _None_                                                                                                                                                                                                                                                                                                                                                                          |
|                                                                                                                                                                                                                                                                                                                                                                                 |
|                                                                                                                                                                                                                                                                                                                                                                                 |

## Description

My simple animation uses sketch and sketcher solver to determine piston position and conrod position/rotation.

![](/src/assets/images/Crank_00.gif)

## Use

To test the animation:

Download the files and copy the code in the Python console FreeCAD.

1. Open the attached file

To stop animation type :
"**animation.stop()**"

## The File

[crank_simul.fcstd](http://forum.freecadweb.org/download/file.php?id=5954)

## Script

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

## Links

The forum discussion [Inline-four engine animation](http://forum.freecadweb.org/viewtopic.php?f=24&t=6815&hilit=animation#p55092)

The blog [freecad-tutorial.blogspot](http://freecad-tutorial.blogspot.be/)

Retrieved from "<http://wiki.freecad.org/index.php?title=Macro_crank_simul/en&oldid=692618>"
