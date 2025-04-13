---
title: Sustraer
---
:::caution
THIS COMMAND IS PART OF THE INTEGRATEDBIM WORKBENCHIN V1.0This page has been updated for that version.
:::

|  |
| --- |
| Sustraer |
| Ubicación en el Menú |
| Arquitectura → Sustraer |
| Entornos de trabajo |
| [Entorno de Arquitectura](/Arch_Workbench/es "Arch Workbench/es") |
| Atajo de teclado por defecto |
| *Ninguno* |
| Introducido en versión |
| - |
| Ver también |
| [Añadir](/Arch_Add/es "Arch Add/es") |
|  |

## Descripción

La herramienta Sustraer te permite hacer dos tipos de operaciones:

* Eliminar un subcomponente de un objeto de Arquitectura, por ejemplo eliminar un cubo que se ha añadido a un muro, como en el ejemplo de [Añadir](/Arch_Add/es "Arch Add/es")
* Restar un objeto basado en [formas](/Part_Workbench/es "Part Workbench/es") de un objeto de Arquitectura como un [muro](/Arch_Wall/es "Arch Wall/es") o [estructura](/Arch_Structure/es "Arch Structure/es")

The counterpart of this tool is the ![](/images/Arch_Add.svg) [Arch Add](/Arch_Add "Arch Add") tool.

![](/images/Arch_Remove_example.jpg)

*En la imagen superior, un cubo es sustraído de un muro*

## Utilización

1. Selecciona un subcomponente de un objeto de Arquitectura, **o**:
2. Selecciona objeto(s) a ser sustraídos, y luego el componente de Arquitectura del cual se desean sustraer (el componente de Arquitectura debe ser el último que selecciones)
3. Presiona el botón ![](/images/Arch_Remove.png) **Sustraer**

Or

1. Select objects to be subtracted, the last object selected must the Arch object from which the other objects will be subtracted.
2. Press the ![](/images/Arch_Remove.svg) [Remove component](/Arch_Remove "Arch Remove") button, or **Modify → ![](/images/Arch_Remove.svg) Remove component** from the top menu.

## Scripting

## Programación

La herramientas Eliminar se puede utilizar en [macros](/Macros/es "Macros/es") y desde la consola de Python mediante la utilización de las siguientes funciones:

```
removeComponents(objectsList, host=None)

```

Elimina los componentes dados de sus padres. Si se especifica un objeto huésped, esta función tratará de añadir los componente como agujeros.

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

Retrieved from "<http://wiki.freecad.org/index.php?title=Arch_Remove/es&oldid=1437758>"