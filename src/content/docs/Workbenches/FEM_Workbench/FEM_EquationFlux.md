---
title: FEM EquationFlux
---

|                                       |
| ------------------------------------- |
| FEM EquationFlux                      |
| Menu location                         |
| Solve → Flux equation                 |
| Workbenches                           |
| [FEM](/FEM_Workbench "FEM Workbench") |
| Default shortcut                      |
| _None_                                |
| Introduced in version                 |
| 0.17                                  |
| See also                              |
| _None_                                |
|                                       |

## Description

This equation is used to calculate the fluxes resulting usually from Poisson kind of equations. These include the ![](/images/FEM_EquationHeat.svg) [Heat equation](/FEM_EquationHeat "FEM EquationHeat") and the ![](/images/FEM_EquationElectrostatic.svg) [Electrostatic equation](/FEM_EquationElectrostatic "FEM EquationElectrostatic").

For info about the math of the equation, see the [Elmer models manual](https://www.elmerfem.org/blog/documentation/), section _Flux Computation_.

## Usage

1. Add an ![](/images/FEM_SolverElmer.svg) [Elmer solver](/FEM_SolverElmer#Equations "FEM SolverElmer").
2. Select it in the [Tree view](/Tree_view "Tree view").
3. There are several ways to invoke the command:
   - Press the ![](/images/FEM_EquationFlux.svg) [Flux equation](/FEM_EquationFlux "FEM EquationFlux") button.
   - Select the **Solve → ![](/images/FEM_EquationFlux.svg) Flux equation** option from the menu.
4. To include the required boundary conditions, do one of the following:
   - Invoke the ![](/images/FEM_EquationHeat.svg) [FEM EquationHeat](/FEM_EquationHeat "FEM EquationHeat") command.
   - Invoke the ![](/images/FEM_EquationElectrostatic.svg) [FEM EquationElectrostatic](/FEM_EquationElectrostatic "FEM EquationElectrostatic") command.
5. When using an electrostatic equation, change the property Data**Flux Coefficient** to _None_. and the property Data**Flux Variable** to _Potential_.
6. Change the [equation's solver settings](#Solver_Settings) or the [general solver settings](/FEM_SolverElmer_SolverSettings "FEM SolverElmer SolverSettings") if necessary.

## Solver Settings

For the general solver settings, see the [Elmer solver settings](/FEM_SolverElmer_SolverSettings "FEM SolverElmer SolverSettings").

The flux equation provides these special settings:

- Data**Average Within Materials**: If `true`, continuity is enforced within the same material in the discontinuous Galerkin discretization using the penalty terms of the discontinuous Galerkin formulation.
- Data**Calculate Flux**: Calculates the flux vector.
- Data**Calculate Flux Abs**: Calculates the absolute of the flux vector. Requires that Data**Calculate Flux** is `true`.
- Data**Calculate Flux Magnitude**: Computes the magnitude of the vector field. Requires that Data**Calculate Flux** is `true`.  
  Basically it is the same as Data**Calculate Flux Abs** but this requires less memory because it solves the matrix equation only once. The downside is that negative values may be introduced.
- Data**Calculate Grad**: Calculates the gradient of the flux.
- Data**Calculate Grad Abs**: Calculates the absolute flux gradient. Requires that Data**Calculate Grad** is `true`.
- Data**Calculate Grad Magnitude**: Computes the magnitude of the vector field. Requires that Data**Calculate Grad** is `true`.  
  Basically it is the same as Data**Calculate Grad Abs** but this requires less memory because it solves the matrix equation only once. The downside is that negative values may be introduced.
- Data**Discontinuous Galerkin**: For discontinuous fields the standard Galerkin approximation enforces continuity which may be unphysical. As a remedy for this, set this property to `true`. Then the result may be discontinuous and may even be visualized as such.
- Data**Enforce Positive Magnitude**: If `true`, the negative values of the computed magnitude fields are set to zero.
- Data**Flux Coefficient**: Name of the proportionality coefficient to compute the flux.
- Data**Flux Variable**: Name of the potential variable used to compute the gradient.

## Analysis Feature Information

The flux equation does not have its own boundary conditions. It takes the boundary conditions from the ![](/images/FEM_EquationHeat.svg) [Heat equation](/FEM_EquationHeat "FEM EquationHeat") or the ![](/images/FEM_EquationElectrostatic.svg) [Electrostatic equation](/FEM_EquationElectrostatic "FEM EquationElectrostatic").

## Results

The available results depend on the [solver settings](#Solver_Settings). If none of the Data**Calculate \*** settings was set to `true`, nothing is calculated. Otherwise the corresponding results will also be available.

The resulting flux is either the heat flux in

W

/

m

2
{\displaystyle {\rm {W/m^{2}}}}
![{\displaystyle {\rm {W/m^{2}}}}](https://wikimedia.org/api/rest_v1/media/math/render/svg/6840d235c91399b9bd42d984a7c61a4c68931051) (misleadingly named "temperature flux") or the potential flux in

W

/

m

2
{\displaystyle {\rm {W/m^{2}}}}
![{\displaystyle {\rm {W/m^{2}}}}](https://wikimedia.org/api/rest_v1/media/math/render/svg/6840d235c91399b9bd42d984a7c61a4c68931051) (

A
⋅
V

/

m

2
{\displaystyle {\rm {A\cdot V/m^{2}}}}
![{\displaystyle {\rm {A\cdot V/m^{2}}}}](https://wikimedia.org/api/rest_v1/media/math/render/svg/e2ec7f7c1ba96543ef2144a3b989a0e9fe7dc933)).

Retrieved from "<http://wiki.freecad.org/index.php?title=FEM_EquationFlux/en&oldid=1569511>"
