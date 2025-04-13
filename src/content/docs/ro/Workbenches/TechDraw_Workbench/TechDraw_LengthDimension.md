---
title: TechDraw Dimension Length
---
|  |
| --- |
| TechDraw Dimension Length |
| Menu location |
| TechDraw → Dimension Length |
| Workbenches |
| [TechDraw](/TechDraw_Workbench "TechDraw Workbench") |
| Default shortcut |
| *None* |
| Introduced in version |
| - |
| See also |
| *None* |
|  |

## Descriere

Instrumentul pentru cote tip distanță adaugă o cotă distanță unei imagini. Cota poate fi între două vârfuri, lungimea unei muchii sau distanța dintre două margini. Distanța va fi inițial distanța proiectată(adică așa cum este reprezentată în desen), dar această distanță poate fi înlocuită prin distanța 3D reală utilizând instrumentul Link Dimension ![](/images/LinkDimension.png).

![](/images/LengthSample.png)

The **TechDraw LengthDimension** tool adds a linear dimension to a View. The dimension may be the distance between two points, the length of a straight edge, the perpendicular distance between two edges, or the perpendicular distance between a point and an edge.

![](/images/TechDraw_Dimension_Length_example.png)

Length dimension taken from two points

## Cum se folosește

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

### Display 3D measurement

The dimension will initially display the projected measurement (i.e. as shown in the drawing). If required, and if the dimension is based on 3D references, it can be changed to the actual 3D measurement by changing its Date**Measure Type** property to `True`. To base a dimension on 3D references select geometry from the [3D view](/3D_view "3D view") at creation time, or use the ![](/images/TechDraw_DimensionRepair.svg) [TechDraw DimensionRepair](/TechDraw_DimensionRepair "TechDraw DimensionRepair") tool to update existing dimensions.

### Change properties

