---
title: Área del nave
---
|  |
| --- |
| Ship AreasCurve |
| Menu location |
| Ship design → Areas curve |
| Workbenches |
| [Ship](/Ship_Workbench "Ship Workbench") |
| Default shortcut |
| *None* |
| Introduced in version |
| - |
| See also |
| *None* |
|  |

## Descripción

Trazar la curva de áreas transversales

![](/images/FreeCAD-Ship-s60Areas.png)

Design draft transversal areas curve

The transversal areas curve offers really valuable information in the first stages of a ship's design, as it gives an idea of the shape and volume distribution of the ship.

Special attention should be paid to the eventual shoulders of the curve, which would indicate a large ship resistance (less efficiency in other words).

## Uso

In order to compute the transversal areas curve, select a **Ship instance** (see [Ship CreateShip](/Ship_CreateShip "Ship CreateShip")), and invoke **Ship design → ![](/images/Ship_AreasCurve.svg) Areas curve**.

The task panel and a free-surface annotation in the [3D view](/3D_view "3D view") are shown. The annotation is temporary and will be removed when you close the tool, so don't worry about that.

By default the design ship draft is selected, as well as a null trim angle. You are free to edit both fields. Each time the draft and trim data is edited some basic information regarding the submerged part of the ship is updated in the text box.

You can also select the number of transversal sections to be considered. The larger the number of sections the better resolution will be obtained, at a cost of longer computation time.

When you press the Accept button, the computation starts. It may hang FreeCAD for a while, be patient. When the computation finishes a plot of the transversal areas curve is created, as well as a spreadsheet with that information.

## Tutoriales

* [Tutorial de FreeCAD-Nave s60](/FreeCAD-Ship_s60_tutorial/es "FreeCAD-Ship s60 tutorial/es")
* [Tutorial de FreeCAD-Nave s60 (II)](/FreeCAD-Ship_s60_tutorial_(II)/es "FreeCAD-Ship s60 tutorial (II)/es")

Retrieved from "<http://wiki.freecad.org/index.php?title=Ship_AreasCurve/es&oldid=1133104>"