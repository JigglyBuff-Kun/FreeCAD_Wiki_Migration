---
title: Draft ShapeString
---

|                                                                                                                                 |
| ------------------------------------------------------------------------------------------------------------------------------- |
| Draft ShapeString                                                                                                               |
| Menu location                                                                                                                   |
| Drafting → Shape from text Annotation → Shape from text                                                                         |
| Workbenches                                                                                                                     |
| [Draft](/Draft_Workbench "Draft Workbench"), [BIM](/BIM_Workbench "BIM Workbench")                                              |
| Default shortcut                                                                                                                |
| _None_                                                                                                                          |
| Introduced in version                                                                                                           |
| 0.14                                                                                                                            |
| See also                                                                                                                        |
| [Draft Text](/Draft_Text "Draft Text"), [Draft Label](/Draft_Label "Draft Label"), [Part Extrude](/Part_Extrude "Part Extrude") |
|                                                                                                                                 |

## Description

The ![](/images/Draft_ShapeString.svg) **Draft ShapeString** command creates a compound shape that represents a text string. This shape can be used to create 3D letters with the [Part Extrude](/Part_Extrude "Part Extrude") command.

The Draft ShapeString command is not intended for standard text annotations. The [Draft Text](/Draft_Text "Draft Text") command or the [Draft Label](/Draft_Label "Draft Label") command should be used for that purpose.

![](/images/Draft_ShapeString_Example400.png)

Single point required to position the ShapeString

## Usage

