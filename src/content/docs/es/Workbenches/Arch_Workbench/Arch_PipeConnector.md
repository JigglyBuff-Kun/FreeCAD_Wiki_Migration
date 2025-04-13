---
title: Arch ConectorTubería
---
:::caution
THIS COMMAND IS PART OF THE INTEGRATEDBIM WORKBENCHIN V1.0This page has been updated for that version.
:::

|  |
| --- |
| Arch PipeConnector |
| Ubicación en el Menú |
| Arch → Pipe Tools → Pipe Connector |
| Entornos de trabajo |
| [Arch](/Arch_Workbench/es "Arch Workbench/es") |
| Atajo de teclado por defecto |
| P C |
| Introducido en versión |
| 0.17 |
| Ver también |
| [Arch Pipe](/Arch_Pipe/es "Arch Pipe/es"), [Arch Equipment](/Arch_Equipment/es "Arch Equipment/es") |
|  |

## Descripción

[introducido en la versión 0.17](/Release_notes_0.17/es "Release notes 0.17/es")
Esta herramienta permite crear una conexión de esquina o de salida en T entre dos o tres [Arch Pipes](/Arch_Pipe/es "Arch Pipe/es") seleccionados.

## Como utilizar

1. Seleccione 2 o 3 [Arch Pipes](/Arch_Pipe/es "Arch Pipe/es"). Si selecciona 3 tubos, dos de ellos deben estar exactamente alineados.
2. Presione el botón ![](/images/Arch_PipeConnector.png) Arch PipeConnector, o presione P y luego la tecla C

### Propiedades

* DATOS**Radius**: El radio de curvatura de este conector

## Flujo de trabajo típico

Ver [Arch Pipe#Typical\_workflow](/Arch_Pipe#Typical_workflow "Arch Pipe")

## Scripting

## Programación

La herramienta conector de tubería se puede usar en [macros](/Macros/es "Macros/es") y desde la consola de Python utilizando la siguiente función:

```
Connector = makePipeConnector(pipes, radius=0, name="Connector")

```

* Creates a `Connector` object from the given `pipes`, which is a list of [Arch Pipes](/Arch_Pipe "Arch Pipe"), and optionally a `radius` of curvature.
  + The base objects ([Draft Wires](/Draft_Wire "Draft Wire")) of the [Arch Pipes](/Arch_Pipe "Arch Pipe") should share an endpoint so they create a proper, smooth connector.

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

Retrieved from "<http://wiki.freecad.org/index.php?title=Arch_PipeConnector/es&oldid=1437714>"