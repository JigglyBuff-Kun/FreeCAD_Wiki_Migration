---
title: Geometría sólida constructiva
---
## Introducción

[Geometría sólida constructiva](https://en.wikipedia.org/wiki/Constructive_solid_geometry) (**CSG**) es un paradigma de modelización que se utiliza en muchos sistemas tradicionales de CAD. Consiste esencialmente en utilizar objetos sólidos primitivos y hacer operaciones booleanas con ellos, como la fusión, la sustracción y la intersección, para crear una forma final.

En FreeCAD, este método se utiliza principalmente con el ![](/images/Workbench_Part.svg) [Ambiente de trabajo de pieza](/Part_Workbench/es "Part Workbench/es"), que tiene la capacidad de crear objetos primitivos como ![](/images/Part_Box.svg) [cajas](/Part_Box/es "Part Box/es"), ![](/images/Part_Cylinder.svg) [cilindros](/Part_Cylinder/es "Part Cylinder/es"), y ![](/images/Part_Sphere.svg) [esferas](/Part_Sphere/es "Part Sphere/es") y fusionarlos, o utilizarlos para cortar otros objetos con herramientas como ![](/images/Part_Cut.svg) [Corte Pieza](/Part_Cut/es "Part Cut/es").

![](/images/Part_Constructive_Solid_Geometry_workflow.svg)

Flujo de trabajo de geometría sólida constructiva (CSG); se puede realizar cualquier número de operaciones sobre primitivos sólidos para crear otros objetos sólidos, y luego fusionarlos o cortarlos hasta producir la forma final.

Alternativamente, el ![](/images/Workbench_PartDesign.svg) [Ambiente de trabajo DiseñoPieza](/PartDesign_Workbench/es "PartDesign Workbench/es") utiliza un enfoque más moderno que el simple CSG; este método se llama [edición de características](/Feature_editing/es "Feature editing/es"), lo que significa crear un sólido base, y luego añadir transformaciones paramétricas secuenciales para obtener un cuerpo final.

*Nota:* Un [Cuerpo DiseñoPieza](/PartDesign_Body/es "PartDesign Body/es") creado con el [Ambiente de trabajo DiseñoPiezas](/PartDesign_Workbench/es "PartDesign Workbench/es") también puede utilizarse en una operación booleana con otros objetos.

## Ejemplo

![](/images/Part_CGS_workflow_example.svg)

Ejemplo de flujo de trabajo de geometría sólida constructiva (CSG): se fusionan partes primitivas (unión); se calcula la intersección de otras dos partes primitivas (común); se obtiene la diferencia (corte) de las dos formas anteriores.

## Tutoriales

La página de [tutoriales](/Tutorials/es "Tutorials/es") proporciona algunos ejemplos sobre la creación de sólidos con el ![](/images/Workbench_Part.svg) [Ambiente de trabajo Pieza](/Part_Workbench/es "Part Workbench/es") que utilizan el método **CSG**.

* [Modelado tradicional, el método CSG](/index.php?title=Manual:Traditional_modeling,_the_CSG_way/es&action=edit&redlink=1 "Manual:Traditional modeling, the CSG way/es (page does not exist)")
* [Tutorial de pelota de béisbol](/index.php?title=Whiffle_Ball_tutorial/es&action=edit&redlink=1 "Whiffle Ball tutorial/es (page does not exist)")
* [Tutorial de modelado básico](/Basic_modeling_tutorial/es "Basic modeling tutorial/es")

Retrieved from "<http://wiki.freecad.org/index.php?title=Constructive_solid_geometry/es&oldid=1536697>"