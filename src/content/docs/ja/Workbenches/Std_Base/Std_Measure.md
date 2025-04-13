---
title: 標準測定ツール
---
|  |
| --- |
| Std Measure |
| Menu location |
| Tools → Measure |
| Workbenches |
| All |
| Default shortcut |
| *None* |
| Introduced in version |
| 1.0 |
| See also |
| [Draft Dimension](/Draft_Dimension "Draft Dimension") |
|  |

## 概要

**汎用測定ツール**コマンドによって、一貫した形で測定機能を利用できます。いくつかの旧式の測定機能を置き換える、汎用の測定機能です。

## 使い方

1. Optionally preselect the entities to be measured.
2. There are several ways to invoke the command:
   * Press the ![](/images/Std_Measure.svg) [Std Measure](/Std_Measure "Std Measure") button.
   * Select the **Tools → ![](/images/Std_Measure.svg) Measure** option from the menu.
3. The **Measurement** task panel opens. See [Options](#Options) for more information.
4. If no geometrical entities were preselected, do one of the following:
   * Select the geometrical entities while leaving the *Mode* as *Auto* so that the mode will be automatically determined based on the selection.
   * Choose a *Mode* other than *Auto* and then select the geometrical entities (clicking on them again will deselect them):
     + *Distance* - the shortest distance between the selected entities, if circular edges are selected then the distance between the centers of the circles is measured,
     + *Distance Free* - distance between two freely selected points (belonging to different entities - edges, faces),
     + *Angle* - angle between the selected entities,
     + *Length* - length of the selected edge,
     + *Position* - coordinates of the selected vertex,
     + *Area* - area of the selected face,
     + *Radius* - radius of the selected circular edge,
     + *Center of Mass* - COM of the selected edge, face or solid (only if preselected in the tree).
5. The measurement result will be shown in the *Result* field and on a label displayed in the [3D view](/3D_view "3D view"). That label will also include an icon indicating the type of measurement. The labels can be customized in the [Preferences](/Preferences_Editor "Preferences Editor"). They can be moved in the 3D view by dragging them with a cursor.
6. Press the Reset button to delete the measurement or the Save button to keep it. Saved measurements are put in a Measurements [group](/Std_Group "Std Group") in the [Tree view](/Tree_view "Tree view").
7. Press Esc or the Close button to finish the command.

## オプション

* [introduced in 1.1](/Release_notes_1.1 "Release notes 1.1") Press the ![](/images/Preferences-system.svg) ![](/images/Toolbar_flyout_arrow.svg) button to change the settings:
  + *Auto Save* - if checked, the last measurement is saved when starting a new measurement (holding Shift can temporarily disable this behavior),
  + *Additive Selection* - if checked, clicking on subsequent geometrical entities adds them as selections for the same measurement, otherwise Ctrl must be pressed to do this.
* For the *Distance* and *Distance Free* modes the **Show Delta** checkbox is displayed. If this checkbox is checked, the ビュー**Show Delta** property of the measurement is set to `true` and 3 additional projected measurements are shown in the [3D view](/3D_view "3D view").

## プロパティ

### Data

Measurement

* データ**Element1** (`LinkSub`): First element of the measurement.
* データ**Element2** (`LinkSub`): Second element of the measurement.
* データ**Distance** (`Distance`): Distance between the two elements.
* データ**Distance X** (`Distance`): Distance in the X direction (only for *Distance* and *Distance Free* measurements).
* データ**Distance Y** (`Distance`): Distance in the Y direction (idem).
* データ**Distance Z** (`Distance`): Distance in the Z direction (idem).
* データ (Hidden)**Position1** (`Vector`): Position of the first measured point (read-only).
* データ (Hidden)**Position2** (`Vector`): Position of the second measured point (read-only).

### View

Appearance

* ビュー**Font Size** (`Integer`): Defines the font size for the label of the saved dimension.
* ビュー**Line Color** (`Color`): Defines the color of the dimension lines displayed in 3D view.
* ビュー**Show Delta** (`Bool`): If `true`, projected distance measurements are displayed in 3D view (only for *Distance* and *Distance Free* measurements).
* ビュー**Text Background Color** (`Color`): Defines the background color of the dimension label.
* ビュー**Text Color** (`Color`): Defines the color of the dimension label text and symbol.

## 補足

* このコマンドは、[GSoC 2023プロジェクト](/Unified_Measurement_Facility "Unified Measurement Facility")の成果物です。

Retrieved from "<http://wiki.freecad.org/index.php?title=Std_Measure/ja&oldid=1540161>"