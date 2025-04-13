---
title: Верстак TechDraw
---

![](/images/Workbench_TechDraw.svg)

Логотип верстака TechDraw

## Введение

Верстак TechDraw предназначен для построения технических чертежей на основе 3D-моделей созданных с помощью таких верстаков, как: [Part](/Part_Workbench/ru "Part Workbench/ru"), [PartDesign](/PartDesign_Workbench/ru "PartDesign Workbench/ru"), [Arch](/Arch_Workbench "Arch Workbench"). 3D модели импортированные из других приложений, так же могут быть применены для построения чертежа. Каждый чертеж представляет собой лист, который может содержать различные виды отображаемых объектов, таких как: Part::Features, PartDesign::Bodies, App::Part groups и группы объектов документа. Полученные листы можно использовать в качестве документации, инструкции по эксплуатации, перечня элементов, спецификации и т. д.

В чертеж могут быть добавлены такие элементы как: размеры, сечения 3D Вида, дополнительные заштрихованные области, надписи и примечания, чертежные знаки в формате [SVG](/SVG/ru "SVG/ru"). Чертеж так же можно экспортировать в различные форматы, такие как [DXF](/DXF/ru "DXF/ru"), [SVG](/SVG/ru "SVG/ru") или [PDF](/PDF/ru "PDF/ru").

