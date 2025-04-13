---
title: FEM Équation de flux
---
|  |
| --- |
| FEM Équation de flux |
| Emplacement du menu |
| Résolution → Équation de flux |
| Ateliers |
| [FEM](/FEM_Workbench/fr "FEM Workbench/fr") |
| Raccourci par défaut |
| *Aucun* |
| Introduit dans la version |
| 0.17 |
| Voir aussi |
| *Aucun* |
|  |

## Description

Cette équation est utilisée pour calculer les flux résultant généralement d'équations de type Poisson. Il s'agit notamment de l'![](/images/FEM_EquationHeat.svg) [Equation de chaleur](/FEM_EquationHeat/fr "FEM EquationHeat/fr") et l'![](/images/FEM_EquationElectrostatic.svg) [Equation électrostatique](/FEM_EquationElectrostatic/fr "FEM EquationElectrostatic/fr").

Pour plus d'informations sur les mathématiques de l'équation, voir [Elmer models manual](https://www.elmerfem.org/blog/documentation/), section *Flux Computation*.

## Utilisation

1. Ajoutez un ![](/images/FEM_SolverElmer.svg) [solveur Elmer](/FEM_SolverElmer/fr#Équations "FEM SolverElmer/fr").
2. Sélectionnez-le dans la [vue en arborescence](/Tree_view/fr "Tree view/fr").
3. Il y a plusieurs façons de lancer la commande :
   * Appuyez sur le bouton ![](/images/FEM_EquationFlux.svg) Équation de flux.
   * Sélectionnez l'option **Résolution → ![](/images/FEM_EquationFlux.svg) Équation de flux** du menu.
4. Pour inclure les conditions aux limites requises, effectuez l'une des opérations suivantes :
   * Lancez la commande ![](/images/FEM_EquationHeat.svg) [Équation de chaleur](/FEM_EquationHeat/fr "FEM EquationHeat/fr").
   * Lancez la commande ![](/images/FEM_EquationElectrostatic.svg) [Équation électrostastique](/FEM_EquationElectrostatic/fr "FEM EquationElectrostatic/fr").
5. Lors de l'utilisation d'une équation électrostatique, changez la propriété Données**Flux Coefficient** en *None* et la propriété Données**Flux Variable** en *Potential*.
6. Modifiez les [paramètres du solveur de l'équation](#Param.C3.A8tres_du_solveur) ou les [paramètres généraux du solveur](/FEM_SolverElmer_SolverSettings/fr "FEM SolverElmer SolverSettings/fr") si nécessaire.

## Paramètres du solveur

Pour les paramètres généraux du solveur, voir les [paramètres du solveur Elmer](/FEM_SolverElmer_SolverSettings/fr "FEM SolverElmer SolverSettings/fr").

L'équation de flux fournit ces paramètres spéciaux :

* Données**Average Within Materials** : si *true*, la continuité est appliquée au sein du même matériau dans la discrétisation de Galerkin discontinue en utilisant les termes de pénalité de la formulation de Galerkin discontinue.
* Données**Calculate Flux** : calcule le vecteur flux.
* Données**Calculate Flux Abs** : calcule la valeur absolue du vecteur flux. Nécessite que Données**Calculate Flux** soit vrai.
* Données**Calculate Flux Magnitude** : calcule l'amplitude du champ de vecteurs. Nécessite que Données**Calculate Flux** soit vrai.  
  En fait, c'est la même chose que Données**Calculate Flux Abs** mais cela nécessite moins de mémoire car l'équation matricielle n'est résolue qu'une seule fois. L'inconvénient est que des valeurs négatives peuvent être introduites.
* Données**Calculate Grad** : calcule le gradient du flux.
* Données**Calculate Grad Abs** : calcule le gradient absolu du flux. Exige que Données**Calculate Grad** soit vrai.
* Données**Calculate Grad Magnitude** : calcule l'amplitude du champ de vecteurs. Nécessite que Données**Calculate Grad** soit vrai.  
  En fait, c'est la même chose que Données**Calculate Grad Abs** mais cela nécessite moins de mémoire car l'équation matricielle n'est résolue qu'une seule fois. L'inconvénient est que des valeurs négatives peuvent être introduites.
* Données**Discontinuous Galerkin** : pour les champs discontinus, l'approximation Galerkin standard impose la continuité, ce qui peut ne pas être physique. Pour remédier à cela, définissez cette propriété sur *true*. Alors le résultat peut être discontinu et peut même être visualisé comme tel.
* Données**Enforce Positive Magnitude** : si cette propriété est à *true*, les valeurs négatives des champs d'amplitude calculés sont mises à zéro.
* Données**Flux Coefficient** : nom du coefficient de proportionnalité pour calculer le flux.
* Données**Flux Variable** : nom de la variable potentielle utilisée pour calculer le gradient.

## Informations sur les caractéristiques d'analyse

L'équation de flux n'a pas ses propres conditions aux limites. Elle reprend les conditions aux limites de l'![](/images/FEM_EquationHeat.svg) [Équation de chaleur](/FEM_EquationHeat/fr "FEM EquationHeat/fr") ou de l'![](/images/FEM_EquationElectrostatic.svg) [Équation électrostatique](/FEM_EquationElectrostatic/fr "FEM EquationElectrostatic/fr").

## Résultats

Les résultats disponibles dépendent des [paramètres du solveur](#Param.C3.A8tres_du_solveur). Si aucun des paramètres de Données**Calculate \*** n'a été défini sur *true*, rien n'est calculé. Sinon, les résultats correspondants seront également disponibles.

Le flux résultant est soit le flux de chaleur 

W

/

m

2
{\displaystyle {\rm {W/m^{2}}}}
![{\displaystyle {\rm {W/m^{2}}}}](https://wikimedia.org/api/rest_v1/media/math/render/svg/6840d235c91399b9bd42d984a7c61a4c68931051) (faussement appelé "flux de température"), soit le flux potentiel en 

W

/

m

2
{\displaystyle {\rm {W/m^{2}}}}
![{\displaystyle {\rm {W/m^{2}}}}](https://wikimedia.org/api/rest_v1/media/math/render/svg/6840d235c91399b9bd42d984a7c61a4c68931051) (

A
⋅
V

/

m

2
{\displaystyle {\rm {A\cdot V/m^{2}}}}
![{\displaystyle {\rm {A\cdot V/m^{2}}}}](https://wikimedia.org/api/rest_v1/media/math/render/svg/e2ec7f7c1ba96543ef2144a3b989a0e9fe7dc933)).

Retrieved from "<http://wiki.freecad.org/index.php?title=FEM_EquationFlux/fr&oldid=1570396>"