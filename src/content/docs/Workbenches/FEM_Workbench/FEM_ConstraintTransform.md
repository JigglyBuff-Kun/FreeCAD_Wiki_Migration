---
title: FEM ConstraintTransform
---

|                                                                                             |
| ------------------------------------------------------------------------------------------- |
| FEM ConstraintTransform                                                                     |
| Menu location                                                                               |
| Model → Geometrical analysis features → Local coordinate system                             |
| Workbenches                                                                                 |
| [FEM](/FEM_Workbench "FEM Workbench")                                                       |
| Default shortcut                                                                            |
| _None_                                                                                      |
| Introduced in version                                                                       |
| -                                                                                           |
| See also                                                                                    |
| [FEM Constraint plane rotation](/FEM_ConstraintPlaneRotation "FEM ConstraintPlaneRotation") |
|                                                                                             |

| Solvers  |
| -------- |
| CalculiX |

## Description

Transforms the coordinate system of a face to a user-defined coordinate system - rectangular or cylindrical. This coordinate system affects the boundary condition and load definitions. For example, you can use it to fix the displacements in the normal direction of an inclined face or apply boundary conditions in radial and tangential directions for cylindrical faces. Just select the proper component of the [displacement boundary condition](/FEM_ConstraintDisplacement "FEM ConstraintDisplacement").

## Usage

1. Apply [displacement boundary condition](/FEM_ConstraintDisplacement "FEM ConstraintDisplacement") or [force load](/FEM_ConstraintForce "FEM ConstraintForce") to a face first.
2. There are several ways to invoke the command:
   - Press the ![](/images/FEM_ConstraintTransform.svg) [Local coordinate system](/FEM_ConstraintTransform "FEM ConstraintTransform") button.
   - Select the **Model → Geometrical analysis features → ![](/images/FEM_ConstraintTransform.svg) Local coordinate system** option from the menu.
3. Select rectangular or cylindrical transform. The former can be applied to any face, the latter is available only for the cylindrical faces.
4. Select a face to which the displacement boundary condition or force load was previously applied. Press the Add button.
5. For rectangular transform, specify a rotation about each of the three axes. Arrows displayed on the face represent the new directions (X - red, Y - green and Z - blue).

![](/images/FEM_transform_rect_displ.PNG)

Rectangular local coordinate system defined for an inclined face. Long thin arrows indicate the global coordinate system, short thick ones represent the local one. Displacement boundary condition with fixed Z displacement (blue axis - perpendicular to the face in the local coordinate system) was applied first (hidden in the picture). This simulates roller support with the part being able to slide along that face.

![](/images/FEM_transform_cyl_displ.PNG)

Cylindrical transformation for a cylindrical face. Global X direction (red) always becomes the local radial direction. Fixing it via displacement boundary condition prevents radial expansion but not rotation around the hole. That would require fixing the tangential direction (Y in global axes). The third direction (global Z) is axial.

![](/images/FEM_transform_cyl_force.PNG)

Cylindrical transformation for a cylindrical face. Force (purple arrows) applied in the global Y direction becomes force applied in the tangential direction - torque. The shaft is twisted.

## Limitations

- Cylindrical transform can be applied only to cylindrical faces.

## Notes

- This feature can be used to simulate torsion but only for cylindrical bars or parts containing such bars used to transmit torque.
- The feature uses the [\*TRANSFORM card in CalculiX](https://web.mit.edu/calculix_v2.7/CalculiX/ccx_2.7/doc/ccx/node253.html).

Retrieved from "<http://wiki.freecad.org/index.php?title=FEM_ConstraintTransform/en&oldid=1532581>"
