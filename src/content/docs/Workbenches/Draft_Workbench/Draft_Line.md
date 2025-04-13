---
title: Draft Line
---

|                                                                                    |
| ---------------------------------------------------------------------------------- |
| Draft Line                                                                         |
| Menu location                                                                      |
| Drafting → Line 2D Drafting → Line                                                 |
| Workbenches                                                                        |
| [Draft](/Draft_Workbench "Draft Workbench"), [BIM](/BIM_Workbench "BIM Workbench") |
| Default shortcut                                                                   |
| L I                                                                                |
| Introduced in version                                                              |
| 0.7                                                                                |
| See also                                                                           |
| [Draft Wire](/Draft_Wire "Draft Wire")                                             |
|                                                                                    |

## Description

The ![](/src/assets/images/Draft_Line.svg) **Draft Line** command creates a straight line.

A Draft Line is in fact a [Draft Wire](/Draft_Wire "Draft Wire") with only two points.

![](/src/assets/images/Draft_Line_example.jpg)

Line defined by two points

## Usage

See also: [Draft Tray](/Draft_Tray "Draft Tray"), [Draft Snap](/Draft_Snap "Draft Snap") and [Draft Constrain](/Draft_Constrain "Draft Constrain").

1. There are several ways to invoke the command:
   - Press the ![](/src/assets/images/Draft_Line.svg) [Line](/Draft_Line "Draft Line") button.
   - [Draft](/Draft_Workbench "Draft Workbench"): Select the **Drafting → ![](/src/assets/images/Draft_Line.svg) Line** option from the menu.
   - [BIM](/BIM_Workbench "BIM Workbench"): Select the **2D Drafting → ![](/src/assets/images/Draft_Line.svg) Line** option from the menu.
   - Use the keyboard shortcut: L then I.
2. The **Line** task panel opens. See [Options](#Options) for more information.
3. Pick the first point in the [3D view](/3D_view "3D view"), or type coordinates and press the ![](/src/assets/images/Draft_AddPoint.svg) Enter point button.
4. Pick the second point in the [3D view](/3D_view "3D view"), or type coordinates and press the ![](/src/assets/images/Draft_AddPoint.svg) Enter point button.

## Options

The single character keyboard shortcuts available in the task panel can be changed. See [Draft Preferences](/Draft_Preferences "Draft Preferences"). The shortcuts mentioned here are the default shortcuts (for version 1.0).

- To manually enter coordinates enter the X, Y and Z component, and press Enter after each. Or you can press the ![](/src/assets/images/Draft_AddPoint.svg) Enter point button when you have the desired values. It is advisable to move the pointer out of the [3D view](/3D_view "3D view") before entering coordinates.
- To use polar coordinates enter a value for the **Length** and a value for the **Angle**, and press Enter after each.
- Check the **Angle** checkbox to constrain the pointer to the specified angle.
- Press L to change the focus from the **X** input box to the **Length** input box and back. Depending on the input box that receives the focus the **Angle** checkbox is checked or unchecked.
- Press R or click the **Relative** checkbox to toggle relative mode. If relative mode is on, the coordinates of the second point are relative to the first point, else they are relative to the coordinate system origin.
- Press G or click the **Global** checkbox to toggle global mode. If global mode is on, coordinates are relative to the global coordinate system, else they are relative to the [working plane](/Draft_SelectPlane "Draft SelectPlane") coordinate system.
- Press N or click the **Continue** checkbox to toggle continue mode. If continue mode is on, the command will restart after finishing, allowing you to continue creating lines.
- Press S to switch [Draft snapping](/Draft_Snap "Draft Snap") on or off.
- Press Esc or the Close button to abort the command.

## Notes

- A Draft Line can be edited with the [Draft Edit](/Draft_Edit "Draft Edit") command.
- Draft Lines and [Draft Wires](/Draft_Wire "Draft Wire") can be joined with the [Draft Wire](/Draft_Wire "Draft Wire") command, the [Draft Join](/Draft_Join "Draft Join") command or the [Draft Upgrade](/Draft_Upgrade "Draft Upgrade") command.

## Preferences

See also: [Preferences Editor](/Preferences_Editor "Preferences Editor") and [Draft Preferences](/Draft_Preferences "Draft Preferences").

- To change the initial focus of the task panel to the **Length** input box: **Edit → Preferences... → Draft → General → Set focus on Length instead of X coordinate**. Note that you must move the pointer in the [3D view](/3D_view "3D view") for the change to take effect.
- If the **Edit → Preferences... → Draft → General → Create Part primitives if possible** option is checked, the command will create a [Part Line](/Part_Line "Part Line") instead of a Draft Line.

## Properties

See [Draft Wire](/Draft_Wire#Properties "Draft Wire").

## Scripting

See also: [Autogenerated API documentation](https://freecad.github.io/SourceDoc/) and [FreeCAD Scripting Basics](/FreeCAD_Scripting_Basics "FreeCAD Scripting Basics").

To create a Draft Line use the `make_line` method ([introduced in 0.19](/Release_notes_0.19 "Release notes 0.19")) of the Draft module. This method replaces the deprecated `makeLine` method.

```
line = make_line(p1, p2)
line = make_line(LineSegment)
line = make_line(Shape)

```

- Creates a `Line` object between points `p1` and `p2`, each defined by its `FreeCAD.Vector`, with units in millimeters.
- Creates a `Line` object from a `Part.LineSegment`.
- Creates a `Line` object from the first vertex to the last vertex of the given `Shape`.

Example:

```
import FreeCAD as App
import Draft

doc = App.newDocument()

p1 = App.Vector(0, 0, 0)
p2 = App.Vector(1000, 500, 0)
p3 = App.Vector(-250, -500, 0)
p4 = App.Vector(500, 1000, 0)

line1 = Draft.make_line(p1, p2)
line2 = Draft.make_line(p3, p4)

doc.recompute()

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Draft_Line/en&oldid=1513286>"
