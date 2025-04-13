---
title: FEM Mailler plus finement
---
|  |
| --- |
| FEM Région de maillage FEM |
| Emplacement du menu |
| Maillage → Mailler plus finement |
| Ateliers |
| [FEM](/FEM_Workbench/fr "FEM Workbench/fr") |
| Raccourci par défaut |
| *Aucun* |
| Introduit dans la version |
| - |
| Voir aussi |
| [FEM Tutoriel](/FEM_tutorial/fr "FEM tutorial/fr") |
|  |

| Solveurs |
| --- |
| Tous |

## Description

Permet à l'utilisateur de définir un ensemble localisé de paramètres de maillage en sélectionnant un ensemble d'éléments (sommet, arête, face) et en lui appliquant les paramètres. Cette fonction est particulièrement utile pour mailler plus finement des maillages dans des zones d'intérêt ou dans des zones où le solveur génère un gradient plus fort d'une variable. Par exemple, il peut être utilisé pour affiner le maillage autour des points de contrainte (arêtes vives, trous, encoches, ...) dans l'analyse mécanique, ou dans les zones de contraction dans un écoulement de fluide.

Le maillage plus fin présente l'avantage de permettre une simulation précise là où c'est nécessaire, tout en autorisant un maillage plus grossier dans le domaine plus large, ce qui permet d'optimiser considérablement le temps de calcul tout en conservant des solutions significatives en sortie.

## Utilisation

1. Pour activer la fonction, un ![](/images/FEM_MeshGmshFromShape.svg) [maillage avec Gmsh](/FEM_MeshGmshFromShape/fr "FEM MeshGmshFromShape/fr") ou (version 1.1 et suivantes) un ![](/images/FEM_MeshNetgenFromShape.svg) [maillage avec Netgen](/FEM_MeshNetgenFromShape/fr "FEM MeshNetgenFromShape/fr") doit d'abord être fourni. Sélectionnez l'objet Mesh dans l'arborescence du modèle et appuyez sur ![](/images/FEM_MeshRegion.svg) Mailler plus finement ou utilisez l'option du menu **Maillage → ![](/images/FEM_MeshRegion.svg) Mailler plus finement**.
2. Appuyez sur le bouton Ajouter et sélectionnez une ou plusieurs *faces*, *arêtes* ou *sommets* dans la [vue 3D](/3D_view/fr "3D view/fr") pour appliquer le raffinement du maillage. Les éléments sélectionnés apparaissent dans la liste des objets géométriques. Le mode de sélection peut également être réglé sur *Solide*.
3. Entrez la taille maximale de l'élément pour la région.
4. Cliquez sur le bouton OK.
5. Fermez la tâche.

   :   Résultat : vous devriez maintenant voir un nouvel objet `FEMMeshRegion` sous l'objet `FEMMeshGmsh` ou (version 1.1 et suivantes) `FEMMeshNetgen` (voir exemple #3 ci-dessous) dans votre conteneur d'analyse actif.
6. Double-cliquez sur l'objet parent `FEMMeshGmsh` ou (version 1.1 et suivantes) `FEMMeshNetgen` dans votre arborescence et appuyez sur Appliquer pour forcer un recalcul de maillage.
7. Fermez la tâche.

Une fois que le maillage a été créé, vous pouvez modifier ses propriétés à l'aide de l'[éditeur de propriétés](/Property_editor/fr "Property editor/fr"). Après avoir modifié une propriété, vous devez rouvrir la fenêtre de dialogue du maillage et cliquer sur le bouton Appliquer. (Vous pouvez laisser la fenêtre de dialogue ouverte pendant la modification des propriétés).

Vous pouvez créer autant de régions de maillages différents que nécessaire.

## Exemples visuels

![](/images/FEMMeshRegion_Example1.png)

Exemple 1 : le maillage FEM grossier initial par GMSH

![](/images/FEMMeshRegion_Example2.png)

Exemple 2 : après avoir appliqué un maillage plus fin en utilisant deux régions de maillage FEM, le grand trou est maillé à une taille d'éléments maximale de 3 mm, le petit trou est maillé à 1 mm.

![](/images/FEMMeshRegion_Example3.png)

Exemple 3 : un exemple simple de la vue en arborescence résultante

## Remarques

L'ordre dans lequel les régions sont affichées dans la [vue en arborescence](/Tree_view/fr "Tree view/fr") peut modifier le résultat du maillage. Voir ce [fil de forum](https://forum.freecadweb.org/viewtopic.php?f=18&t=41955)

## En relation

* "Mesh Regions for a Better Analysis" - Tutoriel vidéo par Joko Engineering ([lien](https://www.youtube.com/watch?v=X5RVe2SDPvw))

Retrieved from "<http://wiki.freecad.org/index.php?title=FEM_MeshRegion/fr&oldid=1568875>"