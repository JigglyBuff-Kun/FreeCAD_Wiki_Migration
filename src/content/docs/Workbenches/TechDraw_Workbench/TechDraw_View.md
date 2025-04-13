---
title: TechDraw View
---

|                                                                                                                                                                                                                                                                                                                                            |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| TechDraw View                                                                                                                                                                                                                                                                                                                              |
| Menu location                                                                                                                                                                                                                                                                                                                              |
| TechDraw → TechDraw Views → Insert View                                                                                                                                                                                                                                                                                                    |
| Workbenches                                                                                                                                                                                                                                                                                                                                |
| [TechDraw](/TechDraw_Workbench "TechDraw Workbench")                                                                                                                                                                                                                                                                                       |
| Default shortcut                                                                                                                                                                                                                                                                                                                           |
| _None_                                                                                                                                                                                                                                                                                                                                     |
| Introduced in version                                                                                                                                                                                                                                                                                                                      |
| -                                                                                                                                                                                                                                                                                                                                          |
| See also                                                                                                                                                                                                                                                                                                                                   |
| [TechDraw ProjectionGroup](/TechDraw_ProjectionGroup "TechDraw ProjectionGroup"), [TechDraw SpreadsheetView](/TechDraw_SpreadsheetView "TechDraw SpreadsheetView"), [TechDraw ArchView](/TechDraw_ArchView "TechDraw ArchView"), [TechDraw Symbol](/TechDraw_Symbol "TechDraw Symbol"), [TechDraw Image](/TechDraw_Image "TechDraw Image") |
|                                                                                                                                                                                                                                                                                                                                            |

## Description

