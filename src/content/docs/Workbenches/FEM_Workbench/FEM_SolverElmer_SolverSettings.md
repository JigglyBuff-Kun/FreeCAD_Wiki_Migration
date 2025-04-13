---
title: FEM SolverElmer SolverSettings
---

This page describes the possible settings for [solver Elmer](/FEM_SolverElmer "FEM SolverElmer").

# General

Elmer is a multiphysics solver. Therefore you can use several main equations to solve problems. The different equations are listed [here](/FEM_SolverElmer#About_Equations "FEM SolverElmer").

There are solver settings, available for all equations. These are described here. Settings only available for a particular equation are described in the pages of the corresponding equation.

Elmer offers the [solving types](#Type) _steady-state_ and _transient_ and two main solving systems, [linear system](#Linear_System) and [nonlinear system](#Nonlinear_System). The nonlinear system is used for the ![](/src/assets/images/FEM_EquationFlow.svg) [Flow equation](/FEM_EquationFlow "FEM EquationFlow") and ![](/src/assets/images/FEM_EquationHeat.svg) [Heat equation](/FEM_EquationHeat "FEM EquationHeat").

# Editing Settings

The solver settings can be found in the [property editor](/Property_editor "Property editor") after clicking on an equation in the [tree view](/Tree_view "Tree view"). You can edit them there directly like any other property.

## Solver

### Coordinate System

The default coordinate system is _Cartesian 3D_. For some equations, not all coordinate systems can be can be used. This is noted on the Wiki pages of the corresponding equations.

### Timestepping (transient analyses)

**Note**: FreeCAD 0.20.x already provides the following settings but only the last time result is output. Starting with FreeCAD 0.21 you will get an output for the different times.

For transient analyses, the time steps need to be defined. This is done by the following settings:

- Data**BDFOrder**: Order for the method _BDF_ ([Backward Differentiation Formula](https://en.wikipedia.org/wiki/Backward_differentiation_formula)). It is recommended to use the default of _2_.
- Data**Output Intervals**: An array of intervals. A solver result file will be output every interval time step. For example, if a result file should be output every third time step, set it to _3_. The array corresponds to the Data**Timestep Intervals**.  
  **Note:** The first result in every case will be created for the first time step. To get for example results after 25 % of the total time and if the last result should be the final time, set Data**Output Intervals** to _5_ and Data**Timestep Intervals** to _21_. [introduced in 0.21](/Release_notes_0.21 "Release notes 0.21")
- Data**Timestep Intervals**: An array of time intervals (number of timesteps). The solver will perform one time interval after another. For example, if the solver should calculate the first 10 seconds in steps of 0.1 second, then 50 seconds in steps of 1 second and then stop, you need to set the timestep intervals [100, 50] and the timestep size intervals [0.1, 1.0].
- Data**Timestep Sizes**: An array of timestep sizes. The time unit is second. The array corresponds to the Data**Timestep Intervals**.

**Notes:**

- To achieve the desired total time of a transient analysis, set the proper number and size of timesteps. For example, to simulate 50 seconds of a process in steps of 10 seconds, you need 5 such timesteps. Thus, set Timestep Intervals to [5] and Timestep Sizes to [10].
- Although the terms "times" and "seconds" are used, the times are actually solver progressions if the analysis is not time-dependent.

For information on how to visualize the results, see [Elmer visualization](/FEM_SolverElmer#Visualization "FEM SolverElmer").

### Type

- Data**Simulation type**: If the simulation is _Steady state_, _Transient_ or just _Scanning_. Transient means the development over the solver time is calculated. See section [Timestepping](<#Timestepping_(transient_analyses)>) for the necessary settings.
- Data**Steady State Max Iterations**: The maximum number of steady-state solver runs.
- Data**Steady State Min Iterations**: The minimum number of steady-state solver runs.

## Equation

### Base

All equations have these properties:

- Data**Label**: Name of the equation in the tree view.
- Data**Priority**: Number determining the priority of this equation to the other equations in the analysis. The equation with the highest number in the analysis will be solved as first. If two equations have the same priority number, the one that is first in the tree view will be solved first.
- Data**Stabilize**: If set to _true_, the solver will use the stabilized finite element method when solving the heat equation with a convection term. If set to _false_, the Residual Free Bubble (RFB) stabilization is used instead. If convection dominates, stabilization must be used to successfully solve the equation.

### Linear System

This system has the following properties:

- Data**BiCGstabl Degree**: Polynomial degree for the iterative solver method _BiCGStabl_ . This has only an effect if Data**Linear Solver Type** is _Iterative_ and Data**Linear Iterative Method** is _BiCGStabl_. Starting with the default of 2 is recommended.
- Data**Idrs Parameter**: Parameter for the iterative solver method _Idrs_ . This has only an effect if Data**Linear Solver Type** is _Iterative_ and Data**Linear Iterative Method** is _Idrs_. Starting with the default of 2 is recommended. Setting the parameter to 3 might increase the solving speed a bit. For flow analyses the _Idrs_ method is up to 30 % faster than the default _BiCGStab_ method.
- Data**Linear Direct Method**: Method used for direct solving. This has only an effect if Data**Linear Solver Type** is _Direct_.  
  The possible methods are _Banded_, _MUMPS_ and _Umpfpack_. Note that _MUMPS_ usually needs to be installed before you can use it.  
  **Note**: when you use more than one CPU core for the solver ([introduced in 0.21](/Release_notes_0.21 "Release notes 0.21")) only _MUMPS_ can be used. [MUMPS](https://mumps-solver.org/) has to be installed manually to Elmer. It is only available as a download per request via email.
- Data**Linear Iterations**: Maximal number of iterations for an iterative solver run. This has only an effect if Data**Linear Solver Type** is _Iterative_.
- Data**Linear Iterative Method**: Method used for iterative solving. This has only an effect if Data**Linear Solver Type** is _Iterative_.
- Data**Linear Preconditioning**: Method used for the preconditioning. For info about preconditioning, see [this presentation](http://www.nic.funet.fi/index/elmer/slides/ElmerLinearSolvers.pdf) (page 8) from Elmer.
- Data**Linear Solver Type**: If the solving is done _Direct_ or _Iterative_.
- Data**Linear System Solver Disabled**: Disables the linear solver. Only use this for special cases.  
  It can be used to disable temporarily an equation since its solving is then not performed. There are, however cases where the solver is sent into an infinite loop instead.
- Data**Linear Tolerance**: The tolerance for the solver to stop. If the error is smaller than the tolerance, the solver run will be finished. Otherwise, the full number of Data**Linear Iterations** will be performed.  
  In the Elmer solver log you see how the error is minimized while the solver is running. (Look in the log at the end of every solver iteration for the value behind _Relative Change_). If it does not go down below a certain value but reaches a value above the current tolerance that is acceptable for you, you can increase the tolerance.

### Nonlinear System

This system is iterative and has the following properties:

- Data**Nonlinear Iterations**: Maximal number of iterations.
- Data**Nonlinear Newton After Iterations**: The nonlinear solver starts with the robust _Picard_ algorithm. After some iterations, the algorithm is changed to the _Newton_ algorithm which converges faster but is less robust if the results temporarily diverge (oscillations might occur). This setting sets the number of iterations after which the switch from the _Picard_ to the _Newton_ algorithm is made.  
  **Note**: the switch is made whatever is reached first, Data**Nonlinear Newton After Iterations** or Data**Nonlinear Newton After Tolerance**.
- Data**Nonlinear Newton After Tolerance**: The same as Data**Nonlinear Newton After Iterations** but here a tolerance is set. The tolerance is the norm of the nonlinear residual. If this is reached, the switch from the _Picard_ to the _Newton_ algorithm is made.
- Data**Nonlinear Tolerance**: The tolerance for the solver to stop. If the error is smaller than the tolerance, the solver run will be finished. Otherwise, the full number of Data**Nonlinear Iterations** will be performed.  
  In the Elmer output you see how the error is minimized while the solver is running. If it does not go down below a certain value that is acceptable but above the current tolerance, you can increase the tolerance.
- Data**Relaxation Factor**: This is THE most important setting in case the solver does not converge:

#### Relaxation Factor

If the solver iteration results oscillate numerically, the solver results cannot converge to a final, stable value. To avoid that, the calculated variable

T

i
{\displaystyle T\_{i}}
![{\displaystyle T_{i}}](https://wikimedia.org/api/rest_v1/media/math/render/svg/a8dd1c50cb9436474f83624c3f679ccf3eebbfef) of the i-th iteration/solver run is not taken as input for the next iteration, but

T

i

′
{\displaystyle T\_{i}^{'}}
![{\displaystyle T_{i}^{'}}](https://wikimedia.org/api/rest_v1/media/math/render/svg/8df70ff6321edd5e35750c91abf1413a6be754aa), a value that is "damped" with the result from the previous iteration. The relaxation factor

λ
{\displaystyle \lambda }
![{\displaystyle \lambda }](https://wikimedia.org/api/rest_v1/media/math/render/svg/b43d0ea3c9c025af1be9128e62a18fa74bedda2a) is thereby defined as

T

i

# ′

λ

T

i

-

(

1
−
λ
)

T

i
−
1
{\displaystyle \quad T\_{i}^{'}=\lambda T\_{i}+\left(1-\lambda \right)T\_{i-1}}
![{\displaystyle \quad T_{i}^{'}=\lambda T_{i}+\left(1-\lambda \right)T_{i-1}}](https://wikimedia.org/api/rest_v1/media/math/render/svg/a6df8cefb42eccc6951e125e0f0a3d9533f423d4)

So for the default of 1.0, no damping is used. The smaller

λ
{\displaystyle \lambda }
![{\displaystyle \lambda }](https://wikimedia.org/api/rest_v1/media/math/render/svg/b43d0ea3c9c025af1be9128e62a18fa74bedda2a), the greater the damping and the longer the convergence time. Therefore if the solver does not converge, start changing the relaxation factor to 0.9, then to 0.8 and so on. Values below 0.3 are unusual and if you need this, you should have a closer look to the math of your analysis.  
For cases, where you get a proper convergence you can set

λ
{\displaystyle \lambda }
![{\displaystyle \lambda }](https://wikimedia.org/api/rest_v1/media/math/render/svg/b43d0ea3c9c025af1be9128e62a18fa74bedda2a) above 1.0 to speed the convergence up.

### Steady State

This part of the settings has only one property:

- Data**Steady State Tolerance**: The specific steady state or coupled system convergence tolerance. All the equation solvers must meet their own tolerances for the variable

  ω

  2
  {\displaystyle \omega ^{2}}
  ![{\displaystyle \omega ^{2}}](https://wikimedia.org/api/rest_v1/media/math/render/svg/9fc60ab391d9835017f0778767fb25a54402d20f) they calculate before the whole system is deemed converged. The tolerance criterion is:

‖

u

i
−

u

i
−
1
‖
<
ϵ

‖

u

i
‖
{\displaystyle \quad \left\Vert u\_{i}-u\_{i-1}\right\Vert <\epsilon \left\Vert u\_{i}\right\Vert }
![{\displaystyle \quad \left\Vert u_{i}-u_{i-1}\right\Vert <\epsilon \left\Vert u_{i}\right\Vert }](https://wikimedia.org/api/rest_v1/media/math/render/svg/b96bf158a62a8f60b731a1e7b6bc210bea39bd43)

whereas

ϵ
{\displaystyle \epsilon }
![{\displaystyle \epsilon }](https://wikimedia.org/api/rest_v1/media/math/render/svg/c3837cad72483d97bcdde49c85d3b7b859fb3fd2) is the steady state tolerance and

u

i
{\displaystyle u\_{i}}
![{\displaystyle u_{i}}](https://wikimedia.org/api/rest_v1/media/math/render/svg/14f13cb025ff2e136dcbd2fc81ddf965b728e3d7) is the calculated variable in the i-th iteration/solver run.

Retrieved from "<http://wiki.freecad.org/index.php?title=FEM_SolverElmer_SolverSettings/en&oldid=1556332>"
