---
title: SheetMetal Tôle de base
---

:::caution
This documentation is not finished. Please help and contribute documentation.GuiCommand modelexplains how commands should be documented. BrowseCategory:UnfinishedDocuto see more incomplete pages like this one. SeeCategory:Command Referencefor all commands.SeeWikiPagesto learn about editing the wiki pages, and go toHelp FreeCADto learn about other ways in which you can contribute.
:::

|                                                                  |
| ---------------------------------------------------------------- |
| SheetMetal Tôle de base                                          |
| Emplacement du menu                                              |
| SheetMetal → Créer une paroi/tôle                                |
| Ateliers                                                         |
| [SheetMetal](/SheetMetal_Workbench/fr "SheetMetal Workbench/fr") |
| Raccourci par défaut                                             |
| C B                                                              |
| Introduit dans la version                                        |
| -                                                                |
| Voir aussi                                                       |
| _Aucun_                                                          |
|                                                                  |

## Description

La commande ![](/images/SheetMetal_AddBase.svg) **SheetMetal Tôle de base** crée un objet de base SheetMetal à partir d'une esquisse.

A partir d'un contour ouvert, il crée un **profil** extrudé :

![](/images/SheetMetal_AddBase-01.png) ![](/images/Button_right.svg)
![](/images/SheetMetal_AddBase-02.png)

A partir d'un contour fermé, il crée une **tôle** de base (vide) :

![](/images/SheetMetal_AddBase-03.png) ![](/images/Button_right.svg)
![](/images/SheetMetal_AddBase-04.png)

## Utilisation

### Profilage

1. Sélectionnez une ![](/images/Workbench_Sketcher.svg) [esquisse](/Sketcher_Workbench/fr "Sketcher Workbench/fr") à **contour ouvert**.
2. Il y a plusieurs façons de lancer la commande :
   - Appuyez sur le bouton ![](/images/SheetMetal_AddBase.svg) Créer une paroi/tôle.
   - Sélectionnez l'option **SheetMetal → ![](/images/SheetMetal_AddBase.svg) Créer une paroi/tôle** du menu.
   - Utilisez le raccourci clavier : C puis B.
   - Cliquez avec le bouton droit de la souris dans la [vue en arborescence](/Tree_view/fr "Tree view/fr") ou la [vue 3D](/3D_view/fr "3D view/fr") et sélectionnez l'option **SheetMetal → ![](/images/SheetMetal_AddBase.svg) Créer une paroi/tôle** dans le menu contextuel.
3. Un objet **BaseBend** est créé et le [panneau des tâches](/Task_panel/fr "Task panel/fr") **Propriétés de l'esquisse de base** s'ouvre.

   : Les coins du contour seront automatiquement convertis en plis arrondis.

4. Vous pouvez appuyez sur le bouton Esquisse et sélectionner une autre esquisse.
5. Définissez les paramètres du profil dans le panneau des tâches.
6. Appuyez sur le bouton OK pour fermer le panneau des tâches et terminer la commande.
7. Vous pouvez ajuster les paramètres du profil dans l'[éditeur de propriétés](/Property_editor/fr "Property editor/fr").

### Tôle

1. Sélectionnez une ![](/images/Workbench_Sketcher.svg) [esquisse](/Sketcher_Workbench/fr "Sketcher Workbench/fr") à **contour fermé**.
2. Lancez la commande comme décrit ci-dessus.
3. Un objet **BaseBend** est créé et le [panneau des tâches](/Task_panel/fr "Task panel/fr") **Générer une forme de base de la tôle** s'ouvre.
4. Vous pouvez appuyez sur le bouton Esquisse et sélectionner une autre esquisse.
5. Définissez les paramètres de la tôle dans le panneau des tâches.
6. Appuyez sur le bouton OK pour fermer le panneau des tâches et terminer la commande.
7. Vous pouvez ajuster les paramètres de la tôle dans l'[éditeur de propriétés](/Property_editor/fr "Property editor/fr").

### Panneau des tâches

Un panneau de tâches a été introduit dans la version 0.6.01

Double-cliquez sur un objet BaseBend existant dans la [vue en arborescence](/Tree_view/fr "Tree view/fr") pour ouvrir de nouveau le panneau des tâches et modifier les paramètres.

![](/images/SheetMetal_AddBase-Task.png)

- Esquisse : associe une esquisse différente à la propriété **Bend Sketch**.
- **Plan du pliage** : définit la propriété **Bend Side**
- **Rayon** : définit la propriété **Radius**.
- **Épaisseur** : définit la propriété **Thickness**.
- **Longueur** : définit la propriété **Length**.
- **Symétrique** : active/désactive la propriété **Mid Plane**.
- **Direction inverse** : active/désactive la propriété **Reverse** (caché si “”'Symétrique'“” est coché).

Les dernières valeurs saisies pour le rayon et l'épaisseur seront enregistrées comme valeurs par défaut pour le objet BaseBend suivant.

## Propriétés

Voir aussi: [Éditeur de propriétés](/Property_editor/fr "Property editor/fr")

Un objet SheetMetal BaseBend est dérivé d'un objet [Part Feature](/Part_Feature/fr "Part Feature/fr") ou, s'il se trouve à l'intérieur d'un [PartDesign Corps](/PartDesign_Body/fr "PartDesign Body/fr"), à partir d'un objet [PartDesign Feature](/PartDesign_Feature/fr "PartDesign Feature/fr"), dont il hérite de toutes les propriétés. Il possède également les propriétés supplémentaires suivantes :

### Données

Parameters

- Données**Bend Side** (`Enumeration`) : plan de pliage, définit de quel côté d'une courbe de profil l'épaisseur s'applique. `Outside` (par défaut), `Inside`, `Middle` (non utilisé pour les tôles).
- Données**Bend Sketch** (`Link`) : objet esquisse de la paroi. Lien vers l'esquisse du profil/contour.
- Données**Length** (`Length`) : longueur d'extrusion d'un profil. Par défaut : `100,00 mm` (non utilisé pour les plaques).
- Données**Mid Plane** (`Bool`) : extrusion symétrique par rapport au plan, longueur d'un profil ou l'épaisseur d'une tôle s'étend d'un côté du plan de l'esquisse si `false` (par défaut) ou symétriquement par rapport au plan de l'esquisse. (par défaut) ou symétriquement des deux côtés si `true`.
- Données**Radius** (`Length`) : rayon intérieur des plis ajoutés automatiquement. Par défaut : `1,00 mm` (non utilisé pour les plaques).
- Données**Reverse** (`Bool`) : inverse la direction de l'extrusion d'un profil ou de l'épaisseur d'une tôle. Valeur par défaut : `false`.
- Données**thickness** (`Length`) : épaisseur de la paroi d'un profilé ou d'une tôle. Valeur par défaut : `1,00 mm`.

Retrieved from "<http://wiki.freecad.org/index.php?title=SheetMetal_AddBase/fr&oldid=1545959>"
