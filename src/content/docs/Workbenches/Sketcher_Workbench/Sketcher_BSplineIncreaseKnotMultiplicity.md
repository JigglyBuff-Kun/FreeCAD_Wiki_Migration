---
title: Sketcher BSplineIncreaseKnotMultiplicity
---

|                                                                                                                                  |
| -------------------------------------------------------------------------------------------------------------------------------- |
| Sketcher BSplineIncreaseKnotMultiplicity                                                                                         |
| Menu location                                                                                                                    |
| Sketch → Sketcher B-spline tools → Increase knot multiplicity                                                                    |
| Workbenches                                                                                                                      |
| [Sketcher](/Sketcher_Workbench "Sketcher Workbench")                                                                             |
| Default shortcut                                                                                                                 |
| _None_                                                                                                                           |
| Introduced in version                                                                                                            |
| 0.17                                                                                                                             |
| See also                                                                                                                         |
| [Sketcher BSplineDecreaseKnotMultiplicity](/Sketcher_BSplineDecreaseKnotMultiplicity "Sketcher BSplineDecreaseKnotMultiplicity") |
|                                                                                                                                  |

## Description

The ![](/images/Sketcher_BSplineIncreaseKnotMultiplicity.svg) [Sketcher BSplineIncreaseKnotMultiplicity](/Sketcher_BSplineIncreaseKnotMultiplicity "Sketcher BSplineIncreaseKnotMultiplicity") tool increases the multiplicity of a [B-spline](/B-Splines "B-Splines") knot.

## Usage

1. Select a B-spline knot.
2. There are several ways to invoke the tool:
   - Press the ![](/images/Sketcher_BSplineIncreaseKnotMultiplicity.svg) [Increase knot multiplicity](/Sketcher_BSplineIncreaseKnotMultiplicity "Sketcher BSplineIncreaseKnotMultiplicity") button.
   - Select the **Sketch → Sketcher B-spline tools → ![](/images/Sketcher_BSplineIncreaseKnotMultiplicity.svg) Increase knot multiplicity** option from the menu.

## Example

B-splines are basically a combination of [Bézier curves](/B-Splines#B.C3.A9zier_curves "B-Splines") (nicely explained in [this](https://www.youtube.com/watch?v=bE1MrrqBAl8) and [this](https://www.youtube.com/watch?v=xXJylM2S72s) video). The points where two Bézier pieces are connected are called knots. A knot with multiplicity _m_ on a B-spline with degree _d_ means the curve to the left and right of the knot has at least an equal _n_ order derivative (called _Cn_ continuity) where _n = d - m_.

In this cubic B-spline (degree 3) there are 3 segments, meaning 3 curves are connected at 2 knots. The knots have multiplicity 1.

The multiplicity is indicated by the numbers in round brackets. See ![](/images/Sketcher_BSplineKnotMultiplicity.svg) [Show/hide B-spline knot multiplicity](/Sketcher_BSplineKnotMultiplicity "Sketcher BSplineKnotMultiplicity").

![](/images/Sketcher_KnotMultiplicity_multiplicity1.png)

B-spline where both knots have multiplicity 1.

A multiplicity of 3 will change this B-spline so that even the first order derivatives are not equal (_C0_ continuity). Here is the same B-spline where the multiplicity of the knot on the left was increased to 3:

![](/images/Sketcher_KnotMultiplicity_multiplicity3.png)

Same B-spline with knot multiplicity 3. A control point was moved to show that the knot has _C0_ continuity.

A consequence of a higher multiplicity is that for the price of loosing continuity you gain local control. Meaning changing one control point will only affect the B-spline locally.

This can be seen in this example, where the B-spline with knot multiplicity 1 from the first image above was taken, and the second control point from the right was moved up. As a result the complete shape of the B-spline has changed:

![](/images/Sketcher_KnotMultiplicity_locality1.png)

After increasing the multiplicity of the knots to 2, moving the second control point from the right results in significant changes on the right side of the shape only:

![](/images/Sketcher_KnotMultiplicity_locality2.png)

## Notes

- Knot multiplicity can also be increased with [Sketcher BSplineInsertKnot](/Sketcher_BSplineInsertKnot "Sketcher BSplineInsertKnot").

Retrieved from "<http://wiki.freecad.org/index.php?title=Sketcher_BSplineIncreaseKnotMultiplicity/en&oldid=1403931>"
