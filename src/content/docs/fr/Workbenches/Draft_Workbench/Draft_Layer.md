---
title: Draft Calque
---
|  |
| --- |
| Draft Calque |
| Emplacement du menu |
| Utilitaires → Créer un calque |
| Ateliers |
| [Draft](/Draft_Workbench/fr "Draft Workbench/fr") |
| Raccourci par défaut |
| *Aucun* |
| Introduit dans la version |
| 0.19 |
| Voir aussi |
| [Draft Grouper automatiquement](/Draft_AutoGroup/fr "Draft AutoGroup/fr"), [Draft Gestionnaire de calques](/Draft_LayerManager/fr "Draft LayerManager/fr") |
|  |

## Description

La commande ![](/images/Draft_Layer.svg) **Draft Calque** crée un Draft calque. Un calque est un groupe d'un type particulier, doté d'un certain nombre de [propriétés visuelles](#Vue). Ces propriétés, et toute modification qui leur est apportée, sont propagées aux objets placés à l'intérieur du calque. Les calques eux-mêmes sont placés dans un autre groupe spécial : le Draft LayerContainer.

## Utilisation

1. Il existe plusieurs façons de lancer la commande :
   * Appuyez sur le bouton ![](/images/Draft_Layer.svg) Créer un calque.
   * Sélectionnez l'option **Utilitaires → ![](/images/Draft_Layer.svg) Créer un calque** du menu, ou dans le menu contextuel de la [vue en arborescence](/Tree_view/fr "Tree view/fr") ou de la [vue 3D](/3D_view/fr "3D view/fr").
   * Si le conteneur de calque existe déjà : clic droit dessus dans la [vue en arborescence](/Tree_view/fr "Tree view/fr") et sélectionnez l'option **![](/images/Draft_NewLayer.svg) Ajouter un nouveau calque** dans le menu contextuel.
2. S'il n'existe pas, le conteneur de calque est créé en premier.
3. Un calque est créé et placé dans le conteneur de calque.
4. Si vous le souhaitez, vous pouvez modifier les [propriétés](#Propri.C3.A9t.C3.A9s) du calque.
5. Optionnellement, vous pouvez placer des objets dans le calque en les glissant et en les déposant sur le calque dans la [vue en arborescence](/Tree_view/fr "Tree view/fr"). Les objets peuvent également être placés dans un calque en modifiant la propriété Données**Group** du calque.
6. Vous pouvez également [activer](#Options_du_calque) le calque.

## Menu contextuel

### Options du conteneur du calque

Pour un Draft LayerContainer, ces options supplémentaires sont disponibles dans le menu contextuel de la [Vue en arborescence](/Tree_view/fr "Tree view/fr") :

* **![](/images/Draft_NewLayer.svg) Ajouter un nouveau calque** : ajoute un nouveau calque au document en cours.
* **![](/images/Draft_SetStyle.svg) Réassigner les propriétés de tous les calques** : supprime les [substitutions](#Substitutions) des objets de tous les calques en réassignant les propriétés du calque dans lequel ils se trouvent. [introduit dans la version 1.1](/Release_notes_1.1/fr "Release notes 1.1/fr")
* **![](/images/Draft_Layers.svg) Fusionner les doublons de calques** : fusionne tous les calques ayant la même étiquette de base.

:   L'étiquette de base d'un calque est Données**Label** dépourvu des derniers indices et espaces. Tous les calques ayant la même étiquette de base sont fusionnés en un seul calque dont Données**Label** est définie sur cette étiquette de base.

### Options du calque

Pour un Draft Calque, ces options supplémentaires sont disponibles dans le menu contextuel de la [Vue en arborescence](/Tree_view/fr "Tree view/fr") :

* **![](/images/Button_right.svg) [Activer ce calque](/Draft_AutoGroup/fr "Draft AutoGroup/fr")** : active le calque sélectionné.
* **![](/images/Draft_SetStyle.svg) Réassigner les propriétés du calque** : supprime les [substitutions](#Substitutions) des objets du calque en réassignant les propriétés du calque. [introduit dans la version 1.1](/Release_notes_1.1/fr "Release notes 1.1/fr")
* **![](/images/Draft_SelectGroup.svg) [Sélectionner le contenu du calque](/Draft_SelectGroup/fr "Draft SelectGroup/fr")** : active le calque sélectionné.

## Comportement du glisser-déposer

[introduit dans la version 0.21](/Release_notes_0.21/fr "Release notes 0.21/fr")

Si vous déposez un objet d'un [Std Groupe](/Std_Group/fr "Std Group/fr"), ou un objet de type groupe tel qu'un [Arch Partie de bâtiment](/Arch_BuildingPart/fr "Arch BuildingPart/fr"), sur un calque dans la [vue en arborescence](/Tree_view/fr "Tree view/fr"), il n'est pas retiré du groupe, et vice versa. Pour retirer un objet d'un calque, il doit être déposé sur un autre calque ou sur le nœud du document. Il n'est pas nécessaire de maintenir la touche Ctrl enfoncée lorsque vous faites glisser ou déposez un objet sur un calque.

## Substitutions

[introduit dans la version 1.0](/Release_notes_1.0/fr "Release notes 1.0/fr")

Les objets à l'intérieur d'un calque peuvent avoir des substitutions. La logique suivante s'applique :

* Lorsqu'un objet est placé dans une calque, il adopte toujours les propriétés de ce calque.
* Une propriété de l'objet qui est modifiée par la suite est considérée comme une substitution.
* Lorsqu'une propriété du calque ou de l'objet dans le calque est ensuite modifiée de manière à ce qu'elle corresponde à nouveau, il n'y a plus de substitution et la propriété est à nouveau synchronisée.

Le conteneur du calque et tous les calques disposent d'une option [menu contextuel](#Menu_contextuel) pour réaffecter les propriétés et ainsi supprimer les substitutions.

## Remarques

* Un nouveau calque peut également être créée avec la commande [Draft Grouper automatiquement](/Draft_AutoGroup/fr "Draft AutoGroup/fr") ou avec le [Draft Gestionnaire de calques](/Draft_LayerManager/fr "Draft LayerManager/fr").

## Propriétés

Voir aussi : [Éditeur de propriétés](/Property_editor/fr "Property editor/fr")

Un objet Draft Calque est dérivé d'un [App FeaturePython](/App_FeaturePython/fr "App FeaturePython/fr") et hérite de toutes ses propriétés. Il possède également les propriétés supplémentaires suivantes :

### Données

Layer

* Données**Group** (`LinkList`) : spécifie les objets qui se trouvent à l'intérieur du calque.

### Vue

Layer

Les propriétés de cette section sont appliquées aux objets qui sont placés à l'intérieur du calque. Toute modification de ces propriétés leur est propagée. Pour deux propriétés, Vue**Line Color** et Vue**Shape Color**, ce comportement est facultatif.

* Vue**Draw Style** (`Enumeration`) : spécifie le style de dessin du calque : `Solid`, `Dashed`, `Dotted` ou `Dashdot`.
* Vue**Line Color** (`Color`) : spécifie la couleur de la ligne du calque.
* Vue**Line Width** (`Float`) : spécifie la largeur de ligne de la couche.
* Vue**Override Line Color Children** (`Bool`) : indique si les modifications apportées à Vue**Line Color** du calque sont propagées aux objets situés à l'intérieur du calque.
* Vue**Override Shape Appearance Children** (`Bool`) : spécifie si les changements apportés à Vue**Shape Appearance** du calque sont propagés aux objets à l'intérieur du calque. [introduit dans la version 1.0](/Release_notes_1.0/fr "Release notes 1.0/fr")
* Vue**Shape Appearance** (`MaterialList`) : spécifie l'apparence de la forme du calque. [introduit dans la version 1.0](/Release_notes_1.0/fr "Release notes 1.0/fr")
* Vue (hidden)**Shape Color** (`Color`) : spécifie la couleur de la forme du calque. Elle est synchronisée avec la **Couleur diffuse** de Vue**Shape Appearance**.
* Vue**Transparence** (`Percent`) : spécifie la transparence du calque. Elle est synchronisée avec la **Transparence** de Vue**Shape Appearance**.

Print

* Vue**Line Print Color** (`Color`) : spécifie la couleur d'impression des lignes du calque.
* Vue**Use Print Color** (`Bool`) : indique si la Vue**Line Print Color** du calque est utilisée lorsqu'une [TechDraw Vue d'un objet Draft](/TechDraw_DraftView/fr "TechDraw DraftView/fr") est créée à partir des objets contenus dans le calque.

## Script

Voir aussi : [Autogenerated API documentation](https://freecad.github.io/SourceDoc/) et [FreeCAD Débuter avec les scripts](/FreeCAD_Scripting_Basics/fr "FreeCAD Scripting Basics/fr").

Pour créer un Draft Calque, utilisez la méthode `make_layer` du module Draft. Pour ajouter des objets à un calque ou en supprimer, modifiez sa propriété `Group`.

```
import FreeCAD as App
import Draft

doc = App.newDocument()

layer = Draft.make_layer(line_color=(1.0, 0.0, 0.0, 0.0),
                         shape_color=(1.0, 1.0, 0.0, 0.0))

polygon1 = Draft.make_polygon(5, radius=1000)
polygon2 = Draft.make_polygon(3, radius=500)
polygon3 = Draft.make_polygon(6, radius=220)
layer.Group = [polygon1, polygon2, polygon3]

doc.recompute()

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Draft_Layer/fr&oldid=1550624>"