For Windows users: please read the [Font file selection on Windows](#Font_file_selection_on_Windows) paragraph first.

1. There are several ways to invoke the command:
   - Press the ![](/images/Draft_ShapeString.svg) [Shape from text](/Draft_ShapeString "Draft ShapeString") button.
   - [Draft](/Draft_Workbench "Draft Workbench"): Select the **Drafting → ![](/images/Draft_ShapeString.svg) Shape from text** option from the menu.
   - [BIM](/BIM_Workbench "BIM Workbench"): Select the **Annotation → ![](/images/Draft_ShapeString.svg) Shape from text** option from the menu.
2. The **ShapeString** task panel opens.
3. Click a point in the [3D view](/3D_view "3D view"), or type coordinates.
4. Optionally press the Reset Point button to reset the point to the origin.
5. Enter a **String**.
6. Specify the **Height**.
7. To select a font do one of the following:
   - Enter a file path in the **Font file** input box.
   - Press the ... button and select a file.
8. Press the OK button to finish the command.
9. Optionally change the Data**Justification** of the ShapeString. See [Properties](#Properties).

## Options

- Press Esc or the Cancel button to abort the command.

## Relative font path

[introduced in 1.1](/Release_notes_1.1 "Release notes 1.1")

It is possible to specify a relative path for the font file. For this the FreeCAD document must have been saved at least once.

Some examples:

- ./SomeFont.ttf: The font file is in the same directory as the document.
- ./MyDirectory/SomeFont.ttf: The font file is in the MyDirectory sub-directory of the document directory.
- ../SomeFont.ttf: The font file is in the parent directory of the document directory.

## Font file selection on Windows

On Windows access to the default font folder is restricted. This affects the font file selection for ShapeStrings. There are three cases in FreeCAD where a font file for ShapeStrings can be specified: in the ShapeString task panel, when changing the Data**Font File** property of a ShapeString, and when specifying the default font file in the [Draft Preferences](/Draft_Preferences#Texts_and_dimensions "Draft Preferences").

Pressing the ... button and then selecting a file from the default Windows font folder is not possible when using the native file dialog. There are a number of workarounds:

- Make sure **DontUseNativeFontDialog** is set to `true`, which is the default value for this preference. This will only call a different, non-native, file dialog when pressing the ... button in the ShapeString task panel. With this file dialog the default Windows font folder can be accessed.
- Change **DontUseNativeDialog** to `true`. This instructs FreeCAD to always use the non-native file dialog.
- Specify the font file in the input box. You can of course type the full path or copy-paste the path from the Windows File Explorer. But there is also another way to enter the path. If you enter `C:\` a dropdown list will appear. Select `Windows` from that list and add `\F`. Select `Fonts` from the new dropdown list. Finally add `\` and the first letter(s) of the font file, and then select it from the dropdown list.
- Create a custom folder for your font files.

See the [Preferences](#Preferences) paragraph below for the location of the mentioned preferences.

## Notes

- A Draft ShapeString can be edited by double-clicking it in the [Tree view](/Tree_view "Tree view").
- Supported fonts include TrueType (.ttf), OpenType (.otf) and Type 1 (.pfb).
- The command is restricted to left-to-right text. Right-to-left and top-to-bottom text are not supported.
- Very small text heights may result in deformed character shapes due to loss of detail in scaling.
- Fonts can generate problematic geometry. This is because font contours are allowed to overlap and have small gaps. These conditions are considered errors in wires used to define faces.
- Draft ShapeStrings can also be created with the [Macro Fonts Win10 PYMP](/Macro_Fonts_Win10_PYMP "Macro Fonts Win10 PYMP").
- To create Draft ShapeStrings arranged in a circular fashion use the [Macro FCCircularText](/Macro_FCCircularText "Macro FCCircularText").

## Tutorials

- [Draft ShapeString tutorial](/Draft_ShapeString_tutorial "Draft ShapeString tutorial"): extrude a ShapeString, position it in 3D space, and create an engraving in another body.
- [How to use ShapeStrings in PartDesign](https://forum.freecadweb.org/viewtopic.php?f=3&t=36623)

## Preferences

See also: [Preferences Editor](/Preferences_Editor "Preferences Editor"), [Draft Preferences](/Draft_Preferences "Draft Preferences") and [Std DlgParameter](/Std_DlgParameter "Std DlgParameter").

- The default font file can be changed in the preferences: **Edit → Preferences... → Draft → Texts and dimensions → Default ShapeString font file**.
- For Windows users:
  - Set **Tools → Edit parameters... → BaseApp → Preferences → Dialog → DontUseNativeFontDialog** to `true` to use the non-native file dialog when selecting a font file from the ShapeString task panel.
  - Alternatively, set **Tools → Edit parameters... → BaseApp → Preferences → Dialog → DontUseNativeDialog** to `true` to always use the non-native file dialog.

## Properties

See also: [Property editor](/Property_editor "Property editor").

A Draft ShapeString object is derived from a [Part Part2DObject](/Part_Part2DObject "Part Part2DObject") and inherits all its properties. It also has the following additional properties:

### Data

Draft

- Data**Font File** (`File`): Font file name.
- Data**Fuse** (`Bool`): Fuse faces if faces overlap, usually not required (can be very slow). Ignored if Data**Make Face** is `false`. [introduced in 1.0](/Release_notes_1.0 "Release notes 1.0")
- Data**Justification** (`Enumeration`): Horizontal and vertical alignment. Options: `Top-Left`, `Top-Center`, `Top-Right`, `Middle-Left`, `Middle-Center`, `Middle-Right`, `Bottom-Left`, `Bottom-Center`, `Bottom-Right`. [introduced in 1.0](/Release_notes_1.0 "Release notes 1.0")
- Data**Justification Reference** (`Enumeration`): Height reference used for justification. Options: `Cap Height`, `Shape Height`. The shape height depends on the characters in Data**String**. [introduced in 1.0](/Release_notes_1.0 "Release notes 1.0")
- Data**Keep Left Margin** (`Bool`): Keep left margin and leading white space when justification is left. [introduced in 1.0](/Release_notes_1.0 "Release notes 1.0")
- Data**Make Face** (`Bool`): Fill letters with faces.
- Data**Oblique Angle** (`Angle`): Oblique (slant) angle. Must be in the -80° to +80° range. [introduced in 1.0](/Release_notes_1.0 "Release notes 1.0")
- Data**Scale To Size** (`Bool`): Scale to ensure cap height is equal to size. If set to `false`, depending on the font, cap height will not match Data**Size** exactly. [introduced in 1.0](/Release_notes_1.0 "Release notes 1.0")
- Data**Size** (`Length`): Height of text.
- Data**String** (`String`): Text string. A ShapeString can only display a single text line.
- Data**Tracking** (`Distance`): Inter-character spacing. [introduced in 1.0](/Release_notes_1.0 "Release notes 1.0"): The property type has been updated.

![](/images/Draft_ShapeString_Justification.png)

The height of the red rectangle (solid line) is equal to the cap height.  
The height of the green rectangle (dashed line) is equal to the shape height.  
The corners, the midpoints of the edges, and the center of the rectangles  
match the 9 justification options: Top-Left to Bottom-Right.

## Scripting

See also: [Autogenerated API documentation](https://freecad.github.io/SourceDoc/) and [FreeCAD Scripting Basics](/FreeCAD_Scripting_Basics "FreeCAD Scripting Basics").

To create a Draft ShapeString use the `make_shapestring` method ([introduced in 0.19](/Release_notes_0.19 "Release notes 0.19")) of the Draft module. This method replaces the deprecated `makeShapeString` method.

```
shapestring = make_shapestring(String, FontFile, Size=100, Tracking=0)

```

- Creates a `shapestring` compound shape using the specified `String` and the full path of a supported `FontFile`.
- `Size` is the height of the resulting text in millimeters.
- `Tracking` is the inter-character spacing in millimeters.

The placement of the ShapeString can be changed by overwriting its `Placement` attribute, or by individually overwriting its `Placement.Base` and `Placement.Rotation` attributes.

Example:

```
import FreeCAD as App
import Draft

doc = App.newDocument()

font1 = "/usr/share/fonts/truetype/msttcorefonts/Arial.ttf"
font2 = "/usr/share/fonts/truetype/dejavu/DejaVuSerif.ttf"
font3 = "/usr/share/fonts/truetype/freefont/FreeSerifItalic.ttf"

S1 = Draft.make_shapestring("This is a sample text", font1, 200)

S2 = Draft.make_shapestring("Inclined text", font2, 200, 10)

zaxis = App.Vector(0, 0, 1)
p2 = App.Vector(-1000, 500, 0)
place2 = App.Placement(p2, App.Rotation(zaxis, 45))
S2.Placement = place2

S3 = Draft.make_shapestring("Upside-down text", font3, 200, 10)
S3.Placement.Base = App.Vector(0, -1000, 0)
S3.Placement.Rotation = App.Rotation(zaxis, 180)

doc.recompute()

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Draft_ShapeString/en&oldid=1529244>"
