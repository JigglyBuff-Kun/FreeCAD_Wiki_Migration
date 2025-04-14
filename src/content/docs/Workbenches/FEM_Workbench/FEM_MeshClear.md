---
title: FEM MeshClear
---

|                                              |
| -------------------------------------------- |
| FEM MeshClear                                |
| Menu location                                |
| Context menu on mesh object → Clear FEM mesh |
| Workbenches                                  |
| [FEM](/FEM_Workbench "FEM Workbench")        |
| Default shortcut                             |
| _None_                                       |
| Introduced in version                        |
| -                                            |
| See also                                     |
| [FEM tutorial](/FEM_tutorial "FEM tutorial") |
|                                              |

## Description

Enables the user to reinitialize the mesh from the FreeCAD FEM mesh object. The mesh still exists but does not have any vertices, edges, faces or elements. The meshing information, Netgen/Gmsh parameters, mesh regions, mesh groups and mesh boundary layer remain in the Model Tree, which means the mesh can be reproduced later. The main use of this function is to lighten the FreeCAD file, either to improve performance when using FreeCAD, to save disk space or enable easy transfer of files without losing meshing data.

## Usage

1. Right-click a ![](/images/FEM_MeshNetgenFromShape.svg) [Netgen](/FEM_MeshNetgenFromShape "FEM MeshNetgenFromShape") or ![](/images/FEM_MeshGmshFromShape.svg) [Gmsh](/FEM_MeshGmshFromShape "FEM MeshGmshFromShape") FEM mesh object in the [Tree view](/Tree_view "Tree view").
2. Select the **![](/images/FEM_MeshClear.svg) Clear FEM mesh** option from the context menu.

## Notes

The objects in the Model Tree are maintained because they represent the meshing data, but the mesh is now cleared from the FreeCAD file.

Retrieved from "<http://wiki.freecad.org/index.php?title=FEM_MeshClear/en&oldid=1460580>"
