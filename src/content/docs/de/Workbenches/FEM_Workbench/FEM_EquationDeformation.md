---
title: FEM Verformungsgleichung
---

|                                                                                                                                      |
| ------------------------------------------------------------------------------------------------------------------------------------ |
| FEM Verformungsgleichung                                                                                                             |
| Menüeintrag                                                                                                                          |
| Lösen → Mechanical equations → Deformation equation                                                                                  |
| Arbeitsbereich                                                                                                                       |
| [FEM](/FEM_Workbench/de "FEM Workbench/de")                                                                                          |
| Standardtastenkürzel                                                                                                                 |
| _Keiner_                                                                                                                             |
| Eingeführt in Version                                                                                                                |
| 0.21                                                                                                                                 |
| Siehe auch                                                                                                                           |
| [Elastizitätsgleichung](/FEM_EquationElasticity/de "FEM EquationElasticity/de"), [FEM Anleitung](/FEM_tutorial/de "FEM tutorial/de") |
|                                                                                                                                      |

## Beschreibung

Diese Gleichung beschreibt die nichtlineare elastische Verformung von Festkörpern.

For info about the math of the equation, see the [Elmer models manual](http://www.elmerfem.org/blog/documentation/), section _Finite Elasticity_.

## Anwendung

1. Add an ![](/images/FEM_SolverElmer.svg) [Elmer solver](/FEM_SolverElmer#Equations "FEM SolverElmer").
2. Select it in the [Tree view](/Tree_view "Tree view").
3. There are several ways to invoke the command:
   - Press the ![](/images/FEM_EquationDeformation.svg) [Deformation equation](/FEM_EquationDeformation "FEM EquationDeformation") button.
   - Select the **Solve → Mechanical equations → Deformation equation** option from the menu.
4. Change the [equation's solver settings](#Solver_Settings) or the [general solver settings](/FEM_SolverElmer_SolverSettings "FEM SolverElmer SolverSettings") if necessary.

## Solver Settings

For the general solver settings, see the [Elmer solver settings](/FEM_SolverElmer_SolverSettings "FEM SolverElmer SolverSettings").

The deformation equation provides these special settings:

- Daten**Calculate Pangle**: If the principal angles should be calculated.
- Daten**Calculate Principal**: If all stresses should be calculated.
- Daten**Calculate Strains**: If strains will be calculated. This will also calculate the stresses, even if Daten**Calculate Principal** or Daten**Calculate Stresses** is _false_.
- Daten**Calculate Stresses**: If stresses should be calculated. Compared to Daten**Calculate Principal** the Tresca yield criterion and the principal stress will not be calculated.
- Daten**Initialize State Variables**: See the Elmer manual for more info.
- Daten**Mixed Formulation**: See the Elmer manual for more info.
- Daten**Neo Hookean Model**: Uses the neo-Hookean material model.
- Daten**Variable**: The variable for the deformation equation. Change there the _3_ to _2_ if you have a 2D geometry. For the special case that you have Daten**Mixed Formulation** and Daten**Neo Hookean Model** set to _true_, the variable number must be geometry dimensions + 1, so for 3D geometry the _3_ must be changed to _4_.

Equation:

- Daten**Plane Stress**: Computes solution according to the plane stress situation. Applies only for 2D geometry.

## Analysis Feature Information

The deformation equation takes the following analysis features into account if they are set:

- ![](/images/FEM_ConstraintFixed.svg) [Fixed boundary condition](/FEM_ConstraintFixed "FEM ConstraintFixed")
- ![](/images/FEM_ConstraintDisplacement.svg) [Displacement boundary condition](/FEM_ConstraintDisplacement "FEM ConstraintDisplacement")
- ![](/images/FEM_ConstraintForce.svg) [Force load](/FEM_ConstraintForce "FEM ConstraintForce")
- ![](/images/FEM_ConstraintInitialTemperature.svg) [Initial temperature condition](/FEM_ConstraintInitialTemperature "FEM ConstraintInitialTemperature")
- ![](/images/FEM_ConstraintPressure.svg) [Pressure load](/FEM_ConstraintPressure "FEM ConstraintPressure")
- ![](/images/FEM_ConstraintSelfWeight.svg) [Gravity load](/FEM_ConstraintSelfWeight "FEM ConstraintSelfWeight")
- ![](/images/FEM_ConstraintSpring.svg) [Spring](/FEM_ConstraintSpring "FEM ConstraintSpring")

### Hinweis

- Except for calculations in 2D, for all the above analysis features it is important that they act on a face. Features in 3D set to lines or vertices are not recognized by the Elmer solver.

## Ergebnisse

The available results depend on the [solver settings](#Solver_Settings). If none of the Daten**Calculate \*** settings was set to _true_, only the displacement is calculated. Otherwise also the corresponding results will be available.

Retrieved from "<http://wiki.freecad.org/index.php?title=FEM_EquationDeformation/de&oldid=1569085>"
