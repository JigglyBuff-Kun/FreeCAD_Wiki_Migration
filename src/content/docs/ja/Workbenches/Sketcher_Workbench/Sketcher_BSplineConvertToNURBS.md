---
title: スケッチャー・ジオメトリをB-スプラインに変換
---
|  |
| --- |
| Sketcher BSplineConvertToNURBS |
| Menu location |
| Sketch → Sketcher B-spline tools → Convert geometry to B-spline |
| Workbenches |
| [Sketcher](/Sketcher_Workbench "Sketcher Workbench") |
| Default shortcut |
| *None* |
| Introduced in version |
| 0.17 |
| See also |
| [Sketcher CreateBSpline](/Sketcher_CreateBSpline "Sketcher CreateBSpline") |
|  |

## Description

The ![](/images/Sketcher_BSplineConvertToNURBS.svg) [Sketcher BSplineConvertToNURBS](/Sketcher_BSplineConvertToNURBS "Sketcher BSplineConvertToNURBS") tool converts edges to [B-splines](/B-Splines "B-Splines").

![](/images/Sketcher_BSplineConvertToNurb.png)

Various objects before conversion.

![](/images/Sketcher_BSplineConvertToNurb1.png)

The same objects after conversion to B-splines.

## Usage

1. Select one or more edges.
2. There are several ways to invoke the tool:
   * Press the ![](/images/Sketcher_BSplineConvertToNURBS.svg) [Convert geometry to B-spline](/Sketcher_BSplineConvertToNURBS "Sketcher BSplineConvertToNURBS") button.
   * Select the **Sketch → Sketcher B-spline tools → ![](/images/Sketcher_BSplineConvertToNURBS.svg) Convert geometry to B-spline** option from the menu.
3. The edges are converted.

## Notes

* Make sure to have the B-spline [degree](/Sketcher_BSplineDegree "Sketcher BSplineDegree"), [polygon](/Sketcher_BSplinePolygon "Sketcher BSplinePolygon"), [comb](/Sketcher_BSplineComb "Sketcher BSplineComb"), [multiplicity](/Sketcher_BSplineKnotMultiplicity "Sketcher BSplineKnotMultiplicity") and/or [weight](/Sketcher_BSplinePoleWeight "Sketcher BSplinePoleWeight") visible, otherwise nothing seems to happen.
* If you have converted straight lines you need to [increase the degree](/Sketcher_BSplineIncreaseDegree "Sketcher BSplineIncreaseDegree") of the created B-splines to make them "bendable".
* The tool does not remove the internal geometry of [conics](/Sketcher_Workbench#Sketcher_CompCreateConic "Sketcher Workbench"). This has to be deleted manually.

Retrieved from "<http://wiki.freecad.org/index.php?title=Sketcher_BSplineConvertToNURBS/ja&oldid=1535577>"