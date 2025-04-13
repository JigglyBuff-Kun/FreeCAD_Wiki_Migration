---
title: BIM radni stol
---

:::caution
In v1.0 the BIM, Native-IFC andArchWorkbenches have been merged into the integrated BIM Workbench.This page has been updated for that version.
:::
![](/images/Workbench_BIM.svg)

BIM Workbench icon

## Predstavljanje

The ![](/images/Workbench_BIM.svg) [BIM Workbench](/BIM_Workbench "BIM Workbench") provides a modern [Building Information Modelling](https://en.wikipedia.org/wiki/Building_information_modeling) workflow in FreeCAD, with fully parametric objects such as walls, beams, roofs, windows, stairs, pipes, and furniture. It supports [Industry Foundation Classes](/Arch_IFC "Arch IFC") (IFC) files, and the production of 2D plans in combination with the ![](/images/Workbench_TechDraw.svg) [TechDraw Workbench](/TechDraw_Workbench "TechDraw Workbench").

The BIM Workbench imports tools from the ![](/images/Workbench_Draft.svg) [Draft Workbench](/Draft_Workbench "Draft Workbench"), as it uses its 2D objects to build 3D parametric objects. But it can also use solid shapes created with other workbenches like ![](/images/Workbench_Part.svg) [Part](/Part_Workbench "Part Workbench") and ![](/images/Workbench_PartDesign.svg) [PartDesign](/PartDesign_Workbench "PartDesign Workbench").

See [FreeCAD BIM migration guide](https://yorik.uncreated.net/blog/2020-010-freecad-bim-guide) for a quick overview if you are already a user of another BIM application.

The developers of Draft and BIM also collaborate with the greater [OSArch community](https://osarch.org), with the ultimate goal of improving building design by using entirely free software.

![](/images/BIM_workbench_presentation.png)

## Getting started

![](/images/BIM_welcome_screen.png)

When starting the BIM workbench for the first time, a welcome dialog is shown, giving a quick overview of how the workbench works, and allowing the user to start an [in-game tutorial](/BIM_ingame_tutorial "BIM ingame tutorial"). The welcome dialog is also available from the **help** menu. When the welcome screen is closed by clicking OK, the [BIM setup dialog](/BIM_Setup "BIM Setup") will be shown, that allows the user to quickly set some of the most common BIM-related preferences of FreeCAD without the need to browse through the full [FreeCAD preferences pages](/Preferences_Editor "Preferences Editor").

The [BIM project setup](/BIM_Setup "BIM Setup") tool allows you to quickly setup a BIM project by entering some basic information about your project. You can then, for example, use the different 2D drafting tools to sketch guidelines and baselines, then use the different 3D modeling tools to automatically build 3D BIM objects from them. A line, for example, can become a wall simply by selecting it and pressing the [Wall](/Arch_Wall "Arch Wall") button.

Common building elements such as [walls](/Arch_Wall "Arch Wall") or [columns](/BIM_Column "BIM Column") are easily created by pressing the appropriate toolbar button and clicking points in the 3D view. They can be moved, rotated and edited once created. Most BIM elements are created on the current [working plane](/Draft_SelectPlane "Draft SelectPlane"), so a typical workflow involves placing the working plane first, then creating a BIM element. More complex elements can be created by drawing 2D elements first, then using one of the BIM tools to convert them into the desired element.

Elements of building projects can be organized using [sites](/Arch_Site "Arch Site"), [buildings](/Arch_Building "Arch Building") and [levels](/Arch_BuildingPart "Arch BuildingPart"), to reproduce what is commonly done in other BIM applications. In FreeCAD, however, such structures are not mandatory, and you are free to organize your model elements as you see fit, for example using [groups](/Std_Group "Std Group").

2D drawings can be generated from a model to represent plan, section or elevation views. To generate such a drawing,[section planes](/Arch_SectionPlane "Arch SectionPlane") are placed in the model, to indicate where it should be cut or viewed from. Once the section planes are in place, two methods are possible:

1. Create projected views in the document using [shape views](/Draft_Shape2DView "Draft Shape2DView"), then add all the necessary annotations such as texts and dimensions, then put all this on a page. This is the recommended way, as it offers more flexibility.
2. Create a view on a page directly from the section plane. Then all the needed 2D annotations must either be added to the section plane, or done directly on the page. This is less flexible.

Finally, quantities schedules can be created using the [schedule](/Arch_Schedule "Arch Schedule") tool.

If you are used to another BIM application, check our [BIM application compatibility table](/BIM_application_compatibility_table "BIM application compatibility table") to get your bearings when starting with FreeCAD.

![](/images/BIM_tutorial_screenshot.png)

The [in-game tutorial](/BIM_ingame_tutorial "BIM ingame tutorial") is an easy way to quickly get on track with the BIM workbench.

## Tools

The BIM workbench gathers tools from several other FreeCAD workbenches, mainly [Draft](/Draft_Workbench "Draft Workbench") and [Part](/Part_Workbench "Part Workbench"), roughly reorganized in logical categories.

Additionally, if such [addons](/External_workbenches "External workbenches") are installed, tools from [Reinforcement](/Reinforcement_Workbench "Reinforcement Workbench") (extra reinforcing bar tools), [Fasteners](/Fasteners_Workbench "Fasteners Workbench") (bolts and screws), [Flamingo/Dodo](/Flamingo_Workbench "Flamingo Workbench") (metal structure and piping tools) and [Parts Library](/Parts_Library_Workbench "Parts Library Workbench") are automatically included in the BIM workbench.

The BIM workbench also adds a series of items in the **status bar** of FreeCAD, and a couple of **context menu items**, accessible by right-clicking in the 3D view or in the tree view.

### 2D drafting

2D objects are commonly used as drafting aids, or to draw base lines and profiles to build BIM objects on. They can also be used to draw symbols and annotations in your model. Apart from sketches, that use their own coordinate system, 2D objects will be drawn on the current [working plane](/Draft_SelectPlane "Draft SelectPlane").

- ![](/images/BIM_Sketch.svg) [Sketch](/BIM_Sketch "BIM Sketch"): Creates‎ a new sketch and enters sketch edit mode. Sketches are advanced 2D objects with constraints support.

- ![](/images/Draft_Line.svg) [Line](/Draft_Line "Draft Line"): Creates a straight line.

- ![](/images/Draft_Wire.svg) [Polyline](/Draft_Wire "Draft Wire"): Creates a polyline (also called wire), a sequence of several connected line segments.

- ![](/images/Draft_Circle.svg) [Circle](/Draft_Circle "Draft Circle"): Creates a circle from a center and a radius.

- ![](/images/Draft_Arc.svg) [Arc](/Draft_Arc "Draft Arc"): Creates a circular arc from a center, a radius, a start angle and an aperture angle.

- ![](/images/Draft_Arc_3Points.svg) [Arc by 3 points](/Draft_Arc_3Points "Draft Arc 3Points"): Creates a circular arc from three points that define its circumference.

- ![](/images/Draft_Fillet.svg) [Fillet](/Draft_Fillet "Draft Fillet"): Creates a fillet, a rounded corner, or a chamfer, a straight edge, between two [Draft Lines](/Draft_Line "Draft Line").

- ![](/images/Draft_Ellipse.svg) [Ellipse](/Draft_Ellipse "Draft Ellipse"): Creates an ellipse from two points defining a rectangle in which the ellipse will fit.

- ![](/images/Draft_Polygon.svg) [Polygon](/Draft_Polygon "Draft Polygon"): Creates a regular polygon from a center and a radius.

- ![](/images/Draft_Rectangle.svg) [Rectangle](/Draft_Rectangle "Draft Rectangle"): Creates a rectangle from two points.

- ![](/images/Draft_BSpline.svg) [B-spline](/Draft_BSpline "Draft BSpline"): Creates a B-spline curve from several points.

- ![](/images/Draft_BezCurve.svg) [Bézier curve](/Draft_BezCurve "Draft BezCurve"): Creates a Bézier curve from several points.

- ![](/images/Draft_CubicBezCurve.svg) [Cubic Bézier curve](/Draft_CubicBezCurve "Draft CubicBezCurve"): Creates a Bézier curve of the third degree.

- ![](/images/Draft_Point.svg) [Point](/Draft_Point "Draft Point"): Creates a simple point.

### 3D/BIM

3D and BIM objects are the real-world elements that will compose your BIM project.

- ![](/images/BIM_Project.svg) [Project](/BIM_Project "BIM Project"): Creates an IFC project including selected objects.

- ![](/images/Arch_Site.svg) [Site](/Arch_Site "Arch Site"): Creates a site including selected objects.

- ![](/images/Arch_Building.svg) [Building](/Arch_Building "Arch Building"): Creates a building including selected objects.

- ![](/images/Arch_Floor.svg) [Level](/Arch_Floor "Arch Floor"): Creates a floor including selected objects.

- ![](/images/Arch_Space.svg) [Space](/Arch_Space "Arch Space"): Creates a space object.

- ![](/images/Arch_Wall.svg) [Wall](/Arch_Wall "Arch Wall"): Creates a wall from scratch or using a selected object as a base.

- ![](/images/Arch_CurtainWall.svg) [Curtain Wall](/Arch_CurtainWall "Arch CurtainWall"): Creates a curtain wall from scratch or using a selected object as a base.

- ![](/images/BIM_Column.svg) [Column](/BIM_Column "BIM Column"): Creates a vertical [structural](/Arch_Structure "Arch Structure") element at a given point, optionally using a selected object as a profile.

- ![](/images/BIM_Beam.svg) [Beam](/BIM_Beam "BIM Beam"): Creates a horizontal [structural](/Arch_Structure "Arch Structure") element between two points, optionally using a selected object as a profile.

- ![](/images/BIM_Slab.svg) [Slab](/BIM_Slab "BIM Slab"): Creates a flat [structural](/Arch_Structure "Arch Structure") element by extruding a selected flat object.

- ![](/images/BIM_Door.svg) [Door](/BIM_Door "BIM Door"): Creates a [Window](/Arch_Window "Arch Window") object using door presets.

- ![](/images/Arch_Window.svg) [Window](/Arch_Window "Arch Window"): Creates a window from scratch or using a selected object as a base.

- ![](/images/Arch_Pipe.svg) [Pipe](/Arch_Pipe "Arch Pipe"): Creates a pipe.

- ![](/images/Arch_PipeConnector.svg) [Connector](/Arch_PipeConnector "Arch PipeConnector"): Creates a corner or T-connection between 2 or 3 selected pipes.

- ![](/images/Arch_Stairs.svg) [Stairs](/Arch_Stairs "Arch Stairs"): Creates a stairs object.

- ![](/images/Arch_Roof.svg) [Roof](/Arch_Roof "Arch Roof"): Creates a sloped roof from a selected wire.

- ![](/images/Arch_Panel.svg) [Panel](/Arch_Panel "Arch Panel"): Creates a panel object from a selected 2D object.

- ![](/images/Arch_Frame.svg) [Frame](/Arch_Frame "Arch Frame"): Creates a frame object from a selected layout.

- ![](/images/Arch_Fence.svg) [Fence](/Arch_Fence "Arch Fence"): Creates a fence object from a selected post and path.

- ![](/images/Arch_Truss.svg) [Truss](/Arch_Truss "Arch Truss"): Creates a truss from a selected line or from scratch.

- ![](/images/Arch_Equipment.svg) [Equipment](/Arch_Equipment "Arch Equipment"): Creates an equipment or furniture object.

- Reinforcement tools:

: These tools, except the first, are only available if the [Reinforcement Workbench](/Reinforcement_Workbench "Reinforcement Workbench") has been installed.

- ![](/images/Arch_Rebar.svg) [Custom Rebar](/Arch_Rebar "Arch Rebar"): Creates a custom reinforcement bar in a selected structural element using a sketch.

- ![](/images/Reinforcement_StraightRebar.svg) [Straight Rebar](/Reinforcement_StraightRebar "Reinforcement StraightRebar"): Creates a straight reinforcement bar in a selected structural element.

- ![](/images/Reinforcement_UShapeRebar.svg) [U-Shape Rebar](/Reinforcement_UShapeRebar "Reinforcement UShapeRebar"): Creates a U-shape reinforcement bar in a selected structural element.

- ![](/images/Reinforcement_LShapeRebar.svg) [L-Shape Rebar](/Reinforcement_LShapeRebar "Reinforcement LShapeRebar"): Creates an L-shape reinforcement bar in a selected structural element.

- ![](/images/Reinforcement_StirrupRebar.svg) [Stirrup](/Reinforcement_StirrupRebar "Reinforcement StirrupRebar"): Creates a stirrup reinforcement bar in a selected structural element.

- ![](/images/Reinforcement_BentShapeRebar.svg) [Bent-Shape Rebar](/Reinforcement_BentShapeRebar "Reinforcement BentShapeRebar"): Creates a bent-shape reinforcement bar in a selected structural element.

- ![](/images/Reinforcement_HelicalRebar.svg) [Helical Rebar](/Reinforcement_HelicalRebar "Reinforcement HelicalRebar"): Creates a helical reinforcement bar in a selected structural element.

- ![](/images/Reinforcement_ColumnRebars.svg) [Column Reinforcement](/Reinforcement_ColumnRebars "Reinforcement ColumnRebars"): Creates reinforcement bars in a selected column.

- ![](/images/Reinforcement_BeamRebars.svg) [Beam Reinforcement](/Reinforcement_BeamRebars "Reinforcement BeamRebars"): Creates reinforcement bars in a selected beam.

- ![](/images/Reinforcement_SlabRebars.svg) [Slab Reinforcement](/Reinforcement_SlabRebars "Reinforcement SlabRebars"): Creates reinforcement bars in a selected slab.

- ![](/images/Reinforcement_FootingRebars.svg) [Footing Reinforcement](/Reinforcement_FootingRebars "Reinforcement FootingRebars"): Creates reinforcement bars in a selected footing.

* Generic 3D tools:

: These tools build generic 3D objects that can be turned or used into BIM components.

- ![](/images/Arch_Profile.svg) [Profile](/Arch_Profile "Arch Profile"): Creates a parametric 2D profile.

- ![](/images/BIM_Box.svg) [Box](/BIM_Box "BIM Box"): Creates a box by specifying its dimensions graphically.

- ![](/images/Part_Builder.svg) [Shape builder...](/Part_Builder "Part Builder"): Creates more complex shapes from various geometric primitives.

- ![](/images/Draft_Facebinder.svg) [Facebinder](/Draft_Facebinder "Draft Facebinder"): creates a surface object from selected faces.

- ![](/images/BIM_Library.svg) [Objects library](/BIM_Library "BIM Library"): Inserts an equipment or furniture object. Requires the [Parts Library](/Parts_Library "Parts Library") addon.

- ![](/images/Arch_Component.svg) [Component](/Arch_Component "Arch Component"): Creates a non-parametric Arch component.

- ![](/images/Arch_Reference.svg) [External reference](/Arch_Reference "Arch Reference"): Links objects from another FreeCAD file into the current document.

### Annotation

Annotations are visual help objects that can be placed inside your model. They can be used to export your model directly to a 2D format like [DXF](/Draft_DXF "Draft DXF"), or reused when creating 2D views of your model with the [TechDraw Workbench](/TechDraw_Workbench "TechDraw Workbench").

- ![](/images/BIM_Text.svg) [Text](/BIM_Text "BIM Text"): Creates a 2D text in a document or on a TechDraw page.

- ![](/images/Draft_ShapeString.svg) [Shape from text](/Draft_ShapeString "Draft ShapeString"): Creates a compound shape that represents a text string.

- ![](/images/BIM_DimensionAligned.svg) [Aligned dimension](/BIM_DimensionAligned "BIM DimensionAligned"): Creates a dimension aligned with two points or a selected edge.

- ![](/images/BIM_DimensionHorizontal.svg) [Horizontal dimension](/BIM_DimensionHorizontal "BIM DimensionHorizontal"): Creates an horizontal dimension between two points or from a selected edge.

- ![](/images/BIM_DimensionVertical.svg) [Vertical dimension](/BIM_DimensionVertical "BIM DimensionVertical"): Creates a vertical dimension between two points or from a selected edge.

- ![](/images/BIM_Leader.svg) [Leader](/BIM_Leader "BIM Leader"): Creates a 2-segment polyline with an arrow at its end, to be used as a leader line in conjunction with a [Text](/BIM_Text "BIM Text").

- ![](/images/Draft_Label.svg) [Label](/Draft_Label "Draft Label"): Creates a multi-line text with a 2-segment leader line and an arrow.

- ![](/images/Arch_Axis.svg) [Axis](/Arch_Axis "Arch Axis"): Adds a 1-direction array of axes.

- ![](/images/Arch_AxisSystem.svg) [Axis System](/Arch_AxisSystem "Arch AxisSystem"): Adds an axis system composed of several axes.

- ![](/images/Arch_Grid.svg) [Grid](/Arch_Grid "Arch Grid"): Adds a grid-like object.

- ![](/images/Arch_SectionPlane.svg) [Section Plane](/Arch_SectionPlane "Arch SectionPlane"): Adds a section plane object.

- ![](/images/Draft_Hatch.svg) [Hatch](/Draft_Hatch "Draft Hatch"): Creates hatches on the planar faces of a selected object.

- ![](/images/BIM_TDPage.svg) [Page](/BIM_TDPage "BIM TDPage"): Creates a [TechDraw page](/TechDraw_PageTemplate "TechDraw PageTemplate") from a template SVG file.

- ![](/images/BIM_TDView.svg) [View](/BIM_TDView "BIM TDView"): Creates a view of the selected object(s) such as a [Section plane](/Arch_SectionPlane "Arch SectionPlane") or a Group containing the different elements of a 2D view.

- ![](/images/BIM_Shape2DView.svg) [Shape-based view](/BIM_Shape2DView "BIM Shape2DView"): Creates a 2D projected view from a selected object such as a [Section plane](/Arch_SectionPlane "Arch SectionPlane") or a [Level](/Arch_BuildingPart "Arch BuildingPart").

### Snapping

This menu contains the [Draft Snap](/Draft_Snap "Draft Snap") tools as well as the following tools:

- ![](/images/BIM_SetWPTop.svg) [Working Plane Top](/BIM_SetWPTop "BIM SetWPTop"): Places the working plane on the global XY plane (ground).

- ![](/images/BIM_SetWPFront.svg) [Working Plane Front](/BIM_SetWPFront "BIM SetWPFront"): Places the working plane on the global XZ plane (front).

- ![](/images/BIM_SetWPSide.svg) [Working Plane Side](/BIM_SetWPSide "BIM SetWPSide"): Places the working plane on the global YZ plane (side).

### Modify

- ![](/images/Draft_Move.svg) [Move](/Draft_Move "Draft Move"): Moves or copies selected objects from one point to another.

- ![](/images/BIM_Copy.svg) [Copy](/BIM_Copy "BIM Copy"): Copies selected objects from one point to another.

- ![](/images/Draft_Rotate.svg) [Rotate](/Draft_Rotate "Draft Rotate"): Rotates or copies selected objects around a center point by a given angle.

- ![](/images/BIM_Clone.svg) [Clone](/BIM_Clone "BIM Clone"): Clones selected objects.

- ![](/images/BIM_SimpleCopy.svg) [Create simple copy](/BIM_SimpleCopy "BIM SimpleCopy"): Creates a non-parametric copy of a selected object. This is the same tool as [Part SimpleCopy](/Part_SimpleCopy "Part SimpleCopy").

- ![](/images/BIM_Compound.svg) [Make compound](/BIM_Compound "BIM Compound"): Creates a compound from selected objects. This is the same tool as [Part Compound](/Part_Compound "Part Compound").

- ![](/images/Draft_Offset.svg) [Offset](/Draft_Offset "Draft Offset"): Offsets each segment of a selected object over a given distance, or creates an offset copy of the selected object.

- ![](/images/BIM_Offset2D.svg) [2D Offset...](/BIM_Offset2D "BIM Offset2D"): Constructs a parallel wire at a given distance from the original, or enlarges/shrinks a planar face (parametric version). This is the same tool as [Part Offset2D](/Part_Offset2D "Part Offset2D").

- ![](/images/Draft_Trimex.svg) [Trimex](/Draft_Trimex "Draft Trimex"): Trims or extends a selected object.

- ![](/images/Draft_Join.svg) [Join](/Draft_Join "Draft Join"): Joins [Draft Lines](/Draft_Line "Draft Line") and [Draft Wires](/Draft_Wire "Draft Wire") into a single wire.

- ![](/images/Draft_Split.svg) [Split](/Draft_Split "Draft Split"): Splits a [Draft Line](/Draft_Line "Draft Line") or [Draft Wire](/Draft_Wire "Draft Wire") at a specified point or edge.

- ![](/images/Draft_Scale.svg) [Scale](/Draft_Scale "Draft Scale"): Scales or copies selected objects around a base point.

- ![](/images/Draft_Stretch.svg) [Stretch](/Draft_Stretch "Draft Stretch"): Stretches objects by moving selected points.

- ![](/images/Draft_Draft2Sketch.svg) [Draft to sketch](/Draft_Draft2Sketch "Draft Draft2Sketch"): Converts Draft objects to [Sketcher Sketches](/Sketcher_NewSketch "Sketcher NewSketch") and vice versa.

- ![](/images/Draft_Upgrade.svg) [Upgrade](/Draft_Upgrade "Draft Upgrade"): Upgrades selected objects.

- ![](/images/Draft_Downgrade.svg) [Downgrade](/Draft_Downgrade "Draft Downgrade"): Downgrades selected objects.

- ![](/images/Arch_Add.svg) [Add component](/Arch_Add "Arch Add"): Adds objects to a component.

- ![](/images/Arch_Remove.svg) [Remove component](/Arch_Remove "Arch Remove"): Subtracts or removes objects from a component.

- ![](/images/Draft_OrthoArray.svg) [Array](/Draft_OrthoArray "Draft OrthoArray"): Creates an orthogonal array from a selected object. It can optionally create a [Link](/App_Link "App Link") array.

- ![](/images/Draft_PathArray.svg) [Path array](/Draft_PathArray "Draft PathArray"): Creates an array from a selected object by placing copies along a path.

- ![](/images/Draft_PolarArray.svg) [Polar array](/Draft_PolarArray "Draft PolarArray"): Creates an array from a selected object by placing copies along a circumference. It can optionally create a [Link](/App_Link "App Link") array.

- ![](/images/Draft_PointArray.svg) [Point array](/Draft_PointArray "Draft PointArray"): Creates an array from a selected object by placing copies at the points from a point compound.

- ![](/images/Arch_CutPlane.svg) [Cut with plane](/Arch_CutPlane "Arch CutPlane"): Cuts an object according to a plane.

- ![](/images/Draft_Mirror.svg) [Mirror](/Draft_Mirror "Draft Mirror"): Creates mirrored copies from selected objects.

- ![](/images/BIM_Extrude.svg) [Extrude...](/BIM_Extrude "BIM Extrude"): Extrudes planar faces of an object. This is the same tool as [Part Extrude](/Part_Extrude "Part Extrude").

- ![](/images/BIM_Cut.svg) [Difference](/BIM_Cut "BIM Cut"): Subtracts one object from another. This is the same tool as [Part Cut](/Part_Cut "Part Cut").

- ![](/images/BIM_Fuse.svg) [Union](/BIM_Fuse "BIM Fuse"): Fuses two objects. This is the same tool as [Part Fuse](/Part_Fuse "Part Fuse").

- ![](/images/BIM_Common.svg) [Intersection](/BIM_Common "BIM Common"): Extracts the common part of two objects. This is the same tool as [Part Common](/Part_Common "Part Common").

### Manage

- ![](/images/BIM_Setup.svg) [BIM Setup...](/BIM_Setup "BIM Setup"): Configures some of the FreeCAD preferences most commonly used for BIM.

- ![](/images/BIM_Views.svg) [Views manager](/BIM_Views "BIM Views"): Manage the different views and levels of your project.

- ![](/images/BIM_ProjectManager.svg) [Manage project...](/BIM_ProjectManager "BIM ProjectManager"): Allows to create some basic objects such as a [site](/Arch_Site "Arch Site"), a [building](/Arch_Building "Arch Building") and [axes](/Arch_Axis "Arch Axis") by filling basic project information.

- ![](/images/BIM_Windows.svg) [Manage doors and windows...](/BIM_Windows "BIM Windows"): Manage the doors and windows of your project.

- ![](/images/BIM_IfcElements.svg) [Manage IFC elements...](/BIM_IfcElements "BIM IfcElements"): Manage how the different elements of your project will be exported to IFC.

- ![](/images/BIM_IfcQuantities.svg) [Manage IFC quantities...](/BIM_IfcQuantities "BIM IfcQuantities"): Manage how the quantities of your objects are explicitely exported to IFC

- ![](/images/BIM_IfcProperties.svg) [Manage IFC properties...](/BIM_IfcProperties "BIM IfcProperties"): Manage the IFC properties attached to each of your objects.

- ![](/images/BIM_Classification.svg) [Manage classification...](/BIM_Classification "BIM Classification"): Manage how objects and materials of your project relate to classifications systems such as [Uniclass](https://en.wikipedia.org/wiki/Uniclass).

- ![](/images/BIM_Layers.svg) [Manage layers...](/BIM_Layers "BIM Layers"): Manage the layers of your document.

- ![](/images/BIM_Material.svg) [Material](/BIM_Material "BIM Material"): Manages [materials](/Arch_SetMaterial "Arch SetMaterial") or [multimaterials](/Arch_MultiMaterial "Arch MultiMaterial") of selected objects

- ![](/images/Arch_Schedule.svg) [Schedule](/Arch_Schedule "Arch Schedule"): Creates different types of schedules.

- ![](/images/BIM_Preflight.svg) [Preflight checks...](/BIM_Preflight "BIM Preflight"): Perform different checks on your model before exporting to IFC.

- ![](/images/Draft_AnnotationStyleEditor.svg) [Annotation styles...](/Draft_AnnotationStyleEditor "Draft AnnotationStyleEditor"): Allows you to define styles that affect the visual properties of annotation-like objects.

### Utils

- ![](/images/BIM_TogglePanels.svg) [Toggle bottom panels](/BIM_TogglePanels "BIM TogglePanels"): Shows or hides output windows (the Report view and the Python console).

- ![](/images/BIM_Trash.svg) [Move to Trash](/BIM_Trash "BIM Trash"): Moves selected objects to a Trash group, which gets created if necessary

- ![](/images/BIM_WPView.svg) [Working Plane View](/BIM_WPView "BIM WPView"): Sets the camera to face the current working plane

- ![](/images/Draft_SelectGroup.svg) [Select group](/Draft_SelectGroup "Draft SelectGroup"): Selects the contents of [Std Groups](/Std_Group "Std Group") or group-like [Arch](/Arch_Workbench "Arch Workbench") objects.

- ![](/images/Draft_Slope.svg) [Set slope](/Draft_Slope "Draft Slope"): Slopes selected [Draft Lines](/Draft_Line "Draft Line") or [Draft Wires](/Draft_Wire "Draft Wire") by increasing, or decreasing, the Z coordinate of all points after the first one.

- ![](/images/Draft_WorkingPlaneProxy.svg) [Create working plane proxy](/Draft_WorkingPlaneProxy "Draft WorkingPlaneProxy"): Creates a working plane proxy to save the current [Draft working plane](/Draft_SelectPlane "Draft SelectPlane").

- ![](/images/Draft_AddConstruction.svg) [Add to construction group](/Draft_AddConstruction "Draft AddConstruction"): Moves objects to the [Draft construction group](/Draft_ToggleConstructionMode "Draft ToggleConstructionMode").

- ![](/images/Arch_SplitMesh.svg) [Split Mesh](/Arch_SplitMesh "Arch SplitMesh"): Splits a selected mesh into separate components.

- ![](/images/Arch_MeshToShape.svg) [Mesh to Shape](/Arch_MeshToShape "Arch MeshToShape"): Converts a mesh into a shape, unifying coplanar faces.

- ![](/images/Arch_SelectNonSolidMeshes.svg) [Select non-manifold meshes](/Arch_SelectNonSolidMeshes "Arch SelectNonSolidMeshes"): Selects all non-manifold meshes from the current selection or from the document.

- ![](/images/Arch_RemoveShape.svg) [Remove Shape from Arch](/Arch_RemoveShape "Arch RemoveShape"): Turns cubic shape-based Arch object fully parametric.

- ![](/images/Arch_CloseHoles.svg) [Close holes](/Arch_CloseHoles "Arch CloseHoles"): Closes holes in a selected shape-based object.

- ![](/images/Arch_MergeWalls.svg) [Merge Walls](/Arch_MergeWalls "Arch MergeWalls"): Merges walls.

- ![](/images/Arch_Check.svg) [Check](/Arch_Check "Arch Check"): Check if the selected objects are solids and don't contain defects.

- ![](/images/Arch_ToggleIfcBrepFlag.svg) [Toggle IFC B-rep flag](/Arch_ToggleIfcBrepFlag "Arch ToggleIfcBrepFlag"): Forces a selected object to be exported as an [IfcFacetedBrep](https://standards.buildingsmart.org/IFC/DEV/IFC4_2/FINAL/HTML/schema/ifcgeometricmodelresource/lexical/ifcfacetedbrep.htm).

- ![](/images/Arch_ToggleSubs.svg) [Toggle subcomponents](/Arch_ToggleSubs "Arch ToggleSubs"): Shows or hides the subcomponents of an Arch object.

- ![](/images/Arch_Survey.svg) [Survey](/Arch_Survey "Arch Survey"): Enters or leaves surveying mode.

- ![](/images/BIM_Diff.svg) [IFC Diff](/BIM_Diff "BIM Diff"): Shows a visual diff between two IFC files

- ![](/images/BIM_IfcExplorer.svg) [IFC explorer](/BIM_IfcExplorer "BIM IfcExplorer"): Opens a tool to explore the structure of an IFC file prior to importing

- ![](/images/Arch_IfcSpreadsheet.svg) [Create IFC spreadsheet...](/Arch_IfcSpreadsheet "Arch IfcSpreadsheet"): This tool creates a spreadsheet to store IFC properties of an object.

- ![](/images/BIM_ImagePlane.svg) [Image plane](/index.php?title=BIM_ImagePlane&action=edit&redlink=1 "BIM ImagePlane (page does not exist)"): Inserts an image plane in the document.

- ![](/images/BIM_Unclone.svg) [Unclone](/index.php?title=BIM_Unclone&action=edit&redlink=1 "BIM Unclone (page does not exist)"): Makes a cloned object independent from its original object

- ![](/images/BIM_Rewire.svg) [Rewire](/index.php?title=BIM_Rewire&action=edit&redlink=1 "BIM Rewire (page does not exist)"):

- ![](/images/BIM_Glue.svg) [Glue](/index.php?title=BIM_Glue&action=edit&redlink=1 "BIM Glue (page does not exist)"):

- ![](/images/BIM_Reextrude.svg) [Reextrude](/index.php?title=BIM_Reextrude&action=edit&redlink=1 "BIM Reextrude (page does not exist)"): Recreates an extrusion from a shape that has lost its parametric extrusion by selecting a base face

- Panel tools:

- ![](/images/Arch_Panel.svg) [Panel](/Arch_Panel "Arch Panel"): Creates a panel object from a selected 2D object.

- ![](/images/Arch_Panel_Cut.svg) [Panel Cut](/Arch_Panel_Cut "Arch Panel Cut"): Creates a 2D cut view from a panel.

- ![](/images/Arch_Panel_Sheet.svg) [Panel Sheet](/Arch_Panel_Sheet "Arch Panel Sheet"): Creates a 2D cut sheet including panel cuts or other 2D objects.

- ![](/images/Arch_Nest.svg) [Nest](/Arch_Nest "Arch Nest"): Allows to nest several flat objects inside a container shape.

- Structure tools:

- ![](/images/Arch_Structure.svg) [Structure](/Arch_Structure "Arch Structure"): Creates a structural element from scratch or using a selected object as a base.

- ![](/images/Arch_StructuralSystem.svg) [Structural System](/index.php?title=Arch_StructuralSystem&action=edit&redlink=1 "Arch StructuralSystem (page does not exist)"):

- ![](/images/Arch_StructuresFromSelection.svg) [Multiple Structures](/index.php?title=Arch_StructuresFromSelection&action=edit&redlink=1 "Arch StructuresFromSelection (page does not exist)"):

- ![](/images/IFC_Diff.svg) [IFC Diff...](/index.php?title=IFC_Diff&action=edit&redlink=1 "IFC Diff (page does not exist)"):

- ![](/images/IFC_Expand.svg) [IFC Expand](/index.php?title=IFC_Expand&action=edit&redlink=1 "IFC Expand (page does not exist)"):

- ![](/images/IFC_MakeProject.svg) [Make IFC project](/index.php?title=IFC_MakeProject&action=edit&redlink=1 "IFC MakeProject (page does not exist)"):

- ![](/images/IFC_UpdateIOS.svg) [IfcOpenShell update](/index.php?title=IFC_UpdateIOS&action=edit&redlink=1 "IFC UpdateIOS (page does not exist)"):

- Nudge:

: \* [Nudge Switch](/index.php?title=BIM_Nudge_Switch&action=edit&redlink=1 "BIM Nudge Switch (page does not exist)"):

: \* [Nudge Up](/index.php?title=BIM_Nudge_Up&action=edit&redlink=1 "BIM Nudge Up (page does not exist)"):

: \* [Nudge Down](/index.php?title=BIM_Nudge_Down&action=edit&redlink=1 "BIM Nudge Down (page does not exist)"):

: \* [Nudge Left](/index.php?title=BIM_Nudge_Left&action=edit&redlink=1 "BIM Nudge Left (page does not exist)"):

: \* [Nudge Right](/index.php?title=BIM_Nudge_Right&action=edit&redlink=1 "BIM Nudge Right (page does not exist)"):

: \* [Nudge Rotate Left](/index.php?title=BIM_Nudge_RotateLeft&action=edit&redlink=1 "BIM Nudge RotateLeft (page does not exist)"):

: \* [Nudge Rotate Right](/index.php?title=BIM_Nudge_RotateRight&action=edit&redlink=1 "BIM Nudge RotateRight (page does not exist)"):

: \* [Nudge Extend](/index.php?title=BIM_Nudge_Extend&action=edit&redlink=1 "BIM Nudge Extend (page does not exist)"):

: \* [Nudge Shrink](/index.php?title=BIM_Nudge_Shrink&action=edit&redlink=1 "BIM Nudge Shrink (page does not exist)"):

### Status bar

The status bar contains a few buttons that allow to easily change different states:

- ![](/images/BIM_TogglePanels.svg) [Toggle panels](/BIM_TogglePanels "BIM TogglePanels"): Shows or hides the [Report view](/Report_view "Report view") and the [Python console](/Python_console "Python console").

- ![](/images/BIM_ToggleViews.svg) Toggle Views: Shows or hides the [BIM Views](/BIM_Views "BIM Views") panel.

- ![](/images/BIM_ToggleBackground.svg) Cycle background: Cycles between vertical gradient, radial gradient and simple color background modes. This can be used to toggle between a dark background for modelling and a white background for 2D drawing.

- ![](/images/IFC.svg) Lock IFC: Switches between [locked and unlocked IFC mode](/NativeIFC#Locked_and_unlocked_modes "NativeIFC").

### Tree view context menu

TBD

### 3D view context menu

TBD

### Obsolete tools

- ![](/images/Arch_3Views.svg) [Arch 3Views](/Arch_3Views "Arch 3Views"): Creates top, front and side views from a [mesh](/Mesh_Workbench "Mesh Workbench"). Not available in 1.0 and above.

- ![](/images/Arch_BuildingPart.svg) [Arch BuildingPart](/Arch_BuildingPart "Arch BuildingPart"): Creates a building part including selected objects. Not available in 1.0 and above. Use [Arch Floor](/Arch_Floor "Arch Floor") instead.

- ![](/images/Arch_CloneComponent.svg) [Arch CloneComponent](/Arch_CloneComponent "Arch CloneComponent"): Produces Arch Components that are clones of selected Arch objects. Not available in 1.0 and above. Use [Draft Clone](/Draft_Clone "Draft Clone") instead.

- ![](/images/Arch_CutLine.svg) [Arch CutLine](/Arch_CutLine "Arch CutLine"): Cuts an object according to a line. Not available in 1.0 and above. Use [Arch CutPlane](/Arch_CutPlane "Arch CutPlane") instead.

- ![](/images/Arch_MultiMaterial.svg) [Arch MultiMaterial](/Arch_MultiMaterial "Arch MultiMaterial"): Creates a multi-material and attributes it to selected objects, if any. Not available in 1.0 and above. Use [BIM Material](/BIM_Material "BIM Material") instead.

- ![](/images/Arch_Project.svg) [Arch Project](/Arch_Project "Arch Project"): Creates a project including selected objects. Not available in 1.0 and above. Use [BIM Project](/BIM_Project "BIM Project") instead.

- ![](/images/Arch_SetMaterial.svg) [Arch SetMaterial](/Arch_SetMaterial "Arch SetMaterial"): Creates a material and attributes it to selected objects, if any. Not available in 1.0 and above. Use [BIM Material](/BIM_Material "BIM Material") instead.

## Preferences

- ![](/images/Preferences-bim.svg) [Preferences](/BIM_Preferences "BIM Preferences"): General preferences for the BIM Workbench.
- [Fine tuning](/Fine-tuning#BIM_Workbench "Fine-tuning"): Extra parameters to fine-tune BIM behavior.

## Working with IFC

The BIM workbench works natively with [Industry Foundation Classes](https://en.wikipedia.org/wiki/Industry_Foundation_Classes) (IFC) files. Native means there is no more translation between the IFC contents and FreeCAD: The IFC contents are directly rendered in FreeCAD, and any change affects the IFC contents directly. Read more on [NativeIFC](/NativeIFC "NativeIFC").

If you don't plan to work with others, and have no need for IFC, you can still use the BIM workbench tools and simply ignore anything related to IFC. You can still export your model to IFC anytime.

The old [Arch IFC](/Arch_IFC "Arch IFC") importer is disabled by default in FreeCAD, but still available from Python.

There is also a specific [NativeIFC Tutorial](/NativeIFC_Tutorial "NativeIFC Tutorial") that explains the concepts further.

## File formats

- [IFC](/Arch_IFC "Arch IFC"): industry foundation classes
- [DAE](/Arch_DAE "Arch DAE"): Collada mesh format
- [OBJ](/Arch_OBJ "Arch OBJ"): OBJ mesh format (export only)
- [JSON](/Arch_JSON "Arch JSON"): JavaScript Object Notation format (export only)
- [3DS](/Arch_3DS "Arch 3DS"): 3DS format (import only)
- [SHP](/Arch_SHP "Arch SHP"): GIS Shapefiles (import only)

## API

The Arch module can be used in [Python](/Python "Python") scripts and [macros](/Macros "Macros") using the [Arch Python API](/Arch_API "Arch API") functions.

## Tutorials and learning

- [Migrating to FreeCAD from Revit](/Migrating_to_FreeCAD_from_Revit "Migrating to FreeCAD from Revit")
- [Arch & BIM tutorials on this wiki](/Tutorials#Architecture_and_BIM "Tutorials")
- ["BIM with FreeCAD" video series by Yorik](https://www.youtube.com/playlist?list=PLmKdGVtV5Vnt2cj4IZIv9FM39QHaE1ZaU)
- ["FreeCAD tutorials" video series by Regis](https://www.youtube.com/playlist?list=PLDd21g-eSHwkkxVOfVmR8ObpPN5QbL7ye)
- ["Quinta Monroy" video series by Regis](https://www.youtube.com/playlist?list=PLDd21g-eSHwnAYyutuKhrPY51skaBhrVU)
- ["HRCompacta" youtube channel (most content is in portuguese)](https://www.youtube.com/@HRCompacta)
- ["FreeCADBIM" youtube channel (most content is in portuguese)](https://www.youtube.com/@FreeCadBIM)

## Example files

- FreeCAD features a BIM example file on the Start page.
- More example BIM files are available at <https://github.com/yorikvanhavre/FreeCAD-BIM-examples> . From within FreeCAD, use menu Help -> BIM examples.

Retrieved from "<http://wiki.freecad.org/index.php?title=BIM_Workbench/hr&oldid=1538562>"
