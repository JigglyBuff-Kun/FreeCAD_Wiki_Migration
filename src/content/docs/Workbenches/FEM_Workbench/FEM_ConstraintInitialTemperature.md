---
title: FEM ConstraintInitialTemperature
---

|                                                                     |
| ------------------------------------------------------------------- |
| FEM ConstraintInitialTemperature                                    |
| Menu location                                                       |
| Model → Thermal boundary conditions and loads → Initial temperature |
| Workbenches                                                         |
| [FEM](/FEM_Workbench "FEM Workbench")                               |
| Default shortcut                                                    |
| _None_                                                              |
| Introduced in version                                               |
| -                                                                   |
| See also                                                            |
| [FEM tutorial](/FEM_tutorial "FEM tutorial")                        |
|                                                                     |

| Solvers         |
| --------------- |
| CalculiX, Elmer |

## Description

Defines an initial temperature for a thermo-mechanical analysis.

## Usage

1. There are several ways to invoke the command:
   - Press the ![](/src/assets/images/FEM_ConstraintInitialTemperature.svg) [Initial temperature](/FEM_ConstraintInitialTemperature "FEM ConstraintInitialTemperature") button.
   - Select the **Model → Thermal boundary conditions and loads → ![](/src/assets/images/FEM_ConstraintInitialTemperature.svg) Initial temperature** option from the menu.
2. Enter an initial temperature value for the analysis.

## Limitations

This tool applies the initial temperature to all nodes in the FEA model - it's not possible to select individual regions.

## Notes

- This tool uses the [\*INITIAL CONDITIONS card in CalculiX](http://web.mit.edu/calculix_v2.7/CalculiX/ccx_2.7/doc/ccx/node215.html).
- Initial temperature has to be defined for all thermomechanical analyses performed with CalculiX, even the steady-state ones.

Retrieved from "<http://wiki.freecad.org/index.php?title=FEM_ConstraintInitialTemperature/en&oldid=1532584>"
