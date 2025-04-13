---
title: Konštruktívna geometria telies
---
## Úvod

[Constructive solid geometry](https://en.wikipedia.org/wiki/Constructive_solid_geometry) (**CSG**) is a modelling paradigm that is used in many traditional CAD systems. It essentially consists of using primitive solid objects and doing boolean operations with them, such as fusion, subtraction and intersection, in order to create a final shape.

In FreeCAD, this method is mostly utilized with the ![](/images/Workbench_Part.svg) [Part Workbench](/Part_Workbench "Part Workbench"), which has the ability of creating primitive objects like ![](/images/Part_Box.svg) [boxes](/Part_Box "Part Box"), ![](/images/Part_Cylinder.svg) [cylinders](/Part_Cylinder "Part Cylinder"), and ![](/images/Part_Sphere.svg) [spheres](/Part_Sphere "Part Sphere") and fuse them together, or use them to cut other objects with tools like ![](/images/Part_Cut.svg) [Part Cut](/Part_Cut "Part Cut").

![](/images/Part_Constructive_Solid_Geometry_workflow.svg)

Constructive solid geometry (CSG) workflow; any number of operations can be done on solid primitives to create other solid objects, and then fuse or cut them until the final shape is produced.

Alternatively, the ![](/images/Workbench_PartDesign.svg) [PartDesign Workbench](/PartDesign_Workbench "PartDesign Workbench") uses a more modern approach than simple CSG; this method is called [feature editing](/Feature_editing "Feature editing"), which means creating a base solid, and then adding sequential parametric transformations to obtain a final body.

*Note:* A [PartDesign Body](/PartDesign_Body "PartDesign Body") created with the [PartDesign Workbench](/PartDesign_Workbench "PartDesign Workbench") can also be used in a boolean operation with other objects.

## Example

![](/images/Part_CGS_workflow_example.svg)

Example of constructive solid geometry (CSG) workflow: primitive parts are fused (union); the intersection of two other primitive parts is calculated (common); the difference (cut) of the two previous shapes is obtained.

## Tutorials

The [tutorials](/Tutorials "Tutorials") page provides some examples on creating solids with the ![](/images/Workbench_Part.svg) [Part Workbench](/Part_Workbench "Part Workbench") that use the **CSG** method.

* [Traditional modeling, the CSG way](/Manual:Traditional_modeling,_the_CSG_way "Manual:Traditional modeling, the CSG way")
* [Wiffle ball tutorial](/Whiffle_Ball_tutorial "Whiffle Ball tutorial")
* [Basic modeling tutorial](/Basic_modeling_tutorial "Basic modeling tutorial")

Retrieved from "<http://wiki.freecad.org/index.php?title=Constructive_solid_geometry/sk&oldid=1536693>"