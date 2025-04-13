---
title: Sketcher "Соединить края"
---
:::caution
This tool is obsolete, it is not available in0.21 and above. UseSketcher ValidateSketchinstead.
:::

|  |
| --- |
| Соединить края |
| Расположение в меню |
| Sketch → Инструменты для эскиза → Соединить края |
| Верстаки |
| [Sketcher](/Sketcher_Workbench/ru "Sketcher Workbench/ru") |
| Быстрые клавиши |
| Ctrl+Shift+K |
| Представлено в версии |
| 0.15 |
| См. также |
| [Ограничить совпадение](/Sketcher_ConstrainCoincident/ru "Sketcher ConstrainCoincident/ru") |
|  |

## Описание

Applies [Coincident constraints](/Sketcher_ConstrainCoincident "Sketcher ConstrainCoincident") to endpoints with the same coordinates of the selected elements.

## Применение

1. Select the unconnected elements in the [3D view](/3D_view "3D view") or in the [Task panel](/Task_panel "Task panel") on the left side of the screen
2. Invoke the command using several methods:
   * Press the ![](/images/Sketcher_ConnectLines.svg) [Connect edges](/Sketcher_ConnectLines "Sketcher ConnectLines") button.
   * Use the Z then J keyboard shortcut.
   * Use the **Sketch → Sketcher tools → ![](/images/Sketcher_ConnectLines.svg) Connect edges** entry from the top menu.

## Примечания

Before using this command make sure that obvious constraints (horizontal, vertical, tangential) are already applied to the elements.
Selecting the elements in a counter-clock-wise order seems to produce better results.

Retrieved from "<http://wiki.freecad.org/index.php?title=Sketcher_ConnectLines/ru&oldid=1458211>"