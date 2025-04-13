---
title: Curves Peigne paramétrique
---
|  |
| --- |
| Curves Peigne paramétrique |
| Emplacement du menu |
| Curves → Comb plot |
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

L'outil ![](/images/Curves_ParametricComb.svg) **Curves Peigne paramétrique** peut aider à visualiser la régularité ou la fluidité d'une courbe ainsi que la continuité entre deux courbes.

Remarque: un peigne est uniquement destiné à la visualisation.

Un peigne 3D sera créé pour les courbes 3D. L'échantillonnage et l'échelle peuvent être modifiés.

![](/images/Curves_ParametricComb_demo.jpg)

Ci-dessus : une courbe avant (à gauche) et après (à droite) l'application de cet outil

## Utilisation

1. Sélectionnez une ou plusieurs formes (esquisse, polyligne, face, etc.).
2. Il y a plusieurs façons de lancer l'outil :
   * Appuyez sur le bouton ![](/images/Curves_ParametricComb.svg) Comb plot.
   * Sélectionnez l'option **Curves → ![](/images/Curves_ParametricComb.svg) Comb plot** du menu.
3. Un objet **Comb** est créé, montrant la courbure des formes sélectionnées (esquisses, polylignes), ou de leurs sous-éléments (bordures et iso-courbes dans le cas des faces).
4. Vous pouvez modifier les valeurs dans l'[éditeur de propriétés](/Property_editor/fr "Property editor/fr") (voir Propriétés ci-dessous) :
   * Ajustez le nombre d'échantillons et l'échelle du peigne pour tous les tracés en peigne.
   * Ajustez le nombre de tracés en peigne et leur orientation pour les objets de surface.

## Remarques

* Cet outil fonctionne comme une aide visuelle.
* Cet outil accepte plusieurs types de courbes et d'éléments de surface, et crée des iso-courbes supplémentaires dans les directions U et V pour ces derniers.

## Propriétés

Voir aussi : [Éditeur de propriétés](/Property_editor/fr "Property editor/fr")

Un objet **Comb** est dérivé d'un [App FeaturePython](/App_FeaturePython/fr "App FeaturePython/fr") et hérite de toutes ses propriétés. Il possède également les propriétés supplémentaires suivantes :

### Données

Comb

* Données**Comb Points** (`VectorList`) : points du peigne.
* Données**Edge** (`LinkSubList`) : liste des formes d'entrée.
* Données**Samples** (`IntegerConstraint`) : nombre d'échantillons par tracé en peigne.
* Données**Scale** (`Float`) : échelle (%). 0 pour l'échelle automatique.
* Données**Shape** (`PartShape`) : forme du tracé en peigne.

Surface

* Données**Number** (`Integer`) : nombre d'échantillons de surface (tracés en peigne) dans la direction U et/ou V.
* Données**Orientation** (`Enumeration`) : orientation du peigne de surface pour répartir les échantillons de surface (tracés en peigne).
  + `U` (valeur par défaut) : affiche les tracés en peigne le long de la direction U uniquement.
  + `V` : affiche les tracés en peigne le long de la direction V uniquement.
  + `UV` : affiche les tracés en peigne dans les deux directions.

Retrieved from "<http://wiki.freecad.org/index.php?title=Curves_ParametricComb/fr&oldid=1566955>"