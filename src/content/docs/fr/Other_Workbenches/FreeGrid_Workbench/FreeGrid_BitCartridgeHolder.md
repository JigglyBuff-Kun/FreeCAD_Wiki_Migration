---
title: FreeGrid Porte-forets
---
|  |
| --- |
| FreeGrid Porte-forets |
| Emplacement du menu |
| FreeeGrid → Bit cartridge holder |
| Ateliers |
| [FreeGrid](/FreeGrid_Workbench/fr "FreeGrid Workbench/fr") |
| Raccourci par défaut |
| *Aucun* |
| Introduit dans la version |
| - |
| Voir aussi |
| *Aucun* |
|  |

## Description

L'outil FreeGrid Porte-forets crée un porte-forets.

Cet outil fait partie de l'[atelier FreeGrid](/FreeGrid_Workbench/fr "FreeGrid Workbench/fr"), un [atelier externe](/External_workbenches/fr "External workbenches/fr") qui peut être installé avec le ![](/images/Std_AddonMgr.svg) [gestionnaire des extensions](/Std_AddonMgr/fr "Std AddonMgr/fr").

## Utilisation

1. Il y a plusieurs façons de lancer l'outil :
   * Appuyez sur le bouton ![](/images/FreeGrid_BitCartridgeHolder.svg) Bit cartridge holder
   * Sélectionnez l'option **FreeGrid → ![](/images/FreeGrid_BitCartridgeHolder.svg) Bit cartridge holder** du menu.
2. Un porte-forets est créé avec des propriétés basées sur les préférences en cours.
3. Vous pouvez sélectionner l'objet et modifier ses propriétés dans l'[éditeur de propriétés](/Property_editor/fr "Property editor/fr")

## Propriétés

Un objet FreeGrid BitCartridgeHolder est dérivé d'un [Part Feature](/Part_Feature/fr "Part Feature/fr") et hérite de toutes ses propriétés. Il possède également les propriétés supplémentaires suivantes :

### Données

Bit Cartridge Holder features

* Données**Side Length** (`Length`) : par défaut `15.0 mm`. Longueur du côté le plus long du support.

Box features

* Données**Floor Support** (`Bool`) : par défaut `true`. Ajoute un fond.

Magnet mount

* Données**Magnet Diameter** (`Length`) : par défaut `6 mm`. Diamètre des aimants.
* Données**Magnet Height** (`Length`) : par défaut `2 mm`. Hauteur des aimants.
* Données**Magnet Option** (`Enumeration`) : par défaut `allIntersections`. Positions des aimants. Les autres options sont `cornersOny` et `noMagnets`.

Position on grid

* Données**Position X** (`IntegerConstraint`) : par défautt `0`. Position de l'objet sur la grille le long de l'axe X. Commence à zéro.
* Données**Position Y** (`IntegerConstraint`) : par défaut `0`. Position de l'objet sur la grille le long de l'axe Y. Commence à zéro.

Size

* Données**Depth** (`IntegerConstraint`) : par défaut `1`. Nombre d'unités de 50 mm dans la direction Y de l'objet.
* Données**Height** (`Length`) : par défaut `50 mm`. Hauteur de l'objet.
* Données**Width** (`IntegerConstraint`) : par défaut `1`. Nombre d'unités de 50 mm dans la direction X de l'objet.

Retrieved from "<http://wiki.freecad.org/index.php?title=FreeGrid_BitCartridgeHolder/fr&oldid=1508333>"