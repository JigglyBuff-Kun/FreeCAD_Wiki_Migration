---
title: FEM SolverElmer/ru
---

|                                                                                                                                                                                  |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| FEM SolverElmer                                                                                                                                                                  |
| Расположение в меню                                                                                                                                                              |
| Solve → solver Elmer                                                                                                                                                             |
| Верстаки                                                                                                                                                                         |
| [FEM](/FEM_Workbench/ru "FEM Workbench/ru")                                                                                                                                      |
| Быстрые клавиши                                                                                                                                                                  |
| _Нет_                                                                                                                                                                            |
| Представлено в версии                                                                                                                                                            |
| -                                                                                                                                                                                |
| См. также                                                                                                                                                                        |
| [FEM Solver CalculiX](/FEM_SolverCalculiX/ru "FEM SolverCalculiX/ru"), [FEM Solver Z88](/FEM_SolverZ88/ru "FEM SolverZ88/ru"), [Учебник МКЭ](/FEM_tutorial/ru "FEM tutorial/ru") |
|                                                                                                                                                                                  |

## Описание

Elmer - это программное обеспечение для мультифизического моделирования с открытым исходным кодом, которое в основном разрабатывается CSC - IT Center for Science (CSC). Разработка Elmer началась в 1995 году в сотрудничестве с финскими университетами, исследовательскими институтами и промышленностью. После публикации с открытым исходным кодом в 2005 году использование и развитие Elmer стало международным.

Элмер включает, в частности, физические модели гидродинамики, строительной механики, электромагнетизма, теплопередачи и акустики. Они описываются уравнениями в частных производных, которые Элмер решает методом конечных элементов (МКЭ). <https://www.csc.fi/web/elmer>

Создание объекта SolverElmer в контейнере анализа в FreeCAD дает доступ к уравнениям Elmer для простого или мультифизического анализа.

Since FreeCAD already has an extensive integration of ![](/images/FEM_SolverCalculiX.svg) [Calculix](/FEM_SolverCalculixCxxtools "FEM SolverCalculixCxxtools") and ![](/images/FEM_SolverZ88.svg) [Z88](/FEM_SolverZ88 "FEM SolverZ88") as solvers for mechanical and thermo-mechanical analysis, Elmer will be preferred for computational fluid dynamics (CFD), heat, electrostatics and electrodynamics. It can also be used for mechanical FEA through the Elasticity equation or any combination of the aforementioned equations. This combination makes Elmer the preferred choice for multi-physics analyses.

## Установка

Elmer requires two components to be interfaced with FreeCAD:

- ElmerGrid is the interface handling meshes
- ElmerSolver is handling the computation.

There are standalone programs for both of these applications but their installation and usage are beyond the scope of the FreeCAD integration.

