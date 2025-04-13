---
title: Tutorial Básico de Sketcher
---
|  |
| --- |
| Tutorial |
| Topic |
| Sketcher |
| Level |
| Beginner |
| Time to complete |
| 60 minutes |
| Authors |
| [Drei](http://freecadweb.org/wiki/index.php?title=User:Drei) and vocx |
| FreeCAD version |
| 0.19 |
| Example files |
| [Basic Sketcher tutorial updated](https://forum.freecadweb.org/viewtopic.php?f=36&t=43594) |
| See also |
| *None* |
|  |

## Introduction

This tutorial was originally written by Drei, and it was rewritten and illustrated by vocx.

This tutorial is meant to introduce the reader to the basic workflow of the ![](/images/Workbench_Sketcher.svg) [Sketcher Workbench](/Sketcher_Workbench "Sketcher Workbench").

The [Sketcher Workbench](/Sketcher_Workbench "Sketcher Workbench") exists as a standalone module, so it can be used to draw generic 2D (planar) objects. However, it is mostly used in conjunction with the ![](/images/Workbench_PartDesign.svg) [PartDesign Workbench](/PartDesign_Workbench "PartDesign Workbench"). A closed sketch is normally used to create a face or a profile to be extruded into a solid [body](/PartDesign_Body "PartDesign Body") with an operation such as ![](/images/PartDesign_Pad.svg) [PartDesign Pad](/PartDesign_Pad "PartDesign Pad").

The reader will practice:

* Creating construction geometry
* Creating real geometry
* Applying geometric constraints
* Applying datum constraints
* Obtaining a closed profile

For a more in depth description of the sketcher, read the [Sketcher Lecture](/Sketcher_Lecture "Sketcher Lecture").

![](/images/00_Sk01_Sketcher_fully_constrained_final.png)

Final result of the sketch, with all geometry fully constrained, including construction geometry for support.

## Setup

1. Open FreeCAD, create a new empty document with **File → ![](/images/Std_New.svg) [New](/Std_New "Std New")**.

:   1.1. Switch to the [Sketcher Workbench](/Sketcher_Workbench "Sketcher Workbench") from the [workbench selector](/Std_Workbench "Std Workbench"), or the menu **[View](/Std_View_Menu "Std View Menu") → Workbench → Sketcher**.

Some actions to remember:

* Press the right mouse button, or press Esc in the keyboard once, to deselect the active tool in edit mode.
* To exit the sketch edit mode, press the Close button in the [task panel](/Task_panel "Task panel"), or press Esc twice in the keyboard.
* To enter again edit mode, double click on the sketch in the [tree view](/Tree_view "Tree view"), or select it, and then click on ![](/images/Sketcher_EditSketch.svg) [Edit sketch](/Sketcher_EditSketch "Sketcher EditSketch").

## Create a sketch

2. Click on ![](/images/Sketcher_NewSketch.svg) [New sketch](/Sketcher_NewSketch "Sketcher NewSketch").

:   2.1. Choose the sketch orientation, that is, one of the base XY, XZ, or YZ planes. Also choose if you want an inverted orientation, and an offset from the base plane.
:   2.2. We will use the default plane and options.
:   2.3. Click OK to start constructing the sketch.

We are now inside the sketch edit mode. Within it, we're able to make use of the majority of the tools of this workbench.

*Note:* the [tree view](/Tree_view "Tree view") will switch to the [task panel](/Task_panel "Task panel"); in this interface expand the **Edit controls** section, and make sure the **Auto constraints** option is enabled. Other options can be changed including the size of the visible grid, and whether we want to snap to it; in this tutorial we will not snap to the grid and we will also hide it. In other sections of the [task panel](/Task_panel "Task panel") you can also see which geometrical elements and constraints have been defined.

![](/images/01_Sk01_Sketcher_Task_panel.png)

Upper part of the [task panel](/Task_panel "Task panel") of the sketcher.

## Construction geometry

3. Construction geometry is used to guide the creation of "real" geometry. Real geometry will be the one shown outside of the sketch edit mode, while construction geometry will only be shown inside the edit mode. Therefore, you can use as much construction geometry as you need to build real shapes.

:   3.1. Click on ![](/images/Sketcher_ToggleConstruction.svg) [Toggle construction](/Sketcher_ToggleConstruction "Sketcher ToggleConstruction"). Now geometrical elements will be drawn in **Construction mode**.
:   3.2. Click on ![](/images/Sketcher_Line.svg) [Create line](/Sketcher_CreateLine "Sketcher CreateLine").
:   3.3. Approach the **origin** of the sketch, the point should highlight and near your cursor the ![](/images/Constraint_PointOnPoint.svg) [coincident constraint](/Sketcher_ConstrainCoincident "Sketcher ConstrainCoincident") icon will appear.
:   3.4. Click on the point, then move the pointer to start drawing a new line from it. Move the pointer so that the line has a length to around `30 mm`. You don't have to be very precise in this step; later we will set the correct dimension.
:   3.5. Repeat this procedure four more times to place construction lines in a star pattern. Don't worry too much about their size or position, just extend them in the four quadrants.
:   3.6. Now exit construction mode by clicking again on ![](/images/Sketcher_ToggleConstruction.svg) [Toggle construction](/Sketcher_ToggleConstruction "Sketcher ToggleConstruction").

*Note:* up to this point the [line tool](/Sketcher_CreateLine "Sketcher CreateLine") is still active. This means we can keep clicking on the [3D view](/3D_view "3D view") to draw as many lines as we want. If we wish to exit this tool, we can press the right mouse button, or press Esc in the keyboard once. By doing this the pointer won't create lines any more, it will just be a pointer allowing us to select the objects we just created. In this pointer mode we can pick and drag the endpoints of each line to adjust its placement.

*Note 2:* do not press Esc a second time as this will exit the sketch edit mode. If you do this, re-enter the edit mode by double clicking on the sketch in the [tree view](/Tree_view "Tree view").

Take a look at the [task panel](/Task_panel "Task panel") again. The **Solver messages** section already indicates that the sketch is under-constrained, and it mentions the number of *degrees of freedom*.

Look at the **Constraints** and **Elements** sections to see the new listed constraints and lines. Once your sketches have many elements, it may be difficult to select them in the [3D view](/3D_view "3D view"), so you can use these lists to select the object that you wish exactly.

![](/images/02_Sk01_Sketcher_construction.png)

Construction lines forming a star shape with its center in the origin.

## Real geometry

Real geometry must make a closed shape if it is to be used as a profile that can be extruded by tools such as ![](/images/PartDesign_Pad.svg) [PartDesign Pad](/PartDesign_Pad "PartDesign Pad").

Make sure you are not in construction mode by clicking on ![](/images/Sketcher_ToggleConstruction.svg) [Toggle construction](/Sketcher_ToggleConstruction "Sketcher ToggleConstruction"), if you have not previously exited this mode.

### Outer arcs

4. Create a circle.

:   4.1. Click on ![](/images/Sketcher_Circle.svg) [Create circle](/Sketcher_CreateCircle "Sketcher CreateCircle").
:   4.2. Click on the **origin** of the sketch to position its center point.
:   4.3. Click anywhere in the [3D view](/3D_view "3D view") to set the circumference radius as a distance from the origin. Make it approximately `8 mm`. Again the dimension will be fixed later.

5. Create a series of arcs.

:   5.1. Click on ![](/images/Sketcher_Arc.svg) [Create arc](/Sketcher_CreateArc "Sketcher CreateArc").
:   5.2. Approach the endpoint of one of the construction lines, and click on it. This will set the center point of the circular arc to be ![](/images/Constraint_PointOnPoint.svg) [coincident](/Sketcher_ConstrainCoincident "Sketcher ConstrainCoincident") with this line's endpoint.
:   5.3. Click once in the [3D view](/3D_view "3D view") at an arbitrary location to set simultaneously the radius of the arc, and the first endpoint of it. Define an approximate radius of `8 mm`.
:   5.4. Move the pointer in an anti-clockwise direction to trace an arc that has its concavity pointing towards the origin of the sketch. Click to set the final endpoint of the arc, defining a circular arc that approximately sweeps `180°` or half a circle.
:   5.5. Repeat these steps with each construction line, so that each of them has a circular arc at its tip. We will call these O-arcs for outwards-arcs.

![](/images/03_Sk01_Sketcher_outer_arcs.png)

Circular arcs added at the endpoints of the construction lines. Also a central circle.

### Inner arcs

6. Create an arc between each pair of the previous O-arcs.

:   6.1. Still with the ![](/images/Sketcher_Arc.svg) [Create arc](/Sketcher_CreateArc "Sketcher CreateArc") tool active, click somewhere between two O-arcs but further away from the origin of the sketch, to set the center point of a new arc.
:   6.2. Click somewhere close to the endpoint of one O-arc, and move the pointer to sweep another arc finishing close to another endpoint of a different O-arc, as if you were trying to join the endpoints. This time the concavity must point away from the origin.
:   6.3. Repeat these steps, so that each pair of O-arcs has a new arc between them. We will call these I-arcs for inwards-arcs.

To summarize, the O-arcs should have their curvature pointing outwards, and their concavity pointing towards the origin of the sketch; the I-arcs should have their curvature pointing inwards, and their concavity pointing away from the same origin.

![](/images/04_Sk01_Sketcher_inner_arcs.png)

Circular arcs added between the first set of arcs placed.

## Constraints

Take a look at the [task panel](/Task_panel "Task panel") again. Due to the new geometrical elements that we have drawn, the **Solver messages** section indicates even more *degrees of freedom*. A *degree of freedom* (DOF) indicates a possible movement of one element. For example, a point can be moved both in horizontal and vertical directions, so it has two degrees of freedom. A line is defined by two points, therefore in total it has four degrees of freedom. If we fix one of those points, then the entire system has only two degrees of freedom available; if we additionally fix the horizontal movement of the remaining point, we only have one degree of freedom left; and if we also fix the vertical movement of this point, then the last degree of freedom disappears, and the line cannot move from its position any more.

Up to now when we have drawn lines and curves, the sketcher has added automatic constraints for us, those that keep the lines tied to the origin, and the O-arcs tied to the construction lines. But we haven't added other explicit constraints so the geometrical shapes can still be moved in many directions. **Constraints are "rules" that tell us under which conditions a geometrical object can move and by how much.** They are used to eliminate the degrees of freedom so that the sketch has a stable shape. If we eliminate all degrees of freedom, then the sketch is *fully constrained*, and has a fixed shape, that is, its points cannot move at all. In general, it is a good idea to fully constrain sketches because this will result in stable models.

There are two principal types of constraints:

* *Geometric constraints* define characteristics of the shapes without specifying exact dimensions, for example, horizontality, verticality, parallelism, perpendicularity, and tangency.
* *Datum constraints* define characteristics of the shapes by specifying dimensions, for example, a numeric length or an angle.

## Geometric constraints

### Equal length and radius

7. Geometrically constrain the lines and arcs.

:   7.1 Select all five construction lines. You only need to click once to select an element.
:   7.2. Press ![](/images/Constraint_EqualLength.svg) [Equal length](/Sketcher_ConstrainEqual "Sketcher ConstrainEqual").
:   *Note:* this creates only four constraints. The constraints are chained, the first line has the same length as the second one, which has the same length as the third one, which again has the same length as the fourth one, which has the same length as the fifth one. So in this case, the first and the fifth have the same length.

:   7.3. Select all five O-arcs, those centered on an endpoint of a construction line.
:   7.4. Press ![](/images/Constraint_EqualLength.svg) [Equal length](/Sketcher_ConstrainEqual "Sketcher ConstrainEqual").
:   7.5. Repeat with all I-arcs, those between the O-arcs.
:   *Note:* again the constraints are chained. Therefore all O-arcs will have the same radius, and all I-arcs will have the same radius. At this moment, the specific value of these lengths is not fixed. You may use the pointer to drag a point and see how the sketch is updated while respecting the constraints in place.

:   7.6. Select the construction line that is closest to the vertical axis.
:   7.7. Press ![](/images/Constraint_Vertical.svg) [Vertical](/Sketcher_ConstrainVertical "Sketcher ConstrainVertical") (optional). If you drew the construction line downwards over the Y axis, an automatic ![](/images/Constraint_PointOnObject.svg) [Point on object constraint](/Sketcher_ConstrainPointOnObject "Sketcher ConstrainPointOnObject") was already placed, keeping the construction line vertical. In this case, no additional ![](/images/Constraint_Vertical.svg) [Vertical constraint](/Sketcher_ConstrainVertical "Sketcher ConstrainVertical") is necessary.

*Note:* as you add constraints, overlay symbols indicating the type of constraint appear over the geometry in the [3D view](/3D_view "3D view"). If these symbols obfuscate your view, you can hide them by unchecking the constraint in the [task panel](/Task_panel "Task panel"). Also note that the number of degrees of freedom decreases after adding each constraint.

*Note 2:* if you wish to temporarily disable the constraint, you may select it and press ![](/images/Sketcher_ToggleActiveConstraint.svg) [Toggle active constraint](/Sketcher_ToggleActiveConstraint "Sketcher ToggleActiveConstraint"). When you want to apply it again, press again the same button.

![](/images/05a_Sk01_Sketcher_equality_constraints_lines.png) ![](/images/05b_Sk01_Sketcher_equality_constraints_O-arcs.png)

![](/images/05c_Sk01_Sketcher_equality_constraints_I-arcs.png)

Sketch with equality constraints applied to the construction lines, and to the two sets of arcs.

### Tangency

8. Apply tangency to the arcs.

:   8.1. Select one endpoint of an O-arc and then the closest endpoint of the adjacent I-arc.
:   8.2. Press ![](/images/Constraint_Tangent.svg) [Tangent](/Sketcher_ConstrainTangent "Sketcher ConstrainTangent"). This makes the two adjacent arcs connect smoothly at their endpoints.
:   8.3. Repeat for all endpoints of the O-arcs and I-arcs to obtain a closed profile.

*Note:* applying the tangential constraint very often will move the geometry around in order to produce a smooth connection. You may have to use the pointer to reposition the points a bit before applying the next tangential constraint. Try placing the endpoints in such a way that two arcs aren't too far apart, so they can be connected with a short line rather than a long line.

As of this step, we have now created a closed profile, as all arcs have been tied together. Now we can provide datum constraints to fix the shape of the sketch. While the dimensions of lines and arcs remain unfixed, we can drag the points of the sketch and observe how the entire sketch changes.

![](/images/06_Sk01_Sketcher_tangency_constraints.png)

Sketch with tangential constraints applied to the arcs, which closes the shape.

## Datum constraints

These constraints specify the numerical distances between two points, and angles between two lines.

### Distances and angles

9. Adjust the size of the construction lines.

:   9.1. Select the vertically constrained construction line.
:   9.2. Press ![](/images/Constraint_VerticalDistance.svg) [Vertical distance](/Sketcher_ConstrainDistanceY "Sketcher ConstrainDistanceY").
:   9.3. Set the length to `30 mm`. Because all construction lines are constrained to have the same length, all these lines adjust their sizes at the same time.

10. Adjust the angle between the construction lines.

:   10.1. Select the vertical construction line and the construction line closest to it.
:   10.2. Press ![](/images/Constraint_InternalAngle.svg) [Angle](/Sketcher_ConstrainAngle "Sketcher ConstrainAngle").
:   10.3. Set the angle to `72°`.
:   10.4. Repeat the same procedure for each pair of construction lines, and use the same angle.
:   *Note:* at this stage, the sketch may have very few degrees of freedom left, meaning that its shape cannot be changed too much. If you attempt to add more constraints, these may cause a conflict with the previously added constraints. If this is the case, do not add these constraints, and proceed with the next steps.

![](/images/07a_Sk01_Sketcher_length_constraint.png) ![](/images/07b_Sk01_Sketcher_angle_constraint.png)

Sketch with length constraint applied to one vertical construction line (left), and angle constraints to three pairs of construction lines (right).

### Radius

11. Adjust the size of the arcs.

:   11.1. Select one of the O-arcs, centered on the endpoint of a construction line.
:   11.2. Press ![](/images/Constraint_Radius.svg) [Radius](/Sketcher_ConstrainRadius "Sketcher ConstrainRadius").
:   11.3. Set the radius to `8 mm`. Because all O-arcs are constrained to have the same radius, all these arcs adjust their sizes at the same time.
:   11.4. Select one of the I-arcs, between two O-arcs.
:   11.5. Press ![](/images/Constraint_Radius.svg) [Radius](/Sketcher_ConstrainRadius "Sketcher ConstrainRadius").
:   11.6. Set the radius to `11 mm`. Because all I-arcs are constrained to have the same radius, all these arcs adjust their sizes at the same time.

![](/images/08a_Sk01_Sketcher_radius_1_constraint.png) ![](/images/08b_Sk01_Sketcher_radius_2_constraint.png)

Sketch with radius constraints applied to the outwards arcs (left), and inwards arcs (right).

:   11.7. Finally, select the circle in the center of the sketch, press ![](/images/Constraint_Radius.svg) [Radius](/Sketcher_ConstrainRadius "Sketcher ConstrainRadius"), and set the value to `8 mm`.

We should end up with a fully constrained sketch. It can be confirmed by noticing the change in color of the real geometry, and by the message that is shown in the [task panel](/Task_panel "Task panel").

![](/images/09_Sk01_Sketcher_fully_constrained.png)

Sketch with all geometrical and datum constraints applied.

## Extrusion

12. Now that we have a fully constrained sketch, it can be used to create a solid body.

:   12.1. Exit the sketch edit mode by pressing the Close button, or pressing Esc twice. The sketch should appear in the [tree view](/Tree_view "Tree view") and the [3D view](/3D_view "3D view").
:   12.2. Switch to the [PartDesign Workbench](/PartDesign_Workbench "PartDesign Workbench").
:   12.3. With the sketch selected in the [tree view](/Tree_view "Tree view"), press ![](/images/PartDesign_Body.svg) [PartDesign Body](/PartDesign_Body "PartDesign Body"), choose the default XY-plane, and press OK. The sketch should appear now inside the Body.
:   12.4. Select the sketch, and then press ![](/images/PartDesign_Pad.svg) [PartDesign Pad](/PartDesign_Pad "PartDesign Pad"), choose the default options, and press OK to create a solid extrusion.

![](/images/09b_Sk01_Sketcher_fully_constrained_clean.png) ![](/images/10_Sk01_Sketcher_solid_extrusion.png)

Left: fully constrained sketch with only the most important constraints showing. Right: solid extrusion produced with [PartDesign Pad](/PartDesign_Pad "PartDesign Pad").

## Additional information

For a more in depth description of the sketcher, visit the [Sketcher Workbench](/Sketcher_Workbench "Sketcher Workbench") documentation and also read the [Sketcher Lecture](/Sketcher_Lecture "Sketcher Lecture").

Constraining a sketch can be done in many different ways. In general, it is recommended to use geometrical constraints first, and minimize the number of datum constraints, as this simplifies the task of the internal constraint solver. To investigate this, repeat this example, now adding the constraints in different order.

* First constrain the construction lines before drawing the arcs.
* Or constrain the size of the arcs before making them tangent.
* Or set the angle of the construction lines before adding more elements.
* Try using other construction geometry.

Retrieved from "<http://wiki.freecad.org/index.php?title=Basic_Sketcher_Tutorial/pt-br&oldid=1467835>"