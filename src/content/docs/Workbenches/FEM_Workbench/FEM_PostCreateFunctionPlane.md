---
title: FEM PostCreateFunctionPlane
---

|                                              |
| -------------------------------------------- |
| FEM PostCreateFunctionPlane                  |
| Menu location                                |
| Results → Filter functions → Plane           |
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

The ![](/src/assets/images/FEM_PostCreateFunctionPlane.svg) **FEM PostCreateFunctionPlane** function defines how a mesh is cut geometrically. It is used by ![](/src/assets/images/FEM_PostFilterCutFunction.svg) [Function cut filter](/FEM_PostFilterCutFunction "FEM PostFilterCutFunction") and ![](/src/assets/images/FEM_PostFilterClipRegion.svg) [Region clip filter](/FEM_PostFilterClipRegion "FEM PostFilterClipRegion").

## Usage

### Create a plane function

1. There are several ways to invoke the command:
   - Press the ![](/src/assets/images/FEM_PostCreateFunctionPlane.svg) [Plane](/FEM_PostCreateFunctionPlane "FEM PostCreateFunctionPlane") button.
   - Select the **Results → Filter functions → ![](/src/assets/images/FEM_PostCreateFunctionPlane.svg) Plane** option from the menu.
2. The [Task panel](/Task_panel "Task panel") is opened.
3. Optionally set the values for the origin and the direction of the section plane.
4. Press the OK button to finish.

### Edit a plane function

If the Plane object in the [3D view](/3D_view "3D view") is hidden, select the ![](/src/assets/images/FEM_PostCreateFunctionPlane.svg) Plane object in the [Tree view](/Tree_view "Tree view") and press Space to make it visible, like in this example:

![](/src/assets/images/FEM_Plane-Cut-Function-Example.png)

#### Move the plane

- Click and drag the big white cuboid to move the plane along its normal vector. Hover the cursor over the manipulator (without clicking) and press Ctrl to change the orientation of this axis translator.
- Click and drag the white grid.

#### Rotate and tilt the plane

- Click and drag a line that connects the small cubes with the the big white cuboid to rotate and tilt the plane around its origin.

#### Scale the plane

- Click and drag one of the 6 small cubes to scale the plane. However, since the object is an infinite plane, the size does not matter.

## Notes

- Existing functions can be used for different filters and even for different ![](/src/assets/images/FEM_PostPipelineFromResult.svg) [result pipelines](/FEM_PostPipelineFromResult "FEM PostPipelineFromResult"). It is nevertheless recommended to use a separate set of functions for each pipeline to keep track of the elements in the [Tree view](/Tree_view "Tree view").

Retrieved from "<http://wiki.freecad.org/index.php?title=FEM_PostCreateFunctionPlane/en&oldid=1569303>"
