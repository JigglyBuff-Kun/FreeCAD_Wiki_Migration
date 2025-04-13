---
title: MEF Constrîngere Rotație Plan
---
|  |
| --- |
| FEM ConstraintPlaneRotation |
| poziția meniului |
| Model → Mechanical Constraints → Constraint plane rotation |
| Ateliere |
| [FEM](/FEM_Workbench/ro "FEM Workbench/ro") |
| scurtătură |
| *Nici unul* |
| Prezentat în versiune |
| - |
| A se vedea, de asemenea, |
| [FEM tutorial](/FEM_tutorial/ro "FEM tutorial/ro") |
|  |

## Descriere

Creează o constrângere FEM pentru păstrarea nodurilor în același plan

## Cum se folosește

1. Click on ![](/images/FEM_ConstraintPlaneRotation.png) sau alegeți Model → **Mechanical Constraints** → ![](/images/FEM_ConstraintPlaneRotation.png) Constraint plane rotation din meniul principal.
2. Selectați în vizualizarea 3D obiectul pe care trebuie aplicat constrângerea, care poate fi o fațetă.

![](/images/FEM_plane_rotation_constraint_example.PNG)

Example of plane multi-point constraint use. Both simply-supported beams are subjected to the same force but the bottom one has plane MPC applied to the green segment of the top face. This forces the nodes there to stay on the same plane and changes the deformation (here scaled).

## Limite

1. Constrângerea de rotație a planului poate fi aplicată numai unei singure fațete plane.
2. Atunci când o constrângere de rotație a planului este aplicată la aceeași fațetă ca și o constrângere de deplasare/fixare, constrângerea de deplasare/fixare are prioritate.

## Note

1. Această constrângere utilizează cardul/tabelul \*MPC din CalculiX. Tabelul este explicat în detaliu la <http://web.mit.edu/calculix_v2.7/CalculiX/ccx_2.7/doc/ccx/node220.html>

Retrieved from "<http://wiki.freecad.org/index.php?title=FEM_ConstraintPlaneRotation/ro&oldid=1541606>"