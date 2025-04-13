---
title: FEM PostCreateFunctionCylinder
---

|                                              |
| -------------------------------------------- |
| FEM PostCreateFunctionCylinder               |
| Menu location                                |
| Results → Filter functions → Cylinder        |
| Workbenches                                  |
| [FEM](/FEM_Workbench "FEM Workbench")        |
| Default shortcut                             |
| _None_                                       |
| Introduced in version                        |
| 0.21                                         |
| See also                                     |
| [FEM tutorial](/FEM_tutorial "FEM tutorial") |
|                                              |

## Description

The ![](/src/assets/images/FEM_PostCreateFunctionCylinder.svg) **FEM PostCreateFunctionCylinder** function defines how a mesh is cut geometrically. It is used by ![](/src/assets/images/FEM_PostFilterCutFunction.svg) [Function cut filter](/FEM_PostFilterCutFunction "FEM PostFilterCutFunction") and ![](/src/assets/images/FEM_PostFilterClipRegion.svg) [Region clip filter](/FEM_PostFilterClipRegion "FEM PostFilterClipRegion").

## Usage

### Create a cylinder function

1. There are several ways to invoke the command:
   - Press the ![](/src/assets/images/FEM_PostCreateFunctionCylinder.svg) [Cylinder](/FEM_PostCreateFunctionCylinder "FEM PostCreateFunctionCylinder") button.
   - Select the **Results → Filter functions → ![](/src/assets/images/FEM_PostCreateFunctionCylinder.svg) Cylinder** option from the menu.
2. The [Task panel](/Task_panel "Task panel") is opened.
3. Optionally set the values for the center and the radius of the section cylinder.
4. Press the OK button to finish.

### Edit a cylinder function

If the Cylinder object in the [Tree view](/Tree_view "Tree view") is hidden, select the ![](/src/assets/images/FEM_PostCreateFunctionCylinder.svg) Cylinder object in the [3D view](/3D_view "3D view") and press Space to make it visible, like in this example:

![](/src/assets/images/FEM_Cylinder-Cut-Function-Example.png)

#### Move the cylinder

- Click and drag the big white cuboid to move the cylinder along its normal vector.
- Click and drag the white grid.

#### Rotate and tilt the cylinder

- Click and drag a line that connects the small cubes with the big white cuboid to rotate and tilt the cylinder around its origin.

#### Scale the cylinder

- Click and drag one of the 6 small cubes to scale the cylinder.

## Notes

- Existing functions can be used for different filters and even for different ![](/src/assets/images/FEM_PostPipelineFromResult.svg) [result pipelines](/FEM_PostPipelineFromResult "FEM PostPipelineFromResult"). It is nevertheless recommended to use a separate set of functions for each pipeline to keep track of the elements in the [Tree view](/Tree_view "Tree view").

Retrieved from "<http://wiki.freecad.org/index.php?title=FEM_PostCreateFunctionCylinder/en&oldid=1569319>"
