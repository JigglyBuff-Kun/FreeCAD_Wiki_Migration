---
title: Part Forme à partir d'un maillage
---
|  |
| --- |
| Part Forme à partir du maillage |
| Emplacement du menu |
| Part → Créer une forme à partir d'un maillage... |
| Ateliers |
| [Part](/Part_Workbench/fr "Part Workbench/fr") |
| Raccourci par défaut |
| *Aucun* |
| Introduit dans la version |
| - |
| Voir aussi |
| [Part Convertir en solide](/Part_MakeSolid/fr "Part MakeSolid/fr"), [Part Affiner la forme](/Part_RefineShape/fr "Part RefineShape/fr"), [Part Points à partir de maillage](/Part_PointsFromMesh/fr "Part PointsFromMesh/fr") |
|  |

## Introduction

La commande ![](/images/Part_ShapeFromMesh.svg) **Part Forme à partir du maillage** crée des formes à partir d'[objets Mesh](/Mesh/fr "Mesh/fr"). Les objets Mesh ont des capacités d'édition limitées dans FreeCAD, les convertir en [formes](/Shape/fr "Shape/fr") permettra de les utiliser avec bien plus d'outils booléens et de modifications.

L'opération inverse est [Mesh Tesselation](/Mesh_FromPartShape/fr "Mesh FromPartShape/fr") de l'![](/images/Workbench_Mesh.svg) [atelier Mesh](/Mesh_Workbench/fr "Mesh Workbench/fr").

## Utilisation

1. L'analyse et la réparation de l'objet maillé, si nécessaire, doivent être effectuées avant de lancer cette commande. Les outils appropriés pour cette tâche sont disponibles dans l'![](/images/Workbench_Mesh.svg)[atelier Mesh](/Mesh_Workbench/fr "Mesh Workbench/fr").
2. Sélectionnez un ou plusieurs objets Mesh.
3. Sélectionnez l'option **Part → ![](/images/Part_ShapeFromMesh.svg) Créer une forme à partir d'un maillage...** du menu.
4. La fenêtre de dialogue **Forme à partir du maillage** s'ouvre.
5. Vous pouvez cocher la case **Recomposer la forme** et spécifiez une tolérance :
   * Cette option n'est généralement pas nécessaire. Elle est destinée aux objets maillés qui ne sont pas étanches et présentent de petits espaces entre les arêtes.
   * Si l'option est sélectionnée, un composé de coques, au lieu d'un composé de faces, est créé.
   * L'opération de recomposition peut être exigeante en termes de calcul.
6. Pressez sur le bouton OK.
7. Pour chaque objet sélectionné, une [forme](/Shape/fr "Shape/fr") est créée en tant que nouvel objet séparé.
8. Vous pouvez utiliser ![](/images/Part_RefineShape.svg) [Part Affiner la forme](/Part_RefineShape/fr "Part RefineShape/fr") sur ces objets.
9. Vous pouvez transformer les objets finaux en solides avec ![](/images/Part_MakeSolid.svg) [Part Convertir en solide](/Part_MakeSolid/fr "Part MakeSolid/fr").

## Propriétés

Voir aussi : [Éditeur de propriétés](/Property_editor/fr "Property editor/fr")

La commande Part Forme à partir du maillage crée des objets [Part Feature](/Part_Feature/fr "Part Feature/fr") sans propriétés supplémentaires.

## Script

La création d'une forme [Shape](/Shape/fr "Shape/fr") à partir d'un [maillage](/Mesh/fr "Mesh/fr") peut être faite en utilisant la méthode `makeShapeFromMesh` à partir d'un [Part TopoShape](/Part_TopoShape/fr "Part TopoShape/fr"). Vous devez spécifier le maillage source et la tolérance puis affecter le résultat à un nouvel objet [Part Feature](/Part_Feature/fr "Part Feature/fr").

Notez que le maillage doit être recalculé avant d'être converti en Forme (Shape) sinon il n'y aura pas d'informations de topologie et la conversion ne réussira pas.

```
import FreeCAD as App
import Part

doc = App.ActiveDocument
mesh = doc.addObject("Mesh::Cube", "Mesh")
mesh.recompute()

shape = Part.Shape()
shape.makeShapeFromMesh(mesh.Mesh.Topology, 0.1)

solid = doc.addObject("Part::Feature", "Solid")
solid.Shape = Part.Solid(shape.removeSplitter())
solid.Placement.Base = App.Vector(15, 0, 0)
doc.recompute()

```

## Liens

* [Edit STL Files In FreeCAD](https://www.youtube.com/watch?v=5lwENZeNiNg&feature=youtu.be) vidéo par AllVisuals4U.

Retrieved from "<http://wiki.freecad.org/index.php?title=Part_ShapeFromMesh/fr&oldid=1514586>"