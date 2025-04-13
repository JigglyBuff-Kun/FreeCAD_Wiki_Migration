---
title: Arch Add
---

:::caution
THIS COMMAND IS PART OF THE INTEGRATEDBIM WORKBENCHIN V1.0This page has been updated for that version.
:::

|                                           |
| ----------------------------------------- |
| Arch Add                                  |
| Menu location                             |
| Modify → Add component                    |
| Workbenches                               |
| [BIM](/BIM_Workbench "BIM Workbench")     |
| Default shortcut                          |
| _None_                                    |
| Introduced in version                     |
| -                                         |
| See also                                  |
| [Arch Remove](/Arch_Remove "Arch Remove") |
|                                           |

## Description

The Add tool allows you to do 4 kinds of operations:

- Add [shape](/Part_Workbench "Part Workbench")-based objects to an Arch component, such as a ![](/src/assets/images/Arch_Wall.svg) [wall](/Arch_Wall "Arch Wall") or ![](/src/assets/images/Arch_Structure.svg) [structure](/Arch_Structure "Arch Structure"). These objects make then part of the Arch component, and allow you to modify its shape but keeping its base properties such as width and height
- Add Arch components, such as a ![](/src/assets/images/Arch_Wall.svg) [Arch Walls](/Arch_Wall "Arch Wall") or ![](/src/assets/images/Arch_Structure.svg) [Arch Structures](/Arch_Structure "Arch Structure"), to a group-based arch object such as ![](/src/assets/images/Arch_Floor.svg) [Arch Floors](/Arch_Floor "Arch Floor").
- Add ![](/src/assets/images/Arch_Axis.svg) [Axis systems](/Arch_Axis "Arch Axis") to ![](/src/assets/images/Arch_Structure.svg) [structural objects](/Arch_Structure "Arch Structure")
- Add objects to ![](/src/assets/images/Arch_SectionPlane.svg) [section planes](/Arch_SectionPlane "Arch SectionPlane")

The counterpart of this tool is the ![](/src/assets/images/Arch_Remove.svg) [Arch Remove](/Arch_Remove "Arch Remove") tool.

![](/src/assets/images/Arch_Add_example.jpg)

A box added to a wall as a component.

## Usage

1. Select the objects to be added together. The last object selected will be the host Arch object.
2. Press the ![](/src/assets/images/Arch_Add.svg) [Add component](/Arch_Add "Arch Add") button, or use **Modify → ![](/src/assets/images/Arch_Add.svg) Add component** from the top menu.

## Scripting

_See also:_ [Arch API](/Arch_API "Arch API") and [FreeCAD Scripting Basics](/FreeCAD_Scripting_Basics "FreeCAD Scripting Basics").

The Add tool can be used in [macros](/Macros "Macros") and from the [Python](/Python "Python") console by using the following function:

: ```
addComponents(objectsList, host)

    ```

: The above code snippet adds the given objects in `objectsList` to the given `host` object.
: **Note:** `objectsList` can be a single object or a list of objects.

Example:

```
import FreeCAD, Arch, Draft, Part

p1 = FreeCAD.Vector(0, 0, 0)
p2 = FreeCAD.Vector(2000, 2000, 0)

Line = Draft.makeWire([p1, p2])
Wall = Arch.makeWall(Line, width=150, height=2000)

p3 = FreeCAD.Vector(0, 2000, 0)
p4 = FreeCAD.Vector(3000, 0, 0)

Line2 = Draft.makeWire([p3, p4])
Wall2 = Arch.makeWall(Line2, width=150, height=2000)
FreeCAD.ActiveDocument.recompute()

Arch.addComponents(Wall2, Wall)
FreeCAD.ActiveDocument.recompute()

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Arch_Add/en&oldid=1432723>"
