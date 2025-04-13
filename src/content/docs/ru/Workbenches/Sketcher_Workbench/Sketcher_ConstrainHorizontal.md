---
title: Sketcher Ограничение горизонтальности
---
|  |
| --- |
| Ограничение горизонтальности |
| Расположение в меню |
| Sketch → Ограничения эскиза → Ограничение горизонтальности |
| Верстаки |
| [Sketcher](/Sketcher_Workbench/ru "Sketcher Workbench/ru") |
| Быстрые клавиши |
| H |
| Представлено в версии |
| - |
| См. также |
| [Ограничение вертикальности](/Sketcher_ConstrainVertical/ru "Sketcher ConstrainVertical/ru") |
|  |

## Описание

Горизонтальное ограничение заставляет выбранную линию или линии в эскизе быть параллельными горизонтальной оси эскиза.

[introduced in 1.0](/Release_notes_1.0 "Release notes 1.0"): In most cases it is advisable to use the combined [Sketcher ConstrainHorVer](/Sketcher_ConstrainHorVer "Sketcher ConstrainHorVer") tool instead.

## Применение

See also: [Drawing aids](/Sketcher_Workbench#Drawing_aids "Sketcher Workbench").

### [Continue mode](/Sketcher_Workbench#Continue_modes "Sketcher Workbench")

![](/images/HorizontalConstraint1.png)

Выберите отрезок на эскизе, кликнув по нему.

### Run-once mode

1. Do one of the following:
   * Select two or more points.
   * Select one or more lines. Points can be included in the selection, but will be ignored.
2. Invoke the tool as explained above, or with the following additional option:
   * [introduced in 1.0](/Release_notes_1.0 "Release notes 1.0"): Right-click in the [3D view](/3D_view "3D view") and select the **![](/images/Sketcher_ConstrainHorizontal.svg) Constrain horizontal** option from the context menu.
3. Depending on the selection one or more constraints are added.

## Программирование

```
Sketch.addConstraint(Sketcher.Constraint('Horizontal', Line))

```

The [Sketcher scripting](/Sketcher_scripting "Sketcher scripting") page explains the values which can be used for `Line` and contains further examples on how to create constraints from Python scripts.

Retrieved from "<http://wiki.freecad.org/index.php?title=Sketcher_ConstrainHorizontal/ru&oldid=1404935>"