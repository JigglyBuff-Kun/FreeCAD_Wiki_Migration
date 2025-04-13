---
title: OpenSCAD 작업대
---

![](/images/Workbench_OpenSCAD.svg)

OpenSCAD 작업대 아이콘

## 소개

![](/images/Workbench_OpenSCAD.svg) OpenSCAD 작업대는 오픈 소스 소프트웨어 [[1]](http://www.openscad.org/OpenSCAD)와의 상호 운용성을 제공하기 위한 것입니다. 이 프로그램은 FreeCAD의 일부로 배포되지 않지만 이 작업대를 최대한 활용하려면 설치해야 합니다. OpenSCAD는 FreeCAD가 화면에 형상을 만드는 데 사용하는 기하학적 커널인 [OpenCASCADE](/OpenCASCADE "OpenCASCADE")와 혼동해서는 안 됩니다. FreeCAD를 사용하려면 OpenCASCADE 라이브러리가 항상 필요하지만 OpenSCAD 실행 파일은 전적으로 선택 사항입니다.

It contains a [CSG](/OpenSCAD_CSG "OpenSCAD CSG") importer to open the CSG files from OpenSCAD, and an exporter to output a CSG based tree. Geometry which is not based on CSG operations will be exported as a mesh.

This workbench contains functions to modify the CSG feature tree and repair models. It also contains general purpose tools that do not require installation of OpenSCAD; they can be used in conjunction with other workbenches. For example, the [Mesh Workbench](/Mesh_Workbench "Mesh Workbench") internally uses the OpenSCAD functions to perform operations with [meshes](/Mesh "Mesh"), as they are quite robust.

![](/images/OpenSCADexamaple1.png)

## Dependencies

In FreeCAD 0.19, the Ply (Python-Lex-Yacc) module, which is used to import CSG files, was removed from the FreeCAD source code, as it is a third party library not developed by FreeCAD. As a result, you now need to install Ply before using the OpenSCAD Workbench. When using a pre-packaged, stable version of FreeCAD this dependency should be installed automatically in all platforms; in other cases, for example, when [compiling](/Compiling "Compiling") from source, you may have to install it from an online repository.

In openSUSE this is done by:

```
sudo zypper install python3-ply

```

In Debian/Ubuntu based systems this is done like the following:

```
sudo apt install python3-ply

```

The general installation in all platforms can be done from the Python package index.

```
pip3 install --user ply

```

## OpenSCAD language and file format

The OpenSCAD language allows the use of variables and loops. It allows you to specify sub-modules to reuse geometry and code. This high degree of flexibility makes parsing very complex. Currently the OpenSCAD Workbench cannot handle the OpenSCAD language natively.
Instead, if OpenSCAD is installed, it can be used to convert the input to the CSG format, which is a subset of the OpenSCAD language, and can be used as the input to OpenSCAD for further processing.
During conversion all parametric behavior is lost, meaning that all variable names are discarded, loops expanded, and mathematical expressions evaluated.

## Tools

- ![](/images/OpenSCAD_ColorCodeShape.svg) [Color Code Shape](/OpenSCAD_ColorCodeShape "OpenSCAD ColorCodeShape"): Change the color of selected or all shapes based on their validity.
- ![](/images/OpenSCAD_ReplaceObject.svg) [Replace Object](/OpenSCAD_ReplaceObject "OpenSCAD ReplaceObject"): Replace an object in the feature tree.
- ![](/images/OpenSCAD_RemoveSubtree.svg) [Remove Subtree](/OpenSCAD_RemoveSubtree "OpenSCAD RemoveSubtree"): Removes the selected objects and all children that are not referenced from other objects.
- ![](/images/OpenSCAD_RefineShapeFeature.svg) [Refine Shape Feature](/OpenSCAD_RefineShapeFeature "OpenSCAD RefineShapeFeature"): Cleans unnecessary lines.
- ![](/images/OpenSCAD_MirrorMeshFeature.svg) [Mirror Mesh Feature](/OpenSCAD_MirrorMeshFeature "OpenSCAD MirrorMeshFeature"): Create Mirror Mesh Feature.
- ![](/images/OpenSCAD_ScaleMeshFeature.svg) [Scale Mesh Feature](/OpenSCAD_ScaleMeshFeature "OpenSCAD ScaleMeshFeature"): Scale a Mesh Feature.
- ![](/images/OpenSCAD_ResizeMeshFeature.svg) [Resize Mesh Feature](/OpenSCAD_ResizeMeshFeature "OpenSCAD ResizeMeshFeature"): Resize a Mesh Feature.
- ![](/images/OpenSCAD_IncreaseToleranceFeature.svg) [Increase Tolerance Feature](/OpenSCAD_IncreaseToleranceFeature "OpenSCAD IncreaseToleranceFeature"): Increases tolerance of edges/faces/vertex of selected object(s).
- ![](/images/OpenSCAD_Edgestofaces.svg) [Convert Edges To Faces](/OpenSCAD_Edgestofaces "OpenSCAD Edgestofaces"): Convert edges to faces. Useful to prepare imported DXF geometry for extrusion.
- ![](/images/OpenSCAD_ExpandPlacements.svg) [Expand Placements](/OpenSCAD_ExpandPlacements "OpenSCAD ExpandPlacements"): Expand all placements downwards the FeatureTree.
- ![](/images/OpenSCAD_ExplodeGroup.svg) [Explode Group](/OpenSCAD_ExplodeGroup "OpenSCAD ExplodeGroup"): Explodes fused part primitives.
- ![](/images/OpenSCAD_AddOpenSCADElement.svg) [Add OpenSCAD Element](/OpenSCAD_AddOpenSCADElement "OpenSCAD AddOpenSCADElement"): Add an OpenSCAD element by entering OpenSCAD code into the task panel.
- ![](/images/OpenSCAD_MeshBoolean.svg) [Mesh Boolean](/OpenSCAD_MeshBoolean "OpenSCAD MeshBoolean"): Creates new mesh object by boolean operation from shapes.
- ![](/images/OpenSCAD_Hull.svg) [Hull](/OpenSCAD_Hull "OpenSCAD Hull"): Applies a hull to selected shapes.
- ![](/images/OpenSCAD_Minkowski.svg) [Minkowski](/OpenSCAD_Minkowski "OpenSCAD Minkowski"): Applies a minkowski sum to selected shapes.

## Preferences

- ![](/images/Std_DlgPreferences.svg) [Preferences](/OpenSCAD_Preferences "OpenSCAD Preferences"): preferences available for the OpenSCAD tools.

## Limitations

OpenSCAD creates constructive solid geometry, as well as imports mesh files and extrudes 2D geometry from [DXF](/DXF "DXF") files. FreeCAD allows you to create CSG with primitives as well. The FreeCAD geometry kernel (OCCT) works using a boundary representation. Therefore conversion from CSG to BREP should, in theory, be possible whereas conversion from BREP to CSG is, in general, not.

OpenSCAD works internally on meshes. Some operations which are useful on meshes are not meaningful on a BREP model and can not be fully supported. Among these are convex hull, minkowski sum, glide and subdiv. Currently we run the OpenSCAD binary in order to perform hull and minkwoski operations and import the result. This means that the involved geometry will be triangulated. In OpenSCAD non-uniform scaling is often used, which does not impose any problems when using meshes. In our geometry kernel geometric primitives (lines, circular sections, etc) are converted to BSpline prior to performing such deformations. Those BSplines are known to cause trouble in later boolean operations. An automatic solution is not available at the moment. Please feel free to post to the forum if you encounter such problems. Often such problems can be solved be remodeling small parts. A deformation of a cylinder can substituted by an extrusion of an ellipses.

## Importing text

Importing OpenSCAD code with texts requires that the fonts that are used are properly installed on your system. You can verify this by opening OpenSCAD as a standalone tool and checking the list in **Help → Font List**. The list will also give you the correct font names. If a font does not appear in the list after installing, you may have to manually copy the font file to the appropriate system directory.

Importing texts is relatively slow. Behind the scenes FreeCAD uses a DXF file created by OpenSCAD. The more contours there are the slower the import.

It can be a good idea to first import a simple test case (replace `NameOfFont` with the correct font name):

```
TESTFONT="NameOfFont";
linear_extrude(0.001) {
  text("A", size=5, font=TESTFONT, script="Latn");
};

```

The `script="Latn"` parameter can be left out here, but is required if the text string does not contain any letters, but only punctuation and/or numbers.

Please note that `use <FONT>;` statements in your source files are ignored when importing in FreeCAD. Under OpenSCAD the effect of a `use` statement is that the provided font file is temporarily added to the list of known fonts (although even there the statement does not work when a script is modified interactively).

## Hints

When importing [DXF](/DXF "DXF") set the Draft precision to a sensible amount as this will affect the detection of connected edges.

If FreeCAD crashes when importing CSG, it is strongly recommended that you enable "automatically check model after boolean operation" in **Menu → Edit → Preferences → Part Design → Model setting**.

## Tutorials

- [Import OpenSCAD code](/Import_OpenSCAD_code "Import OpenSCAD code")

## Links

- The official OpenSCAD project source code repository hosted on [GitHub](https://github.com/openscad/openscad)
- Open tickets tagged "OpenSCAD" on the [FreeCAD Github issue tracker](https://github.com/FreeCAD/FreeCAD/labels/WB%20OpenSCAD). There are also tickets on the now archived [mantis bugtracker](https://freecadweb.org/tracker/search.php?tag_string=OpenSCAD).
- Models tagged with "OpenSCAD" on [Thingiverse](http://www.thingiverse.com/tag:openscad)

Retrieved from "<http://wiki.freecad.org/index.php?title=OpenSCAD_Workbench/ko&oldid=1515576>"
