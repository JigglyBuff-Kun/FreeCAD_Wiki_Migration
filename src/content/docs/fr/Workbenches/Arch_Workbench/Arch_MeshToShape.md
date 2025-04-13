---
title: Arch Maillage en une forme
---
:::caution
Cette commande fait partie de l'ensemble intégré de l'atelier BIMavec la V1.0Cette page a été mise à jour pour cette version.
:::

|  |
| --- |
| Arch Maillage en une forme |
| Emplacement du menu |
| Utilitaires → Convertir un maillage en une forme |
| Ateliers |
| [BIM](/BIM_Workbench/fr "BIM Workbench/fr") |
| Raccourci par défaut |
| *Aucun* |
| Introduit dans la version |
| - |
| Voir aussi |
| [Arch Diviser un maillage](/Arch_SplitMesh/fr "Arch SplitMesh/fr"), [Arch Supprimer la forme](/Arch_RemoveShape/fr "Arch RemoveShape/fr") |
|  |

## Description

L'outil **Arch Maillage en une forme** convertit un [maillage](/Mesh/fr "Mesh/fr") ([Mesh Feature](/Mesh_Feature/fr "Mesh Feature/fr")) en une [forme](/Shape/fr "Shape/fr") ([Part Feature](/Part_Feature/fr "Part Feature/fr")).

Cet outil est optimisé pour les objets avec des surfaces planes (pas de courbes). L'outil correspondant ![](/images/Part_ShapeFromMesh.svg) [Part Forme à partir d'un maillage](/Part_ShapeFromMesh/fr "Part ShapeFromMesh/fr") à partir de l'![](/images/Workbench_Part.svg) [atelier Part](/Part_Workbench/fr "Part Workbench/fr") peut être plus adapté aux objets qui contiennent des surfaces courbes.

## Utilisation

1. Sélectionnez un objet maillé
2. Sélectionnez l'option **Utilitaires → ![](/images/Arch_MeshToShape.svg) Convertir un maillage en une forme** du menu.

## Propriétés

## Limitations

## Script

*Voir aussi :* [Arch API](/Arch_API/fr "Arch API/fr") et [Débuter avec les scripts FreeCAD](/FreeCAD_Scripting_Basics/fr "FreeCAD Scripting Basics/fr").

Cet outil peut être utilisé dans une [macro](/Macros/fr "Macros/fr") et utilisé dans la console [Python](/Python/fr "Python/fr") en utilisant la fonction :

```
new_obj = meshToShape(obj, mark=True, fast=True, tol=0.001, flat=False, cut=True)

```

L'extrait de code ci-dessus convertit le `obj` (un maillage) donné en une forme joignant les facettes coplanaires.

* Si  `mark` est `True`, les objets non solides seront affichés en rouge.
* Si  `fast` est `True`, il utilise un algorithme plus rapide en créant un shell à partir des facettes puis en supprimant le séparateur.
* `tol` est la tolérance utilisée lors de la conversion de segments de maillage en fils.
* Si `flat` est `True`, les polylignes seront parfaitement plans pour être sûr qu'ils puissent être convertis en faces mais cela pourrait laisser des espaces dans le shell final.
* Si `cut` est `True`, les trous dans les faces sont créés par soustraction.

Exemple :

```
import Arch, Mesh, BuildRegularGeoms

Box = FreeCAD.ActiveDocument.addObject("Mesh::Cube", "Cube")
Box.Length = 1000
Box.Width = 2000
Box.Height = 1000
FreeCAD.ActiveDocument.recompute()

new_obj = Arch.meshToShape(Box)

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Arch_MeshToShape/fr&oldid=1567031>"