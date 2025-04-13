---
title: Сетка
---
## Введение

In FreeCAD the word "[Mesh](/Mesh "Mesh")" is normally used to refer to a [Mesh MeshObject](/Mesh_MeshObject "Mesh MeshObject") (`Mesh::MeshObject` class), a type of object that defines 3D data but is not a solid "[Shape](/Shape "Shape")".

Meshes are very simple objects, containing only vertices (points), edges and triangular faces. In general, they are easy to create, modify, subdivide, and stretch, and can be passed from one application to another without any loss of detail. In addition, since meshes contain very simple data, 3D applications like animation software and video games can manage very large quantities of them (millions of triangles) without using a lot of computing resources.

However, in the field of engineering meshes present one big limitation: they are only made of surfaces, and have no "mass" information, so they don't behave like "solids". This means that solid-based operations, like [boolean addition or subtraction](/Part_Boolean "Part Boolean"), are difficult to perform on meshes. Also, since they are defined by individual points, they are hard to describe in a parametric fashion.

See [Mesh MeshObject](/Mesh_MeshObject "Mesh MeshObject") for more information about this type of object, and see [Polygon mesh](https://en.wikipedia.org/wiki/Polygon_mesh) for generic information in computer systems.

![](/images/Shape_and_mesh.svg)

Left: parametric [shape](/Shape "Shape") defined by properties. Right: [mesh](/Mesh "Mesh"), defined by vertices and triangular surfaces.

## Usage

Meshes are normally created by internal functions of the [Mesh Workbench](/Mesh_Workbench "Mesh Workbench"), or by importing mesh format files, like STL and OBJ.

Essentially, every object derived from a [Mesh Feature](/Mesh_Feature "Mesh Feature") (`Mesh::Feature` class) is expected to hold and manipulate a Mesh.

Since FreeCAD is primarily designed to be a solid modeller, it is better suited to deal with solid [Shapes](/Shape "Shape"). It can import and display Meshes in the [3D view](/3D_view "3D view"), and the [Mesh Workbench](/Mesh_Workbench "Mesh Workbench") offers some commands to directly manipulate them. But in many cases the Mesh first needs to be converted to a [Shape](/Shape "Shape") (see [Part ShapeFromMesh](/Part_ShapeFromMesh "Part ShapeFromMesh")), or the geometry needs to be recreated using solid modelling techniques from the [Part Workbench](/Part_Workbench "Part Workbench") or the [PartDesign Workbench](/PartDesign_Workbench "PartDesign Workbench").

## Finite element meshes

In FreeCAD the word "[Mesh](/Mesh "Mesh")" may also refer to a specific object that will be used in finite element analysis (FEA).

When an object with a solid [Shape](/Shape "Shape") is used in the [FEM Workbench](/FEM_Workbench "FEM Workbench") it will be discretized into a triangular mesh. In this case, the resulting object is a [FEM FemMeshObject](/FEM_Mesh "FEM Mesh") (`Fem::FemMeshObject` class), and is not derived from a [Mesh Feature](/Mesh_Feature "Mesh Feature") (`Mesh::Feature` class).

For more information see [FEM Workbench](/FEM_Workbench "FEM Workbench") and [FEM Mesh](/FEM_Mesh "FEM Mesh").

## More information

* [Polygonal (mesh) geometry](https://forum.freecadweb.org/viewtopic.php?f=8&t=47493)

Retrieved from "<http://wiki.freecad.org/index.php?title=Mesh/ru&oldid=1102245>"