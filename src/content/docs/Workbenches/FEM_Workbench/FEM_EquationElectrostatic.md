---
title: FEM EquationElectrostatic
---

|                                                                                                                                                                                                   |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| FEM EquationElectrostatic                                                                                                                                                                         |
| Menu location                                                                                                                                                                                     |
| Solve → Electromagnetic Equations → Electrostatic equation                                                                                                                                        |
| Workbenches                                                                                                                                                                                       |
| [FEM](/FEM_Workbench "FEM Workbench")                                                                                                                                                             |
| Default shortcut                                                                                                                                                                                  |
| _None_                                                                                                                                                                                            |
| Introduced in version                                                                                                                                                                             |
| 0.19                                                                                                                                                                                              |
| See also                                                                                                                                                                                          |
| [FEM Electricforce equation](/FEM_EquationElectricforce "FEM EquationElectricforce"), [FEM Example Capacitance Two Balls](/FEM_Example_Capacitance_Two_Balls "FEM Example Capacitance Two Balls") |
|                                                                                                                                                                                                   |

## Description

This equation performs electrostatic analyses using [Gauss' law](https://en.wikipedia.org/wiki/Gauss%27s_law).

For info about the math of the equation, see the [Elmer models manual](http://www.elmerfem.org/blog/documentation/), section _Electrostatics_.

## Usage

1. Add an ![](/images/FEM_SolverElmer.svg) [Elmer solver](/FEM_SolverElmer#Equations "FEM SolverElmer").
2. Select it in the [Tree view](/Tree_view "Tree view").
3. There are several ways to invoke the command:
   - Press the ![](/images/FEM_EquationElectrostatic.svg) [Electrostatic equation](/FEM_EquationElectrostatic "FEM EquationElectrostatic") button.
   - Select the **Solve → Electromagnetic Equations → Electrostatic equation** option from the menu.
4. Change the [equation's solver settings](#Solver_Settings) or the [general solver settings](/FEM_SolverElmer_SolverSettings "FEM SolverElmer SolverSettings") if necessary.

## Solver Settings

For the general solver settings, see the [Elmer solver settings](/FEM_SolverElmer_SolverSettings "FEM SolverElmer SolverSettings").

The electrostatic equation provides these special settings:

- Data**Calculate Capacitance Matrix**: Calculates the capacitance matrix. The matrix contains the point charges of the mesh knots.
- Data**Calculate Electric Energy**: Calculates the [electric potential energy](https://en.wikipedia.org/wiki/Electric_potential_energy).
- Data**Calculate Electric Field**: Calculates the [electric field](https://en.wikipedia.org/wiki/Electric_field).
- Data**Calculate Electric Flux**: Calculates the [electric flux](https://en.wikipedia.org/wiki/Electric_flux).
- Data**Calculate Surface Charge**: Calculates the [surface charge](https://en.wikipedia.org/wiki/Surface_charge).
- Data**Capacitance Matrix Filename**: File in which the capacitance matrix is being saved. It is only used if Data**Calculate Capacitance Matrix** is set to _true_.
- Data**Constant Weights**: If constant weighting for results is used.
- Data**Potential Difference**: Potential difference in Volt for which the capacitance is calculated. It is only used if Data**Calculate Capacitance Matrix** is set to _false_. Therefore in fact this setting specifies the voltage between the electrodes of a simple capacitor. Note that the given voltage has to be consistent with the potentials defined in the boundary conditions.

## Analysis Feature Information

The electrostatic equation takes the following analysis features into account if they are set:

- ![](/images/FEM_ConstraintElectrostaticPotential.svg) [Electrostatic potential boundary condition](/FEM_ConstraintElectrostaticPotential "FEM ConstraintElectrostaticPotential")
- ![](/images/FEM_ConstraintElectricChargeDensity.svg) [Electric charge density](/FEM_ElectricChargeDensity "FEM ElectricChargeDensity") - [introduced in 1.1](/Release_notes_1.1 "Release notes 1.1")
- ![](/images/FEM_ConstantVacuumPermittivity.svg) [Constant vacuum permittivity](/FEM_ConstantVacuumPermittivity "FEM ConstantVacuumPermittivity")

### Note

Except for calculations in 2D, for ![](/images/FEM_ConstraintElectrostaticPotential.svg) [electrostatic potential boundary conditions](/FEM_ConstraintElectrostaticPotential "FEM ConstraintElectrostaticPotential") it is important that they act on a face or body. Boundary conditions in 3D set to lines or vertices are not recognized by the Elmer solver.

## Results

The available results depend on the [solver settings](#Solver_Settings). If none of the Data**Calculate \*** settings was set to _true_, only the electric force density and the electric potential are calculated. Otherwise also the corresponding results will be available.

The possible results are:

- Electric energy density in

  J

  /

  m

  3
  {\displaystyle {\rm {J/m^{3}}}}
  ![{\displaystyle {\rm {J/m^{3}}}}](https://wikimedia.org/api/rest_v1/media/math/render/svg/7ed87a7c7bc9e1ccd3164a9adcc722d5330e2bd4)

- Electric field in

  V

  /
  m
  {\displaystyle {\rm {V/m}}}
  ![{\displaystyle {\rm {V/m}}}](https://wikimedia.org/api/rest_v1/media/math/render/svg/4fcd8f7093f303ba6608e014c763a4df6837819a)

- Electric flux in

  A
  ⋅
  s

  /

  m

  2
  {\displaystyle {\rm {A\cdot s/m^{2}}}}
  ![{\displaystyle {\rm {A\cdot s/m^{2}}}}](https://wikimedia.org/api/rest_v1/media/math/render/svg/0498caa2492aa6dc4af5dcccd7c95a43c3e1a3cc)

- Electric force density in

  N

  /

  m

  2
  {\displaystyle {\rm {N/m^{2}}}}
  ![{\displaystyle {\rm {N/m^{2}}}}](https://wikimedia.org/api/rest_v1/media/math/render/svg/a90004e7cf2472e320272d782c911ff786f8be02)

- Potential in

  V
  {\displaystyle {\rm {V}}}
  ![{\displaystyle {\rm {V}}}](https://wikimedia.org/api/rest_v1/media/math/render/svg/de56ca37a64ca666d4f60a961bafffb588cfe87f)

- Potential loads in

  C
  {\displaystyle {\rm {C}}}
  ![{\displaystyle {\rm {C}}}](https://wikimedia.org/api/rest_v1/media/math/render/svg/f18a828c02c22bd8096604e61ed72fb32b171e4c)

Retrieved from "<http://wiki.freecad.org/index.php?title=FEM_EquationElectrostatic/en&oldid=1569094>"
