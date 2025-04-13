---
title: Draft Ортогональный Массив
---
|  |
| --- |
| Draft\_OrthoArray |
| Расположение в меню |
| Modification → Array tools → Array |
| Верстаки |
| [Draft](/Draft_Workbench/ru "Draft Workbench/ru"), [Arch](/Arch_Workbench/ru "Arch Workbench/ru") |
| Быстрые клавиши |
| *Нет* |
| Представлено в версии |
| 0.19 |
| См. также |
| [Массив вращения](/Draft_PolarArray/ru "Draft PolarArray/ru"), [Круговой массив](/Draft_CircularArray/ru "Draft CircularArray/ru"), [Draft PathArray](/Draft_PathArray/ru "Draft PathArray/ru"), [Draft PathLinkArray](/Draft_PathLinkArray/ru "Draft PathLinkArray/ru"), [Draft PointArray](/Draft_PointArray/ru "Draft PointArray/ru"), [Draft PointLinkArray](/index.php?title=Draft_PointLinkArray/ru&action=edit&redlink=1 "Draft PointLinkArray/ru (page does not exist)") |
|  |

## Описание

The ![](/images/Draft_OrthoArray.svg) **Draft OrthoArray** command creates an orthogonal (3-axes) array from a selected object. The command can optionally create a [Link](/App_Link "App Link") array, which is more efficient than a regular array.

The command can be used on 2D objects created with the [Draft Workbench](/Draft_Workbench "Draft Workbench") or [Sketcher Workbench](/Sketcher_Workbench "Sketcher Workbench"), but also on many 3D objects such as those created with the [Part Workbench](/Part_Workbench "Part Workbench"), [PartDesign Workbench](/PartDesign_Workbench "PartDesign Workbench") or [BIM Workbench](/BIM_Workbench "BIM Workbench").

![](/images/Draft_Array_example.png)

Draft OrthoArray

## Применение

1. Optionally select one object.
2. There are several ways to invoke the command:
   * Press the ![](/images/Draft_OrthoArray.svg) [Array](/Draft_OrthoArray "Draft OrthoArray") button.
   * [Draft](/Draft_Workbench "Draft Workbench"): Select the **Modification → Array tools → ![](/images/Draft_OrthoArray.svg) Array** option from the menu.
   * [BIM](/BIM_Workbench "BIM Workbench"): Select the **Modify → ![](/images/Draft_OrthoArray.svg) Array** option from the menu.
