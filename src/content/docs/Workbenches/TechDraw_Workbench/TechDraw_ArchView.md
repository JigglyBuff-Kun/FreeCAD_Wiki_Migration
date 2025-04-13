---
title: TechDraw ArchView
---

|                                                                                             |
| ------------------------------------------------------------------------------------------- |
| TechDraw ArchView                                                                           |
| Menu location                                                                               |
| TechDraw → Views From Other Workbenches → Insert BIM Workbench Object                       |
| Workbenches                                                                                 |
| [TechDraw](/TechDraw_Workbench "TechDraw Workbench"), [BIM](/BIM_Workbench "BIM Workbench") |
| Default shortcut                                                                            |
| _None_                                                                                      |
| Introduced in version                                                                       |
| -                                                                                           |
| See also                                                                                    |
| [Arch SectionPlane](/Arch_SectionPlane "Arch SectionPlane")                                 |
|                                                                                             |

## Description

The **TechDraw ArchView** tool inserts an Arch View, a view of an ![](/src/assets/images/Arch_SectionPlane.svg) [Arch SectionPlane](/Arch_SectionPlane "Arch SectionPlane"), on a [TechDraw page](/TechDraw_PageDefault "TechDraw PageDefault").

[introduced in 1.0](/Release_notes_1.0 "Release notes 1.0"): The [TechDraw View](/TechDraw_View "TechDraw View") tool can also create an Arch View.

![](/src/assets/images/TechDraw_Arch_example.jpg)

## Usage

1. Select an Arch section plane in the [3D view](/3D_view "3D view") or [Tree view](/Tree_view "Tree view").
2. If there are multiple drawing pages in the document: optionally add the desired page to the selection by selecting it in the [Tree view](/Tree_view "Tree view").
3. Select the **TechDraw → Views From Other Workbenches → ![](/src/assets/images/TechDraw_ArchView.svg) Insert BIM Workbench Object** option from the menu.
4. If there are multiple drawing pages in the document, and if no page is displayed in the [Main view area](/Main_view_area "Main view area") and you have not yet selected a page, the **Page Chooser** dialog box opens:
   1. Select the desired page.
   2. Press the OK button.

## Options

- The Arch View is rendered by the [BIM Workbench](/BIM_Workbench "BIM Workbench").
- [Draft Dimensions](/Draft_Snap_Dimensions "Draft Snap Dimensions"), [Draft Texts](/Draft_Text "Draft Text") and any other 2D (Sketch or Draft) object considered by the section plane is rendered "as is" (no intersection or hidden lines) on top of the solid geometry
- The volume of [Arch Spaces](/Arch_Space "Arch Space") is not rendered, only the label will be rendered
- Cut lines, projected lines (if Show Hidden property is set to True) and 2D lines above can be rendered with different line widths. This can be configured in the Arch preferences.
- The ArchView has two rendering modes:
  - Wireframe, which uses the OpenCasCade algorithms of the [TechDraw Workbench](/TechDraw_Workbench "TechDraw Workbench"), is fast and produces only lines (no face fill possible)
  - Solid, which is based on the [Painter's algorithm](https://en.wikipedia.org/wiki/Painter%27s_algorithm), and is capable of rendering faces filled with their shape color. However, it is much slower and can fail in many situations.

: The image below illustrates the difference between the two rendering modes:

: ![](/src/assets/images/TechDraw_Arch_rendering.jpg)

- Only the base line of [Arch Pipes](/Arch_Pipe "Arch Pipe") is rendered, not the full volume of the tube:

: ![](/src/assets/images/TechDraw_Arch_piping.jpg)

## Notes

The ArchView is rendered within the [BIM Workbench](/BIM_Workbench "BIM Workbench"), therefore TechDraw has limited control over its appearance. You may need to make changes within Arch to get the representation you want.

## Properties

See also: [Property editor](/Property_editor "Property editor").

An Arch View, formally a `TechDraw::DrawViewArch` object, has the [properties](/TechDraw_View#Properties_Part_View "TechDraw View") that are common to all View types. It also has the following additional properties:

### Data

Arch view

- Data**Source** (`Link`): The section plane object to be displayed.
- Data**All On** (`Bool`): If hidden objects must be shown or not. If `false`, only objects that are visible in the 3D view are rendered.
- Data**Render Mode** (`Enumeration`): The render mode to use, `Solid` or `Wireframe`.
- Data**Fill Spaces** (`Bool`): If `true`, Arch Spaces are shown as a colored area.
- Data**Show Hidden** (`Bool`): If the hidden geometry (the part of the geometry that lies behind the section plane) is shown or not. It will be rendered in dashed line, which can be configured in the Arch preferences.
- Data**Show Fill** (`Bool`): If cut areas must be filled with a grey color or not.
- Data**Line Width** (`Float`): The width of the main lines. Cut lines and projected/2D line widths ratios can be configured in the Arch preferences.
- Data**Font Size** (`Float`): The size of all texts that appear in this view.
- Data**Cut Line Width** (`Float`): Width of the cut lines in this view.
- Data**Join Arch** (`Bool`): If `true`, walls and structures will be fused by material.
- Data**Line Spacing** (`Float`): The spacing between lines to use for multiline texts. [introduced in 1.0](/Release_notes_1.0 "Release notes 1.0")

Drawing view

- Data (Hidden)**Symbol** (`String`): The SVG code defining this symbol.
- Data**Editable Texts** (`StringList`): Substitution values for the editable strings in this symbol.
- Data**Owner** (`Link`): Feature to which this symbol is attached. [introduced in 1.0](/Release_notes_1.0 "Release notes 1.0")

## Scripting

See also: [Autogenerated API documentation](https://freecad.github.io/SourceDoc/) and [FreeCAD Scripting Basics](/FreeCAD_Scripting_Basics "FreeCAD Scripting Basics").

The ArchView tool can be used in [macros](/Macros "Macros") and from the [Python](/Python "Python") console by using the following functions:

```
dv = FreeCAD.ActiveDocument.addObject('TechDraw::DrawViewArch','TestArch')
dv.Source = mySectionPlane
rc = page.addView(dv)

```

Retrieved from "<http://wiki.freecad.org/index.php?title=TechDraw_ArchView/en&oldid=1490156>"
