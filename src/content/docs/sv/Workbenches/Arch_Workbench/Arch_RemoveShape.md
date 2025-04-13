---
title: Arch RemoveShape
---
:::caution
THIS COMMAND IS PART OF THE INTEGRATEDBIM WORKBENCHIN V1.0This page has been updated for that version.
:::

|  |
| --- |
| Arch RemoveShape |
| Menyplacering |
| Arch → Utilities → Remove Shape |
| Arbetsbänkar |
| [Arch](/Arch_Workbench/sv "Arch Workbench/sv") |
| Standard genväg |
| *Ingen* |
| Introducerad i version |
| - |
| Se även |
| [Arch SplitMesh](/Arch_SplitMesh "Arch SplitMesh"), [MeshToShape](/Arch_MeshToShape/sv "Arch MeshToShape/sv") |
|  |

## Beskrivning

The **Arch RemoveShape** tool attempts at removing the inner cubic shape of an [Arch Wall](/Arch_Wall "Arch Wall") or [Arch Structure](/Arch_Structure "Arch Structure"), and adjusting its properties, making it totally parametric. This tool will only work if the underlying shape is cubic (exactly 6 faces, all corners have only right angles).

## Bruk

1. Select an [Arch Wall](/Arch_Wall "Arch Wall") or [Arch Structure](/Arch_Structure "Arch Structure").
2. Select the **Utils → ![](/images/Arch_RemoveShape.svg) Remove Shape from Arch** option from the menu.

## Scripting

## Skript

This tool can be used in [macros](/Macros "Macros") and from the [Python](/Python "Python") console by using the following function:

```
removeShape(objs, mark=True)

```

* Takes a list of Arch objects (`objs`) built on a cubic shape, and removes the inner shape, keeping the length, width and height as properties of the Arch object.
  + `objs` is a single object, [Arch Wall](/Arch_Wall "Arch Wall") or [Arch Structure](/Arch_Structure "Arch Structure"), or a list of them.
* If `mark` is `True`, objects that cannot be processed by this function will become red.

```
import FreeCAD, Draft, Arch

Box = FreeCAD.ActiveDocument.addObject("Part::Box", "Box")
Box.Length = 1000
Box.Width = 2000
Box.Height = 1000
FreeCAD.ActiveDocument.recompute()

Structure = Arch.makeStructure(Box)
FreeCAD.ActiveDocument.recompute()

Arch.removeShape(Structure)
FreeCAD.ActiveDocument.recompute()

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Arch_RemoveShape/sv&oldid=1437833>"