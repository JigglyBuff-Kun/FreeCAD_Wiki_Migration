---
title: Curves Étendre une courbe
---
|  |
| --- |
| Curves Étendre une courbe |
| Emplacement du menu |
| Curves → Extend Curve |
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

L'outil ![](/images/Curves_ExtendCurve.svg) **Curves Étendre une courbe** prolonge les arêtes sélectionnées aux deux extrémités d'une distance donnée.

## Utilisation

1. Sélectionnez une ou plusieurs arêtes dans la [vue 3D](/3D_view/fr "3D view/fr").
2. Il y a plusieurs façons de lancer l'outil :
   * Appuyez sur le bouton ![](/images/Curves_ExtendCurve.svg) [Extend Curve](/Curves_ExtendCurve "Curves ExtendCurve").
   * Sélectionnez l'option **Curves → ![](/images/Curves_ExtendCurve.svg) Extend Curve** du menu.
3. Un objet **ExtendedCurve** est créé pour chaque arête sélectionnée.
4. Vous pouvez modifier les valeurs dans l'[éditeur de propriétés](/Property_editor/fr "Property editor/fr") pour ajuster les longueurs et les types d'extension ainsi que la forme de sortie (voir Propriétés ci-dessous).

## Propriétés

Voir aussi : [Éditeur de propriétés](/Property_editor/fr "Property editor/fr")

Un objet **ExtendCurve** est dérivé d'un [App FeaturePython](/App_FeaturePython/fr "App FeaturePython/fr") et hérite de toutes ses propriétés. Il possède également les propriétés supplémentaires suivantes :

### Données

Base

* Données**Edge** (`LinkSub`) : arrête initiale à étendre.
* Données**Output** (`Enumeration`) : forme résultante.
  + `SingleEdge` (valeur par défaut) : une seule courbe continue.
  + `Wire` : courbes séparées.

Beginning

* Données**Length Start** (`Float`) : longueur de l'extension au point de départ.
* Données**Type Start** (`Enumeration`) : type d'extension au point de départ.
  + `Straight` (par défaut) : l'extension est une ligne droite.
  + `G2 curve` : l'extension est une autre courbe qui adopte la courbure locale de l'arête initiale à leur sommet commun (continuité G2).

End

* Données**Length End** (`Float`) : longueur de l'extension au point final.
* Données**Type End** (`Enumeration`) : type d'extension au point final.
  + `Straight` (par défaut) : l'extension est une ligne droite.
  + `G2 curve` : l'extension est une autre courbe qui adopte la courbure locale de l'arête initiale à leur sommet commun (continuité G2).

Retrieved from "<http://wiki.freecad.org/index.php?title=Curves_ExtendCurve/fr&oldid=1568199>"