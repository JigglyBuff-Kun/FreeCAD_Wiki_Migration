---
title: SheetMetal Plier
---

:::caution
Cette documentation n'est pas terminée. Merci de nous aider et de contribuer à la documentation.Modèle GuiCommandexplique comment les commandes doivent être documentées. ParcourezCategory:UnfinishedDocupour voir d'autres pages incomplètes comme celle-ci. VoirCategory:Command_Referencepour toutes les commandes.VoirÉcrire une page Wikipour apprendre à éditer les pages du wiki, et aller àContribuer à FreeCADpour apprendre d'autres façons de contribuer.
:::

|                                                                                                                                                                       |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| SheetMetal Plier                                                                                                                                                      |
| Emplacement du menu                                                                                                                                                   |
| SheetMetal → Créer un pliage                                                                                                                                          |
| Ateliers                                                                                                                                                              |
| [SheetMetal](/SheetMetal_Workbench/fr "SheetMetal Workbench/fr")                                                                                                      |
| Raccourci par défaut                                                                                                                                                  |
| S B                                                                                                                                                                   |
| Introduit dans la version                                                                                                                                             |
| -                                                                                                                                                                     |
| Voir aussi                                                                                                                                                            |
| [SheetMetal Grugeage carré](/SheetMetal_AddRelief/fr "SheetMetal AddRelief/fr"), [SheetMetal Découpe d'angle](/SheetMetal_AddJunction/fr "SheetMetal AddJunction/fr") |
|                                                                                                                                                                       |

## Description

La commande ![](/images/SheetMetal_AddBend.svg) SheetMetal Plier remplace les arêtes vives entre deux sections (base/parois/bords) d'un objet en tôle par des plis arrondis. Sans ces plis, l'objet ne sera pas dépliable.

Cette commande est la troisième des trois étapes permettant de convertir un objet coque réalisé avec l'[atelier Part Workbench](/Part_Workbench/fr "Part Workbench/fr") ou l'[atelier PartDesign](/PartDesign_Workbench/fr "PartDesign Workbench/fr") en un objet tôle dépliable :

1. [SheetMetal Grugeage carré](/SheetMetal_AddRelief/fr "SheetMetal AddRelief/fr").
2. [SheetMetal Découpe d'angle](/SheetMetal_AddJunction/fr "SheetMetal AddJunction/fr").
3. SheetMetal Plier.

![](/images/SheetMetal_ConvertShellObject-01.png) ![](/images/Button_right.svg)
![](/images/SheetMetal_ConvertShellObject-02.png)(/SheetMetal_AddRelief "SheetMetal AddRelief") ![](/images/Button_right.svg)
![](/images/SheetMetal_ConvertShellObject-03.png)(/SheetMetal_AddJunction "SheetMetal AddJunction") ![](/images/Button_right.svg)
![](/images/SheetMetal_ConvertShellObject-04.png)

Make Bend - remplace les bords par des plis

## Utilisation

1. Sélectionnez une ou plusieurs arêtes.
2. Il y a plusieurs façons de lancer la commande :
   - Appuyez sur le bouton ![](/images/SheetMetal_AddBend.svg) Créer un pliage.
   - Sélectionnez l'option **SheetMetal → ![](/images/SheetMetal_AddBend.svg) Créer un pliage** du menu.
   - Cliquez avec le bouton droit de la souris dans la [vue en arborescence](/Tree_view/fr "Tree view/fr") ou la [vue 3D](/3D_view/fr "3D view/fr") et sélectionnez l'option **SheetMetal → ![](/images/SheetMetal_AddBend.svg) Créer un pliage** dans le menu contextuel.
   - Utilisez le raccourci clavier : S puis B.
3. Le [panneau des tâches](/Task_panel/fr "Task panel/fr") **Propriétés du pliage des angles vifs** s'ouvre (introduit dans la version 0.5.00).
4. Vous pouvez appuyer sur le bouton Sélectionner pour ajouter d'autres faces.
   - Appuyez sur le bouton Aperçu pour terminer la sélection et afficher les changements.
5. Vous pouvez ajuster les paramètres dans le panneau des tâches.
6. Appuyez sur le bouton OK pour terminer la commande et fermer le panneau des tâches.
7. Un objet **SolidBend** sera créé et consistera en une nouvelle courbure à chaque arête sélectionnée.
8. Vous pouvez ajuster les paramètres dans l'[éditeur de propriétés](/Property_editor/fr "Property editor/fr").

![](/images/SheetMetal_ConvertShellObject-07.png) ![](/images/Button_right.svg)
![](/images/SheetMetal_ConvertShellObject-08.png)

## Remarques

Les commandes ![](/images/SheetMetal_AddRelief.svg) **[SheetMetal Grugeage carré](/SheetMetal_AddRelief/fr "SheetMetal AddRelief/fr")**, ![](/images/SheetMetal_AddJunction.svg) **[SheetMetal Découpe d'angle](/SheetMetal_AddJunction/fr "SheetMetal AddJunction/fr")** et ![](/images/SheetMetal_AddBend.svg) **SheetMetal Plier** fonctionnent mieux avec des cuboïdes creux, c'est-à-dire des objets en forme de coque avec une épaisseur constante et seulement des angles de 90° entre les faces.

Voir [SheetMetal Grugeage carré](/SheetMetal_AddRelief/fr#Remarque "SheetMetal AddRelief/fr") pour des conseils sur la création d'objets coques de cuboïdes.

## Propriétés

Voir aussi: [Éditeur de propriétés](/Property_editor/fr "Property editor/fr")

Un objet SheetMetal SolidBend est dérivé d'un objet [Part Feature](/Part_Feature/fr "Part Feature/fr") ou, s'il se trouve à l'intérieur d'un [PartDesign Corps](/PartDesign_Body/fr "PartDesign Body/fr"), à partir d'un objet [PartDesign Feature](/PartDesign_Feature/fr "PartDesign Feature/fr"), dont il hérite de toutes les propriétés. Il possède également les propriétés supplémentaires suivantes :

### Données

Parameters

- Données**base Object** (`LinkSub`) : objet de base. Liens vers les arêtes à plier.
- Données**radius** (`Length`) : rayon de courbure. Valeur par défaut : `1,00 mm`.
- Données**thickness** (`Length`) : épaisseur de la tôle. Valeur par défaut : `1,00 mm`.

Retrieved from "<http://wiki.freecad.org/index.php?title=SheetMetal_AddBend/fr&oldid=1545957>"
