---
title: Measurement Of Angles On Holes
---

|                  |
| ---------------- |
| Tutorial         |
| Topic            |
| TechDraw         |
| Level            |
| Base             |
| Time to complete |
| 1 minute         |
| Authors          |
| AnHi             |
| FreeCAD version  |
| 0.19             |
| Example files    |
| _None_           |
| See also         |
| _None_           |
|                  |

## Introduction

This tutorial explains how to create center hole lines using the ![](/images/Workbench_TechDraw.svg) [TechDraw Workbench](/TechDraw_Workbench "TechDraw Workbench") with oriented holes.

By creating angles for holes it's not possible to use vertical or horizontal center lines (false/true) from the properties of the view. Helping lines and/or helping points are created for this necessity.

## Proceeding

1. Setting center lines on holes:

There are some possibilities to create a center line for holes.
At first the lines or points on the hole must be selected as shown below. Second, the following tools can be used from the toolbar to create the center line:

: ![](/images/TechDraw_2PointCenterLine.svg) [Add Centerline between 2 Points](/TechDraw_2PointCenterLine "TechDraw 2PointCenterLine")
: ![](/images/TechDraw_2LineCenterLine.svg) [Add Centerline between 2 Lines](/TechDraw_2LineCenterLine "TechDraw 2LineCenterLine")

![](/images/TechDraw_Tutorial_2PointCenterLine_example.png)

Above: created with ![](/images/TechDraw_2PointCenterLine.svg) which creates centerlines between 2 points

![](/images/TechDraw_Tutorial_2LineCenterLine_example.png)

Above: created with ![](/images/TechDraw_2LineCenterLine.svg) which creates centerlines between 2 lines

In the associated Combo View dialog box select in the Tasks panel under _Orientation_ "Aligned" for axes out of main axes. _Extend By_ means the length of the center line beyond of the body line in the drawing. With _Shift Horizontal_ and _Shift Vertical_ the center line can move in horizontal or vertical direction, if is necessary. _Style_ means the figure of center line.

![](/images/Create-Center-Line3P.JPG)

Above: dialog box

The created center line can change. Select the center line and press the button ![](/images/TechDraw_2LineCenterLine.svg) or ![](/images/TechDraw_2PointCenterLine.svg) from the tool bar which you have created the center line. Delete the center line only with ![](/images/TechDraw_CosmeticEraser.svg) from the tool bar after selecting the center line.

2. Setting angles:

Quadrant points select with ![](/images/TechDraw_Quadrants.svg) from the tool bar. Next select the points as show below and use ![](/images/TechDraw_Dimension_Angle3Pt.svg) from the tool bar to create the angle. Other succession create other angles.
Is there no catching point on the center line change "ISO count" in the properties.

![](/images/AnHi11.PNG)

Above: Succession of selection

Retrieved from "<http://wiki.freecad.org/index.php?title=Measurement_Of_Angles_On_Holes/en&oldid=1251819>"
