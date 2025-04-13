---
title: Arch Check/Проверять
---

:::caution
THIS COMMAND IS PART OF THE INTEGRATEDBIM WORKBENCHIN V1.0This page has been updated for that version.
:::

|                                                              |
| ------------------------------------------------------------ |
| Arch Check                                                   |
| Расположение в меню                                          |
| Архитектура → Утилиты → Проверь                              |
| Верстаки                                                     |
| [Arch](/Arch_Workbench/ru "Arch Workbench/ru")               |
| Быстрые клавиши                                              |
| _Нет_                                                        |
| Представлено в версии                                        |
| -                                                            |
| См. также                                                    |
| [Убрать отверстия](/Arch_CloseHoles/ru "Arch CloseHoles/ru") |
|                                                              |

## Описание

Этот инструмент проверяет текущий документ или выбранные объекты для объектов с твердым объектом [Part](/Part_Workbench "Part Workbench") или [Arch](/Arch_Workbench "Arch Workbench"), что может вызвать проблемы, поскольку большинство операций модуля Arch требуют твердых объектов.

## Использование

1. # Нажмите кнопку ![](/images/Arch_Check.png) **Check**в меню Arch → Utilities menu

## Скрипты

_See also:_ [Arch API](/Arch_API "Arch API") and [FreeCAD Scripting Basics](/FreeCAD_Scripting_Basics "FreeCAD Scripting Basics").

This tool can be used in [macros](/Macros "Macros") and from the [Python](/Python "Python") console by using the following function:

```
list_bad = check(objectslist, includehidden=False)

```

- Checks if the given objects in `objectslist` contain only solids.
- If `includehidden` is `True` it will include all hidden objects, otherwise it will omit them from the search.
- Returns `list_bad`, a list with the objects that are not derived from a `Part::Feature`, or components that are not closed, not valid, don't contain solids, or that contain faces that are not part of any solid. This is used to detect [BIM](/BIM_Workbench "BIM Workbench") or [Draft](/Draft_Workbench "Draft Workbench") wires and profiles that aren't solids.
  - Each element in `list_bad` is another list `[object, message]`, where `object` is the detected non-solid, and `message` indicates the reason why it was included in this list.

Example:

```
import FreeCAD, Draft, Arch

p1 = FreeCAD.Vector(0, 0, 0)
p2 = FreeCAD.Vector(2000, 0, 0)
baseline = Draft.makeLine(p1, p2)
Wall1 = Arch.makeWall(baseline, length=None, width=150, height=2000)
FreeCAD.ActiveDocument.recompute()

Wall2 = Arch.makeWall(None, length=2000, width=200, height=1000)
FreeCAD.ActiveDocument.recompute()

Circle = Draft.makeCircle(450)
Wire = Draft.makeWire([FreeCAD.Vector(1000, 0, 0), FreeCAD.Vector(1500, 1000, 0), FreeCAD.Vector(2500, -1000, 0)])

list_bad = Arch.check([Wall1, Wall2, Circle, Wire], includehidden=True)
print(list_bad)

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Arch_Check/ru&oldid=1456053>"
