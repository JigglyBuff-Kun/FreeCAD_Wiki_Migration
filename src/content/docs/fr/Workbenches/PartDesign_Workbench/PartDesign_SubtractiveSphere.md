---
title: PartDesign Sphère soustractive
---
|  |
| --- |
| PartDesign Sphère soustractive |
| Emplacement du menu |
| PartDesign → Créer une primitive soustractive → Sphère soustractive |
| Ateliers |
| [PartDesign](/PartDesign_Workbench/fr "PartDesign Workbench/fr") |
| Raccourci par défaut |
| *Aucun* |
| Introduit dans la version |
| 0.17 |
| Voir aussi |
| [PartDesign Primitives soustractives](/PartDesign_CompPrimitiveSubtractive/fr "PartDesign CompPrimitiveSubtractive/fr"), [PartDesign Sphère additif](/PartDesign_AdditiveSphere/fr "PartDesign AdditiveSphere/fr") |
|  |

## Description

Insère une sphère primitive soustractive dans le corps actif. Sa forme est soustraite du solide existant.

![](/images/PartDesign_SubtractiveSphere_example.svg)

*À gauche, le corps actif (A) en gris et le prisme soustractif (B) en rouge transparent ; le résultat final est à droite.*

## Utilisation

1. Pressez le bouton ![](/images/PartDesign_SubtractiveSphere.svg) **Sphère soustractive**. **Remarque**: la sphère soustractive fait partie du menu d'icônes appelé *Créer une primitive soustractive*. Après le lancement de FreeCAD, le cube soustractif est affiché par défaut dans la barre d'outils. Pour obtenir la sphère soustractive, cliquez sur la flèche vers le bas et choisissez Sphère soustractive dans le menu.
2. Définir les paramètres primitifs et de l'[ancrage](/Part_EditAttachment/fr "Part EditAttachment/fr").
3. Cliquez sur OK.
4. Une sphère apparaît dans le corps actif.

## Options

La Sphère peut être éditée après sa création de deux façons :

* Double-cliquez la dans l'arborescence ou faire un clic droit dessus et sélectionnez **Éditer la primitive** dans le menu contextuel. Cela fait apparaître les paramètres des Primitives.
* Via l'[Éditeur de propriétés](/Property_editor/fr "Property editor/fr").

## Propriétés

* Données**Attachment** : définit les modes d'ancrage ainsi que le décalage d'ancrage. Voir [Part Ancrage](/Part_EditAttachment/fr "Part EditAttachment/fr").
* Données**Label** : donne le nom de la sphère, changer si nécessaire.
* Données**Radius** : rayon de la sphère.
* Données**Angle1** : (nommé *Paramètre V* dans les paramètres de la primitive) troncature inférieure de la sphère, parallèle à la section circulaire (-90 degrés dans une sphère complète).
* Données**Angle2** : (sans nom dans Paramètres de la primitive) troncature supérieure de la sphère, parallèle à la section circulaire (90 degrés dans une sphère complète).
* Données**Angle3** : (nommé *Paramètre U* dans les paramètres de la primitive) angle de rotation de la section transversale (360 degrés dans une sphère complète).

Retrieved from "<http://wiki.freecad.org/index.php?title=PartDesign_SubtractiveSphere/fr&oldid=1359908>"