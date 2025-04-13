---
title: Paralelo
---
|  |
| --- |
| Draft Snap Parallel |
| Menu location |
| Snapping → Snap parallel |
| Workbenches |
| [Draft](/Draft_Workbench "Draft Workbench"), [BIM](/BIM_Workbench "BIM Workbench") |
| Default shortcut |
| *None* |
| Introduced in version |
| - |
| See also |
| [Draft Snap](/Draft_Snap "Draft Snap"), [Draft Snap Lock](/Draft_Snap_Lock "Draft Snap Lock") |
|  |

## Descrição

The ![](/images/Draft_Snap_Parallel.svg) **Draft Snap Parallel** option snaps to an imaginary line parallel to straight edges. The edges can belong to [Draft](/Draft_Workbench "Draft Workbench") or [BIM](/BIM_Workbench "BIM Workbench") objects but also to objects created with other [workbenches](/Workbenches "Workbenches").

Up to 8 edges can be referenced by this snap option and [Draft Snap Extension](/Draft_Snap_Extension "Draft Snap Extension"), making it possible to snap to virtual intersections. Both snap options can also be combined with other snap options.

![](/images/Draft_Snap_Parallel_example.png)

Snapping the second point of a line to an invisible line that is parallel to an edge

## Utilização

For general information about snapping see [Draft Snap](/Draft_Snap "Draft Snap").

1. Make sure snapping is enabled. See ![](/images/Draft_Snap_Lock.svg) [Draft Snap Lock](/Draft_Snap_Lock "Draft Snap Lock").
2. If **Draft Snap Parallel** is not active do one of the following:
   * Press the ![](/images/Draft_Snap_Parallel.svg) [Snap parallel](/Draft_Snap_Parallel "Draft Snap Parallel") button in the Draft snap toolbar.
   * [Draft](/Draft_Workbench "Draft Workbench"): Hold down the ![](/images/Draft_Snap_Lock.svg)![](/images/Toolbar_flyout_arrow.svg) button in the [Draft snap widget](/Draft_snap_widget "Draft snap widget") and in the menu that opens select the **![](/images/Draft_Snap_Parallel.svg) Snap parallel** option.
   * [BIM](/BIM_Workbench "BIM Workbench"): Select the **Snapping → ![](/images/Draft_Snap_Parallel.svg) Snap parallel** option from the menu, or from the [3D view](/3D_view "3D view") context menu.
3. Choose a Draft or BIM command to create your geometry.
4. Note that you can also change snap options while a command is active.
5. Pick a first point. This snap option requires a previous point. The parallel snap line will pass through this point.
6. Move the cursor over a straight edge.
7. The edge is highlighted.
8. If you now move the cursor around the previous point you will notice a "magnetic" effect when the cursor is on the parallel snap line.
9. The point is marked and the ![](/images/Draft_Snap_Parallel.svg) icon is displayed near the cursor.
10. Click to confirm the point.

## Preferências

See [Draft Snap](/Draft_Snap#Preferences "Draft Snap").

Retrieved from "<http://wiki.freecad.org/index.php?title=Draft_Snap_Parallel/pt-br&oldid=1513560>"