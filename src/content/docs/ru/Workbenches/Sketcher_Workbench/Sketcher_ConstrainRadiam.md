---
title: Скетчер Ограничение радиуса/диаметра автоматически
---
|  |
| --- |
| Скетчер Ограничение радиуса/диаметра автоматически |
| Расположение в меню |
| Эскиз → Ограничения эскиза → Ограничение радиуса/диаметра автоматически |
| Верстаки |
| [Скетчер](/Sketcher_Workbench/ru "Sketcher Workbench/ru") |
| Быстрые клавиши |
| K S |
| Представлено в версии |
| 0.20 |
| См. также |
| [Скетчер Ограничение Радиуса](/Sketcher_ConstrainRadius/ru "Sketcher ConstrainRadius/ru"), [Скетчер Ограничение Диаметра](/Sketcher_ConstrainDiameter/ru "Sketcher ConstrainDiameter/ru") |
|  |

## Описание

Инструмент ![](/images/Sketcher_ConstrainRadiam.svg) Ограничение радиуса/диаметра автоматически фиксирует радиус дуг и [Вес окружностей B-сплайна](/Sketcher_CreateBSpline/ru#Notes "Sketcher CreateBSpline/ru"), а также диаметр окружностей.

## Применение

Смотри также: [Вспомогательные инструменты рисования](/Sketcher_Workbench/ru#Drawing_aids "Sketcher Workbench/ru").

### [Непрерывный режим](/Sketcher_Workbench/ru#Continue_modes "Sketcher Workbench/ru")

1. Убедитесь в отсутствии выделения.
2. Есть несколько способов вызвать инструмент:
   * [представлено в версии 1.0](/Release_notes_1.0/ru "Release notes 1.0/ru"): Если в [настройках](/Sketcher_Preferences/ru#General "Sketcher Preferences/ru") **Ограничения размеров** установлено значение `Один инструмент` (по умолчанию): нажмите стрелку вниз справа от кнопки ![](/images/Sketcher_Dimension.svg)![](/images/Toolbar_flyout_arrow.svg) и выберите опцию **![](/images/Sketcher_ConstrainRadiam.svg) Ограничение радиуса/диаметра автоматически** из выпадающего списка.
   * Если эта настройка имеет другое значение (для версии 0.21 и ниже): нажмите кнопку ![](/images/Sketcher_ConstrainRadiam.svg) Ограничение радиуса/диаметра автоматически.
   * Выберите в меню **Эскиз → Ограничения эскиза → ![](/images/Sketcher_ConstrainRadiam.svg)Ограничение радиуса/диаметра автоматически**.
   * [представлено в версии 1.0](/Release_notes_1.0/ru "Release notes 1.0/ru"): Щёлкните правой кнопкой мыши в [3D виже](/3D_view/ru "3D view/ru") и выберите из контекстного меню **Размер → ![](/images/Sketcher_ConstrainRadiam.svg)Ограничение радиуса/диаметра автоматически**.
   * Используйте сочетание клавиш: нажмите K, а затем сразу S.
3. Курсор изменится на перекрестье со значком инструмента.
4. Выполните одно из следующих действий:
   * Выберите ребро окружности или дуги.
   * Выберите ребро весового круга B-сплайна.
5. Если [ограничение размера](/Sketcher_ToggleDrivingConstraint/ru "Sketcher ToggleDrivingConstraint/ru") создано, то в зависимости от [насторек](/Sketcher_Preferences/ru#Display "Sketcher Preferences/ru") открывается диалог для [редактирования значения этого размера](/Sketcher_Workbench/ru#Edit_constraints "Sketcher Workbench/ru").
6. Ограничение добавлено.
7. По желанию продолжайте создавать ограничения.
8. Чтобы закончить, щёлкните правой кнопкой мыши или нажмите Esc, или запустите другой инструмент для создания геометрии или ограничений.

### Режим однократного запуска

1. Выполните одно из следующих действий:
   * Выберите ребро одной или нескольких окружностей или дуг.
   * Выберите ребро одной или нескольких окружностей с весом B-сплайна.
2. Вызовите инструмент, как описано выше.
3. При необходимости [отредактируйте значение размера](/Sketcher_Workbench/ru#Edit_constraints "Sketcher Workbench/ru").
4. В зависимости от выбора добавляется одно или несколько ограничений, см.  [Примечания](#Notes).

## Примечания

* Если создано [основное ограничение](/Sketcher_ToggleDrivingConstraint/ru "Sketcher ToggleDrivingConstraint/ru") и предварительно выбрано несколько элементов, не являющихся [внешней геометрией](/Sketcher_External/ru "Sketcher External/ru"), то только первый из них получит ограничение размера, а между первым и остальными элементами будут применены [Ограничение эквивалентностью (равенства)](/Sketcher_ConstrainEqual/ru "Sketcher ConstrainEqual/ru").

## Написание скриптов

```
Sketch.addConstraint(Sketcher.Constraint('Radius', ArcOrCircle, App.Units.Quantity('123.0 mm')))
Sketch.addConstraint(Sketcher.Constraint('Diameter', ArcOrCircle, App.Units.Quantity('246.0 mm')))

```

На странице [написание скриптов в Скетчер](/Sketcher_scripting/ru "Sketcher scripting/ru") объясняются значения, которые можно использовать для `ArcOrCircle`, и приводятся дополнительные примеры создания ограничений c помощью скриптов Python.

Retrieved from "<http://wiki.freecad.org/index.php?title=Sketcher_ConstrainRadiam/ru&oldid=1570909>"