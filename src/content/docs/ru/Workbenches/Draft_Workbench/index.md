---
title: Верстак Draft
---

![](/images/Workbench_Draft.svg)

Логотип верстака Draft на котором изображен кульман

## Введение

![](/images/Workbench_Draft.svg) Верстак Draft Workbench позволяет начертить простые двумерные объекты и предлагает некоторые инструменты для их последующей модификации. Он так же предоставляет инструменты для указания рабочей плоскости, сетки и привязки для точного управления расположением геометрии.

Создаваемые плоские объекты могут использоваться для общего черчения как в программах Inkscape или Autocad. Эти плоские фигуры могут так же использоваться как базовые компоненты трёхмерных объектов, создаваемых другими верстаками, например, ![](/images/Workbench_Part.svg) [Part](/Part_Workbench/ru "Part Workbench/ru") и ![](/images/Workbench_Arch.svg) [Arch](/Arch_Workbench/ru "Arch Workbench/ru"). Так же возможно преобразование объектов Draft в объекты ![](/images/Workbench_Sketcher.svg) [Sketch](/Sketcher_Workbench/ru "Sketcher Workbench/ru"), это значит, что фигуры могут так же использоваться в ![](/images/Workbench_PartDesign.svg) [верстаке PartDesign](/PartDesign_Workbench/ru "PartDesign Workbench/ru") для создания твёрдых тел.

The Draft Workbench also provides tools to define a [working plane](/Draft_SelectPlane "Draft SelectPlane"), a [grid](/Draft_Snap_Grid "Draft Snap Grid"), and a [snapping system](/Draft_Snap "Draft Snap") to precisely control the position of geometry.

