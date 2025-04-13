---
title: FEM MeshBoundaryLayer/ru
---
|  |
| --- |
| FEM MeshBoundaryLayer |
| Расположение в меню |
| Mesh → FEM Mesh boundary layer |
| Верстаки |
| [FEM](/FEM_Workbench/ru "FEM Workbench/ru") |
| Быстрые клавиши |
| *Нет* |
| Представлено в версии |
| - |
| См. также |
| [FEM tutorial](/FEM_tutorial/ru "FEM tutorial/ru") |
|  |

## Описание

The **FEM MeshBoundaryLayer** command enables the user to set a localized set of meshing parameters by selecting a set of elements (Vertex, Edge, Face) and applying the parameters to it.

It is especially useful for refining meshes close to edges or surfaces in flow simulations. For example, it can be used to refine the mesh in the vicinity of an air foil or obstacle in a flow.

The boundary layer has the advantage of creating highly defined, anisotropic meshes. As the name implies it supports accurate calculations near boundaries, e.g. a wall where friction occurs, generating a velocity gradient.

## Применение

1. To enable the command a ![](/images/FEM_MeshGmshFromShape.svg) [FEM mesh from shape by Gmsh](/FEM_MeshGmshFromShape "FEM MeshGmshFromShape") must be provided first.
2. Select the Mesh object in the [Tree view](/Tree_view "Tree view").
3. There are several ways to invoke the command:
   * Press the ![](/images/FEM_MeshBoundaryLayer.svg) [FEM mesh boundary layer](/FEM_MeshBoundaryLayer "FEM MeshBoundaryLayer") button.
   * Select the **Mesh → ![](/images/FEM_MeshBoundaryLayer.svg) FEM mesh boundary layer** option from the menu.
4. Edit the start element size, the growth rate and the number of growth layers.
5. Select a vertex, edge, face.
6. Click the OK button.
7. Close the task.

   :   Result: You now should see a new `FEMMeshBoundaryLayer` object under the `FEMMeshGMSH` object (see example #3 below) in your active analysis container.
8. Double-click on the `FEMMeshGMSH` parent object in your Model Tree and press Apply to force a mesh recalculation.
9. Close the task.

After the mesh has been created you can change its properties using the [property editor](/Property_editor "Property editor"). After you changed a property, you must reopen the Gmsh dialog again and click the Apply button. (You can leave the dialog open while changing properties.)

You can create as many different mesh boundary layers as needed.

## Visual examples

![](/images/FEMMeshBoundaryLayer_Example1.png.png)

Example 1: The initial coarse FEMMeshGMSH on a 2D case

![](/images/FEMMeshBoundaryLayer_Example2.png.png)

Example 2: After applying a Mesh boundary layer

![](/images/FEMMeshBoundaryLayer_Example3.png.png)

Example 3: A simple example of the resulting Model Tree

Retrieved from "<http://wiki.freecad.org/index.php?title=FEM_MeshBoundaryLayer/ru&oldid=1569386>"