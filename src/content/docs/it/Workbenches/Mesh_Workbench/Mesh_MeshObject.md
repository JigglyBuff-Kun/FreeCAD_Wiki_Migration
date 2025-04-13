---
title: Mesh MeshObject
---
## Descrizione

A [Mesh MeshObject](/Mesh_MeshObject "Mesh MeshObject"), or formally a `Mesh::MeshObject`, is a class that defines a mesh data structure in the software. This is similar to the [Part TopoShape](/Part_TopoShape "Part TopoShape") but for [meshes](/Mesh "Mesh").

Meshes are normally created with the [Mesh Workbench](/Mesh_Workbench "Mesh Workbench"), or imported from STL, OBJ, and similar mesh file formats.

Please note that the ![](/images/Workbench_FEM.svg) [FEM Workbench](/FEM_Workbench "FEM Workbench") also uses meshes, but in this case, it uses a different data structure, called [FEM FemMesh](/FEM_Mesh "FEM Mesh") (`Fem::FemMesh` class). This information does not apply to FEM meshes.

![](/images/FreeCAD_core_objects.svg)

Simplified diagram of the relationships between the core objects in the program. The `Mesh::MeshObject` class is embedded in the `Mesh::Feature` object and from there it is propagated to all objects that are derived from it.

## Utilizzo

The Mesh MeshObject is an object that is assigned to some [App DocumentObjects](/App_DocumentObject "App DocumentObject").

In particular, the basic object that handles these types of attributes is the [Mesh Feature](/Mesh_Feature "Mesh Feature") (`Mesh::Feature` class). All objects derived from this class will have access to a Mesh MeshObject.

The most notable objects that will have a Mesh MeshObject are the following:

* Any primitive mesh created with the [Mesh Workbench](/Mesh_Workbench "Mesh Workbench").
* Any object created by importing an STL, OBJ, and similar mesh format files.

## Script

*See also:* [FreeCAD Scripting Basics](/FreeCAD_Scripting_Basics "FreeCAD Scripting Basics"), and [scripted objects](/Scripted_objects "Scripted objects"). For a full list of attributes and methods, consult the [source documentation](/Source_documentation "Source documentation"), and the [Std PythonHelp](/Std_PythonHelp "Std PythonHelp") tool.

All objects derived from `Mesh::Feature` will have a [Mesh MeshObject](/Mesh_MeshObject "Mesh MeshObject"), which is normally accessible from its `Mesh` attribute.

```
import FreeCAD as App

doc = App.newDocument()
obj = App.ActiveDocument.addObject("Mesh::Cube", "Cube")
App.ActiveDocument.recompute()
print(obj.Mesh)

```

A MeshObject has many attributes (variables) and methods that contain information about it, and which allow doing operations with it. These variables and methods can be tested in the [Python console](/Python_console "Python console").

```
print(obj.Mesh.Area)
print(obj.Mesh.BoundBox)
print(obj.Mesh.CountPoints)
print(obj.Mesh.Volume)

obj.Mesh.copy()
obj.Mesh.countComponents()
obj.Mesh.getEigenSystem()
obj.Mesh.write("my_file.stl")

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Mesh_MeshObject/it&oldid=1072693>"