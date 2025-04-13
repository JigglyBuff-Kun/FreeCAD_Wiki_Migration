---
title: 기술도면 길이 치수
---
|  |
| --- |
| 기술도면 길이 치수 |
| Menu location |
| 기술도면→ 치수 → 길이 치수 삽입 |
| Workbenches |
| [기술도면 작업대](/TechDraw_Workbench/ko "TechDraw Workbench/ko") |
| Default shortcut |
| *None* |
| Introduced in version |
| - |
| See also |
| [기술도면 수평 치수](/TechDraw_HorizontalDimension/ko "TechDraw HorizontalDimension/ko"), [기술도면 수직 치수](/index.php?title=TechDraw_VerticalDimensionko&action=edit&redlink=1 "TechDraw VerticalDimensionko (page does not exist)") |
|  |

## 설명

**기술도면 길이치수** 도구는 보기에 선형 치수를 추가합니다. 치수는 두 점 사이의 거리, 직선 모서리의 길이, 두 모서리 사이의 수직 거리, 또는 점과 모서리 사이의 수직 거리가 될 수 있습니다.

![](/images/TechDraw_Dimension_Length_example.png)

두 지점에서 가져온 길이 치수

## 용법

1. Select the points and/or edges which define your measurement. The geometry may be selected in the [3D view](/3D_view "3D view") (first two options) or in the drawing (all options):
   * Select two points.
   * Select a single straight edge.
   * Select two edges. If both edges are straight they must be parallel. This will produce a perpendicular dimension if an endpoint of one of the edges has a perpendicular projection on the other edge (the resultant point must lie on the actual edge). If multiple solutions are possible, the endpoint that is closest to its projected point is used. If there is no valid perpendicular projection, the dimension will be the distance between the nearest endpoints of the edges.
   * Select a point and an edge. This will produce a perpendicular dimension. In 0.21 and below the dimension will only be perpendicular if the point has a perpendicular projection on the actual edge. Else the dimension will be the distance between the point and the nearest endpoint of the edge.
