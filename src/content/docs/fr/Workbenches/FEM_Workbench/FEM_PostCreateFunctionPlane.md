---
title: FEM Filtre fonction plan
---
|  |
| --- |
| FEM Filtre fonction plan |
| Emplacement du menu |
| Résultats → Fonctions de filtrage → Plan |
| Ateliers |
| [FEM](/FEM_Workbench/fr "FEM Workbench/fr") |
| Raccourci par défaut |
| *Aucun* |
| Introduit dans la version |
| - |
| Voir aussi |
| [FEM Tutoriel](/FEM_tutorial/fr "FEM tutorial/fr") |
|  |

## Description

La fonction ![](/images/FEM_PostCreateFunctionPlane.svg) **FEM Filtre fonction plan** définit la façon dont un maillage est coupé géométriquement. Elle est utilisée par ![](/images/FEM_PostFilterCutFunction.svg) [Filtre de découpe selon une fonction](/FEM_PostFilterCutFunction/fr "FEM PostFilterCutFunction/fr") et ![](/images/FEM_PostFilterClipRegion.svg) [Filtre d'écrêtage selon une région](/FEM_PostFilterClipRegion/fr "FEM PostFilterClipRegion/fr").

## Utilisation

### Créer une fonction plan

1. Appuyez soit sur le bouton ![](/images/FEM_PostCreateFunctionPlane.svg) Plan soit sélectionner l'option **Résultats → Fonctions de filtrage → ![](/images/FEM_PostCreateFunctionPlane.svg) Plan** du menu.
2. Le [panneau des tâches](/Task_panel/fr "Task panel/fr") de la fonction Implicit s'ouvre.
3. Vous pouvez définir les valeurs de l'origine et de la direction du plan de coupe.
4. Appuyer sur le bouton OK pour terminer.

### Modifier une fonction plan

Si l'objet Plan dans la [vue 3D](/3D_view/fr "3D view/fr") est caché, sélectionnez l'objet ![](/images/FEM_PostCreateFunctionPlane.svg) Plan dans la [vue en arborescence](/Tree_view/fr "Tree view/fr") et appuyez sur Espace pour le rendre visible, comme dans cet exemple :

![](/images/FEM_Plane-Cut-Function-Example.png)

#### Déplacer le plan

* Cliquez et faites glisser le gros cuboïde blanc pour déplacer le plan le long de son vecteur normal. Passez le curseur sur le manipulateur (sans cliquer) et appuyez sur Ctrl pour changer l'orientation de ce translateur d'axe.
* Cliquez et faites glisser la grille blanche.

#### Rotation et inclinaison du plan

* Cliquez et faites glisser une ligne qui relie les petits cubes au grand cube blanc pour faire tourner et incliner le plan autour de son origine.

#### Mise à l'échelle du plan

* Cliquez sur l'un des 6 petits cubes et faites-le glisser pour mettre le plan à l'échelle. Cependant, comme l'objet est un plan infini, la taille n'a pas d'importance.

## Remarques

* Les fonctions existantes peuvent être utilisées pour différents filtres et même pour différents ![](/images/FEM_PostPipelineFromResult.svg) [pipelines de résultats](/FEM_PostPipelineFromResult/fr "FEM PostPipelineFromResult/fr"). Il est néanmoins recommandé d'utiliser un ensemble de fonctions distinct pour chaque pipeline afin de garder la trace des éléments dans la [Vue en arborescence](/Tree_view/fr "Tree view/fr").

Retrieved from "<http://wiki.freecad.org/index.php?title=FEM_PostCreateFunctionPlane/fr&oldid=1569306>"