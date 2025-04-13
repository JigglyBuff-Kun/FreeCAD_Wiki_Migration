---
title: PartDesign Ellipsoïde soustractif
---
|  |
| --- |
| PartDesign Ellipsoïde soustractif |
| Emplacement du menu |
| PartDesign → Créer une primitive soustractive → Ellipsoïde soustractif |
| Ateliers |
| [PartDesign](/PartDesign_Workbench/fr "PartDesign Workbench/fr") |
| Raccourci par défaut |
| *Aucun* |
| Introduit dans la version |
| 0.17 |
| Voir aussi |
| [PartDesign Primitives soustractives](/PartDesign_CompPrimitiveSubtractive/fr "PartDesign CompPrimitiveSubtractive/fr"), [PartDesign Ellipsoïde additif](/PartDesign_AdditiveEllipsoid/fr "PartDesign AdditiveEllipsoid/fr") |
|  |

## Description

Insère un Ellipsoïde primitif soustractif dans le corps actif. Sa forme est soustraite du solide existant.

![](/images/PartDesign_SubtractiveEllipsoid_example.svg)

*À gauche, le corps actif (A) en gris et l'ellipsoïde soustractif (B) en rouge transparent ; le résultat final est à droite.*

## Utilisation

1. Presser le bouton ![](/images/PartDesign_SubtractiveEllipsoid.svg) **Ellipsoïde additif**. **Remarque**: l'Ellipsoïde soustractif fait partie d'un menu d'icônes appelé *Créer une primitive soustractive*. Après le démarrage de FreeCAD, le cube soustractif est celui affiché dans la barre d'outils. Pour obtenir l'Ellipsoïde soustractif, cliquez sur la flèche vers le bas à côté de l'icône visible et sélectionnez "Ellipsoïde soustractif" dans le menu.
2. Définir les paramètres primitifs et de l'[ancrage](/Part_EditAttachment/fr "Part EditAttachment/fr").
3. Cliquer sur OK.
4. Un Ellipsoïde apparaît dans le corps actif.

## Options

L'Ellipsoïde peut être édité après sa création de deux façons :

* Double-cliquez le dans l'arborescence ou faire un clic droit dessus et sélectionnez **Éditer la primitive** dans le menu contextuel. Cela fait apparaître les paramètres des Primitives.
* Via l'[Éditeur de propriétés](/Property_editor/fr "Property editor/fr").

## Propriétés

* Données**Attachment** : définit les modes d'ancrage ainsi que le décalage d'ancrage. Voir [Part Ancrage](/Part_EditAttachment/fr "Part EditAttachment/fr").
* Données**Label** : donne le nom de l'Ellipsoïde , changer si nécessaire .
* Données**Radius1** : rayon de l'Ellipsoïde dans le sens Z (hauteur) ; par défaut parallèle à l'axe Z.
* Données**Radius2** : rayon de l'Ellipsoïde dans le sens X (longueur) ; par défaut parallèle à l'axe X.
* Données**Radius3** : rayon de l'Ellipsoïde dans le sens Y (largeur) ; par défaut parallèle à l'axe Y. Si par défaut cette valeur est à zéro, l'ellipsoïde forme un [sphéroïde oblate (aplati comme un galet)](https://fr.wikipedia.org/wiki/Ellipso%C3%AFde_de_r%C3%A9volution).
* Données**Angle1** : (désignée *Paramètre V* dans les paramètres de la primitive) troncature inférieure de l'ellipsoïde, parallèle à la section circulaire (-90 degrés dans un sphéroïde complet)
* Données**Angle2** : (sans nom dans les paramètres de la primitive) troncature supérieure de l'ellipsoïde, parallèle à la section circulaire (90 degrés dans un sphéroïde complet).
* Données**Angle3** : (désignée *Paramètre U* dans les paramètres de la primitive) angle de rotation de la section elliptique (360 degrés dans un sphéroïde complet).

Retrieved from "<http://wiki.freecad.org/index.php?title=PartDesign_SubtractiveEllipsoid/fr&oldid=1359928>"