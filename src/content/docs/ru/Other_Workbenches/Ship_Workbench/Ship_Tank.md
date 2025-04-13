---
title: Ship Tank/ru
---
|  |
| --- |
| Ship TankNew |
| Расположение в меню |
| Weights → Create a new tank |
| Верстаки |
| [Ship](/Ship_Workbench/ru "Ship Workbench/ru") |
| Быстрые клавиши |
| *Нет* |
| Представлено в версии |
| - |
| См. также |
| *Нет* |
|  |

## Description

Create a new tank instance in a ship instance.

Tank instances are so far similar to **Weight instances** (see [Ship Weight](/Ship_Weight "Ship Weight")), i.e. they act as weights that shall be considered for the center of gravity and displacement computation. However, they have small differences in the inputs required to setup a tank instance, as well as in the way its contribution to the ship weight is computed. Along this line tanks can only be created on top of solid/volumetric geometries, and the density is not queried until they are added to a **load condition** (see [Ship LoadCondition](/Ship_LoadCondition "Ship LoadCondition")). Afterwards, their contribution to the ship weight and center of gravity will depend on the filling level (to be defined in the **load condition**) and the ship roll and trim angle, as long as the fluid inside reshapes, effectively affecting the gravity center position (the so-called free-surface effect).

## Usage

In order to create a weight, select the tank solid geometry (the interior of the tank that will be eventually filled with fluids) and invoke **Weights → ![](/images/Ship_Tank.svg) Create a new tank**.

The task panel is shown, where you must select the **Ship instance** (see [Ship CreateShip](/Ship_CreateShip "Ship CreateShip")) in which the tank shall be added.

When the Accept button is pressed, a new tank instance is created inside the chosen **Ship instance**.

## Учебники

* [FreeCAD-Ship s60 tutorial](/FreeCAD-Ship_s60_tutorial/ru "FreeCAD-Ship s60 tutorial/ru")
* [FreeCAD-Ship s60 tutorial (II)](/FreeCAD-Ship_s60_tutorial_(II)/ru "FreeCAD-Ship s60 tutorial (II)/ru")

Retrieved from "<http://wiki.freecad.org/index.php?title=Ship_Tank/ru&oldid=1133125>"