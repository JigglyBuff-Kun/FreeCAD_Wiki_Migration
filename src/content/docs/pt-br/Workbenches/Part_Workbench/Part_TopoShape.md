---
title: Part TopoShape/pt-br
---
## Introdução

A [Part TopoShape](/Part_TopoShape "Part TopoShape"), or formally a `Part::TopoShape`, is a class that defines a parametric **topological shape** in the software. Objects in the document that show something in the [3D view](/3D_view "3D view") normally have a TopoShape.

The topological shapes, as well as their methods, are defined by the [OpenCASCADE Technology](/OpenCASCADE "OpenCASCADE") kernel (OCCT). FreeCAD uses these shapes, and builds [App DocumentObjects](/App_DocumentObject "App DocumentObject") around them.

Another type of class is that of [meshes](/Mesh "Mesh"); this class is not very parametric because it can't be redefined easily except by specifying individual vertices and triangular surfaces.

![](/images/Shape_and_mesh.svg)

Left: parametric [Part TopoShape](/Part_TopoShape "Part TopoShape") defined by properties. Right: non-parametric [mesh](/Mesh "Mesh"), defined by vertices and triangular surfaces.

![](/images/FreeCAD_core_objects.svg)

Simplified diagram of the relationships between the core objects in the program. The `Part::TopoShape` class is embedded in the `Part::Feature` object and from there it is propagated to all objects that are derived from it.

## Utilização

The Part TopoShape is an object that is assigned to some [App DocumentObjects](/App_DocumentObject "App DocumentObject").

In particular, the basic object that handles these types of attributes is the [Part Feature](/Part_Feature "Part Feature") (`Part::Feature` class). All objects derived from this class will have access to a Part TopoShape.

Some of the most important objects with Part TopoShape are the following:

* Any primitive solid created with the [Part Workbench](/Part_Workbench "Part Workbench").
* Any [PartDesign Body](/PartDesign_Body "PartDesign Body") and [PartDesign Feature](/PartDesign_Feature "PartDesign Feature") created with the [PartDesign Workbench](/PartDesign_Workbench "PartDesign Workbench").
* Any object derived from [Part Part2DObject](/Part_Part2DObject "Part Part2DObject"), like most objects created with the [Draft Workbench](/Draft_Workbench "Draft Workbench").
* Any [sketch](/Sketch "Sketch"), that is, [Sketcher SketchObject](/Sketcher_SketchObject "Sketcher SketchObject"), created with the [Sketcher Workbench](/Sketcher_Workbench "Sketcher Workbench").
* Any object created by importing a STEP, BREP, and similar solid format files.

## Scripting

*See also:* [FreeCAD Scripting Basics](/FreeCAD_Scripting_Basics "FreeCAD Scripting Basics"), and [scripted objects](/Scripted_objects "Scripted objects").

All objects derived from `Part::Feature` will have a [Part TopoShape](/Part_TopoShape "Part TopoShape"), which is normally accessible from its `Shape` attribute.

```
import FreeCAD as App

doc = App.newDocument()
obj = App.ActiveDocument.addObject("Part::Box", "Box")
print(obj.Shape)

```

A TopoShape has many attributes (variables) and methods that contain information about it, and which allow doing operations with it. These variables and methods can be tested in the [Python console](/Python_console "Python console").

```
print(obj.Shape.Area)
print(obj.Shape.BoundBox)
print(obj.Shape.CenterOfMass)
print(obj.Shape.ShapeType)

obj.Shape.check()
obj.Shape.copy()
obj.Shape.exportStep("my_file.step")
obj.Shape.exportStl("my_file.stl")

```

For a full list of attributes and methods, consult the [source documentation](/Source_documentation "Source documentation"), and the ![](/images/Std_PythonHelp.svg) [Std PythonHelp](/Std_PythonHelp "Std PythonHelp") tool.

You can obtain a quick summary of all methods using Python's built-in `help()` function.

```
help(obj.Shape)

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Part_TopoShape/pt-br&oldid=1281754>"