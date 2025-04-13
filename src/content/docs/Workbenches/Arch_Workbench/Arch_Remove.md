---
title: Arch Remove
---

:::caution
THIS COMMAND IS PART OF THE INTEGRATEDBIM WORKBENCHIN V1.0This page has been updated for that version.
:::

|                                                                                   |
| --------------------------------------------------------------------------------- |
| Arch Remove                                                                       |
| Menu location                                                                     |
| Modify → Remove component                                                         |
| Workbenches                                                                       |
| [BIM](/BIM_Workbench "BIM Workbench")                                             |
| Default shortcut                                                                  |
| _None_                                                                            |
| Introduced in version                                                             |
| -                                                                                 |
| See also                                                                          |
| [Arch CutPlane](/Arch_CutPlane "Arch CutPlane"), [Arch Add](/Arch_Add "Arch Add") |
|                                                                                   |

## Description

The **Arch Remove** tools allows you to do 2 kinds of operations:

- Remove a subcomponent from an Arch object, for example remove a box that has been added to a wall, like in the ![](/src/assets/images/Arch_Add.svg) [Arch Add](/Arch_Add "Arch Add") example.
- Subtract a [shape](/Part_Workbench "Part Workbench")-based object from an Arch component such as a ![](/src/assets/images/Arch_Wall.svg) [Arch Wall](/Arch_Wall "Arch Wall") or ![](/src/assets/images/Arch_Structure.svg) [Arch Structure](/Arch_Structure "Arch Structure")

The counterpart of this tool is the ![](/src/assets/images/Arch_Add.svg) [Arch Add](/Arch_Add "Arch Add") tool.

![](/src/assets/images/Arch_Remove_example.jpg)

A box subtracted from a wall, leaving a hole in it.

## Usage

1. Select a subcomponent inside an Arch object.
2. Press the ![](/src/assets/images/Arch_Remove.svg) [Remove component](/Arch_Remove "Arch Remove") button, or **Modify → ![](/src/assets/images/Arch_Remove.svg) Remove component** from the top menu.

Or

1. Select objects to be subtracted, the last object selected must the Arch object from which the other objects will be subtracted.
2. Press the ![](/src/assets/images/Arch_Remove.svg) [Remove component](/Arch_Remove "Arch Remove") button, or **Modify → ![](/src/assets/images/Arch_Remove.svg) Remove component** from the top menu.

## Scripting

_See also:_ [Arch API](/Arch_API "Arch API") and [FreeCAD Scripting Basics](/FreeCAD_Scripting_Basics "FreeCAD Scripting Basics").

The Remove tool can be used in [macros](/Macros "Macros") and from the [Python](/Python "Python") console by using the following function:

```
removeComponents(objectsList, host=None)

```

- Removes the given objects in `objectsList` from their parents.
- If a `host` object is specified, this function will try adding the objects in `objectsList` as holes to the `host`.

Example:

```
import FreeCAD, Draft, Arch

Line = Draft.makeWire([FreeCAD.Vector(0, 0, 0),FreeCAD.Vector(2000, 2000, 0)])
Wall = Arch.makeWall(Line, width=150, height=3000)

Box = FreeCAD.ActiveDocument.addObject("Part::Box", "Box")
Box.Length = 900
Box.Width = 450
Box.Height = 2000
FreeCAD.ActiveDocument.recompute()

Draft.rotate(Box, 45)
Draft.move(Box, FreeCAD.Vector(1000, 700, 0))

Arch.removeComponents(Box, Wall)
FreeCAD.ActiveDocument.recompute()

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Arch_Remove/en&oldid=1437750>"
