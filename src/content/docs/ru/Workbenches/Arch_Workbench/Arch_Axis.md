---
title: Arch Axis/Архитектура Оси
---

:::caution
THIS COMMAND IS PART OF THE INTEGRATEDBIM WORKBENCHIN V1.0This page has been updated for that version.
:::

|                                                                                                    |
| -------------------------------------------------------------------------------------------------- |
| Arch Axis                                                                                          |
| Расположение в меню                                                                                |
| Arch → Axis                                                                                        |
| Верстаки                                                                                           |
| [Arch](/Arch_Workbench/ru "Arch Workbench/ru")                                                     |
| Быстрые клавиши                                                                                    |
| A X                                                                                                |
| Представлено в версии                                                                              |
| -                                                                                                  |
| См. также                                                                                          |
| [Axis System](/Arch_AxisSystem/ru "Arch AxisSystem/ru"), [Arch Grid](/Arch_Grid/ru "Arch Grid/ru") |
|                                                                                                    |

## Описание

Инструмент ![](/images/Arch_Axis.svg) [Arch Axis](/Arch_Axis "Arch Axis") позволяет разместить набор осей в текущем документе. Расстояние и угол между осями настраиваются, так же как и стиль нумерации. Главным образом Оси служат как объекты привязки, но так же могут использоваться совместно с инструментом ![](/images/Arch_Axis_System.svg) [Arch AxesSystems](/Arch_AxisSystem/ru "Arch AxisSystem/ru") и могут ссылаться на другие объекты Архитектуры для создания параметрических массивов, например балок или столбов. Вместо осей могут так же использоваться ![](/images/Arch_Grid.svg) [Arch Grids](/Arch_Grid/ru "Arch Grid/ru").

![](/images/Arch_Axis_example.jpg)

Два разных объекта осей расположены перпендикулярно друг другу для создания сетки

## Применение

1. Нажмите кнопку ![](/images/Arch_Axis.svg) Arch Axis, или сочетание клавиш A, затем X
2. [Передвиньте](/Draft_Move/ru "Draft Move/ru")/[Поверните](/Draft_Rotate/ru "Draft Rotate/ru") систему осей в нужное положение.
3. Войдите в режим редактирования, дважды кликнув по системе осей в дереве объектов, что бы настроить их параметры, такие как количество осей, расстояние и углы между осями.

## Опции

- Каждая ось в ряду имеет свое собственное расстояние и угол наклона относительно предыдущей оси. Это позволяет создавать очень сложные системы, такие как неортогональные системы, полярные системы или любые неравномерные системы
- Двойной клик по системе осей в дереве объектов позволяет редактировать расстояния, углы и метки каждой оси
- Длина осей, размер кружков и стиль нумерации настраиваются непосредственно через свойства системы осей
- Каждая ось может отображать метку, которая так же настраивается в диалоговом окне панели задач

## Свойства

- Данные**Length**: Длина осей
- Вид**Bubble Size**: Размер кружков осей
- Вид**Numeration style**: Как оси будут пронумерованы: 1,2,3, A,B,C, etc...
- Вид**Bubble Position**: В каком месте оси кружек будет располагаться: В начальной точке, в конечной, обоих или нигде.
- Вид**Font Name**: Шрифт отображающий номер в кружочке или/и метки
- Вид**Font Size**: Размер текстовых меток (размер текста в кружечках контролирует размер кружечков осей)
- Вид**Show Labels**: Включает/отключает отображение текстовых меток

## Use as section mark

By setting the **Bubble Position** property to **Arrow left/right** or **Bar left/right**, the axis will display a filled arrow or bar instead of the bubble, so it can be used as a section mark. [introduced in 0.20](/Release_notes_0.20 "Release notes 0.20")

## Scripting

## Скрипты

_См. так же:_ [Arch API](/Arch_API/ru "Arch API/ru") и [Основы скриптов FreeCAD](/FreeCAD_Scripting_Basics/ru "FreeCAD Scripting Basics/ru")

The Axis tool can be used in [macros](/Macros "Macros") and from the [Python](/Python "Python") console by using the following function:

```
Axes = makeAxis(num=5, size=1000, name="Axes")

```

- Creates an `Axes` object from the given number (`num`) of axes, and `size`, the interval between each axis.

Пример:

```
import Draft, Arch

Axes = Arch.makeAxis(5, 1000)

Axes.ViewObject.LineWidth = 3
Axes.ViewObject.BubbleSize = 200
Axes.ViewObject.FontSize = 150

Axes2 = Arch.makeAxis(6, 500)

Axes2.ViewObject.LineWidth = 2
Axes2.ViewObject.BubbleSize = 200
Axes2.ViewObject.FontSize = 150
Axes2.ViewObject.NumberingStyle = "A,B,C"
FreeCAD.ActiveDocument.recompute()

Axes2.Length = 6000
Draft.rotate(Axes2, -90)
Draft.move(Axes2, FreeCAD.Vector(-1000, 2500, 0))
FreeCAD.ActiveDocument.recompute()

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Arch_Axis/ru&oldid=1432764>"
