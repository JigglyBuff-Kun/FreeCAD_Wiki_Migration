---
title: Shape
---
## Introduction

Dans FreeCAD, le mot "Shape" est normalement utilisé pour faire référence à une classe  [Part TopoShape](/Part_TopoShape/fr "Part TopoShape/fr") (`Part::TopoShape`), un type d'objet qui donne un élément sa représentation géométrique et paramétrique 3D (cube, pyramide, sphère, cylindre, fusion, etc.).

Essentiellement, tous les objets affichés dans la [vue 3D](/3D_view/fr "3D view/fr") ont un [TopoShape](/Part_TopoShape/fr "Part TopoShape/fr"), à l'exception des "[maillages](/Mesh/fr "Mesh/fr")", qui ont un [MeshObject](/Mesh_MeshObject/fr "Mesh MeshObject/fr") (classe `Mesh::MeshObject`).

Voir [Part TopoShape](/Part_TopoShape "Part TopoShape") pour plus d'informations sur ce type d'objet.

![](/images/Shape_and_mesh.svg)

A gauche: une shape paramétrique définie par les propriétés. A droite: un [mesh](/Mesh/fr "Mesh/fr") défini par des sommets et des surfaces triangulaires.

## Utilisation

Les formes sont normalement créées par des fonctions internes de l'[Atelier Part](/Part_Workbench/fr "Part Workbench/fr") et sont finalement définies par le noyau de technologie [OpenCASCADE Technology](/OpenCASCADE/fr "OpenCASCADE/fr") (OCCT).

Une fois qu'une forme est créée, elle peut être utilisée et modifiée par tous les [ateliers](/Workbenches/fr "Workbenches/fr") en créant [objets scriptés](/Scripted_objects/fr "Scripted objects/fr") autour de cette forme.

Essentiellement, chaque objet dérivé d'une [Part Feature](/Part_Feature/fr "Part Feature/fr") (classe `Part::Feature`) devrait contenir et manipuler une forme.

Toute forme OpenCascade possède une tesselation qui permet principalement de visualiser la forme à l'écran. Vous trouverez plus d'informations à ce sujet dans [ce message du forum allemand](https://forum.freecad.org/viewtopic.php?t=77521&start=10#p674947) et dans la [documentation OpenCascad Mesh](https://dev.opencascade.org/doc/overview/html/occt_user_guides__mesh.html).

## Remarques

Dans un usage informel, une "Shape" peut être n'importe quelle figure géométrique visible dans la [vue 3D](/3D_view/fr "3D view/fr"), et donc son concept peut être confondu avec celui de "[Corps](/Body/fr "Body/fr")" ou "[Part](/Part/fr "Part/fr")".

Cependant, lorsque plus de précision est requise, la distinction doit être faite.

* Un "[Corps](/Body/fr "Body/fr")" est un objet dérivé d'une [Part Feature](/Part_Feature/fr "Part Feature/fr") (classe `Part::Feature`), créé avec l'[atelier PartDesign](/PartDesign_Workbench/fr "PartDesign Workbench/fr").
* Un "Shape" est un objet interne, intégré dans le "[Corps](/Body/fr "Body/fr")".
* Un "[Part](/Part/fr "Part/fr")" est utilisé pour regrouper plusieurs "[Corps](/Body/fr "Body/fr")" pour former un [assemblage](/Assembly/fr "Assembly/fr"). Un "Part" a une collection de "Shapes", mais n'a pas de "Shape" qui lui soit propre.

Retrieved from "<http://wiki.freecad.org/index.php?title=Shape/fr&oldid=1360716>"