---
title: Sketcher Contraintes conflictuelles
---
|  |
| --- |
| Sketcher Contraintes conflictuelles |
| Emplacement du menu |
| Esquisse → Affichage → Sélectionner les contraintes conflictuelles |
| Ateliers |
| [Sketcher](/Sketcher_Workbench/fr "Sketcher Workbench/fr") |
| Raccourci par défaut |
| Z P C |
| Introduit dans la version |
| 0.15 |
| Voir aussi |
| *Aucun* |
|  |

## Description

L'outil ![](/images/Sketcher_SelectConflictingConstraints.svg) Sketcher Contraintes conflictuelles sélectionne les contraintes conflictuelles dans l'esquisse.

Si de telles contraintes existent dans une esquisse, la section [Messages du solveur de la boîte de dialogue](/Sketcher_Dialog/fr#Messages_du_solveur "Sketcher Dialog/fr") affiche ce message :

* Esquisse sur-contrainte : (#, #, #)

Où *(#, #, #)* sont les indices des contraintes. Cliquez sur le texte souligné permet de sélectionner les contraintes en conflit.

## Utilisation

1. Il y a plusieurs façons de lancer l'outil :
   * Cliquez sur le texte souligné dans la fenêtre de dialogue de l'outil d'esquisse, comme décrit ci-dessus.
   * Sélectionnez l'option **Esquisse → Affichage → ![](/images/Sketcher_SelectConflictingConstraints.svg) Sélectionner les contraintes conflictuelles** du menu.
   * Utilisez le raccourci clavier : Z puis P, puis C.
2. Les contraintes conflictuelles sont sélectionnées.
3. Vous pouvez cliquer dans une zone vide de la [vue 3D](/3D_view/fr "3D view/fr") pour effacer la sélection.

## Remarques

* Les contraintes conflictuelles doivent être supprimées de l'esquisse.
* Au lieu des indices proposés, il est également possible de supprimer d'autres contraintes.

Retrieved from "<http://wiki.freecad.org/index.php?title=Sketcher_SelectConflictingConstraints/fr&oldid=1495937>"