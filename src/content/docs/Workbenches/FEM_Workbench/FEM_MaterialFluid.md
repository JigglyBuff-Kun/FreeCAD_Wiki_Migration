---
title: FEM MaterialFluid
---

|                                              |
| -------------------------------------------- |
| FEM MaterialFluid                            |
| Menu location                                |
| Model → Materials → Material for fluid       |
| Workbenches                                  |
| [FEM](/FEM_Workbench "FEM Workbench")        |
| Default shortcut                             |
| _None_                                       |
| Introduced in version                        |
| -                                            |
| See also                                     |
| [FEM tutorial](/FEM_tutorial "FEM tutorial") |
|                                              |

| Solvers         |
| --------------- |
| CalculiX, Elmer |

## Description

Creates a material for fluid.

![](/src/assets/images/FEMMaterialFluidProperties.png)

The FEM material task panel

## Usage

1. There are several ways to invoke the command:
   - Press the ![](/src/assets/images/FEM_MaterialFluid.svg) [Material for fluid](/FEM_MaterialFluid "FEM MaterialFluid") button.
   - Select the **Model → Materials → ![](/src/assets/images/FEM_MaterialFluid.svg) Material for fluid‏‎** option from the menu.
2. The FEM material task panel opens.
3. Select a fluid material from the drop-down list. For Computational Fluid Dynamics (CFD), _Air_ or _Water_ are common options. Optionally press the Launch Editor button to access the [material editor](/Material_Edit "Material Edit").
4. Optionally, press the Use this task panel button to modify material properties such as density, kinematic viscosity, thermal conductivity, etc.
5. Provided you are applying fluid to the whole object, don't select any geometrical entities (leave the reference list empty). Fluid will be applied to the whole model. Otherwise assign fluid to particular model domains manually by selecting some of them for each inserted material, if you do that, do not leave any domain of your model with no fluid assigned.
6. Press the Close button to close the task panel.

## Notes

- To edit an existing MaterialFluid object: Double-click it in the [Tree view](/Tree_view "Tree view").

Retrieved from "<http://wiki.freecad.org/index.php?title=FEM_MaterialFluid/en&oldid=1571098>"
