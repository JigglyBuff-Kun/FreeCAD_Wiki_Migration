---
title: Скетчер Ограничение Расстояния
---
|  |
| --- |
| Скетчер Ограничение Расстояния |
| Расположение в меню |
| Sketch → Sketcher constraints → Constrain distance |
| Верстаки |
| [Скетчер](/Sketcher_Workbench/ru "Sketcher Workbench/ru") |
| Быстрые клавиши |
| K D |
| Представлено в версии |
| - |
| См. также |
| [Скетчер Ограничение расстояния по горизонтали](/Sketcher_ConstrainDistanceX/ru "Sketcher ConstrainDistanceX/ru"), [Скетчер Ограничение расстояния по вертикали](/Sketcher_ConstrainDistanceY/ru "Sketcher ConstrainDistanceY/ru") |
|  |

## Описание

Инструмент ![](/images/Sketcher_ConstrainDistance.svg) Ограничение Расстояния фиксирует длину линии, расстояние между двумя точками, расстояние по перпендикуляру между точкой и линией; или, [представлено в версии 0.21](/Release_notes_0.21/ru "Release notes 0.21/ru"), расстояние между краями двух окружностей или дуг, или между краем окружности или дуги и линией; или, [представлено в версии 1.0](/Release_notes_1.0/ru "Release notes 1.0/ru"), длину дуги.

![](/images/Sketcher_ConstrainDistance_example.png)

## Применение

Смотри также: [Вспомогательные инструменты рисования](/Sketcher_Workbench/ru#Drawing_aids "Sketcher Workbench/ru").

### [Непрерывный режим](/Sketcher_Workbench/ru#Continue_modes "Sketcher Workbench/ru")

1. Убедитесь в отсутствии выделения.
2. Есть несколько способов вызвать инструмент:
   * [представлено в версии 1.0](/Release_notes_1.0/ru "Release notes 1.0/ru"): Если в [настройках](/Sketcher_Preferences/ru#General "Sketcher Preferences/ru") **Ограничения размеров** установлено значение `Один инструмент` (по умолчанию): нажмите стрелку вниз справа от кнопки ![](/images/Sketcher_Dimension.svg)![](/images/Toolbar_flyout_arrow.svg) и выберите опцию **![](/images/Sketcher_ConstrainDistance.svg) Ограничение расстояния** из выпадающего списка.
   * Если эта настройка имеет другое значение (для версии 0.21 и ниже): нажмите кнопку ![](/images/Sketcher_ConstrainDistance.svg) Ограничение расстояния.
   * Выберите в меню **Эскиз → Ограничения эскиза → ![](/images/Sketcher_ConstrainDistance.svg) Ограничение расстояния**.
   * [представлено в версии 1.0](/Release_notes_1.0/ru "Release notes 1.0/ru"): Щёлкните правой кнопкой мыши в [3D виже](/3D_view/ru "3D view/ru") и выберите из контекстного меню **Размер → ![](/images/Sketcher_ConstrainDistance.svg). Ограничение расстояния**.
   * Используйте сочетание клавиш: нажмите K, а затем сразу D.
3. Курсор изменится на перекрестье со значком инструмента.
4. Выполните одно из следующих действий:
   * Выберите одну линию.
   * Выберите две точки.
   * Выберите точку и линию (именно в таком порядке).
5. Если [ограничение размера](/Sketcher_ToggleDrivingConstraint/ru "Sketcher ToggleDrivingConstraint/ru") создано, то в зависимости от [насторек](/Sketcher_Preferences/ru#Display "Sketcher Preferences/ru") открывается диалог для [редактирования значения этого размера](/Sketcher_Workbench/ru#Edit_constraints "Sketcher Workbench/ru").
6. Ограничение добавлено.
7. По желанию продолжайте создавать ограничения.
8. Чтобы закончить, щёлкните правой кнопкой мыши или нажмите Esc, или запустите другой инструмент для создания геометрии или ограничений.

### Режим однократного запуска

1. Выполните одно из следующих действий:
   * Выберите одну линию.
   * Выберите две точки.
   * Выберите точку и линию (в любом порядке).
   * Выберите края двух окружностей или дуг.
   * Выберите край окружности или дуги и линию (в любом порядке).
   * [представлено в версии 1.0](/Release_notes_1.0/ru "Release notes 1.0/ru"): Выделение края одной дуги.
2. Вызовите инструмент, как описано выше.
3. При необходимости [отредактируйте значение размера](/Sketcher_Workbench/ru#Edit_constraints "Sketcher Workbench/ru").
4. Ограничение добавлено.

## Примечания

* Если это возможно, пожалуйста, используйте ограничения [Расстояния по горизонтали](/Sketcher_ConstrainDistanceX/ru "Sketcher ConstrainDistanceX/ru") или [Расстояние по вертикали](/Sketcher_ConstrainDistanceY/ru "Sketcher ConstrainDistanceY/ru"). Они более эффективны.

## Написание скриптов

Расстояние от начала координат:

```
Sketch.addConstraint(Sketcher.Constraint('Distance', Edge, PointOfEdge, -1, 1, App.Units.Quantity('123.0 mm')))

```

Расстояние между двумя вершинами:

```
Sketch.addConstraint(Sketcher.Constraint('Distance', Edge1, PointOfEdge1, Edge2, PointOfEdge2, App.Units.Quantity('123.0 mm')))

```

Длина линии (графический интерфейс позволяет выбрать само ребро, но это просто краткая инструкция для использования двух крайних точек одной линии):

```
Sketch.addConstraint(Sketcher.Constraint('Distance', Line, 1, Line, 2, App.Units.Quantity('123.0 mm')))

```

Расстояние от точки (`Edge, PointOfEdge`) до точки перпендикуляра на прямой (`Line`):

```
Sketch.addConstraint(Sketcher.Constraint('Distance', Edge, PointOfEdge, Line, 0, App.Units.Quantity('123.0 mm')))

```

Расстояние между рёбрами двух окружностей:

```
Sketch.addConstraint(Sketcher.Constraint('Distance', Circle1, 0, Circle2, 0, App.Units.Quantity('123.0 mm')))

```

На странице [написание скриптов в Скетчер](/Sketcher_scripting/ru "Sketcher scripting/ru") объясняются значения, которые можно использовать для `Edge`, `Edge1`, `Edge2`, `PointOfEdge`, `PointOfEdge1`, `PointOfEdge2`, `Line`, `Circle1` и `Circle2`, а также содержит дополнительные примеры создания ограничений с помощью скриптов Python.

Retrieved from "<http://wiki.freecad.org/index.php?title=Sketcher_ConstrainDistance/ru&oldid=1570838>"