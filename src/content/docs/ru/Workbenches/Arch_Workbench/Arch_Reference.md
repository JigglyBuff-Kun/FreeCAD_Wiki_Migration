---
title: Arch Cсылка
---
:::caution
THIS COMMAND IS PART OF THE INTEGRATEDBIM WORKBENCHIN V1.0This page has been updated for that version.
:::

|  |
| --- |
| Ссылка |
| Расположение в меню |
| Arch → Ссылка |
| Верстаки |
| [Архитектурный верстак "Arch"](/Arch_Workbench/ru "Arch Workbench/ru") |
| Быстрые клавиши |
| *Нет* |
| Представлено в версии |
| - |
| См. также |
| [Строительная деталь](/Arch_BuildingPart/ru "Arch BuildingPart/ru") |
|  |

## Описание

Инструмент «Reference» позволяет поместить объект в текущий документ, который копирует его форму и цвета из объекта  [Part](/Part_Workbench "Part Workbench") (включая [Arch BuildingPart](/Arch_BuildingPart "Arch BuildingPart")), хранящегося в другом файле FreeCAD. Если этот файл FreeCAD изменяется, ссылочный объект отмечен для перезагрузки.

![](/images/Arch_reference_screenshot.png)

## Применение

1. Нажмите кнопку ![](/images/Arch_Reference.png) **Arch Reference**
2. Нажмите кнопку «Выбрать файл ...» и выберите существующий файл FreeCAD
3. Выберите один из включенных объектов на основе частей из раскрывающегося списка
4. Нажмите **OK**

## Опции

* The reference object can be moved and rotated, the current position will be retained after reloading the object.
* If the original object gets moved in containing file, this movement will reflect in the reference object.
* By right-clicking a Reference object in the tree view, you have the options to reload the original object, or open the containing file.
* To reference several objects at once, place them inside an [Arch BuildingPart](/Arch_BuildingPart "Arch BuildingPart").
* When turning off the **Update Colors** view property of the Reference, it won't reload the original colors anymore, so you can safely change them.

## Свойства

* Данные**File**: The base file this component is built upon
* Данные**Part**: The part to use from the base file
* Вид**Update Colors**: If true, the colors from the linked file will be kept updated

## Программирование

The Reference tool can by used in [macros](/Macros "Macros") and from the [Python](/Python "Python") console by using the following function:

```
reference = makeReference([filepath], [partname], [name])

```

Creates a `reference` object named `name` from the object `partname` in the file `filepath`. All arguments are optional.

Пример:

```
import Arch
Arch.makeReference("/path/to/some/file.FSCtd", "myPart")

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Arch_Reference/ru&oldid=1481121>"