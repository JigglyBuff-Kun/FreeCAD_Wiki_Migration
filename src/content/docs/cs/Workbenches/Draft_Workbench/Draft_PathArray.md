---
title: Kreslení TrasovéPole
---
|  |
| --- |
| Kreslení TrasovéPole |
| Umístění Menu |
| Draft → PathArray |
| Pracovní stoly |
| [Kreslení](/Draft_Workbench/cs "Draft Workbench/cs"), [Architektura](/Arch_Workbench/cs "Arch Workbench/cs") |
| Výchozí zástupce |
| *Nikdo* |
| Představen ve verzi |
| - |
| Viz také |
| [Draft Array](/Draft_Array/cs "Draft Array/cs") |
|  |

## Popis

Nástroj TrasovéPole umístí vybraný tvar na vybranou trasu. Trasa může být drát nebo jedna nebo více hran. Tvary na trase mohou být volitelně zarovnány podle trasy. Podle potřeby může být specifikován Vektor pro posunutí tvaru tak, že těžiště tvaru bude na trase. Pokud není vybrán žádný objekt, budete vyzváni k jeho výběru.

Both commands can be used on 2D objects created with the [Draft Workbench](/Draft_Workbench "Draft Workbench") or [Sketcher Workbench](/Sketcher_Workbench "Sketcher Workbench"), but also on many 3D objects such as those created with the [Part Workbench](/Part_Workbench "Part Workbench"), [PartDesign Workbench](/PartDesign_Workbench "PartDesign Workbench") or [BIM Workbench](/BIM_Workbench "BIM Workbench").

![](/images/Draft_PathArray_Example.png)

Draft PathArray

## Použití

1. Vyberte objekt tvaru, který chcete kopírovat.
2. Vyberte objekt trasy, po které chcete tvar kopírovat -nebo-
3. Vyberte nějaké hrany pro určení trasy.
4. Stiskněte tlačítko ![](/images/Draft_PathArray.png) Kreslení TrasovéPole.

## Alignment

The alignment of the elements in a Draft PathArray depends on the properties of the array and the orientation of the source object. The position of the source object is ignored: for the purpose of the array the `x`, `y` and `z` are set to `0`. If the Údaje**Align** property of the array is set to `false` the orientation of the array elements is identical to that of the source object. If it is set to `true` the X axis of the local coordinate system of each element placement is tangent to the path. The Y and Z axes of the local coordinate systems depend on the Údaje**Align Mode** property of the array. Other array properties involved in the alignment include Údaje**Tangent Vector**, Údaje**Force Vertical** and Údaje**Vertical Vector**.

![](/images/Draft_PathArray_example2.png)

3 arrays based on the same non-planar path. From left to right: Align is false, Align is true with Align Mode Original and Align is true with Align Mode Frenet

.

### Align Mode

Three modes are available:

#### Original

