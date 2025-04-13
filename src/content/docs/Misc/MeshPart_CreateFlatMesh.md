---
title: MeshPart CreateFlatMesh
---

|                                                                               |
| ----------------------------------------------------------------------------- |
| MeshPart CreateFlatMesh                                                       |
| Menu location                                                                 |
| Meshes → Unwrap mesh                                                          |
| Workbenches                                                                   |
| [Mesh](/Mesh_Workbench "Mesh Workbench")                                      |
| Default shortcut                                                              |
| _None_                                                                        |
| Introduced in version                                                         |
| 0.19                                                                          |
| See also                                                                      |
| [MeshPart CreateFlatFace](/MeshPart_CreateFlatFace "MeshPart CreateFlatFace") |
|                                                                               |

## Description

The **MeshPart CreateFlatMesh** command creates a flat representation of a mesh object by unwrapping, unfolding, it. The created outline is a [Part Feature](/Part_Feature "Part Feature").

![](/src/assets/images/MeshPart_CreateFlatMesh_example.png)

A mesh object and, in red, its flat representation

## Usage

1. Select a single mesh object. The mesh must be 'unwrappable'. For example, to unwrap a cylindrical mesh it must have open ends and an open seam. Also curved surfaces must have a relatively fine mesh. Use the [Mesh RemeshGmsh](/Mesh_RemeshGmsh "Mesh RemeshGmsh") command if necessary.
2. Select the **Meshes → ![](/src/assets/images/MeshPart_CreateFlatMesh.svg) Unwrap mesh** option from the menu.

## Properties

See: [Part Feature](/Part_Feature "Part Feature").

Retrieved from "<http://wiki.freecad.org/index.php?title=MeshPart_CreateFlatMesh/en&oldid=1332894>"
