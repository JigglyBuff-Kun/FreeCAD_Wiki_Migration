---
title: Arch Pipe/es
---
:::caution
THIS COMMAND IS PART OF THE INTEGRATEDBIM WORKBENCHIN V1.0This page has been updated for that version.
:::

|  |
| --- |
| Arch Pipe |
| Ubicación en el Menú |
| Arch → Pipe Tools → Pipe |
| Entornos de trabajo |
| [Arch](/Arch_Workbench/es "Arch Workbench/es") |
| Atajo de teclado por defecto |
| P I |
| Introducido en versión |
| 0.17 |
| Ver también |
| [Arch PipeConnector](/Arch_PipeConnector "Arch PipeConnector") |
|  |

## Descripción

[introduced in 0.17](/Release_notes_0.17 "Release notes 0.17")
Esta herramienta permite crear tuberías desde cero, o desde objetos seleccionados. Los objetos seleccionados deben estar basados en partes (borrador, boceto, etc.) y contener uno y solo un cable abierto.

## Como utilizar

1. Opcionalmente, seleccione una forma lineal de  [Part](/Part_Workbench "Part Workbench") como  [Draft Line](/Draft_Line "Draft Line"),  [Draft Wire](/Draft_Wire "Draft Wire") o un  [Sketch](/Sketcher_NewSketch "Sketcher NewSketch")
2. Presione el botón  ![](/images/Arch_Pipe.png)  [Arch Pipe](/Arch_Pipe "Arch Pipe"), o presione  P luego las teclas  I

## Opciones

## Properties

An Arch Pipe object shares the common properties and behaviors of all [Arch Components](/Arch_Component "Arch Component").

### Data

Component

* Datos**Base** (`Link`): The base wire of this pipe, if any.

For the other properties in the group see [Arch Component](/Arch_Component#Properties "Arch Component").

Pipe

* Datos**Diameter** (`Length`): The diameter of this pipe, if its Datos**Profile Type** is `Circle`.
* Datos**Height** (`Length`): The height of this pipe, if its Datos**Profile Type** is `Rectangle`.
* Datos**Length** (`Length`): The length of this pipe, if not based on a wire.
* Datos**Offset End** (`Length`): The offset from the end point of the pipe. Automatically set if an [Arch PipeConnector](/Arch_PipeConnector "Arch PipeConnector") is added at this point to make the pipe fit the connector. See [Typical workflow](#Typical_workflow) below.
* Datos**Offset Start** (`Length`): The offset from the start point of the pipe. Idem.
* Datos**Profile** (`Link`): The base profile of this pipe. If not set, the pipe profile is determined by Datos**Profile Type**.
* Datos**Profile Type** (`Enumeration`): The profile of this pipe. Only used if Datos**Profile** is not set. The options are: `Circle`, `Square` or `Rectangle`.
* Datos**Wall Thickness** (`Length`): The wall thickness of this pipe.
* Datos**Width** (`Length`): The width of this pipe, if its Datos**Profile Type** is `Square` or `Rectangle`.

## Typical workflow

* Start by placing sanitary/hydraulic appliance items (below is an imported step file). You turn these objects into Arch Equipments by selecting them, and pressing the [Arch Equipment](/Arch_Equipment "Arch Equipment") button.

![](/images/Arch_pipe_example_01.jpg)

* Arch Equipments now have a new **SnapPoints** property, which is a list of 3D vectors. This allows you to add custom snap points, to which you can snap when the new [Draft Special](/Draft_Snap_Special "Draft Snap Special") snap button is turned on. Currently that property is only available to Python, though. In the case above I added a new snap point at the exit of the WC appliance. The vectors inside SnapPoints appear on the model as white dots:

```
FreeCAD.ActiveDocument.Equipment.SnapPoints=[FreeCAD.Vector(0,0,100)]

```

![](/images/Arch_pipe_example_02.jpg)

* With the new ["Snap Special"](/Draft_Snap_Special "Draft Snap Special") Draft Snap, you can now snap to these custom points:

![](/images/Arch_pipe_example_03.jpg)

* Now we can draw our piping using Draft Lines, Draft Wires, or Sketches. The best way, though, is using only Draft Lines:

![](/images/Arch_pipe_example_04.jpg)

* The [Draft Slope](/Draft_Slope "Draft Slope") tool allows to change the slope of Draft lines, to, for example, 5% (0.05). So we can quickly give our waste lines a correct slope. Only z coordinates are change by this tool, so we only need to snap them back to each other, the top projection will stay unchanged.

![](/images/Arch_pipe_example_05.jpg)

* We now only have to select all our lines, and press the [Arch Pipe](/Arch_Pipe "Arch Pipe") button. Arch Pipe works with any Part-based object that contains one and only one open wire.

![](/images/Arch_pipe_example_06.jpg)

* We can now create connections by selecting 2 or 3 coincident tubes, and press the [Arch PipeConnector](/Arch_PipeConnector "Arch PipeConnector") button. If 3 pipes are selected, two of them must be aligned in order to create a tee element:

![](/images/Arch_pipe_example_07.jpg)

* Changing the connectors radius doesn't change the length of the underlying base line, only the resulting tube (by changing their OffsetStart or OffsetEnd property). So you can still draw your line layout with only straight lines, without the need to care about curves and radius.

It is also possible to create Arch Pipes without a base line, in this case use its "Length" property to define the length.

## Scripting

## Programación

La herramienta de Tubería/Pipe se puede utilizar en [macros](/Macros/es "Macros/es") y desde la consola de Python mediante la utilización de las siguientes funciones:

```
pipe = makePipe(baseobj=None, diameter=0, length=0, placement=None, name="Pipe")

```

* Creates a `pipe` object from the given `baseobj` and `diameter`.
  + `baseobj` is a [Draft Line](/Draft_Line "Draft Line") or [Draft Wire](/Draft_Wire "Draft Wire").
  + If `baseobj` is omitted, a straight pipe can be created with just the `diameter` and the `length` in the Z direction.
* If a `placement` is given, it is used.

```
import Draft, Arch

p1 = FreeCAD.Vector(1000, 0, 0)
p2 = FreeCAD.Vector(2500, 200, 0)
p3 = FreeCAD.Vector(3100, 1000, 0)
p4 = FreeCAD.Vector(3500, 500, 0)
line = Draft.make_wire([p1, p2, p3, p4])

pipe = Arch.makePipe(line, 200)
FreeCAD.ActiveDocument.recompute()

pipe2 = Arch.makePipe(diameter=120, length=3000)
FreeCAD.ActiveDocument.recompute()

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Arch_Pipe/es&oldid=1539707>"