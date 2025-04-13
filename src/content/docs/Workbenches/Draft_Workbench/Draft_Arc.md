---
title: Draft Arc
---

|                                                                                                           |
| --------------------------------------------------------------------------------------------------------- |
| Draft Arc                                                                                                 |
| Menu location                                                                                             |
| Drafting → Arc tools → Arc 2D Drafting → Arc                                                              |
| Workbenches                                                                                               |
| [Draft](/Draft_Workbench "Draft Workbench"), [BIM](/BIM_Workbench "BIM Workbench")                        |
| Default shortcut                                                                                          |
| A R                                                                                                       |
| Introduced in version                                                                                     |
| 0.7                                                                                                       |
| See also                                                                                                  |
| [Draft Arc 3Points](/Draft_Arc_3Points "Draft Arc 3Points"), [Draft Circle](/Draft_Circle "Draft Circle") |
|                                                                                                           |

## Description

The ![](/src/assets/images/Draft_Arc.svg) **Draft Arc** command creates a circular arc on the current [working plane](/Draft_SelectPlane "Draft SelectPlane") from a center, a radius, a start angle and an aperture angle. The radius and the angles can be defined by picking points.

A Draft Arc is in fact a [Draft Circle](/Draft_Circle "Draft Circle") with a Data**First Angle** that is not the same as its Data**Last Angle**.

![](/src/assets/images/Draft_Arc_example.jpg)

Arc defined by four points, center, radius, initial point of arc and final point of arc

## Usage

See also: [Draft Tray](/Draft_Tray "Draft Tray"), [Draft Snap](/Draft_Snap "Draft Snap") and [Draft Constrain](/Draft_Constrain "Draft Constrain").

1. There are several ways to invoke the command:
   - Press the ![](/src/assets/images/Draft_Arc.svg) [Arc](/Draft_Arc "Draft Arc") button.
   - [Draft](/Draft_Workbench "Draft Workbench"): Select the **Drafting → Arc tools → ![](/src/assets/images/Draft_Arc.svg) Arc** option from the menu.
   - [BIM](/BIM_Workbench "BIM Workbench"): Select the **2D Drafting → ![](/src/assets/images/Draft_Arc.svg) Arc** option from the menu.
   - Use the keyboard shortcut: A then R.
2. The **Arc** task panel opens. See [Options](#Options) for more information.
3. Pick the first point, the center of the arc, in the [3D view](/3D_view "3D view"), or type coordinates and press the ![](/src/assets/images/Draft_AddPoint.svg) Enter point button.
4. Pick the second point in the [3D view](/3D_view "3D view"), or enter a **Radius**.
5. Pick the third point in the [3D view](/3D_view "3D view"), or enter a **Start angle**.
6. Pick the fourth point in the [3D view](/3D_view "3D view"), or enter an **Aperture angle**.

## Options

The single character keyboard shortcuts available in the task panel can be changed. See [Draft Preferences](/Draft_Preferences "Draft Preferences"). The shortcuts mentioned here are the default shortcuts (for version 1.0).

- To manually enter the coordinates for the center enter the X, Y and Z component, and press Enter after each. Or you can press the ![](/src/assets/images/Draft_AddPoint.svg) Enter point button when you have the desired values. It is advisable to move the pointer out of the [3D view](/3D_view "3D view") before entering coordinates.
- Press G or click the **Global** checkbox to toggle global mode. If global mode is on, coordinates are relative to the global coordinate system, else they are relative to the [working plane](/Draft_SelectPlane "Draft SelectPlane") coordinate system.
- Press N or click the **Continue** checkbox to toggle continue mode. If continue mode is on, the command will restart after finishing, allowing you to continue creating arcs.
- Press S to switch [Draft snapping](/Draft_Snap "Draft Snap") on or off.
- Press Esc or the Close button to abort the command.

## Notes

- A Draft Arc can be edited with the [Draft Edit](/Draft_Edit "Draft Edit") command.

## Preferences

See also: [Preferences Editor](/Preferences_Editor "Preferences Editor") and [Draft Preferences](/Draft_Preferences "Draft Preferences").

- If the **Edit → Preferences... → Draft → General → Create Part primitives if possible** option is checked, the command will create a [Part Circle](/Part_Circle "Part Circle") instead of a Draft Circle.

## Properties

See [Draft Circle](/Draft_Circle#Properties "Draft Circle").

## Scripting

See also: [Autogenerated API documentation](https://freecad.github.io/SourceDoc/) and [FreeCAD Scripting Basics](/FreeCAD_Scripting_Basics "FreeCAD Scripting Basics").

To create a Draft Arc use the `make_circle` method ([introduced in 0.19](/Release_notes_0.19 "Release notes 0.19")) of the Draft module. This method replaces the deprecated `makeCircle` method.

Example:

```
import FreeCAD as App
import Draft

doc = App.newDocument()

arc1 = Draft.make_circle(200, startangle=0, endangle=90)
arc2 = Draft.make_circle(500, startangle=20, endangle=160)
arc3 = Draft.make_circle(750, startangle=-30, endangle=-150)

doc.recompute()

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Draft_Arc/en&oldid=1513310>"
