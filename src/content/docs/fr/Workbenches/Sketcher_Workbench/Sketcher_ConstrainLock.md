---
title: Sketcher Contrainte fixe
---
|  |
| --- |
| Sketcher Contrainte fixe |
| Emplacement du menu |
| Esquisse → Contraintes d'esquisse → Contrainte fixe |
| Ateliers |
| [Sketcher](/Sketcher_Workbench/fr "Sketcher Workbench/fr") |
| Raccourci par défaut |
| K L |
| Introduit dans la version |
| - |
| Voir aussi |
| [Sketcher Contrainte de blocage](/Sketcher_ConstrainBlock/fr "Sketcher ConstrainBlock/fr") |
|  |

## Description

L'outil ![](/images/Sketcher_ConstrainLock.svg) Sketcher Contrainte fixe applique des contraintes de [distance horizontale](/Sketcher_ConstrainDistanceX/fr "Sketcher ConstrainDistanceX/fr") et de [distance verticale](/Sketcher_ConstrainDistanceY/fr "Sketcher ConstrainDistanceY/fr") à des points. Si un seul point est sélectionné, les contraintes font référence à l'origine de l'esquisse. Si deux points ou plus sont sélectionnés, les contraintes font référence au dernier point de la sélection.

## Utilisation

Voir aussi : [Aides au dessin](/Sketcher_Workbench/fr#Aides_au_dessin "Sketcher Workbench/fr").

### [Mode continu](/Sketcher_Workbench/fr#Modes_continus "Sketcher Workbench/fr")

1. Assurez-vous qu'il n'y a pas de sélection.
2. Il y a plusieurs façons de lancer l'outil :
   * [introduit dans la version 1.0](/Release_notes_1.0/fr "Release notes 1.0/fr") : si la [préférence](/Sketcher_Preferences/fr#Général "Sketcher Preferences/fr") des **contraintes des dimensions** est réglée sur `Outil unique` (par défaut) : appuyez sur la flèche vers le bas à droite du bouton ![](/images/Sketcher_Dimension.svg)![](/images/Toolbar_flyout_arrow.svg) et sélectionnez l'option **![](/images/Sketcher_ConstrainLock.svg) Contrainte fixe** du menu déroulant.
   * Si cette préférence a une valeur différente (et dans version 0.21 et précédentes) : appuyez sur le bouton ![](/images/Sketcher_ConstrainLock.svg) Contrainte fixe.
   * Sélectionnez l'option **Esquisse → Contraintes d'esquisses → ![](/images/Sketcher_ConstrainLock.svg) Contrainte fixe** du menu.
   * [introduit dans la version 1.0](/Release_notes_1.0/fr "Release notes 1.0/fr") : cliquez avec le bouton droit de la souris dans la [vue 3D](/3D_view/fr "3D view/fr") et sélectionnez l'option **Dimension → ![](/images/Sketcher_ConstrainLock.svg) Contrainte fixe** du menu contextuel.
   * Utilisez le raccourci clavier : K puis L.
3. Le curseur se transforme en croix avec l'icône de l'outil.
4. Sélectionnez un seul point.
5. Deux contraintes sont ajoutées.
6. Continuez à créer des contraintes, si vous le souhaitez.
7. Pour terminer, cliquez avec le bouton droit de la souris ou appuyez sur Échap.

### Mode unique

1. Sélectionnez un ou plusieurs points.
2. Lancez l'outil comme expliqué ci-dessus.
3. En fonction de la sélection, deux contraintes ou plus sont ajoutées.

## Remarques

* Il n'y a pas d'invite automatique à modifier les valeurs des contraintes. Si nécessaire, les valeurs peuvent être [modifiées manuellement](/Sketcher_Workbench/fr#Modifier_les_contraintes "Sketcher Workbench/fr").

Retrieved from "<http://wiki.freecad.org/index.php?title=Sketcher_ConstrainLock/fr&oldid=1415289>"