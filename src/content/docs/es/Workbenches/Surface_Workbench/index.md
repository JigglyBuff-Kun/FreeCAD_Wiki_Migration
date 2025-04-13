---
title: Módulo Superficie
---

![](/images/Workbench_Surface.svg)

El icono del Ambiente de trabajo superficie

## Introducción

El ![](/images/Workbench_Surface.svg) Ambiente de trabajo Superficie proporciona herramientas para crear y modificar simples [NURBS surfaces](https://en.wikipedia.org/wiki/Non-uniform_rational_B-spline). Estas herramientas tienen una funcionalidad similar a la del ![](/images/Part_Builder.svg) [Creador Piezas](/Part_Builder/es "Part Builder/es") cuando se utiliza la opción **Cara de los bordes**. Sin embargo, a diferencia de esa herramienta, las herramientas del ambientes de Trabajo de Superficies son paramétricas y proporcionan opciones adicionales. En este sentido, las herramientas de este ambientes de trabajo son similares a ![](/images/PartDesign_AdditiveLoft.svg) [DiseñoPieza LoftAditivo](/PartDesign_AdditiveLoft/es "PartDesign AdditiveLoft/es") y ![](/images/PartDesign_AdditivePipe.svg) [DiseñoPieza TuberíaAditivos](/PartDesign_AdditivePipe/es "PartDesign AdditivePipe/es").

Algunas de las funciones que ofrece son:

- Creación de superficies a partir de los bordes de los límites.
- Alineación de la curvatura desde las caras vecinas.
- Restricción de superficies a curvas y vértices adicionales.
- Extensión de caras.
- Una malla puede utilizarse como plantilla para crear curvas spline en su superficie.

![](/images/Surface_example.png)

## Utilización

El ambiente de trabajo de superficies pretende crear caras con formas, lo que no es posible hacer con las herramientas estándar de otros ambientes de trabajo.

![](/images/Toy_Duck.png)

Superficie creada con bocetos colocados en planos de referencia con las herramientas del [DiseñoPieza ambiente de trabajo](/PartDesign_Workbench/es "PartDesign Workbench/es")

El ambiente de trabajo de superficies se integra con otros ambientes de trabajo de FreeCAD. El ejemplo anterior fue creado a partir de ![](/images/Sketcher_NewSketch.svg) [Bocetos](/Sketch/es "Sketch/es") colocado en ![](/images/PartDesign_Plane.svg) [DiseñoPieza Planos de referencia](/PartDesign_Plane/es "PartDesign Plane/es") en el ![](/images/Workbench_PartDesign.svg) [Ambiente de trabajo DiseñoPieza](/PartDesign_Workbench/es "PartDesign Workbench/es"). El diseño puede ser totalmente paramétrico si todos los planos de referencia y los bocetos se definen en consecuencia. En la mayoría de los casos es suficiente dibujar un croquis cerrado para definir el límite de una cara, y luego utilizar diferentes opciones para modificar aún más su forma.

La superficie generada no puede colocarse dentro de un ![](/images/PartDesign_Body.svg) [DiseñoPiezas Cuerpo](/PartDesign_Body/es "PartDesign Body/es"). Sin embargo, la superficie generada puede estar contenida dentro de un ![](/images/Std_Part.svg) [Std Pieza](/Std_Part/es "Std Part/es") junto con el ![](/images/PartDesign_Body.svg) asociado [Cuerpo](/PartDesign_Body/es "PartDesign Body/es") que contiene los planos de referencia y los bocetos. El botón no paramétrico ![](/images/Part_Builder.svg) [Pieza Creador](/Part_Builder/es "Part Builder/es") se puede utilizar para crear un [shell](/Glossary#Shell "Glossary") y finalmente un [solid](/Glossary#Solid "Glossary").

## Herramientas

- ![](/images/Surface_Filling.svg) [Relleno](/index.php?title=Surface_Filling/es&action=edit&redlink=1 "Surface Filling/es (page does not exist)"): rellena una serie de curvas límite con una superficie.

- ![](/images/Surface_GeomFillSurface.svg) [Rellenar curvas límite](/index.php?title=Surface_GeomFillSurface/es&action=edit&redlink=1 "Surface GeomFillSurface/es (page does not exist)"): crea una superficie a partir de dos, tres o cuatro aristas límite.

- ![](/images/Surface_Sections.svg) [Secciones](/index.php?title=Surface_Sections/es&action=edit&redlink=1 "Surface Sections/es (page does not exist)"): crea una superficie a partir de aristas que representan secciones transversales de la superficie.[introduced in 0.19](/Release_notes_0.19 "Release notes 0.19")

- ![](/images/Surface_ExtendFace.svg) [Extender cara](/index.php?title=Surface_ExtendFace/es&action=edit&redlink=1 "Surface ExtendFace/es (page does not exist)"): extrapola la superficie en los límites con su parámetro local U y V.

- ![](/images/Surface_CurveOnMesh.svg) [Curva sobre malla](/index.php?title=Surface_CurveOnMesh/es&action=edit&redlink=1 "Surface CurveOnMesh/es (page does not exist)"): crea segmentos de splines aproximados sobre una [malla](/Mesh_Workbench/es "Mesh Workbench/es") seleccionada.

- ![](/images/Surface_BlendCurve.svg) [Blend Curve](/Surface_BlendCurve "Surface BlendCurve"): creates a Bezier curve between two edges, with desired continuity.

Retrieved from "<http://wiki.freecad.org/index.php?title=Surface_Workbench/es&oldid=1273395>"
