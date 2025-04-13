---
title: Sketcher Contrainte d'égalité
---
|  |
| --- |
| Sketcher Contrainte d'égalité |
| Emplacement du menu |
| Esquisse → Contraintes d'esquisse → Contrainte d'égalité |
| Ateliers |
| [Sketcher](/Sketcher_Workbench/fr "Sketcher Workbench/fr") |
| Raccourci par défaut |
| E |
| Introduit dans la version |
| - |
| Voir aussi |
| *Aucun* |
|  |

## Description

L'outil ![](/images/Sketcher_ConstrainEqual.svg) Sketcher Contrainte d'égalité contraint les arêtes à avoir la même longueur (lignes) ou la même courbure (autres arêtes sauf les [B-splines](/Sketcher_CreateBSpline/fr "Sketcher CreateBSpline/fr")). Les arêtes sélectionnées doivent être du même type. Les cercles et les arcs de cercle sont du même type (leurs rayons sont égaux), de même que les ellipses et les arcs elliptiques (leurs rayons majeurs et mineurs sont égaux).

## Utilisation

Voir aussi : [Aides au dessin](/Sketcher_Workbench/fr#Aides_au_dessin "Sketcher Workbench/fr").

### [Mode continu](/Sketcher_Workbench/fr#Modes_continus "Sketcher Workbench/fr")

1. Assurez-vous qu'il n'y a pas de sélection.
2. Il y a plusieurs façons de lancer l'outil :
   * Appuyez sur le bouton ![](/images/Sketcher_ConstrainEqual.svg) Contrainte d'égalité.
   * Sélectionnez l'option **Esquisse → Contraintes d'esquisse → ![](/images/Sketcher_ConstrainEqual.svg) Contrainte d'égalité** du menu.
   * [introduit dans la version 1.0](/Release_notes_1.0/fr "Release notes 1.0/fr") : cliquez avec le bouton droit de la souris dans la [vue 3D](/3D_view/fr "3D view/fr") et sélectionnez l'option **Contrainte → ![](/images/Sketcher_ConstrainEqual.svg) Contrainte d'égalité** dans le menu contextuel.
   * Utilisez le raccourci clavier : E.
3. Le curseur se transforme en croix avec l'icône de l'outil.
4. Sélectionnez deux arêtes du même type.
5. Une contrainte est ajoutée.
6. Il est possible de continuer à créer des contraintes.
7. Pour terminer, cliquez avec le bouton droit de la souris ou appuyez sur Échap, ou démarrez un autre outil de création de géométrie ou de contrainte.

### Mode unique

1. Sélectionnez une ou plusieurs arêtes.
2. Invoquer l'outil comme expliqué ci-dessus, ou avec l'option supplémentaire suivante :
   * [introduit dans la version 1.0](/Release_notes_1.0/fr "Release notes 1.0/fr") : Cliquez avec le bouton droit de la souris dans la [vue 3D](/3D_view/fr "3D view/fr") et sélectionnez l'option **![](/images/Sketcher_ConstrainEqual.svg) Contrainte d'égalité** du menu contextuel.
3. En fonction de la sélection, une ou plusieurs contraintes sont ajoutées.

## Script

```
Sketch.addConstraint(Sketcher.Constraint('Equal', Edge1, Edge2))

```

La page [Sketcher Scripts](/Sketcher_scripting/fr "Sketcher scripting/fr") explique les valeurs qui peuvent être utilisées pour `Edge1` et `Edge2` et contient d'autres exemples sur la façon de créer des contraintes à partir de scripts Python.

Retrieved from "<http://wiki.freecad.org/index.php?title=Sketcher_ConstrainEqual/fr&oldid=1410673>"