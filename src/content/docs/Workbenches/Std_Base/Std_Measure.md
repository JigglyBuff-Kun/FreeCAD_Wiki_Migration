---
title: Std Measure
---

|                                                       |
| ----------------------------------------------------- |
| Std Measure                                           |
| Menu location                                         |
| Tools → Measure                                       |
| Workbenches                                           |
| All                                                   |
| Default shortcut                                      |
| _None_                                                |
| Introduced in version                                 |
| 1.0                                                   |
| See also                                              |
| [Draft Dimension](/Draft_Dimension "Draft Dimension") |
|                                                       |

## Description

The **Std Measure** command gives access to the Unified Measurement Facility. It replaces several previous measurement commands, providing a versatile measurement functionality.

## Usage

1. Optionally preselect the entities to be measured.
2. There are several ways to invoke the command:
   - Press the ![](/src/assets/images/Std_Measure.svg) [Std Measure](/Std_Measure "Std Measure") button.
   - Select the **Tools → ![](/src/assets/images/Std_Measure.svg) Measure** option from the menu.
3. The **Measurement** task panel opens. See [Options](#Options) for more information.
4. If no geometrical entities were preselected, do one of the following:
   - Select the geometrical entities while leaving the _Mode_ as _Auto_ so that the mode will be automatically determined based on the selection.
   - Choose a _Mode_ other than _Auto_ and then select the geometrical entities (clicking on them again will deselect them):
     - _Distance_ - the shortest distance between the selected entities, if circular edges are selected then the distance between the centers of the circles is measured,
     - _Distance Free_ - distance between two freely selected points (belonging to different entities - edges, faces),
     - _Angle_ - angle between the selected entities,
     - _Length_ - length of the selected edge,
     - _Position_ - coordinates of the selected vertex,
     - _Area_ - area of the selected face,
     - _Radius_ - radius of the selected circular edge,
     - _Center of Mass_ - COM of the selected edge, face or solid (only if preselected in the tree).
5. The measurement result will be shown in the _Result_ field and on a label displayed in the [3D view](/3D_view "3D view"). That label will also include an icon indicating the type of measurement. The labels can be customized in the [Preferences](/Preferences_Editor "Preferences Editor"). They can be moved in the 3D view by dragging them with a cursor.
6. Press the Reset button to delete the measurement or the Save button to keep it. Saved measurements are put in a Measurements [group](/Std_Group "Std Group") in the [Tree view](/Tree_view "Tree view").
7. Press Esc or the Close button to finish the command.

## Options

- [introduced in 1.1](/Release_notes_1.1 "Release notes 1.1") Press the ![](/src/assets/images/Preferences-system.svg) ![](/src/assets/images/Toolbar_flyout_arrow.svg) button to change the settings:
  - _Auto Save_ - if checked, the last measurement is saved when starting a new measurement (holding Shift can temporarily disable this behavior),
  - _Additive Selection_ - if checked, clicking on subsequent geometrical entities adds them as selections for the same measurement, otherwise Ctrl must be pressed to do this.
- For the _Distance_ and _Distance Free_ modes the **Show Delta** checkbox is displayed. If this checkbox is checked, the View**Show Delta** property of the measurement is set to `true` and 3 additional projected measurements are shown in the [3D view](/3D_view "3D view").

## Properties

### Data

Measurement

- Data**Element1** (`LinkSub`): First element of the measurement.
- Data**Element2** (`LinkSub`): Second element of the measurement.
- Data**Distance** (`Distance`): Distance between the two elements.
- Data**Distance X** (`Distance`): Distance in the X direction (only for _Distance_ and _Distance Free_ measurements).
- Data**Distance Y** (`Distance`): Distance in the Y direction (idem).
- Data**Distance Z** (`Distance`): Distance in the Z direction (idem).
- Data (Hidden)**Position1** (`Vector`): Position of the first measured point (read-only).
- Data (Hidden)**Position2** (`Vector`): Position of the second measured point (read-only).

### View

Appearance

- View**Font Size** (`Integer`): Defines the font size for the label of the saved dimension.
- View**Line Color** (`Color`): Defines the color of the dimension lines displayed in 3D view.
- View**Show Delta** (`Bool`): If `true`, projected distance measurements are displayed in 3D view (only for _Distance_ and _Distance Free_ measurements).
- View**Text Background Color** (`Color`): Defines the background color of the dimension label.
- View**Text Color** (`Color`): Defines the color of the dimension label text and symbol.

## Notes

- This command is the result of a [GSoC 2023 project](/Unified_Measurement_Facility "Unified Measurement Facility").

Retrieved from "<http://wiki.freecad.org/index.php?title=Std_Measure/en&oldid=1530080>"
