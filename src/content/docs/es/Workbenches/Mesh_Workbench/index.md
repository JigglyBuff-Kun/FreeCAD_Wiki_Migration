---
title: Ambiente de trabajo Malla
---

![](/images/Workbench_Mesh.svg)

El icono del Ambiente de trabajo Mesh

## Introducción

El ![](/images/Workbench_Mesh.svg) [Ambiente de trabajo Mallas](/Mesh_Workbench "Mesh Workbench") maneja [triangle mesh](http://en.wikipedia.org/wiki/Triangle_mesh). Mallas son un tipo especial de objeto 3D, compuesto por areas triangulares conectadas por sus vértices y aristas.

Muchas aplicaciones 3D, como [Sketchup](https://es.wikipedia.org/wiki/SketchUp), [Blender](http://es.wikipedia.org/wiki/Blender), [Autodesk Maya](http://es.wikipedia.org/wiki/Autodesk_Maya) y [Autodesk 3ds Max](http://es.wikipedia.org/wiki/Autodesk_3ds_Max) utilizan mallas como tipo principal de objeto 3D. Dado que las mallas son objetos muy sencillos, que sólo contienen vértices (puntos), aristas y caras triangulares, son muy fáciles de crear, modificar, subdividir y estirar, y pueden pasarse fácilmente de una aplicación a otra sin pérdida de detalles. Además, como las mallas contienen datos muy simples, las aplicaciones 3D suelen poder gestionar cantidades muy grandes de ellas sin utilizar muchos recursos. Por estas razones, las mallas suelen ser el tipo de objeto 3D preferido para las aplicaciones que se ocupan de las películas, la animación y la creación de imágenes.

Sin embargo, en el campo de la ingeniería las mallas presentan una gran limitación: no pueden definir con precisión las superficies curvas. Por eso FreeCAD se basa en [Brep](http://en.wikipedia.org/wiki/Boundary_representation "wikipedia:Boundary representation") en su lugar. El Mesh Workbench ofrece algunos comandos para manipular directamente las mallas, pero se utiliza más a menudo para importar datos de malla 3D y convertirlos en un sólido para su uso con el ![](/images/Workbench_Part.svg) [Ambiente de trabajo Piezas](/Part_Workbench/es "Part Workbench/es") o ![](/images/Workbench_PartDesign.svg) [Ambiente de trabajo DiseñoPiezas](/PartDesign_Workbench/es "PartDesign Workbench/es").

![](/images/Mesh_example.jpg)

## Herramientas

Todas las herramientas del ambiente de trabajo Malla se puede acceder a desde el menú **Mallas**. Casi todas están también disponibles en una de las barras de herramientas de malla.

- ![](/images/Mesh_ImportMesh.png) [Import Mesh](/index.php?title=Mesh_Import/es&action=edit&redlink=1 "Mesh Import/es (page does not exist)"): Importar mallas en varios formatos de archivo

- ![](/images/Mesh_ExportMesh.png) [Export Mesh](/index.php?title=Mesh_Export/es&action=edit&redlink=1 "Mesh Export/es (page does not exist)"): exporta mallas en varios formatos de archivo

- ![](/images/Mesh_MeshFromShape.png) [Create Mesh from shape](/Mesh_MeshFromShape "Mesh MeshFromShape"): convierte objetos [Part](/Part_Workbench/es "Part Workbench/es") en mallas

- ![](/images/Mesh_RemeshGmsh.svg) [Refinamiento...](/index.php?title=Mesh_RemeshGmsh/rs&action=edit&redlink=1 "Mesh RemeshGmsh/rs (page does not exist)"): Refina un objeto de malla. [introducido en la versión 0.19](/Release_notes_0.19/es "Release notes 0.19/es")

* Analizar
  - ![](/images/Mesh_Evaluation.svg) [Evaluar y reparar malla...](/index.php?title=Mesh_Evaluation/es&action=edit&redlink=1 "Mesh Evaluation/es (page does not exist)"): Evalúa y repara un objeto de malla.
  - ![](/images/Mesh_EvaluateFacet.svg) [Face Info](/index.php?title=Mesh_EvaluateFacet/es&action=edit&redlink=1 "Mesh EvaluateFacet/es (page does not exist)"): Da información sobre las caras
  - ![](/images/Mesh_CurvatureInfo.svg) [Curvature Info](/index.php?title=Mesh_CurvatureInfo/es&action=edit&redlink=1 "Mesh CurvatureInfo/es (page does not exist)"): proporciona información sobre la curvatura
  - ![](/images/Mesh_EvaluateSolid.svg) [Check solid mesh](/index.php?title=Mesh_EvaluateSolid/es&action=edit&redlink=1 "Mesh EvaluateSolid/es (page does not exist)"): Comprueba si el sólido se puede convertir a una malla
  - ![](/images/Mesh_BoundingBox.svg) [Boundings info ...](/index.php?title=Mesh_BoundingBox/es&action=edit&redlink=1 "Mesh BoundingBox/es (page does not exist)"): Muestra las coordenadas del cuadro delimitador de un objeto de malla.

- ![](/images/Mesh_VertexCurvature.svg) [Curvature plot](/Mesh_VertexCurvature "Mesh VertexCurvature"): Creates Mesh Curvature objects for mesh objects.

- ![](/images/Mesh_HarmonizeNormals.svg) [Harmonize normals](/Mesh_HarmonizeNormals "Mesh HarmonizeNormals"): Harmonizes the normals of mesh objects.

- ![](/images/Mesh_FlipNormals.svg) [Flip normals](/Mesh_FlipNormals "Mesh FlipNormals"): Flips the normals of mesh objects.

- ![](/images/Mesh_FillupHoles.svg) [Fill holes...](/Mesh_FillupHoles "Mesh FillupHoles"): Fills holes in mesh objects.

- ![](/images/Mesh_FillInteractiveHole.svg) [Close hole](/Mesh_FillInteractiveHole "Mesh FillInteractiveHole"): Fills selected holes in mesh objects.

- ![](/images/Mesh_AddFacet.svg) [Add triangle](/Mesh_AddFacet "Mesh AddFacet"): Adds faces along a boundary of an open mesh object.

- ![](/images/Mesh_RemoveComponents.svg) [Remove components...](/Mesh_RemoveComponents "Mesh RemoveComponents"): Removes faces from mesh objects.

- ![](/images/Mesh_RemoveCompByHand.svg) [Remove components by hand...](/Mesh_RemoveCompByHand "Mesh RemoveCompByHand"): Removes components from mesh objects.

- ![](/images/Mesh_Segmentation.svg) [Create mesh segments...](/Mesh_Segmentation "Mesh Segmentation"): Creates separate mesh segments for specified surface types of a mesh object.

- ![](/images/Mesh_SegmentationBestFit.svg) [Create mesh segments from best-fit surfaces...](/Mesh_SegmentationBestFit "Mesh SegmentationBestFit"): Creates separate mesh segments for specified surface types of a mesh object, and can identify their parameters.

- ![](/images/Mesh_Smoothing.svg) [Smooth...](/Mesh_Smoothing "Mesh Smoothing"): Smooths mesh objects.

- ![](/images/Mesh_Decimating.svg) [Decimation...](/Mesh_Decimating "Mesh Decimating"): Reduces the number of faces in mesh objects.

- ![](/images/Mesh_Scale.svg) [Scale...](/Mesh_Scale "Mesh Scale"): Scales mesh objects.

- ![](/images/Mesh_BuildRegularSolid.svg) [Regular solid...](/Mesh_BuildRegularSolid "Mesh BuildRegularSolid"): Creates a regular parametric solid mesh object.

* Booleano

  - ![](/images/Mesh_Union.svg) [Unión](/index.php?title=Mesh_Union/es&action=edit&redlink=1 "Mesh Union/es (page does not exist)"): Crea un objeto de malla que es la unión de dos objetos de malla.
  - ![](/images/Mesh_Intersection.svg) [Intersección](/index.php?title=Mesh_Intersection/es&action=edit&redlink=1 "Mesh Intersection/es (page does not exist)"): Crea un objeto de malla que es la intersección de dos objetos de malla.
  - ![](/images/Mesh_Difference.svg) [Diferencia](/index.php?title=Mesh_Difference/es&action=edit&redlink=1 "Mesh Difference/es (page does not exist)"): Crea un objeto de malla que es la diferencia de dos objetos de malla.

* Cutting
  - ![](/images/Mesh_PolyCut.svg) [Cut mesh](/Mesh_PolyCut "Mesh PolyCut"): Cuts whole faces from mesh objects.
  - ![](/images/Mesh_PolyTrim.svg) [Trim mesh](/Mesh_PolyTrim "Mesh PolyTrim"): Trims faces and parts of faces from mesh objects.
  - ![](/images/Mesh_TrimByPlane.svg) [Trim mesh with a plane](/Mesh_TrimByPlane "Mesh TrimByPlane"): Trims faces and parts of faces on one side of a plane from a mesh object.
  - ![](/images/Mesh_SectionByPlane.svg) [Create section from mesh and plane](/Mesh_SectionByPlane "Mesh SectionByPlane"): Creates a cross section across a mesh object.
  - ![](/images/Mesh_CrossSections.svg) [Cross-sections...](/Mesh_CrossSections "Mesh CrossSections"): Creates multiple cross sections across mesh objects.

- ![](/images/Mesh_Merge.svg) [Merge](/Mesh_Merge "Mesh Merge"): Creates a mesh object by combining the meshes of two or more mesh objects.

- ![](/images/Mesh_SplitComponents.svg) [Split by components](/Mesh_SplitComponents "Mesh SplitComponents"): Splits a mesh object into its components.

- ![](/images/MeshPart_CreateFlatMesh.svg) [Unwrap mesh](/MeshPart_CreateFlatMesh "MeshPart CreateFlatMesh"): Creates a flat representation of a mesh object.

- ![](/images/MeshPart_CreateFlatFace.svg) [Unwrap face](/MeshPart_CreateFlatFace "MeshPart CreateFlatFace"): Creates a flat representation of a face of a shape object.

## Preferencias

Hay algunas [preferencias de exportación relacionadas con los formatos de malla](/Import_Export_Preferences/es#Formatos_de_malla "Import Export Preferences/es") pero no son utilizadas por los comandos pertenecientes a este ambiente de trabajo. Son utilizadas por el comando [Std Exportar](/index.php?title=Std_Export/es&action=edit&redlink=1 "Std Export/es (page does not exist)").

Mesh Workbench preferences can be found in the following groups in the [Preferences Editor](/Preferences_Editor "Preferences Editor"):

- ![](/images/Preferences-display.svg) [Display](/Preferences_Editor#Display "Preferences Editor"): On the [Mesh view](/Preferences_Editor#Mesh_view "Preferences Editor") page several preferences can be set.
- ![](/images/Preferences-openscad.svg) [OpenSCAD](/OpenSCAD_Preferences "OpenSCAD Preferences"): The [Mesh Union](/Mesh_Union "Mesh Union"), [Mesh Intersection](/Mesh_Intersection "Mesh Intersection") and [Mesh Difference](/Mesh_Difference "Mesh Difference") commands require [OpenSCAD](http://www.openscad.org/) and use the **OpenSCAD executable** preference to find its executable.

## Notas

- Hay más herramientas de malla disponibles en el ![](/images/Workbench_OpenSCAD.svg) [Ambiente de trabajo OpenSCAD](/OpenSCAD_Workbench/es "OpenSCAD Workbench/es").
- Ver [Mallas guiones](/Mesh_Scripting/es "Mesh Scripting/es") para manipular y crear mallas usando [Python](/Python/es "Python/es").
- Ver también: [FreeCAD e Mesh Importación](/index.php?title=FreeCAD_and_Mesh_Import/es&action=edit&redlink=1 "FreeCAD and Mesh Import/es (page does not exist)")
- Ver [Asymptote](/index.php?title=Asymptote/es&action=edit&redlink=1 "Asymptote/es (page does not exist)") para exportar mallas al formato Asymptote.

Retrieved from "<http://wiki.freecad.org/index.php?title=Mesh_Workbench/es&oldid=1464275>"
