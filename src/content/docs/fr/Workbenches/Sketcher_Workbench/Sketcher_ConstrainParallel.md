---
title: Sketcher Contrainte parallèle
---
|  |
| --- |
| Sketcher Contrainte parallèle |
| Emplacement du menu |
| Esquisse → Contraintes d'esquisse → Contrainte parallèle |
| Ateliers |
| [Sketcher](/Sketcher_Workbench/fr "Sketcher Workbench/fr") |
| Raccourci par défaut |
| P |
| Introduit dans la version |
| - |
| Voir aussi |
| *Aucun* |
|  |

## Description

L'outil ![](/images/Sketcher_ConstrainParallel.svg) Sketcher Contrainte parallèle contraint les lignes à être parallèles.

## Utilisation

Voir aussi : [Aides au dessin](/Sketcher_Workbench/fr#Aides_au_dessin "Sketcher Workbench/fr").

### [Mode continu](/Sketcher_Workbench/fr#Modes_continus "Sketcher Workbench/fr")

1. Assurez-vous qu'il n'y a pas de sélection.
2. Il y a plusieurs façons de lancer l'outil :
   * Appuyez sur le bouton ![](/images/Sketcher_ConstrainParallel.svg) Contrainte parallèle.
   * Sélectionnez l'option **Esquisse → Contraintes d'esquisse → ![](/images/Sketcher_ConstrainParallel.svg) Contrainte parallèle** du menu.
   * [introduit dans la version 1.0](/Release_notes_1.0/fr "Release notes 1.0/fr") : cliquez avec le bouton droit de la souris dans la [vue 3D](/3D_view/fr "3D view/fr") et sélectionnez l'option **Contrainte → ![](/images/Sketcher_ConstrainParallel.svg) Contrainte parallèle** du menu contextuel.
   * Utilisez le raccourci clavier : P.
3. Le curseur se transforme en croix avec l'icône de l'outil.
4. Sélectionnez deux lignes.
5. Une contrainte est ajoutée.
6. Il est possible de continuer à créer des contraintes.
7. Pour terminer, cliquez avec le bouton droit de la souris ou appuyez sur Échap, ou démarrez un autre outil de création de géométrie ou de contrainte.

### Mode unique

1. Sélectionnez deux lignes ou plus. [introduit dans la version 1.0](/Release_notes_1.0/fr "Release notes 1.0/fr") : des points peuvent être inclus dans la sélection, mais ils seront ignorés.
2. Lancez l'outil comme expliqué ci-dessus, ou avec l'option supplémentaire suivante :
   * [introduit dans la version 1.0](/Release_notes_1.0/fr "Release notes 1.0/fr") : cliquez avec le bouton droit de la souris dans la [vue 3D](/3D_view/fr "3D view/fr") et sélectionnez l'option **![](/images/Sketcher_ConstrainParallel.svg) Contrainte parallèle** du menu contextuel.
3. En fonction de la sélection, une ou plusieurs contraintes sont ajoutées.

## Script

```
Sketch.addConstraint(Sketcher.Constraint('Parallel', Line1, Line2))

```

La page [Sketcher Scripts](/Sketcher_scripting/fr "Sketcher scripting/fr") explique les valeurs qui peuvent être utilisées pour `Line1` et `Line2` et contient d'autres exemples sur la façon de créer des contraintes à partir de scripts Python.

Retrieved from "<http://wiki.freecad.org/index.php?title=Sketcher_ConstrainParallel/fr&oldid=1410521>"