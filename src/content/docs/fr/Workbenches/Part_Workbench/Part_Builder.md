---
title: Part Générateur de formes
---
|  |
| --- |
| Part Générateur de forme |
| Emplacement du menu |
| Part → Générer une forme... |
| Ateliers |
| [Part](/Part_Workbench/fr "Part Workbench/fr") |
| Raccourci par défaut |
| *Aucun* |
| Introduit dans la version |
| - |
| Voir aussi |
| [Part Primitives](/Part_Primitives/fr "Part Primitives/fr") |
|  |

## Description

Outil pour créer des formes plus complexes à partir de plusieurs primitives géométriques paramétriques.

## Utilisation

Cet outil peut créer les objets suivants :

### Arête à partir de deux sommets

1. Sélectionnez deux sommets
2. Cliquez sur Créer

![](/images/Edge_from_verts-1.gif)

### Polyligne à partir d'arêtes

1. Sélectionnez un ensemble d'arêtes adjacentes dans la [vue 3D](/3D_view/fr "3D view/fr").
2. Cliquez sur Créer

![](/images/Wire_from_edges-1.gif)

### Face à partir de sommets

1. Sélectionnez les sommets délimitant la face dans la [vue 3D](/3D_view/fr "3D view/fr").
2. Sélectionnez si la face doit être planaire
3. Cliquez sur Créer.
4. L'objet sera créé dans la [vue 3D](/3D_view/fr "3D view/fr") et sera répertorié dans la [vue en arborescence](/Tree_view/fr "Tree view/fr").

![](/images/Face_from_verts.gif)

### Face à partir d'arêtes

1. Sélectionner un ensemble fermé d'arêtes délimitant la face dans la [vue 3D](/3D_view/fr "3D view/fr").
2. Sélectionnez si la face doit être planaire.
3. Cliquez sur Créer.
4. L'objet sera créé dans la [vue 3D](/3D_view/fr "3D view/fr") et sera répertorié dans la [vue en arborescence](/Tree_view/fr "Tree view/fr").

![](/images/Face_from_edges.gif)

### Coque à partir de faces

1. Sélectionnez les faces dans la [vue 3D](/3D_view/fr "3D view/fr").
2. Sélectionnez si la forme doit être raffinée.
3. Sélectionnez si toutes les faces doivent être incluses dans la coque.
4. Cliquez sur Créer.
5. L'objet sera créé dans la [vue 3D](/3D_view/fr "3D view/fr") et sera répertorié dans la [vue en arborescence](/Tree_view/fr "Tree view/fr").

### Solide à partir d'une coque

1. Sélectionnez si la forme doit être raffinée.
2. Cliquez sur Créer.
3. L'objet sera créé dans la [vue 3D](/3D_view/fr "3D view/fr") et sera répertorié dans la [vue en arborescence](/Tree_view/fr "Tree view/fr").

## Remarques

Un flux de travail possible pourrait être :

* Dessinez un modèle filaire de votre forme à l'aide des outils de l'![](/images/Workbench_Draft.svg) [atelier Draft](/Draft_Workbench/fr "Draft Workbench/fr") (par exemple, ligne et polyligne).
* Créez toutes les faces avec "face à partir des bords"
* Créez une "coque à partir de faces"
* Créez un "solide à partir d'une coque"

Retrieved from "<http://wiki.freecad.org/index.php?title=Part_Builder/fr&oldid=1437450>"