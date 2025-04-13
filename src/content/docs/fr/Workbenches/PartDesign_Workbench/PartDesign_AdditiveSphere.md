---
title: PartDesign Sphère additive
---
|  |
| --- |
| PartDesign Sphère additive |
| Emplacement du menu |
| PartDesign → Créer une primitive additive → Sphère additive |
| Ateliers |
| [PartDesign](/PartDesign_Workbench/fr "PartDesign Workbench/fr") |
| Raccourci par défaut |
| *Aucun* |
| Introduit dans la version |
| 0.17 |
| Voir aussi |
| [PartDesign Primitives additives](/PartDesign_CompPrimitiveAdditive/fr "PartDesign CompPrimitiveAdditive/fr"), [PartDesign Sphère soustractif](/PartDesign_SubtractiveSphere/fr "PartDesign SubtractiveSphere/fr") |
|  |

## Description

Insére une sphère primitive dans un corps actif (body) comme fonction de base, ou la fusionne avec les fonctions existantes.

![](/images/PartDesign_AdditiveSphere_example.png)

## Utilisation

1. Presser le bouton ![](/images/PartDesign_AdditiveSphere.svg) **Sphère additive**. **Remarque** : la sphère additive fait partie du menu d'icônes appelé *Créer une primitive additive*. Après le lancement de FreeCAD, le cube additif est affiché par défaut dans la barre d'outils. Pour obtenir la sphère additive, cliquer sur la flèche vers le bas et choisissez Sphère additive dans le menu.
2. Définir les paramètres primitifs et de l'[ancrage](/Part_EditAttachment/fr "Part EditAttachment/fr").
3. Cliquer sur OK.
4. Une sphère apparaît dans le corps actif.

## Options

La Sphère peut être éditée après sa création de deux façons :

* Double-cliquez la dans l'arborescence ou faire un clic droit dessus et sélectionnez **Éditer la primitive** dans le menu contextuel. Cela fait apparaître les paramètres des Primitives.
* Via l'[Éditeur de propriétés](/Property_editor/fr "Property editor/fr").

## Propriétés

* Données**Attachment** : définit les modes d'ancrage ainsi que le décalage d'ancrage. Voir [Part Ancrage](/Part_EditAttachment/fr "Part EditAttachment/fr").
* Données**Label** : donne le nom de la sphère. Changez si nécessaire.
* Données**Radius** : rayon de la sphère.
* Données**Angle1** : (nommé *Paramètre V* dans Paramètres de la primitive) troncature inférieure de la sphère, parallèle à la section transversale circulaire (-90 degrés dans une sphère pleine).
* Données**Angle2** : (sans nom dans Paramètres de la primitive) troncature supérieure de la sphère, parallèle à la section transversale circulaire (90 degrés dans une sphère pleine).
* Données**Angle3** : (nommé *Paramètre U* dans Paramètres de la primitive) angle de rotation de la section (360° pour une sphère entière).

Retrieved from "<http://wiki.freecad.org/index.php?title=PartDesign_AdditiveSphere/fr&oldid=1359912>"