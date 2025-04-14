---
title: FEM PostCreateFunctionSphere
---

|                                              |
| -------------------------------------------- |
| FEM PostCreateFunctionSphere                 |
| Menu location                                |
| Results → Filter functions → Sphere          |
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

The ![](/images/FEM_PostCreateFunctionSphere.svg) **FEM PostCreateFunctionSphere** function defines how a mesh is cut geometrically. It is used by ![](/images/FEM_PostFilterCutFunction.svg) [Function cut filter](/FEM_PostFilterCutFunction "FEM PostFilterCutFunction") and ![](/images/FEM_PostFilterClipRegion.svg) [Region clip filter](/FEM_PostFilterClipRegion "FEM PostFilterClipRegion").

## Usage

### Create a sphere function

1. There are several ways to invoke the command:
   - Press the ![](/images/FEM_PostCreateFunctionSphere.svg) [Sphere](/FEM_PostCreateFunctionSphere "FEM PostCreateFunctionSphere") button.
   - Select the **Results → Filter functions → ![](/images/FEM_PostCreateFunctionSphere.svg) Sphere** option from the menu.
2. The [Task panel](/Task_panel "Task panel") is opened.
3. Optionally set the values for the origin and the radius of the section sphere.
4. Press the OK button to finish.

### Edit a sphere function

If the Sphere object in the [Tree view](/Tree_view "Tree view") is hidden, select the ![](/images/FEM_PostCreateFunctionSphere.svg) Sphere object in the [3D view](/3D_view "3D view") and press Space to make it visible, like in this example:

![](/images/FEM_Sphere-Cut-Function-Example.png)

#### Move the sphere

- Click and drag the spherical grid to move the sphere.

#### Scale the sphere

- Click and drag one of the 8 small cubes to scale the sphere.

## Notes

- Existing functions can be used for different filters and even for different ![](/images/FEM_PostPipelineFromResult.svg) [result pipelines](/FEM_PostPipelineFromResult "FEM PostPipelineFromResult"). It is nevertheless recommended to use a separate set of functions for each pipeline to keep track of the elements in the [Tree view](/Tree_view "Tree view").

Retrieved from "<http://wiki.freecad.org/index.php?title=FEM_PostCreateFunctionSphere/en&oldid=1569312>"
