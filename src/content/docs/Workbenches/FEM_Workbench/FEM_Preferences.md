---
title: FEM Preferences
---

## Introduction

The preferences for the ![](/images/Workbench_FEM.svg) [FEM Workbench](/FEM_Workbench "FEM Workbench") can be found in the [Preferences Editor](/Preferences_Editor "Preferences Editor"). In the menu select **Edit → Preferences...** and then **![](/images/Workbench_FEM.svg) FEM**. This group is only available if the FEM Workbench has been loaded in the current FreeCAD session.

There are seven pages: [General](#General), [Gmsh](#Gmsh), [CalculiX](#CalculiX), [Elmer](#Elmer), [Mystran](#Mystran), [Z88](#Z88) and [Netgen](#Netgen). All pages apart from the first control how FEM interacts with external meshers and solvers.

The currently supported external solvers are:

- ![](/images/FEM_SolverCalculixCxxtools.svg) [CalculiX](/FEM_SolverCalculixCxxtools "FEM SolverCalculixCxxtools")
- ![](/images/FEM_SolverElmer.svg) [Elmer](/FEM_SolverElmer "FEM SolverElmer")
- ![](/images/FEM_SolverMystran.svg) [Mystran](/FEM_SolverMystran "FEM SolverMystran")
- ![](/images/FEM_SolverZ88.svg) [Z88](/FEM_SolverZ88 "FEM SolverZ88")

## General

![](/images/Preferences_FEM_Page_General.png)

On this page you can specify the following:

| Name                                                                       | Description                                                                                                                                                    |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Working directory**                                                      | In what directory the mesh and solver files should be stored                                                                                                   |
| **Create mesh groups for analysis reference shapes (highly experimental)** | If there are several meshes they will be grouped                                                                                                               |
| **Keep results on calculation re-run**                                     | Existing [Result objects](/FEM_ResultShow "FEM ResultShow") will be kept, otherwise overwritten by a new solver run                                            |
| **Restore result dialog settings**                                         | If checked, the [Show result](/FEM_ResultShow "FEM ResultShow") dialog is opened with the last used dialog settings                                            |
| **Hide analysis features when opening result dialog**                      | The constraints will be hidden in the model view when the [Show result](/FEM_ResultShow "FEM ResultShow") dialog is opened                                     |
| **Default solver**                                                         | Default solver to be added when adding an [Analysis container](/FEM_Analysis "FEM Analysis"). ([introduced in 0.21](/Release_notes_0.21 "Release notes 0.21")) |

## Gmsh

![](/images/Preferences_FEM_Page_Gmsh.png)

On this page you can specify the following:

| Name                                   | Description                                                                                                                                      |
| -------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| **Search in known binary directories** | If checked, FreeCAD will look for the binary of [Gmsh](/FEM_MeshGmshFromShape "FEM MeshGmshFromShape") in known (usual) directories              |
| **Gmsh binary path**                   | The path to the binary of [Gmsh](/FEM_MeshGmshFromShape "FEM MeshGmshFromShape")                                                                 |
| **Log verbosity**                      | Log verbosity level: Silent, Errors, Warnings, Direct, Information, Status or Debug. [introduced in 1.1](/Release_notes_1.1 "Release notes 1.1") |

## CalculiX

![](/images/Preferences_FEM_Page_CalculiX.png)

On this page you can specify the following:

| Name                                          | Description                                                                                                                                                                         |
| --------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Search in known binary directories**        | If checked, FreeCAD will look for the binary of [CalculiX](/FEM_SolverCalculixCxxtools "FEM SolverCalculixCxxtools") in known (usual) directories                                   |
| **ccx binary path**                           | The path to the binary of [CalculiX](/FEM_SolverCalculixCxxtools "FEM SolverCalculixCxxtools")                                                                                      |
| **Use internal editor for \*.inp files**      | If checked, a built-in \*.inp file editor with syntax highlighting is used when editing CalculiX input decks.                                                                       |
| **External editor**                           | The path to the external \*.inp file editor.                                                                                                                                        |
| **Split writing of \*.inp**                   | If checked, multiple \*.inp files are written and the main input deck uses the \*INCLUDE keywords to reference the other ones. If unchecked, a single large \*.inp file is written. |
| **Type**                                      | Default analysis type: Static, Frequency, Thermomech, Check Mesh or Buckling.                                                                                                       |
| **Number of CPU's to use**                    | Number of physical processor cores to use for parallel computing.                                                                                                                   |
| **Matrix solver**                             | Default matrix solver: Default, PaStiX, Pardiso, Spooles equation solver, Iterative Scaling or Cholesky iterative solver.                                                           |
| **Non-linear geometry**                       | If checked, geometric nonlinearity is included by default.                                                                                                                          |
| **Time incrementation control parameter**     | If checked, uses non-default solver controls (not recommended in most cases).                                                                                                       |
| **Maximum number of iterations**              | Maximum number of increments within an analysis step.                                                                                                                               |
| **Time Initial Step**                         | Initial time increment size (can be changed by the solver if automatic incrementation is used).                                                                                     |
| **Time End**                                  | Total simulated time.                                                                                                                                                               |
| **Time Minimum Step**                         | Minimum allowable time increment size.                                                                                                                                              |
| **Time Maximum Step**                         | Maximum allowable time increment size.                                                                                                                                              |
| **Beam, shell element 3D output format**      | If checked, results for 1D and 2D elements are displayed using 3D representation by default.                                                                                        |
| **Analysis type (transient or steady state)** | If checked, thermomechanical analyses are of steady-state type by default.                                                                                                          |
| **Eigenmode number**                          | Default number of requested eigenmodes in frequency analyses.                                                                                                                       |
| **High frequency limit**                      | Default upper limit of evaluated eigenfrequencies in frequency analyses.                                                                                                            |
| **Low frequency limit**                       | Default lower limit of evaluated eigenfrequencies in frequency analyses.                                                                                                            |

## Elmer

![](/images/Preferences_FEM_Page_Elmer.png)

On this page you can specify the following:

| Name                                                | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| --------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **ElmerGrid: Search in known binary directories**   | If checked, FreeCAD will look for the binary of the grid writer utility of the [Elmer](/FEM_SolverElmer "FEM SolverElmer") in known (usual) directories                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| **ElmerGrid binary path**                           | The path to the binary of the grid writer utility of the [Elmer](/FEM_SolverElmer "FEM SolverElmer")                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| **ElmerSolver: Search in known binary directories** | If checked, FreeCAD will look for the solver binary of [Elmer](/FEM_SolverElmer "FEM SolverElmer") in known (usual) directories                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| **ElmerSolver binary path**                         | The path to the solver binary of [Elmer](/FEM_SolverElmer "FEM SolverElmer")                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| **CPU cores to be used**                            | The number of CPU cores that will be used to perform the solving. **Important:** Elmer divides the mesh into portions. The number of portions is equal to the number of CPU cores used. This can result in side-effects: _ Depending on your mesh a smaller number of CPU cores can run faster than using more cores. _ In some cases using e.g. 12 cores does not converge while 8 cores will work fine. The reason is that at some point the mesh portions become too small. So it is often necessary to adjust the number of cores, depending on the mesh. **Known limitation:** For some simulation types you first need to install Elmer modules to enable multi-threading. Check the Elmer report for info about this. A typical case is that for direct solving one has to install the MUMPS module. |
| **Filter results**                                  | The mesh volume regions processed by each CPU core will be merged to make the volume boundaries invisible.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| **Use binary format**                               | If checked, binary results format is used. Otherwise, ASCII format is used. Binary format may cause lack of results due to a bug. [introduced in 1.1](/Release_notes_1.1 "Release notes 1.1")                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| **Save geometry IDs**                               | If checked, the index of geometric entities is saved in the results. [introduced in 1.1](/Release_notes_1.1 "Release notes 1.1")                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |

## Mystran

![](/images/Preferences_FEM_Page_Mystran.png)

On this page you can specify the following:

| Name                                   | Description                                                                                                                        |
| -------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| **Search in known binary directories** | If checked, FreeCAD will look for the binary of the [Mystran](/FEM_SolverMystran "FEM SolverMystran") in known (usual) directories |
| **Mystran binary path**                | The path to the binary of the [Mystran](/FEM_SolverMystran "FEM SolverMystran")                                                    |
| **Write comments to input file**       |                                                                                                                                    |

## Z88

![](/images/Preferences_FEM_Page_Z88.png)

On this page you can specify the following:

| Name                                   | Description                                                                                                                                                                                                               |
| -------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Search in known binary directories** | If checked, FreeCAD will look for the binary named _z88r_ of the [Z88 solver](/FEM_SolverZ88 "FEM SolverZ88") in known (usual) directories                                                                                |
| **z88r binary path**                   | The path to the binary named _z88r_ of the [Z88 solver](/FEM_SolverZ88 "FEM SolverZ88")                                                                                                                                   |
| **Solver method**                      | The solver method used by the [Z88 solver](/FEM_SolverZ88 "FEM SolverZ88") for new simulations.                                                                                                                           |
| **Max places in stiffness matrix**     | This is relevant when the solver method _Simple Cholesky_ is used. After starting the solver, it might tell you that you need to increase the _MAXGS_ value. In this case increase the max places and re-run the solver.  |
| **Max places in coincidence vector**   | This is relevant when one of the iterative solver methods is used. After starting the solver, it might tell you that you need to increase the _MAXKOI_ value. In this case increase the max places and re-run the solver. |

## Netgen

![](/images/Preferences_FEM_Page_Netgen.png)

On this page you can specify the following:

| Name              | Description                                                                                                                                                                                                                                                                                                                                          |
| ----------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Legacy Netgen** | If checked, the legacy [Netgen](/FEM_MeshNetgenFromShape "FEM MeshNetgenFromShape") implementation is used by FreeCAD FEM. This might be needed for users (mostly with older and Windows computers) who can't install the Netgen Python bindings necessary for the new implementation. ([introduced in 1.0](/Release_notes_1.0 "Release notes 1.0")) |

Retrieved from "<http://wiki.freecad.org/index.php?title=FEM_Preferences/en&oldid=1516252>"
