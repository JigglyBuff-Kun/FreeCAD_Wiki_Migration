---
title: FEM ConstraintInitialFlowVelocity
---

|                                                                                                                                                                                     |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| FEM ConstraintInitialFlowVelocity                                                                                                                                                   |
| Menu location                                                                                                                                                                       |
| Model → Fluid boundary conditions → Initial flow velocity condition                                                                                                                 |
| Workbenches                                                                                                                                                                         |
| [FEM](/FEM_Workbench "FEM Workbench")                                                                                                                                               |
| Default shortcut                                                                                                                                                                    |
| _None_                                                                                                                                                                              |
| Introduced in version                                                                                                                                                               |
| -                                                                                                                                                                                   |
| See also                                                                                                                                                                            |
| [Constraint flow velocity](/FEM_ConstraintFlowVelocity "FEM ConstraintFlowVelocity"), [Constraint initial pressure](/FEM_ConstraintInitialPressure "FEM ConstraintInitialPressure") |
|                                                                                                                                                                                     |

| Solvers |
| ------- |
| Elmer   |

## Description

Creates an initial flow velocity condition for a fluid flow analysis.

![](/images/FEM_InitialFlowVelocity_dialog.png)

The FEM initial flow velocity task panel

## Usage

1. There are several ways to invoke the command:
   - Press the ![](/images/FEM_ConstraintInitialFlowVelocity.svg) [Initial flow velocity condition](/FEM_ConstraintInitialFlowVelocity "FEM ConstraintInitialFlowVelocity") button.
   - Select the **Model → Fluid boundary conditions → ![](/images/FEM_ConstraintInitialFlowVelocity.svg) Initial flow velocity condition** option from the menu.
2. Enter an initial flow velocity value for the analysis. The value is entered as a combination of the 3 main cartesian vectors components (X,Y,Z).
3. For a 3D analysis, select a 'solid' (body) from your model, for a 2D analysis select a face. However, it is also possible to select a face (e.g. the inlet of a pipe) in 3D or an edge in 2D.

## Formulas

For a description how to input formulas, see section _Formulas_ in the page for the [Flow velocity constraint](/FEM_ConstraintFlowVelocity#Formulas "FEM ConstraintFlowVelocity").

## Notes

In simple analyses, it is not necessary to specify the initial flow velocity, however it is recommended as best practice.

Retrieved from "<http://wiki.freecad.org/index.php?title=FEM_ConstraintInitialFlowVelocity/en&oldid=1568937>"
