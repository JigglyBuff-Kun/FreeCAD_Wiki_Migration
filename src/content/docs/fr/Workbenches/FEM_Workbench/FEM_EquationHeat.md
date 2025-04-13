---
title: FEM Équation de chaleur
---

|                                                    |
| -------------------------------------------------- |
| FEM Équation de chaleur                            |
| Emplacement du menu                                |
| Résolution → Équation de chaleur                   |
| Ateliers                                           |
| [FEM](/FEM_Workbench/fr "FEM Workbench/fr")        |
| Raccourci par défaut                               |
| _Aucun_                                            |
| Introduit dans la version                          |
| 0.17                                               |
| Voir aussi                                         |
| [FEM Tutoriel](/FEM_tutorial/fr "FEM tutorial/fr") |
|                                                    |

## Description

Cette équation décrit le transfert de chaleur dans les corps rigides et fluides.

Pour plus d'informations sur les mathématiques de l'équation, voir [Elmer models manual](https://www.elmerfem.org/blog/documentation/), section _Heat Equation_.

## Utilisation

1. Ajoutez un ![](/images/FEM_SolverElmer.svg) [solveur Elmer](/FEM_SolverElmer/fr#Équations "FEM SolverElmer/fr").
2. Sélectionnez-le dans la [vue en arborescence](/Tree_view/fr "Tree view/fr").
3. Il y a plusieurs façons de lancer la commande :
   - Appuyez sur le bouton ![](/images/FEM_EquationHeat.svg) Équation de chaleur.
   - Sélectionnez l'option **Résolution → Équation de chaleur** du menu.
4. Modifiez les [paramètres du solveur de l'équation](#Param.C3.A8tres_du_solveur) ou les [paramètres généraux du solveur](/FEM_SolverElmer_SolverSettings/fr "FEM SolverElmer SolverSettings/fr") si nécessaire.

## Paramètres du solveur

Pour les paramètres généraux du solveur, voir les [paramètres du solveur Elmer](/FEM_SolverElmer_SolverSettings/fr "FEM SolverElmer SolverSettings/fr").

L'équation de la chaleur fournit ces réglages spéciaux :

- Données**Bubbles** : il existe également une formulation résiduelle sans bulles de la méthode des éléments finis stabilisés. Elle est plus précise et n'inclut pas de termes ad hoc. Cependant, elle peut être plus coûteuse en termes de calcul. Si Données**Bubbles** et Données**[Stabilize](/FEM_SolverElmer_SolverSettings/fr#Base "FEM SolverElmer SolverSettings/fr")** sont tous deux _false_, aucune stabilisation n'est utilisée et les résultats peuvent facilement être absurdes.  
  **Remarque** : si, au cours de la _première itération du solveur_, vous obtenez cette erreur :  
   ERROR:: IterSolve: Numerical Error: System diverged over maximum tolerance.  
  La méthode Données**Bubbles** a échoué. Dans ce cas, mettez Données**[Stabilize](/FEM_SolverElmer_SolverSettings/fr#Base "FEM SolverElmer SolverSettings/fr")** à _true_.

Equation :

- Données**Convection** : type de convection à utiliser dans l'équation de la chaleur.  
  **Remarque** : si cette valeur n'est pas mise à _None_, Données**[Stabilize](/FEM_SolverElmer_SolverSettings/fr#Base "FEM SolverElmer SolverSettings/fr")** doit être mise à _true_ sinon le terme de convection ne sera pas considéré pour l'équation de la chaleur.
- Données**Phase Change Model** : modèle utilisé pour les changements de phase (de la glace à l'eau, etc.). Le modèle _Spatial 1_ est la méthode de capacité de chaleur apparente, _Spatial 2_ et _Temporel_ sont les méthodes de capacité de chaleur effective.  
  Pour plus d'informations sur les modèles, voir [ce papier](https://blog.rwth-aachen.de/gfd/files/2017/07/BT_2013_Schueller_elmer_icemole.pdf) (section 2.5.2.2) (en allemand). Dans l'article, il est également montré que _Spatial 1_ a des problèmes numériques sur des gradients de température plus importants et que _Spatial 2_ est préférable pour le changement de phase de la glace à l'eau.

## Informations sur les caractéristiques d'analyse

L'équation de chaleur prend en compte les caractéristiques d'analyse suivantes si elles sont activées :

- ![](/images/FEM_ConstraintBodyHeatSource.svg) [Source de chaleur du corps](/FEM_ConstraintBodyHeatSource/fr "FEM ConstraintBodyHeatSource/fr")
- ![](/images/FEM_ConstraintInitialTemperature.svg) [Température initiale](/FEM_ConstraintInitialTemperature/fr "FEM ConstraintInitialTemperature/fr")
- ![](/images/FEM_ConstraintTemperature.svg) [Condition limite de température](/FEM_ConstraintTemperature/fr "FEM ConstraintTemperature/fr")

### Remarque

À l'exception des calculs en 2D, pour toutes les caractéristiques d'analyse ci-dessus, il est important qu'elles agissent sur une face ou un corps. Les fonctions en 3D définies sur des lignes ou des sommets ne sont pas reconnues par le solveur Elmer.

## Résultat

Le résultat est la température en Kelvin.

Retrieved from "<http://wiki.freecad.org/index.php?title=FEM_EquationHeat/fr&oldid=1571335>"
