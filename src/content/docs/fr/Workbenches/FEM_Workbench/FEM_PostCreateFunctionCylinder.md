---
title: FEM Filtre fonction cylindre
---
|  |
| --- |
| FEM Filtre fonction cylindre |
| Emplacement du menu |
| Résultats → Fonctions de filtrage → Cylindre |
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

La fonction ![](/images/FEM_PostCreateFunctionCylinder.svg) **FEM Filtre fonction cylindre** définit la façon dont un maillage est coupé géométriquement. Elle est utilisée par ![](/images/FEM_PostFilterCutFunction.svg) [Filtre de découpe selon une fonction](/FEM_PostFilterCutFunction/fr "FEM PostFilterCutFunction/fr") et ![](/images/FEM_PostFilterClipRegion.svg) [Filtre d'écrêtage selon une région](/FEM_PostFilterClipRegion/fr "FEM PostFilterClipRegion/fr").

## Utilisation

### Créer une fonction cylindre

1. Appuyer soit sur le bouton ![](/images/FEM_PostCreateFunctionCylinder.svg) Cylindre soit sélectionner l'option **Résultats → Fonctions de filtrage → ![](/images/FEM_PostCreateFunctionCylinder.svg) Cylindre** du menu.
2. Le [panneau des tâches](/Task_panel/fr "Task panel/fr") de la fonction Implicit s'ouvre.
3. Vous pouvez définir les valeurs de l'origine et de la direction du plan de coupe.
4. Appuyer sur le bouton OK pour terminer.

### Modifier une fonction cylindre

Si l'objet Cylinder dans la [vue en arborescence](/Tree_view/fr "Tree view/fr") est caché, sélectionnez l'objet ![](/images/FEM_PostCreateFunctionCylinder.svg) Cylinder dans la [vue 3D](/3D_view/fr "3D view/fr") et appuyez sur Espace pour le rendre visible, comme dans cet exemple :

![](/images/FEM_Cylinder-Cut-Function-Example.png)

#### Déplacer le cylindre

* Cliquez et faites glisser le gros cube blanc pour déplacer le cylindre le long de son vecteur normal.
* Cliquez et faites glisser la grille blanche.

#### Rotation et inclinaison du cylindre

* Cliquez et faites glisser une ligne qui relie les petits cubes au grand cube blanc pour faire tourner et incliner le cylindre autour de son origine.

#### Mise à l'échelle du cylindre

* Cliquez et faites glisser l'un des 6 petits cubes pour mettre le cylindre à l'échelle.

## Remarques

* Les fonctions existantes peuvent être utilisées pour différents filtres et même pour différents ![](/images/FEM_PostPipelineFromResult.svg) [pipelines de résultats](/FEM_PostPipelineFromResult/fr "FEM PostPipelineFromResult/fr"). Il est néanmoins recommandé d'utiliser un ensemble de fonctions distinct pour chaque pipeline afin de garder la trace des éléments dans la [Vue en arborescence](/Tree_view/fr "Tree view/fr").

Retrieved from "<http://wiki.freecad.org/index.php?title=FEM_PostCreateFunctionCylinder/fr&oldid=1569320>"