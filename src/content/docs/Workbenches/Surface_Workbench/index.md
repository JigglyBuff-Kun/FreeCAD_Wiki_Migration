---
title: Surface Workbench
---

![](/src/assets/images/Workbench_Surface.svg)

Surface workbench icon

## Introduction

The ![](/src/assets/images/Workbench_Surface.svg) [Surface Workbench](/Surface_Workbench "Surface Workbench") provides tools to create and modify simple [NURBS surfaces](https://en.wikipedia.org/wiki/Non-uniform_rational_B-spline). These tools have a similar functionality to the ![](/src/assets/images/Part_Builder.svg) [Part Builder](/Part_Builder "Part Builder") tool when the **Face from edges** option is used. However, unlike that tool, the tools of the Surface Workbench are parametric and provide additional options. In this respect, the tools in this workbench are similar to ![](/src/assets/images/PartDesign_AdditiveLoft.svg) [PartDesign AdditiveLoft](/PartDesign_AdditiveLoft "PartDesign AdditiveLoft") and ![](/src/assets/images/PartDesign_AdditivePipe.svg) [PartDesign AdditivePipe](/PartDesign_AdditivePipe "PartDesign AdditivePipe").

Some of the features provided are:

- Creation of surfaces from boundary edges.
- Alignment of the curvature from neighboring faces.
- Constraining of surfaces to additional curves and vertices.
- Extension of faces.
- A mesh can be used as a template to create spline curves on its surface.

![](/src/assets/images/Surface_example.png)

## Usage

The Surface Workbench intends to create faces with shapes, which is not possible to do with the standard tools in other workbenches.

![](/src/assets/images/Toy_Duck.png)

Surface created with sketches placed in datum planes with the tools of the [PartDesign Workbench](/PartDesign_Workbench "PartDesign Workbench")

The Surface Workbench integrates with other workbenches of FreeCAD. The above example was created from ![](/src/assets/images/Sketcher_NewSketch.svg) [Sketches](/Sketch "Sketch") placed on ![](/src/assets/images/PartDesign_Plane.svg) [PartDesign Datum planes](/PartDesign_Plane "PartDesign Plane") in the ![](/src/assets/images/Workbench_PartDesign.svg) [PartDesign Workbench](/PartDesign_Workbench "PartDesign Workbench"). The design can be fully parametric if all datum planes and sketches are defined accordingly. In most cases it is sufficient to draw a closed sketch to define the boundary of a face, and then use different options to further modify its shape.

The generated surface cannot be placed inside a ![](/src/assets/images/PartDesign_Body.svg) [PartDesign Body](/PartDesign_Body "PartDesign Body"). However, the generated surface can be contained inside a ![](/src/assets/images/Std_Part.svg) [Std Part](/Std_Part "Std Part") together with the associated ![](/src/assets/images/PartDesign_Body.svg) [PartDesign Body](/PartDesign_Body "PartDesign Body") that holds the datum planes and sketches. The non-parametric ![](/src/assets/images/Part_Builder.svg) [Part Builder](/Part_Builder "Part Builder") tool can then be used in order to create a [shell](/Glossary#Shell "Glossary") and finally a [solid](/Glossary#Solid "Glossary").

## Tools

- ![](/src/assets/images/Surface_Filling.svg) [Filling](/Surface_Filling "Surface Filling"): fills a series of boundary curves with a surface.

- ![](/src/assets/images/Surface_GeomFillSurface.svg) [Fill boundary curves](/Surface_GeomFillSurface "Surface GeomFillSurface"): creates a surface from two, three or four boundary edges.

- ![](/src/assets/images/Surface_Sections.svg) [Sections](/Surface_Sections "Surface Sections"): creates a surface from edges that represent transversal sections of surface.

- ![](/src/assets/images/Surface_ExtendFace.svg) [Extend face](/Surface_ExtendFace "Surface ExtendFace"): extrapolates the surface at the boundaries with its local U parameter and V parameter.

- ![](/src/assets/images/Surface_CurveOnMesh.svg) [Curve on mesh](/Surface_CurveOnMesh "Surface CurveOnMesh"): creates approximated spline segments on top of a selected [mesh](/Mesh_Workbench "Mesh Workbench").

- ![](/src/assets/images/Surface_BlendCurve.svg) [Blend Curve](/Surface_BlendCurve "Surface BlendCurve"): creates a Bezier curve between two edges, with desired continuity.

Retrieved from "<http://wiki.freecad.org/index.php?title=Surface_Workbench/en&oldid=1406819>"
