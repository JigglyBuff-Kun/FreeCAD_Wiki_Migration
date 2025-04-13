---
title: Medir distância
---
:::caution
This command is obsolete, it is not available in1.0 and above.UseStd Measureinstead.
:::

|  |
| --- |
| Std MeasureDistance |
| Menu location |
| Tools → Measure distance |
| Workbenches |
| All |
| Default shortcut |
| *None* |
| Introduced in version |
| - |
| See also |
| [Std Measure](/Std_Measure "Std Measure"), [Draft Dimension](/Draft_Dimension "Draft Dimension") |
|  |

## Description

The **Std MeasureDistance** command creates a distance object that measures and displays the distance between two points.

## Usage

1. There are several ways to invoke the command:
   * Press the ![](/images/Std_MeasureDistance.svg) [Std MeasureDistance](/Std_MeasureDistance "Std MeasureDistance") button.
   * Select the **Tools → ![](/images/Std_MeasureDistance.svg) Measure distance** option from the menu.
2. Select the first dimension point anywhere on an object in the [3D view](/3D_view "3D view").
3. Select the second dimension point anywhere on an object in the 3D view.
4. The selection order of the points can have an impact on the position of the dimension line.
5. Optionally flip the position of the dimension line by changing the Vista**Mirror** property of the distance object.

## Notes

* You cannot use the [Draft](/Draft_Workbench "Draft Workbench") snap tools with this command.
* To add dimensions to drawings use the dimension tools from the [TechDraw Workbench](/TechDraw_Workbench "TechDraw Workbench").
* For more comprehensive measuring tools, install the ![](/images/Manipulator_workbench_icon.svg) [Manipulator Workbench](/Manipulator_Workbench "Manipulator Workbench") (an [external workbench](/External_workbenches "External workbenches")).

## Properties

### Data

Base

* Dados**Label**: by default the label contains the measured distance, but this distance is not updated when P1 or P2 are later changed.

Measurement

* Dados**P1**: the first dimension point.
* Dados**P2**: the second dimension point.
* Dados**Distance**: (read-only) the measured distance between P1 and P2.

### View

Base

* Vista**Dist Factor**: this factor, multiplied by the measured distance, determines the dimension line offset.
* Vista**Font Size**: the height of the letters (line height in pixels).
* Vista**Mirror**: if set to `true` the position of the dimension line relative to P1 and P2 is flipped.

Retrieved from "<http://wiki.freecad.org/index.php?title=Std_MeasureDistance/pt-br&oldid=1467107>"