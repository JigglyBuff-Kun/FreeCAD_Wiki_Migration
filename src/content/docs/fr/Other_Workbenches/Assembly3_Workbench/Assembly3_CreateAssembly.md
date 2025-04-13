---
title: Assembly3 Créer un assemblage
---
:::caution
Cette documentation n'est pas terminée. Merci de nous aider et de contribuer à la documentation.Modèle GuiCommandexplique comment les commandes doivent être documentées. ParcourezCategory:UnfinishedDocupour voir d'autres pages incomplètes comme celle-ci. VoirCategory:Command\_Referencepour toutes les commandes.VoirÉcrire une page Wikipour apprendre à éditer les pages du wiki, et aller àContribuer à FreeCADpour apprendre d'autres façons de contribuer.
:::

|  |
| --- |
| Assembly3 Créer un assemblage |
| Emplacement du menu |
| Assembly3 → Create assembly |
| Ateliers |
| [Assembly3](/Assembly3_Workbench/fr "Assembly3 Workbench/fr") |
| Raccourci par défaut |
| A N |
| Introduit dans la version |
| - |
| Voir aussi |
| *Aucun* |
|  |

## Description

La commande ![](/images/Assembly_New_Assembly.svg) **Créer un assemblage** ajoute un nouvel objet à la branche **Assembly** à l'arborescence du modèle.

Chaque objet de la branche est un ![](/images/Assembly_Assembly_Tree.svg) un conteneur **Assembly** et contient quatre conteneurs de groupe :

:   - un pour les ![](/images/Assembly_Assembly_Constraints_Tree.svg) **Contraintes** (caché tant qu'il est vide)
:   - Un pour les ![](/images/Assembly_Assembly_Element_Tree.svg) **Eléments**
:   - Un pour les ![](/images/Assembly_Assembly_Part_Tree.svg) **Pièces**
:   - Un pour les ![](/images/Assembly_Assembly_Relation_Tree.svg) **Relations** (cachées par défaut et qui seront révélées lorsque ![](/images/Assembly_GotoRelation.svg) [Relations](/Assembly3_GoToRelation/fr "Assembly3 GoToRelation/fr") est utilisé.)

L'objet **Assembly** ajouté avec tous les conteneurs visibles ressemble à ceci (0.20.pre et Link Branch) :

![](/images/Assembly3_Example-Tree-07.png) ![](/images/Assembly3_Example-Tree-08.png)

## Utilisation

1. Il y a plusieurs façons de lancer la commande :
   * Appuyez sur le bouton ![](/images/Assembly_New_Assembly.svg) Create assembly.
   * Sélectionnez l'option **Assembly3 → ![](/images/Assembly_New_Assembly.svg) Create assembly** du menu.
   * Utiliser le raccourci clavier A puis N
2. Un conteneur Assembly est créé.

Retrieved from "<http://wiki.freecad.org/index.php?title=Assembly3_CreateAssembly/fr&oldid=1508587>"