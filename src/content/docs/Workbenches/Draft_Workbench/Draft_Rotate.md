---
title: Draft Rotate
---

|                                                                                     |
| ----------------------------------------------------------------------------------- |
| Draft Rotate                                                                        |
| Menu location                                                                       |
| Modification → Rotate Modify → Rotate                                               |
| Workbenches                                                                         |
| [Draft](/Draft_Workbench "Draft Workbench"), [BIM](/BIM_Workbench "BIM Workbench")  |
| Default shortcut                                                                    |
| R O                                                                                 |
| Introduced in version                                                               |
| 0.7                                                                                 |
| See also                                                                            |
| [Draft SubelementHighlight](/Draft_SubelementHighlight "Draft SubelementHighlight") |
|                                                                                     |

## Description

The ![](/images/Draft_Rotate.svg) **Draft Rotate** command rotates or copies selected objects around a center point by a given angle. The axis of rotation is perpendicular to the current [working plane](/Draft_SelectPlane "Draft SelectPlane") and the rotation angle is relative to that plane. In subelement mode the command rotates selected points and edges, or copies selected edges, of [Draft Lines](/Draft_Line "Draft Line") and [Draft Wires](/Draft_Wire "Draft Wire").

The command can be used on 2D objects created with the [Draft Workbench](/Draft_Workbench "Draft Workbench") or [Sketcher Workbench](/Sketcher_Workbench "Sketcher Workbench"), but also on many 3D objects such as those created with the [Part Workbench](/Part_Workbench "Part Workbench"), [PartDesign Workbench](/PartDesign_Workbench "PartDesign Workbench") or [BIM Workbench](/BIM_Workbench "BIM Workbench").

![](/images/Draft_Rotate_example.jpg)

Rotating an object around a center point

## Usage

See also: [Draft Snap](/Draft_Snap "Draft Snap") and [Draft Constrain](/Draft_Constrain "Draft Constrain").

1. Optionally select one or more objects, or one or more subelements of [Draft Lines](/Draft_Line "Draft Line") or [Draft Wires](/Draft_Wire "Draft Wire").
2. There are several ways to invoke the command:
   - Press the ![](/images/Draft_Rotate.svg) [Rotate](/Draft_Rotate "Draft Rotate") button.
   - [Draft](/Draft_Workbench "Draft Workbench"): Select the **Modification → ![](/images/Draft_Rotate.svg) Rotate** option from the menu.
   - [BIM](/BIM_Workbench "BIM Workbench"): Select the **Modify → ![](/images/Draft_Rotate.svg) Rotate** option from the menu.
   - Use the keyboard shortcut: R then O.
