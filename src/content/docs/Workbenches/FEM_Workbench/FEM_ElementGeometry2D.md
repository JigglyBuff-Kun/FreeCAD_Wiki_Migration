---
title: FEM ElementGeometry2D
---

|                                                  |
| ------------------------------------------------ |
| FEM ElementGeometry2D                            |
| Menu location                                    |
| Model → Element Geometry → Shell plate thickness |
| Workbenches                                      |
| [FEM](/FEM_Workbench "FEM Workbench")            |
| Default shortcut                                 |
| C S                                              |
| Introduced in version                            |
| -                                                |
| See also                                         |
| [FEM tutorial](/FEM_tutorial "FEM tutorial")     |
|                                                  |

| Solvers |
| ------- |
| All     |

## Description

**ElementGeometry2D** is used to define the thickness of 2D (shell and [introduced in 1.0](/Release_notes_1.0 "Release notes 1.0"): plane stress/strain) FEM elements, all or lying on the chosen surface.

## Usage

1. There are several ways to invoke the command:
   - Press the ![](/images/FEM_ElementGeometry2D.svg) [Shell plate thickness](/FEM_ElementGeometry2D "FEM ElementGeometry2D") button.
   - Select the **Model → Element Geometry → ![](/images/FEM_ElementGeometry2D.svg) Shell plate thickness** option from the menu.
2. Specify the shell thickness.
3. Optionally press the Add button in the task panel and then click on the face you want to have a prescribed thickness. If the face selection is empty, all the remaining faces (whose thickness is not defined by other [FEM ElementGeometry2D](/FEM_ElementGeometry2D "FEM ElementGeometry2D") objects) will be automatically assigned.

## Limitations

- Currently, analyses combining shell elements with solid or edge (beam) elements are not supported.

## Properties

Data**Thickness**: specifies the thickness of the 2D elements.

## Notes

- For viewing results from CalculiX solver on the mesh expanded to the prescribed thickness, the property `Beam Shell Result Output 3D` in the [FEM SolverCalculixCxxtools](/FEM_SolverCalculixCxxtools "FEM SolverCalculixCxxtools") needs to be set to `True`. To just visualize the defined thicknesses before running actual calculations, one may run a _check_ type analysis with this property set to `True`.
- This feature uses the [\*SHELL SECTION card in CalculiX](https://web.mit.edu/calculix_v2.7/CalculiX/ccx_2.7/doc/ccx/node238.html) for shell elements and [\*SOLID SECTION card](https://web.mit.edu/calculix_v2.7/CalculiX/ccx_2.7/doc/ccx/node239.html) for plane stress/strain elements.

Retrieved from "<http://wiki.freecad.org/index.php?title=FEM_ElementGeometry2D/en&oldid=1544160>"
