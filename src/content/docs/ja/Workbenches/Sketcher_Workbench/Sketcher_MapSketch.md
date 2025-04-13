---
title: スケッチャー・スケッチをアタッチ
---
|  |
| --- |
| スケッチャー・スケッチをアタッチ |
| メニューの場所 |
| スケッチ → スケッチをアタッチ... |
| ワークベンチ |
| [スケッチャー](/Sketcher_Workbench/ja "Sketcher Workbench/ja")、[バートデザイン](/PartDesign_Workbench/ja "PartDesign Workbench/ja") |
| デフォルトのショートカット |
| *なし* |
| 導入バージョン |
| - |
| 参照 |
| [スケッチャー・スケッチの方向を変更](/Sketcher_ReorientSketch/ja "Sketcher ReorientSketch/ja")、[スケッチャー・スケッチを作成](/Sketcher_NewSketch/ja "Sketcher NewSketch/ja") |
|  |

## 概要

The ![](/images/Sketcher_MapSketch.svg) [Sketcher MapSketch](/Sketcher_MapSketch "Sketcher MapSketch") tool attaches a sketch to selected geometry.

Typical use cases are:

* The sketch was created on a standard plane (XY, XZ or YZ) and you want to attach it to the face of a solid in order to build a new feature upon it.
* The sketch was attached to a specific face of a solid but you need to attached it to a different face.
* A broken model needs to be repaired.

![](/images/Sketcher_MapSketch_00.png)

## 使い方

1. Select an object with a shape, or one or more vertices, edges, and/or faces, and/or a plane.
2. There are several ways to invoke the tool:
   * Press the ![](/images/Sketcher_MapSketch.svg) [Attach sketch...](/Sketcher_MapSketch "Sketcher MapSketch") button.
   * Select the **Sketch → ![](/images/Sketcher_MapSketch.svg) Attach sketch...** option from the menu.
3. The **Select sketch** dialog opens.
4. Select a sketch from the dropdown list.
5. Press the OK button.
6. The **Sketch attachment** dialog opens.
7. Select an [attachment method](/Part_EditAttachment#Attachment_modes "Part EditAttachment") from the dropdown list. Or select **Don't attach** to detach the sketch.
8. Press the OK button.

Retrieved from "<http://wiki.freecad.org/index.php?title=Sketcher_MapSketch/ja&oldid=1544190>"