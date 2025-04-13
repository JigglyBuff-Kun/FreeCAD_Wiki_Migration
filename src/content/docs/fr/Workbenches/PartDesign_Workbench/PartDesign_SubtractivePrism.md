---
title: PartDesign Prisme soustractif
---
|  |
| --- |
| PartDesign Prisme soustractif |
| Emplacement du menu |
| PartDesign → Créer une primitive soustractive → Prisme soustractif |
| Ateliers |
| [PartDesign](/PartDesign_Workbench/fr "PartDesign Workbench/fr") |
| Raccourci par défaut |
| *Aucun* |
| Introduit dans la version |
| 0.17 |
| Voir aussi |
| [PartDesign Primitives soustractives](/PartDesign_CompPrimitiveSubtractive/fr "PartDesign CompPrimitiveSubtractive/fr"), [PartDesign Prisme additif](/PartDesign_AdditivePrism/fr "PartDesign AdditivePrism/fr") |
|  |

## Description

Insère un Prisme soustractif dans le corps actif. Sa forme est soustraite du solide existant.

![](/images/PartDesign_SubtractivePrism_example.svg)

À Gauche : le Corps actif est en gris et le prisme soustractif est en rouge transparent ; le résultat final est à droite.

## Utilisation

1. Pressez le bouton ![](/images/PartDesign_SubtractivePrism.svg) **Prisme soustractif**. **Remarque** : Le Prisme soustractif fait partie du menu d'icônes appelé *Créer une primitive soustractive*. Après le lancement de FreeCAD, le cube soustractif est affiché par défaut dans la barre d'outils. Pour obtenir le Prisme soustractif, cliquez sur la flèche vers le bas et choisissez Prisme soustractif dans le menu.
2. Définir les paramètres primitifs et de l'[ancrage](/Part_EditAttachment/fr "Part EditAttachment/fr").
3. Cliquez sur OK.
4. Un prisme apparaît dans le corps actif.

## Options

Il est possible de créer des prismes biaisés en spécifiant des angles par rapport au vecteur normal de l'ancrage choisi.

Le Prisme peut être éditée après sa création de deux façons :

* Double-cliquer son étiquette dans l'arborescence, ou faire un clic droit sur l'étiquette et sélectionner **Éditer la primitive** dans le menu contextuel; ceci ouvre les Propriétés de la primitive.
* Via l'[éditeur de propriétés](/Property_editor/fr "Property editor/fr").

## Propriétés

* Données**Attachment** : définit les modes d'ancrage ainsi que le décalage d'ancrage. Voir [Part Ancrage](/Part_EditAttachment/fr "Part EditAttachment/fr").
* Données**Label** : donne le nom du Prisme, changez le si nécessaire.
* Données**Polygon** : nombre de cotés de la section du polygone.
* Données**Circumradius** : [rayon circonscrit](https://fr.wikipedia.org/wiki/Cercle_circonscrit) du polygone de la section du prisme.
* Données**Height** : hauteur du prisme.
* Données**First Angle** : angle dans la première direction.
* Données**Second Angle** : angle dans la deuxième direction.

Retrieved from "<http://wiki.freecad.org/index.php?title=PartDesign_SubtractivePrism/fr&oldid=1359930>"