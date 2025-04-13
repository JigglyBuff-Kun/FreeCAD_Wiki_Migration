---
title: Assembly3 ConstraintPointInPlane/ru
---
:::caution
This documentation is not finished. Please help and contribute documentation.GuiCommand modelexplains how commands should be documented. BrowseCategory:UnfinishedDocuto see more incomplete pages like this one. SeeCategory:Command Referencefor all commands.SeeWikiPagesto learn about editing the wiki pages, and go toHelp FreeCADto learn about other ways in which you can contribute.
:::

|  |
| --- |
| Assembly3 ConstraintPointInPlane |
| Расположение в меню |
| *Нет* |
| Верстаки |
| [Assembly3](/Assembly3_Workbench/ru "Assembly3 Workbench/ru") |
| Быстрые клавиши |
| *Нет* |
| Представлено в версии |
| - |
| См. также |
| *Нет* |
|  |

## Описание

Этот инструмент создает связь между двумя объектами сборки и фиксирует расстояние между ними и ориентацию друг относительно друга. Выбранные элементы каждого объекта или, точнее, их неявные системы координат (ICS) используются для позиционирования одного объекта относительно другого.

Если первый объект уже заблокирован на месте через ![](/images/Assembly_ConstraintLock.svg) [ограничение Lock](/Assembly3_ConstraintLock "Assembly3 ConstraintLock"), то следующий объект перемещается в положение, в котором начало координат точечного элемента лежит на плоскости xy элемента плоской грани.

Point elements have no stretch in any direction (zero length) and so there's no orientation detectable i.e. their ICS are only to match other elements' settings. The orientation of the ICSs always stays the same as the global coordinate system's orientation and can not be used to reduce any degrees of freedom related to rotation.

Related to the first object the following object can still move along the x- and y-axis and spin around all three axes. This is leaving 5 degrees of freedom (DOFs) for each link unconstrained.

## Применение

1. Place two objects into an assembly.
2. Select one point element of one object and one planar face element of the other object.
3. Press the ![](/images/Assembly_ConstraintPointInPlane.svg) [Point on plane](/Assembly3_ConstraintPointInPlane "Assembly3 ConstraintPointInPlane") button.

Retrieved from "<http://wiki.freecad.org/index.php?title=Assembly3_ConstraintPointInPlane/ru&oldid=1536607>"