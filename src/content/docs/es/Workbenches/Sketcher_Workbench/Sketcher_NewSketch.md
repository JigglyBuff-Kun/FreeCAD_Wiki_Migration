---
title: Croquizador NuevoCroquis
---
|  |
| --- |
| Croquizador Nuevo croquis |
| Ubicación en el Menú |
| Croquis → Crear croquis |
| Entornos de trabajo |
| [Croquizador](/Sketcher_Workbench/es "Sketcher Workbench/es") |
| Atajo de teclado por defecto |
| *Ninguno* |
| Introducido en versión |
| - |
| Ver también |
| [DiseñoPieza Nuevo croquis](/PartDesign_NewSketch/es "PartDesign NewSketch/es"), [Croquizador MapearCroquis](/Sketcher_MapSketch/es "Sketcher MapSketch/es"), [Croquizador Reorientar](/Sketcher_ReorientSketch/es "Sketcher ReorientSketch/es") |
|  |

## Descripción

Esto creará un nuevo [Croquis](/Sketcher_Workbench/es "Sketcher Workbench/es").

Tenga en cuenta que la ![](/images/Workbench_PartDesign.svg) [Ambiente de trabajo DiseñoPiezas](/PartDesign_Workbench/es "PartDesign Workbench/es") tiene su propia herramienta [nuevo croquis](/PartDesign_NewSketch/es "PartDesign NewSketch/es"), cuando se trabaja en un [Cuerpo DiseñoPiezas](/PartDesign_Body/es "PartDesign Body/es") es preferible utilizar esa herramienta.

## Utilización

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

Retrieved from "<http://wiki.freecad.org/index.php?title=Sketcher_NewSketch/es&oldid=1388132>"