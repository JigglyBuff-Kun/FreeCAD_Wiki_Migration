---
title: SheetMetal Découpe d'angle
---

:::caution
Cette documentation n'est pas terminée. Merci de nous aider et de contribuer à la documentation.Modèle GuiCommandexplique comment les commandes doivent être documentées. ParcourezCategory:UnfinishedDocupour voir d'autres pages incomplètes comme celle-ci. VoirCategory:Command_Referencepour toutes les commandes.VoirÉcrire une page Wikipour apprendre à éditer les pages du wiki, et aller àContribuer à FreeCADpour apprendre d'autres façons de contribuer.
:::

|                                                                                                                                                     |
| --------------------------------------------------------------------------------------------------------------------------------------------------- |
| SheetMetal Découpe d'angle                                                                                                                          |
| Emplacement du menu                                                                                                                                 |
| SheetMetal → Créer une découpe d'angle                                                                                                              |
| Ateliers                                                                                                                                            |
| [SheetMetal](/SheetMetal_Workbench/fr "SheetMetal Workbench/fr")                                                                                    |
| Raccourci par défaut                                                                                                                                |
| S J                                                                                                                                                 |
| Introduit dans la version                                                                                                                           |
| -                                                                                                                                                   |
| Voir aussi                                                                                                                                          |
| [SheetMetal Grugeage carré](/SheetMetal_AddRelief/fr "SheetMetal AddRelief/fr"), [SheetMetal Plier](/SheetMetal_AddBend/fr "SheetMetal AddBend/fr") |
|                                                                                                                                                     |

## Description

La commande ![](/images/SheetMetal_AddJunction.svg) SheetMetal Découpe d'angle crée des jonctions ouvertes entre deux sections (parois/bords) d'un objet en tôle. Sans ces jonctions, les sections de tôle reliées à la même base ne seront pas dépliables.

Cette commande est la deuxième des trois étapes permettant de convertir un objet coque réalisé avec l'[atelier Part](/Part_Workbench/fr "Part Workbench/fr") ou l'[atelier PartDesign](/PartDesign_Workbench/fr "PartDesign Workbench/fr") en un objet tôle dépliable :

1. [SheetMetal Grugeage carré](/SheetMetal_AddRelief/fr "SheetMetal AddRelief/fr").
2. SheetMetal Découpe d'angle.
3. [SheetMetal Plier](/SheetMetal_AddBend/fr "SheetMetal AddBend/fr").

![](/images/SheetMetal_ConvertShellObject-01.png) ![](/images/Button_right.svg)
![](/images/SheetMetal_ConvertShellObject-02.png)(/SheetMetal_AddRelief "SheetMetal AddRelief") ![](/images/Button_right.svg)
![](/images/SheetMetal_ConvertShellObject-03.png)(/SheetMetal_AddJunction "SheetMetal AddJunction") ![](/images/Button_right.svg)
![](/images/SheetMetal_ConvertShellObject-04.png)(/SheetMetal_AddBend "SheetMetal AddBend")

Créer une découpe d'angle "ouvre" les bords

## Utilisation

1. Sélectionnez une ou plusieurs arêtes.
2. Il y a plusieurs façons de lancer la commande :
   - Appuyez sur le bouton ![](/images/SheetMetal_AddJunction.svg) Créer une découpe d'angle.
   - Sélectionnez l'option **SheetMetal → ![](/images/SheetMetal_AddJunction.svg) Créer une découpe d'angle** du menu.
   - Cliquez avec le bouton droit de la souris dans la [vue en arborescence](/Tree_view/fr "Tree view/fr") ou la [vue 3D](/3D_view/fr "3D view/fr") et sélectionnez l'option **SheetMetal → ![](/images/SheetMetal_AddJunction.svg) Créer une découpe d'angle** dans le menu contextuel.
   - Utilisez le raccourci clavier : S puis J.
3. Le [panneau des tâches](/Task_panel/fr "Task panel/fr") **Propriétés de la découpe d'angle** s'ouvre (introduit dans la version 0.5.00).
4. Vous pouvez appuyer sur le bouton Sélectionner pour ajouter d'autres faces.
   - Appuyez sur le bouton Aperçu pour terminer la sélection et afficher les changements.
5. Vous pouvez ajuster les paramètres dans le panneau des tâches.
6. Appuyez sur le bouton OK pour terminer la commande et fermer le panneau des tâches.
7. Un objet **Junction** sera créé, composé d'une ouverture à chaque bord sélectionné.
8. Vous pouvez ajuster les paramètres dans l'[éditeur de propriétés](/Property_editor/fr "Property editor/fr").

![](/images/SheetMetal_ConvertShellObject-06.png) ![](/images/Button_right.svg)
![](/images/SheetMetal_ConvertShellObject-07.png)

## Remarques

- Les commandes ![](/images/SheetMetal_AddRelief.svg) **[SheetMetal Grugeage carré](/SheetMetal_AddRelief/fr "SheetMetal AddRelief/fr")**, ![](/images/SheetMetal_AddJunction.svg) **SheetMetal Découpe d'angle** et ![](/images/SheetMetal_AddBend.svg) **[SheetMetal Plier](/SheetMetal_AddBend/fr "SheetMetal AddBend/fr")** fonctionnent mieux avec des cuboïdes creux, c'est-à-dire des objets en forme de coque avec une épaisseur constante et seulement des angles de 90° entre les faces.
- Voir [SheetMetal Grugeage carré](/SheetMetal_AddRelief/fr#Remarques "SheetMetal AddRelief/fr") pour des conseils sur la création d'objets coques de cuboïdes.

- Dans ce cas, la _jonction_ n'est pas le résultat de cet outil, qui est un espace entre des faces planes adjacentes, mais décrit plutôt l'endroit où deux faces planes de l'objet fini du monde réel se rencontrent, pour être soudées, par exemple.

## Propriétés

Voir aussi : [Éditeur de propriétés](/Property_editor/fr "Property editor/fr")

Un objet SheetMetal Junction est dérivé d'un objet [Part Feature](/Part_Feature/fr "Part Feature/fr") ou, s'il se trouve à l'intérieur d'un [PartDesign Corps](/PartDesign_Body/fr "PartDesign Body/fr"), à partir d'un objet [PartDesign Feature](/PartDesign_Feature/fr "PartDesign Feature/fr"), dont il hérite de toutes les propriétés. Il possède également les propriétés supplémentaires suivantes :

### Données

Parameters

- Données**base Object** (`LinkSub`) : objet de base. Liens vers les arêtes définissant les positions des découpes.
- Données**gap** (`Length`) : taille de la découpe. Valeur par défaut : `2,00 mm`.

Retrieved from "<http://wiki.freecad.org/index.php?title=SheetMetal_AddJunction/fr&oldid=1545949>"
