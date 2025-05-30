---
title: Sketcher Contrainte horizontale/verticale
---
|  |
| --- |
| Sketcher Contrainte horizontale/verticale |
| Emplacement du menu |
| Esquisse → Contraintes d'esquisse → Contrainte horizontale/verticale |
| Ateliers |
| [Sketcher](/Sketcher_Workbench/fr "Sketcher Workbench/fr") |
| Raccourci par défaut |
| A |
| Introduit dans la version |
| 1.0 [Sketcher Contrainte horizontale](/Sketcher_ConstrainHorizontal/fr "Sketcher ConstrainHorizontal/fr"), [Sketcher Contrainte verticale](/Sketcher_ConstrainVertical/fr "Sketcher ConstrainVertical/fr") |
| Voir aussi |
| *Aucun* |
|  |

## Description

L'outil ![](/images/Sketcher_ConstrainHorVer.svg) Sketcher Contrainte horizontale/verticale contraint les lignes ou les paires de points à être horizontales (parallèles à l'axe horizontal de l'esquisse) ou verticales, selon ce qui est le plus proche de l'alignement en cours.

Cet outil combine les outils [Sketcher Contrainte horizontale](/Sketcher_ConstrainHorizontal/fr "Sketcher ConstrainHorizontal/fr") et [Sketcher Contrainte verticale](/Sketcher_ConstrainVertical/fr "Sketcher ConstrainVertical/fr").

## Utilisation

Voir aussi : [Aides au dessin](/Sketcher_Workbench/fr#Aides_au_dessin "Sketcher Workbench/fr").

### [Mode continu](/Sketcher_Workbench/fr#Modes_continus "Sketcher Workbench/fr")

1. Assurez-vous qu'il n'y a pas de sélection.
2. Il y a plusieurs façons de lancer l'outil :
   * Si la [préférence](/Sketcher_Preferences/fr#Général "Sketcher Preferences/fr") **Outil automatique de contrainte horizontale/verticale** est sélectionné (par défaut) : appuyez sur le bouton ![](/images/Sketcher_ConstrainHorVer.svg) Contrainte horizontale/verticale.
   * Sélectionnez l'option **Esquisse → Contraintes d'esquisse → ![](/images/Sketcher_ConstrainHorVer.svg) Contrainte horizontale/verticale** du menu.
   * Cliquez avec le bouton droit de la souris dans la [vue 3D](/3D_view/fr "3D view/fr") et sélectionnez l'option **Contrainte → ![](/images/Sketcher_ConstrainHorVer.svg) Contrainte horizontale/verticale** dans le menu contextuel.
   * Utilisez le raccourci clavier : A.
3. Le curseur se transforme en croix avec l'icône de l'outil.
4. Effectuez l'une des opérations suivantes :
   * Sélectionner deux points.
   * Sélectionner une seule ligne.
5. Une contrainte est ajoutée.
6. Il est possible de continuer à créer des contraintes.
7. Pour terminer, cliquez avec le bouton droit de la souris ou appuyez sur Échap, ou démarrez un autre outil de création de géométrie ou de contrainte.

### Mode unique

1. Faites l'une des choses suivantes :
   * Sélectionnez deux points ou plus (l'ordre de sélection peut être pertinent, voir [Remarques](#Remarques)).
   * Sélectionnez une ou plusieurs lignes. Les points peuvent être inclus dans la sélection, mais ils seront ignorés.
   * Lancez l'outil comme expliqué ci-dessus, ou avec l'option supplémentaire suivante :
   * Cliquez avec le bouton droit de la souris dans la [vue 3D](/3D_view/fr "3D view/fr") et sélectionnez la **![](/images/Sketcher_ConstrainHorizontal.svg) Contrainte horizontale** dans le menu contextuel.
2. En fonction de la sélection, une ou plusieurs contraintes sont ajoutées.

## Remarques

* Plus de 2 points sont traités dans l'ordre de sélection, une paire à la fois. Le premier point est apparié au deuxième. Lorsqu'ils sont contraints, le deuxième point peut se déplacer. Le nouvel emplacement du 2e point détermine la contrainte appliquée lorsque le 2e et le 3e point sont contraints, etc.

Retrieved from "<http://wiki.freecad.org/index.php?title=Sketcher_ConstrainHorVer/fr&oldid=1410424>"