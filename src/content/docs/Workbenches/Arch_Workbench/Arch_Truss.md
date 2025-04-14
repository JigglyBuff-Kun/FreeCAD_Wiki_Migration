---
title: Arch Truss
---

:::caution
THIS COMMAND IS PART OF THE INTEGRATEDBIM WORKBENCHIN V1.0This page has been updated for that version.
:::

|                                       |
| ------------------------------------- |
| Arch Truss                            |
| Menu location                         |
| 3D/BIM → Truss                        |
| Workbenches                           |
| [BIM](/BIM_Workbench "BIM Workbench") |
| Default shortcut                      |
| _None_                                |
| Introduced in version                 |
| 0.19                                  |
| See also                              |
| _None_                                |
|                                       |

## Description

The **Arch Truss** tool builds a [truss](https://en.wikipedia.org/wiki/Truss) object, either from a selected linear object (lie a [Draft Line](/Draft_Line "Draft Line") or [Sketch](/Sketcher_NewSketch "Sketcher NewSketch")), or from scratch, if no object is selected when launching the command.

![](/images/Arch_Truss_example.png)

## Usage

### Creating from a selected object

1. Use a workbench of your choice to create a single line
2. Select that line
3. Press the ![](/images/Arch_Truss.svg) [Truss](/Arch_Truss "Arch Truss") button
4. Adjust the truss properties to your liking

### Creating from scratch

1. Make sure nothing is selected
2. Press the ![](/images/Arch_Truss.svg) [Truss](/Arch_Truss "Arch Truss") button
3. Click in the 3D view to define a first point, or manually enter X, Y and Z coordinates
4. Click in the 3D view to define a second point, or manually enter X, Y and Z coordinates
5. Adjust the truss properties to your liking

## Properties

### Data

- Data**TrussAngle**: The angle of the truss
- Data**SlantType**: The slant type of this truss
- Data**Normal**: The normal direction of this truss
- Data**HeightStart**: The height of the truss at the start position
- Data**HeightEnd**: The height of the truss at the end position
- Data**StrutStartOffset**: An optional start offset for the top strut
- Data**StrutEndOffset**: An optional end offset for the top strut
- Data**StrutHeight**: The height of the main top and bottom elements of the truss
- Data**StrutWidth**: The width of the main top and bottom elements of the truss
- Data**RodType**: The type of the middle element of the truss
- Data**RodDirection**: The direction of the rods
- Data**RodSize**: The diameter or side of the rods
- Data**RodSections**: The number of rod sections
- Data**RodEnd**: If the truss has a rod at its endpoint or not
- Data**RodMode**: How to draw the rods

## Scripting

The Truss tool can be used in [macros](/Macros "Macros") and from the [Python](/Python "Python") console by using the following function:

```
Truss = makeFence([baseobj])

```

Example:

```
import FreeCAD
import Draft
import Arch

p1 = FreeCAD.Vector(0,0,0)
p2 = FreeCAD.Vector(2000,0,0)
baseline = Draft.makeLine(p1,p2)
truss = Arch.makeTruss(baseline)
truss.HeightStart = 200
truss.HeightEnd = 400
# adjust other needed properties

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Arch_Truss/en&oldid=1438498>"
