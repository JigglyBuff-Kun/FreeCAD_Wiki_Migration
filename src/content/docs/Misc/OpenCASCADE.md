---
title: OpenCASCADE
---

## Description

[OpenCASCADE Technology](/OpenCASCADE "OpenCASCADE"), **OCC** or **OCCT** for short, is a collection of C++ libraries that together constitute a professional computer aided design (CAD) kernel for modelling 2D and 3D objects, and building specialized tools for manufacturing, simulation, or visualization. OpenCASCADE is the heart of the geometrical capabilities of FreeCAD.

The geometrical classes of OCCT are mostly implemented and made available in FreeCAD through the [Part](/Part_Workbench "Part Workbench") module, on which most other [workbenches](/Workbenches "Workbenches") depend. It also provides internal functions to read and write different file formats like STEP and IGES, and to perform 2D projections, which can be used to create technical drawings in [TechDraw](/TechDraw_Workbench "TechDraw Workbench").

![](/images/Part_Workbench_relationships.svg)

OpenCASCADE provides the basic geometrical classes and drawing functions to the [Part](/Part_Workbench "Part Workbench") module, which are then used by all workbenches in FreeCAD.

OpenCASCADE should not be confused with [OpenSCAD](https://www.openscad.org/), which is a different open source project to build 3D models, and which is accessible through the [OpenSCAD Workbench](/OpenSCAD_Workbench "OpenSCAD Workbench").

OpenCASCADE is free software governed by the terms of the GNU Lesser General Public License (LGPL) version 2.1 with an additional exception.

## Installation

OpenCASCADE is a core component of FreeCAD, so if you get FreeCAD from one of the links in the [Download](/Download "Download") page, you will have it installed, and no further installation is necessary.

However, if you would like to develop applications that use OCCT, or would like to contribute C++ code to FreeCAD, then you need to install the development files of OCCT. In this case, the procedure is explained in [Compiling](/Compiling "Compiling") for each of the main systems, Linux, Windows, and MacOS.

## Community edition

A "community edition" of OpenCASCADE, abbreviated OCE, was released in 2011, based on the official OpenCASCADE sources (OCCT) of version 6.5. In theory the community edition OCE should be compatible with the main version OCCT in most aspects, while having some additional code contributed by the community.

However, this alternative distribution stopped active development around 2017, and lagged behind the main version in terms of features and bug fixes. For this reason, since FreeCAD v0.17, FreeCAD is compiled exclusively with OCCT, and OCE is not tested.

In some older Linux distributions, FreeCAD is compiled against OCE 0.18, equivalent to OCCT 6.9.x, causing various issues that have been solved already in the main OCCT 7.x releases. If this is the case, try removing OCE, and installing OCCT instead. If this is not possible, use the [AppImage](/AppImage "AppImage") to get a modern FreeCAD with an updated OCCT version.

## History

The Cas.CADE geometric kernel was originally closed source, but it became open source under its current name around the year 2000. Shortly after, the FreeCAD project was started, with the oldest files being dated to January 2001. Read more in [History](/History "History").

OpenCASCADE version 6.6 and earlier were governed by its own "OCCT public license", which made it not entirely "free software". This was solved with the release of OCCT 6.7 (2013), when it adopted the LGPL2 license.

## OCCT geometric concepts

In OpenCascade terminology, we distinguish between geometric primitives and topological shapes. A geometric primitive can be a point, a line, a circle, a plane, etc. or even some more complex types like a B-Spline curve or a surface. A shape can be a vertex, an edge, a wire, a face, a solid or a compound of other shapes. The geometric primitives are not made to be directly displayed on the 3D scene, but rather to be used as building geometry for shapes. For example, an edge can be constructed from a line or from a portion of a circle.

In summary, geometry primitives are "shapeless" building blocks, while [topological shapes](/Part_TopoShape "Part TopoShape") are the real objects built on them.

A complete list of all primitives and shapes refer to the [OCC documentation](https://dev.opencascade.org/resources/documentation) (Alternative: [sourcearchive.com](https://www.opencascade.com/doc/occt-7.4.0/refman/html/)) and search for **Geom\_\*** (for geometric primitives) and **TopoDS\_\*** (for shapes). There you can also read more about the differences between them. Please note that the official OCC documentation is not available online (you must download an archive) and is mostly aimed at programmers, not at end-users. But hopefully you'll find enough information to get started here. Also see [Modeling Data User's Guide](https://www.opencascade.com/doc/occt-7.0.0/overview/html/occt_user_guides__modeling_data.html).

> _At a very high level, topology tells what pieces an object is made of, and the logical relationships between them. A shape is made of a certain set of faces. A face is bounded by a certain set of edges. Two faces are adjacent if they share a common edge._

> _Topology alone does not tell you the size, curvature, or 3D locations of any of those pieces. However, each piece of topology does knows about it's underlying geometry. A face knows what surface it lies on. An edge knows what curve it lies on. The geometry knows about curvature and location in space._ - [Source](https://www.opencascade.com/content/geometry-and-topology)

---

> _Thus, Topology defines the relationship between simple geometric entities, which can be linked together to represent complex shapes._ - [Modeling Data User's Guide](https://www.opencascade.com/doc/occt-7.0.0/overview/html/occt_user_guides__modeling_data.html)

![](/images/ClassTopoDS_Shape_inherit_graph.png)

**Note:** Only 3 types of topological objects have geometric representations – vertex, edge, and face ([Source](https://opencascade.blogspot.com/2009/02/topology-and-geometry-in-open-cascade.html)).

The geometric types actually can be divided into two major groups: curves and surfaces. Out of the curves (line, circle, ...) you can directly build an edge, out of the surfaces (plane, cylinder, ...) a face can be built. For example, the geometric primitive line is unlimited, i.e. it is defined by a base vector and a direction vector while its shape representation must be something limited by a start and end point. And a box -- a solid -- can be created by six limited planes.

From an edge or face you can also go back to its geometric primitive counterpart.

Thus, out of shapes you can build very complex parts or, the other way round, extract all sub-shapes a more complex shape is made of.

![](/images/Part_TopoShape_relationships.svg)

The `Part::TopoShape` class is the geometrical object that is seen on screen. Essentially all workbenches use these [TopoShapes](/Part_TopoShape "Part TopoShape") internally to build and display edges, faces, and solids.

## Related

- OpenCASCADE Technology (OCCT) [main website](http://www.opencascade.com)
- OCCT [development portal](https://dev.opencascade.org/)
- OCCT [latest release](https://www.opencascade.com/content/latest-release)
- OCCT [git repository](https://git.dev.opencascade.org/gitweb/?p=occt.git)
- OpenCASCADE Community Edition (OCE) [git repository](https://github.com/tpaviot/oce)
- [Open Cascade Technology OCCT](http://en.wikipedia.org/wiki/Open_Cascade_Technology) on Wikipedia
- Glossary, [Open CASCADE](/Glossary#Open_CASCADE "Glossary")
- Tracking OCCT bugs in the FreeCAD bugtracker [(thread)](https://forum.freecadweb.org/viewtopic.php?f=10&t=20264)

Retrieved from "<http://wiki.freecad.org/index.php?title=OpenCASCADE/en&oldid=1159305>"
