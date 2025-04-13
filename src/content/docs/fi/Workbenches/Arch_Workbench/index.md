---
title: Arch Workbench
---

:::caution
In v1.0 the BIM, Native-IFC and Arch Workbenches have been merged into the integratedBIM Workbench.
:::
![](/images/Workbench_Arch.svg)

Arch workbench icon

## Introduction

The ![](/images/Workbench_Arch.svg) [Arch Workbench](/Arch_Workbench "Arch Workbench") provides a modern [**B**uilding **I**nformation **M**odelling](http://en.wikipedia.org/wiki/Building_Information_Modeling) (BIM) workflow to FreeCAD, with support for features like fully parametric architectural entities such as walls, beams, roofs, windows, stairs, pipes, and furniture. It supports [**I**ndustry **F**oundation **C**lasses](/Arch_IFC "Arch IFC") (IFC) files, and production of 2D floor plans in combination with the ![](/images/Workbench_TechDraw.svg) [TechDraw Workbench](/TechDraw_Workbench "TechDraw Workbench").

The Arch Workbench imports all tools from the ![](/images/Workbench_Draft.svg) [Draft Workbench](/Draft_Workbench "Draft Workbench"), as it uses its 2D objects to build 3D parametric architectural objects. Nevertheless, Arch can also use solid shapes created with other workbenches like ![](/images/Workbench_Part.svg) [Part](/Part_Workbench "Part Workbench") and ![](/images/Workbench_PartDesign.svg) [PartDesign](/PartDesign_Workbench "PartDesign Workbench").

The BIM functionality of FreeCAD is now progressively split into this Arch Workbench, which holds basic architectural tools, and the ![](/images/Workbench_BIM.svg) [BIM Workbench](/BIM_Workbench "BIM Workbench"), which is available from the ![](/images/Std_AddonMgr.svg) [Addon Manager](/Std_AddonMgr "Std AddonMgr"). This BIM Workbench adds a new interface layer on top of the Arch tools, with the aim of making the BIM workflow more intuitive and user-friendly. See [FreeCAD BIM migration guide](https://yorik.uncreated.net/blog/2020-010-freecad-bim-guide).

The developers of Draft, Arch, and BIM also collaborate with the greater [OSArch community](https://osarch.org), with the ultimate goal of improving building design by using entirely free software.

![](/images/Screenshot_arch_window.jpg)

## Tools

These are tools for creating architectural objects.

- ![](/images/Arch_Wall.svg) [Wall](/Arch_Wall "Arch Wall"): Creates a wall from scratch or using a selected object as a base.

- ![](/images/Arch_Structure.svg) [Structure](/Arch_Structure "Arch Structure"): Creates a structural element from scratch or using a selected object as a base.

- ![](/images/Arch_CompRebarStraight.png) [Rebar tools](/Arch_CompRebarStraight "Arch CompRebarStraight"): These tools, except the last, are only available if the [Reinforcement Workbench](/Reinforcement_Workbench "Reinforcement Workbench") has been installed.

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

- ![](/images/Arch_Rebar.svg) [Custom Rebar](/Arch_Rebar "Arch Rebar"): Creates a custom reinforcement bar in a selected structural element using a sketch.

- ![](/images/Arch_CurtainWall.svg) [Curtain Wall](/Arch_CurtainWall "Arch CurtainWall"): Creates a curtain wall from scratch or using a selected object as a base.

- ![](/images/Arch_BuildingPart.svg) [Building Part](/Arch_BuildingPart "Arch BuildingPart"): Creates a building part including selected objects.

- ![](/images/Arch_Project.svg) [Project](/Arch_Project "Arch Project"): Creates a project including selected objects.

- ![](/images/Arch_Site.svg) [Site](/Arch_Site "Arch Site"): Creates a site including selected objects.

- ![](/images/Arch_Building.svg) [Building](/Arch_Building "Arch Building"): Creates a building including selected objects.

- ![](/images/Arch_Floor.svg) [Level](/Arch_Floor "Arch Floor"): Creates a floor including selected objects.

- ![](/images/Arch_Reference.svg) [External reference](/Arch_Reference "Arch Reference"): Links objects from another FreeCAD file into the current document.

- ![](/images/Arch_Window.svg) [Window](/Arch_Window "Arch Window"): Creates a window from scratch or using a selected object as a base.

- ![](/images/Arch_Roof.svg) [Roof](/Arch_Roof "Arch Roof"): Creates a sloped roof from a selected wire.

- ![](/images/Arch_CompAxis.png) [Axis tools](/Arch_CompAxis "Arch CompAxis")

- ![](/images/Arch_Axis.svg) [Axis](/Arch_Axis "Arch Axis"): Adds a 1-direction array of axes.

- ![](/images/Arch_AxisSystem.svg) [Axis System](/Arch_AxisSystem "Arch AxisSystem"): Adds an axis system composed of several axes.

- ![](/images/Arch_Grid.svg) [Grid](/Arch_Grid "Arch Grid"): Adds a grid-like object.

- ![](/images/Arch_SectionPlane.svg) [Section Plane](/Arch_SectionPlane "Arch SectionPlane"): Adds a section plane object.

- ![](/images/Arch_Space.svg) [Space](/Arch_Space "Arch Space"): Creates a space object.

- ![](/images/Arch_Stairs.svg) [Stairs](/Arch_Stairs "Arch Stairs"): Creates a stairs object.

- ![](/images/Arch_CompPanel.png) [Panel tools](/Arch_CompPanel "Arch CompPanel")

- ![](/images/Arch_Panel.svg) [Panel](/Arch_Panel "Arch Panel"): Creates a panel object from a selected 2D object.

- ![](/images/Arch_Panel_Cut.svg) [Panel Cut](/Arch_Panel_Cut "Arch Panel Cut"): Creates a 2D cut view from a panel.

- ![](/images/Arch_Panel_Sheet.svg) [Panel Sheet](/Arch_Panel_Sheet "Arch Panel Sheet"): Creates a 2D cut sheet including panel cuts or other 2D objects.

- ![](/images/Arch_Nest.svg) [Nest](/Arch_Nest "Arch Nest"): Allows to nest several flat objects inside a container shape.

- ![](/images/Arch_Equipment.svg) [Equipment](/Arch_Equipment "Arch Equipment"): Creates an equipment or furniture object.

- ![](/images/Arch_Frame.svg) [Frame](/Arch_Frame "Arch Frame"): Creates a frame object from a selected layout.

- ![](/images/Arch_Fence.svg) [Fence](/Arch_Fence "Arch Fence"): Creates a fence object from a selected post and path.

- ![](/images/Arch_Truss.svg) [Truss](/Arch_Truss "Arch Truss"): Creates a truss from a selected line or from scratch.

- ![](/images/Arch_Profile.svg) [Profile](/Arch_Profile "Arch Profile"): Creates a parametric 2D profile.

- ![](/images/Arch_CompSetMaterial.png) [Material tools](/Arch_CompSetMaterial "Arch CompSetMaterial")

- ![](/images/Arch_SetMaterial.svg) [Material](/Arch_SetMaterial "Arch SetMaterial"): Creates a material and attributes it to selected objects, if any.

- ![](/images/Arch_MultiMaterial.svg) [Multi-Material](/Arch_MultiMaterial "Arch MultiMaterial"): Creates a multi-material and attributes it to selected objects, if any.

- ![](/images/Arch_Schedule.svg) [Schedule](/Arch_Schedule "Arch Schedule"): Creates different types of schedules.

- ![](/images/Arch_CompPipe.png) [Pipe tools](/Arch_CompPipe "Arch CompPipe")

- ![](/images/Arch_Pipe.svg) [Pipe](/Arch_Pipe "Arch Pipe"): Creates a pipe.

- ![](/images/Arch_PipeConnector.svg) [Connector](/Arch_PipeConnector "Arch PipeConnector"): Creates a corner or T-connection between 2 or 3 selected pipes.

### Modification tools

These are tools for modifying architectural objects.

- ![](/images/Arch_CutPlane.svg) [Cut with plane](/Arch_CutPlane "Arch CutPlane"): Cuts an object according to a plane.

- ![](/images/Arch_CutLine.svg) [Cut with line](/Arch_CutLine "Arch CutLine"): Cuts an object according to a line.

- ![](/images/Arch_Add.svg) [Add component](/Arch_Add "Arch Add"): Adds objects to a component.

- ![](/images/Arch_Remove.svg) [Remove component](/Arch_Remove "Arch Remove"): Subtracts or removes objects from a component.

- ![](/images/Arch_Survey.svg) [Survey](/Arch_Survey "Arch Survey"): Enters or leaves surveying mode.

### Utilities

These are additional tools to help you in specific tasks.

- ![](/images/Arch_Component.svg) [Component](/Arch_Component "Arch Component"): Creates a non-parametric Arch component.

- ![](/images/Arch_CloneComponent.svg) [Clone component](/Arch_CloneComponent "Arch CloneComponent"): Produces Arch Components that are clones of selected Arch objects (not to be confused with [Draft Clone](/Draft_Clone "Draft Clone")).

- ![](/images/Arch_SplitMesh.svg) [Split Mesh](/Arch_SplitMesh "Arch SplitMesh"): Splits a selected mesh into separate components.

- ![](/images/Arch_MeshToShape.svg) [Mesh to Shape](/Arch_MeshToShape "Arch MeshToShape"): Converts a mesh into a shape, unifying coplanar faces.

- ![](/images/Arch_SelectNonSolidMeshes.svg) [Select non-manifold meshes](/Arch_SelectNonSolidMeshes "Arch SelectNonSolidMeshes"): Selects all non-manifold meshes from the current selection or from the document.

- ![](/images/Arch_RemoveShape.svg) [Remove Shape from Arch](/Arch_RemoveShape "Arch RemoveShape"): Turns cubic shape-based Arch object fully parametric.

- ![](/images/Arch_CloseHoles.svg) [Close holes](/Arch_CloseHoles "Arch CloseHoles"): Closes holes in a selected shape-based object.

- ![](/images/Arch_MergeWalls.svg) [Merge Walls](/Arch_MergeWalls "Arch MergeWalls"): Merge two or more walls.

- ![](/images/Arch_Check.svg) [Check](/Arch_Check "Arch Check"): Check if the selected objects are solids and don't contain defects.

- ![](/images/Arch_ToggleIfcBrepFlag.svg) [Toggle IFC Brep flag](/Arch_ToggleIfcBrepFlag "Arch ToggleIfcBrepFlag"): Forces a selected object to be exported as an [IfcFacetedBrep](http://www.buildingsmart-tech.org/ifc/IFC4/final/html/schema/ifcgeometricmodelresource/lexical/ifcfacetedbrep.htm).

- ![](/images/Arch_3Views.svg) [3 Views from mesh](/Arch_3Views "Arch 3Views"): Creates top, front and side views from a [mesh](/Mesh_Workbench "Mesh Workbench").

- ![](/images/Arch_IfcSpreadsheet.svg) [Create IFC spreadsheet...](/Arch_IfcSpreadsheet "Arch IfcSpreadsheet"): Creates a spreadsheet to store [IFC](/Arch_IFC "Arch IFC") properties of an object.

- ![](/images/Arch_ToggleSubs.svg) [Toggle subcomponents](/Arch_ToggleSubs "Arch ToggleSubs"): Shows or hides the subcomponents of an Arch object.

### Preferences

- ![](/images/Preferences-arch.svg) [Preferences](/Arch_Preferences "Arch Preferences"): preferences for the default appearance of walls, structures, rebars, windows, stairs, panels, pipes, grids and axes.

### File formats

- [IFC](/Arch_IFC "Arch IFC"): industry foundation classes
- [DAE](/Arch_DAE "Arch DAE"): Collada mesh format
- [OBJ](/Arch_OBJ "Arch OBJ"): OBJ mesh format (export only)
- [JSON](/Arch_JSON "Arch JSON"): JavaScript Object Notation format (export only)
- [3DS](/Arch_3DS "Arch 3DS"): 3DS format (import only)
- [SHP](/Arch_SHP "Arch SHP"): GIS Shapefiles (import only)

## API

The Arch module can be used in [Python](/Python "Python") scripts and [macros](/Macros "Macros") using the [Arch Python API](/Arch_API "Arch API") functions.

## Tutorials

- [Migrating to FreeCAD from Revit](/Migrating_to_FreeCAD_from_Revit "Migrating to FreeCAD from Revit")
- [Architecture workflow](http://yorik.uncreated.net/guestblog.php?tag=freecad): An example of how FreeCAD can begin to have its preliminary place in an architecture workflow.
- [Arch tutorial](/Arch_tutorial "Arch tutorial") (v0.14)
- [Quick arch overview on Yorik's blog](http://yorik.uncreated.net/guestblog.php?2012=180) (v0.13)
- [Video presentation of the Arch workbench](https://www.youtube.com/watch?v=lTDOeHapv_E) (2016)
- [Arch panel tutorial](/Arch_panel_tutorial "Arch panel tutorial") (v0.15)
- [BIM modeling chapter from the FreeCAD manual](/Manual:BIM_modeling "Manual:BIM modeling")
- [Import from STL or OBJ](/Import_from_STL_or_OBJ "Import from STL or OBJ")
- [Export to STL or OBJ](/Export_to_STL_or_OBJ "Export to STL or OBJ")

Retrieved from "<http://wiki.freecad.org/index.php?title=Arch_Workbench/fi&oldid=1433527>"
