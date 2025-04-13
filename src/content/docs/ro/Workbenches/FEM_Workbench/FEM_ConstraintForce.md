---
title: FEM Constraint Force
---

|                                                   |
| ------------------------------------------------- |
| FEM ConstraintForce                               |
| Menu location                                     |
| Model → Mechanical Constraints → Constraint force |
| Workbenches                                       |
| [FEM](/FEM_Workbench "FEM Workbench")             |
| Default shortcut                                  |
| _None_                                            |
| Introduced in version                             |
| -                                                 |
| See also                                          |
| [FEM tutorial](/FEM_tutorial "FEM tutorial")      |
|                                                   |

## Descriere

Această comandă aplică o forță de valoare dată [N] la geometria țintei selectată.

## Cum se folosește

1)Aplicarea unei forțe în direcția normală a unei fațete

- - In Atelierul FEM, click pe ![Constraint Force](/images/Fem-constraint-force.svg) or select Model → Mechanical Constraints → Constraint force pentru a deschide dialogul proprietăților Force Constraint

![](/images/FEMForceConstraintProperties.PNG)

- - If you have Mesh displayed, you need to hide it (select the mesh object and press spacebar or right click and select Hide item) and show the original model.
  - Click on a _face_ to which a force should be applied. It will appear in the list of geometrical objects.
  - Fill in Line load with a force value in [N] (attention: _Not_ in [N/m])

![](/images/ApplyingForceToFace.PNG)

- - Direction: In a typical case, you'll click this field empty to apply a force in normal direction to the face. You can revert the direction of the force by clicking Reverse direction. In other cases, you need to pick a face or plane, which is in normal to the force direction (it could differ from the face, to which the force is being applied)
  - Click pe obiectul Close to finish the dialog and create ![](/images/FEM_ConstraintForce.png) ConstraintForce

![](/images/FEM_ConstraintForce_example.JPG)

## Notes

- The defined force is applied uniformly to the selected objects. For example, if you define one force load with 200 N applied to two faces having the same area, each face will be uniformly loaded with 100 N.
- This feature uses the [\*CLOAD card in CalculiX](https://web.mit.edu/calculix_v2.7/CalculiX/ccx_2.7/doc/ccx/node172.html).

Retrieved from "<http://wiki.freecad.org/index.php?title=FEM_ConstraintForce/ro&oldid=1358935>"
