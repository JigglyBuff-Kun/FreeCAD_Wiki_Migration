---
title: MEF Constrângeri Fixe
---
|  |
| --- |
| FEM ConstraintFixed |
| poziția meniului |
| Model → Mechanical Constraints → Constraint fixed |
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

Creează o Constrângere prin MEF pentru o intrare geometrică fixă prin blocarea tuturor celor 6 grade libertate a obiectului selectat.

## Cum se folosește

1. Click on ![](/images/FEM_ConstraintFixed.png) sau alegeți Model → **Mechanical Constraints** → ![](/images/FEM_ConstraintFixed.png) Constraint fixed din meniul de sus.
2. Selectați în vederea 3D obiectul căruia să i se aplice constrângerea și care poate fi
   1. vertices (corners)
   2. edges
   3. faces

## Limite

Nu puteți amesteca tipuri diferite de obiecte în aceeași constrângere.
Utlizați o constrângere fixă pentru fiecare tip e obiect.

## Notes

* This feature uses the [\*BOUNDARY card in CalculiX](https://web.mit.edu/calculix_v2.7/CalculiX/ccx_2.7/doc/ccx/node163.html).

Retrieved from "<http://wiki.freecad.org/index.php?title=FEM_ConstraintFixed/ro&oldid=1418420>"