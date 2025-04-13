---
title: PartDesign Cône additif
---
|  |
| --- |
| PartDesign Cône additif |
| Emplacement du menu |
| PartDesign → Créer une primitive additive → Cône additif |
| Ateliers |
| [PartDesign](/PartDesign_Workbench/fr "PartDesign Workbench/fr") |
| Raccourci par défaut |
| *Aucun* |
| Introduit dans la version |
| 0.17 |
| Voir aussi |
| [PartDesign Primitives additives](/PartDesign_CompPrimitiveAdditive/fr "PartDesign CompPrimitiveAdditive/fr"), [PartDesign Cône soustractif](/PartDesign_SubtractiveCone "PartDesign SubtractiveCone") |
|  |

## Description

Insère un Cône primitif dans un corps actif comme première fonction, ou le fusionne avec les fonctions existantes.

![](/images/PartDesign_AdditiveCone_example.png)

## Utilisation

1. Pressez le bouton ![](/images/PartDesign_AdditiveCone.svg) **Cône additif**. **Remarque** : le Cône additif fait partie du menu d'icônes appelé *Créer une primitive additive*. Après le lancement de FreeCAD, le cube additif est affiché par défaut dans la barre d'outils. Pour obtenir le Cône additif, cliquer sur la flèche vers le bas et choisissez Cône additif dans le menu.
2. Définissez les paramètres de la primitive (pour un cône complet, mettez un des rayons à zéro) et de l'[Part ancrage](/Part_EditAttachment/fr "Part EditAttachment/fr").
3. Cliquez sur OK.
4. Un cône apparaît dans le corps actif.

## Options

Le Cône peut être éditée après sa création de deux façons :

* Double-cliquez le dans l'arborescence ou faire un clic droit dessus et sélectionnez **Éditer la primitive** dans le menu contextuel. Cela fait apparaître les paramètres des Primitives.
* Via l'[Éditeur de propriétés](/Property_editor/fr "Property editor/fr").

## Propriétés

* Données**Attachment** : définit les modes d'ancrage ainsi que le décalage d'ancrage. Voir [Part Ancrage](/Part_EditAttachment/fr "Part EditAttachment/fr").
* Données**Label** : donne le nom du cône, changer si nécessaire.
* Données**Radius1** : valeur du rayon de la base du cône.
* Données**Radius2** : valeur du rayon du sommet du cône tronquer. Si zéro le cône sera pointu.
* Données**Height** : valeur du rayon du sommet du cône tronquer. Si zéro le cône sera pointu.
* Données**Angle** : angle de rotation (360° pour un cône complet, 0 à 360° pour un quartier).

Retrieved from "<http://wiki.freecad.org/index.php?title=PartDesign_AdditiveCone/fr&oldid=1359845>"