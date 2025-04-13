---
title: Sketcher "Блокирующее ограничение"
---
|  |
| --- |
| Ограничение перемещения |
| Расположение в меню |
| Sketch → Ограничения эскиза → Constrain Block |
| Верстаки |
| [Sketcher](/Sketcher_Workbench/ru "Sketcher Workbench/ru") |
| Быстрые клавиши |
| *Нет* |
| Представлено в версии |
| 0.17 |
| См. также |
| [Ограничение положения](/Sketcher_ConstrainLock/ru "Sketcher ConstrainLock/ru") |
|  |

## Описание

**Блокирующее ограничение** фиксирует геометрический элемент в указанном месте, одним нажатием.

The block constraint only affects the freely movable parts of an edge. Blocked edges can have other constraints, and applying additional constraints to a blocked edge can modify it.

## Применение

See also: [Drawing aids](/Sketcher_Workbench#Drawing_aids "Sketcher Workbench").

### [Continue mode](/Sketcher_Workbench#Continue_modes "Sketcher Workbench")

1. Выберите элемент, степень свободы которого вы хотите ограничить.
2. Нажмите на кнопку ![](/images/Sketcher_ConstrainBlock.svg) Ограничение (Привязка).

### Run-once mode

1. Select one or more edges.
2. Invoke the tool as explained above, or with the following additional option:
   * [introduced in 1.0](/Release_notes_1.0 "Release notes 1.0"): Right-click in the [3D view](/3D_view "3D view") and select the **![](/images/Sketcher_ConstrainBlock.svg) Constrain block** option from the context menu.
3. Depending on the selection one or more constraints are added.

## Программирование

```
Sketch.addConstraint(Sketcher.Constraint('Block', Edge))

```

The [Sketcher scripting](/Sketcher_scripting "Sketcher scripting") page explains the values which can be used for `Edge` and contains further examples on how to create constraints from Python scripts.

Retrieved from "<http://wiki.freecad.org/index.php?title=Sketcher_ConstrainBlock/ru&oldid=1416689>"