---
title: Std Măsurarea Distanței
---
:::caution
This command is obsolete, it is not available in1.0 and above.UseStd Measureinstead.
:::

|  |
| --- |
| Std MeasureDistance |
| Menu location |
| [View](/Std_View_Menu "Std View Menu") → Measure distance‏‎ |
| Workbenches |
| All |
| Default shortcut |
| *None* |
| Introduced in version |
| - |
| See also |
| *None* |
|  |

## Introducere

Acest instrument măsoară și afișează distanța absolută dintre două puncte din spațiul 3D.

The **Std MeasureDistance** command creates a distance object that measures and displays the distance between two points.

## Utilizare

1. Click pe ![](/images/Std_MeasureDistance.png) or choose  Tools → ![](/images/Std_MeasureDistance.png) Measure Distance din meniul principal.
2. Selectați primul punct din vizualizarea 3D.
3. Selectați al doile apunct din vizualizarea 3D.
4. Distanța absolută dintre două puncte va fi calculată și afișată în vizualizarea 3D .
5. o distanță obiect va fi creată în vizualizarea arborescentă.

1. There are several ways to invoke the command:
   * Press the ![](/images/Std_MeasureDistance.svg) [Std MeasureDistance](/Std_MeasureDistance "Std MeasureDistance") button.
   * Select the **Tools → ![](/images/Std_MeasureDistance.svg) Measure distance** option from the menu.
2. Select the first dimension point anywhere on an object in the [3D view](/3D_view "3D view").
3. Select the second dimension point anywhere on an object in the 3D view.
4. The selection order of the points can have an impact on the position of the dimension line.
5. Optionally flip the position of the dimension line by changing the Vizualizare**Mirror** property of the distance object.

## Note

Pentru mai multe posibilități de măsurare / dimensionare puteți utiliza

1. [Measure-Tools](/Std_Measure_Menu "Std Measure Menu") din Atelierul Part
2. [Draft Dimension](/Draft_Dimension "Draft Dimension")-Tool din Atelierul Draft
3. [Arch Survey](/Arch_Survey "Arch Survey")-Tool din atelierul Arch

* You cannot use the [Draft](/Draft_Workbench "Draft Workbench") snap tools with this command.
* To add dimensions to drawings use the dimension tools from the [TechDraw Workbench](/TechDraw_Workbench "TechDraw Workbench").
* For more comprehensive measuring tools, install the ![](/images/Manipulator_workbench_icon.svg) [Manipulator Workbench](/Manipulator_Workbench "Manipulator Workbench") (an [external workbench](/External_workbenches "External workbenches")).

## Properties

### Data

Base

* Date**Label**: by default the label contains the measured distance, but this distance is not updated when P1 or P2 are later changed.

Measurement

* Date**P1**: the first dimension point.
* Date**P2**: the second dimension point.
* Date**Distance**: (read-only) the measured distance between P1 and P2.

### View

Base

* Vizualizare**Dist Factor**: this factor, multiplied by the measured distance, determines the dimension line offset.
* Vizualizare**Font Size**: the height of the letters (line height in pixels).
* Vizualizare**Mirror**: if set to `true` the position of the dimension line relative to P1 and P2 is flipped.

Retrieved from "<http://wiki.freecad.org/index.php?title=Std_MeasureDistance/ro&oldid=1467108>"