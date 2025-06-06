---
title: Mesh Smoothing
---

|                                          |
| ---------------------------------------- |
| Mesh Smoothing                           |
| Menu location                            |
| Meshes → Smooth...                       |
| Workbenches                              |
| [Mesh](/Mesh_Workbench "Mesh Workbench") |
| Default shortcut                         |
| _None_                                   |
| Introduced in version                    |
| -                                        |
| See also                                 |
| _None_                                   |
|                                          |

## Description

The **Mesh Smoothing** command smooths mesh objects by changing the position of their vertices.

![](/images/Meshes_Smooth.jpg)

The Smoothing task panel after choosing the Only selection option

## Usage

1. If you plan to smooth only certain areas, note that the command uses the color red to mark the faces selected for this option. To see them properly:
   - The View**Display Mode** of the mesh objects ideally should be `Flat lines`, but should at least show faces. If necessary use the [Std DrawStyle](/Std_DrawStyle "Std DrawStyle") command to override this property.
   - The View**Shape Color** of the mesh objects should not be red.
2. Select one or more mesh objects.
3. There are several ways to invoke the command:
   - Press the ![](/images/Mesh_Smoothing.svg) [Smooth...](/Mesh_Smoothing "Mesh Smoothing") button.
   - Select the **Meshes → ![](/images/Mesh_Smoothing.svg) Smooth...** option from the menu.
4. The **Smoothing** task panel opens.
5. If you only want to smooth selected areas: choose the **Only selection** option:
   - The **Selection** panel is added to the task panel.
   - Specify the region options:
     - **Respect only visible triangles**
     - **Respect only triangles with normals facing screen**
   - Press the Add button and while holding down the left mouse button draw a region, a closed spline, in the [3D view](/3D_view "3D view"). Faces that match the region options and (partially) fall inside the region will be selected.
   - Optionally press the Clear button to clear the selection.
6. Select the smoothing **Method**:
   - **Taubin**
   - **Laplace**
7. Specify the **Parameters**:
   - **Iterations**: the higher this number the smoother the final result. The value also has an impact on the total processing time of the command. Avoid high values if the mesh objects have many points.
   - **λ**: the value must be in the `0` - `1` range.
   - **μ**: the value must be in the `0` - `1` range.
8. Press the OK button to finish the command.

Retrieved from "<http://wiki.freecad.org/index.php?title=Mesh_Smoothing/en&oldid=1333084>"