FreeCAD — это, прежде всего, приложение для 3D-моделирования, и поэтому его инструменты для двумерного рисования не столь совершенны, как в других чертёжных программах. Если вашей основной целью является создание сложных 2D-чертежей и файлов в формате [DXF](/DXF/ru "DXF/ru"), и вам не нужно 3D-моделирование, возможно вы захотите использовать специальное программное обеспечения для технического черчения, такое как [LibreCAD](https://ru.wikipedia.org/wiki/LibreCAD), [QCad](https://ru.wikipedia.org/wiki/QCad), TurboCad и другие.

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

Панель инструментов Draft появляется когда стартует верстак, и позволяет выбрать рабочую плоскость, вместе с некоторыми визуальными параметрами вроде цвета линии, цвета фигур, размера текста, ширина линии, и автоматической группы.

![](/images/Draft_tray_default.png)

- ![](/images/Draft_tray_button_plane.png) [Select Plane](/Draft_SelectPlane "Draft SelectPlane"): selects the current Draft working plane. Also available in the menu: **Draft → Utilities → ![](/images/Draft_SelectPlane.svg) Select Plane**.

- ![](/images/Draft_tray_button_style.png) [Set style](/Draft_SetStyle "Draft SetStyle"): sets the default style for new objects. Also available in the menu: **Draft → Utilities → ![](/images/Draft_SetStyle.svg) Set style**.

- ![](/images/Draft_tray_button_construction.png) [Toggle construction mode](/Draft_ToggleConstructionMode "Draft ToggleConstructionMode"): switches Draft construction mode on or off. Also available in the menu: **Draft → Utilities → ![](/images/Draft_ToggleConstructionMode.svg) Toggle construction mode**.

- ![](/images/Draft_tray_button_layer.png) [AutoGroup](/Draft_AutoGroup "Draft AutoGroup"): changes the active [Draft Layer](/Draft_Layer "Draft Layer") or, optionally, the active [Std Group](/Std_Group "Std Group") or group-like [BIM](/BIM_Workbench "BIM Workbench") object.

## Draft annotation scale widget

With the [Draft annotation scale widget](/Draft_annotation_scale_widget "Draft annotation scale widget") the Draft annotation scale can be specified.

![](/images/Draft_annotation_scale_widget_button.png)

## Draft snap widget

The [Draft snap widget](/Draft_snap_widget "Draft snap widget") can be used as an alternative for the [Draft snap toolbar](#Draft_snap_toolbar).

![](/images/Draft_snap_widget_button.png)

## Панель инструментов привязки Draft

Панель инструментов [Draft Snap](/Draft_Snap/ru "Draft Snap/ru") позволяет выбрать текущий режим привязки. Его кнопка остаётся ненажатой при активности режима.

- ![](/images/Draft_Snap_Lock.svg) [Snap lock](/Draft_Snap_Lock "Draft Snap Lock"): enables or disables snapping globally.

- ![](/images/Draft_Snap_Endpoint.svg) [Snap endpoint](/Draft_Snap_Endpoint "Draft Snap Endpoint"): snaps to the endpoints of edges.

- ![](/images/Draft_Snap_Midpoint.svg) [Snap midpoint](/Draft_Snap_Midpoint "Draft Snap Midpoint"): snaps to the midpoint of edges.

- ![](/images/Draft_Snap_Center.svg) [Snap center](/Draft_Snap_Center "Draft Snap Center"): snaps to the center point of faces and circular edges, and to the Данные**Placement** point of [Draft WorkingPlaneProxies](/Draft_WorkingPlaneProxy "Draft WorkingPlaneProxy") and [Arch BuildingParts](/Arch_BuildingPart "Arch BuildingPart").

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

## Сервисные инструменты

- ![](/images/Draft_LayerManager.svg) [Manage layers...](/Draft_LayerManager "Draft LayerManager"): allows to manage the layers in a document. [introduced in 0.21](/Release_notes_0.21 "Release notes 0.21")

- ![](/images/Draft_AddNamedGroup.svg) [New named group](/Draft_AddNamedGroup "Draft AddNamedGroup"): creates a named [Std Group](/Std_Group "Std Group") and adds objects to that group.

- ![](/images/Draft_SelectGroup.svg) [Select group](/Draft_SelectGroup "Draft SelectGroup"): selects the contents of [Std Groups](/Std_Group "Std Group") or group-like [BIM](/BIM_Workbench "BIM Workbench") objects.

- ![](/images/Draft_AddToLayer.svg) [Add to layer...](/Draft_AddToLayer "Draft AddToLayer"): adds objects to a layer, or removes them from any layer. [introduced in 1.1](/Release_notes_1.1 "Release notes 1.1")

- ![](/images/Draft_AddToGroup.svg) [Add to group...](/Draft_AddToGroup "Draft AddToGroup"): adds objects to a [Std Group](/Std_Group "Std Group"). It can also ungroup objects.

- ![](/images/Draft_AddConstruction.svg) [Add to construction group](/Draft_AddConstruction "Draft AddConstruction"): adds objects to the [Draft construction group](/Draft_ToggleConstructionMode "Draft ToggleConstructionMode").

- ![](/images/Draft_ToggleDisplayMode.svg) [Toggle normal/wireframe display](/Draft_ToggleDisplayMode "Draft ToggleDisplayMode"): switches the Вид**Display Mode** property of selected objects between `Flat Lines` and `Wireframe`.

- ![](/images/Draft_WorkingPlaneProxy.svg) [Create working plane proxy](/Draft_WorkingPlaneProxy "Draft WorkingPlaneProxy"): creates a working plane proxy to save the current [Draft working plane](/Draft_SelectPlane "Draft SelectPlane").

## Меню Вспомогательные

Дополнительные инструменты доступны из меню **Draft → Вспомогательные**, или через контекстное меню по правому клику мыши, зависящее от выбранного объекта.

- ![](/images/Draft_ApplyStyle.svg) [Apply current style](/Draft_ApplyStyle "Draft ApplyStyle"): applies the current style settings to selected objects.

- ![](/images/Draft_Layer.svg) [New layer](/Draft_Layer "Draft Layer"): creates a [Draft Layer](/Draft_Layer "Draft Layer").

- ![](/images/Draft_Heal.svg) [Heal](/Draft_Heal "Draft Heal"): heals problematic Draft objects found in very old files.

- ![](/images/Draft_ShowSnapBar.svg) [Show snap toolbar](/Draft_ShowSnapBar "Draft ShowSnapBar"): shows the [Draft snap toolbar](#Draft_snap_toolbar).

## Дополнительные возможности

- [Геометрические ограничения](/Draft_Constrain/ru "Draft Constrain/ru"): ограничивает указатель в горизонтальном или вертикальном перемещении относительно предыдущей точки.
- [Привязка](/Draft_Snap/ru "Draft Snap/ru"): позволяет разместить новые точки на специальных частях существующих объектов или на сетке.
- [Construction Mode](/Draft_ToggleConstructionMode/ru "Draft ToggleConstructionMode/ru"): позволяет создавать отдельную от остальной геометрию, просто включая или выключая этот режим.
- [Рабочая плоскость](/Draft_SelectPlane/ru "Draft SelectPlane/ru"): позволяет задать плоскость в трёхмерном пространстве, где будут проводиться операции с плоскими фигурами

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

- ![](/images/Draft_SelectPlane.svg) [Write camera position](/Draft_WorkingPlaneProxy#Context_menu "Draft WorkingPlaneProxy"): updates the Вид**View Data** property of the working plane proxy with the current [3D view](/3D_view "3D view") camera settings.

- ![](/images/Draft_SelectPlane.svg) [Write objects state](/Draft_WorkingPlaneProxy#Context_menu "Draft WorkingPlaneProxy"): updates the Вид**Visibility Map** property of the working plane proxy with the current visibility state of objects in the document.

## 3D view context menu

The following additional options are available in the [3D view](/3D_view "3D view") context menu:

### Default options

If there is an active document the context menu contains one additional sub-menu:

- Utilities: a subset of the tools available in the main Draft Utilities menu.

### Text options

See [above](#Text_options).

### Устаревшее

- ![](/images/Draft_Array.svg) [Array](/Draft_Array "Draft Array"): creates an orthogonal array from a selected object. The created array can be turned into a [polar array](/Draft_PolarArray "Draft PolarArray") or a [circular array](/Draft_CircularArray "Draft CircularArray") by changing its Данные**Array Type** property. [obsolete in 0.19](/Release_notes_0.19 "Release notes 0.19")

- ![](/images/Draft_Drawing.svg) [Drawing](/Draft_Drawing "Draft Drawing"): inserts views of selected objects into a [drawing](/Drawing_Workbench "Drawing Workbench") page. Not available in 0.21 and above.

- ![](/images/Draft_ToggleContinueMode.svg) [Toggle continue mode](/Draft_ToggleContinueMode "Draft ToggleContinueMode"): switches continue mode on or off. Not available in 1.0 and above.

## Настройки

- ![](/images/Preferences-draft.svg) [Preferences](/Draft_Preferences/ru "Draft Preferences/ru"): общие настройки для рабочей плоскости и инструментов черчения.
- ![](/images/Preferences-import-export.svg) [Import-Export Preferences](/Import_Export_Preferences/ru "Import Export Preferences/ru"): настройки, доступные для импорта и экспорта в различные форматы файлов.

- ![](/images/Preferences-import-export.svg) [Import Export Preferences](/Import_Export_Preferences "Import Export Preferences"): preferences available for importing from and exporting to different file formats.

## Форматы файлов

Эти функции предназначены для открытия, импорта или экспорта других форматов файлов. Открытие подразумевает открытие нового документа с содержимым файла, в то время как импортирование добавляет содержимое файла в текущий документ. Экспорт сохраняет выделенные объекты в файл. Если ничего не выбрано, будут экспортированы все объекты. Учитывайте, что задача модуля Draft - работа с плоскими объектами, так что процедуры импорта фокусируются на двумерных объектах, хотя форматы DXF и OCA так же поддерживают определения объектов в трёхмерном пространстве (объекты не обязательно плоские), они не импортируют объекты вроде сеток, трйхмерных поверхностей и так далее, а только линии, окружности, тексты или плоские фигуры. Ныне поддерживаемые форматы файлов:
Верстак Draft позволяет FreeCAD импортировать и экспортировать следующие форматы файлов:

- [Autodesk .DXF](/Draft_DXF/ru "Draft DXF/ru"): импорт и экспорт файлов [DXF (Drawing Exchange Format)](http://en.wikipedia.org/wiki/AutoCAD_DXF), созданных в двумерных приложениях САПР. Смотри так же [FreeCAD and DXF Import](/FreeCAD_and_DXF_Import "FreeCAD and DXF Import").
- [Autodesk .DWG](/Draft_DXF/ru "Draft DXF/ru"): импорт и экспорт файлов DWG через экспортёр DXF при установленной утилите [ODA Converter](/Extra_python_modules/ru "Extra python modules/ru"). Смотри так же [FreeCAD and DWG Import](/FreeCAD_and_DWG_Import/ru "FreeCAD and DWG Import/ru").
- [SVG (геометрия)](/Draft_SVG/ru "Draft SVG/ru"): импорт и экспорт файлов [SVG (Scalable Vector Graphics)](http://ru.wikipedia.org/wiki/Scalable_Vector_Graphics), созданных в приложениях векторной графики
- [формат Open Cad .OCA](/Draft_OCA/ru "Draft OCA/ru"): импорт и экспорт файлов OCA/GCAD, потенциально нового [формата файлов открытых САПР](http://groups.google.com/group/open_cad_format)
- [формат Airfoil Data .DAT](/Draft_DAT/ru "Draft DAT/ru"): импорт файлов DAT, описывающих [профили Airfoil](http://www.ae.illinois.edu/m-selig/ads/coord_database.html).

## Модульные тесты

Смотри так же: [Test Workbench](/Testing/ru "Testing/ru").

Для запуска модульных тестов рабочей среды выполните следующие действия с терминала операционной системы.

```
freecad -t TestDraft

```

## Написание сценариев

Инструменты модуля Draft могут использоваться в [макросах](/Macros/ru "Macros/ru") и в консоли [Python](/Python/ru "Python/ru"), используя [программный интерфейс Draft](/Draft_API/ru "Draft API/ru").

Рабочая среда включает модуль для создания образцов всех объектов в новом документе. [introduced in 0.19](/Release_notes_0.19 "Release notes 0.19")

Используйте это, чтобы проверить, что все объекты произведены правильно.

```
import drafttests.draft_test_objects as dto
doc = dto.create_test_file()

```

Проверка кода этого модуля полезна, чтобы понять, как использовать интерфейс программирования.

## Tutorials

## Учебники

- [Руководство по Draft](/Draft_tutorial/ru "Draft tutorial/ru")
- [Руководство по инструменту Draft преобразования текста в кривые](/Draft_ShapeString_tutorial/ru "Draft ShapeString tutorial/ru")

Retrieved from "<http://wiki.freecad.org/index.php?title=Draft_Workbench/ru&oldid=1547505>"
