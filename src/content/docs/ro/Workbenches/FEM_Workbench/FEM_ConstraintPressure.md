---
title: MEF Constrângere de Presiune
---
|  |
| --- |
| FEM ConstraintPressure |
| poziția meniului |
| Model → Mechanical Constraints → Constraint pressure |
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

Aplică o constrângere de presiune pe o fațetă.

## Cum se folosește

1. Click pe ![](/images/FEM_ConstraintPressure.png) sau alegeți Model → **Mechanical Constraints** → ![](/images/FEM_ConstraintPressure.png) Constraint pressure din mediul de sus.
2. Click on  Add reference și selectați fațeta în vedere 3D
3. Editați fereastra corespunzătoare pentru a specifica presiunea în MPa
4. Bifați caseta pentru a inversa direcția, dacă este necesar.

![](/images/FEM_Pressure_example.PNG)

Pressure load applied to a cylinder

## Note

Distribuția presiunii este întotdeauna uniformă și întotdeauna perpendiculară pe față.

* 0.21 and below: Pressure load can be applied to shells but only when [Gmsh](/FEM_MeshGmshFromShape "FEM MeshGmshFromShape") is used for meshing and group meshing is set to true. It is hardcoded as true so the user doesn't have to worry about that. However, due to a bug, pressure load may require remeshing to work on shells.
* This feature uses the [\*DLOAD card in CalculiX](https://web.mit.edu/calculix_v2.7/CalculiX/ccx_2.7/doc/ccx/node190.html).

Retrieved from "<http://wiki.freecad.org/index.php?title=FEM_ConstraintPressure/ro&oldid=1543428>"