---
title: Arch CloseHoles/Закрыть отверстия
---

:::caution
THIS COMMAND IS PART OF THE INTEGRATEDBIM WORKBENCHIN V1.0This page has been updated for that version.
:::

|                                                |
| ---------------------------------------------- |
| Arch CloseHoles                                |
| Расположение в меню                            |
| Архитектура → Утилиты → Убрать отверстия       |
| Верстаки                                       |
| [Arch](/Arch_Workbench/ru "Arch Workbench/ru") |
| Быстрые клавиши                                |
| _Нет_                                          |
| Представлено в версии                          |
| -                                              |
| См. также                                      |
| [Проверь](/Arch_Check/ru "Arch Check/ru")      |
|                                                |

## Описание

Этот инструмент идентифицирует дыры (круговую последовательность открытых ребер) в объекте [Shape](/Part_Workbench "Part Workbench") и пытается закрыть его, добавив в него новую грань, сделанную из этой последовательности ребер. Вы все равно должны убедиться, что результат является прочным.

## Использование

1. Select a [Shape](/Part_Workbench "Part Workbench") object.
2. Select the **Utils → ![](/images/Arch_CloseHoles.svg) Close holes** option from the menu.

## Scripting

_See also:_ [Arch API](/Arch_API "Arch API") and [FreeCAD Scripting Basics](/FreeCAD_Scripting_Basics "FreeCAD Scripting Basics").

This tool can be used in [macros](/Macros "Macros") and from the [Python](/Python "Python") console by using the following function:

```
solid = closeHole(shape)

```

- Closes a hole in a `shape`, which is a `Part.Shape`, and returns the new `solid` object.

Example:

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

solid = Arch.closeHole(Wall.Shape)

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Arch_CloseHoles/ru&oldid=1432835>"
