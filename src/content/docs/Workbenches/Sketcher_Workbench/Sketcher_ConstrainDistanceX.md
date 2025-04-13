---
title: Sketcher ConstrainDistanceX
---

|                                                                                                                                                                                   |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Sketcher ConstrainDistanceX                                                                                                                                                       |
| Menu location                                                                                                                                                                     |
| Sketch → Sketcher constraints → Constrain horizontal distance                                                                                                                     |
| Workbenches                                                                                                                                                                       |
| [Sketcher](/Sketcher_Workbench "Sketcher Workbench")                                                                                                                              |
| Default shortcut                                                                                                                                                                  |
| L                                                                                                                                                                                 |
| Introduced in version                                                                                                                                                             |
| -                                                                                                                                                                                 |
| See also                                                                                                                                                                          |
| [Sketcher ConstrainDistanceY](/Sketcher_ConstrainDistanceY "Sketcher ConstrainDistanceY"), [Sketcher ConstrainDistance](/Sketcher_ConstrainDistance "Sketcher ConstrainDistance") |
|                                                                                                                                                                                   |

## Description

The ![](/src/assets/images/Sketcher_ConstrainDistanceX.svg) [Sketcher ConstrainDistanceX](/Sketcher_ConstrainDistanceX "Sketcher ConstrainDistanceX") tool
fixes the horizontal distance between two points or the endpoints of a line. If a single point is pre-selected, the distance is relative to the origin of the sketch.

![](/src/assets/images/Constraint_H_Distance.png)

## Usage

See also: [Drawing aids](/Sketcher_Workbench#Drawing_aids "Sketcher Workbench").

### [Continue mode](/Sketcher_Workbench#Continue_modes "Sketcher Workbench")

1. Make sure there is no selection.
2. There are several ways to invoke the tool:
   - [introduced in 1.0](/Release_notes_1.0 "Release notes 1.0"): If the **Dimensioning constraints** [preference](/Sketcher_Preferences#General "Sketcher Preferences") is set to `Single tool` (default): press the down arrow to the right of the ![](/src/assets/images/Sketcher_Dimension.svg)![](/src/assets/images/Toolbar_flyout_arrow.svg) button and select the **![](/src/assets/images/Sketcher_ConstrainDistanceX.svg) Constrain horizontal distance** option from the dropdown.
   - If this preference has a different value (and in 0.21 and below): press the ![](/src/assets/images/Sketcher_ConstrainDistanceX.svg) [Constrain horizontal distance](/Sketcher_ConstrainDistanceX "Sketcher ConstrainDistanceX") button.
   - Select the **Sketch → Sketcher constraints → ![](/src/assets/images/Sketcher_ConstrainDistanceX.svg) Constrain horizontal distance** option from the menu.
   - [introduced in 1.0](/Release_notes_1.0 "Release notes 1.0"): Right-click in the [3D view](/3D_view "3D view") and select the **Dimension → ![](/src/assets/images/Sketcher_ConstrainDistanceX.svg) Constrain horizontal distance** option from the context menu.
   - Use the keyboard shortcut: L.
3. The cursor changes to a cross with the tool icon.
4. Do one of the following:
   - Select two points (one of which can be the origin).
   - Select a single line.
5. If a [driving dimensional constraint](/Sketcher_ToggleDrivingConstraint "Sketcher ToggleDrivingConstraint") is created, depending on the [preferences](/Sketcher_Preferences#Display "Sketcher Preferences"), a dialog opens to [edit its value](/Sketcher_Workbench#Edit_constraints "Sketcher Workbench").
6. A constraint is added.
7. Optionally keep creating constraints.
8. To finish, right-click or press Esc, or start another geometry or constraint creation tool.

### Run-once mode

1. Do one of the following:
   - Select one or two points.
   - Select a single line.
2. Invoke the tool as explained above.
3. Optionally [edit the constraint value](/Sketcher_Workbench#Edit_constraints "Sketcher Workbench").
4. A constraint is added.

## Scripting

Distance from origin:

```
Sketch.addConstraint(Sketcher.Constraint('DistanceX', Edge, PointOfEdge, -1, 1, App.Units.Quantity('123.0 mm')))

```

Distance between two vertices:

```
Sketch.addConstraint(Sketcher.Constraint('DistanceX', Edge1, PointOfEdge1, Edge2, PointOfEdge2, App.Units.Quantity('123.0 mm')))

```

Horizontal span of line (the GUI allows selecting the edge itself, but it is just a shorthand for using the two extremities of the same line):

```
Sketch.addConstraint(Sketcher.Constraint('DistanceX', Line, 1, Line, 2, App.Units.Quantity('123.0 mm')))

```

The [Sketcher scripting](/Sketcher_scripting "Sketcher scripting") page explains the values which can be used for `Edge`, `Edge1`, `Edge2`, `PointOfEdge`, `PointOfEdge1`, `PointOfEdge2` and `Line`, and contains further examples on how to create constraints from Python scripts.

Retrieved from "<http://wiki.freecad.org/index.php?title=Sketcher_ConstrainDistanceX/en&oldid=1405828>"
