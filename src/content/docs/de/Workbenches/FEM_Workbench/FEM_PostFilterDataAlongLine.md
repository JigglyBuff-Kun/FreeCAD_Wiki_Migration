---
title: FEM PostFilterDataAlongLine/de
---
|  |
| --- |
| FEM PostFilterDataAlongLine |
| Menu location |
| Results → Line clip filter |
| Workbenches |
| [FEM](/FEM_Workbench "FEM Workbench") |
| Default shortcut |
| *None* |
| Introduced in version |
| - |
| See also |
| [FEM Result pipeline](/FEM_PostPipelineFromResult "FEM PostPipelineFromResult"), [FEM tutorial](/FEM_tutorial "FEM tutorial") |
|  |

## Beschreibung

Plots the values of a field along a specified line.

![](/images/FEM_Line-Clip-Filter-Example.png)

A line clip filter inside a [Region clip filter](/FEM_PostFilterClipRegion "FEM PostFilterClipRegion").  
The Region clip filter is the semi-transparent object.  
The part of the line outside the Region clip filter is set to a value of zero and therefore appears blue.

## Anwendung

1. Select a previously created [result pipeline](/FEM_PostPipelineFromResult "FEM PostPipelineFromResult") or another filter.
2. There are several ways to invoke the command:
   * Press the ![](/images/FEM_PostFilterDataAlongLine.svg) [Line clip filter](/FEM_PostFilterDataAlongLine "FEM PostFilterDataAlongLine") button.
   * Select the **Results → ![](/images/FEM_PostFilterDataAlongLine.svg) Line clip filter** option from the menu.
3. Specify the coordinates of two points defining the line along which the results are to be evaluated. Optionally, press the Select Points button and pick the points manually on the surface of the mesh.
4. Optionally, specify the **Resolution**.
5. Select a **Field** from the expandable list.
6. Press the Create Plot button. An XY plot of the field value versus the line length will be created in a separate window.
7. Click the OK button to finish the command.

Retrieved from "<http://wiki.freecad.org/index.php?title=FEM_PostFilterDataAlongLine/de&oldid=1569281>"