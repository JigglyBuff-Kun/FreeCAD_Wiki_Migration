---
title: Draft CircularArray
---

|                                                                                                                                                                                                                                                                                                                                                                              |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Draft CircularArray                                                                                                                                                                                                                                                                                                                                                          |
| Menu location                                                                                                                                                                                                                                                                                                                                                                |
| Modification → Array tools → Circular array                                                                                                                                                                                                                                                                                                                                  |
| Workbenches                                                                                                                                                                                                                                                                                                                                                                  |
| [Draft](/Draft_Workbench "Draft Workbench")                                                                                                                                                                                                                                                                                                                                  |
| Default shortcut                                                                                                                                                                                                                                                                                                                                                             |
| _None_                                                                                                                                                                                                                                                                                                                                                                       |
| Introduced in version                                                                                                                                                                                                                                                                                                                                                        |
| 0.19                                                                                                                                                                                                                                                                                                                                                                         |
| See also                                                                                                                                                                                                                                                                                                                                                                     |
| [Draft OrthoArray](/Draft_OrthoArray "Draft OrthoArray"), [Draft PolarArray](/Draft_PolarArray "Draft PolarArray"), [Draft PathArray](/Draft_PathArray "Draft PathArray"), [Draft PathLinkArray](/Draft_PathLinkArray "Draft PathLinkArray"), [Draft PointArray](/Draft_PointArray "Draft PointArray"), [Draft PointLinkArray](/Draft_PointLinkArray "Draft PointLinkArray") |
|                                                                                                                                                                                                                                                                                                                                                                              |

## Description

The ![](/src/assets/images/Draft_CircularArray.svg) **Draft CircularArray** command creates an array from a selected object by placing copies along concentric circumferences. The command can optionally create a [Link](/App_Link "App Link") array, which is more efficient than a regular array.

The command can be used on 2D objects created with the [Draft Workbench](/Draft_Workbench "Draft Workbench") or [Sketcher Workbench](/Sketcher_Workbench "Sketcher Workbench"), but also on many 3D objects such as those created with the [Part Workbench](/Part_Workbench "Part Workbench"), [PartDesign Workbench](/PartDesign_Workbench "PartDesign Workbench") or [BIM Workbench](/BIM_Workbench "BIM Workbench").

![](/src/assets/images/Draft_CircularArray_example.png)

Draft CircularArray

## Usage

See also: [Draft Snap](/Draft_Snap "Draft Snap").

1. Optionally select one object.
2. There are several ways to invoke the command:
   - Press the ![](/src/assets/images/Draft_CircularArray.svg) [Circular array](/Draft_CircularArray "Draft CircularArray") button.
   - Select the **Modification → Array tools → ![](/src/assets/images/Draft_CircularArray.svg) Circular array** option from the menu.
3. The **Circular array** task panel opens. See [Options](#Options) for more information.
4. If you have not yet selected an object: select one object.
5. Enter the required parameters in the task panel.
6. To finish the command do one of the following:
   - Pick a point in the [3D view](/3D_view "3D view") for the **Center of rotation**.
   - Press Enter.
   - Press the OK button.

## Options

- Enter the **Radial distance** to specify the distance between the circular layers, and between the center and the first circular layer.
- Enter the **Tangential distance** to specify the distance between the elements on the same circular layer. Must be larger than zero.
- Enter the **Number of circular layers**. The element at the center counts as one layer. Must be at least `2`. The maximum that can be entered in the task panel is `99`, but higher values are possible by changing the Data**Number Circles** property of the array.
- Enter the **Symmetry** value. This number determines how the elements are distributed. A value of `3`, for example, results in a pattern with three equal 120° pie segments. Larger values for the **Symmetry** and the **Tangential distance** result in fewer or even no elements on the inner layers.
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

To create a circular array use the `make_array` method ([introduced in 0.19](/Release_notes_0.19 "Release notes 0.19")) of the Draft module. This method replaces the deprecated `makeArray` method. The `make_array` method can create [Draft OrthoArrays](/Draft_OrthoArray "Draft OrthoArray"), [Draft PolarArrays](/Draft_PolarArray "Draft PolarArray") and Draft CircularArrays. For each array type one or more wrappers are available.

The main method:

```
array = make_array(base_object, arg1, arg2, arg3, arg4=None, arg5=None, arg6=None, use_link=True)

```

The wrapper for circular arrays is:

```
array = make_circular_array(base_object,
                            r_distance=100, tan_distance=50,
                            number=3, symmetry=1,
                            axis=App.Vector(0, 0, 1), center=App.Vector(0, 0, 0),
                            use_link=True)

```

- `base_object` is the object to be arrayed. It can also be the `Label` (string) of an object in the current document.
- `r_distance` and `tan_distance` are the radial and tangential distances between the elements.
- `number` is the number of circular layers in the pattern, the original object counts as the first layer.
- `symmetry` is an integer used in some calculations that affect the way the elements are distributed around the circumferences. Usual values are from 1 to 6. Higher values are not recommended and will make the elements in the inner layers disappear.
- `axis` and `center` are vectors that describe the direction of the axis of rotation, and a point through which that axis passes.
- If `use_link` is `True` the created elements are [App Links](/App_Link "App Link") instead of regular copies.
- `array` is returned with the created array object.

Example:

```
import FreeCAD as App
import Draft

doc = App.newDocument()

tri = Draft.make_polygon(3, 600)

array = Draft.make_circular_array(tri, 1800, 1200, 4, 1)
doc.recompute()

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Draft_CircularArray/en&oldid=1557819>"