To change the properties of a dimension object either double-click it in the drawing or in the [Tree view](/Tree_view "Tree view"). This will open the [Dimension dialog](#Dimension_dialog).

## Dimension dialog

![](/images/TechDraw_DimensionDialog.png)

The dimension dialog offers the following settings:

### Tolerancing

* **Theoretically Exact**: If checked, the dimension is specified as theoretically exact. As such, it shall not have any tolerances. The dimension will be displayed with a frame around the value: ![](/images/TechDraw_theoretically_exact.png)

* **Equal Tolerance**: If checked, the over- and undertolerance are equal and the negated value of the overtolerance is used as undertolerance. The display will be ![](/images/TechDraw_equal-tolerance.png), otherwise it will be ![](/images/TechDraw_Non-equal-tolerance.png).

* **Overtolerance**: The amount by which the dimension may be larger.

* **Undertolerance**: The amount by which the dimension may be smaller.

### Formatting

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

## Note

* Toate Cotele/Distanțele sunt extrem de vulnerabile la infama problemă a "topological naming". În acest moment nu este posibilă menținerea referințelor la obiectele geometrice 2D (proiectate) sau 3D (reale) în sincronizare cu modificările din model. Se recomandă adăugarea de Cote la sfârșitul procesului de creare a desenului.

Dimension objects are vulnerable to the "[topological naming problem](/Topological_naming_problem "Topological naming problem")". This means that if you modify the 3D geometry, the faces and edges of the model may be renamed internally. If a dimension is attached to an edge that is then modified, the dimension may break. In general, it is not possible to keep the projected 2D dimensions synchronized with the actual 3D objects.

Therefore, it is recommended that dimensions be added when the 3D model is no longer being modified.

### Workaround

If you want to keep a TechDraw view with dimensions that won't break, you need to dimension an object that won't change:

* Create a non-parametric copy of the object that you want to project with [Part SimpleCopy](/Part_SimpleCopy "Part SimpleCopy").
* Select this copy, then use [TechDraw View](/TechDraw_View "TechDraw View"), and add the desired dimensions.
* If the original 3D model is modified, the modifications won't affect the simple copy, nor the dimensions in the TechDraw view.

See [Landmark Dimensions](/TechDraw_LandmarkDimension "TechDraw LandmarkDimension") for another approach to circumventing the topological naming issue.

## Notes

* **Edge selection**. Edges can be difficult to select. You can adjust the selection area for edges by changing the [Edge Fuzz preference](/TechDraw_Preferences#Advanced "TechDraw Preferences").
* **Decimal places**. Dimensions use the global decimal places setting by default. This can be changed in the [preferences](/TechDraw_Preferences#Dimensions "TechDraw Preferences") or by changing the FormatSpec property.
* **Multiple objects**. Views may contain multiple 3D objects as Source. Dimensions may be applied to geometry from any object(s) in the View (ex from Object1.Vertex0 to Object2.Vertex3).

## Proprietăți

* Date**X**: Poziția orizontală a textului de dimensiune în mm față de View.
* Date**Y**: Poziția verticală a textului dimensional în mm față de vizualizare
* Date**FormatSpec**: Adaugă text suplimentar la textul cotei. Valoarea distanței va înlocui %.2f (sau alt format specific valid).[printf](https://en.wikipedia.org/wiki/Printf_format_string).
* Date**Type**: Lungimea, raza, diametrul etc. În mod normal, nu este manipulat de către utilizatorul final.
* Date**MeasureType**: "True" -Bazat pe geometrie 3D sau "Projected" - bazat pe desen. În mod normal, nu este manipulat de către utilizatorul final.
* Date**Arbitrary**: "True" - ignoră valoarea reală și afișează FormatSpec ca valore. "False" - utilizează adevărata valoare.
* Vizualizare**Font**: Numele fontului folosit pentru afișarea textului cotei.
* Vizualizare**Fontsize**: Fontul textului cotei exprimat în mm.
* Vizualizare**LineWidth**: Grosimea liniei de cotă.
* Vizualizare**Color**: Culoarea pentru linii și text.

### Data

Base

* Date**References 2D** (`LinkSubList`): The 2D drawing View object(s) on which the measurement is based. Used if Date**Measure Type** is `Projected`.
* Date**References 3D** (`LinkSubList`): The 3D object(s) on which the measurement is based. Used if Date**Measure Type** is `True`.
* Date**Type** (`Enumeration`): Length, radius, diameter, etc. Not normally manipulated by the end user.
* Date**Measure Type** (`Enumeration`): How the measurement is performed.

:   :   `True` - based on 3D geometry.
    :   `Projected` - based on 2D drawing View geometry.

* Date**Theoretical Exact** (`Bool`): Specifies a theoretically exact (or basic) dimension.

:   :   `false` - a common dimension by default, possibly with tolerances.
    :   `true` - a theoretical value. As such, it shall not bear any tolerances. The dimension will be displayed by a frame around the value: ![](/images/TechDraw_theoretically_exact.png)

* Date**Equal Tolerance** (`Bool`): If over- and undertolerance are equal. Then the negated value of the overtolerance is used as undertolerance.

:   :   `true` - the negated value of the Date**Over Tolerance** is used as Date**Under Tolerance**. The display will be ![](/images/TechDraw_equal-tolerance.png)
    :   `false` - the Date**Under Tolerance** is taken into account. The display will be ![](/images/TechDraw_Non-equal-tolerance.png)

* Date**Over Tolerance** (`QuantityConstraint`): The amount by which the dimension may be larger.
* Date**Under Tolerance** (`QuantityConstraint`): The amount by which the dimension may be smaller.
* Date**Inverted** (`Bool`): Marks whether the dimension represents a common or an inverted value.

:   :   `false` - the ordinary value is used. For length it is a positive number, for angle the oblique value (0° - 180°).
    :   `true` - the inverted value is used. For length a negative number, for angle the reflex value (180° - 360°).

* Date**X** (`Distance`): Horizontal position of the dimension text relative to the View.
* Date**Y** (`Distance`): Vertical position of the dimension text relative to the View.
* Date (Hidden)**Lock Position** (`Bool`): Locks the position of the dimension text when `true`.
* Date (Hidden)**Rotation** (`Angle`): Read only.
* Date (Hidden)**Scale Type** (`Enumeration`): Read only.
* Date (Hidden)**Scale** (`FloatConstant`): Read only.
* Date (Hidden)**Caption** (`String`): Not used.

Format

* Date**Format Spec** (`String`): How the dimension value will be formatted. See [Formatting](#Formatting).
* Date**Format Spec Over Tolerance** (`String`): Like Date**Format Spec**, but for overtolerances.
* Date**Format Spec Under Tolerance** (`String`): Like Date**Format Spec**, but for undertolerances.
* Date**Arbitrary** (`Bool`): Whether the dimension is replaced by the content of the **Format Spec** field.

:   :   `false` - the content of the **Format Spec** is used to format the actual dimensional value.
    :   `true` - the content of the **Format Spec** will be displayed as text instead of the dimension value.

* Date**Arbitrary Tolerances** (`Bool`): Like Date**Arbitrary**, but for the tolerance.

Override

* Date**Angle Override** (`Bool`): Whether the direction of dimension and extension lines is overridden.

:   :   `false` - the directions are computed as usual.
    :   `true` - the directions are overridden by LineAngle and ExtensionAngle property values.

* Date**Line Angle** (`Angle`): Angle of dimension line with view X axis (in degrees).
* Date**Extension Angle** (`Angle`): Angle of extension line(s) with view X axis (in degrees).

References

* Date (Hidden)**Saved Geometry** (`TopoShapeList`): Reference geometry. [introduced in 0.21](/Release_notes_0.21 "Release notes 0.21")

### View

Base

* Vizualizare**Keep Label** (`Bool`): Not used.
* Vizualizare**Stack Order** (`Integer`): Over or underlap relative to other drawing objects. [introduced in 0.21](/Release_notes_0.21 "Release notes 0.21")

Dimension Format

* Vizualizare**Arrowsize** (`Length`): The size of the dimension arrows. [introduced in 0.21](/Release_notes_0.21 "Release notes 0.21")
* Vizualizare**Color** (`Color`): Color for lines and text.
* Vizualizare**Flip Arrowheads** (`Bool`): By default the value *inside* the dimension line/arc means the arrows pointing *outwards*. If placed *outside* the dimension line/arc, the arrows point *inwards* the dimension line/arc.

:   :   `false` - Let the direction of arrows to be selected automatically according to the rule above.
    :   `true` - Override the automatically chosen direction and force the opposite one.

* Vizualizare**Font** (`Font`): The name of the font to use for the dimension text.
* Vizualizare**Fontsize** (`Length`): Dimension text size.
* Vizualizare**Gap Factor ASME** (`Float`): Adjusts the gap between the dimension points and the start of the extension lines. The gap is this value times the line width. [introduced in 0.21](/Release_notes_0.21 "Release notes 0.21")
* Vizualizare**Gap Factor ISO** (`Float`): Adjusts the gap between the dimension points and the start of the extension lines. The gap is this value times the line width. [introduced in 0.21](/Release_notes_0.21 "Release notes 0.21")
* Vizualizare**Line Spacing Factor** (`Float`): Adjusts the gap between the dimension text and the dimension line. The gap is this value times the line width. [introduced in 0.21](/Release_notes_0.21 "Release notes 0.21")
* Vizualizare**Line Width** (`Length`): Dimension line weight.
* Vizualizare**Rendering Extent** (`Enumeration`): Rather universal property specifying how much space the dimension drawing may take up:

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

* Vizualizare**Standard And Style** (`Enumeration`): Specifies the standard (and its style) according to which the dimension is drawn:

:   :   ![Differences between the supported standards](/images/TechDraw_Dimension_standardization.png)
    :   `ISO Oriented` - drawn according to the standard ISO 129-1, text is rotated to be parallel with the dimension line tangent.
    :   `ISO Referencing` - drawn in compliance with ISO 129-1, text is always horizontal, above the shortest possible reference line.
    :   `ASME Inlined` - drawn according to the standard ASME Y14.5M, text is horizontal, inserted in a break within the dimension line or arc.
    :   `ASME Referencing` - drawn in compliance with ASME Y14.5M, text is horizontal, short reference line is attached to one side's vertical center.

## Script

Cotele tip distanță pot fi adăugate la Pages utilizând Python.

See also: [Autogenerated API documentation](https://freecad.github.io/SourceDoc/) and [FreeCAD Scripting Basics](/FreeCAD_Scripting_Basics "FreeCAD Scripting Basics").

The Length Dimension tool can be used in [macros](/Macros "Macros") and from the [Python](/Python "Python") console by using the following functions:

```
dim1 = FreeCAD.ActiveDocument.addObject("TechDraw::DrawViewDimension", "Dimension")
dim1.Type = "Distance"
dim1.References2D=[(view1, "Edge1")]
page.addView(dim1)

```

Retrieved from "<http://wiki.freecad.org/index.php?title=TechDraw_LengthDimension/ro&oldid=1486703>"