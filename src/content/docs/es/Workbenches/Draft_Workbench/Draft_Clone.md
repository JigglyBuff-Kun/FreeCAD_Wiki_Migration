---
title: Borrador Clon
---
|  |
| --- |
| Borrador Clon |
| Ubicación en el Menú |
| Modificación → Clon |
| Entornos de trabajo |
| [Borrador](/Draft_Workbench/es "Draft Workbench/es"), [Arquitectura](/Arch_Workbench/es "Arch Workbench/es") |
| Atajo de teclado por defecto |
| C L |
| Introducido en versión |
| - |
| Ver también |
| [Borrador Escalar](/Draft_Scale/es "Draft Scale/es") |
|  |

## Descripción

El ![](/images/Draft_Clone.svg) comando **Borrador Clon** crea copias enlazadas, clones, de los objetos seleccionados. La forma de un clon es paramétrica, se actualizará si su objeto fuente cambia. Pero un clon tiene su propia posición, rotación y escala, y sus propias [Ver propiedades](/Property_editor/es "Property editor/es"). Para los objetos [Arquitectura](/Arch_Workbench/es "Arch Workbench/es") el comando crea un tipo especial de clon: un clon Arquitectura.

El comando puede usarse en objetos 2D creados con el [Ambiente de Trabajo Borrador](/Draft_Workbench/es "Draft Workbench/es") o [Ambiente de Trabajo Dibujante](/Sketcher_Workbench/es "Sketcher Workbench/es"), pero también en muchos objetos 3D como los creados con el [Ambiente de Trabajo Pieza](/Part_Workbench/es "Part Workbench/es"), [Ambiente de Trabajo DiseñoPieza](/PartDesign_Workbench/es "PartDesign Workbench/es") o [Ambiente de Trabajo Arquitectura](/Arch_Workbench/es "Arch Workbench/es"). Los clones de objetos 2D pueden utilizarse en [PartDesign Cuerpos](/PartDesign_Body/es "PartDesign Body/es").

![](/images/Draft_Clone_example.jpg)

Borrador Clon junto a su objeto de origen

## Utilización

1. Opcionalmente selecciona uno o más objetos.
2. Hay varias formas de invocar el comando:
   * Pulsar el ![](/images/Draft_Clone.svg) Borrador Clon.
   * Seleccione la opción **Modificación → ![](/images/Draft_Clone.svg) Clon** en el menú.
   * Utilice el atajo de teclado: C y luego L.
3. Si aún no ha seleccionado un objeto: seleccione un objeto en la [Vista 3D](/3D_view/es "3D view/es").

## Notes

* The scaling of a Draft Clone can be changed in the [Property editor](/Property_editor "Property editor") or, [introduced in 1.1](/Release_notes_1.1 "Release notes 1.1"), by double clicking it in the [Tree view](/Tree_view "Tree view") and entering new values in the task panel that opens. The latter option is more efficient.

## Propiedades

Ver también: [Editor de propiedades](/Property_editor/es "Property editor/es").

Un objeto creado con el comando Clonar Borrador deriva de un [Pieza Pieza2DObjeto](/index.php?title=Part_Part2DObject/es&action=edit&redlink=1 "Part Part2DObject/es (page does not exist)"), de un objeto [Pieza Característica](/index.php?title=Part_Feature/es&action=edit&redlink=1 "Part Feature/es (page does not exist)") o, si se crea un Arch Clone, del tipo de objeto del objeto fuente. Hereda todas las propiedades de ese objeto. Un clon derivado de uno de los dos primeros objetos también tiene las siguientes propiedades adicionales:

### Datos

Borrador

* Datos**Fusible** (`Bool`): especifica si las formas superpuestas en el clon se fusionan o no.
* Datos**Objetos** (`ListaEnlacesGlobal`): especifica los objetos que se clonan.
* Datos**Escala** (`Vector`): especifica los factores de escala X, Y y Z.

## Guión

Ver también: [Documentación de la API autogenerada](https://freecad.github.io/SourceDoc/) y [Fundamentos de FreeCAD Guión](/FreeCAD_Scripting_Basics/es "FreeCAD Scripting Basics/es").

Para crear un clon utilice el método `make_clone` ([introducido en la versión 0.19](/Release_notes_0.19/es "Release notes 0.19/es")) del módulo Draft. Este método sustituye al método obsoleto `clone`.

```
cloned_object = make_clone(obj, delta=None, forcedraft=False)

```

* `obj` contiene los objetos a clonar. Puede ser un solo objeto o una lista de objetos.
* `delta` es el vector de desplazamiento que se aplicará al clon.
* Si `forcedraft` es `False` y `obj` contiene un único [Objeto Arquitectura](/Arch_Workbench/es "Arch Workbench/es") se crea un Arch Clone. Establezca `forcedraft` a `True` para crear un Clon de Borrador en su lugar.
* `cloned_object` se devuelve con el objeto clonado.

Ejemplo:

```
import FreeCAD as App
import Draft

doc = App.newDocument()

place = App.Placement(App.Vector(1000, 0, 0), App.Rotation())
polygon1 = Draft.make_polygon(3, 750)
polygon2 = Draft.make_polygon(5, 750, placement=place)

vector = App.Vector(2600, 500, 0)
cloned_object = Draft.clone([polygon1, polygon2], delta=vector)

cloned_object.Fuse = True

doc.recompute()

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Draft_Clone/es&oldid=1550541>"