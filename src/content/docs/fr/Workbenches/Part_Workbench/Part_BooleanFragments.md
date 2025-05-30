---
title: Part Fragments booléens
---
|  |
| --- |
| Part Fragments booléens |
| Emplacement du menu |
| Part → Scinder → Fragments booléens |
| Ateliers |
| [Part](/Part_Workbench/fr "Part Workbench/fr") |
| Raccourci par défaut |
| *Aucun* |
| Introduit dans la version |
| 0.17 |
| Voir aussi |
| [Part Scinder](/Part_Slice/fr "Part Slice/fr"), [Part OU exclusif](/Part_XOR/fr "Part XOR/fr"), [Part Joindre](/Part_CompJoinFeatures/fr "Part CompJoinFeatures/fr"), [Part Opérations booléennes](/Part_Boolean/fr "Part Boolean/fr") |
|  |

## Description

L'outil ![](/images/Part_BooleanFragments.svg) **Part Fragments booléens** calcule tous les fragments qui peuvent résulter de l'application d'opérations booléennes entre des formes d'entrée. Par exemple, pour deux sphères entrecroisées, trois solides non chevauchants mais se touchant sont générés.

![](/images/Part_BooleanFragments_Demo.png)

Dans l'image ci-dessus, les pièces ont été déplacées manuellement pour révéler la fragmentation.

La forme résultante est toujours un composé. Le contenu du composé dépend des types de forme et du mode opératoire. Cela signifie que vous n'avez pas immédiatement accès aux éléments individuels du résultat. Ces éléments restent regroupés. Chaque élément peut être extrait en faisant exploser le composé ([Draft Désagréger](/Draft_Downgrade/fr "Draft Downgrade/fr")).

L'outil comporte trois modes : "Standard", "Split" (fractionné) et "CompSolid" (composé de solides).

"Standard" et "Split" diffèrent par l'action de l'outil sur les polylignes, les coques et les solides composés. Pour "Split", ceux-ci sont séparés. Pour "Standard", ils sont maintenus ensemble (on obtient des segments supplémentaires).

La structure de composition en modes "Standard" et "Split" suit la structure de composition des entrées. Autrement dit, si vous introduisez deux composés, chacun contenant une sphère comme dans l'exemple ci-dessus, le résultat contiendra également deux composés, chacun contenant les parties de la sphère contenue à l'origine. Cela signifie que la pièce commune sera répétée deux fois dans le résultat. Ce n’est que si les sphères d’entrée ne sont pas dans des composés que le résultat contient la pièce commune une seule fois.

En mode "CompSolid" (composé de solides), les solides sont combinés en un composé de solides (compsolid est constitué d'un groupe de solides reliés par des faces, ils se rapportent à des solides à l'instar des polylignes se rapportent à des arêtes, et des coques se rapportent à des faces; le nom est probablement l'abréviation de "solide composite"). Le résultat est un composé non imbriqué de compsolides.

## Utilisation

1. Sélectionnez les objets à intersecter. L'ordre de sélection n'est pas important puisque l'action de l'outil est symétrique. Il suffit de sélectionner une sous-forme de chaque objet (par exemple, les faces). Vous pouvez également sélectionner un composé contenant toutes les formes à connecter, par exemple un [Draft Réseau orthogonal](/Draft_OrthoArray/fr "Draft OrthoArray/fr").
2. Il y a plusieurs façons de lancer l'outil :
   * Appuyez sur le ![](/images/Part_BooleanFragments.svg) Fragments booléens.
   * Sélectionnez l'option **Part → Scinder → ![](/images/Part_BooleanFragments.svg) Fragments booléens** du menu.
3. Un objet paramétrique Fragments booléens est créé. Les objets originaux sont cachés et le résultat de l'intersection est affiché dans la [vue 3D](/3D_view/fr "3D view/fr").

## Propriétés

Boolean Fragments

* Données**Objects** : liste des objets à fragmenter. Généralement, au moins deux objets sont nécessaires, mais un seul composé contenant les formes à fragmenter conviendra également. (à partir de FreeCAD v0.17.8053, cette propriété n'est pas affichée dans l'éditeur de propriétés et n'est accessible que via Python).
* Données**Mode** : "Standard", "Split" ou "CompSolid". "Standard" est la valeur par défaut. Standard et Split diffèrent par l'action de l'outil sur les formes de type agrégation: si Split, celles-ci sont séparées; sinon, elles sont conservées ensemble (vous obtenez des segments supplémentaires).
* Données**Tolerance** : valeur "floue". Il s'agit d'une tolérance supplémentaire à appliquer lors de la recherche d'intersections, en plus des tolérances stockées dans les formes en entrée.

## Détails de l'implémentation

L'outil Fragments booléens en "Standard mode" est l'opérateur de fusion général (GFA) d'OpenCascade. Il accepte une combinaison de probablement tous les types de formes et la logique de sortie est assez alambiquée. Voir [Guide de l'utilisateur OpenCascade : opérations booléennes](https://www.opencascade.com/doc/occt-7.0.0/overview/html/occt_user_guides__boolean_operations.html).

Pour les modes "Split" et "CompSolid", FreeCAD effectue un post-traitement supplémentaire.

## Script

L'outil peut être utilisé dans des [macros](/Macros/fr "Macros/fr") et à partir de la console Python en utilisant la fonction suivante :

```
BOPTools.SplitFeatures.makeBooleanFragments(name)

```

* Crée une fonction BooleanFragments vide. Les propriétés 'Objects' doivent être attribuées explicitement, par la suite.
* Renvoie l'objet nouvellement créé.

Fragments Booléens peut également être appliqué à des formes simples, sans avoir besoin d'un objet de document via :

```
import BOPTools.SplitAPI
BOPTools.SplitAPI.booleanFragments(list_of_shapes, mode, tolerance = 0.0)

# OR, for Standard mode:

list_of_shapes = [App.ActiveDocument.Sphere.Shape, App.ActiveDocument.Sphere001.Shape]
pieces, map = list_of_shapes[0].generalFuse(list_of_shapes[1:], tolerance)
# pieces receives a compound of shapes; map receives a list of lists of shapes, defining list_of_shapes <--> pieces correspondence

```

Cela peut être utile pour créer des fonctionnalités de script personnalisées Python.

Exemple :

```
import BOPTools.SplitFeatures
j = BOPTools.SplitFeatures.makeBooleanFragments(name= 'BooleanFragments')
j.Objects = FreeCADGui.Selection.getSelection()

```

L'outil lui-même est implémenté en Python, voir /Mod/Part/BOPTools/SplitFeatures.py là où FreeCAD est installé.

## Remarques

L'outil a été introduit dans FreeCAD v0.17.8053. FreeCAD doit être compilé avec OCC 6.9.0 ou version ultérieure, sinon l'outil n'est pas disponible.

Retrieved from "<http://wiki.freecad.org/index.php?title=Part_BooleanFragments/fr&oldid=1497211>"