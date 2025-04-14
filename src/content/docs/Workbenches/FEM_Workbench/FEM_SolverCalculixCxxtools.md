---
title: FEM SolverCalculixCxxtools
---

|                                              |
| -------------------------------------------- |
| FEM SolverCalculixCxxtools                   |
| Menu location                                |
| Solve → Solver CalculiX Standard             |
| Workbenches                                  |
| [FEM](/FEM_Workbench "FEM Workbench")        |
| Default shortcut                             |
| S X                                          |
| Introduced in version                        |
| -                                            |
| See also                                     |
| [FEM tutorial](/FEM_tutorial "FEM tutorial") |
|                                              |

## Description

[CalculiXccxTools](/FEM_SolverCalculixCxxtools "FEM SolverCalculixCxxtools") enables usage of the [CalculiX](https://en.wikipedia.org/wiki/Calculix) solver. It may be used for:

1. Setting analysis parameters
2. Selecting working directory
3. Running the CalculiX solver

## Usage

1. A ![](/images/FEM_SolverCalculixCxxtools.svg) CalculiXcxxTools solver object is created automatically with the creation of an ![](/images/FEM_Analysis.svg) [Analysis container](/FEM_Analysis "FEM Analysis").  
   To create it manually, do one of the following:
   - Press the ![](/images/FEM_SolverCalculixCxxtools.svg) [Solver CalculiX Standard](/FEM_SolverCalculixCxxtools "FEM SolverCalculixCxxtools") button.
   - Select **Solve → ![](/images/FEM_SolverCalculixCxxtools.svg) Solver CalculiX Standard** from the menu.
   - Press the S then X shortcut keys.
2. Optionally change the properties of the ![](/images/FEM_SolverCalculixCxxtools.svg) CalculiXcxxTools solver object in the [Property editor](/Property_editor "Property editor").
3. Double click the ![](/images/FEM_SolverCalculixCxxtools.svg) CalculiXcxxTools solver object.
4. Select the **Analysis type**.
5. Click the Write .inp file button.
6. Click the Run CalculiX button.

## Options

Click the Edit .inp file button to display and edit the CalculiX input file manually before running the analysis. In that case it can be useful to set the Data**Split Input Writer** property to `true`.

## Properties

Default values can be set in the menu **Edit → Preferences → FEM → CalculiX**

- Data**Analysis Type**:

  - static - static stress analysis
  - frequency - modal (natural frequency) analysis
  - thermomech - thermo-mechanical analysis
  - check - no calculation, performs input deck checks
  - buckling - linear buckling analysis [introduced in 0.20](/Release_notes_0.20 "Release notes 0.20")

- Data**Beam Reduced Integration** - [introduced in 1.0](/Release_notes_1.0 "Release notes 1.0"):

  - true - uses beam elements with reduced integration (B31R or B32R), required when pipe beam section is used, can also make it possible to obtain [accurate results with plasticity](https://forum.freecad.org/viewtopic.php?t=61233)
  - false - uses regular (fully-integrated) beam elements

- Data**Beam Shell Result Output 3D**: note that CalculiX internally expands 1D and 2D elements into 3D elements to accomplish finite element analysis

  - true - resulting mesh will contain 1D and 2D elements expanded to 3D elements
  - false - results of 1D and 2D elements will be averaged to the nodes of original 1D or 2D mesh (i.e. purely bended beam will show 0 nodal stresses due to averaging)

- Data**Buckling Accuracy** - [introduced in 1.1](/Release_notes_1.1 "Release notes 1.1"): defines the accuracy of buckling eigenvalue evaluation. In most cases it can be left with the default value (0.01) but sometimes it might be necessary to lower it (e.g. to 0.0001) to capture the first eigenvalue.

- Data**Eigenmode High Limit**: Eigenvalues above this limit will not be calculated; **Note**: if eigenvalues of the model are above the high limit, CalculiX will finish without output

- Data**Eigenmode Low Limit**: Eigenvalues below this limit will not be calculated

- Data**Eigenmodes Count**: number of lowest eigenmodes to be calculated

- Data**Geometric Nonlinearity**:

  - linear - linear analysis will be performed if the model does not contain nonlinear material
  - nonlinear - nonlinear analysis will be performed

- Data**Iterations Control parameter Cutb**: defines the second line of [CalculiX' advanced iteration parameters](http://www.dhondt.de/ccx_2.17.pdf#subsection.8.24). Used if Data**Iterations Control Parameter Time Use** is set to _true_.

- Data**Iterations Control Parameter Iter**: defines the first line of [CalculiX' advanced iteration parameters](http://www.dhondt.de/ccx_2.17.pdf#subsection.8.24). Used if Data**Iterations Control Parameter Time Use** is set to _true_.

- Data**Iterations Control Parameter Time Use**

  - true - activates Data**Iterations Control parameter Cutb** and Data**Iterations Control Parameter Iter**
  - false

- Data**Iterations Maximum**: maximum number of increments after which the job will be stopped.

- Data**Iterations User Defined Incrementations**:

  - true - automatic incrementation control will be switched off by DIRECT parameter
  - false - incrementation control will be automatic

- Data**Iterations User Defined Time Step Length**:

  - true - activates Data**Time End** and Data**Time Initial Step** parameters
  - false

- Data**Material Nonlinearity**:

  - linear - only linear material properties will be included in the analysis
  - nonlinear - nonlinear material properties will be used from ![](/images/FEM_MaterialMechanicalNonlinear.svg) [Nonlinear mechanical material](/FEM_MaterialMechanicalNonlinear "FEM MaterialMechanicalNonlinear") object

- Data**Matrix Solver Type**: type of the solver to solve equation system inside finite element analysis. It may significantly affect calculation speed and memory demands. Suitability depends on your finite element model and available hardware

  - default - automatically selects matrix solver depending on the available solvers (typically it is Spooles)
  - [introduced in 1.0](/Release_notes_1.0 "Release notes 1.0"): pastix - one of the fastest solvers (along with Pardiso), available (and default) in official builds since ccx 2.18, may still cause occasional issues
  - [introduced in 1.0](/Release_notes_1.0 "Release notes 1.0"): pardiso - one of the fastest solvers (along with PaStiX) but not open-source, requires a different build of CalculiX (ccx_dynamic) and additional libraries not provided with FreeCAD, more reliable than PaStiX
  - spooles - direct solver with the support of multiple CPUs. The number of CPUs needs to be set in the [preferences](/FEM_Preferences#CalculiX "FEM Preferences") at _Solver defaults → Number of CPU's to use_.
  - iterativescaling - iterative solver with the lowest memory demands, suitable if the model contains mostly 3D elements
  - iterativecholesky - iterative solver with preconditioning with and with low memory demands, suitable if the model contains mostly 3D elements

- Data**Model Space** - [introduced in 1.0](/Release_notes_1.0 "Release notes 1.0"): switches between 3D and 2D analyses, the latter require surface geometry on the XY plane (on the right of the Y axis in the axisymmetric case) with [thickness definition](/FEM_ElementGeometry2D "FEM ElementGeometry2D") (value ignored in the axisymmetric case) and proper boundary conditions ([displacement boundary condition](/FEM_ConstraintDisplacement "FEM ConstraintDisplacement") with degrees of freedom X and Y has to be used instead of [fixed boundary condition](/FEM_ConstraintFixed "FEM ConstraintFixed")) and in-plane loads applied to edges

  - 3D - three-dimensional solid/shell/beam elements are used
  - plane stress - plane stress 2D solid elements are used
  - plane strain - plane strain 2D solid elements are used
  - axisymmetric - axisymmetric 2D solid elements are used

- Data**Output Frequency** - [introduced in 1.0](/Release_notes_1.0 "Release notes 1.0"): defines the frequency of results writing in increments (the default setting of 1 means that the results are written every increment, setting 2 would save the results every 2 increments and so on), particularly useful for nonlinear and transient simulations, helps reduce the clutter in the tree since currently a pair of results objects (CCX_Results and Pipeline_CCX_Results) is created for each results frame

- Data**Split Input Writer**:

  - false - write whole input into one \*.inp file to be used by CalculiX solver
  - true - split solver inputs into more \*.inp files, that can clarify hand editing

- Data**Thermo Mech Steady State**:

  - true - steady state thermo-mechanical analysis
  - false - transient thermo-mechanical analysis

- Data**Thermo Mech Type** - [introduced in 1.0](/Release_notes_1.0 "Release notes 1.0"):

  - coupled - coupled thermo-mechanical analysis
  - uncoupled - uncoupled thermo-mechanical analysis
  - pure heat transfer - purely thermal analysis (_\*HEAT TRANSFER_)

- Data**Time End**: time period of the step, used when parameter Data**Iterations User Defined Incrementations** or Data**Iterations User Defined Time Step Length** is _true_

- Data**Time Initial Step**: initial time increment of the step, used when parameter Data**Iterations User Defined Incrementations** or Data**Iterations User Defined Time Step Length** is _true_

- Data**Time Maximum Step** - [introduced in 1.0](/Release_notes_1.0 "Release notes 1.0"): maximum time increment of the step, used when parameter Data**Iterations User Defined Incrementations** or Data**Iterations User Defined Time Step Length** is _true_

- Data**Time Minimum Step** - [introduced in 1.0](/Release_notes_1.0 "Release notes 1.0"): minimum time increment of the step, used when parameter Data**Iterations User Defined Incrementations** or Data**Iterations User Defined Time Step Length** is _true_

- Data**Working Dir**: path to the working directory which will be used for CalculiX analysis files.

## Limitations

When running a CalculiX, you might end up with **error 4294977295**. This means you don't have enough RAM space. You have then 2 options:

1. reduce the number of mesh nodes, preferably by omitting geometry that is not absolutely necessary for your analysis
2. buy more RAM for your PC

## Notes

Original CalculiX documentation can be found at <http://dhondt.de/> in the "ccx" paragraph.

## Scripting

Retrieved from "<http://wiki.freecad.org/index.php?title=FEM_SolverCalculixCxxtools/en&oldid=1569004>"
