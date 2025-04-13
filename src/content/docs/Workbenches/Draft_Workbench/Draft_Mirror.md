---
title: Draft Mirror
---

|                                                                                    |
| ---------------------------------------------------------------------------------- |
| Draft Mirror                                                                       |
| Menu location                                                                      |
| Modification → Mirror Modify → Mirror                                              |
| Workbenches                                                                        |
| [Draft](/Draft_Workbench "Draft Workbench"), [BIM](/BIM_Workbench "BIM Workbench") |
| Default shortcut                                                                   |
| M I                                                                                |
| Introduced in version                                                              |
| -                                                                                  |
| See also                                                                           |
| [Draft Clone](/Draft_Clone "Draft Clone")                                          |
|                                                                                    |

## Description

The ![](/src/assets/images/Draft_Mirror.svg) **Draft Mirror** command creates mirrored copies, [Part Mirror](/Part_Mirror "Part Mirror") objects, from selected objects. A [Part Mirror](/Part_Mirror "Part Mirror") object is parametric, it will update if its source object changes.

The command can be used on 2D objects created with the [Draft Workbench](/Draft_Workbench "Draft Workbench") or [Sketcher Workbench](/Sketcher_Workbench "Sketcher Workbench"), but also on many 3D objects such as those created with the [Part Workbench](/Part_Workbench "Part Workbench"), [PartDesign Workbench](/PartDesign_Workbench "PartDesign Workbench") or [BIM Workbench](/BIM_Workbench "BIM Workbench").

![](/src/assets/images/Draft_Mirror_example.jpg)

Mirroring an object

## Usage

See also: [Draft Snap](/Draft_Snap "Draft Snap") and [Draft Constrain](/Draft_Constrain "Draft Constrain").

1. Optionally select one or more objects.
2. There are several ways to invoke the command:
   - Press the ![](/src/assets/images/Draft_Mirror.svg) [Mirror](/Draft_Mirror "Draft Mirror") button.
   - [Draft](/Draft_Workbench "Draft Workbench"): Select the **Modification → ![](/src/assets/images/Draft_Mirror.svg) Mirror** option from the menu.
   - [BIM](/BIM_Workbench "BIM Workbench"): Select the **Modify → ![](/src/assets/images/Draft_Mirror.svg) Mirror** option from the menu.
   - Use the keyboard shortcut: M then I.
3. If you have not yet selected an object: select an object in the [3D view](/3D_view "3D view").
4. The **Mirror** task panel opens. See [Options](#Options) for more information.
5. Pick the first point of the mirror plane in the [3D view](/3D_view "3D view"), or type coordinates and press the ![](/src/assets/images/Draft_AddPoint.svg) Enter point button.
6. Pick the second point of the mirror plane in the [3D view](/3D_view "3D view"), or type coordinates and press the ![](/src/assets/images/Draft_AddPoint.svg) Enter point button.
7. The mirror plane is defined by the selected points and the normal of the [Draft working plane](/Draft_SelectPlane "Draft SelectPlane").

## Options

The single character keyboard shortcuts available in the task panel can be changed. See [Draft Preferences](/Draft_Preferences "Draft Preferences"). The shortcuts mentioned here are the default shortcuts.

- To manually enter coordinates enter the X, Y and Z component, and press Enter after each. Or you can press the ![](/src/assets/images/Draft_AddPoint.svg) Enter point button when you have the desired values. It is advisable to move the pointer out of the [3D view](/3D_view "3D view") before entering coordinates.
- Press R or click the **Relative** checkbox to toggle relative mode. If relative mode is on, the coordinates of the second point are relative to the first point, else they are relative to the coordinate system origin.
- Press G or click the **Global** checkbox to toggle global mode. If global mode is on, coordinates are relative to the global coordinate system, else they are relative to the [working plane](/Draft_SelectPlane "Draft SelectPlane") coordinate system.
- Press S to switch [Draft snapping](/Draft_Snap "Draft Snap") on or off.
- Press Esc or the Close button to abort the command.

## Notes

- Mirrored copies of [Draft Lines](/Draft_Line "Draft Line"), [Draft Wires](/Draft_Wire "Draft Wire"), [Draft Arcs](/Draft_Arc "Draft Arc") and [Draft Circles](/Draft_Circle "Draft Circle") can be turned into independent editable Draft objects by using [Draft Downgrade](/Draft_Downgrade "Draft Downgrade") and then [Draft Upgrade](/Draft_Upgrade "Draft Upgrade").
- The [Part SimpleCopy](/Part_SimpleCopy "Part SimpleCopy") command can be used to create a copy of a mirrored object that is not linked to its source object.

## Properties

See also: [Property editor](/Property_editor "Property editor").

A [Part Mirror](/Part_Mirror "Part Mirror") object is derived from a [Part Feature](/Part_Feature "Part Feature") object and inherits all its properties. It also has the following additional properties:

### Data

Base

- Data**Source** (`Link`): specifies the object that is mirrored.

Plane

- Data**Base** (`Vector`): specifies the base point of the mirror plane.
- Data**Normal** (`Vector`): specifies the normal direction of the mirror plane.

## Scripting

See also: [Autogenerated API documentation](https://freecad.github.io/SourceDoc/) and [FreeCAD Scripting Basics](/FreeCAD_Scripting_Basics "FreeCAD Scripting Basics").

To mirror objects use the `mirror` method of the Draft module.

```
mirrored_list = mirror(objlist, p1, p2)

```

- `objlist` contains the objects to be mirrored. It is either a single object or a list of objects.
- `p1` is the first point of the mirror plane.
- `p2` is the second point of the mirror plane.
- If the [Draft working plane](/Draft_SelectPlane "Draft SelectPlane") is available the alignment of the mirror plane is determined by its normal, else the view direction of the camera in the active [3D view](/3D_view "3D view") is used. If the graphical interface is not available the Z axis is used.
- `mirrored_list` is returned with the new `Part::Mirroring` objects. It is either a single object or a list of objects, depending on `objlist`.

Example:

```
import FreeCAD as App
import Draft

doc = App.newDocument()

place = App.Placement(FreeCAD.Vector(1000, 0, 0), App.Rotation())
polygon1 = Draft.make_polygon(3, 750)
polygon2 = Draft.make_polygon(5, 750, placement=place)

p1 = App.Vector(2000, -1000, 0)
p2 = App.Vector(2000, 1000, 0)

line1 = Draft.make_line(p1, p2)
mirrored1 = Draft.mirror(polygon1, p1, p2)

Line2 = Draft.make_line(-p1, -p2)
mirrored2 = Draft.mirror([polygon1, polygon2], -p1, -p2)

doc.recompute()

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Draft_Mirror/en&oldid=1513416>"
