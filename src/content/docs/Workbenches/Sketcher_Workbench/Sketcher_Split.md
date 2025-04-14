---
title: Sketcher Split
---

|                                                             |
| ----------------------------------------------------------- |
| Sketcher Split                                              |
| Menu location                                               |
| Sketch → Sketcher tools → Split edge                        |
| Workbenches                                                 |
| [Sketcher](/Sketcher_Workbench "Sketcher Workbench")        |
| Default shortcut                                            |
| G Z                                                         |
| Introduced in version                                       |
| 0.20                                                        |
| See also                                                    |
| [Sketcher Trimming](/Sketcher_Trimming "Sketcher Trimming") |
|                                                             |

## Description

The ![](/images/Sketcher_Split.svg) [Sketcher Split](/Sketcher_Split "Sketcher Split") tool splits an edge. If the edge is a closed curve (i.e. a circle, an ellipse or a periodic B-spline) it is converted to an open curve (an arc, an arc of ellipse or a non-periodic B-spline respectively).

## Usage

See also: [Drawing aids](/Sketcher_Workbench#Drawing_aids "Sketcher Workbench").

1. There are several ways to invoke the tool:
   - Press the ![](/images/Sketcher_Split.svg) [Split edge](/Sketcher_Split "Sketcher Split") button.
   - Select the **Sketcher → Sketcher tools → ![](/images/Sketcher_Split.svg) Split edge** option from the menu.
   - Use the keyboard shortcut: G then Z.
2. If there is a previous selection it is cleared. The tool does not accept a pre-selection.
3. The cursor changes to a cross with the tool icon.
4. Click an edge at the point where it should be split.
5. If the original edge is a line or an open curve, two new edges are created connected by a [Coincident constraint](/Sketcher_ConstrainCoincident "Sketcher ConstrainCoincident"). For closed curves a new open curve is created, the new point then does not receive a Coincident constraint. Existing applicable constraints are transferred to the new edge(s). See [Notes](#Notes).
6. This tool always runs in continue mode: optionally keep splitting edges.
7. To finish, click in an empty area in the [3D view](/3D_view "3D view"), right-click or press Esc, or start another geometry or constraint creation tool.

## Notes

- A [Coincident](/Sketcher_ConstrainCoincident "Sketcher ConstrainCoincident") constraint is applied to the center points of new arcs.
- [Radius](/Sketcher_ConstrainRadius "Sketcher ConstrainRadius") and [Diameter](/Sketcher_ConstrainDiameter "Sketcher ConstrainDiameter") constraints are copied to new arcs (resulting in a redundancy).
- Coincident constraints and [Point on object](/Sketcher_ConstrainPointOnObject "Sketcher ConstrainPointOnObject") constraints are transferred to the closest new edge.
- [Horizontal](/Sketcher_ConstrainHorizontal "Sketcher ConstrainHorizontal") and [Vertical](/Sketcher_ConstrainVertical "Sketcher ConstrainVertical") constraints between points are transferred to the closest new edge.
- Horizontal and Vertical constraints attached to lines are copied to new line segments.
- [Parallel](/Sketcher_ConstrainParallel "Sketcher ConstrainParallel") and [Perpendicular](/Sketcher_ConstrainPerpendicular "Sketcher ConstrainPerpendicular") constraints are copied to new line segments, for new arcs they are only copied to the closest.
- [Horizontal distance](/Sketcher_ConstrainDistanceX "Sketcher ConstrainDistanceX"), [Vertical distance](/Sketcher_ConstrainDistanceY "Sketcher ConstrainDistanceY") and [Distance](/Sketcher_ConstrainDistance "Sketcher ConstrainDistance") constraints are transferred to the closest new edge.
- [Angle](/Sketcher_ConstrainAngle "Sketcher ConstrainAngle"), [Symmetric](/Sketcher_ConstrainSymmetric "Sketcher ConstrainSymmetric") and [Block](/Sketcher_ConstrainBlock "Sketcher ConstrainBlock") constraints are currently not transferred.

Retrieved from "<http://wiki.freecad.org/index.php?title=Sketcher_Split/en&oldid=1413925>"
