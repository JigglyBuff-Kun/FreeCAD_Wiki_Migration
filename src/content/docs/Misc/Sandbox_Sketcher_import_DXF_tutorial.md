---
title: Sandbox Sketcher import DXF tutorial
---

## Import DXF file as sketch

There is no direct way to import a DXF file into an open sketch but they can be imported as separate objects. The created object might be a sketch object ![](/src/assets/images/Workbench_Sketcher.svg), a draft object or a part shape. Not always the preference set on the [Import Export Preferences Page](/Import_Export_Preferences#DXF "Import Export Preferences") succeeds, e.g. the preference is set to create a sketch but the resulting object is a draft object. This use case shows how to convert a DFX file imported as draft object to a sketch via the Draft Workbench. The [Import Export Preferences Page](/Import_Export_Preferences#DXF "Import Export Preferences") legacy importer options are not used (unchecked).

1. Import DXF file (_Ctrl-I_ or **File → Import.. → Select \*.DXF** )

   : in Version 0.20 you will get a dialog to select AutoCAD 3D-Drawing pr Autodesk DXF 2D. For sketcher files use the 2D option.
   : the file will be imported as a shape file
   : Splines may be missing and you may see control points joint by lines. That depends on the source file. You might try to export the file with different settings or with a different tool to fix this.

2. If the import created mulipe shapes files select all that should become part of the sketch
3. Select the [Draft Workbench](/Draft_Workbench "Draft Workbench")
4. ![](/src/assets/images/Draft_Draft2Sketch.svg) Press the [Draft to Sketch](/Draft_Draft2Sketch "Draft Draft2Sketch") button

   : an additional sketch icon appears in the tree. You can now delete the original imported object as it is not required any more

5. done.

This sketch is still a bit different from other sketches. It has no dimensions, no constrains and will be quite unstable if you click and move any of the lines. Also the single line elements are likely not connected (coincident). For further use like extrusions some fixes are required:

- add dimensions. Be careful with horizontal or vertical dimensions, as the original lines may have been be (slightly) rotated.
- add constraints
- make sure all joints are coincident. The tool **Sketcher → Validate sketch...** may fix some for you. Extrusion will not work until all missin coincidences are resolved.
- add missing splines (for B-Splines with control points you can convert the connecting lines of the imported sketch into blue work geometry. Then add the new spline by clicking the start point and then the original control points one after the other. Finish the new spline by clicking the end connection point to the geometry (white line). This should fully recover the original B-Spline)

In the preferences section [Inport Export](/Import_Export_Preferences "Import Export Preferences") (DXF Tab) are some settings that affect this use case. To get a decent sketch set

- Create to: "Sketches" (this is a radio button).
- Scale should be set to: 1.00
- Join geometry: CHECK
- Create: "Sketches" (this tells the importer to try to generate a sketch object).

Tip: This procedure can also be useful to convert parts from other CAD programs that can not be directly imported. If much of the design is in sketches, exporting the sketches to DXF and re-adding constraints and dimensions in FreeCAD can much quicker than re-creating the parts from scratch or using exported STEP files without modifiable creation history.

Retrieved from "<http://wiki.freecad.org/index.php?title=Sandbox:Sketcher_import_DXF_tutorial&oldid=1137348>"
