---
title: FEM Équation d'élasticité
---

|                                                                                                                                             |
| ------------------------------------------------------------------------------------------------------------------------------------------- |
| FEM Équation d'élasticité                                                                                                                   |
| Emplacement du menu                                                                                                                         |
| Résolution → Équations mécaniques → Équation d'élasticité                                                                                   |
| Ateliers                                                                                                                                    |
| [FEM](/FEM_Workbench/fr "FEM Workbench/fr")                                                                                                 |
| Raccourci par défaut                                                                                                                        |
| _Aucun_                                                                                                                                     |
| Introduit dans la version                                                                                                                   |
| 0.17                                                                                                                                        |
| Voir aussi                                                                                                                                  |
| [FEM Équation de déformation](/FEM_EquationDeformation/fr "FEM EquationDeformation/fr"), [FEM Tutoriel](/FEM_tutorial/fr "FEM tutorial/fr") |
|                                                                                                                                             |

## Description

Cette équation décrit les propriétés mécaniques des corps solides.

Pour plus d'informations sur les mathématiques de l'équation, voir [Elmer models manual](http://www.elmerfem.org/blog/documentation/), section _Linear Elasticity_.

## Utilisation

1. Ajoutez un ![](/images/FEM_SolverElmer.svg) [solveur Elmer](/FEM_SolverElmer/fr#Équations "FEM SolverElmer/fr").
2. Sélectionnez-le dans la [vue en arborescence](/Tree_view/fr "Tree view/fr").
3. Il y a plusieurs façons de lancer la commande :
   - Appuyez sur le bouton ![](/images/FEM_EquationElasticity.svg) Équation d'élasticité.
   - Sélectionnez l'option **Résolution → Équations mécaniques → Équation d'élasticité**. du menu.
4. Modifiez les [paramètres du solveur de l'équation](#Param.C3.A8tres_du_solveur) ou les [paramètres généraux du solveur](/FEM_SolverElmer_SolverSettings/fr "FEM SolverElmer SolverSettings/fr") si nécessaire.

**Remarque** : pour les analyses d'élasticité non linéaire, vous devez utiliser l'![](/images/FEM_EquationDeformation.svg) [équation de déformation](/FEM_EquationDeformation/fr "FEM EquationDeformation/fr") ([introduit dans la version 0.21](/Release_notes_0.21/fr "Release notes 0.21/fr")). L'équation d'élasticité ne concerne que les élasticités linéaires.

**Remarque** : si vous utilisez plus d'un cœur de CPU pour le solveur ([introduit dans la version 0.21](/Release_notes_0.21/fr "Release notes 0.21/fr")), vous ne pouvez pas utiliser les paramètres par défaut du solveur. Cependant, l'utilisation d'un seul CPU et des paramètres de solveur par défaut est dans de nombreux cas plus rapide que l'utilisation de plusieurs CPU car le solveur d'élasticité n'est rapide que lorsque Données**Linear Solver Type** est réglé à _Direct_ (la valeur par défaut est décrite [ici](/FEM_SolverElmer_SolverSettings/fr#Système_linéaire "FEM SolverElmer SolverSettings/fr")). Pour la résolution multi-CPU, on ne peut utiliser que la Données**Linear Direct Method** de _MUMPS_. Cependant, MUMPS n'est pas disponible en téléchargement direct.

## Paramètres du solveur

Pour les paramètres généraux du solveur, voir les [Paramètres du solveur Elmer](/FEM_SolverElmer_SolverSettings/fr "FEM SolverElmer SolverSettings/fr").

L'équation d'élasticité fournit ces paramètres spéciaux :

- Données**Calculate Pangle** : si les angles principaux doivent être calculés.
- Données**Calculate Principal** : si toutes les contraintes doivent être calculées.
- Données**Calculate Strains** : si les déformations doivent être calculées. Ceci calculera également les contraintes, même si Données**Calculate Principal** ou Données**Calculate Stresses** sont `false`.
- Données**Calculate Stresses** : si les contraintes doivent être calculées. Par rapport à Données**Calculate Principal**, le critère d'élasticité de Tresca et la contrainte principale ne seront pas calculés.
- Données**Constant Bulk System** : voir le manuel d'Elmer pour plus d'informations.
- Données**Displace Mesh** : si le maillage peut être déformé. Par défaut `true` et doit être mis à `false` pour les analyses de fréquence propre.
- Données**Fix Displacement** : si les déplacements ou les forces sont fixés, Données**Model Lumping** est automatiquement utilisé.
- Données**Geometric Stiffness** : considère la rigidité géométrique du corps.
- Données**Incompressible** : calcul du matériau incompressible en liaison avec le matériau viscoélastique de Maxwell et une Données**Variable** personnalisée.
- Données**Maxwell Material** : calcul du modèle de matériau viscoélastique.
- Données**Model Lumping** : utilise la [modélisation par blocs fonctionnels](https://fr.wikipedia.org/wiki/Bloc_fonctionnel).
- Données**Model Lumping Filename** : fichier permettant de sauvegarder les résultats de la modélisation par blocs fonctionnels.
- Données**Stability Analysis** : si `true`, Données**Eigen Analysis** devient une analyse de stabilité (analyse de flambage). Sinon, une analyse modale est effectuée.
- Données**Update Transient System** : voir le manuel d'Elmer pour plus d'informations.
- Données**Variable** : variable pour l'équation d'élasticité. Ne modifiez cette variable que si Données**Incompressible** est définie à `true`, conformément au manuel d'Elmer.

Valeurs propres :

- Données**Eigen Analysis** : si une analyse propre doit être effectuée (calcul des modes propres et des fréquences propres).
- Données**Eigen System Complex** : doit être à `true` si le système propre est complexe. Il doit être à `false` pour une analyse des valeurs propres amortie.
- Données**Eigen System Compute Residuals** : calcule les résidus du système de valeurs propres.
- Données**Eigen System Damped** : définit une analyse propre amortie. Ne peut être utilisé que si Données**[Type de solveur linéaire](/FEM_SolverElmer_SolverSettings/fr#Syst.C3.A8me_lin.C3.A9aire "FEM SolverElmer SolverSettings/fr")** est _Iterative_.
- Données**Eigen System Select** : sélection des valeurs propres qui sont calculées. Notez que la sélection de \*Largest\*\* provoque une exécution infinie pour un solveur Elmer récent (à partir d'août 2022).
- Données**Eigen System Tolerance** : tolérance de convergence pour la résolution itérative du système propre. La valeur par défaut est 100 fois la Données**[Type de solveur linéaire](/FEM_SolverElmer_SolverSettings/fr#Syst.C3.A8me_lin.C3.A9aire "FEM SolverElmer SolverSettings/fr")**.
- Données**Eigen System Values** : numéro du mode propre le plus élevé qui doit être calculé.

Équation :

- Données**Plane Stress** : calcule la solution en fonction de la situation de contrainte plane. S'applique uniquement à la géométrie 2D.

## Informations sur les caractéristiques d'analyse

L'équation d'élasticité prend en compte les caractéristiques d'analyse suivantes si elles sont définies :

- ![](/images/FEM_ConstraintFixed.svg) [Condition de limite fixe](/FEM_ConstraintFixed/fr "FEM ConstraintFixed/fr")
- ![](/images/FEM_ConstraintDisplacement.svg) [Condition limite de déplacement](/FEM_ConstraintDisplacement/fr "FEM ConstraintDisplacement/fr")
- ![](/images/FEM_ConstraintForce.svg) [Charge d'effort](/FEM_ConstraintForce/fr "FEM ConstraintForce/fr")
- ![](/images/FEM_ConstraintInitialTemperature.svg) [Température initiale](/FEM_ConstraintInitialTemperature/fr "FEM ConstraintInitialTemperature/fr")
- ![](/images/FEM_ConstraintPressure.svg) [Charge de pression](/FEM_ConstraintPressure/fr "FEM ConstraintPressure/fr")
- ![](/images/FEM_ConstraintSelfWeight.svg) [Charge de gravité](/FEM_ConstraintSelfWeight/fr "FEM ConstraintSelfWeight/fr")
- ![](/images/FEM_ConstraintSpring.svg) [Ressort](/FEM_ConstraintSpring/fr "FEM ConstraintSpring/fr")

### Remarque

- Sauf pour les calculs en 2D, pour toutes les caractéristiques d'analyse ci-dessus, il est important qu'elles agissent sur une face. Les caractéristiques en 3D définies comme des lignes ou des sommets ne sont pas reconnues par le solveur Elmer.

## Analyse en mode propre

Pour effectuer une analyse en mode propre (calcul des modes et fréquences propres), vous devez

1. Définir Données**Eigen Analysis** à `true`.
2. Définir Données**Displace Mesh** à `false`.
3. Définir Données**Eigen System Values** au le nombre le plus élevé de modes propres qui vous intéresse. Plus ce nombre est petit, plus le temps d'exécution du solveur est court puisque les modes supérieurs peuvent être omis du calcul.
4. Ajouter une [Condition de limite fixe](/FEM_ConstraintFixed/fr "FEM ConstraintFixed/fr") et définir au moins une face du corps comme fixe.
5. Lancer le solveur.

Il est fortement recommandé d'utiliser Données**Linear Solver Type** réglé à _Direct_ (valeur par défaut) car cela est beaucoup plus rapide et les résultats sont plus précis.

## Analyse de flambage

Pour effectuer une analyse de flambage, vous devez procéder de la même manière que pour une [Analyse en mode propre](#Analyse_en_mode_propre) et en plus :

- Définir Données**Stability Analysis** à `true`.

## Résultats

Les résultats disponibles dépendent des [paramètres du solveur](#Param.C3.A8tres_du_solveur). Si aucun des paramètres de Données**Calculate \*** n'a été défini à _true_, seul le déplacement est calculé. Sinon, les résultats correspondants seront également disponibles. Si Données**Eigen Analysis** est réglée à _true_, tous les résultats seront disponibles pour chaque mode propre calculé.

Si Données**Eigen Analysis** a été réglée à `true`, les fréquences propres seront affichées à les logs du solveur dans le dialogue du solveur et également dans le document **SolverElmerOutput** qui sera créé dans l'arborescence une fois que le solveur aura terminé.

**Remarque :** le vecteur de déplacement du mode propre

d
→
{\displaystyle {\vec {d}}}
![{\displaystyle {\vec {d}}}](https://wikimedia.org/api/rest_v1/media/math/render/svg/3e1eb48ef8121a782f64c8453fa6f80a9ca26e2e) a une valeur arbitraire puisque le résultat est

d
→
=
c
⋅

u
→
{\displaystyle \quad {\vec {d}}=c\cdot {\vec {u}}}
![{\displaystyle \quad {\vec {d}}=c\cdot {\vec {u}}}](https://wikimedia.org/api/rest_v1/media/math/render/svg/f1be0746f478e825c4e54a17871405caccf6b694)

alors que

u
→
{\displaystyle {\vec {u}}}
![{\displaystyle {\vec {u}}}](https://wikimedia.org/api/rest_v1/media/math/render/svg/89c41e9cf70c5e5b56e2128a136985a75f90ba43) est le vecteur propre et

c
{\displaystyle c}
![{\displaystyle c}](https://wikimedia.org/api/rest_v1/media/math/render/svg/86a67b81c2de995bd608d5b2df50cd8cd7d92455) est un nombre complexe.

Retrieved from "<http://wiki.freecad.org/index.php?title=FEM_EquationElasticity/fr&oldid=1570392>"
