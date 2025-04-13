---
title: Sketcher ConstrainCoincident
---
|  |
| --- |
| Sketcher ConstrainCoincident |
| Menyplacering |
| Sketch → Sketcher constraints → Constrain coincident |
| Arbetsbänkar |
| [Sketcher](/Sketcher_Workbench/sv "Sketcher Workbench/sv") |
| Standard genväg |
| C |
| Introducerad i version |
| - |
| Se även |
| [Constrain Lock](/Sketcher_ConstrainLock/sv "Sketcher ConstrainLock/sv"), [Constrain Point onto Object](/Sketcher_ConstrainPointOnObject/sv "Sketcher ConstrainPointOnObject/sv") |
|  |

## Description

The ![](/images/Sketcher_ConstrainCoincident.svg) [Sketcher ConstrainCoincident](/Sketcher_ConstrainCoincident "Sketcher ConstrainCoincident") tool creates a coincident constraint between points, or ([introduced in 0.21](/Release_notes_0.21 "Release notes 0.21")) a concentric constraint between circles, arcs and/or ellipses (by making their centers coincident).

[introduced in 1.0](/Release_notes_1.0 "Release notes 1.0"): This tool is replaced by the [Sketcher ConstrainCoincidentUnified](/Sketcher_ConstrainCoincidentUnified "Sketcher ConstrainCoincidentUnified") tool if the **Unify Coincident and PointOnObject** option is selected in the [preferences](/Sketcher_Preferences#General "Sketcher Preferences").

## Usage

See also: [Drawing aids](/Sketcher_Workbench#Drawing_aids "Sketcher Workbench").

### [Continue mode](/Sketcher_Workbench#Continue_modes "Sketcher Workbench")

1. Make sure there is no selection.
2. There are several ways to invoke the tool:
   * Press the ![](/images/Sketcher_ConstrainCoincident.svg) [Constrain coincident](/Sketcher_ConstrainCoincident "Sketcher ConstrainCoincident") button.
   * Select the **Sketch → Sketcher constraints → ![](/images/Sketcher_ConstrainCoincident.svg) Constrain coincident** option from the menu.
   * Use the keyboard shortcut: C.
3. The cursor changes to a cross with the tool icon.
4. Do one of the following:
   * Select two points.
   * Select two edges of circles, arcs, ellipses or arcs of ellipses.
5. A constraint is added.
6. Optionally keep creating constraints.
7. To finish, right-click or press Esc, or start another geometry or constraint creation tool.

### Run-once mode

1. Do one of the following:
   * Select two or more points.
   * Select two or more edges of circles, arcs, ellipses or arcs of ellipses.
2. Invoke the tool as explained above.
3. Depending on the selection one or more constraints are added.

## Notes

* [introduced in 1.0](/Release_notes_1.0 "Release notes 1.0"): Points with Coincident constraints are marked with the **Constraint symbols** [color](/Sketcher_Preferences#Display "Sketcher Preferences").

## Scripting

The constraint can be created from [macros](/Macros "Macros") and from the [Python](/Python "Python") console by using the following command:

```
Sketch.addConstraint(Sketcher.Constraint('Coincident',LineFixed,PointOfLineFixed,LineMoving,PointOfLineMoving))

```

where :

* `Sketch` is a sketch object
* `LineFixed` is the number of the line, that will not move by applying the constraint
* `PointOfLineFixed` indicates which vertex of `LineFixed` has to fulfill the constraint
* `LineMoving` is the number of the line, that will move by applying the constraint
* `PointOfLineMoving` indicates which vertex of `LineMoving` has to fulfill the constraint

As the names `LineFixed` and `LineMoving` indicate, if both constrained vertices are free to move in any direction, the first one (first to be selected in the Gui) will remain fixed and the other one will move. In the presence of existing constraints, however, both edges may move.

The [Sketcher scripting](/Sketcher_scripting "Sketcher scripting") page explains the values which can be used for `LineFixed`, `PointOfLineFixed`, `LineMoving` and `PointOfLineMoving`, and contains further examples on how to create constraints from Python scripts.

Retrieved from "<http://wiki.freecad.org/index.php?title=Sketcher_ConstrainCoincident/sv&oldid=1404870>"