---
title: FEM GleichungElektrodynamik
---

|                                                                                                 |
| ----------------------------------------------------------------------------------------------- |
| FEM GleichungElektrodynamik                                                                     |
| Menüeintrag                                                                                     |
| Lösen → Electromagnetic Equations → Magnetodynamic equation                                     |
| Arbeitsbereich                                                                                  |
| [FEM](/FEM_Workbench/de "FEM Workbench/de")                                                     |
| Standardtastenkürzel                                                                            |
| _Keiner_                                                                                        |
| Eingeführt in Version                                                                           |
| 0.21                                                                                            |
| Siehe auch                                                                                      |
| [GleichungElektrodynamik2D](/FEM_EquationMagnetodynamic2D/de "FEM EquationMagnetodynamic2D/de") |
|                                                                                                 |

## Description

This equation perform analyses using the [Maxwell's equations](https://en.wikipedia.org/wiki/Maxwell%27s_equations).

For info about the math of the equation, see the [Elmer models manual](http://www.elmerfem.org/blog/documentation/), section _Computation of Magnetic Fields in 3D_.

If it is possible to calculate in 2D, simpler math can be used resulting in faster solving times. For 2D, FreeCAD supports therefore Elmer's [Magnetodynamic 2D equation](/FEM_EquationMagnetodynamic2D "FEM EquationMagnetodynamic2D").

## Anwendung

1. Add an ![](/images/FEM_SolverElmer.svg) [Elmer solver](/FEM_SolverElmer#Equations "FEM SolverElmer").
2. Select it in the [Tree view](/Tree_view "Tree view").
3. There are several ways to invoke the command:
   - Press the ![](/images/FEM_EquationMagnetodynamic.svg) [Magnetodynamic equation](/FEM_EquationMagnetodynamic "FEM EquationMagnetodynamic") button.
   - Select the **Solve → Electromagnetic Equations → Magnetodynamic equation** option from the menu.
4. Change the [equation's solver settings](#Solver_Settings) or the [general solver settings](/FEM_SolverElmer_SolverSettings "FEM SolverElmer SolverSettings") if necessary.
5. It is recommend to set in the [Linear System solver settings](/FEM_SolverElmer_SolverSettings#Linear_System "FEM SolverElmer SolverSettings") the Daten**Linear Iterative Method** to **BiCGStabl** , the Daten**BiCGstabl Degree** to **4** and Daten**Linear Preconditioning** to **None**. This assures the equation can be solved in most cases. If so, these parameters can be changed if necessary.

## Solver Settings

For the general solver settings, see the [Elmer solver settings](/FEM_SolverElmer_SolverSettings "FEM SolverElmer SolverSettings").

The magnetodynamic equation provides these special settings:

### Linear System

- Daten**Linear System Refactorize**: Refactorizes the system matrix.

### Magnetodynamic

- Daten**Angular Frequency**: The harmonic actuation frequency. It is only used if Daten**Is Harmonic** is set to _true_.
- Daten**Automated Source Projection BCs**: See Elmer [Elmer models manual](https://www.elmerfem.org/blog/documentation/), section _Computation of Magnetic Fields in 3D_ for info.
- Daten**FixInput Current Density**: Ensures divergence-freeness of current density.
- Daten**Is Harmonic**: If the driving force is harmonically actuated (AC current). If set to _true_, Daten**Angular Frequency** must have a value > 0.
- Daten**Lagrange Gauge Penalization Coefficient**: See Elmer [Elmer models manual](https://www.elmerfem.org/blog/documentation/), section _Computation of Magnetic Fields in 3D_ for info.
- Daten**Quadratic Approximation**: Enables second-order approximation of driving current.  
  **Note:** The default order of [Gmsh meshes](/FEM_MeshGmshFromShape "FEM MeshGmshFromShape") in FreeCAD is 2nd order. When using 2nd order meshes, it is mandatory to set this option to _true_. Otherwise you will get this error: _ERROR:: GetEdgeBasis: Can't handle but linear elements, sorry._  
  However, for most applications, a 1st order mesh is sufficient. An exception is the case when an Isocontour filter should be applied to visualize the results. In this case using a 2nd order mesh and thus setting Daten**Quadratic Approximation** to _true_ is recommended.
- Daten**Static Conductivity**: See Elmer [Elmer models manual](https://www.elmerfem.org/blog/documentation/), section _Computation of Magnetic Fields in 3D_ for info.
- Daten**Use Lagrange Gauge**: See Elmer [Elmer models manual](https://www.elmerfem.org/blog/documentation/), section _Computation of Magnetic Fields in 3D_ for info.
- Daten**Use Piola Transform**: Must be _True_ if basis functions for edge element interpolation are selected to be members of optimal edge element family or if second-order approximation is used.
- Daten**Use Tree Gauge**: See Elmer [Elmer models manual](https://www.elmerfem.org/blog/documentation/), section _Computation of Magnetic Fields in 3D_ for info. Will be ignored if Daten**Use Piola Transform** is _true_.

### Ergebnisse

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

## Analysis Feature Information

The magnetodynamic equation takes the following analysis features into account if they are set:

- ![](/images/FEM_ConstraintElectrostaticPotential.svg) [Electrostatic potential boundary condition](/FEM_ConstraintElectrostaticPotential "FEM ConstraintElectrostaticPotential")
- ![](/images/FEM_ConstraintCurrentDensity.svg) [Current density boundary condition](/FEM_ConstraintCurrentDensity "FEM ConstraintCurrentDensity")
- ![](/images/FEM_ConstraintMagnetization.svg) [Magnetization boundary condition](/FEM_ConstraintMagnetization "FEM ConstraintMagnetization")
- ![](/images/FEM_ConstantVacuumPermittivity.svg) [Constant vacuum permittivity](/FEM_ConstantVacuumPermittivity "FEM ConstantVacuumPermittivity")

### Ergebnisse

The available results depend on the [solver settings](#Solver_Settings). If none of the Daten**Calculate \*** settings was set to _true_, only the electric (called **av** in the results) potential is calculated. Otherwise also the corresponding results will be available.

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

Retrieved from "<http://wiki.freecad.org/index.php?title=FEM_EquationMagnetodynamic/de&oldid=1569113>"
