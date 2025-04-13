---
title: Assembly Liaison distance
---
:::caution
Cette documentation n'est pas terminée. Merci de nous aider et de contribuer à la documentation.Modèle GuiCommandexplique comment les commandes doivent être documentées. ParcourezCategory:UnfinishedDocupour voir d'autres pages incomplètes comme celle-ci. VoirCategory:Command\_Referencepour toutes les commandes.VoirÉcrire une page Wikipour apprendre à éditer les pages du wiki, et aller àContribuer à FreeCADpour apprendre d'autres façons de contribuer.
:::

|  |
| --- |
| Assembly Liaison distance |
| Emplacement du menu |
| Assemblage → Créer une liaison distance |
| Ateliers |
| [Assembly](/Assembly_Workbench/fr "Assembly Workbench/fr") |
| Raccourci par défaut |
| D |
| Introduit dans la version |
| 1.0 |
| Voir aussi |
| *Aucun* |
|  |

## Description

L'outil ![](/images/Assembly_CreateJointDistance.svg) Assembly Liaison distance crée une liaison distance entre deux pièces sélectionnées, fixant la distance entre les deux pièces.

## Utilisation

1. Vous pouvez sélectionner deux entités géométriques de deux formes différentes. Les autres sélections seront rejetées.
2. Il y a plusieurs façons de lancer l'outil :
   * Appuyez sur le bouton ![](/images/Assembly_CreateJointDistance.svg) Créer une liaison distance.
   * Sélectionnez l'option **Assemblage → ![](/images/Assembly_CreateJointDistance.svg) Créer une liaison distance** du menu.
   * Utilisez le raccourci clavier : D.
3. La fenêtre de dialogue **Créer une liaison** s'ouvre dans le [panneau des tâches](/Task_panel/fr "Task panel/fr") avec la liste des entités présélectionnées.
4. Pour les étapes suivantes, voir [Assemblage Liaison fixe](/Assembly_CreateJointFixed/fr#Utilisation "Assembly CreateJointFixed/fr").

## Remarques

L'infobulle indique qu'une distance de 0 entraîne une liaison coplanaire entre les éléments planaires sélectionnés, ou une liaison tangente entre un élément cylindrique et un élément planaire. Aucune de ces options ne semble fonctionner dans la version hebdomadaire 0.22.-.37645.

## Propriétés

Voir aussi : [Éditeur de propriétés](/Property_editor/fr "Property editor/fr")

Un objet **Distance** est dérivé d'un objet [App FeaturePython](/App_FeaturePython/fr "App FeaturePython/fr") et hérite de toutes ses propriétés. Voir [Assembly Liaison fixe](/Assembly_CreateJointFixed/fr#Propriétés "Assembly CreateJointFixed/fr") pour des propriétés supplémentaires.

Retrieved from "<http://wiki.freecad.org/index.php?title=Assembly_CreateJointDistance/fr&oldid=1495986>"