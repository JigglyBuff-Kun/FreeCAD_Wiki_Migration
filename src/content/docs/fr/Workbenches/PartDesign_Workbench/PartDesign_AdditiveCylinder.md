---
title: PartDesign Cylindre additif
---
|  |
| --- |
| PartDesign Cylindre additif |
| Emplacement du menu |
| PartDesign → Créer une primitive additive → Cylindre additif |
| Ateliers |
| [PartDesign](/PartDesign_Workbench/fr "PartDesign Workbench/fr") |
| Raccourci par défaut |
| *Aucun* |
| Introduit dans la version |
| 0.17 |
| Voir aussi |
| [PartDesign Créer une primitive d'addition](/PartDesign_CompPrimitiveAdditive/fr "PartDesign CompPrimitiveAdditive/fr"), [PartDesign Cylindre soustractif](/PartDesign_SubtractiveCylinder/fr "PartDesign SubtractiveCylinder/fr") |
|  |

## Description

Insère un Cylindre primitif dans un corps actif comme première fonction, ou le fusionne aux autres fonctions existantes.

![](/images/PartDesign_AdditiveCylinder_example.png)

## Utilisation

1. Presser le bouton ![](/images/PartDesign_AdditiveCylinder.svg) **Cylindre Additif**. **Remarque** : Le Cylindre additif fait partie d'un menu déroulant d'icônes appelé "Créer une primitive additive". Après démarrage de FreeCAD , le cylindre additif est le second affiché dans la barre d'outils. Pour atteindre le bouton Cylindre, cliquer sur le bouton flèche vers le bas et choisissez le Cylindre additif dans le menu.
2. Renseigner les paramètres de la primitive et de l'[ancrage](/Part_EditAttachment/fr "Part EditAttachment/fr").
3. Clic OK.
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

Retrieved from "<http://wiki.freecad.org/index.php?title=PartDesign_AdditiveCylinder/fr&oldid=1359741>"