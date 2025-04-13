---
title: Curves Courbes iso
---
|  |
| --- |
| Curves Courbes iso |
| Emplacement du menu |
| Surfaces → IsoCurve |
| Ateliers |
| [Curves](/Curves_Workbench/fr "Curves Workbench/fr") |
| Raccourci par défaut |
| *Aucun* |
| Introduit dans la version |
| - |
| Voir aussi |
| [Curves Relier des courbes](/Curves_JoinCurve/fr "Curves JoinCurve/fr") |
|  |

## Description

L'outil ![](/images/Curves_IsoCurve.svg) Courbes iso applique un réseau orienté UV sur des surfaces sélectionnées.

![](/images/Curves_IsoCurve_Demo.jpg)

Ci-dessus : la surface avant (à gauche) et après (à droite) l'application de l'outil.

## Utilisation

1. Sélectionnez une ou plusieurs faces dans la [vue 3D](/3D_view/fr "3D view/fr").
2. Il y a plusieurs façons de lancer l'outil :
   * Appuyez sur le bouton ![](/images/Curves_IsoCurve.svg) IsoCurve.
   * Sélectionnez l'option **Surfaces → ![](/images/Curves_IsoCurve.svg) IsoCurve** du menu.
3. Un objet **IsoCurve** est créé pour chaque face sélectionnée, appliquant un réseau orienté UV sur chaque face.
4. Vous pouvez modifier les valeurs dans l'[éditeur de propriétés](/Property_editor/fr "Property editor/fr") pour changer le nombre de courbes iso dans les directions U et V et ajuster les propriétés correspondantes (voir Propriétés ci-dessous).

## Remarques

* Les courbes peuvent être extraites en tant que sous-élément (par exemple: avec [Curves Relier des courbes](/Curves_JoinCurve/fr "Curves JoinCurve/fr")) pour d'autres utilisations ou simplement pour aider à visualiser la forme.

## Propriétés

Voir aussi : [Éditeur de propriétés](/Property_editor/fr "Property editor/fr")

Un objet **IsoCurve** est dérivé d'un [App FeaturePython](/App_FeaturePython/fr "App FeaturePython/fr") et hérite de toutes ses propriétés. Il possède également les propriétés supplémentaires suivantes :

### Données

Iso Curve

* Données**Face** (`LinkSub`) : face d'entrée.
* Données**Mode** (`Enumeration`) : nombre de courbes iso.
  + `Multi` (par défaut) : ...
  + `Single` : ...
* Données**Number U** (`Integer`) : Nombre de courbes iso dans la direction U.
* Données**Number V** (`Integer`) : Nombre de courbes iso dans la direction V.
* Données**Orientation** (`Enumeration`) : orientation des courbes.
  + `U` (par défaut) : ...
  + `V` : ...
* Données**Parameter** (`Float`) : paramètre des courbes iso.

Retrieved from "<http://wiki.freecad.org/index.php?title=Curves_IsoCurve/fr&oldid=1566960>"