---
title: Part ShapeFromMesh
---

|                                                                                                                                                                                      |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Part ShapeFromMesh‏‎                                                                                                                                                                 |
| Menu location                                                                                                                                                                        |
| Part → Create shape from mesh...                                                                                                                                                     |
| Workbenches                                                                                                                                                                          |
| [Part](/Part_Workbench "Part Workbench")                                                                                                                                             |
| Default shortcut                                                                                                                                                                     |
| _None_                                                                                                                                                                               |
| Introduced in version                                                                                                                                                                |
| -                                                                                                                                                                                    |
| See also                                                                                                                                                                             |
| [Part ConvertToSolid](/Part_MakeSolid "Part MakeSolid"), [Part RefineShape](/Part_RefineShape "Part RefineShape"), [Part PointsFromMesh](/Part_PointsFromMesh "Part PointsFromMesh") |
|                                                                                                                                                                                      |

## Introduction

The ![](/images/Part_ShapeFromMesh.svg) **Part ShapeFromMesh** command creates shapes from [mesh objects](/Mesh "Mesh"). Mesh objects have limited editing capabilities in FreeCAD, converting them to [shapes](/Shape "Shape") will allow their use with many more boolean and modification commands.

The inverse operation is [Mesh FromPartShape](/Mesh_FromPartShape "Mesh FromPartShape") from the ![](/images/Workbench_Mesh.svg) [Mesh Workbench](/Mesh_Workbench "Mesh Workbench").

## Usage

1. Analyzing and repairing the mesh object, if needed, should be done before launching this command. Appropriate tools for this task are available in the ![](/images/Workbench_Mesh.svg) [Mesh Workbench](/Mesh_Workbench "Mesh Workbench").
2. Select one or more mesh objects.
3. Select the **Part → ![](/images/Part_ShapeFromMesh.svg) Create shape from mesh** option from the menu.
4. The **Shape from mesh** dialog opens.
5. Optionally check the **Sew shape** checkbox and specify a tolerance:
   - This option is usually not needed. It is meant for mesh objects that are not watertight and have small gaps between edges.
   - If the option is selected a compound of shells, instead of a compound of faces, is created.
   - The sewing operation may be computationally demanding.
6. Press the OK button.
7. For each selected mesh object a [shape](/Shape "Shape") is created as a separate new object.
8. Optionally use ![](/images/Part_RefineShape.svg) [Part RefineShape](/Part_RefineShape "Part RefineShape") on these objects.
9. Optionally turn the final objects into solids with ![](/images/Part_MakeSolid.svg) [Part MakeSolid](/Part_MakeSolid "Part MakeSolid").

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

- [Edit STL Files In FreeCAD](https://www.youtube.com/watch?v=5lwENZeNiNg&feature=youtu.be) video by AllVisuals4U.

Retrieved from "<http://wiki.freecad.org/index.php?title=Part_ShapeFromMesh/en&oldid=1466359>"
