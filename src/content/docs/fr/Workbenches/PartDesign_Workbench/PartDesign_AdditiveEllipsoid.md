---
title: PartDesign Ellipsoïde additif
---
|  |
| --- |
| PartDesign Ellipsoïde additif |
| Emplacement du menu |
| PartDesign → Créer une primitive additive → Ellipsoïde additif |
| Ateliers |
| [PartDesign](/PartDesign_Workbench/fr "PartDesign Workbench/fr") |
| Raccourci par défaut |
| *Aucun* |
| Introduit dans la version |
| 0.17 |
| Voir aussi |
| [PartDesign Primitives additives](/PartDesign_CompPrimitiveAdditive/fr "PartDesign CompPrimitiveAdditive/fr"), [PartDesign Ellipsoïde soustractif](/PartDesign_SubtractiveEllipsoid/fr "PartDesign SubtractiveEllipsoid/fr") |
|  |

## Description

Insére un Ellipsoïde primitif dans le corps actif comme fonction de base, ou fusionne avec les fonctions existantes.

![](/images/PartDesign_AdditiveEllipsoid_example.png)

## Utilisation

1. Presser le bouton ![](/images/PartDesign_AdditiveEllipsoid.svg) **Ellipsoïde additif**. **Remarque**: L'Ellipsoïde additif fait partie d'un menu d'icônes appelé *Créer une primitive additive*. Après le démarrage de FreeCAD, le cube soustractif est celui affiché dans la barre d'outils. Pour obtenir l'Ellipsoïde additif, cliquez sur la flèche vers le bas à côté de l'icône visible et sélectionnez Ellipsoïde soustractif dans le menu.
2. Définir les paramètres primitifs et de l'[ancrage](/Part_EditAttachment/fr "Part EditAttachment/fr").
3. Cliquer sur OK.
4. Un Ellipsoïde apparaît dans le Corps actif.

## Options

L'Ellipsoïde peut être édité après sa création de deux façons :

* Double-cliquez le dans l'arborescence ou faire un clic droit dessus et sélectionnez **Éditer la primitive** dans le menu contextuel. Cela fait apparaître les paramètres des Primitives.
* Via l'[Éditeur de propriétés](/Property_editor/fr "Property editor/fr").

## Propriétés

* Données**Attachment**: définit les modes d'ancrage ainsi que le décalage d'ancrage. Voir [Part Ancrage](/Part_EditAttachment/fr "Part EditAttachment/fr").
* Données**Label**: donne le nom de l'Ellipsoïde , changer si nécessaire .
* Données**Radius1**: rayon de l'Ellipsoïde dans le sens Z (hauteur); par défaut parallèle à l'axe Z.
* Données**Radius2**: rayon de l'Ellipsoïde dans le sens X (longueur); par défaut parallèle à l'axe X.
* Données**Radius3**: rayon de l'Ellipsoïde dans le sens Y (largeur); par défaut parallèle à l'axe Y. Si par défaut cette valeur est à zéro, l'ellipsoïde à la forme d'un œuf, sinon la forme est aplatie comme un galet. [ellipsoïde de révolution](https://fr.wikipedia.org/wiki/Ellipso%C3%AFde_de_r%C3%A9volution). Cela a la même forme que si Radius3 est identique à Radius2.
* Données**Angle1**: (désigné *Paramètre V* dans les paramètres de la primitive) troncature inférieure de l'ellipsoïde, parallèle à la section circulaire (-90 degrés dans un sphéroïde complet)
* Données**Angle2**: (pas de nom dans les paramètres de la primitive) troncature supérieure de l'ellipsoïde, parallèle à la section circulaire (90 degrés dans un sphéroïde complet).
* Données**Angle3**: (désigné *Paramètre U* dans les paramètres de la primitive) angle de rotation de la section elliptique (360 degrés dans un sphéroïde complet).

Retrieved from "<http://wiki.freecad.org/index.php?title=PartDesign_AdditiveEllipsoid/fr&oldid=1359926>"