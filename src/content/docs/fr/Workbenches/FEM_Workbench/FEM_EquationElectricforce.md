---
title: FEM Équation de force électrique
---
|  |
| --- |
| FEM Équation de force électrique |
| Emplacement du menu |
| Résolution → Équations électromagnétiques → Équation de force électrique |
| Ateliers |
| [FEM](/FEM_Workbench/fr "FEM Workbench/fr") |
| Raccourci par défaut |
| *Aucun* |
| Introduit dans la version |
| 0.19 |
| Voir aussi |
| [FEM Equation électrostatique](/FEM_EquationElectrostatic/fr "FEM EquationElectrostatic/fr") |
|  |

## Description

Cette équation décrit la force électrostatique agissant sur une surface.

Pour plus d'informations sur les mathématiques de l'équation, voir [Elmer models manual](http://www.elmerfem.org/blog/documentation/), section *Electrostatic force*.

## Utilisation

1. Ajoutez un ![](/images/FEM_SolverElmer.svg) [solveur Elmer](/FEM_SolverElmer/fr#Équations "FEM SolverElmer/fr").
2. Sélectionnez-le dans la [vue en arborescence](/Tree_view/fr "Tree view/fr").
3. Il y a plusieurs façons de lancer la commande :
   * Appuyez sur le bouton ![](/images/FEM_EquationElectricforce.svg) Équation de force électrique.
   * Sélectionnez l'option **Résolution → Équations électromagnétiques → Équation de force électrique** du menu.
4. L'équation de force électrique a besoin du champ potentiel :
   * Lancez la commande ![](/images/FEM_EquationElectrostatic.svg) [Équation électrostastique](/FEM_EquationElectrostatic/fr "FEM EquationElectrostatic/fr").
5. Changez les [paramètres du solveur de l'équation](#Param.C3.A8tres_du_solveur) ou les [paramètres généraux du solveur](/FEM_SolverElmer_SolverSettings/fr "FEM SolverElmer SolverSettings/fr") si nécessaire.

L'équation de la force électrique ne calcule la force que pour les faces avec un ![](/images/FEM_ConstraintElectrostaticPotential.svg) [potentiel électrostatique](/FEM_ConstraintElectrostaticPotential/fr "FEM ConstraintElectrostaticPotential/fr") avec l'option **Calculer la force électrique** de la condition aux limites est utilisée.

## Paramètres du solveur

Pour les paramètres généraux du solveur, voir les [paramètres du solveur Elmer](/FEM_SolverElmer_SolverSettings/fr "FEM SolverElmer SolverSettings/fr").

L'équation de la force électrique fournit ce paramètre spécial :

* Données**Exec Solver** : par défaut, l'équation n'est résolue qu'après un pas de temps. Cela signifie qu'elle est résolue une fois que la solution des autres équations a convergé. Lorsque le réglage est à *Always*, l'équation est résolue après chaque itération par pas de temps. (Pour les simulations en [état stationnaire](/FEM_SolverElmer_SolverSettings#Type "FEM SolverElmer SolverSettings"), la simulation entière est un pas de temps).

## Informations sur les caractéristiques d'analyse

L'équation de la force électrique n'a pas de caractéristiques d'analyse propres. Elle prend la ![](/images/FEM_ConstraintElectrostaticPotential.svg) [condition limite du potentiel électrostatique](/FEM_ConstraintElectrostaticPotential/fr "FEM ConstraintElectrostaticPotential/fr") de l'![](/images/FEM_EquationElectrostatic.svg) [équation électrostatique](/FEM_EquationElectrostatic/fr "FEM EquationElectrostatic/fr"). Dans la condition limite, il est important d'utiliser l'option **Calculer la force électrique**.

## Résultat

Le résultat est la densité de force électrique en 

N

/

m

2
{\displaystyle {\rm {N/m^{2}}}}
![{\displaystyle {\rm {N/m^{2}}}}](https://wikimedia.org/api/rest_v1/media/math/render/svg/a90004e7cf2472e320272d782c911ff786f8be02).

Retrieved from "<http://wiki.freecad.org/index.php?title=FEM_EquationElectricforce/fr&oldid=1570394>"