---
title: Draft Snap WorkingPlane/ru
---
|  |
| --- |
| Draft Snap WorkingPlane |
| Расположение в меню |
| Черчение → [Привязка](/Draft_Snap/ru "Draft Snap/ru") → К рабочей плоскости |
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

Всегда помещает захваченную точку на текущую рабочую поверхность, даже если захвачена точка вне рабочей плоскости.

The ![](/images/Draft_Snap_WorkingPlane.svg) **Draft Snap WorkingPlane** option projects snap points onto the current [working plane](/Draft_SelectPlane "Draft SelectPlane"). It can only be used in combination with another snap option.

![](/images/Draft_Snap_WorkingPlane_example.png)

Snapping the second point of a line to the projected endpoint of an edge

### Использование

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

Retrieved from "<http://wiki.freecad.org/index.php?title=Draft_Snap_WorkingPlane/ru&oldid=1473474>"