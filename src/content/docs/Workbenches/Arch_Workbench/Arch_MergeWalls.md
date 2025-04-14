---
title: Arch MergeWalls
---

:::caution
THIS COMMAND IS PART OF THE INTEGRATEDBIM WORKBENCHIN V1.0This page has been updated for that version.
:::

|                                       |
| ------------------------------------- |
| Arch MergeWalls                       |
| Menu location                         |
| Utils → Merge Walls                   |
| Workbenches                           |
| [BIM](/BIM_Workbench "BIM Workbench") |
| Default shortcut                      |
| _None_                                |
| Introduced in version                 |
| -                                     |
| See also                              |
| [Arch Wall](/Arch_Wall "Arch Wall")   |
|                                       |

## Description

The **Arch MergeWalls** tool merges [Arch Walls](/Arch_Wall "Arch Wall").

## Usage

1. Do one of the following:
   - Select a single wall with one or more [additions](/Arch_Add "Arch Add") that are also walls.
   - Select two or more walls.
2. In both cases the walls must have the same Data**Height**, Data**Width** and Data**Align** properties.
3. Select the **Utils → ![](/images/Arch_MergeWalls.svg) Merge Walls** option from the menu.

## Notes

- [Arch Add](/Arch_Add "Arch Add") can merge walls even if they have different heights, widths and alignments.

## Scripting

_See also:_ [Arch API](/Arch_API "Arch API") and [FreeCAD Scripting Basics](/FreeCAD_Scripting_Basics "FreeCAD Scripting Basics").

This tool can be used in [macros](/Macros "Macros") and from the [Python](/Python "Python") console by using the following function:

```
base = joinWalls(walls, delete=False)

```

Example:

```
import FreeCAD, Draft, Arch

p1 = FreeCAD.Vector(0, 0, 0)
p2 = FreeCAD.Vector(2000, 0, 0)
baseline = Draft.makeLine(p1, p2)
Wall1 = Arch.makeWall(baseline, length=None, width=150, height=2000)
FreeCAD.ActiveDocument.recompute()

Wall2 = Arch.makeWall(None, length=2000, width=200, height=1000)
FreeCAD.ActiveDocument.recompute()

base = Arch.joinWalls([Wall1, Wall2])

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Arch_MergeWalls/en&oldid=1478725>"