3. If you have not yet selected an object: select an object in the [3D view](/3D_view "3D view").
4. The **Rotate** task panel opens. See [Options](#Options) for more information.
5. If subelements have been selected: check the **Modify subelements** checkbox to switch on subelement mode.
6. Pick the first point, the center of rotation, in the [3D view](/3D_view "3D view"), or type coordinates and press the ![](/images/Draft_AddPoint.svg) Enter point button.
7. Pick the second point in the [3D view](/3D_view "3D view"), or enter a **Base angle**.
8. Pick the third point in the [3D view](/3D_view "3D view"), or enter a **Rotation**.

## Options

The single character keyboard shortcuts available in the task panel can be changed. See [Draft Preferences](/Draft_Preferences "Draft Preferences"). The shortcuts mentioned here are the default shortcuts (for version 1.0).

- To manually enter the coordinates for the center of rotation enter the X, Y and Z component, and press Enter after each. Or you can press the ![](/images/Draft_AddPoint.svg) Enter point button when you have the desired values. It is advisable to move the pointer out of the [3D view](/3D_view "3D view") before entering coordinates.
- Press G or click the **Global** checkbox to toggle global mode. If global mode is on, coordinates are relative to the global coordinate system, else they are relative to the [working plane](/Draft_SelectPlane "Draft SelectPlane") coordinate system.
- Press N or click the **Continue** checkbox to toggle continue mode. If continue mode is on, the command will restart after finishing. This mode really only makes sense if copy mode is switched on. Depending on the **Select base objects after copying** preference, either the original objects are selected for the next command call or the copies that were created last. See [Preferences](#Preferences).
- Press C or click the **Copy** checkbox to toggle copy mode. If copy mode is on, the command will create rotated copies instead of rotating the original objects.
- Press B or click the **Modify subelements** checkbox to toggle subelement mode. If subelement mode is on, the command will use the selected subelements instead of the whole objects. The subelements must belong to [Draft Lines](/Draft_Line "Draft Line") or [Draft Wires](/Draft_Wire "Draft Wire").
- If copy mode and subelement mode are both on, and edges of [Draft Wires](/Draft_Wire "Draft Wire") are selected, new wires will be created from those edges.
- Holding down Alt after entering the **Base angle** will also toggle copy mode. While Alt is held down multiple points can be picked for the **Rotation**. Release Alt to finish the command and see the created copies.
- Press S to switch [Draft snapping](/Draft_Snap "Draft Snap") on or off.
- Press Esc or the Close button to abort the command.

## Notes

- An Object that is [attached](/Part_EditAttachment "Part EditAttachment") cannot be rotated with the Draft Rotate command. To rotate it either its Data**Support** object has to be rotated, or its Data**Attachment Offset** has to be changed.
- The base angle concept can be somewhat confusing. Especially since it works only when selecting points, not when specifying the angle using the input field. An explanation of how it works, with an example, can be found in [this forum thread](https://forum.freecad.org/viewtopic.php?p=736674#p736674).

## Preferences

See also: [Preferences Editor](/Preferences_Editor "Preferences Editor") and [Draft Preferences](/Draft_Preferences "Draft Preferences").

- To reselect the base objects after copying objects: **Edit → Preferences... → Draft → General → Select base objects after copying**.

## Scripting

See also: [Autogenerated API documentation](https://freecad.github.io/SourceDoc/) and [FreeCAD Scripting Basics](/FreeCAD_Scripting_Basics "FreeCAD Scripting Basics").

To rotate objects use the `rotate` method of the Draft module.

```
rotated_list = rotate(objectslist, angle, center=Vector(0,0,0), axis=Vector(0,0,1), copy=False)

```

- `objectslist` contains the objects to be rotated. It is either a single object or a list of objects.
- `angle` is the angle of rotation in degrees.
- `center` is the center point of rotation.
- `axis` is the direction of the axis of rotation.
- If `copy` is `True` copies are created instead of rotating the original objects.
- `rotated_list` is returned with the original rotated objects, or with the new copies. It is either a single object or a list of objects, depending on `objectlist`.

Example:

```
import FreeCAD as App
import Draft

doc = App.newDocument()

polygon1 = Draft.make_polygon(3, radius=300)
Draft.move(polygon1, App.Vector(1000, 0, 0))

# Rotation around the origin
angle1 = 45
rot2 = Draft.rotate(polygon1, angle1, copy=True)
rot3 = Draft.rotate(polygon1, 2*angle1, copy=True)
rot4 = Draft.rotate(polygon1, 4*angle1, copy=True)

polygon2 = Draft.make_polygon(3, radius=1000)
polygon3 = Draft.make_polygon(5, radius=500)
Draft.move(polygon2, App.Vector(2000, 0, 0))
Draft.move(polygon3, App.Vector(2000, 0, 0))

# Rotation around another point
angle2 = 60
cen = App.Vector(3100, 0, 0)
list2 = [polygon2, polygon3]
rot_list2 = Draft.rotate(list2, angle2, center=cen, copy=True)
rot_list3 = Draft.rotate(list2, 2*angle2, center=cen, copy=True)
rot_list4 = Draft.rotate(list2, 4*angle2, center=cen, copy=True)

doc.recompute()

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Draft_Rotate/en&oldid=1513397>"
