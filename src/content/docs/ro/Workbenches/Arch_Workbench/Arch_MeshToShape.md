---
title: Arch MeshToShape
---

:::caution
THIS COMMAND IS PART OF THE INTEGRATEDBIM WORKBENCHIN V1.0This page has been updated for that version.
:::

|                                                                                                                          |
| ------------------------------------------------------------------------------------------------------------------------ |
| Arch MeshToShape                                                                                                         |
| poziția meniului                                                                                                         |
| Arch → Utilities → Mesh to Shape                                                                                         |
| Ateliere                                                                                                                 |
| [Arch](/Arch_Workbench/ro "Arch Workbench/ro")                                                                           |
| scurtătură                                                                                                               |
| _Nici unul_                                                                                                              |
| Prezentat în versiune                                                                                                    |
| -                                                                                                                        |
| A se vedea, de asemenea,                                                                                                 |
| [Arch SplitMesh](/Arch_SplitMesh/ro "Arch SplitMesh/ro"), [Arch RemoveShape](/Arch_RemoveShape/ro "Arch RemoveShape/ro") |
|                                                                                                                          |

## Descriere

Acest instrument convertește un obiect selectat [Mesh](/Mesh_Workbench "Mesh Workbench") într-un obiect [Shape](/Part_Workbench "Part Workbench"). Notă: Acest instrument este optimizat pentru obiectele cu fețe plate (fără curbe). Instrumentul corespunzător din [Part Workbench](/Part_Workbench "Part Workbench") poate fi mai potrivit pentru obiectele care conțin suprafețe curbe.

This tool is optimized for objects with flat faces (no curves). The corresponding tool ![](/images/Part_ShapeFromMesh.svg) [Part ShapeFromMesh](/Part_ShapeFromMesh "Part ShapeFromMesh") from the ![](/images/Workbench_Part.svg) [Part Workbench](/Part_Workbench "Part Workbench") might be more suited for objects that contain curved surfaces.

## Cum se folosește

1. Selectați un obiect tip plasă
2. apăsați tasta ![](/images/Arch_MeshToShape.png) **Mesh to Shape** în meniul Arch → Utilities menu

## Properties

## Limitations

## Scripting

## Scrip-Programare

Acest instrument poate fi utilizat în [macros](/Macros "Macros") și din consola Python utilizând următoarea funcție:

```
new_obj = meshToShape(obj, mark=True, fast=True, tol=0.001, flat=False, cut=True)

```

Transformă o plasă într-op formă, unind fațetele coplanare.

Example:

```
import Arch, Mesh, BuildRegularGeoms

Box = FreeCAD.ActiveDocument.addObject("Mesh::Cube", "Cube")
Box.Length = 1000
Box.Width = 2000
Box.Height = 1000
FreeCAD.ActiveDocument.recompute()

new_obj = Arch.meshToShape(Box)

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Arch_MeshToShape/ro&oldid=1435539>"
