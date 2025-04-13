---
title: FEM PostFilterDataAtPoint/ru
---
|  |
| --- |
| FEM PostCreateDataAtPointFilter |
| Расположение в меню |
| Results → Data at point filter |
| Верстаки |
| [FEM](/FEM_Workbench/ru "FEM Workbench/ru") |
| Быстрые клавиши |
| *Нет* |
| Представлено в версии |
| - |
| См. также |
| [FEM tutorial](/FEM_tutorial/ru "FEM tutorial/ru") |
|  |

## Описание

Displays the value of a selected field at a picked point.

## Применение

1. Select a previously created [result pipeline](/FEM_PostPipelineFromResult "FEM PostPipelineFromResult") or another filter (except of a line filter).
2. There are several ways to invoke the command:
   * Press the ![](/images/FEM_PostFilterDataAtPoint.svg) [Data at point clip filter](/FEM_PostFilterDataAtPoint "FEM PostFilterDataAtPoint") button.
   * Select the **Results → ![](/images/FEM_PostFilterDataAtPoint.svg) Data at point clip filter** option from the menu.
3. Select a result **Field**.
4. Now
   * either click the Select Point button and subsequently pick the desired point in the mesh.
   * change the point coordinate.

The value at this point for the given **Field** is output to the dialog. The value of the data point is also anytime accessible via the [property](/Property_editor "Property editor") Данные**Point Data**.

Retrieved from "<http://wiki.freecad.org/index.php?title=FEM_PostFilterDataAtPoint/ru&oldid=1569295>"