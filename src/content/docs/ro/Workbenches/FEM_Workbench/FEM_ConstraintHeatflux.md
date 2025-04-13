---
title: FEM Constraint Heat flux
---

|                                                   |
| ------------------------------------------------- |
| FEM ConstraintHeatflux                            |
| Menu location                                     |
| Model → Thermal Constraints → Constraint heatflux |
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

Această constrângere specifică schimbul de căldură (transferul de căldură al filmului) al unei suprafețe la temperatura _T_ și cu un coeficient de schimb termic h și o temperatură ambiantă _T0_ . Fluxul de căldură convectiv _q_ poate satisface: **_q = h(T -T0)_**

## Utilizare

1. Click pe ![](/images/FEM_ConstraintHeatflux.png) sau selctați Model → **Thermal Constraints** → ![](/images/FEM_ConstraintHeatflux.png) Constraint heatflux din meniul principal.
2. Selectați în vizualizarea 3D suprafața/elepe care constrângerea trebuie aplicată.
3. Introduceți temperatura dorită a suprafeței, coeficientul filmului și temperatura ambiantă.

## Notă

1. Constrângerea utilizează \*FILM card in CalculiX. constrângerea fluxului de căldură este explicat la <http://web.mit.edu/calculix_v2.7/CalculiX/ccx_2.7/doc/ccx/node203.html>

Retrieved from "<http://wiki.freecad.org/index.php?title=FEM_ConstraintHeatflux/ro&oldid=1568136>"
