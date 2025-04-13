---
title: Std Sélection d'éléments par boîte
---
|  |
| --- |
| Std Sélection d'éléments par boîte |
| Emplacement du menu |
| Édition → Sélectionner des éléments par une boîte |
| Ateliers |
| Tous |
| Raccourci par défaut |
| Maj+E |
| Introduit dans la version |
| - |
| Voir aussi |
| [Part Sélection par boîte](/Part_BoxSelection/fr "Part BoxSelection/fr"), [Std Tout sélectionner](/Std_SelectAll/fr "Std SelectAll/fr") |
|  |

## Description

La commande **Std Sélection d'éléments par boîte** sélectionne des faces dans une zone rectangulaire définie par l'utilisateur, une boîte, dans la [vue 3D](/3D_view/fr "3D view/fr").

Remarquez que si un objet entier se trouve à l'intérieur du rectangle, c'est l'objet lui-même, et non ses faces, qui est sélectionné. Pour éviter cela, créez deux sélections de boîtes pour chaque objet (maintenez Ctrl enfoncé tout en faisant glisser le 2e rectangle) ou utilisez la commande [Part Sélection par boîte](/Part_BoxSelection/fr "Part BoxSelection/fr") à la place.

## Utilisation

1. Il existe plusieurs façons de lancer la commande :
   * Sélectionnez l'option **Édition → ![](/images/Std_BoxElementSelection.svg) Sélectionner des éléments par une boîte** du menu.
   * Utilisez le raccourci clavier : Maj+E.
2. Effectuez l'une des actions suivantes :
   * Faites glisser un rectangle de gauche à droite pour sélectionner les faces dont le centre géométrique se trouve à l'intérieur du rectangle.
   * Faites glisser un rectangle de droite à gauche pour sélectionner les faces qui se trouvent (partiellement) à l'intérieur du rectangle ou qui sont touchées par celui-ci.

## Remarques

* Utilisez la commande [Std Sélection par boîte](/Std_BoxSelection/fr "Std BoxSelection/fr") pour encadrer les objets sélectionnés au lieu des faces.
* Cette commande ne peut pas être utilisée pour sélectionner des éléments dans une esquisse. Voir l'[atelier Sketcher](/Sketcher_Workbench/fr#Méthodes_de_sélection "Sketcher Workbench/fr").

Retrieved from "<http://wiki.freecad.org/index.php?title=Std_BoxElementSelection/fr&oldid=1468000>"