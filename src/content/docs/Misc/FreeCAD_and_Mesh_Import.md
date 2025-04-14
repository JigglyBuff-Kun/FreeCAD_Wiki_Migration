---
title: FreeCAD and Mesh Import
---

## Post-Import

After import the model is (for FreeCAD), just an assembly of faces. You might want to convert the model into a shape FreeCAD can recognize and that could be altered in FreeCAD.

To do this:

1. Switch to the ![](/images/Workbench_Part.svg) [Part Workbench](/Part_Workbench "Part Workbench")
2. Select the mesh, and go to the **Part → [Create shape from mesh](/Part_ShapeFromMesh "Part ShapeFromMesh")** or press the ![](/images/Part_ShapeFromMesh.svg) [Part ShapeFromMesh](/Part_ShapeFromMesh "Part ShapeFromMesh") button
3. Click OK in the dialog
4. Select the newly created shape
5. Go to **Part → [Convert to solid](/Part_MakeSolid "Part MakeSolid")**
6. Select the newly created solid
7. Go to **Part → Create a copy → [Refine shape](/Part_RefineShape "Part RefineShape")** or press the ![](/images/Part_RefineShape.svg) [Part RefineShape](/Part_RefineShape "Part RefineShape") button

**Note:** The last step is not necessary, but it will clean the solid of most of its residual edges on planar and cylindrical surfaces.

## Errors

### "cannot convert because shape is not a shell"

Well, your shell seems to have errors, maybe it is not closed (has holes). Since the capabilities of the Mesh workbench in FreeCAD are a little limited at the moment, you might want to try examining and repairing your model with third-party software. After doing that, you may try importing and converting your model again.

## Third Party Programs

- [MeshLab](https://www.meshlab.net/)
  - License: Open Source (GPL V2)
  - Runs on Windows 32/64 bit, Linux and macOS
- [Meshmixer](https://meshmixer.com/)
  - License: Freeware
  - Runs on Windows 64-bit

## Tutorials

- [Import from STL or OBJ](/Import_from_STL_or_OBJ "Import from STL or OBJ")
- [Export to STL or OBJ](/Export_to_STL_or_OBJ "Export to STL or OBJ")

## Related

- [FreeCAD Howto Import Export](/FreeCAD_Howto_Import_Export "FreeCAD Howto Import Export")

Retrieved from "<http://wiki.freecad.org/index.php?title=FreeCAD_and_Mesh_Import/en&oldid=1453408>"
