---
title: Bancada de trabalho Surface
---

![](/images/Workbench_Surface.svg)

Surface workbench icon

## Introdução

A bancada de trabalho Superfície foi introduzida no FreeCAD 0.17 e fornece ferramentas para criar e modificar [NURBS surfaces](https://en.wikipedia.org/wiki/Non-uniform_rational_B-spline) simples. Essas ferramentas tem uma funcionalidade similar à ferramenta [Part Builder](/Part_Builder/pt-br "Part Builder/pt-br") quando as opções "Faces das bordas" são utilizadas. Entretanto, ao contrário dessa ferramenta, as ferramentas da bancada Superfície são paramétricas e fornecem opções adicionais. Quanto a isso, as ferramentas nesta bancada são similares a recursos como [PartDesign AdditiveLoft](/PartDesign_AdditiveLoft/pt-br "PartDesign AdditiveLoft/pt-br") e [PartDesign AdditivePipe](/PartDesign_AdditivePipe/pt-br "PartDesign AdditivePipe/pt-br").

Alguns dos recursos disponíveis são:

- Criação de superfícies a partir de bordas de limite.
- Alinhamento da curvatura a partir das faces vizinhas.
- Restrição de superfícies para curvas e vértices adicionais.
- Extensão de faces.
- Uma malha pode ser usada como modelo para criar curvas spline em sua superfície.

![](/images/Surface_example.png)

## Uso

A bancada de trabalho Superfície tem por objetivo criar faces com formas, o que não é possível fazer com as ferramentas padrões em outras bancadas. O OCCT kernel dá como exemplo uma caixa retangular com cantos arredondados de diferentes raios.

![](/images/Toy_Duck.png)

Superfície criada com esboços colocados em um plano de referência com as ferramentas de [PartDesign Workbench](/PartDesign_Workbench/pt-br "PartDesign Workbench/pt-br").

A bancada Superfície se integra com outras bancadas do FreeCAD. O exemplo acima foi criado a partir de [esboços](/Sketcher_Workbench/pt-br "Sketcher Workbench/pt-br") colocado sobre [planos de referência](/PartDesign_Plane/pt-br "PartDesign Plane/pt-br") na [Bancada PartDesign](/PartDesign_Workbench/pt-br "PartDesign Workbench/pt-br"). O projeto pode ser totalmente paramétrico, quando todos os planos de referência e esboços são definidos de acordo. Na maioria dos casos é suficiente desejar um esboço fechado para definir a borda para uma face; então, opções estão disponíveis para modificar ainda mais sua forma.

The generated surface cannot be placed inside a ![](/images/PartDesign_Body.svg) [PartDesign Body](/PartDesign_Body "PartDesign Body"). However, the generated surface can be contained inside a ![](/images/Std_Part.svg) [Std Part](/Std_Part "Std Part") together with the associated ![](/images/PartDesign_Body.svg) [PartDesign Body](/PartDesign_Body "PartDesign Body") that holds the datum planes and sketches. The non-parametric ![](/images/Part_Builder.svg) [Part Builder](/Part_Builder "Part Builder") tool can then be used in order to create a [shell](/Glossary#Shell "Glossary") and finally a [solid](/Glossary#Solid "Glossary").

## Ferramentas da bancada Superfície

- ![](/images/Filling.svg) [Enchimento](/index.php?title=Surface_Filling/pt-br&action=edit&redlink=1 "Surface Filling/pt-br (page does not exist)"): enche uma série de curvas limite com uma superfície. A superfície pode ser modificada pela adição de curvas de restrição e vértices. A superfície muda de forma para que a superfície passe pelos elementos de restrição adicionados.
- ![](/images/BSplineSurf.svg) [Encher curvas limite](/index.php?title=Surface_GeomFillSurface/pt-br&action=edit&redlink=1 "Surface GeomFillSurface/pt-br (page does not exist)"): cria uma superfície a partir de duas, três ou quatro bordas limite. Três diferentes modos de enchimento estão disponíveis:alongar, Coons, Curvar.

- ![](/images/Surface_GeomFillSurface.svg) [Fill boundary curves](/Surface_GeomFillSurface "Surface GeomFillSurface"): creates a surface from two, three or four boundary edges.

- ![](/images/Surface_Sections.svg) [Sections](/Surface_Sections "Surface Sections"): creates a surface from edges that represent transversal sections of surface.

- ![](/images/Surface_ExtendFace.svg) [Extend face](/Surface_ExtendFace "Surface ExtendFace"): extrapolates the surface at the boundaries with its local U parameter and V parameter.

- ![](/images/Surface_CurveOnMesh.svg) [Curve on mesh](/Surface_CurveOnMesh "Surface CurveOnMesh"): creates approximated spline segments on top of a selected [mesh](/Mesh_Workbench "Mesh Workbench").

- ![](/images/Surface_BlendCurve.svg) [Blend Curve](/Surface_BlendCurve "Surface BlendCurve"): creates a Bezier curve between two edges, with desired continuity.

Retrieved from "<http://wiki.freecad.org/index.php?title=Surface_Workbench/pt-br&oldid=1406811>"
