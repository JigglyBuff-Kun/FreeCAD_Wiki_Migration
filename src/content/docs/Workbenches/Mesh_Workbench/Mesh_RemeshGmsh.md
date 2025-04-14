---
title: Mesh RemeshGmsh
---

|                                                                |
| -------------------------------------------------------------- |
| Mesh RemeshGmsh                                                |
| Menu location                                                  |
| Meshes → Refinement...                                         |
| Workbenches                                                    |
| [Mesh](/Mesh_Workbench "Mesh Workbench")                       |
| Default shortcut                                               |
| _None_                                                         |
| Introduced in version                                          |
| 0.19                                                           |
| See also                                                       |
| [Mesh FromPartShape](/Mesh_FromPartShape "Mesh FromPartShape") |
|                                                                |

## Description

The **Mesh RemeshGmsh** command remeshes a mesh object using the [Gmsh](https://gmsh.info/) mesher. The new mesh can be finer or coarser.

## Usage

1. Select a single mesh object.
2. There are several ways to invoke the command:
   - Press the ![](/images/Mesh_RemeshGmsh.svg) [Refinement...](/Mesh_RemeshGmsh "Mesh RemeshGmsh") button.
   - Select the **Meshes → ![](/images/Mesh_RemeshGmsh.svg) Refinement...** option from the menu.
3. The **Remesh by gmsh** task panel opens.
4. Specify the required settings. See the [Gmsh mesher settings](/Mesh_FromPartShape#Gmsh_mesher "Mesh FromPartShape") of the [Mesh FromPartShape](/Mesh_FromPartShape "Mesh FromPartShape") command.
5. Press the Apply button to remesh the mesh object.
6. Optionally change one or more settings and again press the Apply button until the new mesh is to your liking.
7. Press the Close button to close the task panel and finish the command.

## Notes

- In some cases this command will produce a mesh with flipped normals. The [Mesh FlipNormals](/Mesh_FlipNormals "Mesh FlipNormals") command can be used to correct this.

## Properties

See: [Mesh Feature](/Mesh_Feature "Mesh Feature").

Retrieved from "<http://wiki.freecad.org/index.php?title=Mesh_RemeshGmsh/en&oldid=1333045>"
