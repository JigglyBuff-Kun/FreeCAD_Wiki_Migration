---
title: Curves SketchOnSurface/it
---
:::caution
This documentation is not finished. Please help and contribute documentation.GuiCommand modelexplains how commands should be documented. BrowseCategory:UnfinishedDocuto see more incomplete pages like this one. SeeCategory:Command Referencefor all commands.SeeWikiPagesto learn about editing the wiki pages, and go toHelp FreeCADto learn about other ways in which you can contribute.
:::

|  |
| --- |
| Curves SketchOnSurface |
| Menu location |
| Surfaces → Sketch on Surface |
| Workbenches |
| [Curves](/Curves_Workbench "Curves Workbench") |
| Default shortcut |
| *None* |
| Introduced in version |
| - |
| See also |
| *None* |
|  |

## Descrizione

This tool maps a sketch onto an arbitrary curved face, like a label on a bottle.
The sketch must be actually attached to a face (see Sketch.Support).
The `Map` mode of the sketch has no effect on the result.

![](/images/Curves_SketchOnSurface_demo.png)

Above: shows the `Sketch_On_Surface` object applied to the cylinder face (left) and the source sketch in edit mode (right)

## Utilizzo

1. Switch to the ![](/images/Curves_workbench_icon.svg) [Curves](/Curves_Workbench "Curves Workbench") workbench (install from ![](/images/Std_AddonMgr.svg) [Addon Manager](/Std_AddonMgr "Std AddonMgr") is necessary, if not previously installed)
2. There are 2 methods to use the SketchOnSurface tool:

   You already have a sketch that you want to map on a face

   1. Attach the sketch to the target face:
      * In the attachment dialog selet the face
      * Set the mode to Deactivated while leaving the face as the first reference
      * Close the Attachment dialog
      * Set Placement.z=0
   2. Edit the sketch and add a Construction (blue) rectangle around the geometries. This rectangle will be the parametric bounds of the face.
   3. Exit edit mode.
   4. Select the sketch.
   5. Activate SketchOnSurface by either:
      * Pressing on the ![](/images/Curves_SketchOnSurface.svg) button
      * Using the **Surfaces → Sketch on Surface** entry in the Curves menu

   You have no sketch to map yet

   1. Select the target face in the [3D view](/3D_view "3D view")
   2. Activate SketchOnSurface by either:
      * Pressing on the ![](/images/Curves_SketchOnSurface.svg) button
      * Using the **Surfaces → Sketch on Surface** entry in the Curves menu
   3. A Sketch\_On\_Surface object appears in the [Tree view](/Tree_view "Tree view").
   4. Expand this object to make the Mapped\_Sketch appear below.
   5. Edit the sketch and add geometries inside the blue construction bounds.
   6. A SketchOnSurface object will be created on the surface of your object based on this sketch.

## Options

* Fill Extrusion: When the Thickness value is not null, this will generate lofting faces (the blue faces in the above screenshot).
* Fill Faces: This will fill all the geometrical figures closed in faces (the red faces in the above screenshot).
* Offset: This will push the shapes mapped above into the target face. Do not put an offset greater than the thickness, it makes the face disappear on the inside.
* Thickness: If not null, this will give thickness to the surfaces created above.

## Notes

It is assumed that all geometry in the sketch is enclosed within the blue construction frame. This includes all other construction geometry, as well as the visible internal geometry of complex curves (Bezier, Ellipse). If this is not the case the bounding box of the sketch will be larger than the construction frame and the final mapping will be scaled down accordingly. If required [hide the internal geometry](/Sketcher_RestoreInternalAlignmentGeometry "Sketcher RestoreInternalAlignmentGeometry") that is not fully inside the construction frame.

## Properties

## Scripting

Retrieved from "<http://wiki.freecad.org/index.php?title=Curves_SketchOnSurface/it&oldid=1562170>"