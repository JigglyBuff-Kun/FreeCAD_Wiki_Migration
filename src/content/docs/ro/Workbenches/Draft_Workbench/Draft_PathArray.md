---
title: Draft PathArray
---
|  |
| --- |
| Draft PathArray |
| poziția meniului |
| Draft → PathArray |
| Ateliere |
| [Draft](/Draft_Workbench/ro "Draft Workbench/ro"), [Arch](/Arch_Workbench/ro "Arch Workbench/ro") |
| scurtătură |
| *Nici unul* |
| Prezentat în versiune |
| 0.14 |
| A se vedea, de asemenea, |
| [Draft Array](/Draft_Array/ro "Draft Array/ro") |
|  |

## Descriere

Instrumentul PathArray plasează copii ale unei forme selectate de-a lungul unei căi selectate. Calea poate fi un Filament sau una sau mai multe muchii. Formele pot fi opțional aliniate cu tangenta traiectoriei. Dacă este necesar, poate fi specificat un Vector de tranlație pentru a deplasa formele astfel încât centroidul să fie pe traiectorie. Dacă nu sunt selectate obiecte, veți fi invitat să le selectați.

Both commands can be used on 2D objects created with the [Draft Workbench](/Draft_Workbench "Draft Workbench") or [Sketcher Workbench](/Sketcher_Workbench "Sketcher Workbench"), but also on many 3D objects such as those created with the [Part Workbench](/Part_Workbench "Part Workbench"), [PartDesign Workbench](/PartDesign_Workbench "PartDesign Workbench") or [BIM Workbench](/BIM_Workbench "BIM Workbench").

![](/images/Draft_PathArray_Example.png)

Draft PathArray

## Cum se folosește

1. Creați un obiect tip formă pe care doriți să îl distribuiți/multiplicați. Veți obține cele mai bune rezultate dacă obiectul dvs. este centrat în jurul originii, chiar dacă calea începe în altă parte.
2. Selectați un obiect tip traiectorie de-a lungul căruia vor fi distribuite formele. -sau-
3. Selectați unele margini ale unui obiect traiectorie.
4. Apasați pe butonul ![](/images/Draft_PathArray.png) [Draft PathArray](/Draft_PathArray "Draft PathArray").

## Alignment

The alignment of the elements in a Draft PathArray depends on the properties of the array and the orientation of the source object. The position of the source object is ignored: for the purpose of the array the `x`, `y` and `z` are set to `0`. If the Date**Align** property of the array is set to `false` the orientation of the array elements is identical to that of the source object. If it is set to `true` the X axis of the local coordinate system of each element placement is tangent to the path. The Y and Z axes of the local coordinate systems depend on the Date**Align Mode** property of the array. Other array properties involved in the alignment include Date**Tangent Vector**, Date**Force Vertical** and Date**Vertical Vector**.

![](/images/Draft_PathArray_example2.png)

3 arrays based on the same non-planar path. From left to right: Align is false, Align is true with Align Mode Original and Align is true with Align Mode Frenet

.

### Align Mode

Three modes are available:

#### Original