1. Download and install the version best suited to your Operating System ([Windows](https://www.nic.funet.fi/pub/sci/physics/elmer/bin/windows/) or [Linux](https://www.nic.funet.fi/pub/sci/physics/elmer/bin/linux/Readme1st.txt)). It is recommended to install the `mpi` version to get multi-core support ([introduced in 0.21](/Release_notes_0.21 "Release notes 0.21")).
2. In FreeCAD go to **Edit → Preferences → FEM → Elmer**
3. In the [FEM preferences](/FEM_Preferences#Elmer "FEM Preferences") set the correct path for both `ElmerGrid` and `ElmerSolver`, or 0.21 and above: set the path for `ElmerSolver_mpi` instead of `ElmerSolver` to make Elmer use all available CPU cores.

   : ![Elmer Tab in FEM Preferences](/images/Preferences-ElmerPath.png)
   : Elmer preferences dialog menu showing fields to locate important Elmer binaries on Windows OS

You are ready to use Elmer in FreeCAD.

0.19 and below: Now start FreeCAD and change the units scheme to _MKS_ in the [preferences](/Preferences_Editor#Units "Preferences Editor"). See [Notes](#Notes).

## Применение

1. Switch to the ![](/images/Workbench_FEM.svg) [FEM Workbench](/FEM_Workbench "FEM Workbench")
2. Create an [Analysis](/FEM_Analysis "FEM Analysis") container by pressing the ![](/images/FEM_Analysis.svg) icon.
3. Create a FEM Solver for Elmer, by pressing the ![](/images/FEM_SolverElmer.svg) icon.

   - Note: A successful analysis will require at least a Model (2D or 3D), a Material ([Fluid](/FEM_MaterialFluid "FEM MaterialFluid") or [Solid](/FEM_MaterialSolid "FEM MaterialSolid")), a [Mesh](/FEM_MeshGmshFromShape "FEM MeshGmshFromShape"), Equations and Boundary conditions

   : ![](/images/Elmer_typical_file_tree.png)
   : Example of a [tree view](/Tree_view "Tree view") once a Solver for Elmer is activated

4. Edit the parameters for the solver in the [Property editor](/Property_editor "Property editor") Data tab of the SolverElmer object in the model [tree view](/Tree_view "Tree view")
5. Double-click on the ![](/images/FEM_SolverElmer.svg) SolverElmer object to prepare an analysis run

   : ![](/images/ElmerSolver_TaskPanel.png)
   : Dialog box to run an Elmer analysis

6. Select the path to write the analysis in by clicking ...
7. Click Write to write the case files in the directory selected previously
8. Click Run to start the analysis

### Equations

- To perform the analysis of a particular physical behavior, an Equation must be used (Flow, Heat, Electrostatics...)
- Disambiguation: The term _Equation_ is used in FreeCAD to describe the different physical mechanisms, the term _Solver_ is used in all Elmer documents. Thus when using in FreeCAD the "Flow Equation", in reality Elmer uses the "Flow Solver" to find a solution to the Navier-Stokes equation.
- One or several equations can be used at once with Elmer by simply adding the equation object under the SolverElmer object, thus performing multi-physics analyses:

1. Click on the ![](/images/FEM_SolverElmer.svg) SolverElmer object in the model [tree view](/Tree_view "Tree view")
2. Select one or several of the available equations:
   - ![](/images/FEM_EquationDeformation.svg) [Deformation equation](/FEM_EquationDeformation "FEM EquationDeformation")
   - ![](/images/FEM_EquationElasticity.svg) [Elasticity equation](/FEM_EquationElasticity "FEM EquationElasticity")
   - ![](/images/FEM_EquationElectricforce.svg) [Electricforce equation](/FEM_EquationElectricforce "FEM EquationElectricforce")
   - ![](/images/FEM_EquationElectrostatic.svg) [Electrostatic equation](/FEM_EquationElectrostatic "FEM EquationElectrostatic")
   - ![](/images/FEM_EquationFlow.svg) [Flow equation](/FEM_EquationFlow "FEM EquationFlow")
   - ![](/images/FEM_EquationFlux.svg) [Flux equation](/FEM_EquationFlux "FEM EquationFlux")
   - ![](/images/FEM_EquationHeat.svg) [Heat equation](/FEM_EquationHeat "FEM EquationHeat")
   - ![](/images/FEM_EquationMagnetodynamic.svg) [Magnetodynamic equation](/FEM_EquationMagnetodynamic "FEM EquationMagnetodynamic")
   - ![](/images/FEM_EquationMagnetodynamic2D.svg) [Magnetodynamic 2D equation](/FEM_EquationMagnetodynamic2D "FEM EquationMagnetodynamic2D")
   - ![](/images/FEM_EquationStaticCurrent.svg) [Static current equation](/FEM_EquationStaticCurrent "FEM EquationStaticCurrent") - [introduced in 1.1](/Release_notes_1.1 "Release notes 1.1")

### Solver Settings

- Depending on the used equations, you must change the default solver settings. They are explained in the [Elmer solver settings](/FEM_SolverElmer_SolverSettings "FEM SolverElmer SolverSettings").
- The solver will by default perform a steady-state simulation. To perform a transient simulation (how the model behaves/develops over time) see the section _Timestepping (transient analyses)_ in the [Elmer solver settings](</FEM_SolverElmer_SolverSettings#Timestepping_(transient_analyses)> "FEM SolverElmer SolverSettings").

### Visualization

The Elmer solver results are output in [result pipeline](/FEM_PostPipelineFromResult "FEM PostPipelineFromResult") objects. ([Result objects](/FEM_ResultShow "FEM ResultShow") are not possible.)

[introduced in 0.21](/Release_notes_0.21 "Release notes 0.21"):

For transient analyses you get a result pipeline for every output time step. To edit all of them at once, select them in the [tree view](/Tree_view "Tree view") and set the parameters in the [property editor](/Property_editor "Property editor").
To make animations of the temporal progression, the best method is currently to:

- Hide the view of the first time result.
- Select an object of your choice in the tree view, but not a pipeline object.
- Hover with the mouse over the pipelines.

The result is an animation like this:

![](/images/ElmerSolver_TransientAnalysis.gif)

## Notes

- **Important**: in order to get sensible results and to be able to exchange the Elmer input files (named _case.sif_) with others, all values in the input files must be in SI units. In FreeCAD version 0.19 and earlier this is only the case if you use the unit scheme MKS in the [preferences](/Preferences_Editor#Units "Preferences Editor").
- Parameters for the Solver and for the Equations are independently set through the [Property editor](/Property_editor "Property editor") Data tab of their respective objects in the [tree view](/Tree_view "Tree view").
- Each equation will have a priority, for example, if trying see the effect of a convective flow of hot air, the equation for Flow should be solved with higher priority than Heat, otherwise the solver will first solve Heat through conduction and then Flow.
- 2D vs 3D cases: Elmer can be used to solve both 2D and 3D cases. However, when defining a 2D case, the faces need to be mapped in the XY plane of FreeCAD, otherwise the solver will try to compute a 3D case on a face, and normal vectors will be under-defined. Further information can be found in the FreeCAD forums: <https://forum.freecadweb.org/viewtopic.php?f=18&t=48175>

## Документация

The following link gives access to the full [documentation for Elmer](https://www.nic.funet.fi/pub/sci/physics/elmer/doc/). This includes the manuals as well as tutorials. Note that documentation and files appended with "gui" generally concern the usage of the Elmer GUI and not the FreeCAD implementation of Elmer.

Retrieved from "<http://wiki.freecad.org/index.php?title=FEM_SolverElmer/ru&oldid=1568122>"
