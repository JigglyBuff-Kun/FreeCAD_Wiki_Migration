---
title: Bancada de trabalho Draft
---

![](/images/Workbench_Draft.svg)

Ícone da bancada de trabalho de draft

## Introdução

A ![](/images/Workbench_Draft.svg) bancada de trabalho Draft permite desenhar objetos 2D simples, e oferece várias ferramentas para modificá-los posteriormente. Ele também fornece ferramentas para definir um plano de trabalho, uma grade e um sistema de disparo para controlar com precisão a posição de sua geometria.

Os objetos 2D criados podem ser usados para esboço geral de uma forma semelhante à do Inkscape ou do Autocad. Estas formas 2D também podem ser usadas como componentes base de objetos 3D criados com outras bancadas de trabalho, por exemplo, a ![](/images/Workbench_Part.svg) [bancada de trabalho Part](/Part_Workbench/pt-br "Part Workbench/pt-br") e [Arch](/Arch_Workbench/pt-br "Arch Workbench/pt-br").
A conversão de objetos de Draft para ![](/images/Workbench_Sketcher.svg) [Sketches](/Sketcher_Workbench/pt-br "Sketcher Workbench/pt-br") também é possível, o que significa que as formas também podem ser usadas com a ![](/images/Workbench_PartDesign.svg) [bancada de trabalho PartDesign](/PartDesign_Workbench/pt-br "PartDesign Workbench/pt-br") para a criação de corpos sólidos.

The Draft Workbench also provides tools to define a [working plane](/Draft_SelectPlane "Draft SelectPlane"), a [grid](/Draft_Snap_Grid "Draft Snap Grid"), and a [snapping system](/Draft_Snap "Draft Snap") to precisely control the position of geometry.

