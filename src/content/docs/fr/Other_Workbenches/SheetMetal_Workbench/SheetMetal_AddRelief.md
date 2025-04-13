---
title: SheetMetal Grugeage carré
---

:::caution
Cette documentation n'est pas terminée. Merci de nous aider et de contribuer à la documentation.Modèle GuiCommandexplique comment les commandes doivent être documentées. ParcourezCategory:UnfinishedDocupour voir d'autres pages incomplètes comme celle-ci. VoirCategory:Command_Referencepour toutes les commandes.VoirÉcrire une page Wikipour apprendre à éditer les pages du wiki, et aller àContribuer à FreeCADpour apprendre d'autres façons de contribuer.
:::

|                                                                                                                                                          |
| -------------------------------------------------------------------------------------------------------------------------------------------------------- |
| SheetMetal Grugeage carré                                                                                                                                |
| Emplacement du menu                                                                                                                                      |
| SheetMetal → Créer un grugeage carré                                                                                                                     |
| Ateliers                                                                                                                                                 |
| [SheetMetal](/SheetMetal_Workbench/fr "SheetMetal Workbench/fr")                                                                                         |
| Raccourci par défaut                                                                                                                                     |
| S R                                                                                                                                                      |
| Introduit dans la version                                                                                                                                |
| -                                                                                                                                                        |
| Voir aussi                                                                                                                                               |
| [SheetMetal Découpe d'angle](/SheetMetal_AddJunction/fr "SheetMetal AddJunction/fr"), [SheetMetal Plier](/SheetMetal_AddBend/fr "SheetMetal AddBend/fr") |
|                                                                                                                                                          |

## Description

La commande ![](/images/SheetMetal_AddRelief.svg) SheetMetal Grugeage carré crée des dépouilles d'angle, des découpes, aux points de rencontre de trois sections (base/parois/bords) d'un objet en tôle. Sans ces grugeages, l'objet ne pourra pas être déplié.

Cette commande est la première des trois étapes permettant de convertir un objet coque réalisé avec l'[atelier Part](/Part_Workbench/fr "Part Workbench/fr") ou l'[atelier PartDesign](/PartDesign_Workbench/fr "PartDesign Workbench/fr") en un objet tôle dépliable :

1. SheetMetal Grugeage carré.
2. [SheetMetal Découpe d'angle](/SheetMetal_AddJunction/fr "SheetMetal AddJunction/fr").
3. [SheetMetal Plier](/SheetMetal_AddBend/fr "SheetMetal AddBend/fr").

![](/images/SheetMetal_ConvertShellObject-01.png) ![](/images/Button_right.svg)
![](/images/SheetMetal_ConvertShellObject-02.png)(/SheetMetal_AddRelief "SheetMetal AddRelief") ![](/images/Button_right.svg)
![](/images/SheetMetal_ConvertShellObject-03.png)(/SheetMetal_AddJunction "SheetMetal AddJunction") ![](/images/Button_right.svg)
![](/images/SheetMetal_ConvertShellObject-04.png)(/SheetMetal_AddBend "SheetMetal AddBend")

Créer un grugeage "découpe" des coins

## Utilisation

1. Sélectionnez un ou plusieurs sommets d'angle.
2. Il y a plusieurs façons de lancer la commande :
   - Appuyez sur le bouton ![](/images/SheetMetal_AddRelief.svg) Créer un grugeage carré.
   - Sélectionnez l'option **SheetMetal → ![](/images/SheetMetal_AddRelief.svg) Créer un grugeage carré** du menu.
   - Cliquez avec le bouton droit de la souris dans la [vue en arborescence](/Tree_view/fr "Tree view/fr") ou la [vue 3D](/3D_view/fr "3D view/fr") et sélectionnez l'option **SheetMetal → ![](/images/SheetMetal_AddRelief.svg) Créer un grugeage carré** dans le menu contextuel.
   - Utilisez le raccourci clavier : S puis R.
3. Le [panneau des tâches](/Task_panel/fr "Task panel/fr") **Propriétés du grugeage** s'ouvre (introduit dans la version 0.5.00).
4. Vous pouvez appuyer sur le bouton Sélectionner pour ajouter d'autres sommets.
   - Appuyez sur le bouton Aperçu pour terminer la sélection et afficher les changements.
5. Vous pouvez ajuster les paramètres dans le panneau des tâches.
6. Appuyez sur le bouton OK pour terminer la commande et fermer le panneau des tâches.
7. Un objet **CornerRelief** sera créé, composé d'un nouveau grugeage carré à chaque sommet sélectionné.
8. Vous pouvez ajuster les paramètres dans l'[éditeur de propriétés](/Property_editor/fr "Property editor/fr").

![](/images/SheetMetal_ConvertShellObject-05.png) ![](/images/Button_right.svg)
![](/images/SheetMetal_ConvertShellObject-06.png)

## Remarques

Les commandes ![](/images/SheetMetal_AddRelief.svg) **SheetMetal Grugeage carré**, ![](/images/SheetMetal_AddJunction.svg) **[SheetMetal Découpe d'angle](/SheetMetal_AddJunction/fr "SheetMetal AddJunction/fr")** et ![](/images/SheetMetal_AddBend.svg) **[SheetMetal Plier](/SheetMetal_AddBend/fr "SheetMetal AddBend/fr")** fonctionnent mieux avec des cuboïdes creux, c'est-à-dire des objets en forme de coque avec une épaisseur constante et seulement des angles de 90° entre les faces.

Les objets coques peuvent être créés avec des commandes de l'![](/images/Workbench_Part.svg) [atelier Part](/Part_Workbench/fr "Part Workbench/fr")
ou de l'![](/images/Workbench_PartDesign.svg) [atelier PartDesign](/PartDesign_Workbench/fr "PartDesign Workbench/fr").

Pour créer un cuboïde creux avec l'[atelier Part](/Part_Workbench/fr "Part Workbench/fr") :

1. Créez un solide en utilisant soit :
   - Un ![](/images/Part_Box.svg) [Part Cube](/Part_Box/fr "Part Box/fr").
   - Une ![](/images/Part_Extrude.svg) [Part Extrusion](/Part_Extrude/fr "Part Extrude/fr") à partir de :
     - Un ![](/images/Draft_Rectangle.svg) [Draft Rectangle](/Draft_Rectangle/fr "Draft Rectangle/fr").
     - Une ![](/images/Draft_Wire.svg) [Draft Polyligne](/Draft_Wire/fr "Draft Wire/fr").
     - Une ![](/images/Sketcher_NewSketch.svg) [Esquisse](/Sketcher_NewSketch/fr "Sketcher NewSketch/fr").
2. Utilisez ![](/images/Part_Thickness.svg) [Part Évider](/Part_Thickness/fr "Part Thickness/fr") pour créer un objet coque à partir du solide (typiquement avec la valeur d'épaisseur de la tôle).

Pour créer un cuboïde creux avec l'[atelier PartDesign](/PartDesign_Workbench/fr "PartDesign Workbench/fr") :

1. Créez un solide en utilisant soit :
   - Un ![](/images/PartDesign_AdditiveBox.svg) [Cube additif](/PartDesign_AdditiveBox/fr "PartDesign AdditiveBox/fr").
   - Une ![](/images/PartDesign_Pad.svg) [PartDesign Protrusion](/PartDesign_Pad/fr "PartDesign Pad/fr") à partir d'une ![](/images/Sketcher_NewSketch.svg) [esquisse](/Sketcher_NewSketch/fr "Sketcher NewSketch/fr").
2. Utilisez ![](/images/Part_Thickness.svg) [Part Évider](/Part_Thickness/fr "Part Thickness/fr") pour créer un objet coque à partir du solide (typiquement avec la valeur d'épaisseur de la tôle).

## Propriétés

Voir aussi : [Éditeur de propriétés](/Property_editor/fr "Property editor/fr")

Un objet SheetMetal Relief est dérivé d'un objet [Part Feature](/Part_Feature/fr "Part Feature/fr") ou, s'il se trouve à l'intérieur d'un [PartDesign Corps](/PartDesign_Body/fr "PartDesign Body/fr"), à partir d'un objet [PartDesign Feature](/PartDesign_Feature/fr "PartDesign Feature/fr"), dont il hérite de toutes les propriétés. Il possède également les propriétés supplémentaires suivantes :

### Données

Parameters

- Données**base Object** (`LinkSub`) : objet de base. Liens vers les sommets d'angle définissant les positions de relief.
- Données**relief** (`Length`) : taille du grugeage carré. Valeur par défaut : `2,00 mm`.

Retrieved from "<http://wiki.freecad.org/index.php?title=SheetMetal_AddRelief/fr&oldid=1545969>"
