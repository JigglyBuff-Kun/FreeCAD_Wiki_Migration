---
title: Sketcher ConstrainLock
---

|                                                                               |
| ----------------------------------------------------------------------------- |
| Sketcher ConstrainLock                                                        |
| Menu location                                                                 |
| Sketch → Sketcher constraints → Constrain lock                                |
| Workbenches                                                                   |
| [Sketcher](/Sketcher_Workbench "Sketcher Workbench")                          |
| Default shortcut                                                              |
| K L                                                                           |
| Introduced in version                                                         |
| -                                                                             |
| See also                                                                      |
| [Sketcher ConstrainBlock](/Sketcher_ConstrainBlock "Sketcher ConstrainBlock") |
|                                                                               |

## Description

The ![](/src/assets/images/Sketcher_ConstrainLock.svg) [Sketcher ConstrainLock](/Sketcher_ConstrainLock "Sketcher ConstrainLock") tool applies [Horizontal distance](/Sketcher_ConstrainDistanceX "Sketcher ConstrainDistanceX") and [Vertical distance](/Sketcher_ConstrainDistanceY "Sketcher ConstrainDistanceY") constraints to points. If a single point is selected the constraints reference the origin of the sketch. If two or more points are selected the constraints reference the last point in the selection.

## Usage

See also: [Drawing aids](/Sketcher_Workbench#Drawing_aids "Sketcher Workbench").

### [Continue mode](/Sketcher_Workbench#Continue_modes "Sketcher Workbench")

1. Make sure there is no selection.
2. There are several ways to invoke the tool:
   - [introduced in 1.0](/Release_notes_1.0 "Release notes 1.0"): If the **Dimensioning constraints** [preference](/Sketcher_Preferences#General "Sketcher Preferences") is set to `Single tool` (default): press the down arrow to the right of the ![](/src/assets/images/Sketcher_Dimension.svg)![](/src/assets/images/Toolbar_flyout_arrow.svg) button and select the **![](/src/assets/images/Sketcher_ConstrainLock.svg) Constrain lock** option from the dropdown.
   - If this preference has a different value (and in 0.21 and below): press the ![](/src/assets/images/Sketcher_ConstrainLock.svg) [Constrain lock](/Sketcher_ConstrainLock "Sketcher ConstrainLock") button.
   - Select the **Sketch → Sketcher constraints → ![](/src/assets/images/Sketcher_ConstrainLock.svg) Constrain lock** option from the menu.
   - [introduced in 1.0](/Release_notes_1.0 "Release notes 1.0"): Right-click in the [3D view](/3D_view "3D view") and select the **Dimension → ![](/src/assets/images/Sketcher_ConstrainLock.svg) Constrain lock** option from the context menu.
   - Use the keyboard shortcut: K then L.
3. The cursor changes to a cross with the tool icon.
4. Select a single point.
5. Two constraints are added.
6. Optionally keep creating constraints.
7. To finish, right-click or press Esc, or start another geometry or constraint creation tool.

### Run-once mode

1. Select one or more points.
2. Invoke the tool as explained above.
3. Depending on the selection two or more constraints are added.

## Notes

- There is no automatic prompt to edit the constraint values. If required values can be [edited manually](/Sketcher_Workbench#Edit_constraints "Sketcher Workbench").

Retrieved from "<http://wiki.freecad.org/index.php?title=Sketcher_ConstrainLock/en&oldid=1413823>"
