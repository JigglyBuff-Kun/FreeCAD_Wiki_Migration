---
title: Migración a FreeCAD desde Fusion360
---
## Fondo

Esta página está dirigida a los usuarios interesados en migrar a FreeCAD desde el mundo de Fusion 360.

## ¿Qué hago?

1. Lo primero que debes hacer es sacar tus archivos de los formatos y almacenamientos propietarios. Empieza por exportar tus modelos desde la nube a tu máquina local.
   * Un método popular es usar este script [Exportador total Fusion360](https://github.com/Jnesselr/fusion-360-total-exporter).
2. Recomendamos exportar al formato STEP.

## Glosario

:::caution
Por favor, consulte también el proyecto en cursoCAD Rosetta Stonepara aprender los nombres análogos que usan los CADs propietarios populares
:::

Consulte la página [Glossary](/Glossary/es "Glossary/es") en general, pero aquí hay una breve lista de términos específicos que los amigos de F360 pueden encontrar especialmente útiles:

* Restricción Tangente - La forma de FreeCAD de **Restricción Colineal**. Ver ![](/images/Sketcher_ConstrainTangent.svg) [Croquizador RestringirTangente](/Sketcher_ConstrainTangent#Entre_dos_líneas_.28collinear.29 "Sketcher ConstrainTangent").
* Pastilla - La función **extruir** en FreeCAD. Lee el ![](/images/PartDesign_Pad.svg) [DiseñoPiezas Pastilla](/PartDesign_Pad/es "PartDesign Pad/es") para saber más.
* Topodenominación - Abreviatura de [Problema de denominación topológica](/Topological_naming_problem/es "Topological naming problem/es"). Cubierto muy bien en [Brodie Fairhall's youtube clip](https://www.youtube.com/watch?v=6p2vqEEmWq4)].

## PREGUNTAS MÁS FRECUENTES

1. ¿Qué formatos soporta FreeCAD?
   * El formato de archivo nativo en FreeCAD es BREP, [representación de límites](https://en.wikipedia.org/wiki/Boundary_representation), proporcionado por el núcleo de geometría interno [OpenCASCADE (OCCT)](/OpenCASCADE/es "OpenCASCADE/es").
   * FreeCAD soporta todos los formatos que soporta OCCT, así que STEP e IGES al menos.
2. ¿Qué formatos debería usar para migrar a FreeCAD?
   * STEP es el mejor formato porque es un formato de [Forma](/index.php?title=Shape/es&action=edit&redlink=1 "Shape/es (page does not exist)") sólido, en contraposición a un [Malla](/index.php?title=Mesh/es&action=edit&redlink=1 "Mesh/es (page does not exist)") (STL, OBJ, DAE). Ejemplo, [Importar Paso con Colores](https://forum.freecadweb.org/viewtopic.php?f=3&t=50308).
   * Importar un STL es posible, pero este formato de malla será difícil de modificar posteriormente. Recomendamos convertir las mallas importadas en Shapes sólidos usando ![](/images/Part_ShapeFromMesh.svg) [Piezas FormaDeMalla](/index.php?title=Part_ShapeFromMesh/es&action=edit&redlink=1 "Part ShapeFromMesh/es (page does not exist)"). Remodelar el objeto en FreeCAD, usando la malla como referencia, es el mejor consejo.

## Consejos

* @MPetrika ([twitter](https://twitter.com/MPetrikas/status/1362051484704264198)) recomienda instalar el programa de HakanSeven12 [Ambiente de trabajo ModernUI](/index.php?title=ModernUI_Workbench/es&action=edit&redlink=1 "ModernUI Workbench/es (page does not exist)")

## Recursos de aprendizaje

* [Fusion360 a FreeCAD - Introducción](https://www.youtube.com/watch?v=_GxJkB23ZHM), video par Brodie Fairhall.
* [Fusion360 a FreeCAD - Parte 2](https://www.youtube.com/watch?v=IESZD4QS3P8), vídeo de Brodie Fairhall.
* [V0.19 Benchmarking--2019 Monthly Challenges](https://forum.freecadweb.org/viewtopic.php?f=36&t=50492), una serie de objetos creados con Fusion360 son remodelados usando FreeCAD, por el experimentado usuario ppemawm.
* [Tutorial escrito para principiantes: desde la primera parte hasta el dibujo técnico](https://github.com/macdroid53/LearningFreeCAD) par macdroid53.
* [Un recurso online para nosotros, usuarios habituales de FreeCAD](https://www.freecad.info/).

## Vídeos de comparación

* [Modelar una turbina de compresor en FreeCAD y Fusion360](https://www.youtube.com/watch?v=kirDbZd0dvI&feature=youtu.be)

## Ayuda

A esta página wiki le falta algo. Por favor, solicite [permisos wiki](https://forum.freecadweb.org/viewtopic.php?f=21&t=6830) en el foro para editar esta página.

## Relacionados

* [Migración a FreeCAD desde OnShape](/Migrating_to_FreeCAD_from_OnShape/es "Migrating to FreeCAD from OnShape/es")

Retrieved from "<http://wiki.freecad.org/index.php?title=Migrating_to_FreeCAD_from_Fusion360/es&oldid=978324>"