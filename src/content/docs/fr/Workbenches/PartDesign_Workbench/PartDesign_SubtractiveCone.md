---
title: PartDesign Cône soustractif
---
|  |
| --- |
| PartDesign Cône soustractif |
| Emplacement du menu |
| PartDesign → Créer une primitive soustractive → Cône soustractif |
| Ateliers |
| [PartDesign](/PartDesign_Workbench/fr "PartDesign Workbench/fr") |
| Raccourci par défaut |
| *Aucun* |
| Introduit dans la version |
| 0.17 |
| Voir aussi |
| [PartDesign Primitives soustractives](/PartDesign_CompPrimitiveSubtractive/fr "PartDesign CompPrimitiveSubtractive/fr"), [PartDesign Cône additif](/PartDesign_AdditiveCone/fr "PartDesign AdditiveCone/fr") |
|  |

## Description

Insère un Cône primitif soustractif dans le Corps actif. Sa forme est soustraite du solide existant.

![](/images/PartDesign_SubtractiveCone_example.png)

*À gauche : le corps actif (A) montré en gris et le cône soustractif (B) est en rouge transparent; le résultat final est à droite.*

## Utilisation

1. Pressez le bouton ![](/images/PartDesign_AdditiveCone.svg) **Cône Soustractif**. **Remarque** : le Cône soustractif fait partie du menu d'icônes appelé *Créer une primitive soustractive*. Après le lancement de FreeCAD, le cube soustractif est affiché par défaut dans la barre d'outils. Pour obtenir le Cône soustractif, cliquer sur la flèche vers le bas et choisissez Cône soustractif dans le menu.
2. Définissez les paramètres de la primitive (pour un cône complet, mettez un des rayons à zéro) et l'[Ancrage](/Part_EditAttachment/fr "Part EditAttachment/fr").
3. Cliquez sur OK.
4. Un cône apparaît dans le corps actif.

## Options

Le Cône peut être édité après sa création de deux façons :

* Double-cliquez le dans l'arborescence ou faire un clic droit dessus et sélectionnez **Éditer la primitive** dans le menu contextuel. Cela fait apparaître les paramètres des Primitives.
* Via l'[Éditeur de propriétés](/Property_editor/fr "Property editor/fr").

## Propriétés

* Données**Attachment** : définit les modes d'ancrage ainsi que le décalage d'ancrage. Voir [Part Ancrage](/Part_EditAttachment/fr "Part EditAttachment/fr").
* Données**Label** : donne le nom du cône, changer si nécessaire.
* Données**Radius1** : valeur du rayon de la base du cône.
* Données**Radius2** : valeur du rayon du sommet du cône tronqué. Une valeur non nulle crée un cône tronqué.
* Données**Height** : hauteur du cône le long de son axe.
* Données**Angle** : angle de rotation de la section transversale (360° pour un cône complet).

Retrieved from "<http://wiki.freecad.org/index.php?title=PartDesign_SubtractiveCone/fr&oldid=1359855>"