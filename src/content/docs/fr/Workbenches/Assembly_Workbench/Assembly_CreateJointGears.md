---
title: Assembly Liaison engrenage
---
:::caution
Cette documentation n'est pas terminée. Merci de nous aider et de contribuer à la documentation.Modèle GuiCommandexplique comment les commandes doivent être documentées. ParcourezCategory:UnfinishedDocupour voir d'autres pages incomplètes comme celle-ci. VoirCategory:Command\_Referencepour toutes les commandes.VoirÉcrire une page Wikipour apprendre à éditer les pages du wiki, et aller àContribuer à FreeCADpour apprendre d'autres façons de contribuer.
:::

|  |
| --- |
| Assembly Liaison courroie |
| Emplacement du menu |
| Assemblage → Créer une liaison engrenage/courroie → Créer une liaison engrenage |
| Ateliers |
| [Assembly](/Assembly_Workbench/fr "Assembly Workbench/fr") |
| Raccourci par défaut |
| *Aucun* |
| Introduit dans la version |
| 1.0 |
| Voir aussi |
| *Aucun* |
|  |

## Description

L'outil ![](/images/Assembly_CreateJointGears.svg) Assembly Liaison engrenage permet de créer une liaison engrenage qui couple la rotation de deux parties de deux liaisons pivot différentes. Cette liaison peut être utilisée avec des liaisons déjà existantes pour simuler des engrenages droits, des engrenages coniques, des couronnes, des roues de friction, etc.

## Utilisation

1. Vous pouvez sélectionner deux entités géométriques de deux pièces différentes qui ont été précédemment utilisées pour définir deux articulations en croix.
2. Il y a plusieurs façons de lancer l'outil :
   * Appuyer sur le bouton ![](/images/Assembly_CreateJointGears.svg) Créer une liaison engrenage.
   * Sélectionnez l'option **Assemblage → Créer une liaison engrenage/courroie → ![](/images/Assembly_CreateJointGears.svg) Créer une liaison engrenage** du menu.
3. La fenêtre de dialogue **Créer une liaison** s'ouvre dans le [panneau des tâches](/Task_panel/fr "Task panel/fr") avec la liste des entités présélectionnées.
4. Pour les étapes suivantes, voir [Assemblage Liaison fixe](/Assembly_CreateJointFixed/fr#Utilisation "Assembly CreateJointFixed/fr").

## Remarques

* Radius1 et Radius2 font référence au cercle primitif des engrenages ou au diamètre extérieur des roues de friction. Ils ont leurs valeurs dans les propriétés Données**Distance** et Données**Distance2** et définissent le rapport entre les deux rotations.
* Puisque les valeurs des deux rayons n'ont pas d'influence sur la distance entre les axes de rotation et que les unités sont de toute façon annulées, vous pouvez envisager d'entrer des valeurs de diamètre, ou le nombre de dents (il n'est donc pas nécessaire de trouver le diamètre primitif des engrenages coniques) pour les deux rayons.
* Utilisez la même valeur pour les deux rayons pour relier les deux extrémités d'un arbre flexible (si les rotations ne correspondent pas, inversez une articulation à révolutions ou utilisez l'articulation à courroie à la place de celle-ci).

## Propriétés

Voir aussi : [Éditeur de propriétés](/Property_editor/fr "Property editor/fr")

Un objet **Gears** est dérivé d'un objet [App FeaturePython](/App_FeaturePython/fr "App FeaturePython/fr") et hérite de toutes ses propriétés. Voir [Assembly Liaison fixe](/Assembly_CreateJointFixed/fr#Propriétés "Assembly CreateJointFixed/fr") pour des propriétés supplémentaires.

Retrieved from "<http://wiki.freecad.org/index.php?title=Assembly_CreateJointGears/fr&oldid=1496006>"