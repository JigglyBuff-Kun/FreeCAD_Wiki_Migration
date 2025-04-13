---
title: Draft Circle
---

|                                                                                                  |
| ------------------------------------------------------------------------------------------------ |
| Draft Circle                                                                                     |
| Menu location                                                                                    |
| Drafting → Circle 2D Drafting → Circle                                                           |
| Workbenches                                                                                      |
| [Draft](/Draft_Workbench "Draft Workbench"), [BIM](/BIM_Workbench "BIM Workbench")               |
| Default shortcut                                                                                 |
| C I                                                                                              |
| Introduced in version                                                                            |
| 0.7                                                                                              |
| See also                                                                                         |
| [Draft Arc](/Draft_Arc "Draft Arc"), [Draft Arc 3Points](/Draft_Arc_3Points "Draft Arc 3Points") |
|                                                                                                  |

## Description

The ![](/src/assets/images/Draft_Circle.svg) **Draft Circle** command creates a circle on the current [working plane](/Draft_SelectPlane "Draft SelectPlane") from a center and a radius. The radius can be defined by picking a point.

A Draft Circle can be turned into an arc by setting its Data**First Angle** and Data**Last Angle** properties to different values.

![](/src/assets/images/Draft_Circle_example.jpg)

Circle defined by two points, center and radius

## Usage

See also: [Draft Tray](/Draft_Tray "Draft Tray"), [Draft Snap](/Draft_Snap "Draft Snap") and [Draft Constrain](/Draft_Constrain "Draft Constrain").

1. There are several ways to invoke the command:
   - Press the ![](/src/assets/images/Draft_Circle.svg) [Circle](/Draft_Circle "Draft Circle") button.
   - [Draft](/Draft_Workbench "Draft Workbench"): Select the **Drafting → ![](/src/assets/images/Draft_Circle.svg) Circle** option from the menu.
   - [BIM](/BIM_Workbench "BIM Workbench"): Select the **2D Drafting → ![](/src/assets/images/Draft_Circle.svg) Circle** option from the menu.
   - Use the keyboard shortcut: C then I.
2. The **Circle** task panel opens. See [Options](#Options) for more information.
3. Pick the first point, the center of the circle, in the [3D view](/3D_view "3D view"), or type coordinates and press the ![](/src/assets/images/Draft_AddPoint.svg) Enter point button.
4. Pick the second point in the [3D view](/3D_view "3D view"), or enter a **Radius**.

## Options

The single character keyboard shortcuts available in the task panel can be changed. See [Draft Preferences](/Draft_Preferences "Draft Preferences"). The shortcuts mentioned here are the default shortcuts (for version 1.0).

- To manually enter the coordinates for the center enter the X, Y and Z component, and press Enter after each. Or you can press the ![](/src/assets/images/Draft_AddPoint.svg) Enter point button when you have the desired values. It is advisable to move the pointer out of the [3D view](/3D_view "3D view") before entering coordinates.
- Press G or click the **Global** checkbox to toggle global mode. If global mode is on, coordinates are relative to the global coordinate system, else they are relative to the [working plane](/Draft_SelectPlane "Draft SelectPlane") coordinate system.
- Press F or click the **Filled**1.0 and below or **Make face**[introduced in 1.1](/Release_notes_1.1 "Release notes 1.1") checkbox to toggle make face mode. If make face mode is on, the created circle will have Data**Make Face** set to `true` and have a filled face.
- Press N or click the **Continue** checkbox to toggle continue mode. If continue mode is on, the command will restart after finishing, allowing you to continue creating circles.
- Press S to switch [Draft snapping](/Draft_Snap "Draft Snap") on or off.
- Press Esc or the Close button to abort the command.

## Notes

- A Draft Circle can be edited with the [Draft Edit](/Draft_Edit "Draft Edit") command.

## Preferences

See also: [Preferences Editor](/Preferences_Editor "Preferences Editor") and [Draft Preferences](/Draft_Preferences "Draft Preferences").

- If the **Edit → Preferences... → Draft → General → Create Part primitives if possible** option is checked, the command will create a [Part Circle](/Part_Circle "Part Circle") instead of a Draft Circle.

## Properties

See also: [Property editor](/Property_editor "Property editor").

A Draft Circle object is derived from a [Part Part2DObject](/Part_Part2DObject "Part Part2DObject") and inherits all its properties. It also has the following additional properties:

### Data

Draft

- Data**Area** (`Area`): (read-only) specifies the area of the face of the circle. The value will be `0.0` if Data**Make Face** if `false` or the face cannot be created.
- Data**First Angle** (`Angle`): specifies the start angle of the circle, normally `0°`.
- Data**Last Angle** (`Angle`): specifies the end angle of the circle, normally `0°`.
- Data**Make Face** (`Bool`): specifies if the circle makes a face or not. If it is `true` a face is created, otherwise only the perimeter is considered part of the object. This property only works if the Data**First Angle** and Data**Last Angle** have the same value. Note that `0°` and `360°` are not considered the same.
- Data**Radius** (`Length`): specifies the radius of the circle.

### View

Draft

- View**Pattern** (`Enumeration`): specifies the [Draft Pattern](/Draft_Pattern "Draft Pattern") with which to fill the face of the circle. This property only works if Data**Make Face** is `true` and if View**Display Mode** is `Flat Lines`.
- View**Pattern Size** (`Float`): specifies the size of the [Draft Pattern](/Draft_Pattern "Draft Pattern").

## Scripting

See also: [Autogenerated API documentation](https://freecad.github.io/SourceDoc/) and [FreeCAD Scripting Basics](/FreeCAD_Scripting_Basics "FreeCAD Scripting Basics").

To create a Draft Circle use the `make_circle` method ([introduced in 0.19](/Release_notes_0.19 "Release notes 0.19")) of the Draft module. This method replaces the deprecated `makeCircle` method.

```
circle = make_circle(radius, placement=None, face=None, startangle=None, endangle=None, support=None)
circle = make_circle(Part.Edge, placement=None, face=None, startangle=None, endangle=None, support=None)

```

- Creates a `circle` object with given `radius` in millimeters.
  - `radius` can also be a `Part.Edge`, whose `Curve` attribute must be a `Part.Circle`.
- If `placement` is `None` the circle is created at the origin.
- If `face` is `True`, the circle will make a face, that is, it will appear filled.
- If `startangle` and `endangle` are given in degrees, and have different values, they are used and the object appears as a [Draft Arc](/Draft_Arc "Draft Arc").

Example:

```
import FreeCAD as App
import Draft

doc = App.newDocument()

circle1 = Draft.make_circle(200)

zaxis = App.Vector(0, 0, 1)
p2 = App.Vector(1000, 1000, 0)
place2 = App.Placement(p2, App.Rotation(zaxis, 0))
circle2 = Draft.make_circle(500, placement=place2)

p3 = App.Vector(-1000, -1000, 0)
place3 = App.Placement(p3, App.Rotation(zaxis, 0))
circle3 = Draft.make_circle(750, placement=place3)

doc.recompute()

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Draft_Circle/en&oldid=1556220>"
