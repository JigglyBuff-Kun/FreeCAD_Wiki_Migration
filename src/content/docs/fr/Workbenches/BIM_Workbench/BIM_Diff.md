---
title: BIM Comparateur d'IFC
---
|  |
| --- |
| BIM Comparateur d'IFC |
| Emplacement du menu |
| Utilitaires → Comparer deux fichiers IFC... |
| Ateliers |
| [BIM](/BIM_Workbench/fr "BIM Workbench/fr") |
| Raccourci par défaut |
| *Aucun* |
| Introduit dans la version |
| - |
| Voir aussi |
| *Aucun* |
|  |

## Description

L'outil **BIM Comparateur d'IFC** prend deux documents ouverts de FreeCAD et génère une différence visuelle entre eux.

En programmation, le terme "diff" désigne un utilitaire qui prend deux documents textuels et met en évidence les lignes qui diffèrent entre eux. Il marque généralement en rouge les lignes qui ont été supprimées et en vert les lignes qui ont été ajoutées. Sa principale objet est de saisir rapidement ce qui a changé entre deux versions différentes d'un même document.

Cet outil fait la même chose, mais de manière graphique. Il ouvre un nouveau document, affiche le contenu du fichier B, mais le met en évidence :

![](/images/BIM_Diff_example.jpg)

Cet outil est principalement adapté aux fichiers IFC, car il utilise l'ID global IFC pour s'assurer qu'un objet dans un fichier est toujours le même dans l'autre fichier. Cependant, il fonctionnera également avec deux fichiers FreeCAD non IFC.

## Utilisation

1. Ouvrez un document dans FreeCAD
2. Ouvrez un second document dans FreeCAD, que vous souhaitez comparer avec le premier
3. Sélectionnez l'option **Utilitaires → ![](/images/BIM_Diff.svg) Comparer deux fichiers IFC...** du menu.

## Options

* en **rouge** tous les éléments du fichier A qui ne sont plus présents dans B
* en **vert** tous les éléments qui sont dans B mais qui n'étaient pas présents dans A
* en **jaune** tous les éléments qui étaient dans A et qui sont toujours dans B, mais dont la géométrie a changé
* en **orange** tous les éléments qui étaient dans A et qui sont toujours dans B, dont la géométrie est toujours la même, mais dont d'autres propriétés ont été modifiées

Retrieved from "<http://wiki.freecad.org/index.php?title=BIM_Diff/fr&oldid=1511049>"