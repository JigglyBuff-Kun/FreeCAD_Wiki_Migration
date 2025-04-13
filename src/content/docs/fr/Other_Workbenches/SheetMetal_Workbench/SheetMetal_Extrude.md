---
title: SheetMetal Prolonger une face
---

:::caution
Cette documentation n'est pas terminée. Merci de nous aider et de contribuer à la documentation.Modèle GuiCommandexplique comment les commandes doivent être documentées. ParcourezCategory:UnfinishedDocupour voir d'autres pages incomplètes comme celle-ci. VoirCategory:Command_Referencepour toutes les commandes.VoirÉcrire une page Wikipour apprendre à éditer les pages du wiki, et aller àContribuer à FreeCADpour apprendre d'autres façons de contribuer.
:::

|                                                                  |
| ---------------------------------------------------------------- |
| SheetMetal Prolonger une face                                    |
| Emplacement du menu                                              |
| SheetMetal → Prolonger une face                                  |
| Ateliers                                                         |
| [SheetMetal](/SheetMetal_Workbench/fr "SheetMetal Workbench/fr") |
| Raccourci par défaut                                             |
| E                                                                |
| Introduit dans la version                                        |
| -                                                                |
| Voir aussi                                                       |
| _Aucun_                                                          |
|                                                                  |

## Description

La commande ![](/images/SheetMetal_Extrude.svg) **SheetMetal Prolonger une face** prolonge une tôle à partir d'une face de bord sélectionnée.

Elle crée une **extension simple** le long de la normale du bord sélectionné :

![](/images/SheetMetal_Extrude-01.png) ![](/images/Button_right.svg)
![](/images/SheetMetal_Extrude-02.png)

Si une esquisse de contour est ajoutée, elle crée une **géométrie de connexion** pour fermer un profil :

![](/images/SheetMetal_Extrude-05.png) ![](/images/Button_right.svg)
![](/images/SheetMetal_Extrude-04.png)

Trois profils avec des esquisses à ajouter → trois résultats

## Utilisation

### Extension simple

1. Sélectionnez une ou plusieurs faces d'arêtes à étendre.
2. Il y a plusieurs façons de lancer la commande :
   - Appuyez sur le bouton ![](/images/SheetMetal_Extrude.svg) Prolonger une face.
   - Sélectionnez l'option **SheetMetal → ![](/images/SheetMetal_Extrude.svg) Prolonger une face** du menu.
   - Cliquez avec le bouton droit de la souris dans la [vue en arborescence](/Tree_view/fr "Tree view/fr") ou la [vue 3D](/3D_view/fr "3D view/fr") et sélectionnez l'option **SheetMetal → ![](/images/SheetMetal_Extrude.svg) Prolonger une face** dans le menu contextuel.
   - Utilisez le raccourci clavier : E.
3. Un objet **Extend** sera créé et le [panneau des tâches](/Task_panel/fr "Task panel/fr") **Propriétés de l'extension** s'ouvrira (introduit dans la version 0.5.00).

   : A chaque face sélectionnée, une nouvelle extension de face est extrudée.

4. Vous pouvez appuyer sur le bouton Sélectionner pour ajouter ou supprimer des faces.
   - Appuyez sur le bouton Aperçu pour terminer la sélection et afficher les changements.
5. Définissez les paramètres dans le panneau des tâches.
6. Appuyez sur le bouton OK pour terminer la commande et fermer le panneau des tâches.
7. Vous pouvez ajuster les paramètres dans l'[éditeur de propriétés](/Property_editor/fr "Property editor/fr").

### Panneau des tâches

Un [panneau des tâches](/Task_panel/fr "Task panel/fr") a été introduit dans la version 0.5.00

Double-cliquez sur un objet Extend existant dans la [vue en arborescence](/Tree_view/fr "Tree view/fr") pour ouvrir de nouveau le panneau des tâches et modifier les paramètres.

![](/images/SheetMetal_Extrude-Task.png)

- Sélectionner : modifie la quantité de faces dans la propriété **Base Object**.
- **Longueur** : définit la propriété **length**.
- **Décalage A** : Fixe la propriété **gap 1**.
- **Décalage B** : définit la propriété **gap 2**.
- **Amélioration** : active/désactive la propriété **Refine**.

