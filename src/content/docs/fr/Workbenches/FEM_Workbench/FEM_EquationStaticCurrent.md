---
title: FEM Équation de courant statique
---

|                                                                                                                                                                                                                                                                                          |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| FEM Équation de courant statique                                                                                                                                                                                                                                                         |
| Emplacement du menu                                                                                                                                                                                                                                                                      |
| Résolution → Équations électromagnétiques → Équation de courant statique                                                                                                                                                                                                                 |
| Ateliers                                                                                                                                                                                                                                                                                 |
| [FEM](/FEM_Workbench/fr "FEM Workbench/fr")                                                                                                                                                                                                                                              |
| Raccourci par défaut                                                                                                                                                                                                                                                                     |
| _Aucun_                                                                                                                                                                                                                                                                                  |
| Introduit dans la version                                                                                                                                                                                                                                                                |
| 1.1                                                                                                                                                                                                                                                                                      |
| Voir aussi                                                                                                                                                                                                                                                                               |
| [FEM Potentiel électrostatique](/FEM_ConstraintElectrostaticPotential/fr "FEM ConstraintElectrostaticPotential/fr"), [FEM Densité de courant](/FEM_ConstraintCurrentDensity/fr "FEM ConstraintCurrentDensity/fr"), [FEM Équation de chaleur](/FEM_EquationHeat/fr "FEM EquationHeat/fr") |
|                                                                                                                                                                                                                                                                                          |

## Description

Cette équation permet d'effectuer des analyses statiques de la conduction de courant. Elle résout le potentiel électrostatique dans un milieu conducteur, ce qui permet de calculer les courants de volume et la perte de puissance électrique ([Effet Joule](https://fr.wikipedia.org/wiki/Effet_Joule)).

Pour plus d'informations sur les mathématiques de l'équation, voir [Elmer models manual](https://www.elmerfem.org/blog/documentation/), section _Static Current Conduction_.

## Utilisation

1. Après avoir ajouté un solveur Elmer comme décrit [ici](/FEM_SolverElmer/fr#.C3.89quations "FEM SolverElmer/fr"), sélectionnez-le dans la [vue en arborescence](/Tree_view/fr "Tree view/fr")
2. Utilisez maintenant le bouton de la barre d'outils ![](/images/FEM_EquationStaticCurrent.svg) ou le menu **Résolution → Équations électromagnétiques → Équation de courant statique**.
3. Modifiez les [paramètres du solveur de l'équation](#Param.C3.A8tres_du_solveur) ou les [paramètres généraux du solveur](/FEM_SolverElmer_SolverSettings/fr "FEM SolverElmer SolverSettings/fr") si nécessaire.

## Paramètres du solveur

Pour les paramètres généraux du solveur, voir les [paramètres du solveur Elmer](/FEM_SolverElmer_SolverSettings/fr "FEM SolverElmer SolverSettings/fr").

L'équation du courant statique fournit ces paramètres spéciaux :

- Données**Calculate Joule Heating** : calcule l'effet Joule.
- Données**Calculate Nodal Heating** : calcule la chaleur nodale qui peut être utilisée pour coupler l'équation de la chaleur de manière optimale lors de l'utilisation de maillages d'éléments finis conformes.
- Données**Calculate Volume Current** : calcule le courant de volume.
- Données**Constant Weights** : active la pondération constante pour les résultats.
- Données**Current** : valeur de contrôle en cours.
- Données**Current Control** : applique le contrôle du courant avec le courant désiré.
- Données**Heat Source** : utilise constant weighting comme source de chaleur en combinaison avec l'équation de chaleur.
- Données**Power** : valeur de contrôle de la puissance.
- Données**Power Control** : applique le contrôle de la puissance avec la puissance de chaleur souhaitée.

## Informations sur les caractéristiques d'analyse

L'équation de courant statique prend en compte les caractéristiques d'analyse suivantes si elles sont activées :

- ![](/images/FEM_ConstraintElectrostaticPotential.svg) [FEM Potentiel électrostatique](/FEM_ConstraintElectrostaticPotential/fr "FEM ConstraintElectrostaticPotential/fr")
- ![](/images/FEM_ConstraintCurrentDensity.svg) [FEM Densité de courant](/FEM_ConstraintCurrentDensity/fr "FEM ConstraintCurrentDensity/fr")

### Remarque

Sauf pour les calculs en 2D, pour les ![](/images/FEM_ConstraintElectrostaticPotential.svg) [potentiels électrostatiques](/FEM_ConstraintElectrostaticPotential/fr "FEM ConstraintElectrostaticPotential/fr"), il est important qu'il agissent sur une face ou un corps. Les conditions limites en 3D définies sur des lignes ou des sommets ne sont pas reconnues par le solveur Elmer.

## Résultats

Les résultats disponibles dépendent des [paramètres du solveur](#Param.C3.A8tres_du_solveur). Si aucun des paramètres de Données**Calculate \*** n'a été défini sur _true_, seul le potentiel électrique est calculé. Dans le cas contraire, les résultats correspondants seront également disponibles.

Les résultats possibles sont :

- Effet joule en

  W

  /

  m

  3
  {\displaystyle {\rm {W/m^{3}}}}
  ![{\displaystyle {\rm {W/m^{3}}}}](https://wikimedia.org/api/rest_v1/media/math/render/svg/4705de6ab2ed2eb79b03ed63c1763185126cf1fc)

- Effet Joule nodale en

  W
  {\displaystyle {\rm {W}}}
  ![{\displaystyle {\rm {W}}}](https://wikimedia.org/api/rest_v1/media/math/render/svg/348101b89aedeceb2ebc93991ada7c21040495b7)

- Courant de volume en

  A

  /

  m

  2
  {\displaystyle {\rm {A/m^{2}}}}
  ![{\displaystyle {\rm {A/m^{2}}}}](https://wikimedia.org/api/rest_v1/media/math/render/svg/43867b3d6808de93dfdf66697429ca88013a2368)

- Potentiel en

  V
  {\displaystyle {\rm {V}}}
  ![{\displaystyle {\rm {V}}}](https://wikimedia.org/api/rest_v1/media/math/render/svg/de56ca37a64ca666d4f60a961bafffb588cfe87f)

Retrieved from "<http://wiki.freecad.org/index.php?title=FEM_EquationStaticCurrent/fr&oldid=1569125>"
