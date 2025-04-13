---
title: FEM EquationFlow
---

|                                                    |
| -------------------------------------------------- |
| FEM EquationFlow                                   |
| Posizione nel menu                                 |
| Solve → Equation flow                              |
| Ambiente                                           |
| [FEM](/FEM_Workbench/it "FEM Workbench/it")        |
| Avvio veloce                                       |
| _Nessuno_                                          |
| Introdotto nella versione                          |
| -                                                  |
| Vedere anche                                       |
| [Tutorial FEM](/FEM_tutorial/it "FEM tutorial/it") |
|                                                    |

## Description

Da fare

For info about the math of the equation, see the [Elmer models manual](https://www.elmerfem.org/blog/documentation/), section _Navier-Stokes Equations_.

## Usage

1. Add an ![](/images/FEM_SolverElmer.svg) [Elmer solver](/FEM_SolverElmer#Equations "FEM SolverElmer").
2. Select it in the [Tree view](/Tree_view "Tree view").
3. There are several ways to invoke the command:
   - Press the ![](/images/FEM_EquationFlow.svg) [Flow equation](/FEM_EquationFlow "FEM EquationFlow") button.
   - Select the **Solve → ![](/images/FEM_EquationFlow.svg) Flow equation** option from the menu.
4. Change the [equation's solver settings](#Solver_Settings) or the [general solver settings](/FEM_SolverElmer_SolverSettings "FEM SolverElmer SolverSettings") if necessary.

## Solver Settings

For the general solver settings, see the [Elmer solver settings](/FEM_SolverElmer_SolverSettings "FEM SolverElmer SolverSettings").

The flow equation provides these special settings:

- Dati**Div Discretization**: To be set to _true_ for incompressible flow for more stable discretization when the [Reynolds number](https://en.wikipedia.org/wiki/Reynolds_number) increases.
- Dati**Flow Model**: The flow model that should be used. The default _Full_ includes convection and time derivative terms in the model. _No convection_ switches off the convection terms and the _Stokes_ model switches off the convection terms and the (explicit) time derivative terms.
- Dati**Gradp Discretization**: If set to _true_ pressure [Dirichlet boundary conditions](https://en.wikipedia.org/wiki/Dirichlet_boundary_condition) can be used. Also the mass flux is available as a natural boundary condition.
- Dati**Variable**: Optional only for calculations in 2D: You can change the default of _3_ to _2_.  
  **Note**: In this case none of the flow velocity boundary conditions can have a specified z-component.

Equation:

- Dati**Convection**: The type of convection to be used in the ![](/images/FEM_EquationHeat.svg) [Heat equation](/FEM_EquationHeat "FEM EquationHeat").  
  **Note**: For thermal flows it must be set to _Computed_ (the default).
- Dati**Magnetic Induction**: If set to _true_ the magnetic induction equation will be solved along with the [Navier-Stokes equations](https://en.wikipedia.org/wiki/Navier%E2%80%93Stokes_equations).

### Notes for Convergence

If the solver results do not converge, you can try these things (in the given order):

1. Reduce the Dati**Relaxation Factor**, see the [nonlinear system settings](/FEM_SolverElmer_SolverSettings#Relaxation_Factor "FEM SolverElmer SolverSettings").
2. Increase the value for Dati**Nonlinear Newton After Iterations**, see the [nonlinear system settings](/FEM_SolverElmer_SolverSettings#Nonlinear_System "FEM SolverElmer SolverSettings").
3. Reduce the number of CPU cores used, see the [FEM preferences](/FEM_Preferences#Elmer "FEM Preferences").
4. Increase the mesh density (make it more fine).

## Analysis Feature Information

The flow equation takes the following analysis features into account if they are set:

- ![](/images/FEM_ConstraintFlowVelocity.svg) [Flow velocity boundary condition](/FEM_ConstraintFlowVelocity "FEM ConstraintFlowVelocity")
- ![](/images/FEM_ConstraintInitialFlowVelocity.svg) [Initial flow velocity condition](/FEM_ConstraintInitialFlowVelocity "FEM ConstraintInitialFlowVelocity")
- ![](/images/FEM_ConstraintPressure.svg) [Pressure load](/FEM_ConstraintPressure "FEM ConstraintPressure")
- ![](/images/FEM_ConstraintInitialPressure.svg) [Initial pressure condition](/FEM_ConstraintInitialPressure "FEM ConstraintInitialPressure") ([introduced in 0.21](/Release_notes_0.21 "Release notes 0.21"))

### Notes

- Except for calculations in 2D, for all above boundary conditions it is important that they act on a face or body. Boundary conditions for 3D set to lines or vertices are not recognized by the Elmer solver.
- Since ![](/images/FEM_ConstraintPressure.svg) [Pressure load](/FEM_ConstraintPressure "FEM ConstraintPressure") can only be set to faces, pressure loads cannot be used for calculations in 2D.
- If there is no ![](/images/FEM_ConstraintPressure.svg) [Pressure load](/FEM_ConstraintPressure "FEM ConstraintPressure") set, ![](/images/FEM_ConstraintInitialPressure.svg) [Initial pressure condition](/FEM_ConstraintInitialPressure "FEM ConstraintInitialPressure") will only be taken into account if Dati**Gradp Discretization** is set to _true_.

## Results

The results are the velocity in

m

/
s
{\displaystyle {\rm {m/s}}}
![{\displaystyle {\rm {m/s}}}](https://wikimedia.org/api/rest_v1/media/math/render/svg/85ed42a2e5a4d36ef69387b1f26abef416b52669) and the pressure in

P
a
{\displaystyle {\rm {Pa}}}
![{\displaystyle {\rm {Pa}}}](https://wikimedia.org/api/rest_v1/media/math/render/svg/c9835d51ddcf6f8ce955d02f677df5789506606a). If there is no ![](/images/FEM_ConstraintInitialPressure.svg) [Initial pressure condition](/FEM_ConstraintInitialPressure "FEM ConstraintInitialPressure") and ![](/images/FEM_ConstraintPressure.svg) [Pressure load](/FEM_ConstraintPressure "FEM ConstraintPressure") given, the resulting pressure will be relative not absolute. Since pressure must act on a face, absolute pressure results cannot be obtained in 2D simulations.

Retrieved from "<http://wiki.freecad.org/index.php?title=FEM_EquationFlow/it&oldid=1569132>"
