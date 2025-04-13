---
title: Набросок Размеры
---
|  |
| --- |
| Draft Dimension |
| Расположение в меню |
| Черчение → Размер |
| Верстаки |
| [Draft](/Draft_Workbench/ru "Draft Workbench/ru"), [Arch](/Arch_Workbench/ru "Arch Workbench/ru") |
| Быстрые клавиши |
| D I |
| Представлено в версии |
| - |
| См. также |
| [Перевернуть размер](/Draft_FlipDimension/ru "Draft FlipDimension/ru") |
|  |

## Description

## Описание

Инструмент измерения создает измерение в текущем документе с двумя точками, определяющими расстояние для измерения, и третью точку, определяющую, где проходит размерная линия.

Linear dimensions based on edges and radial dimensions are parametric. This means that they will update if the measured edge is modified. Measured edges can belong to Draft objects but also to solid bodies. Angular dimensions are not parametric.

Draft Dimensions can be displayed on a [TechDraw Workbench](/TechDraw_Workbench "TechDraw Workbench") page using the [TechDraw DraftView](/TechDraw_DraftView "TechDraw DraftView") or [TechDraw ArchView](/TechDraw_ArchView "TechDraw ArchView") commands. Alternatively the [TechDraw Workbench](/TechDraw_Workbench "TechDraw Workbench") offer its own dimension commands. But these create dimensions that are only displayed on the drawing page and not in the [3D view](/3D_view "3D view").

![](/images/Screenshot_Draft_Dimension.jpg)

![](/images/Screenshot_Draft_Dimension.jpg)

## Usage

See also: [Draft Tray](/Draft_Tray "Draft Tray"), [Draft Snap](/Draft_Snap "Draft Snap") and [Draft Constrain](/Draft_Constrain "Draft Constrain").

### Linear dimension

## Использование

1. Нажмите кнопку ![](/images/Draft_Dimension.png) [Draft Dimension](/Draft_Dimension "Draft Dimension") или нажмите  D, затем клавиши  I
2. Нажмите точку на трехмерном изображении или введите coordinate
3. Нажмите вторую точку на трехмерном представлении или введите coordinate
4. Нажмите третью кнопку на трехмерном представлении или введите coordinate

### Radial dimension

