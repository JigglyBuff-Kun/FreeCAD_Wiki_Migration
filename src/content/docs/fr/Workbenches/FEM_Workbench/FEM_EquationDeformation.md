---
title: FEM Équation de déformation
---

|                                                                                                                                         |
| --------------------------------------------------------------------------------------------------------------------------------------- |
| FEM                                                                                                                                     |
| Emplacement du menu                                                                                                                     |
| Résolution → Équations mécaniques → Équation de déformation                                                                             |
| Ateliers                                                                                                                                |
| [FEM](/FEM_Workbench/fr "FEM Workbench/fr")                                                                                             |
| Raccourci par défaut                                                                                                                    |
| _Aucun_                                                                                                                                 |
| Introduit dans la version                                                                                                               |
| 0.21                                                                                                                                    |
| Voir aussi                                                                                                                              |
| [FEM Équation d'élasticité](/FEM_EquationElasticity/fr "FEM EquationElasticity/fr"), [FEM Tutoriel](/FEM_tutorial/fr "FEM tutorial/fr") |
|                                                                                                                                         |

## Description

Cette équation décrit la déformation élastique non linéaire des corps solides.

Pour plus d'informations sur les mathématiques de l'équation, voir le [manuel des modèles d'Elmer (en)](http://www.elmerfem.org/blog/documentation/), section _Finite Elasticity_.

## Utilisation

1. Ajoutez un ![](/images/FEM_SolverElmer.svg) [solveur Elmer](/FEM_SolverElmer/fr#Équations "FEM SolverElmer/fr").
2. Sélectionnez-le dans la [vue en arborescence](/Tree_view/fr "Tree view/fr").
3. Il y a plusieurs façons de lancer la commande :
   - Appuyez sur le bouton ![](/images/FEM_EquationDeformation.svg) Équation de déformation.
   - Sélectionnez l'option **Résolution → Équations mécaniques → Équation de déformation**. du menu.
4. Modifiez les [paramètres du solveur de l'équation](#Param.C3.A8tres_du_solveur) ou les [paramètres généraux du solveur](/FEM_SolverElmer_SolverSettings/fr "FEM SolverElmer SolverSettings/fr") si nécessaire.

## Paramètres du solveur

Pour les paramètres généraux du solveur, voir les [paramètres du solveur Elmer](/FEM_SolverElmer_SolverSettings/fr "FEM SolverElmer SolverSettings/fr").

L'équation de déformation fournit ces paramètres spéciaux :

- Données**Calculate Pangle** : si les angles principaux doivent être calculés.
- Données**Calculate Principal** : si toutes les contraintes doivent être calculées.
- Données**Calculate Strains** : si les déformations doivent être calculées. Les contraintes seront également calculées, même si Données**Calculate Principal** ou Données**Calculate Stresses** sont réglés à _false_.
- Données**Calculate Stresses** : si les contraintes doivent être calculées. Par rapport à Données**Calculate Principal**, le critère d'élasticité de Tresca et la contrainte principale ne seront pas calculés.
- Données**Initialize State Variables** : voir le manuel d'Elmer pour plus d'informations.
- Données**Mixed Formulation** : voir le manuel d'Elmer pour plus d'informations.
- Données**Neo Hookean Model** : utilise le modèle de matériau néo-hookéen.
- Données**Variable** : variable pour l'équation de déformation. Changez ici le _3_ en _2_ si vous avez une géométrie 2D. Dans le cas particulier où Données**Mixed Formulation** et Données**Neo Hookean Model** sont réglés à _true_, le nombre de variables doit être égal aux dimensions de la géométrie + 1, donc pour une géométrie 3D, le _3_ doit être remplacé par _4_.

Équation :

- Données**Plane Stress** : calcule la solution en fonction de la situation de contrainte plane. S'applique uniquement à la géométrie 2D.

## Informations sur les caractéristiques d'analyse

L'équation de déformation prend en compte les caractéristiques d'analyse suivantes si elles sont définies :

- ![](/images/FEM_ConstraintFixed.svg) [Condition de limite fixe](/FEM_ConstraintFixed/fr "FEM ConstraintFixed/fr")
- ![](/images/FEM_ConstraintDisplacement.svg) [Condition limite de déplacement](/FEM_ConstraintDisplacement/fr "FEM ConstraintDisplacement/fr")
- ![](/images/FEM_ConstraintForce.svg) [Charge d'effort](/FEM_ConstraintForce/fr "FEM ConstraintForce/fr")
- ![](/images/FEM_ConstraintInitialTemperature.svg) [Température initiale](/FEM_ConstraintInitialTemperature/fr "FEM ConstraintInitialTemperature/fr")
- ![](/images/FEM_ConstraintPressure.svg) [Charge de pression](/FEM_ConstraintPressure/fr "FEM ConstraintPressure/fr")
- ![](/images/FEM_ConstraintSelfWeight.svg) [Charge de gravité](/FEM_ConstraintSelfWeight/fr "FEM ConstraintSelfWeight/fr")
- ![](/images/FEM_ConstraintSpring.svg) [Ressort](/FEM_ConstraintSpring/fr "FEM ConstraintSpring/fr")

### Remarque

- Sauf pour les calculs en 2D, pour toutes les caractéristiques d'analyse ci-dessus, il est important qu'elles agissent sur une face. Les caractéristiques en 3D définies comme des lignes ou des sommets ne sont pas reconnues par le solveur Elmer.

## Résultats

Les résultats disponibles dépendent des [paramètres du solveur](#Param.C3.A8tres_du_solveur). Si aucun des paramètres de Données**Calculate \*** n'a été défini sur _true_, seul le déplacement est calculé. Dans le cas contraire, les résultats correspondants seront également disponibles.

Retrieved from "<http://wiki.freecad.org/index.php?title=FEM_EquationDeformation/fr&oldid=1570388>"
