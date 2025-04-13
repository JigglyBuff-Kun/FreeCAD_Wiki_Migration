---
title: Sketcher Contrainte de distance en X
---
|  |
| --- |
| Sketcher Contrainte de distance en X |
| Emplacement du menu |
| Esquisse → Contraintes d'esquisse → Contrainte de distance horizontale |
| Ateliers |
| [Sketcher](/Sketcher_Workbench/fr "Sketcher Workbench/fr") |
| Raccourci par défaut |
| L |
| Introduit dans la version |
| - |
| Voir aussi |
| [Sketcher Contrainte de distance](/Sketcher_ConstrainDistance/fr "Sketcher ConstrainDistance/fr"), [Sketcher Contrainte de distance verticale](/Sketcher_ConstrainDistanceY/fr "Sketcher ConstrainDistanceY/fr") |
|  |

## Description

L'outil ![](/images/Sketcher_ConstrainDistanceX.svg) Sketcher Contrainte de distance en X fixe la distance horizontale entre deux points ou les extrémités d'une ligne. Si un seul point est présélectionné, la distance est relative à l'origine de l'esquisse.

![](/images/Constraint_H_Distance.png)

## Utilisation

Voir aussi : [Aides au dessin](/Sketcher_Workbench/fr#Aides_au_dessin "Sketcher Workbench/fr").

### [Mode continu](/Sketcher_Workbench/fr#Modes_continus "Sketcher Workbench/fr")

1. Assurez-vous qu'il n'y a pas de sélection.
2. Il y a plusieurs façons de lancer l'outil :
   * [introduit dans la version 1.0](/Release_notes_1.0/fr "Release notes 1.0/fr") : si la [préférence](/Sketcher_Preferences/fr#Général "Sketcher Preferences/fr") des **contraintes des dimensions** est réglée sur `Outil unique` (par défaut) : appuyez sur la flèche vers le bas à droite du bouton ![](/images/Sketcher_Dimension.svg)![](/images/Toolbar_flyout_arrow.svg) et sélectionnez l'option **![](/images/Sketcher_ConstrainDistanceX.svg) Contrainte distance horizontale** dans le menu déroulant.
   * Si cette préférence a une valeur différente (et dans version 0.21 et précédentes) : appuyez sur le bouton ![](/images/Sketcher_ConstrainDistanceX.svg) Contrainte distance horizontale.
   * Sélectionnez l'option **Esquisse → Contraintes d'esquisse → ![](/images/Sketcher_ConstrainDistanceX.svg) Contrainte distance horizontale** du menu.
   * [introduit dans la version 1.0](/Release_notes_1.0/fr "Release notes 1.0/fr") : cliquez avec le bouton droit de la souris dans la [vue 3D](/3D_view/fr "3D view/fr") et sélectionnez l'option **Dimension → ![](/images/Sketcher_ConstrainDistanceX.svg) Contrainte distance horizontale** du menu contextuel.
   * Utilisez le raccourci clavier : L.
3. Le curseur se transforme en croix avec l'icône de l'outil.
4. Faites l'une des choses suivantes :
   * Sélectionnez deux points (dont l'un peut être l'origine).
   * Sélectionnez une seule ligne.
5. Si une [contrainte pilotante de dimension](/Sketcher_ToggleDrivingConstraint/fr "Sketcher ToggleDrivingConstraint/fr") est créée, en fonction des [préférences](/Sketcher_Preferences/fr#Affichage "Sketcher Preferences/fr"), une fenêtre de dialogue s'ouvre pour [modifier sa valeur](/Sketcher_Workbench/fr#Modifier_les_contraintes "Sketcher Workbench/fr").
6. Une contrainte est ajoutée.
7. Il est possible de continuer à créer des contraintes.
8. Pour terminer, cliquez avec le bouton droit de la souris ou appuyez sur Échap, ou démarrez un autre outil de création de géométrie ou de contrainte.

### Mode unique

1. Faites l'une des choses suivantes :
   * Sélectionnez un ou deux points.
   * Sélectionnez une seule ligne.
2. Lancez l'outil comme expliqué ci-dessus.
3. Vous pouvez [modifier sa valeur](/Sketcher_Workbench/fr#Modifier_les_contraintes "Sketcher Workbench/fr").
4. Une contrainte est ajoutée.

## Script

Distance depuis l'origine :

```
Sketch.addConstraint(Sketcher.Constraint('DistanceX', Edge, PointOfEdge, -1, 1, App.Units.Quantity('123.0 mm')))

```

Distance entre deux sommets :

```
Sketch.addConstraint(Sketcher.Constraint('DistanceX', Edge1, PointOfEdge1, Edge2, PointOfEdge2, App.Units.Quantity('123.0 mm')))

```

Étendue horizontale de la ligne (l'interface graphique permet de sélectionner l'arête elle-même, mais ce n'est qu'un raccourci pour utiliser les deux extrémités de la même ligne):

```
Sketch.addConstraint(Sketcher.Constraint('DistanceX', Line, 1, Line, 2, App.Units.Quantity('123.0 mm')))

```

La page [Sketcher Scripts](/Sketcher_scripting/fr "Sketcher scripting/fr") explique les valeurs qui peuvent être utilisées pour `Edge1`, `Edge2`, `Edge`,  `PointOfEdge1`,  `PointOfEdge2`, `PointOfEdge` et `Line` et contient d'autres exemples sur la façon de créer des contraintes à partir de scripts Python.

Retrieved from "<http://wiki.freecad.org/index.php?title=Sketcher_ConstrainDistanceX/fr&oldid=1496212>"