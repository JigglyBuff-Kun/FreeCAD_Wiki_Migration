---
title: FEM ConstraintRigidBody
---

|                                                                                         |
| --------------------------------------------------------------------------------------- |
| FEM ConstraintRigidBody                                                                 |
| Menu location                                                                           |
| Model → Mechanical boundary conditions and loads → Rigid body constraint                |
| Workbenches                                                                             |
| [FEM](/FEM_Workbench "FEM Workbench")                                                   |
| Default shortcut                                                                        |
| _None_                                                                                  |
| Introduced in version                                                                   |
| 1.0                                                                                     |
| See also                                                                                |
| [FEM Constraint displacement](/FEM_ConstraintDisplacement "FEM ConstraintDisplacement") |
|                                                                                         |

| Solvers  |
| -------- |
| CalculiX |

## Description

Defines the CalculiX's rigid body constraint that constrains the motion of the nodes of a selected geometrical entity to the motion of a reference node whose location is defined by the user. In practice, this can be used to apply a boundary condition or load that will be propagated to the selected object. Since the reference node has rotational degrees of freedom, it's possible to apply a moment load or a rotational boundary condition to any face this way. The location of the reference node can be selected, if it's offset from a geometrical entity, a remote load (a force acting on a lever) can be applied.

## Usage

1. There are several ways to invoke the command:
   - Press the ![](/src/assets/images/FEM_ConstraintRigidBody.svg) [Rigid body constraint](/FEM_ConstraintRigidBody "FEM ConstraintRigidBody") button.
   - Select the **Model → Mechanical boundary conditions and loads → ![](/src/assets/images/FEM_ConstraintRigidBody.svg) Rigid body constraint** option from the menu.
2. Press the Add button.
3. In the [3D view](/3D_view "3D view") select the geometrical element(s) (vertices, edges or faces but not a mix of them) to which the constraint should be applied. To remove objects from the selection, press the Remove button and click on them.
4. Specify the coordinates of the reference node. A spherical symbol will show this location.
5. Choose modes for the 3 translational and 3 rotational degrees of freedom (DOFs):
   - _Free_ - default, no boundary condition or load on that DOF
   - _Constraint_ - displacement/rotation boundary condition with a specified value (default: 0 = fixed) on that DOF - for rotation, one needs to set an axis (X, Y or Z) and specify the _Angle_
   - _Load_ - force/moment load with a specified value on that DOF

![](/src/assets/images/FEM_rigid_body_torsion.PNG)

Cantilever beam subjected to torsion. Green pins show the face to which rigid body constraint is applied, large green sphere is a reference node. Moment is defined in the proper axis.

![](/src/assets/images/FEM_rigid_body_bending_and_torsion.PNG)

Cantilever beam subjected to combined loading (bending and torsion) via so-called remote force. Reference node is offset from a beam and a force pointing downwards is applied to it.

## Limitations

- Currently, the moment units can be somewhat confusing. To apply 1 N\*m, one needs to set 1 J in the input field (those units are equivalent).
- The feature can be applied only to vertices, edges and faces for now, support for solids (to make whole volumes/parts rigid) should follow in the future.
- The selected object is made rigid. To apply loads in a more flexible way, one would need to use CalculiX's distributing coupling constraints which are currently unsupported.

## Notes

- This constraint is the standard way of applying torque to arbitrary parts. The other options are the [Local coordinate system](/FEM_ConstraintTransform "FEM ConstraintTransform") (only for cylindrical faces) or a pair of forces but the rigid body constraint should be sufficient in pretty much all the cases.
- No other constraints/boundary conditions should be applied to the nodes involved in a rigid body constraint.
- When applying this constraint to a vertex or an edge, one should set a proper rotational DOF (in the case of an edge, the one that will prevent the rotation about it) to zero.
- This feature uses the [\*RIGID BODY card in CalculiX](https://web.mit.edu/calculix_v2.7/CalculiX/ccx_2.7/doc/ccx/node236.html).

Retrieved from "<http://wiki.freecad.org/index.php?title=FEM_ConstraintRigidBody/en&oldid=1544847>"
