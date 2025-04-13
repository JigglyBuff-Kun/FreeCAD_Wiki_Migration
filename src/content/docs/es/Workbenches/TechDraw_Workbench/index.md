---
title: Módulo DibujoTécnico
---

![](/images/Workbench_TechDraw.svg)

El icono del Ambiente de trabajo Dibujo Técnico

## Introducción

El ![](/images/Workbench_TechDraw.svg) Ambiente de trabajos Croquizador se utiliza para producir dibujos técnicos básicos a partir de modelos 3D creados con otro Ambiente de trabajos como [Part](/Part_Workbench/es "Part Workbench/es"), [PartDesign](/PartDesign_Workbench/es "PartDesign Workbench/es"), o [Arch](/Arch_Workbench/es "Arch Workbench/es"), o importados de otras aplicaciones. Cada dibujo es una Página, que puede contener varias Vistas de objetos dibujables como Part::Características, PartDesign::Cuerpos, App::Grupos de piezas, y Grupos de objetos de documentos. Los dibujos resultantes pueden ser utilizados para cosas como documentación, instrucciones de fabricación, contratos, permisos, etc.

Dimensiones, secciones, áreas sombreadas, anotaciones y [SVG](/SVG/es "SVG/es") símbolos se pueden añadir a la página, que se pueden exportar a diferentes formatos como [DXF](/DXF/es "DXF/es"), [SVG](/SVG/es "SVG/es") y [PDF](/PDF/es "PDF/es").