1. Optionally select a circular edge in the [3D view](/3D_view "3D view").
2. Invoke the command as explained above.
3. The **Dimension** task panel opens. See [Options](#Options) for more information.
4. If you have not yet selected an edge do one of the following:
   * Press E or the ![](/images/View-select.svg) Select edge button and select a circular edge in the [3D view](/3D_view "3D view").
   * Hold down the Alt key, select a circular edge in the [3D view](/3D_view "3D view") and release the Alt key.
5. To position the dimension line do one of the following:
   * For a diameter dimension:
     + Pick a point in the [3D view](/3D_view "3D view"), or type coordinates and press the ![](/images/Draft_AddPoint.svg) Enter point button.
   * For a radial dimension:
     + Hold down the Shift key and pick a point in the [3D view](/3D_view "3D view").

### Angular dimension

1. Invoke the command as explained above.
2. The **Dimension** task panel opens. See [Options](#Options) for more information.
3. Do one of the following:
   * Press E or the ![](/images/View-select.svg) Select edge button and select a first straight edge in the [3D view](/3D_view "3D view"). Repeat this to select a second straight edge.
   * Hold down the Alt key, select two straight edges in the [3D view](/3D_view "3D view") and release the Alt key.
4. To position the dimension arc pick a point in the [3D view](/3D_view "3D view").
5. The displayed angle depends on the edges and the picked point.

## Options

The single character keyboard shortcuts available in the task panel can be changed. See [Draft Preferences](/Draft_Preferences "Draft Preferences"). The shortcuts mentioned here are the default shortcuts (for version 1.0).

* To manually enter coordinates enter the X, Y and Z component, and press Enter after each. Or you can press the ![](/images/Draft_AddPoint.svg) Enter point button when you have the desired values. It is advisable to move the pointer out of the [3D view](/3D_view "3D view") before entering coordinates.
* Press R or click the **Relative** checkbox to toggle relative mode. If relative mode is on, coordinates are relative to the last point, if available, else they are relative to the coordinate system origin.
* Press G or click the **Global** checkbox to toggle global mode. If global mode is on, coordinates are relative to the global coordinate system, else they are relative to the [working plane](/Draft_SelectPlane "Draft SelectPlane") coordinate system.
* Press N or click the **Continue** checkbox to toggle continue mode. This mode only works for linear dimensions. If continue mode is on, the command will restart after finishing, allowing you to continue creating dimensions. All subsequent dimensions will start from the final point of the previous dimension, and will use the same baseline as the first dimension. Note that edge selection is not possible for subsequent dimensions.
* Press S to switch [Draft snapping](/Draft_Snap "Draft Snap") on or off.
* Press Esc or the Close button to finish the command.

## Notes

* Linear and radial Draft Dimensions can be edited with the [Draft Edit](/Draft_Edit "Draft Edit") command.
* Draft Dimensions created or saved with [FreeCAD version 0.21](/Release_notes_0.21 "Release notes 0.21") are not backward compatible.

## Preferences

* [introduced in 1.1](/Release_notes_1.1 "Release notes 1.1"): When created, the text of dimensions is oriented automatically relative to the current [working plane](/Draft_SelectPlane "Draft SelectPlane") via their Вид**Flip Text** property. A [fine-tuning](/Fine-tuning#Draft_Workbench "Fine-tuning") parameter is available to disable this behavior.

## Properties

See also: [Property editor](/Property_editor "Property editor").

A Draft Dimension object is derived from an [App FeaturePython](/App_FeaturePython "App FeaturePython") object and inherits all its properties. The following properties are additional unless otherwise stated:

### Data linear and radial dimension

Dimension

* Данные**Dimline** (`VectorDistance`): specifies the point through which the dimension line passes.
* Данные**Linked Geometry** (`LinkSubList`): specifies the object and its subelement(s) the dimension is linked to.
* Данные**Normal** (`Vector`): specifies the normal of the plane of the text.
* Данные (hidden)**Support** (`Link`): specifies the measured object.

Linear/radial dimension

* Данные**Direction** (`Vector`): specifies the direction of the measurement.
* Данные**Distance** (`Length`): (read-only) specifies the value of the measurement.
* Данные**End** (`VectorDistance`): specifies the end point of the measurement.
* Данные**Start** (`VectorDistance`): specifies the start point of the measurement.

Radial dimension

* Данные**Diameter** (`Bool`): specifies if a radial dimension is displayed as a diameter dimension. Not used for linear dimensions.

### Data angular dimension

Angular dimension

* Данные**Angle** (`Angle`): (read-only) specifies the value of the measurement.
* Данные**Center** (`VectorDistance`): specifies the center of the measurement.
* Данные**First Angle** (`Angle`): specifies the start angle of the measurement.
* Данные**Last Angle** (`Angle`): specifies the end angle of the measurement.

Dimension

* Данные**Dimline** (`VectorDistance`): specifies the point through which the dimension arc passes.
* Данные (hidden)**Linked Geometry** (`LinkSubList`): not used.
* Данные (hidden)**Normal** (`Vector`): specifies the normal of the plane of the dimension.
* Данные (hidden)**Support** (`Link`): not used.

### View

Annotation

* Вид**Annotation Style** (`Enumeration`): specifies the annotation style applied to the dimension. See [Draft AnnotationStyleEditor](/Draft_AnnotationStyleEditor "Draft AnnotationStyleEditor").
* Вид**Scale Multiplier** (`Float`): specifies the general scaling factor applied to the dimension.

Display Options

* Вид**Display Mode** (`Enumeration`): specifies how the text is displayed. If it is `World` the text will be displayed on a plane defined by the Данные**Normal** of the measurement. If it is `Screen` the text will always face the screen. This is an inherited property. The mentioned options are the renamed options ([introduced in 0.21](/Release_notes_0.21 "Release notes 0.21")).

Graphics

* Вид**Arrow Size** (`Length`): specifies the size of the symbols displayed at the ends of the dimension line or arc.
* Вид**Arrow Type** (`Enumeration`): specifies the type of symbol displayed at the ends of the dimension line or arc, which can be `Dot`, `Circle`, `Arrow`, `Tick` or `Tick-2`.
* Вид**Dim Overshoot** (`Distance`): specifies the additional length added to the dimension line. Not used for angular dimensions.
* Вид**Ext Lines** (`Distance`): specifies the length of the extension lines that go from the dimension line to the measured points. Use `0` for full extension lines. A negative value defines the gap between the ends of the extension lines and the measured points. A positive value defines the maximum length of the extension lines. Only used for linear dimensions.
* Вид**Ext Overshoot** (`Distance`): specifies the additional length of the extension lines beyond the dimension line. Not used for angular dimensions.
* Вид**Flip Arrows** (`Bool`): specifies whether to flip the orientation of the symbols at the ends of the dimension line or arc. Only works if the symbols are arrows.
* Вид**Line Color** (`Color`): specifies the color of the dimension line or arc, and the arrows.
* Вид**Line Width** (`Float`): specifies the width of the lines or arc belonging to the dimension.
* Вид**Show Line** (`Bool`): specifies whether to display the dimension line. Does not affect the display of extension lines and overshoots. Not used for angular dimensions.

Text

* Вид**Flip Text** (`Bool`): specifies whether to flip the orientation of the text.
* Вид**Font Name** (`Font`): specifies the font used to draw the text. It can be a font name, such as `Arial`, a default style such as `sans`, `serif` or `mono`, a family such as `Arial,Helvetica,sans`, or a name with a style such as `Arial:Bold`. If the given font is not found on the system, a default font is used instead.
* Вид**Font Size** (`Length`): specifies the size of the letters. The text can be invisible in the [3D view](/3D_view "3D view") if this value is very small.
* Вид**Override** (`String`): specifies a custom text to display instead of the actual measurement. Use the string `$dim` inside the text to include the measurement.
* Вид**Text Color** (`Color`): specifies the color of the text. [introduced in 0.21](/Release_notes_0.21 "Release notes 0.21")
* Вид**Text Position** (`VectorDistance`): specifies the position of the text in absolute coordinates. `[0, 0, 0]` will display the text in its default position near the dimension line or arc.
* Вид**Text Spacing** (`Length`): specifies the space between the text and the dimension line or arc.

Units

* Вид**Decimals** (`Integer`): specifies the number of decimal places to display for the measurement.
* Вид**Show Unit** (`Bool`): specifies whether to display the unit next to the numerical value of the measurement. Not used for angular dimensions.
* Вид**Unit Override** (`String`): specifies the unit in which to express the measurement, for example, `km`, `m`, `cm`, `mm`, `mi`, `ft`, `in` or `arch` for arch units. Leave this blank to use the default unit. Not used for angular dimensions.

## Scripting

## Сценарии

Инструмент Инструмент измерения быть использован в [макросах](/Macros/ru "Macros/ru") и из консоли Python следующими функциями:

To create a Draft Dimension use the `make_dimension` method ([introduced in 0.19](/Release_notes_0.19 "Release notes 0.19")) of the Draft module. This method replaces the deprecated `makeDimension` method.

```
dimension = make_dimension(p1, p2, p3=None, p4=None)

```

There are various ways to invoke this method, depending on the arguments passed to it:

```
dimension = make_dimension(p1, p2, p3=None)
dimension = make_dimension(object, i1, i2, p4=None)
dimension = make_dimension(object, i1, mode, p4=None)

```

* Создает объект Dimension с размерной линией, проходящей через p3.
* Объект Dimension принимает значение [Черновая линия ширины и цвет](/Draft_Tray "Draft Tray"), заданное в командной строке.
* Существует несколько способов создания измерения, в зависимости от аргументов, которые вы передаете ему:

1. (p1, p2, p3): создает стандартный размер от p1 до p2.
2. (object, i1, i2, p3): создает связанный размер с данным объектом, измеряя расстояние между его вершинами, индексированными i1 и i2.
3. (object, i1, mode, p3): создает связанный размер с данным объектом, i1 - индекс (изогнутого) края для измерения, а режим - либо «радиус», либо «диаметр». Возвращает вновь созданный объект.

To create an angular dimension use the following method:

```
dimension = make_angular_dimension(center, angles, p3, normal=None)
dimension = make_angular_dimension(center, [angle1, angle2], p3, normal=None)

```

* создает угловой размер из данного центра с заданным списком углов, проходящих через р3.
* Возвращает вновь созданный объект.

The view properties of `dimension` can be changed by overwriting its attributes; for example, overwrite `ViewObject.FontSize` with the new size in millimeters.

Пример:

```
import FreeCAD as App
import Draft

doc = App.newDocument()

p1 = App.Vector(0, 0, 0)
p2 = App.Vector(1000, 1000, 0)
p3 = App.Vector(-2500, 0, 0)
dimension1 = Draft.make_dimension(p1, p2, p3)
dimension1.ViewObject.FontSize = 200

polygon = Draft.make_polygon(3, radius=1000)
doc.recompute()

p4 = App.Vector(-2000, 1500, 0)
dimension2 = Draft.make_dimension(polygon, 1, 2, p4)
dimension2.ViewObject.FontSize = 200

center = App.Vector(2000, 0, 0)
p5 = App.Vector(3000, 1000, 0)
angle1 = 45
angle2 = 10
dimension3 = Draft.make_angular_dimension(center, [angle1, angle2], p5)
dimension3.ViewObject.FontSize = 200

dimension4 = Draft.make_angular_dimension(center, [angle2, angle1], p5*1.2)
dimension4.ViewObject.FontSize = 200

doc.recompute()

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Draft_Dimension/ru&oldid=1565039>"