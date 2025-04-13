---
title: Sketcher "Ограничить перпендикулярность"
---
|  |
| --- |
| Ограничение перпендикулярности |
| Расположение в меню |
| Sketch → Ограничения эскиза → Ограничение перпендикулярности |
| Верстаки |
| [Sketcher](/Sketcher_Workbench/ru "Sketcher Workbench/ru") |
| Быстрые клавиши |
| N |
| Представлено в версии |
| - |
| См. также |
| [Ограничить угол](/Sketcher_ConstrainAngle/ru "Sketcher ConstrainAngle/ru") |
|  |

## Описание

The ![](/images/Sketcher_ConstrainPerpendicular.svg) [Sketcher ConstrainPerpendicular](/Sketcher_ConstrainPerpendicular "Sketcher ConstrainPerpendicular") tool constrains two lines to be perpendicular, or two edges, or an edge and an axis, to be perpendicular at their intersection. Lines are treated as infinite, and open curves are virtually extended as well. The constraint can also connect two edges, forcing them to be perpendicular at the joint.

## Применение

See also: [Drawing aids](/Sketcher_Workbench#Drawing_aids "Sketcher Workbench").

### [Continue mode](/Sketcher_Workbench#Continue_modes "Sketcher Workbench")

1. Make sure there is no selection.
2. There are several ways to invoke the tool:
   * Press the ![](/images/Sketcher_ConstrainPerpendicular.svg) [Constrain perpendicular](/Sketcher_ConstrainPerpendicular "Sketcher ConstrainPerpendicular") button.
   * Select the **Sketch → Sketcher constraints → ![](/images/Sketcher_ConstrainPerpendicular.svg) Constrain perpendicular** option from the menu.
   * [introduced in 1.0](/Release_notes_1.0 "Release notes 1.0"): Right-click in the [3D view](/3D_view "3D view") and select the **Constrain → ![](/images/Sketcher_ConstrainPerpendicular.svg) Constrain perpendicular** option from the context menu.
   * Use the keyboard shortcut: N.
3. The cursor changes to a cross with the tool icon.
4. Do one of the following:
   * Select two edges. One of the edges must be a straight line or an axis. The other can be any edge except a B-spline.
   * Select a point and two edges (in that order).
   * Select an edge, a point and another edge (idem).
5. A Perpendicular constraint is added. If a point and two edges have been selected, up to two [Point on object constraints](/Sketcher_ConstrainPointOnObject "Sketcher ConstrainPointOnObject") can also be added. See [Examples](#Between_two_edges_at_point).
6. Optionally keep creating constraints.
7. To finish, right-click or press Esc, or start another geometry or constraint creation tool.

### Run-once mode

1. Do one of the following:
   * Select two edges (see above).
   * Select two endpoints belonging to different edges.
   * Select an edge and the endpoint of another edge (in any order).
   * Select a point and two edges (idem).
2. Invoke the tool as explained above, or with the following additional option:
   * [introduced in 1.0](/Release_notes_1.0 "Release notes 1.0"): Right-click in the [3D view](/3D_view "3D view") and select the **![](/images/Sketcher_ConstrainPerpendicular.svg) Constrain perpendicular** option from the context menu.
3. A Perpendicular constraint is added. If a point and two edges have been selected, up to two [Point on object constraints](/Sketcher_ConstrainPointOnObject "Sketcher ConstrainPointOnObject") can also be added. See [Examples](#Between_two_edges_at_point).

## Examples

### Between two edges

![](/images/Sketcher_ConsraintPerpendicular_mode1.png)

The two edges are made perpendicular at their (virtual) intersection. If one of the edges is a [conic](/Sketcher_Workbench#Sketcher_CompCreateConic "Sketcher Workbench"), a [Point object](/Sketcher_CreatePoint "Sketcher CreatePoint") that has a [Point on object constraint](/Sketcher_ConstrainPointOnObject "Sketcher ConstrainPointOnObject") with both (extended) edges is added.

### Between two endpoints

![](/images/Sketcher_ConsraintPerpendicular_mode2.png)

The endpoints are made coincident, and the edges are made perpendicular at that point.

### Between edge and endpoint

![](/images/Sketcher_ConsraintPerpendicular_mode3.png)

The endpoint of one edge is constrained to lie on the other edge, and the edges are made perpendicular at that point.

### Between two edges at point

![](/images/Sketcher_ConsraintPerpendicular_mode4.png)

The two edges are made perpendicular at a given point. The point can be any point, e.g. the center of a circle, the endpoint of an edge, or the origin, it can belong to one of the edges, and it can also be a [Point object](/Sketcher_CreatePoint "Sketcher CreatePoint"). If required [Point on object constraint(s)](/Sketcher_ConstrainPointOnObject "Sketcher ConstrainPointOnObject") are added to ensure the point lies on both (extended) edges. These additional constraints are called [helper constraints](/Sketcher_helper_constraint "Sketcher helper constraint").

## Программирование

Perpendicular Constraint can be created from [macros](/Macros "Macros") and from the python console by using the following:

```
# direct perpendicularity
Sketch.addConstraint(Sketcher.Constraint('Perpendicular',icurve1,icurve2))

# point-to-point perpendicularity
Sketch.addConstraint(Sketcher.Constraint('Perpendicular',icurve1,pointpos1,icurve2,pointpos2))

# point-to-curve perpendicularity
Sketch.addConstraint(Sketcher.Constraint('Perpendicular',icurve1,pointpos1,icurve2))

# perpendicular-via-point (plain constraint, helpers are not added automatically)
Sketch.addConstraint(Sketcher.Constraint('PerpendicularViaPoint',icurve1,icurve2,geoidpoint,pointpos))

```

where:

:   * `Sketch` is a sketch object
    * `icurve1`, `icurve2` are two integers identifying the curves to be made perpendicular. The integers are indexes in the sketch (the value, returned by `Sketch.addGeometry`).
    * `pointpos1`, `pointpos2` should be `1` for start point and `2` for end point.
    * `geoidpoint` and `pointpos` in PerpendicularViaPoint are the indexes specifying the point of perpendicularity.

The [Sketcher scripting](/Sketcher_scripting "Sketcher scripting") page explains the values which can be used for `icurve1`, `icurve2`, `pointpos1`, `pointpos2` and `geoidpoint`, and contains further examples on how to create constraints from Python scripts.

Retrieved from "<http://wiki.freecad.org/index.php?title=Sketcher_ConstrainPerpendicular/ru&oldid=1405808>"