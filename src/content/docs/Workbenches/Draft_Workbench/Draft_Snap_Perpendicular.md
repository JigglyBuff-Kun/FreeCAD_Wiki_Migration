---
title: Draft Snap Perpendicular
---

|                                                                                               |
| --------------------------------------------------------------------------------------------- |
| Draft Snap Perpendicular                                                                      |
| Menu location                                                                                 |
| Snapping → Snap perpendicular                                                                 |
| Workbenches                                                                                   |
| [Draft](/Draft_Workbench "Draft Workbench"), [BIM](/BIM_Workbench "BIM Workbench")            |
| Default shortcut                                                                              |
| _None_                                                                                        |
| Introduced in version                                                                         |
| -                                                                                             |
| See also                                                                                      |
| [Draft Snap](/Draft_Snap "Draft Snap"), [Draft Snap Lock](/Draft_Snap_Lock "Draft Snap Lock") |
|                                                                                               |

## Description

The ![](/src/assets/images/Draft_Snap_Perpendicular.svg) **Draft Snap Perpendicular** option snaps to the perpendicular projections of a previous point on faces ([introduced in 0.21](/Release_notes_0.21 "Release notes 0.21")) and edges. The faces and edges can belong to [Draft](/Draft_Workbench "Draft Workbench") or [BIM](/BIM_Workbench "BIM Workbench") objects but also to objects created with other [workbenches](/Workbenches "Workbenches").

This snap option will also find points on extended faces and edges.

![](/src/assets/images/Draft_Snap_Perpendicular_example.png)

Snapping the second point of a line to the perpendicular point on an extended edge

## Usage

For general information about snapping see [Draft Snap](/Draft_Snap "Draft Snap").

1. Make sure snapping is enabled. See ![](/src/assets/images/Draft_Snap_Lock.svg) [Draft Snap Lock](/Draft_Snap_Lock "Draft Snap Lock").
2. If **Draft Snap Perpendicular** is not active do one of the following:
   - Press the ![](/src/assets/images/Draft_Snap_Perpendicular.svg) [Snap perpendicular](/Draft_Snap_Perpendicular "Draft Snap Perpendicular") button in the Draft snap toolbar.
   - [Draft](/Draft_Workbench "Draft Workbench"): Hold down the ![](/src/assets/images/Draft_Snap_Lock.svg)![](/src/assets/images/Toolbar_flyout_arrow.svg) button in the [Draft snap widget](/Draft_snap_widget "Draft snap widget") and in the menu that opens select the **![](/src/assets/images/Draft_Snap_Perpendicular.svg) Snap perpendicular** option.
   - [BIM](/BIM_Workbench "BIM Workbench"): Select the **Snapping → ![](/src/assets/images/Draft_Snap_Perpendicular.svg) Snap perpendicular** option from the menu, or from the [3D view](/3D_view "3D view") context menu.
3. Choose a Draft or BIM command to create your geometry.
4. Note that you can also change snap options while a command is active.
5. Pick a first point. This snap option requires a previous point. The perpendicular point will be determined in relation to this point.
6. Move the cursor over a face or edge.
7. The face or edge is highlighted.
8. If a perpendicular point is found the point is marked and the ![](/src/assets/images/Draft_Snap_Perpendicular.svg) icon is displayed near the cursor.
9. If there are multiple perpendicular points: optionally move the cursor closer to another perpendicular point. [introduced in 0.21](/Release_notes_0.21 "Release notes 0.21")
10. Click to confirm the point.

## Preferences

See [Draft Snap](/Draft_Snap#Preferences "Draft Snap").

Retrieved from "<http://wiki.freecad.org/index.php?title=Draft_Snap_Perpendicular/en&oldid=1473401>"
