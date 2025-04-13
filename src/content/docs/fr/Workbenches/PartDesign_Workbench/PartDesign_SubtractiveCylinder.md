---
title: PartDesign Cylindre soustractif
---
|  |
| --- |
| PartDesign Cylindre soustractif |
| Emplacement du menu |
| PartDesign → Créer une primitive soustractive → Cylindre soustractif |
| Ateliers |
| [PartDesign](/PartDesign_Workbench/fr "PartDesign Workbench/fr") |
| Raccourci par défaut |
| *Aucun* |
| Introduit dans la version |
| 0.17 |
| Voir aussi |
| [PartDesign Créer une primitive soustractive](/PartDesign_CompPrimitiveSubtractive/fr "PartDesign CompPrimitiveSubtractive/fr"), [PartDesign Cylindre additif](/PartDesign_AdditiveCylinder/fr "PartDesign AdditiveCylinder/fr") |
|  |

## Description

Insère un cylindre primitif soustractif dans le Corps actif. Sa forme est soustraite du solide existant.

![](/images/PartDesign_SubtractiveCylinder_example.svg)

*À gauche, le corps actif (A) en gris et le cylindre soustractif (B) en rouge transparent ; le résultat final est à droite.*

## Utilisation

1. Presser le bouton ![](/images/PartDesign_SubtractiveCylinder.svg) **Cylindre soustractif**. **Remarque** : le Cylindre soustractif fait partie du menu d'icônes appelé *Créer une primitive soustractive*. Après le lancement de FreeCAD, le cube soustractif est affiché par défaut dans la barre d'outils. Pour obtenir le Cylindre soustractif, cliquer sur la flèche vers le bas et choisissez Cylindre soustractif dans le menu.
2. Définir les paramètres primitifs et de l'[ancrage](/Part_EditAttachment/fr "Part EditAttachment/fr").
3. Cliquer sur OK.
4. Un cylindre apparaît dans le corps actif.

## Options

Il est possible de créer des cylindres biaisés en spécifiant des angles par rapport au vecteur normal de l'ancrage choisi. [introduit dans la version 0.20](/Release_notes_0.20/fr "Release notes 0.20/fr")

Le Cylindre peut être édité après sa création de deux façons :

* Double-cliquez le dans l'arborescence ou faire un clic droit dessus et sélectionnez **Éditer la primitive** dans le menu contextuel. Cela fait apparaître les paramètres des Primitives.
* Via l'[Éditeur de propriétés](/Property_editor/fr "Property editor/fr").

## Propriétés

* Données**Attachment** : définit les modes d'ancrage ainsi que le décalage d'ancrage. Voir [Part Ancrage](/Part_EditAttachment/fr "Part EditAttachment/fr").
* Données**Label** : donne le nom du cylindre, changer si nécessaire.
* Données**Radius** : valeur du rayon de la base du cylindre.
* Données**Angle** : angle de rotation (360° pour un cylindre complet, 0 à 360° pour un quartier).
* Données**Height** : hauteur du cylindre entre les deux faces.
* Données**First Angle** : angle dans la première direction. [introduit dans la version 0.20](/Release_notes_0.20/fr "Release notes 0.20/fr")
* Données**Second Angle** : angle dans la seconde direction. [introduit dans la version 0.20](/Release_notes_0.20/fr "Release notes 0.20/fr")

Retrieved from "<http://wiki.freecad.org/index.php?title=PartDesign_SubtractiveCylinder/fr&oldid=1359753>"