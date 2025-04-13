---
title: Draft WorkingPlane
---
|  |
| --- |
| Draft Snap WorkingPlane |
| Menu location |
| Draft → [Snap](/Draft_Snap "Draft Snap") → WorkingPlane |
| Workbenches |
| [Draft](/Draft_Workbench "Draft Workbench"), [Arch](/Arch_Workbench "Arch Workbench") |
| Default shortcut |
| *None* |
| Introduced in version |
| - |
| See also |
| *None* |
|  |

## Descriere

Modul Snap care pune întotdeauna punctul de ancorare pe planul curent [working plane](/Draft_SelectPlane "Draft SelectPlane"), chiar dacă faceți ancorarea pe un punct în afara planului de lucru.

![](/images/Draft_Snap_WorkingPlane_example.png)

Snapping the second point of a line to the projected endpoint of an edge

## Utilizare

For general information about snapping see [Draft Snap](/Draft_Snap "Draft Snap").

1. Optionally change the [working plane](/Draft_SelectPlane "Draft SelectPlane").
2. Make sure snapping is enabled. See ![](/images/Draft_Snap_Lock.svg) [Draft Snap Lock](/Draft_Snap_Lock "Draft Snap Lock").
3. If **Draft Snap WorkingPlane** is not active do one of the following:
   * Press the ![](/images/Draft_Snap_WorkingPlane.svg) [Snap working plane](/Draft_Snap_WorkingPlane "Draft Snap WorkingPlane") button in the Draft snap toolbar.
   * [Draft](/Draft_Workbench "Draft Workbench"): Press the ![](/images/Draft_Snap_WorkingPlane.svg) [Snap working plane](/Draft_Snap_WorkingPlane "Draft Snap WorkingPlane") button in the [Draft snap widget](/Draft_snap_widget "Draft snap widget").
   * [BIM](/BIM_Workbench "BIM Workbench"): Select the **Snapping → ![](/images/Draft_Snap_WorkingPlane.svg) Snap working plane** option from the menu, or from the [3D view](/3D_view "3D view") context menu.
4. Make sure at least one other snap option is active.
5. Choose a Draft or BIM command to create your geometry.
6. Note that you can also change snap options while a command is active.
7. Move the cursor over the object you want to snap to.
8. The object is highlighted.
9. If a snap point is found it is projected onto the [working plane](/Draft_SelectPlane "Draft SelectPlane") where it is marked.
10. Click to confirm the point.

## Preferences

See [Draft Snap](/Draft_Snap#Preferences "Draft Snap").

Retrieved from "<http://wiki.freecad.org/index.php?title=Draft_Snap_WorkingPlane/ro&oldid=1473473>"