---
title: Shape
---

## Introduction

In FreeCAD the word "[Shape](/Shape "Shape")" is normally used to refer to a [Part TopoShape](/Part_TopoShape "Part TopoShape") (`Part::TopoShape` class), a type of object that gives an element its 3D geometrical and parametric representation (cube, pyramid, sphere, cylinder, fusion, etc.).

Essentially all objects that are displayed in the [3D view](/3D_view "3D view") have a [TopoShape](/Part_TopoShape "Part TopoShape"), with the exception of "[Meshes](/Mesh "Mesh")", which have a [MeshObject](/Mesh_MeshObject "Mesh MeshObject") (`Mesh::MeshObject` class).

See [Part TopoShape](/Part_TopoShape "Part TopoShape") for more information about this type of object.

![](/images/Shape_and_mesh.svg)

Left: parametric [shape](/Shape "Shape") defined by properties. Right: [mesh](/Mesh "Mesh"), defined by vertices and triangular surfaces.

## Usage

Shapes are normally created by internal functions of the [Part Workbench](/Part_Workbench "Part Workbench"), and are ultimately defined by the [OpenCASCADE Technology](/OpenCASCADE "OpenCASCADE") kernel (OCCT).

Once a Shape is created, it can be used and modified by all [workbenches](/Workbenches "Workbenches") by creating [scripted objects](/Scripted_objects "Scripted objects") around that Shape.

Essentially, every object derived from a [Part Feature](/Part_Feature "Part Feature") (`Part::Feature` class) is expected to hold and manipulate a Shape.

Any OpenCascade Shape has a tesselation mainly to view the Shape on screen. More information about this can be found in this German [forum post](https://forum.freecad.org/viewtopic.php?t=77521&start=10#p674947) and in the [OpenCascad Mesh documentation](https://dev.opencascade.org/doc/overview/html/occt_user_guides__mesh.html).

## Notes

In informal usage, a "Shape" may be any geometrical figure that is visible in the [3D view](/3D_view "3D view"), and thus its concept may be confused with that of "[Body](/Body "Body")" or "[Part](/Part "Part")".

However, when more precision is required, the distinction must be made.

- A "[Body](/Body "Body")" is an object derived from a [Part Feature](/Part_Feature "Part Feature") (`Part::Feature` class), created with the [PartDesign Workbench](/PartDesign_Workbench "PartDesign Workbench").
- A "Shape" is an internal object, embedded within the "[Body](/Body "Body")".
- A "[Part](/Part "Part")" is used to group several "[Bodies](/Body "Body")" to form an [assembly](/Assembly "Assembly"). A "Part" has a collection of "Shapes", but doesn't have a "Shape" of its own.

Retrieved from "<http://wiki.freecad.org/index.php?title=Shape/en&oldid=1254591>"
