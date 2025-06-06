---
title: Draft BSpline
---

|                                                                                                                                                               |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Draft BSpline                                                                                                                                                 |
| Menu location                                                                                                                                                 |
| Drafting → B-spline 2D Drafting → B-spline                                                                                                                    |
| Workbenches                                                                                                                                                   |
| [Draft](/Draft_Workbench "Draft Workbench"), [BIM](/BIM_Workbench "BIM Workbench")                                                                            |
| Default shortcut                                                                                                                                              |
| B S                                                                                                                                                           |
| Introduced in version                                                                                                                                         |
| 0.7                                                                                                                                                           |
| See also                                                                                                                                                      |
| [Draft Wire](/Draft_Wire "Draft Wire"), [Draft CubicBezCurve](/Draft_CubicBezCurve "Draft CubicBezCurve"), [Draft BezCurve](/Draft_BezCurve "Draft BezCurve") |
|                                                                                                                                                               |

## Description

The ![](/images/Draft_BSpline.svg) **Draft BSpline** command creates a [B-spline curve](http://en.wikipedia.org/wiki/B-spline) from several points.

The Draft BSpline command specifies the _exact points_ through which the curve will pass. The [Draft BezCurve](/Draft_BezCurve "Draft BezCurve") and the [Draft CubicBezCurve](/Draft_CubicBezCurve "Draft CubicBezCurve") commands, on the other hand, use _control points_ to define the position and curvature of the spline.

![](/images/Draft_bspline_example.jpg)

Spline defined by multiple points

## Usage

See also: [Draft Tray](/Draft_Tray "Draft Tray"), [Draft Snap](/Draft_Snap "Draft Snap") and [Draft Constrain](/Draft_Constrain "Draft Constrain").

1. There are several ways to invoke the command:
   - Press the ![](/images/Draft_BSpline.svg) [B-spline](/Draft_BSpline "Draft BSpline") button.
   - [Draft](/Draft_Workbench "Draft Workbench"): Select the **Drafting → ![](/images/Draft_BSpline.svg) B-spline** option from the menu.
   - [BIM](/BIM_Workbench "BIM Workbench"): Select the **2D Drafting → ![](/images/Draft_BSpline.svg) B-spline** option from the menu.
   - Use the keyboard shortcut: B then S.
2. The **B-spline** task panel opens. See [Options](#Options) for more information.
3. Pick the first point in the [3D view](/3D_view "3D view"), or type coordinates and press the ![](/images/Draft_AddPoint.svg) Enter point button.
4. Pick additional points in the [3D view](/3D_view "3D view"), or type coordinates and press the ![](/images/Draft_AddPoint.svg) Enter point button.
5. Press Esc or the Close button to finish the command.

## Options

The single character keyboard shortcuts available in the task panel can be changed. See [Draft Preferences](/Draft_Preferences "Draft Preferences"). The shortcuts mentioned here are the default shortcuts (for version 1.0).

- To manually enter coordinates enter the X, Y and Z component, and press Enter after each. Or you can press the ![](/images/Draft_AddPoint.svg) Enter point button when you have the desired values. It is advisable to move the pointer out of the [3D view](/3D_view "3D view") before entering coordinates.
- Press R or click the **Relative** checkbox to toggle relative mode. If relative mode is on, coordinates are relative to the last point, if available, else they are relative to the coordinate system origin.
- Press G or click the **Global** checkbox to toggle global mode. If global mode is on, coordinates are relative to the global coordinate system, else they are relative to the [working plane](/Draft_SelectPlane "Draft SelectPlane") coordinate system.
- Press F or click the **Filled**1.0 and below or **Make face**[introduced in 1.1](/Release_notes_1.1 "Release notes 1.1") checkbox to toggle make face mode. If make face mode is on, the created spline will have Data**Make Face** set to `true` and have a filled face, provided it is closed and does not self-intersect. A self-intersecting spline with a face will not display properly, for such a spline Data**Make Face** must be set to `false`.
- Press N or click the **Continue** checkbox to toggle continue mode. If continue mode is on, the command will restart after using ![](/images/Draft_FinishLine.svg) Finish or ![](/images/Draft_CloseLine.svg) Close, or after creating a closed spline by snapping to the first point of the spline, allowing you to continue creating splines.
- Press / or the ![](/images/Draft_UndoLine.svg) Undo button to undo the last point.
- Press A or the ![](/images/Draft_FinishLine.svg) Finish button to finish the command and leave the spline open.
- Press O or the ![](/images/Draft_CloseLine.svg) Close button to finish the command and close the spline. A closed spline can also be created by snapping to the first point of the spline.
- Press W or the ![](/images/Draft_Wipe.svg) Wipe button to delete the curve segments already placed, but keep working from the last point.
- Press U or the ![](/images/Draft_SelectPlane.svg) [Set WP](/Draft_SelectPlane "Draft SelectPlane") button to adjust the current working plane in the orientation defined by the last and the previous point.
- Press S to switch [Draft snapping](/Draft_Snap "Draft Snap") on or off.
- Press Esc or the Close button to finish the command.

## Notes

- A Draft BSpline can be edited with the [Draft Edit](/Draft_Edit "Draft Edit") command.
- A Draft BSpline can be converted to a [Draft Wire](/Draft_Wire "Draft Wire") with the [Draft WireToBSpline](/Draft_WireToBSpline "Draft WireToBSpline") command.

## Properties

See also: [Property editor](/Property_editor "Property editor").

A Draft BSpline object is derived from a [Part Part2DObject](/Part_Part2DObject "Part Part2DObject") and inherits all its properties. It also has the following additional properties:

### Data

Draft

- Data**Area** (`Area`): (read-only) specifies the area of the face of the spline. The value will be `0.0` if Data**Make Face** if `false` or the face cannot be created.
- Data**Closed** (`Bool`): specifies if the spline is closed or not. If the spline is initially open this value is `false`, setting it to `true` will draw a curve segment to close the spline. If the spline is initially closed this value is `true`, setting it to `false` will remove the last curve segment and make the spline open.
- Data**Make Face** (`Bool`): specifies if the spline makes a face or not. If it is `true` a face is created, otherwise only the perimeter is considered part of the object. This property only works if Data**Closed** is `true` and if the spline does not self-intersect.
- Data**Parameterization** (`Float`): affects the shape of the spline.
- Data**Points** (`VectorList`): specifies the points of the spline in its local coordinate system.

### View

Draft

- View**Arrow Size** (`Length`): specifies the size of the symbol displayed at the end of the spline.
- View**Arrow Type** (`Enumeration`): specifies the type of symbol displayed at the end of the spline, which can be `Dot`, `Circle`, `Arrow`, `Tick` or `Tick-2`.
- View**End Arrow** (`Bool`): specifies whether to show a symbol at the end of the spline, so it can be used as an annotation line.
- View**Pattern** (`Enumeration`): specifies the [Draft Pattern](/Draft_Pattern "Draft Pattern") with which to fill the face of the closed spline. This property only works if Data**Make Face** is `true` and if View**Display Mode** is `Flat Lines`.
- View**Pattern Size** (`Float`): specifies the size of the [Draft Pattern](/Draft_Pattern "Draft Pattern").

## Scripting

See also: [Autogenerated API documentation](https://freecad.github.io/SourceDoc/) and [FreeCAD Scripting Basics](/FreeCAD_Scripting_Basics "FreeCAD Scripting Basics").

To create a Draft BSpline use the `make_bspline` method ([introduced in 0.19](/Release_notes_0.19 "Release notes 0.19")) of the Draft module. This method replaces the deprecated `makeBSpline` method.

```
bspline = make_bspline(pointslist, closed=False, placement=None, face=None, support=None)
bspline = make_bspline(Part.Wire, closed=False, placement=None, face=None, support=None)

```

- Creates a `bspline` object from the given list of points, `pointslist`.
  - Each point in the list is defined by its `FreeCAD.Vector`, with units in millimeters.
  - Alternatively, the input can be a `Part.Wire`, from which points are extracted.
- If `closed` is `True`, or if the first and last points are identical, the spline is closed.
- If `placement` is `None` the spline is created at the origin.
- If `face` is `True`, and the spline is closed, the spline will make a face, that is, it will appear filled.

Example:

```
import FreeCAD as App
import Draft

doc = App.newDocument()

p1 = App.Vector(0, 0, 0)
p2 = App.Vector(1000, 1000, 0)
p3 = App.Vector(2000, 0, 0)

spline1 = Draft.make_bspline([p1, p2, p3], closed=False)
spline2 = Draft.make_bspline([p1, 2*p3, 1.3*p2], closed=False)
spline3 = Draft.make_bspline([1.3*p3, p1, -1.7*p2], closed=False)

doc.recompute()

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Draft_BSpline/en&oldid=1556257>"
