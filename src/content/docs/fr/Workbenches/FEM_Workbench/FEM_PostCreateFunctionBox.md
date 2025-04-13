---
title: FEM Filtre fonction boîte
---
|  |
| --- |
| FEM Filtre fonction boîte |
| Emplacement du menu |
| Résultats → Fonctions de filtrage → Boîte |
| Ateliers |
| [FEM](/FEM_Workbench/fr "FEM Workbench/fr") |
| Raccourci par défaut |
| *Aucun* |
| Introduit dans la version |
| 0.21 |
| Voir aussi |
| [FEM Tutoriel](/FEM_tutorial/fr "FEM tutorial/fr") |
|  |

## Description

La fonction ![](/images/FEM_PostCreateFunctionBox.svg) **FEM Filtre fonction boîte** définit la façon dont un maillage est coupé géométriquement. Elle est utilisée par ![](/images/FEM_PostFilterCutFunction.svg) [Filtre de découpe selon une fonction](/FEM_PostFilterCutFunction/fr "FEM PostFilterCutFunction/fr") et ![](/images/FEM_PostFilterClipRegion.svg) [Filtre d'écrêtage selon une région](/FEM_PostFilterClipRegion/fr "FEM PostFilterClipRegion/fr").

## Utilisation

### Créer une fonction boîte

1. Appuyer soit sur le bouton ![](/images/FEM_PostCreateFunctionBox.svg) Boîte soit sélectionner l'option **Résultats → Fonctions de filtrage → ![](/images/FEM_PostCreateFunctionBox.svg) Boîte** du menu.
2. Le [panneau des tâches](/Task_panel/fr "Task panel/fr") de la fonction Implicit s'ouvre.
3. Vous pouvez définir les valeurs de l'origine et de la direction du plan de coupe.
4. Appuyer sur le bouton OK pour terminer.

### Modifier une fonction boîte

Si l'objet Box dans la [vue en arborescence](/Tree_view/fr "Tree view/fr") est caché, sélectionnez l'objet ![](/images/FEM_PostCreateFunctionBox.svg) Box dans la [vue 3D](/3D_view/fr "3D view/fr") et appuyez sur Espace pour le rendre visible, comme dans cet exemple :

![](/images/FEM_Box-Cut-Function-Example.png)

#### Déplacer la boîte

* Cliquez et faites glisser une face de la boîte. La boîte est définie par des bords bleus.

#### Rotation et inclinaison de la boîte

* Cliquez et faites glisser l'une des 3 lignes qui traversent la boîte pour la faire pivoter et l'incliner autour de son point d'origine.

#### Mise à l'échelle de la boîte

* Cliquez et faites glisser l'un des 8 petits cubes situés dans les coins de la boîte pour la mettre à l'échelle.

#### Transformer la boîte

* Cliquez et faites glisser l'un des 6 petits cubes autour du centre de la boîte pour en modifier la forme.

## Remarques

* Les fonctions existantes peuvent être utilisées pour différents filtres et même pour différents ![](/images/FEM_PostPipelineFromResult.svg) [pipelines de résultats](/FEM_PostPipelineFromResult/fr "FEM PostPipelineFromResult/fr"). Il est néanmoins recommandé d'utiliser un ensemble de fonctions distinct pour chaque pipeline afin de garder la trace des éléments dans la [Vue en arborescence](/Tree_view/fr "Tree view/fr").

Retrieved from "<http://wiki.freecad.org/index.php?title=FEM_PostCreateFunctionBox/fr&oldid=1569330>"