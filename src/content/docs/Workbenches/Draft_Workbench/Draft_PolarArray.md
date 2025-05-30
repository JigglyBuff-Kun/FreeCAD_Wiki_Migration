---
title: Draft PolarArray
---

|                                                                                                                                                                                                                                                                                                                                                                                       |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Draft PolarArray                                                                                                                                                                                                                                                                                                                                                                      |
| Menu location                                                                                                                                                                                                                                                                                                                                                                         |
| Modification → Array tools → Polar array Modify → Polar array                                                                                                                                                                                                                                                                                                                         |
| Workbenches                                                                                                                                                                                                                                                                                                                                                                           |
| [Draft](/Draft_Workbench "Draft Workbench"), [BIM](/BIM_Workbench "BIM Workbench")                                                                                                                                                                                                                                                                                                    |
| Default shortcut                                                                                                                                                                                                                                                                                                                                                                      |
| _None_                                                                                                                                                                                                                                                                                                                                                                                |
| Introduced in version                                                                                                                                                                                                                                                                                                                                                                 |
| 0.19                                                                                                                                                                                                                                                                                                                                                                                  |
| See also                                                                                                                                                                                                                                                                                                                                                                              |
| [Draft OrthoArray](/Draft_OrthoArray "Draft OrthoArray"), [Draft CircularArray](/Draft_CircularArray "Draft CircularArray"), [Draft PathArray](/Draft_PathArray "Draft PathArray"), [Draft PathLinkArray](/Draft_PathLinkArray "Draft PathLinkArray"), [Draft PointArray](/Draft_PointArray "Draft PointArray"), [Draft PointLinkArray](/Draft_PointLinkArray "Draft PointLinkArray") |
|                                                                                                                                                                                                                                                                                                                                                                                       |

## Description

The ![](/images/Draft_PolarArray.svg) **Draft PolarArray** command creates an array from a selected object by placing copies along a circumference. The command can optionally create a [Link](/App_Link "App Link") array, which is more efficient than a regular array.

The command can be used on 2D objects created with the [Draft Workbench](/Draft_Workbench "Draft Workbench") or [Sketcher Workbench](/Sketcher_Workbench "Sketcher Workbench"), but also on many 3D objects such as those created with the [Part Workbench](/Part_Workbench "Part Workbench"), [PartDesign Workbench](/PartDesign_Workbench "PartDesign Workbench") or [BIM Workbench](/BIM_Workbench "BIM Workbench").

![](/images/Draft_PolarArray_example.png)

Draft PolarArray

## Usage

See also: [Draft Snap](/Draft_Snap "Draft Snap").

1. Optionally select one object.
2. There are several ways to invoke the command:
   - Press the ![](/images/Draft_PolarArray.svg) [Polar array](/Draft_PolarArray "Draft PolarArray") button.
   - [Draft](/Draft_Workbench "Draft Workbench"): Select the **Modification → Array tools → ![](/images/Draft_PolarArray.svg) Polar array** option from the menu.
   - [BIM](/BIM_Workbench "BIM Workbench"): Select the **Modify → ![](/images/Draft_PolarArray.svg) Polar array** option from the menu.
3. The **Polar array** task panel opens. See [Options](#Options) for more information.
4. If you have not yet selected an object: select one object.
5. Enter the required parameters in the task panel.
6. To finish the command do one of the following:
   - Pick a point in the [3D view](/3D_view "3D view") for the **Center of rotation**.
   - Press Enter.
   - Press the OK button.

## Options

- Enter the **Polar angle** to specify the total angle of the array. The angle is positive in the counter-clockwise direction.
- Enter the **Number of elements**. Must be at least `2`. The maximum that can be entered in the task panel is `99`, but higher values are possible by changing the Data**Number Polar** property of the array.
- Pick a point in the [3D view](/3D_view "3D view"), note that this will also finish the command, or type coordinates for the **Center of rotation**. The rotation axis of the array will pass through this point. It is advisable to move the pointer out of the [3D view](/3D_view "3D view") before entering coordinates.
- Press the **Reset point** button to reset the **Center of rotation** to the origin.
- If the **Fuse** checkbox is checked overlapping elements in the array are fused.
- If the **Link array** checkbox is checked a Link array instead of a regular array is created. A Link array is more efficient because its elements are [App Link](/App_Link "App Link") objects.
- Press Esc or the Cancel button to abort the command.

## Notes

See [Draft OrthoArray](/Draft_OrthoArray#Notes "Draft OrthoArray").

- The default rotation axis for the array is the positive Z axis. This can be changed by editing its Data**Axis** property.

## Properties

See [Draft OrthoArray](/Draft_OrthoArray#Properties "Draft OrthoArray").

## Scripting

See also: [Autogenerated API documentation](https://freecad.github.io/SourceDoc/) and [FreeCAD Scripting Basics](/FreeCAD_Scripting_Basics "FreeCAD Scripting Basics").

### Parametric array

To create a parametric polar array use the `make_array` method ([introduced in 0.19](/Release_notes_0.19 "Release notes 0.19")) of the Draft module. This method replaces the deprecated `makeArray` method. The `make_array` method can create [Draft OrthoArrays](/Draft_OrthoArray "Draft OrthoArray"), Draft PolarArrays and [Draft CircularArrays](/Draft_CircularArray "Draft CircularArray"). For each array type one or more wrappers are available.

The main method:

```
array = make_array(base_object, arg1, arg2, arg3, arg4=None, arg5=None, arg6=None, use_link=True)

```

The wrapper for polar arrays is:

```
array = make_polar_array(base_object,
                         number=5, angle=360, center=App.Vector(0, 0, 0),
                         use_link=True)

```

- `base_object` is the object to be arrayed. It can also be the `Label` (string) of an object in the current document.
- `number` is the number of elements in the pattern, including the original object.
- `angle` is the angle of the polar arc in degrees.
- `center` is the vector that defines the center of the pattern.
- If `use_link` is `True` the created elements are [App Links](/App_Link "App Link") instead of regular copies.
- `array` is returned with the created array object.

Example:

```
import FreeCAD as App
import Draft

doc = App.newDocument()

tri = Draft.make_polygon(3, 600)
center = App.Vector(-1600, 0, 0)

array = Draft.make_polar_array(tri, 8, 270, center)
doc.recompute()

```

### Non-parametric array

To create a non-parametric polar array use the `array` method of the Draft module. This method returns `None`.

```
array(objectslist, center, angle, number)

```

Example:

```
import FreeCAD as App
import Draft

doc = App.newDocument()

tri = Draft.make_polygon(3, 600)
center = App.Vector(-1600, 0, 0)

Draft.array(tri, center, 270, 8)
doc.recompute()

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Draft_PolarArray/en&oldid=1557807>"
