---
title: Требования к эскизам верстака Sketcher
---
|  |
| --- |
| Руководство |
| Тема |
| Эскиз |
| Уровень |
| Новичок |
| Время для завершения |
|  |
| Авторы |
| [Maker](/User:Maker "User:Maker") |
| FreeCAD версия |
|  |
| Примеры файлов |
| *None* |
| Смотрите также |
| *None* |
|  |

## Минимальное требование к эскизу

Создание тела в рабочей среде PartDesign уже возможно и *только* с помощью замкнутой кривой (профиля). Полное определение всех их размеров и свойств (*полностью ограниченных*) пока не требуется.

Наличие замкнутой кривой не является самоочевидным и нераспознаваемым. При соединении дуги окружности с прямой линией, например, две конечные точки создаются только одна над другой. Для создания единой точки, которая фактически соединяет отрезок и дугу, необходимо использовать ограничение ![](/images/Constraint_PointOnPoint.svg) [Совпадение](/Sketcher_ConstrainCoincident/ru "Sketcher ConstrainCoincident/ru").

![](/images/Skizze2a.png)

Простой эскиз.
Слева: Кривая замкнута только в четырёх местах (красный цвет, автоматические ограничения при рисовании с помощью ![](/images/Sketcher_CreatePolyline.svg) [Полилинии](/Sketcher_CreatePolyline/ru "Sketcher CreatePolyline/ru")).
Середина: Предупреждение -... разорванная линия (разорванная кривая).
Справа: кривая замкнута в оставшихся четырех местах (зеленый цвет)

Однако последовательная параметрическая обработка означает, что эскиз полностью определен.

## Полное определение эскиза

Even a relatively simple sketch may contain dozens of indeterminacies (indicated in the combo view as a "degrees of freedom" number). To eliminate them together at the end is a relatively confusing task.

![](/images/Skizze4a.png)

A simple sketch; completely determined by 25 constraints, of which only 5 are dimension constraints.

This work is clearer and simpler if one immediately eliminates the "freedoms" of each added geometric element, i. this  *dimensions*  (that is, values for dimensions and placements). The provisional completeness is reached if all lines are displayed in green.

If one waits until the end of the drawing to determine, one finds remaining "freedoms" by touching the points and lines with the mouse pointer and determining where they are not yet fixed. When complete, the entire drawing is displayed in green.

If you accidentally create an "overmodulation", a warning appears in the combo-view asking you to undo the corresponding actions (constraints).

Retrieved from "<http://wiki.freecad.org/index.php?title=Sketcher_requirement_for_a_sketch/ru&oldid=1162274>"