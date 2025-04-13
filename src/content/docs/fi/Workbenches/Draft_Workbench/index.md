---
title: Draft Workbench
---

![](/images/Workbench_Draft.svg)

Draft workbench icon

## Introduction

The ![](/images/Workbench_Draft.svg) **Draft Workbench** is primarily focused on the creation and modification of 2D objects in FreeCAD. But it is not restricted to the XY plane of the global coordinate system. Its objects can have any orientation and position in 3D space, and some Draft objects can either be planar or non-planar.

Draft objects can be used for general drafting, similar to what can be done with Inkscape or AutoCAD. But they can also form the base for the creation of 3D objects in other workbenches. A [Draft Wire](/Draft_Wire "Draft Wire") may define the path of an [Arch Wall](/Arch_Wall "Arch Wall"), a [Draft Polygon](/Draft_Polygon "Draft Polygon") can be extruded with [Part Extrude](/Part_Extrude "Part Extrude"), etc. Many of the [Draft modifier tools](#Modification) can be applied to 2D and 3D objects created with other workbenches as well. You can, for example, [move](/Draft_Move "Draft Move") a [Sketch](/Sketcher_Workbench "Sketcher Workbench") or create a [Draft OrthoArray](/Draft_OrthoArray "Draft OrthoArray") from a [Part](/Part_Workbench "Part Workbench") object.

The Draft Workbench also provides tools to define a [working plane](/Draft_SelectPlane "Draft SelectPlane"), a [grid](/Draft_Snap_Grid "Draft Snap Grid"), and a [snapping system](/Draft_Snap "Draft Snap") to precisely control the position of geometry.

If your primary goal is the production of complex 2D drawings and [DXF](/DXF "DXF") files, and you don't need 3D modelling, FreeCAD may not be the right choice for you. You may wish to consider a dedicated software program for technical drafting instead, such as [LibreCAD](https://en.wikipedia.org/wiki/LibreCAD) or [QCad](https://en.wikipedia.org/wiki/QCad).

![](/images/Draft_Workbench_Example.png)

The image shows the [grid](/Draft_Snap_Grid "Draft Snap Grid") aligned with the XY plane.  
On the left, in white, several planar objects.  
On the right a non-planar [Draft Wire](/Draft_Wire "Draft Wire") used as the Path Object of a [Draft PathArray](/Draft_PathArray "Draft PathArray").

## Drafting

- ![](/images/Draft_Line.svg) [Line](/Draft_Line "Draft Line"): creates a straight line.

- ![](/images/Draft_Wire.svg) [Polyline](/Draft_Wire "Draft Wire"): creates a polyline (also called wire), a sequence of several connected line segments.

- ![](/images/Draft_Fillet.svg) [Fillet](/Draft_Fillet "Draft Fillet"): creates a fillet, a rounded corner, or a chamfer, a straight edge, between two [Draft Lines](/Draft_Line "Draft Line").

- ![](/images/Draft_Arc.svg)![](/images/Toolbar_flyout_arrow_blue_background.svg) Arc tools:

- ![](/images/Draft_Arc.svg) [Arc](/Draft_Arc "Draft Arc"): creates a circular arc from a center, a radius, a start angle and an aperture angle.

- ![](/images/Draft_Arc_3Points.svg) [Arc by 3 points](/Draft_Arc_3Points "Draft Arc 3Points"): creates a circular arc from three points that define its circumference.

- ![](/images/Draft_Circle.svg) [Circle](/Draft_Circle "Draft Circle"): creates a circle from a center and a radius.

- ![](/images/Draft_Ellipse.svg) [Ellipse](/Draft_Ellipse "Draft Ellipse"): creates an ellipse from two points defining a rectangle in which the ellipse will fit.

- ![](/images/Draft_Rectangle.svg) [Rectangle](/Draft_Rectangle "Draft Rectangle"): creates a rectangle from two points.

- ![](/images/Draft_Polygon.svg) [Polygon](/Draft_Polygon "Draft Polygon"): creates a regular polygon from a center and a radius.

- ![](/images/Draft_BSpline.svg) [B-spline](/Draft_BSpline "Draft BSpline"): creates a B-spline curve from several points.

- ![](/images/Draft_CubicBezCurve.svg)![](/images/Toolbar_flyout_arrow_blue_background.svg) Bézier tools:

- ![](/images/Draft_CubicBezCurve.svg) [Cubic Bézier curve](/Draft_CubicBezCurve "Draft CubicBezCurve"): creates a Bézier curve of the third degree.

- ![](/images/Draft_BezCurve.svg) [Bézier curve](/Draft_BezCurve "Draft BezCurve"): creates a Bézier curve from several points.

- ![](/images/Draft_Point.svg) [Point](/Draft_Point "Draft Point"): creates a simple point.

- ![](/images/Draft_Facebinder.svg) [Facebinder](/Draft_Facebinder "Draft Facebinder"): creates a surface object from selected faces.

- ![](/images/Draft_ShapeString.svg) [Shape from text](/Draft_ShapeString "Draft ShapeString"): creates a compound shape that represents a text string.

- ![](/images/Draft_Hatch.svg) [Hatch](/Draft_Hatch "Draft Hatch"): creates hatches on the planar faces of a selected object.

## Annotation

- ![](/images/Draft_Text.svg) [Text](/Draft_Text "Draft Text"): creates a multi-line text at a given point.

- ![](/images/Draft_Dimension.svg) [Dimension](/Draft_Dimension "Draft Dimension"): creates a linear dimension, a radial dimension or an angular dimension.

- ![](/images/Draft_Label.svg) [Label](/Draft_Label "Draft Label"): creates a multi-line text with a 2-segment leader line and an arrow.

- ![](/images/Draft_AnnotationStyleEditor.svg) [Annotation styles...](/Draft_AnnotationStyleEditor "Draft AnnotationStyleEditor"): allows you to define styles that affect the visual properties of annotation-like objects.

## Modification

- ![](/images/Draft_Move.svg) [Move](/Draft_Move "Draft Move"): moves or copies selected objects from one point to another.

- ![](/images/Draft_Rotate.svg) [Rotate](/Draft_Rotate "Draft Rotate"): rotates or copies selected objects around a center point by a given angle.

- ![](/images/Draft_Scale.svg) [Scale](/Draft_Scale "Draft Scale"): scales or copies selected objects around a base point.

- ![](/images/Draft_Mirror.svg) [Mirror](/Draft_Mirror "Draft Mirror"): creates mirrored copies from selected objects.

- ![](/images/Draft_Offset.svg) [Offset](/Draft_Offset "Draft Offset"): offsets each segment of a selected object over a given distance, or creates an offset copy of the selected object.

- ![](/images/Draft_Trimex.svg) [Trimex](/Draft_Trimex "Draft Trimex"): trims or extends a selected object.

- ![](/images/Draft_Stretch.svg) [Stretch](/Draft_Stretch "Draft Stretch"): stretches objects by moving selected points.

- ![](/images/Draft_Clone.svg) [Clone](/Draft_Clone "Draft Clone"): creates linked copies, clones, of selected objects.

- ![](/images/Draft_OrthoArray.svg)![](/images/Toolbar_flyout_arrow_blue_background.svg) Array tools:

- ![](/images/Draft_OrthoArray.svg) [Array](/Draft_OrthoArray "Draft OrthoArray"): creates an orthogonal array from a selected object. It can optionally create a [Link](/App_Link "App Link") array.

- ![](/images/Draft_PolarArray.svg) [Polar array](/Draft_PolarArray "Draft PolarArray"): creates an array from a selected object by placing copies along a circumference. It can optionally create a [Link](/App_Link "App Link") array.

- ![](/images/Draft_CircularArray.svg) [Circular array](/Draft_CircularArray "Draft CircularArray"): creates an array from a selected object by placing copies along concentric circumferences. It can optionally create a [Link](/App_Link "App Link") array.

- ![](/images/Draft_PathArray.svg) [Path array](/Draft_PathArray "Draft PathArray"): creates an array from a selected object by placing copies along a path.

- ![](/images/Draft_PathLinkArray.svg) [Path link array](/Draft_PathLinkArray "Draft PathLinkArray"): idem, but create a [Link](/App_Link "App Link") array instead of a regular array.

- ![](/images/Draft_PointArray.svg) [Point array](/Draft_PointArray "Draft PointArray"): creates an array from a selected object by placing copies at the points from a point compound.

- ![](/images/Draft_PointLinkArray.svg) [Point link array](/Draft_PointLinkArray "Draft PointLinkArray"): idem, but create a [Link](/App_Link "App Link") array instead of a regular array.

- ![](/images/Draft_Edit.svg) [Edit](/Draft_Edit "Draft Edit"): puts selected objects in Draft Edit mode. In this mode the properties of objects can be edited graphically.

- ![](/images/Draft_SubelementHighlight.svg) [Subelement highlight](/Draft_SubelementHighlight "Draft SubelementHighlight"): temporarily highlights selected objects, or the base objects of selected objects.

- ![](/images/Draft_Join.svg) [Join](/Draft_Join "Draft Join"): joins [Draft Lines](/Draft_Line "Draft Line") and [Draft Wires](/Draft_Wire "Draft Wire") into a single wire.

- ![](/images/Draft_Split.svg) [Split](/Draft_Split "Draft Split"): splits a [Draft Line](/Draft_Line "Draft Line") or [Draft Wire](/Draft_Wire "Draft Wire") at a specified point or edge.

- ![](/images/Draft_Upgrade.svg) [Upgrade](/Draft_Upgrade "Draft Upgrade"): upgrades selected objects.

- ![](/images/Draft_Downgrade.svg) [Downgrade](/Draft_Downgrade "Draft Downgrade"): downgrades selected objects.

- ![](/images/Draft_WireToBSpline.svg) [Wire to B-spline](/Draft_WireToBSpline "Draft WireToBSpline"): converts [Draft Wires](/Draft_Wire "Draft Wire") to [Draft BSplines](/Draft_BSpline "Draft BSpline") and vice versa.

- ![](/images/Draft_Draft2Sketch.svg) [Draft to sketch](/Draft_Draft2Sketch "Draft Draft2Sketch"): converts Draft objects to [Sketcher Sketches](/Sketcher_NewSketch "Sketcher NewSketch") and vice versa.

- ![](/images/Draft_Slope.svg) [Set slope](/Draft_Slope "Draft Slope"): slopes selected [Draft Lines](/Draft_Line "Draft Line") or [Draft Wires](/Draft_Wire "Draft Wire") by increasing, or decreasing, the Z coordinate of all points after the first one.

- ![](/images/Draft_FlipDimension.svg) [Flip dimension](/Draft_FlipDimension "Draft FlipDimension"): rotates the dimension text of selected [Draft Dimensions](/Draft_Dimension "Draft Dimension") 180° around the dimension line.

- ![](/images/Draft_Shape2DView.svg) [Shape 2D view](/Draft_Shape2DView "Draft Shape2DView"): creates 2D projections from selected objects.

## Draft Tray

The [Draft Tray](/Draft_Tray "Draft Tray") allows selecting the working plane, defining style settings, toggling construction mode, and specifying the active layer or group.

![](/images/Draft_tray_default.png)

- ![](/images/Draft_tray_button_plane.png) [Select plane](/Draft_SelectPlane "Draft SelectPlane"): defines the current Draft working plane. Also available in the menu: **Draft → Utilities → ![](/images/Draft_SelectPlane.svg) Select Plane**.

- ![](/images/Draft_tray_button_style.png) [Set style](/Draft_SetStyle "Draft SetStyle"): sets the default style for new objects. Also available in the menu: **Draft → Utilities → ![](/images/Draft_SetStyle.svg) Set style**.

- ![](/images/Draft_tray_button_construction.png) [Toggle construction mode](/Draft_ToggleConstructionMode "Draft ToggleConstructionMode"): switches Draft construction mode on or off. Also available in the menu: **Draft → Utilities → ![](/images/Draft_ToggleConstructionMode.svg) Toggle construction mode**.

- ![](/images/Draft_tray_button_layer.png) [AutoGroup](/Draft_AutoGroup "Draft AutoGroup"): changes the active [Draft Layer](/Draft_Layer "Draft Layer") or, optionally, the active [Std Group](/Std_Group "Std Group") or group-like [BIM](/BIM_Workbench "BIM Workbench") object.

## Draft annotation scale widget

With the [Draft annotation scale widget](/Draft_annotation_scale_widget "Draft annotation scale widget") the Draft annotation scale can be specified.

![](/images/Draft_annotation_scale_widget_button.png)

## Draft snap widget

The [Draft snap widget](/Draft_snap_widget "Draft snap widget") can be used as an alternative for the [Draft snap toolbar](#Draft_snap_toolbar).

![](/images/Draft_snap_widget_button.png)

## Draft snap toolbar

The Draft snap toolbar allows selecting the active snap options. The buttons belonging to active options stay depressed. For general information about snapping see: [Draft Snap](/Draft_Snap "Draft Snap").

- ![](/images/Draft_Snap_Lock.svg) [Snap lock](/Draft_Snap_Lock "Draft Snap Lock"): enables or disables snapping globally.

- ![](/images/Draft_Snap_Endpoint.svg) [Snap endpoint](/Draft_Snap_Endpoint "Draft Snap Endpoint"): snaps to the endpoints of edges.

- ![](/images/Draft_Snap_Midpoint.svg) [Snap midpoint](/Draft_Snap_Midpoint "Draft Snap Midpoint"): snaps to the midpoint of edges.

- ![](/images/Draft_Snap_Center.svg) [Snap center](/Draft_Snap_Center "Draft Snap Center"): snaps to the center point of faces and circular edges, and to the Data**Placement** point of [Draft WorkingPlaneProxies](/Draft_WorkingPlaneProxy "Draft WorkingPlaneProxy") and [Arch BuildingParts](/Arch_BuildingPart "Arch BuildingPart").

- ![](/images/Draft_Snap_Angle.svg) [Snap angle](/Draft_Snap_Angle "Draft Snap Angle"): snaps to the special cardinal points on circular edges, at multiples of 30° and 45°.

- ![](/images/Draft_Snap_Intersection.svg) [Snap intersection](/Draft_Snap_Intersection "Draft Snap Intersection"): snaps to the intersection of two edges.

- ![](/images/Draft_Snap_Perpendicular.svg) [Snap perpendicular](/Draft_Snap_Perpendicular "Draft Snap Perpendicular"): snaps to the perpendicular points on faces ([introduced in 0.21](/Release_notes_0.21 "Release notes 0.21")) and edges.

- ![](/images/Draft_Snap_Extension.svg) [Snap extension](/Draft_Snap_Extension "Draft Snap Extension"): snaps to an imaginary line that extends beyond the endpoints of straight edges.

- ![](/images/Draft_Snap_Parallel.svg) [Snap parallel](/Draft_Snap_Parallel "Draft Snap Parallel"): snaps to an imaginary line parallel to straight edges.

- ![](/images/Draft_Snap_Special.svg) [Snap special](/Draft_Snap_Special "Draft Snap Special"): snaps to special points defined by the object.

- ![](/images/Draft_Snap_Near.svg) [Snap near](/Draft_Snap_Near "Draft Snap Near"): snaps to the nearest point on faces and edges.

- ![](/images/Draft_Snap_Ortho.svg) [Snap ortho](/Draft_Snap_Ortho "Draft Snap Ortho"): snaps to imaginary lines that cross the previous point at multiples of 45°.

- ![](/images/Draft_Snap_Grid.svg) [Snap grid](/Draft_Snap_Grid "Draft Snap Grid"): snaps to the intersections of grid lines.

- ![](/images/Draft_Snap_WorkingPlane.svg) [Snap working plane](/Draft_Snap_WorkingPlane "Draft Snap WorkingPlane"): projects snap points onto the current [working plane](/Draft_SelectPlane "Draft SelectPlane").

- ![](/images/Draft_Snap_Dimensions.svg) [Snap dimensions](/Draft_Snap_Dimensions "Draft Snap Dimensions"): shows temporary X and Y dimensions.

- ![](/images/Draft_ToggleGrid.svg) [Toggle grid](/Draft_ToggleGrid "Draft ToggleGrid"): changes the visibility of the grid.

## Draft utility tools toolbar

- ![](/images/Draft_LayerManager.svg) [Manage layers...](/Draft_LayerManager "Draft LayerManager"): allows to manage the layers in a document. [introduced in 0.21](/Release_notes_0.21 "Release notes 0.21")

- ![](/images/Draft_AddNamedGroup.svg) [New named group](/Draft_AddNamedGroup "Draft AddNamedGroup"): creates a named [Std Group](/Std_Group "Std Group") and adds objects to that group.

- ![](/images/Draft_SelectGroup.svg) [Select group](/Draft_SelectGroup "Draft SelectGroup"): selects the contents of [Std Groups](/Std_Group "Std Group") or group-like [BIM](/BIM_Workbench "BIM Workbench") objects.

- ![](/images/Draft_AddToLayer.svg) [Add to layer...](/Draft_AddToLayer "Draft AddToLayer"): adds objects to a layer, or removes them from any layer. [introduced in 1.1](/Release_notes_1.1 "Release notes 1.1")

- ![](/images/Draft_AddToGroup.svg) [Add to group...](/Draft_AddToGroup "Draft AddToGroup"): adds objects to a [Std Group](/Std_Group "Std Group"). It can also ungroup objects.

- ![](/images/Draft_AddConstruction.svg) [Add to construction group](/Draft_AddConstruction "Draft AddConstruction"): adds objects to the [Draft construction group](/Draft_ToggleConstructionMode "Draft ToggleConstructionMode").

- ![](/images/Draft_ToggleDisplayMode.svg) [Toggle normal/wireframe display](/Draft_ToggleDisplayMode "Draft ToggleDisplayMode"): switches the View**Display Mode** property of selected objects between `Flat Lines` and `Wireframe`.

- ![](/images/Draft_WorkingPlaneProxy.svg) [Create working plane proxy](/Draft_WorkingPlaneProxy "Draft WorkingPlaneProxy"): creates a working plane proxy to save the current [Draft working plane](/Draft_SelectPlane "Draft SelectPlane").

## Additional tools

The **Draft → Utilities** menu contains several tools. Most of them can also be accessed from toolbars or the [Draft Tray](/Draft_Tray "Draft Tray") and have already been mentioned above. For the following tools this is not the case:

- ![](/images/Draft_ApplyStyle.svg) [Apply current style](/Draft_ApplyStyle "Draft ApplyStyle"): applies the current style settings to selected objects.

- ![](/images/Draft_Layer.svg) [New layer](/Draft_Layer "Draft Layer"): creates a [Draft Layer](/Draft_Layer "Draft Layer").

- ![](/images/Draft_Heal.svg) [Heal](/Draft_Heal "Draft Heal"): heals problematic Draft objects found in very old files.

- ![](/images/Draft_ShowSnapBar.svg) [Show snap toolbar](/Draft_ShowSnapBar "Draft ShowSnapBar"): shows the [Draft snap toolbar](#Draft_snap_toolbar).

## Additional features

- [Working plane](/Draft_SelectPlane "Draft SelectPlane"): the plane in the [3D view](/3D_view "3D view") where new Draft objects are created.
- [Snapping](/Draft_Snap "Draft Snap"): select exact geometric points on, or defined by, existing objects or the grid.
- [Constraining](/Draft_Constrain "Draft Constrain"): for each subsequent point you can constrain the movement of the cursor to the X, Y, or Z direction.
- [Construction mode](/Draft_ToggleConstructionMode "Draft ToggleConstructionMode"): places new Draft objects in a dedicated group making it easier to hide or delete them.
- [Pattern](/Draft_Pattern "Draft Pattern"): Draft objects with a Data**Make Face** property can display an SVG pattern instead of a solid face color.

## Tree view context menu

The following additional options are available in the [Tree view](/Tree_view "Tree view") context menu:

### Default options

For most Draft objects the following option is available:

- Edit: edits the object. Depending on the object type either [Draft Edit](/Draft_Edit "Draft Edit") or a dedicated edit solution is used. [introduced in 0.21](/Release_notes_0.21 "Release notes 0.21")

If there is an active document the context menu contains an additional sub-menu:

- Utilities: a subset of the tools available in the main Draft Utilities menu.

### Layer container options

For a [Draft LayerContainer](/Draft_Layer "Draft Layer") these additional options are available:

- ![](/images/Draft_Layer.svg) [Merge layer duplicates](/Draft_Layer#Layer_container_options "Draft Layer"): merges all layers with the same base label.

- ![](/images/Draft_NewLayer.svg) [Add new layer](/Draft_Layer#Layer_container_options "Draft Layer"): adds a new layer to the current document.

### Layer options

For a [Draft Layer](/Draft_Layer "Draft Layer") these additional options are available:

- ![](/images/Button_right.svg) [Activate this layer](/Draft_AutoGroup "Draft AutoGroup"): activates the selected layer.

- ![](/images/Draft_SelectGroup.svg) [Select layer contents](/Draft_SelectGroup "Draft SelectGroup"): selects the objects inside the selected layer.

### Text options

For a [Draft Text](/Draft_Text "Draft Text") and a [Draft Label](/Draft_Label "Draft Label") that contains one or more hyperlinks, to a local or remote file or an URL, this additional option is available:

- Open hyperlinks: the hyperlinks are opened in the appropriate application (as defined by the OS). There is a warning in the case of multiple hyperlinks. [introduced in 1.0](/Release_notes_1.0 "Release notes 1.0")

### Wire options

For a [Draft Line](/Draft_Line "Draft Line") and a [Draft Wire](/Draft_Wire "Draft Wire") this additional option is available:

- ![](/images/Draft_Edit.svg) Flatten: flattens the wire on the current [Draft working plane](/Draft_SelectPlane "Draft SelectPlane"). This option does not work properly in 0.19 and below.

### Working plane proxy options

For a [Draft WorkingPlaneProxy](/Draft_WorkingPlaneProxy "Draft WorkingPlaneProxy") these additional options are available:

- ![](/images/Draft_SelectPlane.svg) [Write camera position](/Draft_WorkingPlaneProxy#Context_menu "Draft WorkingPlaneProxy"): updates the View**View Data** property of the working plane proxy with the current [3D view](/3D_view "3D view") camera settings.

- ![](/images/Draft_SelectPlane.svg) [Write objects state](/Draft_WorkingPlaneProxy#Context_menu "Draft WorkingPlaneProxy"): updates the View**Visibility Map** property of the working plane proxy with the current visibility state of objects in the document.

## 3D view context menu

The following additional options are available in the [3D view](/3D_view "3D view") context menu:

### Default options

If there is an active document the context menu contains one additional sub-menu:

- Utilities: a subset of the tools available in the main Draft Utilities menu.

### Text options

See [above](#Text_options).

## Obsolete tools

- ![](/images/Draft_Array.svg) [Array](/Draft_Array "Draft Array"): creates an orthogonal array from a selected object. The created array can be turned into a [polar array](/Draft_PolarArray "Draft PolarArray") or a [circular array](/Draft_CircularArray "Draft CircularArray") by changing its Data**Array Type** property. Not available in 0.21 and above.

- ![](/images/Draft_Drawing.svg) [Drawing](/Draft_Drawing "Draft Drawing"): inserts views of selected objects into a [drawing](/Drawing_Workbench "Drawing Workbench") page. Not available in 0.21 and above.

- ![](/images/Draft_ToggleContinueMode.svg) [Toggle continue mode](/Draft_ToggleContinueMode "Draft ToggleContinueMode"): switches continue mode on or off. Not available in 1.0 and above.

## Preferences

- ![](/images/Preferences-draft.svg) [Preferences](/Draft_Preferences "Draft Preferences"): general preferences for the Draft Workbench.

- ![](/images/Preferences-import-export.svg) [Import Export Preferences](/Import_Export_Preferences "Import Export Preferences"): preferences available for importing from and exporting to different file formats.

## File formats

The Draft Workbench provides FreeCAD with importers and exporters for several file formats. These are used by the [Std Import](/Std_Import "Std Import") and [Std Export](/Std_Export "Std Export") commands.

- [Autodesk .DXF](/Draft_DXF "Draft DXF"): imports and exports [Drawing Exchange Format](http://en.wikipedia.org/wiki/AutoCAD_DXF) files. See also [FreeCAD and DXF Import](/FreeCAD_and_DXF_Import "FreeCAD and DXF Import").
- [Autodesk .DWG](/Draft_DXF "Draft DXF"): imports and exports DWG files via an external DWG converter. See also [FreeCAD and DWG Import](/FreeCAD_and_DWG_Import "FreeCAD and DWG Import").
- [Scalable Vector Graphics .SVG](/Draft_SVG "Draft SVG"): imports and exports [Scalable Vector Graphics](http://en.wikipedia.org/wiki/Scalable_Vector_Graphics) files.
- [Open Cad format .OCA](/Draft_OCA "Draft OCA"): imports and exports [OCA/GCAD](http://groups.google.com/group/open_cad_format) files.
- [Airfoil Data Format .DAT](/Draft_DAT "Draft DAT"): imports DAT files describing Airfoil profiles.

## Unit tests

See also: [Test Workbench](/Testing "Testing").

To run the unit tests of the workbench execute the following from the operating system terminal:

```
freecad -t TestDraft

```

## Scripting

See also: [Autogenerated API documentation](https://freecad.github.io/SourceDoc/) and [FreeCAD Scripting Basics](/FreeCAD_Scripting_Basics "FreeCAD Scripting Basics").

The workbench includes a module to create samples of all objects in a new document.

Use this to test that all objects are produced correctly:

```
import drafttests.draft_test_objects as dto
doc = dto.create_test_file()

```

Inspecting the code of this module can help to understand the programming interface.

## Tutorials

- [Draft tutorial](/Draft_tutorial "Draft tutorial")
- [Draft ShapeString tutorial](/Draft_ShapeString_tutorial "Draft ShapeString tutorial")

Retrieved from "<http://wiki.freecad.org/index.php?title=Draft_Workbench/fi&oldid=1547520>"
