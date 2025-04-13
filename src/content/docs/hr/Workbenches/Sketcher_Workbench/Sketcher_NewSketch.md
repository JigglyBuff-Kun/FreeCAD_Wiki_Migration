---
title: Sketcher NewSketch/hr
---
|  |
| --- |
| Sketcher NewSketch |
| Menu location |
| Sketch → Create sketch |
| Workbenches |
| [Sketcher](/Sketcher_Workbench "Sketcher Workbench") |
| Default shortcut |
| *None* |
| Introduced in version |
| - |
| See also |
| [PartDesign NewSketch](/PartDesign_NewSketch "PartDesign NewSketch"), [Sketcher MapSketch](/Sketcher_MapSketch "Sketcher MapSketch"), [Sketcher ReorientSketch](/Sketcher_ReorientSketch "Sketcher ReorientSketch") |
|  |

## Description

The ![](/images/Sketcher_NewSketch.svg) [Sketcher NewSketch](/Sketcher_NewSketch "Sketcher NewSketch") tool creates a new sketch and opens the [Sketcher Dialog](/Sketcher_Dialog "Sketcher Dialog") to edit it.

Note that the ![](/images/Workbench_PartDesign.svg) [PartDesign Workbench](/PartDesign_Workbench "PartDesign Workbench") has its own [new sketch](/PartDesign_NewSketch "PartDesign NewSketch") tool. When working on a [PartDesign Body](/PartDesign_Body "PartDesign Body") that tool should be used instead.

## Usage

1. If the sketch should be [attached](/Part_EditAttachment "Part EditAttachment") to existing geometry: select an object with a shape, or one or more vertices, edges, and/or faces, and/or a plane.
2. There are several ways to invoke the tool:
   * Press the ![](/images/Sketcher_NewSketch.svg) [Create sketch](/Sketcher_NewSketch "Sketcher NewSketch") button.
   * Select the **Sketch → ![](/images/Sketcher_NewSketch.svg) Create sketch** option from the menu.
3. If geometry has been selected:
   1. The **Sketch attachment** dialog opens.
   2. Select an [attachment method](/Part_EditAttachment#Attachment_modes "Part EditAttachment") from the dropdown list. Or select **Don't attach** to ignore the selection.
   3. Press the OK button.
4. If there is no selection, or **Don't attach** has been selected in the previous step:
   1. The **Choose orientation** dialog opens.
   2. Specify the plane for the orientation. The plane is relative to the local coordinate system the sketch is in:
      * If the **Reverse direction** checkbox is not checked:
        + Top: **XY-Plane**
        + Front: **XZ-Plane**
        + Right: **YZ-Plane**
      * If the **Reverse direction** checkbox is checked:
        + Bottom: **XY-Plane**
        + Rear: **XZ-Plane**
        + Left: **YZ-Plane**
   3. Optionally change the **Offset**. The offset is measured along the Z, Y or X axis of the local coordinate system.
   4. Press the OK button.
5. A sketch is created.
6. The sketch is put in edit mode and the [Sketcher Dialog](/Sketcher_Dialog "Sketcher Dialog") opens.
7. To finish edit mode see ![](/images/Sketcher_LeaveSketch.svg) [Sketcher LeaveSketch](/Sketcher_LeaveSketch "Sketcher LeaveSketch").

## Notes

* Existing sketches can be attached to (different) object(s) with [Sketcher MapSketch](/Sketcher_MapSketch "Sketcher MapSketch") or detached and reoriented with [Sketcher ReorientSketch](/Sketcher_ReorientSketch "Sketcher ReorientSketch").

Retrieved from "<http://wiki.freecad.org/index.php?title=Sketcher_NewSketch/hr&oldid=1388130>"