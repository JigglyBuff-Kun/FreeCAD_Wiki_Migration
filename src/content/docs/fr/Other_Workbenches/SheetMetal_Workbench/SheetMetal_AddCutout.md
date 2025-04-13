---
title: SheetMetal Découpe extrudée
---
:::caution
Cette documentation n'est pas terminée. Merci de nous aider et de contribuer à la documentation.Modèle GuiCommandexplique comment les commandes doivent être documentées. ParcourezCategory:UnfinishedDocupour voir d'autres pages incomplètes comme celle-ci. VoirCategory:Command\_Referencepour toutes les commandes.VoirÉcrire une page Wikipour apprendre à éditer les pages du wiki, et aller àContribuer à FreeCADpour apprendre d'autres façons de contribuer.
:::

|  |
| --- |
| SheetMetal Découpe extrudée |
| Emplacement du menu |
| SheetMetal → Découpe extrudée |
| Ateliers |
| [SheetMetal](/SheetMetal_Workbench/fr "SheetMetal Workbench/fr") |
| Raccourci par défaut |
| E C |
| Introduit dans la version |
| 0.5.04 |
| Voir aussi |
| *Aucun* |
|  |

## Description

La commande ![](/images/SheetMetal_AddCutout.svg) SheetMetal Découpe extrudée crée une découpe extrudée à partir d'une extrusion d'esquisse.

La différence entre une découpe "normale" et une découpe extrudée est que, dans ce dernier cas, les bords sont perpendiculaires à la face sélectionnée de l'objet en tôle. L'effet de la commande n'est visible que si l'esquisse n'est pas parallèle à la face.

![](/images/SheetMetal_AddCutout_Example.png)

Une découpe extrudée basée sur une esquisse circulaire

## Utilisation

1. Sélectionnez une face plane et une esquisse avec un contour fermé (dans n'importe quel ordre).
2. Il y a plusieurs façons de lancer la commande :
   * Appuyez sur le ![](/images/SheetMetal_AddCutout.svg) Découpe extrudée.
   * Sélectionnez l'option **SheetMetal → ![](/images/SheetMetal_AddCutout.svg) Découpe extrudée** du menu.
   * Cliquez avec le bouton droit de la souris dans la [vue en arborescence](/Tree_view/fr "Tree view/fr") ou la [vue 3D](/3D_view/fr "3D view/fr") et sélectionnez l'option **SheetMetal → ![](/images/SheetMetal_AddCutout.svg) Découpe extrudée** dans le menu contextuel.
   * Utilisez le raccourci clavier : E puis C.
3. Le [panneau des tâches](/Task_panel/fr "Task panel/fr") **Proprétés de la découpe extrudée** s'ouvre.
4. Vous pouvez appuyer sur le bouton Face pour resélectionner la face plane.
5. Vous pouvez appuyer sur le bouton Esquisse pour resélectionner une esquisse.
6. Vous pouvez ajuster les paramètres dans le panneau des tâches.
7. Appuyez sur le bouton OK pour terminer la commande et fermer le panneau des tâches.
8. Un objet **ExtrudedCutout** sera créé et consistera en un ou plusieurs trous dans une ligne à travers l'objet.
9. Vous pouvez ajuster les paramètres dans l'[éditeur de propriétés](/Property_editor/fr "Property editor/fr").

## Propriétés

Voir aussi : [Éditeur de propriétés](/Property_editor/fr "Property editor/fr")

Un objet SheetMetal ExtrudedCutout est dérivé d'un objet [Part Feature](/Part_Feature/fr "Part Feature/fr") ou, s'il se trouve à l'intérieur d'un [PartDesign Corps](/PartDesign_Body/fr "PartDesign Body/fr"), à partir d'un objet [PartDesign Feature](/PartDesign_Feature/fr "PartDesign Feature/fr"), dont il hérite de toutes les propriétés. Il possède également les propriétés supplémentaires suivantes :

### Données

Extruded Cutout

* Données**Cut Side** (`Enumeration`) : valeur par défaut `Inside`. Côté de la coupe.
* Données**Cut Type** (`Enumeration`) : valeur par défaut `Through everything both sides`. Type de coupe.
* Données (hidden)**Extrusion Length1** (`Length`) : valeur par défaut `500.0 mm`. Longueur de la direction de l'extrusion 1.
* Données (hidden)**Extrusion Length2** (`Length`) : valeur par défaut `500.0 mm`. Longueur de la direction de l'extrusion 2.
* Données**Selected Face** (`LinkSub`) : l'objet et la face sélectionnés.
* Données**Sketch** (`Link`) : esquisse de la découpe.

Extruded Cutout Improvements

* Données**Improve Cut** (`Bool`) : valeur par défaut `False`. Améliore la géométrie de la découpe si elle entre dans la zone de coupe. Ne sélectionnez `True` que si la découpe a besoin d'être corrigée, car elle peut être lente.
* Données (hidden)**Improve Level** (`IntegerConstraint`) : valeur par défaut `4`. Niveau d'amélioration de la qualité de la coupe. Plus de 10 peut prendre beaucoup de temps.
* Données**Refine** (`Bool`) : valeur par défaut `False`. Nettoie la géométrie.

Retrieved from "<http://wiki.freecad.org/index.php?title=SheetMetal_AddCutout/fr&oldid=1545953>"