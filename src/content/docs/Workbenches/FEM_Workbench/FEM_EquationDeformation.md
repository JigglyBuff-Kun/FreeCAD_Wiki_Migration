---
title: FEM EquationDeformation
---

|                                                                                                                       |
| --------------------------------------------------------------------------------------------------------------------- |
| FEM EquationDeformation                                                                                               |
| Menu location                                                                                                         |
| Solve → Mechanical equations → Deformation equation                                                                   |
| Workbenches                                                                                                           |
| [FEM](/FEM_Workbench "FEM Workbench")                                                                                 |
| Default shortcut                                                                                                      |
| _None_                                                                                                                |
| Introduced in version                                                                                                 |
| 0.21                                                                                                                  |
| See also                                                                                                              |
| [Elasticity equation](/FEM_EquationElasticity "FEM EquationElasticity"), [FEM tutorial](/FEM_tutorial "FEM tutorial") |
|                                                                                                                       |

## Description

This equation describes the nonlinear elastic deformation of solid bodies.

For info about the math of the equation, see the [Elmer models manual](http://www.elmerfem.org/blog/documentation/), section _Finite Elasticity_.

## Usage

1. Add an ![](/src/assets/images/FEM_SolverElmer.svg) [Elmer solver](/FEM_SolverElmer#Equations "FEM SolverElmer").
2. Select it in the [Tree view](/Tree_view "Tree view").
3. There are several ways to invoke the command:
   - Press the ![](/src/assets/images/FEM_EquationDeformation.svg) [Deformation equation](/FEM_EquationDeformation "FEM EquationDeformation") button.
   - Select the **Solve → Mechanical equations → Deformation equation** option from the menu.
4. Change the [equation's solver settings](#Solver_Settings) or the [general solver settings](/FEM_SolverElmer_SolverSettings "FEM SolverElmer SolverSettings") if necessary.

## Solver Settings

For the general solver settings, see the [Elmer solver settings](/FEM_SolverElmer_SolverSettings "FEM SolverElmer SolverSettings").

The deformation equation provides these special settings:

- Data**Calculate Pangle**: If the principal angles should be calculated.
- Data**Calculate Principal**: If all stresses should be calculated.
- Data**Calculate Strains**: If strains will be calculated. This will also calculate the stresses, even if Data**Calculate Principal** or Data**Calculate Stresses** is _false_.
- Data**Calculate Stresses**: If stresses should be calculated. Compared to Data**Calculate Principal** the Tresca yield criterion and the principal stress will not be calculated.
- Data**Initialize State Variables**: See the Elmer manual for more info.
- Data**Mixed Formulation**: See the Elmer manual for more info.
- Data**Neo Hookean Model**: Uses the neo-Hookean material model.
- Data**Variable**: The variable for the deformation equation. Change there the _3_ to _2_ if you have a 2D geometry. For the special case that you have Data**Mixed Formulation** and Data**Neo Hookean Model** set to _true_, the variable number must be geometry dimensions + 1, so for 3D geometry the _3_ must be changed to _4_.

Equation:

- Data**Plane Stress**: Computes solution according to the plane stress situation. Applies only for 2D geometry.

## Analysis Feature Information

The deformation equation takes the following analysis features into account if they are set:

- ![](/src/assets/images/FEM_ConstraintFixed.svg) [Fixed boundary condition](/FEM_ConstraintFixed "FEM ConstraintFixed")
- ![](/src/assets/images/FEM_ConstraintDisplacement.svg) [Displacement boundary condition](/FEM_ConstraintDisplacement "FEM ConstraintDisplacement")
- ![](/src/assets/images/FEM_ConstraintForce.svg) [Force load](/FEM_ConstraintForce "FEM ConstraintForce")
- ![](/src/assets/images/FEM_ConstraintInitialTemperature.svg) [Initial temperature condition](/FEM_ConstraintInitialTemperature "FEM ConstraintInitialTemperature")
- ![](/src/assets/images/FEM_ConstraintPressure.svg) [Pressure load](/FEM_ConstraintPressure "FEM ConstraintPressure")
- ![](/src/assets/images/FEM_ConstraintSelfWeight.svg) [Gravity load](/FEM_ConstraintSelfWeight "FEM ConstraintSelfWeight")
- ![](/src/assets/images/FEM_ConstraintSpring.svg) [Spring](/FEM_ConstraintSpring "FEM ConstraintSpring")

### Note

- Except for calculations in 2D, for all the above analysis features it is important that they act on a face. Features in 3D set to lines or vertices are not recognized by the Elmer solver.

## Results

The available results depend on the [solver settings](#Solver_Settings). If none of the Data**Calculate \*** settings was set to _true_, only the displacement is calculated. Otherwise also the corresponding results will be available.

Retrieved from "<http://wiki.freecad.org/index.php?title=FEM_EquationDeformation/en&oldid=1569080>"
