---
title: FEM Filtre fonction sphère
---
|  |
| --- |
| FEM Filtre fonction sphère |
| Emplacement du menu |
| Résultats → Fonctions de filtrage → Sphère |
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

La fonction ![](/images/FEM_PostCreateFunctionSphere.svg) **FEM Filtre fonction sphère** définit la façon dont un maillage est coupé géométriquement. Elle est utilisée par ![](/images/FEM_PostFilterCutFunction.svg) [Filtre de découpe selon une fonction](/FEM_PostFilterCutFunction/fr "FEM PostFilterCutFunction/fr") et ![](/images/FEM_PostFilterClipRegion.svg) [Filtre d'écrêtage selon une région](/FEM_PostFilterClipRegion/fr "FEM PostFilterClipRegion/fr").

## Utilisation

### Créer une fonction sphère

1. Soit vous appuyez sur le bouton ![](/images/FEM_PostCreateFunctionSphere.svg) Sphère soit vous sélectionnez l'option **Résultats → Fonctions de filtrage → ![](/images/FEM_PostCreateFunctionSphere.svg) Sphère** du menu.
2. Le [panneau des tâches](/Task_panel/fr "Task panel/fr") de la fonction Implicit s'ouvre.
3. Vous pouvez définir les valeurs de l'origine et du rayon de la sphère de section.
4. Appuyez sur le bouton OK pour terminer.

### Modifier une fonction sphère

Si l'objet Sphere dans la [vue en arborescence](/Tree_view/fr "Tree view/fr") est caché, sélectionnez l'objet ![](/images/FEM_PostCreateFunctionSphere.svg) Sphere dans la [vue 3D](/3D_view/fr "3D view/fr") et appuyez sur Espace pour le rendre visible, comme dans cet exemple :

![](/images/FEM_Sphere-Cut-Function-Example.png)

#### Déplacer la sphère

* Cliquez et faites glisser la grille sphérique pour déplacer la sphère.

#### Mise à l'échelle de la sphère

* Cliquez et faites glisser l'un des 8 petits cubes pour mettre la sphère à l'échelle.

## Remarques

* Les fonctions existantes peuvent être utilisées pour différents filtres et même pour différents ![](/images/FEM_PostPipelineFromResult.svg) [pipelines de résultats](/FEM_PostPipelineFromResult/fr "FEM PostPipelineFromResult/fr"). Il est néanmoins recommandé d'utiliser un ensemble de fonctions distinct pour chaque pipeline afin de garder la trace des éléments dans la [vue en arborescence](/Tree_view/fr "Tree view/fr").

Retrieved from "<http://wiki.freecad.org/index.php?title=FEM_PostCreateFunctionSphere/fr&oldid=1569313>"