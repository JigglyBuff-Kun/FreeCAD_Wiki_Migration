---
title: Скетчер Ограничение расстояния по горизонтали
---
|  |
| --- |
| Ограничение расстояния по горизонтали |
| Расположение в меню |
| Эскиз → Ограничения эскиза → Ограничение расстояния по горизонтали |
| Верстаки |
| [Скетчер](/Sketcher_Workbench/ru "Sketcher Workbench/ru") |
| Быстрые клавиши |
| Shift + H |
| Представлено в версии |
| - |
| См. также |
| [Скетчер Ограничение расстояния по вертикали](/Sketcher_ConstrainDistanceY/ru "Sketcher ConstrainDistanceY/ru"), [Скетчер Ограничение Расстояния](/Sketcher_ConstrainDistance/ru "Sketcher ConstrainDistance/ru") |
|  |

## Описание

Инструмент ![](/images/Sketcher_ConstrainDistanceX.svg) Ограничение расстояния по горизонтали
устанавливает горизонтальное расстояние между двумя точками или конечными точками линии. Если предварительно выбрана одна точка, расстояние определяется относительно начала эскиза.

![](/images/Constraint_H_Distance.png)

## Применение

Смотри также: [Вспомогательные инструменты рисования](/Sketcher_Workbench/ru#Drawing_aids "Sketcher Workbench/ru").

### [Непрерывный режим](/Sketcher_Workbench/ru#Continue_modes "Sketcher Workbench/ru")

1. Убедитесь в отсутствии выделения.
2. Есть несколько способов вызвать инструмент:
   * [представлено в версии 1.0](/Release_notes_1.0/ru "Release notes 1.0/ru"): Если в [настройках](/Sketcher_Preferences/ru#General "Sketcher Preferences/ru") **Ограничения размеров** установлено значение `Один инструмент` (по умолчанию): нажмите стрелку вниз справа от кнопки ![](/images/Sketcher_Dimension.svg)![](/images/Toolbar_flyout_arrow.svg) и выберите опцию **![](/images/Sketcher_ConstrainDistanceX.svg) Ограничить расстояние по горизонтали** из выпадающего списка.
   * Если эта настройка имеет другое значение (для версии 0.21 и ниже): нажмите кнопку ![](/images/Sketcher_ConstrainDistanceX.svg) Ограничение расстояния по горизонтали.
   * Выберитие в меню **Эскиз → Ограничения эскиза → ![](/images/Sketcher_ConstrainDistanceX.svg) Ограничение расстояния по горизонтали**.
   * [представлено в версии 1.0](/Release_notes_1.0/ru "Release notes 1.0/ru"): Щёлкните правой кнопкой мыши в [3D виже](/3D_view/ru "3D view/ru") и выберите из контекстного меню **Размер → ![](/images/Sketcher_ConstrainDistanceX.svg). Ограничение расстояния по горизонтали**.
   * Используйте сочетание клавиш: L.
3. Курсор изменится на перекрестье со значком инструмента.
4. Выполните одно из следующих действий:
   * Выберите две точки (одна из которых может быть началом координат).
   * Выберите одну линию.
5. Если [ограничение размера](/Sketcher_ToggleDrivingConstraint/ru "Sketcher ToggleDrivingConstraint/ru") создано, то в зависимости от [насторек](/Sketcher_Preferences/ru#Display "Sketcher Preferences/ru") открывается диалог для [редактирования значения этого размера](/Sketcher_Workbench/ru#Edit_constraints "Sketcher Workbench/ru").
6. Ограничение добавлено.
7. По желанию продолжайте создавать ограничения.
8. Чтобы закончить, щёлкните правой кнопкой мыши или нажмите Esc, или запустите другой инструмент для создания геометрии или ограничений.

### Режим однократного запуска

1. Выполните одно из следующих действий:
   * Выберите одну или две точки.
   * Выберите одну линию.
2. Вызовите инструмент, как описано выше.
3. По желанию [отредактируйте значение ограничения](/Sketcher_Workbench/ru#Edit_constraints "Sketcher Workbench/ru").
4. Ограничение добавлено.

## Написание скриптов

Расстояние от начала координат:

```
Sketch.addConstraint(Sketcher.Constraint('DistanceX', Edge, PointOfEdge, -1, 1, App.Units.Quantity('123.0 mm')))

```

Расстояние между двумя вершинами:

```
Sketch.addConstraint(Sketcher.Constraint('DistanceX', Edge1, PointOfEdge1, Edge2, PointOfEdge2, App.Units.Quantity('123.0 mm')))

```

Горизонтальный размер линии (графический интерфейс позволяет выбрать сам край, но это просто сокращение для использования двух крайних точек одной линии):

```
Sketch.addConstraint(Sketcher.Constraint('DistanceX', Line, 1, Line, 2, App.Units.Quantity('123.0 mm')))

```

На странице [написание скриптов в Скетчер](/Sketcher_scripting/ru "Sketcher scripting/ru") объясняются значения, которые можно использовать для `Edge`, `Edge1`, `Edge2`, `PointOfEdge`,  `PointOfEdge1`,  `PointOfEdge2` и `Line`, а также содержит дополнительные примеры создания ограничений с помощью скриптов Python.

Retrieved from "<http://wiki.freecad.org/index.php?title=Sketcher_ConstrainDistanceX/ru&oldid=1570818>"