---
title: Draft Scale
---

|                                                                                                                                |
| ------------------------------------------------------------------------------------------------------------------------------ |
| Draft Scale                                                                                                                    |
| Menu location                                                                                                                  |
| Modification → Scale Modify → Scale                                                                                            |
| Workbenches                                                                                                                    |
| [Draft](/Draft_Workbench "Draft Workbench"), [BIM](/BIM_Workbench "BIM Workbench")                                             |
| Default shortcut                                                                                                               |
| S C                                                                                                                            |
| Introduced in version                                                                                                          |
| -                                                                                                                              |
| See also                                                                                                                       |
| [Draft SubelementHighlight](/Draft_SubelementHighlight "Draft SubelementHighlight"), [Draft Clone](/Draft_Clone "Draft Clone") |
|                                                                                                                                |

## Description

The ![](/src/assets/images/Draft_Scale.svg) **Draft Scale** command scales or copies selected objects around a base point. In subelement mode the command scales selected points and edges of [Draft Lines](/Draft_Line "Draft Line") and [Draft Wires](/Draft_Wire "Draft Wire").

The command can be used on 2D objects created with the [Draft Workbench](/Draft_Workbench "Draft Workbench") or [Sketcher Workbench](/Sketcher_Workbench "Sketcher Workbench"), but also on many 3D objects such as those created with the [Part Workbench](/Part_Workbench "Part Workbench"), [PartDesign Workbench](/PartDesign_Workbench "PartDesign Workbench") or [BIM Workbench](/BIM_Workbench "BIM Workbench").

![](/src/assets/images/Draft_Scale_example.png)

Scaling an object around a base point

## Usage

See also: [Draft Snap](/Draft_Snap "Draft Snap") and [Draft Constrain](/Draft_Constrain "Draft Constrain").

1. Optionally select one or more objects, or one or more subelements of [Draft Lines](/Draft_Line "Draft Line") or [Draft Wires](/Draft_Wire "Draft Wire").
2. There are several ways to invoke the command:
   - Press the ![](/src/assets/images/Draft_Scale.svg) [Scale](/Draft_Scale "Draft Scale") button.
   - [Draft](/Draft_Workbench "Draft Workbench"): Select the **Modification → ![](/src/assets/images/Draft_Scale.svg) Scale** option from the menu.
   - [BIM](/BIM_Workbench "BIM Workbench"): Select the **Modify → ![](/src/assets/images/Draft_Scale.svg) Scale** option from the menu.
   - Use the keyboard shortcut: S then C.
3. If you have not yet selected an object: select an object in the [3D view](/3D_view "3D view").
4. The **Scale** task panel opens. See [Options](#Options) for more information.
5. If subelements have been selected: check the **Modify subelements** checkbox to switch on subelement mode.
6. Pick the base point in the [3D view](/3D_view "3D view"), or type coordinates and press the ![](/src/assets/images/Draft_AddPoint.svg) Enter point button.
7. Enter the X, Y and Z scale factors.
8. Press Enter or the OK button to finish the command.

## Options

### First task panel

The single character keyboard shortcuts available in the task panel can be changed. See [Draft Preferences](/Draft_Preferences "Draft Preferences"). The shortcuts mentioned here are the default shortcuts.

- To manually enter the coordinates for the base point enter the X, Y and Z component, and press Enter after each. Or you can press the ![](/src/assets/images/Draft_AddPoint.svg) Enter point button when you have the desired values. It is advisable to move the pointer out of the [3D view](/3D_view "3D view") before entering coordinates.
- Press G or click the **Global** checkbox to toggle global mode. If global mode is on, coordinates are relative to the global coordinate system, else they are relative to the [working plane](/Draft_SelectPlane "Draft SelectPlane") coordinate system.
- Press S to switch [Draft snapping](/Draft_Snap "Draft Snap") on or off.
- Press the Close button to abort the command.

### Second task panel

- Enter the X, Y and Z factors to define the scaling. The values must be larger than zero.
- Check the **Uniform scaling** checkbox to lock the X, Y and Z factors to the same value.
- If the **Working plane orientation** checkbox is checked the scale factors are relative to the [working plane](/Draft_SelectPlane "Draft SelectPlane") coordinate system, else they are relative to the global coordinate system.
- If the **Copy** checkbox is checked a scaled copy of the original object is created. This only works for Draft objects that have a Data**Points** property, such as [Draft Wires](/Draft_Wire "Draft Wire").
- If the **Modify subelements** checkbox is checked the command will use the selected subelements instead of the whole objects. The subelements must belong to [Draft Lines](/Draft_Line "Draft Line") or [Draft Wires](/Draft_Wire "Draft Wire").
- If the **Create a clone** checkbox is checked scaled [clones](/Draft_Clone "Draft Clone") of the original objects are created. This works for all object types. For objects that are not Draft objects, or for Draft objects that do not have a Data**Points** property, this option _must_ be selected.
- Press the Pick from/to points button and pick two additional points in the [3D view](/3D_view "3D view") to calculate the scale factors. This will automatically check the **Uniform scaling** checkbox. The X, Y and Z scale factors will therefore be equal and will be set to the distance between the base point and the 'from' point, divided by the distance between the base point and the 'to' point.
- Press Esc or the Cancel button to abort the command.

## Notes

- The command can also scale [Image Planes](/Image_CreateImagePlane "Image CreateImagePlane"), but not in clone mode.

## Preferences

See also: [Preferences Editor](/Preferences_Editor "Preferences Editor") and [Draft Preferences](/Draft_Preferences "Draft Preferences").

- To reselect the base objects after copying objects: **Edit → Preferences... → Draft → General → Select base objects after copying**.

## Scripting

See also: [Autogenerated API documentation](https://freecad.github.io/SourceDoc/) and [FreeCAD Scripting Basics](/FreeCAD_Scripting_Basics "FreeCAD Scripting Basics").

To scale objects use the `scale` method of the Draft module.

```
scaled_list = scale(objectslist, scale=Vector(1,1,1), center=Vector(0,0,0), copy=False)

```

- `objectslist` contains the objects to be scaled. It is either a single object or a list of objects.
- `scale` is the vector that specifies by the X, Y and Z scale factors.
- `center` is the center point of the scaling operation.
- If `copy` is `True` copies are created instead of scaling the original objects.
- `scaled_list` is returned with the original scaled objects, or with the new copies. It is either a single object or a list of objects, depending on `objectslist`.

Example:

```
import FreeCAD as App
import Draft

doc = App.newDocument()

pts = [App.Vector(0, 0, 0), App.Vector(500, 500, 0), App.Vector(600, 0, 0)]
wire1 = Draft.make_wire(pts, closed=True)
doc.recompute()

scale1 = App.Vector(2.3, 0.75, 0)
wire2 = Draft.scale(wire1, scale1, copy=True)
doc.recompute()

scale2 = App.Vector(-2, -1.5, 0)
wires = Draft.scale([wire1, wire2], scale2, copy=True)
doc.recompute()

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Draft_Scale/en&oldid=1513477>"
