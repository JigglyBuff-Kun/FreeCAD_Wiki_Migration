---
title: Sketcher Tutorial/hr
---
|  |
| --- |
| Tutorial |
| Topic |
| Sketcher |
| Level |
| Beginner |
| Time to complete |
|  |
| Authors |
| Ulrich |
| FreeCAD version |
|  |
| Example files |
|  |
| See also |
| *None* |
|  |

## Introduction

The Sketcher is a tool to generate 2D-objects for usage in parts design. The sketcher is different to traditional drawing tools. A way to show the difference is the construction of a triangle. A triangle is fully defined by 3 values, which can be any from the following list: side length, angle, height, area. The one exception is three angles, which will not define the size.

In order to construct a triangle from 3 lengths in the traditional way, the following has to be done:

* draw the base line
* make two circles with a radius given by the other two side lengths, or alternatively calculate the coordinates of the third vertex
* draw the missing two sides from the endpoints of the base line to the crossing point of the two circles or the calculated vertex.

![](/images/Traditional_triangle.png)

The [wikipedia:Triangle](http://en.wikipedia.org/wiki/Triangle "wikipedia:Triangle") page shows a collection of formulas to calculate the missing information in order to draw a triangle from the minimum specification. Those are needed, if the triangle has to be defined by pre-calculated coordinates.

The Sketcher is different. The formulas and the above helper constructions are not needed. In order to understand the difference, it is best to construct a triangle by yourself.

## First sketch: a triangle

An open document is needed in order to make a sketch. When there is no open document, a new one will be created by clicking on ![](/images/Std_New.svg). The sketcher workbench has to be selected:

![](/images/Workbench_select_sketcher.png)

A new sketch will be created by clicking at ![](/images/Sketcher_NewSketch.svg). A dialog appears, where the orientation of the new sketch in the 3D-space can be selected. It doesn't matter in this case, so the xy-plane can be confirmed. A new empty sketch will be created and opened in edit mode. A grid with a coordinate system will be shown with a red point at the origin.

In the Sketcher it is ok to draw an arbitrary triangle with the ![](/images/Sketcher_CreatePolyline.svg) polyline tool and define its properties in a later step. Each click in the drawing plane sets a vertex. The triangle needs to be closed. So for the last line a click is needed on the first created vertex. A red point should be visible near the mouse pointer before clicking.

![](/images/Closed_triangle_with_pointer_small.png)

This will make sure that the last vertex is identical to the first one and the profile is closed. Those symbols that appear beneath the drawing pointer do indicate auto-constraints. They are set automatically at clicking at this location. The red dot beneath the drawing pointer indicates a coincidence constraint between two vertices, i.e. the vertices of this different drawing elements are constrained to an identical location.

The created triangle is flexible. A vertex can be touched with the mouse and dragged around. The sides of the triangle follow the vertex. The same can be done with a line.

Each length of the side is now easily defined by selecting it with the mouse: selected item turns into green. When clicking on the![](/images/Sketcher_ConstrainDistance.svg) length tool, a dialog opens and the desired length can be put in. The picture below shows a triangle with side lengths set to 35 mm, 27 mm and 25 mm. The baseline was set horizontally by selecting it and clicking on the horizontal constraint tool ![](/images/Sketcher_ConstrainHorizontal.svg).

![](/images/Sketcher_triangle3_small.png)

These length-definitions are called constraints. Constraints are used to define a fixed design from the flexible geometric input. The sketcher provides all constraints needed to define any kind of triangle. Only the area can not be used to define one. So the created triangle can be redefined by changing the value of a constraint or by deleting constraints and add other ones. Here comes a list of triangles with other given properties. It is no problem to turn the just created triangle into one of these.

* One or two angles given: Two sides of the triangle needs to be selected. A click on ![](/images/Sketcher_ConstrainAngle.svg) opens a dialog to define the angle.

![](/images/Triangel_angle_small.png)

* Right triangle: Two sides of the triangle needs to be selected. A click on![](/images/Sketcher_ConstrainPerpendicular.svg) sets a right angle between the two sides.

![](/images/Right_triangle_sketcher.png)

* Equilateral: One side has to be set to a defined length. Then all sides needs to be selected. A click on ![](/images/Sketcher_ConstrainEqual.svg) defines two equal length constrains in order to give all sides the same length.

![](/images/Triangle_equilateral_small.png)

* Isoscales triangle (two identical length) with given height: Select first the two sides with the equal length. A click on ![](/images/Sketcher_ConstrainEqual.svg) sets a equality between the two sides. Then select the base line and the top vertex and click the ![](/images/Sketcher_ConstrainDistance.svg) length tool.

![](/images/Triangle_isosceles_small.png)

Constraints can be selected by clicking on the symbol or by clicking in the constraint-list. They can be deleted or in case of constraints with a value edited after a double click. A given triangle can be later changed into another type of triangle by editing or changing the constraints. The sketcher is a part of the parametric FreeCAD-modelling approach. What you have created, can be easily changed at a later time, if for example a variant of the design is needed.

The above shown triangles have white lines. This is an indication that the sketch has some degrees of freedom left. It can be tested by dragging on some lines or points. If the line or point moves, this item is not fully defined. A sketch with no degrees of freedom left turns green.

The isoscele triangle is missing the length setting for the base line and it can move and rotate freely in the sketcher drawing plane.

If the triangle properties are defined, it still needed to be fixed in the drawing plane. The sketcher drawing plane has a coordinate system. The origin of the coordinate system is visible as the red dot in the center of the pink x-axis and light-green y-axis. The easiest way to fix it, is selecting a vertex and clicking at ![](/images/Sketcher_ConstrainLock.svg). This adds a horizontal and a vertical distance from the vertex to the origin of the coordinate system. The triangle may still have an degree of freedom for rotation. So one sides needs a horizontal or vertical constraint or an defined angle to one of the coordinate system axes. The next picture shows a fully constraint sketch. All lines and vertices have now a green color.

![](/images/Sketcher_triangle3_fc_small.png)

## More about Constraints

The sketcher does not know the triangle formulas from the wikipedia. Instead it sets up a system of equation for the 2-dimensional coordinates based on the given constraints. This system of equations is then solved numerically.

In this way a wide variety of geometric problem can be solved. But there is also a disadvantage. If the set of equations has multiple solutions, we may get something totally different from what we expect. This is especially annoying, if the same design should be used for different dimensions. The typical symptom is, that after a change of a length constraint, the sketch flips to something totally different. A simple example is the division of a distance into three equal partitions. The following picture shows three lines in a row with equality and parallel constraint set. The total distance is set to 10 mm.

![](/images/Dimension_partitions_parallel.png)

This works well, as long as only larger distances are put in. When the distance is reduced above a certain ratio, the lines are folding together. So we do not get any more a third of the given distance but the distance itself or two third of it. Some lines of our row have changed their orientation. This gives still a valid solution for the set of constraints, but is not what was intended. So following image of the same sketch shows this. The length constraint was set to 1000 mm and then reduced to 5 mm.

![](/images/Dimension_partitions_flipped.png)

The solution is to define an angle of 180° between the partition lines as replacement of the parallel constraint. The 180°-constraint has only one solution. The sketch is now robust against large changes of the distance. It has to be said, that also a 0°-constraint serves for the same purpose, where appropriate.

![](/images/Constraint180_600x400.png)

The 180°-constraint is a solution for a lot of problems. Some older versions of FreeCAD have problems to show the 180°-constraint in the sketcher plane. In most of the cases the 180°-arc is **not** shown as expected in the sketcher drawing plane. This is a known issue for FreeCAD before version 14.3613.

In case of several incremental dimensions in a straight line, it may be advisable to draw a zig-zag-line first and then set the 180°-constraints. This helps, not forgetting one, or setting one twice.

The following table shows some constraints combinations for the definition of a simple elbow. The combination was tested by enlarging the 10 mm length horizontal dimension to greater values until the elbow flips its orientation. The table documents for each shown constraint combination the changed length where the flipping occurs.

| Constraints Combination | Remarks |
| --- | --- |
|  | Definition of length: Equality constraint for definition of length   Definition of orientation: horizontal and vertical constraints   Flips at 51 mm |
|  | Definition of length: Equality constraint for definition of vertical length, arc for definition of horizontal length.   Definition of orientation: two points for definition of orientation of horizontal line and vertical constraints   Flips at 52 mm |
|  | Definition of length: Equality constraint for definition of length   Definition of orientation: horizontal line perpendicular to Y-axis and vertical line with vertical constraint   Flips at 51 mm |
|  | Definition of length: Horizontal length defined with the **general** length constraint. Equality constraint for definition of vertical length.   Definition of orientation: horizontal and vertical constraints   Flips at 82 mm   Definition of length: Horizontal length defined with the **horizontal** length constraint. Equality constraint for definition of vertical length.   Definition of orientation: horizontal and vertical constraints   The horizontal line does not flip at a test of 10 km, but the vertical line was flipped! |
|  | Definition of length: Equality constraint for definition of length   Definition of orientation: horizontal line 90°-angle to vertical line and vertical line with vertical constraint   Flips not, tested up to 10 km |

The test showed the following: larger changes of dimension constraints may cause a flipping of some lines of the sketch due to multiple solutions of the underlying system of equations. The only constraints that do preserve the orientation of the elements they are applied to, are the angle constraint and the horizontal and vertical dimension constraints.
The differences between the other constraints regarding maintaining orientation are minor.

Recommendation:  **Use angle constraints and horizontal and vertical dimension constraints at critical places in order to make a sketch robust against dimension changes.**

## Problematic combination of constraints

Sometimes two or more constraints define the same property. An example can be made of two connected lines, where the connection point is the center point of a symmetry constraint for the endpoints of the lines. Those lines now have equal length and are parallel. All this is the consequence of the symmetry constraint.

What happens, if those two lines already have an equality constraint and a parallel constraint and the symmetry constraint is added too? Now the parallel property is defined by two constraints and the equal length is also defined by two constraints. In principle the underlying system of equations should have a solution. But there may be numerical problems. This can be tested by trying to move the lines. In most cases the lines are frozen, even if the sketcher still reports several degrees of freedom.

The above case shows a problem that seems to be difficult to solve for the sketcher programmers. So the user has to take care, to avoid such situations. Sketches with redundant constraints do behave unexpected and problematic. Symptoms of those redundant constraints are the above frozen state or reported redundant constraints after modifying a different object in the sketch.

In general the sketcher gives a warning, when redundant constraints are detected. But this detection mechanism seems not to work in all cases. When the problem is recognized, it can be avoided by just deleting the redundant constraints. Sometimes it is necessary to choose a different combination of constraints.

The following cases are sources for redundant constraints:

* An equality constraint for two radii of the same arc
* An symmetry constraint for two radii of the same arc
* A symmetry constraint in combination with parallel, equality and or perpendicular constraints

A different problematic case are parallels with an intersection point in infinity. It is possible to set a 180°-constraint for two parallel lines without an intersection point. This is **not** recommended. An angle to an other line or axis should be used instead.

A different problem is the change of orientation of angles. This can happen if, angle changes above 180° are made. Doing this in smaller steps avoid the problem.

## Construction Lines - Step by Step Example

In the first part it was shown that construction geometry is not necessary for constructing triangles. But nevertheless the sketcher provides construction geometry, which is useful for more complex problems. Any line can be converted to a construction line with the ![](/images/Sketcher_ToggleConstruction.svg) button. The construction lines are shown in the sketch as blue lines. They can be used for constraints in the same way as other lines, but are not shown and not used when the sketch is closed.

Giving the task to make a rectangle with the side length having the golden ratio. Wikipedia shows how to construct two lines with a length ratio of the golden ratio.

![](/images/Goldener_Schnitt_Konstr_beliebt.svg)

The sketcher is a perfect tool to construct a rectangle with the golden ratio for the side length. The size of the rectangle can be later changed without making a new construction. The construction steps for the golden ratio according to Wikipedia are:

1. Having a line segment AB, construct a perpendicular BC at point B, with BC half the length of AB. Draw the hypotenuse AC.
2. Draw an arc with center C and radius BC. This arc intersects the hypotenuse AC at point D.
3. Draw an arc with center A and radius AD. This arc intersects the original line segment AB at point S. Point S divides the original segment AB into line segments AS and SB with lengths in the golden ratio.

Here is a step by step explanation, how this can be done.

* Make a new sketch as explained at the triangle example.
* Draw a rectangle in the sketch. Use the button ![](/images/Sketcher_CreateRectangle.svg). The following picture shows the rectangle. FreeCAD did add horizontal and vertical constraints to the rectangle. This rectangle can not be rotated.

![](/images/Step1_rectangle_600x400.png)

The rectangle should stay in the center of the coordinate system. To achieve this, a symmetry constraint is added to a horizontal line. This is done by selecting first the two vertices of the horizontal line and then the vertical axis of the coordinate system. The symmetry constraint is added by clicking on the button ![](/images/Sketcher_ConstrainSymmetric.svg). The same is done for a vertical line, but instead now the horizontal axis is selected as symmetry axis. The picture below shows the result. The rectangle stays now at the center and can only be resized but not moved.

![](/images/Step2_rectangle_with_symmetry_600x400.png)

This was the preparation for the rectangle. The top horizontal line should be the distance AS of the golden ration construction. An additional line is needed to represent the SB-distance. It is drawn a little bit skewed as shown below. This avoids the auto-constraining to horizontal. This line should instead be constrained later with a 180°-angle, in order to avoid the existence of multiple solutions to the constructed constrain-combination. If the line is drawn with an horizontal constrained, the sketcher will complain later at adding the 180°-angle constrained. The horizontal constrained has to be removed in such a case. The picture shows how to add an angle-constraint by selecting two lines and clicking at ![](/images/Sketcher_ConstrainAngle.svg). After adding a line, it is often advisable to drag at the line with the mouse. This will easily show, if a line is not attached to the other drawn elements. If a line is not connected right to the other lines, problems may arise in later steps of the part construction.

![](/images/Step3_making_SB_600x400.png)

The last line is not part of the rectangle. It is therefore necessary to convert it into a construction line. Selecting the line and clicking at the ![](/images/Sketcher_ToggleConstruction.svg) button does the conversion.

![](/images/Step4_make_SB_construction_line_600x400.png)

The line has now a blue color as visible below. The recipe from Wikipedia for the golden ratio requires a line half of the distance AB. In order to get a reference point for this, an additional vertex is set at the line with the ![](/images/Sketcher_CreatePoint.svg) tool. This is shown below.

![](/images/Step5_helper_vertex.png)

The reference point should stay at the center of the distance AB. This will be achieved by selecting first the two endpoints of the distance AB and third selecting the center point. When all three points are selected in the right sequence, the symmetry constraint can be set at clicking at the ![](/images/Sketcher_ConstrainSymmetric.svg) button, as shown below.

![](/images/Step6_symmetry_setting.png)

The Picture below shows already the second side BC of the construction triangle. This line was drawn as described above and converted to a construction line. This line must have a vertical constraint as visible in the picture. This can be easily achieved by drawing the line nearly vertical. If the line is nearly vertical a vertical constraint symbol is shown and set by the Sketcher when finishing the line at this state.

The line BC must have half of the length of AB. There is only a reference point available for this purpose, so the equality constraint can not be used. The equality constraint would need a line with this length as reference, which is not available in the construction. Therefore the classical arc is used to define the length BC. The picture below shows the drawing of the arc. The arc-tool ![](/images/Sketcher_CreateArc.svg) is used. First the center point is set at B. The point should be visible beneath the arc-tool at clicking at B. Often the arc-tool has not has to be not directly over the target point but a little beneath, in order to get the coincidence point visible. Second the radius of the arc is defined by setting the next point at the reference point. The last point of the arc is set in the neighborhood of the point C. It is important, that the first two points are fixed to C and the center point. This should be tested with dragging at the arc after finishing it.

![](/images/Step7_arc_defining_BC.png)

In order to define the length of BC, the line must end at the arc. This will be done by setting a coincidence constraint between the last arc point and the C point as shown below. Both points have to be selected and the create a coincidence button ![](/images/Constraint_PointOnPoint.svg) has to be clicked.

![](/images/Step8_arc_BC_finishing.png)

The next picture shows the ready triangle. The hypotenuse AC is already drawn and converted to a construction line.

![](/images/Step9_triangle_ready.png)

Now step 2 of the Wikipedia recipe has to be constructed. A second arc has to be drawn with the center point at C and the starting point at B. The last point should be end at the hypotenuse as shown in the picture below.

![](/images/Step10_second_arc.png)

The drawn arc was converted to a construction line. Now step 3 of the Wikipedia recipe starts with drawing the last arc as shown in the picture below. The radius of this arc has to be defined with the above constructed point on the hypotenuse. The last point will usually not end at a corner of the rectangle. But this is not a problem, as it will be fixed later. The last point may set as shown below.

![](/images/Step11_last_arc.png)

Now the final step has to be made, in order to make the horizontal line of the rectangle equal to the distance AS. This is shown below by setting a coincidence constraint between the end of the last arc and the corner of the rectangle.

![](/images/Step12_define_ratio.png)

Now the vertical line has to be made the length of the distance SC. Setting an equality constraint by selecting the button ![](/images/Sketcher_ConstrainEqual.svg) as shown below, will do this.

![](/images/Step12_define_rectangle.png)

The next picture shows the rectangle with a side length ratio equal to the golden ratio. The rectangle should have only left one degree of freedom. So at dragging at it, it should only change its size but not move. If a certain size of one side is needed, a length constraint can be added to this side. Other wise the sketch is ready and can be closed. Only a rectangle should than be visible in the FreeCAD window.

![](/images/Step14_rectangle_with_golden_ratio.png)

## Exercise: resilient sketch

The above example introduced construction lines. Now some important things to make resilient sketches are discussed. Here is an exercise to get some practice at working with the sketcher. The goal is to make a sketch for something like a special frame as shown below.

![](/images/Frame_erxercise_pad.png)

There should be only three dimensions needed to define the frame. In order to make changing dimensions easier, the constraints can be renamed to something memorable. Just select the constraint in the list view and press <F2>. The constraint can be named for example to "Thickness".
The drawing below shows the dimensions. The peak at the right side should have two times the wall thickness.

![](/images/Frame_exercise_dimensions.png)

The sketch should look as intended also after changing the key dimensions for example to 2000 mm and back to 30. You may need to use angle constraints at certain places to reach this goal. The picture below shows a sketch, which was not robust against such changes. It is unusable now. In order to get the original state back, the undo-button ![](/images/Std_Undo.svg) can be used.

![](/images/Frame_erxercise_failed_sketch.png)

The above sketch is unusable for the Part-Design Workbench. Only Profile without intersecting lines are allowed. Construction lines may intersect. Those are not used for making solids.

One of the main usage of the Sketcher is the construction of parts in the Part-Design-workbench. The already existing geometry can be used similar to construction lines. As this tutorial takes its focus more on the basic sketcher functionality, have a look here for usage of external geometry: [Sketcher External](/Sketcher_External "Sketcher External")

Retrieved from "<http://wiki.freecad.org/index.php?title=Sketcher_Tutorial/hr&oldid=1202755>"