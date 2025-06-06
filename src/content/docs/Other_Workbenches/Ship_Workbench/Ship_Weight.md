---
title: Ship Weight
---

|                                          |
| ---------------------------------------- |
| Ship Weight                              |
| Menu location                            |
| Weights → Create a new ship weight       |
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

Add a weight to the ship instance.

Until this point, all the tools in Ship workbench are based on a **Ship instance** (see [Ship CreateShip](/Ship_CreateShip "Ship CreateShip")), which only holds information regarding the ship shape. Following the progressive data introduction system, at this point the user might define load conditions, which involves creating weights with this tool, creating tanks (see [Ship Tank](/Ship_Tank "Ship Tank")) and assembling them in load conditions (see [Ship LoadCondition](/Ship_LoadCondition "Ship LoadCondition")). With that information the center of gravity of the ship can be defined, enabling further computations.

## Usage

In order to create a weight, select the weight geometry (see below) and invoke **Weights → ![](/images/Ship_Weight.svg) Create a new ship weight**.

The task panel is shown, where you must select the **Ship instance** (see [Ship CreateShip](/Ship_CreateShip "Ship CreateShip")) in which the weight shall be added, as well as the density/mass.

When the Accept button is pressed, a new weight entity is created inside the chosen **Ship instance**.

## Levels of abstraction

As already discussed, the weights can be defined on top of different kind of geometries, allowing different levels of abstraction. If several of those entities are simultaneously selected, the lower possible level of abstraction is selected.

### Solid/volumetric weights

This is the lower level of abstraction, where the solid shape of the weight is provided, requiring a detailed knowledge of the element. In case solids are found in the selected geometry, this is the abstraction type that will be applied, discarding any other type of geometry.

Solid/volumetric weights are featured by its material density (in kg/m3, or any other compatible unit).

### Surface/area weights

The next level of abstraction are the surface-based weights. This level of abstraction can be considered for plates, or in general for any surface element with a small width.

![](/images/Thin_Plate.png)

Schematic view of a thin plate

In case no solids can be found in the selected geometry but surfaces, this is the abstraction type that will be applied, discarding the lines and vertices.

Surface/area weights are featured by its area density (in kg/m2, or any other compatible unit), i.e. the material density multiplied by the width of the element.

### Linear weights

The next level of abstraction are the line-based weights. This level of abstraction can be considered for beams, or in general for any element with small cross-sectional area compared with the longitudinal dimension.

![](/images/Thin_Beam.png)

Schematic view of a thin beam

In case neither solids nor surfaces can be found in the selected geometry, but edges/lines are indeed present, this is the abstraction type that will be applied. The vertices are indeed discarded.

Linear weights are featured by its linear density (in kg/m, or any other compatible unit), i.e. the material density multiplied by the cross-sectional area.

### Punctual weights

This is the highest level of abstraction, in which the whole weight is represented by a single point (if several points are provided the final application point will be averaged). In case just vertices can be found in the selected geometry, this is the abstraction type that will be applied.

Punctual weights are featured by its mass (in kg, or any other compatible unit).

## Tutorials

- [FreeCAD-Ship s60 tutorial](/FreeCAD-Ship_s60_tutorial "FreeCAD-Ship s60 tutorial")
- [FreeCAD-Ship s60 tutorial (II)](</FreeCAD-Ship_s60_tutorial_(II)> "FreeCAD-Ship s60 tutorial (II)")

Retrieved from "<http://wiki.freecad.org/index.php?title=Ship_Weight/en&oldid=1133114>"
