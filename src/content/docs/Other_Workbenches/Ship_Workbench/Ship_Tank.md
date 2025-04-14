---
title: Ship Tank
---

|                                          |
| ---------------------------------------- |
| Ship Tank                                |
| Menu location                            |
| Weights → Create a new tank              |
| Workbenches                              |
| [Ship](/Ship_Workbench "Ship Workbench") |
| Default shortcut                         |
| _None_                                   |
| Introduced in version                    |
| -                                        |
| See also                                 |
| _None_                                   |
|                                          |

## Description

Create a new tank instance in a ship instance.

Tank instances are so far similar to **Weight instances** (see [Ship Weight](/Ship_Weight "Ship Weight")), i.e. they act as weights that shall be considered for the center of gravity and displacement computation. However, they have small differences in the inputs required to setup a tank instance, as well as in the way its contribution to the ship weight is computed. Along this line tanks can only be created on top of solid/volumetric geometries, and the density is not queried until they are added to a **load condition** (see [Ship LoadCondition](/Ship_LoadCondition "Ship LoadCondition")). Afterwards, their contribution to the ship weight and center of gravity will depend on the filling level (to be defined in the **load condition**) and the ship roll and trim angle, as long as the fluid inside reshapes, effectively affecting the gravity center position (the so-called free-surface effect).

## Usage

In order to create a weight, select the tank solid geometry (the interior of the tank that will be eventually filled with fluids) and invoke **Weights → ![](/images/Ship_Tank.svg) Create a new tank**.

The task panel is shown, where you must select the **Ship instance** (see [Ship CreateShip](/Ship_CreateShip "Ship CreateShip")) in which the tank shall be added.

When the Accept button is pressed, a new tank instance is created inside the chosen **Ship instance**.

## Tutorials

- [FreeCAD-Ship s60 tutorial](/FreeCAD-Ship_s60_tutorial "FreeCAD-Ship s60 tutorial")
- [FreeCAD-Ship s60 tutorial (II)](</FreeCAD-Ship_s60_tutorial_(II)> "FreeCAD-Ship s60 tutorial (II)")

Retrieved from "<http://wiki.freecad.org/index.php?title=Ship_Tank/en&oldid=1133121>"
