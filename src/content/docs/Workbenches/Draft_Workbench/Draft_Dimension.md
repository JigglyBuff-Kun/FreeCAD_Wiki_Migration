---
title: Draft Dimension
---

|                                                                   |
| ----------------------------------------------------------------- |
| Draft Dimension                                                   |
| Menu location                                                     |
| Annotation → Dimension                                            |
| Workbenches                                                       |
| [Draft](/Draft_Workbench "Draft Workbench")                       |
| Default shortcut                                                  |
| D I                                                               |
| Introduced in version                                             |
| 0.8                                                               |
| See also                                                          |
| [Draft FlipDimension](/Draft_FlipDimension "Draft FlipDimension") |
|                                                                   |

## Description

The ![](/images/Draft_Dimension.svg) **Draft Dimension** command creates a [linear dimension](#Linear_dimension), a [radial dimension](#Radial_dimension) or an [angular dimension](#Angular_dimension).

Linear dimensions based on edges and radial dimensions are parametric. This means that they will update if the measured edge is modified. Measured edges can belong to Draft objects but also to solid bodies. Angular dimensions are not parametric.

Draft Dimensions can be displayed on a [TechDraw Workbench](/TechDraw_Workbench "TechDraw Workbench") page using the [TechDraw DraftView](/TechDraw_DraftView "TechDraw DraftView") or [TechDraw ArchView](/TechDraw_ArchView "TechDraw ArchView") commands. Alternatively the [TechDraw Workbench](/TechDraw_Workbench "TechDraw Workbench") offer its own dimension commands. But these create dimensions that are only displayed on the drawing page and not in the [3D view](/3D_view "3D view").

![](/images/Screenshot_Draft_Dimension.jpg)

Linear dimension defined by three points

## Usage

See also: [Draft Tray](/Draft_Tray "Draft Tray"), [Draft Snap](/Draft_Snap "Draft Snap") and [Draft Constrain](/Draft_Constrain "Draft Constrain").

### Linear dimension

1. Optionally select a straight edge in the [3D view](/3D_view "3D view").
2. There are several ways to invoke the command:
   - Press the ![](/images/Draft_Dimension.svg) [Dimension](/Draft_Dimension "Draft Dimension") button.
   - Select the **Annotation → ![](/images/Draft_Dimension.svg) Dimension** option from the menu.
   - Use the keyboard shortcut: D then I.
3. The **Dimension** task panel opens. See [Options](#Options) for more information.
4. If you have not yet selected an edge do one of the following:
   - Press E or the ![](/images/View-select.svg) Select edge button and select a straight edge in the [3D view](/3D_view "3D view").
   - Hold down the Alt key, select a straight edge in the [3D view](/3D_view "3D view") and release the Alt key.
   - Define the measured distance by picking points:
     - Pick a first point in the [3D view](/3D_view "3D view"), or type coordinates and press the ![](/images/Draft_AddPoint.svg) Enter point button.
     - Pick a second point in the [3D view](/3D_view "3D view"), or type coordinates and press the ![](/images/Draft_AddPoint.svg) Enter point button.
5. To position the dimension line do one of the following:
   - For an aligned dimension:
     - Pick a point in the [3D view](/3D_view "3D view"), or type coordinates and press the ![](/images/Draft_AddPoint.svg) Enter point button.
   - For a horizontal dimension:
     - Move the pointer above or below the edge or points.
     - Hold down the Shift key, move the pointer and pick a point in the [3D view](/3D_view "3D view").
   - For a vertical dimension:
     - Move the pointer to the left or right of the edge or points.
     - Hold down the Shift key, move the pointer and pick a point in the [3D view](/3D_view "3D view").

### Radial dimension

1. Optionally select a circular edge in the [3D view](/3D_view "3D view").
2. Invoke the command as explained above.
3. The **Dimension** task panel opens. See [Options](#Options) for more information.
4. If you have not yet selected an edge do one of the following:
   - Press E or the ![](/images/View-select.svg) Select edge button and select a circular edge in the [3D view](/3D_view "3D view").
   - Hold down the Alt key, select a circular edge in the [3D view](/3D_view "3D view") and release the Alt key.
5. To position the dimension line do one of the following:
   - For a diameter dimension:
     - Pick a point in the [3D view](/3D_view "3D view"), or type coordinates and press the ![](/images/Draft_AddPoint.svg) Enter point button.
   - For a radial dimension:
     - Hold down the Shift key and pick a point in the [3D view](/3D_view "3D view").

### Angular dimension

1. Invoke the command as explained above.
2. The **Dimension** task panel opens. See [Options](#Options) for more information.
3. Do one of the following:
   - Press E or the ![](/images/View-select.svg) Select edge button and select a first straight edge in the [3D view](/3D_view "3D view"). Repeat this to select a second straight edge.
   - Hold down the Alt key, select two straight edges in the [3D view](/3D_view "3D view") and release the Alt key.
4. To position the dimension arc pick a point in the [3D view](/3D_view "3D view").
5. The displayed angle depends on the edges and the picked point.

## Options

The single character keyboard shortcuts available in the task panel can be changed. See [Draft Preferences](/Draft_Preferences "Draft Preferences"). The shortcuts mentioned here are the default shortcuts (for version 1.0).

- To manually enter coordinates enter the X, Y and Z component, and press Enter after each. Or you can press the ![](/images/Draft_AddPoint.svg) Enter point button when you have the desired values. It is advisable to move the pointer out of the [3D view](/3D_view "3D view") before entering coordinates.
- Press R or click the **Relative** checkbox to toggle relative mode. If relative mode is on, coordinates are relative to the last point, if available, else they are relative to the coordinate system origin.
- Press G or click the **Global** checkbox to toggle global mode. If global mode is on, coordinates are relative to the global coordinate system, else they are relative to the [working plane](/Draft_SelectPlane "Draft SelectPlane") coordinate system.
- Press N or click the **Continue** checkbox to toggle continue mode. This mode only works for linear dimensions. If continue mode is on, the command will restart after finishing, allowing you to continue creating dimensions. All subsequent dimensions will start from the final point of the previous dimension, and will use the same baseline as the first dimension. Note that edge selection is not possible for subsequent dimensions.
- Press S to switch [Draft snapping](/Draft_Snap "Draft Snap") on or off.
- Press Esc or the Close button to finish the command.

## Notes

- Linear and radial Draft Dimensions can be edited with the [Draft Edit](/Draft_Edit "Draft Edit") command.
- Draft Dimensions created or saved with [FreeCAD version 0.21](/Release_notes_0.21 "Release notes 0.21") are not backward compatible.

## Preferences

- [introduced in 1.1](/Release_notes_1.1 "Release notes 1.1"): When created, the text of dimensions is oriented automatically relative to the current [working plane](/Draft_SelectPlane "Draft SelectPlane") via their View**Flip Text** property. A [fine-tuning](/Fine-tuning#Draft_Workbench "Fine-tuning") parameter is available to disable this behavior.

## Properties

See also: [Property editor](/Property_editor "Property editor").

A Draft Dimension object is derived from an [App FeaturePython](/App_FeaturePython "App FeaturePython") object and inherits all its properties. The following properties are additional unless otherwise stated:

### Data linear and radial dimension

Dimension

- Data**Dimline** (`VectorDistance`): specifies the point through which the dimension line passes.
- Data**Linked Geometry** (`LinkSubList`): specifies the object and its subelement(s) the dimension is linked to.
- Data**Normal** (`Vector`): specifies the normal of the plane of the text.
- Data (hidden)**Support** (`Link`): specifies the measured object.

Linear/radial dimension

- Data**Direction** (`Vector`): specifies the direction of the measurement.
- Data**Distance** (`Length`): (read-only) specifies the value of the measurement.
- Data**End** (`VectorDistance`): specifies the end point of the measurement.
- Data**Start** (`VectorDistance`): specifies the start point of the measurement.

Radial dimension

- Data**Diameter** (`Bool`): specifies if a radial dimension is displayed as a diameter dimension. Not used for linear dimensions.

### Data angular dimension

Angular dimension

- Data**Angle** (`Angle`): (read-only) specifies the value of the measurement.
- Data**Center** (`VectorDistance`): specifies the center of the measurement.
- Data**First Angle** (`Angle`): specifies the start angle of the measurement.
- Data**Last Angle** (`Angle`): specifies the end angle of the measurement.

Dimension

- Data**Dimline** (`VectorDistance`): specifies the point through which the dimension arc passes.
- Data (hidden)**Linked Geometry** (`LinkSubList`): not used.
- Data (hidden)**Normal** (`Vector`): specifies the normal of the plane of the dimension.
- Data (hidden)**Support** (`Link`): not used.

### View

Annotation

- View**Annotation Style** (`Enumeration`): specifies the annotation style applied to the dimension. See [Draft AnnotationStyleEditor](/Draft_AnnotationStyleEditor "Draft AnnotationStyleEditor").
- View**Scale Multiplier** (`Float`): specifies the general scaling factor applied to the dimension.

Display Options

- View**Display Mode** (`Enumeration`): specifies how the text is displayed. If it is `World` the text will be displayed on a plane defined by the Data**Normal** of the measurement. If it is `Screen` the text will always face the screen. This is an inherited property. The mentioned options are the renamed options ([introduced in 0.21](/Release_notes_0.21 "Release notes 0.21")).

Graphics

- View**Arrow Size** (`Length`): specifies the size of the symbols displayed at the ends of the dimension line or arc.
- View**Arrow Type** (`Enumeration`): specifies the type of symbol displayed at the ends of the dimension line or arc, which can be `Dot`, `Circle`, `Arrow`, `Tick` or `Tick-2`.
- View**Dim Overshoot** (`Distance`): specifies the additional length added to the dimension line. Not used for angular dimensions.
- View**Ext Lines** (`Distance`): specifies the length of the extension lines that go from the dimension line to the measured points. Use `0` for full extension lines. A negative value defines the gap between the ends of the extension lines and the measured points. A positive value defines the maximum length of the extension lines. Only used for linear dimensions.
- View**Ext Overshoot** (`Distance`): specifies the additional length of the extension lines beyond the dimension line. Not used for angular dimensions.
- View**Flip Arrows** (`Bool`): specifies whether to flip the orientation of the symbols at the ends of the dimension line or arc. Only works if the symbols are arrows.
- View**Line Color** (`Color`): specifies the color of the dimension line or arc, and the arrows.
- View**Line Width** (`Float`): specifies the width of the lines or arc belonging to the dimension.
- View**Show Line** (`Bool`): specifies whether to display the dimension line. Does not affect the display of extension lines and overshoots. Not used for angular dimensions.

Text

- View**Flip Text** (`Bool`): specifies whether to flip the orientation of the text.
- View**Font Name** (`Font`): specifies the font used to draw the text. It can be a font name, such as `Arial`, a default style such as `sans`, `serif` or `mono`, a family such as `Arial,Helvetica,sans`, or a name with a style such as `Arial:Bold`. If the given font is not found on the system, a default font is used instead.
- View**Font Size** (`Length`): specifies the size of the letters. The text can be invisible in the [3D view](/3D_view "3D view") if this value is very small.
- View**Override** (`String`): specifies a custom text to display instead of the actual measurement. Use the string `$dim` inside the text to include the measurement.
- View**Text Color** (`Color`): specifies the color of the text. [introduced in 0.21](/Release_notes_0.21 "Release notes 0.21")
- View**Text Position** (`VectorDistance`): specifies the position of the text in absolute coordinates. `[0, 0, 0]` will display the text in its default position near the dimension line or arc.
- View**Text Spacing** (`Length`): specifies the space between the text and the dimension line or arc.

Units

- View**Decimals** (`Integer`): specifies the number of decimal places to display for the measurement.
- View**Show Unit** (`Bool`): specifies whether to display the unit next to the numerical value of the measurement. Not used for angular dimensions.
- View**Unit Override** (`String`): specifies the unit in which to express the measurement, for example, `km`, `m`, `cm`, `mm`, `mi`, `ft`, `in` or `arch` for arch units. Leave this blank to use the default unit. Not used for angular dimensions.

## Scripting

See also: [Autogenerated API documentation](https://freecad.github.io/SourceDoc/) and [FreeCAD Scripting Basics](/FreeCAD_Scripting_Basics "FreeCAD Scripting Basics").

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

- Creates a linear `dimension` by measuring the distance between points `p1` and `p2`.
- Creates a linear `dimension` linked to `object`, measuring the distance between its vertices indexed `i1` and `i2`.
- Creates a circular `dimension` linked to `object`, with `i1` being the index of the curved edge to measure, and `mode` being either `"radius"` or `"diameter"` to specify the type of dimension.
  - `p3` in the first call, and `p4` in the other two, specify an optional point through which the dimension line should go.
  - All points are defined by their `FreeCAD.Vector`.

To create an angular dimension use the following method:

```
dimension = make_angular_dimension(center, angles, p3, normal=None)
dimension = make_angular_dimension(center, [angle1, angle2], p3, normal=None)

```

- Creates an angular `dimension` from the given `center` point, the `angles` list with two elements, and the point `p3` through which the arc should go.
  - If `angle1 > angle2`, the displayed angle is the difference `angle1 - angle2`; otherwise, the explementary angle is displayed, `360 - (angle2 - angle1)`.
  - The angles should be given in degrees.

The view properties of `dimension` can be changed by overwriting its attributes; for example, overwrite `ViewObject.FontSize` with the new size in millimeters.

Example:

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

Retrieved from "<http://wiki.freecad.org/index.php?title=Draft_Dimension/en&oldid=1565031>"
