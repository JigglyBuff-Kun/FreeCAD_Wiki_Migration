---
title: Restrição Tangente
---
|  |
| --- |
| Sketcher ConstrainTangent |
| Menu location |
| Sketch → Sketcher constraints → Constrain tangent or collinear |
| Workbenches |
| [Sketcher](/Sketcher_Workbench "Sketcher Workbench") |
| Default shortcut |
| T |
| Introduced in version |
| - |
| See also |
| *None* |
|  |

## Description

The ![](/images/Sketcher_ConstrainTangent.svg) [Sketcher ConstrainTangent](/Sketcher_ConstrainTangent "Sketcher ConstrainTangent") tool constrains two edges, or an edge and an axis, to be tangent. Lines are treated as infinite, and open curves are virtually extended as well. The constraint can also connect two edges, forcing them to be tangent at the joint. If two lines are selected, or a line and the endpoint of another line, the lines are made collinear.

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

### Modo de execução única

1. Do one of the following:
   * Select two edges (see above).
   * Select two endpoints belonging to different edges.
   * Select an edge and the endpoint of another edge (in any order).
   * Select a point and two edges (idem).
2. Invoke the tool as explained above, or with the following additional option:
   * [introduced in 1.0](/Release_notes_1.0 "Release notes 1.0"): Right-click in the [3D view](/3D_view "3D view") and select the **![](/images/Sketcher_ConstrainTangent.svg) Constrain tangent or collinear** option from the context menu.
3. A Tangent constraint is added. If a point and two edges have been selected, up to two [Point on object constraints](/Sketcher_ConstrainPointOnObject "Sketcher ConstrainPointOnObject") can also be added. See [Examples](#Between_two_edges_at_point).

## Exemplos

### Entre duas arestas

![](/images/Sketcher_ConsraintTangent_mode1.png)

The two edges are made tangent. If one of the edges is a [conic](/Sketcher_Workbench#Sketcher_CompCreateConic "Sketcher Workbench"), a [Point object](/Sketcher_CreatePoint "Sketcher CreatePoint") that has a [Point on object constraint](/Sketcher_ConstrainPointOnObject "Sketcher ConstrainPointOnObject") with both (extended) edges is added.

It is not recommended to reconstruct the point of tangency by manually creating a point and constraining it to lie on both curves. It will work, but the convergence will be seriously slower, jumpier, and will require about twice as many iterations to converge than normal. If the point of tangency is needed, select two edges and an existing point instead.

### Entre dois pontos finais

![](/images/Sketcher_ConsraintTangent_mode2.png)

The endpoints are made coincident, and the angle between the edges at that point is set to 180° (smooth joint) or 0° (sharp joint), depending on the placement of the edges before the constraint is applied.

### Entre a borda e o ponto final

![](/images/Sketcher_ConsraintTangent_mode3.png)

The endpoint of one edge is constrained to lie on the other edge, and the edges are made tangent at that point.

### Entre duas arestas no ponto

![](/images/Sketcher_ConsraintTangent_mode4.png)

The two edges are made tangent at a given point. The point can be any point, e.g. the center of a circle, the endpoint of an edge, or the origin, it can belong to one of the edges, and it can also be a [Point object](/Sketcher_CreatePoint "Sketcher CreatePoint"). If required [Point on object constraint(s)](/Sketcher_ConstrainPointOnObject "Sketcher ConstrainPointOnObject") are added to ensure the point lies on both (extended) edges. These additional constraints are called [helper constraints](/Sketcher_helper_constraint "Sketcher helper constraint").

Compared to direct tangency, this constraint is slower, because there are more degrees of freedom involved, but if the point of tangency is needed, it is recommended because it offers better convergence.

### Entre duas linhas

![](/images/Sketcher_ConstraintTangent_mode5.png)

The two lines are made collinear.

## Scripting

Tangent Constraint can be created from [macros](/Macros "Macros") and from the [Python](/Python "Python") console by using the following:

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

where:

:   * `Sketch` is a sketch object
    * `icurve1`, `icurve2` are two integers identifying the curves to be made tangent. The integers are indices in the sketch (the values, returned by `Sketch.addGeometry`).
    * `pointpos1`, `pointpos2` should be `1` for start point and `2` for end point.
    * `geoidpoint` and `pointpos` in `TangentViaPoint` are the indices specifying the point of tangency.

The [Sketcher scripting](/Sketcher_scripting "Sketcher scripting") page explains the values which can be used for `incurve1`, `incurve2`, `pointpos1`, `pointpos2`, `geoidpoint` and `pointpos` and contains further examples on how to create constraints from Python scripts.

Retrieved from "<http://wiki.freecad.org/index.php?title=Sketcher_ConstrainTangent/pt-br&oldid=1452457>"