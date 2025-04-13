---
title: Sketcher ConstrainDiameter
---

|                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Sketcher ConstrainDiameter                                                                                                                                         |
| Menu location                                                                                                                                                      |
| Sketch → Sketcher constraints → Constrain diameter                                                                                                                 |
| Workbenches                                                                                                                                                        |
| [Sketcher](/Sketcher_Workbench "Sketcher Workbench")                                                                                                               |
| Default shortcut                                                                                                                                                   |
| K O                                                                                                                                                                |
| Introduced in version                                                                                                                                              |
| 0.18                                                                                                                                                               |
| See also                                                                                                                                                           |
| [Sketcher ConstrainRadiam](/Sketcher_ConstrainRadiam "Sketcher ConstrainRadiam"), [Sketcher ConstrainRadius](/Sketcher_ConstrainRadius "Sketcher ConstrainRadius") |
|                                                                                                                                                                    |

## Description

The ![](/src/assets/images/Sketcher_ConstrainDiameter.svg) [Sketcher ConstrainDiameter](/Sketcher_ConstrainDiameter "Sketcher ConstrainDiameter") tool fixes the diameter of circles and arcs. It cannot be used for [B-spline weight circles](/Sketcher_CreateBSpline#Notes "Sketcher CreateBSpline").

## Usage

See also: [Drawing aids](/Sketcher_Workbench#Drawing_aids "Sketcher Workbench").

### [Continue mode](/Sketcher_Workbench#Continue_modes "Sketcher Workbench")

1. Make sure there is no selection.
2. There are several ways to invoke the tool:
   - [introduced in 1.0](/Release_notes_1.0 "Release notes 1.0"): If the **Dimensioning constraints** [preference](/Sketcher_Preferences#General "Sketcher Preferences") is set to `Single tool` (default): press the down arrow to the right of the ![](/src/assets/images/Sketcher_Dimension.svg)![](/src/assets/images/Toolbar_flyout_arrow.svg) button and select the **![](/src/assets/images/Sketcher_ConstrainDiameter.svg) Constrain diameter** option from the dropdown.
   - If this preference has a different value (and in 0.21 and below): press the ![](/src/assets/images/Sketcher_ConstrainDiameter.svg) [Constrain diameter](/Sketcher_ConstrainDiameter "Sketcher ConstrainDiameter") button.
   - Select the **Sketch → Sketcher constraints → ![](/src/assets/images/Sketcher_ConstrainDiameter.svg) Constrain diameter** option from the menu.
   - [introduced in 1.0](/Release_notes_1.0 "Release notes 1.0"): Right-click in the [3D view](/3D_view "3D view") and select the **Dimension → ![](/src/assets/images/Sketcher_ConstrainDiameter.svg) Constrain diameter** option from the context menu.
   - Use the keyboard shortcut: K then O.
3. The cursor changes to a cross with the tool icon.
4. Select the edge of a circle or arc.
5. If a [driving dimensional constraint](/Sketcher_ToggleDrivingConstraint "Sketcher ToggleDrivingConstraint") is created, depending on the [preferences](/Sketcher_Preferences#Display "Sketcher Preferences"), a dialog opens to [edit its value](/Sketcher_Workbench#Edit_constraints "Sketcher Workbench").
6. A constraint is added.
7. Optionally keep creating constraints.
8. To finish, right-click or press Esc, or start another geometry or constraint creation tool.

### Run-once mode

1. Select the edge of one or more circles or arcs.
2. Invoke the tool as explained above.
3. Optionally [edit the constraint value](/Sketcher_Workbench#Edit_constraints "Sketcher Workbench").
4. Depending on the selection one or more constraints are added, see [Notes](#Notes).

## Notes

- If [driving constraints](/Sketcher_ToggleDrivingConstraint "Sketcher ToggleDrivingConstraint") are created and multiple elements that are not [external geometry](/Sketcher_External "Sketcher External") have been pre-selected, only the first of those receives a dimensional constraint, while between the first and the others [Equal constrains](/Sketcher_ConstrainEqual "Sketcher ConstrainEqual") are applied.

## Scripting

```
Sketch.addConstraint(Sketcher.Constraint('Diameter', ArcOrCircle, App.Units.Quantity('123.0 mm')))

```

The [Sketcher scripting](/Sketcher_scripting "Sketcher scripting") page explains the values which can be used for `ArcOrCircle`, and contains further examples on how to create constraints from Python scripts.

Retrieved from "<http://wiki.freecad.org/index.php?title=Sketcher_ConstrainDiameter/en&oldid=1405253>"
