---
title: Borrador ArregloPunto
---
|  |
| --- |
| Borrador ArregloPunto |
| Ubicación en el Menú |
| Modificación → Herramientas de Arreglo → Arreglo Punto |
| Entornos de trabajo |
| [Borrador](/Draft_Workbench/es "Draft Workbench/es"), [Arquitectura](/Arch_Workbench/es "Arch Workbench/es") |
| Atajo de teclado por defecto |
| *Ninguno* |
| Introducido en versión |
| 0.18 |
| Ver también |
| [Borrador OrthoArray](/Draft_OrthoArray/es "Draft OrthoArray/es"), [Borrador ArregloPolar](/Draft_PolarArray/es "Draft PolarArray/es"), [Borrador ArregloCircular](/Draft_CircularArray/es "Draft CircularArray/es"), [Borrador ArregloRuta](/Draft_PathArray/es "Draft PathArray/es"), [Borrador ArregloEnlaceRuta](/Draft_PathLinkArray/es "Draft PathLinkArray/es"), [Borrador ArregloEnlacePunto](/index.php?title=Draft_PointLinkArray/es&action=edit&redlink=1 "Draft PointLinkArray/es (page does not exist)") |
|  |

## Descripción

El comando ![](/images/Draft_PointArray.svg) El comando **Borrador ArregloPuntos** crea una arreglo regular a partir de un objeto seleccionado colocando copias en los puntos de un [compuesto puntos](#Compuesto_puntos). Utilice el comando [Borrador ArregloEnlacePunto](/index.php?title=Draft_PointLinkArray/es&action=edit&redlink=1 "Draft PointLinkArray/es (page does not exist)") para crear un arreglo [Enlace](/App_Link/es "App Link/es") más eficiente. Excepto por el tipo de arreglo que se crea, arreglo de enlace o matriz normal, el comando [Borrador ArregloEnlacePunto](/index.php?title=Draft_PointLinkArray/es&action=edit&redlink=1 "Draft PointLinkArray/es (page does not exist)") es idéntico a este comando.

Ambos comandos pueden utilizarse en objetos 2D

```
creados con el Ambiente de Trabajo Borrador o Ambiente de Trabajo Dibujo, pero también en muchos objetos 3D como los creados con el Ambiente de Trabajo Pieza, Ambiente de Trabajo DiseñoPieza o Ambiente de Trabajo Arquitectura.

```

The point object can be any object with a shape and vertices (including a [Std Part](/Std_Part "Std Part") containing one or more of such objects), as well as a [mesh](/Mesh_Workbench "Mesh Workbench") and a [point cloud](/Points_Workbench "Points Workbench"). Duplicate points in the point object are filtered out.

![](/images/Draft_PointArray_Example.png)

Borrador ArregloPunto

## Utilización

1. Seleccione el objeto que desea formar un array.
2. Añade el objeto [punto compuesto](#Punto_compuesto) a la selección.
3. Hay varias formas de invocar el comando:
   * Pulsar el ![](/images/Draft_PointArray.svg) Borrador ArregloPunto.
   * Seleccione la opción **Modificación → Herramientas de arreglo →![](/images/Draft_PointArray.svg) Arreglo de puntos** en el menú.
4. Se crea el arreglo.
5. Opcionalmente cambia las [propiedades](#Propiedades) del arreglo en el [Editor de propiedades](/Property_editor/es "Property editor/es").

## Notes

* Fused Link arrays are not displayed properly, in the 3D view their elements always appear unfused.

## Propiedades

Ver también: [Editor de propiedades](/Property_editor/es "Property editor/es").

Un objeto Borrador ArregloPunto deriva de un objeto [Pieza Función](/index.php?title=Part_Feature/es&action=edit&redlink=1 "Part Feature/es (page does not exist)") y hereda todas sus propiedades (con la excepción de algunas propiedades de la Vista que no son heredadas por los arreglos enlace). Las siguientes propiedades son adicionales a menos que se indique lo contrario:

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

Draft

* Datos**Always Sync Placement** (`Bool`)

Objetos

* Datos**Base** (`Link`): specifies the object to duplicate in the array.
* Datos**Count** (`Integer`): (read-only) specifies the number of elements in the array. This number is determined by the number of points in the Datos**Point Object**.
* Datos**Expand Array** (`Bool`): specifies whether to expand the array in the [Tree view](/Tree_view "Tree view") to enable the selection of its individual elements. Only available for Link arrays.
* Datos**Extra Placement** (`Placement`): : specifies an additional [placement](/Placement "Placement"), translation and rotation, for each element in the array.
* Datos**Fuse** (`Bool`): specifies if overlapping elements in the array are fused or not. [introduced in 1.0](/Release_notes_1.0 "Release notes 1.0")
* Datos**Placement List** (`PlacementList`): the placement for each element. Appears in the Link group for Link arrays. [introduced in 1.1](/Release_notes_1.1 "Release notes 1.1")
* Datos**Point Object** (`Link`): specifies the object whose points are used to position the elements in the array.

### Vista

Enlace

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

Borrador

* Vista**Pattern** (`Enumeration`): not used.
* Vista**Pattern Size** (`Float`): not used.

Object style

The properties in this group are not inherited by Link arrays.

## Guión

Ver también: [Documentación de la API autogenerada](https://freecad.github.io/SourceDoc/) y [Fundamentos de FreeCAD Guión](/FreeCAD_Scripting_Basics/es "FreeCAD Scripting Basics/es").

To create a point array use the `make_point_array` method ([introduced in 0.19](/Release_notes_0.19 "Release notes 0.19")) of the Draft module. This method replaces the deprecated `makePointArray` method.

```
point_array = make_point_array(base_object, point_object, extra=None, use_link=True)

```

* `base_object` is the object to be arrayed. It can also be the `Label` (string) of an object in the current document.
* `point_object` is the object containing the points. It can also be the `Label` (string) of an object in the current document. It should have a `Geometry`, `Links`, or `Components` property containing points.
* `extra` is an `App.Placement`, an `App.Vector` or an `App.Rotation` that displaces each element.
* If `use_link` is `True` the created elements are [App Links](/App_Link "App Link") instead of regular copies.

Ejemplo:

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

Retrieved from "<http://wiki.freecad.org/index.php?title=Draft_PointArray/es&oldid=1557847>"