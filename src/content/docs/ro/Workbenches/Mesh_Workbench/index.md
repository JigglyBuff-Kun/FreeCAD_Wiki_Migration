---
title: Atelierul Plase(Rețele)
---

![](/images/Workbench_Mesh.svg)

Mesh workbench icon

## Introduction

## Introducere

Atelierul Plase [Mesh Workbench](/Mesh_Workbench "Mesh Workbench") se ocupă de [mesh triangle](http://en.wikipedia.org/wiki/Triangle_mesh). Plasele/Mesh-urile sunt un tip special de obiect 3D, compuse din fațete triunghiulare legate de marginile lor și de colțurile lor (numite și vârfuri).

Multe aplicații 3D utilizează ochiurile de plasă ca tip principal de obiect 3D, cum ar fi [sketchup](http://en.wikipedia.org/wiki/Sketchup), [Blender](<http://en.wikipedia.org/wiki/Blender_(software)>) , [Maya](<http://en.wikipedia.org/wiki/Maya_(software)>) sau [3D Studio Max](http://en.wikipedia.org/wiki/3d_max), utilizează plase ca primă alegere de elecție. Deoarece plasele sunt obiecte foarte simple, conținând numai vârfuri (puncte), muchii și fațete (triunghiulare), ele sunt foarte ușor de creat, modificat, subdivizat, întins și ușor de trecut de la o aplicație la alta fără nici o pierdere. În plus, deoarece conțin date foarte simple, aplicațiile 3D pot gestiona, de obicei, cantități foarte mari din acestea fără nici o problemă. Din aceste motive, plasele sunt adesea tipul de obiect 3D preferat pentru aplicații care se ocupă cu filmele, animația și crearea imaginilor.

Cu toate acestea, în domeniul rețelelor de inginerie există o mare limitare: ele sunt doar realizate din suprafețe și nu au informații despre masă, deci nu se comportă ca solide. Aceasta înseamnă că toate operațiunile de bază pentru solide, cum ar fi adunarea sau scăderea, sunt dificil de realizat pe ochiuri de plasă. Mesh Workbench este util să importați date 3D în format de plase, să le analizați, să detectați erorile și, în final, să le convertiți într-un solid, pentru a fi utilizate cu [Part Workbench](/Part_Workbench "Part Workbench").

![](/images/Mesh_example.jpg)

## Instrumente

Modulul de plase are în prezent o interfață foarte simplă, toate funcțiile sale fiind grupate în intrarea din meniul **Mesh**

- ![](/images/Mesh_Import.svg) [Import mesh...](/Mesh_Import "Mesh Import"): Imports a mesh object from a file.

- ![](/images/Mesh_Export.svg) [Export mesh...](/Mesh_Export "Mesh Export"): Exports a mesh object to a file.

- ![](/images/Mesh_FromPartShape.svg) [Create mesh from shape...](/Mesh_FromPartShape "Mesh FromPartShape"): Creates mesh objects from shape objects.

- ![](/images/Mesh_RemeshGmsh.svg) [Refinement...](/Mesh_RemeshGmsh "Mesh RemeshGmsh"): Remeshes a mesh object.

### Analiza

- Analizează curbura, fațetele și verifică dacă o plasă poate fi convertită într-un solid
  - [Evaluate & Repair mesh...](/Mesh_EvaluateRepair "Mesh EvaluateRepair"): Evaluează și repară plase
  - ![](/images/Mesh_EvaluateFacet.png) [Face Info](/Mesh_EvaluateFacet "Mesh EvaluateFacet"): Dă informații despre fațete
  - [Curvature Info](/Mesh_EvaluateCurvature "Mesh EvaluateCurvature"): Dă informații despre curbură
  - [Check solid mesh](/Mesh_EvaluateSolid "Mesh EvaluateSolid"): Verifică dacă un solid poate fi convertit într-o plasă
  - [Boundings info...](/Mesh_BoundingBox "Mesh BoundingBox"): Evaluează paralelipipedul de încadrare al unei plase

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

### Boolean

- [Union](/Mesh_Union "Mesh Union"): Realizează o uniune/fuziun e cu plase
- [Intersection](/Mesh_Intersection "Mesh Intersection"): Realizează o intersecție/common de plase

  - [Difference](/Mesh_Difference "Mesh Difference"): Realizează o diferență/cut de plase

- Cutting
  - ![](/images/Mesh_PolyCut.svg) [Cut mesh](/Mesh_PolyCut "Mesh PolyCut"): Cuts whole faces from mesh objects.
  - ![](/images/Mesh_PolyTrim.svg) [Trim mesh](/Mesh_PolyTrim "Mesh PolyTrim"): Trims faces and parts of faces from mesh objects.
  - ![](/images/Mesh_TrimByPlane.svg) [Trim mesh with a plane](/Mesh_TrimByPlane "Mesh TrimByPlane"): Trims faces and parts of faces on one side of a plane from a mesh object.
  - ![](/images/Mesh_SectionByPlane.svg) [Create section from mesh and plane](/Mesh_SectionByPlane "Mesh SectionByPlane"): Creates a cross section across a mesh object.
  - ![](/images/Mesh_CrossSections.svg) [Cross-sections...](/Mesh_CrossSections "Mesh CrossSections"): Creates multiple cross sections across mesh objects. [introduced in 0.19](/Release_notes_0.19 "Release notes 0.19")

* ![](/images/Mesh_Merge.svg) [Merge](/Mesh_Merge "Mesh Merge"): Creates a mesh object by combining the meshes of two or more mesh objects.

* ![](/images/Mesh_SplitComponents.svg) [Split by components](/Mesh_SplitComponents "Mesh SplitComponents"): Splits a mesh object into its components.

* ![](/images/MeshPart_CreateFlatMesh.svg) [Unwrap mesh](/MeshPart_CreateFlatMesh "MeshPart CreateFlatMesh"): Creates a flat representation of a mesh object.

* ![](/images/MeshPart_CreateFlatFace.svg) [Unwrap face](/MeshPart_CreateFlatFace "MeshPart CreateFlatFace"): Creates a flat representation of a face of a shape object.

## Preferences

There are some [export preferences related to Mesh Formats](/Import_Export_Preferences#Mesh_Formats "Import Export Preferences") but these are not used by commands belonging to this workbench. They are used by the [Std Export](/Std_Export "Std Export") command.

Mesh Workbench preferences can be found in the following groups in the [Preferences Editor](/Preferences_Editor "Preferences Editor"):

- ![](/images/Preferences-display.svg) [Display](/Preferences_Editor#Display "Preferences Editor"): On the [Mesh view](/Preferences_Editor#Mesh_view "Preferences Editor") page several preferences can be set.
- ![](/images/Preferences-openscad.svg) [OpenSCAD](/OpenSCAD_Preferences "OpenSCAD Preferences"): The [Mesh Union](/Mesh_Union "Mesh Union"), [Mesh Intersection](/Mesh_Intersection "Mesh Intersection") and [Mesh Difference](/Mesh_Difference "Mesh Difference") commands require [OpenSCAD](http://www.openscad.org/) and use the **OpenSCAD executable** preference to find its executable.

## Legături

- [FreeCAD and Mesh Import](/FreeCAD_and_Mesh_Import "FreeCAD and Mesh Import")

Retrieved from "<http://wiki.freecad.org/index.php?title=Mesh_Workbench/ro&oldid=1464295>"