This mode comes closest to the single Date**Align Mode** available in version 0.18. It relies on a fixed normal vector. If the path is planar this vector is perpendicular to the plane of the path, else a default vector, the positive Z axis, is used. From this normal vector and the local tangent vector (the local X axis) a [cross product](https://en.wikipedia.org/wiki/Cross_product) is calculated. This new vector is used as the local Z axis. The orientation of the local Y axis is determined from the local X and Z axes.

#### Frenet

This mode uses the local normal vector derived from the path at each element placement. If this vector cannot be determined (for example in the case of a straight segment) a default vector, again the positive Z axis, is used instead. With this vector and the local tangent vector the local coordinate system is determined using the same procedure as in the previous paragraph.

#### Tangent

This mode is similar to Date**Align Mode** `Original` but includes the possibility to pre-rotate the source object by specifying a Date**Tangent Vector**.

### Force Vertical and Vertical Vector

These properties are only available if Date**Align Mode** is `Original` or `Tangent`. If Date**Force Vertical** is set to `true` the local coordinate system is calculated in a different manner. The Date**Vertical Vector** is used as a fixed normal vector. From this normal vector and the local tangent vector (the local X axis) again a cross product is calculated. But now this vector is used as the local Y axis. The orientation of the local Z axis is determined from the local X and Y axes.

Using these properties can be required if one of the edged of the path is (almost) parallel to the default normal of the path.

## Notes

* Fused Link arrays are not displayed properly, in the 3D view their elements always appear unfused.

## Proprietăți

See also: [Property editor](/Property_editor "Property editor").

A Draft PathArray object is derived from a [Part Feature](/Part_Feature "Part Feature") object and inherits all its properties (with the exception of some View properties that are not inherited by Link arrays). The following properties are additional unless otherwise stated:

### Data

Link

The properties in this group are only available for Link arrays. See [Std LinkMake](/Std_LinkMake#Properties "Std LinkMake") for more information.

* Date**Scale** (`Float`)
* Date (Hidden)**Scale Vector** (`Vector`)
* Date**Scale List** (`VectorList`)
* Date (Hidden)**Visibility List** (`BoolList`)
* Date (Hidden)**Placement List** (`PlacementList`)
* Date (Hidden)**Element List** (`LinkList`)
* Date (Hidden)**\_ Link Touched** (`Bool`)
* Date (Hidden)**\_ Child Cache** (`LinkList`)
* Date (Hidden)**\_ Link Owner** (`Integer`)
* Date (Hidden)**Colored Elements** (`LinkSubHidden`)
* Date**Link Copy On Change** (`Enumeration`)
* Date**Link Transform** (`Bool`)

Alignment

* Date**Base**: Obiectul tip formă
* Date**PathObj**: Obeictul tip traiectorie
* Date**PathSubs**: Sub-elementele(edges) obeictului tip traiectorie car va fi utilizat
* Date**Count**: Numărul de ori de repetarea a formei
* Date**Xlate**: Vectorul de translație
* Date**Align**: Este adevărat să aliniați formele la traiectorie, False pentru a lăsa forme în orientarea lor implicită.

Draft

* Date**Always Sync Placement** (`Bool`)

Objects

* Date**Base** (`LinkGlobal`): specifies the object to duplicate in the array.
* Date**Expand Array** (`Bool`): specifies whether to expand the array in the [Tree view](/Tree_view "Tree view") to enable the selection of its individual elements. Only available for Link arrays.
* Date**Fuse** (`Bool`): specifies if overlapping elements in the array are fused or not. [introduced in 1.0](/Release_notes_1.0 "Release notes 1.0")
* Date**Path Object** (`LinkGlobal`): specifies the object to be used for the path. It must contain `Edges` in its [Part TopoShape](/Part_TopoShape "Part TopoShape").
* Date**Path Subelements** (`LinkSubListGlobal`): specifies a list of edges of the Date**Path Object**. If supplied only these edges are used for the path.
* Date**Placement List** (`PlacementList`): the placement for each element. Appears in the Link group for Link arrays. [introduced in 1.1](/Release_notes_1.1 "Release notes 1.1")

Spacing

* Date**Count** (`Integer`): specifies the number of elements in the array.
* Date**End Offset** (`Length`): specifies the length from the end of the path to the last copy. Must be smaller than the length of the path minus the Date**Start Offset**. [introduced in 0.21](/Release_notes_0.21 "Release notes 0.21")
* Date**Spacing Mode** (`Enumeration`): specifies how elements are spaced. The options are: [introduced in 1.1](/Release_notes_1.1 "Release notes 1.1")
  + `Fixed count`: available path length (minus start and end offsets) is evenly divided to accommodate Date**Count** elements.
  + `Fixed spacing`: start at start offset and place new elements after traveling a fixed distance along the path.
  + `Fixed count and spacing`: same as `Fixed spacing`, but also stop at Date**Count** elements.
* Date**Spacing Pattern** (`FloatList`): the spacing is multiplied by a corresponding number in this sequence. Only used if Date**Use Spacing Pattern** is `true`, otherwise hidden. [introduced in 1.1](/Release_notes_1.1 "Release notes 1.1")
* Date**Spacing Unit** (`Length`): the base fixed distance between elements. Only used if Date**Spacing Mode** is `Fixed spacing` or `Fixed count and spacing`, otherwise hidden. [introduced in 1.1](/Release_notes_1.1 "Release notes 1.1")
* Date**Start Offset** (`Length`): specifies the length from the start of the path to the first copy. Must be smaller than the length of the path. [introduced in 0.21](/Release_notes_0.21 "Release notes 0.21")
* Date**Use Spacing Pattern** (`Bool`): use repeating spacing patterns instead of uniform spacing. [introduced in 1.1](/Release_notes_1.1 "Release notes 1.1")

### View

Link

The properties in this group, with the exception of the inherited property, are only available for Link arrays. See [Std LinkMake](/Std_LinkMake#Properties "Std LinkMake") for more information.

* Vizualizare**Draw Style** (`Enumeration`)
* Vizualizare**Line Width** (`FloatConstraint`)
* Vizualizare**Override Material** (`Bool`)
* Vizualizare**Point Size** (`FloatConstraint`)
* Vizualizare**Selectable** (`Bool`): this is an inherited property that appears in the Selection group for other arrays.
* Vizualizare**Shape Material** (`Material`)

Base

The properties in this group, with the exception of the inherited property, are only available for Link arrays. See [Std LinkMake](/Std_LinkMake#Properties "Std LinkMake") for more information.

* Vizualizare (Hidden)**Child View Provider** (`PersistentObject`)
* Vizualizare (Hidden)**Material List** (`MaterialList`)
* Vizualizare (Hidden)**Override Color List** (`ColorList`)
* Vizualizare (Hidden)**Override Material List** (`BoolList`)
* Vizualizare (Hidden)**Proxy** (`PythonObject`): this is an inherited property.

Display Options

The properties in this group are inherited properties. See [Part Feature](/Part_Feature#Properties "Part Feature") for more information.

* Vizualizare**Bounding Box** (`Bool`): this property is not inherited by Link arrays.
* Vizualizare**Display Mode** (`Enumeration`): for Link arrays it can be `Link` or `ChildView`. For other arrays it can be: `Flat Lines`, `Shaded`, `Wireframe` or `Points`.
* Vizualizare**Show In Tree** (`Bool`)
* Vizualizare**Visibility** (`Bool`)

Draft

* Vizualizare**Pattern** (`Enumeration`): not used.
* Vizualizare**Pattern Size** (`Float`): not used.

Object style

The properties in this group are not inherited by Link arrays.

## Scripting

## Scrip-Programare

Instrumentul PathArray poate fi utilizat în [macros](/Macros "Macros") și de la consola Python utilizând umătoarea funcție:

```
path_array = make_path_array(base_object, path_object,
                             count=4, extra=App.Vector(0, 0, 0), subelements=None,
                             align=False, align_mode="Original", tan_vector=App.Vector(1, 0, 0),
                             force_vertical=False, vertical_vector=App.Vector(0, 0, 1),
                             use_link=True)

```

* Plasează un numpr de copii ale unui obiect tip formă al documentului de-a lungul unui obiect tip traiectorie sau sub-obiecte ale unui path-object. Opțional translatează fiecare copie prin FreeCAD.Vector xlate pe direcția și la distanța pentru a ajusta pentru diferența de formă centru vs punct de referință. Opțional, aliniază elementul de bază la calea tangentă/normală/binormală.

Exempluː

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

Retrieved from "<http://wiki.freecad.org/index.php?title=Draft_PathArray/ro&oldid=1557832>"