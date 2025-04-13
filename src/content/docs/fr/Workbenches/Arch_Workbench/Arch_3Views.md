---
title: Arch 3 vues depuis un maillage
---
:::caution
Cette commande est obsolète.
Elle n'est plus disponible dansversion 1.0 et suivantes.
:::

|  |
| --- |
| Arch 3 Vues depuis un maillage |
| Emplacement du menu |
| Arch → Utilitaires → 3 vues depuis un maillage |
| Ateliers |
| [Arch](/Arch_Workbench/fr "Arch Workbench/fr") |
| Raccourci par défaut |
| *Aucun* |
| Introduit dans la version |
| - |
| Voir aussi |
| [Arch Diviser une maillage](/Arch_SplitMesh/fr "Arch SplitMesh/fr"), [Arch Maillage en une forme](/Arch_MeshToShape/fr "Arch MeshToShape/fr") |
|  |

## Description

*Cette commande n'est pas utilisée actuellement.* Elle servira à générer des vues planes, basées sur des formes, à partir d'un objet [Atelier Mesh](/Mesh_Workbench/fr "Mesh Workbench/fr"), à utiliser par l'outil ![](/images/Arch_Equipment.svg) [Arch Equipement](/Arch_Equipment/fr "Arch Equipment/fr").

## Utilisation

* Sélectionnez un objet Mesh
* Sélectionnez le bouton ![](/images/Arch_3Views.svg) ou par le menu du haut Arch → Utilitaires → ![](/images/Arch_3Views.svg) 3 vues depuis un maillage.

## Script

*Voir aussi :* [Arch API](/Arch_API/fr "Arch API/fr") et [Débuter avec les scripts FreeCAD](/FreeCAD_Scripting_Basics/fr "FreeCAD Scripting Basics/fr").

Cet outil peut être utilisé dans une [macro](/Macros/fr "Macros/fr") et utilisé dans la console [Python](/Python/fr "Python/fr") en utilisant la fonction :

```
shape = createMeshView(obj, direction=FreeCAD.Vector(0, 0, -1), outeronly=False, largestonly=False)

```

* Crée un `shape` plan qui est la projection de l'objet maillé donné (`obj`) dans la `direction` donnée.
* Si `outeronly` est `True`, seul le contour extérieur est pris en compte, en ignorant les trous intérieurs.
* Si `mostonly` est `True`, seul le plus grand segment du maillage donné sera utilisé.

Utilisez `Part.show()` pour afficher la forme plane résultante.

Exemple :

```
import FreeCAD, Draft, Arch, Mesh, MeshPart

Line = Draft.makeWire([FreeCAD.Vector(0, 0, 0), FreeCAD.Vector(2000, 2000, 0)])
Wall = Arch.makeWall(Line, width=150, height=3000)
FreeCAD.ActiveDocument.recompute()

Shape = Wall.Shape.copy(False)
Shape.Placement = Wall.getGlobalPlacement()

mesh_obj = FreeCAD.ActiveDocument.addObject("Mesh::Feature", "Mesh")
mesh_obj.Mesh = MeshPart.meshFromShape(Shape=Shape, MaxLength=520)
mesh_obj.ViewObject.DisplayMode = "Flat Lines"
FreeCAD.ActiveDocument.recompute()

XAxis = FreeCAD.Vector(1, 0, 0)
YAxis = FreeCAD.Vector(0, 1, 0)
ZAxis = FreeCAD.Vector(0, 0, -1)

s1 = Arch.createMeshView(mesh_obj, ZAxis)
s2 = Arch.createMeshView(mesh_obj, XAxis)
s3 = Arch.createMeshView(mesh_obj, YAxis)

Part.show(s1)
Part.show(s2)
Part.show(s3)

Wall.ViewObject.Visibility = False
mesh_obj.ViewObject.Visibility = False

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Arch_3Views/fr&oldid=1567054>"