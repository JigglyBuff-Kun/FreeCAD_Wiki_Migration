---
title: Sketcher ConstrainHorizontal
---

|                                                                                                                                                                           |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Sketcher ConstrainHorizontal                                                                                                                                              |
| Menu location                                                                                                                                                             |
| Sketch → Sketcher constraints → Constrain horizontal                                                                                                                      |
| Workbenches                                                                                                                                                               |
| [Sketcher](/Sketcher_Workbench "Sketcher Workbench")                                                                                                                      |
| Default shortcut                                                                                                                                                          |
| H                                                                                                                                                                         |
| Introduced in version                                                                                                                                                     |
| -                                                                                                                                                                         |
| See also                                                                                                                                                                  |
| [Sketcher ConstrainHorVer](/Sketcher_ConstrainHorVer "Sketcher ConstrainHorVer"), [Sketcher ConstraintVertical](/Sketcher_ConstrainVertical "Sketcher ConstrainVertical") |
|                                                                                                                                                                           |

## Description

The ![](/src/assets/images/Sketcher_ConstrainHorizontal.svg) [Sketcher ConstrainHorizontal](/Sketcher_ConstrainHorizontal "Sketcher ConstrainHorizontal") tool constrains lines or pairs of points to be horizontal (parallel to the horizontal axis of the sketch).

[introduced in 1.0](/Release_notes_1.0 "Release notes 1.0"): In most cases it is advisable to use the combined [Sketcher ConstrainHorVer](/Sketcher_ConstrainHorVer "Sketcher ConstrainHorVer") tool instead.

## Usage

See also: [Drawing aids](/Sketcher_Workbench#Drawing_aids "Sketcher Workbench").

### [Continue mode](/Sketcher_Workbench#Continue_modes "Sketcher Workbench")

1. Make sure there is no selection.
2. There are several ways to invoke the tool:
   - [introduced in 1.0](/Release_notes_1.0 "Release notes 1.0"): If the **Auto tool for Horizontal/Vertical** [preference](/Sketcher_Preferences#General "Sketcher Preferences") is selected (default): press the down arrow to the right of the ![](/src/assets/images/Sketcher_ConstrainHorVer.svg)![](/src/assets/images/Toolbar_flyout_arrow.svg) button and select the **![](/src/assets/images/Sketcher_ConstrainHorizontal.svg) Constrain horizontal** option from the dropdown.
   - If this preference is not selected (and in 0.21 and below): press the ![](/src/assets/images/Sketcher_ConstrainHorizontal.svg) [Constrain horizontal](/Sketcher_ConstrainHorizontal "Sketcher ConstrainHorizontal") button.
   - Select the **Sketch → Sketcher constraints → ![](/src/assets/images/Sketcher_ConstrainHorizontal.svg) Constrain horizontal** option from the menu.
   - Use the keyboard shortcut: H.
3. The cursor changes to a cross with the tool icon.
4. Do one of the following:
   - Select two points.
   - Select a single line.
5. A constraint is added.
6. Optionally keep creating constraints.
7. To finish, right-click or press Esc, or start another geometry or constraint creation tool.

### Run-once mode

1. Do one of the following:
   - Select two or more points.
   - Select one or more lines. Points can be included in the selection, but will be ignored.
2. Invoke the tool as explained above, or with the following additional option:
   - [introduced in 1.0](/Release_notes_1.0 "Release notes 1.0"): Right-click in the [3D view](/3D_view "3D view") and select the **![](/src/assets/images/Sketcher_ConstrainHorizontal.svg) Constrain horizontal** option from the context menu.
3. Depending on the selection one or more constraints are added.

## Scripting

```
Sketch.addConstraint(Sketcher.Constraint('Horizontal', Line))

```

The [Sketcher scripting](/Sketcher_scripting "Sketcher scripting") page explains the values which can be used for `Line` and contains further examples on how to create constraints from Python scripts.

Retrieved from "<http://wiki.freecad.org/index.php?title=Sketcher_ConstrainHorizontal/en&oldid=1404934>"
