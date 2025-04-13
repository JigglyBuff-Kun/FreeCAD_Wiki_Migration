---
title: Sketcher Convertir en B-splines
---
|  |
| --- |
| Sketcher Convertir en B-splines |
| Emplacement du menu |
| Esquisse → Outils d'esquisse des B-splines → Convertir la géometrie en B-splines |
| Ateliers |
| [Sketcher](/Sketcher_Workbench/fr "Sketcher Workbench/fr") |
| Raccourci par défaut |
| *Aucun* |
| Introduit dans la version |
| 0.17 |
| Voir aussi |
| [Sketcher B-spline simple](/Sketcher_CreateBSpline/fr "Sketcher CreateBSpline/fr") |
|  |

## Description

L'outil ![](/images/Sketcher_BSplineConvertToNURBS.svg) Sketcher Convertir en B-splines convertit les arêtes en [B-splines](/B-Splines/fr "B-Splines/fr").

![](/images/Sketcher_BSplineConvertToNurb.png)

Différents objets avant conversion.

![](/images/Sketcher_BSplineConvertToNurb1.png)

Les mêmes objets après avoir été convertis en B-splines.

## Utilisation

1. Sélectionnez une ou plusieurs arêtes.
2. Il y a plusieurs façons de lancer l'outil :
   * Appuyez sur le bouton ![](/images/Sketcher_BSplineConvertToNURBS.svg) Convertir la géometrie en B-splines.
   * Sélectionnez l'option **Esquisse → Outils d'esquisse des B-splines → ![](/images/Sketcher_BSplineConvertToNURBS.svg) Convertir la géométrie en B-splines** du menu.
3. Les arêtes sont converties.

## Remarques

* Assurez-vous d'avoir soit le [Degré d'une B-spline](/Sketcher_BSplineDegree/fr "Sketcher BSplineDegree/fr"), [Polygone de contrôle d'une B-spline](/Sketcher_BSplinePolygon/fr "Sketcher BSplinePolygon/fr"), [Peigne de courbure d'une B-spline](/Sketcher_BSplineComb/fr "Sketcher BSplineComb/fr"), [Multiplicité des nœuds d'une B-spline](/Sketcher_BSplineKnotMultiplicity/fr "Sketcher BSplineKnotMultiplicity/fr") de la spline ou son [Poids des points de contrôle B-spline](/Sketcher_BSplinePoleWeight/fr "Sketcher BSplinePoleWeight/fr") visible, sinon rien ne semble se passer.
* Si vous avez converti des lignes droites, vous devez d'abord [augmenter le degré d'une B-spline](/Sketcher_BSplineIncreaseDegree/fr "Sketcher BSplineIncreaseDegree/fr") des lignes pour les rendre "pliables".
* L'outil ne supprime pas la géométrie interne des [coniques](/Sketcher_Workbench/fr#Sketcher_CompCreateConic "Sketcher Workbench/fr"). Elle doit être supprimée manuellement.

Retrieved from "<http://wiki.freecad.org/index.php?title=Sketcher_BSplineConvertToNURBS/fr&oldid=1478822>"