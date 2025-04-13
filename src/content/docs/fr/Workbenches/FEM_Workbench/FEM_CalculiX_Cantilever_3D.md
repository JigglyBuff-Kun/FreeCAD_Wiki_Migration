---
title: FEM CalculiX Cantilever 3D
---

|                                                                             |
| --------------------------------------------------------------------------- |
| Tutoriel                                                                    |
| Thème                                                                       |
| Analyse par éléments finis                                                  |
| Niveau                                                                      |
| Débutant                                                                    |
| Temps d'exécution estimé                                                    |
| 10 minutes                                                                  |
| Auteurs                                                                     |
| [Bernd](http://www.freecadweb.org/wiki/index.php?title=User:Berndhahnebach) |
| Version de FreeCAD                                                          |
| 0.16.6377 ou plus récente                                                   |
| Fichiers exemples                                                           |
| _None_                                                                      |
| Voir aussi                                                                  |
| _None_                                                                      |
|                                                                             |

## Introduction

Cet exemple est destiné à montrer à quoi ressemble une simple analyse par éléments finis (**FEA**) dans l'[atelier FEM](/FEM_Workbench/fr "FEM Workbench/fr") de FreeCAD et comment les résultats peuvent être visualisés. Il illustre comment déclencher une FEA et comment changer la valeur et la direction de la charge. De plus, étant donné que le fichier d'exemple est fourni avec toute installation de FreeCAD, c'est une vérification utile et facile à exécuter dans le but de vérifier que l'atelier FEM est correctement configuré.

![](/images/FEM_example01_pic10.png)

## Conditions

- Une version compatible de FreeCAD désignée dans l'aperçu du tutoriel.

  : Utilisez **Aide → À propos de FreeCAD** pour voir la version de FreeCAD installée

- Aucun logiciel externe n'est nécessaire pour charger le fichier d'exemple, afficher le maillage et la géométrie ainsi que pour visualiser les résultats.
- Pour relancer la FEA, le solveur CalculiX doit être installé sur votre ordinateur. Probablement le solveur a déjà été installé avec FreeCAD. Si le solveur CalculiX n'est pas installé, voir [FEM Installation des composants requis](/FEM_Install/fr "FEM Install/fr").

## Configurer le fichier exemple

### Charger le fichier exemple

- Démarrez FreeCAD.
- Si l'atelier Start n'est pas activé, chargez-le et ouvrez la page de démarrage.
- Ouvrez l'exemple "FemCalculixCantilever3D.FcStd".

![](/images/FEM_example01_pic11.png)

### Activer le conteneur d'analyse

- Pour travailler avec une analyse, l'analyse doit être activée.
- Dans la [vue en arborescence](/Tree_view/fr "Tree view/fr"), double-cliquez sur le bouton ![](/images/FEM_Analysis.svg) Analyse,
- Ou cliquez avec le bouton droit de la souris sur l'image ![](/images/FEM_Analysis.svg) Analyse et choisissez Activer l'analyse.

![](/images/FEM_example01_pic12.png)

### Conteneur d'analyse et ses objets

- Si l'analyse est activée, FreeCAD de lui-même basculera vers l'atelier FEM.
- Il faut au moins 5 objets pour faire une analyse mécanique statique.

* ![](/images/FEM_Analysis.svg) le conteneur d'analyse

1. ![](/images/FEM_SolverCalculixCxxtools.svg) un solveur
2. ![](/images/FEM_MaterialSolid.svg) un matériau
3. ![](/images/FEM_ConstraintFixed.png) une condition limite fixe
4. ![](/images/FEM_ConstraintForce.svg) une charge de force
5. ![](/images/FEM_FEMMesh.svg) un maillage FEM

- Dans cet exemple, les résultats ![](/images/FEM_ResultShow.svg) sont déjà inclus.

### Visualiser des résultats

1. Vérifiez que l'analyse est activée.
2. Vérifiez que l'analyse contient toujours l'objet résultat, sinon rechargez simplement le fichier exemple.
3. Double-cliquez sur l'objet résultat ![](/images/FEM_ResultShow.svg), ou sélectionnez-le et cliquez sur le bouton ![](/images/FEM_ResultShow.svg) [Afficher le résultat](/FEM_ResultShow/fr "FEM ResultShow/fr") dans la barre d'outils FEM.
4. Dans la fenêtre de tâche, choisissez `z-Displacement`. Il montre `-86.93 mm` dans la direction z négative. Ceci est logique puisque la force est également dans la direction z négative.
5. Activez la case à cocher à côté du curseur inférieur de l'affichage du déplacement.
6. Le curseur peut être utilisé pour modifier le maillage afin de visualiser la déformation d'une manière simplifiée.
7. Choisissez parmi les différents types de résultats pour afficher tous les types de résultats disponibles dans l'interface graphique.

![](/images/FEM_example01_pic13.png)

### Purger les résultats

1. Assurez-vous que l'analyse est activée.
2. Pour supprimer les résultats : sélectionnez dans la barre d'outils l'icône ![](/images/FEM_ResultsPurge.svg) [Purger les résultats](/FEM_ResultsPurge/fr "FEM ResultsPurge/fr").

### Exécuter l'analyse par éléments finis

- Dans la [vue en arborescence](/Tree_view/fr "Tree view/fr"), double-cliquez sur l'objet solveur ![](/images/FEM_SolverCalculixCxxtools.svg).
- Dans le [panneau des tâches](/Task_panel/fr "Task panel/fr") de l'objet solveur, assurez-vous que l'analyse statique est sélectionnée.
- Cliquez sur Ecrire le fichier .inp dans la même fenêtre de tâches. Observez la fenêtre de journal jusqu'à ce qu'elle affiche "write completed."
- Cliquez sur Lancer CalculiX. Comme il s'agit d'une très petite analyse, son exécution devrait prendre moins d'une seconde.
- Dans la fenêtre de texte, il devrait apparaître en lettres vertes "CalculiX done without error!" et à la ligne suivante "loading result sets ...".
- Vous venez de terminer votre première analyse par éléments finis dans FreeCAD s'il n'y a pas eu de message d'erreur.
- Cliquez sur Fermer dans la fenêtre de tâches.
- Un nouvel objet de résultat devrait être créé. Vous savez déjà comment visualiser les résultats .
- Si vous obtenez un message d'erreur sans solveur binaire ou similaire lors du déclenchement de la vérification d'analyse, voir [FEM Installation des composants requis](/FEM_Install/fr "FEM Install/fr").

![](/images/FEM_example01_pic14.png)

### Exécuter l'analyse rapide par éléments finis

- Dans l'arborescence, sélectionnez l'objet solveur ![](/images/FEM_SolverCalculixCxxtools.svg) de l'analyse ![](/images/FEM_Analysis.svg).
- Dans la barre d'outils de l'icône, cliquez sur ![](/images/FEM_SolverRun.svg) [Lancer les calculs du solveur](/FEM_SolverRun/fr "FEM SolverRun/fr").
- Le fichier de saisie Calculix sera écrit, CalculiX sera déclenché et l'objet résultant devrait être créé.

### Modifier la direction de la charge et la valeur de la charge

- Dans la [vue en arborescence](/Tree_view/fr "Tree view/fr"), développez ![](/images/FEM_ResultShow.svg) CCX_Results et sélectionnez l'objet ![](/images/FEM_MeshResult.svg) ResultMesh et appuyez sur la touche Espace.
  - **Résultat :** la visibilité du maillage FEM est désactivée. Le modèle géométrique est toujours visible.
- Dans la [vue en arborescence](/Tree_view/fr "Tree view/fr"), double-cliquez sur l'objet ![](/images/FEM_ConstraintForce.svg) FEMConstraintForce pour ouvrir son [panneau des tâches](/Task_panel/fr "Task panel/fr").
- Dans la fenêtre des tâches, changez la valeur de la charge en **500000000 N = 500 MN** (**Remarque :** l'unité de force dans la fenêtre des tâches doit être en N).
- Sur le modèle géométrique, cliquez sur l'une des longues arêtes dans la direction x.
- Cliquez sur le bouton Direction.
  - **Résultat :** les flèches rouges qui illustrent la force changent de direction dans la direction x. Elles indiquent la direction de la force.
- Puisqu'une tension doit être appliquée à la boîte, la direction inverse doit être déclenchée en cliquant dessus.
- Les flèches rouges de la force vont changer de direction.
- Cliquez sur OK dans la fenêtre de tâche.

![](/images/FEM_example01_pic15.png)

- Vous savez déjà comment déclencher une analyse et comment visualiser les résultats.
- La déformation dans la direction x devrait être de 18,95 mm.

![](/images/FEM_example01_pic16.png)

## Et ensuite ?

- Nous avons maintenant terminé avec le processus de base pour l'[atelier FEM](/FEM_Workbench/fr "FEM Workbench/fr").
- Vous êtes maintenant prêt à faire le deuxième [FEM Tutoriel](/FEM_tutorial/fr "FEM tutorial/fr").
- Nous allons créer le cantilever de CalculiX par nous-mêmes et comparer les résultats avec la théorie des poutres.

Retrieved from "<http://wiki.freecad.org/index.php?title=FEM_CalculiX_Cantilever_3D/fr&oldid=1334301>"
