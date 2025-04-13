---
title: FEM Materiale non lineare
---
|  |
| --- |
| FEM Materiale non lineare |
| Posizione nel menu |
| Modello → Materiale non lineare |
| Ambiente |
| [FEM](/FEM_Workbench/it "FEM Workbench/it") |
| Avvio veloce |
| *Nessuno* |
| Introdotto nella versione |
| - |
| Vedere anche |
| [Tutorial FEM](/FEM_tutorial/it "FEM tutorial/it") |
|  |

## Descrizione

Creates a nonlinear mechanical material. Currently, only plasticity with simple (isotropic) hardening is available. [introduced in 1.0](/Release_notes_1.0 "Release notes 1.0"): Kinematic hardening is also available.

## Utilizzo

1. To create a new MaterialMechanicalNonlinear object:
   1. Add a ![](/images/FEM_MaterialSolid.svg) [Material for solid](/FEM_MaterialSolid "FEM MaterialSolid").
   2. Select it.
   3. Do one of the following:
      * Press the ![](/images/FEM_MaterialMechanicalNonlinear.svg) [Nonlinear mechanical material](/FEM_MaterialMechanicalNonlinear "FEM MaterialMechanicalNonlinear") button.
      * Select the **Model → Materials → ![](/images/FEM_MaterialMechanicalNonlinear.svg) Nonlinear mechanical material‏‎** option from the menu.
2. To edit an existing MaterialMechanicalNonlinear object:
   1. Select it in the [Tree view](/Tree_view "Tree view").
   2. Select the material model (isotropic (simple) hardening or [introduced in 1.0](/Release_notes_1.0 "Release notes 1.0"): kinematic hardening).
   3. Define yield points (stress [MPa] vs plastic strain). The first point must have a zero plastic strain. Press the ... button next to Dati**Yield Points** to input the points using a user-friendly list. The syntax is described in the [Notes](#Notes) section.

## Notes

* In FreeCAD 0.19 and older versions, only 3 yield points can be specified. Since version 0.20 a list of yield points can contain as many as required.
* The syntax should be:

:   ```
    stress_1, 0
    stress_2, plastic_strain_2
    ...

    ```

:   With dot as the decimal separator since that's what CalculiX uses.

:   For example to define a bilinear model with hardening for S275 steel:

:   ```
    275, 0
    490, 0.2

    ```

:   Or, to define perfect plasticity with no hardening for this material:

:   ```
    275, 0

    ```

Retrieved from "<http://wiki.freecad.org/index.php?title=FEM_MaterialMechanicalNonlinear/it&oldid=1569406>"