---
title: FEM PostFilterCutFunction
---

|                                                                                                                                                                                                           |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| FEM PostFilterCutFunction                                                                                                                                                                                 |
| Menu location                                                                                                                                                                                             |
| Results → Function cut filter                                                                                                                                                                             |
| Workbenches                                                                                                                                                                                               |
| [FEM](/FEM_Workbench "FEM Workbench")                                                                                                                                                                     |
| Default shortcut                                                                                                                                                                                          |
| _None_                                                                                                                                                                                                    |
| Introduced in version                                                                                                                                                                                     |
| -                                                                                                                                                                                                         |
| See also                                                                                                                                                                                                  |
| [FEM Result pipeline](/FEM_PostPipelineFromResult "FEM PostPipelineFromResult"), [FEM Filter functions](/FEM_PostCreateFunctions "FEM PostCreateFunctions"), [FEM tutorial](/FEM_tutorial "FEM tutorial") |
|                                                                                                                                                                                                           |

## Description

Displays the results on a sphere or a plane cutting through the model.

![](/src/assets/images/FEM_Function-Cut-Filter-Example.png)

A function cut filter with a sphere as cut function.  
The original pipeline is the semi-transparent object.

## Usage

1. Select a previously created [result pipeline](/FEM_PostPipelineFromResult "FEM PostPipelineFromResult").
2. There are several ways to invoke the command:
   - Press the ![](/src/assets/images/FEM_PostFilterCutFunction.svg) [Function cut filter](/FEM_PostFilterCutFunction "FEM PostFilterCutFunction") button.
   - Select the **Results → ![](/src/assets/images/FEM_PostFilterCutFunction.svg) Function cut filter** option from the menu.
3. Adjust the **Result display options** like for the [result pipeline](/FEM_PostPipelineFromResult "FEM PostPipelineFromResult"). You might need to hide the pipeline to see the effect of the filter in the preview.
4. Do one of the following:
   - If there is no [filter function](/FEM_PostCreateFunctions "FEM PostCreateFunctions") defined yet, press the ![](/src/assets/images/List-add.svg) Create button and select **![](/src/assets/images/FEM_PostCreateFunctionPlane.svg) Plane** or **![](/src/assets/images/FEM_PostCreateFunctionSphere.svg) Sphere**
   - Choose an existing filter function from the list. If needed, adjust the cut parameters to make sure that it intersects the model. Note that changed cut parameters will also change the parameters of the used filter function.
5. The results will be displayed on the surface of the filter function.
6. Click the OK button to finish the command.

**Note**: A **Field** can only be set if a filter function exists and has been applied with ![](/src/assets/images/FEM_PostApplyChanges.svg) [Apply Changes](/FEM_PostApplyChanges "FEM PostApplyChanges"). Alternatively you can reopen the filter dialog.

Retrieved from "<http://wiki.freecad.org/index.php?title=FEM_PostFilterCutFunction/en&oldid=1569251>"
