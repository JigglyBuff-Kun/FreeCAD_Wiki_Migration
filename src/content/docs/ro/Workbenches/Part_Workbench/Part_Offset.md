---
title: Part Offset
---
:::caution
This documentation is not finished. Please help and contribute documentation.GuiCommand modelexplains how commands should be documented. BrowseCategory:UnfinishedDocuto see more incomplete pages like this one. SeeCategory:Command Referencefor all commands.SeeWikiPagesto learn about editing the wiki pages, and go toHelp FreeCADto learn about other ways in which you can contribute.
:::

|  |
| --- |
| Part Offset |
| Menu location |
| Part → 3D Offset |
| Workbenches |
| [Part](/Part_Workbench "Part Workbench") |
| Default shortcut |
| *None* |
| Introduced in version |
| - |
| See also |
| [Thickness](/Part_Thickness "Part Thickness"), [Part 2D Offset](/Part_Offset2D "Part Offset2D") |
|  |

## Descriere

Instrumentul Offset Part 3D creează copii ale unei forme selectate la o anumită distanță față de forma de bază.

![](/images/PartOffset0.png) → ![](/images/PartOffset1.png)

## Cum se folosește

De completat

## Notes

* [App Link](/App_Link "App Link") objects linked to the appropriate object types and [App Part](/App_Part "App Part") containers with the appropriate visible objects inside can also be used as source objects. [introduced in 0.20](/Release_notes_0.20 "Release notes 0.20")

![](/images/PartOffset1_it.png)

![](/images/PartOffset2_it.png)

![](/images/PartOffset0.png) → ![](/images/PartOffset1.png)

Object with small offset and rounded (arc) corners.

![](/images/PartOffset3.png)

Same object with sharp (intersection) corners.

![](/images/PartOffset2.png)

Same object with thick distance overfilling the front left gap and allowed intersections.

![](/images/PartOffset4.png)

Arbitrary shape ([Draft Wire](/Draft_Wire "Draft Wire")) with a 3D Offset (ignores MODE parameter).

![](/images/PartOffset5.png)

Same shape with a 3D Offset as SKIN and *filled* offset.

![](/images/PartOffset6.png)

*filled* offset with 2 Cylinders creating boolean cuts. Cylinder A goes through the FILL whilst Cylinder B only goes through the FILL and NOT through the source 2D shape.

## Exemplu

* Date**Offset**: Distance to offset the faces of the shape.
* Date**Mode**: Mode of creation. *Skin* creates a new shape around the source shape. *Pipe* (todo). *RectoVerso* (todo).
* Date**Join type**: How the new corners are build up. *Intersection* gives sharp corners by linear extension of the edges. *Arc* and *Tangent* give rounded corners.

1. Option: Intersection: Allows offsets pointing inwards to "overflow" the gap by intersecting the resulting shape until opposite faces are reached.
2. Option: Self Intersection: (todo).
3. Option: Fill Offset: When the shape was 2 dimensional, the gap between the 2 shapes gets filled. The fill is now a solid, hence the source shape is not a solid. Thus boolean operations may lead to strange results. (see example below).

Retrieved from "<http://wiki.freecad.org/index.php?title=Part_Offset/ro&oldid=1476464>"