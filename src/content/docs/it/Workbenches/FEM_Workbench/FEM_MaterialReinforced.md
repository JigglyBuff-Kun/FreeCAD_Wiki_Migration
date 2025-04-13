---
title: FEM Materiale rinforzato
---

|                                                    |
| -------------------------------------------------- |
| Materiale rinforzato                               |
| Posizione nel menu                                 |
| Modello → Materiale rinforzato                     |
| Ambiente                                           |
| [FEM](/FEM_Workbench/it "FEM Workbench/it")        |
| Avvio veloce                                       |
| _Nessuno_                                          |
| Introdotto nella versione                          |
| -                                                  |
| Vedere anche                                       |
| [Tutorial FEM](/FEM_tutorial/it "FEM tutorial/it") |
|                                                    |

## Description

Creates a reinforced matrix material. It combines a matrix material (e.g. concrete) and a reinforcement material (e.g. steel).

![](/images/FEM_reinforced_material_task_panel.PNG)

The FEM reinforced material task panel

## Usage

1. There are several ways to invoke the command:
   - Click the ![](/images/FEM_MaterialReinforced.svg) [Reinforced material (concrete)](/FEM_MaterialReinforced "FEM MaterialReinforced") button or choose the **Model → Materials → ![](/images/FEM_MaterialReinforced.svg) Reinforced material (concrete)‏‎** option from the menu.
2. Select the _Matrix Material_ from the drop-down list.
3. Optionally press the Launch Editor button to access the [material editor](/Material_Edit "Material Edit"). The following material properties have to be defined: Young's modulus, Poisson's ratio, compressive strength and angle of friction.
4. Select the _Reinforcement Material_ from the drop-down list.
5. Optionally press the Launch Editor button to access the [material editor](/Material_Edit "Material Edit"). A yield strength has to be defined.

## Notes

- To edit an existing MaterialReinforced object: Double-click it in the [Tree view](/Tree_view "Tree view").
- In the CalculiX solver settings, one has to set Material Nonlinearity to linear if [FEM MaterialMechanicalNonlinear](/FEM_MaterialMechanicalNonlinear "FEM MaterialMechanicalNonlinear") is not used.
- More information about this feature, and an example of its usage, can be found in [Analysis of reinforced concrete with FEM](/Analysis_of_reinforced_concrete_with_FEM "Analysis of reinforced concrete with FEM").
- For a video tutorial (based on the [FEM Tutorial](/FEM_tutorial "FEM tutorial")) that uses this tool, watch: [FEM MaterialReinforced tutorial](https://www.youtube.com/watch?v=SZTIqhfCSVc).

Retrieved from "<http://wiki.freecad.org/index.php?title=FEM_MaterialReinforced/it&oldid=1571128>"
