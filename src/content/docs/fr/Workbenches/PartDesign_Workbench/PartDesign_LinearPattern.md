---
title: PartDesign Répétition linéaire
---
|  |
| --- |
| PartDesign Répétition linéaire |
| Emplacement du menu |
| PartDesign → Appliquer une transformation → Répétition linéaire |
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

L'outil ![](/images/PartDesign_LinearPattern.svg) **PartDesign Répétition linéaire** crée une transformation linéaire d'une ou plusieurs fonctions.

![](/images/PartDesign_LinearPattern_example.svg)

Ci-dessus, une protrusion en forme de L (B) créée sur le dessus de la protrusion de base (A, aussi dénommée *support*) est utilisée dans une répétition linéaire.  
Le résultat (C) est affiché à droite.

## Utilisation

### Créer

1. Vous pouvez [activé](/PartDesign_Body/fr#Statut_actif "PartDesign Body/fr") le bon corps.
2. Vous pouvez sélectionner une ou plusieurs fonctions dans la [vue en arborescence](/Tree_view/fr "Tree view/fr") ou la [vue 3D](/3D_view/fr "3D view/fr").
3. Il existe plusieurs façons de lancer l'outil :
   * Appuyez sur le bouton ![](/images/PartDesign_LinearPattern.svg) Répétition linéaire.
   * Sélectionnez l'option **PartDesign → Appliquer une transformation → ![](/images/PartDesign_LinearPattern.svg) Répétition linéaire** du menu.
4. S'il n'y a pas de corps actif, et qu'il y a deux corps ou plus dans le document, la fenêtre de dialogue **Corps actif requis** s'ouvrira et vous invitera à en activer un. S'il y a un seul corps, il sera activé automatiquement.
5. Si aucune fonction n'a été sélectionnée, le [panneau des tâches](/Task_panel/fr "Task panel/fr") **Sélectionner une fonction** s'ouvre : sélectionnez-en une ou plusieurs (en maintenant la touche Ctrl) dans la liste et appuyez sur le bouton OK.
6. Le [panneau des tâches](/Task_panel/fr "Task panel/fr") **Paramètres de la répétition linéaire** s'ouvre. Voir [Options](#Options) pour plus d'informations.
7. Appuyez sur le bouton OK pour terminer.

### Éditer

1. Faites l'une des choses suivantes :
   * Double-cliquez sur l'objet Draft dans la [vue en arborescence](/Tree_view/fr "Tree view/fr").
   * Cliquez avec le bouton droit de la souris sur l'objet Draft dans la [vue en arborescence](/Tree_view/fr "Tree view/fr") et sélectionnez **Paramètres de la répétition linéaire** dans le menu contextuel.
2. Le [panneau des tâches](/Task_panel/fr "Task panel/fr") des **Paramètres de la répétition linéaire** s'ouvre. Voir [Options](#Options) pour plus d'informations.
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
* Spécifiez la **Direction** de la transformation :
  + **Axe normal à l'esquisse** : axe Z de l'esquisse (disponible uniquement pour les fonctions basées sur l'esquisse).
  + **Axe vertical de l'esquisse** : axe Y de l'esquisse (idem).
  + **Axe horizontal de l'esquisse** : axe X de l'esquisse (idem).
  + **Ligne de construction #** : une valeur séparée pour chaque ligne de construction dans l'esquisse (idem).
  + **Axe X** : axe X du corps.
  + **Axe Y** : axe Y du corps.
  + **Axe Z** : axe Z du corps.
  + **Sélectionnez une référence...** : sélectionnez une [ligne de référence](/PartDesign_Line/fr "PartDesign Line/fr") dans la [vue en arborescence](/Tree_view/fr "Tree view/fr") ou une [ligne de référence](/PartDesign_Line/fr "PartDesign Line/fr") ou une arête dans la [vue 3D](/3D_view/fr "3D view/fr").
* Cochez la case **Inverser la direction** pour inverser la transformation.
* [introduit dans la version 1.0](/Release_notes_1.0/fr "Release notes 1.0/fr") : Spécifiez la longueur **Mode** :
  + **Longueur** : saisissez la **Longueur** à partir d'un point donné de la première occurrence jusqu'au même point de la dernière occurrence.
  + [introduit dans la version 1.0](/Release_notes_1.0/fr "Release notes 1.0/fr") : **Décalage** : entrez le **Décalage** entre un point donné de la première occurrence et le même point de l'occurrence suivante. Pour n occurrences : Total de la longueur=(n-1)\*Décalage.
* Spécifiez le nombre d'**Occurrences** (y compris la fonction d'origine).
* Si la case **Mettre à jour la vue** est cochée, la vue sera mise à jour en temps réel.

## Limitations

Voir [PartDesign Répétition circulaire](/PartDesign_PolarPattern/fr#Limitations "PartDesign PolarPattern/fr").

Retrieved from "<http://wiki.freecad.org/index.php?title=PartDesign_LinearPattern/fr&oldid=1496172>"