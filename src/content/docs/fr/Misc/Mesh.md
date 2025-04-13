---
title: Mesh
---
## Introduction

Dans FreeCAD, le mot "Mesh" est normalement utilisé pour désigner un [Mesh Object](/Mesh_MeshObject/fr "Mesh MeshObject/fr") (`Mesh::MeshObject` class), un type d'objet qui définit les données 3D mais n'est pas un solide "[Shape](/Shape/fr "Shape/fr")".

Les maillages sont des objets très simples, ne contenant que des sommets (points), des arêtes et des faces triangulaires. En général, ils sont faciles à créer, à modifier, à subdiviser et à étirer, et peuvent être transmis d'une application à une autre sans aucune perte de détails. De plus, comme les maillages contiennent des données très simples, les applications 3D comme les logiciels d'animation et les jeux vidéo peuvent en gérer de très grandes quantités (millions de triangles) sans utiliser beaucoup de ressources informatiques.

Cependant, dans le domaine de l'ingénierie, les maillages présentent une grande limitation: ils ne sont constitués que de surfaces et n'ont pas d'informations de "masse", ils ne se comportent donc pas comme des "solides". Cela signifie que les opérations à base de solides, comme l'[addition ou la soustraction booléennen](/Part_Boolean/fr "Part Boolean/fr") sont difficiles à effectuer sur les maillages. De plus, comme ils sont définis par des points individuels, ils sont difficiles à décrire de façon paramétrique.

Voir [Mesh MeshObject](/Mesh_MeshObject/fr "Mesh MeshObject/fr") pour plus d'informations sur ce type d'objet, et voir [Polygon mesh](https://en.wikipedia.org/wiki/Polygon_mesh) pour des informations génériques dans les systèmes informatiques.

![](/images/Shape_and_mesh.svg)

À gauche : [shape](/Shape/fr "Shape/fr") paramétrique défini par les propriétés. À droite : mesh défini par des sommets et des surfaces triangulaires.

## Utilisation

Les maillages sont normalement créés par des fonctions internes de l'[atelier Mesh](/Mesh_Workbench/fr "Mesh Workbench/fr"), ou par l'importation de fichiers au format de maillage, comme STL et OBJ.

Essentiellement, chaque objet dérivé d'une [Mesh Feature](/Mesh_Feature/fr "Mesh Feature/fr") (classe `Mesh::Feature`) devrait contenir et manipuler un maillage.

Puisque FreeCAD est principalement conçu pour être un modeleur solide, il est mieux adapté pour traiter les [Shapes](/Shape/fr "Shape/fr") des solides. Il peut importer et afficher des maillages dans la [vue 3D](/3D_view/fr "3D view/fr"), et l'[atelier Mesh](/Mesh_Workbench/fr "Mesh Workbench/fr") offre quelques commandes pour les manipuler directement. Mais dans de nombreux cas, le maillage doit d'abord être converti en une [Shape](/Shape/fr "Shape/fr"). (voir [Part Forme à partir d'un maillage](/Part_ShapeFromMesh/fr "Part ShapeFromMesh/fr")), ou la géométrie doit être recréée à l'aide des techniques de modélisation solide de l'[atelier Part](/Part_Workbench/fr "Part Workbench/fr") ou de l'[atelier PartDesign](/PartDesign_Workbench/fr "PartDesign Workbench/fr").

## Maillage par éléments finis

Dans FreeCAD, le mot "Mesh" peut également faire référence à un objet spécifique qui sera utilisé dans l'analyse par éléments finis (FEA).

Lorsqu'un objet avec un solide [Shape](/Shape/fr "Shape/fr") est utilisé dans l'[atelier FEM](/FEM_Workbench/fr "FEM Workbench/fr"), il sera discrétisé en un maillage triangulaire. Dans ce cas, l'objet résultant est un [FEM FemMeshObject](/FEM_Mesh/fr "FEM Mesh/fr") (classe `Fem::FemMeshObject`) et n'est pas dérivé d'une [Mesh Feature](/Mesh_Feature/fr "Mesh Feature/fr") (`Mesh::Feature` classe).

Pour plus d'informations, voir [Atelier FEM](/FEM_Workbench/fr "FEM Workbench/fr") et [FEM Mesh](/FEM_Mesh/fr "FEM Mesh/fr").

## Plus d'informations

* [Géométrie polygonale (maillage)](https://forum.freecadweb.org/viewtopic.php?f=8&t=47493)

Retrieved from "<http://wiki.freecad.org/index.php?title=Mesh/fr&oldid=1360784>"