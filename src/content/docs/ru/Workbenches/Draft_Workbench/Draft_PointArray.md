---
title: Draft PointArray/ru
---
|  |
| --- |
| Draft PointArray |
| Menu location |
| Modification → Array tools → Point array Modify → Point array |
| Workbenches |
| [Draft](/Draft_Workbench "Draft Workbench"), [BIM](/BIM_Workbench "BIM Workbench") |
| Default shortcut |
| *None* |
| Introduced in version |
| 0.18 |
| See also |
| [Draft OrthoArray](/Draft_OrthoArray "Draft OrthoArray"), [Draft PolarArray](/Draft_PolarArray "Draft PolarArray"), [Draft CircularArray](/Draft_CircularArray "Draft CircularArray"), [Draft PathArray](/Draft_PathArray "Draft PathArray"), [Draft PathLinkArray](/Draft_PathLinkArray "Draft PathLinkArray"), [Draft PointLinkArray](/Draft_PointLinkArray "Draft PointLinkArray") |
|  |

## Описание

The ![](/images/Draft_PointArray.svg) **Draft PointArray** command creates a regular array from a selected base object by placing copies at the points from a point object. Use the [Draft PointLinkArray](/Draft_PointLinkArray "Draft PointLinkArray") command to create a more efficient [Link](/App_Link "App Link") array instead. Except for the type of array that is created, Link array or regular array, the [Draft PointLinkArray](/Draft_PointLinkArray "Draft PointLinkArray") command is identical to this command.

The base object can be a 2D object created with the [Draft Workbench](/Draft_Workbench "Draft Workbench") or [Sketcher Workbench](/Sketcher_Workbench "Sketcher Workbench"), but also a 3D object such as those created with the [Part Workbench](/Part_Workbench "Part Workbench"), [PartDesign Workbench](/PartDesign_Workbench "PartDesign Workbench") or [BIM Workbench](/BIM_Workbench "BIM Workbench").

The point object can be any object with a shape and vertices (including a [Std Part](/Std_Part "Std Part") containing one or more of such objects), as well as a [mesh](/Mesh_Workbench "Mesh Workbench") and a [point cloud](/Points_Workbench "Points Workbench"). Duplicate points in the point object are filtered out.

![](/images/Draft_PointArray_Example.png)

Draft PointArray

## Применение

1. Select the object you wish to array.
2. Add the point object to the selection.
3. There are several ways to invoke the command:
   * Press the ![](/images/Draft_PointArray.svg) [Point array](/Draft_PointArray "Draft PointArray") button.
   * [Draft](/Draft_Workbench "Draft Workbench"): Select the **Modification → Array tools → ![](/images/Draft_PointArray.svg) Point array** option from the menu.
   * [BIM](/BIM_Workbench "BIM Workbench"): Select the **Modify → ![](/images/Draft_PointArray.svg) Point array** option from the menu.
