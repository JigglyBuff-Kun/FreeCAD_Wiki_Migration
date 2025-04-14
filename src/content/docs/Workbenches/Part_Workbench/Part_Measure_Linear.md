---
title: Part Measure Linear
---

:::caution
This command is obsolete, it is not available in1.0 and above.UseStd Measureinstead.
:::

|                                                                                                                          |
| ------------------------------------------------------------------------------------------------------------------------ |
| Part Measure Linear                                                                                                      |
| Menu location                                                                                                            |
| Measure → Measure Linear                                                                                                 |
| Workbenches                                                                                                              |
| [Part](/Part_Workbench "Part Workbench")                                                                                 |
| Default shortcut                                                                                                         |
| _None_                                                                                                                   |
| Introduced in version                                                                                                    |
| -                                                                                                                        |
| See also                                                                                                                 |
| [Std MeasureDistance](/Std_MeasureDistance "Std MeasureDistance"), [Draft Dimension](/Draft_Dimension "Draft Dimension") |
|                                                                                                                          |

## Description

This command measures the distance between two selected topological elements (vertex, edge, face) and displays measurements in the [3D view](/3D_view "3D view"). The shortest distance between the two elements and the delta measurements (distances parallel to the global X, Y, Z axes) are shown.

The appearance of the measurements can be changed in the [preferences](/PartDesign_Preferences#Measure "PartDesign Preferences").

![](/images/MeasureLinear3D1.png)
![](/images/MeasureLinearDelta1.PNG)

## Usage

1. Select any combination of two elements: vertices, edges, faces
2. There are several ways to invoke the command:
   - Press the ![](/images/Part_Measure_Linear.svg) [Measure Linear](/Part_Measure_Linear "Part Measure Linear") button.
   - Select the **Measure → ![](/images/Part_Measure_Linear.svg) Measure Linear** option from the menu.
3. Alternatively the command can be launched without prior selection. A selection dialog then opens in the [Task panel](/Task_panel "Task panel"). A Control widget also provides buttons to reset the selection, toggle the measurement display in the [3D view](/3D_view "3D view"), and clear all measurements.
4. Measurements are automatically discarded when closing the document.

## Notes

- You cannot use the [Draft](/Draft_Workbench "Draft Workbench") snap tools with this command.
- To add dimensions to drawings use the dimension tools from the [TechDraw Workbench](/TechDraw_Workbench "TechDraw Workbench").
- For more comprehensive measuring tools, install the ![](/images/Manipulator_workbench_icon.svg) [Manipulator Workbench](/Manipulator_Workbench "Manipulator Workbench") (an [external workbench](/External_workbenches "External workbenches")).

Retrieved from "<http://wiki.freecad.org/index.php?title=Part_Measure_Linear/en&oldid=1458146>"
