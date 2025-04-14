---
title: Draft Ellipse
---

|                                                                                    |
| ---------------------------------------------------------------------------------- |
| Draft Ellipse                                                                      |
| Menu location                                                                      |
| Drafting → Ellipse 2D Drafting → Ellipse                                           |
| Workbenches                                                                        |
| [Draft](/Draft_Workbench "Draft Workbench"), [BIM](/BIM_Workbench "BIM Workbench") |
| Default shortcut                                                                   |
| E L                                                                                |
| Introduced in version                                                              |
| 0.7                                                                                |
| See also                                                                           |
| _None_                                                                             |
|                                                                                    |

## Description

The ![](/images/Draft_Ellipse.svg) **Draft Ellipse** command creates an ellipse on the current [working plane](/Draft_SelectPlane "Draft SelectPlane") from two points defining a rectangle in which the ellipse will fit.

A Draft Ellipse can be turned into an elliptical arc by setting its Data**First Angle** and Data**Last Angle** properties to different values.

![](/images/Draft_ellipse_example.jpg)

Ellipse defined by the corners of a rectangle

## Usage

See also: [Draft Tray](/Draft_Tray "Draft Tray"), [Draft Snap](/Draft_Snap "Draft Snap") and [Draft Constrain](/Draft_Constrain "Draft Constrain").

1. There are several ways to invoke the command:
   - Press the ![](/images/Draft_Ellipse.svg) [Ellipse](/Draft_Ellipse "Draft Ellipse") button.
   - [Draft](/Draft_Workbench "Draft Workbench"): Select the **Drafting → ![](/images/Draft_Ellipse.svg) Ellipse** option from the menu.
   - [BIM](/BIM_Workbench "BIM Workbench"): Select the **2D Drafting → ![](/images/Draft_Ellipse.svg) Ellipse** option from the menu.
   - Use the keyboard shortcut: E then L.
2. The **Ellipse** task panel opens. See [Options](#Options) for more information.
3. Pick the first point in the [3D view](/3D_view "3D view"), or type coordinates and press the ![](/images/Draft_AddPoint.svg) Enter point button.
4. Pick the second point in the [3D view](/3D_view "3D view"), or type coordinates and press the ![](/images/Draft_AddPoint.svg) Enter point button. This point must not be constrained to the X, Y or Z axis.

## Options

The single character keyboard shortcuts available in the task panel can be changed. See [Draft Preferences](/Draft_Preferences "Draft Preferences"). The shortcuts mentioned here are the default shortcuts (for version 1.0).

- To manually enter coordinates enter the X, Y and Z component, and press Enter after each. Or you can press the ![](/images/Draft_AddPoint.svg) Enter point button when you have the desired values. It is advisable to move the pointer out of the [3D view](/3D_view "3D view") before entering coordinates.
- Press R or click the **Relative** checkbox to toggle relative mode. If relative mode is on, the coordinates of the second point are relative to the first point, else they are relative to the coordinate system origin.
- Press G or click the **Global** checkbox to toggle global mode. If global mode is on, coordinates are relative to the global coordinate system, else they are relative to the [working plane](/Draft_SelectPlane "Draft SelectPlane") coordinate system.
- Press F or click the **Filled**1.0 and below or **Make face**[introduced in 1.1](/Release_notes_1.1 "Release notes 1.1") checkbox to toggle make face mode. If make face mode is on, the created ellipse will have Data**Make Face** set to `true` and have a filled face.
- Press N or click the **Continue** checkbox to toggle continue mode. If continue mode is on, the command will restart after finishing, allowing you to continue creating ellipses.
- Press S to switch [Draft snapping](/Draft_Snap "Draft Snap") on or off.
- Press Esc or the Close button to abort the command.

## Notes

- A Draft Ellipse can be edited with the [Draft Edit](/Draft_Edit "Draft Edit") command.

## Preferences

See also: [Preferences Editor](/Preferences_Editor "Preferences Editor") and [Draft Preferences](/Draft_Preferences "Draft Preferences").

- If the **Edit → Preferences... → Draft → General → Create Part primitives if possible** option is checked, the command will create a [Part Ellipse](/Part_Ellipse "Part Ellipse") instead of a Draft Ellipse.

## Properties

See also: [Property editor](/Property_editor "Property editor").

A Draft Ellipse object is derived from a [Part Part2DObject](/Part_Part2DObject "Part Part2DObject") and inherits all its properties. It also has the following additional properties:

### Data

Draft

- Data**Area** (`Area`): (read-only) specifies the area of the face of the ellipse. The value will be `0.0` if Data**Make Face** if `false` or the face cannot be created.
- Data**First Angle** (`Angle`): specifies the angle of the first point of the ellipse, normally `0°`.
- Data**Last Angle** (`Angle`): specifies the angle of the last point of the ellipse, normally `0°`.
- Data**Major Radius** (`Length`): specifies the major radius of the ellipse.
- Data**Make Face** (`Bool`): specifies if the ellipse makes a face or not. If it is `true` a face is created, otherwise only the perimeter is considered part of the object. This property only works if the shape is a full ellipse.
- Data**Minor Radius** (`Length`): specifies the minor radius of the ellipse.

### View

Draft

- View**Pattern** (`Enumeration`): specifies the [Draft Pattern](/Draft_Pattern "Draft Pattern") with which to fill the face of the ellipse. This property only works if Data**Make Face** is `true` and if View**Display Mode** is `Flat Lines`.
- View**Pattern Size** (`Float`): specifies the size of the [Draft Pattern](/Draft_Pattern "Draft Pattern").

## Scripting

See also: [Autogenerated API documentation](https://freecad.github.io/SourceDoc/) and [FreeCAD Scripting Basics](/FreeCAD_Scripting_Basics "FreeCAD Scripting Basics").

To create a Draft Ellipse use the `make_ellipse` method ([introduced in 0.19](/Release_notes_0.19 "Release notes 0.19")) of the Draft module. This method replaces the deprecated `makeEllipse` method.

```
ellipse = make_ellipse(majradius, minradius, placement=None, face=True, support=None)

```

- Creates an `ellipse` object with given major (`majradius`) and minor (`minradius`) radius in millimeters.
  - The bigger value will be used for the major radius (X axis) if no other placement is given.
- If `placement` is `None` the ellipse is created at the origin.
- If `face` is `True`, the ellipse will make a face, that is, it will appear filled.

Example:

```
import FreeCAD as App
import Draft

doc = App.newDocument()

ellipse1 = Draft.make_ellipse(3000, 200)
ellipse2 = Draft.make_ellipse(700, 1000)

zaxis = App.Vector(0, 0, 1)
p3 = App.Vector(1000, 1000, 0)
place3 = App.Placement(p3, App.Rotation(zaxis, 90))

ellipse3 = Draft.make_ellipse(700, 1000, placement=place3)

doc.recompute()

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Draft_Ellipse/en&oldid=1556231>"
