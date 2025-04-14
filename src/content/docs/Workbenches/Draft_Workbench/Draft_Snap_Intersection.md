---
title: Draft Snap Intersection
---

|                                                                                               |
| --------------------------------------------------------------------------------------------- |
| Draft Snap Intersection                                                                       |
| Menu location                                                                                 |
| Snapping → Snap intersection                                                                  |
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

The ![](/images/Draft_Snap_Intersection.svg) **Draft Snap Intersection** option snaps to the intersection of two edges. The edges can belong to [Draft](/Draft_Workbench "Draft Workbench") or [BIM](/BIM_Workbench "BIM Workbench") objects but also to objects created with other [workbenches](/Workbenches "Workbenches").

This snap option will also find apparent intersections of (extended) straight edges if ![](/images/Draft_Snap_WorkingPlane.svg) [Draft Snap WorkingPlane](/Draft_Snap_WorkingPlane "Draft Snap WorkingPlane") is active as well.

![](/images/Draft_Snap_Intersection_example.png)

Snapping the second point of a line to the intersection of two edges

## Usage

For general information about snapping see [Draft Snap](/Draft_Snap "Draft Snap").

1. Make sure snapping is enabled. See ![](/images/Draft_Snap_Lock.svg) [Draft Snap Lock](/Draft_Snap_Lock "Draft Snap Lock").
2. If **Draft Snap Intersection** is not active do one of the following:
   - Press the ![](/images/Draft_Snap_Intersection.svg) [Snap intersection](/Draft_Snap_Intersection "Draft Snap Intersection") button in the Draft snap toolbar.
   - [Draft](/Draft_Workbench "Draft Workbench"): Hold down the ![](/images/Draft_Snap_Lock.svg)![](/images/Toolbar_flyout_arrow.svg) button in the [Draft snap widget](/Draft_snap_widget "Draft snap widget") and in the menu that opens select the **![](/images/Draft_Snap_Intersection.svg) Snap intersection** option.
   - [BIM](/BIM_Workbench "BIM Workbench"): Select the **Snapping → ![](/images/Draft_Snap_Intersection.svg) Snap intersection** option from the menu, or from the [3D view](/3D_view "3D view") context menu.
3. Choose a Draft or BIM command to create your geometry.
4. Note that you can also change snap options while a command is active.
5. Move the cursor over one of the edges that intersect.
6. The edge is highlighted.
7. Move the cursor over the other edge.
8. The edge is highlighted.
9. If an intersection is found the point is marked and the ![](/images/Draft_Snap_Intersection.svg) icon is displayed near the cursor.
10. If the edges have multiple intersections: optionally move the cursor closer to another intersection.
11. Click to confirm the point.

## Preferences

See [Draft Snap](/Draft_Snap#Preferences "Draft Snap").

Retrieved from "<http://wiki.freecad.org/index.php?title=Draft_Snap_Intersection/en&oldid=1473389>"
