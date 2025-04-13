---
title: TechDraw Workbench/zh-tw
---

![](/images/Workbench_TechDraw.svg)

TechDraw workbench icon

## Introduction

The ![](/images/Workbench_TechDraw.svg) [TechDraw Workbench](/TechDraw_Workbench "TechDraw Workbench") is used to produce basic technical drawings from 3D models created with another workbench such as [Part](/Part_Workbench "Part Workbench"), [PartDesign](/PartDesign_Workbench "PartDesign Workbench"), or [BIM](/BIM_Workbench "BIM Workbench"), or imported from other applications. Each drawing is a Page, which can contain various Views of drawable objects such as Part::Features, PartDesign::Bodies, App::Part groups, and Document Object groups. The resulting drawings can be used for things like documentation, manufacturing instructions, contracts, permits, etc.

Dimensions, sections, hatched areas, annotations, and [SVG](/SVG "SVG") symbols can be added to the page, which can be further exported to different formats like [DXF](/DXF "DXF"), [SVG](/SVG "SVG"), and [PDF](/PDF "PDF").

If your primary goal is the production of complex 2D drawings and [DXF](/DXF "DXF") files, and you don't need 3D modelling, FreeCAD may not be the right choice for you. You may wish to consider a dedicated software program for technical drafting instead, such as [LibreCAD](https://en.wikipedia.org/wiki/LibreCAD) or [QCad](https://en.wikipedia.org/wiki/QCad).

![](/images/TechDraw_Workbench_Example.png)

## Snapping

