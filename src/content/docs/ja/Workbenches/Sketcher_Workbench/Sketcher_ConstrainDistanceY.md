---
title: スケッチャー・垂直距離拘束
---
|  |
| --- |
| Sketcher ConstrainDistanceY |
| Menu location |
| Sketch → Sketcher constraints → Constrain vertical distance |
| Workbenches |
| [Sketcher](/Sketcher_Workbench "Sketcher Workbench") |
| Default shortcut |
| I |
| Introduced in version |
| - |
| See also |
| [Sketcher ConstrainDistanceX](/Sketcher_ConstrainDistanceX "Sketcher ConstrainDistanceX"), [Sketcher ConstrainDistance](/Sketcher_ConstrainDistance "Sketcher ConstrainDistance") |
|  |

## Description

The ![](/images/Sketcher_ConstrainDistanceY.svg) [Sketcher ConstrainDistanceY](/Sketcher_ConstrainDistanceY "Sketcher ConstrainDistanceY") tool
fixes the vertical distance between two points or the endpoints of a line. If a single point is pre-selected, the distance is relative to the origin of the sketch.

![](/images/Sketcher_ConstraintDistanceY_example.png)

## Usage

See also: [Drawing aids](/Sketcher_Workbench#Drawing_aids "Sketcher Workbench").

### [Continue mode](/Sketcher_Workbench#Continue_modes "Sketcher Workbench")

1. Make sure there is no selection.
2. There are several ways to invoke the tool:
   * [introduced in 1.0](/Release_notes_1.0 "Release notes 1.0"): If the **Dimensioning constraints** [preference](/Sketcher_Preferences#General "Sketcher Preferences") is set to `Single tool` (default): press the down arrow to the right of the ![](/images/Sketcher_Dimension.svg)![](/images/Toolbar_flyout_arrow.svg) button and select the **![](/images/Sketcher_ConstrainDistanceY.svg) Constrain vertical distance** option from the dropdown.
   * If this preference has a different value (and in 0.21 and below): press the ![](/images/Sketcher_ConstrainDistanceY.svg) [Constrain vertical distance](/Sketcher_ConstrainDistanceY "Sketcher ConstrainDistanceY") button.
   * Select the **Sketch → Sketcher constraints → ![](/images/Sketcher_ConstrainDistanceY.svg) Constrain vertical distance** option from the menu.
   * [introduced in 1.0](/Release_notes_1.0 "Release notes 1.0"): Right-click in the [3D view](/3D_view "3D view") and select the **Dimension → ![](/images/Sketcher_ConstrainDistanceY.svg) Constrain vertical distance** option from the context menu.
   * Use the keyboard shortcut: I.
3. For further steps see [Sketcher ConstrainDistanceX](/Sketcher_ConstrainDistanceX#Continue_mode "Sketcher ConstrainDistanceX")

### Run-once mode

See [Sketcher ConstrainDistanceX](/Sketcher_ConstrainDistanceX#Run-once_mode "Sketcher ConstrainDistanceX").

## Scripting

Distance from origin:

```
Sketch.addConstraint(Sketcher.Constraint('DistanceY', Edge, PointOfEdge, -1, 1, App.Units.Quantity('123.0 mm')))

```

Distance between two vertices:

```
Sketch.addConstraint(Sketcher.Constraint('DistanceY', Edge1, PointOfEdge1, Edge2, PointOfEdge2, App.Units.Quantity('123.0 mm')))

```

Vertical span of line (the GUI allows selecting the edge itself, but it is just a shorthand for using the two extremities of the same line):

```
Sketch.addConstraint(Sketcher.Constraint('DistanceY', Line, 1, Line, 2, App.Units.Quantity('123.0 mm')))

```

The [Sketcher scripting](/Sketcher_scripting "Sketcher scripting") page explains the values which can be used for `Edge`, `Edge1`, `Edge2`, `PointOfEdge`,  `PointOfEdge1`,  `PointOfEdge2` and `Line`, and contains further examples on how to create constraints from Python scripts.

Retrieved from "<http://wiki.freecad.org/index.php?title=Sketcher_ConstrainDistanceY/ja&oldid=1532799>"