O FreeCAD é principalmente uma aplicação de modelagem 3D, e assim suas ferramentas 2D não são tão avançadas como em outros programas de desenho. Se seu objetivo principal é a produção de desenhos 2D complexos e arquivos [DXF](/DXF/pt-br "DXF/pt-br"), e você não precisa de modelagem 3D, talvez você queira considerar um programa de software dedicado ao desenho técnico, como o [LibreCAD](https://en.wikipedia.org/wiki/LibreCAD), [QCad](https://en.wikipedia.org/wiki/QCad), ou outros.

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

## Barra de ferramentas da bandeja de rascunho

A barra de ferramentas [Bandeja de rascunho](/Draft_Tray/pt-br "Draft Tray/pt-br") aparece quando a bancada de trabalho é iniciada, e permite selecionar o plano de trabalho, com algumas propriedades visuais como a cor da linha, cor da forma, largura da linha, tamanho do texto e grupo automático.

![](/images/Draft_tray_default.png)

- ![](/images/Draft_SelectPlane.svg) [Plano de trabalho](/Draft_SelectPlane/pt-br "Draft SelectPlane/pt-br"): define um plano de trabalho a partir de uma vista padrão ou de uma face selecionada.
- ![](/images/Draft_SetStyle.svg) [Estilo de conjunto](/Draft_SetStyle/pt-br "Draft SetStyle/pt-br"): define o estilo padrão para novos objetos, e opcionalmente aplica o estilo a objetos e grupos selecionados.
- ![](/images/Draft_ToggleConstructionMode.svg)[Modo de construção](/Draft_ToggleConstructionMode/pt-br "Draft ToggleConstructionMode/pt-br"): ativa ou desativa o modo de construção de rascunho.
- ![](/images/Draft_AutoGroup.svg) [Grupo automático](/Draft_AutoGroup/pt-br "Draft AutoGroup/pt-br"): colocar automaticamente novos objetos em um determinado ![](/images/Std_Group.svg)[Grupo padrão](/Std_Group/pt-br "Std Group/pt-br"), ![](/images/Draft_Layer.svg)[Camada](/Draft_Layer/pt-br "Draft Layer/pt-br"), ou um dos objetos de grupo do [Bancada de trabalho Arch](/Arch_Workbench/pt-br "Arch Workbench/pt-br"), como ![](/images/Arch_BuildingPart.svg). [Parte de um edifício](/Arch_BuildingPart/pt-br "Arch BuildingPart/pt-br"). [introduced in 0.17](/Release_notes_0.17 "Release notes 0.17")

- ![](/images/Draft_tray_button_style.png) [Set style](/Draft_SetStyle "Draft SetStyle"): sets the default style for new objects. Also available in the menu: **Draft → Utilities → ![](/images/Draft_SetStyle.svg) Set style**.

- ![](/images/Draft_tray_button_construction.png) [Toggle construction mode](/Draft_ToggleConstructionMode "Draft ToggleConstructionMode"): switches Draft construction mode on or off. Also available in the menu: **Draft → Utilities → ![](/images/Draft_ToggleConstructionMode.svg) Toggle construction mode**.

- ![](/images/Draft_tray_button_layer.png) [AutoGroup](/Draft_AutoGroup "Draft AutoGroup"): changes the active [Draft Layer](/Draft_Layer "Draft Layer") or, optionally, the active [Std Group](/Std_Group "Std Group") or group-like [BIM](/BIM_Workbench "BIM Workbench") object.

## Draft annotation scale widget

Com o [Widget de escala de anotação](/Draft_annotation_scale_widget/pt-br "Draft annotation scale widget/pt-br") a escala de anotação Draft pode ser especificada. O widget está localizado na [Barra de status](/Status_bar/pt-br "Status bar/pt-br").

![](/images/Draft_annotation_scale_widget_button.png)

## Draft snap widget

O [Widget de ancoragem](/Draft_snap_widget/pt-br "Draft snap widget/pt-br") pode ser usado como uma alternativa para a [Barra de ferramentas Rascunho de pressão](#Barra_de_ferramentas_Rascunho_de_pressão). O widget está localizado na [Barra de status](/Status_bar/pt-br "Status bar/pt-br").

![](/images/Draft_snap_widget_button.png)

## Barra de ferramentas Rascunho de pressão

A barra de ferramentas [Captura](/Draft_Snap/pt-br "Draft Snap/pt-br") permite selecionar o modo de precisão atual. Seu botão se mantém pressionado quando um modo está ativo.

- ![](/images/Draft_Snap_Lock.svg) [Snap lock](/Draft_Snap_Lock "Draft Snap Lock"): enables or disables snapping globally.

- ![](/images/Draft_Snap_Endpoint.svg) [Snap endpoint](/Draft_Snap_Endpoint "Draft Snap Endpoint"): snaps to the endpoints of edges.

- ![](/images/Draft_Snap_Midpoint.svg) [Snap midpoint](/Draft_Snap_Midpoint "Draft Snap Midpoint"): snaps to the midpoint of edges.

- ![](/images/Draft_Snap_Center.svg) [Snap center](/Draft_Snap_Center "Draft Snap Center"): snaps to the center point of faces and circular edges, and to the Dados**Placement** point of [Draft WorkingPlaneProxies](/Draft_WorkingPlaneProxy "Draft WorkingPlaneProxy") and [Arch BuildingParts](/Arch_BuildingPart "Arch BuildingPart").

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

- ![](/images/Draft_LayerManager.svg) [Gerenciar camadas...](/Draft_LayerManager "Draft LayerManager"): permite gerenciar as camadas em um documento. [introduzido na versão 0.21](/Release_notes_0.21 "Release notes 0.21")

- ![](/images/Draft_AddNamedGroup.svg) [New named group](/Draft_AddNamedGroup "Draft AddNamedGroup"): creates a named [Std Group](/Std_Group "Std Group") and adds objects to that group.

- ![](/images/Draft_SelectGroup.svg) [Select group](/Draft_SelectGroup "Draft SelectGroup"): selects the contents of [Std Groups](/Std_Group "Std Group") or group-like [BIM](/BIM_Workbench "BIM Workbench") objects.

- ![](/images/Draft_AddToLayer.svg) [Add to layer...](/Draft_AddToLayer "Draft AddToLayer"): adds objects to a layer, or removes them from any layer. [introduced in 1.1](/Release_notes_1.1 "Release notes 1.1")

- ![](/images/Draft_AddToGroup.svg) [Add to group...](/Draft_AddToGroup "Draft AddToGroup"): adds objects to a [Std Group](/Std_Group "Std Group"). It can also ungroup objects.

- ![](/images/Draft_AddConstruction.svg) [Add to construction group](/Draft_AddConstruction "Draft AddConstruction"): adds objects to the [Draft construction group](/Draft_ToggleConstructionMode "Draft ToggleConstructionMode").

- ![](/images/Draft_ToggleDisplayMode.svg) [Toggle normal/wireframe display](/Draft_ToggleDisplayMode "Draft ToggleDisplayMode"): switches the Vista**Display Mode** property of selected objects between `Flat Lines` and `Wireframe`.

- ![](/images/Draft_WorkingPlaneProxy.svg) [Create working plane proxy](/Draft_WorkingPlaneProxy "Draft WorkingPlaneProxy"): creates a working plane proxy to save the current [Draft working plane](/Draft_SelectPlane "Draft SelectPlane").

## Ferramentas adicionais

The **Draft → Utilities** menu contains several tools. Most of them can also be accessed from toolbars or the [Draft Tray](/Draft_Tray "Draft Tray") and have already been mentioned above. For the following tools this is not the case:

- ![](/images/Draft_ApplyStyle.svg) [Apply current style](/Draft_ApplyStyle "Draft ApplyStyle"): applies the current style settings to selected objects.

- ![](/images/Draft_Layer.svg) [New layer](/Draft_Layer "Draft Layer"): creates a [Draft Layer](/Draft_Layer "Draft Layer").

- ![](/images/Draft_Heal.svg) [Heal](/Draft_Heal "Draft Heal"): heals problematic Draft objects found in very old files.

- ![](/images/Draft_ShowSnapBar.svg) [Show snap toolbar](/Draft_ShowSnapBar "Draft ShowSnapBar"): shows the [Draft snap toolbar](#Draft_snap_toolbar).

## Características adicionais

- [Restrições](/Draft_Constrain/pt-br "Draft Constrain/pt-br"): limitar o ponteiro a movimentos horizontais ou verticais em relação a um ponto anterior.
- [Captura](/Draft_Snap/pt-br "Draft Snap/pt-br"): colocar novos pontos em lugares especiais sobre objetos existentes ou sobre a grade.
- [Modo de construção](/Draft_ToggleConstructionMode/pt-br "Draft ToggleConstructionMode/pt-br"): Permite criar geometrias separadas das demais, simplesmente ligando e desligando-as.
- [Plano de trabalho](/Draft_SelectPlane/pt-br "Draft SelectPlane/pt-br"): permite selecionar uma superfície sobre a qual você pode construir suas formas.

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

- ![](/images/Draft_SelectPlane.svg) [Write camera position](/Draft_WorkingPlaneProxy#Context_menu "Draft WorkingPlaneProxy"): updates the Vista**View Data** property of the working plane proxy with the current [3D view](/3D_view "3D view") camera settings.

- ![](/images/Draft_SelectPlane.svg) [Write objects state](/Draft_WorkingPlaneProxy#Context_menu "Draft WorkingPlaneProxy"): updates the Vista**Visibility Map** property of the working plane proxy with the current visibility state of objects in the document.

## 3D view context menu

The following additional options are available in the [3D view](/3D_view "3D view") context menu:

### Default options

If there is an active document the context menu contains one additional sub-menu:

- Utilities: a subset of the tools available in the main Draft Utilities menu.

### Text options

See [above](#Text_options).

## Ferramentas obsoletas

- ![](/images/Draft_Array.svg) [Array](/Draft_Array "Draft Array"): creates an orthogonal array from a selected object. The created array can be turned into a [polar array](/Draft_PolarArray "Draft PolarArray") or a [circular array](/Draft_CircularArray "Draft CircularArray") by changing its Dados**Array Type** property. [obsolete in 0.19](/Release_notes_0.19 "Release notes 0.19")

- ![](/images/Draft_Drawing.svg) [Drawing](/Draft_Drawing "Draft Drawing"): inserts views of selected objects into a [drawing](/Drawing_Workbench "Drawing Workbench") page. Not available in 0.21 and above.

- ![](/images/Draft_ToggleContinueMode.svg) [Toggle continue mode](/Draft_ToggleContinueMode "Draft ToggleContinueMode"): switches continue mode on or off. Not available in 1.0 and above.

## Preferências

- ![](/images/Preferences-draft.svg) [Preferências](/Draft_Preferences/pt-br "Draft Preferences/pt-br"): preferências gerais para o plano de trabalho e para as ferramentas de desenho.
- ![](/images/Preferences-import-export.svg) [Preferências de exportação de importação](/Import_Export_Preferences/pt-br "Import Export Preferences/pt-br"): preferências disponíveis para importação e exportação de e para diferentes formatos de arquivo.

- ![](/images/Preferences-import-export.svg) [Import Export Preferences](/Import_Export_Preferences "Import Export Preferences"): preferences available for importing from and exporting to different file formats.

## Formatos de arquivo

The Draft Workbench provides FreeCAD with importers and exporters for several file formats. These are used by the [Std Import](/Std_Import "Std Import") and [Std Export](/Std_Export "Std Export") commands.

- [Autodesk .DXF](/Draft_DXF/pt-br "Draft DXF/pt-br"): importação e exportação [Drawing Exchange Format](http://en.wikipedia.org/wiki/AutoCAD_DXF) arquivos criados com aplicações CAD 2D. Veja também [FreeCAD e DXF Import](/FreeCAD_and_DXF_Import/pt-br "FreeCAD and DXF Import/pt-br").
- Autodesk .DWG: importa e exporta arquivos DWG através do importador DXF, quando o utilitário [ODA Converter](</Extra_python_modules#ODA_Converter_(anteriormente_Teigha_Converter)> "Extra python modules") é instalado. Veja também [FreeCAD e DWG Import](/FreeCAD_and_DWG_Import/pt-br "FreeCAD and DWG Import/pt-br").
- [SVG](/Draft_SVG/pt-br "Draft SVG/pt-br"): importação e exportação [Scalable Vector Graphics](http://en.wikipedia.org/wiki/Scalable_Vector_Graphics) arquivos criados com aplicações de desenho vetorial.
- [Open Cad format .OCA](/Draft_OCA/pt-br "Draft OCA/pt-br"): importa e exporta arquivos OCA/GCAD, um formato de arquivo CAD potencialmente novo [abrir arquivo CAD](http://groups.google.com/group/open_cad_format).
- [Airfoil Data Format .DAT](/Draft_DAT/pt-br "Draft DAT/pt-br"): importa arquivos DAT descrevendo [Airfoil profiles](http://www.ae.illinois.edu/m-selig/ads/coord_database.html).

## Testes unitários

_Veja também:_[Bancada de trabalho Testing framework](/Testing/pt-br "Testing/pt-br").

Para executar os testes unitários da bancada de trabalho, executar o seguinte a partir do terminal do sistema operacional.

```
freecad -t TestDraft

```

## Scripting

As ferramentas Draft podem ser usadas em [macros](/Macros/pt-br "Macros/pt-br") e do console [Python](/Python/pt-br "Python/pt-br") usando o [Draft API](/index.php?title=Draft_API/pt-br&action=edit&redlink=1 "Draft API/pt-br (page does not exist)").

A bancada de trabalho inclui um módulo para criar amostras de todos os objetos em um novo documento. [introduced in 0.19](/Release_notes_0.19 "Release notes 0.19")

Use isto para testar se todos os objetos são produzidos corretamente.

```
import drafttests.draft_test_objects as dto
doc = dto.create_test_file()

```

A inspeção do código deste módulo é útil para entender como utilizar a interface de programação.

## Tutorials

- [Draft tutorial](/Draft_tutorial "Draft tutorial")
- [Draft ShapeString tutorial](/Draft_ShapeString_tutorial "Draft ShapeString tutorial")

Retrieved from "<http://wiki.freecad.org/index.php?title=Draft_Workbench/pt-br&oldid=1547507>"
