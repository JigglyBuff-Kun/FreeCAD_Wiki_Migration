---
title: Aumenta o grau da B-spline
---
|  |
| --- |
| Sketcher BSplineIncreaseDegree |
| Menu location |
| Sketch → Sketcher B-spline tools → Increase B-spline degree |
| Workbenches |
| [Sketcher](/Sketcher_Workbench "Sketcher Workbench") |
| Default shortcut |
| *None* |
| Introduced in version |
| 0.17 |
| See also |
| [Sketcher BSplineDecreaseDegree](/Sketcher_BSplineDecreaseDegree "Sketcher BSplineDecreaseDegree") |
|  |

## Description

The ![](/images/Sketcher_BSplineIncreaseDegree.svg) [Sketcher BSplineIncreaseDegree](/Sketcher_BSplineIncreaseDegree "Sketcher BSplineIncreaseDegree") tool increases the degree (order) of [B-splines](/B-Splines "B-Splines").

## Usage

1. Select one or more B-splines.
2. There are several ways to invoke the tool:
   * Press the ![](/images/Sketcher_BSplineIncreaseDegree.svg) [Increase B-spline degree](/Sketcher_BSplineIncreaseDegree "Sketcher BSplineIncreaseDegree") button.
   * Select the **Sketch → Sketcher B-spline tools → ![](/images/Sketcher_BSplineIncreaseDegree.svg) Increase B-spline degree** option from the menu.
   * [introduced in 1.0](/Release_notes_1.0 "Release notes 1.0"): Right-click in the [3D view](/3D_view "3D view") and select the **![](/images/Sketcher_BSplineIncreaseDegree.svg) Increase B-spline degree** option from the context menu.

## Example

B-splines are basically a combination of [Bézier curves](/B-Splines#B.C3.A9zier_curves "B-Splines") (nicely explained in [this](https://www.youtube.com/watch?v=bE1MrrqBAl8) and [this](https://www.youtube.com/watch?v=xXJylM2S72s) video).

In this cubic B-spline (degree 3) there are 3 segments, meaning 3 curves are connected at 2 knots.

The degree is indicated by the number in the center. See ![](/images/Sketcher_BSplineDegree.svg) [Show/hide B-spline degree](/Sketcher_BSplineDegree "Sketcher BSplineDegree").

![](/images/Sketcher_BSplineDegree3.png)

B-spline with degree 3 and 2 knots that each have multiplicity 1.

The outer segments each have 2 control points, the inner segment has none to ensure the knots have multiplicity 1. See [this page](/Sketcher_BSplineDecreaseKnotMultiplicity#Description "Sketcher BSplineDecreaseKnotMultiplicity") for an explanation about multiplicity.

Increasing the degree to 4 will add control points without changing the shape of the B-spline:

![](/images/Sketcher_BSplineDegree4.png)

Same B-spline where the degree was changed from 3 to 4. Note that the knot multiplicity has also increased.

From this result you cannot get back to the initial state of the B-spline by decreasing the degree. Some information is lost when the degree of a B-spline is changed. Decreasing the degree back to 3 leads to this:

![](/images/Sketcher_BSplineDegree3from4.png)

Same B-spline where the degree was changed back from 4 to 3. Note that the knot multiplicity has increased again. Depending on the B-spline, the algorithm to decrease the degree may add a lot of knots to preserve the shape as has happened here.

Each segment now has 2 control points and each knot is coincident with an additional control point. The knots have *C0* continuity so that the B-spline will get "corners" if you move a control point. The information of a higher continuity is therefore lost. See [this page](/Sketcher_BSplineDecreaseKnotMultiplicity#Description "Sketcher BSplineDecreaseKnotMultiplicity") for an explanation about continuity.

Retrieved from "<http://wiki.freecad.org/index.php?title=Sketcher_BSplineIncreaseDegree/pt-br&oldid=1403891>"