---
title: Sketcher Разделить ребро
---
|  |
| --- |
| Разделить ребро |
| Расположение в меню |
| Sketch → Геометрия эскиза → Разделить ребро |
| Верстаки |
| [Sketcher](/Sketcher_Workbench/ru "Sketcher Workbench/ru") |
| Быстрые клавиши |
| *Нет* |
| Представлено в версии |
| 0.20 |
| См. также |
| [Обрезать кривую](/Sketcher_Trimming/ru "Sketcher Trimming/ru") |
|  |

## Описание

Данный инструмент позволяет разделить ребро на две абсолютно одинаковые части, с сохранением большинства ограничений. Ограничения сохраняются для вновь созданных ребер, за исключением точки в которой произошло разделение. Окружность в случае её разделения, делится на дуги концы которых не связанны между собой, при этом ограничения которые имела окружность, переносятя на вновь созданные созданные дуги.

## Применение

See also: [Drawing aids](/Sketcher_Workbench#Drawing_aids "Sketcher Workbench").

1. Нажмите кнопку ![](/images/Sketcher_Split.svg) [Разделить](/Sketcher_Split "Sketcher Split"). Указатель мыши примет форму белого перекрестия с значком разделения.
2. Кликните на ребро в том месте, где вы хотите его разделить.
3. Ребра в форме линии или дуги будут поделены на два новых фрагмента, соединенных точкой в месте разделения. Окружность будет разделена на дуги с той же центральной точкой и другими ограничениями, которые были у исходной окружности.
4. Нажатие Esc или нажатие правой кнопки мыши завершит работу функции.

## Примечания

* A [Coincident](/Sketcher_ConstrainCoincident "Sketcher ConstrainCoincident") constraint is applied to the center points of new arcs.
* [Radius](/Sketcher_ConstrainRadius "Sketcher ConstrainRadius") and [Diameter](/Sketcher_ConstrainDiameter "Sketcher ConstrainDiameter") constraints are copied to new arcs (resulting in a redundancy).
* Coincident constraints and [Point on object](/Sketcher_ConstrainPointOnObject "Sketcher ConstrainPointOnObject") constraints are transferred to the closest new edge.
* [Horizontal](/Sketcher_ConstrainHorizontal "Sketcher ConstrainHorizontal") and [Vertical](/Sketcher_ConstrainVertical "Sketcher ConstrainVertical") constraints between points are transferred to the closest new edge.
* Horizontal and Vertical constraints attached to lines are copied to new line segments.
* [Parallel](/Sketcher_ConstrainParallel "Sketcher ConstrainParallel") and [Perpendicular](/Sketcher_ConstrainPerpendicular "Sketcher ConstrainPerpendicular") constraints are copied to new line segments, for new arcs they are only copied to the closest.
* [Horizontal distance](/Sketcher_ConstrainDistanceX "Sketcher ConstrainDistanceX"), [Vertical distance](/Sketcher_ConstrainDistanceY "Sketcher ConstrainDistanceY") and [Distance](/Sketcher_ConstrainDistance "Sketcher ConstrainDistance") constraints are transferred to the closest new edge.
* [Angle](/Sketcher_ConstrainAngle "Sketcher ConstrainAngle"), [Symmetric](/Sketcher_ConstrainSymmetric "Sketcher ConstrainSymmetric") and [Block](/Sketcher_ConstrainBlock "Sketcher ConstrainBlock") constraints are currently not transferred.

Retrieved from "<http://wiki.freecad.org/index.php?title=Sketcher_Split/ru&oldid=1397504>"