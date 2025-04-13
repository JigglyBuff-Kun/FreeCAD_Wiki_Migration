---
title: Arch RemoveShape
---
:::caution
THIS COMMAND IS PART OF THE INTEGRATEDBIM WORKBENCHIN V1.0This page has been updated for that version.
:::

|  |
| --- |
| Arch RemoveShape |
| Ubicación en el Menú |
| Arch → Utilities → Remove Shape |
| Entornos de trabajo |
| [Arch](/Arch_Workbench/es "Arch Workbench/es") |
| Atajo de teclado por defecto |
| *Ninguno* |
| Introducido en versión |
| - |
| Ver también |
| [Arch MeshToShape](/Arch_MeshToShape/es "Arch MeshToShape/es") |
|  |

## Descripción

Esta herramienta intenta eliminar la forma cúbica interna de una [Arch Wall](/Arch_Wall/es "Arch Wall/es") o [Arch Structure](/Arch_Structure/es "Arch Structure/es") y ajustar sus propiedades, por lo que es totalmente paramétrica. Esta herramienta solo funcionará si la forma subyacente es cúbica (exactamente 6 caras, todas las esquinas tienen solo ángulos rectos).

## Utilización

1. Seleccione un [Arch Wall](/Arch_Wall/es "Arch Wall/es") o [Arch Structure](/Arch_Structure/es "Arch Structure/es")
2. Presione la opción ![](/images/Arch_RemoveShape.png) **Remove Shape** en Arch -> Menu de Utilidades

## Scripting

## Programación

Esta herramienta se puede utilizar en [macros](/Macros/es "Macros/es") y desde la consola de Python por medio de las siguientes funciones:

```
removeShape(objs, mark=True)

```

toma un objeto Arch (pared o estructura) construido en una forma cúbica, y elimina la forma interna, manteniendo su longitud, ancho y alto como parámetros.

```
import FreeCAD, Draft, Arch

Box = FreeCAD.ActiveDocument.addObject("Part::Box", "Box")
Box.Length = 1000
Box.Width = 2000
Box.Height = 1000
FreeCAD.ActiveDocument.recompute()

Structure = Arch.makeStructure(Box)
FreeCAD.ActiveDocument.recompute()

Arch.removeShape(Structure)
FreeCAD.ActiveDocument.recompute()

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Arch_RemoveShape/es&oldid=1437832>"