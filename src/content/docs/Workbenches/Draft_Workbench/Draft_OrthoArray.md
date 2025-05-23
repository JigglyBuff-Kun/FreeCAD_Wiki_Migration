---
title: Draft OrthoArray
---

|                                                                                                                                                                                                                                                                                                                                                                                       |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Draft OrthoArray                                                                                                                                                                                                                                                                                                                                                                      |
| Menu location                                                                                                                                                                                                                                                                                                                                                                         |
| Modification → Array tools → Array Modify → Array                                                                                                                                                                                                                                                                                                                                     |
| Workbenches                                                                                                                                                                                                                                                                                                                                                                           |
| [Draft](/Draft_Workbench "Draft Workbench"), [BIM](/BIM_Workbench "BIM Workbench")                                                                                                                                                                                                                                                                                                    |
| Default shortcut                                                                                                                                                                                                                                                                                                                                                                      |
| _None_                                                                                                                                                                                                                                                                                                                                                                                |
| Introduced in version                                                                                                                                                                                                                                                                                                                                                                 |
| 0.19                                                                                                                                                                                                                                                                                                                                                                                  |
| See also                                                                                                                                                                                                                                                                                                                                                                              |
| [Draft PolarArray](/Draft_PolarArray "Draft PolarArray"), [Draft CircularArray](/Draft_CircularArray "Draft CircularArray"), [Draft PathArray](/Draft_PathArray "Draft PathArray"), [Draft PathLinkArray](/Draft_PathLinkArray "Draft PathLinkArray"), [Draft PointArray](/Draft_PointArray "Draft PointArray"), [Draft PointLinkArray](/Draft_PointLinkArray "Draft PointLinkArray") |
|                                                                                                                                                                                                                                                                                                                                                                                       |

## Description

The ![](/images/Draft_OrthoArray.svg) **Draft OrthoArray** command creates an orthogonal (3-axes) array from a selected object. The command can optionally create a [Link](/App_Link "App Link") array, which is more efficient than a regular array.

The command can be used on 2D objects created with the [Draft Workbench](/Draft_Workbench "Draft Workbench") or [Sketcher Workbench](/Sketcher_Workbench "Sketcher Workbench"), but also on many 3D objects such as those created with the [Part Workbench](/Part_Workbench "Part Workbench"), [PartDesign Workbench](/PartDesign_Workbench "PartDesign Workbench") or [BIM Workbench](/BIM_Workbench "BIM Workbench").

![](/images/Draft_Array_example.png)

Draft OrthoArray

## Usage

1. Optionally select one object.
2. There are several ways to invoke the command:
   - Press the ![](/images/Draft_OrthoArray.svg) [Array](/Draft_OrthoArray "Draft OrthoArray") button.
   - [Draft](/Draft_Workbench "Draft Workbench"): Select the **Modification → Array tools → ![](/images/Draft_OrthoArray.svg) Array** option from the menu.
   - [BIM](/BIM_Workbench "BIM Workbench"): Select the **Modify → ![](/images/Draft_OrthoArray.svg) Array** option from the menu.
