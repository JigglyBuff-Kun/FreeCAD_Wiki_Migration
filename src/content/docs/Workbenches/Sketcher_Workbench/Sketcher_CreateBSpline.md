---
title: Sketcher CreateBSpline
---

|                                                                                                    |
| -------------------------------------------------------------------------------------------------- |
| Sketcher CreateBSpline                                                                             |
| Menu location                                                                                      |
| Sketch → Sketcher geometries → Create B-spline                                                     |
| Workbenches                                                                                        |
| [Sketcher](/Sketcher_Workbench "Sketcher Workbench")                                               |
| Default shortcut                                                                                   |
| G B B                                                                                              |
| Introduced in version                                                                              |
| 0.17                                                                                               |
| See also                                                                                           |
| [Sketcher CreatePeriodicBSpline](/Sketcher_CreatePeriodicBSpline "Sketcher CreatePeriodicBSpline") |
|                                                                                                    |

## Description

The ![](/images/Sketcher_CreateBSpline.svg) [Sketcher CreateBSpline](/Sketcher_CreateBSpline "Sketcher CreateBSpline") tool creates a [B-spline](/B-Splines "B-Splines") curve by control points. [introduced in 1.0](/Release_notes_1.0 "Release notes 1.0"): Or optionally by knot points.

![](/images/Sketcher_CreateBSpline_Example.png)

B-spline curve (white) defined by 5 control points.  
The control polygon (green) connects the control points (marked with dark yellow weight circles).  
The number 3 (green, without brackets) in the center refers to the [degree](/Sketcher_BSplineIncreaseDegree#Description "Sketcher BSplineIncreaseDegree") of the B-spline.  
The numbers (1) and (4) (green, in round brackets) refer to the [multiplicity](/Sketcher_BSplineDecreaseKnotMultiplicity#Description "Sketcher BSplineDecreaseKnotMultiplicity") of the knot points.  
The numbers [1.00] (green, in square brackets) refer to the weights of the control points.

## Usage

See also: [Drawing aids](/Sketcher_Workbench#Drawing_aids "Sketcher Workbench").

1. There are several ways to invoke the tool:
   - Press the ![](/images/Sketcher_CreateBSpline.svg) [B-spline by control points](/Sketcher_CreateBSpline "Sketcher CreateBSpline") button.
   - Select the **Sketcher → Sketcher geometries → ![](/images/Sketcher_CreateBSpline.svg) Create B-spline** option from the menu.
   - Right-click in the [3D view](/3D_view "3D view") and select the **![](/images/Sketcher_CreateBSpline.svg) Create B-spline** option from the context menu. [introduced in 1.0](/Release_notes_1.0 "Release notes 1.0")
   - Use the keyboard shortcut: G then B, then B.
2. The cursor changes to a cross with the tool icon.
3. The **BSpline parameters** section ([introduced in 1.0](/Release_notes_1.0 "Release notes 1.0")) is added at the top of the [Sketcher Dialog](/Sketcher_Dialog "Sketcher Dialog").
4. Optionally press the M key or select from the dropdown list in the parameters section to change the tool mode:
   - ![](/images/Sketcher_CreateBSpline.svg) **By control points**:
     1. Optionally change the **Degree** (also possible after points have been picked):
        - Enter a number greater than zero.
        - Press the U key to increase the degree.
        - Press the J key to decrease the degree.
   - ![](/images/Sketcher_CreateBSplineByInterpolation.svg) **By knots**: [introduced in 1.0](/Release_notes_1.0 "Release notes 1.0")
     1. B-splines by knots are always created with degree 3. But their degree can be changed later. See [Notes](#Notes).
5. Optionally press the R key or check the **Periodic** checkbox to create a closed B-spline (also possible after points have been picked). [introduced in 1.0](/Release_notes_1.0 "Release notes 1.0")
6. Pick several points.
7. Optionally press the F key before finishing to delete the last point. [introduced in 1.0](/Release_notes_1.0 "Release notes 1.0")
8. Right-click or press Esc to finish the input.
9. The B-spline is created, including a set of internal geometry (weight circles and knot points).
10. If the tool runs in [continue mode](/Sketcher_Workbench#Continue_modes "Sketcher Workbench"):
    1. Optionally keep creating B-splines.
    2. To finish, right-click or press Esc, or start another geometry or constraint creation tool.

## Notes

- Elements of the internal geometry can be deleted. They can be recreated at any time with [Sketcher RestoreInternalAlignmentGeometry](/Sketcher_RestoreInternalAlignmentGeometry "Sketcher RestoreInternalAlignmentGeometry").
- After a B-spline is created, it is possible to define the weight of the control points by changing the radii of the weight circles. The equality constraints on the circles need to be deleted first. The radius constraint is arbitrary, the weight of the control points will be defined by the relative radii of the circles. It works similar to gravity: the bigger a circle is in relation to the others, the more the curve will be attracted to that control point.
- The degree of a created B-spline can be [increased](/Sketcher_BSplineIncreaseDegree "Sketcher BSplineIncreaseDegree") or [decreased](/Sketcher_BSplineDecreaseDegree "Sketcher BSplineDecreaseDegree"), and the multiplicity of its knots can be [increased](/Sketcher_BSplineIncreaseKnotMultiplicity "Sketcher BSplineIncreaseKnotMultiplicity") or [decreased](/Sketcher_BSplineIncreaseKnotMultiplicity "Sketcher BSplineIncreaseKnotMultiplicity") as well.
- The visibility of the [degree](/Sketcher_BSplineDegree "Sketcher BSplineDegree"), the [control polygon](/Sketcher_BSplinePolygon "Sketcher BSplinePolygon"), the [curvature comb](/Sketcher_BSplineComb "Sketcher BSplineComb"), the [knot multiplicity](/Sketcher_BSplineKnotMultiplicity "Sketcher BSplineKnotMultiplicity") and the [control point weight](/Sketcher_BSplinePoleWeight "Sketcher BSplinePoleWeight") can be toggled on/off from the [Sketcher visual](/Sketcher_Workbench#Sketcher_visual "Sketcher Workbench") toolbar.

## Limitations

- Several constraints are not supported at this time.
- The defined knot multiplicity may not always be respected:
  - For a periodic spline, the first knot (coincident with last) always has a multiplicity of 2.
  - For a non-periodic spline, the first and last knots always have a multiplicity of 4.
  - If the points just before and just after have multiplicities >=3, the piece between these two is fully continuous, and this (middle) point will only be constrained with point-on-object. If a knot is needed, consider using the [insert knot tool](/Sketcher_BSplineInsertKnot "Sketcher BSplineInsertKnot").

Retrieved from "<http://wiki.freecad.org/index.php?title=Sketcher_CreateBSpline/en&oldid=1450109>"
