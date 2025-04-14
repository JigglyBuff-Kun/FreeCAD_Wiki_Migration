---
title: FEM MaterialSolid
---

|                                              |
| -------------------------------------------- |
| FEM MaterialSolid                            |
| Menu location                                |
| Model → Materials → Material for solid       |
| Workbenches                                  |
| [FEM](/FEM_Workbench "FEM Workbench")        |
| Default shortcut                             |
| M S                                          |
| Introduced in version                        |
| -                                            |
| See also                                     |
| [FEM tutorial](/FEM_tutorial "FEM tutorial") |
|                                              |

| Solvers |
| ------- |
| All     |

## Description

Creates a material for solid.

![](/images/FEMMaterialSolidProperties.png)

The FEM material task panel

## Usage

1. There are several ways to invoke the command:
   - Press the ![](/images/FEM_MaterialSolid.svg) [Material for solid](/FEM_MaterialSolid "FEM MaterialSolid") button.
   - Select the **Model → Materials → ![](/images/FEM_MaterialSolid.svg) Material for solid‏‎** option from the menu.
2. The FEM material task panel opens.
3. Select a material from the drop-down list. For example, for engineering mechanical analysis, _CalculiX-Steel_ is a common option. Optionally press the Launch Editor button to access the [material editor](/Material_Edit "Material Edit").
4. Optionally, press the Use this task panel button to modify material properties such as density, Young's modulus, Poisson's ratio, etc.
5. Provided you are applying material to the whole object, don't select any geometrical entities (leave the reference list empty). The material will be applied to the whole model. Otherwise, assign the material to selected regions manually by selecting some of them for each inserted material, but don't leave any part of the model with no material assigned.
6. Press the Close button to close the task panel.

## Notes

- To edit an existing MaterialSolid object: Double-click it in the [Tree view](/Tree_view "Tree view").
- The mechanical material uses the [\*MATERIAL card in CalculiX](https://web.mit.edu/calculix_v2.7/CalculiX/ccx_2.7/doc/ccx/node216.html).

Retrieved from "<http://wiki.freecad.org/index.php?title=FEM_MaterialSolid/en&oldid=1571114>"
