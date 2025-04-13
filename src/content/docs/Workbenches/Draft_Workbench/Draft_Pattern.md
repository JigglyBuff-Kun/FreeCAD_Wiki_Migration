---
title: Draft Pattern
---

## Description

[Draft](/Draft_Workbench "Draft Workbench") objects with a Data**Make Face** property can display an SVG pattern instead of a solid face color.

![](/src/assets/images/DraftPatternSample.png)

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

- ![aluminium](/src/assets/images/Aluminium.svg)

  aluminium

- ![brick01](/src/assets/images/Brick01.svg)

  brick01

- ![concrete](/src/assets/images/Concrete.svg)

  concrete

- ![cross](/src/assets/images/Cross.svg)

  cross

- ![cuprous](/src/assets/images/Cuprous.svg)

  cuprous

- ![diagonal1](/src/assets/images/Diagonal1.svg)

  diagonal1

- ![diagonal2](/src/assets/images/Diagonal2.svg)

  diagonal2

- ![earth](/src/assets/images/Earth.svg)

  earth

- ![general_steel](/src/assets/images/General_steel.svg)

  general_steel

- ![glass](/src/assets/images/Glass.svg)

  glass

- ![hatch45L](/src/assets/images/Hatch45L.svg)

  hatch45L

- ![hatch45R](/src/assets/images/Hatch45R.svg)

  hatch45R

- ![hbone](/src/assets/images/Hbone.svg)

  hbone

- ![line](/src/assets/images/Line.svg)

  line

- ![plastic](/src/assets/images/Plastic.svg)

  plastic

- ![plus](/src/assets/images/Plus.svg)

  plus

- ![simple](/src/assets/images/Simple.svg)

  simple

- ![solid](/src/assets/images/Solid.svg)

  solid

- ![square](/src/assets/images/Square.svg)

  square

- ![steel](/src/assets/images/Steel.svg)

  steel

- ![titanium](/src/assets/images/Titanium.svg)

  titanium

- ![wood](/src/assets/images/Wood.svg)

  wood

- ![woodgrain](/src/assets/images/Woodgrain.svg)

  woodgrain

- ![zinc](/src/assets/images/Zinc.svg)

  zinc

## Notes

- SVG patterns are stored in .SVG files. It is possible to use your own custom patterns. See [Preferences](#Preferences).
- The patterns themselves are not saved in the FreeCAD document. Objects whose View**Pattern** cannot be found are displayed with a solid face color instead.

## Preferences

See also: [Preferences Editor](/Preferences_Editor "Preferences Editor") and [Draft Preferences](/Draft_Preferences "Draft Preferences").

- To change the View**Pattern Size** used for new objects: **Edit → Preferences... → Draft → Visual → SVG pattern size**.
- To specify a directory with addition SVG patterns: **Edit → Preferences... → Draft → Visual → Additional SVG pattern location**.

Retrieved from "<http://wiki.freecad.org/index.php?title=Draft_Pattern/en&oldid=1338372>"
