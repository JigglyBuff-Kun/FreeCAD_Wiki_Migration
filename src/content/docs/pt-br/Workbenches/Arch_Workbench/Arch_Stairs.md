---
title: Escadas
---
:::caution
THIS COMMAND IS PART OF THE INTEGRATEDBIM WORKBENCHIN V1.0This page has been updated for that version.
:::

|  |
| --- |
| Arch Stairs |
| Menu location |
| Arch → Stairs |
| Workbenches |
| [Arch](/Arch_Workbench/pt-br "Arch Workbench/pt-br") |
| Default shortcut |
| S R |
| Introduced in version |
| 0.14 |
| See also |
| [Arch Structure](/Arch_Structure/pt-br "Arch Structure/pt-br"), [Arch Equipment](/Arch_Equipment/pt-br "Arch Equipment/pt-br") |
|  |

## Description

The [Arch Stairs](/Arch_Stairs "Arch Stairs") tool allows you to build several types of stairs automatically. Straight stairs (with or without a central landing) can be created from scratch. More complex stairs require base objects.

See the [Stairs entry in wikipedia](https://en.wikipedia.org/wiki/Stairs) for a definition of the different terms used to describe parts of stairs.

![](/images/Arch_Stairs_example.jpg)

Two constructed stairs, one with a massive structure and a landing, the other with a single stringer.

## Opções

## Usage

1. Optionally select one or more base objects, for example [Draft Lines](/Draft_Line "Draft Line"), [Draft Wires](/Draft_Wire "Draft Wire") and [Sketches](/Sketch "Sketch"):
   * Draft Wires or Sketches with two or more segments will be used to create landings. They must be on a plane parallel to the global XY plane. For example, select a U-shaped wire for a half-turn landing and an L-shaped wire for a corner landing.
   * Draft Lines and Sketches with a single edge will be used to create flights.
   * If the vertices of all lines and wires have correct Z coordinates, the created stairs will use this information. A Sketch (plane-parallel to the XY plane) with a single edge, or a Draft Line without a delta Z will also work for a flight, the Height is then be used to construct the flight.
   * The base objects must be selected in the correct order starting with the bottom object.
2. Press the ![](/images/Arch_Stairs.svg) [Stairs](/Arch_Stairs "Arch Stairs") button, or press S, R keys.
3. Adjust the desired properties. Some parts of the stairs, such as the structure, might not appear immediately, if any of the properties makes it impossible, such as a structure thickness of 0.

![](/images/Stairs_and_Landing_02.png)

![](/images/Stairs_and_Landing_01.png)

![](/images/Arch_Stairs_Complex_Example.png)

Complex stairs based on a selection of lines and wired as shown on the left.  
In red the wires used for the landings at Z=1500mm, Z=3000mm and Z=4500mm.  
In black the lines connecting them used for the flights.

## Propriedades

An Arch Stairs object shares the common properties and behaviors of all [Arch Components](/Arch_Component "Arch Component").

### Data

Segment and Parts

* Dados**Abs Top** (`Vector`): (read-only) The absolute top level the stairs lead to.
* Dados**Last Segment** (`Link`): Last segment (flight or landing) of an Arch Stairs connecting to this segment. The start level of the stairs will be the end level of this last segment.
* Dados**Outline Left** (`VectorList`): The left outline of the stairs (read-only).
* Dados**Outline Left All** (`VectorList`): The left outline of all segments of the stairs (read-only).
* Dados**Outline Right** (`VectorList`): The right outline of the stairs (read-only).
* Dados**Outline Right All** (`VectorList`): The right outline of all segments of the stairs (read-only).
* Dados**Railing Height Left** (`Length`): Height of the left railing of the stairs or landing.
* Dados**Railing Height Right** (`Length`): Height of the right railing of the stairs or landing.
* Dados**Railing Left** (`LinkHidden`): The left railing object. [introduced in 0.20](/Release_notes_0.20 "Release notes 0.20"): Property type updated from `String` to `LinkHidden`.
* Dados**Railing Offset Left** (`Length`): Offset of the left railing from the edge of the stairs or landing.
* Dados**Railing Offset Right** (`Length`): Offset of the right railing from the edge of the stairs or landing.
* Dados**Railing Right** (`LinkHidden`): The right railing object. [introduced in 0.20](/Release_notes_0.20 "Release notes 0.20"): Property type updated from `String` to `LinkHidden`.

Stairs

* Dados**Align** (`Enumeration`): The alignment of the stairs on the baseline. Only used if a baseline is defined. Can be `Left`, `Right` or `Center`.
* Dados**Height** (`Length`): The total height of the stairs. Only used if no baseline is defined, or if the baseline is horizontal. Ignored if Dados**Riser Height Enforce** is non-zero.
* Dados**Length** (`Length`): The total length of the stairs if no baseline is defined. Ignored if Dados**Tread Depth Enforce** is non-zero.
* Dados**Width** (`Length`): The width of the stairs.
* Dados**Width of Landing** (`FloatList`): If the Dados**Number Of Steps** is 1, the stairs object acts as a landing. When this is the case and the baseline is multi-segment, the width of the first segment of the landing follows the Dados**Width**, and the widths of subsequent segments follow the list set here.

Steps

* Dados**Blondel Ratio** (`Float`): (read-only) The calculated Blondel ratio. This ratio indicates comfortable stairs and should be between 62 and 64cm or 24.5 and 25.5in.
* Dados**Landing Depth** (`Length`): The depth of the landing of the flight, if enabled in Dados**Landings**. Defaults to the Dados**Width** if 0.
* Dados**Nosing** (`Length`): The size of the nosing.
* Dados**Number Of Steps** (`Integer`): The numbers of steps (risers). Must be at least 2 for a single flight, and at least 4 for stairs with a central landing.
* Dados**Riser Height** (`Length`): (read-only) The height of the risers. If Dados**Riser Height Enforce** is 0 it is calculated (Dados**Height** / Dados**Number of Steps**). Else it is the same as Dados**Riser Height Enforce**.
* Dados**Riser Height Enforce** (`Length`): The enforced height of the risers.
* Dados**Riser Thickness** (`Length`): The thickness of the risers.
* Dados**Tread Depth** (`Length`): (read-only) The depth of the treads. If Dados**Tread Depth Enforce** is 0 it is calculated (Dados**Length** / Dados**Number of Steps**). Else it is the same as Dados**Tread Depth Enforce**.
* Dados**Tread Depth Enforce** (`Length`): The enforced depth of the treads.
* Dados**Tread Thickness** (`Length`): The thickness of the treads.

Structure

* Dados**Connection Down Start Stairs** (`Enumeration`): The type of connection between the lower floor slab and the start of the stairs. Can be `HorizontalCut`, `VerticalCut` or `HorizontalVerticalCut`.
* Dados**Connection End Stairs Up** (`Enumeration`): The type of connection between the end of the stairs and the upper floor slab. Can be `toFlightThickness` or `toSlabThickness`.
* Dados**Down Slab Thickness** (`Length`): The thickness of the lower floor slab.
* Dados**Flight** (`Enumeration`): The direction of the flight after the landing. Can be `Straight`, `HalfTurnLeft` or `HalfTurnRight`. The Dados**Landings** property must be set to `At center`.
* Dados**Landings** (`Enumeration`): The type of landings. Can be `None` or `At center` (`At each corner` not implemented yet).
* Dados**Stringer Overlap** (`Length`): The overlap of the stringers above the bottom of the treads.
* Dados**Stringer Width** (`Length`): The width of the stringers.
* Dados**Structure** (`Enumeration`): The structure type of the stairs. Can be `None`, `Massive`, `One stringer` or `Two stringers`. For the last two options, the Dados**Stringer Width** and Dados**Tread Thickness** properties must have non-zero values.
* Dados**Structure Offset** (`Length`): The offset between the border of the stairs and the structure.
* Dados**Structure Thickness** (`Length`): The thickness of the structure.
* Dados**Up Slab Thickness** (`Length`): The thickness of the upper floor slab.
* Dados**Winders** (`Enumeration`): The type of winders. Not implemented.

## Limitations

* Straight, HalfTurnLeft or HalfTurnRight stairs and landings are available at the moment
* See the [forum entry](http://forum.freecadweb.org/viewtopic.php?f=23&t=6534) for circle stairs.
* See the [forum announcement](http://forum.freecadweb.org/viewtopic.php?f=9&t=4564).

## Scripting

*See also:* [Arch API](/Arch_API "Arch API") and [FreeCAD Scripting Basics](/FreeCAD_Scripting_Basics "FreeCAD Scripting Basics").

The Stairs tool can be used in [macros](/Macros "Macros") and from the [Python](/Python "Python") console by using the following function:

```
Stairs = makeStairs(baseobj=None, length=None, width=None, height=None, steps=None, name="Stairs")

```

* Creates a `Stairs` object from the given `baseobj`.
* If `baseobj` is not given, it will use `length`, `width`, `height`, and `steps`, to build a solid object.

Example:

```
import Arch

Stairs = Arch.makeStairs(length=5000, width=1200, height=3000, steps=14)

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Arch_Stairs/pt-br&oldid=1539751>"