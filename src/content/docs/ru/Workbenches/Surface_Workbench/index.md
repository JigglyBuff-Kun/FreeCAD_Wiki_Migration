---
title: Верстак Surface
---

![](/images/Workbench_Surface.svg)

Логотип верстака Surface

## Введение

![](/images/Workbench_Surface.svg) Верстак Surface предоставляет инструменты для создания и изменения простых [поверхностей NURBS](https://ru.wikipedia.org/wiki/NURBS). Эти инструменты имеют функциональность, похожую на инструменты ![](/images/Part_Builder.svg) [Part Builder](/Part_Builder/ru "Part Builder/ru") при использовании опции **Face from edges**. Однако, в отличие от этих инструментов, Верстак Surface параметрический и даёт дополнительные опции. В этом отношении, инструменты этого верстака похожи на ![](/images/PartDesign_AdditiveLoft.svg) [PartDesign AdditiveLoft](/PartDesign_AdditiveLoft/ru "PartDesign AdditiveLoft/ru") и ![](/images/PartDesign_AdditivePipe.svg) [PartDesign AdditivePipe](/PartDesign_AdditivePipe/ru "PartDesign AdditivePipe/ru").

Некоторые из предоставляемых функций:

- Создание поверхностей из граничных ребер.
- Выравнивание кривизны от соседних граней.
- Ограничение поверхностей дополнительными кривыми и вершинами.
- Расширение лица.
- Можно использовать сетку в качестве шаблона для создания сплайновых кривых на ее поверхности.

![](/images/Surface_example.png)

## Применение

Верстак Surface предназначен для создания граней с формами, что невозможно сделать стандартными инструментами в других верстаках.

![](/images/Toy_Duck.png)

Surface created with sketches placed in datum planes with the tools of the [PartDesign Workbench](/PartDesign_Workbench "PartDesign Workbench")

The Surface Workbench integrates with other workbenches of FreeCAD. The above example was created from ![](/images/Sketcher_NewSketch.svg) [Sketches](/Sketch "Sketch") placed on ![](/images/PartDesign_Plane.svg) [PartDesign Datum planes](/PartDesign_Plane "PartDesign Plane") in the ![](/images/Workbench_PartDesign.svg) [PartDesign Workbench](/PartDesign_Workbench "PartDesign Workbench"). The design can be fully parametric if all datum planes and sketches are defined accordingly. In most cases it is sufficient to draw a closed sketch to define the boundary of a face, and then use different options to further modify its shape.

The generated surface cannot be placed inside a ![](/images/PartDesign_Body.svg) [PartDesign Body](/PartDesign_Body "PartDesign Body"). However, the generated surface can be contained inside a ![](/images/Std_Part.svg) [Std Part](/Std_Part "Std Part") together with the associated ![](/images/PartDesign_Body.svg) [PartDesign Body](/PartDesign_Body "PartDesign Body") that holds the datum planes and sketches. The non-parametric ![](/images/Part_Builder.svg) [Part Builder](/Part_Builder "Part Builder") tool can then be used in order to create a [shell](/Glossary#Shell "Glossary") and finally a [solid](/Glossary#Solid "Glossary").

## Инструменты

- ![](/images/Surface_Filling.svg) [Filling](/Surface_Filling "Surface Filling"): fills a series of boundary curves with a surface.

- ![](/images/Surface_GeomFillSurface.svg) [Fill boundary curves](/Surface_GeomFillSurface "Surface GeomFillSurface"): creates a surface from two, three or four boundary edges.

- ![](/images/Surface_Sections.svg) [Sections](/Surface_Sections "Surface Sections"): creates a surface from edges that represent transversal sections of surface.

- ![](/images/Surface_ExtendFace.svg) [Extend face](/Surface_ExtendFace "Surface ExtendFace"): extrapolates the surface at the boundaries with its local U parameter and V parameter.

- ![](/images/Surface_CurveOnMesh.svg) [Curve on mesh](/Surface_CurveOnMesh "Surface CurveOnMesh"): creates approximated spline segments on top of a selected [mesh](/Mesh_Workbench "Mesh Workbench").

- ![](/images/Surface_BlendCurve.svg) [Blend Curve](/Surface_BlendCurve "Surface BlendCurve"): creates a Bezier curve between two edges, with desired continuity.

Retrieved from "<http://wiki.freecad.org/index.php?title=Surface_Workbench/ru&oldid=1406806>"
