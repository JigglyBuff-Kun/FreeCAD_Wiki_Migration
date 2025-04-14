---
title: Draft Pattern
---

## Description

[Draft](/Draft_Workbench "Draft Workbench") objects with a Data**Make Face** property can display an SVG pattern instead of a solid face color.

![](/images/DraftPatternSample.png)

An ellipse and a polygon with an SVG pattern

## Usage

1. Make sure the objects are closed and planar, and do not self-intersect.
2. To close a [Draft Wire](/Draft_Wire "Draft Wire"), a [Draft BSpline](/Draft_BSpline "Draft BSpline"), a [Draft CubicBezCurve](/Draft_CubicBezCurve "Draft CubicBezCurve") or a [Draft BezCurve](/Draft_BezCurve "Draft BezCurve") set its Data**Closed** property to `true`.
3. To close a [Draft Circle](/Draft_Circle "Draft Circle") or a [Draft Ellipse](/Draft_Ellipse "Draft Ellipse") set its Data**First Angle** and Data**Last Angle** properties to the same value.
4. Select the objects.
5. Switch to the **View** tab of the [Property editor](/Property_editor "Property editor").
6. The View**Display Mode** must be set to `Flat Lines`.
7. Select a View**Pattern**.
8. Optionally change the View**Pattern Size**. Note that a higher value results in a denser pattern.
9. The pattern is not displayed when the objects are selected. Deselect them to check the result.
10. Optionally reselect the objects to change the pattern properties.

## Available patterns

- ![aluminium](/images/Aluminium.svg)

  aluminium

- ![brick01](/images/Brick01.svg)

  brick01

- ![concrete](/images/Concrete.svg)

  concrete

- ![cross](/images/Cross.svg)

  cross

- ![cuprous](/images/Cuprous.svg)

  cuprous

- ![diagonal1](/images/Diagonal1.svg)

  diagonal1

- ![diagonal2](/images/Diagonal2.svg)

  diagonal2

- ![earth](/images/Earth.svg)

  earth

- ![general_steel](/images/General_steel.svg)

  general_steel

- ![glass](/images/Glass.svg)

  glass

- ![hatch45L](/images/Hatch45L.svg)

  hatch45L

- ![hatch45R](/images/Hatch45R.svg)

  hatch45R

- ![hbone](/images/Hbone.svg)

  hbone

- ![line](/images/Line.svg)

  line

- ![plastic](/images/Plastic.svg)

  plastic

- ![plus](/images/Plus.svg)

  plus

- ![simple](/images/Simple.svg)

  simple

- ![solid](/images/Solid.svg)

  solid

- ![square](/images/Square.svg)

  square

- ![steel](/images/Steel.svg)

  steel

- ![titanium](/images/Titanium.svg)

  titanium

- ![wood](/images/Wood.svg)

  wood

- ![woodgrain](/images/Woodgrain.svg)

  woodgrain

- ![zinc](/images/Zinc.svg)

  zinc

## Notes

- SVG patterns are stored in .SVG files. It is possible to use your own custom patterns. See [Preferences](#Preferences).
- The patterns themselves are not saved in the FreeCAD document. Objects whose View**Pattern** cannot be found are displayed with a solid face color instead.

## Preferences

See also: [Preferences Editor](/Preferences_Editor "Preferences Editor") and [Draft Preferences](/Draft_Preferences "Draft Preferences").

- To change the View**Pattern Size** used for new objects: **Edit → Preferences... → Draft → Visual → SVG pattern size**.
- To specify a directory with addition SVG patterns: **Edit → Preferences... → Draft → Visual → Additional SVG pattern location**.

Retrieved from "<http://wiki.freecad.org/index.php?title=Draft_Pattern/en&oldid=1338372>"
