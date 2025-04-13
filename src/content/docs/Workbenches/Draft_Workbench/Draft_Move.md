---
title: Draft Move
---

|                                                                                     |
| ----------------------------------------------------------------------------------- |
| Draft Move                                                                          |
| Menu location                                                                       |
| Modification → Move Modify → Move                                                   |
| Workbenches                                                                         |
| [Draft](/Draft_Workbench "Draft Workbench"), [BIM](/BIM_Workbench "BIM Workbench")  |
| Default shortcut                                                                    |
| M V                                                                                 |
| Introduced in version                                                               |
| 0.7                                                                                 |
| See also                                                                            |
| [Draft SubelementHighlight](/Draft_SubelementHighlight "Draft SubelementHighlight") |
|                                                                                     |

## Description

The ![](/src/assets/images/Draft_Move.svg) **Draft Move** command moves or copies selected objects from one point to another. In subelement mode the command moves selected points and edges, or copies selected edges, of [Draft Lines](/Draft_Line "Draft Line") and [Draft Wires](/Draft_Wire "Draft Wire").

The command can be used on 2D objects created with the [Draft Workbench](/Draft_Workbench "Draft Workbench") or [Sketcher Workbench](/Sketcher_Workbench "Sketcher Workbench"), but also on many 3D objects such as those created with the [Part Workbench](/Part_Workbench "Part Workbench"), [PartDesign Workbench](/PartDesign_Workbench "PartDesign Workbench") or [BIM Workbench](/BIM_Workbench "BIM Workbench").

![](/src/assets/images/Draft_Move_example.jpg)

Moving an object from one point to another

## Usage

See also: [Draft Snap](/Draft_Snap "Draft Snap") and [Draft Constrain](/Draft_Constrain "Draft Constrain").

1. Optionally select one or more objects, or one or more subelements of [Draft Lines](/Draft_Line "Draft Line") or [Draft Wires](/Draft_Wire "Draft Wire").
2. There are several ways to invoke the command:
   - Press the ![](/src/assets/images/Draft_Move.svg) [Move](/Draft_Move "Draft Move") button.
   - [Draft](/Draft_Workbench "Draft Workbench"): Select the **Modification → ![](/src/assets/images/Draft_Move.svg) Move** option from the menu.
   - [BIM](/BIM_Workbench "BIM Workbench"): Select the **Modify → ![](/src/assets/images/Draft_Move.svg) Move** option from the menu.
   - Use the keyboard shortcut: M then V.
3. If you have not yet selected an object: select an object in the [3D view](/3D_view "3D view").
4. The **Move** task panel opens. See [Options](#Options) for more information.
5. If subelements have been selected: check the **Modify subelements** checkbox to switch on subelement mode.
6. Pick the first point, the base point, in the [3D view](/3D_view "3D view"), or type coordinates and press the ![](/src/assets/images/Draft_AddPoint.svg) Enter point button.
7. Pick the second point, the target point, in the [3D view](/3D_view "3D view"), or type coordinates and press the ![](/src/assets/images/Draft_AddPoint.svg) Enter point button.

## Options

The single character keyboard shortcuts available in the task panel can be changed. See [Draft Preferences](/Draft_Preferences "Draft Preferences"). The shortcuts mentioned here are the default shortcuts (for version 1.0).

- To manually enter coordinates enter the X, Y and Z component, and press Enter after each. Or you can press the ![](/src/assets/images/Draft_AddPoint.svg) Enter point button when you have the desired values. It is advisable to move the pointer out of the [3D view](/3D_view "3D view") before entering coordinates.
- To use polar coordinates enter a value for the **Length** and a value for the **Angle**, and press Enter after each.
- Check the **Angle** checkbox to constrain the pointer to the specified angle.
- Press L to change the focus from the **X** input box to the **Length** input box and back. Depending on the input box that receives the focus the **Angle** checkbox is checked or unchecked.
- Press R or click the **Relative** checkbox to toggle relative mode. If relative mode is on, the coordinates of the second point are relative to the first point, else they are relative to the coordinate system origin.
- Press G or click the **Global** checkbox to toggle global mode. If global mode is on, coordinates are relative to the global coordinate system, else they are relative to the [working plane](/Draft_SelectPlane "Draft SelectPlane") coordinate system.
- Press N or click the **Continue** checkbox to toggle continue mode. If continue mode is on, the command will restart after finishing. This mode really only makes sense if copy mode is switched on. Depending on the **Select base objects after copying** preference, either the original objects are selected for the next command call or the copies that were created last. See [Preferences](#Preferences).
- Press C or click the **Copy** checkbox to toggle copy mode. If copy mode is on, the command will create moved copies instead of moving the original objects.
- Press B or click the **Modify subelements** checkbox to toggle subelement mode. If subelement mode is on, the command will use the selected subelements instead of the whole objects. The subelements must belong to [Draft Lines](/Draft_Line "Draft Line") or [Draft Wires](/Draft_Wire "Draft Wire").
- If copy mode and subelement mode are both on, and edges of [Draft Wires](/Draft_Wire "Draft Wire") are selected, new wires will be created from those edges.
- Holding down Alt after picking the base point will also toggle copy mode. While Alt is held down multiple target points can be picked. Release Alt to finish the command and see the created copies.
- Press S to switch [Draft snapping](/Draft_Snap "Draft Snap") on or off.
- Press Esc or the Close button to abort the command.

## Notes

- An Object that is [attached](/Part_EditAttachment "Part EditAttachment") cannot be moved with the Draft Move command. To move it either its Data**Support** object has to be moved, or its Data**Attachment Offset** has to be changed.

## Preferences

See also: [Preferences Editor](/Preferences_Editor "Preferences Editor") and [Draft Preferences](/Draft_Preferences "Draft Preferences").

- To change the initial focus of the task panel to the **Length** input box: **Edit → Preferences... → Draft → General → Set focus on Length instead of X coordinate**. Note that you must move the pointer in the [3D view](/3D_view "3D view") for the change to take effect.
- To reselect the base objects after copying objects: **Edit → Preferences... → Draft → General → Select base objects after copying**.

## Scripting

See also: [Autogenerated API documentation](https://freecad.github.io/SourceDoc/) and [FreeCAD Scripting Basics](/FreeCAD_Scripting_Basics "FreeCAD Scripting Basics").

To move objects use the `move` method of the Draft module.

```
moved_list = move(objectslist, vector, copy=False)

```

- `objectslist` contains the objects to be moved. It is either a single object or a list of objects.
- `vector` is the displacement.
- If `copy` is `True` copies are created instead of moving the original objects.
- `moved_list` is returned with the original moved objects, or with the new copies. It is either a single object or a list of objects, depending on `objectslist`.

Example:

```
import FreeCAD as App
import Draft

doc = App.newDocument()

polygon1 = Draft.make_polygon(5, radius=1000)
polygon2 = Draft.make_polygon(3, radius=500)
polygon3 = Draft.make_polygon(6, radius=220)

Draft.move(polygon1, App.Vector(500, 500, 0))
Draft.move(polygon1, App.Vector(500, 500, 0))
Draft.move(polygon2, App.Vector(1000, -1000, 0))
Draft.move(polygon3, App.Vector(-500, -500, 0))

list1 = [polygon1, polygon2, polygon3]

vector = App.Vector(-2000, -2000, 0)
list2 = Draft.move(list1, vector, copy=True)
list3 = Draft.move(list1, -2*vector, copy=True)

doc.recompute()

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Draft_Move/en&oldid=1513434>"
