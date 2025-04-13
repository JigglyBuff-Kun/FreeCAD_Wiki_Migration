---
title: Sketcher Contrainte de coïncidence unifiée
---
|  |
| --- |
| Sketcher Contrainte de coïncidence unifiée |
| Emplacement du menu |
| Esquisse → Contraintes d'esquisse → Contrainte de coïncidence |
| Ateliers |
| [Sketcher](/Sketcher_Workbench/fr "Sketcher Workbench/fr") |
| Raccourci par défaut |
| C |
| Introduit dans la version |
| 1.0 |
| Voir aussi |
| [Sketcher Contrainte coïncidence](/Sketcher_ConstrainCoincident/fr "Sketcher ConstrainCoincident/fr"), [Sketcher Contrainte point sur objet](/Sketcher_ConstrainPointOnObject/fr "Sketcher ConstrainPointOnObject/fr") |
|  |

## Description

L'outil ![](/images/Sketcher_ConstrainCoincidentUnified.svg) Sketcher ConstrainCoincidentUnified crée une contrainte de coïncidence entre des points, fixe des points sur des arêtes ou des axes (les lignes sont alors considérées comme infinies et les courbes ouvertes sont virtuellement étendues), ou crée une contrainte concentrique entre des cercles, des arcs et/ou des ellipses (en faisant coïncider leurs centres).

Cet outil remplace les commandes [Sketcher Contrainte de coïncidence](/Sketcher_ConstrainCoincident/fr "Sketcher ConstrainCoincident/fr") et [Sketcher Contrainte point sur objet](/Sketcher_ConstrainPointOnObject/fr "Sketcher ConstrainPointOnObject/fr") si l'option **Unifier la contrainte de coïncidence et la contrainte de point sur objet** est sélectionnée dans les [préférences](/Sketcher_Preferences/fr#Général "Sketcher Preferences/fr").

## Utilisation

Voir aussi : [Aides au dessin](/Sketcher_Workbench/fr#Aides_au_dessin "Sketcher Workbench/fr").

### [Mode continu](/Sketcher_Workbench/fr#Modes_continus "Sketcher Workbench/fr")

1. Assurez-vous qu'il n'y a pas de sélection.
2. Il y a plusieurs façons de lancer l'outil :
   * Appuyez sur le bouton ![](/images/Sketcher_ConstrainCoincidentUnified.svg) Contrainte de coïncidence.
   * Sélectionnez l'option **Esquisse → Contraintes d'esquisse → ![](/images/Sketcher_ConstrainCoincidentUnified.svg) Contrainte de coïncidence** du menu.
   * Cliquez avec le bouton droit de la souris dans la [vue 3D](/3D_view/fr "3D view/fr") et sélectionnez l'option **Contrainte → ![](/images/Sketcher_ConstrainCoincidentUnified.svg) Contrainte de coïncidence** du menu contextuel.
   * Utilisez le raccourci clavier : C.
3. Le curseur se transforme en croix avec l'icône de l'outil.
4. Effectuez l'une des opérations suivantes :
   * Sélectionnez deux points.
   * Sélectionnez deux bords de cercles, d'arcs, d'ellipses ou d'arcs d'ellipses.
   * Sélectionnez un seul point et une seule arête (dans n'importe quel ordre).
5. Une contrainte est ajoutée.
6. Il est possible de continuer à créer des contraintes.
7. Pour terminer, cliquez avec le bouton droit de la souris ou appuyez sur Échap, ou démarrez un autre outil de création de géométrie ou de contrainte.

### Mode unique

1. Faites l'une des choses suivantes :
   * Sélectionnez deux points ou plus.
   * Sélectionnez deux ou plusieurs arêtes de cercles, d'arcs, d'ellipses ou d'arcs d'ellipses.
   * Sélectionnez un seul point et une seule arête (dans n'importe quel ordre).
   * Sélectionnez plusieurs points et une seule arête (idem).
   * Sélectionnez un seul point et plusieurs arêtes (idem).
2. Lancez l'outil comme expliqué ci-dessus, ou avec l'option supplémentaire suivante :
   * Cliquez avec le bouton droit de la souris dans la [vue 3D](/3D_view/fr "3D view/fr") et sélectionnez l'option **Contrainte → ![](/images/Sketcher_ConstrainCoincidentUnified.svg) Contrainte de coïncidence** du menu contextuel.
3. En fonction de la sélection, une ou plusieurs contraintes sont ajoutées.

## Remarques

* [introduit dans la version 1.0](/Release_notes_1.0/fr "Release notes 1.0/fr") : les points avec des contraintes coïncidentes sont marqués avec la [couleur](/Sketcher_Preferences/fr#Affichage "Sketcher Preferences/fr") des **symboles de contrainte**.

Retrieved from "<http://wiki.freecad.org/index.php?title=Sketcher_ConstrainCoincidentUnified/fr&oldid=1415286>"