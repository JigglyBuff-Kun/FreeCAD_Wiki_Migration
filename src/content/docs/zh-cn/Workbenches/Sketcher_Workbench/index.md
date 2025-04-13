---
title: 草图工作台
---

![](/images/Workbench_Sketcher.svg)

Sketcher workbench icon

## 简介

[草图工作台](/Sketcher_Workbench "Sketcher Workbench")用于创建用于 [零件工作台](/PartDesign_Workbench/zh-cn "PartDesign Workbench/zh-cn")、 [建筑工作台](/Arch_Workbench/zh-cn "Arch Workbench/zh-cn")和其他工作台的二维几何图形。
通常，二维绘图被视为大多数 CAD 模型的起点，因为二维草图可以“拉伸”以创建三维形状；进一步的二维草图可以用于在先前构建的三维形状的基础上创建其他特征，如开槽“Pocket”、隆起“ridges”或拉伸。
草图绘制器与在[零件设计工作台](/PartDesign_Workbench/zh-cn "PartDesign Workbench/zh-cn")中定义的布尔操作一起构成了构建实体的[构造实体几何](/index.php?title=Constructive_solid_geometry/zh-cn&action=edit&redlink=1 "Constructive solid geometry/zh-cn (page does not exist)")方法的基础。此外，草图绘制器还与[零件设计工作台](/PartDesign_Workbench/zh-cn "PartDesign Workbench/zh-cn")操作一起构成了创建实体的[特征编辑](/index.php?title=Feature_editing/zh-cn&action=edit&redlink=1 "Feature editing/zh-cn (page does not exist)")方法的基础。

Together with boolean operations defined in the ![](/images/Workbench_Part.svg) [Part Workbench](/Part_Workbench "Part Workbench"), the Sketcher Workbench, or "The Sketcher" for short, forms the basis of the [constructive solid geometry](/Constructive_solid_geometry "Constructive solid geometry") (CSG) method of building solids. Together with ![](/images/Workbench_PartDesign.svg) [PartDesign Workbench](/PartDesign_Workbench "PartDesign Workbench") operations, it also forms the basis of the [feature editing](/Feature_editing "Feature editing") methodology of creating solids. But many other workbenches use sketches as well.

草图工作台本身具有约束条件 - 允许将 2D 形状约束到精确的几何定义。以及一个约束求解器，它计算二维几何约束范围，并允许对草图自由度的交互式探索。

## 草图编辑器不擅长于

草图编辑器不打算制作 2D 蓝图。草图一旦用于生成实体特征后，会自动隐藏。约束仅在草图编辑模式下可见。

![](/images/FC_ConstrainedSketch.png)

一个全约束草图

## Constraints

#### 什么是约束？

