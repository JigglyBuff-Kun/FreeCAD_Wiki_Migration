---
title: Mesh Workbench
---

![](/images/Workbench_Mesh.svg)

Mesh workbench icon

## Introduction

**Nät arbetsbänken** hanterar [triangelnät](http://en.wikipedia.org/wiki/Triangle_mesh). Nät är en speciell typ av 3D objekt, sammansatt av trianglar som är ihopkopplade via deras kanter och hörn.

Många 3D applikationer använder nät som deras primära 3D objektstyp, som [sketchup](http://sv.wikipedia.org/wiki/Sketchup), [blender](http://sv.wikipedia.org/wiki/Blender), [maya](<http://sv.wikipedia.org/wiki/Maya_(datorprogram)>) eller [3d studio max](http://sv.wikipedia.org/wiki/3ds_Max). Eftersom nät är mycket simpla objekt, som endast innehåller hörn (punkter), kanter och (triangulära) ytor, så är de mycket lätta att skapa, förändra, dela upp, sträcka ut, och kan lätt flyttas från en applikation till en annan utan några förluster. Eftersom de dessutom innehåller mycket simpel data, så kan 3D applikationer vanligtvis hantera mycket stora kvantiteter av dem utan några problem. Av dessa anledningar, så är nät ofta den valda 3D objekttypen i applikationer för filmer, animeringar, och bildbehandling.

Emellertid har nät en stor begränsning inom konstruktionsfältet: De är mycket 'dumma' objekt, som endast består av punkter, linjer och ytor. De består endast av ytor, och har ingen informationom dess massa, så de beter sig inte som solider. I ett nät så finns det inget automatiskt sätt att avgöra om en punkt är inuti eller utanför objektet. Detta innebär att alla solidbaserade operationer, som addition eller subtraktion, alltid är svåra att utföra på nät, och ofta orsakar fel.

![](/images/Mesh_example.jpg)

### Använda nätmodulen

Nätmodulen har för närvarande ett mycket enkelt gränssnitt, alla dess funktioner är grupperade i **Nät** menyn. De viktigaste operationerna som du för närvarande kan göra med nät är:

- Importera nät i flera filformat
- Exportera nät i flera filformat
- Konvertera [Del](/Part_Workbench/sv "Part Workbench/sv") objekt till nät
- Analysera kurvatur, ytor, och kontrollera om ett nät kan konverteras till en solid på ett säkert sätt
- Vända nät [normaler](http://sv.wikipedia.org/wiki/normalvektor)
- Stänga hål i nät
- Ta bort ytor i nät
- Förena, subtrahera och skära nät
- Skapa nätprimitiver, som kuber, sfärer, Koner eller cylindrar
- Klippa nät längs en linje

* ![](/images/Mesh_Import.svg) [Import mesh...](/Mesh_Import "Mesh Import"): Imports a mesh object from a file.

* ![](/images/Mesh_Export.svg) [Export mesh...](/Mesh_Export "Mesh Export"): Exports a mesh object to a file.

* ![](/images/Mesh_FromPartShape.svg) [Create mesh from shape...](/Mesh_FromPartShape "Mesh FromPartShape"): Creates mesh objects from shape objects.

* ![](/images/Mesh_RemeshGmsh.svg) [Refinement...](/Mesh_RemeshGmsh "Mesh RemeshGmsh"): Remeshes a mesh object.

- Analyze
  - ![](/images/Mesh_Evaluation.svg) [Evaluate and repair mesh...](/Mesh_Evaluation "Mesh Evaluation"): Evaluates and repairs a mesh object.
  - ![](/images/Mesh_EvaluateFacet.svg) [Face info](/Mesh_EvaluateFacet "Mesh EvaluateFacet"): Shows information about faces of mesh objects.
  - ![](/images/Mesh_CurvatureInfo.svg) [Curvature info](/Mesh_CurvatureInfo "Mesh CurvatureInfo"): Shows the absolute curvature of [curvature objects](/Mesh_VertexCurvature "Mesh VertexCurvature") at selected points.
  - ![](/images/Mesh_EvaluateSolid.svg) [Check solid mesh](/Mesh_EvaluateSolid "Mesh EvaluateSolid"): Checks if a mesh object is solid.
  - ![](/images/Mesh_BoundingBox.svg) [Boundings info...](/Mesh_BoundingBox "Mesh BoundingBox"): Shows the bounding box coordinates of a mesh object.

* ![](/images/Mesh_VertexCurvature.svg) [Curvature plot](/Mesh_VertexCurvature "Mesh VertexCurvature"): Creates Mesh Curvature objects for mesh objects.

* ![](/images/Mesh_HarmonizeNormals.svg) [Harmonize normals](/Mesh_HarmonizeNormals "Mesh HarmonizeNormals"): Harmonizes the normals of mesh objects.

* ![](/images/Mesh_FlipNormals.svg) [Flip normals](/Mesh_FlipNormals "Mesh FlipNormals"): Flips the normals of mesh objects.

* ![](/images/Mesh_FillupHoles.svg) [Fill holes...](/Mesh_FillupHoles "Mesh FillupHoles"): Fills holes in mesh objects.

* ![](/images/Mesh_FillInteractiveHole.svg) [Close hole](/Mesh_FillInteractiveHole "Mesh FillInteractiveHole"): Fills selected holes in mesh objects.

* ![](/images/Mesh_AddFacet.svg) [Add triangle](/Mesh_AddFacet "Mesh AddFacet"): Adds faces along a boundary of an open mesh object.

* ![](/images/Mesh_RemoveComponents.svg) [Remove components...](/Mesh_RemoveComponents "Mesh RemoveComponents"): Removes faces from mesh objects.

* ![](/images/Mesh_RemoveCompByHand.svg) [Remove components by hand...](/Mesh_RemoveCompByHand "Mesh RemoveCompByHand"): Removes components from mesh objects.

* ![](/images/Mesh_Segmentation.svg) [Create mesh segments...](/Mesh_Segmentation "Mesh Segmentation"): Creates separate mesh segments for specified surface types of a mesh object.

* ![](/images/Mesh_SegmentationBestFit.svg) [Create mesh segments from best-fit surfaces...](/Mesh_SegmentationBestFit "Mesh SegmentationBestFit"): Creates separate mesh segments for specified surface types of a mesh object, and can identify their parameters.

* ![](/images/Mesh_Smoothing.svg) [Smooth...](/Mesh_Smoothing "Mesh Smoothing"): Smooths mesh objects.

* ![](/images/Mesh_Decimating.svg) [Decimation...](/Mesh_Decimating "Mesh Decimating"): Reduces the number of faces in mesh objects.

* ![](/images/Mesh_Scale.svg) [Scale...](/Mesh_Scale "Mesh Scale"): Scales mesh objects.

* ![](/images/Mesh_BuildRegularSolid.svg) [Regular solid...](/Mesh_BuildRegularSolid "Mesh BuildRegularSolid"): Creates a regular parametric solid mesh object.

- Boolean

  - ![](/images/Mesh_Union.svg) [Union](/Mesh_Union "Mesh Union"): Creates a mesh object that is the union of two mesh objects.
  - ![](/images/Mesh_Intersection.svg) [Intersection](/Mesh_Intersection "Mesh Intersection"): Creates a mesh object that is the intersection of two mesh objects.
  - ![](/images/Mesh_Difference.svg) [Difference](/Mesh_Difference "Mesh Difference"): Creates a mesh object that is the difference of two mesh objects.

- Cutting
  - ![](/images/Mesh_PolyCut.svg) [Cut mesh](/Mesh_PolyCut "Mesh PolyCut"): Cuts whole faces from mesh objects.
  - ![](/images/Mesh_PolyTrim.svg) [Trim mesh](/Mesh_PolyTrim "Mesh PolyTrim"): Trims faces and parts of faces from mesh objects.
  - ![](/images/Mesh_TrimByPlane.svg) [Trim mesh with a plane](/Mesh_TrimByPlane "Mesh TrimByPlane"): Trims faces and parts of faces on one side of a plane from a mesh object.
  - ![](/images/Mesh_SectionByPlane.svg) [Create section from mesh and plane](/Mesh_SectionByPlane "Mesh SectionByPlane"): Creates a cross section across a mesh object.
  - ![](/images/Mesh_CrossSections.svg) [Cross-sections...](/Mesh_CrossSections "Mesh CrossSections"): Creates multiple cross sections across mesh objects.

* ![](/images/Mesh_Merge.svg) [Merge](/Mesh_Merge "Mesh Merge"): Creates a mesh object by combining the meshes of two or more mesh objects.

* ![](/images/Mesh_SplitComponents.svg) [Split by components](/Mesh_SplitComponents "Mesh SplitComponents"): Splits a mesh object into its components.

* ![](/images/MeshPart_CreateFlatMesh.svg) [Unwrap mesh](/MeshPart_CreateFlatMesh "MeshPart CreateFlatMesh"): Creates a flat representation of a mesh object.

* ![](/images/MeshPart_CreateFlatFace.svg) [Unwrap face](/MeshPart_CreateFlatFace "MeshPart CreateFlatFace"): Creates a flat representation of a face of a shape object.

## Preferences

There are some [export preferences related to Mesh Formats](/Import_Export_Preferences#Mesh_Formats "Import Export Preferences") but these are not used by commands belonging to this workbench. They are used by the [Std Export](/Std_Export "Std Export") command.

Mesh Workbench preferences can be found in the following groups in the [Preferences Editor](/Preferences_Editor "Preferences Editor"):

- ![](/images/Preferences-display.svg) [Display](/Preferences_Editor#Display "Preferences Editor"): On the [Mesh view](/Preferences_Editor#Mesh_view "Preferences Editor") page several preferences can be set.
- ![](/images/Preferences-openscad.svg) [OpenSCAD](/OpenSCAD_Preferences "OpenSCAD Preferences"): The [Mesh Union](/Mesh_Union "Mesh Union"), [Mesh Intersection](/Mesh_Intersection "Mesh Intersection") and [Mesh Difference](/Mesh_Difference "Mesh Difference") commands require [OpenSCAD](http://www.openscad.org/) and use the **OpenSCAD executable** preference to find its executable.

## Notes

- More mesh tools are available in the ![](/images/Workbench_OpenSCAD.svg) [OpenSCAD Workbench](/OpenSCAD_Workbench "OpenSCAD Workbench").
- See [Mesh Scripting](/Mesh_Scripting "Mesh Scripting") to manipulate and create meshes using [Python](/Python "Python").
- See also [FreeCAD and Mesh Import](/FreeCAD_and_Mesh_Import "FreeCAD and Mesh Import")
- See [Asymptote](/Asymptote "Asymptote") to export meshes to the Asymptote format.

Retrieved from "<http://wiki.freecad.org/index.php?title=Mesh_Workbench/sv&oldid=1464296>"
