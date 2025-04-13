---
title: Arch Dividir malla
---
:::caution
THIS COMMAND IS PART OF THE INTEGRATEDBIM WORKBENCHIN V1.0This page has been updated for that version.
:::

|  |
| --- |
| Arch SplitMesh |
| Ubicación en el Menú |
| Arquitectura → Utilidades → Dividir malla |
| Entornos de trabajo |
| [Arquitectura](/Arch_Workbench/es "Arch Workbench/es") |
| Atajo de teclado por defecto |
| *Ninguno* |
| Introducido en versión |
| - |
| Ver también |
| [Seleccionar Mallas no sólidas](/Arch_SelectNonSolidMeshes/es "Arch SelectNonSolidMeshes/es") |
|  |

## Descripción

Esta herramienta divide un objeto [Malla](/Mesh_Workbench/es "Mesh Workbench/es") seleccionado en sus componentes separados

## Utilización

1. Seleccionar un objeto malla
2. Presionar ![](/images/Arch_SplitMesh.png) **Dividir malla** en el manú Arquitectura -> Menu de utilidades

## Scripting

## Programación

Esta herramienta se puede utilizar en [macros](/Macros/es "Macros/es") y desde la consola de Python mediante las siguientes funciones:

```
new_list = splitMesh(obj, mark=True)

```

:   Divide el objeto malla dado en sus componentes separados.

Example:

```
import FreeCAD, Draft, Arch, Mesh, MeshPart

Line = Draft.makeWire([FreeCAD.Vector(0, 0, 0),FreeCAD.Vector(2000, 2000, 0)])
Wall = Arch.makeWall(Line, width=150, height=3000)
FreeCAD.ActiveDocument.recompute()

Shape = Wall.Shape.copy(False)
Shape.Placement = Wall.getGlobalPlacement()

mesh_obj = FreeCAD.ActiveDocument.addObject("Mesh::Feature", "Mesh")
mesh_obj.Mesh = MeshPart.meshFromShape(Shape=Shape, MaxLength=520)
mesh_obj.ViewObject.DisplayMode = "Flat Lines"

new_list = Arch.splitMesh(mesh_obj)

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Arch_SplitMesh/es&oldid=1498608>"