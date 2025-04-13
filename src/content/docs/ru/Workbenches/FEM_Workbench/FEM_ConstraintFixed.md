---
title: FEM ConstraintFixed
---
|  |
| --- |
| FEM ConstraintFixed |
| Расположение в меню |
| Model → Mechanical Constraints → Constraint fixed |
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

Creates a FEM boundary condition for a fixed geometrical entity by locking all the available degrees of freedom (DOFs) of the nodes underlying the selected geometrical entity (6 DOFs for beam and shell elements, 3 for solid elements).

## Применение

1. There are several ways to invoke the command:
   * Press the ![](/images/FEM_ConstraintFixed.svg) [Fixed boundary condition](/FEM_ConstraintFixed "FEM ConstraintFixed") button.
   * Select the **Model → Mechanical boundary conditions and loads → ![](/images/FEM_ConstraintFixed.svg) Fixed boundary condition** option from the menu.
2. Press the Add button.
3. In the [3D view](/3D_view "3D view") select the object the boundary condition should be applied to, which can be a vertex, edge, or face (but all objects have to be of the same type). To remove objects from the selection, press the Remove button and click on them.

## Ограничения

You cannot mix object types within the same boundary condition. Use a separate fixed boundary condition for each object type.

## Notes

* This feature uses the [\*BOUNDARY card in CalculiX](https://web.mit.edu/calculix_v2.7/CalculiX/ccx_2.7/doc/ccx/node163.html).

Retrieved from "<http://wiki.freecad.org/index.php?title=FEM_ConstraintFixed/ru&oldid=1543392>"