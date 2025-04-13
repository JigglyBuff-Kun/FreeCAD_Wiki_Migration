---
title: Sketcher Constrângere de tangență
---
|  |
| --- |
| Sketcher ConstrainTangent |
| Menu location |
| Sketch → Sketcher constraints → Constrain tangent |
| Workbenches |
| [Sketcher](/Sketcher_Workbench "Sketcher Workbench") |
| Default shortcut |
| T |
| Introduced in version |
| - |
| See also |
| [Constraint point on object](/Sketcher_ConstrainPointOnObject "Sketcher ConstrainPointOnObject") |
|  |

## Description

## Descriere

Tangent Constraint makes two curves to touch each other (be tangent). Lines are treated infinite, and arcs are treated as full circles/ellipses. The constraint is also capable of connecting two curves, forcing them tangent at the joint, thus making the joint smooth.

## Usage

See also: [Drawing aids](/Sketcher_Workbench#Drawing_aids "Sketcher Workbench").

### [Continue mode](/Sketcher_Workbench#Continue_modes "Sketcher Workbench")

1. Make sure there is no selection.
2. There are several ways to invoke the tool:
   * Press the ![](/images/Sketcher_ConstrainTangent.svg) [Constrain tangent or collinear](/Sketcher_ConstrainTangent "Sketcher ConstrainTangent") button.
   * Select the **Sketch → Sketcher constraints → ![](/images/Sketcher_ConstrainTangent.svg) Constrain tangent or collinear** option from the menu.
   * [introduced in 1.0](/Release_notes_1.0 "Release notes 1.0"): Right-click in the [3D view](/3D_view "3D view") and select the **Constrain → ![](/images/Sketcher_ConstrainTangent.svg) Constrain tangent or collinear** option from the context menu.
   * Use the keyboard shortcut: T.
3. The cursor changes to a cross with the tool icon.
4. Do one of the following:
   * Select two edges. The edges can be any edge except a B-spline.
   * Select a point and two edges (in that order).
   * Select an edge, a point and another edge (idem).
5. A Tangent constraint is added. If a point and two edges have been selected, up to two [Point on object constraints](/Sketcher_ConstrainPointOnObject "Sketcher ConstrainPointOnObject") can also be added. See [Examples](#Between_two_edges_at_point).
6. Optionally keep creating constraints.
7. To finish, right-click or press Esc, or start another geometry or constraint creation tool.

### Run-once mode

1. Do one of the following:
   * Select two edges (see above).
   * Select two endpoints belonging to different edges.
   * Select an edge and the endpoint of another edge (in any order).
   * Select a point and two edges (idem).
2. Invoke the tool as explained above, or with the following additional option:
   * [introduced in 1.0](/Release_notes_1.0 "Release notes 1.0"): Right-click in the [3D view](/3D_view "3D view") and select the **![](/images/Sketcher_ConstrainTangent.svg) Constrain tangent or collinear** option from the context menu.
3. A Tangent constraint is added. If a point and two edges have been selected, up to two [Point on object constraints](/Sketcher_ConstrainPointOnObject "Sketcher ConstrainPointOnObject") can also be added. See [Examples](#Between_two_edges_at_point).

## Examples

### Între două curbe (direct tangency)

![](/images/Sketcher_ConsraintTangent_mode1.png)

![](/images/Sketcher_ConsraintTangent_mode1.png)

The two edges are made tangent. If one of the edges is a [conic](/Sketcher_Workbench#Sketcher_CompCreateConic "Sketcher Workbench"), a [Point object](/Sketcher_CreatePoint "Sketcher CreatePoint") that has a [Point on object constraint](/Sketcher_ConstrainPointOnObject "Sketcher ConstrainPointOnObject") with both (extended) edges is added.

Nu se recomandă reconstruirea punctului de tangență prin crearea unui punct și constrângerea lui de a se afla pe ambele curbe. It will work, but the convergence will be seriously slower, jumpier, and will require about twice as many iterations to converge than normal. Use other modes of this constraint if the point of tangency is needed.

### Între două puncte finale (point-to-point tangency)

![](/images/Sketcher_ConsraintTangent_mode2.png)

![](/images/Sketcher_ConsraintTangent_mode2.png)

The endpoints are made coincident, and the angle between the edges at that point is set to 180° (smooth joint) or 0° (sharp joint), depending on the placement of the edges before the constraint is applied.

### Între curbă și punct final (point-to-curve tangency)

![](/images/Sketcher_ConsraintTangent_mode3.png)

![](/images/Sketcher_ConsraintTangent_mode3.png)

În acest mod, un punct final al unei curbe este constrâns să stea pe cealaltă curbă, and the curves are forced tangent at the point. This mode is applied when a curve and an endpoint of another curve were selected.

### Între două curbe la punct (tangent-via-point) (v0.15)

![](/images/Sketcher_ConsraintTangent_mode4.png)

![](/images/Sketcher_ConsraintTangent_mode4.png)

În acest mod, două curbe sunt tangente și punctul de tangență este urmărit. Acest mod se aplică atunci când au fost selectate două curbe și un punct.

În comparație cu tangența directă, această constrângere este mai lentă, deoarece există mai multe grade de libertate implicate, dar dacă este necesar punctul de tangență, acesta este modul recomandat deoarece oferă o convergență mai bună comparativ cu tangența directă + punct pe două curbe.

### Between two lines

![](/images/Sketcher_ConstraintTangent_mode5.png)

The two lines are made collinear.

## Script

Tangent Constraint poate fi creată din [macros](/Macros "Macros") și din consola python folosind următoarele:

```
# direct tangency
Sketch.addConstraint(Sketcher.Constraint('Tangent',icurve1,icurve2))

# point-to-point tangency
Sketch.addConstraint(Sketcher.Constraint('Tangent',icurve1,pointpos1,icurve2,pointpos2))

# point-to-curve tangency
Sketch.addConstraint(Sketcher.Constraint('Tangent',icurve1,pointpos1,icurve2))

# tangent-via-point (plain constraint, helpers are not added automatically)
Sketch.addConstraint(Sketcher.Constraint('TangentViaPoint',icurve1,icurve2,geoidpoint,pointpos))

```

unde:

:   * Sketch is a sketch object
    * icurve1, icurve2 are two integers identifying the curves to be made tangent. The integers are indexes in the sketch (the value, returned by Sketch.addGeometry).
    * pointpos1, pointpos2 should be 1 for start point and 2 for end point.
    * geoidpoint and pointpos in TangentViaPoint are the indexes specifying the point of tangency.

The [Sketcher scripting](/Sketcher_scripting "Sketcher scripting") page explains the values which can be used for `incurve1`, `incurve2`, `pointpos1`, `pointpos2`, `geoidpoint` and `pointpos` and contains further examples on how to create constraints from Python scripts.

Retrieved from "<http://wiki.freecad.org/index.php?title=Sketcher_ConstrainTangent/ro&oldid=1405041>"