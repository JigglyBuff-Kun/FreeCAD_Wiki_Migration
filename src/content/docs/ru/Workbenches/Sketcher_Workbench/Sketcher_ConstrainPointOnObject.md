---
title: Sketcher Ограничить точку на объекте
---
|  |
| --- |
| Ограничить точку на объекте |
| Расположение в меню |
| Sketch → Ограничения эскиза → Ограничить точку на объекте |
| Верстаки |
| [Sketcher](/Sketcher_Workbench/ru "Sketcher Workbench/ru") |
| Быстрые клавиши |
| O |
| Представлено в версии |
| - |
| См. также |
| [Ограничение пересечения](/Sketcher_ConstrainCoincident/ru "Sketcher ConstrainCoincident/ru") |
|  |

## Описание

Прикрепляет точку к таким объектам как: линия, дуга или ось эскиза.

[introduced in 1.0](/Release_notes_1.0 "Release notes 1.0"): This tool is replaced by the [Sketcher ConstrainCoincidentUnified](/Sketcher_ConstrainCoincidentUnified "Sketcher ConstrainCoincidentUnified") tool if the **Unify Coincident and PointOnObject** option is selected in the [preferences](/Sketcher_Preferences#General "Sketcher Preferences").

## Применение

See also: [Drawing aids](/Sketcher_Workbench#Drawing_aids "Sketcher Workbench").

### [Continue mode](/Sketcher_Workbench#Continue_modes "Sketcher Workbench")

1. Выделите точку, которую Вы хотите прикрепить к линии, дуге и так далее (**Результат:** выделенная точка становится зелёной).
2. Выделите линию, к которой Вы хотите прикрепить выделенную точку (**Результат:** выделенная точка становится зелёной).
   * Нажмите на панели инструментов кнопку ![](/images/Sketcher_ConstrainPointOnObject.svg) Зафиксировать точку на объекте.
   * Используйте клавиатурное сокращение Shift + O.
   * Используйте пункт верхнего меню **Sketch → Ограничения эскиза → Зафиксировать точку на объекте**.

### Run-once mode

1. Do one of the following:
   * Select a single point and a single edge (in any order).
   * Select several points and a single edge (idem).
   * Select a single point and several edges (idem).
2. Invoke the tool as explained above.
3. Depending on the selection one or more constraints are added.

## Программирование

Ограничения можно создавать с помощью [макросов](/Macros/ru "Macros/ru") и в консоли [Python](/Python/ru "Python/ru"), используя следующие команды:

`Sketch.addConstraint(Sketcher.Constraint('PointOnObject',LineMoving,PointOfLineMoving,LineFixed))`

* `Sketch` это объект эскиза.
* `LineMoving` это номер, обозначающий линию, содержащую точку, которая будет передвинута на `LineFixed` (линию, которая останется на месте).
* `PointOfLineMoving` это номер вершины линии `LineMoving`, которая будет передвинута на `LineFixed`.
* `LinedFixed` это номер линии, к которой будет прикреплена точка `PointOfLineMoving`.

Страница [Sketcher scripting](/Sketcher_scripting/ru "Sketcher scripting/ru") показывает, как узнать номер, определяющий линии и точки?

Retrieved from "<http://wiki.freecad.org/index.php?title=Sketcher_ConstrainPointOnObject/ru&oldid=1404888>"