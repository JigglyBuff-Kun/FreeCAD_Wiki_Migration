---
title: PartDesign Pyramide tronquée soustractive
---
|  |
| --- |
| PartDesign Pyramide tronquée soustractive |
| Emplacement du menu |
| PartDesign → Créer une primitive soustractive → Pyramide tronquée soustractive |
| Ateliers |
| [PartDesign](/PartDesign_Workbench/fr "PartDesign Workbench/fr") |
| Raccourci par défaut |
| *Aucun* |
| Introduit dans la version |
| 0.17 |
| Voir aussi |
| [PartDesign Primitives soustractives](/PartDesign_CompPrimitiveSubtractive/fr "PartDesign CompPrimitiveSubtractive/fr"), [PartDesign Pyramide tronquée additive](/PartDesign_AdditiveWedge/fr "PartDesign AdditiveWedge/fr") |
|  |

## Description

Insère une Pyramide tronquée soustractive dans le Corps actif. Sa forme est soustraite du solide existant.

![](/images/PartDesign_SubtractiveWedge_example.svg)

*À gauche, le Corps actif (A) en gris et le cône soustractif (B) en rouge transparent ; le résultat final est à droite.*

## Utilisation

1. Pressez le bouton ![](/images/PartDesign_SubtractiveWedge.svg) **Pyramide tronquée soustractive**. **Remarque** : la pyramide tronquée soustractive fait partie du menu d'icônes appelé *Créer une primitive soustractive*. Après le lancement de FreeCAD, le Cube soustractif est affiché par défaut dans la barre d'outils. Pour obtenir la pyramide tronquée soustractive, cliquez sur la flèche vers le bas et choisissez pyramide tronquée soustractive dans le menu.
2. Définissez les paramètres de la Primitive et de l'[ancrage](/Part_EditAttachment/fr "Part EditAttachment/fr").
3. Cliquez sur OK.
4. Une Pyramide tronquée apparaît dans le Corps actif.

## Options

La pyramide tronquée peut être éditée après sa création de deux façons :

* Double-cliquez la dans l'arborescence ou faire un clic droit dessus et sélectionnez **Éditer la primitive** dans le menu contextuel. Cela fait apparaître les paramètres des Primitives.
* Via l'[éditeur de propriétés](/Property_editor/fr "Property editor/fr").

## Propriétés

En utilisant le placement par défaut, les entrées ci-dessous sont :

* Données**X min/max** : Dimension de la base selon l'axe X
* Données**Y min/max** : Hauteur de la pyramide tronquée
* Données**Z min/max** : Dimension de la base selon l'axe Z
* Données**X2 min/max** : Dimension de la face du dessus selon l'axe X
* Données**Z2 min/max** : Dimension de la face du dessus selon l'axe Z

## Pyramides

Les Pyramides tronquées peuvent être utilisées pour créer des pyramides en fixant Données**X2 min/max** et Données**Z2 min/max** en sorte que min = max.

Retrieved from "<http://wiki.freecad.org/index.php?title=PartDesign_SubtractiveWedge/fr&oldid=1425522>"