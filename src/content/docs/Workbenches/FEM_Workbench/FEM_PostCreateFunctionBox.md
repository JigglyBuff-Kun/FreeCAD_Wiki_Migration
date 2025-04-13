---
title: FEM PostCreateFunctionBox
---

|                                              |
| -------------------------------------------- |
| FEM PostCreateFunctionBox                    |
| Menu location                                |
| Results → Filter functions → Box             |
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

The ![](/src/assets/images/FEM_PostCreateFunctionBox.svg) **FEM PostCreateFunctionBox** function defines how a mesh is cut geometrically. It is used by ![](/src/assets/images/FEM_PostFilterCutFunction.svg) [Function cut filter](/FEM_PostFilterCutFunction "FEM PostFilterCutFunction") and ![](/src/assets/images/FEM_PostFilterClipRegion.svg) [Region clip filter](/FEM_PostFilterClipRegion "FEM PostFilterClipRegion").

## Usage

### Create a box function

1. There are several ways to invoke the command:
   - Press the ![](/src/assets/images/FEM_PostCreateFunctionBox.svg) [Box](/FEM_PostCreateFunctionBox "FEM PostCreateFunctionBox") button.
   - Select the **Results → Filter functions → ![](/src/assets/images/FEM_PostCreateFunctionBox.svg) Box** option from the menu.
2. The [task panel](/Task_panel "Task panel") is opened.
3. Optionally set the values for the center and size of the section box.
4. Press the OK button to finish.

### Edit a box function

If the Box object in the [Tree view](/Tree_view "Tree view") is hidden, select the ![](/src/assets/images/FEM_PostCreateFunctionBox.svg) Box object in the [3D view](/3D_view "3D view") and press Space to make it visible, like in this example:

![](/src/assets/images/FEM_Box-Cut-Function-Example.png)

#### Move the box

- Click and drag a face of the box. The box is defined by blue edges.

#### Rotate and tilt the box

- Click and drag one of the 3 lines that pass through the box to rotate and tilt the box around its origin.

#### Scale the box

- Click and drag one of the 8 small cubes at the box corners to scale the box.

#### Transform the box

- Click and drag one of the 6 small cubes around the center of the box to change the shape of the box.

## Notes

- Existing functions can be used for different filters and even for different ![](/src/assets/images/FEM_PostPipelineFromResult.svg) [result pipelines](/FEM_PostPipelineFromResult "FEM PostPipelineFromResult"). It is nevertheless recommended to use a separate set of functions for each pipeline to keep track of the elements in the [Tree view](/Tree_view "Tree view").

Retrieved from "<http://wiki.freecad.org/index.php?title=FEM_PostCreateFunctionBox/en&oldid=1569331>"
