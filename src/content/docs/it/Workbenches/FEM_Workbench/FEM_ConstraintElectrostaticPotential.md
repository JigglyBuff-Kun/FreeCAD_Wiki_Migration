---
title: FEM Potenziale elettrostatico di vincolo
---

|                                                                         |
| ----------------------------------------------------------------------- |
| Potenziale elettrostatico di vincolo                                    |
| Posizione nel menu                                                      |
| Modello → Vincoli elettrostatici → Potenziale elettrostatico di vincolo |
| Ambiente                                                                |
| [FEM](/FEM_Workbench/it "FEM Workbench/it")                             |
| Avvio veloce                                                            |
| _Nessuno_                                                               |
| Introdotto nella versione                                               |
| -                                                                       |
| Vedere anche                                                            |
| [Tutorial FEM](/FEM_tutorial/it "FEM tutorial/it")                      |
|                                                                         |

## Descrizione

Da fare

## Utilizzo

1. There are several ways to invoke the command:
   - Press the ![](/images/FEM_ConstraintElectrostaticPotential.svg) [Electrostatic potential boundary condition](/FEM_ConstraintElectrostaticPotential "FEM ConstraintElectrostaticPotential") button.
   - Select the **Model → Electromagnetic boundary conditions → ![](/images/FEM_ConstraintElectrostaticPotential.svg) Electrostatic potential boundary condition** option from the menu.
2. Press the Add button.
3. In the [3D view](/3D_view "3D view") select the object the boundary condition should be applied to.

## Options

The dialog offers the following settings:

![](/images/FEM_ElectrostaticPotential_dialog.png)

- **Boundary Condition**: To choose between Dirichlet (prescribed potential) and Neumann (prescribed electric flux/surface charge density) boundary condition type. [introduced in 1.1](/Release_notes_1.1 "Release notes 1.1")
- **Potential**: The electric potential in V.
- **Electromagnetic Potential**: To enable the input of the components of a potential vector field.
- **x**: The real/imaginary part of the potential in x-direction in V.  
   For other coordinate systems than Cartesian 3D, this will be the first coordinate of the system instead of x.
- **y**: The real/imaginary part of the potential in y-direction in V.  
   For other coordinate systems than Cartesian 3D, this will be the second coordinate of the system instead of y.
- **z**: The real/imaginary part of the potential in z-direction in V.  
   For other coordinate systems than Cartesian 3D, this will be the third coordinate of the system instead of z. If the coordinate system has no third coordinate, this setting will be ignored.
- **x, y, z checkboxes**: To declare the corresponding potential as unknown for the solver.
- **Electric Infinity**: Option to make a spherical approximation that the volume above the face extends to infinity.
- **Potential Constant**: Option to set a constant potential.
- **Surface Charge Density**: The surface charge density (electric flux) in C/m^2. [introduced in 1.1](/Release_notes_1.1 "Release notes 1.1")
- **Capacitance Body**: Counter of the body (or face) with a capacitance.

Retrieved from "<http://wiki.freecad.org/index.php?title=FEM_ConstraintElectrostaticPotential/it&oldid=1568912>"
