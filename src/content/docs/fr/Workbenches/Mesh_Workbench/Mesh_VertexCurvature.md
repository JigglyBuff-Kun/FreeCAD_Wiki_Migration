---
title: Mesh Courbure
---
|  |
| --- |
| Mesh Courbure |
| Emplacement du menu |
| Maillages → Tracer la courbure |
| Ateliers |
| [Mesh](/Mesh_Workbench/fr "Mesh Workbench/fr") |
| Raccourci par défaut |
| *Aucun* |
| Introduit dans la version |
| - |
| Voir aussi |
| [Mesh Info sur les courbures](/Mesh_CurvatureInfo/fr "Mesh CurvatureInfo/fr") |
|  |

## Description

La commande **Courbure** crée des objets de courbure pour les objets maillés. Un objet de courbure affiche la courbure d'un maillage en utilisant différentes couleurs pour les parties convexes, plates et concaves.

![](/images/Mesh_VertexCurvature_example.png)

Exemple d'un objet Mesh Courbure

## Utilisation

1. Sélectionnez un ou plusieurs objets maillés.
2. Il existe plusieurs manières de lancer la commande :
   * Appuyez sur le bouton ![](/images/Mesh_VertexCurvature.svg) Tracer la courbure.
   * Sélectionnez l'option **Maillages → ![](/images/Mesh_VertexCurvature.svg) Tracer la courbure** du menu.
   * Sélectionnez l'option **![](/images/Mesh_VertexCurvature.svg) Tracer la courbure** depuis le menu contextuel de la [vue en arborescence](/Tree_view/fr "Tree view/fr") ou depuis le menu contextuel de la [vue 3D](/3D_view/fr "3D view/fr").

## Propriétés

Pour un objet Mesh Curvature, les propriétés suivantes sont disponibles dans l'[éditeur de propriétés](/Property_editor/fr "Property editor/fr"). Sélectionnez l'option **Afficher les propriétés cachées** dans le menu contextuel de l'éditeur de propriétés pour afficher les propriétés masquées.

### Données

Base

* Données**Label** (`String`) : nom modifiable par l'utilisateur pour l'objet, une chaîne UTF8 arbitraire.
* Données**Source** (`Link`) : lien vers l'objet maillé.

#### Données cachées

Base

* Données**Curv Info** (`CurvatureList`) : liste d'informations sur la courbure.
* Données**Expression Engine** (`ExpressionEngine`) : liste d'expressions.
* Données**Label2** (`String`) : description modifiable par l'utilisateur pour l'objet, une chaîne UTF8 arbitraire pouvant inclure des sauts de ligne.
* Données**Visibility** (`Bool`) : mis à `true`, l'objet apparaît dans la [vue 3D](/3D_view/fr "3D view/fr").

### Vue

Base

* Vue**Display Mode** (`Enumeration`) : `Absolute Curvature` (par défaut), `Mean Curvature`, `Gaussian Curvature`, `Maximum Curvature`, `Courbure minimale`.
* Vue**On Top When Selected** (`Enumeration`) : `Disabled` (par défaut), `Enabled`, `Object`, `Element`.
* Vue**Selection Style** (`Enumeration`) : `Shape`, `BoundBox` (par défaut).
* Vue**Show In Tree** (`Bool`) : si mis à `true`, l'objet apparaît dans la [vue en arborescence](/Tree_view/fr "Tree view/fr").
* Vue**Visibility** (`Bool`) : si mis à `true`, l'objet apparaît dans la [vue 3D](/3D_view/fr "3D view/fr").

#### Vue cachée

Base

* Vue**Texture Material** (`Material`) : un [App Material](/index.php?title=App_Material/fr&action=edit&redlink=1 "App Material/fr (page does not exist)") associé à l'objet.

Retrieved from "<http://wiki.freecad.org/index.php?title=Mesh_VertexCurvature/fr&oldid=1560985>"