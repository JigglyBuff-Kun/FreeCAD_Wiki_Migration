---
title: Sketcher Contrainte de distance en Y
---
|  |
| --- |
| Sketcher Contrainte de distance en Y |
| Emplacement du menu |
| Esquisse → Géométries d'esquisse → Contrainte de distance verticale |
| Ateliers |
| [Sketcher](/Sketcher_Workbench/fr "Sketcher Workbench/fr") |
| Raccourci par défaut |
| I |
| Introduit dans la version |
| - |
| Voir aussi |
| [Sketcher Contrainte de distance horizontale](/Sketcher_ConstrainDistanceX/fr "Sketcher ConstrainDistanceX/fr"), [Sketcher Contrainte de distance](/Sketcher_ConstrainDistance/fr "Sketcher ConstrainDistance/fr") |
|  |

## Description

L'outil ![](/images/Sketcher_ConstrainDistanceY.svg) Sketcher Contrainte de distance en Y fixe la distance verticale entre deux points ou les extrémités d'une ligne. Si un seul point est présélectionné, la distance est relative à l'origine de l'esquisse.

![](/images/Sketcher_ConstraintDistanceY_example.png)

## Utilisation

Voir aussi : [Aides au dessin](/Sketcher_Workbench/fr#Aides_au_dessin "Sketcher Workbench/fr").

### [Mode continu](/Sketcher_Workbench/fr#Modes_continus "Sketcher Workbench/fr")

1. Assurez-vous qu'il n'y a pas de sélection.
2. Il y a plusieurs façons de lancer l'outil :
   * [introduit dans la version 1.0](/Release_notes_1.0/fr "Release notes 1.0/fr") : si la [préférence](/Sketcher_Preferences/fr#Général "Sketcher Preferences/fr") des **contraintes des dimensions** est réglée sur `Outil unique` (par défaut) : appuyez sur la flèche vers le bas à droite du bouton ![](/images/Sketcher_Dimension.svg)![](/images/Toolbar_flyout_arrow.svg) et sélectionnez l'option **![](/images/Sketcher_ConstrainDistanceY.svg) Contrainte distance verticale** dans le menu déroulant.
   * Si cette préférence a une valeur différente (et dans version 0.21 et précédentes) : appuyez sur le bouton ![](/images/Sketcher_ConstrainDistanceX.svg) Contrainte distance verticale.
   * Sélectionnez l'option **Esquisse → Contraintes d'esquisse → ![](/images/Sketcher_ConstrainDistanceY.svg) Contrainte distance verticale** du menu.
   * [introduit dans la version 1.0](/Release_notes_1.0/fr "Release notes 1.0/fr") : cliquez avec le bouton droit de la souris dans la [vue 3D](/3D_view/fr "3D view/fr") et sélectionnez l'option **Dimension → ![](/images/Sketcher_ConstrainDistanceY.svg) Contrainte distance verticale** du menu contextuel.
   * Utilisez le raccourci clavier : I.
3. Pour plus d'informations, voir [Sketcher Contrainte de distance en X](/Sketcher_ConstrainDistanceX/fr#Mode_continu "Sketcher ConstrainDistanceX/fr").

### Mode unique

Voir [Sketcher Contrainte de distance en X](/Sketcher_ConstrainDistanceX/fr#Mode_unique "Sketcher ConstrainDistanceX/fr")

## Script

Distance depuis l'origine :

```
Sketch.addConstraint(Sketcher.Constraint('DistanceY', Edge, PointOfEdge, -1, 1, App.Units.Quantity('123.0 mm')))

```

Distance entre deux sommets :

```
Sketch.addConstraint(Sketcher.Constraint('DistanceY', Edge1, PointOfEdge1, Edge2, PointOfEdge2, App.Units.Quantity('123.0 mm')))

```

Étendue verticale de la ligne (l'interface graphique permet de sélectionner l'arête elle-même, mais ce n'est qu'un raccourci pour utiliser les deux extrémités de la même ligne):

```
Sketch.addConstraint(Sketcher.Constraint('DistanceY', Line, 1, Line, 2, App.Units.Quantity('123.0 mm')))

```

La page [Sketcher Scripts](/Sketcher_scripting/fr "Sketcher scripting/fr") explique les valeurs qui peuvent être utilisées pour `Edge1`, `Edge2`, `Edge`,  `PointOfEdge1`,  `PointOfEdge2`, `PointOfEdge` et `Line` et contient d'autres exemples sur la façon de créer des contraintes à partir de scripts Python.

Retrieved from "<http://wiki.freecad.org/index.php?title=Sketcher_ConstrainDistanceY/fr&oldid=1410540>"