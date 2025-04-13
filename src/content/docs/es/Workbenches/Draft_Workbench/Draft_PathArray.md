---
title: Draft PathArray/es
---
|  |
| --- |
| Draft PathArray |
| Ubicación en el Menú |
| Draft → PathArray |
| Entornos de trabajo |
| [Draft](/Draft_Workbench/es "Draft Workbench/es"), [Arch](/Arch_Workbench/es "Arch Workbench/es") |
| Atajo de teclado por defecto |
| *Ninguno* |
| Introducido en versión |
| - |
| Ver también |
| [Draft Array](/Draft_Array/es "Draft Array/es") |
|  |

## Descripción

La herramienta PathArray coloca copias de una forma seleccionada a lo largo de una ruta seleccionada. La ruta puede ser un alambre o uno o más bordes. Las formas pueden alinearse opcionalmente con la tangente del camino. Si es necesario, se puede especificar un vector de translación para cambiar las formas de modo que el centroide esté en la ruta. Si no se seleccionan objetos, se le invitará a seleccionarlos.

Both commands can be used on 2D objects created with the [Draft Workbench](/Draft_Workbench "Draft Workbench") or [Sketcher Workbench](/Sketcher_Workbench "Sketcher Workbench"), but also on many 3D objects such as those created with the [Part Workbench](/Part_Workbench "Part Workbench"), [PartDesign Workbench](/PartDesign_Workbench "PartDesign Workbench") or [BIM Workbench](/BIM_Workbench "BIM Workbench").

![](/images/Draft_PathArray_Example.png)

Draft PathArray

## Como utilizar

1. Crea un objeto de forma que desees distribuir. Obtendrá los mejores resultados si su objeto está centrado en el origen, incluso si la ruta comienza en otro lugar.
2. Seleccione un objeto de ruta a lo largo del cual se distribuirán las formas. -o-
3. Seleccione algunos bordes de un objeto de ruta.
4. Presiona el botón ![](/images/Draft_PathArray.png) [Draft PathArray](/Draft_PathArray "Draft PathArray") .

## Alignment

The alignment of the elements in a Draft PathArray depends on the properties of the array and the orientation of the source object. The position of the source object is ignored: for the purpose of the array the `x`, `y` and `z` are set to `0`. If the Datos**Align** property of the array is set to `false` the orientation of the array elements is identical to that of the source object. If it is set to `true` the X axis of the local coordinate system of each element placement is tangent to the path. The Y and Z axes of the local coordinate systems depend on the Datos**Align Mode** property of the array. Other array properties involved in the alignment include Datos**Tangent Vector**, Datos**Force Vertical** and Datos**Vertical Vector**.

![](/images/Draft_PathArray_example2.png)

3 arrays based on the same non-planar path. From left to right: Align is false, Align is true with Align Mode Original and Align is true with Align Mode Frenet

.

### Align Mode

Three modes are available:

#### Original

