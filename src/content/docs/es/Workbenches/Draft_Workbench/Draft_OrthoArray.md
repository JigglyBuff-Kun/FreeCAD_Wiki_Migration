---
title: Borrador ArregloOrtogonal
---
|  |
| --- |
| Borrador ArregloOrtogonal |
| Ubicación en el Menú |
| Modificación → Herramientas de Arreglo → Arreglo |
| Entornos de trabajo |
| [Borrador](/Draft_Workbench/es "Draft Workbench/es"), [Arquitectura](/Arch_Workbench/es "Arch Workbench/es") |
| Atajo de teclado por defecto |
| *Ninguno* |
| Introducido en versión |
| 0.19 |
| Ver también |
| [Borrador ArregloPolar](/Draft_PolarArray/es "Draft PolarArray/es"), [Borrador ArregloCircular](/Draft_CircularArray/es "Draft CircularArray/es"), [Borrador ArregloRutas](/Draft_PathArray/es "Draft PathArray/es"), [Borrador ArregloEnlaceRuta](/Draft_PathLinkArray/es "Draft PathLinkArray/es"), [Borrador ArregloPunto](/Draft_PointArray/es "Draft PointArray/es"), [Borrador ArregloEnlacePunto](/index.php?title=Draft_PointLinkArray/es&action=edit&redlink=1 "Draft PointLinkArray/es (page does not exist)"). |
|  |

## Descripción

El ![](/images/Draft_OrthoArray.svg) **Borrador ArregloOrtogonal** crea un arreglo ortogonal (3 ejes) a partir de un objeto seleccionado. El comando puede crear opcionalmente un arreglo [Enlace](/App_Link/es "App Link/es"), que es más eficiente que un arreglo normal.

El comando puede usarse en objetos 2D creados con el [Ambiente de Trabajo Borrador](/Draft_Workbench/es "Draft Workbench/es") o [Ambiente de Trabajo Dibujo](/Sketcher_Workbench/es "Sketcher Workbench/es"), pero también en muchos objetos 3D como los creados con el [Ambiente de Trabajo Pieza](/Part_Workbench/es "Part Workbench/es"), [Ambiente de Trabajo DiseñoPieza](/PartDesign_Workbench/es "PartDesign Workbench/es") o [Ambiente de Trabajo Arquitectura](/Arch_Workbench/es "Arch Workbench/es").

![](/images/Draft_Array_example.png)

Borrador ArregloOrtogonal

## Utilización

1. Opcionalmente selecciona un objeto.
2. Hay varias formas de invocar el comando:
   * Pulsar el ![](/images/Draft_OrthoArray.svg) Borrador ArregloOrtogonal.
   * Seleccione la opción **Modificación → Herramientas de arreglo →**

![](/images/Draft_OrthoArray.svg) Array **en el menú.**

