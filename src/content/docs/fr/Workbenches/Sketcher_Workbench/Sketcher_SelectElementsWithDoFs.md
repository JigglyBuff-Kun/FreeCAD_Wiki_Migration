---
title: Sketcher Degrés de liberté non contraints
---
|  |
| --- |
| Sketcher Degrés de liberté non contraints |
| Emplacement du menu |
| Esquisse → Affichage → Sélectionner les degrés de liberté non contraints |
| Ateliers |
| [Sketcher](/Sketcher_Workbench/fr "Sketcher Workbench/fr") |
| Raccourci par défaut |
| Z F |
| Introduit dans la version |
| 0.18 |
| Voir aussi |
| *Aucun* |
|  |

## Description

L'outil ![](/images/Sketcher_SelectElementsWithDoFs.svg) Sketcher Degrés de liberté non contraints sélectionne les éléments qui ne sont pas entièrement contraints dans l'esquisse.

Si de tels éléments existent dans une esquisse, la section [Messages du résolveur de la fenêtre de dialogue de l'outil d'esquisse](/Sketcher_Dialog/fr#Messages_du_solveur "Sketcher Dialog/fr") affiche ce message :

* Esquisse sous-contrainte de : n degré(s) de liberté

Où *n* est le nombre restant de degrés de liberté. Un clic sur le texte souligné permet de sélectionner les éléments sous-contraints.

Notez qu'une esquisse peut également présenter des contraintes redondantes si l'un des [messages du solveur](/Sketcher_Dialog/fr#Messages_du_solveur "Sketcher Dialog/fr") est affiché.

## Utilisation

1. Il y a plusieurs façons de lancer l'outil :
   * Cliquez sur le texte souligné dans la fenêtre de dialogue comme décrit ci-dessus.
   * Sélectionnez l'option **Esquisse → Affichage → ![](/images/Sketcher_SelectElementsWithDoFs.svg) Sélectionner les degrés de liberté non contraints** du menu.
   * Utilisez le raccourci clavier : Z puis F.
2. Les éléments de l'esquisse sous-contrainte sont sélectionnés.
3. Vous pouvez cliquer dans une zone vide de la [vue 3D](/3D_view/fr "3D view/fr") pour effacer la sélection.

Retrieved from "<http://wiki.freecad.org/index.php?title=Sketcher_SelectElementsWithDoFs/fr&oldid=1495921>"