---
title: Curves Relier des courbes
---
|  |
| --- |
| Curves Relier des courbes |
| Emplacement du menu |
| Curves → joinCurves |
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

L'outil ![](/images/Curves_JoinCurve.svg) [Curves Relier des courbes](/Curves_JoinCurve "Curves JoinCurve") relie des arêtes sélectionnées en une courbe B-spline.

![](/images/JoinCurve_pic1.jpg)

## Utilisation

1. Sélectionnez une ou plusieurs arêtes dans la [vue 3D](/3D_view/fr "3D view/fr").
2. Il y a plusieurs façons de lancer l'outil :
   * Appuyez sur le bouton ![](/images/Curves_JoinCurve.svg) joinCurves.
   * Sélectionnez l'option **Curves → ![](/images/Curves_JoinCurve.svg) joinCurves** du menu.
3. Un objet **JoinCurve** est créé pour chaque arête sélectionnée.
4. Vous pouvez modifier les valeurs dans l'[éditeur de propriétés](/Property_editor/fr "Property editor/fr") pour sélectionner une autre méthode de paramétrage et ajuster les propriétés correspondantes (voir Propriétés ci-dessous).

## Remarques

* Les arêtes d'une forme ou les arêtes sélectionnées à partir d'une esquisse sont acceptées et doivent être ajoutées dans un ordre consécutif.
* Le résultat est une B-spline continue unique.

## Propriétés

### Données

InputSources

* Données**Base** (`Link`) : relie toutes les arêtes de cet objet de base.
* Données**Edges** (`LinkSubList`) : liste des arêtes à relier.

Join

* Données**CornerBreak** (`Bool`) : rupture dans les angles vifs.
* Données**ForceClosed** (`Bool`) : force une courbe fermée.
* Données**ForceContact** (`Bool`) : force une connexion des arêtes.
* Données**Reverse** (`Bool`) : inverse la courbe résultante.
* Données**StartOffset** (`Integer`) : définit le point initial de la courbe fermée.
* Données**Tolerance** (`Float`) : tolérance.

ShapeApproximation

* Données**Active** (`Bool`) : utiliser une approximation.
* Données (Hidden)**ApproxTolerance** (`Float`) : tolérance de l'approximation.
* Données (Hidden)**Continuity** (`Enumeration`) : continuité souhaitée de la courbe. (`C0`, `C1`, `G1`, `C2`, `G2`, `C3` (par défaut), `CN`)
* Données (Hidden)**DegreeMax** (`Integer`) : degré maximum de la courbe.
* Données (Hidden)**DegreeMin** (`Integer`) : degré minimum de la courbe.
* Données**ExtensionProxy** (`PythonObject`) : objet proxy de l'extension de l'approximation.
* Données (Caché)**Parametrization** (`Enumeration`) : type de paramétrage.
  + `ChordLength` : ...
  + `Centripetal` : ...
  + `Uniform` : ...
* Données (Hidden)**Samples** (`Integer`) : nombre d'échantillons.

Retrieved from "<http://wiki.freecad.org/index.php?title=Curves_JoinCurve/fr&oldid=1568400>"