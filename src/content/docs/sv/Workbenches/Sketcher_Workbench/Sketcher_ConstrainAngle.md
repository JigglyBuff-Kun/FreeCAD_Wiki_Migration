---
title: Constraint InternalAngle
---
|  |
| --- |
| Constraint InternalAngle |
| Menyplacering |
| Sketch → Sketcher constraints → Constrain angle |
| Arbetsbänkar |
| [Sketcher](/Sketcher_Workbench/sv "Sketcher Workbench/sv"), [PartDesign](/PartDesign_Workbench/sv "PartDesign Workbench/sv") |
| Standard genväg |
| A |
| Introducerad i version |
| - |
| Se även |
| [Constraint Length](/Sketcher_ConstrainDistance/sv "Sketcher ConstrainDistance/sv"), [Constraint Perpendicular](/Sketcher_ConstrainPerpendicular/sv "Sketcher ConstrainPerpendicular/sv") |
|  |

## Description

The ![](/images/Sketcher_ConstrainAngle.svg) [Sketcher ConstrainAngle](/Sketcher_ConstrainAngle "Sketcher ConstrainAngle") tool fixes the angle between two edges (lines are then treated as infinite, and open curves are virtually extended as well), the angle of a line with the horizontal axis of the sketch, or the aperture angle of a circular arc.

## Usage

See also: [Drawing aids](/Sketcher_Workbench#Drawing_aids "Sketcher Workbench").

### [Continue mode](/Sketcher_Workbench#Continue_modes "Sketcher Workbench")

1. Make sure there is no selection.
2. There are several ways to invoke the tool:
   * [introduced in 1.0](/Release_notes_1.0 "Release notes 1.0"): If the **Dimensioning constraints** [preference](/Sketcher_Preferences#General "Sketcher Preferences") is set to `Single tool` (default): press the down arrow to the right of the ![](/images/Sketcher_Dimension.svg)![](/images/Toolbar_flyout_arrow.svg) button and select the **![](/images/Sketcher_ConstrainAngle.svg) Constrain angle** option from the dropdown.
   * If this preference has a different value (and in 0.21 and below): press the ![](/images/Sketcher_ConstrainAngle.svg) [Constrain angle](/Sketcher_ConstrainAngle "Sketcher ConstrainAngle") button.
   * Select the **Sketch → Sketcher constraints → ![](/images/Sketcher_ConstrainAngle.svg) Constrain angle** option from the menu.
   * [introduced in 1.0](/Release_notes_1.0 "Release notes 1.0"): Right-click in the [3D view](/3D_view "3D view") and select the **Dimension → ![](/images/Sketcher_ConstrainAngle.svg) Constrain angle** option from the context menu.
   * Use the keyboard shortcut: K then A.
3. The cursor changes to a cross with the tool icon.
4. Do one of the following:
   * Select two lines.
   * Select a point and two edges (in that order).
   * Select an edge, a point and an edge (idem).
5. If a [driving dimensional constraint](/Sketcher_ToggleDrivingConstraint "Sketcher ToggleDrivingConstraint") is created, depending on the [preferences](/Sketcher_Preferences#Display "Sketcher Preferences"), a dialog opens to [edit its value](/Sketcher_Workbench#Edit_constraints "Sketcher Workbench"). A negative value will reverse the angle direction.
6. An Angle constraint is added. If a point and two edges have been selected, up to two [Point to object constraints](/Sketcher_ConstrainPointOnObject "Sketcher ConstrainPointOnObject") can also be added. See [Examples](#Between_two_edges_at_point).
7. Optionally keep creating constraints.
8. To finish, right-click or press Esc, or start another geometry or constraint creation tool.

### Run-once mode

1. Do one of the following:
   * Select a single line.
   * Select a single circular arc.
   * Select two lines.
   * Select a point and two edges (in any order).
2. Invoke the tool as explained above.
3. Optionally [edit the constraint value](/Sketcher_Workbench#Edit_constraints "Sketcher Workbench").
4. An Angle constraint is added. If a point and two edges have been selected, up to two [Point on object constraints](/Sketcher_ConstrainPointOnObject "Sketcher ConstrainPointOnObject") can also be added. See [Examples](#Between_two_edges_at_point).

## Examples

### Single line

![](/images/Sketcher_ConsraintAngle_mode1.png)

The angle of the line with the positive X axis of the sketch is fixed.

### Single circular arc

![](/images/Sketcher_ConsraintAngle_mode2.png)

The aperture angle of the arc is fixed.

### Between two lines

![](/images/Sketcher_ConsraintAngle_mode3.png)

The angle between the two lines is fixed. It is not required that the lines intersect.

### Between two edges at point

![](/images/Sketcher_ConsraintAngle_mode4.png)

The angle between the two edges at a given point is fixed. The point can be any point, e.g. the center of a circle, the endpoint of an edge, or the origin, it can belong to either or both edges, and it can also be a [Point object](/Sketcher_CreatePoint "Sketcher CreatePoint"). If required [Point on object constraint(s)](/Sketcher_ConstrainPointOnObject "Sketcher ConstrainPointOnObject") are added to ensure the point lies on both (extended) edges. These additional constraints are called [helper constraints](/Sketcher_helper_constraint "Sketcher helper constraint").

## Scripting

Angle Constraint can be created from [macros](/Macros "Macros") and from the [Python](/Python "Python") console by using the following:

```
# line slope angle
Sketch.addConstraint(Sketcher.Constraint('Angle',iline,angle))

# angular span of arc
Sketch.addConstraint(Sketcher.Constraint('Angle',iarc,angle))

# angle between lines
Sketch.addConstraint(Sketcher.Constraint('Angle',iline1,pointpos1,iline2,pointpos2,angle))

# angle-via-point (no helper constraints are added automatically when from python)
Sketch.addConstraint(Sketcher.Constraint('AngleViaPoint',icurve1,icurve2,geoidpoint,pointpos,angle))

```

where:

:   * `Sketch` is a sketch object
    * `iline, iline1, iline2` are integers specifying the lines by their ordinal numbers in `Sketch`.
    * `pointpos1, pointpos2` should be 1 for start point and 2 for end point. The choice of endpoints allows to set internal angle (or external), and it affects how the constraint is drawn on the screen.
    * `geoidpoint` and `pointpos` in `AngleViaPoint` are the indexes specifying the point of intersection.
    * `angle` is the angle value in radians. The angle is counted between tangent vectors in counterclockwise direction. Tangent vectors are pointing from start to end for the lines (or vice versa if ending point is supplied in angle between lines mode), and along counterclockwise direction for circles, arcs and ellipses. Quantity is also accepted as an angle (e.g. `App.Units.Quantity('45 deg')`)

The [Sketcher scripting](/Sketcher_scripting "Sketcher scripting") page explains the values which can be used for `iline`, `iline1`, `iline2`, `pointpos1`, `pointpos2`, `geoidpoint` and `pointpos` and contains further examples on how to create constraints from Python scripts.

Retrieved from "<http://wiki.freecad.org/index.php?title=Sketcher_ConstrainAngle/sv&oldid=1405849>"