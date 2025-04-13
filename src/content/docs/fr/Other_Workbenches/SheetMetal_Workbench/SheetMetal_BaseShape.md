---
title: SheetMetal Forme de base
---
:::caution
This documentation is not finished. Please help and contribute documentation.GuiCommand modelexplains how commands should be documented. BrowseCategory:UnfinishedDocuto see more incomplete pages like this one. SeeCategory:Command Referencefor all commands.SeeWikiPagesto learn about editing the wiki pages, and go toHelp FreeCADto learn about other ways in which you can contribute.
:::

|  |
| --- |
| SheetMetal Forme de base |
| Emplacement du menu |
| SheetMetal → Créer une forme de base |
| Ateliers |
| [SheetMetal](/SheetMetal_Workbench/fr "SheetMetal Workbench/fr") |
| Raccourci par défaut |
| H |
| Introduit dans la version |
| 0.3.10 |
| Voir aussi |
| *Aucun* |
|  |

## Description

La commande ![](/images/SheetMetal_BaseShape.svg) **SheetMetal Forme de base** crée un objet SheetMetal BaseShape à partir de paramètres.

![](/images/SheetMetal_BaseShape-01.png)

Les cinq formes de base disponibles : forme en L, forme en U, forme en baignoire, forme en chapeau et boîte

Une sixième forme rectangulaire, appelée Plat, a été introduite dans la version 0.4.10.

## Utilisation

1. Il y a plusieurs façons de lancer la commande :
   * Appuyez sur le bouton ![](/images/SheetMetal_BaseShape.svg) Créer une forme de base.
   * Sélectionnez l'option **SheetMetal → ![](/images/SheetMetal_BaseShape.svg) Créer une forme de base** du menu.
   * Cliquez avec le bouton droit de la souris dans la [vue en arborescence](/Tree_view/fr "Tree view/fr") ou la [vue 3D](/3D_view/fr "3D view/fr") et sélectionnez l'option **SheetMetal → ![](/images/SheetMetal_BaseShape.svg) Créer une forme de base** dans le menu contextuel.
   * Utilisez le raccourci clavier : H.
2. Le [panneau des tâches](/Task_panel/fr "Task panel/fr") **Propriétés de la tôle de la base** s'ouvre.
3. Sélectionnez la forme souhaitée dans les options **Type de forme de base**.
4. Sélectionnez la position de l'origine dans le widget **Emplacement de l'origine de la pièce**.
5. Vous pouvez ajuster les paramètres dans le panneau des tâches.
6. Appuyez sur le bouton OK pour terminer la commande et fermer le panneau des tâches.
7. Un objet **BaseShape** sera créé.
8. Vous pouvez ajuster les paramètres dans l'[éditeur de propriétés](/Property_editor/fr "Property editor/fr").

## Propriétés

Voir aussi : [Éditeur de propriétés](/Property_editor/fr "Property editor/fr")

Un objet SheetMetal BaseShape est dérivé d'un objet [Part Feature](/Part_Feature/fr "Part Feature/fr") ou, s'il se trouve à l'intérieur d'un [PartDesign Corps](/PartDesign_Body/fr "PartDesign Body/fr"), à partir d'un objet [PartDesign Feature](/PartDesign_Feature/fr "PartDesign Feature/fr"), dont il hérite de toutes les propriétés. Il possède également les propriétés supplémentaires suivantes :

### Données

Parameters

* Données**fill Gaps** (`Bool`) : prolonge les côtés et les rebords pour combler tous les espaces. Valeur par défaut : `true`.
* Données**flangeWidth** (`Length`) : largeur du rebord supérieure. Valeur par défaut : `5,00 mm`.
* Données**height** (`Length`) : hauteur de la forme. Valeur par défaut : `10,00 mm`.
* Données**length** (`Length`) : longueur de la forme. Valeur par défaut : `30,00 mm`.
* Données**origin Loc** (`Enumeration`) : position de l'origine.

  :   `-X,-Y`, `-X,0`, `-X,+Y`, `0,-Y`, `0,0` (valeur par défaut), `0,+Y`, `+X,-Y`, `+X,0` et `+X,+Y`.
* Données**radius** (`Length`) : rayon de courbure. Valeur par défaut : `1,00 mm`.
* Données**shape Type** (`Enumeration`) : type de forme de base.

  :   `Flat` (introduite dans la V0.4.10), `L-Shape` (valeur par défaut), `U-Shape`, `Tub`, `Hat` et `Box`.
* Données**thickness** (`Length`) : épaisseur de la tôle. Valeur par défaut : `1,00 mm`.
* Données**width** (`Length`) : largeur de la forme. Valeur par défaut : `20,00 mm`.

Retrieved from "<http://wiki.freecad.org/index.php?title=SheetMetal_BaseShape/fr&oldid=1545020>"