---
title: Draft Snap Near/ru
---
|  |
| --- |
| Draft Snap Near |
| Расположение в меню |
| Черчение → [Привязка](/Draft_Snap/ru "Draft Snap/ru") → Ближайшие |
| Верстаки |
| [Draft](/Draft_Workbench/ru "Draft Workbench/ru"), [Arch](/Arch_Workbench/ru "Arch Workbench/ru") |
| Быстрые клавиши |
| *Нет* |
| Представлено в версии |
| - |
| См. также |
| *Нет* |
|  |

## Description

The ![](/images/Draft_Snap_Near.svg) **Draft Snap Near** option snaps to the nearest point on faces and edges. The faces and edges can belong to [Draft](/Draft_Workbench "Draft Workbench") or [BIM](/BIM_Workbench "BIM Workbench") objects but also to objects created with other [workbenches](/Workbenches "Workbenches").

![](/images/Draft_Snap_Near_example.png)

Snapping the second point of a line to the nearest point on an edge

## Usage

For general information about snapping see [Draft Snap](/Draft_Snap "Draft Snap").

1. Make sure snapping is enabled. See ![](/images/Draft_Snap_Lock.svg) [Draft Snap Lock](/Draft_Snap_Lock "Draft Snap Lock").
2. If **Draft Snap Near** is not active do one of the following:
   * Press the ![](/images/Draft_Snap_Near.svg) [Snap near](/Draft_Snap_Near "Draft Snap Near") button in the Draft snap toolbar.
   * [Draft](/Draft_Workbench "Draft Workbench"): Hold down the ![](/images/Draft_Snap_Lock.svg)![](/images/Toolbar_flyout_arrow.svg) button in the [Draft snap widget](/Draft_snap_widget "Draft snap widget") and in the menu that opens select the **![](/images/Draft_Snap_Near.svg) Snap near** option.
   * [BIM](/BIM_Workbench "BIM Workbench"): Select the **Snapping → ![](/images/Draft_Snap_Near.svg) Snap near** option from the menu, or from the [3D view](/3D_view "3D view") context menu.
3. Choose a Draft or BIM command to create your geometry.
4. Note that you can also change snap options while a command is active.
5. Move the cursor over a face or edge.
6. The face or edge is highlighted.
7. If a nearest point is found the point is marked.
8. Optionally move the cursor along the face or edge to select a different nearest point.
9. Click to confirm the point.

## Notes

* 1.0 and below: It is not a good idea to have Draft Snap Near permanently active as it takes precedence over many other snap options.
* [introduced in 1.1](/Release_notes_1.1 "Release notes 1.1"): Is is possible to have Draft Snap Near permanently active, but it does mean you have to move the mouse more, and point the mouse more accurately, for other on-object snaps.

## Preferences

See [Draft Snap](/Draft_Snap#Preferences "Draft Snap").

Retrieved from "<http://wiki.freecad.org/index.php?title=Draft_Snap_Near/ru&oldid=1565070>"