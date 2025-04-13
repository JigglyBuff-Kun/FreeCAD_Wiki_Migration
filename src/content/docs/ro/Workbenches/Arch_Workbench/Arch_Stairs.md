---
title: Arch Stairs/Scări
---

:::caution
THIS COMMAND IS PART OF THE INTEGRATEDBIM WORKBENCHIN V1.0This page has been updated for that version.
:::

|                                                                                                                                                                                      |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Arch Stairs                                                                                                                                                                          |
| poziția meniului                                                                                                                                                                     |
| Arch → Stairs                                                                                                                                                                        |
| Ateliere                                                                                                                                                                             |
| [Arch](/Arch_Workbench/ro "Arch Workbench/ro")                                                                                                                                       |
| scurtătură                                                                                                                                                                           |
| S R                                                                                                                                                                                  |
| Prezentat în versiune                                                                                                                                                                |
| 0.14                                                                                                                                                                                 |
| A se vedea, de asemenea,                                                                                                                                                             |
| [Arch Structure/ro](/Arch_Structure/ro "Arch Structure/ro"), [Arch Equipment/ro](/index.php?title=Arch_Equipment/ro&action=edit&redlink=1 "Arch Equipment/ro (page does not exist)") |
|                                                                                                                                                                                      |

## Description

## Descriere

Instrumentul Scara vă permite să construiți automat mai multe tipuri de scări. În prezent, sunt suportate doar scările drepte (cu sau fără odihnă centrală). Scările pot fi construite de la zero sau dintr-o linie [linie](/Draft_Line "Draft Line"), caz în care scările urmează linia. Dacă linia nu este orizontală, dar are o înclinație verticală, scările vor urma și ele această pantă.

A se vedea [Stairs entry in wikipedia](http://en.wikipedia.org/wiki/Stairs) pentru o definiție a diferitor termeni utilizați pentru a descrie piese/părți ale scărilor. (pentru liMba română avem <https://www.spatiulconstruit.ro/ghid-de-constructii/scari-notiuni-generale-clasificari/9> )

![](/images/Arch_Stairs_example.jpg)

_În imaginea de mai suse, două scări au fost create, una cu o structură masivă și o odihnă, alta cu un singur vang central._

## Opţiuni

## Usage

## Cum se folosește

1. Apăsați butonul ![](/images/Arch_Stairs.png) [Arch Stairs](/Arch_Stairs "Arch Stairs") button, sau apăsați testele S, R
2. Adjust the desired properties. Some parts of the stairs, such as the structure, might not appear immediately, if any of the properties makes it impossible, such as a structure thickness of 0.

![](/images/Stairs_and_Landing_02.png)

![](/images/Stairs_and_Landing_01.png)

![](/images/Arch_Stairs_Complex_Example.png)

Complex stairs based on a selection of lines and wired as shown on the left.  
In red the wires used for the landings at Z=1500mm, Z=3000mm and Z=4500mm.  
In black the lines connecting them used for the flights.

## Proprietăți

An Arch Stairs object shares the common properties and behaviors of all [Arch Components](/Arch_Component "Arch Component").

### Data

Segment and Parts

- Date**Abs Top** (`Vector`): (read-only) The absolute top level the stairs lead to.
- Date**Last Segment** (`Link`): Last segment (flight or landing) of an Arch Stairs connecting to this segment. The start level of the stairs will be the end level of this last segment.
- Date**Outline Left** (`VectorList`): The left outline of the stairs (read-only).
- Date**Outline Left All** (`VectorList`): The left outline of all segments of the stairs (read-only).
- Date**Outline Right** (`VectorList`): The right outline of the stairs (read-only).
- Date**Outline Right All** (`VectorList`): The right outline of all segments of the stairs (read-only).
- Date**Railing Height Left** (`Length`): Height of the left railing of the stairs or landing.
- Date**Railing Height Right** (`Length`): Height of the right railing of the stairs or landing.
- Date**Railing Left** (`LinkHidden`): The left railing object. [introduced in 0.20](/Release_notes_0.20 "Release notes 0.20"): Property type updated from `String` to `LinkHidden`.
- Date**Railing Offset Left** (`Length`): Offset of the left railing from the edge of the stairs or landing.
- Date**Railing Offset Right** (`Length`): Offset of the right railing from the edge of the stairs or landing.
- Date**Railing Right** (`LinkHidden`): The right railing object. [introduced in 0.20](/Release_notes_0.20 "Release notes 0.20"): Property type updated from `String` to `LinkHidden`.

Stairs

- Date**Align**: Alinerea acestor scări cu linia de bază, dacă se poate aplica.
- Date**Base**: The baseline of these stairs, if any.
- Date**Height**: The total height of these stairs, if not based on a baseline, or the baseline is horizontal.
- Date**Length**: The total length of these stairs if no baseline is defined.
- Date**Width**: Lățimea acestor scări.

Steps

- Date**Nosing**: Mărimea proeminenței treptei (nasul).
- Date**Number of Steps**: Numărul de trepte a scării.
- Date**Riser Height**: Înălțimea contratreptei.
- Date**Tread Depth**: Adâncimea treptei.
- Date**Tread Thickness**: Grosimea treptelor.

Structure

- Date**Landings**: Tipul odihnelor/palierelor.
- Date**Stringer Offset**: The offset between the border of the stairs and the structure.
- Date**Stringer Width**: Lățimea vangurilor/lonjeroanelor.
- Date**Structure**: Tipul și structura acestor scări.
- Date**Structure Thickness**: Grosimea structurii.
- Date**Winders**: Tipul treptelor de schimbare a direcției (mai înguste pe o latură).

## Limitations

## Limitări

- Instrumetnul este disponibil de la versiunea FreeCAD 0.14 sau una mai recentă
- Momentan sunt disponibile doar scări drepte
- Consultați intrarea forumului [forum entry](http://forum.freecadweb.org/viewtopic.php?f=23&t=6534) pentru scări circulare.
- A se vedea [forum announcement](http://forum.freecadweb.org/viewtopic.php?f=9&t=4564)..

## Scripting

## Scrip-Programare

Stairs pot fi creat din scripturi Python și [macros](/Macros "Macros") utilizând urmăotarea funcție:

```
Stairs = makeStairs(baseobj=None, length=None, width=None, height=None, steps=None, name="Stairs")

```

- Creează obiecte tip cu atributele specificate.
- Returnează scările ca pe un obiect nou.

Exempluː

```
import Arch

Stairs = Arch.makeStairs(length=5000, width=1200, height=3000, steps=14)

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Arch_Stairs/ro&oldid=1539754>"