[introduced in 1.0](/Release_notes_1.0 "Release notes 1.0"): The TechDraw Workbench has a snapping feature. It can be used to automatically align views, section views and dimensions when positioning them by dragging with the mouse. With **Snap View Alignment** enabled (default) in the [preferences](/TechDraw_Preferences#Snapping "TechDraw Preferences"), views will snap to alignment with other views when close enough (**View Snapping Factor** setting). Dimensions are also snapped to other parallel dimensions and the dimension text can be snapped to the middle of the dimension line. Snapping can be temporarily disabled by holding down the Alt key.

## Tools

### Pages

- ![](/images/TechDraw_PageDefault.svg) [Insert Default Page](/TechDraw_PageDefault "TechDraw PageDefault"): adds a new page using the default [template](/TechDraw_Templates "TechDraw Templates").

- ![](/images/TechDraw_PageTemplate.svg) [Insert Page using Template](/TechDraw_PageTemplate "TechDraw PageTemplate"): adds a new page using a selected [template](/TechDraw_Templates "TechDraw Templates").

- ![](/images/TechDraw_FillTemplateFields.svg) [Update template fields](/TechDraw_FillTemplateFields "TechDraw FillTemplateFields"): [introduced in 1.0](/Release_notes_1.0 "Release notes 1.0")

- ![](/images/TechDraw_RedrawPage.svg) [Redraw Page](/TechDraw_RedrawPage "TechDraw RedrawPage"): forces an update of the selected page.

- ![](/images/TechDraw_PrintAll.svg) [Print All Pages](/TechDraw_PrintAll "TechDraw PrintAll"): prints all pages in a document. [introduced in 0.21](/Release_notes_0.21 "Release notes 0.21")

- ![](/images/TechDraw_ExportPageSVG.svg) [Export Page as SVG](/TechDraw_ExportPageSVG "TechDraw ExportPageSVG"): saves the current page as [SVG](/SVG "SVG") file.

- ![](/images/TechDraw_ExportPageDXF.svg) [Export Page as DXF](/TechDraw_ExportPageDXF "TechDraw ExportPageDXF"): saves the current page as [DXF](/DXF "DXF") file.

### Views

#### TechDraw views

- ![](/images/TechDraw_View.svg) [Insert View](/TechDraw_View "TechDraw View"): adds a representation of one or more objects. [introduced in 1.0](/Release_notes_1.0 "Release notes 1.0"): It can create a single view, a [Projection Group](/TechDraw_ProjectionGroup "TechDraw ProjectionGroup"), a [Spreadsheet View](/TechDraw_SpreadsheetView "TechDraw SpreadsheetView"), an [Arch View](/TechDraw_ArchView "TechDraw ArchView"), a [Symbol](/TechDraw_Symbol "TechDraw Symbol") or an [Image View](/TechDraw_Image "TechDraw Image").

- ![](/images/TechDraw_BrokenView.svg) [Insert Broken View](/TechDraw_BrokenView "TechDraw BrokenView"): adds a broken view of one or more objects. [introduced in 1.0](/Release_notes_1.0 "Release notes 1.0")

- ![](/images/TechDraw_SectionView.svg) [Insert Section View](/TechDraw_SectionView "TechDraw SectionView"): inserts a cross-section view of an existing view.

- ![](/images/TechDraw_ComplexSection.svg) [Insert Complex Section View](/TechDraw_ComplexSection "TechDraw ComplexSection"): inserts a cross-section view of an existing view based on a profile. [introduced in 0.21](/Release_notes_0.21 "Release notes 0.21")

- ![](/images/TechDraw_DetailView.svg) [Insert Detail View](/TechDraw_DetailView "TechDraw DetailView"): inserts a detail view of a portion of an existing view.

- ![](/images/TechDraw_ProjectionGroup.svg) [Insert Projection Group](/TechDraw_ProjectionGroup "TechDraw ProjectionGroup"): invokes a dialog to create multiple views of an object from different directions. [introduced in 1.0](/Release_notes_1.0 "Release notes 1.0"): The [Insert View](/TechDraw_View "TechDraw View") tool can be used instead.

- ![](/images/TechDraw_ClipGroup.svg) [Insert Clip Group](/TechDraw_ClipGroup "TechDraw ClipGroup"): inserts a clip group.

- ![](/images/TechDraw_Symbol.svg) [Insert SVG Symbol](/TechDraw_Symbol "TechDraw Symbol"): inserts a symbol from a [SVG](/SVG "SVG") file into a page. [introduced in 1.0](/Release_notes_1.0 "Release notes 1.0"): The [Insert View](/TechDraw_View "TechDraw View") tool can be used instead.

- ![](/images/TechDraw_Image.svg) [Insert Bitmap Image](/TechDraw_Image "TechDraw Image"): inserts a PNG or JPG [bitmap](/Bitmap "Bitmap") image into a page. [introduced in 1.0](/Release_notes_1.0 "Release notes 1.0"): The [Insert View](/TechDraw_View "TechDraw View") tool can be used instead.

- ![](/images/TechDraw_ShareView.svg) [Share View](/TechDraw_ShareView "TechDraw ShareView"): shares a view between multiple pages.

- ![](/images/TechDraw_ToggleFrame.svg) [Turn View Frames On/Off](/TechDraw_ToggleFrame "TechDraw ToggleFrame"): turns on/off frames and labels surrounding a view.

- ![](/images/TechDraw_ProjectShape.svg) [Project Shape](/TechDraw_ProjectShape "TechDraw ProjectShape"): creates projections of shapes in the [3D view](/3D_view "3D view").

#### Views from other workbenches

- ![](/images/TechDraw_ActiveView.svg) [Insert Active View](/TechDraw_ActiveView "TechDraw ActiveView"): inserts a view of the active 3D view.

- ![](/images/TechDraw_DraftView.svg) [Insert Draft Workbench Object](/TechDraw_DraftView "TechDraw DraftView"): inserts a view of a [Draft Workbench](/Draft_Workbench "Draft Workbench") object.

- ![](/images/TechDraw_ArchView.svg) [Insert BIM Workbench Object](/TechDraw_ArchView "TechDraw ArchView"): inserts a view of a [BIM Workbench](/BIM_Workbench "BIM Workbench") [Arch Section Plane](/Arch_SectionPlane "Arch SectionPlane") object. [introduced in 1.0](/Release_notes_1.0 "Release notes 1.0"): The [Insert View](/TechDraw_View "TechDraw View") tool can be used instead.

- ![](/images/TechDraw_SpreadsheetView.svg) [Insert Spreadsheet View](/TechDraw_SpreadsheetView "TechDraw SpreadsheetView"): inserts a view of a [Spreadsheet Workbench](/Spreadsheet_Workbench "Spreadsheet Workbench") sheet. [introduced in 1.0](/Release_notes_1.0 "Release notes 1.0"): The [Insert View](/TechDraw_View "TechDraw View") tool can be used instead.

### Stacking

These are tools for changing the stacking order which controls the apparent depth of views on a page.

- ![](/images/TechDraw_StackTop.svg)![](/images/Toolbar_flyout_arrow_blue_background.svg) Adjust Stacking Order:

- ![](/images/TechDraw_StackTop.svg) [Move view to top of stack](/TechDraw_StackTop "TechDraw StackTop"): moves views to the top of the stacking order. [introduced in 0.21](/Release_notes_0.21 "Release notes 0.21")

- ![](/images/TechDraw_StackBottom.svg) [Move view to bottom of stack](/TechDraw_StackBottom "TechDraw StackBottom"): moves views to the bottom of the stacking order. [introduced in 0.21](/Release_notes_0.21 "Release notes 0.21")

- ![](/images/TechDraw_StackUp.svg) [Move view up one level](/TechDraw_StackUp "TechDraw StackUp"): moves views up one level in the stacking order. [introduced in 0.21](/Release_notes_0.21 "Release notes 0.21")

- ![](/images/TechDraw_StackDown.svg) [Move view down one level](/TechDraw_StackDown "TechDraw StackDown"): moves views down one level in the stacking order. [introduced in 0.21](/Release_notes_0.21 "Release notes 0.21")

### Dimensions

- ![](/images/TechDraw_Dimension.svg)![](/images/Toolbar_flyout_arrow_blue_background.svg) Dimensions:

- ![](/images/TechDraw_Dimension.svg) [Insert Dimension](/TechDraw_Dimension "TechDraw Dimension"): adds a contextual dimension. [introduced in 1.0](/Release_notes_1.0 "Release notes 1.0")

- ![](/images/TechDraw_LengthDimension.svg) [Insert Length Dimension](/TechDraw_LengthDimension "TechDraw LengthDimension"): adds a length dimension.

- ![](/images/TechDraw_HorizontalDimension.svg) [Insert Horizontal Dimension](/TechDraw_HorizontalDimension "TechDraw HorizontalDimension"): adds a horizontal length dimension.

- ![](/images/TechDraw_VerticalDimension.svg) [Insert Vertical Dimension](/TechDraw_VerticalDimension "TechDraw VerticalDimension"): adds a vertical length dimension.

- ![](/images/TechDraw_RadiusDimension.svg) [Insert Radius Dimension](/TechDraw_RadiusDimension "TechDraw RadiusDimension"): adds a radius dimension to a circle or circular arc.

- ![](/images/TechDraw_DiameterDimension.svg) [Insert Diameter Dimension](/TechDraw_DiameterDimension "TechDraw DiameterDimension"): adds a diameter dimension to a circle or a circular arc.

- ![](/images/TechDraw_AngleDimension.svg) [Insert Angle Dimension](/TechDraw_AngleDimension "TechDraw AngleDimension"): adds an angle dimension between two straight edges.

- ![](/images/TechDraw_3PtAngleDimension.svg) [Insert 3-Point Angle Dimension](/TechDraw_3PtAngleDimension "TechDraw 3PtAngleDimension"): adds an angle dimension using three vertices.

- ![](/images/TechDraw_AreaDimension.svg) [Insert Area Annotation](/TechDraw_AreaDimension "TechDraw AreaDimension"): adds an area dimension to a face. [introduced in 1.0](/Release_notes_1.0 "Release notes 1.0")

- ![](/images/TechDraw_ExtensionCreateLengthArc.svg) [Create Arc Length Dimension](/TechDraw_ExtensionCreateLengthArc "TechDraw ExtensionCreateLengthArc"): creates an arc length dimension.

- ![](/images/TechDraw_HorizontalExtentDimension.svg) [Insert Horizontal Extent Dimension](/TechDraw_HorizontalExtentDimension "TechDraw HorizontalExtentDimension"): adds a horizontal extent dimension.

- ![](/images/TechDraw_VerticalExtentDimension.svg) [Insert Vertical Extent Dimension](/TechDraw_VerticalExtentDimension "TechDraw VerticalExtentDimension"): adds a vertical extent dimension.

- ![](/images/TechDraw_ExtensionCreateHorizChainDimension.svg) [Create Horizontal Chain Dimensions](/TechDraw_ExtensionCreateHorizChainDimension "TechDraw ExtensionCreateHorizChainDimension"): creates a sequence of aligned horizontal dimensions.

- ![](/images/TechDraw_ExtensionCreateVertChainDimension.svg) [Create Vertical Chain Dimensions](/TechDraw_ExtensionCreateVertChainDimension "TechDraw ExtensionCreateVertChainDimension"): creates a sequence of aligned vertical dimensions.

- ![](/images/TechDraw_ExtensionCreateObliqueChainDimension.svg) [Create Oblique Chain Dimensions](/TechDraw_ExtensionCreateObliqueChainDimension "TechDraw ExtensionCreateObliqueChainDimension"): creates a sequence of aligned oblique dimensions.

- ![](/images/TechDraw_ExtensionCreateHorizCoordDimension.svg) [Create Horizontal Coordinate Dimensions](/TechDraw_ExtensionCreateHorizCoordDimension "TechDraw ExtensionCreateHorizCoordDimension"): creates multiple evenly spaced horizontal dimensions starting from the same baseline.

- ![](/images/TechDraw_ExtensionCreateVertCoordDimension.svg) [Create Vertical Coordinate Dimensions](/TechDraw_ExtensionCreateVertCoordDimension "TechDraw ExtensionCreateVertCoordDimension"): creates multiple evenly spaced vertical dimensions starting from the same baseline.

- ![](/images/TechDraw_ExtensionCreateObliqueCoordDimension.svg) [Create Oblique Coordinate Dimensions](/TechDraw_ExtensionCreateObliqueCoordDimension "TechDraw ExtensionCreateObliqueCoordDimension"): creates multiple evenly spaced oblique dimensions starting from the same baseline.

- ![](/images/TechDraw_ExtensionCreateHorizChamferDimension.svg) [Create Horizontal Chamfer Dimension](/TechDraw_ExtensionCreateHorizChamferDimension "TechDraw ExtensionCreateHorizChamferDimension"): creates a horizontal size and angle dimension for a chamfer.

- ![](/images/TechDraw_ExtensionCreateVertChamferDimension.svg) [Create Vertical Chamfer Dimension](/TechDraw_ExtensionCreateVertChamferDimension "TechDraw ExtensionCreateVertChamferDimension"): creates a vertical size and angle dimension for a chamfer.

- ![](/images/TechDraw_Balloon.svg) [Insert Balloon Annotation](/TechDraw_Balloon "TechDraw Balloon"): adds a "balloon" annotation to a page.

- ![](/images/TechDraw_AxoLengthDimension.svg) [Insert Axonometric Length Dimension](/TechDraw_AxoLengthDimension "TechDraw AxoLengthDimension"): adds an axonometric length dimension. [introduced in 0.21](/Release_notes_0.21 "Release notes 0.21")

- ![](/images/TechDraw_LandmarkDimension.svg) [Insert Landmark Dimension - EXPERIMENTAL](/TechDraw_LandmarkDimension "TechDraw LandmarkDimension"): adds a landmark distance dimension.

- ![](/images/TechDraw_DimensionRepair.svg) [Dimension Repair](/TechDraw_DimensionRepair "TechDraw DimensionRepair"): can adjust the 2D or 3D geometry references of a dimension. [introduced in 0.21](/Release_notes_0.21 "Release notes 0.21")

- ![](/images/TechDraw_LinkDimension.svg) [Link Dimension to 3D Geometry](/TechDraw_LinkDimension "TechDraw LinkDimension"): links an existing dimension to the 3D geometry (deprecated).

### Hatching

- ![](/images/TechDraw_Hatch.svg) [Hatch Face using Image File](/TechDraw_Hatch "TechDraw Hatch"): applies a hatch pattern from a file to a face.

- ![](/images/TechDraw_GeometricHatch.svg) [Apply Geometric Hatch to Face](/TechDraw_GeometricHatch "TechDraw GeometricHatch"): applies a hatch pattern to a face using an Autodesk PAT specification.

### Annotations

- ![](/images/TechDraw_Annotation.svg) [Insert Annotation](/TechDraw_Annotation "TechDraw Annotation"): adds a plain text block as annotation.

- ![](/images/TechDraw_LeaderLine.svg) [Add Leaderline to View](/TechDraw_LeaderLine "TechDraw LeaderLine"): adds a leaderline to a view.

- ![](/images/TechDraw_RichTextAnnotation.svg) [Insert Rich Text Annotation](/TechDraw_RichTextAnnotation "TechDraw RichTextAnnotation"): adds an rich text block as annotation to a leaderline or a view.

- ![](/images/TechDraw_CosmeticVertex.svg)![](/images/Toolbar_flyout_arrow_blue_background.svg) Add Cosmetic Vertices:

- ![](/images/TechDraw_CosmeticVertex.svg) [Add Cosmetic Vertex](/TechDraw_CosmeticVertex "TechDraw CosmeticVertex"): adds a Vertex which is not part of the source geometry.

- ![](/images/TechDraw_Midpoints.svg) [Add Midpoint Vertices](/TechDraw_Midpoints "TechDraw Midpoints"): adds Cosmetic Vertices at midpoints of selected edges.

- ![](/images/TechDraw_Quadrants.svg) [Add Quadrant Vertices](/TechDraw_Quadrants "TechDraw Quadrants"): adds Cosmetic Vertices at quarter points of selected (circular) edges.

- ![](/images/TechDraw_FaceCenterLine.svg)![](/images/Toolbar_flyout_arrow_blue_background.svg) Add Centerlines:

- ![](/images/TechDraw_FaceCenterLine.svg) [Add Centerline to Faces](/TechDraw_FaceCenterLine "TechDraw FaceCenterLine"): adds a centerline to selected face(s).

- ![](/images/TechDraw_2LineCenterLine.svg) [Add Centerline between 2 Lines](/TechDraw_2LineCenterLine "TechDraw 2LineCenterLine"): adds a centerline between 2 lines.

- ![](/images/TechDraw_2PointCenterLine.svg) [Add Centerline between 2 Points](/TechDraw_2PointCenterLine "TechDraw 2PointCenterLine"): adds a centerline between 2 points.

- ![](/images/TechDraw_2PointCosmeticLine.svg) [Add Cosmetic Line Through 2 points](/TechDraw_2PointCosmeticLine "TechDraw 2PointCosmeticLine"): adds a cosmetic line connecting 2 vertices.

- ![](/images/TechDraw_CosmeticCircle.svg) [Add Cosmetic Circle](/TechDraw_CosmeticCircle "TechDraw CosmeticCircle"): adds a cosmetic circle. [introduced in 1.0](/Release_notes_1.0 "Release notes 1.0")

- ![](/images/TechDraw_DecorateLine.svg) [Change Appearance of Lines](/TechDraw_DecorateLine "TechDraw DecorateLine"): changes the appearance of selected line(s).

- ![](/images/TechDraw_ShowAll.svg) [Show/Hide Invisible Edges](/TechDraw_ShowAll "TechDraw ShowAll"): shows/hides invisible lines/edges in a view.

- ![](/images/TechDraw_WeldSymbol.svg) [Add Welding Information to Leader](/TechDraw_WeldSymbol "TechDraw WeldSymbol"): adds welding specifications to an existing leaderline.

- ![](/images/TechDraw_SurfaceFinishSymbols.svg) [Add Surface Finish Symbol](/TechDraw_SurfaceFinishSymbols "TechDraw SurfaceFinishSymbols"): adds a surface finish symbol to a page. [introduced in 0.21](/Release_notes_0.21 "Release notes 0.21")

- ![](/images/TechDraw_HoleShaftFit.svg) [Add Hole/Shaft Fit](/TechDraw_HoleShaftFit "TechDraw HoleShaftFit"): adds hole or shaft tolerances using ISO 286 to a dimension. [introduced in 0.21](/Release_notes_0.21 "Release notes 0.21")

### Extensions

#### Attributes and modifications

- ![](/images/TechDraw_ExtensionSelectLineAttributes.svg) [Select Line Attributes, Cascade Spacing and Delta Distance](/TechDraw_ExtensionSelectLineAttributes "TechDraw ExtensionSelectLineAttributes"): selects the attributes (style, width and color) for new cosmetic lines and centerlines, and specifies the cascade spacing and delta distance.

- ![](/images/TechDraw_ExtensionChangeLineAttributes.svg) [Change Line Attributes](/TechDraw_ExtensionChangeLineAttributes "TechDraw ExtensionChangeLineAttributes"): changes the attributes (style, width and color) of cosmetic lines and centerlines.

- ![](/images/TechDraw_ExtensionExtendLine.svg)![](/images/Toolbar_flyout_arrow_blue_background.svg) Change Length of Cosmetic Lines or Centerlines:

- ![](/images/TechDraw_ExtensionExtendLine.svg) [Extend Line](/TechDraw_ExtensionExtendLine "TechDraw ExtensionExtendLine"): extends a cosmetic line or centerline at both ends.

- ![](/images/TechDraw_ExtensionShortenLine.svg) [Shorten Line](/TechDraw_ExtensionShortenLine "TechDraw ExtensionShortenLine"): shortens a cosmetic line or centerline at both ends.

- ![](/images/TechDraw_ExtensionLockUnlockView.svg) [Lock/Unlock View](/TechDraw_ExtensionLockUnlockView "TechDraw ExtensionLockUnlockView"): locks or unlocks the position of a view.

- ![](/images/TechDraw_ExtensionPositionSectionView.svg) [Position Section View](/TechDraw_ExtensionPositionSectionView "TechDraw ExtensionPositionSectionView"): orthogonally aligns a section view with its source view.

- ![](/images/TechDraw_ExtensionPosHorizChainDimension.svg)![](/images/Toolbar_flyout_arrow_blue_background.svg) Align Dimensions:

- ![](/images/TechDraw_ExtensionPosHorizChainDimension.svg) [Position Horizontal Chain Dimensions](/TechDraw_ExtensionPosHorizChainDimension "TechDraw ExtensionPosHorizChainDimension"): aligns horizontal dimensions to create a chain dimension.

- ![](/images/TechDraw_ExtensionPosVertChainDimension.svg) [Position Vertical Chain Dimensions](/TechDraw_ExtensionPosVertChainDimension "TechDraw ExtensionPosVertChainDimension"): aligns vertical dimensions to create a chain dimension.

- ![](/images/TechDraw_ExtensionPosObliqueChainDimension.svg) [Position Oblique Chain Dimensions](/TechDraw_ExtensionPosObliqueChainDimension "TechDraw ExtensionPosObliqueChainDimension"): aligns oblique dimensions to create a chain dimension.

- ![](/images/TechDraw_ExtensionCascadeHorizDimension.svg)![](/images/Toolbar_flyout_arrow_blue_background.svg) Evenly Space Dimensions:

- ![](/images/TechDraw_ExtensionCascadeHorizDimension.svg) [Cascade Horizontal Dimensions](/TechDraw_ExtensionCascadeHorizDimension "TechDraw ExtensionCascadeHorizDimension"): evenly spaces horizontal dimensions.

- ![](/images/TechDraw_ExtensionCascadeVertDimension.svg) [Cascade Vertical Dimensions](/TechDraw_ExtensionCascadeVertDimension "TechDraw ExtensionCascadeVertDimension"): evenly spaces vertical dimensions.

- ![](/images/TechDraw_ExtensionCascadeObliqueDimension.svg) [Cascade Oblique Dimensions](/TechDraw_ExtensionCascadeObliqueDimension "TechDraw ExtensionCascadeObliqueDimension"): evenly spaces oblique dimensions.

- ![](/images/TechDraw_ExtensionAreaAnnotation.svg) [Calculate the area of selected faces](/TechDraw_ExtensionAreaAnnotation "TechDraw ExtensionAreaAnnotation"): calculates the area of selected faces and inserts an area annotation.

- ![](/images/TechDraw_ExtensionArcLengthAnnotation.svg) [Calculate the arc length of selected edges](/TechDraw_ExtensionArcLengthAnnotation "TechDraw ExtensionArcLengthAnnotation"): calculates the arc length of selected edges and inserts an arc length annotation. [introduced in 1.0](/Release_notes_1.0 "Release notes 1.0")

- ![](/images/TechDraw_ExtensionCustomizeFormat.svg) [Customize format label](/TechDraw_ExtensionCustomizeFormat "TechDraw ExtensionCustomizeFormat"): customizes the formatting of a balloon text or dimension text. GD&T symbols and other special character can be added.

#### Centerlines and threading

- ![](/images/TechDraw_ExtensionCircleCenterLines.svg)![](/images/Toolbar_flyout_arrow_blue_background.svg) Add Centerlines:

- ![](/images/TechDraw_ExtensionCircleCenterLines.svg) [Add Circle Centerlines](/TechDraw_ExtensionCircleCenterLines "TechDraw ExtensionCircleCenterLines"): adds centerlines to circles and arcs.

- ![](/images/TechDraw_ExtensionHoleCircle.svg) [Add Bolt Circle Centerlines](/TechDraw_ExtensionHoleCircle "TechDraw ExtensionHoleCircle"): adds centerlines to a circular pattern of circles.

- ![](/images/TechDraw_ExtensionThreadHoleSide.svg)![](/images/Toolbar_flyout_arrow_blue_background.svg) Add Cosmetic Threads:

- ![](/images/TechDraw_ExtensionThreadHoleSide.svg) [Add Cosmetic Thread Hole Side View](/TechDraw_ExtensionThreadHoleSide "TechDraw ExtensionThreadHoleSide"): adds a cosmetic thread to the side view of a hole.

- ![](/images/TechDraw_ExtensionThreadHoleBottom.svg) [Add Cosmetic Thread Hole Bottom View](/TechDraw_ExtensionThreadHoleBottom "TechDraw ExtensionThreadHoleBottom"): adds a cosmetic thread to the top or bottom view of holes.

- ![](/images/TechDraw_ExtensionThreadBoltSide.svg) [Add Cosmetic Thread Bolt Side View](/TechDraw_ExtensionThreadBoltSide "TechDraw ExtensionThreadBoltSide"): adds a cosmetic thread to the side view of a bolt/screw/rod.

- ![](/images/TechDraw_ExtensionThreadBoltBottom.svg) [Add Cosmetic Thread Bolt Bottom View](/TechDraw_ExtensionThreadBoltBottom "TechDraw ExtensionThreadBoltBottom"): adds a cosmetic thread to the top or bottom view of bolts/screws/rods.

- ![](/images/TechDraw_ExtensionVertexAtIntersection.svg)![](/images/Toolbar_flyout_arrow_blue_background.svg) Add Vertexes:

- ![](/images/TechDraw_ExtensionVertexAtIntersection.svg) [Add Cosmetic Intersection Vertex(es)](/TechDraw_ExtensionVertexAtIntersection "TechDraw ExtensionVertexAtIntersection"): adds cosmetic vertex(es) at the intersection(s) of selected edges.

- ![](/images/TechDraw_CommandAddOffsetVertex.svg) [Add an offset vertex](/TechDraw_CommandAddOffsetVertex "TechDraw CommandAddOffsetVertex"): adds a cosmetic vertex at a specified offset from a selected vertex. [introduced in 1.0](/Release_notes_1.0 "Release notes 1.0")

- ![](/images/TechDraw_ExtensionDrawCosmCircle.svg)![](/images/Toolbar_flyout_arrow_blue_background.svg) Add Cosmetic Circles or Arcs:

- ![](/images/TechDraw_ExtensionDrawCosmCircle.svg) [Add Cosmetic Circle](/TechDraw_ExtensionDrawCosmCircle "TechDraw ExtensionDrawCosmCircle"): adds a cosmetic circle based on two vertexes.

- ![](/images/TechDraw_ExtensionDrawCosmArc.svg) [Add Cosmetic Arc](/TechDraw_ExtensionDrawCosmArc "TechDraw ExtensionDrawCosmArc"): adds a cosmetic counter clockwise arc based on three vertexes.

- ![](/images/TechDraw_ExtensionDrawCosmCircle3Points.svg) [Add Cosmetic Circle 3 Points](/TechDraw_ExtensionDrawCosmCircle3Points "TechDraw ExtensionDrawCosmCircle3Points"): adds a cosmetic circle based on three vertexes.

- ![](/images/TechDraw_ExtensionLineParallel.svg)![](/images/Toolbar_flyout_arrow_blue_background.svg) Add Cosmetic Parallel or Perpendicular Lines:

- ![](/images/TechDraw_ExtensionLineParallel.svg) [Add Cosmetic Parallel Line](/TechDraw_ExtensionLineParallel "TechDraw ExtensionLineParallel"): adds a cosmetic line parallel to another line through a vertex.

- ![](/images/TechDraw_ExtensionLinePerpendicular.svg) [Add Cosmetic Perpendicular Line](/TechDraw_ExtensionLinePerpendicular "TechDraw ExtensionLinePerpendicular"): adds a cosmetic line perpendicular to another line through a vertex.

#### Dimensions

Several of the Extensions dimension tools are listed under [Dimensions](#Dimensions) above.

- ![](/images/TechDraw_ExtensionInsertDiameter.svg)![](/images/Toolbar_flyout_arrow_blue_background.svg) Insert Prefix:

- ![](/images/TechDraw_ExtensionInsertDiameter.svg) [Insert '⌀' Prefix](/TechDraw_ExtensionInsertDiameter "TechDraw ExtensionInsertDiameter"): inserts a '⌀' symbol at the beginning of the dimension text.

- ![](/images/TechDraw_ExtensionInsertSquare.svg) [Insert '□' Prefix](/TechDraw_ExtensionInsertSquare "TechDraw ExtensionInsertSquare"): inserts a '□' symbol at the beginning of the dimension text.

- ![](/images/TechDraw_ExtensionInsertRepetition.svg) [Insert 'n×' Prefix](/TechDraw_ExtensionInsertRepetition "TechDraw ExtensionInsertRepetition"): inserts a repeated feature count at the beginning of the dimension text. [introduced in 1.0](/Release_notes_1.0 "Release notes 1.0")

- ![](/images/TechDraw_ExtensionRemovePrefixChar.svg) [Remove Prefix](/TechDraw_ExtensionRemovePrefixChar "TechDraw ExtensionRemovePrefixChar"): removes all symbols at the beginning of the dimension text.

- ![](/images/TechDraw_ExtensionIncreaseDecimal.svg)![](/images/Toolbar_flyout_arrow_blue_background.svg) Change Decimal Places:

- ![](/images/TechDraw_ExtensionIncreaseDecimal.svg) [Increase Decimal Places](/TechDraw_ExtensionIncreaseDecimal "TechDraw ExtensionIncreaseDecimal"): increases the number of decimal places of the dimension text.

- ![](/images/TechDraw_ExtensionDecreaseDecimal.svg) [Decrease Decimal Places](/TechDraw_ExtensionDecreaseDecimal "TechDraw ExtensionDecreaseDecimal"): decreases the number of decimal places of the dimension text.

### Miscellaneous

- ![](/images/TechDraw_CosmeticEraser.svg) [Remove Cosmetic Object](/TechDraw_CosmeticEraser "TechDraw CosmeticEraser"): removes cosmetic objects from a page.

### Obsolete tools

- ![](/images/TechDraw_ClipGroupAdd.svg) [Add View to Clip Group](/TechDraw_ClipGroupAdd "TechDraw ClipGroupAdd"): adds an existing view to a clip group. Not available in 1.0 and above.

- ![](/images/TechDraw_ClipGroupRemove.svg) [Remove View from Clip Group](/TechDraw_ClipGroupRemove "TechDraw ClipGroupRemove"): removes a view from a clip group. Not available in 1.0 and above.

- ![](/images/TechDraw_MoveView.svg) [Move View](/TechDraw_MoveView "TechDraw MoveView"): moves a view and its dependents to a different page. Not available in 1.0 and above.

## Additional features

- [Line Groups](/TechDraw_LineGroup "TechDraw LineGroup"): to control the appearance of various types of lines.
- [Templates](/TechDraw_Templates "TechDraw Templates"): the default templates defined for the drawing pages.
- [Hatching](/TechDraw_Hatching "TechDraw Hatching"): explanation of the different hatching techniques.
- [Geometric dimensioning and tolerancing](/TechDraw_Geometric_dimensioning_and_tolerancing "TechDraw Geometric dimensioning and tolerancing"): explanation on how to achieve geometric dimensioning and tolerancing.

## Preferences

- ![](/images/Preferences-techdraw.svg) [Preferences](/TechDraw_Preferences "TechDraw Preferences"): preferences for the default values of the drawing page such as projection angle, colors, text sizes, and line styles.

## Scripting

The TechDraw tools can be used in [macros](/Macros "Macros") and from the [Python](/Python "Python") console. For more information see:

- [Autogenerated API documentation](https://freecad.github.io/SourceDoc/)
- [FreeCAD Scripting Basics](/FreeCAD_Scripting_Basics "FreeCAD Scripting Basics")
- [Editable Text Fields](/TechDraw_PageDefault#Editable_text_fields "TechDraw PageDefault")

## Limitations

- Do not cut, copy and paste TechDraw objects in the [Tree view](/Tree_view "Tree view") as this generally does not work out well.
- Do not drag TechDraw objects in the [Tree view](/Tree_view "Tree view") with the mouse.

## Tutorials

- [Basic TechDraw Tutorial](/Basic_TechDraw_Tutorial "Basic TechDraw Tutorial"): introduction to creating drawings with the TechDraw Workbench.
- [Creating a new template](/TechDraw_TemplateHowTo "TechDraw TemplateHowTo"): instructions to create a new page template in Inkscape for using with the TechDraw Workbench.
- [TechDraw TemplateGenerator](/TechDraw_TemplateGenerator "TechDraw TemplateGenerator"): instructions to create a macro for generating a basic template.

: A "few" added lines of code result in a tool like the [Macro TemplateHelper](/Macro_TemplateHelper "Macro TemplateHelper").

- [Measurement Of Angles On Holes](/Measurement_Of_Angles_On_Holes "Measurement Of Angles On Holes"): instructions for adding centerlines and subsequent angle representations on holes.
- [Miscellaneous](/TechDraw_HowTo_Page "TechDraw HowTo Page"): instructions for different settings like center marks, etc.
- [TechDraw Pitch Circle Tutorial](/TechDraw_Pitch_Circle_Tutorial "TechDraw Pitch Circle Tutorial"): instructions for adding a pitch circle.

Video tutorials by sliptonic

- TechDraw Workbench [Part 1 (Basics)](https://www.youtube.com/watch?v=7LbOmSGW9F0), [Part 2 (Dimensions)](https://www.youtube.com/watch?v=z3w84RfvqaE), [Part 3 (Multiview)](https://www.youtube.com/watch?v=uNjXg-m38aI)
- TechDraw Workbench [Part 4 (Section and Detail)](https://www.youtube.com/watch?v=3zSdeFV6I5o), [Part 5 (Customizing Templates)](https://www.youtube.com/watch?v=kcmdJ7xa7gg)

## Development

Do you want to know about the future of the TechDraw Workbench? Visit [the TechDraw Roadmap Page](/TechDraw_Roadmap "TechDraw Roadmap") to learn more.

Retrieved from "<http://wiki.freecad.org/index.php?title=TechDraw_Workbench/zh-tw&oldid=1492932>"