3. The **Orthogonal array** task panel opens. See [Options](#Options) for more information.
4. If you have not yet selected an object: select one object.
5. Enter the required parameters in the task panel.
6. To finish the command do one of the following:
   * Click in the [3D view](/3D_view "3D view").
   * Press Enter.
   * Press the OK button.

## Options

* Enter the **Number of elements** for the X, Y and Z directions. This number must be at least `1` for every direction.
* Enter the **X intervals** to specify the displacement for the elements in the X direction. For a rectangular array the Y and Z values must be `0`.
* Enter the **Y intervals** to specify the displacement for the elements in the Y direction. For a rectangular array the X and Z values must be `0`.
* Enter the **Z intervals** to specify the displacement for the elements in the Z direction. For a rectangular array the X and Y values must be `0`.
* Press the **Reset X, Y or Z** button to reset the displacement in the given direction to the default values.
* If the **Fuse** checkbox is checked overlapping elements in the array are fused.
* If the **Link array** checkbox is checked a Link array instead of a regular array is created. A Link array is more efficient because its elements are [App Link](/App_Link "App Link") objects.
* Press Esc or the Cancel button to abort the command.

## Примечания

* A Draft OrthoArray can be turned into a [Draft PolarArray](/Draft_PolarArray "Draft PolarArray") or a [Draft CircularArray](/Draft_CircularArray "Draft CircularArray") by changing its Данные**Array Type** property.
* A Link array cannot be turned into a regular array or vice versa. The type of array must be decided at creation time.
* Fused Link arrays are not displayed properly, in the 3D view their elements always appear unfused.

## Свойства

Смотрите также: [Редактор свойств](/Property_editor/ru "Property editor/ru").

The Draft OrthoArray command, the [Draft PolarArray command](/Draft_PolarArray "Draft PolarArray") and the [Draft CircularArray command](/Draft_CircularArray "Draft CircularArray") create the same object. This object is derived from a [Part Feature](/Part_Feature "Part Feature") object and inherits all its properties (with the exception of some View properties that are not inherited by Link arrays). The following properties are additional unless otherwise stated:

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

Circular array

The properties in this group are hidden for orthogonal arrays and polar arrays.

* Данные**Number Circles** (`Integer`): specifies the number of circular layers. Must be at least `2`.
* Данные**Radial Distance** (`Distance`): specifies the distance between circular layers.
* Данные**Symmetry** (`Integer`): specifies the number of symmetry lines. This number changes the distribution of the elements in the array.
* Данные**Tangential Distance** (`Distance`): specifies the distance between elements in the same circular layer. Must be larger than zero.

Draft

* Данные**Always Sync Placement** (`Bool`)

Objects

* Данные**Array Type** (`Enumeration`): specifies the type of array, which can be `ortho`, `polar` or `circular`.
* Данные**Axis Reference** (`LinkGlobal`): specifies the object and edge to be used instead of the Данные**Axis** and Данные**Center** properties. Not used for orthogonal arrays.
* Данные**Base** (`Link`): specifies the object to duplicate in the array.
* Данные**Count** (`Integer`): (read-only) specifies the total number of elements in the array.
* Данные**Expand Array** (`Bool`): specifies whether to expand the array in the [Tree view](/Tree_view "Tree view") to enable the selection of its individual elements. Only available for Link arrays.
* Данные**Fuse** (`Bool`): specifies if overlapping elements in the array are fused or not.
* Данные**Placement List** (`PlacementList`): the placement for each element. Appears in the Link group for Link arrays. [introduced in 1.1](/Release_notes_1.1 "Release notes 1.1")

Orthogonal array

The properties in this group are hidden for circular arrays and polar arrays.

* Данные**Interval X** (`VectorDistance`): specifies the interval between elements in the X direction.
* Данные**Interval Y** (`VectorDistance`): specifies the interval between elements in the Y direction.
* Данные**Interval Z** (`VectorDistance`): specifies the interval between elements in the Z direction.
* Данные**Number X** (`Integer`): specifies the number of elements in the X direction. Must be at least `1`.
* Данные**Number Y** (`Integer`): specifies the number of elements in the Y direction. Must be at least `1`.
* Данные**Number Z** (`Integer`): specifies the number of elements in the Z direction. Must be at least `1`.

Polar array

The properties in this group are hidden for circular arrays and orthogonal arrays.

* Данные**Angle** (`Angle`): specifies the aperture of the circular arc. Use `360°` for a full circle.
* Данные**Interval Axis** (`VectorDistance`): specifies the interval between elements in the Данные**Axis** direction.
* Данные**Number Polar** (`Integer`): specifies the number of elements in the polar direction.

Polar/circular array

The properties in this group are hidden for orthogonal arrays.

* Данные**Axis** (`Vector`): specifies the direction of the axis of the array.
* Данные**Center** (`VectorDistance`): specifies the center point of the array. The axis of the array passes through this point. For circular arrays it is an offset from the Данные**Placement** of the Данные**Base** object.

### Вид

Link

The properties in this group, with the exception of the inherited property, are only available for Link arrays. See [Std LinkMake](/Std_LinkMake#Properties "Std LinkMake") for more information.

* Вид**Draw Style** (`Enumeration`)
* Вид**Line Width** (`FloatConstraint`)
* Вид**Override Material** (`Bool`)
* Вид**Point Size** (`FloatConstraint`)
* Вид**Selectable** (`Bool`): this is an inherited property that appears in the Selection group for other arrays
* Вид**Shape Material** (`Material`)

Base

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

*Смотри так же:* [Draft API](/Draft_API/ru "Draft API/ru") и [Основы написания скриптов FreeCAD](/FreeCAD_Scripting_Basics/ru "FreeCAD Scripting Basics/ru").

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

* `base_object` is the object to be arrayed. It can also be the `Label` (string) of an object in the current document.
* `v_x`, `v_y`, and `v_z` are the vectors between the base points of the elements in the respective directions.
* `d_x`, `d_y`, and `d_z` are the distances between the base points of the elements in the respective directions.
* `n_x`, `n_y`, and `n_z` are the numbers of elements in the respective directions.
* If `use_link` is `True` the created elements are [App Links](/App_Link "App Link") instead of regular copies.
* `array` is returned with the created array object.

Пример:

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

Пример:

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

Retrieved from "<http://wiki.freecad.org/index.php?title=Draft_OrthoArray/ru&oldid=1557794>"