3. The **Orthogonal array** task panel opens. See [Options](#Options) for more information.
4. If you have not yet selected an object: select one object.
5. Enter the required parameters in the task panel.
6. To finish the command do one of the following:
   - Click in the [3D view](/3D_view "3D view").
   - Press Enter.
   - Press the OK button.

## Options

- Enter the **Number of elements** for the X, Y and Z directions. This number must be at least `1` for every direction.
- Enter the **X intervals** to specify the displacement for the elements in the X direction. For a rectangular array the Y and Z values must be `0`.
- Enter the **Y intervals** to specify the displacement for the elements in the Y direction. For a rectangular array the X and Z values must be `0`.
- Enter the **Z intervals** to specify the displacement for the elements in the Z direction. For a rectangular array the X and Y values must be `0`.
- Press the **Reset X, Y or Z** button to reset the displacement in the given direction to the default values.
- If the **Fuse** checkbox is checked overlapping elements in the array are fused.
- If the **Link array** checkbox is checked a Link array instead of a regular array is created. A Link array is more efficient because its elements are [App Link](/App_Link "App Link") objects.
- Press Esc or the Cancel button to abort the command.

## Notes

- A Draft OrthoArray can be turned into a [Draft PolarArray](/Draft_PolarArray "Draft PolarArray") or a [Draft CircularArray](/Draft_CircularArray "Draft CircularArray") by changing its Data**Array Type** property.
- A Link array cannot be turned into a regular array or vice versa. The type of array must be decided at creation time.
- Fused Link arrays are not displayed properly, in the 3D view their elements always appear unfused.

## Properties

See also: [Property editor](/Property_editor "Property editor").

The Draft OrthoArray command, the [Draft PolarArray command](/Draft_PolarArray "Draft PolarArray") and the [Draft CircularArray command](/Draft_CircularArray "Draft CircularArray") create the same object. This object is derived from a [Part Feature](/Part_Feature "Part Feature") object and inherits all its properties (with the exception of some View properties that are not inherited by Link arrays). The following properties are additional unless otherwise stated:

### Data

Link

The properties in this group are only available for Link arrays. See [Std LinkMake](/Std_LinkMake#Properties "Std LinkMake") for more information.

- Data**Scale** (`Float`)
- Data (Hidden)**Scale Vector** (`Vector`)
- Data**Scale List** (`VectorList`)
- Data (Hidden)**Visibility List** (`BoolList`)
- Data (Hidden)**Placement List** (`PlacementList`)
- Data (Hidden)**Element List** (`LinkList`)
- Data (Hidden)**\_ Link Touched** (`Bool`)
- Data (Hidden)**\_ Child Cache** (`LinkList`)
- Data (Hidden)**\_ Link Owner** (`Integer`)
- Data (Hidden)**Colored Elements** (`LinkSubHidden`)
- Data**Link Copy On Change** (`Enumeration`)
- Data**Link Transform** (`Bool`)

Circular array

The properties in this group are hidden for orthogonal arrays and polar arrays.

- Data**Number Circles** (`Integer`): specifies the number of circular layers. Must be at least `2`.
- Data**Radial Distance** (`Distance`): specifies the distance between circular layers.
- Data**Symmetry** (`Integer`): specifies the number of symmetry lines. This number changes the distribution of the elements in the array.
- Data**Tangential Distance** (`Distance`): specifies the distance between elements in the same circular layer. Must be larger than zero.

Draft

- Data**Always Sync Placement** (`Bool`)

Objects

- Data**Array Type** (`Enumeration`): specifies the type of array, which can be `ortho`, `polar` or `circular`.
- Data**Axis Reference** (`LinkGlobal`): specifies the object and edge to be used instead of the Data**Axis** and Data**Center** properties. Not used for orthogonal arrays.
- Data**Base** (`Link`): specifies the object to duplicate in the array.
- Data**Count** (`Integer`): (read-only) specifies the total number of elements in the array.
- Data**Expand Array** (`Bool`): specifies whether to expand the array in the [Tree view](/Tree_view "Tree view") to enable the selection of its individual elements. Only available for Link arrays.
- Data**Fuse** (`Bool`): specifies if overlapping elements in the array are fused or not.
- Data**Placement List** (`PlacementList`): the placement for each element. Appears in the Link group for Link arrays. [introduced in 1.1](/Release_notes_1.1 "Release notes 1.1")

Orthogonal array

The properties in this group are hidden for circular arrays and polar arrays.

- Data**Interval X** (`VectorDistance`): specifies the interval between elements in the X direction.
- Data**Interval Y** (`VectorDistance`): specifies the interval between elements in the Y direction.
- Data**Interval Z** (`VectorDistance`): specifies the interval between elements in the Z direction.
- Data**Number X** (`Integer`): specifies the number of elements in the X direction. Must be at least `1`.
- Data**Number Y** (`Integer`): specifies the number of elements in the Y direction. Must be at least `1`.
- Data**Number Z** (`Integer`): specifies the number of elements in the Z direction. Must be at least `1`.

Polar array

The properties in this group are hidden for circular arrays and orthogonal arrays.

- Data**Angle** (`Angle`): specifies the aperture of the circular arc. Use `360°` for a full circle.
- Data**Interval Axis** (`VectorDistance`): specifies the interval between elements in the Data**Axis** direction.
- Data**Number Polar** (`Integer`): specifies the number of elements in the polar direction.

Polar/circular array

The properties in this group are hidden for orthogonal arrays.

- Data**Axis** (`Vector`): specifies the direction of the axis of the array.
- Data**Center** (`VectorDistance`): specifies the center point of the array. The axis of the array passes through this point. For circular arrays it is an offset from the Data**Placement** of the Data**Base** object.

### View

Link

The properties in this group, with the exception of the inherited property, are only available for Link arrays. See [Std LinkMake](/Std_LinkMake#Properties "Std LinkMake") for more information.

- View**Draw Style** (`Enumeration`)
- View**Line Width** (`FloatConstraint`)
- View**Override Material** (`Bool`)
- View**Point Size** (`FloatConstraint`)
- View**Selectable** (`Bool`): this is an inherited property that appears in the Selection group for other arrays
- View**Shape Material** (`Material`)

Base

The properties in this group, with the exception of the inherited property, are only available for Link arrays. See [Std LinkMake](/Std_LinkMake#Properties "Std LinkMake") for more information.

- View (Hidden)**Child View Provider** (`PersistentObject`)
- View (Hidden)**Material List** (`MaterialList`)
- View (Hidden)**Override Color List** (`ColorList`)
- View (Hidden)**Override Material List** (`BoolList`)
- View (Hidden)**Proxy** (`PythonObject`): this is an inherited property.

Display Options

The properties in this group are inherited properties. See [Part Feature](/Part_Feature#Properties "Part Feature") for more information.

- View**Bounding Box** (`Bool`): this property is not inherited by Link arrays.
- View**Display Mode** (`Enumeration`): for Link arrays it can be `Link` or `ChildView`. For other arrays it can be: `Flat Lines`, `Shaded`, `Wireframe` or `Points`
- View**Show In Tree** (`Bool`)
- View**Visibility** (`Bool`)

Draft

- View**Pattern** (`Enumeration`): not used.
- View**Pattern Size** (`Float`): not used.

Object style

The properties in this group are not inherited by Link arrays.

## Scripting

See also: [Autogenerated API documentation](https://freecad.github.io/SourceDoc/) and [FreeCAD Scripting Basics](/FreeCAD_Scripting_Basics "FreeCAD Scripting Basics").

### Parametric array

To create a parametric orthogonal array use the `make_array` method ([introduced in 0.19](/Release_notes_0.19 "Release notes 0.19")) of the Draft module. This method replaces the deprecated `makeArray` method. The `make_array` method can create Draft OrthoArrays, [Draft PolarArrays](/Draft_PolarArray "Draft PolarArray") and [Draft CircularArrays](/Draft_CircularArray "Draft CircularArray"). For each array type one or more wrappers are available.

The main method:

```
array = make_array(base_object, arg1, arg2, arg3, arg4=None, arg5=None, arg6=None, use_link=True)

```

The wrappers for orthogonal arrays are:

```
array = make_ortho_array(base_object,
                         v_x=App.Vector(10, 0, 0), v_y=App.Vector(0, 10, 0), v_z=App.Vector(0, 0, 10),
                         n_x=2, n_y=2, n_z=1,
                         use_link=True)

```

```
array = make_ortho_array2d(base_object,
                           v_x=App.Vector(10, 0, 0), v_y=App.Vector(0, 10, 0),
                           n_x=2, n_y=2,
                           use_link=True)

```

The wrappers for rectangular arrays are:

```
array = make_rect_array(base_object,
                        d_x=10, d_y=10, d_z=10,
                        n_x=2, n_y=2, n_z=1,
                        use_link=True)

```

```
array = make_rect_array2d(base_object,
                          d_x=10, d_y=10,
                          n_x=2, n_y=2,
                          use_link=True)

```

- `base_object` is the object to be arrayed. It can also be the `Label` (string) of an object in the current document.
- `v_x`, `v_y`, and `v_z` are the vectors between the base points of the elements in the respective directions.
- `d_x`, `d_y`, and `d_z` are the distances between the base points of the elements in the respective directions.
- `n_x`, `n_y`, and `n_z` are the numbers of elements in the respective directions.
- If `use_link` is `True` the created elements are [App Links](/App_Link "App Link") instead of regular copies.
- `array` is returned with the created array object.

Example:

```
import FreeCAD as App
import Draft

doc = App.newDocument()

rect = Draft.make_rectangle(1500, 500)
v_x = App.Vector(1600, 0, 0)
v_y = App.Vector(0, 600, 0)

array = Draft.make_ortho_array2d(rect, v_x, v_y, 3, 4)
doc.recompute()

```

### Non-parametric array

To create a non-parametric orthogonal array use the `array` method of the Draft module. This method returns `None`.

```
array(objectslist, xvector, yvector, xnum, ynum)
array(objectslist, xvector, yvector, zvector, xnum, ynum, znum)

```

Example:

```
import FreeCAD as App
import Draft

doc = App.newDocument()

rect = Draft.make_rectangle(1500, 500)
v_x = App.Vector(1600, 0, 0)
v_y = App.Vector(0, 600, 0)

Draft.array(rect, v_x, v_y, 3, 4)
doc.recompute()

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Draft_OrthoArray/en&oldid=1557795>"
