---
title: Vue DAG
---
## Introduction

La vue DAG signifie [Directed Acyclic Graph (Graphe orienté acyclique)](https://fr.wikipedia.org/wiki/Graphe_orient%C3%A9_acyclique). Elle montre les relations entre les différents objets du document. Elle montre principalement comment certains objets dépendent d'autres objets dans un modèle complexe comportant de nombreuses fonctionnalités et références, telles que celles pouvant être créées avec l'![](/images/Workbench_PartDesign.svg) [atelier PartDesign](/PartDesign_Workbench/fr "PartDesign Workbench/fr").

La vue DAG ressemble au graphe qui peut être produit à partir d’un dépôt Git et de ses branches. Associée à la [vue en arborescence](/Tree_view/fr "Tree view/fr") et au [graphe des dépendances](/Std_DependencyGraph/fr "Std DependencyGraph/fr"), la vue DAG est un outil permettant d'inspecter l'historique paramétrique des objets d'un document.

## Exemple

Un modèle simple sera vu avec différentes vues.

![](/images/FreeCAD_DAG_view_3D.png)

Modèle avec des formes 2D et 3D.

![](/images/FreeCAD_DAG_view_Tree_view.png) ![](/images/FreeCAD_DAG_view.png)

À gauche : objets affichés dans la [vue en arborescence](/Tree_view "Tree view") standard. À droite : objets affichés dans la vue DAG.

![](/images/FreeCAD_DAG_view_Std_DependencyGraph.png)

Relations entre les objets affichés dans le [graphe des dépendances](/Std_DependencyGraph/fr "Std DependencyGraph/fr").

## Activer la vue DAG

La vue DAG a été introduite dans la version 0.17 en tant que fonctionnalité expérimentale pour les utilisateurs expérimentés et les développeurs, afin de leur permettre de dépanner des modèles complexes; de ce fait, la vue DAG n'est pas disponible par défaut.

Pour utiliser cette vue, utilisez l'[éditeur des paramètres](/Std_DlgParameter/fr "Std DlgParameter/fr"). Créez le sous-groupe suivant s'il n'existe pas

* `BaseApp/Preferences/DockWindows/DAGView`

puis ajoutez le paramètre`Enabled` de type `Boolean` et mettez le à `true`.

Redémarrez FreeCAD et activez la vue DAG : **[Affichage](/Std_View_Menu/fr "Std View Menu/fr") → Panneaux → Vue DAG**.

Dans l'[éditeur des paramètres](/Std_DlgParameter/fr "Std DlgParameter/fr"), vous pouvez également modifier certaines propriétés dans le sous-groupe suivant :

* `BaseApp/Preferences/DAGView`
* FontPointSize : définissez la taille de la police du texte. Cela peut aider à la lisibilité avec les écrans à haute résolution. Définissez à 0 pour la taille de police par défaut.
* Mode de selection :
  + 0 : un seul clic sélectionne un élément. Ctrl-clic pour ajouter des éléments à la sélection.
  + 1 : chaque clic ajoute/supprime un élément à la sélection.
* Direction, l'ordre dans lequel les éléments sont affichés.
  + 1 : enfants au dessus, parent en dessous
  + -1 : parent au dessus, enfants en dessous

## Liens

* [DAGView](https://forum.freecadweb.org/viewtopic.php?f=20&t=11276), fil de discussion présentant le nouvel outil.
* [easter egg of PartDesign Next: DAG View](https://forum.freecadweb.org/viewtopic.php?f=20&t=15375), y compris la vue avec la mise à jour de PartDesign.

Retrieved from "<http://wiki.freecad.org/index.php?title=DAG_view/fr&oldid=1528352>"