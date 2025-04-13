---
title: Arch Remove
---
:::caution
THIS COMMAND IS PART OF THE INTEGRATEDBIM WORKBENCHIN V1.0This page has been updated for that version.
:::

|  |
| --- |
| Arch Remove |
| Menyplacering |
| Arch → Remove |
| Arbetsbänkar |
| [Arch](/Arch_Workbench/sv "Arch Workbench/sv") |
| Standard genväg |
| *Ingen* |
| Introducerad i version |
| - |
| Se även |
| [Arch Add/sv](/Arch_Add/sv "Arch Add/sv") |
|  |

#### Beskrivning

Remove verktyget låter dig göra 2 sorters operationer:

* Ta bort en delkomponent från ett Arch objekt, till exempel ta bort en låda som har adderats till en vägg, som i [Arch Add](/Arch_Add/sv "Arch Add/sv") exemplet
* Subtrahera en [formbaserat](/Part_Workbench/sv "Part Workbench/sv") objekt från en Arch komponent som en [vägg](/Arch_Wall/sv "Arch Wall/sv") eller [struktur](/Arch_Structure/sv "Arch Structure/sv")

The counterpart of this tool is the ![](/images/Arch_Add.svg) [Arch Add](/Arch_Add "Arch Add") tool.

![](/images/Arch_Remove_example.jpg)

*I bilden ovan, så subtraheras en låda från en vägg*

#### Bruk

1. Välj en delkomponent inuti ett Arch objekt, **eller**:
2. välj de objekt som ska subtraheras, och sedan den Arch komponent från vilken de ska subtraheras (arch komponenten måste vara den sista saken du väljer)
3. Klicka på ![](/images/Arch_Remove.png) **ta bort** knappen

Or

1. Select objects to be subtracted, the last object selected must the Arch object from which the other objects will be subtracted.
2. Press the ![](/images/Arch_Remove.svg) [Remove component](/Arch_Remove "Arch Remove") button, or **Modify → ![](/images/Arch_Remove.svg) Remove component** from the top menu.

## Scripting

*See also:* [Arch API](/Arch_API "Arch API") and [FreeCAD Scripting Basics](/FreeCAD_Scripting_Basics "FreeCAD Scripting Basics").

The Remove tool can be used in [macros](/Macros "Macros") and from the [Python](/Python "Python") console by using the following function:

```
removeComponents(objectsList, host=None)

```

* Removes the given objects in `objectsList` from their parents.
* If a `host` object is specified, this function will try adding the objects in `objectsList` as holes to the `host`.

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

Retrieved from "<http://wiki.freecad.org/index.php?title=Arch_Remove/sv&oldid=1437749>"