The **TechDraw View** tool adds a representation of one or more objects to a Drawing page. [introduced in 1.0](/Release_notes_1.0 "Release notes 1.0"): It can create a [Projection Group Item (a single view)](#Properties_Projection_Group_Item), a [Projection Group](/TechDraw_ProjectionGroup "TechDraw ProjectionGroup"), a [Spreadsheet View](/TechDraw_SpreadsheetView "TechDraw SpreadsheetView"), an [Arch View](/TechDraw_ArchView "TechDraw ArchView"), a [Symbol](/TechDraw_Symbol "TechDraw Symbol") or an [Image View](/TechDraw_Image "TechDraw Image").

In 0.21 and below the tool can only create a [Part View](#Properties_Part_View), which is very similar to a Projection Group Item.

![](/src/assets/images/TechDraw_View_example.png)

View of a solid box with hidden lines

## Usage Projection Group Item and Projection Group

1. Optionally rotate the [3D view](/3D_view "3D view"). The camera direction in the 3D view can be used to set the projection direction of the primary view.
2. Select one or more objects with a Data**Shape** property in the 3D view or [Tree view](/Tree_view "Tree view"). You can also select [Std Parts](/Std_Part "Std Part") or [Std Groups](/Std_Group "Std Group") that contain such objects. When selecting in the 3D view the first selected face can be used to set the projection direction of the primary view. Do not select objects by picking a face in the 3D view if you want to use the current camera direction.
3. If there are multiple drawing pages in the document: optionally add the desired page to the selection by selecting it in the [Tree view](/Tree_view "Tree view").
4. There are several ways to invoke the tool:
   - Press the ![](/src/assets/images/TechDraw_View.svg) [Insert View](/TechDraw_View "TechDraw View") button.
   - Select the **TechDraw → TechDraw Views → ![](/src/assets/images/TechDraw_View.svg) Insert View** option from the menu.
5. If there are multiple drawing pages in the document, and if no page is displayed in the [Main view area](/Main_view_area "Main view area") and you have not yet selected a page, the **Page Chooser** dialog box opens:
   1. Select the desired page.
   2. Press the OK button.
6. The **Part View** task panel opens. [introduced in 1.0](/Release_notes_1.0 "Release notes 1.0")
7. Optionally adjust the parameters:
   - **Scale**: select `Page`, `Automatic` or `Custom`. If the last option is selected: enter the scale numerator and denominator.
   - **Direction**: use the available buttons to adjust the projection direction and rotation of the primary view:
     - The [#.## #.## #.##] button in the center shows the current projection direction. The initial value depends on the **Use 3d Camera Direction** [preference](/TechDraw_Preferences#General "TechDraw Preferences"). Press the button to adjust the view direction and rotation manually.
     - Press the ![](/src/assets/images/Arrow-up.svg), ![](/src/assets/images/Arrow-down.svg), ![](/src/assets/images/Arrow-left.svg) or ![](/src/assets/images/Arrow-right.svg) button to rotate the projection direction 90° around the horizontal or vertical axis of the view.
     - Press the ![](/src/assets/images/Arrow-cw.svg) or ![](/src/assets/images/Arrow-ccw.svg) button to rotate the view 90° around the projection direction.
     - Press the ![](/src/assets/images/TechDraw_ProjFront.svg) button to set projection direction of the primary view to the standard [front view](/Std_ViewFront "Std ViewFront").
     - Press the ![](/src/assets/images/TechDraw_CameraOrientation.svg) button to set it to the first selected face, if available, or else to the current camera direction.
   - **Secondary Projections**: optionally create secondary projections in addition to the primary view. At least one secondary projection has to be specified for all controls in this section to be displayed.
8. After changing some parameters pressing the Apply button can be required to update the view(s).
9. Press the OK button.
10. A [Projection Group Item](#Properties_Projection_Group_Item) or, if there are one or more secondary projections, a [Projection Group](/TechDraw_ProjectionGroup "TechDraw ProjectionGroup") is inserted.

![](/src/assets/images/TechDraw_View_Taskpanel.png)

Part View [task panel](/Task_panel "Task panel")

## Usage other view types

[introduced in 1.0](/Release_notes_1.0 "Release notes 1.0")

1. Optionally select a [spreadsheet](/Spreadsheet_CreateSheet "Spreadsheet CreateSheet") in the [Tree view](/Tree_view "Tree view") or an [Arch section plane](/Arch_SectionPlane "Arch SectionPlane") in the [3D view](/3D_view "3D view") or Tree view.
2. Follow steps 3, 4 and 5 as explained [above](#Usage_Projection_Group_Item_and_Projection_Group).
3. If you have not selected a spreadsheet or an Arch section plane:
   1. A warning dialog box opens.
   2. Check the **Do not show this message again** checkbox to avoid this dialog box in the future.
   3. Press the OK button.
   4. A file browser opens.
   5. Select an SVG or image file.
4. A [Spreadsheet View](/TechDraw_SpreadsheetView "TechDraw SpreadsheetView"), an [Arch View](/TechDraw_ArchView "TechDraw ArchView"), a [Symbol](/TechDraw_Symbol "TechDraw Symbol") or an [Image View](/TechDraw_Image "TechDraw Image") is inserted.
5. In case of a Spreadsheet View: adjust the cell range of the view by changing its Data**Cell Start** and Data**Cell End** properties.
6. In case of a Symbol or Image View: optionally change its Data**Scale** property to adjust its size.

## Properties Part View

See also: [Property editor](/Property_editor "Property editor").

A Part View, formally a `TechDraw::DrawViewPart` object, has the following properties:

### Data

Base

- Data**X** (`Distance`): The view's horizontal position on the page. (1)
- Data**Y** (`Distance`): The view's vertical position on the page. (1)
- Data**Lock Position** (`Bool`): Prevents Views from being dragged in the Gui when `true`. The View can still be moved by changing X,Y properties. (1)
- Data**Rotation** (`Angle`): Counterclockwise rotation of the View on the page in degrees. (1)
- Data**Scale Type** (`Enumeration`): The scale type. Options: (1)
  - `Page`: Use the [Page](/TechDraw_PageDefault "TechDraw PageDefault")'s scale setting.
  - `Automatic`: Fit the view to the page.
  - `Custom`: Use the scale defined by Data**Scale**.
- Data**Scale** (`FloatConstant`): The view will be rendered on the page in Scale:1 ratio to the Source. (1)
- Data**Caption** (`String`): Optional short text caption. (1)

Cosmetics

- Data (Hidden)**Cosmetic Vertexes** (`TechDraw::PropertyCosmeticVertexList`)
- Data (Hidden)**Cosmetic Edges** (`TechDraw::PropertyCosmeticEdgeList`)
- Data (Hidden)**Center Lines** (`TechDraw::PropertyCenterLineList`)
- Data (Hidden)**Geom Formats** (`TechDraw::PropertyGeomFormatList`)

HLR Parameters

- Data**Coarse View** (`Bool`): If `true`, TechDraw will use a polygon approximation to calculate drawing geometry. If `false`, TechDraw will use a precision algorithm. CoarseView can be much faster for complex models. The quality of the drawing is reduced, since every curve is approximated as a series of short line segments. Vertices are not displayed in CoarseView since each short segment would result in two new Vertices and the display becomes cluttered. Linear Dimensions can be added to a CoarseView, but are unlikely to be useful.
- Data**Smooth Visible** (`Bool`): Visible Smooth lines on/off.
- Data**Seam Visible** (`Bool`): Visible Seam lines on/off.
- Data**Iso Visible** (`Bool`): Visible Isometric(u,v) lines on/off.
- Data**Hard Hidden** (`Bool`): Hidden lines on/off.
- Data**Smooth Hidden** (`Bool`): Hidden Smooth lines on/off.
- Data**Seam Hidden** (`Bool`): Hidden Seam lines on/off.
- Data**Iso Hidden** (`Bool`): Hidden Isometric(u,v) lines on/off.
- Data**Iso Count** (`Integer`): Number of Isometric(u,v) lines to draw on each face.
- Data**Scrub Count** (`Integer`): The number of times FreeCAD should try to clean the HLR result. [introduced in 0.21](/Release_notes_0.21 "Release notes 0.21")

Projection

- Data**Source** (`LinkList`): Links to the drawable objects to be depicted.
- Data**XSource** (`XLinkList`): Links to the drawable objects in an external file.
- Data**Direction** (`Vector`): This vector controls the direction from which you are viewing the object. +X is right, -X is left, +Y is rear, -Y is front (looking into the screen), +Z is up and -Z is down. So a Front view is (0,-1,0) and an isometric view is (1,-1,1).
- Data**XDirection** (`Vector`): This vector controls the rotation of the view around the Direction.
- Data**Perspective** (`Bool`): `true` for perspective projection, `false` for orthogonal projection.
- Data**Focus** (`Distance`): Distance from camera to projection plane for perspective projections. Needs to be adjusted to fit the object. Too far and the perspective is lost, too close and the object is distorted.

### View

Base

- View**Keep Label** (`Bool`): Always show view label if `true`. (1)
- View**Stack Order** (`Integer`): Over or under lap relative to other views. (1) [introduced in 0.21](/Release_notes_0.21 "Release notes 0.21")

Broken View

- View**Break Line Style** (`Enumeration`): Set break line style if applicable. [introduced in 1.0](/Release_notes_1.0 "Release notes 1.0")
- View**Break Line Type** (`Enumeration`): Adjusts the type of break line depiction on broken views if applicable: `None`, `ZigZag` or `Simple`. [introduced in 1.0](/Release_notes_1.0 "Release notes 1.0")

Decoration

- View**Arc Center Marks** (`Bool`): Circular arc center marks on/off.
- View**Center Scale** (`Float`): Circular arc center mark size adjustment, if enabled.
- View**Horiz Center Line** (`Bool`): Show a horizontal centerline through the view.
- View**Show All Edges** (`Bool`): Temporarily show invisible lines.
- View**Vert Center Line** (`Bool`): Show a vertical centerline through the view.

Faces

- View**Face Color** (`Color`): Set color of faces. [introduced in 1.0](/Release_notes_1.0 "Release notes 1.0")
- View**Face Transparency** (`Percent`): Set transparency of faces. [introduced in 1.0](/Release_notes_1.0 "Release notes 1.0")

Highlight

- View**Highlight Adjust** (`Float`): Adjust the rotation of the Detail highlight if applicable.
- View**Highlight Line Color** (`Color`): Set the highlight line color if applicable.
- View**Highlight Line Style** (`Enumeration`): Set the highlight line style if applicable.

Lines

- View**Extra Width** (`Length`): Not implemented yet.
- View**Hidden Width** (`Length`): The thickness of hidden lines, if enabled.
- View**Iso Width** (`Length`): The thickness of isometric(u,v) surface lines and Dimension lines.
- View**Line Width** (`Length`): The thickness of visible lines. See [Line Groups](/TechDraw_LineGroup "TechDraw LineGroup").

Section Line

- View**Include Cut Line** (`Bool`): Show/hide section cut line if applicable. [introduced in 1.0](/Release_notes_1.0 "Release notes 1.0")
- View**Section Line Color** (`Color`): Set the section line color if applicable.
- View**Section Line Marks** (`Bool`): Show/hide marks at direction changes for Complex Section if applicable. [introduced in 0.21](/Release_notes_0.21 "Release notes 0.21")
- View**Section Line Style** (`Enumeration`): Set the section line style if applicable.
- View**Show Section Line** (`Bool`): Show/hide the section line if applicable.

(1) these properties are common to all View types.

## Properties Projection Group Item

See also: [Property editor](/Property_editor "Property editor").

A Projection Group Item, formally a `TechDraw::DrawProjGroupItem` object, is derived from a [Part View](#Properties_Part_View), formally a `TechDraw::DrawViewPart` object, and inherits all its properties. It also has the following additional properties:

### Data

Base

- Data**Type** (`Enumeration`): The view type (`Front`, `Left`, etc.).
- Data**Rotation Vector** (`Vector`): Deprecated use Data**XDirection** instead.

## Properties Projection Group

See [TechDraw ProjectionGroup](/TechDraw_ProjectionGroup#Properties "TechDraw ProjectionGroup").

## Properties Spreadsheet View

See [TechDraw SpreadsheetView](/TechDraw_SpreadsheetView#Properties "TechDraw SpreadsheetView").

## Properties Arch View

See [TechDraw ArchView](/TechDraw_ArchView#Properties "TechDraw ArchView").

## Properties Symbol

See [TechDraw Symbol](/TechDraw_Symbol#Properties "TechDraw Symbol").

## Properties Image View

See [TechDraw Image](/TechDraw_Image#Properties "TechDraw Image").

## Scripting

See also: [Autogenerated API documentation](https://freecad.github.io/SourceDoc/) and [FreeCAD Scripting Basics](/FreeCAD_Scripting_Basics "FreeCAD Scripting Basics").

A Part View can be created with [macros](/Macros "Macros") and from the [Python](/Python "Python") console by using the following functions:

```
import FreeCAD as App

doc = App.ActiveDocument
box = doc.addObject("Part::Box", "Box")

page = doc.addObject("TechDraw::DrawPage", "Page")
template = doc.addObject("TechDraw::DrawSVGTemplate", "Template")
template.Template = App.getResourceDir() + "Mod/TechDraw/Templates/A4_LandscapeTD.svg"
page.Template = template

# Toggle the visibility of the page to ensure its width and height are updated (hack):
page.Visibility = False
page.Visibility = True

view = doc.addObject("TechDraw::DrawViewPart", "View")
page.addView(view)
view.Source = [box]
view.Direction = (0, 0, 1)

view.X = page.PageWidth / 2
view.Y = page.PageHeight / 2

doc.recompute()

```

Retrieved from "<http://wiki.freecad.org/index.php?title=TechDraw_View/en&oldid=1490880>"
