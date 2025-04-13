---
title: Sketcher CreateFillet/ja
---
|  |
| --- |
| Sketcher CreateFillet |
| Menu location |
| Sketch → Sketcher geometries → Create fillet |
| Workbenches |
| [Sketcher](/Sketcher_Workbench "Sketcher Workbench") |
| Default shortcut |
| F |
| Introduced in version |
| - |
| See also |
| *None* |
|  |

## 概要

このツールは一点でつながる二直線の間にフィレットを作成します。このツールを起動後、二直線を選択するか角をなす点をクリックしてください。

[introduced in 1.0](/Release_notes_1.0 "Release notes 1.0"): If two straight edges connected by a [Coincident constraint](/Sketcher_ConstrainCoincident "Sketcher ConstrainCoincident") are filleted or chamfered, the corner point can optionally be preserved. The tool then adds a [Point object](/Sketcher_CreatePoint "Sketcher CreatePoint") that has a [Point on object constraint](/Sketcher_ConstrainPointOnObject "Sketcher ConstrainPointOnObject") with both edges. Constraints connected to the corner point are transferred to the new point object.

![](/images/SketcherCreateFilletExample.png)

## 使用方法

See also: [Drawing aids](/Sketcher_Workbench#Drawing_aids "Sketcher Workbench").

* 二直線ををつなぐ頂点をピックするか、二本の繋がった直線をクリックします。クリック位置と頂点との距離によってフィレットの半径が設定されます。
* ESCキーを押すか、右マウスボタンをクリックするとこの機能をキャンセル、終了できます。

## Notes

* The construction geometry arc of a chamfer is not visible outside the sketch. It cannot be deleted without breaking the geometry of the chamfer.
* Some ([conic](/Sketcher_Workbench#Sketcher_CompCreateConic "Sketcher Workbench")) curves may need to be [trimmed](/Sketcher_Trimming "Sketcher Trimming") before they can be filleted.
* The fillet radius depends on the selection method. If a [Coincident constraint](/Sketcher_ConstrainCoincident "Sketcher ConstrainCoincident") connecting two straight edges is selected, the fillet radius is derived from the length of the shortest edge. If two edges are selected the radius is the distance from the first clicked point to the (extended) intersection of the edges.

Retrieved from "<http://wiki.freecad.org/index.php?title=Sketcher_CreateFillet/ja&oldid=1540147>"