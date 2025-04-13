---
title: Arch Ферма
---
:::caution
THIS COMMAND IS PART OF THE INTEGRATEDBIM WORKBENCHIN V1.0This page has been updated for that version.
:::

|  |
| --- |
| Ферма |
| Расположение в меню |
| Arch → Ферма |
| Верстаки |
| [Arch](/Arch_Workbench/ru "Arch Workbench/ru") |
| Быстрые клавиши |
| *Нет* |
| Представлено в версии |
| 0.19 |
| См. также |
| *Нет* |
|  |

## Описание

The **Arch Truss** tool builds a [truss](https://en.wikipedia.org/wiki/Truss) object, either from a selected linear object (lie a [Draft Line](/Draft_Line "Draft Line") or [Sketch](/Sketcher_NewSketch "Sketcher NewSketch")), or from scratch, if no object is selected when launching the command.

![](/images/Arch_Truss_example.png)

## Применение

### Создание из выбранного объекта

1. Use a workbench of your choice to create a single line
2. Select that line
3. Press the ![](/images/Arch_Truss.svg) [Truss](/Arch_Truss "Arch Truss") button
4. Adjust the truss properties to your liking

### Создание с нуля

1. Make sure nothing is selected
2. Press the ![](/images/Arch_Truss.svg) [Truss](/Arch_Truss "Arch Truss") button
3. Click in the 3D view to define a first point, or manually enter X, Y and Z coordinates
4. Click in the 3D view to define a second point, or manually enter X, Y and Z coordinates
5. Adjust the truss properties to your liking

## Свойства

### Данные

* Данные**TrussAngle**: The angle of the truss
* Данные**SlantType**: The slant type of this truss
* Данные**Normal**: The normal direction of this truss
* Данные**HeightStart**: The height of the truss at the start position
* Данные**HeightEnd**: The height of the truss at the end position
* Данные**StrutStartOffset**: An optional start offset for the top strut
* Данные**StrutEndOffset**: An optional end offset for the top strut
* Данные**StrutHeight**: The height of the main top and bottom elements of the truss
* Данные**StrutWidth**: The width of the main top and bottom elements of the truss
* Данные**RodType**: The type of the middle element of the truss
* Данные**RodDirection**: The direction of the rods
* Данные**RodSize**: The diameter or side of the rods
* Данные**RodSections**: The number of rod sections
* Данные**RodEnd**: If the truss has a rod at its endpoint or not
* Данные**RodMode**: How to draw the rods

## Программирование

The Truss tool can be used in [macros](/Macros "Macros") and from the [Python](/Python "Python") console by using the following function:

```
Truss = makeFence([baseobj])

```

Пример:

```
import FreeCAD
import Draft
import Arch

p1 = FreeCAD.Vector(0,0,0)
p2 = FreeCAD.Vector(2000,0,0)
baseline = Draft.makeLine(p1,p2)
truss = Arch.makeTruss(baseline)
truss.HeightStart = 200
truss.HeightEnd = 400
# adjust other needed properties

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Arch_Truss/ru&oldid=1438501>"