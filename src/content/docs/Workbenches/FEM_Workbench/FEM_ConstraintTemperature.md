---
title: FEM ConstraintTemperature
---

|                                                                                |
| ------------------------------------------------------------------------------ |
| FEM ConstraintTemperature                                                      |
| Menu location                                                                  |
| Model → Thermal boundary conditions and loads → Temperature boundary condition |
| Workbenches                                                                    |
| [FEM](/FEM_Workbench "FEM Workbench")                                          |
| Default shortcut                                                               |
| _None_                                                                         |
| Introduced in version                                                          |
| -                                                                              |
| See also                                                                       |
| [FEM tutorial](/FEM_tutorial "FEM tutorial")                                   |
|                                                                                |

| Solvers         |
| --------------- |
| CalculiX, Elmer |

## Description

Defines a temperature boundary condition or, optionally, a concentrated heat flux load.

## Usage

1. There are several ways to invoke the command:
   - Press the ![](/src/assets/images/FEM_ConstraintTemperature.svg) [Temperature boundary condition](/FEM_ConstraintTemperature "FEM ConstraintTemperature") button.
   - Select the **Model → Thermal boundary conditions and loads → ![](/src/assets/images/FEM_ConstraintTemperature.svg) Temperature boundary condition** option from the menu.
2. Press the Add button.
3. In the [3D view](/3D_view "3D view") select the objects the boundary condition should be applied to, which can be vertices, edges, or faces. Optionally, press the Remove button and click on the objects that you want to remove from the selection.
4. Choose the constraint type and specify its parameter:
   - _Temperature_ (default) - temperature boundary condition, enter the _Temperature_ (K)
   - _CFlux_ - concentrated heat flux load, enter the _Concentrated heat flux_ (mW) - this value will be divided by the number of nodes on the underlying geometrical entity to achieve a total flux of a given magnitude on that entity

## Notes

- The temperature boundary condition uses the [\*BOUNDARY card in CalculiX](http://web.mit.edu/calculix_v2.7/CalculiX/ccx_2.7/doc/ccx/node163.html).
- The **Concentrated heat flux** option uses the [\*CFLUX card in CalculiX](http://web.mit.edu/calculix_v2.7/CalculiX/ccx_2.7/doc/ccx/node168.html).

Retrieved from "<http://wiki.freecad.org/index.php?title=FEM_ConstraintTemperature/en&oldid=1532556>"
