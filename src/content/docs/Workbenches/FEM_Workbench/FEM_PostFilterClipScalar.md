---
title: FEM PostFilterClipScalar
---

|                                                                                                                               |
| ----------------------------------------------------------------------------------------------------------------------------- |
| FEM PostFilterClipScalar                                                                                                      |
| Menu location                                                                                                                 |
| Results → Scalar clip filter                                                                                                  |
| Workbenches                                                                                                                   |
| [FEM](/FEM_Workbench "FEM Workbench")                                                                                         |
| Default shortcut                                                                                                              |
| _None_                                                                                                                        |
| Introduced in version                                                                                                         |
| -                                                                                                                             |
| See also                                                                                                                      |
| [FEM Result pipeline](/FEM_PostPipelineFromResult "FEM PostPipelineFromResult"), [FEM tutorial](/FEM_tutorial "FEM tutorial") |
|                                                                                                                               |

## Description

Clips a field using a specified scalar value.

![](/src/assets/images/FEM_Scalar-Clip-Filter-Example.png)

A scalar clip filter result.  
The original pipeline is the semi-transparent object.

A scalar filter can be combined with other filters. Here is for example a scalar filter on a [warp filter](/FEM_PostFilterWarp "FEM PostFilterWarp") (semi-transparent):

![](/src/assets/images/FEM_Scalar-Clip-Filter-On-Warp-Example.png)

## Usage

1. Select a previously created [result pipeline](/FEM_PostPipelineFromResult "FEM PostPipelineFromResult") or another existing filter.
2. There are several ways to invoke the command:
   - Press the ![](/src/assets/images/FEM_PostFilterClipScalar.svg) [Scalar clip filter](/FEM_PostFilterClipScalar "FEM PostFilterClipScalar") button.
   - Select the **Results → ![](/src/assets/images/FEM_PostFilterClipScalar.svg) Scalar clip filter** option from the menu.
3. Adjust the **Result display options** like for the [result pipeline](/FEM_PostPipelineFromResult "FEM PostPipelineFromResult"). Hide that pipeline to see the effect of a Scalar Clip Filter.
4. Select the **Scalar** type from the expandable list.
5. Specify the **Clip scalar** value directly or use the slider.
6. By default, all the regions with field values below the specified one will be hidden. Select the **Clip inside out** option to invert the display and hide the regions with values above the specified one.
7. Click OK button to finish the command.

Retrieved from "<http://wiki.freecad.org/index.php?title=FEM_PostFilterClipScalar/en&oldid=1569241>"
