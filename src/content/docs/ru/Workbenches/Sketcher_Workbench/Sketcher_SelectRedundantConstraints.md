---
title: Sketcher "Выделить избыточные ограничения"
---
|  |
| --- |
| Выделить избыточные ограничения |
| Расположение в меню |
| Sketch → Инструменты для эскиза → Выделить избыточные ограничения |
| Верстаки |
| [Sketcher](/Sketcher_Workbench/ru "Sketcher Workbench/ru") |
| Быстрые клавиши |
| Shift+Ctrl+R |
| Представлено в версии |
| 0.15 |
| См. также |
| *Нет* |
|  |

## Description

The ![](/images/Sketcher_SelectRedundantConstraints.svg) [Sketcher SelectRedundantConstraints](/Sketcher_SelectRedundantConstraints "Sketcher SelectRedundantConstraints") tool selects the redundant constraints in the sketch.

If such constraints exist in a sketch the [Solver messages section of the Sketcher Dialog](/Sketcher_Dialog#Solver_messages "Sketcher Dialog") displays this message:

* Redundant constraints: (#, #, #)

Where *(#, #, #)* are the indices of the constraints. Clicking the underlined text will select the redundant constraints.

Please note that a sketch can also have redundant constraints if one of the other [solver messages](/Sketcher_Dialog#Solver_messages "Sketcher Dialog") is displayed.

## Применение

1. There are several ways to invoke the tool:
   * Click the underlined text in the Sketcher Dialog as described above.
   * Select the **Sketch → Sketcher visual → ![](/images/Sketcher_SelectRedundantConstraints.svg) Select redundant constraints** option from the menu.
   * Use the keyboard shortcut: Z then P, then R.
2. The redundant constraints are selected.
3. Optionally click in an empty area in the [3D view](/3D_view "3D view") to clear the selection.

## Notes

* Redundant constraints must be removed from the sketch.
* Instead of the proposed indices it is also possible to delete other constraints.

Retrieved from "<http://wiki.freecad.org/index.php?title=Sketcher_SelectRedundantConstraints/ru&oldid=1460756>"