---
title: PartDesign Tore soustractif
---
|  |
| --- |
| PartDesign Tore soustractif |
| Emplacement du menu |
| PartDesign → Créer une primitive soustractive → Tore soustractif |
| Ateliers |
| [PartDesign](/PartDesign_Workbench/fr "PartDesign Workbench/fr") |
| Raccourci par défaut |
| *Aucun* |
| Introduit dans la version |
| 0.17 |
| Voir aussi |
| [PartDesign Primitives soustractives](/PartDesign_CompPrimitiveSubtractive/fr "PartDesign CompPrimitiveSubtractive/fr"), [PartDesign Tore additif](/PartDesign_AdditiveTorus/fr "PartDesign AdditiveTorus/fr") |
|  |

## Description

Insère un Tore primitif soustractif dans le corps actif. Sa forme est soustraite du solide existant.

![](/images/PartDesign_SubtractiveTorus_example.svg)

*À gauche, le corps actif (A) en gris et le tore soustractif (B) en rouge transparent ; le résultat final est à droite.*

## Utilisation

1. Presser le bouton ![](/images/PartDesign_SubtractiveTorus.svg) **Tore soustractif**. **Remarque** : Le Tore soustractif fait partie du menu d'icônes appelé *Créer une primitive soustractive*. Après le lancement de FreeCAD, le cube additif est affiché par défaut dans la barre d'outils. Pour obtenir le Tore soustractif, cliquer sur la flèche vers le bas et choisissez Tore soustractif dans le menu.
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
* Données**Radius1** : rayon imaginaire de l'orbite autour de laquelle la section circulaire tourne. (La distance entre le centre du tore et le centre de la section transversale tournante)
* Données**Radius2** : rayon de la section circulaire du tore.
* Données**Angle1** : (Nommé *Paramètre V* dans les paramètres de la primitive) troncature inférieure du tore, parallèle à la section circulaire (-180° dans un tore complet). Un bogue dans les sources entraîne des résultats inattendus lors du changement d'Angle1.
* Données**Angle2** : (sans nom dans les paramètres de la primitive) troncature supérieure de l'ellipsoïde, parallèle à la section circulaire (180° dans un tore complet). Un bogue dans les sources entraîne des résultats inattendus lors du changement d'Angle2.
* Données**Angle3** : (nommé *Paramètre U* dans les paramètres de la primitive) angle de rotation de la section circulaire (360° dans un tore complet).

Retrieved from "<http://wiki.freecad.org/index.php?title=PartDesign_SubtractiveTorus/fr&oldid=1359932>"