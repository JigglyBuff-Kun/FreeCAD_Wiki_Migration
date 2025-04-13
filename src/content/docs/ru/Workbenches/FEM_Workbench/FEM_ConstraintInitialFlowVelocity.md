---
title: FEM Начальное условие скорости потока
---
|  |
| --- |
| Начальное условие скорости потока |
| Расположение в меню |
| Модель → Fluid Constraints → Начальное условие скорости потока |
| Верстаки |
| [FEM](/FEM_Workbench/ru "FEM Workbench/ru") |
| Быстрые клавиши |
| *Нет* |
| Представлено в версии |
| - |
| См. также |
| [Граничное условие скорости потока](/FEM_ConstraintFlowVelocity/ru "FEM ConstraintFlowVelocity/ru") |
|  |

## Описание

Создает ограничение начальной скорости потока для анализа потока жидкости.

![](/images/FEM_InitialFlowVelocity_dialog.png)

The FEM initial flow velocity task panel

## Применение

1. There are several ways to invoke the command:
   * Press the ![](/images/FEM_ConstraintInitialFlowVelocity.svg) [Initial flow velocity condition](/FEM_ConstraintInitialFlowVelocity "FEM ConstraintInitialFlowVelocity") button.
   * Select the **Model → Fluid boundary conditions → ![](/images/FEM_ConstraintInitialFlowVelocity.svg) Initial flow velocity condition** option from the menu.
2. Enter an initial flow velocity value for the analysis. The value is entered as a combination of the 3 main cartesian vectors components (X,Y,Z).
3. For a 3D analysis, select a 'solid' (body) from your model, for a 2D analysis select a face. However, it is also possible to select a face (e.g. the inlet of a pipe) in 3D or an edge in 2D.

## Formulas

For a description how to input formulas, see section *Formulas* in the page for the [Flow velocity constraint](/FEM_ConstraintFlowVelocity#Formulas "FEM ConstraintFlowVelocity").

## Примечания

В самых простых анализах нет необходимости указывать начальную скорость потока, однако это рекомендуется в порядке хорошего стиля работы.

Retrieved from "<http://wiki.freecad.org/index.php?title=FEM_ConstraintInitialFlowVelocity/ru&oldid=1568936>"