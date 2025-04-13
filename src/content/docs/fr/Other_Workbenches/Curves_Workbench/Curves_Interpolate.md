---
title: Curves Interpoler
---
:::caution
Cette documentation n'est pas terminée. Merci de nous aider et de contribuer à la documentation.Modèle GuiCommandexplique comment les commandes doivent être documentées. ParcourezCategory:UnfinishedDocupour voir d'autres pages incomplètes comme celle-ci. VoirCategory:Command\_Referencepour toutes les commandes.VoirÉcrire une page Wikipour apprendre à éditer les pages du wiki, et aller àContribuer à FreeCADpour apprendre d'autres façons de contribuer.
:::

|  |
| --- |
| Curves Interpoler |
| Emplacement du menu |
| Curves → Interpolate |
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

![](/images/Curves_Interpolate.svg) Curves Interpoler interpole les points avec une courbe B-spline. Cet outil fait partie des [ateliers externes](/External_workbenches/fr "External workbenches/fr") appelé [Curves](/Curves_Workbench/fr "Curves Workbench/fr").

## Utilisation

1. Passer à l'atelier ![](/images/Curves_workbench_icon.svg) [Curves](/Curves_Workbench/fr "Curves Workbench/fr") (à installer à partir du ![](/images/Std_AddonMgr.svg) [gestionnaire des extensions](/Std_AddonMgr/fr "Std AddonMgr/fr") si ce n'est pas déjà fait)
2. Pour appeler la commande, effectuez l'une des opérations suivantes :
   * Appuyez sur le bouton ![](/images/Curves_Interpolate.svg) dans la barre d'outils Curves.
   * Utilisez l'entrée **Curves → Interpolate** dans le menu déroulant.

## Propriétés

See also: [Property editor](/Property_editor "Property editor").

An **Interpolation\_Curve** object is derived from a [Part Feature](/Part_Feature "Part Feature") object and inherits all its properties. It also has the following additional properties:

### Data

General

* Données**CustomTangents** (`Bool`): User specified tangents.
* Données (Hidden)**DetectAligned** (`Bool`): interpolate 3 aligned points with a line.
* Données**Periodic** (`Bool`): Set the curve closed.
* Données (Hidden)**PointList** (`LinkSubList`): Point list to interpolate.
* Données**Polygonal** (`Bool`): interpolate with a degree 1 polygonal curve.
* Données**Source** (`Link`): Source object that provides points to interpolate.
* Données**StartOffset** (`Integer`): Offset the start index of the point list.
* Données**TangentFlags** (`BoolList`): Activation flag of tangents.
* Données**Tangents** (`VectorList`): Tangents at interpolated points.
* Données**Tolerance** (`Float`): Interpolation tolerance.

Parameters

* Données (Hidden)**Parameters** (`FloatList`): Parameters of interpolated points.
* Données **Parametrization**  (`Enumeration`): Parametrization type.
  + `ChordLength` (default): ...
  + `Centripetal`: ...
  + `Uniform`: ...
  + `Custom`: ...
* Données**WireOutput** (`Bool`): outputs a wire or a single edge.

Spiral

* Données**FaceSupport** (`LinkSub`): Face support of the spiral.
* Données**UTurns** (`Integer`): Nb of turns between 2 points, in U direction.
* Données**VTurns** (`Integer`): Nb of turns between 2 points, in V direction.

Retrieved from "<http://wiki.freecad.org/index.php?title=Curves_Interpolate/fr&oldid=1570939>"