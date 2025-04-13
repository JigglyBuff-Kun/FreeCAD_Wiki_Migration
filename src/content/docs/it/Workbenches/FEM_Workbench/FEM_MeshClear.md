---
title: FEM Pulire mesh
---

|                                                     |
| --------------------------------------------------- |
| FEM MeshClear                                       |
| Posizione nel menu                                  |
| Menu contestuale dell'oggetto mesh → FEM mesh clear |
| Ambiente                                            |
| [FEM](/FEM_Workbench/it "FEM Workbench/it")         |
| Avvio veloce                                        |
| _Nessuno_                                           |
| Introdotto nella versione                           |
| -                                                   |
| Vedere anche                                        |
| [Tutorial FEM](/FEM_tutorial/it "FEM tutorial/it")  |
|                                                     |

## Descrizione

Enables the user to reinitialize the mesh from the FreeCAD FEM mesh object. The mesh still exists but does not have any vertices, edges, faces or elements. The meshing information, Netgen/Gmsh parameters, mesh regions, mesh groups and mesh boundary layer remain in the Model Tree, which means the mesh can be reproduced later. The main use of this function is to lighten the FreeCAD file, either to improve performance when using FreeCAD, to save disk space or enable easy transfer of files without losing meshing data.

## Utilizzo

1. Right-click a ![](/images/FEM_MeshNetgenFromShape.svg) [Netgen](/FEM_MeshNetgenFromShape "FEM MeshNetgenFromShape") or ![](/images/FEM_MeshGmshFromShape.svg) [Gmsh](/FEM_MeshGmshFromShape "FEM MeshGmshFromShape") FEM mesh object in the [Tree view](/Tree_view "Tree view").
2. Select the **![](/images/FEM_MeshClear.svg) Clear FEM mesh** option from the context menu.

## Notes

Da fare

Retrieved from "<http://wiki.freecad.org/index.php?title=FEM_MeshClear/it&oldid=1460581>"
