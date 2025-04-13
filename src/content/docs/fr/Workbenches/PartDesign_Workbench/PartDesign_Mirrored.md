---
title: PartDesign Symétrie
---
|  |
| --- |
| PartDesign Symétrie |
| Emplacement du menu |
| PartDesign → Appliquer une transformation → Symétrie |
| Ateliers |
| [PartDesign](/PartDesign_Workbench/fr "PartDesign Workbench/fr") |
| Raccourci par défaut |
| *Aucun* |
| Introduit dans la version |
| - |
| Voir aussi |
| [PartDesign Transformation multiple](/PartDesign_MultiTransform/fr "PartDesign MultiTransform/fr") |
|  |

## Description

L'outil ![](/images/PartDesign_Mirrored.svg) **PartDesign Symétrie** reflète une ou plusieurs fonctions.

![](/images/PartDesign_Mirrored_example.svg)

Une fonction poche créée à partir d'une esquisse contenant un cercle (A) est utilisée pour créer une fonction symétrie.  
L'axe vertical de l'esquisse (B) est utilisé pour définir le plan de symétrie.  
Le résultat (C) est illustré à droite.

## Utilisation

### Créer

1. Vous pouvez [activé](/PartDesign_Body/fr#Statut_actif "PartDesign Body/fr") le bon corps.
2. Sélectionnez au besoin une ou plusieurs fonctions.
3. Il existe plusieurs façons de lancer l'outil :
   * Appuyez sur le bouton ![](/images/PartDesign_Mirrored.svg) Symétrie.
   * Sélectionnez l'option **PartDesign → Appliquer une transformation → ![](/images/PartDesign_Mirrored.svg) Symétrie** du menu.
4. S'il n'y a pas de corps actif, et qu'il y a deux corps ou plus dans le document, la fenêtre de dialogue **Corps actif requis** s'ouvrira et vous invitera à en activer un. S'il y a un seul corps, il sera activé automatiquement.
5. Si aucune fonction n'a été sélectionnée, le [panneau des tâches](/Task_panel/fr "Task panel/fr") **Sélectionner une fonction** s'ouvre : sélectionnez-en une ou plusieurs (en maintenant la touche Ctrl) dans la liste et appuyez sur le bouton OK.
6. Le [panneau des tâches](/Task_panel/fr "Task panel/fr") **Paramètres de la symétrie** s'ouvre. Voir [Options](#Options) pour plus d'informations.
7. Appuyez sur le bouton OK pour terminer.

### Éditer

1. Effectuez l'une des opérations suivantes :
   * Double-cliquez sur l'objet Mirrored dans la [vue en arborescence](/Tree_view/fr "Tree view/fr").
   * Cliquez avec le bouton droit de la souris sur l'objet Mirrored dans la [vue en arborescence](/Tree_view/fr "Tree view/fr") et sélectionnez **Modifier la symétrie** dans le menu contextuel.
2. Le [panneau des tâches](/Task_panel/fr "Task panel/fr") des **Paramètres de la symétrie** s'ouvre. Voir [Options](#Options) pour plus d'informations.
3. Appuyez sur le bouton OK pour terminer.

## Options

* Choisissez le mode :
  + **Transformer le corps** : transforme la forme de la fonction de base dans son intégralité (par défaut). [introduit dans la version 1.0](/Release_notes_1.0/fr "Release notes 1.0/fr")
  + **Transformer les formes des outils** : transforme les formes de chaque outils des fonctions sélectionnées.
    - Pour ajouter des fonctions :
      1. Appuyez sur le bouton Ajouter une fonction.
      2. Sélectionnez une fonction dans la [vue en arborescence](/Tree_view/fr "Tree view/fr") ou la [vue 3D](/3D_view/fr "3D view/fr").
      3. Répétez l'opération pour ajouter d'autres fonctions.
    - Pour supprimer des fonctions :
      1. Appuyez sur le bouton Supprimer une fonction.
      2. Effectuez l'une des opérations suivantes :
         * Sélectionnez une fonction dans la [vue en arborescence](/Tree_view/fr "Tree view/fr") ou la [vue 3D](/3D_view/fr "3D view/fr").
         * Sélectionnez une fonction dans la liste et appuyez sur la touche Suppr.
         * Cliquez avec le bouton droit de la souris sur une fonction de la liste et sélectionnez **Supprimer** dans le menu contextuel.
      3. Répétez l'opération pour supprimer d'autres fonctions.
    - S'il y a plusieurs fonctions dans le modèle, leur ordre peut être important. Voir [PartDesign Répétition circulaire](/PartDesign_PolarPattern/fr#Organiser_les_fonctions "PartDesign PolarPattern/fr").
* Spécifiez le **Plan** de la symétrie :
  + **Axe vertical de l'esquisse** : axe Y de l'esquisse (le plan passe par cette référence et l'axe Z de l'esquisse, disponible uniquement pour les entités basées sur l'esquisse).
  + **Axe horizontal de l'esquisse** : axe X de l'esquisse (idem).
  + **Ligne de construction #** : une entrée séparée pour chaque ligne de construction dans l'esquisse (idem).
  + **Plan XY** : plan XY du corps.
  + **Plan YZ** : plan YZ du corps.
  + **Plan XZ** : plan XZ du corps.
  + **Sélectionner une référence...** : sélectionnez une face planaire dans la [vue 3D](/3D_view/fr "3D view/fr").
* Cochez la case **Inverser la direction** pour inverser la transformation.
* Si la case **Mettre à jour la vue** est cochée, la vue sera mise à jour en temps réel.

## Limitations

Voir [PartDesign Répétition circulaire](/PartDesign_PolarPattern/fr#Limitations "PartDesign PolarPattern/fr").

Retrieved from "<http://wiki.freecad.org/index.php?title=PartDesign_Mirrored/fr&oldid=1496159>"