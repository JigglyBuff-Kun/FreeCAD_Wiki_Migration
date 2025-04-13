---
title: Part Forme din Plase
---
|  |
| --- |
| Part ShapeFromMesh‏‎ |
| poziția meniului |
| Part → Create shape from mesh... |
| Ateliere |
| [Part](/Part_Workbench/ro "Part Workbench/ro") |
| scurtătură |
| *Nici unul* |
| Prezentat în versiune |
| - |
| A se vedea, de asemenea, |
| [Part ConvertToSolid](/Part_MakeSolid/ro "Part MakeSolid/ro"), [Part RefineShape](/Part_RefineShape/ro "Part RefineShape/ro"), [Part PointsFromMesh](/index.php?title=Part_PointsFromMesh/ro&action=edit&redlink=1 "Part PointsFromMesh/ro (page does not exist)") |
|  |

## Introduction

## Introducere

Această comandă creează o formă dintr-un [mesh object](/Glossary#Mesh "Glossary") . Obiectele din rețea au capacități de editare limitate în FreeCAD, transformându-le în forme, permit utilizarea lor cu multe alte instrumente în FreeCAD (vezi și  [Notes](#Notes)).

The inverse operation is [Mesh FromPartShape](/Mesh_FromPartShape "Mesh FromPartShape") from the ![](/images/Workbench_Mesh.svg) [Mesh Workbench](/Mesh_Workbench "Mesh Workbench").

## Usage

## Utilizare

1. Selectați obeictul tip plasă.
2. Choose  Part → ![](/images/Part_ShapeFromMesh.png) Create shape from mesh ... from the top menu.
3. A popup-menu will ask for the tolerance for sewing shape (default value: 0,1)
4. A shape from the mesh object is created as a seperate new object.

## Properties

See also: [Property editor](/Property_editor "Property editor").

The Part ShapeFromMesh command creates [Part Feature](/Part_Feature "Part Feature") objects with no additional properties.

## Scripting

Creating a [Shape](/Shape "Shape") from a [Mesh](/Mesh "Mesh") can be done by using the `makeShapeFromMesh` method from a [Part TopoShape](/Part_TopoShape "Part TopoShape"); you need to specify the source mesh and tolerance, and assign the result to a new [Part Feature](/Part_Feature "Part Feature") object.

Notice that the mesh must be recalculated before it is converted to a Shape, otherwise there won't be topology information, and the conversion won't be successful.

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

## Links

* [Edit STL Files In FreeCAD](https://www.youtube.com/watch?v=5lwENZeNiNg&feature=youtu.be) video by AllVisuals4U.

Retrieved from "<http://wiki.freecad.org/index.php?title=Part_ShapeFromMesh/ro&oldid=1466363>"