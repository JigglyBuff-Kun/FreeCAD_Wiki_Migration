---
title: Arch Труба
---
:::caution
THIS COMMAND IS PART OF THE INTEGRATEDBIM WORKBENCHIN V1.0This page has been updated for that version.
:::

|  |
| --- |
| Труба |
| Расположение в меню |
| Arch → Инструменты для труб → Труба |
| Верстаки |
| [Arch](/Arch_Workbench/ru "Arch Workbench/ru") |
| Быстрые клавиши |
| P I |
| Представлено в версии |
| 0.17 |
| См. также |
| [Соединитель труб](/Arch_PipeConnector/ru "Arch PipeConnector/ru"), [Оборудование](/Arch_Equipment/ru "Arch Equipment/ru") |
|  |

## Описание

Этот инструмент позволяет создавать трубы с нуля или из выбранных объектов. Выбранные объекты должны быть основами деталей (Draft, Sketch, и дт..) и содержать одну и только одну незамкнутую линию.

## Применение

1. При необходимости выберите линейную фигуру в верстаке [Деталь](/Part_Workbench/ru "Part Workbench/ru"), например [Линия](/Draft_Line/ru "Draft Line/ru"), [Кривая](/Draft_Wire/ru "Draft Wire/ru") или  [Эскиз](/Sketcher_NewSketch/ru "Sketcher NewSketch/ru").
2. Нажмите кнопку  ![](/images/Arch_Pipe.svg) Труба или нажмите клавиши P, а затем I.

## Параметры

## Свойства

An Arch Pipe object shares the common properties and behaviors of all [Arch Components](/Arch_Component "Arch Component").

### Data

Component

* Данные**Base** (`Link`): The base wire of this pipe, if any.

For the other properties in the group see [Arch Component](/Arch_Component#Properties "Arch Component").

Pipe

* Данные**Length**: Задает длину данной трубы, когда она не основана на кривой
* Данные**Diameter**: Диаметр данной трубы, когда она основана не на профиле
* Данные**Base**: Базовая кривая данной трубы, если есть
* Данные**Profile**: Базовый профиль данной трубы. Если не задан, труба будет цилиндрическая.

## Процесс создания

* Начните с размещения предметов сантехники/гидравлики (ниже указано пошагово). Вы переводите эти объекты в Оборудование, выбирая их и нажимая кнопку [Оборудование](/Arch_Equipment/ru "Arch Equipment/ru").

![](/images/Arch_pipe_example_01.jpg)

* Теперь Оборудование имеет новое свойство **SnapPoints**, представляющее собой список трехмерных векторов. Это позволяет добавлять пользовательские точки привязки, к которым вы можете привязываться, когда включена кнопка привязки [Специальные](/Draft_Snap_Special/ru "Draft Snap Special/ru"). В настоящее время это свойство доступно только для Python. В приведенном выше примере я добавил новую точку привязки на выходе устройства wc. Внутренние векторы Точек Привязки отображаются на модели в виде белых точек:

```
FreeCAD.ActiveDocument.Equipment.SnapPoints=[FreeCAD.Vector(0,0,100)]

```

![](/images/Arch_pipe_example_02.jpg)

* Теперь к ["Специальными"](/Draft_Snap_Special/ru "Draft Snap Special/ru") точками привязки вы можете привязаться:

![](/images/Arch_pipe_example_03.jpg)

* Теперь мы можем нарисовать наш трубопровод, используя Линии, Кривы, или Эскизы. Однако лучше всего использовать только Линии:

![](/images/Arch_pipe_example_04.jpg)

* Теперь появился новый инструмент [Наклон](/Draft_Slope/ru "Draft Slope/ru"), который позволяет изменять наклон Линий, например, до 5% (0,05). Таким образом, мы можем быстро дать нашим линиям правильный уклон. Этот инструмент изменяет только координаты z, поэтому нам нужно только привязать их друг к другу, верхняя проекция останется неизменной.

![](/images/Arch_pipe_example_05.jpg)

* Теперь нам нужно только выбрать все наши линии и нажать кнопку Труба. Инструмент Труба работает с любыми основами Деталей, которые содержат одну и только одну незамкнутую линию (или кривую).

![](/images/Arch_pipe_example_06.jpg)

* Теперь мы можем создавать соединения, выбирая 2 или 3 соединенные трубы и нажимая кнопку [Соединитель Труб](/Arch_PipeConnector "Arch PipeConnector"). Если выбраны 3 трубы, две из них должны быть выровнены, чтобы создать элемент тройника:

![](/images/Arch_pipe_example_07.jpg)

* Изменение радиуса соединений не меняет длину базовой линии, а только результирующую трубу (путем изменения их свойства OffsetStart или OffsetEnd). Таким образом, вы можете нарисовать макет вашей линии только с помощью прямых линий, не заботясь о кривых и радиусах.

Также возможно создать Трубы без базовой линии, в этом случае используйте свойство «Length» для задания длины.

## Scripting

## Программирование

*Смотрите так же:* [Arch API](/Arch_API/ru "Arch API/ru") и [Основы составления скриптов в FreeCAD](/FreeCAD_Scripting_Basics/ru "FreeCAD Scripting Basics/ru").

Инструмент Труба можно использовать в [макросах](/Macros/ru "Macros/ru") и в консоли [Python](/Python "Python"), используя следующую функцию:

```
pipe = makePipe(baseobj=None, diameter=0, length=0, placement=None, name="Pipe")

```

* Creates a `pipe` object from the given `baseobj` and `diameter`.
  + `baseobj` is a [Draft Line](/Draft_Line "Draft Line") or [Draft Wire](/Draft_Wire "Draft Wire").
  + If `baseobj` is omitted, a straight pipe can be created with just the `diameter` and the `length` in the Z direction.
* If a `placement` is given, it is used.

```
import Draft, Arch

p1 = FreeCAD.Vector(1000, 0, 0)
p2 = FreeCAD.Vector(2500, 200, 0)
p3 = FreeCAD.Vector(3100, 1000, 0)
p4 = FreeCAD.Vector(3500, 500, 0)
line = Draft.make_wire([p1, p2, p3, p4])

pipe = Arch.makePipe(line, 200)
FreeCAD.ActiveDocument.recompute()

pipe2 = Arch.makePipe(diameter=120, length=3000)
FreeCAD.ActiveDocument.recompute()

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Arch_Pipe/ru&oldid=1539708>"