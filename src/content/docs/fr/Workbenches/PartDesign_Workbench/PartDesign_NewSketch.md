---
title: PartDesign Esquisse
---
|  |
| --- |
| PartDesign Esquisse |
| Emplacement du menu |
| Esquisse → Créer une esquisse |
| Ateliers |
| [PartDesign](/PartDesign_Workbench/fr "PartDesign Workbench/fr") |
| Raccourci par défaut |
| *Aucun* |
| Introduit dans la version |
| 0.17 |
| Voir aussi |
| [Sketcher Esquisse](/Sketcher_NewSketch/fr "Sketcher NewSketch/fr") |
|  |

## Description

Cet outil crée une nouvelle esquisse, crée un nouveau [PartDesign Corps](/PartDesign_Body/fr "PartDesign Body/fr") pour contenir l'esquisse s'il n'en existe pas et ouvre automatiquement l'[atelier Sketcher](/Sketcher_Workbench/fr "Sketcher Workbench/fr") après la création.

Lors de la création de modèles à l'aide de l'[atelier PartDesign](/PartDesign_Workbench/fr "PartDesign Workbench/fr"), cet outil doit être préféré à l'outil ![](/images/Sketcher_NewSketch.svg) [Sketcher Esquisse](/Sketcher_NewSketch/fr "Sketcher NewSketch/fr") de l'[atelier Sketcher](/Sketcher_Workbench/fr "Sketcher Workbench/fr").

## Utilisation

1. Appuyez sur le bouton ![](/images/PartDesign_NewSketch.svg) Créer une esquisse de la barre d'outils PartDesign.
2. Dans le panneau des tâches, la fenêtre de dialogue **Sélectionner une fonction** s'ouvre. Sélectionnez l'un des plans dans la liste ou depuis la vue 3D, qui peut être réorientée pour une meilleure visibilité.
3. Appuyez sur OK.
4. L'interface bascule automatiquement vers l'atelier Sketcher et l'esquisse peut être modifiée. Une fois l'esquisse terminée, l'interface retourne dans l'atelier PartDesign et la vue 3D est restaurée selon l'orientation de la vue avant la création de l'esquisse.
5. Vous pouvez également sélectionner un plan ou une face sur le corps actif existant avant de créer l'esquisse, auquel cas l'esquisse est créée instantanément.

## Options

* Pour modifier le rattachement d'une esquisse existante, modifiez sa propriété *Map Mode* (voir [Propriétés](#Propriétés).)

* La fenêtre de dialogue *Sélectionner une fonction* définit les caractéristiques de la nouvelle esquisse

:   :   ![](/images/PartDesign.CreateSketch.SelectFeatureDialog.jpeg)
    :   Fenêtre de dialogue *Sélectionner une fonction*. Ces paramètres créent une esquisse sur le plan XY et permettent des références croisées à partir d'autres éléments du même corps

Paramètres de la fenêtre de dialogue :

* Système de coordonnées : définit l'orientation du plan d'esquisse
* Autoriser les fonctionnalités utilisées : *à définir*

:   Autoriser les options de fonctionnalités externes

* À partir d'autres corps de la même pièce : tous les éléments utilisés dans le même corps peuvent être référencés
* De différentes pièces ou fonctions indépendantes : *à définir*
* Faire une copie indépendante : tous les autres éléments seront des copies séparées, c'est-à-dire qu'ils ne changeront pas lorsque l'original sera modifié.
* Faire une copie dépendante : les éléments seront des copies, mais une dépendance aux éléments d'origine est conservée. Ceci utilise essentiellement une [PartDesign Forme liée](/PartDesign_ShapeBinder/fr "PartDesign ShapeBinder/fr")
* Créer une référence croisée : les éléments liés ne seront pas des copies mais pointent vers les éléments d'origine, par ex. une esquisse principale. Toutes les modifications sont reflétées dans cette esquisse.

Pour référencer des éléments dans l'[atelier Sketcher](/Sketcher_Workbench/fr "Sketcher Workbench/fr"), utilisez les deux fonctions ![](/images/Sketcher_External.svg) [Sketcher Géométrie externe](/Sketcher_External/fr "Sketcher External/fr") et ![](/images/Sketcher_CarbonCopy.svg) [Sketcher Copie carbone](/Sketcher_CarbonCopy/fr "Sketcher CarbonCopy/fr"). En général, il est recommandé d'utiliser d'autres esquisses comme source pour les références plutôt que des faces ou des arêtes car elles sont moins affectées par le problème de dénomination topologique.

## Propriétés

* Données**Map Mode** : mode de liaison de l'esquisse à un autre objet, généralement un plan ou une face, mais pouvant être constitué d'autres types d'objets. Cliquez une fois dans le champ pour afficher un bouton ... et appuyez dessus pour ouvrir la fenêtre de dialogue de [Part Ancrage](/Part_EditAttachment/fr "Part EditAttachment/fr"). Si défini à Désactivé, la propriété Placement est activée.
* Données**Placement** : contrôle l'orientation de l'esquisse dans l'espace 3D, voir [Positionner](/Std_Placement/fr "Std Placement/fr"). Désactivé si l'esquisse est liée via la propriété Map Mode.

Retrieved from "<http://wiki.freecad.org/index.php?title=PartDesign_NewSketch/fr&oldid=1496117>"