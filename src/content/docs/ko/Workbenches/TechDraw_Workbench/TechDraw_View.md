---
title: 기술도면의 보기(View)
---

|                                                                                                                                                                                                                                                                                                                                                                                                                |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| TechDraw View                                                                                                                                                                                                                                                                                                                                                                                                  |
| Menu location                                                                                                                                                                                                                                                                                                                                                                                                  |
| 기술도면 → 기술도면 보기 → 보기 삽입                                                                                                                                                                                                                                                                                                                                                                           |
| Workbenches                                                                                                                                                                                                                                                                                                                                                                                                    |
| [기술도면 작업대](/TechDraw_Workbench/ko "TechDraw Workbench/ko")                                                                                                                                                                                                                                                                                                                                              |
| Default shortcut                                                                                                                                                                                                                                                                                                                                                                                               |
| _None_                                                                                                                                                                                                                                                                                                                                                                                                         |
| Introduced in version                                                                                                                                                                                                                                                                                                                                                                                          |
| -                                                                                                                                                                                                                                                                                                                                                                                                              |
| See also                                                                                                                                                                                                                                                                                                                                                                                                       |
| [기술도면 투상 모둠](/TechDraw_ProjectionGroup/ko "TechDraw ProjectionGroup/ko"), [기술도면 스프레드시트 보기](/index.php?title=TechDraw_SpreadsheetView/ko&action=edit&redlink=1 "TechDraw SpreadsheetView/ko (page does not exist)"), [TechDraw ArchView](/TechDraw_ArchView "TechDraw ArchView"), [TechDraw Symbol](/TechDraw_Symbol "TechDraw Symbol"), [TechDraw Image](/TechDraw_Image "TechDraw Image") |
|                                                                                                                                                                                                                                                                                                                                                                                                                |

## 설명

