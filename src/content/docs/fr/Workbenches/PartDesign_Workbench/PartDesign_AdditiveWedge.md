---
title: PartDesign Pyramide tronquée additive
---
|  |
| --- |
| PartDesign Pyramide tronquée additive |
| Emplacement du menu |
| PartDesign → Créer une primitive additive → Pyramide tronquée additive |
| Ateliers |
| [PartDesign](/PartDesign_Workbench/fr "PartDesign Workbench/fr") |
| Raccourci par défaut |
| *Aucun* |
| Introduit dans la version |
| 0.17 |
| Voir aussi |
| [PartDesign Primitives additives](/PartDesign_CompPrimitiveAdditive/fr "PartDesign CompPrimitiveAdditive/fr"), [PartDesign Pyramide tronquée soustractive](/PartDesign_SubtractiveWedge/fr "PartDesign SubtractiveWedge/fr") |
|  |

## Description

Insère une Pyramide tronquée primitive dans un corps actif comme fonction de base, ou fusionne avec les fonctions existantes.

![](/images/PartDesign_AdditiveWedge_example.png)

## Utilisation

1. Presser le bouton ![](/images/PartDesign_AdditiveWedge.svg) **Pyramide tronquée additive**. **Remarque** : La pyramide tronquée additive fait partie d'un menu d'icônes appelé *Créer une primitive additive*. Après démarrage de FreeCAD, le cube additif est la primitive affichée par défaut dans la barre d'outils. Pour obtenir la pyramide tronquée, cliquer sur la flèche vers le bas et choisir Pyramide tronquée additive dans le menu.
2. Définir les paramètres de la Primitive et de l'[ancrage](/Part_EditAttachment/fr "Part EditAttachment/fr").
3. Cliquer sur OK.
4. Une pyramide tronquée apparaît dans le Corps actif.

## Options

La Pyramide tronquée peut être éditée après sa création de deux façons :

* Double-cliquez la dans l'arborescence ou faire un clic droit dessus et sélectionnez **Éditer la primitive** dans le menu contextuel. Cela fait apparaître les paramètres de la Primitive.
* Via l'[Éditeur de propriétés](/Property_editor/fr "Property editor/fr").

## Propriétés

En utilisant le placement par défaut, les entrées ci-dessous sont :

* Données**X min/max** : Dimension de la base selon l'axe X
* Données**Y min/max** : Hauteur de la pyramide tronquée
* Données**Z min/max** : Dimension de la base selon l'axe Z
* Données**X2 min/max** : Dimension de la face du dessus selon l'axe X
* Données**Z2 min/max** : Dimension de la face du dessus selon l'axe Z

## Pyramides

Les Pyramides tronquées peuvent être utilisées pour créer des pyramides en fixant Données**X2 min/max** et Données**Z2 min/max** en sorte que min = max.

Retrieved from "<http://wiki.freecad.org/index.php?title=PartDesign_AdditiveWedge/fr&oldid=1359734>"