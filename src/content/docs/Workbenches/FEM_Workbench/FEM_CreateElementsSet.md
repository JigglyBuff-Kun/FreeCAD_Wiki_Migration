---
title: FEM CreateElementsSet
---

|                                              |
| -------------------------------------------- |
| FEM CreateElementsSet                        |
| Menu location                                |
| Mesh → Erase Elements                        |
| Workbenches                                  |
| [FEM](/FEM_Workbench "FEM Workbench")        |
| Default shortcut                             |
| _None_                                       |
| Introduced in version                        |
| 1.0                                          |
| See also                                     |
| [FEM tutorial](/FEM_tutorial "FEM tutorial") |
|                                              |

## Description

Hides the elements selected by a polygon from the FEM mesh or results mesh, making it possible to remove the selected parts of the mesh from the view and see the elements inside the mesh.

## Usage

1. Select a FEM mesh (created by Netgen/Gmsh or imported) or the results mesh in the tree.
2. Select the **Mesh → ![](/images/FEM_CreateElementsSet.svg) Erase Elements** option from the menu.
3. Optionally, enter the name of the tool's object that will be created in the tree.
4. Press the Poly button and click on a few arbitrary locations in the 3D view to define the selection polygon.
5. Right-click and select _Inner_ or _Outer_ (to choose whether the elements inside the selection polygon should be erased or the ones outside of it) or _Cancel_ if you want to quit the polygonal selection tool.
6. The selected elements will be hidden from the mesh while the number of hidden and kept elements will be shown in the Report view.
7. Click the OK button. You will notice new objects in the tree - one named as specified (_ElementSet_ by default) and one named _NewFemMesh_ or _NewResultMesh_ depending on the input. In the case of the results mesh, there will also be a copy of the original mesh named _StartResultMesh_. The _ElementSet_ object can be used to access the tool again.
8. To remove the new objects from the tree and keep only the original mesh, double-click on the _ElementSet_ object and press the Restore button. The original mesh won't be automatically brought back to visibility.

## Notes

- To hide more elements from the same FEM mesh after the initial use of the tool, you have to manually select the new (modified) mesh. This is not the case with the results meshes.

Retrieved from "<http://wiki.freecad.org/index.php?title=FEM_CreateElementsSet/en&oldid=1455125>"