This mode comes closest to the single Datos**Align Mode** available in version 0.18. It relies on a fixed normal vector. If the path is planar this vector is perpendicular to the plane of the path, else a default vector, the positive Z axis, is used. From this normal vector and the local tangent vector (the local X axis) a [cross product](https://en.wikipedia.org/wiki/Cross_product) is calculated. This new vector is used as the local Z axis. The orientation of the local Y axis is determined from the local X and Z axes.

#### Frenet

This mode uses the local normal vector derived from the path at each element placement. If this vector cannot be determined (for example in the case of a straight segment) a default vector, again the positive Z axis, is used instead. With this vector and the local tangent vector the local coordinate system is determined using the same procedure as in the previous paragraph.

#### Tangent

This mode is similar to Datos**Align Mode** `Original` but includes the possibility to pre-rotate the source object by specifying a Datos**Tangent Vector**.

### Force Vertical and Vertical Vector

These properties are only available if Datos**Align Mode** is `Original` or `Tangent`. If Datos**Force Vertical** is set to `true` the local coordinate system is calculated in a different manner. The Datos**Vertical Vector** is used as a fixed normal vector. From this normal vector and the local tangent vector (the local X axis) again a cross product is calculated. But now this vector is used as the local Y axis. The orientation of the local Z axis is determined from the local X and Y axes.

Using these properties can be required if one of the edged of the path is (almost) parallel to the default normal of the path.

## Notes

* Fused Link arrays are not displayed properly, in the 3D view their elements always appear unfused.

## Propiedades

See also: [Property editor](/Property_editor "Property editor").

A Draft PathArray object is derived from a [Part Feature](/Part_Feature "Part Feature") object and inherits all its properties (with the exception of some View properties that are not inherited by Link arrays). The following properties are additional unless otherwise stated:

### Data

Link

The properties in this group are only available for Link arrays. See [Std LinkMake](/Std_LinkMake#Properties "Std LinkMake") for more information.

* Datos**Scale** (`Float`)
* Datos (Hidden)**Scale Vector** (`Vector`)
* Datos**Scale List** (`VectorList`)
* Datos (Hidden)**Visibility List** (`BoolList`)
* Datos (Hidden)**Placement List** (`PlacementList`)
* Datos (Hidden)**Element List** (`LinkList`)
* Datos (Hidden)**\_ Link Touched** (`Bool`)
* Datos (Hidden)**\_ Child Cache** (`LinkList`)
* Datos (Hidden)**\_ Link Owner** (`Integer`)
* Datos (Hidden)**Colored Elements** (`LinkSubHidden`)
* Datos**Link Copy On Change** (`Enumeration`)
* Datos**Link Transform** (`Bool`)

Alignment

* Datos**Base**: El objeto de forma
* Datos**PathObj**: El objeto de ruta
* Datos**PathSubs**: los subelementos (bordes) del objeto de ruta que se usará como ruta
* Datos**Count**: la cantidad de tiempo para copiar la forma
* Datos**Xlate**: El vector de traducción
* Datos**Align**: True para alinear las formas con la ruta, False para dejar las formas en su orientación predeterminada.

Draft

* Datos**Always Sync Placement** (`Bool`)

Objects

* Datos**Base** (`LinkGlobal`): specifies the object to duplicate in the array.
* Datos**Expand Array** (`Bool`): specifies whether to expand the array in the [Tree view](/Tree_view "Tree view") to enable the selection of its individual elements. Only available for Link arrays.
* Datos**Fuse** (`Bool`): specifies if overlapping elements in the array are fused or not. [introduced in 1.0](/Release_notes_1.0 "Release notes 1.0")
* Datos**Path Object** (`LinkGlobal`): specifies the object to be used for the path. It must contain `Edges` in its [Part TopoShape](/Part_TopoShape "Part TopoShape").
* Datos**Path Subelements** (`LinkSubListGlobal`): specifies a list of edges of the Datos**Path Object**. If supplied only these edges are used for the path.
* Datos**Placement List** (`PlacementList`): the placement for each element. Appears in the Link group for Link arrays. [introduced in 1.1](/Release_notes_1.1 "Release notes 1.1")

Spacing

* Datos**Count** (`Integer`): specifies the number of elements in the array.
* Datos**End Offset** (`Length`): specifies the length from the end of the path to the last copy. Must be smaller than the length of the path minus the Datos**Start Offset**. [introduced in 0.21](/Release_notes_0.21 "Release notes 0.21")
* Datos**Spacing Mode** (`Enumeration`): specifies how elements are spaced. The options are: [introduced in 1.1](/Release_notes_1.1 "Release notes 1.1")
  + `Fixed count`: available path length (minus start and end offsets) is evenly divided to accommodate Datos**Count** elements.
  + `Fixed spacing`: start at start offset and place new elements after traveling a fixed distance along the path.
  + `Fixed count and spacing`: same as `Fixed spacing`, but also stop at Datos**Count** elements.
* Datos**Spacing Pattern** (`FloatList`): the spacing is multiplied by a corresponding number in this sequence. Only used if Datos**Use Spacing Pattern** is `true`, otherwise hidden. [introduced in 1.1](/Release_notes_1.1 "Release notes 1.1")
* Datos**Spacing Unit** (`Length`): the base fixed distance between elements. Only used if Datos**Spacing Mode** is `Fixed spacing` or `Fixed count and spacing`, otherwise hidden. [introduced in 1.1](/Release_notes_1.1 "Release notes 1.1")
* Datos**Start Offset** (`Length`): specifies the length from the start of the path to the first copy. Must be smaller than the length of the path. [introduced in 0.21](/Release_notes_0.21 "Release notes 0.21")
* Datos**Use Spacing Pattern** (`Bool`): use repeating spacing patterns instead of uniform spacing. [introduced in 1.1](/Release_notes_1.1 "Release notes 1.1")

### View

Link

The properties in this group, with the exception of the inherited property, are only available for Link arrays. See [Std LinkMake](/Std_LinkMake#Properties "Std LinkMake") for more information.

* Vista**Draw Style** (`Enumeration`)
* Vista**Line Width** (`FloatConstraint`)
* Vista**Override Material** (`Bool`)
* Vista**Point Size** (`FloatConstraint`)
* Vista**Selectable** (`Bool`): this is an inherited property that appears in the Selection group for other arrays.
* Vista**Shape Material** (`Material`)

Base

The properties in this group, with the exception of the inherited property, are only available for Link arrays. See [Std LinkMake](/Std_LinkMake#Properties "Std LinkMake") for more information.

* Vista (Hidden)**Child View Provider** (`PersistentObject`)
* Vista (Hidden)**Material List** (`MaterialList`)
* Vista (Hidden)**Override Color List** (`ColorList`)
* Vista (Hidden)**Override Material List** (`BoolList`)
* Vista (Hidden)**Proxy** (`PythonObject`): this is an inherited property.

Display Options

The properties in this group are inherited properties. See [Part Feature](/Part_Feature#Properties "Part Feature") for more information.

* Vista**Bounding Box** (`Bool`): this property is not inherited by Link arrays.
* Vista**Display Mode** (`Enumeration`): for Link arrays it can be `Link` or `ChildView`. For other arrays it can be: `Flat Lines`, `Shaded`, `Wireframe` or `Points`.
* Vista**Show In Tree** (`Bool`)
* Vista**Visibility** (`Bool`)

Draft

* Vista**Pattern** (`Enumeration`): not used.
* Vista**Pattern Size** (`Float`): not used.

Object style

The properties in this group are not inherited by Link arrays.

## Scripting

## Programación

La herramienta PathArray puede usarse en [macros](/Macros/es "Macros/es") y desde la consola de Python utilizando la siguiente función:

```
path_array = make_path_array(base_object, path_object,
                             count=4, extra=App.Vector(0, 0, 0), subelements=None,
                             align=False, align_mode="Original", tan_vector=App.Vector(1, 0, 0),
                             force_vertical=False, vertical_vector=App.Vector(0, 0, 1),
                             use_link=True)

```

* Distribuir recuento de copias de un objeto de forma de documento a lo largo de un objeto de ruta o subobjetos de un objeto de ruta. Opcionalmente, traduce cada copia por FreeCAD.Vector xlate la dirección y la distancia para ajustar la diferencia entre el centro de la forma y el punto de referencia de la forma. Opcionalmente alinea el objeto base con la tangente / normal / binormal de la ruta.

Ejemplo:

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

Retrieved from "<http://wiki.freecad.org/index.php?title=Draft_PathArray/es&oldid=1557828>"