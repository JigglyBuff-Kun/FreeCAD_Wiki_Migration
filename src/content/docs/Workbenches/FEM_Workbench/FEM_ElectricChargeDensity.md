---
title: FEM ElectricChargeDensity
---

|                                                                                                                                                 |
| ----------------------------------------------------------------------------------------------------------------------------------------------- |
| FEM ConstraintElectricChargeDensity                                                                                                             |
| Menu location                                                                                                                                   |
| Model → Electromagnetic boundary conditions → Electric charge density                                                                           |
| Workbenches                                                                                                                                     |
| [FEM](/FEM_Workbench "FEM Workbench")                                                                                                           |
| Default shortcut                                                                                                                                |
| _None_                                                                                                                                          |
| Introduced in version                                                                                                                           |
| 1.1                                                                                                                                             |
| See also                                                                                                                                        |
| [FEM capacitance example](/FEM_Example_Capacitance_Two_Balls "FEM Example Capacitance Two Balls"), [FEM tutorial](/FEM_tutorial "FEM tutorial") |
|                                                                                                                                                 |

| Solvers |
| ------- |
| Elmer   |

## Description

Creates electric charge density load. To be used together with the [Electrostatic](/FEM_EquationElectrostatic "FEM EquationElectrostatic") equation.

## Usage

1. There are several ways to invoke the command:
   - Press the ![](/src/assets/images/FEM_ConstraintElectricChargeDensity.svg) [Electric charge density](/FEM_ElectricChargeDensity "FEM ElectricChargeDensity") button.
   - Select the **Model → Electromagnetic boundary conditions → ![](/src/assets/images/FEM_ConstraintElectricChargeDensity.svg) Electric charge density** option from the menu.
2. Press the Add button.
3. In the [3D view](/3D_view "3D view") select the object the load should be applied to.

## Options

The dialog offers the following settings:

- **Interface Charge Density**: To specify interface charge density in C/m^2.
- **Mode**: To choose between the Interface, Source, Total Interface and Total Source modes.
- **Source Charge Density**: To specify source charge density in C/m^3.
- **Total Charge**: To specify total charge in C.

Retrieved from "<http://wiki.freecad.org/index.php?title=FEM_ElectricChargeDensity/en&oldid=1568929>"
