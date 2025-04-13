---
title: Arch Tapar agujeros
---
:::caution
THIS COMMAND IS PART OF THE INTEGRATEDBIM WORKBENCHIN V1.0This page has been updated for that version.
:::

|  |
| --- |
| Tapar agujeros |
| Ubicación en el Menú |
| Arquitectura → Utilidades → Tapar agujeros |
| Entornos de trabajo |
| [Arquitectura](/Arch_Workbench/es "Arch Workbench/es") |
| Atajo de teclado por defecto |
| *Ninguno* |
| Introducido en versión |
| - |
| Ver también |
| [Comprobar](/Arch_Check/es "Arch Check/es") |
|  |

## Descripción

Esta herramienta identifica agujeros (secuencia circular de aristas abiertas) in un objeto [Forma](/Part_Workbench/es "Part Workbench/es") y trata de cerrarlo añadiendo una nueva cara a partir de dicha secuencia de aristas. Aunque debes verificar que el resultado es un sólido.

## Utilización

1. Seleccione un objeto [Shape](/Part_Workbench "Part Workbench")
2. Presione la entrada  ![](/images/Arch_CloseHoles.png) **Cerrar agujeros** en Arch -> Menú Utilidades

## Programación

*See also:* [Arch API](/Arch_API "Arch API") and [FreeCAD Scripting Basics](/FreeCAD_Scripting_Basics "FreeCAD Scripting Basics").

Esta herramienta se puede utilizar en [macros](/Macros/es "Macros/es") y desde la consola de Python por medio de las siguientes funciones:

```
solid = closeHole(shape)

```

cierra un agujero en una forma abierta

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

solid = Arch.closeHole(Wall.Shape)

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Arch_CloseHoles/es&oldid=1432834>"