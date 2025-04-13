---
title: Draft Ortho
---
|  |
| --- |
| Draft Snap Ortho |
| Расположение в меню |
| Черчение → [Привязка](/Draft_Snap/ru "Draft Snap/ru") → Ортогональная |
| Верстаки |
| [Draft](/Draft_Workbench/ru "Draft Workbench/ru"), [Arch](/Arch_Workbench/ru "Arch Workbench/ru") |
| Быстрые клавиши |
| *Нет* |
| Представлено в версии |
| - |
| См. также |
| *Нет* |
|  |

### Описание

The ![](/images/Draft_Snap_Ortho.svg) **Draft Snap Ortho** option snaps to imaginary lines that cross the previous point at multiples of 45°. The lines and angles are relative to the XY plane of the [working plane](/Draft_SelectPlane "Draft SelectPlane") coordinate system.

![](/images/Draft_Snap_Ortho_example.png)

Snapping the second point of a line to an imaginary line that has an angle of 45° with the X axis. The small magenta circles indicate all possible directions.

## Usage

For general information about snapping see [Draft Snap](/Draft_Snap "Draft Snap").

1. Make sure snapping is enabled. See ![](/images/Draft_Snap_Lock.svg) [Draft Snap Lock](/Draft_Snap_Lock "Draft Snap Lock").
2. If **Draft Snap Ortho** is not active do one of the following:
   * Press the ![](/images/Draft_Snap_Ortho.svg) [Snap ortho](/Draft_Snap_Ortho "Draft Snap Ortho") button in the Draft snap toolbar.
   * [Draft](/Draft_Workbench "Draft Workbench"): Press the ![](/images/Draft_Snap_Ortho.svg) [Snap ortho](/Draft_Snap_Ortho "Draft Snap Ortho") button in the [Draft snap widget](/Draft_snap_widget "Draft snap widget").
   * [BIM](/BIM_Workbench "BIM Workbench"): Select the **Snapping → ![](/images/Draft_Snap_Ortho.svg) Snap ortho** option from the menu, or from the [3D view](/3D_view "3D view") context menu.
3. Choose a Draft or BIM command to create your geometry.
4. Note that you can also change snap options while a command is active.
5. Pick a first point. This snap option requires a previous point.
6. If you move the cursor around the previous point you will notice a "magnetic" effect when the cursor is on an imaginary infinite line crossing that point at an angle of 0°, 45°, 90° or 135°.
7. The point is marked and the ![](/images/Draft_Snap_Ortho.svg) icon is displayed near the cursor.
8. Click to confirm the point.

## Preferences

See [Draft Snap](/Draft_Snap#Preferences "Draft Snap").

Retrieved from "<http://wiki.freecad.org/index.php?title=Draft_Snap_Ortho/ru&oldid=1473455>"