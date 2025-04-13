---
title: FEM PostFilterDataAtPoint
---

|                                                                                                                               |
| ----------------------------------------------------------------------------------------------------------------------------- |
| FEM PostFilterDataAtPoint                                                                                                     |
| Menu location                                                                                                                 |
| Results → Data at point clip filter                                                                                           |
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

Displays the value of a selected field at a picked point.

## Usage

1. Select a previously created [result pipeline](/FEM_PostPipelineFromResult "FEM PostPipelineFromResult") or another filter (except of a line filter).
2. There are several ways to invoke the command:
   - Press the ![](/src/assets/images/FEM_PostFilterDataAtPoint.svg) [Data at point clip filter](/FEM_PostFilterDataAtPoint "FEM PostFilterDataAtPoint") button.
   - Select the **Results → ![](/src/assets/images/FEM_PostFilterDataAtPoint.svg) Data at point clip filter** option from the menu.
3. Select a result **Field**.
4. Now
   - either click the Select Point button and subsequently pick the desired point in the mesh.
   - change the point coordinate.

The value at this point for the given **Field** is output to the dialog. The value of the data point is also anytime accessible via the [property](/Property_editor "Property editor") Data**Point Data**.

Retrieved from "<http://wiki.freecad.org/index.php?title=FEM_PostFilterDataAtPoint/en&oldid=1569298>"
