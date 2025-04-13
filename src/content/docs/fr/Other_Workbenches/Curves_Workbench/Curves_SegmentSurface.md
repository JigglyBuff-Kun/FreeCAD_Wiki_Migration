---
title: Curves Segmenter une surface
---
|  |
| --- |
| Curves Segmenter une surface |
| Emplacement du menu |
| Surfaces → Segment surface |
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

L'outil ![](/images/Curves_SegmentSurface.svg) Curves Segmenter une surface permet de segmenter une surface en isocurves.

## Utilisation

1. Sélectionnez une face dans la [vue 3D](/3D_view/fr "3D view/fr").
2. Il y a plusieurs façons de lancer l'outil :
   * Appuyez sur le bouton ![](/images/Curves_SegmentSurface.svg) Segment surface.
   * Sélectionnez l'option **Surfaces → ![](/images/Curves_SegmentSurface.svg) Segment surface** du menu.
3. Un objet **Segment\_Surface** est créé.
4. Vous pouvez modifier les valeurs dans l'[éditeur de propriétés](/Property_editor/fr "Property editor/fr") pour ajuster les propriétés correspondantes (voir Propriétés ci-dessous).

## Propriétés

Voir aussi : [Éditeur de propriétés](/Property_editor/fr "Property editor/fr")

Un objet **Segment\_Surface** est dérivé d'un [App FeaturePython](/App_FeaturePython/fr "App FeaturePython/fr") et hérite de toutes ses propriétés. Il possède également les propriétés supplémentaires suivantes :

### Données

Base

* Données**Option** (`Enumeration`) : liste d'options.
  + `Custom` (par défaut) : ...
  + `Auto` : ...
* Données**Source** (`LinkSub`) : face initiale.

Option Auto

* Données**Direction** (`Enumeration`) : direction de la segmentation.
  + `U` (default) : ...
  + `V` : ...
  + `Both` : ...

UDirection

* Données**Knots U** (`FloatList`) : paramètres de division dans la direction U.
* Données**Knots UProvider** (`Link`) : objet générant des paramètres normalisés dans la direction U.
* Données**Number U** (`Integer`) : divise la plage de paramètres U en un nombre donné de segments.

VDirection

* Données**Knots V** (`FloatList`) : paramètres de division dans la direction V.
* Données**Knots VProvider** (`Link`) : objet générant des paramètres normalisés dans la direction V.
* Données**Number V** (`Integer`) : divise la plage de paramètres V en un nombre donné de segments.

## Script

Retrieved from "<http://wiki.freecad.org/index.php?title=Curves_SegmentSurface/fr&oldid=1566953>"