---
title: FEM ResultsPurge
---
|  |
| --- |
| FEM ResultsPurge |
| Расположение в меню |
| Results → Purge results |
| Верстаки |
| [FEM](/FEM_Workbench/ru "FEM Workbench/ru") |
| Быстрые клавиши |
| S S |
| Представлено в версии |
| - |
| См. также |
| [FEM tutorial](/FEM_tutorial/ru "FEM tutorial/ru") |
|  |

## Описание

**FEM ResultsPurge** deletes all [result objects](/FEM_ResultShow "FEM ResultShow") and all result meshes from the active analysis container in the [Tree view](/Tree_view "Tree view").

1.1 and above: Deletes all output objects from all solvers (CalculiX results objects, pipelines, filters and text reports).

If you only want to delete a result object and keep the result mesh, create a copy of the result mesh, then select the Result object in the tree view and delete it by pressing Del. This way the created copy of the mesh will remain. (Using FEM ResultsPurge would also delete the copy.)

## Применение

1. There are several ways to invoke the command:
   * Press the ![](/images/FEM_ResultsPurge.svg) [Purge results](/FEM_ResultsPurge "FEM ResultsPurge") button.
   * Select the **Results → ![](/images/FEM_ResultsPurge.svg) Purge results** option from the menu.
   * Use the keyboard shortcut: R then P.

Retrieved from "<http://wiki.freecad.org/index.php?title=FEM_ResultsPurge/ru&oldid=1571153>"