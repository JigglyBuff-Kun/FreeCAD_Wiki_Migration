---
title: Arch SplitMesh
---

:::caution
THIS COMMAND IS PART OF THE INTEGRATEDBIM WORKBENCHIN V1.0This page has been updated for that version.
:::

|                                                                                                                                               |
| --------------------------------------------------------------------------------------------------------------------------------------------- |
| Arch SplitMesh                                                                                                                                |
| Menu location                                                                                                                                 |
| Utils → Split Mesh                                                                                                                            |
| Workbenches                                                                                                                                   |
| [BIM](/BIM_Workbench "BIM Workbench")                                                                                                         |
| Default shortcut                                                                                                                              |
| _None_                                                                                                                                        |
| Introduced in version                                                                                                                         |
| -                                                                                                                                             |
| See also                                                                                                                                      |
| [Arch SelectNonSolidMeshes](/Arch_SelectNonSolidMeshes "Arch SelectNonSolidMeshes"), [Arch MeshToShape](/Arch_MeshToShape "Arch MeshToShape") |
|                                                                                                                                               |

## Description

The **Arch SplitMesh** tool splits a selected [Mesh](/Mesh_Workbench "Mesh Workbench") object into its separate components

## Usage

1. Select a mesh object.
2. Select the **Utils → ![](/images/Arch_SplitMesh.svg) Split Mesh** option from the menu.

## Scripting

_See also:_ [Arch API](/Arch_API "Arch API") and [FreeCAD Scripting Basics](/FreeCAD_Scripting_Basics "FreeCAD Scripting Basics").

The SplitMesh tool can be used in [macros](/Macros "Macros") and from the [Python](/Python "Python") console by using the following function:

```
new_list = splitMesh(obj, mark=True)

```

- Splits the given mesh object (`obj`) into separated components.
- If `mark` is `True` [non-manifold](https://en.wikipedia.org/wiki/Manifold) components will be painted red.
- `new_list` is a list of all the individual components that make the mesh.

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

Retrieved from "<http://wiki.freecad.org/index.php?title=Arch_SplitMesh/en&oldid=1498618>"
