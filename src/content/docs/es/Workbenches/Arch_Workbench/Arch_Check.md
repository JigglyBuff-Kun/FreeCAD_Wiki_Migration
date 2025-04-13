---
title: Arch Comprobar
---
:::caution
THIS COMMAND IS PART OF THE INTEGRATEDBIM WORKBENCHIN V1.0This page has been updated for that version.
:::

|  |
| --- |
| Arch Check |
| Ubicación en el Menú |
| Arquitectura → Utilidades → Comprobar |
| Entornos de trabajo |
| [Arquitectura](/Arch_Workbench/es "Arch Workbench/es") |
| Atajo de teclado por defecto |
| *Ninguno* |
| Introducido en versión |
| - |
| Ver también |
| [Tapar agujeros](/Arch_CloseHoles/es "Arch CloseHoles/es") |
|  |

## Descripción

Esta herramienta comprueba el documento actual o los objetos no sólidos seleccionados de [Piezas](/Part_Workbench/es "Part Workbench/es") o objetos de [Arquitectura](/Arch_Workbench/es "Arch Workbench/es"), que puedan dar problemas, ya que la mayoría de las operaciones del entorno de arquitectura requieren objetos sólidos.

## Utilización

1. Presiona ![](/images/Arch_Check.png) **Comprobar** en el menú Arquitectura → Utilities menu

## Programación

*See also:* [Arch API](/Arch_API "Arch API") and [FreeCAD Scripting Basics](/FreeCAD_Scripting_Basics "FreeCAD Scripting Basics").

Esta herramienta se puede utilizar en [macros](/Macros/es "Macros/es") y desde la consola de Python por medio de las siguientes funciones:

```
list_bad = check(objectslist, includehidden=False)

```

:   comprueba si los objetos dados contienen sólo sólidos

Example:

```
import FreeCAD, Draft, Arch

p1 = FreeCAD.Vector(0, 0, 0)
p2 = FreeCAD.Vector(2000, 0, 0)
baseline = Draft.makeLine(p1, p2)
Wall1 = Arch.makeWall(baseline, length=None, width=150, height=2000)
FreeCAD.ActiveDocument.recompute()

Wall2 = Arch.makeWall(None, length=2000, width=200, height=1000)
FreeCAD.ActiveDocument.recompute()

Circle = Draft.makeCircle(450)
Wire = Draft.makeWire([FreeCAD.Vector(1000, 0, 0), FreeCAD.Vector(1500, 1000, 0), FreeCAD.Vector(2500, -1000, 0)])

list_bad = Arch.check([Wall1, Wall2, Circle, Wire], includehidden=True)
print(list_bad)

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Arch_Check/es&oldid=1432819>"