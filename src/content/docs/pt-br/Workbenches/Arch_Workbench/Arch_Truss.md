---
title: Treliça
---
:::caution
THIS COMMAND IS PART OF THE INTEGRATEDBIM WORKBENCHIN V1.0This page has been updated for that version.
:::

|  |
| --- |
| Arch Truss |
| Menu location |
| 3D/BIM → Truss |
| Workbenches |
| [BIM](/BIM_Workbench "BIM Workbench") |
| Default shortcut |
| *None* |
| Introduced in version |
| 0.19 |
| See also |
| *None* |
|  |

## Descrição

The **Arch Truss** tool builds a [truss](https://en.wikipedia.org/wiki/Truss) object, either from a selected linear object (lie a [Draft Line](/Draft_Line "Draft Line") or [Sketch](/Sketcher_NewSketch "Sketcher NewSketch")), or from scratch, if no object is selected when launching the command.

![](/images/Arch_Truss_example.png)

## Utilização

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

## Propriedades

### Data

* Dados**TrussAngle**: The angle of the truss
* Dados**SlantType**: The slant type of this truss
* Dados**Normal**: The normal direction of this truss
* Dados**HeightStart**: The height of the truss at the start position
* Dados**HeightEnd**: The height of the truss at the end position
* Dados**StrutStartOffset**: An optional start offset for the top strut
* Dados**StrutEndOffset**: An optional end offset for the top strut
* Dados**StrutHeight**: The height of the main top and bottom elements of the truss
* Dados**StrutWidth**: The width of the main top and bottom elements of the truss
* Dados**RodType**: The type of the middle element of the truss
* Dados**RodDirection**: The direction of the rods
* Dados**RodSize**: The diameter or side of the rods
* Dados**RodSections**: The number of rod sections
* Dados**RodEnd**: If the truss has a rod at its endpoint or not
* Dados**RodMode**: How to draw the rods

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

Retrieved from "<http://wiki.freecad.org/index.php?title=Arch_Truss/pt-br&oldid=1438499>"