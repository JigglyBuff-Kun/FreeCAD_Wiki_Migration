---
title: Rotação de viga
---
|  |
| --- |
| FEM ElementRotation1D |
| Menu location |
| Model → Element Geometry → Beam rotation |
| Workbenches |
| [FEM](/FEM_Workbench "FEM Workbench") |
| Default shortcut |
| *None* |
| Introduced in version |
| - |
| See also |
| [FEM tutorial](/FEM_tutorial "FEM tutorial") |
|  |

| Solvers |
| --- |
| CalculiX |

## Description

## Descrição

## Usage

## Utilização

![](/images/FEM_beam_no_rotation.png)

No rotation, default orientation - local axis 1 aligned with the global Y axis (green)

![](/images/FEM_beam_rotation.png)

90 degree rotation

## Properties

Dados**Rotation**: specifies the angle of rotation.

## Limitations

* Currently, multiple rotations are not supported (a single rotation is applied to all beams in the model).

## Notes

* To visualize the rotated cross-section it is necessary to set `Beam Shell Result Output 3D` in the [FEM SolverCalculixCxxtools](/FEM_SolverCalculixCxxtools "FEM SolverCalculixCxxtools") to `True` and run the analysis.
* This feature uses the [\*BEAM SECTION card in CalculiX](https://web.mit.edu/calculix_v2.7/CalculiX/ccx_2.7/doc/ccx/node162.html).

Retrieved from "<http://wiki.freecad.org/index.php?title=FEM_ElementRotation1D/pt-br&oldid=1531325>"