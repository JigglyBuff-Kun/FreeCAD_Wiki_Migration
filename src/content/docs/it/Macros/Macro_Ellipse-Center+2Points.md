---
title: Ellisse dato il centro e due punti
---

|                                                                                                                                                                                                                                                                                                           |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Ellisse da centro e 2 punti                                                                                                                                                                                                                                                                               |
| Descrizione                                                                                                                                                                                                                                                                                               |
| Crea un'ellisse selezionando tre punti, in questo ordine: centro, raggio maggiore e raggio minore Versione macro: 02.00 Ultima modifica: 2019-07-29 Versione FreeCAD: Tutte Download: [ToolBar Icon](https://www.freecadweb.org/wiki/images/6/66/Macro_Ellipse-Center%2B2Points.png) Autore: Eriossoltero |
| Autore                                                                                                                                                                                                                                                                                                    |
| [Eriossoltero](/User:Eriossoltero "User:Eriossoltero")                                                                                                                                                                                                                                                    |
| Download                                                                                                                                                                                                                                                                                                  |
| [ToolBar Icon](https://www.freecadweb.org/wiki/images/6/66/Macro_Ellipse-Center%2B2Points.png)                                                                                                                                                                                                            |
| Link                                                                                                                                                                                                                                                                                                      |
| [Raccolta di macro](/Macros_recipes/it "Macros recipes/it") [Come installare le macro](/How_to_install_macros/it "How to install macros/it") [Personalizzare la toolbar](/Customize_Toolbars/it "Customize Toolbars/it")                                                                                  |
| Versione macro                                                                                                                                                                                                                                                                                            |
| 02.00                                                                                                                                                                                                                                                                                                     |
| Data ultima modifica                                                                                                                                                                                                                                                                                      |
| 2019-07-29                                                                                                                                                                                                                                                                                                |
| Versioni di FreeCAD                                                                                                                                                                                                                                                                                       |
| Tutte                                                                                                                                                                                                                                                                                                     |
| Scorciatoia                                                                                                                                                                                                                                                                                               |
| _Nessuna_                                                                                                                                                                                                                                                                                                 |
| Vedere anche                                                                                                                                                                                                                                                                                              |
| _Nessuno_                                                                                                                                                                                                                                                                                                 |
|                                                                                                                                                                                                                                                                                                           |
|                                                                                                                                                                                                                                                                                                           |

## Descrizione

Crea un'ellisse selezionando tre punti, in questo ordine: centro, raggio maggiore e raggio minore.

![](/images/EllipseCenter2Point.png)

## Ultima versione

L'ultima versione della macro si trova in [EllipseCenter2Points.FCMacro](https://github.com/FreeCAD/FreeCAD-macros/blob/master/ObjectCreation/EllipseCenter2Points.FCMacro) ma il modo più semplice per installare questa macro è attraverso il [Addon Manager](/Std_AddonMgr/it "Std AddonMgr/it").

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

Retrieved from "<http://wiki.freecad.org/index.php?title=Macro_Ellipse-Center%2B2Points/it&oldid=1186381>"
