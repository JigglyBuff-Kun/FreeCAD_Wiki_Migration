---
title: Sketcher Workbench
---

![](/images/Workbench_Sketcher.svg)

Sketcher workbench icon

## Introduction

With the ![](/images/Workbench_Sketcher.svg) [Sketcher Workbench](/Sketcher_Workbench "Sketcher Workbench") 2D sketches intended for use in other workbenches can be created. 2D sketches are the starting point for many CAD models. They typically define the profiles and paths for operations to create 3D shapes. A model may depend on several sketches for its final shape.

Together with boolean operations defined in the ![](/images/Workbench_Part.svg) [Part Workbench](/Part_Workbench "Part Workbench"), the Sketcher Workbench, or "The Sketcher" for short, forms the basis of the [constructive solid geometry](/Constructive_solid_geometry "Constructive solid geometry") (CSG) method of building solids. Together with ![](/images/Workbench_PartDesign.svg) [PartDesign Workbench](/PartDesign_Workbench "PartDesign Workbench") operations, it also forms the basis of the [feature editing](/Feature_editing "Feature editing") methodology of creating solids. But many other workbenches use sketches as well.

The Sketcher workbench features [constraints](#Constraints), allowing 2D shapes to follow precise geometrical definitions in terms of length, angles, and relationships (horizontality, verticality, perpendicularity, etc.). A constraint solver calculates the constrained-extent of 2D geometry and allows interactive exploration of the degrees-of-freedom of the sketch.

The Sketcher is not intended for producing 2D blueprints. Once sketches are used to generate a solid feature, they are automatically hidden and Constraints are only visible in Sketch edit mode. If you only need to produce 2D views for print, and don't want to create 3D models, check out the [Draft workbench](/Draft_Workbench "Draft Workbench").

![](/images/FC_ConstrainedSketch.png)

A fully constrained sketch

## Constraints

Constraints are used to limit the degrees of freedom of an object. For example, a line without constraints has 4 degrees of freedom (abbreviated as "DoF"): it can be moved horizontally or vertically, it can be stretched, and it can be rotated.

Applying a horizontal or vertical constraint, or an angle constraint (relative to another line or to one of the axes), will limit its capacity to rotate, thus leaving it with 3 degrees of freedom. Locking one of its points in relation to the origin will remove another 2 degrees of freedom. And applying a dimension constraint will remove the last degree of freedom. The line is then considered **fully-constrained**.

Objects can be constrained in relation to one another. Two lines can be joined through one of their points with the coincident point constraint. An angle can be set between them, or they can be set perpendicular. A line can be tangent to an arc or a circle, and so on. A complex Sketch with multiple objects may have a number of different solutions, and making it **fully-constrained** can mean that just one of these possible solutions has been reached based on the applied constraints.

There are two kinds of constraints: geometric and dimensional. They are detailed in the [Tools](#Tools) section below.

### Edit constraints

When a [driving dimensional constraint](/Sketcher_ToggleDrivingConstraint "Sketcher ToggleDrivingConstraint") is created, and if the **Ask for value after creating a dimensional constraint** [preference](/Sketcher_Preferences#Display "Sketcher Preferences") is selected (default), a dialog opens to edit its value.

![Sketcher_Edit_Constraint.png](/images/Sketcher_Edit_Constraint.png)

You can enter a numerical value or an [expression](/Expressions "Expressions"), and it is possible to name the constraint to facilitate its use in other expressions. You can also check the **Reference** checkbox to switch the constrain to [reference mode](/Sketcher_ToggleDrivingConstraint "Sketcher ToggleDrivingConstraint").

To edit the value of an existing dimensional constraint do one of the following:

- Double-click the constraint value in the [3D view](/3D_view "3D view").
- Double-click the constraint in the [Sketcher Dialog](/Sketcher_Dialog "Sketcher Dialog").
- Right-click the constraint in the Sketcher Dialog and select the **Change value** option from the context menu.

### Reposition constraints

Dimensional constraints can be repositioned in the 3D view by dragging. Hold down the left mouse button over the constraint value and move the mouse. The symbols of geometric constraints are positioned automatically and cannot be moved.

## Profile sketches

To create a sketch that can be used as a profile for generating solids certain rules must be followed:

- The sketch must contain only closed contours. Gaps between endpoints, however small, are not allowed.
- Contours can be nested, to create voids, but should not self-intersect or intersect other contours.
- Contours cannot share edges with other contours. Duplicate edges must be avoided.
- T-connections, that is more than two edges sharing a common point, or a point touching an edge, are not allowed.

These rules do not apply to construction geometry (default color blue), which is not shown outside edit mode, or if the sketch is used for a different purpose. Depending on the workbench and the tool that will use the profile sketch, additional restrictions may apply.

## Drawing aids

The Sketcher Workbench has several drawing aids and other features that can help when creating geometry and applying constraints.

### Continue modes

There are two continue modes: **Geometry creation "Continue Mode"** and **Constraint creation "Continue Mode"**. If these are checked (default) in the [preferences](/Sketcher_Preferences#Display "Sketcher Preferences"), related tools will restart after finishing. To exit a continuous tool press Esc or the right mouse button. This must be repeated if a continuous geometry tool has already received input. You can also exit a continuous tool by starting another geometry or constraint creation tool. Note that pressing Esc if no tool is active will exit sketch edit mode. Uncheck the **Esc can leave sketch edit mode** [preference](/Sketcher_Preferences#General "Sketcher Preferences") if you often inadvertently press Esc too many times.

### Auto constraints

In sketches that have **Auto constraints** checked (default) several constraints are applied automatically. The icon of a proposed automatic constraint is shown next to the cursor when it is placed correctly. Left-clicking will then apply that constraint. This is a per-sketch setting that can be changed in the [Sketcher Dialog](/Sketcher_Dialog#Constraints "Sketcher Dialog") or by changing the View**Autoconstraints** [property](/Property_editor "Property editor") of the sketch.

The following constraints are applied automatically:

- ![](/images/Sketcher_ConstrainCoincident.svg) [Coincident](/Sketcher_ConstrainCoincident "Sketcher ConstrainCoincident")
- ![](/images/Sketcher_ConstrainPointOnObject.svg) [Point on object](/Sketcher_ConstrainPointOnObject "Sketcher ConstrainPointOnObject")
- ![](/images/Sketcher_ConstrainHorizontal.svg) [Horizontal](/Sketcher_ConstrainHorizontal "Sketcher ConstrainHorizontal")
- ![](/images/Sketcher_ConstrainVertical.svg) [Vertical](/Sketcher_ConstrainVertical "Sketcher ConstrainVertical")
- ![](/images/Sketcher_ConstrainTangent.svg) [Tangent](/Sketcher_ConstrainTangent "Sketcher ConstrainTangent")
- [introduced in 1.0](/Release_notes_1.0 "Release notes 1.0"): ![](/images/Sketcher_ConstrainSymmetric.svg) [Symmetric](/Sketcher_ConstrainSymmetric "Sketcher ConstrainSymmetric") (line midpoint)

### Snapping

[introduced in 0.21](/Release_notes_0.21 "Release notes 0.21")

It is possible to [snap](/Sketcher_Snap "Sketcher Snap") to grid lines and grid intersection, to edges of geometry and midpoints of lines and arcs, and to certain angles. Please note that snapping does not produce constraints in and of itself. For example, only if [Auto constraints](#Auto_constraints) is switched on will snapping to an edge produce a [Point on object constraint](/Sketcher_ConstrainPointOnObject "Sketcher ConstrainPointOnObject"). But just picking a point on the edge would then have the same result.

### On-View-Parameters

[introduced in 1.0](/Release_notes_1.0 "Release notes 1.0")

Depending on the selected option in the [preferences](/Sketcher_Preferences#General "Sketcher Preferences") only the dimensional On-View-Parameters or both the dimensional and the positional On-View-Parameters can be enabled. Positional parameters allow the input of exact coordinates, for example the center of a circle, or the start point of a line. Dimensional parameters allow the input of exact dimensions, for example the radius of a circle, or the length and angle of a line. On-View-Parameters are not available for all tools.

![](/images/Sketcher_On_view_parameters_positional.png)

Determining the center point of a circle with the positional parameters enabled

![](/images/Sketcher_On_view_parameters_dimensional.png)

Determining the radius of a circle with the dimensional parameters enabled

If values are entered and confirmed by pressing Enter or Tab, related constraints are added automatically. If two parameters are displayed at the same time, for example the X and Y coordinate of a point, it is possible to enter one value and pick a point to define the other. Depending on the object additional constraints may be required to fully constrain it. Constraints resulting from On-View-Parameters take precedence over those that may result from [Auto constraints](/Sketcher_Dialog#Constraints "Sketcher Dialog").

![](/images/Sketcher_ArcExample3.png)

Arc created by entering all On-View-Parameters with resulting automatically created constraints

### Coordinate display

If the **Show coordinates beside cursor while editing** [preference](/Sketcher_Preferences#Display "Sketcher Preferences") is checked (default), the parameters of the current geometry tool (coordinates, radius, or length and angle) are displayed next to the cursor. This is deactivated while On-View-Parameters are shown.

## Selection methods

While a sketch is in edit mode the following selection methods can be used:

### 3D view element selection

As elsewhere in FreeCAD, an element can be selected in the [3D view](/3D_view "3D view") with a single left mouse click. But there is no need to hold down the Ctrl key when selecting multiple elements. Holding down that key is possible though and has the advantage that you can miss-click without losing the selection. Edges, points and constraints can be selected in this manner.

### 3D view box selection

Box selection in the 3D view works without using [Std BoxSelection](/Std_BoxSelection "Std BoxSelection") or [Std BoxElementSelection](/Std_BoxElementSelection "Std BoxElementSelection"):

1. Make sure that no tool is active.
2. Do one of the following:
   - Click in an empty area and drag a rectangle from left to right to select elements that lie completely inside the rectangle.
   - Click in an empty area and drag a rectangle from right to left to also select elements that touch or cross the rectangle.

You can box-select edges and points, constraints cannot be box-selected.

### 3D view connected geometry selection

[introduced in 1.0](/Release_notes_1.0 "Release notes 1.0")

Double-clicking an edge in the 3D view will select all edges directly and indirectly connected with that edge via endpoints. There is no need for the edges to be connected with [Coincident constraints](/Sketcher_ConstrainCoincident "Sketcher ConstrainCoincident"), endpoints need only have the same coordinates.

### Sketcher Dialog selection

Edges and points can also be selected from the Elements section of the [Sketcher Dialog](/Sketcher_Dialog "Sketcher Dialog"), and constraints from the Constraints section of that dialog.

## Copy, cut and paste

[introduced in 1.0](/Release_notes_1.0 "Release notes 1.0")

The standard keyboard shortcuts, Ctrl+C, Ctrl+X and Ctrl+V, can be used to copy, cut and paste selected Sketcher geometry including related constraints. But these tools are also available from the **Sketch → Sketcher tools** menu. They can be used within the same sketch but also between different sketches or separate instances of FreeCAD. Since the data is copied to the clipboard in the form of Python code, it can be used in other ways too (e.g. shared on the forum).

## Tools

The Sketcher Workbench tools are located in the Sketch menu and/or several toolbars. [introduced in 0.21](/Release_notes_0.21 "Release notes 0.21"): Almost all Sketcher toolbars are only displayed while a sketch is in edit mode. The only exception is the [Sketcher toolbar](#Sketcher_toolbar) which is only displayed if no sketch is in edit mode.

Some tools are also available from the [3D view](/3D_view "3D view") context menu while a sketch is in edit mode, or from the context menus of the [Sketcher Dialog](/Sketcher_Dialog "Sketcher Dialog").

[introduced in 0.21](/Release_notes_0.21 "Release notes 0.21"): If a sketch is in edit mode the Structure toolbar is hidden as none of its tools can then be used.

### General

#### Sketcher toolbar

- ![](/images/Sketcher_NewSketch.svg) [Create sketch](/Sketcher_NewSketch "Sketcher NewSketch"): Creates a new sketch and opens the [Sketcher Dialog](/Sketcher_Dialog "Sketcher Dialog") to edit it.

- ![](/images/Sketcher_EditSketch.svg) [Edit sketch](/Sketcher_EditSketch "Sketcher EditSketch"): Opens the Sketcher Dialog to edit an existing sketch.

- ![](/images/Sketcher_MapSketch.svg) [Attach sketch](/Sketcher_MapSketch "Sketcher MapSketch"): Attaches a sketch to selected geometry.

- ![](/images/Sketcher_ReorientSketch.svg) [Reorient sketch](/Sketcher_ReorientSketch "Sketcher ReorientSketch"): Places a sketch on one of the main planes with an optional offset. It can also be used to detach a sketch.

- ![](/images/Sketcher_ValidateSketch.svg) [Validate sketch](/Sketcher_ValidateSketch "Sketcher ValidateSketch"): Can analyze and repair a sketch that is no longer editable or has invalid constraints, or add missing coincident constraints.

- ![](/images/Sketcher_MergeSketches.svg) [Merge sketches](/Sketcher_MergeSketches "Sketcher MergeSketches"): Merges two or more sketches.

- ![](/images/Sketcher_MirrorSketch.svg) [Mirror sketch](/Sketcher_MirrorSketch "Sketcher MirrorSketch"): Mirrors sketches across their X axis, Y axis, or origin.

#### Sketcher Edit Mode toolbar

- ![](/images/Sketcher_LeaveSketch.svg) [Leave sketch](/Sketcher_LeaveSketch "Sketcher LeaveSketch"): Finishes sketch edit mode and closes the [Sketcher Dialog](/Sketcher_Dialog "Sketcher Dialog").

- ![](/images/Sketcher_ViewSketch.svg) [View sketch](/Sketcher_ViewSketch "Sketcher ViewSketch"): Aligns the [3D view](/3D_view "3D view") with the sketch.

- ![](/images/Sketcher_ViewSection.svg) [View section](/Sketcher_ViewSection "Sketcher ViewSection"): Toggles a temporary section plane that hides any objects and parts of objects in front of the sketch plane.

#### Sketcher edit tools toolbar

- ![](/images/Sketcher_Grid.svg) [Toggle grid](/Sketcher_Grid "Sketcher Grid"): Toggles the grid in the sketch currently being edited. Settings can be changed in the related menu. [introduced in 0.21](/Release_notes_0.21 "Release notes 0.21")

- ![](/images/Sketcher_Snap.svg) [Toggle snap](/Sketcher_Snap "Sketcher Snap"): Toggles snapping in all sketches. Settings can be changed in the related menu. [introduced in 0.21](/Release_notes_0.21 "Release notes 0.21")

- ![](/images/Sketcher_RenderingOrder.svg) [Configure rendering order](/Sketcher_RenderingOrder "Sketcher RenderingOrder"): The rendering order of all sketches can be changed in the related menu. [introduced in 0.21](/Release_notes_0.21 "Release notes 0.21")

#### Other

- ![](/images/Sketcher_StopOperation.svg) [Stop operation](/Sketcher_StopOperation "Sketcher StopOperation"): Stops any currently running geometry or constraint creation tool.

### Sketcher geometries

These are tools for creating objects.

- ![](/images/Sketcher_CreatePoint.svg) [Point](/Sketcher_CreatePoint "Sketcher CreatePoint"): Creates a point.

- ![](/images/Sketcher_CreatePolyline.svg) [Polyline](/Sketcher_CreatePolyline "Sketcher CreatePolyline"): Creates a series of line and arc segments connected by their endpoints. The tool has several modes.

- ![](/images/Sketcher_CreateLine.svg) [Line](/Sketcher_CreateLine "Sketcher CreateLine"): Creates a line. [introduced in 1.0](/Release_notes_1.0 "Release notes 1.0"): The tool has three modes.

- ![](/images/Sketcher_CreateArc.svg)![](/images/Toolbar_flyout_arrow_blue_background.svg) Create arc:

- ![](/images/Sketcher_CreateArc.svg) [Arc by center](/Sketcher_CreateArc "Sketcher CreateArc"): Creates an arc by its center and its endpoints. [introduced in 1.0](/Release_notes_1.0 "Release notes 1.0"): Or by its endpoints and a point along the arc.

- ![](/images/Sketcher_Create3PointArc.svg) [Arc by 3 points](/Sketcher_Create3PointArc "Sketcher Create3PointArc"): Creates an arc by its endpoints and a point along the arc. [introduced in 1.0](/Release_notes_1.0 "Release notes 1.0"): This is the same tool as [Arc by center](/Sketcher_CreateArc "Sketcher CreateArc") but with a different initial mode.

- ![](/images/Sketcher_CreateArcOfEllipse.svg) [Arc of ellipse](/Sketcher_CreateArcOfEllipse "Sketcher CreateArcOfEllipse"): Creates an arc of ellipse.

- ![](/images/Sketcher_CreateArcOfHyperbola.svg) [Arc of hyperbola](/Sketcher_CreateArcOfHyperbola "Sketcher CreateArcOfHyperbola"): Creates an arc of hyperbola.

- ![](/images/Sketcher_CreateArcOfParabola.svg) [Arc of parabola](/Sketcher_CreateArcOfParabola "Sketcher CreateArcOfParabola"): Creates an arc of parabola.

- ![](/images/Sketcher_CreateCircle.svg)![](/images/Toolbar_flyout_arrow_blue_background.svg) Create circle/ellipse:

- ![](/images/Sketcher_CreateCircle.svg) [Circle by center](/Sketcher_CreateCircle "Sketcher CreateCircle"): Creates a circle by its center and a point along the circle. [introduced in 1.0](/Release_notes_1.0 "Release notes 1.0"): Or by three points along the circle.

- ![](/images/Sketcher_Create3PointCircle.svg) [Circle by 3 points](/Sketcher_Create3PointCircle "Sketcher Create3PointCircle"): Creates a circle by three points along the circle. [introduced in 1.0](/Release_notes_1.0 "Release notes 1.0"): This is the same tool as [Circle by center](/Sketcher_CreateCircle "Sketcher CreateCircle") but with a different initial mode.

- ![](/images/Sketcher_CreateEllipseByCenter.svg) [Ellipse by center](/Sketcher_CreateEllipseByCenter "Sketcher CreateEllipseByCenter"): Creates an ellipse by its center, an endpoint of one of its axes, and a point along the ellipse. [introduced in 1.0](/Release_notes_1.0 "Release notes 1.0"): Or by both endpoints of one of its axes and a point along the ellipse.

- ![](/images/Sketcher_CreateEllipseBy3Points.svg) [Ellipse by 3 points](/Sketcher_CreateEllipseBy3Points "Sketcher CreateEllipseBy3Points"): Creates an ellipse by the endpoints of one of its axes and a point along the ellipse. [introduced in 1.0](/Release_notes_1.0 "Release notes 1.0"): This is the same tool as [Ellipse by center](/Sketcher_CreateEllipseByCenter "Sketcher CreateEllipseByCenter") but with a different initial mode.

- ![](/images/Sketcher_CreateRectangle.svg)![](/images/Toolbar_flyout_arrow_blue_background.svg) Create rectangle:

- ![](/images/Sketcher_CreateRectangle.svg) [Rectangle](/Sketcher_CreateRectangle "Sketcher CreateRectangle"): Creates a rectangle. [introduced in 1.0](/Release_notes_1.0 "Release notes 1.0"): The tool has four modes. Rounded corners and creating an offset copy are optional features.

- ![](/images/Sketcher_CreateRectangle_Center.svg) [Centered rectangle](/Sketcher_CreateRectangle_Center "Sketcher CreateRectangle Center"): Creates a centered rectangle. [introduced in 1.0](/Release_notes_1.0 "Release notes 1.0"): This is the same tool as [Rectangle](/Sketcher_CreateRectangle "Sketcher CreateRectangle") but with a different initial mode.

- ![](/images/Sketcher_CreateOblong.svg) [Rounded rectangle](/Sketcher_CreateOblong "Sketcher CreateOblong"): Creates a rounded rectangle. Idem.

- ![](/images/Sketcher_CreateHexagon.svg)![](/images/Toolbar_flyout_arrow_blue_background.svg) Create regular polygon:

- ![](/images/Sketcher_CreateTriangle.svg) [Triangle](/Sketcher_CreateTriangle "Sketcher CreateTriangle"): creates an equilateral triangle. [introduced in 1.0](/Release_notes_1.0 "Release notes 1.0"): This is the same tool as [Regular polygon](/Sketcher_CreateRegularPolygon "Sketcher CreateRegularPolygon") but with the number of sides preset to a specif value.

- ![](/images/Sketcher_CreateSquare.svg) [Square](/Sketcher_CreateSquare "Sketcher CreateSquare"): Creates a square. Idem.

- ![](/images/Sketcher_CreatePentagon.svg) [Pentagon](/Sketcher_CreatePentagon "Sketcher CreatePentagon"): Creates a pentagon. Idem.

- ![](/images/Sketcher_CreateHexagon.svg) [Hexagon](/Sketcher_CreateHexagon "Sketcher CreateHexagon"): Creates a hexagon. Idem.

- ![](/images/Sketcher_CreateHeptagon.svg) [Heptagon](/Sketcher_CreateHeptagon "Sketcher CreateHeptagon"): Creates a heptagon. Idem.

- ![](/images/Sketcher_CreateOctagon.svg) [Octagon](/Sketcher_CreateOctagon "Sketcher CreateOctagon"): Creates an octagon. Idem.

- ![](/images/Sketcher_CreateRegularPolygon.svg) [Regular polygon](/Sketcher_CreateRegularPolygon "Sketcher CreateRegularPolygon"): Creates a regular polygon. The number of sides can be specified.

- ![](/images/Sketcher_CreateSlot.svg)![](/images/Toolbar_flyout_arrow_blue_background.svg) Create slot:

- ![](/images/Sketcher_CreateSlot.svg) [Slot](/Sketcher_CreateSlot "Sketcher CreateSlot"): Creates a slot.

- ![](/images/Sketcher_CreateArcSlot.svg) [Arc slot](/Sketcher_CreateArcSlot "Sketcher CreateArcSlot"): Creates an arc slot. [introduced in 1.0](/Release_notes_1.0 "Release notes 1.0")

- ![](/images/Sketcher_CreateBSpline.svg)![](/images/Toolbar_flyout_arrow_blue_background.svg) Create B-spline:

- ![](/images/Sketcher_CreateBSpline.svg) [B-spline by control points](/Sketcher_CreateBSpline "Sketcher CreateBSpline"): Creates a B-spline curve by control points. [introduced in 1.0](/Release_notes_1.0 "Release notes 1.0"): Or by knot points.

- ![](/images/Sketcher_CreatePeriodicBSpline.svg) [Periodic B-spline by control points](/Sketcher_CreatePeriodicBSpline "Sketcher CreatePeriodicBSpline"): Creates a periodic (closed) B-spline curve by control points. [introduced in 1.0](/Release_notes_1.0 "Release notes 1.0"): This is the same tool as [B-spline by control points](/Sketcher_CreateBSpline "Sketcher CreateBSpline") but with a different initial mode.

- ![](/images/Sketcher_CreateBSplineByInterpolation.svg) [B-spline by knots](/Sketcher_CreateBSplineByInterpolation "Sketcher CreateBSplineByInterpolation"): Creates a B-spline curve by knot points. Idem.

- ![](/images/Sketcher_CreatePeriodicBSplineByInterpolation.svg) [Periodic B-spline by knots](/Sketcher_CreatePeriodicBSplineByInterpolation "Sketcher CreatePeriodicBSplineByInterpolation"): Creates a periodic (closed) B-spline curve by knot points. Idem.

- ![](/images/Sketcher_ToggleConstruction.svg) [Toggle construction geometry](/Sketcher_ToggleConstruction "Sketcher ToggleConstruction"): Either toggles the geometry creation tools to/from construction mode, or toggles selected geometry to/from construction geometry.

### Sketcher constraints

These are tools for creating [constraints](#Constraints). Some constraints require the use of [Helper constraints](/Sketcher_helper_constraint "Sketcher helper constraint").

- ![](/images/Sketcher_Dimension.svg)![](/images/Toolbar_flyout_arrow_blue_background.svg) Dimensional constraints:

- ![](/images/Sketcher_Dimension.svg) [Dimension](/Sketcher_Dimension "Sketcher Dimension"): Is the context-sensitive constraint tool of the Sketcher Workbench. Based on the current selection, it offers appropriate dimensional constraints, but also geometric constraints. [introduced in 1.0](/Release_notes_1.0 "Release notes 1.0")

- ![](/images/Sketcher_ConstrainDistanceX.svg) [Horizontal distance](/Sketcher_ConstrainDistanceX "Sketcher ConstrainDistanceX"): Fixes the horizontal distance between two points or the endpoints of a line. If a single point is pre-selected, the distance is relative to the origin of the sketch.

- ![](/images/Sketcher_ConstrainDistanceY.svg) [Vertical distance](/Sketcher_ConstrainDistanceY "Sketcher ConstrainDistanceY"): Fixes the vertical distance between two points or the endpoints of a line. If a single point is pre-selected, the distance is relative to the origin of the sketch.

- ![](/images/Sketcher_ConstrainDistance.svg) [Distance](/Sketcher_ConstrainDistance "Sketcher ConstrainDistance"): Fixes the length of a line, the distance between two points, the perpendicular distance between a point and a line; or, [introduced in 0.21](/Release_notes_0.21 "Release notes 0.21"), the distance between the edges of two circles or arcs, or between the edge of a circle or arc and a line; or, [introduced in 1.0](/Release_notes_1.0 "Release notes 1.0"), the length of an arc.

- ![](/images/Sketcher_ConstrainRadiam.svg) [Auto radius/diameter](/Sketcher_ConstrainRadiam "Sketcher ConstrainRadiam"): Fixes the radius of arcs and B-spline weight circles, and the diameter of circles.

- ![](/images/Sketcher_ConstrainRadius.svg) [Radius](/Sketcher_ConstrainRadius "Sketcher ConstrainRadius"): Fixes the radius of circles, arcs and B-spline weight circles.

- ![](/images/Sketcher_ConstrainDiameter.svg) [Diameter](/Sketcher_ConstrainDiameter "Sketcher ConstrainDiameter"): Fixes the diameter of circles and arcs.

- ![](/images/Sketcher_ConstrainAngle.svg) [Angle](/Sketcher_ConstrainAngle "Sketcher ConstrainAngle"): Fixes the angle between two edges, the angle of a line with the horizontal axis of the sketch, or the aperture angle of a circular arc.

- ![](/images/Sketcher_ConstrainLock.svg) [Lock](/Sketcher_ConstrainLock "Sketcher ConstrainLock"): Applies [Horizontal distance](/Sketcher_ConstrainDistanceX "Sketcher ConstrainDistanceX") and [Vertical distance](/Sketcher_ConstrainDistanceY "Sketcher ConstrainDistanceY") constraints to points. If a single point is selected the constraints reference the origin of the sketch. If two or more points are selected the constraints reference the last point in the selection.

- ![](/images/Sketcher_ConstrainCoincidentUnified.svg) [Coincident (unified)](/Sketcher_ConstrainCoincidentUnified "Sketcher ConstrainCoincidentUnified"): Creates a coincident constraint between points, fixes points on edges or axes, or creates a concentric constraint. It combines the [Coincident](/Sketcher_ConstrainCoincident "Sketcher ConstrainCoincident") and [Point on object](/Sketcher_ConstrainPointOnObject "Sketcher ConstrainPointOnObject") tools. [introduced in 1.0](/Release_notes_1.0 "Release notes 1.0")

- ![](/images/Sketcher_ConstrainCoincident.svg) [Coincident](/Sketcher_ConstrainCoincident "Sketcher ConstrainCoincident"): Creates a coincident constraint between points, or a concentric constraint.

- ![](/images/Sketcher_ConstrainPointOnObject.svg) [Point on object](/Sketcher_ConstrainPointOnObject "Sketcher ConstrainPointOnObject"): Fixes points on edges or axes.

- ![](/images/Sketcher_ConstrainHorVer.svg)![](/images/Toolbar_flyout_arrow_blue_background.svg)Horizontal/vertical constraints:

- ![](/images/Sketcher_ConstrainHorVer.svg) [Horizontal/vertical](/Sketcher_ConstrainHorVer "Sketcher ConstrainHorVer"): Constrains lines or pairs of points to be horizontal or vertical, whichever is closest to the current alignment. It combines the [Horizontal](/Sketcher_ConstrainHorizontal "Sketcher ConstrainHorizontal") and [Vertical](/Sketcher_ConstrainVertical "Sketcher ConstrainVertical") tools. [introduced in 1.0](/Release_notes_1.0 "Release notes 1.0")

- ![](/images/Sketcher_ConstrainHorizontal.svg) [Horizontal](/Sketcher_ConstrainHorizontal "Sketcher ConstrainHorizontal"): Constrains lines or pairs of points to be horizontal.

- ![](/images/Sketcher_ConstrainVertical.svg) [Vertical](/Sketcher_ConstrainVertical "Sketcher ConstrainVertical"): Constrains lines or pairs of points to be vertical.

- ![](/images/Sketcher_ConstrainParallel.svg) [Parallel](/Sketcher_ConstrainParallel "Sketcher ConstrainParallel"): Constrains lines to be parallel.

- ![](/images/Sketcher_ConstrainPerpendicular.svg) [Perpendicular](/Sketcher_ConstrainPerpendicular "Sketcher ConstrainPerpendicular"): Constrains two lines to be perpendicular, or two edges, or an edge and an axis, to be perpendicular at their intersection. The constraint can also connect two edges, forcing them to be perpendicular at the joint.

- ![](/images/Sketcher_ConstrainTangent.svg) [Tangent or collinear](/Sketcher_ConstrainTangent "Sketcher ConstrainTangent"): Constrains two edges, or an edge and an axis, to be tangent. The constraint can also connect two edges, forcing them to be tangent at the joint. If two lines are selected they are made collinear.

- ![](/images/Sketcher_ConstrainEqual.svg) [Equal](/Sketcher_ConstrainEqual "Sketcher ConstrainEqual"): Constrains edges to have an equal length (lines) or curvature (other edges except B-splines).

- ![](/images/Sketcher_ConstrainSymmetric.svg) [Symmetric](/Sketcher_ConstrainSymmetric "Sketcher ConstrainSymmetric"): Constrains two points to be symmetrical around a line or axis, or around a third point.

- ![](/images/Sketcher_ConstrainBlock.svg) [Block](/Sketcher_ConstrainBlock "Sketcher ConstrainBlock"): Blocks edges in place with a single constraint. It is mainly intended for B-splines.

- ![](/images/Sketcher_ConstrainSnellsLaw.svg) [Refraction (Snell's law)](/Sketcher_ConstrainSnellsLaw "Sketcher ConstrainSnellsLaw"): Constrains two lines to follow the law of refraction of light as it penetrates through an interface.

- ![](/images/Sketcher_ToggleDrivingConstraint.svg)![](/images/Toolbar_flyout_arrow_blue_background.svg) Toggle constraints:

- ![](/images/Sketcher_ToggleDrivingConstraint.svg) [Toggle driving/reference constraint](/Sketcher_ToggleDrivingConstraint "Sketcher ToggleDrivingConstraint"): Toggles the dimensional constraint creation tools between driving and reference mode, or toggles selected dimensional constraints between those modes.

- ![](/images/Sketcher_ToggleActiveConstraint.svg) [Activate/deactivate constraint](/Sketcher_ToggleActiveConstraint "Sketcher ToggleActiveConstraint"): Activates or deactivates selected constraints.

### Sketcher tools

- ![](/images/Sketcher_CreateFillet.svg)![](/images/Toolbar_flyout_arrow_blue_background.svg) Create fillet/chamfer:

- ![](/images/Sketcher_CreateFillet.svg) [Fillet](/Sketcher_CreateFillet "Sketcher CreateFillet"): Creates a fillet between two non-parallel edges. [introduced in 1.0](/Release_notes_1.0 "Release notes 1.0"): The tool can also create a chamfer.

- ![](/images/Sketcher_CreateChamfer.svg) [Chamfer](/Sketcher_CreateChamfer "Sketcher CreateChamfer"): creates a chamfer between two non-parallel edges. This is the same tool as [Fillet](/Sketcher_CreateFillet "Sketcher CreateFillet") but with a different initial mode. [introduced in 1.0](/Release_notes_1.0 "Release notes 1.0")

- ![](/images/Sketcher_Trimming.svg)![](/images/Toolbar_flyout_arrow_blue_background.svg) Edit edge:

- ![](/images/Sketcher_Trimming.svg) [Trim](/Sketcher_Trimming "Sketcher Trimming"): Trims an edge at the nearest intersections with other edges.

- ![](/images/Sketcher_Split.svg) [Split](/Sketcher_Split "Sketcher Split"): Splits an edge while transferring most constraints.

- ![](/images/Sketcher_Extend.svg) [Extend](/Sketcher_Extend "Sketcher Extend"): Extends or shortens a line or an arc to an arbitrary location, or to a target edge or point.

- ![](/images/Sketcher_External.svg) [External geometry](/Sketcher_External "Sketcher External"): Projects edges and/or vertices belonging to objects outside the sketch onto the sketch plane. 1.0 and below

- ![](/images/Sketcher_Projection.svg)![](/images/Toolbar_flyout_arrow_blue_background.svg) External geometry:

- ![](/images/Sketcher_Projection.svg) [Create external projection geometry](/Sketcher_Projection "Sketcher Projection"): Creates the projection edges of external geometry. [introduced in 1.1](/Release_notes_1.1 "Release notes 1.1")

- ![](/images/Sketcher_Intersection.svg) [Create external intersection geometry](/Sketcher_Intersection "Sketcher Intersection"): Creates the intersection edges of external geometry with the sketch plane. [introduced in 1.1](/Release_notes_1.1 "Release notes 1.1")

- ![](/images/Sketcher_CarbonCopy.svg) [Carbon copy](/Sketcher_CarbonCopy "Sketcher CarbonCopy"): Copies all geometry and constraints from another sketch into the active sketch.

- ![](/images/Sketcher_SelectOrigin.svg) [Select origin](/Sketcher_SelectOrigin "Sketcher SelectOrigin"): Selects the origin of the sketch.

- ![](/images/Sketcher_SelectHorizontalAxis.svg) [Select horizontal axis](/Sketcher_SelectHorizontalAxis "Sketcher SelectHorizontalAxis"): Selects the horizontal axis of the sketch.

- ![](/images/Sketcher_SelectVerticalAxis.svg) [Select vertical axis](/Sketcher_SelectVerticalAxis "Sketcher SelectVerticalAxis"): Selects the vertical axis of the sketch.

- ![](/images/Sketcher_Translate.svg) [Array transform](/Sketcher_Translate "Sketcher Translate"): Moves or optionally creates copies of selected elements. [introduced in 1.0](/Release_notes_1.0 "Release notes 1.0")

- ![](/images/Sketcher_Rotate.svg) [Polar transform](/Sketcher_Rotate "Sketcher Rotate"): Rotates or optionally creates rotated copies of selected elements. [introduced in 1.0](/Release_notes_1.0 "Release notes 1.0")

- ![](/images/Sketcher_Scale.svg) [Scale transform](/Sketcher_Scale "Sketcher Scale"): Scales or optionally creates scaled copies of selected elements. [introduced in 1.0](/Release_notes_1.0 "Release notes 1.0")

- ![](/images/Sketcher_Offset.svg) [Offset geometry](/Sketcher_Offset "Sketcher Offset"): Creates equidistant edges around selected edges. [introduced in 1.0](/Release_notes_1.0 "Release notes 1.0")

- ![](/images/Sketcher_Symmetry.svg) [Symmetry](/Sketcher_Symmetry "Sketcher Symmetry"): Creates mirrored copies of selected elements.

- ![](/images/Sketcher_RemoveAxesAlignment.svg) [Remove axes alignment](/Sketcher_RemoveAxesAlignment "Sketcher RemoveAxesAlignment"): Removes the axes alignment of selected edges by replacing [Horizontal](/Sketcher_ConstrainHorizontal "Sketcher ConstrainHorizontal") and [Vertical](/Sketcher_ConstrainVertical "Sketcher ConstrainVertical") constraints with [Parallel](/Sketcher_ConstrainParallel "Sketcher ConstrainParallel") and [Perpendicular](/Sketcher_ConstrainPerpendicular "Sketcher ConstrainPerpendicular") constraints.

- ![](/images/Sketcher_DeleteAllGeometry.svg) [Delete all geometry](/Sketcher_DeleteAllGeometry "Sketcher DeleteAllGeometry"): Deletes all geometry and all constraints from the sketch.

- ![](/images/Sketcher_DeleteAllConstraints.svg) [Delete all constraints](/Sketcher_DeleteAllConstraints "Sketcher DeleteAllConstraints"): Deletes all constraints from the sketch.

- ![](/images/Edit-copy.svg) Copy in Sketcher: See [Copy, cut and paste](#Copy,_cut_and_paste).

- ![](/images/Edit-cut.svg) Cut in Sketcher: See [Copy, cut and paste](#Copy,_cut_and_paste).

- ![](/images/Edit-paste.svg) Paste in Sketcher: See [Copy, cut and paste](#Copy,_cut_and_paste).

### Sketcher B-spline tools

- ![](/images/Sketcher_BSplineConvertToNURBS.svg) [Convert geometry to B-spline](/Sketcher_BSplineConvertToNURBS "Sketcher BSplineConvertToNURBS"): Converts edges to B-splines.

- ![](/images/Sketcher_BSplineIncreaseDegree.svg) [Increase B-spline degree](/Sketcher_BSplineIncreaseDegree "Sketcher BSplineIncreaseDegree"): Increases the degree (order) of B-splines.

- ![](/images/Sketcher_BSplineDecreaseDegree.svg) [Decrease B-spline degree](/Sketcher_BSplineDecreaseDegree "Sketcher BSplineDecreaseDegree"): Decreases the degree (order) of B-splines.

- ![](/images/Sketcher_BSplineIncreaseKnotMultiplicity.svg) [Increase knot multiplicity](/Sketcher_BSplineIncreaseKnotMultiplicity "Sketcher BSplineIncreaseKnotMultiplicity"): Increases the multiplicity of a B-spline knot.

- ![](/images/Sketcher_BSplineDecreaseKnotMultiplicity.svg) [Decrease knot multiplicity](/Sketcher_BSplineDecreaseKnotMultiplicity "Sketcher BSplineDecreaseKnotMultiplicity"): Decreases the multiplicity of a B-spline knot.

- ![](/images/Sketcher_BSplineInsertKnot.svg) [Insert knot](/Sketcher_BSplineInsertKnot "Sketcher BSplineInsertKnot"): Inserts a knot into a B-spline or increases the multiplicity of an existing knot.

- ![](/images/Sketcher_JoinCurves.svg) [Join curves](/Sketcher_JoinCurves "Sketcher JoinCurves"): Creates a B-spline by joining two existing B-splines or other edges. [introduced in 0.21](/Release_notes_0.21 "Release notes 0.21")

### Sketcher visual

- ![](/images/Sketcher_SelectElementsWithDoFs.svg) [Select unconstrained DoF](/Sketcher_SelectElementsWithDoFs "Sketcher SelectElementsWithDoFs"): Selects the not fully constrained elements in the sketch.

- ![](/images/Sketcher_SelectConstraints.svg) [Select associated constraints](/Sketcher_SelectConstraints "Sketcher SelectConstraints"): Selects the constraints associated with sketch elements.

- ![](/images/Sketcher_SelectElementsAssociatedWithConstraints.svg) [Select associated geometry](/Sketcher_SelectElementsAssociatedWithConstraints "Sketcher SelectElementsAssociatedWithConstraints"): Selects the sketch elements associated with constraints.

- ![](/images/Sketcher_SelectRedundantConstraints.svg) [Select redundant constraints](/Sketcher_SelectRedundantConstraints "Sketcher SelectRedundantConstraints"): Selects the redundant constraints in the sketch.

- ![](/images/Sketcher_SelectConflictingConstraints.svg) [Select conflicting constraints](/Sketcher_SelectConflictingConstraints "Sketcher SelectConflictingConstraints"): Selects the conflicting constraints in the sketch.

- ![](/images/Sketcher_ArcOverlay.svg) [Show/hide circular helper for arcs](/Sketcher_ArcOverlay "Sketcher ArcOverlay"): Shows or hides the circular helpers (underlying virtual circles) for arcs in all sketches. [introduced in 1.0](/Release_notes_1.0 "Release notes 1.0")

- ![](/images/Sketcher_BSplinePolygon.svg)![](/images/Toolbar_flyout_arrow_blue_background.svg) Show/hide B-spline information layer:

- ![](/images/Sketcher_BSplineDegree.svg) [Show/hide B-spline degree](/Sketcher_BSplineDegree "Sketcher BSplineDegree"): Shows or hides the B-spline degree in all sketches.

- ![](/images/Sketcher_BSplinePolygon.svg) [Show/hide B-spline control polygon](/Sketcher_BSplinePolygon "Sketcher BSplinePolygon"): Shows or hides the B-spline control polygon in all sketches.

- ![](/images/Sketcher_BSplineComb.svg) [Show/hide B-spline curvature comb](/Sketcher_BSplineComb "Sketcher BSplineComb"): Shows or hides the B-spline curvature comb in all sketches.

- ![](/images/Sketcher_BSplineKnotMultiplicity.svg) [Show/hide B-spline knot multiplicity](/Sketcher_BSplineKnotMultiplicity "Sketcher BSplineKnotMultiplicity"): Shows or hides the B-spline knot multiplicity in all sketches.

- ![](/images/Sketcher_BSplinePoleWeight.svg) [Show/hide B-spline control point weight](/Sketcher_BSplinePoleWeight "Sketcher BSplinePoleWeight"): Shows or hides the B-spline control point weight in all sketches.

- ![](/images/Sketcher_RestoreInternalAlignmentGeometry.svg) [Show/hide internal geometry](/Sketcher_RestoreInternalAlignmentGeometry "Sketcher RestoreInternalAlignmentGeometry"): Deletes the internal geometry of elements, or recreates missing internal geometry.

- ![](/images/Sketcher_SwitchVirtualSpace.svg) [Switch virtual space](/Sketcher_SwitchVirtualSpace "Sketcher SwitchVirtualSpace"): (un)hides constraints or switches the visible virtual space.

### Obsolete tools

- ![](/images/Sketcher_Clone.svg) [Clone](/Sketcher_Clone "Sketcher Clone"): Clones a Sketcher element. Not available in 1.0 and above.

- ![](/images/Sketcher_CloseShape.svg) [Close shape](/Sketcher_CloseShape "Sketcher CloseShape"): Creates a closed shape by applying coincident constraints to endpoints. Not available in 0.21 and above.

- ![](/images/Sketcher_CreatePointFillet.svg) [Corner-preserving fillet](/Sketcher_CreatePointFillet "Sketcher CreatePointFillet"): Creates a fillet between two non-parallel lines while preserving their corner point. Not available in 1.0 and above.

- ![](/images/Sketcher_ConnectLines.svg) [Connect edges](/Sketcher_ConnectLines "Sketcher ConnectLines"): Connect Sketcher elements by applying coincident constraints to endpoints. Not available in 0.21 and above.

- ![](/images/Sketcher_Copy.svg) [Copy](/Sketcher_Copy "Sketcher Copy"): Copies a Sketcher element. Not available in 1.0 and above.

- ![](/images/Sketcher_Move.svg) [Move](/Sketcher_Move "Sketcher Move"): Moves the selected geometry taking as reference the last selected point. Not available in 1.0 and above.

- ![](/images/Sketcher_RectangularArray.svg) [Rectangular array](/Sketcher_RectangularArray "Sketcher RectangularArray"): Creates an array of selected Sketcher elements. Not available in 1.0 and above.

## Preferences

- ![](/images/Workbench_Sketcher.svg) [Preferences](/Sketcher_Preferences "Sketcher Preferences"): Preferences for the Sketcher Workbench.

## Best practices

Every CAD user develops their own way of working over time, but there are some useful general principles to follow.

- A series of simple sketches is easier to manage than a single complex one. For example, a first sketch can be created for the base 3D feature (either a pad or a revolve), while a second one can contain holes or cutouts (pockets). Some details can be left out, to be realized later on as 3D features. You can choose to avoid fillets in your sketch if there are too many, and add them as a 3D feature.
- Always create a closed profile, or your sketch won't produce a solid, but rather a set of open faces. If you don't want some of the objects to be included in the solid creation, turn them to construction elements with the Construction Mode tool.
- Use the Auto constraints feature to limit the number of constraints you'll have to add manually.
- As a general rule, apply geometric constraints first, then dimensional constraints, and lock your sketch last. But remember: rules are made to be broken. If you're having trouble manipulating your sketch, it may be useful to constrain a few objects first before completing your profile.
- If possible, center your sketch at the origin (0,0) with the Lock constraint. If your sketch is not symmetric, locate one of its points at the origin, or choose nice round numbers for the lock distances.
- If you have the possibility to choose between the Length constraint and the Horizontal or Vertical distance constraints, prefer the latter. Horizontal and Vertical distance constraints are computationally cheaper.
- In general, the best constraints to use are: Horizontal and Vertical constraints; Horizontal and Vertical length constraints; point-to-point Tangency. If possible, limit the use of these: the general Length constraint; edge-to-edge Tangency; Point on object constraint; Symmetric constraint.
- If in doubt about the validity of a sketch once it is complete (features turn green), close the Sketcher dialog and use ![](/images/Sketcher_ValidateSketch.svg) [Validate sketch](/Sketcher_ValidateSketch "Sketcher ValidateSketch").

## Tutorials

- [Sketcher Lecture](https://forum.freecadweb.org/viewtopic.php?f=36&t=30104) by chrisb. This is a more than 80 page PDF document that serves as a detailed manual for the Sketcher. It explains the basics of Sketcher usage, and goes into a lot of detail about the creation of geometrical shapes, and each of the constraints.
- [Basic Sketcher Tutorial](/Basic_Sketcher_Tutorial "Basic Sketcher Tutorial") for beginners
- [Sketcher Micro Tutorial - Constraint Practices](/Sketcher_Micro_Tutorial_-_Constraint_Practices "Sketcher Micro Tutorial - Constraint Practices")
- [Sketcher requirement for a sketch](/Sketcher_requirement_for_a_sketch "Sketcher requirement for a sketch") Minimum requirement for a sketch and Complete determination of a sketch

## Scripting

The [Sketcher scripting](/Sketcher_scripting "Sketcher scripting") page contains examples on how to create constraints from Python scripts.

## Examples

For some ideas of what can be achieved with Sketcher tools, have a look at: [Sketcher examples](/Sketcher_Examples "Sketcher Examples").

![](/images/Sketcher_ExampleHinge-01.gif)
![](/images/Sketcher_ExampleHinge-15.png)

Retrieved from "<http://wiki.freecad.org/index.php?title=Sketcher_Workbench/en&oldid=1537979>"
