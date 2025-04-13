---
title: Atelier Surface
---

![](/images/Workbench_Surface.svg)

Icône de l'atelier Surface

## Introduction

L'![](/images/Workbench_Surface.svg) atelier Surface fournit des outils pour créer et modifier de simples surfaces [NURBS](https://fr.wikipedia.org/wiki/NURBS). Ces outils ont une fonctionnalité similaire à celle de l'outil ![](/images/Part_Builder.svg) [Part Générateur de formes](/Part_Builder/fr "Part Builder/fr") lorsque l'option **Face from edges** est utilisée. Cependant, contrairement à cet outil, les outils de l'atelier Surface sont paramétriques et offrent des options supplémentaires. À cet égard, les outils de cet atelier sont similaires à des fonctionnalités telles que ![](/images/PartDesign_AdditiveLoft.svg) [PartDesign Lissage additif](/PartDesign_AdditiveLoft/fr "PartDesign AdditiveLoft/fr") et ![](/images/PartDesign_AdditivePipe.svg) [PartDesign Balayage additif](/PartDesign_AdditivePipe/fr "PartDesign AdditivePipe/fr").

Les fonctionnalités fournies sont :

- Création de surfaces à partir d'arêtes.
- Alignement de la courbure des faces voisines.
- Contrainte des surfaces sur des courbes et des sommets supplémentaires.
- Extension de faces.
- Un maillage peut être utilisé comme modèle pour créer des courbes splines sur sa surface.

![](/images/Surface_example.png)

## Utilisation

L'objectif de l'atelier Surface est de créer des faces avec des formes qui ne sont pas disponibles avec les outils standard des autres ateliers.

![](/images/Toy_Duck.png)

Surface créée avec des esquisses placées dans des plans de référence avec les outils de l'[atelier PartDesign](/PartDesign_Workbench/fr "PartDesign Workbench/fr")

L'atelier Surface s'intègre à d'autres ateliers de FreeCAD. L'exemple ci-dessus a été créé à partir d'![](/images/Sketcher_NewSketch.svg) [esquisses](/Sketch/fr "Sketch/fr") placé sur des ![](/images/PartDesign_Plane.svg) [PartDesign Plans de référence](/PartDesign_Plane "PartDesign Plane") dans l'![](/images/Workbench_PartDesign.svg) [atelier PartDesign](/PartDesign_Workbench "PartDesign Workbench"). La conception peut être entièrement paramétrique si tous les plans et esquisses de référence sont définis en conséquence. Dans la plupart des cas, il suffit de dessiner une esquisse fermée pour définir la limite d'une face, puis d'utiliser différentes options pour modifier davantage sa forme.

La surface générée ne peut pas être placée dans un ![](/images/PartDesign_Body.svg) [PartDesign Corps](/PartDesign_Body/fr "PartDesign Body/fr"). Cependant, la surface générée peut être contenue dans un ![](/images/Std_Part.svg) [Std Part](/Std_Part/fr "Std Part/fr") avec le ![](/images/PartDesign_Body.svg) [PartDesign Corps](/PartDesign_Body/fr "PartDesign Body/fr") associé qui contient les plans de référence et les esquisses. L'outil non paramétrique ![](/images/Part_Builder.svg) [Part Générateur de formes](/Part_Builder/fr "Part Builder/fr") peut ensuite être utilisé pour créer une [coque](/Glossary/fr#Shell "Glossary/fr") et enfin un [solide](/Glossary/fr#Solid "Glossary/fr").

## Outils

- ![](/images/Surface_Filling.svg) [Remplissage](/Surface_Filling/fr "Surface Filling/fr") : remplit une série de courbes limites avec une surface.

- ![](/images/Surface_GeomFillSurface.svg) [Remplir entre les courbes limites](/Surface_GeomFillSurface/fr "Surface GeomFillSurface/fr") : crée une surface à partir de deux, trois ou quatre arêtes limites.

- ![](/images/Surface_Sections.svg) [Sections](/Surface_Sections/fr "Surface Sections/fr") : crée une surface à partir d'arêtes qui représentent des sections transversales de surface.

- ![](/images/Surface_ExtendFace.svg) [Extension de surface](/Surface_ExtendFace/fr "Surface ExtendFace/fr") : extrapole la surface aux limites avec ses paramètres U et V locaux.

- ![](/images/Surface_CurveOnMesh.svg) [Courbe sur maillage](/Surface_CurveOnMesh/fr "Surface CurveOnMesh/fr") : crée des segments de courbe approximatifs par dessus un [maillage](/Mesh_Workbench/fr "Mesh Workbench/fr") sélectionné.

- ![](/images/Surface_BlendCurve.svg) [Fusion de courbes](/Surface_BlendCurve/fr "Surface BlendCurve/fr") : crée une courbe de Bézier entre deux arêtes, avec la continuité souhaitée.

Retrieved from "<http://wiki.freecad.org/index.php?title=Surface_Workbench/fr&oldid=1413207>"
