---
title: Arch SplitMesh/Împărțirea Plasei
---

:::caution
THIS COMMAND IS PART OF THE INTEGRATEDBIM WORKBENCHIN V1.0This page has been updated for that version.
:::

|                                                                                                                                               |
| --------------------------------------------------------------------------------------------------------------------------------------------- |
| Arch SplitMesh                                                                                                                                |
| poziția meniului                                                                                                                              |
| Arch → Utilities → Split Mesh                                                                                                                 |
| Ateliere                                                                                                                                      |
| [Arch](/Arch_Workbench/ro "Arch Workbench/ro")                                                                                                |
| scurtătură                                                                                                                                    |
| _Nici unul_                                                                                                                                   |
| Prezentat în versiune                                                                                                                         |
| -                                                                                                                                             |
| A se vedea, de asemenea,                                                                                                                      |
| [Arch SelectNonSolidMeshes](/Arch_SelectNonSolidMeshes "Arch SelectNonSolidMeshes"), [Arch MeshToShape](/Arch_MeshToShape "Arch MeshToShape") |
|                                                                                                                                               |

## Descriere

Acest instrument împarte un obiect selectat [Mesh](/Mesh_Workbench "Mesh Workbench") în componentele sale separate

## Cum se folosește

1. Selectați un obiect tip plasă
2. Apăsați ![](/images/Arch_SplitMesh.png) **Split Mesh** entry in Arch -> Utilities menu

## Scripting

## Scrip-Programare

Instrumentul Split Mesh poate fi utilizat în [macros](/Macros "Macros") și din consola python utilizând următoarea funcție:

```
new_list = splitMesh(obj, mark=True)

```

împarte obiectul tip plasă dat în componente separate.

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

Retrieved from "<http://wiki.freecad.org/index.php?title=Arch_SplitMesh/ro&oldid=1498610>"
