---
title: FEM ConstraintPlaneRotation
---

|                                                                                |
| ------------------------------------------------------------------------------ |
| FEM ConstraintPlaneRotation                                                    |
| Menu location                                                                  |
| Model → Geometrical analysis features → Plane multi-point constraint           |
| Workbenches                                                                    |
| [FEM](/FEM_Workbench "FEM Workbench")                                          |
| Default shortcut                                                               |
| _None_                                                                         |
| Introduced in version                                                          |
| -                                                                              |
| See also                                                                       |
| [FEM Constraint transform](/FEM_ConstraintTransform "FEM ConstraintTransform") |
|                                                                                |

| Solvers  |
| -------- |
| CalculiX |

## Description

Creates a FEM multi-point constraint (MPC) for keeping the nodes on a planar surface on the same plane.

## Usage

1. There are several ways to invoke the command:
   - Press the ![](/src/assets/images/FEM_ConstraintPlaneRotation.svg) [Plane multi-point constraint](/FEM_ConstraintPlaneRotation "FEM ConstraintPlaneRotation") button.
   - Select the **Model → Geometrical analysis features → ![](/src/assets/images/FEM_ConstraintPlaneRotation.svg) Plane multi-point constraint** option from the menu.
2. In the [3D view](/3D_view "3D view") select the object to which the multi-point constraint should be applied, which can only be a single face.
3. Press the Add button.

![](/src/assets/images/FEM_plane_rotation_constraint_example.PNG)

Example of plane multi-point constraint use. Both simply-supported beams are subjected to the same force but the bottom one has plane MPC applied to the green segment of the top face. This forces the nodes there to stay on the same plane and changes the deformation (here scaled).

## Limitations

1. Plane multi-point constraint can only be applied to a single planar face.
2. When a plane multi-point constraint is applied to the same face as a displacement/fixed boundary condition, the displacement/fixed boundary condition takes precedence.

## Notes

1. This constraint uses the [\*MPC card in CalculiX](http://web.mit.edu/calculix_v2.7/CalculiX/ccx_2.7/doc/ccx/node220.html).

Retrieved from "<http://wiki.freecad.org/index.php?title=FEM_ConstraintPlaneRotation/en&oldid=1541610>"