**기술도면 보기** 도구는 하나 이상의 대상체의 재현을 도면 페이지에 추가합니다. [1.0 버전부터 도입](/Release_notes_1.0 "Release notes 1.0"): [투상 모둠 항목(단일 보기)](#Properties_Projection_Group_Item/ko), [투상 모둠](/TechDraw_ProjectionGroup/ko "TechDraw ProjectionGroup/ko"), [스프레드시트 보기](/index.php?title=TechDraw_SpreadsheetView/ko&action=edit&redlink=1 "TechDraw SpreadsheetView/ko (page does not exist)"), [아치 뷰](/index.php?title=TechDraw_ArchView/ko&action=edit&redlink=1 "TechDraw ArchView/ko (page does not exist)"), [기호](/TechDraw_Symbol/ko "TechDraw Symbol/ko") 또는 [이미지 보기](/TechDraw_Image/ko "TechDraw Image/ko").
를 생성할 수 있습니다.

0.21 and below에서는 도구가 [부품 보기](#Properties_Part_View)만 생성할 수 있으며 이는 투상 모둠 항목과 매우 유사합니다.

![](/images/TechDraw_View_example.png)

숨은 선이 있는 고체 상자의 보기(View)

## 투상 모둠 항목과 투상 모둠의 용법

1. 선택적으로 [3D보기](/3D_view/ko "3D view/ko")를 회전합니다. 3D 보기의 카메라 방향은 기본 보기의 투상 방향을 설정하는 데 사용할 수 있습니다.
2. 3D보기 또는 [나무보기](/Tree_view/ko "Tree view/ko")에서 데이터**Shape** 속성이 있는 하나 이상의 대상체를 선택합니다. 또한 이러한 대상체를 포함하는 [표준 부품](/Std_Part/ko "Std Part/ko") 또는 [표준 모](/Std_Group/ko "Std Group/ko")을 선택할 수도 있습니다. 3D 보기에서 선택할 때 처음 선택한 면을 사용하여 기본 보기의 투 방향을 설정할 수 있습니다. 현재 카메라 방향을 사용하려면 3D 보기에서 면을 선택하여 대상체를 선택하지 마세요.
3. 문서에 여러 개의 도면 페이지가 있는 경우 원하는 페이지를 [나무보](/Tree_view/ko "Tree view/ko")에서 선택하여 선택 항목에 추가할 수 있습니다..
4. 도구를 호출하는 방법은 여러 가지가 있습니다:
   - ![](/images/TechDraw_View.svg) 보기 삽입 버튼을 누르세요.
   * 메뉴에서 **기술도면 → 기술도면 보기 → ![](/images/TechDraw_View.svg) 보기 삽입**을 선택하세요.
5. 문서에 여러 개의 도면 페이지가 있고 [기본 보기 영역](/Main_view_area/ko "Main view area/ko")에 페이지가 표시되지 않으며 아직 페이지를 선택하지 않은 경우 **페이지 선택기** 대화 상자가 열립니다.
   1. 원하는 페이지를 선택합니다.
   2. 확인 버튼을 누릅니다.
6. **부품 보기** 작업 패널이 열립니다. [introduced in 1.0](/Release_notes_1.0 "Release notes 1.0")
7. 선택적으로 매개변수를 조정합니다:
   - **척도**: `페이지`, `자동` 또는 `사용자 지정`을 선택합니다. 마지막 옵션이 선택된 경우: 분자와 분모를 입력합니다.
   - **방향**: 사용 가능한 버튼을 사용하여 기본 보기의 투상 방향과 회전을 조정합니다.
     - 중앙의 [#.## #.## #.##] 버튼은 현재 투상 방향을 보여줍니다. 초기 값은 **3D 카메라 방향 사용** [환경 설정](/TechDraw_Preferences#General/ko "TechDraw Preferences")에 따라 달라집니다. 버튼을 눌러 보기 방향과 회전을 수동으로 조정하세요.
     - 보기의 수평 또는 수직 축을 중심으로 투상 방향을 90° 회전하기 위해 ![](/images/Arrow-up.svg), ![](/images/Arrow-down.svg), ![](/images/Arrow-left.svg) 또는 ![](/images/Arrow-right.svg) 버튼을 누르세요.
     - ![](/images/Arrow-cw.svg) 또는 ![](/images/Arrow-ccw.svg) 버튼을 눌러 투상 방향을 기준으로 보기를 90° 회전합니다.
     - ![](/images/TechDraw_ProjFront.svg) 버튼을 눌러 기본 보기의 투영 방향을 표준 [정면 보기](/index.php?title=Std_ViewFront/ko&action=edit&redlink=1 "Std ViewFront/ko (page does not exist)")로 설정합니다.
     - ![](/images/TechDraw_CameraOrientation.svg) 버튼을 눌러 가능한 경우 첫 번째 선택한 면으로 설정하고, 그렇지 않은 경우 현재 카메라 방향으로 설정합니다.
   - **보조 투상**: 선택적으로 주투상 외에 보조 투상을 만듭니다. 이 부분의 모든 컨트롤을 표시하려면 적어도 하나의 보조 투상을 지정해야 합니다.
8. 일부 매개변수를 변경한 후 적용 버튼을 눌러 보기를 갱신해야 할 수 있습니다.
9. 확인버튼을 누르세요.
10. [투상 모둠 항목](#Properties_Projection_Group_Item/ko) 또는 보조 투상이 하나 이상 있는 경우 [투상 모둠](/TechDraw_ProjectionGroup/ko "TechDraw ProjectionGroup/ko")이 삽입됩니다.

![](/images/TechDraw_View_Taskpanel.png)

부품 보기(Part View) [작업 패널](/Task_panel/ko "Task panel/ko")

## 다른 보기 유형 사용

[1.0 버전부터 도입](/Release_notes_1.0 "Release notes 1.0")

1. Optionally select a [spreadsheet](/Spreadsheet_CreateSheet "Spreadsheet CreateSheet") in the [Tree view](/Tree_view "Tree view") or an [Arch section plane](/Arch_SectionPlane "Arch SectionPlane") in the [3D view](/3D_view "3D view") or Tree view.
2. Follow steps 3, 4 and 5 as explained [above](#Usage_Projection_Group_Item_and_Projection_Group).
3. If you have not selected a spreadsheet or an Arch section plane:
   1. A warning dialog box opens.
   2. Check the **Do not show this message again** checkbox to avoid this dialog box in the future.
   3. Press the OK button.
   4. A file browser opens.
   5. Select an SVG or image file.
4. A [Spreadsheet View](/TechDraw_SpreadsheetView "TechDraw SpreadsheetView"), an [Arch View](/TechDraw_ArchView "TechDraw ArchView"), a [Symbol](/TechDraw_Symbol "TechDraw Symbol") or an [Image View](/TechDraw_Image "TechDraw Image") is inserted.
5. In case of a Spreadsheet View: adjust the cell range of the view by changing its 데이터**Cell Start** and 데이터**Cell End** properties.
6. In case of a Symbol or Image View: optionally change its 데이터**Scale** property to adjust its size.

## Properties Part View

See also: [Property editor](/Property_editor "Property editor").

A Part View, formally a `TechDraw::DrawViewPart` object, has the following properties:

### Data

Base

- 데이터**X** (`Distance`): The view's horizontal position on the page. (1)
- 데이터**Y** (`Distance`): The view's vertical position on the page. (1)
- 데이터**Lock Position** (`Bool`): Prevents Views from being dragged in the Gui when `true`. The View can still be moved by changing X,Y properties. (1)
- 데이터**Rotation** (`Angle`): Counterclockwise rotation of the View on the page in degrees. (1)
- 데이터**Scale Type** (`Enumeration`): The scale type. Options: (1)
  - `Page`: Use the [Page](/TechDraw_PageDefault "TechDraw PageDefault")'s scale setting.
  - `Automatic`: Fit the view to the page.
  - `Custom`: Use the scale defined by 데이터**Scale**.
- 데이터**Scale** (`FloatConstant`): The view will be rendered on the page in Scale:1 ratio to the Source. (1)
- 데이터**Caption** (`String`): Optional short text caption. (1)

Cosmetics

- 데이터 (Hidden)**Cosmetic Vertexes** (`TechDraw::PropertyCosmeticVertexList`)
- 데이터 (Hidden)**Cosmetic Edges** (`TechDraw::PropertyCosmeticEdgeList`)
- 데이터 (Hidden)**Center Lines** (`TechDraw::PropertyCenterLineList`)
- 데이터 (Hidden)**Geom Formats** (`TechDraw::PropertyGeomFormatList`)

HLR Parameters

- 데이터**Coarse View** (`Bool`): If `true`, TechDraw will use a polygon approximation to calculate drawing geometry. If `false`, TechDraw will use a precision algorithm. CoarseView can be much faster for complex models. The quality of the drawing is reduced, since every curve is approximated as a series of short line segments. Vertices are not displayed in CoarseView since each short segment would result in two new Vertices and the display becomes cluttered. Linear Dimensions can be added to a CoarseView, but are unlikely to be useful.
- 데이터**Smooth Visible** (`Bool`): Visible Smooth lines on/off.
- 데이터**Seam Visible** (`Bool`): Visible Seam lines on/off.
- 데이터**Iso Visible** (`Bool`): Visible Isometric(u,v) lines on/off.
- 데이터**Hard Hidden** (`Bool`): Hidden lines on/off.
- 데이터**Smooth Hidden** (`Bool`): Hidden Smooth lines on/off.
- 데이터**Seam Hidden** (`Bool`): Hidden Seam lines on/off.
- 데이터**Iso Hidden** (`Bool`): Hidden Isometric(u,v) lines on/off.
- 데이터**Iso Count** (`Integer`): Number of Isometric(u,v) lines to draw on each face.
- 데이터**Scrub Count** (`Integer`): The number of times FreeCAD should try to clean the HLR result. [introduced in 0.21](/Release_notes_0.21 "Release notes 0.21")

Projection

- 데이터**Source** (`LinkList`): Links to the drawable objects to be depicted.
- 데이터**XSource** (`XLinkList`): Links to the drawable objects in an external file.
- 데이터**Direction** (`Vector`): This vector controls the direction from which you are viewing the object. +X is right, -X is left, +Y is rear, -Y is front (looking into the screen), +Z is up and -Z is down. So a Front view is (0,-1,0) and an isometric view is (1,-1,1).
- 데이터**XDirection** (`Vector`): This vector controls the rotation of the view around the Direction.
- 데이터**Perspective** (`Bool`): `true` for perspective projection, `false` for orthogonal projection.
- 데이터**Focus** (`Distance`): Distance from camera to projection plane for perspective projections. Needs to be adjusted to fit the object. Too far and the perspective is lost, too close and the object is distorted.

### View

Base

- 보기**Keep Label** (`Bool`): Always show view label if `true`. (1)
- 보기**Stack Order** (`Integer`): Over or under lap relative to other views. (1) [introduced in 0.21](/Release_notes_0.21 "Release notes 0.21")

Broken View

- 보기**Break Line Style** (`Enumeration`): Set break line style if applicable. [introduced in 1.0](/Release_notes_1.0 "Release notes 1.0")
- 보기**Break Line Type** (`Enumeration`): Adjusts the type of break line depiction on broken views if applicable: `None`, `ZigZag` or `Simple`. [introduced in 1.0](/Release_notes_1.0 "Release notes 1.0")

Decoration

- 보기**Arc Center Marks** (`Bool`): Circular arc center marks on/off.
- 보기**Center Scale** (`Float`): Circular arc center mark size adjustment, if enabled.
- 보기**Horiz Center Line** (`Bool`): Show a horizontal centerline through the view.
- 보기**Show All Edges** (`Bool`): Temporarily show invisible lines.
- 보기**Vert Center Line** (`Bool`): Show a vertical centerline through the view.

Faces

- 보기**Face Color** (`Color`): Set color of faces. [introduced in 1.0](/Release_notes_1.0 "Release notes 1.0")
- 보기**Face Transparency** (`Percent`): Set transparency of faces. [introduced in 1.0](/Release_notes_1.0 "Release notes 1.0")

Highlight

- 보기**Highlight Adjust** (`Float`): Adjust the rotation of the Detail highlight if applicable.
- 보기**Highlight Line Color** (`Color`): Set the highlight line color if applicable.
- 보기**Highlight Line Style** (`Enumeration`): Set the highlight line style if applicable.

Lines

- 보기**Extra Width** (`Length`): Not implemented yet.
- 보기**Hidden Width** (`Length`): The thickness of hidden lines, if enabled.
- 보기**Iso Width** (`Length`): The thickness of isometric(u,v) surface lines and Dimension lines.
- 보기**Line Width** (`Length`): The thickness of visible lines. See [Line Groups](/TechDraw_LineGroup "TechDraw LineGroup").

Section Line

- 보기**Include Cut Line** (`Bool`): Show/hide section cut line if applicable. [introduced in 1.0](/Release_notes_1.0 "Release notes 1.0")
- 보기**Section Line Color** (`Color`): Set the section line color if applicable.
- 보기**Section Line Marks** (`Bool`): Show/hide marks at direction changes for Complex Section if applicable. [introduced in 0.21](/Release_notes_0.21 "Release notes 0.21")
- 보기**Section Line Style** (`Enumeration`): Set the section line style if applicable.
- 보기**Show Section Line** (`Bool`): Show/hide the section line if applicable.

(1) these properties are common to all View types.

## Properties Projection Group Item

See also: [Property editor](/Property_editor "Property editor").

A Projection Group Item, formally a `TechDraw::DrawProjGroupItem` object, is derived from a [Part View](#Properties_Part_View), formally a `TechDraw::DrawViewPart` object, and inherits all its properties. It also has the following additional properties:

### Data

Base

- 데이터**Type** (`Enumeration`): The view type (`Front`, `Left`, etc.).
- 데이터**Rotation Vector** (`Vector`): Deprecated use 데이터**XDirection** instead.

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

Retrieved from "<http://wiki.freecad.org/index.php?title=TechDraw_View/ko&oldid=1562908>"
