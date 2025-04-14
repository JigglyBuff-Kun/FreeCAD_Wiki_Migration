---
title: FEM EquationHeat
---

|                                              |
| -------------------------------------------- |
| FEM EquationHeat                             |
| Menu location                                |
| Solve → Heat equation                        |
| Workbenches                                  |
| [FEM](/FEM_Workbench "FEM Workbench")        |
| Default shortcut                             |
| _None_                                       |
| Introduced in version                        |
| 0.17                                         |
| See also                                     |
| [FEM tutorial](/FEM_tutorial "FEM tutorial") |
|                                              |

## Description

This equation describes the heat transfer in rigid and fluid bodies.

For info about the math of the equation, see the [Elmer models manual](https://www.elmerfem.org/blog/documentation/), section _Heat Equation_.

## Usage

1. Add an ![](/images/FEM_SolverElmer.svg) [Elmer solver](/FEM_SolverElmer#Equations "FEM SolverElmer").
2. Select it in the [Tree view](/Tree_view "Tree view").
3. There are several ways to invoke the command:
   - Press the ![](/images/FEM_EquationHeat.svg) [Heat equation](/FEM_EquationHeat "FEM EquationHeat") button.
   - Select the **Solve → ![](/images/FEM_EquationHeat.svg) Heat equation** option from the menu.
4. Change the [equation's solver settings](#Solver_Settings) or the [general solver settings](/FEM_SolverElmer_SolverSettings "FEM SolverElmer SolverSettings") if necessary.

## Solver Settings

For the general solver settings, see the [Elmer solver settings](/FEM_SolverElmer_SolverSettings "FEM SolverElmer SolverSettings").

The heat equation provides these special settings:

- Data**Bubbles**: There is also a residual-free-bubbles formulation of the stabilized finite-element method. It is more accurate and does not include any ad hoc terms. However, it may be computationally more expensive. If both Data**Bubbles** and Data**[Stabilize](/FEM_SolverElmer_SolverSettings#Base "FEM SolverElmer SolverSettings")** are _false_, no stabilization is used and then the results might easily be nonsensical.  
  **Note**: If during the _first solver iteration_ you get this error:  
   ERROR:: IterSolve: Numerical Error: System diverged over maximum tolerance.  
  The Data**Bubbles** method failed. In this case set Data**[Stabilize](/FEM_SolverElmer_SolverSettings#Base "FEM SolverElmer SolverSettings")** to _true_.

Equation:

- Data**Convection**: The type of convection to be used in the heat equation.  
  **Note**: If this is not set to _None_, Data**[Stabilize](/FEM_SolverElmer_SolverSettings#Base "FEM SolverElmer SolverSettings")** must be to _true_ otherwise the convection term will not be considered for the heat equation.
- Data**Phase Change Model**: The model use for phase changes (ice to water etc.). The model _Spatial 1_ is the apparent-heat-capacity method, _Spatial 2_ and _Temporal_ are effective-heat-capacity methods.  
  For more info about the models, see [this paper](https://blog.rwth-aachen.de/gfd/files/2017/07/BT_2013_Schueller_elmer_icemole.pdf) (section 2.5.2.2) (is in German). In the paper it was also shown that _Spatial 1_ has numerical problems on larger temperature gradients and that _Spatial 2_ was preferred for the phase change ice to water.

## Analysis Feature Information

The heat equation takes the following analysis features into account if they are set:

- ![](/images/FEM_ConstraintBodyHeatSource.svg) [Body heat source](/FEM_ConstraintBodyHeatSource "FEM ConstraintBodyHeatSource")
- ![](/images/FEM_ConstraintInitialTemperature.svg) [Initial temperature condition](/FEM_ConstraintInitialTemperature "FEM ConstraintInitialTemperature")
- ![](/images/FEM_ConstraintTemperature.svg) [Temperature boundary condition](/FEM_ConstraintTemperature "FEM ConstraintTemperature")

### Note

Except for calculations in 2D, for all the above analysis features it is important that they act on a face or a body. Features in 3D set to lines or vertices are not recognized by the Elmer solver.

## Result

The result is the temperature in Kelvin.

Retrieved from "<http://wiki.freecad.org/index.php?title=FEM_EquationHeat/en&oldid=1569181>"
