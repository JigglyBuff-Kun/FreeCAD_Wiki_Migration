---
title: Architektura Schody
---
:::caution
THIS COMMAND IS PART OF THE INTEGRATEDBIM WORKBENCHIN V1.0This page has been updated for that version.
:::

|  |
| --- |
| Arch Schody |
| Umístění Menu |
| Arch → Stairs |
| Pracovní stoly |
| [Modul architektura](/Arch_Workbench/cs "Arch Workbench/cs") |
| Výchozí zástupce |
| S R |
| Představen ve verzi |
| 0.14 |
| Viz také |
| [Arch Structure/cs](/Arch_Structure/cs "Arch Structure/cs"), [Arch Equipment/cs](/index.php?title=Arch_Equipment/cs&action=edit&redlink=1 "Arch Equipment/cs (page does not exist)") |
|  |

## Description

## Description

The stairs tool allows you to build automatically several types of stairs. At the moment, only straight stairs (with or without a central landing) are supported. Stairs can be built from scratch, or from a straight [line](/Draft_Line "Draft Line"), in which case the stairs follow the line. If the line is not horizontal but has a vertical inclination, the stairs will also follow its slope.

## Popis

Nástroj Schody pro vytváření a definování schodišť jakéhokoliv typu

See the [Stairs entry in wikipedia](https://en.wikipedia.org/wiki/Stairs) for a definition of the different terms used to describe parts of stairs.

![](/images/Arch_Stairs_example.jpg)

*Na obrázku nahoře jsou vytvořena dvě schodiště, jedno s plnou strukturou a podestou a druhé s jednotlivými stupni.*

## Options

## Usage

## Použití

Stiskněte tlačítko ![](/images/Arch_Stairs.png) Schody nebo klávesy S, R

1. Nastavte požadované vlastnosti. Některé z části schodiště, jako je struktura, se nemusí projevit okamžitě, pokud je to u některých vlastností nemožné, jako je třeba tloušťka struktury nastavená na nulu.

![](/images/Stairs_and_Landing_02.png)

![](/images/Stairs_and_Landing_01.png)

![](/images/Arch_Stairs_Complex_Example.png)

Complex stairs based on a selection of lines and wired as shown on the left.  
In red the wires used for the landings at Z=1500mm, Z=3000mm and Z=4500mm.  
In black the lines connecting them used for the flights.

## Vlastnosti

An Arch Stairs object shares the common properties and behaviors of all [Arch Components](/Arch_Component "Arch Component").

### Data

Segment and Parts

* Údaje**Abs Top** (`Vector`): (read-only) The absolute top level the stairs lead to.
* Údaje**Last Segment** (`Link`): Last segment (flight or landing) of an Arch Stairs connecting to this segment. The start level of the stairs will be the end level of this last segment.
* Údaje**Outline Left** (`VectorList`): The left outline of the stairs (read-only).
* Údaje**Outline Left All** (`VectorList`): The left outline of all segments of the stairs (read-only).
* Údaje**Outline Right** (`VectorList`): The right outline of the stairs (read-only).
* Údaje**Outline Right All** (`VectorList`): The right outline of all segments of the stairs (read-only).
* Údaje**Railing Height Left** (`Length`): Height of the left railing of the stairs or landing.
* Údaje**Railing Height Right** (`Length`): Height of the right railing of the stairs or landing.
* Údaje**Railing Left** (`LinkHidden`): The left railing object. [introduced in 0.20](/Release_notes_0.20 "Release notes 0.20"): Property type updated from `String` to `LinkHidden`.
* Údaje**Railing Offset Left** (`Length`): Offset of the left railing from the edge of the stairs or landing.
* Údaje**Railing Offset Right** (`Length`): Offset of the right railing from the edge of the stairs or landing.
* Údaje**Railing Right** (`LinkHidden`): The right railing object. [introduced in 0.20](/Release_notes_0.20 "Release notes 0.20"): Property type updated from `String` to `LinkHidden`.

Stairs

* Údaje**Align** (`Enumeration`): The alignment of the stairs on the baseline. Only used if a baseline is defined. Can be `Left`, `Right` or `Center`.
* Údaje**Height** (`Length`): The total height of the stairs. Only used if no baseline is defined, or if the baseline is horizontal. Ignored if Údaje**Riser Height Enforce** is non-zero.
* Údaje**Length** (`Length`): The total length of the stairs if no baseline is defined. Ignored if Údaje**Tread Depth Enforce** is non-zero.
* Údaje**Width** (`Length`): The width of the stairs.
* Údaje**Width of Landing** (`FloatList`): If the Údaje**Number Of Steps** is 1, the stairs object acts as a landing. When this is the case and the baseline is multi-segment, the width of the first segment of the landing follows the Údaje**Width**, and the widths of subsequent segments follow the list set here.

Steps

* Údaje**Blondel Ratio** (`Float`): (read-only) The calculated Blondel ratio. This ratio indicates comfortable stairs and should be between 62 and 64cm or 24.5 and 25.5in.
* Údaje**Landing Depth** (`Length`): The depth of the landing of the flight, if enabled in Údaje**Landings**. Defaults to the Údaje**Width** if 0.
* Údaje**Nosing** (`Length`): The size of the nosing.
* Údaje**Number Of Steps** (`Integer`): The numbers of steps (risers). Must be at least 2 for a single flight, and at least 4 for stairs with a central landing.
* Údaje**Riser Height** (`Length`): (read-only) The height of the risers. If Údaje**Riser Height Enforce** is 0 it is calculated (Údaje**Height** / Údaje**Number of Steps**). Else it is the same as Údaje**Riser Height Enforce**.
* Údaje**Riser Height Enforce** (`Length`): The enforced height of the risers.
* Údaje**Riser Thickness** (`Length`): The thickness of the risers.
* Údaje**Tread Depth** (`Length`): (read-only) The depth of the treads. If Údaje**Tread Depth Enforce** is 0 it is calculated (Údaje**Length** / Údaje**Number of Steps**). Else it is the same as Údaje**Tread Depth Enforce**.
* Údaje**Tread Depth Enforce** (`Length`): The enforced depth of the treads.
* Údaje**Tread Thickness** (`Length`): The thickness of the treads.

Structure

* Údaje**Connection Down Start Stairs** (`Enumeration`): The type of connection between the lower floor slab and the start of the stairs. Can be `HorizontalCut`, `VerticalCut` or `HorizontalVerticalCut`.
* Údaje**Connection End Stairs Up** (`Enumeration`): The type of connection between the end of the stairs and the upper floor slab. Can be `toFlightThickness` or `toSlabThickness`.
* Údaje**Down Slab Thickness** (`Length`): The thickness of the lower floor slab.
* Údaje**Flight** (`Enumeration`): The direction of the flight after the landing. Can be `Straight`, `HalfTurnLeft` or `HalfTurnRight`. The Údaje**Landings** property must be set to `At center`.
* Údaje**Landings** (`Enumeration`): The type of landings. Can be `None` or `At center` (`At each corner` not implemented yet).
* Údaje**Stringer Overlap** (`Length`): The overlap of the stringers above the bottom of the treads.
* Údaje**Stringer Width** (`Length`): The width of the stringers.
* Údaje**Structure** (`Enumeration`): The structure type of the stairs. Can be `None`, `Massive`, `One stringer` or `Two stringers`. For the last two options, the Údaje**Stringer Width** and Údaje**Tread Thickness** properties must have non-zero values.
* Údaje**Structure Offset** (`Length`): The offset between the border of the stairs and the structure.
* Údaje**Structure Thickness** (`Length`): The thickness of the structure.
* Údaje**Up Slab Thickness** (`Length`): The thickness of the upper floor slab.
* Údaje**Winders** (`Enumeration`): The type of winders. Not implemented.

## Limitations

## Omezení

* Nejsou dostupné před verzí FreeCAD 0.14
* V současnosti jsou dostupné pouze přímé schody
* Podívejte se na [forum zdroj](http://forum.freecadweb.org/viewtopic.php?f=23&t=6534) na kruhové schody.
* Podívejte se na následující [forum oznámení](http://forum.freecadweb.org/viewtopic.php?f=9&t=4564).

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

Retrieved from "<http://wiki.freecad.org/index.php?title=Arch_Stairs/cs&oldid=1539748>"