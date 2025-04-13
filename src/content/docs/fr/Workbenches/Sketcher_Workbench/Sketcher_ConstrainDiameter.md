---
title: Sketcher Contrainte diamètre
---
|  |
| --- |
| Sketcher Contrainte diamètre |
| Emplacement du menu |
| Esquisse → Contraintes d'esquisse → Contrainte de diamètre |
| Ateliers |
| [Sketcher](/Sketcher_Workbench/fr "Sketcher Workbench/fr") |
| Raccourci par défaut |
| K O |
| Introduit dans la version |
| 0.18 |
| Voir aussi |
| [Sketcher Contrainte automatique rayon](/Sketcher_ConstrainRadiam/fr "Sketcher ConstrainRadiam/fr"), [Sketcher Contrainte rayon](/Sketcher_ConstrainRadius/fr "Sketcher ConstrainRadius/fr") |
|  |

## Description

L'outil ![](/images/Sketcher_ConstrainDiameter.svg) Sketcher Contrainte diamètre fixe le diamètre des cercles et des arcs. Il ne peut pas être utilisé pour des [cercles des poids des B-splines](/Sketcher_CreateBSpline/fr#Remarques "Sketcher CreateBSpline/fr").

## Utilisation

Voir aussi : [Aides au dessin](/Sketcher_Workbench/fr#Aides_au_dessin "Sketcher Workbench/fr").

### [Mode continu](/Sketcher_Workbench/fr#Modes_continus "Sketcher Workbench/fr")

1. Assurez-vous qu'il n'y a pas de sélection.
2. Il y a plusieurs façons de lancer l'outil :
   * [introduit dans la version 1.0](/Release_notes_1.0/fr "Release notes 1.0/fr") : si la [préférence](/Sketcher_Preferences#General "Sketcher Preferences") **Contraintes de dimensionnement** est réglée sur `Outil unique` (par défaut) : appuyez sur la flèche vers le bas à droite du bouton ![](/images/Sketcher_Dimension.svg)![](/images/Toolbar_flyout_arrow.svg) et sélectionnez l'option **![](/images/Sketcher_ConstrainDiameter.svg) Contrainte de diamètre** dans le menu déroulant.
   * Si cette préférence a une valeur différente (et dans version 0.21 et précédentes) : appuyez sur ![](/images/Sketcher_ConstrainDiameter.svg) Contrainte de diamètre
   * Sélectionnez l'option **Esquisse → Contraintes d'esquisse → ![](/images/Sketcher_ConstrainDiameter.svg) Contrainte de diamètre** du menu.
   * [introduit dans la version 1.0](/Release_notes_1.0/fr "Release notes 1.0/fr") : cliquez avec le bouton droit de la souris dans la [vue 3D](/3D_view/fr "3D view/fr") et sélectionnez l'option **Dimension → ![](/images/Sketcher_ConstrainDiameter.svg) Contrainte de diamètre** du menu contextuel.
   * Utilisez le raccourci clavier : K puis O.
3. Le curseur se transforme en croix avec l'icône de l'outil.
4. Sélectionnez le bord d'un cercle ou d'un arc.
5. Si une [contrainte pilotante de dimension](/Sketcher_ToggleDrivingConstraint/fr "Sketcher ToggleDrivingConstraint/fr") est créée, en fonction des [préférences](/Sketcher_Preferences/fr#Affichage "Sketcher Preferences/fr"), une fenêtre de dialogue s'ouvre pour [modifier sa valeur](/Sketcher_Workbench/fr#Modifier_les_contraintes "Sketcher Workbench/fr").
6. Une contrainte est ajoutée.
7. Vous pouvez continuer à créer des contraintes.
8. Pour terminer, cliquez avec le bouton droit de la souris ou appuyez sur Échap, ou démarrez un autre outil de création de géométrie ou de contrainte.

### Mode unique

1. Sélectionnez le bord d'un ou de plusieurs cercles ou arcs.
2. Lancez l'outil comme expliqué ci-dessus.
3. Vous pouvez [modifier la valeur de la contrainte](/Sketcher_Workbench/fr#Modifier_les_contraintes "Sketcher Workbench/fr").
4. En fonction de la sélection, une ou plusieurs contraintes sont ajoutées, voir [Remarques](##Remarques).

## Remarques

* Si des [contraintes pilotantes](/Sketcher_ToggleDrivingConstraint/fr "Sketcher ToggleDrivingConstraint/fr") sont créées et que plusieurs éléments qui ne sont pas des [géométries externes](/Sketcher_External/fr "Sketcher External/fr") ont été présélectionnés, seul le premier d'entre eux reçoit une contrainte de dimension, tandis qu'entre le premier et les autres, des [contraintes d'égalité](/Sketcher_ConstrainEqual/fr "Sketcher ConstrainEqual/fr") sont appliquées.

## Script

```
Sketch.addConstraint(Sketcher.Constraint('Diameter', ArcOrCircle, App.Units.Quantity('123.0 mm')))

```

La page [Sketcher Scripts](/Sketcher_scripting/fr "Sketcher scripting/fr") explique les valeurs qui peuvent être utilisées pour `ArcOrCircle` et contient d'autres exemples sur la façon de créer des contraintes à partir de scripts Python.

Retrieved from "<http://wiki.freecad.org/index.php?title=Sketcher_ConstrainDiameter/fr&oldid=1519029>"