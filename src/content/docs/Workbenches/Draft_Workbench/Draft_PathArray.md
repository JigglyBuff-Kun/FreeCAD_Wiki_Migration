---
title: Draft PathArray
---

|                                                                                                                                                                                                                                                                                                                                                                                          |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Draft PathArray                                                                                                                                                                                                                                                                                                                                                                          |
| Menu location                                                                                                                                                                                                                                                                                                                                                                            |
| Modification → Array tools → Path array Modify → Path array                                                                                                                                                                                                                                                                                                                              |
| Workbenches                                                                                                                                                                                                                                                                                                                                                                              |
| [Draft](/Draft_Workbench "Draft Workbench"), [BIM](/BIM_Workbench "BIM Workbench")                                                                                                                                                                                                                                                                                                       |
| Default shortcut                                                                                                                                                                                                                                                                                                                                                                         |
| _None_                                                                                                                                                                                                                                                                                                                                                                                   |
| Introduced in version                                                                                                                                                                                                                                                                                                                                                                    |
| 0.14                                                                                                                                                                                                                                                                                                                                                                                     |
| See also                                                                                                                                                                                                                                                                                                                                                                                 |
| [Draft OrthoArray](/Draft_OrthoArray "Draft OrthoArray"), [Draft PolarArray](/Draft_PolarArray "Draft PolarArray"), [Draft CircularArray](/Draft_CircularArray "Draft CircularArray"), [Draft PathLinkArray](/Draft_PathLinkArray "Draft PathLinkArray"), [Draft PointArray](/Draft_PointArray "Draft PointArray"), [Draft PointLinkArray](/Draft_PointLinkArray "Draft PointLinkArray") |
|                                                                                                                                                                                                                                                                                                                                                                                          |

## Description

The ![](/images/Draft_PathArray.svg) **Draft PathArray** command creates a regular array from a selected object by placing copies along a path. Use the [Draft PathLinkArray](/Draft_PathLinkArray "Draft PathLinkArray") command to create a more efficient [Link](/App_Link "App Link") array instead. Except for the type of array that is created, Link array or regular array, the [Draft PathLinkArray](/Draft_PathLinkArray "Draft PathLinkArray") command is identical to this command.

Both commands can be used on 2D objects created with the [Draft Workbench](/Draft_Workbench "Draft Workbench") or [Sketcher Workbench](/Sketcher_Workbench "Sketcher Workbench"), but also on many 3D objects such as those created with the [Part Workbench](/Part_Workbench "Part Workbench"), [PartDesign Workbench](/PartDesign_Workbench "PartDesign Workbench") or [BIM Workbench](/BIM_Workbench "BIM Workbench").

![](/images/Draft_PathArray_Example.png)

Draft PathArray

## Usage

1. Select the object you wish to array.
2. Add the path object to the selection. It is also possible to select edges instead. The edges must belong to the same object and they must be connected.
3. There are several ways to invoke the command:
   - Press the ![](/images/Draft_PathArray.svg) [Path array](/Draft_PathArray "Draft PathArray") button.
   - [Draft](/Draft_Workbench "Draft Workbench"): Select the **Modification → Array tools → ![](/images/Draft_PathArray.svg) Path array** option from the menu.
   - [BIM](/BIM_Workbench "BIM Workbench"): Select the **Modify → ![](/images/Draft_PathArray.svg) Path array** option from the menu.
