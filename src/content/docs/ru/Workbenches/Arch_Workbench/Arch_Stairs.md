---
title: Arch Лестница
---
:::caution
THIS COMMAND IS PART OF THE INTEGRATEDBIM WORKBENCHIN V1.0This page has been updated for that version.
:::

|  |
| --- |
| Лестница |
| Расположение в меню |
| Arch → Лестница |
| Верстаки |
| [Arch](/Arch_Workbench/ru "Arch Workbench/ru") |
| Быстрые клавиши |
| S R |
| Представлено в версии |
| 0.14 |
| См. также |
| [Структура](/Arch_Structure/ru "Arch Structure/ru"), [Оборудование](/Arch_Equipment/ru "Arch Equipment/ru") |
|  |

## Описание

Инструмент Лестница позволяет автоматически создавать несколько типов лестниц. инструмент позволяет автоматически создавать несколько типов лестниц. На данный момент поддерживаются только прямые лестницы (лестничной площадкой или без нее). Лестница может быть построена с нуля или вдоль [Линии (верстак Draft)](/Draft_Line/ru "Draft Line/ru"). Если линия не горизонтальна, а имеет наклон по вертикали, лестница также будет иметь наклон.

Смотрите [статью о лестницах на википедии](https://en.wikipedia.org/wiki/Stairs) для определения значения различных терминов, используемых при описании частей лестницы.

![](/images/Arch_Stairs_example.jpg)

Изображение двух сконструированных лестниц, одна с массивной конструкцией и лестничной площадкой, а другая с одним косоуром.

## Опции

## Применение

1. Нажмите кнопку ![](/images/Arch_Stairs.svg) [Лестница](/Arch_Stairs "Arch Stairs") или нажмите клавиши S, R.
2. Настройте нужные свойства. Некоторые части лестницы, такие как конструкция, могут изначально отсутствовать, если какое-либо из свойств делает это невозможным, например, толщина конструкции равна 0.

![](/images/Stairs_and_Landing_02.png)

![](/images/Stairs_and_Landing_01.png)

![](/images/Arch_Stairs_Complex_Example.png)

Complex stairs based on a selection of lines and wired as shown on the left.  
In red the wires used for the landings at Z=1500mm, Z=3000mm and Z=4500mm.  
In black the lines connecting them used for the flights.

## Свойства

An Arch Stairs object shares the common properties and behaviors of all [Arch Components](/Arch_Component "Arch Component").

### Данные

Segment and Parts

* Данные**Abs Top** (`Vector`): (read-only) The absolute top level the stairs lead to.
* Данные**Last Segment** (`Link`): Last segment (flight or landing) of an Arch Stairs connecting to this segment. The start level of the stairs will be the end level of this last segment.
* Данные**Outline Left** (`VectorList`): The left outline of the stairs (read-only).
* Данные**Outline Left All** (`VectorList`): The left outline of all segments of the stairs (read-only).
* Данные**Outline Right** (`VectorList`): The right outline of the stairs (read-only).
* Данные**Outline Right All** (`VectorList`): The right outline of all segments of the stairs (read-only).
* Данные**Railing Height Left** (`Length`): Height of the left railing of the stairs or landing.
* Данные**Railing Height Right** (`Length`): Height of the right railing of the stairs or landing.
* Данные**Railing Left** (`LinkHidden`): The left railing object. [introduced in 0.20](/Release_notes_0.20 "Release notes 0.20"): Property type updated from `String` to `LinkHidden`.
* Данные**Railing Offset Left** (`Length`): Offset of the left railing from the edge of the stairs or landing.
* Данные**Railing Offset Right** (`Length`): Offset of the right railing from the edge of the stairs or landing.
* Данные**Railing Right** (`LinkHidden`): The right railing object. [introduced in 0.20](/Release_notes_0.20 "Release notes 0.20"): Property type updated from `String` to `LinkHidden`.

Stairs (Лестница)

* Данные**Align** (`Enumeration`): The alignment of the stairs on the baseline. Only used if a baseline is defined. Can be `Left`, `Right` or `Center`.
* Данные**Height** (`Length`): The total height of the stairs. Only used if no baseline is defined, or if the baseline is horizontal. Ignored if Данные**Riser Height Enforce** is non-zero.
* Данные**Length** (`Length`): The total length of the stairs if no baseline is defined. Ignored if Данные**Tread Depth Enforce** is non-zero.
* Данные**Width** (`Length`): The width of the stairs.
* Данные**Width of Landing** (`FloatList`): If the Данные**Number Of Steps** is 1, the stairs object acts as a landing. When this is the case and the baseline is multi-segment, the width of the first segment of the landing follows the Данные**Width**, and the widths of subsequent segments follow the list set here.

Steps (Ступени)

* Данные**Blondel Ratio** (`Float`): (только для чтения) Рассчитанный коэффициент Блонделя. Это соотношение позволяет определить наиболее удобную для человека лестницу и должно составлять от 62 до 64 см или от 24,5 до 25,5 дюйма.
* Данные**Landing Depth** (`Length`): Длина лестничной площадки находящейся по ходу лестницы, указывается только если площадка Данные**Landings** добавлена. По умолчанию значение Данные**Width** равно 0.
* Данные**Nosing** (`Length`): Размер выступа ступени.
* Данные**Number Of Steps** (`Integer`): Количество ступеней (подступенников).
* Данные**Riser Height** (`Length`): (только для чтения) Высота подступенников лестницы. Если высота ступеней Данные**Riser Height Enforce** равна нулю, тогда она вычисляется как (Данные**Height** / Данные**Number of Steps**). В других случаях это значение эквивалентно Данные**Riser Height Enforce**.
* Данные**Riser Height Enforce** (`Length`): Принудительная высота подступенников лестницы.
* Данные**Riser Thickness** (`Length`): Толщина подступенников лестницы.
* Данные**Tread Depth** (`Length`): (только для чтения) Длина ступеней. Если Данные**Tread Depth Enforce** равно 0, то вычисляется как (Данные**Length** / Данные**Number of Steps**). В других случаях это значение эквивалентно Данные**Tread Depth Enforce**.
* Данные**Tread Depth Enforce** (`Length`): Принудительная длина ступеней
* Данные**Tread Thickness** (`Length`): Толщина ступеней.

Structure

* Данные**Connection Down Start Stairs** (`Enumeration`): The type of connection between the lower floor slab and the start of the stairs. Can be `HorizontalCut`, `VerticalCut` or `HorizontalVerticalCut`.
* Данные**Connection End Stairs Up** (`Enumeration`): The type of connection between the end of the stairs and the upper floor slab. Can be `toFlightThickness` or `toSlabThickness`.
* Данные**Down Slab Thickness** (`Length`): The thickness of the lower floor slab.
* Данные**Flight** (`Enumeration`): The direction of the flight after the landing. Can be `Straight`, `HalfTurnLeft` or `HalfTurnRight`. The Данные**Landings** property must be set to `At center`.
* Данные**Landings** (`Enumeration`): The type of landings. Can be `None` or `At center` (`At each corner` not implemented yet).
* Данные**Stringer Overlap** (`Length`): The overlap of the stringers above the bottom of the treads.
* Данные**Stringer Width** (`Length`): The width of the stringers.
* Данные**Structure** (`Enumeration`): The structure type of the stairs. Can be `None`, `Massive`, `One stringer` or `Two stringers`. For the last two options, the Данные**Stringer Width** and Данные**Tread Thickness** properties must have non-zero values.
* Данные**Structure Offset** (`Length`): The offset between the border of the stairs and the structure.
* Данные**Structure Thickness** (`Length`): The thickness of the structure.
* Данные**Up Slab Thickness** (`Length`): The thickness of the upper floor slab.
* Данные**Winders** (`Enumeration`): The type of winders. Not implemented.

## Ограничения

* На данный момент доступны только прямые лестницы
* См. [тему на форуме](http://forum.freecadweb.org/viewtopic.php?f=23&t=6534) про круговые лестницы.
* См. [уведомления](http://forum.freecadweb.org/viewtopic.php?f=9&t=4564) о данном инструменте на форуме.

## Программирование

*См. так же:* [Arch API](/Arch_API/ru "Arch API/ru") и [Основы составления скриптов в FreeCAD](/FreeCAD_Scripting_Basics/ru "FreeCAD Scripting Basics/ru").

The Stairs tool can be used in [macros](/Macros "Macros") and from the [Python](/Python "Python") console by using the following function:

```
Stairs = makeStairs(baseobj=None, length=None, width=None, height=None, steps=None, name="Stairs")

```

* Creates a `Stairs` object from the given `baseobj`.
* If `baseobj` is not given, it will use `length`, `width`, `height`, and `steps`, to build a solid object.

Пример:

```
import Arch

Stairs = Arch.makeStairs(length=5000, width=1200, height=3000, steps=14)

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Arch_Stairs/ru&oldid=1539750>"