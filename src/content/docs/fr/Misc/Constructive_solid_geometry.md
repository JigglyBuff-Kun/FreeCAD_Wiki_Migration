---
title: Géométrie de construction de solides
---
## Introduction

La [géométrie de construction de solides](https://fr.wikipedia.org/wiki/Géométrie_de_construction_de_solides) (**CSG** en anglais) est un paradigme de modélisation utilisé dans de nombreux systèmes de CAO traditionnels. Cela consiste essentiellement à utiliser des objets solides primitifs et à effectuer des opérations booléennes, telles que la fusion, la soustraction et l'intersection, afin de créer une forme finale.

Dans FreeCAD, cette méthode est principalement utilisée avec l'![](/images/Workbench_Part.svg) [atelier Part](/Part_Workbench/fr "Part Workbench/fr"), qui permet de créer des objets primitifs tels que des ![](/images/Part_Box.svg) [boîtes](/Part_Box/fr "Part Box/fr"), des ![](/images/Part_Cylinder.svg) [cylindres](/Part_Cylinder/fr "Part Cylinder/fr"), des ![](/images/Part_Sphere.svg) [sphères](/Part_Sphere "Part Sphere"), et de les fusionner, ou de les utiliser pour couper d'autres objets avec des outils tels que ![](/images/Part_Cut.svg) [Part Soustraction](/Part_Cut/fr "Part Cut/fr").

![](/images/Part_Constructive_Solid_Geometry_workflow.svg)

Flux de travail d'une géométrie de construction de solides. Un nombre quelconque d'opérations peuvent être effectuées sur des primitives solides pour créer d'autres objets solides, puis fusionnées ou coupées jusqu'à ce que la forme finale soit produite.

Autre possibilité l'![](/images/Workbench_PartDesign.svg) [atelier PartDesign](/PartDesign_Workbench/fr "PartDesign Workbench/fr") utilise une approche plus moderne que la simple géométrie de construction de solides. Cette méthode est appelée [Édition de fonctions](/Feature_editing/fr "Feature editing/fr"), soit la création d'un solide de base puis l'ajout de transformations paramétriques séquentielles pour obtenir un corps final.

*Remarque :* Un [PartDesign Corps](/PartDesign_Body/fr "PartDesign Body/fr") créé avec l'[atelier PartDesign](/PartDesign_Workbench "PartDesign Workbench") peut également être utilisé dans une opération booléenne avec d'autres objets.

## Exemple

![](/images/Part_CGS_workflow_example.svg)

Exemple de flux de travail d'une géométrie de construction de solides : les pièces primitives sont fusionnées (union) ; l'intersection de deux autres parties primitives est calculée (commune) ; la différence (coupe) des deux formes précédentes est obtenue.

## Tutoriels

La page [Tutoriels](/Tutorials/fr "Tutorials/fr") fournit des exemples de création de solides avec l'![](/images/Workbench_Part.svg) [atelier Part](/Part_Workbench/fr "Part Workbench/fr") utilisant la méthode **Géométrie de construction de solides**.

* [Modélisation traditionnelle, mode géométrie de construction de solides](/Manual:Traditional_modeling,_the_CSG_way/fr "Manual:Traditional modeling, the CSG way/fr")
* [Tutoriel Balle Whiffle](/Whiffle_Ball_tutorial/fr "Whiffle Ball tutorial/fr")
* [Tutoriel d'introduction à la modélisation](/Basic_modeling_tutorial/fr "Basic modeling tutorial/fr")

Retrieved from "<http://wiki.freecad.org/index.php?title=Constructive_solid_geometry/fr&oldid=1481448>"