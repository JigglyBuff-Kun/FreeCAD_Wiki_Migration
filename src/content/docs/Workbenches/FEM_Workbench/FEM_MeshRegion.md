---
title: FEM MeshRegion
---

|                                              |
| -------------------------------------------- |
| FEM MeshRegion                               |
| Menu location                                |
| Mesh → FEM mesh refinement                   |
| Workbenches                                  |
| [FEM](/FEM_Workbench "FEM Workbench")        |
| Default shortcut                             |
| _None_                                       |
| Introduced in version                        |
| -                                            |
| See also                                     |
| [FEM tutorial](/FEM_tutorial "FEM tutorial") |
|                                              |

| Solvers |
| ------- |
| All     |

## Description

Enables the user to set a localized set of meshing parameters by selecting a set of elements (vertex, edge, face) and applying the parameters to it. It is especially useful for refining meshes in areas of interest or areas where the solver will generate a stronger gradient of a variable. For example, it can be used to refine the mesh around stress-risers (sharp edges, holes, notches, ...) in mechanical analysis, or at areas of contraction in a fluid flow.

Refining the mesh has the advantage of enabling accurate simulation where needed, while allowing coarser mesh in the wider domain, thus drastically optimizing the computation time while maintaining meaningful solutions output.

## Usage

1. To enable the command a ![](/src/assets/images/FEM_MeshGmshFromShape.svg) [FEM mesh from shape by Gmsh](/FEM_MeshGmshFromShape "FEM MeshGmshFromShape") or (1.1 and above) ![](/src/assets/images/FEM_MeshNetgenFromShape.svg) [FEM mesh from shape by Netgen](/FEM_MeshNetgenFromShape "FEM MeshNetgenFromShape") must be provided first.
2. Select the Mesh object in the [Tree view](/Tree_view "Tree view").
3. There are several ways to invoke the command:
   - Press the ![](/src/assets/images/FEM_MeshRegion.svg) [FEM mesh refinement](/FEM_MeshRegion "FEM MeshRegion") button.
   - Select the **Mesh → ![](/src/assets/images/FEM_MeshRegion.svg) FEM mesh refinement** option from the menu.
4. Press the Add button and select one or more of either _faces_, _edges_ or _vertices_ in the [3D view](/3D_view "3D view") to apply the mesh refinement to. The selected items will appear in the list of geometrical objects. The selection mode can be also set to _Solid_.
5. Enter the maximum element size for the region.
6. Click the OK button.
7. Close the task.

   : Result: You now should see a new `FEMMeshRegion` object under the `FEMMeshGmsh` or (1.1 and above) `FEMMeshNetgen` object (see example #3 below) in your active analysis container.

8. Double-click on the `FEMMeshGmsh` or (1.1 and above) `FEMMeshNetgen` parent object in your Model Tree and press Apply to force a mesh recalculation.
9. Close the task.

After the mesh has been created, you can change its properties using the [property editor](/Property_editor "Property editor"). After you change a property, you must reopen the mesh dialog again and click the Apply button (you can leave the dialog open while changing properties).

You can create as many different mesh regions as needed.

## Visual examples

![](/src/assets/images/FEMMeshRegion_Example1.png)

Example 1: The initial coarse FEM Mesh by GMSH

![](/src/assets/images/FEMMeshRegion_Example2.png)

Example 2: After applying a Mesh refinement using two FEM Mesh Region objects, the large hole is refined to a maximum element size of 3 mm, the smaller hole is refined to 1 mm

![](/src/assets/images/FEMMeshRegion_Example3.png)

Example 3: A simple example of the resulting Model Tree

## Notes

- The order in which the regions are shown in [Tree view](/Tree_view "Tree view") can change the mesh result. See this [forum thread](https://forum.freecadweb.org/viewtopic.php?f=18&t=41955).

## Related

- "Mesh Regions for a Better Analysis" - Video Tutorial by Joko Engineering ([link](https://www.youtube.com/watch?v=X5RVe2SDPvw))

Retrieved from "<http://wiki.freecad.org/index.php?title=FEM_MeshRegion/en&oldid=1568891>"
