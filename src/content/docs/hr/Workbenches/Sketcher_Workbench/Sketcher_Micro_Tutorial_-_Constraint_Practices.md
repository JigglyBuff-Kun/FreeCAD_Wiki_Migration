---
title: Sketcher Micro Tutorial - Constraint Practices/hr
---
|  |
| --- |
| Tutorial |
| Topic |
| Modeling |
| Level |
| Beginner |
| Time to complete |
| Less than 15 minutes |
| Authors |
| Mark Stephen ([Quick61](/User:Quick61 "User:Quick61")) |
| FreeCAD version |
| 0.15.4671 Release or greater |
| Example files |
| *None* |
| See also |
| *None* |
|  |

## Introduction

This tutorial was originally written by Quick61, and it was rewritten and reillustrated by vocx.

This tutorial is designed to help the new user become familiar with the best practices of constraining a [Sketch](/Sketch "Sketch") in the workflow of the ![](/images/Workbench_Sketcher.svg) [Sketcher Workbench](/Sketcher_Workbench "Sketcher Workbench").

There is a general rule with constraints: the fewer amount of *datum constraints* (dimensions), the better.

It is preferable to use a *geometric constraint* in place of a dimensional one if possible. This has to do with the internal workings of the Sketcher's constraint solver.

## Setup

1. Open FreeCAD, create a new empty document with **File → ![](/images/Std_New.svg) [New](/Std_New "Std New")**.

:   1.1. Switch to the [Sketcher Workbench](/Sketcher_Workbench "Sketcher Workbench") from the [workbench selector](/Std_Workbench "Std Workbench"), or the menu **[View](/Std_View_Menu "Std View Menu") → Workbench → Sketcher**.

Some actions to remember:

* Press the right mouse button, or press Esc in the keyboard once, to deselect the active tool in edit mode.
* To exit the sketch edit mode, press the Close button in the [task panel](/Task_panel "Task panel"), or press Esc twice in the keyboard.
* To enter again edit mode, double click on the sketch in the [tree view](/Tree_view "Tree view"), or select it, and then click on ![](/images/Sketcher_EditSketch.svg) [Edit sketch](/Sketcher_EditSketch "Sketcher EditSketch").

## Create a sketch

2. Click on ![](/images/Sketcher_NewSketch.svg) [New sketch](/Sketcher_NewSketch "Sketcher NewSketch").

:   2.1. Choose the sketch orientation, that is, one of the base XY, XZ, or YZ planes. We will use the default plane and options.
:   2.2. Click OK to start constructing the sketch.

*Note:* in the [task panel](/Task_panel "Task panel") expand the **Edit controls** section, and make sure the **Auto constraints** option is disabled. Also turn off the grid snap, and hide the grid.

## First approach: datum constraints

3. We will draw a fully constrained square, centered at the origin.

:   3.1. Click on ![](/images/Sketcher_CreatePolyline.svg) [Create polyline](/Sketcher_CreatePolyline "Sketcher CreatePolyline"), then trace four lines in the general shape of a rectangle around the origin.

![](/images/01a_Sk02_Sketcher_Rectangle_unconstrained.png)

Unconstrained rectangular sketch.

:   3.2. Select one horizontal line, and press ![](/images/Constraint_HorizontalDistance.svg) [Horizontal distance](/Sketcher_ConstrainDistanceX "Sketcher ConstrainDistanceX"), then enter `20 mm`.
:   3.3. Select the other horizontal line, and repeat the constraint with the same distance.
:   3.4. Select one vertical line, and press ![](/images/Constraint_VerticalDistance.svg) [Vertical distance](/Sketcher_ConstrainDistanceY "Sketcher ConstrainDistanceY"), then enter `20 mm`.
:   3.5. Select the other vertical line, and repeat the constraint with the same distance.
:   3.6. Select one bottom corner point (a), and the origin of the sketch, and press ![](/images/Constraint_HorizontalDistance.svg) [Horizontal distance](/Sketcher_ConstrainDistanceX "Sketcher ConstrainDistanceX"), then enter `10 mm`.
:   3.7. Select the top corner point (b) above the previous corner point (a), and the origin of the sketch, and repeat the horizontal constraint with the same distance.
:   3.8. Select the other bottom corner point (c), and the origin of the sketch, and press ![](/images/Constraint_VerticalDistance.svg) [Vertical distance](/Sketcher_ConstrainDistanceY "Sketcher ConstrainDistanceY"), then enter `10 mm`.
:   3.9. Select the top corner point (b) again, and the origin of the sketch, and repeat the vertical constraint with the same distance.

![](/images/01b_Sk02_Sketcher_Rectangle_constrained_lengths_1.png) ![](/images/01c_Sk02_Sketcher_Rectangle_constrained_lengths_2.png)

Left: datum constraints for the sides. Right: additional datum constraints for the interior distances.

Looking at the **Constraints** section in the [task panel](/Task_panel "Task panel"), we see that the constraints are too many; they also clutter the view of the sketch. These constraints are also computationally intensive for the solver; while this is not an issue with a simple shape, it can become one with more complex shapes.

## A better way: datum and geometric constraints

4. We will draw the same square fully constrained, and centered at the origin. When you create the new sketch, make sure the **Auto constraints** option is disabled.

