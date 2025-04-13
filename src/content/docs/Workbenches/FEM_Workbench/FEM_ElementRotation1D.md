---
title: FEM ElementRotation1D
---

|                                              |
| -------------------------------------------- |
| FEM ElementRotation1D                        |
| Menu location                                |
| Model → Element Geometry → Beam rotation     |
| Workbenches                                  |
| [FEM](/FEM_Workbench "FEM Workbench")        |
| Default shortcut                             |
| _None_                                       |
| Introduced in version                        |
| -                                            |
| See also                                     |
| [FEM tutorial](/FEM_tutorial "FEM tutorial") |
|                                              |

| Solvers  |
| -------- |
| CalculiX |

## Description

**ElementRotation1D** is used to rotate the beam profile around the axis of beam elements.

## Usage

1. There are several ways to invoke the command:
   - Press the ![](/src/assets/images/FEM_ElementRotation1D.svg) [Beam rotation](/FEM_ElementRotation1D "FEM ElementRotation1D") button.
   - Select the **Model → Element Geometry → ![](/src/assets/images/FEM_ElementRotation1D.svg) Beam rotation** option from the menu.
2. Specify the angle by which the beam profile is to be rotated.

![](/src/assets/images/FEM_beam_no_rotation.png)

No rotation, default orientation - local axis 1 aligned with the global Y axis (green)

![](/src/assets/images/FEM_beam_rotation.png)

90 degree rotation

## Properties

Data**Rotation**: specifies the angle of rotation.

## Limitations

- Currently, multiple rotations are not supported (a single rotation is applied to all beams in the model).

## Notes

- To visualize the rotated cross-section it is necessary to set `Beam Shell Result Output 3D` in the [FEM SolverCalculixCxxtools](/FEM_SolverCalculixCxxtools "FEM SolverCalculixCxxtools") to `True` and run the analysis.
- This feature uses the [\*BEAM SECTION card in CalculiX](https://web.mit.edu/calculix_v2.7/CalculiX/ccx_2.7/doc/ccx/node162.html).

Retrieved from "<http://wiki.freecad.org/index.php?title=FEM_ElementRotation1D/en&oldid=1531328>"
