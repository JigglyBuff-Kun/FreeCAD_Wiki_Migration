---
title: Draft Text
---

|                                                                                                        |
| ------------------------------------------------------------------------------------------------------ |
| Draft Text                                                                                             |
| Menu location                                                                                          |
| Annotation → Text                                                                                      |
| Workbenches                                                                                            |
| [Draft](/Draft_Workbench "Draft Workbench"), [BIM](/BIM_Workbench "BIM Workbench")                     |
| Default shortcut                                                                                       |
| T E                                                                                                    |
| Introduced in version                                                                                  |
| 0.7                                                                                                    |
| See also                                                                                               |
| [Draft Label](/Draft_Label "Draft Label"), [Draft ShapeString](/Draft_ShapeString "Draft ShapeString") |
|                                                                                                        |

## Description

The ![](/images/Draft_Text.svg) **Draft Text** command creates a multi-line text at a given point.

To create a text element with an arrow use the [Draft Label](/Draft_Label "Draft Label") command instead.

![](/images/Draft_Text_example.png)

Single point required to position the text

## Usage

See also: [Draft Tray](/Draft_Tray "Draft Tray") and [Draft Snap](/Draft_Snap "Draft Snap").

1. There are several ways to invoke the command:
   - Press the ![](/images/Draft_Text.svg) [Text](/Draft_Text "Draft Text") button.
   - Select the **Annotation → ![](/images/Draft_Text.svg) Text** option from the menu.
   - Use the keyboard shortcut: T then E.
2. The **Text** task panel opens. See [Options](#Options) for more information.
3. Pick a point in the [3D view](/3D_view "3D view"), or type coordinates and press the ![](/images/Draft_AddPoint.svg) Enter point button.
4. Enter the desired text, press Enter to start a new line.
5. Press Enter twice or press the ![](/images/Button_valid.svg) Create text button to finish the command.

## Options

The single character keyboard shortcuts available in the task panel can be changed. See [Draft Preferences](/Draft_Preferences "Draft Preferences"). The shortcuts mentioned here are the default shortcuts (for version 1.0).

- To manually enter coordinates enter the X, Y and Z component, and press Enter after each. Or you can press the ![](/images/Draft_AddPoint.svg) Enter point button when you have the desired values. It is advisable to move the pointer out of the [3D view](/3D_view "3D view") before entering coordinates.
- Press G or click the **Global** checkbox to toggle global mode. If global mode is on, coordinates are relative to the global coordinate system, else they are relative to the [working plane](/Draft_SelectPlane "Draft SelectPlane") coordinate system.
- Press N or click the **Continue** checkbox to toggle continue mode. If continue mode is on, the command will restart after finishing, allowing you to continue creating texts. The shortcut does not work in the second task panel. This option is not available in the first task panel in FreeCAD version 0.19 and earlier.
- Press S to switch [Draft snapping](/Draft_Snap "Draft Snap") on or off.
- Press Esc or the Close button to abort the command.

## Notes

- A Draft Text can be edited by double-clicking it in the [Tree view](/Tree_view "Tree view").
- Draft Texts created or saved with [FreeCAD version 0.21](/Release_notes_0.21 "Release notes 0.21") are not backward compatible.

## Properties

See also: [Property editor](/Property_editor "Property editor").

A Draft Text object is derived from an [App FeaturePython](/App_FeaturePython "App FeaturePython") object and inherits all its properties. The following properties are additional unless otherwise stated.

### Data

Base

- Data**Placement** (`Placement`): specifies the position of the text in the [3D view](/3D_view "3D view"). See [Placement](/Placement "Placement").
- Data**Text** (`StringList`): specifies the contents of the text. Each item in the list represents a new text line.

### View

Annotation

- View**Annotation Style** (`Enumeration`): specifies the annotation style applied to the text. See [Draft AnnotationStyleEditor](/Draft_AnnotationStyleEditor "Draft AnnotationStyleEditor").
- View**Scale Multiplier** (`Float`): specifies the general scaling factor applied to the text.

Display Options

- View**Display Mode** (`Enumeration`): specifies how the text is displayed. If it is `World` the text will be displayed on a plane defined by its Data**Placement**. If it is `Screen` the text will always face the screen. This is an inherited property. The mentioned options are the renamed options ([introduced in 0.21](/Release_notes_0.21 "Release notes 0.21")).

Graphics

- View**Line Color** (`Color`): not used.
- View**Line Width** (`Float`): not used.

Text

- View**Font Name** (`Font`): specifies the font used to draw the text. It can be a font name, such as `Arial`, a default style such as `sans`, `serif` or `mono`, a family such as `Arial,Helvetica,sans`, or a name with a style such as `Arial:Bold`. If the given font is not found on the system, a default font is used instead.
- View**Font Size** (`Length`): specifies the size of the letters. The text can be invisible in the [3D view](/3D_view "3D view") if this value is very small.
- View**Justification** (`Enumeration`): specifies if the alignment of the text: `Left`, `Center` or `Right`.
- View**Line Spacing** (`Float`): specifies the factor applied to the default line height of the text.
- View**Text Color** (`Color`): specifies the color of the text.

## Scripting

See also: [Autogenerated API documentation](https://freecad.github.io/SourceDoc/) and [FreeCAD Scripting Basics](/FreeCAD_Scripting_Basics "FreeCAD Scripting Basics").

To create a Draft Text use the `make_text` method ([introduced in 0.19](/Release_notes_0.19 "Release notes 0.19")) of the Draft module. This method replaces the deprecated `makeText` method.

```
text = make_text(string, placement=None, screen=False)

```

- Creates a `text` object, at `placement`, which can be a `FreeCAD.Placement`, but also a `FreeCAD.Rotation` or a `FreeCAD.Vector`.
- `string` is a string or a list of strings. If it is a list, each element is displayed on its own line.
- If `screen` is `True`, the text always faces the camera, otherwise it is displayed in a plane defined by its Data**Placement**.

The view properties of `text` can be changed by overwriting its attributes; for example, overwrite `ViewObject.FontSize` with the new size in millimeters.

Example:

```
import FreeCAD as App
import Draft

doc = App.newDocument()

t1 = "This is a sample text"
p1 = App.Vector(0, 0, 0)

t2 = ["First line", "second line"]
p2 = App.Vector(1000, 1000, 0)

text1 = Draft.make_text(t1, p1)
text2 = Draft.make_text(t2, p2)
text1.ViewObject.FontSize = 200
text2.ViewObject.FontSize = 200

zaxis = App.Vector(0, 0, 1)

t3 = ["Upside", "down"]
p3 = App.Vector(-1000, -500, 0)
place3 = App.Placement(p3, App.Rotation(zaxis, 180))
text3 = Draft.make_text(t3, place3)
text3.ViewObject.FontSize = 200

doc.recompute()

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Draft_Text/en&oldid=1513376>"
