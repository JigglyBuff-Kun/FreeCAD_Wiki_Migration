---
title: Sketcher Contrainte de blocage
---
|  |
| --- |
| Sketcher Contrainte de blocage |
| Emplacement du menu |
| Esquisse → Contraintes d'esquisse → Contrainte de blocage |
| Ateliers |
| [Sketcher](/Sketcher_Workbench/fr "Sketcher Workbench/fr") |
| Raccourci par défaut |
| K B |
| Introduit dans la version |
| 0.17 |
| Voir aussi |
| [Sketcher Contrainte fixe](/Sketcher_ConstrainLock/fr "Sketcher ConstrainLock/fr") |
|  |

## Description

L'outil ![](/images/Sketcher_ConstrainBlock.svg) Sketcher Contrainte de blocage permet de bloquer les arêtes en place à l'aide d'une seule contrainte. Il est principalement destiné aux [B-splines](/Sketcher_CreateBSpline/fr "Sketcher CreateBSpline/fr"), qui peuvent être difficiles à contraindre complètement autrement.

La contrainte de blocage n'affecte que les parties librement déplaçables d'une arête. Les arêtes bloquées peuvent avoir d'autres contraintes, et l'application de contraintes supplémentaires à une arête bloquée peut la modifier.

## Utilisation

Voir aussi : [Aides au dessin](/Sketcher_Workbench/fr#Aides_au_dessin "Sketcher Workbench/fr").

### [Mode continu](/Sketcher_Workbench/fr#Modes_continus "Sketcher Workbench/fr")

1. Assurez-vous qu'il n'y a pas de sélection.
2. Il y a plusieurs façons de lancer l'outil :
   * Appuyez sur le bouton ![](/images/Sketcher_ConstrainBlock.svg) [Bloc de contrainte](/Sketcher_ConstrainBlock "Sketcher ConstrainBlock").
   * Sélectionnez l'option **Esquisse → Contraintes d'esquisse → ![](/images/Sketcher_ConstrainBlock.svg) Contrainte de blocage** dans le menu.
   * [introduit dans la version 1.0](/Release_notes_1.0/fr "Release notes 1.0/fr") : cliquez avec le bouton droit de la souris dans la [vue 3D](/3D_view/fr "3D view/fr") et sélectionnez l'option **Contrainte → ![](/images/Sketcher_ConstrainBlock.svg) Contrainte de blocage** dans le menu contextuel.
   * Utilisez le raccourci clavier : K puis B.
3. Le curseur se transforme en croix avec l'icône de l'outil.
4. Sélectionnez une seule arête.
5. Une contrainte est ajoutée.
6. Il est possible de continuer à créer des contraintes.
7. Pour terminer, cliquez avec le bouton droit de la souris ou appuyez sur Échap, ou démarrez un autre outil de création de géométrie ou de contrainte.

### Mode unique

1. Sélectionnez une ou plusieurs arêtes.
2. Invoquer l'outil comme expliqué ci-dessus, ou avec l'option supplémentaire suivante :
   * [introduit dans la version 1.0](/Release_notes_1.0/fr "Release notes 1.0/fr") : Cliquez avec le bouton droit de la souris dans la [vue 3D](/3D_view/fr "3D view/fr") et sélectionnez l'option **![](/images/Sketcher_ConstrainBlock.svg) Contrainte de blocage**  du menu contextuel.
3. En fonction de la sélection, une ou plusieurs contraintes sont ajoutées.

## Script

```
Sketch.addConstraint(Sketcher.Constraint('Block', Edge))

```

La page [Sketcher Scripts](/Sketcher_scripting/fr "Sketcher scripting/fr") explique les valeurs qui peuvent être utilisées pour `Edge` et contient d'autres exemples sur la façon de créer des contraintes à partir de scripts Python.

Retrieved from "<http://wiki.freecad.org/index.php?title=Sketcher_ConstrainBlock/fr&oldid=1415282>"