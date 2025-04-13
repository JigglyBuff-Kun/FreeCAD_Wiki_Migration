---
title: Curves Ligne de réflexion
---
|  |
| --- |
| Curves Ligne réfléchie |
| Emplacement du menu |
| Surfaces → Reflect Lines |
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

L'outil ![](/images/Curves_ReflectLines.svg) **Curves Ligne de réflexion** crée les lignes de réflexion sur une forme, selon une direction de vue.

## Utilisation

1. Sélectionnez un objet.
2. Il y a plusieurs façons de lancer l'outil :
   * Appuyez sur le bouton ![](/images/Curves_ReflectLines.svg) Reflect Lines.
   * Sélectionnez l'option **Surfaces → ![](/images/Curves_ReflectLines.svg) Reflect Lines** du menu.
3. Si l'objet sélectionné n'est pas un objet **ReflectLines**, un objet **ReflectLines** est créé.
4. La direction de vue de l'objet ReflectLines sera définie en fonction de la direction de la caméra.
5. Vous pouvez modifier les valeurs dans l'[éditeur de propriétés](/Property_editor/fr "Property editor/fr") pour choisir les lignes à créer et l'endroit où elles seront placées, ainsi que d'ajuster les propriétés correspondantes (voir Propriétés ci-dessous).

## Remarques

* Si la propriété Données**On Shape** est `true`, les lignes seront sur la forme d'entrée (les propriétés Données**View Pos** et Données**Up Dir** ne seront pas utilisées).  
  Dans le cas contraire, les lignes seront sur le plan XY.
* Si la propriété Vue**TrackCamera** est `true`, la direction de la vue sera mise à jour en fonction des mouvements de la caméra.

## Propriétés

Voir aussi : [Éditeur de propriétés](/Property_editor/fr "Property editor/fr")

Un objet **ReflectLines** est dérivé d'un [App FeaturePython](/App_FeaturePython/fr "App FeaturePython/fr") et hérite de toutes ses propriétés. Il possède également les propriétés supplémentaires suivantes :

### Vue

AutoView

* Vue**TrackCamera** (`Bool`) : permet de suivre les mouvements de la caméra

### Données

Cleaning Options

* Données (Hidden)**Cleaning Tolerance** (`Quantity`) : tolérance de suppression pour la détection des doublons.
* Données**Remove Duplicates** (`Bool`) : Supprime les arêtes dupliquées.
* Données (Hidden)**Samples** (`Integer`) : nombre d'échantillons d'arêtes.

Edge Type

* Données**Iso Line** (`Bool`) : lignes isoparamétriques.
* Données**Out Line** (`Bool`) : Lignes de contour.
* Données**Rg1 Line** (`Bool`) : arête lisse de continuité G1 entre deux surfaces.
* Données**RgN Line** (`Bool`) : arête cousue de continuité CN sur une surface.
* Données**Sharp** (`Bool`) : arête vive (de continuité C0).

Reflect Lines

* Données**Indiv Faces** (`LinkSubList`) : chaque face.
* Données**On Shape** (`Bool`) : sortie des lignes 3D sur la forme.
* Données**Source** (`Link`) : objet source.
* Données (Hidden)**Up Dir** (`Vector`) : direction montante.
* Données**View Dir** (`Vector`) : direction de la vue.
* Données (Hidden)**View Pos** (`Vector`) : position de la vue.
* Données**Visible** (`Bool`) : génère les lignes visibles ou les lignes cachées.

Retrieved from "<http://wiki.freecad.org/index.php?title=Curves_ReflectLines/fr&oldid=1566709>"