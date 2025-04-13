---
title: CAM Parcours hélicoïdal
---
:::caution
This documentation is not finished. Please help and contribute documentation.GuiCommand modelexplains how commands should be documented. BrowseCategory:UnfinishedDocuto see more incomplete pages like this one. SeeCategory:Command Referencefor all commands.SeeWikiPagesto learn about editing the wiki pages, and go toHelp FreeCADto learn about other ways in which you can contribute.
:::

|  |
| --- |
| CAM Parcours hélicoïdal |
| Emplacement du menu |
| CAM → Détourer hélicoïdalement |
| Ateliers |
| [CAM](/CAM_Workbench/fr "CAM Workbench/fr") |
| Raccourci par défaut |
| *Aucun* |
| Introduit dans la version |
| - |
| Voir aussi |
| *Aucun* |
|  |

## Description

L'outil ![](/images/CAM_Helix.svg) Parcours hélicoïdal ajoute une opération de détourage hélicoïdale à la tâche. Le parcours hélicoïdal dans le sens horaire produit des commandes G-code (G2). Le sens anti-horaire produit des commandes de G-code (G3). Le pourcentage de recouvrement spécifie le recouvrement concentrique en pourcentage du diamètre de l'outil. Une ou plusieurs parcours hélicoïdales seront créés à des diamètres progressivement différents, pour détourer le trou.

## Utilisation

* Sélectionnez l'![](/images/Workbench_CAM.svg) [atelier CAM](/CAM_Workbench/fr "CAM Workbench/fr").
* Sélectionnez l'icône ![](/images/CAM_Helix.svg) ou CAM → ![](/images/CAM_Helix.svg) Détourer hélicoïdalement du menu supérieur. Cela ouvre le ![](/images/CAM_Helix.svg) panneau de configuration du parcours hélicoïdal.
* Une pop-up "Choisir un contrôleur d'outils" vous invite à sélectionner un contrôleur d'outils. Dans les anciennes versions, dans l'onglet ![](/images/CAM_Helix.svg) Opération, choisissez un contrôleur d'outil et confirmez en appuyant sur Appliquer.
* Ouvrez l'onglet Géométrie de base. Tous les trous disponibles compatibles avec l'outil Parcours hélicoïdal dans le modèle de tâche pourront être sélectionnés pour le traitement. Dans la [vue 3D](/3D_view/fr "3D view/fr"), sélectionnez les trous par leur arête ou les faces de leur paroi et ajoutez-les avec le bouton Ajouter. Vérifiez qu'ils apparaissent dans la liste. Confirmez que la liste correspond aux trous destinés à être traités.
* Pour supprimer des trous, sélectionnez-les dans la liste et appuyez sur le bouton Supprimer.
* S'assurer que la profondeur de départ, la profondeur finale et le pas de descente (le pas de l'hélicoïde) sont corrects. Ajustez-les si ce n'est pas le cas.
* Assurez-vous que les hauteurs de sécurité et de dégagement sont correctes.
* Dans l'onglet Opération, spécifiez la surface de départ de l'hélicoïde (extérieure/intérieure), la direction (sens horaire/sens anti-horaire) et le pourcentage de recouvrement.
* Cliquez sur Appliquer pour créer ou mettre à jour le parcours, OK pour appliquer et fermer le panneau, ou Annuler pour abandonner et fermer le panneau.

## Options

Un **décalage supplémentaire** ajoute une marge de matériau à ne pas usiner. Il s'agit généralement d'une opération séparée pour permettre une légère finition.

*Rayon de départ'* n'est pas disponible dans le panneau de tâches *Détourer hélicoïdalement* mais peut être édité directement dans l'[éditeur de propriétés](/Property_editor/fr "Property editor/fr")

Il s'agit du rayon de matière restant au centre. Par défaut, il est égal à zéro, ce qui donne un parcours où l'outil touche juste l'axe du trou. Cela produit un parcours central découpant un trou deux fois plus grand que le diamètre de l'outil.

Si ce paramètre est réglé sur une valeur négative, il peut permettre un rayon du parcour hélicoïdal plus petit. Par exemple, un rayon négatif égal au rayon de l'outil produira un parcour hélicoïdal de rayon zéro, c'est-à-dire une coupe en plongée avec la fraise en bout, si l'outil est approprié. Cela fonctionnera comme première coupe dans une opération en plusieurs passes, mais toute tentative de créer un parcour hélicoïdal avec un outil de la même taille que le trou dans le modèle sera rejetée.

## Commentaires

* Le pas de descente n'est pas respecté exactement. Il est toujours arrondi pour donner un nombre complet de tours de la profondeur de départ à la profondeur finale.
* De même, le pas supérieur n'est pas respecté exactement. Il est toujours arrondi pour donner un nombre de pas égaux.

Le paramètre d'avance est constant pour toutes les coupes et est basé sur la position de l'axe de l'outil. L'avance réelle de l'arête de coupe de l'outil peut donc varier considérablement entre la coupe la plus intérieure et la surface extérieure. Si les dimensions de la tâche produisent un diamètre de parcours plus petit que le diamètre de l'outil, cela peut conduire à des vitesses de coupe beaucoup plus rapides que l'avance donnée pour l'outil dans le contrôleur d'outil. Il peut être nécessaire d'en tenir compte lors de la sélection de "l'avance et des vitesses" dans le [contrôleur d'outil](/CAM_ToolController/fr "CAM ToolController/fr") pour la tâche.

De plus, la mise en œuvre actuelle n'utilise que la vitesse horizontale de l'outil pour les parcours hélicoïdales, même dans le cas où une spirale serrée peut être proche d'une coupe verticale.

## Propriétés

### Données

Vide

### Vue

Vide

## Script

*Voir aussi :* [FreeCAD Script de base](/FreeCAD_Scripting_Basics/fr "FreeCAD Scripting Basics/fr").

Exemple :

```
#Place code example here.

```

Retrieved from "<http://wiki.freecad.org/index.php?title=CAM_Helix/fr&oldid=1559241>"