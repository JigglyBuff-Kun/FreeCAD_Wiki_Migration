---
title: Arch CloseHoles
---
:::caution
THIS COMMAND IS PART OF THE INTEGRATEDBIM WORKBENCHIN V1.0This page has been updated for that version.
:::

|  |
| --- |
| Arch CloseHoles |
| Menyplacering |
| Arch → Utilities → Close Holes |
| Arbetsbänkar |
| [Arch](/Arch_Workbench/sv "Arch Workbench/sv") |
| Standard genväg |
| *Ingen* |
| Introducerad i version |
| - |
| Se även |
| [Arch Check](/Arch_Check/sv "Arch Check/sv") |
|  |

## Beskrivning

This tool identifies holes (circular sequence of open edges) in a [Shape](/Part_Workbench "Part Workbench") object and attempts to close it by adding it a new face made from that edges sequence. You must still verify yourself that the result is a solid, though.

## Usage

1. Select a [Shape](/Part_Workbench "Part Workbench") object.
2. Select the **Utils → ![](/images/Arch_CloseHoles.svg) Close holes** option from the menu.

## Skript

*See also:* [Arch API](/Arch_API "Arch API") and [FreeCAD Scripting Basics](/FreeCAD_Scripting_Basics "FreeCAD Scripting Basics").

This tool can be used in [macros](/Macros "Macros") and from the [Python](/Python "Python") console by using the following function:

```
solid = closeHole(shape)

```

* Closes a hole in a `shape`, which is a `Part.Shape`, and returns the new `solid` object.

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

solid = Arch.closeHole(Wall.Shape)

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Arch_CloseHoles/sv&oldid=1432840>"