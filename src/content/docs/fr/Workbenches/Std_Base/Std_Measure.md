---
title: Std Mesurer
---
|  |
| --- |
| Std Mesurer |
| Emplacement du menu |
| Outils → Mesurer |
| Ateliers |
| Tous |
| Raccourci par défaut |
| *Aucun* |
| Introduit dans la version |
| 1.0 |
| Voir aussi |
| [Draft Dimension](/Draft_Dimension/fr "Draft Dimension/fr") |
|  |

## Description

La commande **Std Mesurer** donne accès à l'outil de mesures unifiées. Elle remplace plusieurs anciennes commandes de mesure, offrant ainsi une fonctionnalité de mesure polyvalente.

## Utilisation

1. Vous pouvez présélectionner les entités à mesurer.
2. Il y a plusieurs façons de lancer la commande :
   * Appuyez sur le bouton ![](/images/Std_Measure.svg) Mesurer
   * Sélectionnez l'option **Outils → ![](/images/Std_Measure.svg) Mesurer** du menu.
3. Le panneau des tâches **Mesure** s'ouvre. Voir [Options](#Options) pour plus d'informations.
4. Si aucune entité géométrique n'a été présélectionnée, effectuez l'une des opérations suivantes :
   * Sélectionnez les entités géométriques tout en laissant le *Mode* à *Automatique* pour que le mode soit automatiquement déterminé en fonction de la sélection.
   * Choisissez un *Mode* autre que *Automatique* et sélectionnez ensuite les entités géométriques (un nouveau clic sur celles-ci les désélectionnera) :
     + *Distance* : distance la plus courte entre les entités sélectionnées. Si des arêtes circulaires sont sélectionnées, la distance entre les centres des cercles est mesurée,
     + *Distance libre* : distance entre deux points librement sélectionnés (appartenant à des entités différentes telles que des arêtes, des faces).
     + *Angle* : angle entre les entités sélectionnées,
     + *Longueur* : longueur de l'arête sélectionnée,
     + *Position* : coordonnées du sommet sélectionné,
     + *Surface* : surface de la face sélectionnée,
     + *Rayon* : rayon de l'arête circulaire sélectionnée,
     + *Centre d'inertie* : centre d'inertie de l'arête, de la face ou du solide sélectionné (uniquement si présélectionné dans l'arborescence).
5. Le résultat de la mesure sera affiché dans le champ *Résultat* et sur une infobulle affichée dans la [vue 3D](/3D_view/fr "3D view/fr"). Cette infobulle comprendra également une icône indiquant le type de mesure. Les infobulles peuvent être personnalisées dans le [réglage des préférences](/Preferences_Editor/fr "Preferences Editor/fr"). Elles peuvent être déplacées dans la vue 3D en les faisant glisser à l'aide d'un curseur.
6. Appuyez sur le bouton Réinitialiser pour supprimer la mesure ou sur le bouton Enregistrer pour la conserver. Les mesures sauvegardées sont placées dans un [groupe](/Std_Group/fr "Std Group/fr") de mesures dans la [vue en arborescence](/Tree_view/fr "Tree view/fr").
7. Appuyez sur Échap ou sur le bouton Fermer pour terminer la commande.

## Options

1. [introduit dans la version 1.1](/Release_notes_1.1/fr "Release notes 1.1/fr") : vous pouvez appuyez sur le bouton ![](/images/Preferences-system.svg) ![](/images/Toolbar_flyout_arrow.svg) pour changer les paramètres :
   * *Sauvegarde automatique* : si la case est cochée, la dernière mesure est sauvegardée lors du démarrage d'une nouvelle mesure (maintenir Maj peut temporairement désactiver ce comportement),
   * *Sélection additive* : si la case est cochée, cliquer sur des entités géométriques successives les ajoute en tant que sélections pour la même mesure, sinon Ctrl doit être pressé pour le faire.

* Pour les modes *Distance* et *Distance libre*, la case à cocher **Afficher les delta** est affichée. Si cette case est cochée, la propriété Vue**Show Delta** de la mesure est définie à `true` et 3 mesures projetées supplémentaires sont affichées dans la [vue 3D](/3D_view/fr "3D view/fr").

## Propriétés

### Données

Measurement

* Données**Element1** (`LinkSub`) : premier élément de la mesure.
* Données**Element2** (`LinkSub`) : deuxième élément de la mesure.
* Données**Distance** (`Distance`) : distance entre les deux éléments.
* Données**Distance X** (`Distance`) : distance dans la direction X (uniquement pour les mesures *Distance* et *Distance libre*).
* Données**Distance Y** (`Distance`) : distance dans la direction Y (idem).
* Données**Distance Z** (`Distance`) : distance dans la direction Z (idem).
* Données (Hidden)**Position1** (`Vector`) : position du premier point mesuré (en lecture seule).
* Données (Hidden)**Position2** (`Vector`) : position du deuxième point mesuré (en lecture seule).

### Vue

Appearance

* Vue**Font Size** (`Integer`) : taille de la police pour l'infobulle de la cote sauvegardée.
* Vue**Line Color** (`Color`) : couleur de la ligne de la cote affichée dans la vue 3D.
* Vue**Show Delta** (`Bool`) : si `true`, les mesures de distance projetées sont affichées dans la vue 3D. (Uniquement pour les mesures *Distance* et *Distance libre*).
* Vue**Text Background Color** (`Color`) : couleur de l'arrière-plan de l'infobulle de la cote.
* Vue**Text Color** (`Color`) : couleur du texte et du symbole de l'infobulle de la cote.

## Remarques

* Cette commande est le résultat d'un [projet GSoC de 2023 (En)](/Unified_Measurement_Facility "Unified Measurement Facility").

Retrieved from "<http://wiki.freecad.org/index.php?title=Std_Measure/fr&oldid=1530134>"