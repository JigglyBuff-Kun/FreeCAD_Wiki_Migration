---
title: スケッチャー・中心点を指定して楕円を作成
---

|                                                                                                |
| ---------------------------------------------------------------------------------------------- |
| スケッチャー・中心点を指定して楕円を作成                                                       |
| メニューの場所                                                                                 |
| スケッチ → スケッチャージオメトリ → 中心点を指定して楕円を作成                                 |
| ワークベンチ                                                                                   |
| [Sketcher](/Sketcher_Workbench/ja "Sketcher Workbench/ja")                                     |
| デフォルトのショートカット                                                                     |
| G E E                                                                                          |
| 導入バージョン                                                                                 |
| 0.15                                                                                           |
| 参照                                                                                           |
| [スケッチャー・楕円弧を作成](/Sketcher_CreateArcOfEllipse/ja "Sketcher CreateArcOfEllipse/ja") |
|                                                                                                |

## 概要

The ![](/images/Sketcher_CreateEllipseByCenter.svg) [Sketcher CreateEllipseByCenter](/Sketcher_CreateEllipseByCenter "Sketcher CreateEllipseByCenter") tool creates an ellipse by its center, an endpoint of one of its axes, and a point along the ellipse. [introduced in 1.0](/Release_notes_1.0 "Release notes 1.0"): Or optionally by both endpoints of one of its axes and a point along the ellipse.

![](/images/Sketcher_CreateEllipseByCenter_Example.png)

Ellipse (white) with internal geometry (dark yellow)

## 使い方

See also: [Drawing aids](/Sketcher_Workbench#Drawing_aids "Sketcher Workbench").

Pos-OVP = Positional [On-View-Parameters](/Sketcher_Preferences#General "Sketcher Preferences"). [introduced in 1.0](/Release_notes_1.0 "Release notes 1.0")  
Dim-OVP = Dimensional On-View-Parameters. [introduced in 1.0](/Release_notes_1.0 "Release notes 1.0")

1. There are several ways to invoke the tool:
   - Press the ![](/images/Sketcher_CreateEllipseByCenter.svg) [Ellipse by center, radius, rim point](/Sketcher_CreateEllipseByCenter "Sketcher CreateEllipseByCenter") button.
   - Select the **Sketcher → Sketcher geometries → ![](/images/Sketcher_CreateEllipseByCenter.svg) Create ellipse by center** option from the menu.
   - Use the keyboard shortcut: G then E, then E.
2. The cursor changes to a cross with the current tool mode icon.
3. The **Ellipse parameters** section ([introduced in 1.0](/Release_notes_1.0 "Release notes 1.0")) is added at the top of the [Sketcher Dialog](/Sketcher_Dialog "Sketcher Dialog").
4. Optionally press the M key or select from the dropdown list in the parameters section to change the tool mode:
   - ![](/images/Sketcher_CreateEllipseByCenter.svg) **Center**:
     1. Pick the center of the ellipse. Or with Pos-OVP: enter its X and/or Y coordinate.
     2. Pick an endpoint of one of the axes of the ellipse, this also defines one of its radii. Or with Dim-OVP: enter this radius and/or the angle of this axis.
     3. Pick a point to define the other radius of the ellipse. Or with Dim-OVP: enter this radius.
   - ![](/images/Sketcher_CreateEllipseBy3Points.svg) **Axis endpoints**: [introduced in 1.0](/Release_notes_1.0 "Release notes 1.0")
     1. Pick the endpoints of one of the axes of the ellipse, this also defines one of its radii. Or with Pos-OVP: enter their X and/or Y coordinates. No constraints are created for these points.
     2. Pick a point to define the other radius of the ellipse. Or with Pos-OVP: enter its X and/or Y coordinate. No constraint is created for this point.
5. The ellipse is created, including a set of internal geometry (major axis, minor axis and two foci), and applicable Pos-OVP and Dim-OVP based constraints are added.
6. If the tool runs in [continue mode](/Sketcher_Workbench#Continue_modes "Sketcher Workbench"):
   1. Optionally keep creating ellipses.
   2. To finish, right-click or press Esc, or start another geometry or constraint creation tool.

## 補足

- Elements of the internal geometry can be deleted. They can be recreated at any time with [Sketcher RestoreInternalAlignmentGeometry](/Sketcher_RestoreInternalAlignmentGeometry "Sketcher RestoreInternalAlignmentGeometry").
- Once created, the major and minor axes of an ellipse are strict and cannot be swapped by resizing. This is a consequence of the solver parametrization and the same strict behavior of [OpenCASCADE](/OpenCASCADE "OpenCASCADE"). An ellipse must be rotated to swap its axes.

Retrieved from "<http://wiki.freecad.org/index.php?title=Sketcher_CreateEllipseByCenter/ja&oldid=1547177>"
