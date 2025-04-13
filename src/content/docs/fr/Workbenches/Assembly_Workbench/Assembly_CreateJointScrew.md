---
title: Assembly Liaison hélicoïdale
---
:::caution
Cette documentation n'est pas terminée. Merci de nous aider et de contribuer à la documentation.Modèle GuiCommandexplique comment les commandes doivent être documentées. ParcourezCategory:UnfinishedDocupour voir d'autres pages incomplètes comme celle-ci. VoirCategory:Command\_Referencepour toutes les commandes.VoirÉcrire une page Wikipour apprendre à éditer les pages du wiki, et aller àContribuer à FreeCADpour apprendre d'autres façons de contribuer.
:::

|  |
| --- |
| Assembly Liaison hélicoïdale |
| Emplacement du menu |
| Assemblage → Créer une liaison hélicoïdale |
| Ateliers |
| [Assembly](/Assembly_Workbench/fr "Assembly Workbench/fr") |
| Raccourci par défaut |
| W |
| Introduit dans la version |
| 1.0 |
| Voir aussi |
| *Aucun* |
|  |

## Description

L'outil ![](/images/Assembly_CreateJointScrew.svg) Assembly Liaison hélicoïdale permet de créer une liaison hélicoïdale qui couple la translation d'une partie d'une liaison glissière et la rotation d'une partie d'une liaison pivot. Cette liaison peut être utilisée avec les liaisons déjà existantes pour simuler un engrenage à vis sans fin.

## Utilisation

1. Vous pouvez sélectionner deux entités géométriques de deux formes différentes qui ont été précédemment utilisées pour définir une liaison glissière et une liaison pivot.
2. Il y a plusieurs façons de lancer l'outil :
   * Appuyer sur le bouton ![](/images/Assembly_CreateJointScrew.svg) Créer une liaison hélicoïdale.
   * Sélectionnez l'option **Assemblage → ![](/images/Assembly_CreateJointScrew.svg) Créer une liaison hélicoïdale** du menu.
   * Utilisez le raccourci clavier : W.
3. La fenêtre de dialogue **Créer une liaison** s'ouvre dans le [panneau des tâches](/Task_panel/fr "Task panel/fr") avec la liste des entités présélectionnées.
4. Pour les étapes suivantes, voir [Assemblage Liaison fixe](/Assembly_CreateJointFixed/fr#Utilisation "Assembly CreateJointFixed/fr").

## Remarques

* Le rayon primitif fait référence au pas d'une vis (mère). Il est stocké dans Données**Distance** et définit la translation pour un tour de vis.

## Propriétés

Voir aussi : [Éditeur de propriétés](/Property_editor/fr "Property editor/fr")

Un objet **Screw** est dérivé d'un objet [App FeaturePython](/App_FeaturePython/fr "App FeaturePython/fr") et hérite de toutes ses propriétés. Voir [Assembly Liaison fixe](/Assembly_CreateJointFixed/fr#Propriétés "Assembly CreateJointFixed/fr") pour des propriétés supplémentaires.

Retrieved from "<http://wiki.freecad.org/index.php?title=Assembly_CreateJointScrew/fr&oldid=1496014>"