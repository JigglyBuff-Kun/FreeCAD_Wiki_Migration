---
title: FEM PostApplyChanges
---

|                                                                                                                       |
| --------------------------------------------------------------------------------------------------------------------- |
| FEM PostApplyChanges                                                                                                  |
| Menu location                                                                                                         |
| Results → Apply changes to pipeline                                                                                   |
| Workbenches                                                                                                           |
| [FEM](/FEM_Workbench "FEM Workbench")                                                                                 |
| Default shortcut                                                                                                      |
| _None_                                                                                                                |
| Introduced in version                                                                                                 |
| -                                                                                                                     |
| See also                                                                                                              |
| [Std Refresh](/Std_Refresh "Std Refresh"), [FEM Filter functions](/FEM_PostCreateFunctions "FEM PostCreateFunctions") |
|                                                                                                                       |

## Description

Toggles if changes to pipelines and filters are applied immediately or not.

If the feature is active, changes to [filter functions](/FEM_PostCreateFunctions "FEM PostCreateFunctions") and filters have an immediate effect. However, for large result meshes this can slow down the PC significantly.

If the feature is not active, a change of the size and position of functions first have an effect after recomputing the function object (see [Std Refresh](/Std_Refresh "Std Refresh")). For changes to filters, the change will first have an effect when pressing in the filter dialog the button Apply or by recomputing the filter object.

## Usage

1. There are several ways to invoke the command:
   - Press the ![](/src/assets/images/FEM_PostApplyChanges.svg) [Apply changes to pipeline](/FEM_PostApplyChanges "FEM PostApplyChanges") button.
   - Select the **Results → ![](/src/assets/images/FEM_PostApplyChanges.svg) Apply changes to pipeline** option from the menu.

Retrieved from "<http://wiki.freecad.org/index.php?title=FEM_PostApplyChanges/en&oldid=1569213>"
