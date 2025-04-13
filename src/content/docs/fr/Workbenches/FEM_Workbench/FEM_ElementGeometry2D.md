---
title: FEM Épaisseur d'un élément 2D
---
|  |
| --- |
| FEM Épaisseur d'un élément 2D |
| Emplacement du menu |
| Modèle → Géométrie de l'élement → Épaisseur d'un élément 2D |
| Ateliers |
| [FEM](/FEM_Workbench/fr "FEM Workbench/fr") |
| Raccourci par défaut |
| C S |
| Introduit dans la version |
| - |
| Voir aussi |
| [FEM Tutoriel](/FEM_tutorial/fr "FEM tutorial/fr") |
|  |

| Solveurs |
| --- |
| Tous |

## Description

**Épaisseur d'un élément 2D** est utilisé pour définir l'épaisseur des éléments FEM 2D (coque et [introduit dans la version 1.0](/Release_notes_1.0/fr "Release notes 1.0/fr") : contrainte/déformation plane), tous ou situés sur la surface choisie.

## Utilisation

1. Il existe plusieurs façons de lancer la commande :
   * Appuyez sur le bouton ![](/images/FEM_ElementGeometry2D.svg) Épaisseur d'un élément 2D.
   * Sélectionnez l'option **Modèle → Géométrie de l'élément → ![](/images/FEM_ElementGeometry2D.svg) Épaisseur d'un élément 2D** du menu.
2. Spécifiez l'épaisseur de la coque.
3. Si vous le souhaitez, appuyez sur le bouton Ajouter dans le panneau des tâches, puis cliquez sur la face à laquelle vous souhaitez attribuer une épaisseur prescrite. Si la sélection des faces est vide, toutes les faces restantes (dont l'épaisseur n'est pas définie par d'autres éléments de géométrie 2D) seront automatiquement assignées.

## Limitations

* Actuellement, les analyses combinant des éléments coque avec des éléments solides ou des éléments arrêtes (poutre) ne sont pas prises en charge.

## Propriétés

Données**Thickness** : spécifie l'épaisseur des éléments 2D.

## Remarques

* Pour afficher les résultats du solveur CalculiX sur le maillage développé à l'épaisseur prescrite, la propriété `Beam Shell Result Output 3D` dans le [Solveur CalculiX](/FEM_SolverCalculixCxxtools/fr "FEM SolverCalculixCxxtools/fr") doit être mise à `True`. Pour afficher uniquement les épaisseurs définies avant d'effectuer les calculs réels, on peut effectuer une analyse de type « vérification » avec cette propriété réglée à `True`.

Cette fonction utilise le [jeu de paramètres \*\*SHELL SECTION de CalculiX](https://web.mit.edu/calculix_v2.7/CalculiX/ccx_2.7/doc/ccx/node238.html) pour les coques et le [jeu de paramètres \*SOLID SECTION](https://web.mit.edu/calculix_v2.7/CalculiX/ccx_2.7/doc/ccx/node239.html) pour les éléments de contrainte et de déformation planes.

Retrieved from "<http://wiki.freecad.org/index.php?title=FEM_ElementGeometry2D/fr&oldid=1544859>"