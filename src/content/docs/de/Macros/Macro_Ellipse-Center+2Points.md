---
title: Ellipse-Center+2Points
---

|                                                                                                                                                                                                                                                                                                                                              |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Macro Ellipse-Center+2Points                                                                                                                                                                                                                                                                                                                 |
| Beschreibung                                                                                                                                                                                                                                                                                                                                 |
| Erzeugt eine Ellipse durch Auswahl von drei Punkten (in dieser Reihenfolge): Mittelpunkt, Hauptradius und Nebenradius Versionsmakro : 02.00 Datum der letzten Änderung : 2019-07-29 FreeCAD version : All Herunterladen : [ToolBar Icon](https://www.freecadweb.org/wiki/images/6/66/Macro_Ellipse-Center%2B2Points.png) Autor: Eriossoltero |
| Autor                                                                                                                                                                                                                                                                                                                                        |
| [Eriossoltero](/User:Eriossoltero "User:Eriossoltero")                                                                                                                                                                                                                                                                                       |
| Herunterladen                                                                                                                                                                                                                                                                                                                                |
| [ToolBar Icon](https://www.freecadweb.org/wiki/images/6/66/Macro_Ellipse-Center%2B2Points.png)                                                                                                                                                                                                                                               |
| Links                                                                                                                                                                                                                                                                                                                                        |
| [Makros Rezepte](/Macros_recipes/de "Macros recipes/de") [Wie installiere ich Makros](/How_to_install_macros/de "How to install macros/de") [So passen Sie Symbolleisten an](/Customize_Toolbars/de "Customize Toolbars/de")                                                                                                                 |
| Macro-Version                                                                                                                                                                                                                                                                                                                                |
| 02.00                                                                                                                                                                                                                                                                                                                                        |
| Datum der letzten Änderung                                                                                                                                                                                                                                                                                                                   |
| 2019-07-29                                                                                                                                                                                                                                                                                                                                   |
| FreeCAD-Version(s)                                                                                                                                                                                                                                                                                                                           |
| All                                                                                                                                                                                                                                                                                                                                          |
| Standardverknüpfung                                                                                                                                                                                                                                                                                                                          |
| _None_                                                                                                                                                                                                                                                                                                                                       |
| Siehe auch                                                                                                                                                                                                                                                                                                                                   |
| _None_                                                                                                                                                                                                                                                                                                                                       |
|                                                                                                                                                                                                                                                                                                                                              |
|                                                                                                                                                                                                                                                                                                                                              |

## Beschreibung

Erzeugt eine Ellipse durch Auswahl von drei Punkten (in dieser Reihenfolge): Mittelpunkt, Hauptradius und Nebenradius

![](/images/EllipseCenter2Point.png)

## Neueste Version

Die neueste Version des Makros ist zu finden auf [EllipseCenter2Points.FCMacro](https://github.com/FreeCAD/FreeCAD-macros/blob/master/ObjectCreation/EllipseCenter2Points.FCMacro), aber der einfachste Weg zur Installation dieses Makros ist die Nutzung des [Addon-Managers](/Std_AddonMgr/de "Std AddonMgr/de").

## Skript

ToolBar Icon ![](/images/Macro_Ellipse-Center%2B2Points.png)

**Macro_EllipseCenter2Points.FCMacro**

```
# Macro Begin: Ellipse-Center+2Points.FCMacro +++++++++++++++++++++++++++++++++++++++++++++++++
# http://freecad-tutorial.blogspot.com/2011/12/engine-9-poly-v-belt.html
# https://www.freecadweb.org/wiki/User:Eriossoltero
# 13/03/2012, 29/07/2019
import Part, FreeCAD, math, PartGui, FreeCADGui
from FreeCAD import Base

# get the selected objects, with first selection for the trajectory and second for the section
# Adapted from:
# Macro Begin: Ellipse-Center+2Points.FCMacro +++++++++++++++++++++++++++++++++++++++++++++++++
# http://freecad-tutorial.blogspot.com/2011/12/engine-9-poly-v-belt.html
import Part, FreeCAD, math, PartGui, FreeCADGui
from FreeCAD import Base

# get the selected objects, with first selection for the trajectory and second for the section
# Adapted from:
# http://freecad-tutorial.blogspot.com/2011/12/engine-9-poly-v-belt.html
s = FreeCADGui.Selection.getSelection()
try:
    sel1=s[0].Shape
    sel2=s[1].Shape
    sel3=s[2].Shape
    pt_center = sel1.Point
    pt_radmay = sel2.Point
    pt_radmen = sel3.Point

    # create Part object in the current document
    myObject=App.ActiveDocument.addObject("Part::Feature","Ellipse")

    # create a shape and assign it to the current document
    ellipse = Part.Ellipse(pt_radmay, pt_radmen, pt_center)
    myObject.Shape = ellipse.toShape()
    # Macro End: Ellipse-Center+2Points.FCMacro +++++++++++++++++++++++++++++++++++++++++++++++++

except:
    print( "Wrong selection")
    print( "First:centre, Second:major radius and Third:minor radius")
```

Retrieved from "<http://wiki.freecad.org/index.php?title=Macro_Ellipse-Center%2B2Points/de&oldid=1105068>"
