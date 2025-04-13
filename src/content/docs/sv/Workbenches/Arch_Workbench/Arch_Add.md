---
title: Arch Add
---
:::caution
THIS COMMAND IS PART OF THE INTEGRATEDBIM WORKBENCHIN V1.0This page has been updated for that version.
:::

|  |
| --- |
| Arch Add |
| Menyplacering |
| Arch → Add |
| Arbetsbänkar |
| [Arch](/Arch_Workbench/sv "Arch Workbench/sv") |
| Standard genväg |
| *Ingen* |
| Introducerad i version |
| - |
| Se även |
| [Arch Remove](/Arch_Remove/sv "Arch Remove/sv") |
|  |

## Beskrivning

Add verkytget låter dig göra 2 olika operationer:

* Lägga till [form](/Part_Workbench/sv "Part Workbench/sv")-baserade objekt till en Arch komponent, som en [vägg](/Arch_Wall/sv "Arch Wall/sv") eller [struktur](/Arch_Structure/sv "Arch Structure/sv"). Dessa objekt blir sedan en del av Arch komponenten, och låter dig förändra dess form men behåller dess grundegenskaper som bredd och höjd
* lägga till Arch komponenter, som [väggar](/Arch_Wall/sv "Arch Wall/sv") eller [strukturer](/Arch_Structure/sv "Arch Structure/sv"), till en gruppbaserat Arch objekt som [golv](/Arch_Floor/sv "Arch Floor/sv").

The counterpart of this tool is the ![](/images/Arch_Remove.svg) [Arch Remove](/Arch_Remove "Arch Remove") tool.

![](/images/Arch_Add_example.jpg)

*I bilden ovan adderas en låda till en vägg.*

## Bruk

1. Välj de objekt som ska läggas till, och sedan "värd" objektet (värdobjektet måste väljas sist)
2. Klicka på ![](/images/Arch_Add.png) **Add** knappen

## Scripting

*See also:* [Arch API](/Arch_API "Arch API") and [FreeCAD Scripting Basics](/FreeCAD_Scripting_Basics "FreeCAD Scripting Basics").

The Add tool can be used in [macros](/Macros "Macros") and from the [Python](/Python "Python") console by using the following function:

:   ```
    addComponents(objectsList, host)

    ```

:   The above code snippet adds the given objects in `objectsList` to the given `host` object.
:   **Note:** `objectsList` can be a single object or a list of objects.

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

Retrieved from "<http://wiki.freecad.org/index.php?title=Arch_Add/sv&oldid=1432729>"