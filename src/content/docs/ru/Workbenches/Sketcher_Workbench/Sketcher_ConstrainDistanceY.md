---
title: Скетчер Ограничение расстояния по вертикали
---
|  |
| --- |
| Скетчер Ограничение расстояния по вертикали |
| Расположение в меню |
| Эскиз → Ограничения эскиза → Ограничение расстояния по вертикали |
| Верстаки |
| [Скетчер](/Sketcher_Workbench/ru "Sketcher Workbench/ru") |
| Быстрые клавиши |
| I |
| Представлено в версии |
| - |
| См. также |
| [Скетчер Ограничение расстояния по горизонтали](/Sketcher_ConstrainDistanceX/ru "Sketcher ConstrainDistanceX/ru"), [Скетчер Размер](/Sketcher_ConstrainDistance/ru "Sketcher ConstrainDistance/ru") |
|  |

## Описание

Инструмент ![](/images/Sketcher_ConstrainDistanceY.svg) Ограничение расстояния по вертикали
устанавливает вертикальное расстояние между двумя точками или конечными точками линии. Если предварительно выбрана одна точка, расстояние определяется относительно начала эскиза.

![](/images/Sketcher_ConstraintDistanceY_example.png)

## Применение

Смотри также: [Вспомогательные инструменты рисования](/Sketcher_Workbench/ru#Drawing_aids "Sketcher Workbench/ru").

### [Непрерывный режим](/Sketcher_Workbench/ru#Continue_modes "Sketcher Workbench/ru")

1. Убедитесь в отсутствии выделения.
2. Есть несколько способов вызвать инструмент:

1. * [представлено в версии 1.0](/Release_notes_1.0/ru "Release notes 1.0/ru"): Если в [настройках](/Sketcher_Preferences/ru#General "Sketcher Preferences/ru") **Ограничения размеров** установлено значение `Один инструмент` (по умолчанию): нажмите стрелку вниз справа от кнопки ![](/images/Sketcher_Dimension.svg)![](/images/Toolbar_flyout_arrow.svg) и выберите опцию **![](/images/Sketcher_ConstrainDistanceY.svg) Ограничить расстояние по вертикали** из выпадающего списка.
   * Если эта настройка имеет другое значение (для версии 0.21 и ниже): нажмите кнопку ![](/images/Sketcher_ConstrainDistanceY.svg) Ограничение расстояния по вертикали.
   * Выберите в меню **Эскиз → Ограничения эскиза → ![](/images/Sketcher_ConstrainDistanceY.svg) Ограничение расстояния по вертикали**.
   * [представлено в версии 1.0](/Release_notes_1.0/ru "Release notes 1.0/ru"): Щёлкните правой кнопкой мыши в [3D виже](/3D_view/ru "3D view/ru") и выберите из контекстного меню **Размер → ![](/images/Sketcher_ConstrainDistanceY.svg). Ограничение расстояния по вертикали**.
   * Используйте сочетание клавиш: I.
2. Для дальнейших шагов смотрите [Ограничение расстояния по горизонтали](/Sketcher_ConstrainDistanceX/ru#Continue_mode "Sketcher ConstrainDistanceX/ru").

### Режим однократного запуска

Смотри [Ограничение расстояния по горизонтали](/Sketcher_ConstrainDistanceX/ru#Run-once_mode "Sketcher ConstrainDistanceX/ru").

## Написание скриптов

Расстояние от начала координат:

```
Sketch.addConstraint(Sketcher.Constraint('DistanceY', Edge, PointOfEdge, -1, 1, App.Units.Quantity('123.0 mm')))

```

Расстояние между двумя вершинами:

```
Sketch.addConstraint(Sketcher.Constraint('DistanceY', Edge1, PointOfEdge1, Edge2, PointOfEdge2, App.Units.Quantity('123.0 mm')))

```

Вертикальный размер линии (графический интерфейс позволяет выбрать сам край, но это просто сокращение для использования двух крайних точек одной линии):

```
Sketch.addConstraint(Sketcher.Constraint('DistanceY', Line, 1, Line, 2, App.Units.Quantity('123.0 mm')))

```

На странице [написание скриптов в Скетчер](/Sketcher_scripting/ru "Sketcher scripting/ru") объясняются значения, которые можно использовать для `Edge`, `Edge1`, `Edge2`, `PointOfEdge`,  `PointOfEdge1`,  `PointOfEdge2` и `Line`, а также содержит дополнительные примеры создания ограничений с помощью скриптов Python.

Retrieved from "<http://wiki.freecad.org/index.php?title=Sketcher_ConstrainDistanceY/ru&oldid=1570812>"