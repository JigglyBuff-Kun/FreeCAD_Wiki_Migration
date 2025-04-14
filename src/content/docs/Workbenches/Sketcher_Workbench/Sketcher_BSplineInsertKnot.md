---
title: Sketcher BSplineInsertKnot
---

|                                                                                                                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Sketcher BSplineInsertKnot                                                                                                                                                                                                                                         |
| Menu location                                                                                                                                                                                                                                                      |
| Sketch → Sketcher B-spline tools → Insert knot                                                                                                                                                                                                                     |
| Workbenches                                                                                                                                                                                                                                                        |
| [Sketcher](/Sketcher_Workbench "Sketcher Workbench")                                                                                                                                                                                                               |
| Default shortcut                                                                                                                                                                                                                                                   |
| _None_                                                                                                                                                                                                                                                             |
| Introduced in version                                                                                                                                                                                                                                              |
| 0.20                                                                                                                                                                                                                                                               |
| See also                                                                                                                                                                                                                                                           |
| [Sketcher BSplineIncreaseKnotMultiplicity](/Sketcher_BSplineIncreaseKnotMultiplicity "Sketcher BSplineIncreaseKnotMultiplicity"), [Sketcher BSplineDecreaseKnotMultiplicity](/Sketcher_BSplineDecreaseKnotMultiplicity "Sketcher BSplineDecreaseKnotMultiplicity") |
|                                                                                                                                                                                                                                                                    |

## Description

The ![](/images/Sketcher_BSplineInsertKnot.svg) [Sketcher BSplineInsertKnot](/Sketcher_BSplineInsertKnot "Sketcher BSplineInsertKnot") tool inserts a knot into a [B-spline](/B-Splines "B-Splines"). If a knot already exists at the specified parameter its multiplicity is increased by one.

## Usage

1. Select a B-spline.
2. There are several ways to invoke the tool:
   - Press the ![](/images/Sketcher_BSplineInsertKnot.svg) [Insert knot](/Sketcher_BSplineInsertKnot "Sketcher BSplineInsertKnot") button.
   - Select the **Sketch → Sketcher B-spline tools → ![](/images/Sketcher_BSplineInsertKnot.svg) Insert knot** option from the menu.
   - [introduced in 1.0](/Release_notes_1.0 "Release notes 1.0"): Right-click in the [3D view](/3D_view "3D view") and select the **![](/images/Sketcher_BSplineInsertKnot.svg) Insert knot** option from the context menu.
3. Move the cursor to the desired location.
4. The current position is marked with a small circle and its parameter value is indicated.
5. Click to insert a knot, or click an existing knot to increase its multiplicity.
6. This tool always runs in continue mode: optionally keep inserting knots and/or increasing multiplicity values.
7. To finish, right-click or press Esc, or start geometry or constraint creation tool.

Retrieved from "<http://wiki.freecad.org/index.php?title=Sketcher_BSplineInsertKnot/en&oldid=1403964>"