4. The array is created.
5. Optionally change the [properties](#Properties) of the array in the [Property editor](/Property_editor "Property editor").

## Notes

* Fused Link arrays are not displayed properly, in the 3D view their elements always appear unfused.

## Свойства

See also: [Property editor](/Property_editor "Property editor").

A Draft PointArray object is derived from a [Part Feature](/Part_Feature "Part Feature") object and inherits all its properties (with the exception of some View properties that are not inherited by Link arrays). The following properties are additional unless otherwise stated:

### Данные

Link

The properties in this group are only available for Link arrays. See [Std LinkMake](/Std_LinkMake#Properties "Std LinkMake") for more information.

* Данные**Scale** (`Float`)
* Данные (Hidden)**Scale Vector** (`Vector`)
* Данные**Scale List** (`VectorList`)
* Данные (Hidden)**Visibility List** (`BoolList`)
* Данные (Hidden)**Placement List** (`PlacementList`)
* Данные (Hidden)**Element List** (`LinkList`)
* Данные (Hidden)**\_ Link Touched** (`Bool`)
* Данные (Hidden)**\_ Child Cache** (`LinkList`)
* Данные (Hidden)**\_ Link Owner** (`Integer`)
* Данные (Hidden)**Colored Elements** (`LinkSubHidden`)
* Данные**Link Copy On Change** (`Enumeration`)
* Данные**Link Transform** (`Bool`)

Draft

* Данные**Always Sync Placement** (`Bool`)

Objects

* Данные**Base** (`Link`): specifies the object to duplicate in the array.
* Данные**Count** (`Integer`): (read-only) specifies the number of elements in the array. This number is determined by the number of points in the Данные**Point Object**.
* Данные**Expand Array** (`Bool`): specifies whether to expand the array in the [Tree view](/Tree_view "Tree view") to enable the selection of its individual elements. Only available for Link arrays.
* Данные**Extra Placement** (`Placement`): : specifies an additional [placement](/Placement "Placement"), translation and rotation, for each element in the array.
* Данные**Fuse** (`Bool`): specifies if overlapping elements in the array are fused or not. [introduced in 1.0](/Release_notes_1.0 "Release notes 1.0")
* Данные**Placement List** (`PlacementList`): the placement for each element. Appears in the Link group for Link arrays. [introduced in 1.1](/Release_notes_1.1 "Release notes 1.1")
* Данные**Point Object** (`Link`): specifies the object whose points are used to position the elements in the array.

### Вид

Link

The properties in this group, with the exception of the inherited property, are only available for Link arrays. See [Std LinkMake](/Std_LinkMake#Properties "Std LinkMake") for more information.

* Вид**Draw Style** (`Enumeration`)
* Вид**Line Width** (`FloatConstraint`)
* Вид**Override Material** (`Bool`)
* Вид**Point Size** (`FloatConstraint`)
* Вид**Selectable** (`Bool`): this is an inherited property that appears in the Selection group for other arrays
* Вид**Shape Material** (`Material`)

Основные

The properties in this group, with the exception of the inherited property, are only available for Link arrays. See [Std LinkMake](/Std_LinkMake#Properties "Std LinkMake") for more information.

* Вид (Hidden)**Child View Provider** (`PersistentObject`)
* Вид (Hidden)**Material List** (`MaterialList`)
* Вид (Hidden)**Override Color List** (`ColorList`)
* Вид (Hidden)**Override Material List** (`BoolList`)
* Вид (Hidden)**Proxy** (`PythonObject`): this is an inherited property.

Display Options

The properties in this group are inherited properties. See [Part Feature](/Part_Feature#Properties "Part Feature") for more information.

* Вид**Bounding Box** (`Bool`): this property is not inherited by Link arrays.
* Вид**Display Mode** (`Enumeration`): for Link arrays it can be `Link` or `ChildView`. For other arrays it can be: `Flat Lines`, `Shaded`, `Wireframe` or `Points`
* Вид**Show In Tree** (`Bool`)
* Вид**Visibility** (`Bool`)

Draft

* Вид**Pattern** (`Enumeration`): not used.
* Вид**Pattern Size** (`Float`): not used.

Object style

The properties in this group are not inherited by Link arrays.

## Программирование

See also: [Autogenerated API documentation](https://freecad.github.io/SourceDoc/) and [FreeCAD Scripting Basics](/FreeCAD_Scripting_Basics "FreeCAD Scripting Basics").

To create a point array use the `make_point_array` method ([introduced in 0.19](/Release_notes_0.19 "Release notes 0.19")) of the Draft module. This method replaces the deprecated `makePointArray` method.

```
point_array = make_point_array(base_object, point_object, extra=None, use_link=True)

```

* `base_object` is the object to be arrayed. It can also be the `Label` (string) of an object in the current document.
* `point_object` is the object containing the points. It can also be the `Label` (string) of an object in the current document. It should have a `Geometry`, `Links`, or `Components` property containing points.
* `extra` is an `App.Placement`, an `App.Vector` or an `App.Rotation` that displaces each element.
* If `use_link` is `True` the created elements are [App Links](/App_Link "App Link") instead of regular copies.

Пример:

```
import FreeCAD as App
import Draft

doc = App.newDocument()

polygon = Draft.make_polygon(3, radius=500.0)

p1 = Draft.make_point(App.Vector(1500, 0, 0))
p2 = Draft.make_point(App.Vector(2500, 0, 0))
p3 = Draft.make_point(App.Vector(2000, 1000, 0))

compound = doc.addObject("Part::Compound", "Compound")
compound.Links = [p1, p2, p3]

point_array = Draft.make_point_array(polygon, compound)
doc.recompute()

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Draft_PointArray/ru&oldid=1557846>"