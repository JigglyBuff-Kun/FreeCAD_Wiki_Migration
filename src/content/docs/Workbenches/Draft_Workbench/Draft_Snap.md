---
title: Draft Snap
---

## Description

In the ![](/images/Workbench_Draft.svg) [Draft Workbench](/Draft_Workbench "Draft Workbench") and the ![](/images/Workbench_BIM.svg) [BIM Workbench](/BIM_Workbench "BIM Workbench") you can create geometry by picking points in the [3D view](/3D_view "3D view") or by entering coordinates in the [task panel](/Task_panel "Task panel") of commands. Another way of selecting points is by snapping. Snapping allows to select exact geometric points on, or defined by, existing objects or the grid. You can for example snap to the endpoint of a line, to the center of a circle, or to the intersection of two edges.

Snapping is available with most [Draft](/Draft_Workbench "Draft Workbench") and [BIM](/BIM_Workbench "BIM Workbench") commands.

![](/images/Draft_Snap_Endpoint_example.png)

Snapping to the endpoint of an edge

## Snap tools

These tools are available in the Draft snap toolbar and in the [Draft snap widget](/Draft_snap_widget "Draft snap widget").

Note that circular edges do not have to be full circles.

- ![](/images/Draft_Snap_Lock.svg) [Snap lock](/Draft_Snap_Lock "Draft Snap Lock"): enables or disables snapping globally.

- ![](/images/Draft_Snap_Endpoint.svg) [Snap endpoint](/Draft_Snap_Endpoint "Draft Snap Endpoint"): snaps to the endpoints of edges.

- ![](/images/Draft_Snap_Midpoint.svg) [Snap midpoint](/Draft_Snap_Midpoint "Draft Snap Midpoint"): snaps to the midpoint of edges.

- ![](/images/Draft_Snap_Center.svg) [Snap center](/Draft_Snap_Center "Draft Snap Center"): snaps to the center point of faces and circular edges, and to the Data**Placement** point of [Draft WorkingPlaneProxies](/Draft_WorkingPlaneProxy "Draft WorkingPlaneProxy") and [Arch BuildingParts](/Arch_BuildingPart "Arch BuildingPart").

- ![](/images/Draft_Snap_Angle.svg) [Snap angle](/Draft_Snap_Angle "Draft Snap Angle"): snaps to the special cardinal points on circular edges, at multiples of 30° and 45°.

- ![](/images/Draft_Snap_Intersection.svg) [Snap intersection](/Draft_Snap_Intersection "Draft Snap Intersection"): snaps to the intersection of two edges.

- ![](/images/Draft_Snap_Perpendicular.svg) [Snap perpendicular](/Draft_Snap_Perpendicular "Draft Snap Perpendicular"): snaps to the perpendicular points on faces ([introduced in 0.21](/Release_notes_0.21 "Release notes 0.21")) and edges.

- ![](/images/Draft_Snap_Extension.svg) [Snap extension](/Draft_Snap_Extension "Draft Snap Extension"): snaps to an imaginary line that extends beyond the endpoints of straight edges.

- ![](/images/Draft_Snap_Parallel.svg) [Snap parallel](/Draft_Snap_Parallel "Draft Snap Parallel"): snaps to an imaginary line parallel to straight edges.

- ![](/images/Draft_Snap_Special.svg) [Snap special](/Draft_Snap_Special "Draft Snap Special"): snaps to special points defined by the object.

- ![](/images/Draft_Snap_Near.svg) [Snap near](/Draft_Snap_Near "Draft Snap Near"): snaps to the nearest point on faces and edges.

- ![](/images/Draft_Snap_Ortho.svg) [Snap ortho](/Draft_Snap_Ortho "Draft Snap Ortho"): snaps to imaginary lines that cross the previous point at multiples of 45°.

- ![](/images/Draft_Snap_Grid.svg) [Snap grid](/Draft_Snap_Grid "Draft Snap Grid"): snaps to the intersections of grid lines.

- ![](/images/Draft_Snap_WorkingPlane.svg) [Snap working plane](/Draft_Snap_WorkingPlane "Draft Snap WorkingPlane"): projects snap points onto the current [working plane](/Draft_SelectPlane "Draft SelectPlane").

