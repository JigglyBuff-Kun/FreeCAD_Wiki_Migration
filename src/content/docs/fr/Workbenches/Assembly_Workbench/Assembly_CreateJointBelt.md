---
title: Assembly Liaison courroie
---
:::caution
Cette documentation n'est pas terminée. Merci de nous aider et de contribuer à la documentation.Modèle GuiCommandexplique comment les commandes doivent être documentées. ParcourezCategory:UnfinishedDocupour voir d'autres pages incomplètes comme celle-ci. VoirCategory:Command\_Referencepour toutes les commandes.VoirÉcrire une page Wikipour apprendre à éditer les pages du wiki, et aller àContribuer à FreeCADpour apprendre d'autres façons de contribuer.
:::

|  |
| --- |
| Assembly Liaison courroie |
| Emplacement du menu |
| Assemblage → Créer une liaison engrenage/courroie → Créer une liaison courroie |
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

L'outil ![](/images/Assembly_CreateJointBelt.svg) Assembly Liaison courroie permet de créer une liaison courroie qui couple la rotation de deux parties de deux liaisons tournantes distinctes. Cette liaison peut être utilisée avec des liaisons déjà existantes pour simuler des courroies de transmission, des engrenages de synchronisation, etc.

## Utilisation

1. Vous pouvez sélectionner deux entités géométriques de deux pièces différentes qui ont été précédemment utilisées pour définir deux articulations en croix.
2. Il y a plusieurs façons de lancer l'outil :
   * Appuyer sur le bouton ![](/images/Assembly_CreateJointBelt.svg) Créer une liaison courroie.
   * Sélectionnez l'option **Assemblage → Créer une liaison engrenage/courroie → ![](/images/Assembly_CreateJointBelt.svg) Créer une liaison courroie** dans le menu.
3. La fenêtre de dialogue **Créer une liaison** s'ouvre dans le [panneau des tâches](/Task_panel/fr "Task panel/fr") avec la liste des entités présélectionnées.
4. Pour les étapes suivantes, voir [Assemblage Liaison fixe](/Assembly_CreateJointFixed/fr#Utilisation "Assembly CreateJointFixed/fr").

## Remarques

* Radius1 et Radius2 font référence au cercle primitif des engrenages de synchronisation ou au diamètre extérieur des poulies. Ils ont leurs valeurs dans les propriétés Données**Distance** et Données**Distance2** et définissent le rapport entre les deux rotations.
* Utilisez la même valeur pour les deux rayons afin de relier les deux extrémités d'un arbre flexible (si les rotations ne correspondent pas, inversez une [liaison pivot](/Assembly_CreateJointRevolute/fr "Assembly CreateJointRevolute/fr") ou utilisez la [liaison engrenage](/Assembly_CreateJointGears/fr "Assembly CreateJointGears/fr") à la place de celle-ci).

## Propriétés

Voir aussi : [Éditeur de propriétés](/Property_editor/fr "Property editor/fr")

Un objet **Belt** est dérivé d'un objet [App FeaturePython](/App_FeaturePython/fr "App FeaturePython/fr") et hérite de toutes ses propriétés. Voir [Assembly Liaison fixe](/Assembly_CreateJointFixed/fr#Propriétés "Assembly CreateJointFixed/fr") pour des propriétés supplémentaires.

Retrieved from "<http://wiki.freecad.org/index.php?title=Assembly_CreateJointBelt/fr&oldid=1496023>"