---
title: スケッチャー・スナップ
---
|  |
| --- |
| スナップの切り替え |
| メニューの場所 |
| *なし* |
| ワークベンチ |
| [スケッチャー](/Sketcher_Workbench/ja "Sketcher Workbench/ja") |
| デフォルトのショートカット |
| *なし* |
| 導入バージョン |
| 0.21 |
| 参照 |
| [グリッドの表示を切り替え](/Sketcher_Grid/ja "Sketcher Grid/ja") |
|  |

## 概要

The ![](/images/Sketcher_Snap.svg) [Sketcher Snap](/Sketcher_Snap "Sketcher Snap") tool toggles snapping in all sketches. Individual snaps and settings can be changed in the related menu.

Snapping only works while creating geometry. Note that snapping is just a drawing aid, it does not produce additional constraints.

## 使い方

1. Press the ![](/images/Sketcher_Snap.svg) [Toggle snap](/Sketcher_Snap "Sketcher Snap") button to toggle snapping.
2. optionally click on the down arrow to the right of the button to open the menu. The settings in this menu can only be changed if snapping is switched on:  
   ![](/images/Sketcher_Snap_Menu.png)
   * If the **Snap to grid** checkbox is checked, the cursor will snap to grid lines and grid intersections. Snapping occurs if the distance of the cursor to a grid line is 20% of the grid spacing or less. Snapping also works if the grid is invisible.
   * If the **Snap to objects** checkbox is checked, the cursor will snap to edges of geometry and midpoints of lines and arcs.
   * **Snap angle** specifies the angle for angular snap. Snapping will occur at multiples of this value starting from the direction of the positive X axis of the sketch. The Ctrl key must be held down for this snap. Angular snap only works when creating certain geometry.

Retrieved from "<http://wiki.freecad.org/index.php?title=Sketcher_Snap/ja&oldid=1544220>"