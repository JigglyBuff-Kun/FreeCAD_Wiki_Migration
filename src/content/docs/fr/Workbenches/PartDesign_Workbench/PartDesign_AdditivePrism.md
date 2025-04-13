---
title: PartDesign Prisme additif
---
|  |
| --- |
| PartDesign Prisme additif |
| Emplacement du menu |
| PartDesign → Créer une primitive additive → Prisme additif |
| Ateliers |
| [PartDesign](/PartDesign_Workbench/fr "PartDesign Workbench/fr") |
| Raccourci par défaut |
| *Aucun* |
| Introduit dans la version |
| 0.17 |
| Voir aussi |
| [PartDesign Primitives additives](/PartDesign_CompPrimitiveAdditive/fr "PartDesign CompPrimitiveAdditive/fr"), [PartDesign Prisme soustractif](/PartDesign_SubtractivePrism/fr "PartDesign SubtractivePrism/fr") |
|  |

## Description

Insère un Prisme primitif dans un corps actif comme fonction de base, ou le fusionne aux fonctions existantes.

![](/images/PartDesign_AdditivePrism_example.png)

## Utilisation

1. Presser le bouton ![](/images/PartDesign_AdditivePrism.svg) **Prisme additif**. **Remarque** : le prisme additif fait partie du menu d'icônes appelé *Créer une primitive additive*. Après le lancement de FreeCAD, le cube additif est affiché par défaut dans la barre d'outils. Pour obtenir le Prisme additif, cliquer sur la flèche vers le bas et choisissez Prisme additif dans le menu.
2. Définir les paramètres primitifs et de l'[ancrage](/Part_EditAttachment/fr "Part EditAttachment/fr").
3. Cliquer sur OK.
4. Un prisme apparaît dans le corps actif.

## Options

Il est possible de créer des prismes biaisés en spécifiant des angles par rapport au vecteur normal de l'ancrage choisi.

Le Prisme peut être éditée après sa création de deux façons :

* Double-cliquez le dans l'arborescence ou faire un clic droit dessus et sélectionnez **Éditer la primitive** dans le menu contextuel. Cela fait apparaître les paramètres des Primitives.
* Via l'[Éditeur de propriétés](/Property_editor/fr "Property editor/fr").

## Propriétés

* Données**Attachment** : définit les modes d'ancrage ainsi que le décalage d'ancrage. Voir [Part Ancrage](/Part_EditAttachment/fr "Part EditAttachment/fr").
* Données**Label** : donne le nom du prisme. Changez si nécessaire.
* Données**Polygon** : nombre de cotés de la section du polygone.
* Données**Circumradius** : [rayon circonscrit](https://fr.wikipedia.org/wiki/Cercle_circonscrit) du polygone de la section du prisme.
* Données**Height** : hauteur du prisme.
* Données**First Angle** : angle dans la première direction.
* Données**Second Angle** : angle dans la seconde direction.

Retrieved from "<http://wiki.freecad.org/index.php?title=PartDesign_AdditivePrism/fr&oldid=1359934>"