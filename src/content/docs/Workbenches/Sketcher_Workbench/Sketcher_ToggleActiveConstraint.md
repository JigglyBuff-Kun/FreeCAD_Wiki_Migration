---
title: Sketcher ToggleActiveConstraint
---

|                                                                                                          |
| -------------------------------------------------------------------------------------------------------- |
| Sketcher ToggleActiveConstraint                                                                          |
| Menu location                                                                                            |
| Sketch → Sketcher constraints → Activate/deactivate constraint                                           |
| Workbenches                                                                                              |
| [Sketcher](/Sketcher_Workbench "Sketcher Workbench")                                                     |
| Default shortcut                                                                                         |
| K Z                                                                                                      |
| Introduced in version                                                                                    |
| 0.19                                                                                                     |
| See also                                                                                                 |
| [Sketcher ToggleDrivingConstraint](/Sketcher_ToggleDrivingConstraint "Sketcher ToggleDrivingConstraint") |
|                                                                                                          |

## Description

The ![](/images/Sketcher_ToggleActiveConstraint.svg) [Sketcher ToggleActiveConstraint](/Sketcher_ToggleActiveConstraint "Sketcher ToggleActiveConstraint") tool activates or deactivates selected constraints. Deactivating constraints allows you to test other geometry arrangements without deleting constraints.

This is tool is similar to [Sketcher ToggleDrivingConstraint](/Sketcher_ToggleDrivingConstraint "Sketcher ToggleDrivingConstraint"), but contrary to that tool also works for geometric constraints, and values of deactivated dimensional constraints are preserved.

## Usage

1. Select one or more constraints.
2. There are several ways to invoke the tool:
   - Press the ![](/images/Sketcher_ToggleActiveConstraint.svg) [Activate/deactivate constraint](/Sketcher_ToggleActiveConstraint "Sketcher ToggleActiveConstraint") button.
   - Select the **Sketch → Sketcher constraints → ![](/images/Sketcher_ToggleActiveConstraint.svg) Activate/deactivate constraint** option from the menu.
   - [introduced in 1.0](/Release_notes_1.0 "Release notes 1.0"): Right-click in the [3D view](/3D_view "3D view") and select the **![](/images/Sketcher_ToggleActiveConstraint.svg) Activate/deactivate constraint** option from the context menu.
   - In the **Constraints** section of the [Sketcher Dialog](/Sketcher_Dialog "Sketcher Dialog") select the **Activate** or **Deactivate** option from the context menu. The offered option depends on the state of the constraint under the cursor.
   - Use the keyboard shortcut: K then Z.
3. Active selected constraints are deactivated and turn grey (default [color](/Sketcher_Preferences#Appearance "Sketcher Preferences")), while deactivated selected constraints are activated and return to red (default color).

## Example

![](/images/Sketcher_ToggleActiveConstraint_example_active.png)

A fully constrained sketch.

![](/images/Sketcher_ToggleActiveConstraint_example_disabled_1.png)

One of the angular constraints has been deactivated, the sketch is no longer fully constrained.

![](/images/Sketcher_ToggleActiveConstraint_example_disabled_2.png)

The unconstrained geometry can be moved around. The deactivated constraint is still available, and can be re-activated to return to the fully constrained sketch.

## Scripting

_See also:_ [FreeCAD Scripting Basics](/FreeCAD_Scripting_Basics "FreeCAD Scripting Basics").

The active status of a constraint can be controlled in [macros](/Macros "Macros") and from the [Python console](/Python_console "Python console").

```
SketchObject.toggleActive(index)

```

Use the `toggleActive` method of an existing [Sketcher SketchObject](/Sketcher_SketchObject "Sketcher SketchObject"), and the `index` of the constraint to activate it or deactivate it. The index starts from `0` all the way to `N-1`, where `N` is the total number of constraints.

Example:

```
import FreeCAD as App

sketch = App.ActiveDocument.Sketch
sketch.toggleActive(3)

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Sketcher_ToggleActiveConstraint/en&oldid=1413859>"
