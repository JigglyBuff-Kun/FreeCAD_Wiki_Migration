---
title: FEM Équation d'écoulement
---

|                                             |
| ------------------------------------------- |
| FEM Equation d'écoulement                   |
| Emplacement du menu                         |
| Résolution → Équation d'écoulement          |
| Ateliers                                    |
| [FEM](/FEM_Workbench/fr "FEM Workbench/fr") |
| Raccourci par défaut                        |
| _Aucun_                                     |
| Introduit dans la version                   |
| 0.17                                        |
| Voir aussi                                  |
| _Aucun_                                     |
|                                             |

## Description

Cette équation calcule les mouvements de fluides visqueux à l'aide des [équations de Navier-Stokes](https://fr.wikipedia.org/wiki/%C3%89quations_de_Navier-Stokes).

Pour plus d'informations sur les mathématiques de l'équation, voir [Elmer models manual](https://www.elmerfem.org/blog/documentation/), section _Navier-Stokes Equations_.

## Utilisation

1. Ajoutez un ![](/images/FEM_SolverElmer.svg) [solveur Elmer](/FEM_SolverElmer/fr#Équations "FEM SolverElmer/fr").
2. Sélectionnez-le dans la [vue en arborescence](/Tree_view/fr "Tree view/fr").
3. Il y a plusieurs façons de lancer la commande :
   - Appuyez sur le bouton ![](/images/FEM_EquationFlow.svg) Équation d'écoulement.
   - Sélectionnez l'option **Résolution → Équation d'écoulement** du menu.
4. Modifiez les [paramètres du solveur de l'équation](#Param.C3.A8tres_du_solveur) ou les [paramètres généraux du solveur](/FEM_SolverElmer_SolverSettings/fr "FEM SolverElmer SolverSettings/fr") si nécessaire.

## Paramètres du solveur

Pour les paramètres généraux du solveur, voir les [paramètres du solveur Elmer](/FEM_SolverElmer_SolverSettings/fr "FEM SolverElmer SolverSettings/fr").

L'équation d'écoulement fournit ces paramètres spéciaux :

- Données**Div Discretization** : défini à _true_ pour un écoulement incompressible pour une discrétisation plus stable lorsque le [nombre de Reynolds](https://fr.wikipedia.org/wiki/Nombre_de_Reynolds) augmente.
- Données**Flow Model** : modèle d'écoulement à utilisé. La valeur par défaut _Full_ inclut la convection et les termes de la dérivée temporelle dans le modèle. Le modèle _No convection_ désactive les termes de convection et le modèle _Stokes_ désactive les termes de convection et les termes de dérivée temporelle (explicite).
- Données**Gradp Discretization** : si défini à _true_, les [conditions aux limites de Dirichlet](https://fr.wikipedia.org/wiki/Condition_aux_limites_de_Dirichlet) de la pression peuvent être utilisées. Le flux de masse est également disponible comme condition limite naturelle.
- Données**Variable** : optionnel uniquement pour les calculs en 2D : vous pouvez changer la valeur par défaut de _3_ à _2_.  
  **Remarque** : dans ce cas, aucune des conditions limites de vitesse d'écoulement ne peut avoir une composante z spécifiée.

Équation :

- Données**Convection** : type de convection à utiliser dans l'![](/images/FEM_EquationHeat.svg) [équation de chaleur](/FEM_EquationHeat/fr "FEM EquationHeat/fr").  
  **Remarque** : pour les écoulements thermiques, cette propriété doit être réglée à _Computed_ (par défaut).
- Données**Magnetic Induction** : si définie à _true_, l'équation d'induction magnétique sera résolue en même temps que les [Équations de Navier-Stokes](https://fr.wikipedia.org/wiki/%C3%89quations_de_Navier-Stokes).

### Remarques à propos de convergence

Si les résultats du solveur ne convergent pas, vous pouvez essayer les choses suivantes (dans l'ordre donné) :

1. Réduire la valeur de Données**Relaxation Factor**, voir les [réglages de systèmes non linéaires](/FEM_SolverElmer_SolverSettings/fr#Facteur_de_relaxation "FEM SolverElmer SolverSettings/fr").
2. Augmenter la valeur de Données**Nonlinear Newton After Iterations**, voir [réglages de systèmes non linéaires](/FEM_SolverElmer_SolverSettings/fr#Système_non_linéaire "FEM SolverElmer SolverSettings/fr").
3. Réduire le nombre de cœurs CPU utilisés, voir les [FEM Préférences](/FEM_Preferences/fr#Elmer "FEM Preferences/fr").
4. Augmenter la densité du maillage (le rendre plus fin).

## Informations sur les caractéristiques d'analyse

L'équation d'écoulement prend en compte les caractéristiques d'analyse suivantes si elles sont définies :

- ![](/images/FEM_ConstraintFlowVelocity.svg) [Vitesse d'écoulement comme condition limite](/FEM_ConstraintFlowVelocity/fr "FEM ConstraintFlowVelocity/fr")
- ![](/images/FEM_ConstraintInitialFlowVelocity.svg) [Vitesse initiale d'écoulement](/FEM_ConstraintInitialFlowVelocity/fr "FEM ConstraintInitialFlowVelocity/fr")
- ![](/images/FEM_ConstraintPressure.svg) [Charge de pression](/FEM_ConstraintPressure/fr "FEM ConstraintPressure/fr")
- ![](/images/FEM_ConstraintInitialPressure.svg) [Pression initiale](/FEM_ConstraintInitialPressure/fr "FEM ConstraintInitialPressure/fr") ([introduit dans la version 0.21](/Release_notes_0.21/fr "Release notes 0.21/fr"))

### Remarques

- Sauf pour les calculs en 2D, pour toutes les conditions limites ci-dessus, il est important qu'elles agissent sur une face ou un corps. Les conditions aux limites pour la 3D définies sur des lignes ou des sommets ne sont pas reconnues par le solveur d'Elmer.
- Puisque la ![](/images/FEM_ConstraintPressure.svg) [Charge de pression](/FEM_ConstraintPressure/fr "FEM ConstraintPressure/fr") ne peut être définie que sur des faces, les charges de pression ne peuvent pas être utilisées pour les calculs en 2D.
- S'il n'y a pas de ![](/images/FEM_ConstraintPressure.svg) [Charge de pression](/FEM_ConstraintPressure/fr "FEM ConstraintPressure/fr"), la ![](/images/FEM_ConstraintInitialPressure.svg) [Pression initiale](/FEM_ConstraintInitialPressure/fr "FEM ConstraintInitialPressure/fr") ne sera prise en compte que si Données**Gradp Discretization** est réglé sur _true_.

## Résultats

Les résultats sont la vitesse en

m

/
s
{\displaystyle {\rm {m/s}}}
![{\displaystyle {\rm {m/s}}}](https://wikimedia.org/api/rest_v1/media/math/render/svg/85ed42a2e5a4d36ef69387b1f26abef416b52669) et la pression en

P
a
{\displaystyle {\rm {Pa}}}
![{\displaystyle {\rm {Pa}}}](https://wikimedia.org/api/rest_v1/media/math/render/svg/c9835d51ddcf6f8ce955d02f677df5789506606a). S'il n'y a pas de ![](/images/FEM_ConstraintInitialPressure.svg) [Pression initiale](/FEM_ConstraintInitialPressure/fr "FEM ConstraintInitialPressure/fr") et de ![](/images/FEM_ConstraintPressure.svg) [Charge de pression](/FEM_ConstraintPressure/fr "FEM ConstraintPressure/fr"), la pression résultante sera relative et non absolue. Comme une pression doit agir sur une face, les résultats de pression absolue ne peuvent pas être obtenus dans les simulations 2D.

Retrieved from "<http://wiki.freecad.org/index.php?title=FEM_EquationFlow/fr&oldid=1570390>"
