---
title: FEM EquationElectricforce/ru
---
|  |
| --- |
| FEM EquationElectricforce |
| Menu location |
| Solve → Electromagnetic Equations → Electricforce equation |
| Workbenches |
| [FEM](/FEM_Workbench "FEM Workbench") |
| Default shortcut |
| *None* |
| Introduced in version |
| 0.19 |
| See also |
| [FEM Electrostatic equation](/FEM_EquationElectrostatic "FEM EquationElectrostatic") |
|  |

## Description

This equation describes the electrostatic force acting on a surface.

For info about the math of the equation, see the [Elmer models manual](http://www.elmerfem.org/blog/documentation/), section *Electrostatic force*.

## Usage

1. Add an ![](/images/FEM_SolverElmer.svg) [Elmer solver](/FEM_SolverElmer#Equations "FEM SolverElmer").
2. Select it in the [Tree view](/Tree_view "Tree view").
3. There are several ways to invoke the command:
   * Press the ![](/images/FEM_EquationElectricforce.svg) [Electricforce equation](/FEM_EquationElectricforce "FEM EquationElectricforce") button.
   * Select the **Solve → Electromagnetic Equations → Electricforce equation** option from the menu.
4. The electricforce equation needs a potential field:
   * Invoke the ![](/images/FEM_EquationElectrostatic.svg) [FEM EquationElectrostatic](/FEM_EquationElectrostatic "FEM EquationElectrostatic") command.
5. Change the [equation's solver settings](#Solver_Settings) or the [general solver settings](/FEM_SolverElmer_SolverSettings "FEM SolverElmer SolverSettings") if necessary.

The electricforce equation only calculates the force for faces with a ![](/images/FEM_ConstraintElectrostaticPotential.svg) [electrostatic potential boundary condition](/FEM_ConstraintElectrostaticPotential "FEM ConstraintElectrostaticPotential") if the boundary condition's option **Calculate Electric Force** is used.

## Solver Settings

For the general solver settings, see the [Elmer solver settings](/FEM_SolverElmer_SolverSettings "FEM SolverElmer SolverSettings").

The electricforce equation provides this special setting:

* Данные**Exec Solver**: By default the equation is only solved after a time step passed. This means it is first solved after the solution of other equations converged. When the setting is *Always* the equation is solved after every iteration within a time step. (For [steady-state](/FEM_SolverElmer_SolverSettings#Type "FEM SolverElmer SolverSettings") simulations the whole simulation is one time step.)

## Analysis Feature Information

The electricforce equation does not have its own analysis features. It takes the ![](/images/FEM_ConstraintElectrostaticPotential.svg) [electrostatic potential boundary condition](/FEM_ConstraintElectrostaticPotential "FEM ConstraintElectrostaticPotential") from the ![](/images/FEM_EquationElectrostatic.svg) [Electrostatic equation](/FEM_EquationElectrostatic "FEM EquationElectrostatic"). In the boundary condition it is important to use the option **Calculate Electric Force**.

## Result

The result is the electric force density in 

N

/

m

2
{\displaystyle {\rm {N/m^{2}}}}
![{\displaystyle {\rm {N/m^{2}}}}](https://wikimedia.org/api/rest_v1/media/math/render/svg/a90004e7cf2472e320272d782c911ff786f8be02).

Retrieved from "<http://wiki.freecad.org/index.php?title=FEM_EquationElectricforce/ru&oldid=1569159>"