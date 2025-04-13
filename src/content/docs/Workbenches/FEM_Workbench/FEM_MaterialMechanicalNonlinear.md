---
title: FEM MaterialMechanicalNonlinear
---

|                                                   |
| ------------------------------------------------- |
| FEM MaterialMechanicalNonlinear                   |
| Menu location                                     |
| Model → Materials → Nonlinear mechanical material |
| Workbenches                                       |
| [FEM](/FEM_Workbench "FEM Workbench")             |
| Default shortcut                                  |
| _None_                                            |
| Introduced in version                             |
| -                                                 |
| See also                                          |
| [FEM tutorial](/FEM_tutorial "FEM tutorial")      |
|                                                   |

| Solvers  |
| -------- |
| CalculiX |

## Description

Creates a nonlinear mechanical material. Currently, only plasticity with simple (isotropic) hardening is available. [introduced in 1.0](/Release_notes_1.0 "Release notes 1.0"): Kinematic hardening is also available.

## Usage

1. To create a new MaterialMechanicalNonlinear object:
   1. Add a ![](/src/assets/images/FEM_MaterialSolid.svg) [Material for solid](/FEM_MaterialSolid "FEM MaterialSolid").
   2. Select it.
   3. Do one of the following:
      - Press the ![](/src/assets/images/FEM_MaterialMechanicalNonlinear.svg) [Nonlinear mechanical material](/FEM_MaterialMechanicalNonlinear "FEM MaterialMechanicalNonlinear") button.
      - Select the **Model → Materials → ![](/src/assets/images/FEM_MaterialMechanicalNonlinear.svg) Nonlinear mechanical material‏‎** option from the menu.
2. To edit an existing MaterialMechanicalNonlinear object:
   1. Select it in the [Tree view](/Tree_view "Tree view").
   2. Select the material model (isotropic (simple) hardening or [introduced in 1.0](/Release_notes_1.0 "Release notes 1.0"): kinematic hardening).
   3. Define yield points (stress [MPa] vs plastic strain). The first point must have a zero plastic strain. Press the ... button next to Data**Yield Points** to input the points using a user-friendly list. The syntax is described in the [Notes](#Notes) section.

## Notes

- In FreeCAD 0.19 and older versions, only 3 yield points can be specified. Since version 0.20 a list of yield points can contain as many as required.
- The syntax should be:

: ```
stress_1, 0
stress_2, plastic_strain_2
...

    ```

: With dot as the decimal separator since that's what CalculiX uses.

: For example to define a bilinear model with hardening for S275 steel:

: ```
275, 0
490, 0.2

    ```

: Or, to define perfect plasticity with no hardening for this material:

: ```
275, 0

    ```

Retrieved from "<http://wiki.freecad.org/index.php?title=FEM_MaterialMechanicalNonlinear/en&oldid=1569410>"