使用约束来限制对象的自由度。例如，没有约束的线条具有 4 [自由度](#Degrees_Of_Freedom)（简写为“DOF”）：可以水平或垂直移动，可以被拉伸，并且可以旋转。

应用水平或垂直约束或角度约束（相对于另一条线或与其中一条轴）将限制其旋转能力，从而使其具有 3 个自由度。锁定其原点之一的点将消除另外 2 个自由度。并且应用维度约束将消除最后的自由度。然后，该行被认为是“完全受限制的”。

多个对象可以彼此约束。可以通过其中一个点与重合点约束连接两条线。可以在它们之间设置一个角度，或者它们可以垂直设置。一条线可以与弧或圆相切，依此类推。具有多个对象的复杂草图将具有多种不同的解决方案，并使其“完全受约束”，这意味着基于所应用的约束只能达到其中一种可能的解决方案。

有两种约束：几何和尺寸。它们在下面的['工具'](#The_tools)部分中详细介绍。

### Edit constraints

When a [driving dimensional constraint](/Sketcher_ToggleDrivingConstraint "Sketcher ToggleDrivingConstraint") is created, and if the **Ask for value after creating a dimensional constraint** [preference](/Sketcher_Preferences#Display "Sketcher Preferences") is selected (default), a dialog opens to edit its value.

![Sketcher_Edit_Constraint.png](/images/Sketcher_Edit_Constraint.png)

You can enter a numerical value or an [expression](/Expressions "Expressions"), and it is possible to name the constraint to facilitate its use in other expressions. You can also check the **Reference** checkbox to switch the constrain to [reference mode](/Sketcher_ToggleDrivingConstraint "Sketcher ToggleDrivingConstraint").

To edit the value of an existing dimensional constraint do one of the following:

- Double-click the constraint value in the [3D view](/3D_view "3D view").
- Double-click the constraint in the [Sketcher Dialog](/Sketcher_Dialog "Sketcher Dialog").
- Right-click the constraint in the Sketcher Dialog and select the **Change value** option from the context menu.

### Reposition constraints

Dimensional constraints can be repositioned in the 3D view by dragging. Hold down the left mouse button over the constraint value and move the mouse. The symbols of geometric constraints are positioned automatically and cannot be moved.

## Profile sketches

To create a sketch that can be used as a profile for generating solids certain rules must be followed:

- The sketch must contain only closed contours. Gaps between endpoints, however small, are not allowed.
- Contours can be nested, to create voids, but should not self-intersect or intersect other contours.
- Contours cannot share edges with other contours. Duplicate edges must be avoided.
- T-connections, that is more than two edges sharing a common point, or a point touching an edge, are not allowed.

These rules do not apply to construction geometry (default color blue), which is not shown outside edit mode, or if the sketch is used for a different purpose. Depending on the workbench and the tool that will use the profile sketch, additional restrictions may apply.

## Drawing aids

The Sketcher Workbench has several drawing aids and other features that can help when creating geometry and applying constraints.

### Continue modes

There are two continue modes: **Geometry creation "Continue Mode"** and **Constraint creation "Continue Mode"**. If these are checked (default) in the [preferences](/Sketcher_Preferences#Display "Sketcher Preferences"), related tools will restart after finishing. To exit a continuous tool press Esc or the right mouse button. This must be repeated if a continuous geometry tool has already received input. You can also exit a continuous tool by starting another geometry or constraint creation tool. Note that pressing Esc if no tool is active will exit sketch edit mode. Uncheck the **Esc can leave sketch edit mode** [preference](/Sketcher_Preferences#General "Sketcher Preferences") if you often inadvertently press Esc too many times.

### Auto constraints

In sketches that have **Auto constraints** checked (default) several constraints are applied automatically. The icon of a proposed automatic constraint is shown next to the cursor when it is placed correctly. Left-clicking will then apply that constraint. This is a per-sketch setting that can be changed in the [Sketcher Dialog](/Sketcher_Dialog#Constraints "Sketcher Dialog") or by changing the 视图**Autoconstraints** [property](/Property_editor "Property editor") of the sketch.

The following constraints are applied automatically:

- ![](/images/Sketcher_ConstrainCoincident.svg) [Coincident](/Sketcher_ConstrainCoincident "Sketcher ConstrainCoincident")
- ![](/images/Sketcher_ConstrainPointOnObject.svg) [Point on object](/Sketcher_ConstrainPointOnObject "Sketcher ConstrainPointOnObject")
- ![](/images/Sketcher_ConstrainHorizontal.svg) [Horizontal](/Sketcher_ConstrainHorizontal "Sketcher ConstrainHorizontal")
- ![](/images/Sketcher_ConstrainVertical.svg) [Vertical](/Sketcher_ConstrainVertical "Sketcher ConstrainVertical")
- ![](/images/Sketcher_ConstrainTangent.svg) [Tangent](/Sketcher_ConstrainTangent "Sketcher ConstrainTangent")
- [introduced in 1.0](/Release_notes_1.0 "Release notes 1.0"): ![](/images/Sketcher_ConstrainSymmetric.svg) [Symmetric](/Sketcher_ConstrainSymmetric "Sketcher ConstrainSymmetric") (line midpoint)

### Snapping

[introduced in 0.21](/Release_notes_0.21 "Release notes 0.21")

It is possible to [snap](/Sketcher_Snap "Sketcher Snap") to grid lines and grid intersection, to edges of geometry and midpoints of lines and arcs, and to certain angles. Please note that snapping does not produce constraints in and of itself. For example, only if [Auto constraints](#Auto_constraints) is switched on will snapping to an edge produce a [Point on object constraint](/Sketcher_ConstrainPointOnObject "Sketcher ConstrainPointOnObject"). But just picking a point on the edge would then have the same result.

### On-View-Parameters

[introduced in 1.0](/Release_notes_1.0 "Release notes 1.0")

Depending on the selected option in the [preferences](/Sketcher_Preferences#General "Sketcher Preferences") only the dimensional On-View-Parameters or both the dimensional and the positional On-View-Parameters can be enabled. Positional parameters allow the input of exact coordinates, for example the center of a circle, or the start point of a line. Dimensional parameters allow the input of exact dimensions, for example the radius of a circle, or the length and angle of a line. On-View-Parameters are not available for all tools.

![](/images/Sketcher_On_view_parameters_positional.png)

Determining the center point of a circle with the positional parameters enabled

![](/images/Sketcher_On_view_parameters_dimensional.png)

Determining the radius of a circle with the dimensional parameters enabled

If values are entered and confirmed by pressing Enter or Tab, related constraints are added automatically. If two parameters are displayed at the same time, for example the X and Y coordinate of a point, it is possible to enter one value and pick a point to define the other. Depending on the object additional constraints may be required to fully constrain it. Constraints resulting from On-View-Parameters take precedence over those that may result from [Auto constraints](/Sketcher_Dialog#Constraints "Sketcher Dialog").

![](/images/Sketcher_ArcExample3.png)

Arc created by entering all On-View-Parameters with resulting automatically created constraints

### Coordinate display

If the **Show coordinates beside cursor while editing** [preference](/Sketcher_Preferences#Display "Sketcher Preferences") is checked (default), the parameters of the current geometry tool (coordinates, radius, or length and angle) are displayed next to the cursor. This is deactivated while On-View-Parameters are shown.

## Selection methods

While a sketch is in edit mode the following selection methods can be used:

### 3D view element selection

As elsewhere in FreeCAD, an element can be selected in the [3D view](/3D_view "3D view") with a single left mouse click. But there is no need to hold down the Ctrl key when selecting multiple elements. Holding down that key is possible though and has the advantage that you can miss-click without losing the selection. Edges, points and constraints can be selected in this manner.

### 3D view box selection

Box selection in the 3D view works without using [Std BoxSelection](/Std_BoxSelection "Std BoxSelection") or [Std BoxElementSelection](/Std_BoxElementSelection "Std BoxElementSelection"):

1. Make sure that no tool is active.
2. Do one of the following:
   - Click in an empty area and drag a rectangle from left to right to select elements that lie completely inside the rectangle.
   - Click in an empty area and drag a rectangle from right to left to also select elements that touch or cross the rectangle.

You can box-select edges and points, constraints cannot be box-selected.

### 3D view connected geometry selection

[introduced in 1.0](/Release_notes_1.0 "Release notes 1.0")

Double-clicking an edge in the 3D view will select all edges directly and indirectly connected with that edge via endpoints. There is no need for the edges to be connected with [Coincident constraints](/Sketcher_ConstrainCoincident "Sketcher ConstrainCoincident"), endpoints need only have the same coordinates.

### Sketcher Dialog selection

Edges and points can also be selected from the Elements section of the [Sketcher Dialog](/Sketcher_Dialog "Sketcher Dialog"), and constraints from the Constraints section of that dialog.

## Copy, cut and paste

[introduced in 1.0](/Release_notes_1.0 "Release notes 1.0")

The standard keyboard shortcuts, Ctrl+C, Ctrl+X and Ctrl+V, can be used to copy, cut and paste selected Sketcher geometry including related constraints. But these tools are also available from the **Sketch → Sketcher tools** menu. They can be used within the same sketch but also between different sketches or separate instances of FreeCAD. Since the data is copied to the clipboard in the form of Python code, it can be used in other ways too (e.g. shared on the forum).

## Tools

## 工具

草图工作台工具都位于加载草图工作台时出现的草图菜单中。

Some tools are also available from the [3D view](/3D_view "3D view") context menu while a sketch is in edit mode, or from the context menus of the [Sketcher Dialog](/Sketcher_Dialog "Sketcher Dialog").

[introduced in 0.21](/Release_notes_0.21 "Release notes 0.21"): If a sketch is in edit mode the Structure toolbar is hidden as none of its tools can then be used.

### General

#### Sketcher toolbar

- ![](/images/Sketcher_NewSketch.svg) [创建草图](/Sketcher_NewSketch/zh-cn "Sketcher NewSketch/zh-cn"): 在所选的面或平面上创建新的草图。如果在执行此工具时未选择任何面, 则系统将提示用户从弹出窗口中选择一个平面。

- ![](/images/Sketcher_EditSketch.svg) [编辑草绘](/Sketcher_EditSketch/zh-cn "Sketcher EditSketch/zh-cn"): 编辑已选择的草图。这会开启[草图对话框](/Sketcher_Dialog "Sketcher Dialog")。

- ![](/images/Sketcher_MapSketch.svg) [映射草图至面](/Sketcher_MapSketch/zh-cn "Sketcher MapSketch/zh-cn"): 将草图映射到以前选定的实心面。

- ![](/images/Sketcher_ReorientSketch.svg) [调整草图方向](/Sketcher_ReorientSketch/zh-cn "Sketcher ReorientSketch/zh-cn"): 允许您更改草图的位置

- ![](/images/Sketcher_ValidateSketch.svg) [校验草图…](/Sketcher_ValidateSketch/zh-cn "Sketcher ValidateSketch/zh-cn"): 它允许你检查是否有不同点的公差和匹配。

- ![](/images/Sketcher_MergeSketches.svg) [合并草图](/Sketcher_MergeSketches/zh-cn "Sketcher MergeSketches/zh-cn"): 合并两个或多个草图。

- ![](/images/Sketcher_MirrorSketch.svg) [镜像草图](/Sketcher_MirrorSketch/zh-cn "Sketcher MirrorSketch/zh-cn"): 沿 x 轴、y 轴或原点镜像草图。

#### Sketcher Edit Mode toolbar

- ![](/images/Sketcher_LeaveSketch.svg) [离开草图](/Sketcher_LeaveSketch/zh-cn "Sketcher LeaveSketch/zh-cn"): 离开草图编辑模式。

- ![](/images/Sketcher_ViewSketch.svg) [查看草图](/Sketcher_ViewSketch/zh-cn "Sketcher ViewSketch/zh-cn"): 设置垂直于草图平面的模型视图。

- ![](/images/Sketcher_ViewSection.svg) [查看截面](/Sketcher_ViewSection/zh-cn "Sketcher ViewSection/zh-cn"): 创建一个截面，并暂时隐藏此草图平面前侧的所有内容。

#### Sketcher edit tools toolbar

- ![](/images/Sketcher_Grid.svg) [Toggle grid](/Sketcher_Grid "Sketcher Grid"): Toggles the grid in the sketch currently being edited. Settings can be changed in the related menu. [introduced in 0.21](/Release_notes_0.21 "Release notes 0.21")

- ![](/images/Sketcher_Snap.svg) [Toggle snap](/Sketcher_Snap "Sketcher Snap"): Toggles snapping in all sketches. Settings can be changed in the related menu. [introduced in 0.21](/Release_notes_0.21 "Release notes 0.21")

- ![](/images/Sketcher_RenderingOrder.svg) [Configure rendering order](/Sketcher_RenderingOrder "Sketcher RenderingOrder"): The rendering order of all sketches can be changed in the related menu. [introduced in 0.21](/Release_notes_0.21 "Release notes 0.21")

#### Other

- ![](/images/Sketcher_StopOperation.svg) [Stop operation](/Sketcher_StopOperation "Sketcher StopOperation"): Stops any currently running geometry or constraint creation tool.

#### 草图编辑器几何工具

这是创建对象的工具。

- ![](/images/Sketcher_CreatePoint.svg) [Point](/Sketcher_CreatePoint "Sketcher CreatePoint"): 绘制一个点.

- ![](/images/Sketcher_CreatePolyline.png) [Polyline (multiple-point line)](/Sketcher_CreatePolyline "Sketcher CreatePolyline"): 绘制由多个线段组成的线。绘制折线时，按 M 键可在不同的折线模式之间切换。

- ![](/images/Sketcher_Line.png) [Line by 2 point](/Sketcher_CreateLine "Sketcher CreateLine"): 从 2 点绘制线段。对于特定的约束而言，此工具绘制的是无限长的直线。

- ![](/images/Sketcher_CreateArc.svg)![](/images/Toolbar_flyout_arrow_blue_background.svg) Create arc:

- ![](/images/Sketcher_CreateArc.svg) [Arc](/Sketcher_CreateArc "Sketcher CreateArc"): 从中心，半径，起始角度和最终角度绘制弧段。

- ![](/images/Sketcher_CreateArc3Point.png) [Arc by 3 Point](/Sketcher_Create3PointArc "Sketcher Create3PointArc"): 根据圆周上的两个端点以及圆周上的另一个点来绘制弧段。

- ![](/images/Sketcher_CreateArcOfEllipse.svg) [Arc of ellipse](/Sketcher_CreateArcOfEllipse "Sketcher CreateArcOfEllipse"): Creates an arc of ellipse.

- ![](/images/Sketcher_CreateArcOfHyperbola.svg) [Arc of hyperbola](/Sketcher_CreateArcOfHyperbola "Sketcher CreateArcOfHyperbola"): Creates an arc of hyperbola.

- ![](/images/Sketcher_CreateArcOfParabola.svg) [Arc of parabola](/Sketcher_CreateArcOfParabola "Sketcher CreateArcOfParabola"): Creates an arc of parabola.

- ![](/images/Sketcher_CreateCircle.svg)![](/images/Toolbar_flyout_arrow_blue_background.svg) Create circle/ellipse:

- ![](/images/Sketcher_CreateCircle.svg) [Circle](/Sketcher_CreateCircle "Sketcher CreateCircle"): 从中心和半径画一个圆。

- ![](/images/Sketcher_Create3PointCircle.svg) [Circle by 3 point](/Sketcher_Create3PointCircle "Sketcher Create3PointCircle") : 从圆周上的三个点画一个圆。

- ![](/images/Sketcher_CreateEllipseByCenter.svg) [Ellipse by center](/Sketcher_CreateEllipseByCenter "Sketcher CreateEllipseByCenter"): Creates an ellipse by its center, an endpoint of one of its axes, and a point along the ellipse. [introduced in 1.0](/Release_notes_1.0 "Release notes 1.0"): Or by both endpoints of one of its axes and a point along the ellipse.

- ![](/images/Sketcher_CreateEllipseBy3Points.svg) [Ellipse by 3 points](/Sketcher_CreateEllipseBy3Points "Sketcher CreateEllipseBy3Points"): Creates an ellipse by the endpoints of one of its axes and a point along the ellipse. [introduced in 1.0](/Release_notes_1.0 "Release notes 1.0"): This is the same tool as [Ellipse by center](/Sketcher_CreateEllipseByCenter "Sketcher CreateEllipseByCenter") but with a different initial mode.

- ![](/images/Sketcher_CreateRectangle.svg)![](/images/Toolbar_flyout_arrow_blue_background.svg) Create rectangle:

- ![](/images/Sketcher_CreateRectangle.png) [Rectangle](/Sketcher_CreateRectangle "Sketcher CreateRectangle"): 从两个相反的点绘制一个矩形。

- ![](/images/Sketcher_CreateRectangle_Center.svg) [Centered rectangle](/Sketcher_CreateRectangle_Center "Sketcher CreateRectangle Center"): Creates a centered rectangle. [introduced in 1.0](/Release_notes_1.0 "Release notes 1.0"): This is the same tool as [Rectangle](/Sketcher_CreateRectangle "Sketcher CreateRectangle") but with a different initial mode.

- ![](/images/Sketcher_CreateOblong.svg) [Rounded rectangle](/Sketcher_CreateOblong "Sketcher CreateOblong"): Creates a rounded rectangle. Idem.

- ![](/images/Sketcher_CreateHexagon.svg)![](/images/Toolbar_flyout_arrow_blue_background.svg) Create regular polygon:

- ![](/images/Sketcher_CreateTriangle.png) [Triangle](/Sketcher_CreateTriangle "Sketcher CreateTriangle"): 在几何圆草图中绘制一个正三角形。

- ![](/images/Sketcher_CreateSquare.png) [Square](/Sketcher_CreateSquare "Sketcher CreateSquare"): 在几何圆草图中绘制一个正方形。

- ![](/images/Sketcher_CreatePentagon.png) [Pentagon](/Sketcher_CreatePentagon "Sketcher CreatePentagon"): 在几何圆草图中绘制一个正五面。

- ![](/images/Sketcher_CreateHexagon.png) [Hexagon](/Sketcher_CreateHexagon "Sketcher CreateHexagon"): 在几何圆草图中绘制一个正六边形。

- ![](/images/Sketcher_CreateHeptagon.png) [Heptagon](/Sketcher_CreateHeptagon "Sketcher CreateHeptagon"): 在几何圆草图中绘制一个正七边形。

- ![](/images/Sketcher_CreateOctagon.png) [Octagon](/Sketcher_CreateOctagon "Sketcher CreateOctagon"): 在几何圆草图中绘制一个正八边形。

- ![](/images/Sketcher_CreateRegularPolygon.svg) [Create Regular Polygon](/Sketcher_CreateRegularPolygon "Sketcher CreateRegularPolygon") : 根据指定的边数与拾取的两个点：中点与一个角点来绘制一个正多边形。

- ![](/images/Sketcher_CreateSlot.svg)![](/images/Toolbar_flyout_arrow_blue_background.svg) Create slot:

- ![](/images/Sketcher_CreateSlot.svg) [Slot](/Sketcher_CreateSlot "Sketcher CreateSlot"): 通过选择一个半圆的中心和另一个半圆的终点绘制椭圆。

- ![](/images/Sketcher_CreateArcSlot.svg) [Arc slot](/Sketcher_CreateArcSlot "Sketcher CreateArcSlot"): Creates an arc slot. [introduced in 1.0](/Release_notes_1.0 "Release notes 1.0")

- ![](/images/Sketcher_CreateBSpline.svg)![](/images/Toolbar_flyout_arrow_blue_background.svg) Create B-spline:

- ![](/images/Sketcher_CreateBSpline.svg) [B-spline by control points](/Sketcher_CreateBSpline "Sketcher CreateBSpline"): Creates a B-spline curve by control points. [introduced in 1.0](/Release_notes_1.0 "Release notes 1.0"): Or by knot points.

- ![](/images/Sketcher_CreatePeriodicBSpline.svg) [Periodic B-spline by control points](/Sketcher_CreatePeriodicBSpline "Sketcher CreatePeriodicBSpline"): Creates a periodic (closed) B-spline curve by control points. [introduced in 1.0](/Release_notes_1.0 "Release notes 1.0"): This is the same tool as [B-spline by control points](/Sketcher_CreateBSpline "Sketcher CreateBSpline") but with a different initial mode.

- ![](/images/Sketcher_CreateBSplineByInterpolation.svg) [B-spline by knots](/Sketcher_CreateBSplineByInterpolation "Sketcher CreateBSplineByInterpolation"): Creates a B-spline curve by knot points. Idem.

- ![](/images/Sketcher_CreatePeriodicBSplineByInterpolation.svg) [Periodic B-spline by knots](/Sketcher_CreatePeriodicBSplineByInterpolation "Sketcher CreatePeriodicBSplineByInterpolation"): Creates a periodic (closed) B-spline curve by knot points. Idem.

- ![](/images/Sketcher_ToggleConstruction.png) [Construction Mode](/Sketcher_ToggleConstruction "Sketcher ToggleConstruction"): 将元素切换 到/从 草图模式。对象草图不会在 3D 几何操作中使用，并且仅在编辑包含它的草图时可见。这是 v0.15 中使用的图标。直到 FreeCAD v0.16，用户必须先在草图编辑器中创建常规（白色）几何对象，然后使用此工具将其更改为“几何草图”（蓝色）。
- ![](/images/Sketcher_ToggleConstruction.png) [Construction Mode](/Sketcher_ToggleConstruction "Sketcher ToggleConstruction"): 在 FreeCAD v0.16 中，添加了在构造模式下直接创建几何的能力，因此图标已更改为该图形。选择现有的草图编辑器几何图形，然后单击此工具可以在常规和构造模式之间切换几何图形，就像以前的 FreeCAD 版本一样。从 FreeCAD v0.16 开始，当没有选择草图编辑器几何图形时，选择此工具会更改将要创建将来的对象的模式（常规与构造）。

### 草图编辑器约束

约束用于定义长度、在草图元素之间设置规则以及沿垂直和水平轴锁定草图。某些约束要求 [辅助约束](/Sketcher_helper_constraint "Sketcher helper constraint")

- ![](/images/Sketcher_Dimension.svg)![](/images/Toolbar_flyout_arrow_blue_background.svg) Dimensional constraints:

- ![](/images/Sketcher_Dimension.svg) [Dimension](/Sketcher_Dimension "Sketcher Dimension"): Is the context-sensitive constraint tool of the Sketcher Workbench. Based on the current selection, it offers appropriate dimensional constraints, but also geometric constraints. [introduced in 1.0](/Release_notes_1.0 "Release notes 1.0")

- ![](/images/Sketcher_ConstrainDistanceX.svg) [Horizontal distance](/Sketcher_ConstrainDistanceX "Sketcher ConstrainDistanceX"): Fixes the horizontal distance between two points or the endpoints of a line. If a single point is pre-selected, the distance is relative to the origin of the sketch.

- ![](/images/Sketcher_ConstrainDistanceY.png) [Vertical Distance](/Sketcher_ConstrainDistanceY "Sketcher ConstrainDistanceY"): 修复两点或线端点之间的水平距离。如果只选择一项, 则将距离设置为原点。

- ![](/images/Sketcher_ConstrainDistance.png) [Distance](/Sketcher_ConstrainDistance "Sketcher ConstrainDistance"): 通过限制选定行的长度来定义其距离, 或通过限制两点之间的距离来定义它们之间的距离。

- ![](/images/Sketcher_ConstrainRadiam.svg) [Auto radius/diameter](/Sketcher_ConstrainRadiam "Sketcher ConstrainRadiam"): Fixes the radius of arcs and B-spline weight circles, and the diameter of circles.

- ![](/images/Sketcher_ConstrainRadius.png) [Radius](/Sketcher_ConstrainRadius "Sketcher ConstrainRadius"): 通过限制半径来定义所选圆弧或圆的半径。
- ![](/images/Constraint_InternalAngle.png) [Internal Angle](/Sketcher_ConstrainAngle "Sketcher ConstrainAngle"): 定义两个选定行之间的内部角度。

- ![](/images/Sketcher_ConstrainDiameter.svg) [Diameter](/Sketcher_ConstrainDiameter "Sketcher ConstrainDiameter"): Fixes the diameter of circles and arcs.

- ![](/images/Sketcher_ConstrainAngle.svg) [Angle](/Sketcher_ConstrainAngle "Sketcher ConstrainAngle"): Fixes the angle between two edges, the angle of a line with the horizontal axis of the sketch, or the aperture angle of a circular arc.

- ![](/images/Sketcher_ConstrainLock.png) [Lock](/Sketcher_ConstrainLock "Sketcher ConstrainLock"): 通过设置相对于原点的垂直和水平距离来约束选定项, 从而锁定该项的位置。这些约束距离可以在以后进行编辑。

- ![](/images/Sketcher_ConstrainCoincidentUnified.svg) [Coincident (unified)](/Sketcher_ConstrainCoincidentUnified "Sketcher ConstrainCoincidentUnified"): Creates a coincident constraint between points, fixes points on edges or axes, or creates a concentric constraint. It combines the [Coincident](/Sketcher_ConstrainCoincident "Sketcher ConstrainCoincident") and [Point on object](/Sketcher_ConstrainPointOnObject "Sketcher ConstrainPointOnObject") tools. [introduced in 1.0](/Release_notes_1.0 "Release notes 1.0")

- ![](/images/Sketcher_ConstrainCoincident.png) [Coincident](/Sketcher_ConstrainCoincident "Sketcher ConstrainCoincident"): 在一个或多个点上(同时)附加一个点。

- ![](/images/Sketcher_ConstrainPointOnObject.png) [Point On Object](/Sketcher_ConstrainPointOnObject "Sketcher ConstrainPointOnObject"): 将点附加到另一对象上, 如直线、圆弧或轴。

- ![](/images/Sketcher_ConstrainHorVer.svg)![](/images/Toolbar_flyout_arrow_blue_background.svg)Horizontal/vertical constraints:

- ![](/images/Sketcher_ConstrainHorVer.svg) [Horizontal/vertical](/Sketcher_ConstrainHorVer "Sketcher ConstrainHorVer"): Constrains lines or pairs of points to be horizontal or vertical, whichever is closest to the current alignment. It combines the [Horizontal](/Sketcher_ConstrainHorizontal "Sketcher ConstrainHorizontal") and [Vertical](/Sketcher_ConstrainVertical "Sketcher ConstrainVertical") tools. [introduced in 1.0](/Release_notes_1.0 "Release notes 1.0")

- ![](/images/Constraint_Horizontal.png) [Horizontal](/Sketcher_ConstrainHorizontal "Sketcher ConstrainHorizontal"): 将所选线条或折线元素约束为真正的水平方向。在应用此约束之前, 可以选择多个对象。

- ![](/images/Constraint_Vertical.png) [Vertical](/Sketcher_ConstrainVertical "Sketcher ConstrainVertical"): 将所选线条或折线元素约束为真正的垂直方向。在应用此约束之前, 可以选择多个对象。

- ![](/images/Sketcher_ConstrainParallel.png) [Parallel](/Sketcher_ConstrainParallel "Sketcher ConstrainParallel"): 约束两条或多行平行于彼此。

- ![](/images/Sketcher_ConstrainPerpendicular.png) [Perpendicular](/Sketcher_ConstrainPerpendicular "Sketcher ConstrainPerpendicular"): 约束两条垂直于彼此的线, 或约束垂直于弧线端点的直线。

- ![](/images/Constraint_Tangent.png) [Tangent](/Sketcher_ConstrainTangent "Sketcher ConstrainTangent"): 在两个所选实体之间创建切线约束, 或在两个线段之间建立共线约束。 直线段不必直接位于圆弧或圆上, 而将其与圆弧或圆相切。

- ![](/images/Sketcher_ConstrainEqual.png) [Equal Length](/Sketcher_ConstrainEqual "Sketcher ConstrainEqual"): 约束两个选定的实体彼此相等。 如果在圆或弧形上使用它们的半径将被设置为相等。

- ![](/images/Sketcher_ConstrainSymmetric.png) [Symmetric](/Sketcher_ConstrainSymmetric "Sketcher ConstrainSymmetric"): 将两个点对称地约束在一条直线上, 或者将前两个点对称地限制在第三个选定点上。

- ![](/images/Sketcher_ConstrainBlock.svg) [Block](/Sketcher_ConstrainBlock "Sketcher ConstrainBlock"): Blocks edges in place with a single constraint. It is mainly intended for B-splines.

- ![](/images/Constraint_SnellsLaw.png) [Snell's Law](/Sketcher_ConstrainSnellsLaw "Sketcher ConstrainSnellsLaw"): 约束两条线服从折射定律来模拟通过界面的光。[introduced in 0.15](/Release_notes_0.15 "Release notes 0.15")

- ![](/images/Sketcher_ToggleDrivingConstraint.svg)![](/images/Toolbar_flyout_arrow_blue_background.svg) Toggle constraints:

- ![](/images/Sketcher_ToggleConstraint.png) [Toggle Constraint](/Sketcher_ToggleDrivingConstraint "Sketcher ToggleDrivingConstraint"): 将工具栏或所选约束切换到/从参照模式。[introduced in 0.16](/Release_notes_0.16 "Release notes 0.16")

- ![](/images/Sketcher_ToggleActiveConstraint.svg) [Activate/deactivate constraint](/Sketcher_ToggleActiveConstraint "Sketcher ToggleActiveConstraint"): Activates or deactivates selected constraints.

### 草图工具

- ![](/images/Sketcher_CreateFillet.svg)![](/images/Toolbar_flyout_arrow_blue_background.svg) Create fillet/chamfer:

- ![](/images/Sketcher_CreateFillet.svg) [Fillet](/Sketcher_CreateFillet "Sketcher CreateFillet"): 在一条线之间加入两条线之间的圆角。选择两行或单击角点，然后激活该工具。

- ![](/images/Sketcher_CreateChamfer.svg) [Chamfer](/Sketcher_CreateChamfer "Sketcher CreateChamfer"): creates a chamfer between two non-parallel edges. This is the same tool as [Fillet](/Sketcher_CreateFillet "Sketcher CreateFillet") but with a different initial mode. [introduced in 1.0](/Release_notes_1.0 "Release notes 1.0")

- ![](/images/Sketcher_Trimming.svg)![](/images/Toolbar_flyout_arrow_blue_background.svg) Edit edge:

- ![](/images/Sketcher_Trimming.png) [Trimming](/Sketcher_Trimming "Sketcher Trimming"): 相对于点击的点修剪线，圆或圆弧。

- ![](/images/Sketcher_Split.svg) [Split](/Sketcher_Split "Sketcher Split"): Splits an edge while transferring most constraints.

- ![](/images/Sketcher_Extend.svg) [Extend](/Sketcher_Extend "Sketcher Extend"): 将一条线或一条弧延长至一条边界线、弧、椭圆形、椭圆形上的弧或空间中的一个点处。 [introduced in 0.17](/Release_notes_0.17 "Release notes 0.17")

- ![](/images/Sketcher_External.png) [External Geometry](/Sketcher_External "Sketcher External"): 创建与外部几何相关联的边。

- ![](/images/Sketcher_Projection.svg)![](/images/Toolbar_flyout_arrow_blue_background.svg) External geometry:

- ![](/images/Sketcher_Projection.svg) [Create external projection geometry](/Sketcher_Projection "Sketcher Projection"): Creates the projection edges of external geometry. [introduced in 1.1](/Release_notes_1.1 "Release notes 1.1")

- ![](/images/Sketcher_Intersection.svg) [Create external intersection geometry](/Sketcher_Intersection "Sketcher Intersection"): Creates the intersection edges of external geometry with the sketch plane. [introduced in 1.1](/Release_notes_1.1 "Release notes 1.1")

- ![](/images/Sketcher_CarbonCopy.svg) [CarbonCopy](/Sketcher_CarbonCopy "Sketcher CarbonCopy"): 复制另一张草图中的几何体图形。 [introduced in 0.17](/Release_notes_0.17 "Release notes 0.17")

- ![](/images/Sketcher_SelectOrigin.png) [Select Origin](/Sketcher_SelectOrigin "Sketcher SelectOrigin"): 选择草图的原点 [introduced in 0.15](/Release_notes_0.15 "Release notes 0.15")

- ![](/images/Sketcher_SelectHorizontalAxis.png) [Select Horizontal Axis](/Sketcher_SelectHorizontalAxis "Sketcher SelectHorizontalAxis"): 选择草图的水平轴 [introduced in 0.15](/Release_notes_0.15 "Release notes 0.15")

- ![](/images/Sketcher_SelectVerticalAxis.png) [Select Vertical Axis](/Sketcher_SelectVerticalAxis "Sketcher SelectVerticalAxis"): 选择草图的垂直轴 [introduced in 0.15](/Release_notes_0.15 "Release notes 0.15")

- ![](/images/Sketcher_Translate.svg) [Array transform](/Sketcher_Translate "Sketcher Translate"): Moves or optionally creates copies of selected elements. [introduced in 1.0](/Release_notes_1.0 "Release notes 1.0")

- ![](/images/Sketcher_Rotate.svg) [Polar transform](/Sketcher_Rotate "Sketcher Rotate"): Rotates or optionally creates rotated copies of selected elements. [introduced in 1.0](/Release_notes_1.0 "Release notes 1.0")

- ![](/images/Sketcher_Scale.svg) [Scale transform](/Sketcher_Scale "Sketcher Scale"): Scales or optionally creates scaled copies of selected elements. [introduced in 1.0](/Release_notes_1.0 "Release notes 1.0")

- ![](/images/Sketcher_Offset.svg) [Offset geometry](/Sketcher_Offset "Sketcher Offset"): Creates equidistant edges around selected edges. [introduced in 1.0](/Release_notes_1.0 "Release notes 1.0")

- ![](/images/Sketcher_Symmetry.svg) [Symmetry](/Sketcher_Symmetry "Sketcher Symmetry"): Creates mirrored copies of selected elements.

- ![](/images/Sketcher_RemoveAxesAlignment.svg) [Remove axes alignment](/Sketcher_RemoveAxesAlignment "Sketcher RemoveAxesAlignment"): Removes the axes alignment of selected edges by replacing [Horizontal](/Sketcher_ConstrainHorizontal "Sketcher ConstrainHorizontal") and [Vertical](/Sketcher_ConstrainVertical "Sketcher ConstrainVertical") constraints with [Parallel](/Sketcher_ConstrainParallel "Sketcher ConstrainParallel") and [Perpendicular](/Sketcher_ConstrainPerpendicular "Sketcher ConstrainPerpendicular") constraints.

- ![](/images/Sketcher_DeleteAllGeometry.svg) [Delete all geometry](/Sketcher_DeleteAllGeometry "Sketcher DeleteAllGeometry"): Deletes all geometry and all constraints from the sketch.

- ![](/images/Sketcher_DeleteAllConstraints.svg) [Delete all constraints](/Sketcher_DeleteAllConstraints "Sketcher DeleteAllConstraints"): Deletes all constraints from the sketch.

- ![](/images/Edit-copy.svg) Copy in Sketcher: See [Copy, cut and paste](#Copy,_cut_and_paste).

- ![](/images/Edit-cut.svg) Cut in Sketcher: See [Copy, cut and paste](#Copy,_cut_and_paste).

- ![](/images/Edit-paste.svg) Paste in Sketcher: See [Copy, cut and paste](#Copy,_cut_and_paste).

### Sketcher B-spline tools

- ![](/images/Sketcher_BSplineConvertToNURBS.svg) [Convert geometry to B-spline](/Sketcher_BSplineConvertToNURBS "Sketcher BSplineConvertToNURBS"): Converts edges to B-splines.

- ![](/images/Sketcher_BSplineIncreaseDegree.svg) [Increase B-spline degree](/Sketcher_BSplineIncreaseDegree "Sketcher BSplineIncreaseDegree"): Increases the degree (order) of B-splines.

- ![](/images/Sketcher_BSplineDecreaseDegree.svg) [Decrease B-spline degree](/Sketcher_BSplineDecreaseDegree "Sketcher BSplineDecreaseDegree"): Decreases the degree (order) of B-splines.

- ![](/images/Sketcher_BSplineIncreaseKnotMultiplicity.svg) [Increase knot multiplicity](/Sketcher_BSplineIncreaseKnotMultiplicity "Sketcher BSplineIncreaseKnotMultiplicity"): Increases the multiplicity of a B-spline knot.

- ![](/images/Sketcher_BSplineDecreaseKnotMultiplicity.svg) [Decrease knot multiplicity](/Sketcher_BSplineDecreaseKnotMultiplicity "Sketcher BSplineDecreaseKnotMultiplicity"): Decreases the multiplicity of a B-spline knot.

- ![](/images/Sketcher_BSplineInsertKnot.svg) [Insert knot](/Sketcher_BSplineInsertKnot "Sketcher BSplineInsertKnot"): Inserts a knot into a B-spline or increases the multiplicity of an existing knot.

- ![](/images/Sketcher_JoinCurves.svg) [Join curves](/Sketcher_JoinCurves "Sketcher JoinCurves"): Creates a B-spline by joining two existing B-splines or other edges. [introduced in 0.21](/Release_notes_0.21 "Release notes 0.21")

### Sketcher visual

- ![](/images/Sketcher_SelectElementsWithDoFs.svg) [Select unconstrained DoF](/Sketcher_SelectElementsWithDoFs "Sketcher SelectElementsWithDoFs"): Selects the not fully constrained elements in the sketch.

- ![](/images/Sketcher_SelectConstraints.png) [Select Constraints](/Sketcher_SelectConstraints "Sketcher SelectConstraints"): 选择草图编辑器元素的约束 [introduced in 0.15](/Release_notes_0.15 "Release notes 0.15")

- ![](/images/Sketcher_SelectElementsAssociatedWithConstraints.png) [Select Elements Associated with constraints](/Sketcher_SelectElementsAssociatedWithConstraints "Sketcher SelectElementsAssociatedWithConstraints"): 选择与约束关联的草图编辑器元素 [introduced in 0.15](/Release_notes_0.15 "Release notes 0.15")

- ![](/images/Sketcher_SelectRedundantConstraints.png) [Select Redundant Constraints](/Sketcher_SelectRedundantConstraints "Sketcher SelectRedundantConstraints"): 选择草图的冗余约束 [introduced in 0.15](/Release_notes_0.15 "Release notes 0.15")

- ![](/images/Sketcher_SelectConflictingConstraints.png) [Select Conflicting Constraints](/Sketcher_SelectConflictingConstraints "Sketcher SelectConflictingConstraints"): 选择草图的冲突约束 [introduced in 0.15](/Release_notes_0.15 "Release notes 0.15")

- ![](/images/Sketcher_ArcOverlay.svg) [Show/hide circular helper for arcs](/Sketcher_ArcOverlay "Sketcher ArcOverlay"): Shows or hides the circular helpers (underlying virtual circles) for arcs in all sketches. [introduced in 1.0](/Release_notes_1.0 "Release notes 1.0")

- ![](/images/Sketcher_BSplinePolygon.svg)![](/images/Toolbar_flyout_arrow_blue_background.svg) Show/hide B-spline information layer:

- ![](/images/Sketcher_BSplineDegree.svg) [Show/hide B-spline degree](/Sketcher_BSplineDegree "Sketcher BSplineDegree"): Shows or hides the B-spline degree in all sketches.

- ![](/images/Sketcher_BSplinePolygon.svg) [Show/hide B-spline control polygon](/Sketcher_BSplinePolygon "Sketcher BSplinePolygon"): Shows or hides the B-spline control polygon in all sketches.

- ![](/images/Sketcher_BSplineComb.svg) [Show/hide B-spline curvature comb](/Sketcher_BSplineComb "Sketcher BSplineComb"): Shows or hides the B-spline curvature comb in all sketches.

- ![](/images/Sketcher_BSplineKnotMultiplicity.svg) [Show/hide B-spline knot multiplicity](/Sketcher_BSplineKnotMultiplicity "Sketcher BSplineKnotMultiplicity"): Shows or hides the B-spline knot multiplicity in all sketches.

- ![](/images/Sketcher_BSplinePoleWeight.svg) [Show/hide B-spline control point weight](/Sketcher_BSplinePoleWeight "Sketcher BSplinePoleWeight"): Shows or hides the B-spline control point weight in all sketches.

- ![](/images/Sketcher_RestoreInternalAlignmentGeometry.svg) [Show/hide internal geometry](/Sketcher_RestoreInternalAlignmentGeometry "Sketcher RestoreInternalAlignmentGeometry"): Deletes the internal geometry of elements, or recreates missing internal geometry.

- ![](/images/Sketcher_SwitchVirtualSpace.svg) [Switch virtual space](/Sketcher_SwitchVirtualSpace "Sketcher SwitchVirtualSpace"): (un)hides constraints or switches the visible virtual space.

### Obsolete tools

- ![](/images/Sketcher_Clone.svg) [Clone](/Sketcher_Clone "Sketcher Clone"): Clones a Sketcher element. Not available in 1.0 and above.

- ![](/images/Sketcher_CloseShape.png) [Close Shape](/Sketcher_CloseShape "Sketcher CloseShape"): 通过对端点应用重合约束创建闭合形状 [introduced in 0.15](/Release_notes_0.15 "Release notes 0.15")

- ![](/images/Sketcher_CreatePointFillet.svg) [Corner-preserving fillet](/Sketcher_CreatePointFillet "Sketcher CreatePointFillet"): Creates a fillet between two non-parallel lines while preserving their corner point. Not available in 1.0 and above.

- ![](/images/Sketcher_ConnectLines.png) [Connect Edges](/Sketcher_ConnectLines "Sketcher ConnectLines"): 通过对端点应用重合约束来连接草图编辑器器元素 [introduced in 0.15](/Release_notes_0.15 "Release notes 0.15")

- ![](/images/Sketcher_Copy.svg) [Copy](/Sketcher_Copy "Sketcher Copy"): Copies a Sketcher element. Not available in 1.0 and above.

- ![](/images/Sketcher_Move.svg) [Move](/Sketcher_Move "Sketcher Move"): Moves the selected geometry taking as reference the last selected point. Not available in 1.0 and above.

- ![](/images/Sketcher_RectangularArray.svg) [Rectangular array](/Sketcher_RectangularArray "Sketcher RectangularArray"): Creates an array of selected Sketcher elements. Not available in 1.0 and above.

## Preferences

- ![](/images/Workbench_Sketcher.svg) [Preferences](/Sketcher_Preferences "Sketcher Preferences"): Preferences for the Sketcher Workbench.

## Best practices

## 最佳做法

每个 CAD 用户随着时间的推移发展自己的工作方式，但跟随一些有用的一般原则。

- 一系列简单的草图比单个复杂的草图更容易管理。例如，可以为基础 3D 特征（衬垫或旋转）创建第一个草图，而第二个可以包含孔或切口（凹坑）。一些细节可以省略，稍后将作为 3D 功能实现。如果太多，你可以选择避免草图中的圆角，并将其添加为 3D 功能。
- 始终创建一个封闭的配置文件，或者你的草图不会产生实体，而是一组开放的面。如果你不希望将某些对象包含在实体创建中，请使用“构造模式”工具将其转换为构造元素。
- 使用自动约束特性来限制你必须手动添加的约束数量。
- 作为一般规则，首先应用几何约束，然后应用尺寸约束，并最后锁定草图。但请记住：规则被破坏。如果你在操作草图时遇到问题，在完成配置文件之前先限制几个对象可能很有用。
- 如果可能，将草图中心定位到具有锁定约束的原点（0,0）。如果你的草图不对称，请将其中一个点定位到原点，或者为锁定距离选择好的圆角参数。在 v0.12 中，外部约束（将草图约束到现有 3D 几何像边缘或其他草图）未实现。这意味着要将以下草图定位到你的第一个草图中，你需要手动设置相对于你的第一个草图的距离。一个基于原点的（25,75）的锁定约束比（23.47,73.02）更容易记住。
- 如果你有可能在长度约束和水平或垂直距离约束之间进行选择，则选择后者。水平和垂直距离约束在计算上更便宜。
- 一般来说，最好使用的约束是：水平和垂直约束;水平和垂直长度约束;点对点相切。如果可能，限制使用这些：一般长度约束;边缘到边缘相切;固定点到线约束;对称约束

### 教程

- [Sketcher Lecture](https://forum.freecadweb.org/viewtopic.php?f=36&t=30104) by chrisb. This is a more than 80 page PDF document that serves as a detailed manual for the Sketcher. It explains the basics of Sketcher usage, and goes into a lot of detail about the creation of geometrical shapes, and each of the constraints.
- [Basic Sketcher Tutorial](/Basic_Sketcher_Tutorial "Basic Sketcher Tutorial") for beginners
- [Sketcher Micro Tutorial - Constraint Practices](/Sketcher_Micro_Tutorial_-_Constraint_Practices "Sketcher Micro Tutorial - Constraint Practices")
- [Sketcher requirement for a sketch](/Sketcher_requirement_for_a_sketch "Sketcher requirement for a sketch") Minimum requirement for a sketch and Complete determination of a sketch

## Scripting

The [Sketcher scripting](/Sketcher_scripting "Sketcher scripting") page contains examples on how to create constraints from Python scripts.

## Examples

For some ideas of what can be achieved with Sketcher tools, have a look at: [Sketcher examples](/Sketcher_Examples "Sketcher Examples").

![](/images/Sketcher_ExampleHinge-01.gif)
![](/images/Sketcher_ExampleHinge-15.png)

Retrieved from "<http://wiki.freecad.org/index.php?title=Sketcher_Workbench/zh-cn&oldid=1537986>"
