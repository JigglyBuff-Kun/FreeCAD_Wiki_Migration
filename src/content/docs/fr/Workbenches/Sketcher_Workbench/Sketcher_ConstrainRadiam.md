---
title: Sketcher Contrainte auto rayon/diamètre
---
|  |
| --- |
| Sketcher Contrainte auto rayon/diamètre |
| Emplacement du menu |
| Esquisse → Contraintes d'esquisse → Contrainte automatique du rayon/diamètre |
| Ateliers |
| [Sketcher](/Sketcher_Workbench/fr "Sketcher Workbench/fr") |
| Raccourci par défaut |
| K S |
| Introduit dans la version |
| 0.20 |
| Voir aussi |
| [Sketcher Contrainte rayon](/Sketcher_ConstrainRadius/fr "Sketcher ConstrainRadius/fr"), [Sketcher Contrainte diamètre](/Sketcher_ConstrainDiameter/fr "Sketcher ConstrainDiameter/fr") |
|  |

## Description

L'outil ![](/images/Sketcher_ConstrainRadiam.svg) Sketcher Contrainte auto rayon/diamètre fixe le rayon des arcs et des [cercles des poids des B-splines](/Sketcher_CreateBSpline/fr#Remarques "Sketcher CreateBSpline/fr"), ainsi que le diamètre des cercles.

## Utilisation

Voir aussi : [Aides au dessin](/Sketcher_Workbench/fr#Aides_au_dessin "Sketcher Workbench/fr").

### [Mode continu](/Sketcher_Workbench/fr#Modes_continus "Sketcher Workbench/fr")

1. Assurez-vous qu'il n'y a pas de sélection.
2. Il y a plusieurs façons de lancer l'outil :
   * [introduit dans la version 1.0](/Release_notes_1.0/fr "Release notes 1.0/fr") : si la [préférence](/Sketcher_Preferences/fr#Général "Sketcher Preferences/fr") des **contraintes de dimension** est réglée sur `Outil unique` (par défaut) : appuyez sur la flèche vers le bas à droite du bouton ![](/images/Sketcher_Dimension.svg)![](/images/Toolbar_flyout_arrow.svg) et sélectionnez la **![](/images/Sketcher_ConstrainRadiam.svg) Contrainte automatique du rayon/diamètre** dans le menu déroulant.
   * Si cette préférence a une valeur différente (et dans version 0.21 et précédentes) : appuyez sur le bouton ![](/images/Sketcher_ConstrainRadiam.svg) Contrainte automatique du rayon/diamètre.
   * Sélectionnez l'option **Esquisse → Contraintes de l'esquisse → ![](/images/Sketcher_ConstrainRadiam.svg) Contrainte automatique du rayon/diamètre** du menu.
   * [introduit dans la version 1.0](/Release_notes_1.0/fr "Release notes 1.0/fr") : cliquez avec le bouton droit de la souris dans la [vue 3D](/3D_view/fr "3D view/fr") et sélectionnez l'option **Dimension → ![](/images/Sketcher_ConstrainRadiam.svg) Contrainte automatique du rayon/diamètre** du menu contextuel.
   * Utilisez le raccourci clavier : K puis S.
3. Le curseur se transforme en croix avec l'icône de l'outil.
4. Effectuez l'une des opérations suivantes :
   * Sélectionner le bord d'un cercle ou d'un arc.
   * Sélectionnez le bord d'un cercle d'un poids d'une B-spline.
5. Si une [contrainte pilotante de dimension](/Sketcher_ToggleDrivingConstraint/fr "Sketcher ToggleDrivingConstraint/fr") est créée, en fonction des [[[1]](https://wiki.freecad.org/Sketcher_Preferences/fr#Affichage%7Cpréférences)], une fenêtre de dialogue s'ouvre pour [modifier sa valeur](/Sketcher_Workbench/fr#Modifier_les_contraintes "Sketcher Workbench/fr").
6. Une contrainte est ajoutée.
7. Il est possible de continuer à créer des contraintes.
8. Pour terminer, cliquez avec le bouton droit de la souris ou appuyez sur Échap, ou lancez un autre outil de création de géométrie ou de contrainte.

### Mode unique

1. Faites l'une des choses suivantes :
   * Sélectionnez le bord d'un ou plusieurs cercles ou arcs.
   * Sélectionnez le bord d'un ou de plusieurs cercles de poids B-spline.
2. Lancez l'outil comme expliqué ci-dessus.
3. Il est possible de [modifier sa valeur](/Sketcher_Workbench/fr#Modifier_les_contraintes "Sketcher Workbench/fr").
4. En fonction de la sélection, une ou plusieurs contraintes sont ajoutées, voir [Remarques](##Remarques).

## Remarques

* Si des [contraintes pilotantes](/Sketcher_ToggleDrivingConstraint/fr "Sketcher ToggleDrivingConstraint/fr") sont créées et que plusieurs éléments qui ne sont pas des [géométries externes](/Sketcher_External/fr "Sketcher External/fr") ont été présélectionnés, seul le premier d'entre eux reçoit une contrainte de dimension, tandis qu'entre le premier et les autres, des [contraintes d'égalité](/Sketcher_ConstrainEqual/fr "Sketcher ConstrainEqual/fr") sont appliquées.

## Script

```
Sketch.addConstraint(Sketcher.Constraint('Radius', ArcOrCircle, App.Units.Quantity('123.0 mm')))
Sketch.addConstraint(Sketcher.Constraint('Diameter', ArcOrCircle, App.Units.Quantity('246.0 mm')))

```

La page [Sketcher Scripts](/Sketcher_scripting/fr "Sketcher scripting/fr") explique les valeurs qui peuvent être utilisées pour `ArcOrCircle` et contient d'autres exemples sur la façon de créer des contraintes à partir de scripts Python.

Retrieved from "<http://wiki.freecad.org/index.php?title=Sketcher_ConstrainRadiam/fr&oldid=1496220>"