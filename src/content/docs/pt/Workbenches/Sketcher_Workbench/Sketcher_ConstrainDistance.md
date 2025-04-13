---
title: Restringir distância
---
|  |
| --- |
| Restringir distância |
| Localização do menu |
| Sketch → Sketcher constraints → Constrain distance |
| Bancadas de trabalho |
| [Sketcher](/Sketcher_Workbench/pt "Sketcher Workbench/pt") |
| Atalho padrão |
| Shift + D |
| Introduzido na versão |
| - |
| Veja também |
| [Constraint HorizontalDistance](/Sketcher_ConstrainDistanceX/pt "Sketcher ConstrainDistanceX/pt"), [Constraint VerticalDistance](/Sketcher_ConstrainDistanceY/pt "Sketcher ConstrainDistanceY/pt") |
|  |

## Description

The ![](/images/Sketcher_ConstrainDistance.svg) [Sketcher ConstrainDistance](/Sketcher_ConstrainDistance "Sketcher ConstrainDistance") tool fixes the length of a line, the distance between two points, the perpendicular distance between a point and a line; or, [introduced in 0.21](/Release_notes_0.21 "Release notes 0.21"), the distance between the edges of two circles or arcs, or between the edge of a circle or arc and a line; or, [introduced in 1.0](/Release_notes_1.0 "Release notes 1.0"), the length of an arc.

![](/images/Sketcher_ConstrainDistance_example.png)

## Usage

See also: [Drawing aids](/Sketcher_Workbench#Drawing_aids "Sketcher Workbench").

### [Continue mode](/Sketcher_Workbench#Continue_modes "Sketcher Workbench")

1. Make sure there is no selection.
2. There are several ways to invoke the tool:
   * [introduced in 1.0](/Release_notes_1.0 "Release notes 1.0"): If the **Dimensioning constraints** [preference](/Sketcher_Preferences#General "Sketcher Preferences") is set to `Single tool` (default): press the down arrow to the right of the ![](/images/Sketcher_Dimension.svg)![](/images/Toolbar_flyout_arrow.svg) button and select the **![](/images/Sketcher_ConstrainDistance.svg) Constrain distance** option from the dropdown.
   * If this preference has a different value (and in 0.21 and below): press the ![](/images/Sketcher_ConstrainDistance.svg) [Constrain distance](/Sketcher_ConstrainDistance "Sketcher ConstrainDistance") button.
   * Select the **Sketch → Sketcher constraints → ![](/images/Sketcher_ConstrainDistance.svg) Constrain distance** option from the menu.
   * [introduced in 1.0](/Release_notes_1.0 "Release notes 1.0"): Right-click in the [3D view](/3D_view "3D view") and select the **Dimension → ![](/images/Sketcher_ConstrainDistance.svg) Constrain distance** option from the context menu.
   * Use the keyboard shortcut K then D.
3. The cursor changes to a cross with the tool icon.
4. Do one of the following:
   * Select a single line.
   * Select two points.
   * Select a point and a line (in that order).
5. If a [driving dimensional constraint](/Sketcher_ToggleDrivingConstraint "Sketcher ToggleDrivingConstraint") is created, depending on the [preferences](/Sketcher_Preferences#Display "Sketcher Preferences"), a dialog opens to [edit its value](/Sketcher_Workbench#Edit_constraints "Sketcher Workbench").
6. A constraint is added.
7. Optionally keep creating constraints.
8. To finish, right-click or press Esc, or start another geometry or constraint creation tool

### Run-once mode

1. Do one of the following:
   * Select a single line.
   * Select two points.
   * Select a point and a line (in any order).
   * Select the edges of two circles or arcs.
   * Select the edge of a circle or arc and a line (idem).
   * [introduced in 1.0](/Release_notes_1.0 "Release notes 1.0"): Select the edge of a single arc.
2. Invoke the tool as explained above.
3. Optionally [edit the constraint value](/Sketcher_Workbench#Edit_constraints "Sketcher Workbench").
4. A constraint is added.

## Notes

* If applicable please consider using [Horizontal distance](/Sketcher_ConstrainDistanceX "Sketcher ConstrainDistanceX") or [Vertical distance](/Sketcher_ConstrainDistanceY "Sketcher ConstrainDistanceY") constraints instead. They are more efficient.

## Scripting

Distance from origin:

```
Sketch.addConstraint(Sketcher.Constraint('Distance', Edge, PointOfEdge, -1, 1, App.Units.Quantity('123.0 mm')))

```

Distance between two vertices:

```
Sketch.addConstraint(Sketcher.Constraint('Distance', Edge1, PointOfEdge1, Edge2, PointOfEdge2, App.Units.Quantity('123.0 mm')))

```

Length of line (the GUI allows selecting the edge itself, but it is just a shorthand for using the two extremities of the same line):

```
Sketch.addConstraint(Sketcher.Constraint('Distance', Line, 1, Line, 2, App.Units.Quantity('123.0 mm')))

```

Distance from point (`Edge, PointOfEdge`) to perpendicular point on line (`Line`):

```
Sketch.addConstraint(Sketcher.Constraint('Distance', Edge, PointOfEdge, Line, 0, App.Units.Quantity('123.0 mm')))

```

Distance between the edges of two circles:

```
Sketch.addConstraint(Sketcher.Constraint('Distance', Circle1, 0, Circle2, 0, App.Units.Quantity('123.0 mm')))

```

The [Sketcher scripting](/Sketcher_scripting "Sketcher scripting") page explains the values which can be used for `Edge`, `Edge1`, `Edge2`, `PointOfEdge`, `PointOfEdge1`, `PointOfEdge2`, `Line`, `Circle1` and `Circle2`, and contains further examples on how to create constraints from Python scripts.

Retrieved from "<http://wiki.freecad.org/index.php?title=Sketcher_ConstrainDistance/pt&oldid=1409601>"