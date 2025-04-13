---
title: Arch Add/Добавлять
---

:::caution
THIS COMMAND IS PART OF THE INTEGRATEDBIM WORKBENCHIN V1.0This page has been updated for that version.
:::

|                                                       |
| ----------------------------------------------------- |
| Arch Add                                              |
| Расположение в меню                                   |
| Архитектура → Добавить компонент                      |
| Верстаки                                              |
| [Arch](/Arch_Workbench/ru "Arch Workbench/ru")        |
| Быстрые клавиши                                       |
| _Нет_                                                 |
| Представлено в версии                                 |
| -                                                     |
| См. также                                             |
| [Удалить компонент](/Arch_Remove/ru "Arch Remove/ru") |
|                                                       |

## Описание

Инструмент «Добавить» позволяет вам выполнять 4 вида операций:

- Добавьте объекты [shape](/Part_Workbench "Part Workbench") к компоненту Arch, такие как [wall](/Arch_Wall "Arch Wall") или [structures](/Arch_Structure "Arch Structure") . Эти объекты затем составляют часть компонента Arch и позволяют изменять его форму, но сохраняя ее базовые свойства, такие как ширина и высота
- Добавьте элементы Arch, такие как [walls](/Arch_Wall "Arch Wall") или [structures](/Arch_Structure "Arch Structure"), в объект арки на основе группы, такой как [floors](/Arch_Floor "Arch Floor").
- Добавить [axis systems](/Arch_Axis "Arch Axis") в [structural objects](/Arch_Structure "Arch Structure")
- Добавить объекты в плоскость [section planes](/Arch_SectionPlane "Arch SectionPlane")

The counterpart of this tool is the ![](/images/Arch_Remove.svg) [Arch Remove](/Arch_Remove "Arch Remove") tool.

![](/images/Arch_Add_example.jpg)

_В приведенном выше изображении коробка добавляется к стене._

## Применение

1. Select the objects to be added together. The last object selected will be the host Arch object.
2. Press the ![](/images/Arch_Add.svg) [Add component](/Arch_Add "Arch Add") button, or use **Modify → ![](/images/Arch_Add.svg) Add component** from the top menu.

## Scripting

_See also:_ [Arch API](/Arch_API "Arch API") and [FreeCAD Scripting Basics](/FreeCAD_Scripting_Basics "FreeCAD Scripting Basics").

The Add tool can be used in [macros](/Macros "Macros") and from the [Python](/Python "Python") console by using the following function:

: ```
addComponents(objectsList, host)

    ```

: The above code snippet adds the given objects in `objectsList` to the given `host` object.
: **Note:** `objectsList` can be a single object or a list of objects.

Пример:

```
import FreeCAD, Arch, Draft, Part

p1 = FreeCAD.Vector(0, 0, 0)
p2 = FreeCAD.Vector(2000, 2000, 0)

Line = Draft.makeWire([p1, p2])
Wall = Arch.makeWall(Line, width=150, height=2000)

p3 = FreeCAD.Vector(0, 2000, 0)
p4 = FreeCAD.Vector(3000, 0, 0)

Line2 = Draft.makeWire([p3, p4])
Wall2 = Arch.makeWall(Line2, width=150, height=2000)
FreeCAD.ActiveDocument.recompute()

Arch.addComponents(Wall2, Wall)
FreeCAD.ActiveDocument.recompute()

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Arch_Add/ru&oldid=1432725>"