FreeCAD es principalmente una aplicación de modelado en 3D, y por lo tanto no tiene muchas herramientas de dibujo en 2D, las cuales están incluidas en su mayoría en el [Draft](/Draft_Workbench/es "Draft Workbench/es") y [Ambiente des trabajo
Croquizador](/Sketcher_Workbench/es "Sketcher Workbench/es"). Si su objetivo principal es la producción de complejos dibujos 2D y archivos [DXF](/DXF/es "DXF/es"), y no necesita modelado 3D, puede considerar un programa de software dedicado al dibujo técnico como [LibreCAD](https://en.wikipedia.org/wiki/LibreCAD), [QCad](https://en.wikipedia.org/wiki/QCad), TurboCad, y otros.

![](/images/TechDraw_Workbench_Example.png)

## Snapping

[introduced in 1.0](/Release_notes_1.0 "Release notes 1.0"): The TechDraw Workbench has a snapping feature. It can be used to automatically align views, section views and dimensions when positioning them by dragging with the mouse. With **Snap View Alignment** enabled (default) in the [preferences](/TechDraw_Preferences#Snapping "TechDraw Preferences"), views will snap to alignment with other views when close enough (**View Snapping Factor** setting). Dimensions are also snapped to other parallel dimensions and the dimension text can be snapped to the middle of the dimension line. Snapping can be temporarily disabled by holding down the Alt key.

## Tools

## Páginas

- ![](/images/TechDraw_PageDefault.svg) [Insertar página predeterminada](/TechDraw_PageDefault/es "TechDraw PageDefault/es"): Agrega una nueva página usando el predeterminado [Plantilla](/index.php?title=TechDraw_Templates/es&action=edit&redlink=1 "TechDraw Templates/es (page does not exist)").

- ![](/images/TechDraw_PageTemplate.svg) [Insertar la página usando la plantilla](/TechDraw_PageTemplate/es "TechDraw PageTemplate/es"): Agrega una nueva página usando un seleccionado [Plantilla](/index.php?title=TechDraw_Templates/es&action=edit&redlink=1 "TechDraw Templates/es (page does not exist)").

- ![](/images/TechDraw_FillTemplateFields.svg) [Update template fields](/TechDraw_FillTemplateFields "TechDraw FillTemplateFields"): [introduced in 1.0](/Release_notes_1.0 "Release notes 1.0")

- ![](/images/TechDraw_RedrawPage.svg) [Redibujar página](/TechDraw_RedrawPage/es "TechDraw RedrawPage/es"): fuerza una actualización de la página seleccionada. [introduced in 0.19](/Release_notes_0.19 "Release notes 0.19")

- ![](/images/TechDraw_PrintAll.svg) [Print All Pages](/TechDraw_PrintAll "TechDraw PrintAll"): prints all pages in a document. [introduced in 0.21](/Release_notes_0.21 "Release notes 0.21")

- ![](/images/TechDraw_ExportPageSVG.svg) [Exportar página como SVG](/TechDraw_ExportPageSVG/es "TechDraw ExportPageSVG/es"): guarda la página actual como archivo [SVG](/SVG/es "SVG/es").

- ![](/images/TechDraw_ExportPageDXF.svg) [Exportar página como DXF](/TechDraw_ExportPageDXF/es "TechDraw ExportPageDXF/es"): guarda la página actual como archivo [DXF](/DXF/es "DXF/es").

## Vistas

#### TechDraw views

- ![](/images/TechDraw_View.svg) [Insertar Vista](/TechDraw_View/es "TechDraw View/es"): Agrega una vista de proyección 2D de un objeto.

- ![](/images/TechDraw_BrokenView.svg) [Insert Broken View](/TechDraw_BrokenView "TechDraw BrokenView"): adds a broken view of one or more objects. [introduced in 1.0](/Release_notes_1.0 "Release notes 1.0")

- ![](/images/TechDraw_SectionView.svg) [Insertar vista de sección](/TechDraw_SectionView/es "TechDraw SectionView/es"): inserta una vista de sección transversal de una vista existente.

- ![](/images/TechDraw_ComplexSection.svg) [Insert Complex Section View](/TechDraw_ComplexSection "TechDraw ComplexSection"): inserts a cross-section view of an existing view based on a profile. [introduced in 0.21](/Release_notes_0.21 "Release notes 0.21")

- ![](/images/TechDraw_DetailView.svg) [Insertar la vista detallada](/index.php?title=TechDraw_DetailView/es&action=edit&redlink=1 "TechDraw DetailView/es (page does not exist)"): Agrega una vista detallada de una parte de una vista existente.

- ![](/images/TechDraw_ProjectionGroup.svg) [Insertar el Grupo de Proyección](/TechDraw_ProjectionGroup/es "TechDraw ProjectionGroup/es"): Invoca un diálogo para crear vistas de uno o más objetos dibujables desde múltiples direcciones.

- ![](/images/TechDraw_ClipGroup.svg) [Inserta un grupo de clip](/index.php?title=TechDraw_ClipGroup/es&action=edit&redlink=1 "TechDraw ClipGroup/es (page does not exist)"): Inserta un grupo de clip en una página.

- ![](/images/TechDraw_Symbol.svg) [Insertar símbolo SVG](/index.php?title=TechDraw_Symbol/es&action=edit&redlink=1 "TechDraw Symbol/es (page does not exist)"): inserta un símbolo de un archivo [SVG](/SVG/es "SVG/es") en una página.

- ![](/images/TechDraw_Image.svg) [Insertar Bitmap imagen](/index.php?title=TechDraw_Image/es&action=edit&redlink=1 "TechDraw Image/es (page does not exist)"): inserta una imagen PNG o JPG [bitmap](/index.php?title=Bitmap/es&action=edit&redlink=1 "Bitmap/es (page does not exist)") en una página.

- ![](/images/TechDraw_ShareView.svg) [Share View](/TechDraw_ShareView "TechDraw ShareView"): shares a view between multiple pages.

- ![](/images/TechDraw_ToggleFrame.svg) [Turn View Frames On/Off](/index.php?title=TechDraw_ToggleFrame/es&action=edit&redlink=1 "TechDraw ToggleFrame/es (page does not exist)"): activa y desactiva ver marcos y etiquetas que rodean una vista.

- ![](/images/TechDraw_ProjectShape.svg) [Project Shape](/TechDraw_ProjectShape "TechDraw ProjectShape"): creates projections of shapes in the [3D view](/3D_view "3D view").

#### Views from other workbenches

- ![](/images/TechDraw_ActiveView.svg) [Insertar la vista activa](/index.php?title=TechDraw_ActiveView/es&action=edit&redlink=1 "TechDraw ActiveView/es (page does not exist)"): inserta una vista de la vista 3D activa. [introduced in 0.19](/Release_notes_0.19 "Release notes 0.19")

- ![](/images/TechDraw_DraftView.svg) [Insertar el borrador del objeto de l'ambiente de trabajo](/index.php?title=TechDraw_DraftView/es&action=edit&redlink=1 "TechDraw DraftView/es (page does not exist)") Inserta una vista de un objeto [Draft ambiente de trabajo](/Draft_Workbench/es "Draft Workbench/es").

- ![](/images/TechDraw_ArchView.svg) [Insertar Ambiente de trabajo architectura Objeto](/index.php?title=TechDraw_ArchView/es&action=edit&redlink=1 "TechDraw ArchView/es (page does not exist)"): Agrega una vista de un [Architectura Ambiente de trabajo](/Arch_Workbench/es "Arch Workbench/es") [Plano de la sección](/Arch_SectionPlane/es "Arch SectionPlane/es") objeto.

- ![](/images/TechDraw_SpreadsheetView.svg) [Insertar Spreadsheet Vista](/index.php?title=TechDraw_SpreadsheetView/es&action=edit&redlink=1 "TechDraw SpreadsheetView/es (page does not exist)"): Inserta una vista de una [Spreadsheet Ambiente de trabajo](/Spreadsheet_Workbench/es "Spreadsheet Workbench/es") sheet.

### Stacking

These are tools for changing the stacking order which controls the apparent depth of views on a page.

- ![](/images/TechDraw_StackTop.svg)![](/images/Toolbar_flyout_arrow_blue_background.svg) Adjust Stacking Order:

- ![](/images/TechDraw_StackTop.svg) [Move view to top of stack](/TechDraw_StackTop "TechDraw StackTop"): moves views to the top of the stacking order. [introduced in 0.21](/Release_notes_0.21 "Release notes 0.21")

- ![](/images/TechDraw_StackBottom.svg) [Move view to bottom of stack](/TechDraw_StackBottom "TechDraw StackBottom"): moves views to the bottom of the stacking order. [introduced in 0.21](/Release_notes_0.21 "Release notes 0.21")

- ![](/images/TechDraw_StackUp.svg) [Move view up one level](/TechDraw_StackUp "TechDraw StackUp"): moves views up one level in the stacking order. [introduced in 0.21](/Release_notes_0.21 "Release notes 0.21")

- ![](/images/TechDraw_StackDown.svg) [Move view down one level](/TechDraw_StackDown "TechDraw StackDown"): moves views down one level in the stacking order. [introduced in 0.21](/Release_notes_0.21 "Release notes 0.21")

## Dimensiones

- ![](/images/TechDraw_Dimension.svg)![](/images/Toolbar_flyout_arrow_blue_background.svg) Dimensions:

- ![](/images/TechDraw_Dimension.svg) [Insert Dimension](/TechDraw_Dimension "TechDraw Dimension"): adds a contextual dimension. [introduced in 1.0](/Release_notes_1.0 "Release notes 1.0")

- ![](/images/TechDraw_LengthDimension.svg) [Nueva longitud](/TechDraw_LengthDimension/es "TechDraw LengthDimension/es"): Agrega una dimensión de longitud.

- ![](/images/TechDraw_HorizontalDimension.svg) [Nuevo Horizontal](/TechDraw_HorizontalDimension/es "TechDraw HorizontalDimension/es"): Agrega una dimensión de distancia horizontal.

- ![](/images/TechDraw_VerticalDimension.svg) [Nueva vertical](/TechDraw_VerticalDimension/es "TechDraw VerticalDimension/es"): Agrega una dimensión de distancia vertical.

- ![](/images/TechDraw_RadiusDimension.svg) [Nuevo radio](/TechDraw_RadiusDimension/es "TechDraw RadiusDimension/es"): Agrega una dimensión de radio a un círculo o arco circular.

- ![](/images/TechDraw_DiameterDimension.svg) [Nuevo Diámetro](/TechDraw_DiameterDimension/es "TechDraw DiameterDimension/es"): Agrega una dimensión de Diámetro a un círculo o un arco circular.

- ![](/images/TechDraw_AngleDimension.svg) [Nuevo Ángulo](/TechDraw_AngleDimension/es "TechDraw AngleDimension/es"): Agrega una dimensión de Ángulo entre dos bordes rectos.

- ![](/images/TechDraw_3PtAngleDimension.svg) [Nuevo ángulo3Pt](/index.php?title=TechDraw_3PtAngleDimension/es&action=edit&redlink=1 "TechDraw 3PtAngleDimension/es (page does not exist)"):

Agrega una dimensión de ángulo usando tres vértices.

- ![](/images/TechDraw_AreaDimension.svg) [Insert Area Annotation](/TechDraw_AreaDimension "TechDraw AreaDimension"): adds an area dimension to a face. [introduced in 1.0](/Release_notes_1.0 "Release notes 1.0")

- ![](/images/TechDraw_ExtensionCreateLengthArc.svg) [Create Arc Length Dimension](/TechDraw_ExtensionCreateLengthArc "TechDraw ExtensionCreateLengthArc"): creates an arc length dimension.

- ![](/images/TechDraw_HorizontalExtentDimension.svg) [Nueva extensión horizontal](/index.php?title=TechDraw_HorizontalExtentDimension/es&action=edit&redlink=1 "TechDraw HorizontalExtentDimension/es (page does not exist)"): agrega una dimensión de extensión horizontal. [introduced in 0.19](/Release_notes_0.19 "Release notes 0.19")

- ![](/images/TechDraw_VerticalExtentDimension.svg) [Nueva extensión vertical](/index.php?title=TechDraw_VerticalExtentDimension/es&action=edit&redlink=1 "TechDraw VerticalExtentDimension/es (page does not exist)"): agrega una dimensión de extensión vertical. [introduced in 0.19](/Release_notes_0.19 "Release notes 0.19")

- ![](/images/TechDraw_ExtensionCreateHorizChainDimension.svg) [Create Horizontal Chain Dimensions](/TechDraw_ExtensionCreateHorizChainDimension "TechDraw ExtensionCreateHorizChainDimension"): creates a sequence of aligned horizontal dimensions.

- ![](/images/TechDraw_ExtensionCreateVertChainDimension.svg) [Create Vertical Chain Dimensions](/TechDraw_ExtensionCreateVertChainDimension "TechDraw ExtensionCreateVertChainDimension"): creates a sequence of aligned vertical dimensions.

- ![](/images/TechDraw_ExtensionCreateObliqueChainDimension.svg) [Create Oblique Chain Dimensions](/TechDraw_ExtensionCreateObliqueChainDimension "TechDraw ExtensionCreateObliqueChainDimension"): creates a sequence of aligned oblique dimensions.

- ![](/images/TechDraw_ExtensionCreateHorizCoordDimension.svg) [Create Horizontal Coordinate Dimensions](/TechDraw_ExtensionCreateHorizCoordDimension "TechDraw ExtensionCreateHorizCoordDimension"): creates multiple evenly spaced horizontal dimensions starting from the same baseline.

- ![](/images/TechDraw_ExtensionCreateVertCoordDimension.svg) [Create Vertical Coordinate Dimensions](/TechDraw_ExtensionCreateVertCoordDimension "TechDraw ExtensionCreateVertCoordDimension"): creates multiple evenly spaced vertical dimensions starting from the same baseline.

- ![](/images/TechDraw_ExtensionCreateObliqueCoordDimension.svg) [Create Oblique Coordinate Dimensions](/TechDraw_ExtensionCreateObliqueCoordDimension "TechDraw ExtensionCreateObliqueCoordDimension"): creates multiple evenly spaced oblique dimensions starting from the same baseline.

- ![](/images/TechDraw_ExtensionCreateHorizChamferDimension.svg) [Create Horizontal Chamfer Dimension](/TechDraw_ExtensionCreateHorizChamferDimension "TechDraw ExtensionCreateHorizChamferDimension"): creates a horizontal size and angle dimension for a chamfer.

- ![](/images/TechDraw_ExtensionCreateVertChamferDimension.svg) [Create Vertical Chamfer Dimension](/TechDraw_ExtensionCreateVertChamferDimension "TechDraw ExtensionCreateVertChamferDimension"): creates a vertical size and angle dimension for a chamfer.

- ![](/images/TechDraw_Balloon.svg) [Globo nuevo](/index.php?title=TechDraw_Balloon/es&action=edit&redlink=1 "TechDraw Balloon/es (page does not exist)"): agrega una anotación de "globo" a una página. [introduced in 0.19](/Release_notes_0.19 "Release notes 0.19")

- ![](/images/TechDraw_AxoLengthDimension.svg) [Insert Axonometric Length Dimension](/TechDraw_AxoLengthDimension "TechDraw AxoLengthDimension"): adds an axonometric length dimension. [introduced in 0.21](/Release_notes_0.21 "Release notes 0.21")

- ![](/images/TechDraw_LandmarkDimension.svg) [Nueva dimensión del hito](/TechDraw_LandmarkDimension/es "TechDraw LandmarkDimension/es"): agrega una dimensión de distancia de referencia. [introduced in 0.19](/Release_notes_0.19 "Release notes 0.19")

- ![](/images/TechDraw_DimensionRepair.svg) [Dimension Repair](/TechDraw_DimensionRepair "TechDraw DimensionRepair"): can adjust the 2D or 3D geometry references of a dimension. [introduced in 0.21](/Release_notes_0.21 "Release notes 0.21")

- ![](/images/TechDraw_LinkDimension.svg) [Nuevos enlaces](/index.php?title=TechDraw_LinkDimension/es&action=edit&redlink=1 "TechDraw LinkDimension/es (page does not exist)"): Vincula 1 o más dimensiones a la geometría 3D.

### Hatching

- ![](/images/TechDraw_Hatch.svg) [Achurado plano utilizar un archivo de imagen](/TechDraw_Hatch/es "TechDraw Hatch/es"): Aplica un achurado patrón desde un archivo a uno plano.

- ![](/images/TechDraw_GeometricHatch.svg) [Geometric Hatch](/index.php?title=TechDraw_GeometricHatch/es&action=edit&redlink=1 "TechDraw GeometricHatch/es (page does not exist)"): aplica una sombrea uno plano usando una especificación PAT de Autodesk.

## Anotación

- ![](/images/TechDraw_Annotation.svg) [Insertar Anotación](/index.php?title=TechDraw_Annotation/es&action=edit&redlink=1 "TechDraw Annotation/es (page does not exist)"): Agrega un bloque de texto simple como anotación.

- ![](/images/TechDraw_LeaderLine.svg) [Añadir Leaderline a la vista](/index.php?title=TechDraw_LeaderLine/es&action=edit&redlink=1 "TechDraw LeaderLine/es (page does not exist)"): añade una línea de anotación a una vista. [introducido en la versión 0.19](/Release_notes_0.19/es "Release notes 0.19/es")

- ![](/images/TechDraw_RichTextAnnotation.svg) [Insertar Anotación de Texto Enriquecido](/index.php?title=TechDraw_RichTextAnnotation/es&action=edit&redlink=1 "TechDraw RichTextAnnotation/es (page does not exist)"): añade un bloque de texto enriquecido como anotación a una línea de liderazgo o a una vista. [introducido en la versión 0.19](/Release_notes_0.19/es "Release notes 0.19/es")

- ![](/images/TechDraw_CosmeticVertex.svg)![](/images/Toolbar_flyout_arrow_blue_background.svg) Add Cosmetic Vertices:

- ![](/images/TechDraw_CosmeticVertex.svg) [Agrega Vértice Cosmético](/index.php?title=TechDraw_CosmeticVertex/es&action=edit&redlink=1 "TechDraw CosmeticVertex/es (page does not exist)"): agrega un Vértice que no es parte de la geometría de la fuente. [introducido en la versión 0.19](/Release_notes_0.19/es "Release notes 0.19/es")

- ![](/images/TechDraw_Midpoints.svg) [Agregar Punto Medio Vértices](/index.php?title=TechDraw_Midpoints/es&action=edit&redlink=1 "TechDraw Midpoints/es (page does not exist)"): agrega vértices cosméticos en los puntos medios de los bordes seleccionados. [introducido en la versión 0.19](/Release_notes_0.19/es "Release notes 0.19/es")

- ![](/images/TechDraw_Quadrants.svg) [Agregar Vértices de Cuadrante](/index.php?title=TechDraw_Quadrants/es&action=edit&redlink=1 "TechDraw Quadrants/es (page does not exist)"): agrega Vértices Cosméticos en los cuartos de punto de los bordes seleccionados (circulares). [introducido en la versión 0.19](/Release_notes_0.19/es "Release notes 0.19/es")

- ![](/images/TechDraw_FaceCenterLine.svg)![](/images/Toolbar_flyout_arrow_blue_background.svg) Add Centerlines:

- ![](/images/TechDraw_FaceCenterLine.svg) [Añadir línea central a las caras](/index.php?title=TechDraw_FaceCenterLine/es&action=edit&redlink=1 "TechDraw FaceCenterLine/es (page does not exist)"): añade una línea central a las caras seleccionadas. [introducido en la versión 0.19](/Release_notes_0.19/es "Release notes 0.19/es")

- ![](/images/TechDraw_2LineCenterLine.svg) [Añadir línea central entre 2 líneas](/index.php?title=TechDraw_2LineCenterLine/es&action=edit&redlink=1 "TechDraw 2LineCenterLine/es (page does not exist)"): añade una línea central entre 2 líneas. [introducido en la versión 0.19](/Release_notes_0.19/es "Release notes 0.19/es")

- ![](/images/TechDraw_2PointCenterLine.svg) [Añadir línea central entre 2 puntos](/index.php?title=TechDraw_2PointCenterLine/es&action=edit&redlink=1 "TechDraw 2PointCenterLine/es (page does not exist)"): añade una línea central entre 2 puntos. [introducido en la versión 0.19](/Release_notes_0.19/es "Release notes 0.19/es")

- ![](/images/TechDraw_2PointCosmeticLine.svg) [Añadir una línea cosmética](/index.php?title=TechDraw_2PointCosmeticLine/es&action=edit&redlink=1 "TechDraw 2PointCosmeticLine/es (page does not exist)"): añade una línea cosmética que conecta 2 vértices. [introducido en la versión 0.19](/Release_notes_0.19/es "Release notes 0.19/es")

- ![](/images/TechDraw_CosmeticCircle.svg) [Add Cosmetic Circle](/TechDraw_CosmeticCircle "TechDraw CosmeticCircle"): adds a cosmetic circle. [introduced in 1.0](/Release_notes_1.0 "Release notes 1.0")

- ![](/images/TechDraw_DecorateLine.svg) [Cambiar la apariencia de las líneas](/index.php?title=TechDraw_DecorateLine/es&action=edit&redlink=1 "TechDraw DecorateLine/es (page does not exist)"): cambia la apariencia de la(s) línea(s) seleccionada(s). [introducido en la versión 0.19](/Release_notes_0.19/es "Release notes 0.19/es")

- ![](/images/TechDraw_ShowAll.svg) [Mostrar/Ocultar Bordes Invisibles](/index.php?title=TechDraw_ShowAll/es&action=edit&redlink=1 "TechDraw ShowAll/es (page does not exist)"): muestra/oculta las líneas/bordes invisibles en una vista. [introducido en la versión 0.19](/Release_notes_0.19/es "Release notes 0.19/es")

- ![](/images/TechDraw_WeldSymbol.svg) [Añadir información de soldadura a la línea de mando](/index.php?title=TechDraw_WeldSymbol/es&action=edit&redlink=1 "TechDraw WeldSymbol/es (page does not exist)"): añade especificaciones de soldadura a una línea de mando existente. [introducido en la versión 0.19](/Release_notes_0.19/es "Release notes 0.19/es")

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

- ![](/images/TechDraw_CosmeticEraser.svg) [Eliminar objeto cosmético](/index.php?title=TechDraw_CosmeticEraser/es&action=edit&redlink=1 "TechDraw CosmeticEraser/es (page does not exist)"): elimina los objetos cosméticos de una página.[introducido en la versión 0.19](/Release_notes_0.19/es "Release notes 0.19/es")

### Obsolete tools

- ![](/images/TechDraw_ClipGroupAdd.svg) [Agrega vista al grupo de clips](/TechDraw_ClipGroupAdd "TechDraw ClipGroupAdd"): Agrega una vista existente a un grupo de clip.

- ![](/images/TechDraw_ClipGroupRemove.svg) [Eliminar la vista del grupo de clips](/index.php?title=TechDraw_ClipGroupRemove/es&action=edit&redlink=1 "TechDraw ClipGroupRemove/es (page does not exist)"): Elimina una vista de un grupo de clip.

- ![](/images/TechDraw_MoveView.svg) [Move View](/TechDraw_MoveView "TechDraw MoveView"): moves a view and its dependents to a different page. Not available in 1.0 and above.

## Características adicionales

- [Grupos de líneas](/index.php?title=TechDraw_LineGroup/es&action=edit&redlink=1 "TechDraw LineGroup/es (page does not exist)"): para controlar la aparición de varios tipos de líneas.
- [Plantillas](/index.php?title=TechDraw_Templates/es&action=edit&redlink=1 "TechDraw Templates/es (page does not exist)"): las plantillas por defecto definidas para las páginas de dibujo.
- [Achurado](/index.php?title=TechDraw_Hatching/es&action=edit&redlink=1 "TechDraw Hatching/es (page does not exist)"): explicación de las diferentes técnicas de achurado.
- [Dimensionamiento y tolerancia geométricos](/index.php?title=TechDraw_Geometric_dimensioning_and_tolerancing/es&action=edit&redlink=1 "TechDraw Geometric dimensioning and tolerancing/es (page does not exist)"): explicación sobre cómo lograr el dimensionamiento y tolerancia geométricos.

## Preferences

## Preferencias

- ![](/images/Preferences-techdraw.svg) [Preferencias](/index.php?title=TechDraw_Preferences/es&action=edit&redlink=1 "TechDraw Preferences/es (page does not exist)"): preferencias para los valores por defecto de la página de dibujo como el ángulo de proyección, los colores, los tamaños de texto y los estilos de línea.

## Scripting

## Guión

Las herramientas de TechDraw pueden ser utilizadas en [macros](/Macros/es "Macros/es") y desde la consola [Python](/Python/es "Python/es") utilizando dos APIs.

- [TechDraw API](/index.php?title=TechDraw_API/es&action=edit&redlink=1 "TechDraw API/es (page does not exist)")
- [TechDrawGui API](/index.php?title=TechDrawGui_API/es&action=edit&redlink=1 "TechDrawGui API/es (page does not exist)")

## Limitations

- Do not cut, copy and paste TechDraw objects in the [Tree view](/Tree_view "Tree view") as this generally does not work out well.
- Do not drag TechDraw objects in the [Tree view](/Tree_view "Tree view") with the mouse.

## Tutoriales

- [Tutorial básico de DibujoTécnico](/index.php?title=Basic_TechDraw_Tutorial/es&action=edit&redlink=1 "Basic TechDraw Tutorial/es (page does not exist)"): Introducción a la creación de dibujos con el ambiente de trabajo DibujoTécnico.
- [Creando una nueva plantilla](/index.php?title=TechDraw_TemplateHowTo/es&action=edit&redlink=1 "TechDraw TemplateHowTo/es (page does not exist)"): instrucciones para crear una nueva plantilla de página en Inkscape para usarla con el ambiente de trabajo DibujoTécnico.
- [Medición de los ángulos en los agujeros](/index.php?title=Measurement_Of_Angles_On_Holes/es&action=edit&redlink=1 "Measurement Of Angles On Holes/es (page does not exist)"): instrucciones para añadir líneas centrales y posteriores representaciones de ángulos en los agujeros.
- [Misceláneos](/TechDraw_HowTo_Page/es "TechDraw HowTo Page/es"): Instrucciones para diferentes configuraciones como marcas centrales, etc.
- [Crear un círculo de cabeceo](/index.php?title=TechDraw_Pitch_Circle_Tutorial/es&action=edit&redlink=1 "TechDraw Pitch Circle Tutorial/es (page does not exist)"): instrucciones para añadir un círculo de cabeceo

Tutoriales de vídeo de sliptonic

- Ambiente de trabajo TechDraw [Parte 1 (Básico)](https://www.youtube.com/watch?v=7LbOmSGW9F0), [Parte 2 (Dimensiones)](https://www.youtube.com/watch?v=z3w84RfvqaE), [Parte 3 (Multiview)](https://www.youtube.com/watch?v=uNjXg-m38aI)
- Ambiente de trabajo de TechDraw [Parte 4 (Sección y detalle)](https://www.youtube.com/watch?v=3zSdeFV6I5o), [Parte 5 (Plantillas de personalización)](https://www.youtube.com/watch?v=kcmdJ7xa7gg)

## Development

Do you want to know about the future of the TechDraw Workbench? Visit [the TechDraw Roadmap Page](/TechDraw_Roadmap "TechDraw Roadmap") to learn more.

Retrieved from "<http://wiki.freecad.org/index.php?title=TechDraw_Workbench/es&oldid=1492917>"