1. Se abre el panel de tareas **Arreglo Ortogonal**. Ver [Opciones](#Opciones) para más información.
2. Si aún no ha seleccionado ningún objeto: seleccione un objeto.
3. Introduzca los parámetros necesarios en el panel de tareas.
4. Para terminar el comando haga una de las siguientes cosas:
   * Haga clic en la [Vista 3D](/3D_view/es "3D view/es").
   * Pulse Enter.
   * Pulse el botón OK.

## Opciones

* Enter the **Number of elements** for the X, Y and Z directions. This number must be at least `1` for every direction.
* Enter the **X intervals** to specify the displacement for the elements in the X direction. For a rectangular array the Y and Z values must be `0`.
* Enter the **Y intervals** to specify the displacement for the elements in the Y direction. For a rectangular array the X and Z values must be `0`.
* Enter the **Z intervals** to specify the displacement for the elements in the Z direction. For a rectangular array the X and Y values must be `0`.
* Press the **Reset X, Y or Z** button to reset the displacement in the given direction to the default values.
* If the **Fuse** checkbox is checked overlapping elements in the array are fused.
* If the **Link array** checkbox is checked a Link array instead of a regular array is created. A Link array is more efficient because its elements are [App Link](/App_Link "App Link") objects.
* Press Esc or the Cancel button to abort the command.

## Notas

* A Draft OrthoArray can be turned into a [Draft PolarArray](/Draft_PolarArray "Draft PolarArray") or a [Draft CircularArray](/Draft_CircularArray "Draft CircularArray") by changing its Datos**Array Type** property.
* A Link array cannot be turned into a regular array or vice versa. The type of array must be decided at creation time.
* Fused Link arrays are not displayed properly, in the 3D view their elements always appear unfused.

## Propiedades

See also: [Property editor](/Property_editor "Property editor").

The Draft OrthoArray command, the [Draft PolarArray command](/Draft_PolarArray "Draft PolarArray") and the [Draft CircularArray command](/Draft_CircularArray "Draft CircularArray") create the same object. This object is derived from a [Part Feature](/Part_Feature "Part Feature") object and inherits all its properties (with the exception of some View properties that are not inherited by Link arrays). The following properties are additional unless otherwise stated:

### Datos

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

Circular array

The properties in this group are hidden for orthogonal arrays and polar arrays.

* Datos**Number Circles** (`Integer`): specifies the number of circular layers. Must be at least `2`.
* Datos**Radial Distance** (`Distance`): specifies the distance between circular layers.
* Datos**Symmetry** (`Integer`): specifies the number of symmetry lines. This number changes the distribution of the elements in the array.
* Datos**Tangential Distance** (`Distance`): specifies the distance between elements in the same circular layer. Must be larger than zero.

Draft

* Datos**Always Sync Placement** (`Bool`)

Objects

* Datos**Array Type** (`Enumeration`): specifies the type of array, which can be `ortho`, `polar` or `circular`.
* Datos**Axis Reference** (`LinkGlobal`): specifies the object and edge to be used instead of the Datos**Axis** and Datos**Center** properties. Not used for orthogonal arrays.
* Datos**Base** (`Link`): specifies the object to duplicate in the array.
* Datos**Count** (`Integer`): (read-only) specifies the total number of elements in the array.
* Datos**Expand Array** (`Bool`): specifies whether to expand the array in the [Tree view](/Tree_view "Tree view") to enable the selection of its individual elements. Only available for Link arrays.
* Datos**Fuse** (`Bool`): specifies if overlapping elements in the array are fused or not.
* Datos**Placement List** (`PlacementList`): the placement for each element. Appears in the Link group for Link arrays. [introduced in 1.1](/Release_notes_1.1 "Release notes 1.1")

Orthogonal array

The properties in this group are hidden for circular arrays and polar arrays.

* Datos**Interval X** (`VectorDistance`): specifies the interval between elements in the X direction.
* Datos**Interval Y** (`VectorDistance`): specifies the interval between elements in the Y direction.
* Datos**Interval Z** (`VectorDistance`): specifies the interval between elements in the Z direction.
* Datos**Number X** (`Integer`): specifies the number of elements in the X direction. Must be at least `1`.
* Datos**Number Y** (`Integer`): specifies the number of elements in the Y direction. Must be at least `1`.
* Datos**Number Z** (`Integer`): specifies the number of elements in the Z direction. Must be at least `1`.

Polar array

The properties in this group are hidden for circular arrays and orthogonal arrays.

* Datos**Angle** (`Angle`): specifies the aperture of the circular arc. Use `360°` for a full circle.
* Datos**Interval Axis** (`VectorDistance`): specifies the interval between elements in the Datos**Axis** direction.
* Datos**Number Polar** (`Integer`): specifies the number of elements in the polar direction.

Polar/circular array

The properties in this group are hidden for orthogonal arrays.

* Datos**Axis** (`Vector`): specifies the direction of the axis of the array.
* Datos**Center** (`VectorDistance`): specifies the center point of the array. The axis of the array passes through this point. For circular arrays it is an offset from the Datos**Placement** of the Datos**Base** object.

### View

Link

The properties in this group, with the exception of the inherited property, are only available for Link arrays. See [Std LinkMake](/Std_LinkMake#Properties "Std LinkMake") for more information.

* Vista**Draw Style** (`Enumeration`)
* Vista**Line Width** (`FloatConstraint`)
* Vista**Override Material** (`Bool`)
* Vista**Point Size** (`FloatConstraint`)
* Vista**Selectable** (`Bool`): this is an inherited property that appears in the Selection group for other arrays
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
* Vista**Display Mode** (`Enumeration`): for Link arrays it can be `Link` or `ChildView`. For other arrays it can be: `Flat Lines`, `Shaded`, `Wireframe` or `Points`
* Vista**Show In Tree** (`Bool`)
* Vista**Visibility** (`Bool`)

Draft

* Vista**Pattern** (`Enumeration`): not used.
* Vista**Pattern Size** (`Float`): not used.

Object style

The properties in this group are not inherited by Link arrays.

## Guión

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

* `base_object` is the object to be arrayed. It can also be the `Label` (string) of an object in the current document.
* `v_x`, `v_y`, and `v_z` are the vectors between the base points of the elements in the respective directions.
* `d_x`, `d_y`, and `d_z` are the distances between the base points of the elements in the respective directions.
* `n_x`, `n_y`, and `n_z` are the numbers of elements in the respective directions.
* If `use_link` is `True` the created elements are [App Links](/App_Link "App Link") instead of regular copies.
* `array` is returned with the created array object.

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

Retrieved from "<http://wiki.freecad.org/index.php?title=Draft_OrthoArray/es&oldid=1557792>"