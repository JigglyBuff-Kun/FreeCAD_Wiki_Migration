---
title: Centro
---
|  |
| --- |
| Draft Snap Center |
| Menu location |
| Snapping → Snap center |
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

The ![](/images/Draft_Snap_Center.svg) **Draft Snap Center** option snaps to the center point of faces and circular edges, and to the Dados**Placement** point of [Draft WorkingPlaneProxies](/Draft_WorkingPlaneProxy "Draft WorkingPlaneProxy") and [Arch BuildingParts](/Arch_BuildingPart "Arch BuildingPart"). The faces and edges can belong to [Draft](/Draft_Workbench "Draft Workbench") or [BIM](/BIM_Workbench "BIM Workbench") objects but also to objects created with other [workbenches](/Workbenches "Workbenches").

![](/images/Draft_Snap_Center_example_arc.png)

Snapping the second point of a line to the center of a circular edge

![](/images/Draft_Snap_Center_example_buildingpart.png)

Snapping the second point of a line to the Placement point of an Arch BuildingPart

## Utilização

For general information about snapping see [Draft Snap](/Draft_Snap "Draft Snap").

1. Make sure snapping is enabled. See ![](/images/Draft_Snap_Lock.svg) [Draft Snap Lock](/Draft_Snap_Lock "Draft Snap Lock").
2. If **Draft Snap Center** is not active do one of the following:
   * Press the ![](/images/Draft_Snap_Center.svg) [Snap center](/Draft_Snap_Center "Draft Snap Center") button in the Draft snap toolbar.
   * [Draft](/Draft_Workbench "Draft Workbench"): Hold down the ![](/images/Draft_Snap_Lock.svg)![](/images/Toolbar_flyout_arrow.svg) button in the [Draft snap widget](/Draft_snap_widget "Draft snap widget") and in the menu that opens select the **![](/images/Draft_Snap_Center.svg) Snap center** option.
   * [BIM](/BIM_Workbench "BIM Workbench"): Select the **Snapping → ![](/images/Draft_Snap_Center.svg) Snap center** option from the menu, or from the [3D view](/3D_view "3D view") context menu.
3. Choose a Draft or BIM command to create your geometry.
4. Note that you can also change snap options while a command is active.
5. Do one of the following:
   * To select the center point of a face or circular edge:
     + Move the cursor over the face or edge.
     + The face or edge is highlighted.
   * To select the Dados**Placement** point of a [Draft WorkingPlaneProxy](/Draft_WorkingPlaneProxy "Draft WorkingPlaneProxy"):
     + Move the cursor over any element of the working plane proxy.
     + The working plane proxy is not highlighted.
   * To select the Dados**Placement** point of an [Arch BuildingPart](/Arch_BuildingPart "Arch BuildingPart"):
     + Move the cursor over one of the edges of the small axis symbol of the BuildingPart, or over the text next to it that displays the Dados**Label** of the BuildingPart and its level.
     + Only the edges of the axis symbol are highlighted. The text is not highlighted.
6. If a point is found the point is marked and the ![](/images/Draft_Snap_Center.svg) icon is displayed near the cursor.
7. Click to confirm the point.

## Preferências

See [Draft Snap](/Draft_Snap#Preferences "Draft Snap").

Retrieved from "<http://wiki.freecad.org/index.php?title=Draft_Snap_Center/pt-br&oldid=1473371>"