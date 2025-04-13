---
title: Arch PipeConnector
---

:::caution
THIS COMMAND IS PART OF THE INTEGRATEDBIM WORKBENCHIN V1.0This page has been updated for that version.
:::

|                                                                                                     |
| --------------------------------------------------------------------------------------------------- |
| Arch PipeConnector                                                                                  |
| poziția meniului                                                                                    |
| Arch → Pipe Tools → Pipe Connector                                                                  |
| Ateliere                                                                                            |
| [Arch](/Arch_Workbench/ro "Arch Workbench/ro")                                                      |
| scurtătură                                                                                          |
| P C                                                                                                 |
| Prezentat în versiune                                                                               |
| 0.17                                                                                                |
| A se vedea, de asemenea,                                                                            |
| [Arch Pipe/ro](/Arch_Pipe/ro "Arch Pipe/ro"), [Arch Equipment/ro](/Arch_Equipment "Arch Equipment") |
|                                                                                                     |

## Descriere

[introduced in 0.17](/Release_notes_0.17 "Release notes 0.17")
Acest instrument permite crearea unui conector de colț sau T între două sau trei [Arc Pipes](/Arch_Pipe "Arch Pipe") selectate.

## Cum se folosește

1. Selectați 2 sau 3 [Arch Pipes](/Arch_Pipe "Arch Pipe"). Dacă selectați 3 pipes, două dintr ele trebuiesc aliniate exact.
2. apăsați butonul ![](/images/Arch_PipeConnector.png) [Arch PipeConnector](/Arch_PipeConnector "Arch PipeConnector") , sau în ordine tastele P apoi C

## Proprietăți

- Date**Radius**: Raza curburii acestui conector

## Fluxul de lucru tipic

See [Arch Pipe#Typical_workflow](/Arch_Pipe#Typical_workflow "Arch Pipe")

## Scripting

## Scrip-Programare

Instrumentul Pipe Connector poate fi utilizat în [macros](/Macros "Macros") și de la consola Python folosind următoarea funcție:

```
Connector = makePipeConnector(pipes, radius=0, name="Connector")

```

- Creates a `Connector` object from the given `pipes`, which is a list of [Arch Pipes](/Arch_Pipe "Arch Pipe"), and optionally a `radius` of curvature.
  - The base objects ([Draft Wires](/Draft_Wire "Draft Wire")) of the [Arch Pipes](/Arch_Pipe "Arch Pipe") should share an endpoint so they create a proper, smooth connector.

Example:

```
import FreeCAD, Draft, Arch

p1 = FreeCAD.Vector(-1000, 0, 0)
p2 = FreeCAD.Vector(-2000, 0, 0)
p3 = FreeCAD.Vector(-2000, 0, 0)
p4 = FreeCAD.Vector(-2000, -1000, 0)
p5 = FreeCAD.Vector(-2000, -1000, 0)
p6 = FreeCAD.Vector(-4000, -1000, 0)
Line1 = Draft.makeWire([p1, p2])
Line2 = Draft.makeWire([p3, p4])
Line3 = Draft.makeWire([p5, p6])

Pipe1 = Arch.makePipe(Line1, 150)
Pipe2 = Arch.makePipe(Line2, 150)
Pipe3 = Arch.makePipe(Line3, 150)
FreeCAD.ActiveDocument.recompute()

Conn = Arch.makePipeConnector([Pipe1, Pipe2])
Conn2 = Arch.makePipeConnector([Pipe2, Pipe3])
FreeCAD.ActiveDocument.recompute()

Line4 = Draft.move(Line1, FreeCAD.Vector(-500, 1000, 0), copy=True)
Line5 = Draft.move(Line2, FreeCAD.Vector(-500, 1000, 0), copy=True)
Pipe4 = Arch.makePipe(Line4, 100)
Pipe5 = Arch.makePipe(Line5, 100)
FreeCAD.ActiveDocument.recompute()

Conn3 = Arch.makePipeConnector([Pipe4, Pipe5], radius=400)
FreeCAD.ActiveDocument.recompute()

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Arch_PipeConnector/ro&oldid=1437712>"
