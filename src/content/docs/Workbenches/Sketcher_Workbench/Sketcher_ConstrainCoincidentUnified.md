---
title: Sketcher ConstrainCoincidentUnified
---

|                                                                                                                                                                                                     |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Sketcher ConstrainCoincidentUnified                                                                                                                                                                 |
| Menu location                                                                                                                                                                                       |
| Sketch → Sketcher constraints → Constrain coincident                                                                                                                                                |
| Workbenches                                                                                                                                                                                         |
| [Sketcher](/Sketcher_Workbench "Sketcher Workbench")                                                                                                                                                |
| Default shortcut                                                                                                                                                                                    |
| C                                                                                                                                                                                                   |
| Introduced in version                                                                                                                                                                               |
| 1.0                                                                                                                                                                                                 |
| See also                                                                                                                                                                                            |
| [Sketcher ConstrainCoincident](/Sketcher_ConstrainCoincident "Sketcher ConstrainCoincident"), [Sketcher ConstrainPointOnObject](/Sketcher_ConstrainPointOnObject "Sketcher ConstrainPointOnObject") |
|                                                                                                                                                                                                     |

## Description

The ![](/images/Sketcher_ConstrainCoincidentUnified.svg) [Sketcher ConstrainCoincidentUnified](/Sketcher_ConstrainCoincidentUnified "Sketcher ConstrainCoincidentUnified") tool creates a coincident constraint between points, fixes points on edges or axes (lines are then treated as infinite, and open curves are virtually extended as well), or creates a concentric constraint between circles, arcs and/or ellipses (by making their centers coincident).

This tool replaces the [Sketcher ConstrainCoincident](/Sketcher_ConstrainCoincident "Sketcher ConstrainCoincident") and [Sketcher ConstrainPointOnObject](/Sketcher_ConstrainPointOnObject "Sketcher ConstrainPointOnObject") tools if the **Unify Coincident and PointOnObject** option is selected in the [preferences](/Sketcher_Preferences#General "Sketcher Preferences").

## Usage

See also: [Drawing aids](/Sketcher_Workbench#Drawing_aids "Sketcher Workbench").

### [Continue mode](/Sketcher_Workbench#Continue_modes "Sketcher Workbench")

1. Make sure there is no selection.
2. There are several ways to invoke the tool:
   - Press the ![](/images/Sketcher_ConstrainCoincidentUnified.svg) [Constrain coincident](/Sketcher_ConstrainCoincidentUnified "Sketcher ConstrainCoincidentUnified") button.
   - Select the **Sketch → Sketcher constraints → ![](/images/Sketcher_ConstrainCoincidentUnified.svg) Constrain coincident** option from the menu.
   - Right-click in the [3D view](/3D_view "3D view") and select the **Constrain → ![](/images/Sketcher_ConstrainCoincidentUnified.svg) Constrain coincident** option from the context menu.
   - Use the keyboard shortcut: C.
3. The cursor changes to a cross with the tool icon.
4. Do one of the following:
   - Select two points.
   - Select two edges of circles, arcs, ellipses or arcs of ellipses.
   - Select a single point and a single edge (in any order).
5. A constraint is added.
6. Optionally keep creating constraints.
7. To finish, right-click or press Esc, or start another geometry or constraint creation tool.

### Run-once mode

1. Do one of the following:
   - Select two or more points.
   - Select two or more edges of circles, arcs, ellipses or arcs of ellipses.
   - Select a single point and a single edge (in any order).
   - Select several points and a single edge (idem).
   - Select a single point and several edges (idem).
2. Invoke the tool as explained above, or with the following additional option:
   - Right-click in the [3D view](/3D_view "3D view") and select the **![](/images/Sketcher_ConstrainCoincidentUnified.svg) Constrain coincident** option from the context menu.
3. Depending on the selection one or more constraints are added.

## Notes

- [introduced in 1.0](/Release_notes_1.0 "Release notes 1.0"): Points with Coincident constraints are marked with the **Constraint symbols** [color](/Sketcher_Preferences#Display "Sketcher Preferences").

Retrieved from "<http://wiki.freecad.org/index.php?title=Sketcher_ConstrainCoincidentUnified/en&oldid=1413817>"
