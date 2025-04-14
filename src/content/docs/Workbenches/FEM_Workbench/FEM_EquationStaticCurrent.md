---
title: FEM EquationStaticCurrent
---

|                                                                                                                                                                                                                                                                                       |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| FEM EquationStaticCurrent                                                                                                                                                                                                                                                             |
| Menu location                                                                                                                                                                                                                                                                         |
| Solve → Electromagnetic Equations → Static current equation                                                                                                                                                                                                                           |
| Workbenches                                                                                                                                                                                                                                                                           |
| [FEM](/FEM_Workbench "FEM Workbench")                                                                                                                                                                                                                                                 |
| Default shortcut                                                                                                                                                                                                                                                                      |
| _None_                                                                                                                                                                                                                                                                                |
| Introduced in version                                                                                                                                                                                                                                                                 |
| 1.1                                                                                                                                                                                                                                                                                   |
| See also                                                                                                                                                                                                                                                                              |
| [Electrostatic potential boundary condition](/FEM_ConstraintElectrostaticPotential "FEM ConstraintElectrostaticPotential"), [Current density boundary condition](/FEM_ConstraintCurrentDensity "FEM ConstraintCurrentDensity"), [Heat equation](/FEM_EquationHeat "FEM EquationHeat") |
|                                                                                                                                                                                                                                                                                       |

## Description

This equation performs static current conduction analyses. It solves the electrostatic potential in a conducting medium allowing volume currents and electric power loss ([Joule heating](https://en.wikipedia.org/wiki/Joule_heating)) to be derived.

For info about the math of the equation, see the [Elmer models manual](https://www.elmerfem.org/blog/documentation/), section _Static Current Conduction_.

## Usage

1. Add an ![](/images/FEM_SolverElmer.svg) [Elmer solver](/FEM_SolverElmer#Equations "FEM SolverElmer").
2. Select it in the [Tree view](/Tree_view "Tree view").
3. There are several ways to invoke the command:
   - Press the ![](/images/FEM_EquationStaticCurrent.svg) [Static current equation](/FEM_EquationStaticCurrent "FEM EquationStaticCurrent") button.
   - Select the **Solve → Electromagnetic Equations → Static current equation** option from the menu.
4. Change the [equation's solver settings](#Solver_Settings) or the [general solver settings](/FEM_SolverElmer_SolverSettings "FEM SolverElmer SolverSettings") if necessary.

## Solver Settings

For the general solver settings, see the [Elmer solver settings](/FEM_SolverElmer_SolverSettings "FEM SolverElmer SolverSettings").

The static current equation provides these special settings:

- Data**Calculate Joule Heating**: Calculates the Joule heating.
- Data**Calculate Nodal Heating**: Calculates the nodal heating that can be used to couple the heat equation optimally when using conforming finite element meshes.
- Data**Calculate Volume Current**: Calculates the volume current.
- Data**Constant Weights**: Turns constant weighting on for the results.
- Data**Current**: Current control value.
- Data**Current Control**: Apply current control with the desired current.
- Data**Heat Source**: Use Joule heating as a heat source in combination with heat equation.
- Data**Power**: Power control value.
- Data**Power Control**: Apply power control with the desired heating power.

## Analysis Feature Information

The static current equation takes the following analysis features into account if they are set:

- ![](/images/FEM_ConstraintElectrostaticPotential.svg) [Electrostatic potential boundary condition](/FEM_ConstraintElectrostaticPotential "FEM ConstraintElectrostaticPotential")
- ![](/images/FEM_ConstraintCurrentDensity.svg) [Current density boundary condition](/FEM_ConstraintCurrentDensity "FEM ConstraintCurrentDensity")

### Note

Except for calculations in 2D, for ![](/images/FEM_ConstraintElectrostaticPotential.svg) [electrostatic potential boundary conditions](/FEM_ConstraintElectrostaticPotential "FEM ConstraintElectrostaticPotential") it is important that they act on a face or body. Boundary conditions in 3D set to lines or vertices are not recognized by the Elmer solver.

## Results

The available results depend on the [solver settings](#Solver_Settings). If none of the Data**Calculate \*** settings was set to _true_, only the electric potential is calculated. Otherwise also the corresponding results will be available.

The possible results are:

- Joule heating in

  W

  /

  m

  3
  {\displaystyle {\rm {W/m^{3}}}}
  ![{\displaystyle {\rm {W/m^{3}}}}](https://wikimedia.org/api/rest_v1/media/math/render/svg/4705de6ab2ed2eb79b03ed63c1763185126cf1fc)

- Nodal Joule heating in

  W
  {\displaystyle {\rm {W}}}
  ![{\displaystyle {\rm {W}}}](https://wikimedia.org/api/rest_v1/media/math/render/svg/348101b89aedeceb2ebc93991ada7c21040495b7)

- Volume current in

  A

  /

  m

  2
  {\displaystyle {\rm {A/m^{2}}}}
  ![{\displaystyle {\rm {A/m^{2}}}}](https://wikimedia.org/api/rest_v1/media/math/render/svg/43867b3d6808de93dfdf66697429ca88013a2368)

- Potential in

  V
  {\displaystyle {\rm {V}}}
  ![{\displaystyle {\rm {V}}}](https://wikimedia.org/api/rest_v1/media/math/render/svg/de56ca37a64ca666d4f60a961bafffb588cfe87f)

Retrieved from "<http://wiki.freecad.org/index.php?title=FEM_EquationStaticCurrent/en&oldid=1569122>"
