---
title: Arch Diviser un maillage
---
:::caution
Cette commande fait partie de l'ensemble intégré de l'atelier BIMavec la V1.0Cette page a été mise à jour pour cette version.
:::

|  |
| --- |
| Arch Diviser un maillage |
| Emplacement du menu |
| Utilitaires → Diviser un maillage |
| Ateliers |
| [BIM](/BIM_Workbench/fr "BIM Workbench/fr") |
| Raccourci par défaut |
| *Aucun* |
| Introduit dans la version |
| - |
| Voir aussi |
| [Arch Sélection de maillages non-manifold](/Arch_SelectNonSolidMeshes/fr "Arch SelectNonSolidMeshes/fr"), [Arch Maillage en une forme](/Arch_MeshToShape/fr "Arch MeshToShape/fr") |
|  |

## Description

L'outil **Arch Diviser un maillage** sépare les composants d'un objet [Mesh](/Mesh_Workbench/fr "Mesh Workbench/fr") sélectionné.

## Utilisation

1. Sélectionnez un objet mesh.
2. Sélectionnez l'option **Utilitaires → ![](/images/Arch_SplitMesh.svg) Diviser un maillage** du menu.

## Script

*Voir aussi :* [Arch API](/Arch_API/fr "Arch API/fr") et [Débuter avec les scripts FreeCAD](/FreeCAD_Scripting_Basics/fr "FreeCAD Scripting Basics/fr").

L'outil Diviser un maillage est utilisable dans une [macro](/Macros/fr "Macros/fr") et dans la console [Python](/Python/fr "Python/fr") en utilisant la fonction suivante :

```
new_list = splitMesh(obj, mark=True)

```

* Divise l'objet maillé donné (`obj`) en composants séparés.
* Si `mark` est mis à `True`, les composants [non-manifolds](https://fr.wikipedia.org/wiki/Vari%C3%A9t%C3%A9_(g%C3%A9om%C3%A9trie)) seront peints en rouge.
* `new_list` est une liste de tous les composants individuels qui composent le maillage.

Exemple :

```
import FreeCAD, Draft, Arch, Mesh, MeshPart

Line = Draft.makeWire([FreeCAD.Vector(0, 0, 0),FreeCAD.Vector(2000, 2000, 0)])
Wall = Arch.makeWall(Line, width=150, height=3000)
FreeCAD.ActiveDocument.recompute()

Shape = Wall.Shape.copy(False)
Shape.Placement = Wall.getGlobalPlacement()

mesh_obj = FreeCAD.ActiveDocument.addObject("Mesh::Feature", "Mesh")
mesh_obj.Mesh = MeshPart.meshFromShape(Shape=Shape, MaxLength=520)
mesh_obj.ViewObject.DisplayMode = "Flat Lines"

new_list = Arch.splitMesh(mesh_obj)

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Arch_SplitMesh/fr&oldid=1567050>"