:   4.1. Click on ![](/images/Sketcher_CreatePolyline.svg) [Create polyline](/Sketcher_CreatePolyline "Sketcher CreatePolyline"), then trace four lines in the general shape of a rectangle around the origin.
:   4.2. Select one horizontal line, and press ![](/images/Constraint_Horizontal.svg) [Horizontal](/Sketcher_ConstrainHorizontal "Sketcher ConstrainHorizontal").
:   4.3. Select the other horizontal line, and repeat the constraint.
:   4.4. Select one vertical line, and press ![](/images/Constraint_Vertical.svg) [Vertical](/Sketcher_ConstrainVertical "Sketcher ConstrainVertical").
:   4.5. Select the other vertical line, and repeat the constraint.

![](/images/02a_Sk02_Sketcher_Rectangle_constrained_horizontal-vertical.png)

Geometrical horizontal and vertical constraints.

:   4.6. Select one horizontal line, and press ![](/images/Constraint_HorizontalDistance.svg) [Horizontal distance](/Sketcher_ConstrainDistanceX "Sketcher ConstrainDistanceX"), then enter `20 mm`. We see that the other horizontal line changes size at the same time.
:   4.7. Select one vertical line, and press ![](/images/Constraint_VerticalDistance.svg) [Vertical distance](/Sketcher_ConstrainDistanceY "Sketcher ConstrainDistanceY"), then enter `20 mm`. We see that the other vertical line changes size at the same time.
:   4.8. Select one bottom corner point (a), and the origin of the sketch, and press ![](/images/Constraint_HorizontalDistance.svg) [Horizontal distance](/Sketcher_ConstrainDistanceX "Sketcher ConstrainDistanceX"), then enter `10 mm`.
:   4.9. Select the top corner point (b) above the previous corner point (a), and the origin of the sketch, and press ![](/images/Constraint_VerticalDistance.svg) [Vertical distance](/Sketcher_ConstrainDistanceY "Sketcher ConstrainDistanceY"), then enter `10 mm`.

![](/images/02b_Sk02_Sketcher_Rectangle_constrained_lengths_1.png) ![](/images/02c_Sk02_Sketcher_Rectangle_constrained_lengths_2.png)

Left: datum constraints for only two sides. Right: additional datum constraints for only two interior distances.

This is a better constrained sketch than the first one. The horizontal and vertical geometric constraints allow us to use fewer datum constraints, so our sketch looks less cluttered.

## Optimum scheme: mostly geometric constraints

5. We will draw the same square fully constrained, and centered at the origin. When you create the new sketch, make sure the **Auto constraints** option is disabled.

:   5.1. Click on ![](/images/Sketcher_CreatePolyline.svg) [Create polyline](/Sketcher_CreatePolyline "Sketcher CreatePolyline"), then trace four lines in the general shape of a rectangle around the origin.
:   5.2. Select one horizontal line, and press ![](/images/Constraint_Horizontal.svg) [Horizontal](/Sketcher_ConstrainHorizontal "Sketcher ConstrainHorizontal").
:   5.3. Select the other horizontal line, and repeat the constraint.
:   5.4. Select one vertical line, and press ![](/images/Constraint_Vertical.svg) [Vertical](/Sketcher_ConstrainVertical "Sketcher ConstrainVertical").
:   5.5. Select the other vertical line, and repeat the constraint.

![](/images/03a_Sk02_Sketcher_Rectangle_constrained_horizontal-vertical.png)

Geometrical horizontal and vertical constraints.

:   5.6. Select one bottom corner point (a), then the top corner point that is diagonally opposite, and then the origin of the sketch; then press ![](/images/Constraint_Symmetric.svg) [Symmetric](/Sketcher_ConstrainSymmetric "Sketcher ConstrainSymmetric"). The two selected points will be equidistant from the origin.
:   5.7. Select two adjacent sides of the rectangle (connected at one corner), and press ![](/images/Constraint_EqualLength.svg) [Equal length](/Sketcher_ConstrainEqual "Sketcher ConstrainEqual"). Notice that due to the symmetry of the corner points, all sides are now of the same size.

![](/images/03b_Sk02_Sketcher_Rectangle_constrained_symmetric.png) ![](/images/03c_Sk02_Sketcher_Rectangle_constrained_equal_length.png)

Left: symmetric constraint for only two corner points. Right: additional equal length distances for only two adjacent sides.

:   5.8. Select one horizontal line, and press ![](/images/Constraint_HorizontalDistance.svg) [Horizontal distance](/Sketcher_ConstrainDistanceX "Sketcher ConstrainDistanceX"), then enter `20 mm`. Due to the symmetric and length equality constraints previously added, we see that all sides become equal at the same time.

![](/images/03d_Sk02_Sketcher_Rectangle_constrained_length.png)

All geometric constraints applied, and a single datum constraint for a side.

This is the best way to constrain this sketch, as we only used one datum (dimensional) constraint.

## Additional resources

* [Basic Sketcher Tutorial](/Basic_Sketcher_Tutorial "Basic Sketcher Tutorial")
* [Sketcher Lecture](/Sketcher_Lecture "Sketcher Lecture")
* [Sketcher Tutorial](/Sketcher_Tutorial "Sketcher Tutorial")

Retrieved from "<http://wiki.freecad.org/index.php?title=Sketcher_Micro_Tutorial_-_Constraint_Practices/hr&oldid=1467799>"