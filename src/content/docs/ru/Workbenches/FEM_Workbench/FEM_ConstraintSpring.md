---
title: FEM ConstraintSpring/ru
---
|  |
| --- |
| FEM ConstraintSpring |
| Menu location |
| Model → Mechanical boundary conditions and loads → Spring |
| Workbenches |
| [FEM](/FEM_Workbench "FEM Workbench") |
| Default shortcut |
| *None* |
| Introduced in version |
| 0.20 |
| See also |
| *None* |
|  |

| Solvers |
| --- |
| Elmer |

## Описание

Defines a spring boundary condition to be used for mechanical analyses using the ![](/images/FEM_SolverElmer.svg) [Elmer solver](/FEM_SolverElmer "FEM SolverElmer").

[introduced in 0.21](/Release_notes_0.21 "Release notes 0.21"): The spring constraint can be used for the equations ![](/images/FEM_EquationDeformation.svg) [Deformation](/FEM_EquationDeformation "FEM EquationDeformation") and ![](/images/FEM_EquationElasticity.svg) [Elasticity](/FEM_EquationElasticity "FEM EquationElasticity").

## Применение

1. There are several ways to invoke the command:
   * Press the ![](/images/FEM_ConstraintSpring.svg) [Spring](/FEM_ConstraintSpring "FEM ConstraintSpring") button.
   * Select the **Model → Mechanical boundary conditions and loads → ![](/images/FEM_ConstraintSpring.svg) Spring** option from the menu.
2. Press the Add button.
3. In the [3D view](/3D_view "3D view") select the faces to which the spring should be applied. To remove faces from the selection, press the Remove button and click on them.
4. Specify the normal or tangential stiffness (in N/m) and select which one Elmer should use.

Retrieved from "<http://wiki.freecad.org/index.php?title=FEM_ConstraintSpring/ru&oldid=1568968>"