2. If you have selected geometry in the 3D view: add the correct TechDraw View to the selection by selecting it in the [Tree view](/Tree_view "Tree view").
3. There are several ways to invoke the tool:
   * [introduced in 1.0](/Release_notes_1.0 "Release notes 1.0"): If the **Dimensioning tools** [preference](/TechDraw_Preferences#Dimensions "TechDraw Preferences") is set to `Single tool` (default): press the down arrow to the right of the ![](/images/TechDraw_Dimension.svg)![](/images/Toolbar_flyout_arrow.svg) button and select the **![](/images/TechDraw_LengthDimension.svg) Insert Length Dimension** option from the dropdown.
   * If this preference has a different value (and in 0.21 and below): press the ![](/images/TechDraw_LengthDimension.svg) [Insert Length Dimension](/TechDraw_LengthDimension "TechDraw LengthDimension") button.
   * Select the **TechDraw → Dimensions → ![](/images/TechDraw_LengthDimension.svg) Insert Length Dimension** option from the menu.
4. A dimension is added to the View.
5. The dimension may be dragged to the desired position.
6. If needed, add tolerances as described on [this page](/TechDraw_Geometric_dimensioning_and_tolerancing#Tolerances "TechDraw Geometric dimensioning and tolerancing").

### 3D 측정 표시

The dimension will initially display the projected measurement (i.e. as shown in the drawing). If required, and if the dimension is based on 3D references, it can be changed to the actual 3D measurement by changing its 데이터**Measure Type** property to `True`. To base a dimension on 3D references select geometry from the [3D view](/3D_view "3D view") at creation time, or use the ![](/images/TechDraw_DimensionRepair.svg) [TechDraw DimensionRepair](/TechDraw_DimensionRepair "TechDraw DimensionRepair") tool to update existing dimensions.

### Change properties

To change the properties of a dimension object either double-click it in the drawing or in the [Tree view](/Tree_view "Tree view"). This will open the [Dimension dialog](#Dimension_dialog).

## 치수 대화 상자

![](/images/TechDraw_DimensionDialog.png)

치수 대화 상자는 다음과 같은 설정을 제공합니다.

### 허용 오차(Tolerancing)

* **이론적으로 정확함**: 체크하면 치수가 이론적으로 정확하게 지정됩니다. 따라서 허용 오차가 없어야 합니다. 치수는 값 주위에 사각틀이 표시됩니다: ![](/images/TechDraw_theoretically_exact.png)

* **동일 허용 오차**: 체크 시, 위치수 허용 오차와 아래치수 허용 오차가 동일하며, 위치수 허용 오차의 음수 값이 아래치수 허용 오차로 사용됩니다. 표시 방법은 ![](/images/TechDraw_equal-tolerance.png) 또는![](/images/TechDraw_Non-equal-tolerance.png)입니다.

* **위 치수 허용 오차**: 치수가 더 커질 수 있는 양.

* **아래 치수 허용 오차**: 치수가 더 작아질 수 있는 양.

### 서식

* **Format Specifier**: How the dimension value will be formatted. By default the specifier is `%.xf` where `x` is the number of decimals. For the formatting syntax see [this Wikipedia page](https://en.wikipedia.org/wiki/Printf_format_string). There is also an additional `%w` format that prints the specified number of digits after the decimal separator and removes trailing zeros. For example, `%.2w` means that at most 2 decimals will be printed and any trailing zeros will be cut off.

* **Arbitrary Text**: If checked, the dimension is replaced by the content of the **Format Specifier** field.

* **OverTolerance Format Specifier**: How the overtolerance value will be formatted. By default the specifier is `%.xf` where `x` is the number of decimals. For the formatting syntax see [this Wikipedia page](https://en.wikipedia.org/wiki/Printf_format_string).

* **UnderTolerance Format Specifier**: How the undertolerance value will be formatted. By default the specifier is `%.xf` where `x` is the number of decimals. For the formatting syntax see [this Wikipedia page](https://en.wikipedia.org/wiki/Printf_format_string).

* **Arbitrary Tolerance Text**: If checked, the tolerances are replaced by the content of the **OverTolerance Format Specifier** **UnderTolerance Format Specifier** fields.

### Display Style

* **Flip Arrowheads**: Flips the direction of the dimension line arrows. By default they are inside the dimension line/arc and point outwards.

* **Color**: The color for lines and text.

* **Font Size**: The dimension text size.

* **Drawing Style**: The standard (and its style) according to which the dimension is drawn. See the property [**Standard And Style**](#View) for details.

### Lines

* **Override Angles**: If checked, the usual angles for the dimension line and extension lines will be overridden by the specified values.

* **Dimension line angle**: Override value for angle of dimension line with view X axis (in degrees).

* **Use default**: Set dimension line angle to the usual angle.

* **Use selection**: Set dimension line angle to match the angle of the selected edge (or 2 vertices) in the view.

* **Extension line angle**: Override value for angle of extension lines with view X axis (in degrees).

* **Use default**: Set extension line angle to the usual angle.

* **Use selection**: Set extension line angle to match the angle of the selected edge (or 2 vertices) in the view.

## 제한사항

치수 대상체는 "[위상적 명명 문제(TNP)](/Topological_naming_problem/ko "Topological naming problem/ko")"에 취약합니다. 즉, 3D 형상을 수정하면 모형의 면과 모서리 이름이 내부적으로 변경될 수 있습니다. 치수가 모서리에 부착된 후 수정되는 경우 치수가 깨질 수 있습니다. 일반적으로, 투상된 2D 치수를 실제 3D 대상체와 동기화하는 것은 불가능합니다.

따라서 3D 모형이 더 이상 수정되지 않을 때 치수를 추가하는 것이 좋습니다.

### 해결 방법

기술도면의 보기의 치수를 깨지지 않게 유지하려면 변경되지 않을 대상체에 치수를 지정해야 합니다:

* [부품 단순 복사](/index.php?title=Part_SimpleCopy/ko&action=edit&redlink=1 "Part SimpleCopy/ko (page does not exist)")를 사용하여 투상하려는 대상체의 비매개변수 복사본을 만듭니다.
* 이 사본을 선택한 다음 [기술도면 보기](/TechDraw_View/ko "TechDraw View/ko")를 사용하여 원하는 치수를 추가합니다.
* 원본 3D 모형이 수정되어도, 해당 수정 사항은 단순 복사본이나 그것의 기술도면 보기의 치수에 영향을 미치지 않습니다.

See [Landmark Dimensions](/TechDraw_LandmarkDimension "TechDraw LandmarkDimension") for another approach to circumventing the topological naming issue.

## 보충 설명

* **Edge selection**. Edges can be difficult to select. You can adjust the selection area for edges by changing the [Edge Fuzz preference](/TechDraw_Preferences#Advanced "TechDraw Preferences").
* **Decimal places**. Dimensions use the global decimal places setting by default. This can be changed in the [preferences](/TechDraw_Preferences#Dimensions "TechDraw Preferences") or by changing the FormatSpec property.
* **Multiple objects**. Views may contain multiple 3D objects as Source. Dimensions may be applied to geometry from any object(s) in the View (ex from Object1.Vertex0 to Object2.Vertex3).

## 속성

### Data

Base

* 데이터**References 2D** (`LinkSubList`): The 2D drawing View object(s) on which the measurement is based. Used if 데이터**Measure Type** is `Projected`.
* 데이터**References 3D** (`LinkSubList`): The 3D object(s) on which the measurement is based. Used if 데이터**Measure Type** is `True`.
* 데이터**Type** (`Enumeration`): Length, radius, diameter, etc. Not normally manipulated by the end user.
* 데이터**Measure Type** (`Enumeration`): How the measurement is performed.

:   :   `True` - based on 3D geometry.
    :   `Projected` - based on 2D drawing View geometry.

* 데이터**Theoretical Exact** (`Bool`): Specifies a theoretically exact (or basic) dimension.

:   :   `false` - a common dimension by default, possibly with tolerances.
    :   `true` - a theoretical value. As such, it shall not bear any tolerances. The dimension will be displayed by a frame around the value: ![](/images/TechDraw_theoretically_exact.png)

* 데이터**Equal Tolerance** (`Bool`): If over- and undertolerance are equal. Then the negated value of the overtolerance is used as undertolerance.

:   :   `true` - the negated value of the 데이터**Over Tolerance** is used as 데이터**Under Tolerance**. The display will be ![](/images/TechDraw_equal-tolerance.png)
    :   `false` - the 데이터**Under Tolerance** is taken into account. The display will be ![](/images/TechDraw_Non-equal-tolerance.png)

* 데이터**Over Tolerance** (`QuantityConstraint`): The amount by which the dimension may be larger.
* 데이터**Under Tolerance** (`QuantityConstraint`): The amount by which the dimension may be smaller.
* 데이터**Inverted** (`Bool`): Marks whether the dimension represents a common or an inverted value.

:   :   `false` - the ordinary value is used. For length it is a positive number, for angle the oblique value (0° - 180°).
    :   `true` - the inverted value is used. For length a negative number, for angle the reflex value (180° - 360°).

* 데이터**X** (`Distance`): Horizontal position of the dimension text relative to the View.
* 데이터**Y** (`Distance`): Vertical position of the dimension text relative to the View.
* 데이터 (Hidden)**Lock Position** (`Bool`): Locks the position of the dimension text when `true`.
* 데이터 (Hidden)**Rotation** (`Angle`): Read only.
* 데이터 (Hidden)**Scale Type** (`Enumeration`): Read only.
* 데이터 (Hidden)**Scale** (`FloatConstant`): Read only.
* 데이터 (Hidden)**Caption** (`String`): Not used.

Format

* 데이터**Format Spec** (`String`): How the dimension value will be formatted. See [Formatting](#Formatting).
* 데이터**Format Spec Over Tolerance** (`String`): Like 데이터**Format Spec**, but for overtolerances.
* 데이터**Format Spec Under Tolerance** (`String`): Like 데이터**Format Spec**, but for undertolerances.
* 데이터**Arbitrary** (`Bool`): Whether the dimension is replaced by the content of the **Format Spec** field.

:   :   `false` - the content of the **Format Spec** is used to format the actual dimensional value.
    :   `true` - the content of the **Format Spec** will be displayed as text instead of the dimension value.

* 데이터**Arbitrary Tolerances** (`Bool`): Like 데이터**Arbitrary**, but for the tolerance.

Override

* 데이터**Angle Override** (`Bool`): Whether the direction of dimension and extension lines is overridden.

:   :   `false` - the directions are computed as usual.
    :   `true` - the directions are overridden by LineAngle and ExtensionAngle property values.

* 데이터**Line Angle** (`Angle`): Angle of dimension line with view X axis (in degrees).
* 데이터**Extension Angle** (`Angle`): Angle of extension line(s) with view X axis (in degrees).

References

* 데이터 (Hidden)**Saved Geometry** (`TopoShapeList`): Reference geometry. [introduced in 0.21](/Release_notes_0.21 "Release notes 0.21")

### View

Base

* 보기**Keep Label** (`Bool`): Not used.
* 보기**Stack Order** (`Integer`): Over or underlap relative to other drawing objects. [introduced in 0.21](/Release_notes_0.21 "Release notes 0.21")

Dimension Format

* 보기**Arrowsize** (`Length`): The size of the dimension arrows. [introduced in 0.21](/Release_notes_0.21 "Release notes 0.21")
* 보기**Color** (`Color`): Color for lines and text.
* 보기**Flip Arrowheads** (`Bool`): By default the value *inside* the dimension line/arc means the arrows pointing *outwards*. If placed *outside* the dimension line/arc, the arrows point *inwards* the dimension line/arc.

:   :   `false` - Let the direction of arrows to be selected automatically according to the rule above.
    :   `true` - Override the automatically chosen direction and force the opposite one.

* 보기**Font** (`Font`): The name of the font to use for the dimension text.
* 보기**Fontsize** (`Length`): Dimension text size.
* 보기**Gap Factor ASME** (`Float`): Adjusts the gap between the dimension points and the start of the extension lines. The gap is this value times the line width. [introduced in 0.21](/Release_notes_0.21 "Release notes 0.21")
* 보기**Gap Factor ISO** (`Float`): Adjusts the gap between the dimension points and the start of the extension lines. The gap is this value times the line width. [introduced in 0.21](/Release_notes_0.21 "Release notes 0.21")
* 보기**Line Spacing Factor** (`Float`): Adjusts the gap between the dimension text and the dimension line. The gap is this value times the line width. [introduced in 0.21](/Release_notes_0.21 "Release notes 0.21")
* 보기**Line Width** (`Length`): Dimension line weight.
* 보기**Rendering Extent** (`Enumeration`): Rather universal property specifying how much space the dimension drawing may take up:

:   :   `None` - no lines or arrows are drawn, only the bare dimension value is displayed.
    :   `Minimal` - for lengths and angles a single headed line connecting the dimensional value and the end point's *virtual extension line* is drawn. The extension line itself is not added.
    :   Diameters are rendered following `Confined` extent, radii following `Reduced` extent.
    :   `Confined` - for lengths and angles a double headed line (or arc) connecting the start and end point's *virtual extension lines* is drawn, though the extension lines themselves are not added.
    :   Diameters are drawn with a minimal single headed line from dimensional value to the closest point on circle, radii as with `Reduced` extent.
    :   `Reduced` - for lengths and angles a single headed line connecting the dimensional value and the end point's *extension line* is drawn along with the extension line itself.
    :   Diameters are drawn with a single headed line from the center to the closest point on circle, radii with a minimal single headed line from dimensional value to the closest arc point.
    :   `Normal` - the default value. For lengths and angles a double headed line (or arc) connecting the start and end point's *extension lines* is drawn, the extension lines themselves as well.
    :   Diameters are drawn as double headed lines striking the center and connecting the closest and farthest points on the circle.
    :   Radii are drawn as a single headed line from center to the closest arc point.
    :   `Expanded` - Only diameters support this value, rendering them in a horizontal or vertical length-like way. Other dimension types are rendered as with `Normal` extent.

* 보기**Standard And Style** (`Enumeration`): Specifies the standard (and its style) according to which the dimension is drawn:

:   :   ![Differences between the supported standards](/images/TechDraw_Dimension_standardization.png)
    :   `ISO Oriented` - drawn according to the standard ISO 129-1, text is rotated to be parallel with the dimension line tangent.
    :   `ISO Referencing` - drawn in compliance with ISO 129-1, text is always horizontal, above the shortest possible reference line.
    :   `ASME Inlined` - drawn according to the standard ASME Y14.5M, text is horizontal, inserted in a break within the dimension line or arc.
    :   `ASME Referencing` - drawn in compliance with ASME Y14.5M, text is horizontal, short reference line is attached to one side's vertical center.

## Scripting

See also: [Autogenerated API documentation](https://freecad.github.io/SourceDoc/) and [FreeCAD Scripting Basics](/FreeCAD_Scripting_Basics "FreeCAD Scripting Basics").

The Length Dimension tool can be used in [macros](/Macros "Macros") and from the [Python](/Python "Python") console by using the following functions:

```
dim1 = FreeCAD.ActiveDocument.addObject("TechDraw::DrawViewDimension", "Dimension")
dim1.Type = "Distance"
dim1.References2D=[(view1, "Edge1")]
page.addView(dim1)

```

Retrieved from "<http://wiki.freecad.org/index.php?title=TechDraw_LengthDimension/ko&oldid=1563430>"