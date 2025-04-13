---
title: 메쉬 작업대
---

![](/images/Workbench_Mesh.svg)

메쉬 작업대 아이콘

## 소개

![](/images/Workbench_Mesh.svg) **메쉬 작업대**에서는 [삼각형 메쉬](http://en.wikipedia.org/wiki/Triangle_mesh)를 처리합니다.메쉬는 꼭지점과 가장자리로 연결된 삼각형 면으로 구성된 특별한 유형의 3D 개체입니다.

[Sketchup](http://en.wikipedia.org/wiki/Sketchup), [Blender](<http://en.wikipedia.org/wiki/Blender_(software)>), [Maya](<http://en.wikipedia.org/wiki/Maya_(software)>) 및 [3D Studio Max](http://en.wikipedia.org/wiki/3d_max)와 같은 많은 3D 응용 프로그램은 메쉬를 기본 유형의 3D 개체로 사용합니다. 메쉬는 꼭지점(점), 모서리 및 삼각형 면만 포함하는 매우 단순한 개체이므로 생성, 수정, 세분화, 늘리기가 매우 쉽고 세부 정보 손실 없이 한 응용 프로그램에서 다른 응용 프로그램으로 쉽게 전달할 수 있습니다. 이러한 이유로 메쉬는 영화, 애니메이션 및 이미지 생성을 다루는 응용 프로그램에서 선택되는 3D 객체 유형인 경우가 많습니다.

그러나 엔지니어링 메쉬 분야에서는 다음과 같은 큰 한계가 있습니다: 곡면을 정확하게 정의할 수 없습니다. 이것이 FreeCAD가 대신 [Brep](http://en.wikipedia.org/wiki/Boundary_Representation "wikipedia:Boundary Representation")에 의존하는 이유입니다. 메쉬 워크벤치는 메쉬를 직접 조작하는 몇 가지 명령을 제공하지만, 3D 메쉬 데이터를 가져와 솔리드로 변환하여 ![](/images/Workbench_Part.svg) [부품 작업대](/Part_Workbench/ko "Part Workbench/ko")또는 ![](/images/Workbench_PartDesign.svg) [부품설계 작업대](/PartDesign_Workbench/ko "PartDesign Workbench/ko")와 함께 사용하는 데 가장 많이 사용됩니다.

![](/images/Mesh_example.jpg)

## 도구

All Mesh Workbench tools can be accessed from the **Meshes** menu. Almost all are also available in one of the Mesh toolbars.

- ![](/images/Mesh_Import.svg) [Import mesh...](/Mesh_Import "Mesh Import"): Imports a mesh object from a file.

- ![](/images/Mesh_Export.svg) [Export mesh...](/Mesh_Export "Mesh Export"): Exports a mesh object to a file.

- ![](/images/Mesh_FromPartShape.svg) [Create mesh from shape...](/Mesh_FromPartShape "Mesh FromPartShape"): Creates mesh objects from shape objects.

- ![](/images/Mesh_RemeshGmsh.svg) [Refinement...](/Mesh_RemeshGmsh "Mesh RemeshGmsh"): Remeshes a mesh object.

* Analyze
  - ![](/images/Mesh_Evaluation.svg) [Evaluate and repair mesh...](/Mesh_Evaluation "Mesh Evaluation"): Evaluates and repairs a mesh object.
  - ![](/images/Mesh_EvaluateFacet.svg) [Face info](/Mesh_EvaluateFacet "Mesh EvaluateFacet"): Shows information about faces of mesh objects.
  - ![](/images/Mesh_CurvatureInfo.svg) [Curvature info](/Mesh_CurvatureInfo "Mesh CurvatureInfo"): Shows the absolute curvature of [curvature objects](/Mesh_VertexCurvature "Mesh VertexCurvature") at selected points.
  - ![](/images/Mesh_EvaluateSolid.svg) [Check solid mesh](/Mesh_EvaluateSolid "Mesh EvaluateSolid"): Checks if a mesh object is solid.
  - ![](/images/Mesh_BoundingBox.svg) [Boundings info...](/Mesh_BoundingBox "Mesh BoundingBox"): Shows the bounding box coordinates of a mesh object.

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

* Boolean

  - ![](/images/Mesh_Union.svg) [Union](/Mesh_Union "Mesh Union"): Creates a mesh object that is the union of two mesh objects.
  - ![](/images/Mesh_Intersection.svg) [Intersection](/Mesh_Intersection "Mesh Intersection"): Creates a mesh object that is the intersection of two mesh objects.
  - ![](/images/Mesh_Difference.svg) [Difference](/Mesh_Difference "Mesh Difference"): Creates a mesh object that is the difference of two mesh objects.

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

Retrieved from "<http://wiki.freecad.org/index.php?title=Mesh_Workbench/ko&oldid=1464290>"
