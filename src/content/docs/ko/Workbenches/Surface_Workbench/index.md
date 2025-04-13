---
title: 표면 작업대
---

![](/images/Workbench_Surface.svg)

Surface workbench icon

## 소개

![](/images/Workbench_Surface.svg) **표면 작업대**는 간단한 [NURBS 표면](https://en.wikipedia.org/wiki/Non-uniform_rational_B-spline)을 만들고 수정하는 도구를 제공합니다. **Face from edges** 옵션을 사용하는 경우 이 도구들은 ![](/images/Part_Builder.svg) [Part Builder](/Part_Builder "Part Builder") 도구와 유사한 기능을 갖지만 해당 도구와 달리 표면 작업대의 도구는 매개 변수적이며 추가 옵션을 제공합니다. 그러나 해당 도구와 달리 표면 작업대의 도구는 파라메트릭하며 추가 옵션을 제공합니다. 이 점에서 이 작업대의 도구는 ![](/images/PartDesign_AdditiveLoft.svg) [PartDesignAdditiveLoft](/PartDesign_AdditiveLoft "PartDesign AdditiveLoft") 및 ![](/images/PartDesign_AdditivePipe.svg) [PartDesignAdditivePipe](/PartDesign_AdditivePipe "PartDesign AdditivePipe")과 유사합니다.

Some of the features provided are:

- Creation of surfaces from boundary edges.
- Alignment of the curvature from neighboring faces.
- Constraining of surfaces to additional curves and vertices.
- Extension of faces.
- A mesh can be used as a template to create spline curves on its surface.

![](/images/Surface_example.png)

## Usage

The Surface Workbench intends to create faces with shapes, which is not possible to do with the standard tools in other workbenches.

![](/images/Toy_Duck.png)

Surface created with sketches placed in datum planes with the tools of the [PartDesign Workbench](/PartDesign_Workbench "PartDesign Workbench")

The Surface Workbench integrates with other workbenches of FreeCAD. The above example was created from ![](/images/Sketcher_NewSketch.svg) [Sketches](/Sketch "Sketch") placed on ![](/images/PartDesign_Plane.svg) [PartDesign Datum planes](/PartDesign_Plane "PartDesign Plane") in the ![](/images/Workbench_PartDesign.svg) [PartDesign Workbench](/PartDesign_Workbench "PartDesign Workbench"). The design can be fully parametric if all datum planes and sketches are defined accordingly. In most cases it is sufficient to draw a closed sketch to define the boundary of a face, and then use different options to further modify its shape.

The generated surface cannot be placed inside a ![](/images/PartDesign_Body.svg) [PartDesign Body](/PartDesign_Body "PartDesign Body"). However, the generated surface can be contained inside a ![](/images/Std_Part.svg) [Std Part](/Std_Part "Std Part") together with the associated ![](/images/PartDesign_Body.svg) [PartDesign Body](/PartDesign_Body "PartDesign Body") that holds the datum planes and sketches. The non-parametric ![](/images/Part_Builder.svg) [Part Builder](/Part_Builder "Part Builder") tool can then be used in order to create a [shell](/Glossary#Shell "Glossary") and finally a [solid](/Glossary#Solid "Glossary").

## Tools

- ![](/images/Surface_Filling.svg) [Filling](/Surface_Filling "Surface Filling"): fills a series of boundary curves with a surface.

- ![](/images/Surface_GeomFillSurface.svg) [Fill boundary curves](/Surface_GeomFillSurface "Surface GeomFillSurface"): creates a surface from two, three or four boundary edges.

- ![](/images/Surface_Sections.svg) [Sections](/Surface_Sections "Surface Sections"): creates a surface from edges that represent transversal sections of surface.

- ![](/images/Surface_ExtendFace.svg) [Extend face](/Surface_ExtendFace "Surface ExtendFace"): extrapolates the surface at the boundaries with its local U parameter and V parameter.

- ![](/images/Surface_CurveOnMesh.svg) [Curve on mesh](/Surface_CurveOnMesh "Surface CurveOnMesh"): creates approximated spline segments on top of a selected [mesh](/Mesh_Workbench "Mesh Workbench").

- ![](/images/Surface_BlendCurve.svg) [Blend Curve](/Surface_BlendCurve "Surface BlendCurve"): creates a Bezier curve between two edges, with desired continuity.

Retrieved from "<http://wiki.freecad.org/index.php?title=Surface_Workbench/ko&oldid=1427054>"
