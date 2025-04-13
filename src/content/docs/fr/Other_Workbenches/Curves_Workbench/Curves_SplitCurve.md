---
title: Curves Diviser une courbe
---
:::caution
Cette documentation n'est pas terminée. Merci de nous aider et de contribuer à la documentation.Modèle GuiCommandexplique comment les commandes doivent être documentées. ParcourezCategory:UnfinishedDocupour voir d'autres pages incomplètes comme celle-ci. VoirCategory:Command\_Referencepour toutes les commandes.VoirÉcrire une page Wikipour apprendre à éditer les pages du wiki, et aller àContribuer à FreeCADpour apprendre d'autres façons de contribuer.
:::

|  |
| --- |
| Curves Diviser une courbe |
| Emplacement du menu |
| Curves → Split curve |
| Ateliers |
| [Curves](/Curves_Workbench/fr "Curves Workbench/fr") |
| Raccourci par défaut |
| *Aucun* |
| Introduit dans la version |
| - |
| Voir aussi |
| *Aucun* |
|  |

## Description

![](/images/Curves_SplitCurve.svg) Diviser une courbe divise l'arête sélectionné. Cet outil fait partie des [ateliers externes](/External_workbenches/fr "External workbenches/fr") appelé [Curves](/Curves_Workbench/fr "Curves Workbench/fr").

## Utilisation

1. Passer à l'atelier ![](/images/Curves_workbench_icon.svg) [Curves](/Curves_Workbench/fr "Curves Workbench/fr") (à installer à partir du ![](/images/Std_AddonMgr.svg) [gestionnaire des extensions](/Std_AddonMgr/fr "Std AddonMgr/fr") si ce n'est pas déjà fait)
2. Pour appeler la commande, effectuez l'une des opérations suivantes:
   * Appuyez sur le bouton ![](/images/Curves_SplitCurve.svg) dans la barre d'outils Curves.
   * Utilisez l'entrée **Curves → Split curve** dans le menu déroulant.

## Remarques

* This tool also allows the selection of an object containing a wire in the [Tree View](/Tree_view "Tree view") as an input edge. If it contains more than one edge, all but the first one are ignored.
* Splitting methods that independently add splitting locations to the final result:
  1. By Number: Set the Données**Number** property to a value greater than 1 to receive segments of equal lengths.
  2. Single distance: Set the Données**Distance** property to a value other than `0.0 mm`.
  3. Several distances: Add distance values to the Données**Values** property, either absolute (mm) or relative (%).
  4. Cutting objects: Add cutting objects to the Données**Cutting Objects** property,
     + Intersection points: Set the Données**Cut At Vertexes** property to `false` to split at intersection points.
     + Shortest distance: As before, to split at the shortest distance when a cutting object is neither intersecting nor touching.
     + Projected points: Set the Données**Cut At Vertexes** property to `true` to split where the vertices of the cutting object are projected onto the SplitCurve object.
* The values of the Données**Values** property can also be changed by dragging the vertices in the [3D view](/3D_view "3D view") when the SplitCurve object is in edit mode (double-click on the SplitCurve object in the [Tree view](/Tree_view "Tree view") to toggle).

## Propriétés

See also: [Property editor](/Property_editor "Property editor").

A **SplitCurve** object is derived from a [Part Feature](/Part_Feature "Part Feature") object and inherits all its properties. It also has the following additional properties:

### Data

Base

* Données**Source** (`LinkSub`): Edge to split.

Output

* Données (Hidden)**Normalized Parameters** (`FloatList`): Normalized parameters list.

Split

* Données**Cut At Vertexes** (`Bool`): Create a split point at nearest of each vertex of the cutting objects.
* Données**Cutting Objects** (`LinkList`): List of objects that cut the curve.
* Données**Distance** (`Distance`): Expression-ready distance value.
* Données**Keep Solid** (`Bool`): Rebuild and output the complete shape.
* Données**Number** (`Integer`): Number of equal segments.
* Données**Values** (`StringList`): List of splitting locations.

  :   % and units are allowed.
  :   Negative values are computed from edge end.

Retrieved from "<http://wiki.freecad.org/index.php?title=Curves_SplitCurve/fr&oldid=1568951>"