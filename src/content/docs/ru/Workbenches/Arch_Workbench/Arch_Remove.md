---
title: Arch Удалить компонент
---
:::caution
THIS COMMAND IS PART OF THE INTEGRATEDBIM WORKBENCHIN V1.0This page has been updated for that version.
:::

|  |
| --- |
| Arch Remove |
| Расположение в меню |
| Архитектура → Удалить компонент |
| Верстаки |
| [Arch](/Arch_Workbench/ru "Arch Workbench/ru") |
| Быстрые клавиши |
| *Нет* |
| Представлено в версии |
| - |
| См. также |
| [Arch CutLine](/Arch_CutLine "Arch CutLine"), [Arch CutPlane](/Arch_CutPlane "Arch CutPlane"), [Добавить компонент](/Arch_Add/ru "Arch Add/ru") |
|  |

## Описание

Инструменты «Удалить» позволяют выполнять 2 вида операций:

* Удалите подкомпонент из объекта Arch, например, удалите поле, добавленное к стене, например, в примере ![](/images/Arch_Add.svg) [Arch Add](/Arch_Add "Arch Add")
* Вычтите объект на основе [shape](/Part_Workbench "Part Workbench") из компонента Arch, например ![](/images/Arch_Wall.svg) [wall](/Arch_Wall "Arch Wall") или ![](/images/Arch_Structure.svg) [Arch Structure](/Arch_Structure "Arch Structure")

The counterpart of this tool is the ![](/images/Arch_Add.svg) [Arch Add](/Arch_Add "Arch Add") tool.

![](/images/Arch_Remove_example.jpg)

*В приведенном выше изображении коробка вычитается из стены*

## Применение

1. Select a subcomponent inside an Arch object.
2. Press the ![](/images/Arch_Remove.svg) [Remove component](/Arch_Remove "Arch Remove") button, or **Modify → ![](/images/Arch_Remove.svg) Remove component** from the top menu.

Or

1. Select objects to be subtracted, the last object selected must the Arch object from which the other objects will be subtracted.
2. Press the ![](/images/Arch_Remove.svg) [Remove component](/Arch_Remove "Arch Remove") button, or **Modify → ![](/images/Arch_Remove.svg) Remove component** from the top menu.

## Scripting

## Программирование

*См. так же:* [Arch API](/Arch_API/ru "Arch API/ru") и [Основы составления скриптов в FreeCAD](/FreeCAD_Scripting_Basics/ru "FreeCAD Scripting Basics/ru").

The Remove tool can be used in [macros](/Macros "Macros") and from the [Python](/Python "Python") console by using the following function:

```
removeComponents(objectsList, host=None)

```

* Removes the given objects in `objectsList` from their parents.
* If a `host` object is specified, this function will try adding the objects in `objectsList` as holes to the `host`.

Пример:

```
import FreeCAD, Draft, Arch

Line = Draft.makeWire([FreeCAD.Vector(0, 0, 0),FreeCAD.Vector(2000, 2000, 0)])
Wall = Arch.makeWall(Line, width=150, height=3000)

Box = FreeCAD.ActiveDocument.addObject("Part::Box", "Box")
Box.Length = 900
Box.Width = 450
Box.Height = 2000
FreeCAD.ActiveDocument.recompute()

Draft.rotate(Box, 45)
Draft.move(Box, FreeCAD.Vector(1000, 700, 0))

Arch.removeComponents(Box, Wall)
FreeCAD.ActiveDocument.recompute()

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Arch_Remove/ru&oldid=1437753>"