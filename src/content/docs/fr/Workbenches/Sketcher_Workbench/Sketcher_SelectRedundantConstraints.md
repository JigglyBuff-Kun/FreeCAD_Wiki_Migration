---
title: Sketcher Contraintes redondantes
---
|  |
| --- |
| Sketcher Contraintes redondantes |
| Emplacement du menu |
| Esquisse → Affichage → Selectionner les contraintes redondantes |
| Ateliers |
| [Sketcher](/Sketcher_Workbench/fr "Sketcher Workbench/fr") |
| Raccourci par défaut |
| Z P R |
| Introduit dans la version |
| 0.15 |
| Voir aussi |
| *Aucun* |
|  |

## Description

L'outil ![](/images/Sketcher_SelectRedundantConstraints.svg) Sketcher Contraintes redondantes sélectionne les contraintes redondantes dans l'esquisse.

Si de telles contraintes existent dans une esquisse, la section [Messages du solveur de la boîte de dialogue](/Sketcher_Dialog/fr#Messages_du_solveur "Sketcher Dialog/fr") affiche ce message :

* Esquisse avec contraintes redondantes : (#, #, #)

Où *(#, #, #)* sont les indices des contraintes. Cliquez sur le texte souligné permet de sélectionner les contraintes en conflit.

Notez qu'une esquisse peut également présenter des contraintes redondantes si l'un des [messages du solveur](/Sketcher_Dialog/fr#Messages_du_solveur "Sketcher Dialog/fr") est affiché.

## Utilisation

1. Il y a plusieurs façons de lancer l'outil :
   * Cliquez sur le texte souligné dans la fenêtre de dialogue comme décrit ci-dessus.
   * Sélectionnez l'option **Esquisse → Affichage → ![](/images/Sketcher_SelectRedundantConstraints.svg) Selectionner les contraintes redondantes** du menu.
   * Utilisez le raccourci clavier : Z puis P, puis R.
2. Les contraintes redondantes sont sélectionnées.
3. Cliquez éventuellement dans une zone vide de la [vue 3D](/3D_view/fr "3D view/fr") pour effacer la sélection.

## Remarques

* Les contraintes redondantes doivent être supprimées de l'esquisse.
* Au lieu des indices proposés, il est également possible de supprimer d'autres contraintes.

Retrieved from "<http://wiki.freecad.org/index.php?title=Sketcher_SelectRedundantConstraints/fr&oldid=1495914>"