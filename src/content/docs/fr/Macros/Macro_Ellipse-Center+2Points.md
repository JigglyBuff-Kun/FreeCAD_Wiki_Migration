---
title: Ellipse-Center+2Points
---

|                                                                                                                                                                                                                                                                                                                                                     |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Macro_Ellipse-Center+2Points                                                                                                                                                                                                                                                                                                                        |
| Description                                                                                                                                                                                                                                                                                                                                         |
| Fait une ellipse en sélectionnant trois points (dans cet ordre): centre, grand rayon et petit rayon. Version macro : 02.00 Date dernière modification : 2019-07-29 Version FreeCAD : Toutes Téléchargement : [Icône pour votre Barre d'outils](https://www.freecadweb.org/wiki/images/6/66/Macro_Ellipse-Center%2B2Points.png) Auteur: Eriossoltero |
| Auteur                                                                                                                                                                                                                                                                                                                                              |
| [Eriossoltero](/User:Eriossoltero "User:Eriossoltero")                                                                                                                                                                                                                                                                                              |
| Téléchargement                                                                                                                                                                                                                                                                                                                                      |
| [Icône pour votre Barre d'outils](https://www.freecadweb.org/wiki/images/6/66/Macro_Ellipse-Center%2B2Points.png)                                                                                                                                                                                                                                   |
| Liens                                                                                                                                                                                                                                                                                                                                               |
| [Page des macros](/Macros_recipes/fr "Macros recipes/fr") [Comment installer une macro](/How_to_install_macros/fr "How to install macros/fr") [Comment créer une barre d'outils](/Customize_Toolbars/fr "Customize Toolbars/fr")                                                                                                                    |
| Version Macro                                                                                                                                                                                                                                                                                                                                       |
| 02.00                                                                                                                                                                                                                                                                                                                                               |
| Dernière modification                                                                                                                                                                                                                                                                                                                               |
| 2019-07-29                                                                                                                                                                                                                                                                                                                                          |
| Version(s) FreeCAD                                                                                                                                                                                                                                                                                                                                  |
| Toutes                                                                                                                                                                                                                                                                                                                                              |
| Raccourci clavier                                                                                                                                                                                                                                                                                                                                   |
| _None_                                                                                                                                                                                                                                                                                                                                              |
| Voir aussi                                                                                                                                                                                                                                                                                                                                          |
| _None_                                                                                                                                                                                                                                                                                                                                              |
|                                                                                                                                                                                                                                                                                                                                                     |
|                                                                                                                                                                                                                                                                                                                                                     |

## Description

Fait une ellipse en sélectionnant trois points (dans cet ordre): centre, rayon majeur et rayon mineur

![](/images/EllipseCenter2Point.png)

## Dernière version

La dernière version de la macro peut être téléchargée à l'adresse suivante: [EllipseCenter2Points.FCMacro](https://github.com/FreeCAD/FreeCAD-macros/blob/master/ObjectCreation/EllipseCenter2Points.FCMacro) mais le moyen le plus simple d’installer cette macro est de l'installer à l'aide du ![](/images/Std_AddonMgr.svg) [Gestionnaire des extensions](/Std_AddonMgr/fr "Std AddonMgr/fr").

## Script

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

Retrieved from "<http://wiki.freecad.org/index.php?title=Macro_Ellipse-Center%2B2Points/fr&oldid=1210423>"