- ![](/images/Draft_Snap_Dimensions.svg) [Snap dimensions](/Draft_Snap_Dimensions "Draft Snap Dimensions"): shows temporary X and Y dimensions.

- ![](/images/Draft_ToggleGrid.svg) [Toggle grid](/Draft_ToggleGrid "Draft ToggleGrid"): changes the visibility of the grid.

## Advanced snapping

- Additional snap points can be obtained by combining two snap options. For example combining [Draft Snap Ortho](/Draft_Snap_Ortho "Draft Snap Ortho") and [Draft Snap Extension](/Draft_Snap_Extension "Draft Snap Extension") will give you a snap point at the intersection of their imaginary lines.
- Snapping can be combined with [constraining](/Draft_Constrain "Draft Constrain").
- Press Q to insert a "hold point" at the current location of the cursor. You can snap to the orthogonal axes of hold points, and to the intersections of these axes. If the [Draft Snap Midpoint](/Draft_Snap_Midpoint "Draft Snap Midpoint") option is active, you can also snap to the midpoint between two hold points.
- Press ` one or more times to snap to an object that is obscured by other geometry. This is called "snap cycling". Note that you must move the cursor by a small amount in the [3D view](/3D_view "3D view") after pressing the key.

![](/images/Draft_Snap_example_cycling_1.png)

Snap cycling 1: The red rectangle was created first therefore it has snap priority. Without snap cycling you cannot snap to the green rectangle where it is overlapped by the red rectangle.

![](/images/Draft_Snap_example_cycling_2.png)

Snap cycling 2: After using the snap cycle key once the green rectangle receives snap priority. Snapping to the midpoint of the overlapped green edge is now possible.

## Notes

- Multiple snap options can be active at the same time, but it is advisable to only activate the snap options you really need. Activating too many can slow things down.
- 1.0 and below: It is not a good idea to have [Draft Snap Near](/Draft_Snap_Near "Draft Snap Near") permanently active as it takes precedence over many other snap options.
- [introduced in 1.1](/Release_notes_1.1 "Release notes 1.1"): Is is possible to have [Draft Snap Near](/Draft_Snap_Near "Draft Snap Near") permanently active, but it does mean you have to move the mouse more, and point the mouse more accurately, for other on-object snaps.

## Preferences

See also: [Preferences Editor](/Preferences_Editor "Preferences Editor") and [Draft Preferences](/Draft_Preferences "Draft Preferences").

- When a [Draft](/Draft_Workbench "Draft Workbench") or [BIM](/BIM_Workbench "BIM Workbench") command requiring point input is active, the maximum distance at which [Draft Snap Grid](/Draft_Snap_Grid "Draft Snap Grid") detects the intersections of grid lines can be changed on-the-fly by pressing P (increase key) or M (decrease key). This setting is stored: **Tools → Edit parameters... → BaseApp → Preferences → Mod → Draft → snapRange**. It can also be changed in the task panel of the [Draft SelectPlane](/Draft_SelectPlane "Draft SelectPlane") command.
- To only snap when the **Snap modifier** key is held down:
  - Deselect: **Edit → Preferences... → Draft → Grid and snapping → Always snap**.
  - The default **Snap modifier** key, Ctrl, can be changed: **Edit → Preferences... → Draft → Grid and snapping → Snap modifier**.
- To only show the Draft snap toolbar when a command is active select: **Edit → Preferences... → Draft → Interface → Only show the Draft snap toolbar during commands**. [introduced in 1.0](/Release_notes_1.0 "Release notes 1.0")
- The snap symbols can be changed: **Edit → Preferences... → Draft → Grid and snapping → Snap symbol style**.
- The color of the snap symbols and the dimensions of [Draft Snap Dimensions](/Draft_Snap_Dimensions "Draft Snap Dimensions") can be changed: **Edit → Preferences... → Draft → Grid and snapping → Snap symbol color**.
- The size of the snap symbols depends on: **Edit → Preferences... → Display → 3D View → Marker size**. [introduced in 1.0](/Release_notes_1.0 "Release notes 1.0")
- The mentioned single character keyboard shortcuts can be changed: **Edit → Preferences... → Draft → Interface → In-command shortcuts**.

Retrieved from "<http://wiki.freecad.org/index.php?title=Draft_Snap/en&oldid=1565081>"
