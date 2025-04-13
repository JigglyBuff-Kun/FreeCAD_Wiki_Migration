---
title: FreeGrid Grille de rangement
---
|  |
| --- |
| FreeGrid Grille de rangement |
| Emplacement du menu |
| FreeeGrid → Storage grid |
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

L'outil FreeGrid Grille de rangement crée une grille de rangement.

Cet outil fait partie de l'[atelier FreeGrid](/FreeGrid_Workbench/fr "FreeGrid Workbench/fr"), un [atelier externe](/External_workbenches/fr "External workbenches/fr") qui peut être installé avec le ![](/images/Std_AddonMgr.svg) [gestionnaire des extensions](/Std_AddonMgr/fr "Std AddonMgr/fr").

## Utilisation

1. Il y a plusieurs façons de lancer l'outil :
   * Appuyez sur le bouton ![](/images/FreeGrid_StorageGrid.svg) Storage grid.
   * Sélectionnez l'option **FreeGrid → ![](/images/FreeGrid_StorageGrid.svg) Storage grid** du menu.
2. Une grille de rangement est créée avec des propriétés basées sur les préférences en cours.
3. Vous pouvez sélectionner l'objet et modifier ses propriétés dans l'[éditeur de propriétés](/Property_editor/fr "Property editor/fr")

## Propriétés

Un objet FreeGrid StorageBox est dérivé d'un [Part Feature](/Part_Feature/fr "Part Feature/fr") et hérite de toutes ses propriétés. Il possède également les propriétés supplémentaires suivantes :

### Données

Grid features

* Données**Corner Connectors** (`Bool`) : par défaut `true`. Ajoute des cavités pour les connecteurs d'angle.
* Données**Extra Bottom Material** (`Length`) : par défaut `16 mm`. Épaisseur supplémentaire sous la grille.
* Données**Is Subtractive** (`Bool`) : par défaut `false`. Crée une grille adaptée à la fabrication soustractive.

Magnet mount

* Données**Include Magnets** (`Bool`) : par défaut `true`. Inclut les réceptacles à aimants.
* Données**Magnet Diameter** (`Length`) : par défaut `6 mm`. Diamètre des aimants.
* Données**Magnet Height** (`Length`) : par défaut `2 mm`. Hauteur des aimants.

Size

* Données**Depth** (`IntegerConstraint`) : par défaut `2`. Nombre d'unités de 50 mm dans la direction Y de l'objet.
* Données**Width** (`IntegerConstraint`) : par défaut `3`. Nombre d'unités de 50 mm dans la direction X de l'objet.

Retrieved from "<http://wiki.freecad.org/index.php?title=FreeGrid_StorageGrid/fr&oldid=1508347>"