This mode comes closest to the single Údaje**Align Mode** available in version 0.18. It relies on a fixed normal vector. If the path is planar this vector is perpendicular to the plane of the path, else a default vector, the positive Z axis, is used. From this normal vector and the local tangent vector (the local X axis) a [cross product](https://en.wikipedia.org/wiki/Cross_product) is calculated. This new vector is used as the local Z axis. The orientation of the local Y axis is determined from the local X and Z axes.

#### Frenet

This mode uses the local normal vector derived from the path at each element placement. If this vector cannot be determined (for example in the case of a straight segment) a default vector, again the positive Z axis, is used instead. With this vector and the local tangent vector the local coordinate system is determined using the same procedure as in the previous paragraph.

#### Tangent

This mode is similar to Údaje**Align Mode** `Original` but includes the possibility to pre-rotate the source object by specifying a Údaje**Tangent Vector**.

### Force Vertical and Vertical Vector

These properties are only available if Údaje**Align Mode** is `Original` or `Tangent`. If Údaje**Force Vertical** is set to `true` the local coordinate system is calculated in a different manner. The Údaje**Vertical Vector** is used as a fixed normal vector. From this normal vector and the local tangent vector (the local X axis) again a cross product is calculated. But now this vector is used as the local Y axis. The orientation of the local Z axis is determined from the local X and Y axes.

Using these properties can be required if one of the edged of the path is (almost) parallel to the default normal of the path.

## Notes

* Fused Link arrays are not displayed properly, in the 3D view their elements always appear unfused.

## Vlastnosti

See also: [Property editor](/Property_editor "Property editor").

A Draft PathArray object is derived from a [Part Feature](/Part_Feature "Part Feature") object and inherits all its properties (with the exception of some View properties that are not inherited by Link arrays). The following properties are additional unless otherwise stated:

### Data

Link

The properties in this group are only available for Link arrays. See [Std LinkMake](/Std_LinkMake#Properties "Std LinkMake") for more information.

* Údaje**Scale** (`Float`)
* Údaje (Hidden)**Scale Vector** (`Vector`)
* Údaje**Scale List** (`VectorList`)
* Údaje (Hidden)**Visibility List** (`BoolList`)
* Údaje (Hidden)**Placement List** (`PlacementList`)
* Údaje (Hidden)**Element List** (`LinkList`)
* Údaje (Hidden)**\_ Link Touched** (`Bool`)
* Údaje (Hidden)**\_ Child Cache** (`LinkList`)
* Údaje (Hidden)**\_ Link Owner** (`Integer`)
* Údaje (Hidden)**Colored Elements** (`LinkSubHidden`)
* Údaje**Link Copy On Change** (`Enumeration`)
* Údaje**Link Transform** (`Bool`)

Alignment

* Údaje**Base**: Objekt tvaru
* Údaje**PathObj**: Objekt trasy
* Údaje**PathSubs**: Subelementy(hrany) objektu trasy, které budou použity jako trasa
* Údaje**Count**: Počet kopií tvaru
* Údaje**Xlate**: Vektor posunutí
* Údaje**Align**: Hodnota True pro zarovnání tvarů podle trasy, False pro ponechání tvarů podle jejich původní orientace.

Draft

* Údaje**Always Sync Placement** (`Bool`)

Objects

* Údaje**Base** (`LinkGlobal`): specifies the object to duplicate in the array.
* Údaje**Expand Array** (`Bool`): specifies whether to expand the array in the [Tree view](/Tree_view "Tree view") to enable the selection of its individual elements. Only available for Link arrays.
* Údaje**Fuse** (`Bool`): specifies if overlapping elements in the array are fused or not. [introduced in 1.0](/Release_notes_1.0 "Release notes 1.0")
* Údaje**Path Object** (`LinkGlobal`): specifies the object to be used for the path. It must contain `Edges` in its [Part TopoShape](/Part_TopoShape "Part TopoShape").
* Údaje**Path Subelements** (`LinkSubListGlobal`): specifies a list of edges of the Údaje**Path Object**. If supplied only these edges are used for the path.
* Údaje**Placement List** (`PlacementList`): the placement for each element. Appears in the Link group for Link arrays. [introduced in 1.1](/Release_notes_1.1 "Release notes 1.1")

Spacing

* Údaje**Count** (`Integer`): specifies the number of elements in the array.
* Údaje**End Offset** (`Length`): specifies the length from the end of the path to the last copy. Must be smaller than the length of the path minus the Údaje**Start Offset**. [introduced in 0.21](/Release_notes_0.21 "Release notes 0.21")
* Údaje**Spacing Mode** (`Enumeration`): specifies how elements are spaced. The options are: [introduced in 1.1](/Release_notes_1.1 "Release notes 1.1")
  + `Fixed count`: available path length (minus start and end offsets) is evenly divided to accommodate Údaje**Count** elements.
  + `Fixed spacing`: start at start offset and place new elements after traveling a fixed distance along the path.
  + `Fixed count and spacing`: same as `Fixed spacing`, but also stop at Údaje**Count** elements.
* Údaje**Spacing Pattern** (`FloatList`): the spacing is multiplied by a corresponding number in this sequence. Only used if Údaje**Use Spacing Pattern** is `true`, otherwise hidden. [introduced in 1.1](/Release_notes_1.1 "Release notes 1.1")
* Údaje**Spacing Unit** (`Length`): the base fixed distance between elements. Only used if Údaje**Spacing Mode** is `Fixed spacing` or `Fixed count and spacing`, otherwise hidden. [introduced in 1.1](/Release_notes_1.1 "Release notes 1.1")
* Údaje**Start Offset** (`Length`): specifies the length from the start of the path to the first copy. Must be smaller than the length of the path. [introduced in 0.21](/Release_notes_0.21 "Release notes 0.21")
* Údaje**Use Spacing Pattern** (`Bool`): use repeating spacing patterns instead of uniform spacing. [introduced in 1.1](/Release_notes_1.1 "Release notes 1.1")

### View

Link

The properties in this group, with the exception of the inherited property, are only available for Link arrays. See [Std LinkMake](/Std_LinkMake#Properties "Std LinkMake") for more information.

* Pohled**Draw Style** (`Enumeration`)
* Pohled**Line Width** (`FloatConstraint`)
* Pohled**Override Material** (`Bool`)
* Pohled**Point Size** (`FloatConstraint`)
* Pohled**Selectable** (`Bool`): this is an inherited property that appears in the Selection group for other arrays.
* Pohled**Shape Material** (`Material`)

Base

The properties in this group, with the exception of the inherited property, are only available for Link arrays. See [Std LinkMake](/Std_LinkMake#Properties "Std LinkMake") for more information.

* Pohled (Hidden)**Child View Provider** (`PersistentObject`)
* Pohled (Hidden)**Material List** (`MaterialList`)
* Pohled (Hidden)**Override Color List** (`ColorList`)
* Pohled (Hidden)**Override Material List** (`BoolList`)
* Pohled (Hidden)**Proxy** (`PythonObject`): this is an inherited property.

Display Options

The properties in this group are inherited properties. See [Part Feature](/Part_Feature#Properties "Part Feature") for more information.

* Pohled**Bounding Box** (`Bool`): this property is not inherited by Link arrays.
* Pohled**Display Mode** (`Enumeration`): for Link arrays it can be `Link` or `ChildView`. For other arrays it can be: `Flat Lines`, `Shaded`, `Wireframe` or `Points`.
* Pohled**Show In Tree** (`Bool`)
* Pohled**Visibility** (`Bool`)

Draft

* Pohled**Pattern** (`Enumeration`): not used.
* Pohled**Pattern Size** (`Float`): not used.

Object style

The properties in this group are not inherited by Link arrays.

## Scripting

## Skriptování

Nástroj TrasovéPole může být využit v [makrech](/Macros "Macros") a z konzoly Pythonu použitím následující funkce:

```
path_array = make_path_array(base_object, path_object,
                             count=4, extra=App.Vector(0, 0, 0), subelements=None,
                             align=False, align_mode="Original", tan_vector=App.Vector(1, 0, 0),
                             force_vertical=False, vertical_vector=App.Vector(0, 0, 1),
                             use_link=True)

```

* Rozloží požadovaný počet (count) kopií objektu shapeobject podél trasy pathobject nebo subobject (vybrané hrany) pathobjectu. Volitelně posune každou kopii ve směru a vzdálenosti podle FreeCAD.Vectoru pro nastavení rozdílu mezi středem tvaru a referenčním bodem tvaru. Volitelně zarovná baseobject tangenciálně/normálně/binormálně k trase.

Příklad:

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

Retrieved from "<http://wiki.freecad.org/index.php?title=Draft_PathArray/cs&oldid=1557829>"