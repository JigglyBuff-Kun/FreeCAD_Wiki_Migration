---
title: FEM ConstraintMagnetization
---

|                                                                                                                                                                                 |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| FEM ConstraintMagnetization                                                                                                                                                     |
| Menu location                                                                                                                                                                   |
| Model → Electromagnetic boundary conditions → Magnetization boundary condition                                                                                                  |
| Workbenches                                                                                                                                                                     |
| [FEM](/FEM_Workbench "FEM Workbench")                                                                                                                                           |
| Default shortcut                                                                                                                                                                |
| _None_                                                                                                                                                                          |
| Introduced in version                                                                                                                                                           |
| 0.21                                                                                                                                                                            |
| See also                                                                                                                                                                        |
| [Magnetodynamic equation](/FEM_EquationMagnetodynamic "FEM EquationMagnetodynamic"), [Magnetodynamic 2D equation](/FEM_EquationMagnetodynamic2D "FEM EquationMagnetodynamic2D") |
|                                                                                                                                                                                 |

| Solvers |
| ------- |
| Elmer   |

## Description

Creates a FEM boundary condition for the magnetization. To be used together with the [Magnetodynamic](/FEM_EquationMagnetodynamic "FEM EquationMagnetodynamic") and [Magnetodynamic 2D](/FEM_EquationMagnetodynamic2D "FEM EquationMagnetodynamic2D") equations.

## Usage

1. There are several ways to invoke the command:
   - Press the ![](/src/assets/images/FEM_ConstraintMagnetization.svg) [Magnetization boundary condition](/FEM_ConstraintMagnetization "FEM ConstraintMagnetization") button.
   - Select the **Model → Electromagnetic boundary conditions → ![](/src/assets/images/FEM_ConstraintMagnetization.svg) Magnetization boundary condition** option from the menu.
2. Press the Add button.
3. In the [3D view](/3D_view "3D view") select the object the boundary condition should be applied to.

## Options

The dialog offers the following settings:

![](/src/assets/images/FEM_Magnetization_dialog.png)

- **Magnetization\_\*\_1**: The real/imaginary part of the magnetization in x-direction in A/m.  
   For other coordinate systems than Cartesian 3D, this will be the first coordinate of the system instead of x.
- **Magnetization\_\*\_2**: The real/imaginary part of the magnetization in y-direction in A/m.  
   For other coordinate systems than Cartesian 3D, this will be the second coordinate of the system instead of y.
- **Magnetization\_\*\_3**: The real/imaginary part of the magnetization in z-direction in A/m.  
   For other coordinate systems than Cartesian 3D, this will be the third coordinate of the system instead of z. If the coordinate system has no third coordinate, this setting will be ignored.
- **Magnetization\_\*\_\*\_Disabled**: Whether the corresponding parameter is disabled (assumed as unknown by the solver).

Retrieved from "<http://wiki.freecad.org/index.php?title=FEM_ConstraintMagnetization/en&oldid=1568923>"
