---
title: 草图工作台中的创建新草图工具
---
|  |
| --- |
| 创建草图 |
| 菜单位置 |
| Sketch → 创建草图 |
| 所属工作台 |
| [Sketcher](/Sketcher_Workbench/zh-cn "Sketcher Workbench/zh-cn") |
| 默认快捷键 |
| *沒有* |
| 版本介紹 |
| - |
| 参阅 |
| [创建草图](/index.php?title=PartDesign_NewSketch/zh-cn&action=edit&redlink=1 "PartDesign NewSketch/zh-cn (page does not exist)"), [映射草图至面](/Sketcher_MapSketch/zh-cn "Sketcher MapSketch/zh-cn"), [调整草图方向](/Sketcher_ReorientSketch/zh-cn "Sketcher ReorientSketch/zh-cn") |
|  |

## 描述

此工具将创建一个新的[草图（sketch）](/Sketcher_Workbench "Sketcher Workbench")。

请注意，[零件设计工作台（PartDesign workbench）](/PartDesign_Workbench "PartDesign Workbench")有它自己的[创建新草图](/PartDesign_NewSketch "PartDesign NewSketch")命令，当您使用零件设计工作台时，它将采用自己专属的新建工具。

## 如何使用

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

Retrieved from "<http://wiki.freecad.org/index.php?title=Sketcher_NewSketch/zh-cn&oldid=1388129>"