---
title: FEM ConstraintCurrentDensity
---

|                                                                                                                                                                                 |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| FEM ConstraintCurrentDensity                                                                                                                                                    |
| Menu location                                                                                                                                                                   |
| Model → Electromagnetic boundary conditions → Current density boundary condition                                                                                                |
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

Creates a FEM boundary condition for the current density. To be used together with the [Magnetodynamic](/FEM_EquationMagnetodynamic "FEM EquationMagnetodynamic"), [Magnetodynamic 2D](/FEM_EquationMagnetodynamic2D "FEM EquationMagnetodynamic2D") and [Static current](/FEM_EquationStaticCurrent "FEM EquationStaticCurrent") equations.

## Usage

1. There are several ways to invoke the command:
   - Press the ![](/images/FEM_ConstraintCurrentDensity.svg) [Current density boundary condition](/FEM_ConstraintCurrentDensity "FEM ConstraintCurrentDensity") button.
   - Select the **Model → Electromagnetic boundary conditions → ![](/images/FEM_ConstraintCurrentDensity.svg) Current density boundary condition** option from the menu.
2. Press the Add button.
3. In the [3D view](/3D_view "3D view") select the object the boundary condition should be applied to.

## Options

The dialog offers the following settings:

![](/images/FEM_CurrentDensity_dialog.png)

- **Mode** - [introduced in 1.1](/Release_notes_1.1 "Release notes 1.1"): To choose between Custom (selected directions) and Normal (normal direction) mode.
- **Current density\_\*\_1**: The real/imaginary part of the current density in x-direction in A/m².  
   For other coordinate systems than Cartesian 3D, this will be the first coordinate of the system instead of x.
- **Current density\_\*\_2**: The real/imaginary part of the current density in y-direction in A/m².  
   For other coordinate systems than Cartesian 3D, this will be the second coordinate of the system instead of y.
- **Current density\_\*\_3**: The real/imaginary part of the current density in z-direction in A/m².  
   For other coordinate systems than Cartesian 3D, this will be the third coordinate of the system instead of z. If the coordinate system has no third coordinate, this setting will be ignored.
- **Enable current density\_\***: Whether the corresponding parameter is enabled or disabled (assumed as unknown by the solver). [introduced in 1.1](/Release_notes_1.1 "Release notes 1.1")
- **Normal current density\_\***: The real/imaginary part of the current density normal to boundary in A/m². [introduced in 1.1](/Release_notes_1.1 "Release notes 1.1")

Retrieved from "<http://wiki.freecad.org/index.php?title=FEM_ConstraintCurrentDensity/en&oldid=1568918>"
