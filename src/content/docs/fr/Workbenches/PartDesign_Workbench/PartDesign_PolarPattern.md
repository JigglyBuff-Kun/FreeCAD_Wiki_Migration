---
title: PartDesign Répétition circulaire
---
|  |
| --- |
| PartDesign Répétition circulaire |
| Emplacement du menu |
| PartDesign → Appliquer une transformation → Répétition circulaire |
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

L'outil ![](/images/PartDesign_PolarPattern.svg) **PartDesign Répétition circulaire** crée une transformation circulaire d'une ou plusieurs fonctions.

![](/images/PartDesign_PolarPattern_example.png)

Une cavité de forme oblongue (B) réalisée sur une protrusion (A, également appelé *support*) est utilisée par une transformation circulaire.  
Le résultat (C) est illustré à droite.

## Utilisation

### Créer

1. Vous pouvez [activé](/PartDesign_Body/fr#Statut_actif "PartDesign Body/fr") le bon corps.
2. Sélectionnez au besoin une ou plusieurs fonctions dans la [vue en arborescence](/Tree_view/fr "Tree view/fr") ou la [vue 3D](/3D_view/fr "3D view/fr").
3. Il existe plusieurs façons de lancer l'outil :
   * Appuyez sur le bouton ![](/images/PartDesign_PolarPattern.svg) Répétition circulaire.
   * Sélectionnez l'option **PartDesign → Appliquer une transformation → ![](/images/PartDesign_PolarPattern.svg) Répétition circulaire** dans le menu.
4. S'il n'y a pas de corps actif, et qu'il y a deux corps ou plus dans le document, la fenêtre de dialogue **Corps actif requis** s'ouvrira et vous invitera à en activer un. S'il y a un seul corps, il sera activé automatiquement.
5. Si aucune fonction n'a été sélectionnée, le [panneau des tâches](/Task_panel/fr "Task panel/fr") **Sélectionner une fonction** s'ouvre : sélectionnez-en une ou plusieurs (en maintenant la touche Ctrl) dans la liste et appuyez sur le bouton OK.
6. Le [panneau des tâches](/Task_panel/fr "Task panel/fr") **Paramètres de la répétition circulaire** s'ouvre. Voir [Options](#Options) pour plus d'informations.
7. Appuyez sur le bouton OK pour terminer.

### Éditer

1. Faites l'une des choses suivantes :
   * Double-cliquez sur l'objet PolarPattern dans la [vue en arborescence](/Tree_view/fr "Tree view/fr").
   * Cliquez avec le bouton droit de la souris sur l'objet PolarPattern dans la [vue en arborescence](/Tree_view/fr "Tree view/fr") et sélectionnez **Paramètres de la répétition circulaire** dans le menu contextuel.
2. Le [panneau des tâches](/Task_panel/fr "Task panel/fr") des **Paramètres de la répétition circulaire** s'ouvre. Voir [Options](#Options) pour plus d'informations.
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
    - S'il y a plusieurs fonctions dans le modèle, leur ordre peut être important. Voir [Organiser les fonctions](#Organiser_les_fonctions).
* Spécifiez la **Axe** de la transformation :
  + **Axe normal à l'esquisse** : axe Z de l'esquisse (disponible uniquement pour les fonctions basées sur l'esquisse).
  + **Axe vertical de l'esquisse** : axe Y de l'esquisse (idem).
  + **Axe horizontal de l'esquisse** : axe X de l'esquisse (idem).
  + **Ligne de construction #** : entrée séparée pour chaque ligne de construction dans l'esquisse (idem).
  + **Axe X** : axe X du corps.
  + **Axe Y** : axe Y du corps.
  + **Axe Z** : axe Z du corps.
  + **Sélectionner une référence...** : sélectionnez une [Ligne de référence](/PartDesign_Line/fr "PartDesign Line/fr") dans la [vue en arborescence](/Tree_view/fr "Tree view/fr") ou une [Ligne de référence](/PartDesign_Line/fr "PartDesign Line/fr") ou une arête dans la [vue 3D](/3D_view/fr "3D view/fr").
* Cochez la case **Inverser la direction** pour inverser la transformation.
* [introduit dans la version 1.0](/Release_notes_1.0/fr "Release notes 1.0/fr") : spécifiez le **Mode** de l'angle  :
  + **Angle global** : entrez l'**Angle** global. Si l'angle est inférieur à 360°, les occurrences sont réparties uniformément de 0° (première occurrence) à l'angle donné (dernière occurrence). Si l'angle est de 360°, les occurrences sont réparties uniformément autour du cercle. Pour n occurrences, un angle de 360° est équivalent à un angle de 360°\*(1-1/n).
  + [introduit dans la version 1.0](/Release_notes_1.0/fr "Release notes 1.0/fr") : **Angle de décalage** : saisissez l'angle de **Décalage** entre un point donné de la première occurrence et le même point de l'occurrence suivante. Pour n occurrences : Angle global=(n-1)\*Décalage.
* Spécifiez l'**Angle** à couvrir par la transformation. Si l'angle est inférieur à 360°, les instances sont réparties uniformément de 0° (première instance) à l'angle donné (dernière instance). Si l'angle est un cercle complet de 360°, les instances sont réparties uniformément autour du cercle. Cela signifie que pour n instances, un angle de 360° est équivalent à un angle de 360°\*(1-1/n).
* Spécifiez le nombre d'**Occurrences** (y compris la fonction d'origine).
* Si la case **Mettre à jour la vue** est cochée, la vue sera mise à jour en temps réel.

## Organiser les fonctions

Si certaines des fonctions sélectionnées sont additives et d'autres soustractives, leur ordre peut avoir un impact sur le résultat final. Vous pouvez modifier l'ordre en faisant glisser les fonctions individuellement dans la liste.

![](/images/PartDesign_feature-order.gif)

Effet de l'ordre des fonctionnalités

## Limitations

* Toute forme du modèle qui ne recouvre pas la fonction parent sera exclue. Cela garantit qu'un corps PartDesign est toujours constitué d'un solide unique et connecté.
* Les transformations PartDesign ne sont pas encore aussi optimisées que leurs homologues de Draft. Ainsi, pour un grand nombre de pièces, vous devriez envisager d'utiliser un [Draft Réseau polaire](/Draft_PolarArray/fr "Draft PolarArray/fr") à la place, combiné à une opération booléenne Part. Cela peut nécessiter des modifications importantes de votre modèle car vous quittez PartDesign et ne pouvez donc pas simplement continuer avec d'autres fonctions PartDesign dans le même corps. Un exemple est présenté dans [ce sujet du forum](https://forum.freecadweb.org/viewtopic.php?f=3&t=55192).
* Un modèle ne peut pas être appliqué directement à un autre modèle, qu'il soit circulaire, linéaire ou symétrique. Pour cela, vous avez besoin d'une [PartDesign Transformation multiple](/PartDesign_MultiTransform/fr "PartDesign MultiTransform/fr").

Retrieved from "<http://wiki.freecad.org/index.php?title=PartDesign_PolarPattern/fr&oldid=1496168>"