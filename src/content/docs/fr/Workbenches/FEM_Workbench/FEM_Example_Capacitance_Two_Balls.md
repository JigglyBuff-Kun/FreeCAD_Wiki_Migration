---
title: FEM Exemple calcul capacité de deux sphères
---
|  |
| --- |
| Tutoriel |
| Thème |
| Analyse par les éléments finis |
| Niveau |
| Débutant |
| Temps d'exécution estimé |
| 30 min |
| Auteurs |
| [Sudhanshu Dubey](https://wiki.freecadweb.org/User:Sudhanshu_Dubey) |
| Version de FreeCAD |
| 0.19 et au-dessus |
| Fichiers exemples |
| Créé par programme |
| Voir aussi |
| *None* |
|  |

## Introduction

Cet exemple est destiné à montrer comment simuler le 6ème exemple de [Elmer GUI Tutorials](https://www.nic.funet.fi/pub/sci/physics/elmer/doc/ElmerTutorials.pdf), **Electrostatic equation – Capacitance of two balls**, en utilisant les nouveaux [FEM Exemples](/FEM_Examples/fr "FEM Examples/fr"). Ce tutoriel illustre comment configurer l'exemple, étudier ses différentes parties, le résoudre en utilisant le [FEM Solveur Elmer](/FEM_SolverElmer/fr "FEM SolverElmer/fr") et visualiser les résultats en utilisant [FEM Filtre de découpe selon une région](/FEM_PostFilterClipRegion/fr "FEM PostFilterClipRegion/fr").

![](/images/Two_balls_result_2.png)

Le résultat final de ce tutoriel

## Conditions

* Une version compatible de FreeCAD mentionnée dans l'aperçu du tutoriel.

  :   Utilisez **Aide → À propos de FreeCAD** pour voir la version installée de FreeCAD.
* Aucun logiciel externe n'est nécessaire pour charger l'exemple, visualiser le maillage et la géométrie ainsi que pour visualiser les résultats.
* Pour résoudre l'analyse par éléments finis (FEM), le solveur Elmer doit être installé sur votre ordinateur. Voir [cette page](/FEM_SolverElmer/fr#Installation "FEM SolverElmer/fr") pour savoir comment installer Elmer.

## Configurer l'exemple

### Charger l'atelier FEM

* Démarrez FreeCAD, l'atelier Start doit être chargé.
* Basculez vers l'![](/images/Workbench_FEM.svg) [Atelier FEM](/FEM_Workbench/fr "FEM Workbench/fr").

### Charger l'exemple

* Allez dans **Utilities → ![](/images/FEM_Examples.svg) Ouvrez les exemples FEM**.
* Lorsque l'interface graphique s'ouvre, recherchez et ouvrez "Electrostatics Capacitance Two Balls". Vous pouvez facilement trouver l'exemple dans **All** ou dans **Solvers → Elmer**. Pour ouvrir l'exemple, double-cliquez dessus ou sélectionnez-le et cliquez sur Setup.

![](/images/Two_balls_selection.png)

## Comprendre le cas de simulation

Ce cas présente la solution de la capacité de sphères parfaitement conductrices en espace libre. Une différence de tension entre les sphères entraîne l'introduction d'une charge électrique dans le système. Les sphères ont également une capacité propre qui provient de la différence de tension avec le champ lointain. Par conséquent, une matrice de capacité symétrique de taille 2 × 2 doit être résolue. Les capacités peuvent être calculées à partir de deux configurations de tension différentes.

## Comprendre le modèle

* Le modèle contient trois sphères.

1. Les deux plus petites sont des sphères parfaitement conductrices.
2. La plus grande simule l'air ambiant.

* Les deux sphères plus petites sont fusionnées ensemble puis cette fusion est coupée de la plus grande sphère.

![](/images/Two_balls_model_full.png)

Le modèle initial

## Conteneur d'analyse et ses objets

Les objets utilisés dans cette analyse électrostatique :

1. ![](/images/FEM_Analysis.svg) Containeur d'analyse
2. ![](/images/FEM_SolverElmer.svg) SolverElmer
3. ![](/images/FEM_EquationElectrostatic.svg) Electrostatic, l'équation de l'électrostatique
4. ![](/images/FEM_MaterialFluid.svg) FemMaterial, un matériau fluide pour représenter l'air environnant.
5. ![](/images/FEM_ConstraintElectrostaticPotential.svg) ElectrostaticPotential, des contraintes (3 d'entre elles)
6. ![](/images/FEM_ConstantVacuumPermittivity.svg) ConstantVaccumPermittivity, optionnel
7. ![](/images/FEM_MeshGmshFromShape.svg) Mesh, un maillage [Gmsh](/FEM_MeshGmshFromShape/fr "FEM MeshGmshFromShape/fr")
8. ![](/images/FEM_MeshRegion.svg) MeshRegion, une région maillée pour les petites sphères

![](/images/Two_balls_analysis.png)

Les objets tels qu'ils apparaissent dans la [vue en arborescence](/Tree_view/fr "Tree view/fr")

## Exécution de l'Analyse des éléments finis (FEA)

* Dans la [Vue en arborescence](/Tree_view/fr "Tree view/fr"), double-cliquez sur l'objet solveur ![](/images/FEM_SolverElmer.svg).
* Cliquez sur le fichier Ecrire dans la même fenêtre de tâche. Observez la fenêtre de log jusqu'à ce qu'elle imprime "write completed". Vous pouvez ignorer l'avertissement concernant la permittivité du vide qui pourrait apparaître.
* Cliquez sur Lancer. Puisqu'il s'agit d'une petite analyse, l'exécution ne devrait prendre que quelques secondes, attendez donc de voir "ELMER SOLVER FINISHED AT" dans la sortie.
* Cliquez sur Ferlmer dans la fenêtre de tâche une fois l'exécution terminée.
* Deux nouveaux objets résultats devraient être créés dans l'arborescence, ![](/images/FEM_PostPipelineFromResult.svg) SolverElmerResult et ![](/images/TextDocument.svg) SolverElmerOutput.

Si vous obtenez un message d'erreur sur le binaire du solveur ou similaire lors du déclenchement de l'analyse, vérifiez [l'installation](/FEM_SolverElmer/fr#Installation "FEM SolverElmer/fr") d'Elmer.

## Visualisation des résultats

* Assurez-vous que le maillage est invisible. Si ce n'est pas le cas, sélectionnez l'objet ![](/images/FEM_MeshGmshFromShape.svg) Mesh et appuyez sur Espace pour activer la visibilité.
* Assurez-vous également que l'objet Cut est invisible.
* Double-cliquez sur l'objet ![](/images/FEM_PostPipelineFromResult.svg) SolverElmerResult pour ouvrir son dialogue de tâche.
* Changez le "Field" en "potential" et appuyez sur OK.
* Vous remarquerez que la couleur de la sphère est passée au bleu et que le gradient à droite affiche des valeurs de 0 à 1. Cela devrait ressembler à ceci :

![](/images/Two_balls_potential.png)

## Post-traitement du résultat

* Bien que nous ayons réussi à visualiser le résultat du potentiel, nous ne voyons actuellement que le potentiel nul dans l'air entourant les deux boules. Pour visualiser le potentiel sur les boules, nous devons appliquer un [filtre d'écrêtage selon une région](/FEM_PostFilterClipRegion/fr "FEM PostFilterClipRegion/fr").
* Dans la vue arborescente, sélectionnez ![](/images/FEM_PostPipelineFromResult.svg) SolverElmerResult, puis dans la barre d'outils cliquez sur le bouton ![](/images/FEM_PostFilterClipRegion.svg) Filtre d'écrêtage selon une région.
* Cela ouvrira un dialogue avec les configurations du filtre. Cliquez sur le bouton ![](/images/List-add.svg) Créer et choisissez ![](/images/FEM_PostCreateFunctionPlane.svg) Plan. Cela ajoute un plan passant par le centre de la sphère et au niveau duquel le maillage résultant est coupé. Pour lisser la face coupée, cochez l'option **Cut Cells**. Cliquez ensuite sur Appliquer.

![](/images/Two_balls_postcreate.png)

* Dans l'arborescence, il y a une nouvelle entrée appelée Functions. Elle contient le ![](/images/FEM_PostCreateFunctionPlane.svg) plan créé. Rendez-le invisible en utilisant Espace.
* Double-cliquez sur l'objet ![](/images/FEM_PostFilterClipRegion.svg) Clip dans l'arborescence.
* Changez "Field" en "potential" et appuyez sur OK.
* Activez la visibilité de l'objet ![](/images/FEM_PostPipelineFromResult.svg) SolverElmerResult en utilisant Espace et vous devriez voir quelque chose comme ceci :

![](/images/Two_balls_result.png)

Maintenant, nous pouvons clairement voir la distribution des potentiels dans et autour des sphères.

Remarquez que lorsque ![](/images/FEM_PostApplyChanges.svg) [Appliquer les modifications](/FEM_PostApplyChanges/fr "FEM PostApplyChanges/fr") est activé, vous auriez pu sélectionner directement le "Field" dans la boîte de dialogue du filtre et ne pas avoir à la rouvrir après la création du plan.

## Recherche de la capacité

* Notre objectif actuel est de trouver la capacité contenue dans ![](/images/TextDocument.svg) SolverElmerOutput.
* Double-cliquez sur ![](/images/TextDocument.svg) SolverElmerOutput pour l'ouvrir. Faites défiler jusqu'à ce que vous trouviez:

```
StatElecSolve: Capacitance matrix computation performed (i,j,C_ij)
StatElecSolve:   1  1    5.07016E+00
StatElecSolve:   1  2    1.69328E+00
StatElecSolve:   2  2    5.07201E+00

```

* Ici, le résultat souhaité est `C12 = 1.69328`. Cette valeur est proche du `1.691` donné dans les [Elmer GUI Tutorials](https://www.nic.funet.fi/pub/sci/physics/elmer/doc/ElmerTutorials.pdf). Nous pouvons obtenir une valeur encore plus proche en créant une [FEM Région de maillage](/FEM_MeshRegion/fr "FEM MeshRegion/fr") plus fine mais cette activité est laissée à l'utilisateur. Il est également conseillé à l'utilisateur de jouer avec le [FEM Filtre d'écrêtage selon une région](/FEM_PostFilterClipRegion/fr "FEM PostFilterClipRegion/fr") pour obtenir un résultat visuel similaire à la première image de ce tutoriel.

Retrieved from "<http://wiki.freecad.org/index.php?title=FEM_Example_Capacitance_Two_Balls/fr&oldid=1475853>"