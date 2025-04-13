---
title: FEM ConstraintInitialTemperature
---
|  |
| --- |
| FEM ConstraintInitialTemperature |
| Расположение в меню |
| Model → Thermal Constraints → Constraint initial temperature |
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

Defines an initial temperature for a thermo-mechanical analysis.

## Применение

1. There are several ways to invoke the command:
   * Press the ![](/images/FEM_ConstraintInitialTemperature.svg) [Initial temperature](/FEM_ConstraintInitialTemperature "FEM ConstraintInitialTemperature") button.
   * Select the **Model → Thermal boundary conditions and loads → ![](/images/FEM_ConstraintInitialTemperature.svg) Initial temperature** option from the menu.
2. Enter an initial temperature value for the analysis.

## Ограничения

This tool applies the initial temperature to all nodes in the FEA model - it's not possible to select individual regions.

## Примечания

* This tool uses the [\*INITIAL CONDITIONS card in CalculiX](http://web.mit.edu/calculix_v2.7/CalculiX/ccx_2.7/doc/ccx/node215.html).
* Initial temperature has to be defined for all thermomechanical analyses performed with CalculiX, even the steady-state ones.

Retrieved from "<http://wiki.freecad.org/index.php?title=FEM_ConstraintInitialTemperature/ru&oldid=1532546>"