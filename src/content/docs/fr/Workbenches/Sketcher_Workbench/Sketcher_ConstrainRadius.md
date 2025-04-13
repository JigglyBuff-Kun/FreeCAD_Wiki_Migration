---
title: Sketcher Contrainte rayon
---
|  |
| --- |
| Sketcher Contrainte rayon |
| Emplacement du menu |
| Esquisse → Contraintes d'esquisse → Contrainte de rayon |
| Ateliers |
| [Sketcher](/Sketcher_Workbench/fr "Sketcher Workbench/fr") |
| Raccourci par défaut |
| K R |
| Introduit dans la version |
| - |
| Voir aussi |
| [Sketcher Contrainte auto rayon/diamètre](/Sketcher_ConstrainRadiam/fr "Sketcher ConstrainRadiam/fr"), [Sketcher Contrainte diamètre](/Sketcher_ConstrainDiameter/fr "Sketcher ConstrainDiameter/fr") |
|  |

## Description

L'outil ![](/images/Sketcher_ConstrainRadius.svg) Sketcher Contrainte de rayon fixe le rayon des cercles, des arcs et des [cercles des poids des B-splines](/Sketcher_CreateBSpline/fr#Remarques "Sketcher CreateBSpline/fr").

![](/images/Sketcher_ConstrainRadius_example.png)

## Utilisation

Voir aussi : [Aides au dessin](/Sketcher_Workbench/fr#Aides_au_dessin "Sketcher Workbench/fr").

### [Mode continu](/Sketcher_Workbench/fr#Modes_continus "Sketcher Workbench/fr")

1. Assurez-vous qu'il n'y a pas de sélection.
2. Il y a plusieurs façons de lancer l'outil :
   * [introduit dans la version 1.0](/Release_notes_1.0/fr "Release notes 1.0/fr") : si la [préférence](/Sketcher_Preferences/fr#Général "Sketcher Preferences/fr") des **contraintes de dimension** est réglée sur `Outil unique` (par défaut) : appuyez sur la flèche vers le bas à droite du bouton ![](/images/Sketcher_Dimension.svg)![](/images/Toolbar_flyout_arrow.svg) et sélectionnez la **![](/images/Sketcher_ConstrainRadius.svg) Contrainte de rayon** dans le menu déroulant.
   * Si cette préférence a une valeur différente (et dans version 0.21 et précédentes) : appuyez sur le ![](/images/Sketcher_ConstrainRadius.svg) Contrainte de rayon.
   * Sélectionnez l'option **Esquisse → Contraintes de l'esquisse → ![](/images/Sketcher_ConstrainRadius.svg) Contrainte de rayon** du menu.
   * [introduit dans la version 1.0](/Release_notes_1.0/fr "Release notes 1.0/fr") : cliquez avec le bouton droit de la souris dans la [vue 3D](/3D_view/fr "3D view/fr") et sélectionnez l'option **Dimension → ![](/images/Sketcher_ConstrainRadius.svg) Contrainte de rayon** du menu contextuel.
   * Utilisez le raccourci clavier : K puis R.
3. Pour plus d'informations, voir [Sketcher Contrainte auto rayon/diamètre](/Sketcher_ConstrainRadiam/fr#Mode_continu "Sketcher ConstrainRadiam/fr").

### Mode unique

Voir [Sketcher Contrainte auto rayon/diamètre](/Sketcher_ConstrainRadiam/fr#Mode_unique "Sketcher ConstrainRadiam/fr").

## Script

```
Sketch.addConstraint(Sketcher.Constraint('Radius', ArcOrCircle, App.Units.Quantity('123.0 mm')))

```

La page [Sketcher Scripts](/Sketcher_scripting/fr "Sketcher scripting/fr") explique les valeurs qui peuvent être utilisées pour `ArcOrCircle` et contient d'autres exemples sur la façon de créer des contraintes à partir de scripts Python.

Retrieved from "<http://wiki.freecad.org/index.php?title=Sketcher_ConstrainRadius/fr&oldid=1463240>"