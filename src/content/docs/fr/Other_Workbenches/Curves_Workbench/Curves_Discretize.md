---
title: Curves Discrétiser
---
|  |
| --- |
| Curves Discrétiser |
| Emplacement du menu |
| Curves → Discretize |
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

L'outil ![](/images/Curves_Discretize.svg) **Curves Discrétiser** discrétise une arête ou une polyligne et crée donc un ensemble de points le long de l'arête/polyligne selon une méthode de discrétisation choisie.

## Utilisation

1. Sélectionnez une ou plusieurs arêtes dans la [vue 3D](/3D_view/fr "3D view/fr").
2. Il y a plusieurs façons de lancer l'outil :
   * Appuyez sur le bouton ![](/images/Curves_Discretize.svg) Discretize.
   * Sélectionnez l'option **Curves → ![](/images/Curves_Discretize.svg) Discretize** du menu.
3. Un objet **Discretized\_Edge** est créé pour chaque arête sélectionnée.
4. Vous pouvez modifier les valeurs dans l'[éditeur de propriétés](/Property_editor/fr "Property editor/fr") pour choisir une méthode de discrétisation différente et ajuster les propriétés correspondantes (voir Propriétés ci-dessous).

## Propriétés

Voir aussi : [Éditeur de propriétés](/Property_editor/fr "Property editor/fr")

Un objet **Discretized\_Edge** est dérivé d'un [App FeaturePython](/App_FeaturePython/fr "App FeaturePython/fr") et hérite de toutes ses propriétés. Il possède également les propriétés supplémentaires suivantes :

### Données

Discretized

* Données**Edge** (`LinkSub`) : arête d'entrée.
* Données**Point** (`VectorList`) : liste les points de sortie.
* Données**Target** (`Enumeration`) : cible de l'outil.
  + `SingleEdge` (valeur par défaut) : discrétise uniquement l'arête sélectionnée.
  + `Wire` : discrétise l'ensemble de la polyligne auquel appartient l'arête.

Method

* Données**Algorithm** (`Enumeration`) : méthode de discrétisation.
  + `Number` (par défaut) : un nombre de points répartis uniformément le long de l'arête/polyligne sélectionnée.
  + `QuasiNumber` : ...
  + `Distance` : tous les points sont placés à la même distance de leurs voisins, à l'exception de la dernière paire.
  + `Deflection` : ...
  + `QuasiDeflection` : ...
  + `Angular-Curvature` : ...
* Données**Angular** (`Float`) : valeur angulaire pour l'algorithme de courbure angulaire.
* Données**Curvature** (`Float`) : valeur de la courbure pour l'algorithme de courbure angulaire.
* Données**Deflection** (`Float`) : distance pour l'algorithme de déviation.
* Données**Distance** (`Float`) : distance entre les points d'arête.
* Données**Minimum** (`Integer`) : nombre minimum de points.
* Données**Number** (`Integer`) : nombre de points d'arête.

Output

* Données**Normalized Parameters** (`FloatList`) : liste des paramètres normalisés.

Parameters

* Données**Parameter First** (`Float`) : paramètre de départ.
* Données**Parameter Last** (`Float`) : paramètre de fin.

## Script

Retrieved from "<http://wiki.freecad.org/index.php?title=Curves_Discretize/fr&oldid=1570654>"