### Extension de connexion

: (Préparez une ![](/images/Workbench_Sketcher.svg) [esquisse](/Sketcher_Workbench/fr "Sketcher Workbench/fr") pour l'emboîtement des profils)

1. Sélectionnez la face de l'arête à prolonger.
2. Lancez la commande comme décrit ci-dessus.
3. Appuyez sur le bouton OK pour terminer la commande et fermer le panneau des tâches.
4. Dans l'éditeur de propriétés, appuyez sur le bouton ... de la propriété Données**Sketch**.
5. La fenêtre de dialogue Lien s'ouvre.
   - Sélectionnez l'esquisse préparée dans la liste
   - Appuyez sur le bouton OK pour fermer la boîte de dialogue.
6. Définissez la propriété Données**Use Subtraction** sur `true` pour créer des découpes afin de faire de la place pour les extensions.
7. Définissez la propriété Données**Offset** pour ajuster le dégagement autour de l'extension.

![](/images/SheetMetal_Extrude-03.png) ![](/images/Button_right.svg)
![](/images/SheetMetal_Extrude-05.png) ![](/images/Button_right.svg)
![](/images/SheetMetal_Extrude-06.png) ![](/images/Button_right.svg)
![](/images/SheetMetal_Extrude-04.png)

Trois profils → position des esquisses → résultats sans découpes → résultats finaux

### Remarques

- Une esquisse peut contenir plus d'un contour.

: Après avoir inséré une esquisse, l'un de ses contours au moins doit toucher une face opposée, sinon l'outil ne parviendra pas à créer une extension ou une découpe.

: Un seul contour touchant une face opposée suffit à créer une géométrie d'extension à partir de tous les contours de l'esquisse.

- Chaque découpe aura une forme cuboïde, quelle que soit la forme de l'esquisse du contour correspondant.

- Les formes autres que les rectangles peuvent se comporter de manière un peu étrange et même si l'objet peut être déplié, le résultat ne sera pas celui escompté.

![](/images/SheetMetal_Extrude-07.png) ![](/images/Button_right.svg)
![](/images/SheetMetal_Extrude-08.png)

Trois esquisses et leurs extensions résultantes : plaque triangulaire séparée avec une découpe rectangulaire, cercle sans dégagement → le solide non plié est divisé à une position inattendue

- Dans une opération d'extension, il est recommandé de laisser la propriété Données**Refine** définie sur `true` (par défaut).

- L'opération d'extension avec une esquisse liée peut échouer en raison de problèmes de coplanarité si la face du côté de l'esquisse et la face du côté opposé sont coplanaires, mais avec des orientations opposées. Un petit décalage peut aider dans un tel cas.

## Propriétés

Voir aussi : [Éditeur de propriétés](/Property_editor/fr "Property editor/fr")

Un objet SheetMetal Extend est dérivé d'un objet [Part Feature](/Part_Feature/fr "Part Feature/fr") ou, s'il se trouve à l'intérieur d'un [PartDesign Corps](/PartDesign_Body/fr "PartDesign Body/fr"), à partir d'un objet [PartDesign Feature](/PartDesign_Feature/fr "PartDesign Feature/fr"), dont il hérite de toutes les propriétés. Il possède également les propriétés supplémentaires suivantes :

### Données

Parameters

- Données**base Object** (`LinkSub`) : objet de base. Lien vers la face plane à étendre.
- Données**gap1** (`Distance`) : espace par rapport au côté gauche. Valeur par défaut : `0,00 mm`.
- Données**gap2** (`Distance`) : espace par rapport au côté droit. Valeur par défaut : `0,00 mm`.
- Données**length** (`Length`) : longueur de la paroi. Valeur par défaut : `10,00 mm`.

Parameters Ext.

- Données**Offset** (`Distance`) : décaler la soustraction. Valeur par défaut : `20,00 µm`.
- Données**Refine** (`Bool`) : utiliser l'amélioration. Valeur par défaut : `true`.
- Données**Sketch** (`Link`) : esquisse de la paroi.
- Données**Use Subtraction** (`Bool`) : utiliser la soustraction. Valeur par défaut : `false`.

Retrieved from "<http://wiki.freecad.org/index.php?title=SheetMetal_Extrude/fr&oldid=1545965>"