4. The array is created.
5. Optionally change the [properties](#Properties) of the array in the [Property editor](/Property_editor "Property editor").

## Alignment

The alignment of the elements in a Draft PathArray depends on the properties of the array and the orientation of the source object. The position of the source object is ignored: for the purpose of the array the `x`, `y` and `z` are set to `0`. If the Data**Align** property of the array is set to `false` the orientation of the array elements is identical to that of the source object. If it is set to `true` the X axis of the local coordinate system of each element placement is tangent to the path. The Y and Z axes of the local coordinate systems depend on the Data**Align Mode** property of the array. Other array properties involved in the alignment include Data**Tangent Vector**, Data**Force Vertical** and Data**Vertical Vector**.

![](/images/Draft_PathArray_example2.png)

3 arrays based on the same non-planar path. From left to right: Align is false, Align is true with Align Mode Original and Align is true with Align Mode Frenet

.

### Align Mode

Three modes are available:

#### Original

This mode comes closest to the single Data**Align Mode** available in version 0.18. It relies on a fixed normal vector. If the path is planar this vector is perpendicular to the plane of the path, else a default vector, the positive Z axis, is used. From this normal vector and the local tangent vector (the local X axis) a [cross product](https://en.wikipedia.org/wiki/Cross_product) is calculated. This new vector is used as the local Z axis. The orientation of the local Y axis is determined from the local X and Z axes.

#### Frenet

This mode uses the local normal vector derived from the path at each element placement. If this vector cannot be determined (for example in the case of a straight segment) a default vector, again the positive Z axis, is used instead. With this vector and the local tangent vector the local coordinate system is determined using the same procedure as in the previous paragraph.

#### Tangent

This mode is similar to Data**Align Mode** `Original` but includes the possibility to pre-rotate the source object by specifying a Data**Tangent Vector**.

### Force Vertical and Vertical Vector

These properties are only available if Data**Align Mode** is `Original` or `Tangent`. If Data**Force Vertical** is set to `true` the local coordinate system is calculated in a different manner. The Data**Vertical Vector** is used as a fixed normal vector. From this normal vector and the local tangent vector (the local X axis) again a cross product is calculated. But now this vector is used as the local Y axis. The orientation of the local Z axis is determined from the local X and Y axes.

Using these properties can be required if one of the edged of the path is (almost) parallel to the default normal of the path.

## Notes

- Fused Link arrays are not displayed properly, in the 3D view their elements always appear unfused.

## Properties

See also: [Property editor](/Property_editor "Property editor").

A Draft PathArray object is derived from a [Part Feature](/Part_Feature "Part Feature") object and inherits all its properties (with the exception of some View properties that are not inherited by Link arrays). The following properties are additional unless otherwise stated:

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

Alignment

- Data**Align** (`Bool`): specifies if the elements in the array are aligned along the path or not. If it is `false` all other properties in this group, except Data**Extra Translation**, do not apply and are hidden.
- Data**Align Mode** (`Enumeration`): specifies the align mode, which can be `Original`, `Frenet` or `Tangent`.
- Data**Extra Translation** (`VectorDistance`): specifies an additional displacement for each element along the path.
- Data**Force Vertical** (`Bool`): specifies whether to override the default normal direction with the value of Data**Vertical Vector**. Only used if Data**Align Mode** is `Original` or `Tangent`.
- Data**Reverse Path** (`Bool`): specifies whether to walk the path backwards. [introduced in 1.1](/Release_notes_1.1 "Release notes 1.1")
- Data**Tangent Vector** (`Vector`): specifies the alignment vector. Only used if Data**Align Mode** is `Tangent`.
- Data**Vertical Vector** (`Vector`): specifies the override for the default normal direction. Only used if Data**Vertical Vector** is `true`.

Draft

- Data**Always Sync Placement** (`Bool`)

Objects

- Data**Base** (`LinkGlobal`): specifies the object to duplicate in the array.
- Data**Expand Array** (`Bool`): specifies whether to expand the array in the [Tree view](/Tree_view "Tree view") to enable the selection of its individual elements. Only available for Link arrays.
- Data**Fuse** (`Bool`): specifies if overlapping elements in the array are fused or not. [introduced in 1.0](/Release_notes_1.0 "Release notes 1.0")
- Data**Path Object** (`LinkGlobal`): specifies the object to be used for the path. It must contain `Edges` in its [Part TopoShape](/Part_TopoShape "Part TopoShape").
- Data**Path Subelements** (`LinkSubListGlobal`): specifies a list of edges of the Data**Path Object**. If supplied only these edges are used for the path.
- Data**Placement List** (`PlacementList`): the placement for each element. Appears in the Link group for Link arrays. [introduced in 1.1](/Release_notes_1.1 "Release notes 1.1")

Spacing

- Data**Count** (`Integer`): specifies the number of elements in the array.
- Data**End Offset** (`Length`): specifies the length from the end of the path to the last copy. Must be smaller than the length of the path minus the Data**Start Offset**. [introduced in 0.21](/Release_notes_0.21 "Release notes 0.21")
- Data**Spacing Mode** (`Enumeration`): specifies how elements are spaced. The options are: [introduced in 1.1](/Release_notes_1.1 "Release notes 1.1")
  - `Fixed count`: available path length (minus start and end offsets) is evenly divided to accommodate Data**Count** elements.
  - `Fixed spacing`: start at start offset and place new elements after traveling a fixed distance along the path.
  - `Fixed count and spacing`: same as `Fixed spacing`, but also stop at Data**Count** elements.
- Data**Spacing Pattern** (`FloatList`): the spacing is multiplied by a corresponding number in this sequence. Only used if Data**Use Spacing Pattern** is `true`, otherwise hidden. [introduced in 1.1](/Release_notes_1.1 "Release notes 1.1")
- Data**Spacing Unit** (`Length`): the base fixed distance between elements. Only used if Data**Spacing Mode** is `Fixed spacing` or `Fixed count and spacing`, otherwise hidden. [introduced in 1.1](/Release_notes_1.1 "Release notes 1.1")
- Data**Start Offset** (`Length`): specifies the length from the start of the path to the first copy. Must be smaller than the length of the path. [introduced in 0.21](/Release_notes_0.21 "Release notes 0.21")
- Data**Use Spacing Pattern** (`Bool`): use repeating spacing patterns instead of uniform spacing. [introduced in 1.1](/Release_notes_1.1 "Release notes 1.1")

### View

Link

The properties in this group, with the exception of the inherited property, are only available for Link arrays. See [Std LinkMake](/Std_LinkMake#Properties "Std LinkMake") for more information.

- View**Draw Style** (`Enumeration`)
- View**Line Width** (`FloatConstraint`)
- View**Override Material** (`Bool`)
- View**Point Size** (`FloatConstraint`)
- View**Selectable** (`Bool`): this is an inherited property that appears in the Selection group for other arrays.
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
- View**Display Mode** (`Enumeration`): for Link arrays it can be `Link` or `ChildView`. For other arrays it can be: `Flat Lines`, `Shaded`, `Wireframe` or `Points`.
- View**Show In Tree** (`Bool`)
- View**Visibility** (`Bool`)

Draft

- View**Pattern** (`Enumeration`): not used.
- View**Pattern Size** (`Float`): not used.

Object style

The properties in this group are not inherited by Link arrays.

## Scripting

See also: [Autogenerated API documentation](https://freecad.github.io/SourceDoc/) and [FreeCAD Scripting Basics](/FreeCAD_Scripting_Basics "FreeCAD Scripting Basics").

To create a path array use the `make_path_array` method ([introduced in 0.19](/Release_notes_0.19 "Release notes 0.19")) of the Draft module. This method replaces the deprecated `makePathArray` method.

```
path_array = make_path_array(base_object, path_object,
                             count=4, extra=App.Vector(0, 0, 0), subelements=None,
                             align=False, align_mode="Original", tan_vector=App.Vector(1, 0, 0),
                             force_vertical=False, vertical_vector=App.Vector(0, 0, 1),
                             use_link=True)

```

- `base_object` is the object to be arrayed. It can also be the `Label` (string) of an object in the current document.
- `path_object` is the path object. It can also be the `Label` (string) of an object in the current document.
- `count` is the number of elements in the array.
- `extra` is a vector that displaces each element.
- `subelements` is a list of edges of `path_object`, for example `["Edge1", "Edge2"]`. If supplied only these edges are used for the path.
- If `align` is `True` the elements are aligned along the path depending on the value of `align_mode`, which can be `"Original"`, `"Frenet"` or `"Tangent"`.
- `tan_vector` is a unit vector that defines the local tangent direction of the elements along the path. It is used when `align_mode` is `"Tangent"`.
- If `force_vertical` is `True` `vertical_vector` is used for the local Z direction of the elements along the path. It is used when `align_mode` is `"Original"` or `"Tangent"`.
- If `use_link` is `True` the created elements are [App Links](/App_Link "App Link") instead of regular copies.
- `path_array` is returned with the created array object.

Example:

```
import FreeCAD as App
import Draft

doc = App.newDocument()

p1 = App.Vector(500, -1000, 0)
p2 = App.Vector(1500, 1000, 0)
p3 = App.Vector(3000, 500, 0)
p4 = App.Vector(4500, 100, 0)
spline = Draft.make_bspline([p1, p2, p3, p4])
obj = Draft.make_polygon(3, 500)

path_array = Draft.make_path_array(obj, spline, 6)
doc.recompute()

wire = Draft.make_wire([p1, -p2, -p3, -p4])
path_array2 = Draft.make_path_array(obj, wire, count=3, extra=App.Vector(0, -500, 0), subelements=["Edge2", "Edge3"], align=True, force_vertical=True)
doc.recompute()

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Draft_PathArray/en&oldid=1557831>"
