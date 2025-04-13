---
title: Atelierul TechDraw (Desen Tehnic)
---

![](/images/Workbench_TechDraw.svg)

TechDraw workbench icon

## Introducere

Tehnologia [TechDraw Workbench](/TechDraw_Workbench "TechDraw Workbench") este utilizată pentru a produce desene tehnice de bază de la modele 3D create cu un alt atelier de lucru, cum ar fi [Part](/Part_Workbench "Part Workbench"), [PartDesign](/PartDesign_Workbench "PartDesign Workbench"), sau [Arch](/Arch_Workbench "Arch Workbench"),sau importate din alte aplicații. Fiecare desen este o pagină care poate conține diferite Vizualizări ale obiectelor trasabile cum ar fi Part::Features, PartDesign::Bodies, App::Part groups, și Document Object groups. Desenele rezultate pot fi folosite pentru lucruri precum documentație, instrucțiunile de fabricație, contracte, permise etc.

La pagină pot fi adăugate simboluri, secțiuni, suprafețe hașurate, adnotări și simboluri [SVG](/SVG "SVG"), care pot fi exportate în continuare în diferite formate ca [DXF](/DXF "DXF"), [SVG](/SVG "SVG") și [PDF](/PDF "PDF").

FreeCAD este în primul rând o aplicație de modelare 3D și, prin urmare, nu are multe instrumente de desenare 2D, care sunt incluse în cea mai mare parte în [Draft](/Draft_Workbench "Draft Workbench") și [Sketcher Workbench](/Sketcher_Workbench "Sketcher Workbench"). Dacă obiectivul dvs. principal constă în realizarea de desene complexe 2D și [DXF](/DXF "DXF") și nu aveți nevoie de modelare 3D, vă recomandăm să luați în considerare un program software dedicat pentru redactarea tehnică, cum ar fi [https: //en.wikipedia .org / wiki / LibreCAD LibreCAD], [QCad](https://en.wikipedia.org/wiki/QCad), TurboCad și altele.

![](/images/TechDraw_Workbench_Example.png)

## Snapping

[introduced in 1.0](/Release_notes_1.0 "Release notes 1.0"): The TechDraw Workbench has a snapping feature. It can be used to automatically align views, section views and dimensions when positioning them by dragging with the mouse. With **Snap View Alignment** enabled (default) in the [preferences](/TechDraw_Preferences#Snapping "TechDraw Preferences"), views will snap to alignment with other views when close enough (**View Snapping Factor** setting). Dimensions are also snapped to other parallel dimensions and the dimension text can be snapped to the middle of the dimension line. Snapping can be temporarily disabled by holding down the Alt key.

## Tools

## Pagini

- ![](/images/TechDraw_PageDefault.svg) [Insert Default Page](/TechDraw_PageDefault "TechDraw PageDefault"): adaugă o nouă pagină utilizând [template](/TechDraw_Templates "TechDraw Templates") implicit.

- ![](/images/TechDraw_PageTemplate.svg) [Insert Page using Template](/TechDraw_PageTemplate "TechDraw PageTemplate"): Adaugă o nouă pagină utilizând o selecție [template](/TechDraw_Templates "TechDraw Templates").

- ![](/images/TechDraw_FillTemplateFields.svg) [Update template fields](/TechDraw_FillTemplateFields "TechDraw FillTemplateFields"): [introduced in 1.0](/Release_notes_1.0 "Release notes 1.0")

- ![](/images/TechDraw_RedrawPage.svg) [Redraw Page](/TechDraw_RedrawPage "TechDraw RedrawPage"): forces an update of the selected page.

- ![](/images/TechDraw_PrintAll.svg) [Print All Pages](/TechDraw_PrintAll "TechDraw PrintAll"): prints all pages in a document. [introduced in 0.21](/Release_notes_0.21 "Release notes 0.21")

- ![](/images/TechDraw_ExportPageSVG.svg) [Export Page as SVG](/TechDraw_ExportPageSVG "TechDraw ExportPageSVG"): Salvează o pagină ca fișier [SVG](/SVG "SVG").

- ![](/images/TechDraw_ExportPageDXF.svg) [Export Page as DXF](/TechDraw_ExportPageDXF "TechDraw ExportPageDXF"): saves the current page as [DXF](/DXF "DXF") file.

## Vederi

#### TechDraw views

- ![](/images/TechDraw_View.svg) [New View](/TechDraw_View/ro "TechDraw View/ro"): adaugă o vedere de proiecție 2D a unui obiect.

- ![](/images/TechDraw_BrokenView.svg) [Insert Broken View](/TechDraw_BrokenView "TechDraw BrokenView"): adds a broken view of one or more objects. [introduced in 1.0](/Release_notes_1.0 "Release notes 1.0")

- ![](/images/TechDraw_SectionView.svg) [Insert Section View](/TechDraw_SectionView "TechDraw SectionView"): adaugă o vedere în secțiune transversală într-o vizualizarea existentă deja.

- ![](/images/TechDraw_ComplexSection.svg) [Insert Complex Section View](/TechDraw_ComplexSection "TechDraw ComplexSection"): inserts a cross-section view of an existing view based on a profile. [introduced in 0.21](/Release_notes_0.21 "Release notes 0.21")

- ![](/images/TechDraw_DetailView.svg) [Insert Detail View](/TechDraw_DetailView "TechDraw DetailView"): adaugă un detaliu vizualizarea unei porțiuni dintr-o vizualizare existentă.

- ![](/images/TechDraw_ProjectionGroup.svg) [Insert Projection Group](/TechDraw_ProjectionGroup "TechDraw ProjectionGroup"): învocă un dialog pentru crearea vederilor multiple din mai multe direcții.

- ![](/images/TechDraw_ClipGroup.svg) [Insert Clip Group](/TechDraw_ClipGroup "TechDraw ClipGroup"): inserează un grup de vederi mascate în secțiune într-o pagină.

- ![](/images/TechDraw_Symbol.svg) [New Symbol](/TechDraw_Symbol "TechDraw Symbol"): inserază un simbol cartezian [SVG](/SVG "SVG") în pagină.

- ![](/images/TechDraw_Image.svg) [New Image](/TechDraw_Image "TechDraw Image"): Inserează o imagine PNG or JPG [bitmap](/Bitmap "Bitmap") în pagină.

- ![](/images/TechDraw_ShareView.svg) [Share View](/TechDraw_ShareView "TechDraw ShareView"): shares a view between multiple pages.

- ![](/images/TechDraw_ToggleFrame.svg) [Turn View Frames On/Off](/TechDraw_ToggleFrame "TechDraw ToggleFrame"): Comuntă on/off cadrele și etichete care înconjoară o pagină.

- ![](/images/TechDraw_ProjectShape.svg) [Project Shape](/TechDraw_ProjectShape "TechDraw ProjectShape"): creates projections of shapes in the [3D view](/3D_view "3D view").

#### Views from other workbenches

- ![](/images/TechDraw_ActiveView.svg) [Insert Active View](/TechDraw_ActiveView "TechDraw ActiveView"): inserts a view of the active 3D view.

- ![](/images/TechDraw_DraftView.svg) [Insert Draft Workbench Object](/TechDraw_DraftView "TechDraw DraftView"): adaugă o vizualizare la un Obiect din Atelierul [Draft Workbench](/Draft_Workbench "Draft Workbench").

- ![](/images/TechDraw_ArchView.svg) [Insert Arch Workbench Object](/TechDraw_ArchView "TechDraw ArchView"): adaugă o vizualizare la un obiect din Atelierul Arhitectură adaugă o vizualizare a [Arch Workbench](/Arch_Workbench "Arch Workbench") [SectionPlane](/Arch_SectionPlane "Arch SectionPlane").

- ![](/images/TechDraw_SpreadsheetView.svg) [Insert Spreadsheet View](/TechDraw_SpreadsheetView "TechDraw SpreadsheetView"): inserează o vizualizare a unei foi de calcul [Spreadsheet Workbench](/Spreadsheet_Workbench "Spreadsheet Workbench") sheet.

### Stacking

These are tools for changing the stacking order which controls the apparent depth of views on a page.

- ![](/images/TechDraw_StackTop.svg)![](/images/Toolbar_flyout_arrow_blue_background.svg) Adjust Stacking Order:

- ![](/images/TechDraw_StackTop.svg) [Move view to top of stack](/TechDraw_StackTop "TechDraw StackTop"): moves views to the top of the stacking order. [introduced in 0.21](/Release_notes_0.21 "Release notes 0.21")

- ![](/images/TechDraw_StackBottom.svg) [Move view to bottom of stack](/TechDraw_StackBottom "TechDraw StackBottom"): moves views to the bottom of the stacking order. [introduced in 0.21](/Release_notes_0.21 "Release notes 0.21")

- ![](/images/TechDraw_StackUp.svg) [Move view up one level](/TechDraw_StackUp "TechDraw StackUp"): moves views up one level in the stacking order. [introduced in 0.21](/Release_notes_0.21 "Release notes 0.21")

- ![](/images/TechDraw_StackDown.svg) [Move view down one level](/TechDraw_StackDown "TechDraw StackDown"): moves views down one level in the stacking order. [introduced in 0.21](/Release_notes_0.21 "Release notes 0.21")

## Cotare

- ![](/images/TechDraw_Dimension.svg)![](/images/Toolbar_flyout_arrow_blue_background.svg) Dimensions:

- ![](/images/TechDraw_Dimension.svg) [Insert Dimension](/TechDraw_Dimension "TechDraw Dimension"): adds a contextual dimension. [introduced in 1.0](/Release_notes_1.0 "Release notes 1.0")

- ![](/images/TechDraw_LengthDimension.svg) [Insert Length Dimension](/TechDraw_LengthDimension "TechDraw LengthDimension"): adaugă o cotă tip lungime.

- ![](/images/TechDraw_HorizontalDimension.svg) [Insert Horizontal Dimension](/TechDraw_HorizontalDimension "TechDraw HorizontalDimension"): adaugă o cotă orizontală tip lungime.

- ![](/images/TechDraw_VerticalDimension.svg) [New Vertical](/TechDraw_VerticalDimension "TechDraw VerticalDimension"): adaugă o cotă tip lungime verticală

- ![](/images/TechDraw_RadiusDimension.svg) [Insert Radius Dimension](/TechDraw_RadiusDimension "TechDraw RadiusDimension"): adaugă o cotă pentru raza unui cerc sau a unui arc de cerc.

- ![](/images/TechDraw_DiameterDimension.svg) [New Diameter](/TechDraw_DiameterDimension "TechDraw DiameterDimension"): adaugă o cotă pentru diametrul unui cerc sau a unui arc de cerc.

- ![](/images/TechDraw_AngleDimension.svg) [Insert Angle Dimension](/TechDraw_AngleDimension "TechDraw AngleDimension"): adaugă o cotă pentru un unghi sau pentru două margini drepte.

- ![](/images/TechDraw_3PtAngleDimension.svg) [Insert 3-Point Angle Dimension](/TechDraw_3PtAngleDimension "TechDraw 3PtAngleDimension"): adaugă o cotă tip dimensiune unghiulară utilizând trei vârfuri.

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

- ![](/images/TechDraw_LinkDimension.svg) [New Links](/TechDraw_LinkDimension "TechDraw LinkDimension"): leagă o cotă existetnă de o formă geometrică 3 D

### Hatching

- ![](/images/TechDraw_Hatch.svg) [Hatch Area](/TechDraw_Hatch "TechDraw Hatch"): aplică un model de hașurare dintr-un fișier, unei fațete

- ![](/images/TechDraw_GeometricHatch.svg) [Apply Geometric Hatch to Face](/TechDraw_GeometricHatch "TechDraw GeometricHatch"): aplică un model de trasură la o față folosind o specificație Autodesk PAT.

### Annotations

- ![](/images/TechDraw_Annotation.svg) [Insert Annotation](/TechDraw_Annotation "TechDraw Annotation"): adaugă un bloc de text care servește ca adnotare

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

- ![](/images/TechDraw_ClipGroupAdd.svg) [ClipPlus](/index.php?title=TechDraw_ClipGroupAdd/ro&action=edit&redlink=1 "TechDraw ClipGroupAdd/ro (page does not exist)"): Adaugă o vedere existentă la un grup mască.

- ![](/images/TechDraw_ClipGroupRemove.svg) [ClipMinus](/index.php?title=ClipGroupRemove/ro&action=edit&redlink=1 "ClipGroupRemove/ro (page does not exist)"): Extrage o vedere dintr-un grup mascat.

- ![](/images/TechDraw_MoveView.svg) [Move View](/TechDraw_MoveView "TechDraw MoveView"): moves a view and its dependents to a different page. Not available in 1.0 and above.

## Caracteristici suplimentare

- [Hatching](/TechDraw_Hatching "TechDraw Hatching"): explică diverse tehnici de hașurare.
- [Line Groups](/TechDraw_LineGroup "TechDraw LineGroup"): Grosimi implicite pot fi asignate diferitor tipuri de linie.
- [Templates](/TechDraw_Templates "TechDraw Templates"): șabloanele implicite definite pentru paginile de desen.

## Preferences

## Setările de elecție

- ![](/images/Preferences-techdraw.svg) [Preferences](/TechDraw_Preferences "TechDraw Preferences"): preferințele pentru valorile implicite ale paginii desenului, cum ar fi unghiul de proiectare, culori, dimensiunile textului și stilurile de linie.

## Scripting

## Script-Programare

Instrumentele TechDraw pot fi utilizate în [macros](/Macros "Macros") și din consola [Python](/Python "Python") utilizând două API-uri.

- [TechDraw API](/TechDraw_API "TechDraw API")
- [TechDrawGui API](/TechDrawGui_API "TechDrawGui API")

## Limitations

- Do not cut, copy and paste TechDraw objects in the [Tree view](/Tree_view "Tree view") as this generally does not work out well.
- Do not drag TechDraw objects in the [Tree view](/Tree_view "Tree view") with the mouse.

## Tutoriale

- [Basic TechDraw Tutorial](/Basic_TechDraw_Tutorial "Basic TechDraw Tutorial"): introducere în crearea de desene cu TechDraw Workbench.
- [Crearea unui nou șablon](/TechDraw_TemplateHowTo "TechDraw TemplateHowTo"): instrucțiuni pentru crearea unui nou șablon de pagină în Inkscape pentru utilizarea cu TechDraw Workbench.

Video tutorials by sliptonic

- TechDraw Workbench [Part 1 (Basics)](https://www.youtube.com/watch?v=7LbOmSGW9F0), [Part 2 (Dimensions)](https://www.youtube.com/watch?v=z3w84RfvqaE), [Part 3 (Multiview)](https://www.youtube.com/watch?v=uNjXg-m38aI)
- TechDraw Workbench [Part 4 (Section and Detail)](https://www.youtube.com/watch?v=3zSdeFV6I5o), [Part 5 (Customizing Templates)](https://www.youtube.com/watch?v=kcmdJ7xa7gg)

## Development

Do you want to know about the future of the TechDraw Workbench? Visit [the TechDraw Roadmap Page](/TechDraw_Roadmap "TechDraw Roadmap") to learn more.

Retrieved from "<http://wiki.freecad.org/index.php?title=TechDraw_Workbench/ro&oldid=1492907>"
