---
title: Sketcher Contrainte de distance
---
|  |
| --- |
| Sketcher Contrainte de distance |
| Emplacement du menu |
| Esquisse → Contraintes d'esquisse → Contrainte de distance |
| Ateliers |
| [Sketcher](/Sketcher_Workbench/fr "Sketcher Workbench/fr") |
| Raccourci par défaut |
| K D |
| Introduit dans la version |
| - |
| Voir aussi |
| [Sketcher Contrainte distance en X](/Sketcher_ConstrainDistanceX/fr "Sketcher ConstrainDistanceX/fr"), [Sketcher Contrainte distance en Y](/Sketcher_ConstrainDistanceY/fr "Sketcher ConstrainDistanceY/fr") |
|  |

## Description

L'outil ![](/images/Sketcher_ConstrainDistance.svg) Sketcher Contrainte de distance fixe la longueur d'une ligne, la distance entre deux points, la distance perpendiculaire entre un point et une ligne, ou [introduit dans la version 0.21](/Release_notes_0.21/fr "Release notes 0.21/fr"), la distance entre les bords de deux cercles ou arcs, ou entre le bord d'un cercle ou d'un arc et une ligne, ou [introduit dans la version 1.0](/Release_notes_1.0/fr "Release notes 1.0/fr"), la longueur d'un arc.

![](/images/Sketcher_ConstrainDistance_example.png)

## Utilisation

Voir aussi : [Aides au dessin](/Sketcher_Workbench/fr#Aides_au_dessin "Sketcher Workbench/fr").

### [Mode continu](/Sketcher_Workbench/fr#Modes_continus "Sketcher Workbench/fr")

1. Assurez-vous qu'il n'y a pas de sélection.
2. Il y a plusieurs façons de lancer l'outil :
   * [introduit dans la version 1.0](/Release_notes_1.0/fr "Release notes 1.0/fr") : si la [préférence](/Sketcher_Preferences/fr#Général "Sketcher Preferences/fr") des **contraintes des dimensions** est réglée sur `Outil unique` (par défaut) : appuyez sur la flèche vers le bas à droite du bouton ![](/images/Sketcher_Dimension.svg)![](/images/Toolbar_flyout_arrow.svg) et sélectionnez l'option **![](/images/Sketcher_ConstrainDistance.svg) Contrainte de distance** dans le menu déroulant.
   * Si cette préférence a une valeur différente (et dans version 0.21 et précédentes) : appuyez sur le bouton ![](/images/Sketcher_ConstrainDistance.svg) Contrainte de distance.
   * Sélectionnez l'option **Esquisse → Contraintes d'esquisse → ![](/images/Sketcher_ConstrainDistance.svg) Contrainte de distance** du menu.
   * [introduit dans la version 1.0](/Release_notes_1.0/fr "Release notes 1.0/fr") : cliquez avec le bouton droit de la souris dans la [vue 3D](/3D_view/fr "3D view/fr") et sélectionnez l'option **Dimension → ![](/images/Sketcher_ConstrainDistance.svg) Contrainte de distance** du menu contextuel.
   * Utilisez le raccourci clavier K puis D.
3. Le curseur se transforme en croix avec l'icône de l'outil.
4. Effectuez l'une des opérations suivantes :
   * Sélectionnez une seule ligne.
   * Sélectionnez deux points.
   * Sélectionnez un point et une ligne (dans cet ordre).
5. Si une [contrainte pilotante de dimension](/Sketcher_ToggleDrivingConstraint/fr "Sketcher ToggleDrivingConstraint/fr") est créée, en fonction des [préférences](/Sketcher_Preferences/fr#Affichage "Sketcher Preferences/fr"), une fenêtre de dialogue s'ouvre pour [modifier sa valeur](/Sketcher_Workbench/fr#Modifier_les_contraintes "Sketcher Workbench/fr").
6. Une contrainte est ajoutée.
7. Vous pouvez éventuellement continuer à créer des contraintes.
8. Pour terminer, cliquez avec le bouton droit de la souris ou appuyez sur Échap, ou démarrez un autre outil de création de géométrie ou de contrainte.

### Mode unique

1. Faites l'une des choses suivantes :
   * Sélectionnez une seule ligne.
   * Sélectionnez deux points.
   * Sélectionnez un point et une ligne (dans n'importe quel ordre).
   * Sélectionnez les bords de deux cercles ou arcs.
   * Sélectionnez le bord d'un cercle ou d'un arc et une ligne (idem).
   * [introduit dans la version 1.0](/Release_notes_1.0/fr "Release notes 1.0/fr") : sélectionnez le bord d'un seul arc.
2. Lancer l'outil comme expliqué ci-dessus.
3. Vous pouvez [modifier la valeur de la contrainte](/Sketcher_Workbench/fr#Modifier_les_contraintes "Sketcher Workbench/fr").
4. Une contrainte est ajoutée.

## Remarques

* Le cas échéant envisagez d'utiliser de préférence les fonctions ![](/images/Sketcher_ConstrainDistanceX.svg) [Sketcher Contrainte distance en X](/Sketcher_ConstrainDistanceX/fr "Sketcher ConstrainDistanceX/fr") ou ![](/images/Sketcher_ConstrainDistanceY.svg) [Sketcher Contrainte distance en Y](/Sketcher_ConstrainDistanceY/fr "Sketcher ConstrainDistanceY/fr"). Elles sont plus efficaces.

## Script

Distance depuis l'origine :

```
Sketch.addConstraint(Sketcher.Constraint('Distance', Edge, PointOfEdge, -1, 1, App.Units.Quantity('123.0 mm')))

```

Distance entre deux sommets :

```
Sketch.addConstraint(Sketcher.Constraint('Distance', Edge1, PointOfEdge1, Edge2, PointOfEdge2, App.Units.Quantity('123.0 mm')))

```

Longueur de ligne (l'interface graphique permet de sélectionner l'arête elle-même, mais ce n'est qu'un raccourci pour utiliser les deux extrémités d'une même ligne) :

```
Sketch.addConstraint(Sketcher.Constraint('Distance', Line, 1, Line, 2, App.Units.Quantity('123.0 mm')))

```

Distance du point (`Edge, PointOfEdge`) au point perpendiculaire sur la ligne (`Line`) :

```
Sketch.addConstraint(Sketcher.Constraint('Distance', Edge, PointOfEdge, Line, 0, App.Units.Quantity('123.0 mm')))

```

Distance entre les bords de deux cercles :

```
Sketch.addConstraint(Sketcher.Constraint('Distance', Circle1, 0, Circle2, 0, App.Units.Quantity('123.0 mm')))

```

La page [Sketcher Scripts](/Sketcher_scripting/fr "Sketcher scripting/fr") explique les valeurs qui peuvent être utilisées pour `Edge`, `Edge1`, `Edge2`, `PointOfEdge`, `PointOfEdge1`, `PointOfEdge2`, `Ligne`, `Cercle1` et `Cercle2`, et contient d'autres exemples sur la façon de créer des contraintes à partir de scripts Python.

Retrieved from "<http://wiki.freecad.org/index.php?title=Sketcher_ConstrainDistance/fr&oldid=1496214>"