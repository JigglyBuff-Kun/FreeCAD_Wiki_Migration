---
title: FEM Температурное ограничение
---
|  |
| --- |
| FEM ConstraintTemperature |
| Расположение в меню |
| Model → Thermal Constraints → Constraint temperature |
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

Создаёт ограничения для МКЭ по температурным границам.

## Применение

1. There are several ways to invoke the command:
   * Press the ![](/images/FEM_ConstraintTemperature.svg) [Temperature boundary condition](/FEM_ConstraintTemperature "FEM ConstraintTemperature") button.
   * Select the **Model → Thermal boundary conditions and loads → ![](/images/FEM_ConstraintTemperature.svg) Temperature boundary condition** option from the menu.
2. Press the Add button.
3. In the [3D view](/3D_view "3D view") select the objects the boundary condition should be applied to, which can be vertices, edges, or faces. Optionally, press the Remove button and click on the objects that you want to remove from the selection.
4. Choose the constraint type and specify its parameter:
   * *Temperature* (default) - temperature boundary condition, enter the *Temperature* (K)
   * *CFlux* - concentrated heat flux load, enter the *Concentrated heat flux* (mW) - this value will be divided by the number of nodes on the underlying geometrical entity to achieve a total flux of a given magnitude on that entity

## Примечания

1. Ограничение температуры использует карту \*BOUNDARY в CalculiX. Подробнее об ограничение температуры можно узнать по адрессу <http://web.mit.edu/calculix_v2.7/CalculiX/ccx_2.7/doc/ccx/node163.html>

Retrieved from "<http://wiki.freecad.org/index.php?title=FEM_ConstraintTemperature/ru&oldid=1476901>"