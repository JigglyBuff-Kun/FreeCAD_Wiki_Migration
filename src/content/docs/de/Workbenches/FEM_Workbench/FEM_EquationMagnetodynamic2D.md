---
title: FEM GleichungElektrodynamik2D
---

|                                                                                                 |
| ----------------------------------------------------------------------------------------------- |
| FEM GleichungElektrodynamik2D                                                                   |
| Menüeintrag                                                                                     |
| Solve → Electromagnetic Equations → Magnetodynamic2D equation                                   |
| Arbeitsbereich                                                                                  |
| [FEM](/FEM_Workbench/de "FEM Workbench/de")                                                     |
| Standardtastenkürzel                                                                            |
| _Keiner_                                                                                        |
| Eingeführt in Version                                                                           |
| 0.21                                                                                            |
| Siehe auch                                                                                      |
| [FEM GleichungElektrodynamik2D](/FEM_EquationMagnetodynamic/de "FEM EquationMagnetodynamic/de") |
|                                                                                                 |

## Beschreibung

This equation performs analyses using a 2D version of the [Maxwell's equations](https://en.wikipedia.org/wiki/Maxwell%27s_equations) when the unknown is the z-component (or φ-component).

For info about the math of the equation, see the [Elmer models manual](http://www.elmerfem.org/blog/documentation/), section _Computation of Magnetic Fields in 2D_.

For more general analyses in 3D using the Maxwell's equations FreeCAD supports Elmer's [Magnetodynamic equation](/FEM_EquationMagnetodynamic "FEM EquationMagnetodynamic"). Nevertheless, if it is possible to perform the analysis in 2D, this is recommended since the math behind this is then more simple and the calculation time is therefore faster.

## Anwendung

1. Add an ![](/images/FEM_SolverElmer.svg) [Elmer solver](/FEM_SolverElmer#Equations "FEM SolverElmer").
2. Select it in the [Tree view](/Tree_view "Tree view").
3. There are several ways to invoke the command:
   - Press the ![](/images/FEM_EquationMagnetodynamic2D.svg) [Magnetodynamic2D equation](/FEM_EquationMagnetodynamic2D "FEM EquationMagnetodynamic2D") button.
   - Select the **Solve → Electromagnetic Equations → Magnetodynamic2D equation** option from the menu.
4. Change the [equation's solver settings](#Solver_Settings) or the [general solver settings](/FEM_SolverElmer_SolverSettings "FEM SolverElmer SolverSettings") if necessary.

## Solver Settings

For the general solver settings, see the [Elmer solver settings](/FEM_SolverElmer_SolverSettings "FEM SolverElmer SolverSettings").

The magnetodynamic 2D equation provides these special settings:

- Daten**Angular Frequency**: The harmonic actuation frequency. It is only used if Daten**Is Harmonic** is set to _true_.
- Daten**Calculate Current Density**: Calculates the [current density](https://en.wikipedia.org/wiki/Current_density).
- Daten**Calculate Electric Field**: Calculates the [Electric vector field](https://en.wikipedia.org/wiki/Electric_field).
- Daten**Calculate Elemental Fields**: Calculates the electromagnetic fields for every mesh element. This is useful to see discontinuities in meshes.  
  **Note**: at the moment FreeCAD cannot display these results properly. Therefore it is at the moment of no practical use.
- Daten**Calculate Harmonic Loss**: Calculates the linear and quadratic harmonic power loss. See the [Elmer models manual](https://www.elmerfem.org/blog/documentation/), section _Loss Estimation Using the Fourier Series_ for details
- Daten**Calculate Joule Heating**: Calculates the [Joule heating](https://en.wikipedia.org/wiki/Joule_heating).
- Daten**Calculate Magnetic Strength**: Calculates the [Magnetic field strength](https://en.wikipedia.org/wiki/Magnetic_field).
- Daten**Calculate Maxwell Stress**: Calculates the [Maxwell stress tensor](https://en.wikipedia.org/wiki/Maxwell_stress_tensor) field.
- Daten**Calculate Nodal Fields**: Calculates the fields for every mesh node. The default is _true_. If no other Daten**Calculate \*** is set to _true_, it only calculates the magnetic flux density.
- Daten**Calculate Nodal Forces**: Calculates the forces for every mesh node. The results can be used for further mechanical analysis.
- Daten**Calculate Nodal Heating**: Calculates the Joule heating scalar field for every mesh node.
- Daten**Is Harmonic**: If the driving force is harmonically actuated (AC current). If set to _true_, Daten**Angular Frequency** must have a value > 0.

## Analysis Feature Information

The magnetodynamic 2D equation takes the following analysis features into account if they are set:

- ![](/images/FEM_ConstraintElectrostaticPotential.svg) [Electrostatic potential boundary condition](/FEM_ConstraintElectrostaticPotential "FEM ConstraintElectrostaticPotential")
- ![](/images/FEM_ConstraintCurrentDensity.svg) [Current density boundary condition](/FEM_ConstraintCurrentDensity "FEM ConstraintCurrentDensity")
- ![](/images/FEM_ConstraintMagnetization.svg) [Magnetization boundary condition](/FEM_ConstraintMagnetization "FEM ConstraintMagnetization")
- ![](/images/FEM_ConstantVacuumPermittivity.svg) [Constant vacuum permittivity](/FEM_ConstantVacuumPermittivity "FEM ConstantVacuumPermittivity")

## Ergebnisse

The available results depend on the [solver settings](#Solver_Settings). If none of the Daten**Calculate \*** settings was set to _true_, only the electric potential (called **av** in the results) is calculated. Otherwise also the corresponding results will be available.

The possible results are:

- Current density in

  A

  /

  m

  2
  {\displaystyle {\rm {A/m^{2}}}}
  ![{\displaystyle {\rm {A/m^{2}}}}](https://wikimedia.org/api/rest_v1/media/math/render/svg/43867b3d6808de93dfdf66697429ca88013a2368)

- Electric field vector values in

  V

  /
  m
  {\displaystyle {\rm {V/m}}}
  ![{\displaystyle {\rm {V/m}}}](https://wikimedia.org/api/rest_v1/media/math/render/svg/4fcd8f7093f303ba6608e014c763a4df6837819a)

- Harmonic power loss in

  W
  {\displaystyle {\rm {W}}}
  ![{\displaystyle {\rm {W}}}](https://wikimedia.org/api/rest_v1/media/math/render/svg/348101b89aedeceb2ebc93991ada7c21040495b7)

- Magnetic flux density in

  T
  {\displaystyle {\rm {T}}}
  ![{\displaystyle {\rm {T}}}](https://wikimedia.org/api/rest_v1/media/math/render/svg/36c6ae2607b1fee1a67ea90ada529384f2d435ca)

- Maxwell stress tensor values in

  A
  s

  /

  m

  3
  {\displaystyle {\rm {As/m^{3}}}}
  ![{\displaystyle {\rm {As/m^{3}}}}](https://wikimedia.org/api/rest_v1/media/math/render/svg/1c4023218c46a9838fef5aecb785149f5d42b53a)

- Magnetic field strength in

  A

  /
  m
  {\displaystyle {\rm {A/m}}}
  ![{\displaystyle {\rm {A/m}}}](https://wikimedia.org/api/rest_v1/media/math/render/svg/8a9bff2cfdd6baeb5d1214e018cb8a560247eb46)

- Nodal force in

  N
  {\displaystyle {\rm {N}}}
  ![{\displaystyle {\rm {N}}}](https://wikimedia.org/api/rest_v1/media/math/render/svg/8a5ac694020ec28aa0bbf32e3cee832638c38cb9)

- Joule heating in

  J
  {\displaystyle {\rm {J}}}
  ![{\displaystyle {\rm {J}}}](https://wikimedia.org/api/rest_v1/media/math/render/svg/77a638267bd97d1b235d2c7eabef24adfcf44530)

- Potential in

  V
  {\displaystyle {\rm {V}}}
  ![{\displaystyle {\rm {V}}}](https://wikimedia.org/api/rest_v1/media/math/render/svg/de56ca37a64ca666d4f60a961bafffb588cfe87f)

Retrieved from "<http://wiki.freecad.org/index.php?title=FEM_EquationMagnetodynamic2D/de&oldid=1569117>"
