---
title: Sketcher Contrainte horizontale
---
|  |
| --- |
| Sketcher\_Contrainte horizontale |
| Emplacement du menu |
| Esquisse → Contraintes d'esquisse → Contrainte horizontale |
| Ateliers |
| [Sketcher](/Sketcher_Workbench/fr "Sketcher Workbench/fr") |
| Raccourci par défaut |
| H |
| Introduit dans la version |
| - |
| Voir aussi |
| [Sketcher Contrainte horizontale/verticale](/Sketcher_ConstrainHorVer/fr "Sketcher ConstrainHorVer/fr"), [Sketcher Contrainte verticale](/Sketcher_ConstrainVertical/fr "Sketcher ConstrainVertical/fr") |
|  |

## Description

L'outil ![](/images/Sketcher_ConstrainHorizontal.svg) Sketcher Contrainte horizontale contraint les lignes ou les paires de points à être horizontales (parallèles à l'axe horizontal de l'esquisse).

[introduit dans la version 1.0](/Release_notes_1.0/fr "Release notes 1.0/fr") : dans la plupart des cas, il est conseillé d'utiliser l'outil combiné [Sketcher Contrainte horizontale/verticale](/Sketcher_ConstrainHorVer/fr "Sketcher ConstrainHorVer/fr") à la place.

## Utilisation

Voir aussi : [Aides au dessin](/Sketcher_Workbench/fr#Aides_au_dessin "Sketcher Workbench/fr").

### [Mode continu](/Sketcher_Workbench/fr#Modes_continus "Sketcher Workbench/fr")

1. Assurez-vous qu'il n'y a pas de sélection.
2. Il y a plusieurs façons de lancer l'outil :
   * [introduit dans la version 1.0](/Release_notes_1.0/fr "Release notes 1.0/fr") : si la [préférence](/Sketcher_Preferences/fr#Général "Sketcher Preferences/fr") de l'**outil automatique de contrainte horizontale/verticale** est sélectionnée (par défaut) : appuyez sur la flèche vers le bas à droite du bouton ![](/images/Sketcher_ConstrainHorVer.svg)![](/images/Toolbar_flyout_arrow.svg) et sélectionnez l'option **![](/images/Sketcher_ConstrainHorizontal.svg) Contrainte horizontale** dans le menu déroulant.
   * Si cette préférence n'est pas sélectionnée (et dans version 0.21 et précédentes) : appuyez sur le bouton ![](/images/Sketcher_ConstrainHorizontal.svg) Contrainte horizontale.
   * Sélectionnez l'option **Esquisse → Contraintes d'esquisse → ![](/images/Sketcher_ConstrainHorizontal.svg) Contrainte horizontale** du menu.
   * [introduit dans la version 1.0](/Release_notes_1.0/fr "Release notes 1.0/fr") : cliquez avec le bouton droit de la souris dans la [vue 3D](/3D_view/fr "3D view/fr") et sélectionnez l'option **Dimension → ![](/images/Sketcher_ConstrainHorizontal.svg) Contrainte horizontale** du menu contextuel.
   * Utilisez le raccourci clavier : H.
3. Le curseur se transforme en croix avec l'icône de l'outil.
4. Faites l'une des choses suivantes :
   * Sélectionnez deux points.
   * Sélectionnez une seule ligne.
5. Une contrainte est ajoutée.
6. Il est possible de continuer à créer des contraintes.
7. Pour terminer, cliquez avec le bouton droit de la souris ou appuyez sur Échap, ou démarrez un autre outil de création de géométrie ou de contrainte.

### Mode unique

1. Faites l'une des choses suivantes :
   * Sélectionnez deux points ou plus.
   * Sélectionnez une ou plusieurs lignes. Les points peuvent être inclus dans la sélection, mais ils seront ignorés.
2. Lancer l'outil comme expliqué ci-dessus, ou avec l'option supplémentaire suivante :
   * [introduit dans la version 1.0](/Release_notes_1.0/fr "Release notes 1.0/fr") : cliquez avec le bouton droit de la souris dans la [vue 3D](/3D_view/fr "3D view/fr") et sélectionnez l'option **![](/images/Sketcher_ConstrainHorizontal.svg) Contrainte horizontale** dans le menu contextuel.
3. En fonction de la sélection, une ou plusieurs contraintes sont ajoutées.

## Script

```
Sketch.addConstraint(Sketcher.Constraint('Horizontal', Line))

```

La page [Sketcher Scripts](/Sketcher_scripting/fr "Sketcher scripting/fr") explique les valeurs qui peuvent être utilisées pour `Line` et contient d'autres exemples sur la façon de créer des contraintes à partir de scripts Python.

Retrieved from "<http://wiki.freecad.org/index.php?title=Sketcher_ConstrainHorizontal/fr&oldid=1519040>"