---
title: PartDesign Tore additif
---
|  |
| --- |
| PartDesign Tore Additif |
| Emplacement du menu |
| PartDesign → Créer une primitive additive → Tore additif |
| Ateliers |
| [PartDesign](/PartDesign_Workbench/fr "PartDesign Workbench/fr") |
| Raccourci par défaut |
| *Aucun* |
| Introduit dans la version |
| 0.17 |
| Voir aussi |
| [PartDesign Primitives additives](/PartDesign_CompPrimitiveAdditive/fr "PartDesign CompPrimitiveAdditive/fr"), [PartDesign Tore soustractif](/PartDesign_SubtractiveTorus/fr "PartDesign SubtractiveTorus/fr") |
|  |

## Description

Insérer un tore Primitif dans un corps actif (body) comme fonction de base, ou le fusionne aux fonctions existantes.

![](/images/PartDesign_AdditiveTorus_example.png)

## Utilisation

1. Presser le bouton ![](/images/PartDesign_AdditiveTorus.svg) **Tore additif**. **Remarque** : Le Tore additif fait partie du menu d'icônes appelé *Créer une primitive additive*. Après le lancement de FreeCAD, le cube additif est affiché par défaut dans la barre d'outils. Pour obtenir le Tore additif, cliquer sur la flèche vers le bas et choisissez Tore additif dans le menu.
2. Définir les paramètres primitifs et de l'[ancrage](/Part_EditAttachment/fr "Part EditAttachment/fr").
3. Cliquer sur OK.
4. Un tore apparaît dans le corps actif.

## Options

Le Tore peut être éditée après sa création de deux façons :

* Double-cliquez le dans l'arborescence ou faire un clic droit dessus et sélectionnez **Éditer la primitive** dans le menu contextuel. Cela fait apparaître les paramètres des Primitives.
* Via l'[Éditeur de propriétés](/Property_editor/fr "Property editor/fr").

## Propriétés

* Données**Attachment** : définit les modes d'ancrage ainsi que le décalage d'ancrage. Voir [Part Ancrage](/Part_EditAttachment/fr "Part EditAttachment/fr").
* Données**Label** : donne le nom du tore, changer si nécessaire.
* Données**Radius1** : rayon imaginaire de l'orbite autour de laquelle la section circulaire tourne. (La distance entre le centre du tore et le centre de la section transversale tournante).
* Données**Radius2** : rayon de la section circulaire du tore.
* Données**Angle1** : (nommé *Paramètre V* dans dans les paramètres de la primitive) parallèle à la partie inférieure de la section circulaire (-180° pour un tore entier). Un bogue dans les sources provoque des résultats inattendus lors de la modification de Angle1.
* Données**Angle2** : (sans nom dans les paramètres de la primitive) réduit la hauteur telle une ellipsoïde, parallèle à la section circulaire (180° pour un tore entier). Un bogue dans les sources provoque des résultats inattendus lors de la modification de Angle1.
* Données**Angle3** : (nommé *Paramètre U* dans les paramètres de la primitive) angle de rotation de la section circulaire (anneau partiel) (180°pour un tore entier).

Retrieved from "<http://wiki.freecad.org/index.php?title=PartDesign_AdditiveTorus/fr&oldid=1359853>"