Если вашей основной целью является создание сложных 2D чертежей и файлов в формате [DXF](/DXF/ru "DXF/ru"), и вам не нужно 3D-моделирование, возможно FreeCAD будет не самым лучшим выбором для вас. Вы можете использовать специальное программное обеспечение для построения технических чертежей, такое как [LibreCAD](https://en.wikipedia.org/wiki/LibreCAD) или [QCad](https://en.wikipedia.org/wiki/QCad).

![](/images/TechDraw_Workbench_Example_ru-ru.png)

## Snapping

[introduced in 1.0](/Release_notes_1.0 "Release notes 1.0"): The TechDraw Workbench has a snapping feature. It can be used to automatically align views, section views and dimensions when positioning them by dragging with the mouse. With **Snap View Alignment** enabled (default) in the [preferences](/TechDraw_Preferences#Snapping "TechDraw Preferences"), views will snap to alignment with other views when close enough (**View Snapping Factor** setting). Dimensions are also snapped to other parallel dimensions and the dimension text can be snapped to the middle of the dimension line. Snapping can be temporarily disabled by holding down the Alt key.

## Tools

## Страницы

- ![](/images/TechDraw_PageDefault.svg) [Вставить страницу по умолчанию](/TechDraw_PageDefault/ru "TechDraw PageDefault/ru"): добавляет новую страницу используя [шаблон](/TechDraw_Templates/ru "TechDraw Templates/ru") по умолчанию.

- ![](/images/TechDraw_PageTemplate.svg) [Вставить страницу используя шаблон](/TechDraw_PageTemplate/ru "TechDraw PageTemplate/ru"): добавляет новую страницу, используя выбранный [шаблон](/TechDraw_Templates/ru "TechDraw Templates/ru").

- ![](/images/TechDraw_FillTemplateFields.svg) [Update template fields](/TechDraw_FillTemplateFields "TechDraw FillTemplateFields"): [introduced in 1.0](/Release_notes_1.0 "Release notes 1.0")

- ![](/images/TechDraw_RedrawPage.svg) [Перерисовать страницу](/TechDraw_RedrawPage/ru "TechDraw RedrawPage/ru"): принудительно обновляет выбранные листы. [представлено в версии 0.19](/Release_notes_0.19/ru "Release notes 0.19/ru")

- ![](/images/TechDraw_PrintAll.svg) [Print All Pages](/TechDraw_PrintAll "TechDraw PrintAll"): prints all pages in a document. [introduced in 0.21](/Release_notes_0.21 "Release notes 0.21")

- ![](/images/TechDraw_ExportPageSVG.svg) [Экспорт страницы в SVG](/TechDraw_ExportPageSVG/ru "TechDraw ExportPageSVG/ru"): Экспорт страницы в [SVG](/SVG/ru "SVG/ru") файл.

- ![](/images/TechDraw_ExportPageDXF.svg) [Экспорт страницы в DXF](/TechDraw_ExportPageDXF/ru "TechDraw ExportPageDXF/ru"): Экспорт страницы в [DXF](/DXF/ru "DXF/ru") файл.

## Виды

#### TechDraw views

- ![](/images/TechDraw_View.svg) [Новый Вид](/TechDraw_View/ru "TechDraw View/ru"): добавляет 2D проекционный вид объекта.

- ![](/images/TechDraw_BrokenView.svg) [Insert Broken View](/TechDraw_BrokenView "TechDraw BrokenView"): adds a broken view of one or more objects. [introduced in 1.0](/Release_notes_1.0 "Release notes 1.0")

- ![](/images/TechDraw_SectionView.svg) [Вставить Вид сечения](/TechDraw_SectionView/ru "TechDraw SectionView/ru"): добавляет вид поперечного сечения в существующий вида.

- ![](/images/TechDraw_ComplexSection.svg) [Insert Complex Section View](/TechDraw_ComplexSection "TechDraw ComplexSection"): inserts a cross-section view of an existing view based on a profile. [introduced in 0.21](/Release_notes_0.21 "Release notes 0.21")

- ![](/images/TechDraw_DetailView.svg) [Вставить подробный Вид](/TechDraw_DetailView/ru "TechDraw DetailView/ru"): добавляет подробный вид части существующего вида.

- ![](/images/TechDraw_ProjectionGroup.svg) [Вставить группу проекций](/TechDraw_ProjectionGroup/ru "TechDraw ProjectionGroup/ru"): вызывает диалоговое окно для создания множества видов объекта с нескольких направлений.

- ![](/images/TechDraw_ClipGroup.svg) [Создать группу Видов](/TechDraw_ClipGroup/ru "TechDraw ClipGroup/ru"): Вставляет группу Видов.

- ![](/images/TechDraw_Symbol.svg) [Вставить SVG Символ](/TechDraw_Symbol/ru "TechDraw Symbol/ru"): Вставляет на страницу Символ из [SVG](/SVG/ru "SVG/ru") файла.

- ![](/images/TechDraw_Image.svg) [Вставить растровое изображение](/TechDraw_Image/ru "TechDraw Image/ru"): вставляет на страницу рисунок в формате [bitmap](/Bitmap/ru "Bitmap/ru") PNG или JPG.

- ![](/images/TechDraw_ShareView.svg) [Share View](/TechDraw_ShareView "TechDraw ShareView"): shares a view between multiple pages.

- ![](/images/TechDraw_ToggleFrame.svg) [Вкл/выкл отображение рамки](/TechDraw_ToggleFrame/ru "TechDraw ToggleFrame/ru"): включает и выключает рамки и метки, окружающие Вид.

- ![](/images/TechDraw_ProjectShape.svg) [Project Shape](/TechDraw_ProjectShape "TechDraw ProjectShape"): creates projections of shapes in the [3D view](/3D_view "3D view").

#### Views from other workbenches

- ![](/images/TechDraw_ActiveView.svg) [Вставить активный вид (3D Вид)](/TechDraw_ActiveView/ru "TechDraw ActiveView/ru"): вставляет в чертеж Вид, активного 3D вида. [представлено в версии 0.19](/Release_notes_0.19/ru "Release notes 0.19/ru")

- ![](/images/TechDraw_DraftView.svg) [Вставить Вид верстака Draft](/TechDraw_DraftView/ru "TechDraw DraftView/ru"): добавляет Вид объекта из верстака [Draft](/Draft_Workbench/ru "Draft Workbench/ru").

- ![](/images/TechDraw_ArchView.svg) [Вставить Вид верстака Arch](/TechDraw_ArchView/ru "TechDraw ArchView/ru"): добавляет Вид объекта из верстака [Arch](/Arch_Workbench/ru "Arch Workbench/ru") или вид [Секущей Плоскости](/Arch_SectionPlane/ru "Arch SectionPlane/ru").

- ![](/images/TechDraw_SpreadsheetView.svg) [Вставить электронную таблицу](/TechDraw_SpreadsheetView/ru "TechDraw SpreadsheetView/ru"): добавляет таблицу из верстака [Spreadsheet](/Spreadsheet_Workbench/ru "Spreadsheet Workbench/ru").

### Stacking

These are tools for changing the stacking order which controls the apparent depth of views on a page.

- ![](/images/TechDraw_StackTop.svg)![](/images/Toolbar_flyout_arrow_blue_background.svg) Adjust Stacking Order:

- ![](/images/TechDraw_StackTop.svg) [Move view to top of stack](/TechDraw_StackTop "TechDraw StackTop"): moves views to the top of the stacking order. [introduced in 0.21](/Release_notes_0.21 "Release notes 0.21")

- ![](/images/TechDraw_StackBottom.svg) [Move view to bottom of stack](/TechDraw_StackBottom "TechDraw StackBottom"): moves views to the bottom of the stacking order. [introduced in 0.21](/Release_notes_0.21 "Release notes 0.21")

- ![](/images/TechDraw_StackUp.svg) [Move view up one level](/TechDraw_StackUp "TechDraw StackUp"): moves views up one level in the stacking order. [introduced in 0.21](/Release_notes_0.21 "Release notes 0.21")

- ![](/images/TechDraw_StackDown.svg) [Move view down one level](/TechDraw_StackDown "TechDraw StackDown"): moves views down one level in the stacking order. [introduced in 0.21](/Release_notes_0.21 "Release notes 0.21")

## Размеры

- ![](/images/TechDraw_Dimension.svg)![](/images/Toolbar_flyout_arrow_blue_background.svg) Dimensions:

- ![](/images/TechDraw_Dimension.svg) [Insert Dimension](/TechDraw_Dimension "TechDraw Dimension"): adds a contextual dimension. [introduced in 1.0](/Release_notes_1.0 "Release notes 1.0")

- ![](/images/TechDraw_LengthDimension.svg) [Указать длинну](/TechDraw_LengthDimension/ru "TechDraw LengthDimension/ru"): задает произвольное расстояние.

- ![](/images/TechDraw_HorizontalDimension.svg) [Указать горизонтальный размер](/TechDraw_HorizontalDimension/ru "TechDraw HorizontalDimension/ru"): задает размер по горизонтали.

- ![](/images/TechDraw_VerticalDimension.svg) [Указать вертикальный размер](/TechDraw_VerticalDimension/ru "TechDraw VerticalDimension/ru"): задает размер по вертикали.

- ![](/images/TechDraw_RadiusDimension.svg) [Указать радиус](/TechDraw_RadiusDimension/ru "TechDraw RadiusDimension/ru"): задает радиус окружности или дуги.

- ![](/images/TechDraw_DiameterDimension.svg) [Указать диаметр](/TechDraw_DiameterDimension/ru "TechDraw DiameterDimension/ru"): задает диаметр окружности или дуги.

- ![](/images/TechDraw_AngleDimension.svg) [Указать угловой размер](/TechDraw_AngleDimension/ru "TechDraw AngleDimension/ru"): задает величину угла между двумя прямыми краями.

- ![](/images/TechDraw_3PtAngleDimension.svg) [Указать угловой размер по 3 точкам](/TechDraw_3PtAngleDimension/ru "TechDraw 3PtAngleDimension/ru"): задает величину угла, используя три вершины.

- ![](/images/TechDraw_AreaDimension.svg) [Insert Area Annotation](/TechDraw_AreaDimension "TechDraw AreaDimension"): adds an area dimension to a face. [introduced in 1.0](/Release_notes_1.0 "Release notes 1.0")

- ![](/images/TechDraw_ExtensionCreateLengthArc.svg) [Create Arc Length Dimension](/TechDraw_ExtensionCreateLengthArc "TechDraw ExtensionCreateLengthArc"): creates an arc length dimension.

- ![](/images/TechDraw_HorizontalExtentDimension.svg) [Указать горизонтальный габаритный размер](/TechDraw_HorizontalExtentDimension/ru "TechDraw HorizontalExtentDimension/ru"): добавляет габаритный размер по горизонтали. [представлено в версии 0.19](/Release_notes_0.19/ru "Release notes 0.19/ru")

- ![](/images/TechDraw_VerticalExtentDimension.svg) [Указать вертикальный габаритный размер](/TechDraw_VerticalExtentDimension/ru "TechDraw VerticalExtentDimension/ru"): добавляет габаритный размер по вертикали. [представлено в версии 0.19](/Release_notes_0.19/ru "Release notes 0.19/ru")

- ![](/images/TechDraw_ExtensionCreateHorizChainDimension.svg) [Create Horizontal Chain Dimensions](/TechDraw_ExtensionCreateHorizChainDimension "TechDraw ExtensionCreateHorizChainDimension"): creates a sequence of aligned horizontal dimensions.

- ![](/images/TechDraw_ExtensionCreateVertChainDimension.svg) [Create Vertical Chain Dimensions](/TechDraw_ExtensionCreateVertChainDimension "TechDraw ExtensionCreateVertChainDimension"): creates a sequence of aligned vertical dimensions.

- ![](/images/TechDraw_ExtensionCreateObliqueChainDimension.svg) [Create Oblique Chain Dimensions](/TechDraw_ExtensionCreateObliqueChainDimension "TechDraw ExtensionCreateObliqueChainDimension"): creates a sequence of aligned oblique dimensions.

- ![](/images/TechDraw_ExtensionCreateHorizCoordDimension.svg) [Create Horizontal Coordinate Dimensions](/TechDraw_ExtensionCreateHorizCoordDimension "TechDraw ExtensionCreateHorizCoordDimension"): creates multiple evenly spaced horizontal dimensions starting from the same baseline.

- ![](/images/TechDraw_ExtensionCreateVertCoordDimension.svg) [Create Vertical Coordinate Dimensions](/TechDraw_ExtensionCreateVertCoordDimension "TechDraw ExtensionCreateVertCoordDimension"): creates multiple evenly spaced vertical dimensions starting from the same baseline.

- ![](/images/TechDraw_ExtensionCreateObliqueCoordDimension.svg) [Create Oblique Coordinate Dimensions](/TechDraw_ExtensionCreateObliqueCoordDimension "TechDraw ExtensionCreateObliqueCoordDimension"): creates multiple evenly spaced oblique dimensions starting from the same baseline.

- ![](/images/TechDraw_ExtensionCreateHorizChamferDimension.svg) [Create Horizontal Chamfer Dimension](/TechDraw_ExtensionCreateHorizChamferDimension "TechDraw ExtensionCreateHorizChamferDimension"): creates a horizontal size and angle dimension for a chamfer.

- ![](/images/TechDraw_ExtensionCreateVertChamferDimension.svg) [Create Vertical Chamfer Dimension](/TechDraw_ExtensionCreateVertChamferDimension "TechDraw ExtensionCreateVertChamferDimension"): creates a vertical size and angle dimension for a chamfer.

- ![](/images/TechDraw_Balloon.svg) [Вставить примечание в выноску](/TechDraw_Balloon/ru "TechDraw Balloon/ru"): создает аннотацию на странице. [представлено в версии 0.19](/Release_notes_0.19/ru "Release notes 0.19/ru")

- ![](/images/TechDraw_AxoLengthDimension.svg) [Insert Axonometric Length Dimension](/TechDraw_AxoLengthDimension "TechDraw AxoLengthDimension"): adds an axonometric length dimension. [introduced in 0.21](/Release_notes_0.21 "Release notes 0.21")

- ![](/images/TechDraw_LandmarkDimension.svg) [Вставить размер знака](/TechDraw_LandmarkDimension/ru "TechDraw LandmarkDimension/ru"): добавляет размер указывающий расстояние до landmark. [представлено в версии 0.19](/Release_notes_0.19/ru "Release notes 0.19/ru")

- ![](/images/TechDraw_DimensionRepair.svg) [Dimension Repair](/TechDraw_DimensionRepair "TechDraw DimensionRepair"): can adjust the 2D or 3D geometry references of a dimension. [introduced in 0.21](/Release_notes_0.21 "Release notes 0.21")

- ![](/images/TechDraw_LinkDimension.svg) [Связать размер с 3D геометрией](/TechDraw_LinkDimension/ru "TechDraw LinkDimension/ru"): связывает существующий размер с трехмерной геометрией.

### Hatching

- ![](/images/TechDraw_Hatch.svg) [Заштриховать грань, используя файл изображения](/TechDraw_Hatch/ru "TechDraw Hatch/ru"): Штриховать грань, используя файл изображения.

- ![](/images/TechDraw_GeometricHatch.svg) [Применить геометрическую штриховку к грани](/TechDraw_GeometricHatch/ru "TechDraw GeometricHatch/ru"): Применяет шаблон штриховки к участку, используя спецификацию Autodesk PAT.

## Вспомогательные инструменты

- ![](/images/TechDraw_Annotation.svg) [Добавить Аннотацию](/TechDraw_Annotation/ru "TechDraw Annotation/ru"): добавляет простой текстовый блок в качестве аннотации.

- ![](/images/TechDraw_LeaderLine.svg) [Добавить линию-выноску в Вид](/TechDraw_LeaderLine/ru "TechDraw LeaderLine/ru"): добавляет линию-выноску к Виду. [представлено в версии 0.19](/Release_notes_0.19/ru "Release notes 0.19/ru")

- ![](/images/TechDraw_RichTextAnnotation.svg) [Вставка аннотаций c форматированным текстом](/TechDraw_RichTextAnnotation/ru "TechDraw RichTextAnnotation/ru"): добавляет в Вид блок форматированного текста в качестве аннотации к линии-выноске. [представлено в версии 0.19](/Release_notes_0.19/ru "Release notes 0.19/ru")

- ![](/images/TechDraw_CosmeticVertex.svg)![](/images/Toolbar_flyout_arrow_blue_background.svg) Add Cosmetic Vertices:

- ![](/images/TechDraw_CosmeticVertex.svg) [Добавить вспомогательную вершину](/TechDraw_CosmeticVertex/ru "TechDraw CosmeticVertex/ru"): добавляет вершину, которая не является частью исходной геометрии. [представлено в версии 0.19](/Release_notes_0.19/ru "Release notes 0.19/ru")

- ![](/images/TechDraw_Midpoints.svg) [Добавить вершины по центрам граней](/TechDraw_Midpoints/ru "TechDraw Midpoints/ru"): добавляет вспомогательные вершины в центральные точки выбраных граней.

- ![](/images/TechDraw_Quadrants.svg) [Добавить 4-ре вершины по краям окружности](/TechDraw_Quadrants/ru "TechDraw Quadrants/ru"): Инструмент Четверть добавляет вспомогательные вершины в окружность, деля ее на четверти. [представлено в версии 0.19](/Release_notes_0.19/ru "Release notes 0.19/ru")

- ![](/images/TechDraw_FaceCenterLine.svg)![](/images/Toolbar_flyout_arrow_blue_background.svg) Add Centerlines:

- ![](/images/TechDraw_FaceCenterLine.svg) [Добавить осевую линию к граням](/TechDraw_FaceCenterLine/ru "TechDraw FaceCenterLine/ru"): добавляет осевую линию к выбранной грани или граням. [представлено в версии 0.19](/Release_notes_0.19/ru "Release notes 0.19/ru")

- ![](/images/TechDraw_2LineCenterLine.svg) [Добавить осевую линию между 2 линиями](/TechDraw_2LineCenterLine/ru "TechDraw 2LineCenterLine/ru"): добавляет осевую линию между 2 линиями. [представлено в версии 0.19](/Release_notes_0.19/ru "Release notes 0.19/ru")

- ![](/images/TechDraw_2PointCenterLine.svg) [Добавить осевую линию между 2 точками](/TechDraw_2PointCenterLine/ru "TechDraw 2PointCenterLine/ru"): добавляет осевую линию между 2 точками. [представлено в версии 0.19](/Release_notes_0.19/ru "Release notes 0.19/ru")

- ![](/images/TechDraw_2PointCosmeticLine.svg) [Добавить вспомогательную линию между 2-мя точками](/TechDraw_2PointCosmeticLine/ru "TechDraw 2PointCosmeticLine/ru"): добавить вспомогательную линию по двум точкам. [представлено в версии 0.19](/Release_notes_0.19/ru "Release notes 0.19/ru")

- ![](/images/TechDraw_CosmeticCircle.svg) [Add Cosmetic Circle](/TechDraw_CosmeticCircle "TechDraw CosmeticCircle"): adds a cosmetic circle. [introduced in 1.0](/Release_notes_1.0 "Release notes 1.0")

- ![](/images/TechDraw_DecorateLine.svg) [Изменить внешний вид линий](/TechDraw_DecorateLine/ru "TechDraw DecorateLine/ru"): позволяет изменить внешний вид выделенных линий. [представлено в версии 0.19](/Release_notes_0.19/ru "Release notes 0.19/ru")

- ![](/images/TechDraw_ShowAll.svg) [Показать/скрыть невидимые края](/TechDraw_ShowAll/ru "TechDraw ShowAll/ru"): позволяет показать/скрыть невидимые линии/грани Вида. [представлено в версии 0.19](/Release_notes_0.19/ru "Release notes 0.19/ru")

- ![](/images/TechDraw_WeldSymbol.svg) [Добавить информацию о сварке в линию-выноску](/TechDraw_WeldSymbol/ru "TechDraw WeldSymbol/ru"): добавляет символы сварки и другие параметры к существующей Линии-выноске. [introduced in 0.19](/Release_notes_0.19 "Release notes 0.19")

- ![](/images/TechDraw_SurfaceFinishSymbols.svg) [Add Surface Finish Symbol](/TechDraw_SurfaceFinishSymbols "TechDraw SurfaceFinishSymbols"): adds a surface finish symbol to a page. [introduced in 0.21](/Release_notes_0.21 "Release notes 0.21")

- ![](/images/TechDraw_HoleShaftFit.svg) [Add Hole/Shaft Fit](/TechDraw_HoleShaftFit "TechDraw HoleShaftFit"): adds hole or shaft tolerances using ISO 286 to a dimension. [introduced in 0.21](/Release_notes_0.21 "Release notes 0.21")

## Инструменты дополнения

#### Attributes and modifications

- ![](/images/TechDraw_ExtensionCircleCenterLines.svg) [Добавить осевые линии к окружности](/TechDraw_ExtensionCircleCenterLines/ru "TechDraw ExtensionCircleCenterLines/ru"): Позволяет добавить осевые линии к окружностям и дугам. [представлено в версии 0.20](/Release_notes_0.20/ru "Release notes 0.20/ru")

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

- ![](/images/TechDraw_ExtensionThreadHoleSide.svg) [Обозначить внутреннюю резьбу в разрезе отверстия](/TechDraw_ExtensionThreadHoleSide/ru "TechDraw ExtensionThreadHoleSide/ru"): добавляет внутреннюю резьбу к разрезу отверстия. [представлено в версии 0.20](/Release_notes_0.20/ru "Release notes 0.20/ru")

- ![](/images/TechDraw_ExtensionThreadHoleBottom.svg) [Обозначить внутреннюю резьбу отверстия с сечением вдоль оси](/TechDraw_ExtensionThreadHoleBottom/ru "TechDraw ExtensionThreadHoleBottom/ru"): добавляет внутреннюю резьбу к отверстию с сечением вдоль оси. [представлено в версии 0.20](/Release_notes_0.20/ru "Release notes 0.20/ru")

- ![](/images/TechDraw_ExtensionThreadBoltSide.svg) [Обозначить наружную резьбу в разрезе стержня](/TechDraw_ExtensionThreadBoltSide/ru "TechDraw ExtensionThreadBoltSide/ru"): добавляет наружную резьбу к разрезу стержня. [представлено в версии 0.20](/Release_notes_0.20/ru "Release notes 0.20/ru")

- ![](/images/TechDraw_ExtensionThreadBoltBottom.svg) [Обозначить наружную резьбу стержня с сечением вдоль оси](/TechDraw_ExtensionThreadBoltBottom/ru "TechDraw ExtensionThreadBoltBottom/ru"): добавляет наружную резьбу к стердню с сечением вдоль оси. [представлено в версии 0.20](/Release_notes_0.20/ru "Release notes 0.20/ru")

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

- ![](/images/TechDraw_CosmeticEraser.svg) [Удалить вспомогательный объект](/TechDraw_CosmeticEraser/ru "TechDraw CosmeticEraser/ru"): удаляет вспомогательные объекты с чертежа. [представлено в версии 0.19](/Release_notes_0.19/ru "Release notes 0.19/ru")

### Obsolete tools

- ![](/images/TechDraw_ClipGroupAdd.svg) [Добавить Вид в группу](/TechDraw_ClipGroupAdd/ru "TechDraw ClipGroupAdd/ru"): Добавляет существующий Вид в группу.

- ![](/images/TechDraw_ClipGroupRemove.svg) [Удалить Вид из группы](/TechDraw_ClipGroupRemove/ru "TechDraw ClipGroupRemove/ru"): Удаляет вид из группы.

- ![](/images/TechDraw_MoveView.svg) [Move View](/TechDraw_MoveView "TechDraw MoveView"): moves a view and its dependents to a different page. Not available in 1.0 and above.

## Дополнительные возможности

- [Группы Линий](/TechDraw_LineGroup/ru "TechDraw LineGroup/ru"): позволяет назначить толщину различным типам линий по умолчанию.
- [Шаблоны](/TechDraw_Templates/ru "TechDraw Templates/ru"): шаблоны по умолчанию, определенные для страниц чертежей.
- [Штриховка](/TechDraw_Hatching/ru "TechDraw Hatching/ru"): объяснение различных методов штриховки.
- [Геометрические размеры и допуски](/TechDraw_Geometric_dimensioning_and_tolerancing/ru "TechDraw Geometric dimensioning and tolerancing/ru"): руководство по указанию геометрических размеров и допусков.

## Настройки

- ![](/images/Preferences-techdraw.svg) [Настройки](/TechDraw_Preferences/ru "TechDraw Preferences/ru"): настройки значений по умолчанию для страницы чертежа, такие как угол проекции, цвета, размеры текста и стили линий.

## Программирование

Инструменты TechDraw можно использовать в [macros](/Macros/ru "Macros/ru") и в консоли [Python](/Python/ru "Python/ru") с помощью двух APIs.

- [TechDraw API](/TechDraw_API/ru "TechDraw API/ru")
- [TechDrawGui API](/TechDrawGui_API/ru "TechDrawGui API/ru")

## Ограничения

- Do not cut, copy and paste TechDraw objects in the [Tree view](/Tree_view "Tree view") as this generally does not work out well.
- Do not drag TechDraw objects in the [Tree view](/Tree_view "Tree view") with the mouse.

## Руководства

- [TechDraw руководство для начинающих](/Basic_TechDraw_Tutorial/ru "Basic TechDraw Tutorial/ru"): введение в создание чертежей с помощью Верстака TechDraw.
- [Создание нового шаблона](/TechDraw_TemplateHowTo/ru "TechDraw TemplateHowTo/ru"): инструкции по созданию нового шаблона страницы в Inkscape для использования с Верстака TechDraw.
- [Measurement Of Angles On Holes](/Measurement_Of_Angles_On_Holes/ru "Measurement Of Angles On Holes/ru"): инструкция по добавлению осевых линий и последующих угловых представлений на отверстиях.
- [Разнообразная информация](/TechDraw_HowTo_Page/ru "TechDraw HowTo Page/ru"): инструкции по различным настройкам, таким как обозначение центральных осей и т. п.
- [Создание окружностей с заданным шагом](/TechDraw_Pitch_Circle_Tutorial/ru "TechDraw Pitch Circle Tutorial/ru"): инструкция по созданию окружностей по траектории с шагом.

Видео уроки by sliptonic

- TechDraw Workbench [Part 1 (Basics)](https://www.youtube.com/watch?v=7LbOmSGW9F0), [Part 2 (Dimensions)](https://www.youtube.com/watch?v=z3w84RfvqaE), [Part 3 (Multiview)](https://www.youtube.com/watch?v=uNjXg-m38aI)
- Верстак TechDraw [Part 4 (Section and Detail)](https://www.youtube.com/watch?v=3zSdeFV6I5o), [Part 5 (Customizing Templates)](https://www.youtube.com/watch?v=kcmdJ7xa7gg)

## Development

Do you want to know about the future of the TechDraw Workbench? Visit [the TechDraw Roadmap Page](/TechDraw_Roadmap "TechDraw Roadmap") to learn more.

Retrieved from "<http://wiki.freecad.org/index.php?title=TechDraw_Workbench/ru&oldid=1492898>"
