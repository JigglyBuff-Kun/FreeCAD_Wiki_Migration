---
title: Arch Ubicación
---
:::caution
THIS COMMAND IS PART OF THE INTEGRATEDBIM WORKBENCHIN V1.0This page has been updated for that version.
:::

|  |
| --- |
| Arquitectura Ubicación |
| Ubicación en el Menú |
| Arquitectura → Ubicación |
| Entornos de trabajo |
| [Arquitectura](/Arch_Workbench/es "Arch Workbench/es") |
| Atajo de teclado por defecto |
| S I |
| Introducido en versión |
| - |
| Ver también |
| [Arquitectura Piso](/Arch_Floor/es "Arch Floor/es"), [Arquitectura Edificio](/Arch_Building/es "Arch Building/es") |
|  |

## Descripción

El Arquitectura Ubicación es un objeto especial que combina propiedades de un objeto de grupo estándar de FreeCAD y objetos de Arch. Es particularmente adecuado para representar un sitio de proyecto completo o terreno. En trabajos arquitectónicos basados en IFC, se usa principalmente para organizar su modelo, al contener objetos [Edificio](/Arch_Building/es "Arch Building/es"). El sitio también se usa para administrar y mostrar un terreno físico, y puede calcular volúmenes de tierra para agregar o eliminar.

## Utilización

1. Opcionalmente, seleccionar uno o más objetos a ser incluidos en tu nueva ubicación
2. Pulse el botón ![](/images/Arch_Site.svg) Arquitectura Ubicación, o pulsar las teclas S y I

## Opciones

* Después de la creación de una ubicación, puedes añadirle más objetos arrastrando y soltándolos en la vista en árbol o utilizando la herramienta ![](/images/Arch_Add.svg) [Arquitectura Añadir](/Arch_Add/es "Arch Add/es"). Esto solo determina qué objeto forma parte del sitio determinado y no tiene ningún efecto en el terreno en sí.
* Puedes eliminar objetos de una ubicación arrastrando y soltándolos fuera en la vista de árbol o utilizando la herramienta ![](/images/Arch_Remove.png) [Arquitectura Eliminar](/Arch_Remove/es "Arch Remove/es")
* Puede agregar un objeto de terreno editando la propiedad Datos**Terreno** del Sitio. El terreno debe ser una caparazón o superficie abierta.
* Puede agregar volúmenes para agregar o restar del terreno base, haciendo doble clic en el Sitio y agregando objetos a sus grupos Resta o Adiciones. Los objetos deben ser sólidos.

* La propiedad Datos**Vector Extrusión** se puede usar para resolver algunos problemas que pueden aparecer al trabajar con sustracciones y adiciones. Para realizar esas adiciones / sustracciones, la superficie del terreno se extruye en un sólido, que luego se une / resta apropiadamente. Dependiendo de la topología del terreno, esta extrusión puede fallar con el vector de extrusión predeterminado. Por lo tanto, es posible que pueda solucionar el problema cambiando este a un valor diferente.

## Propiedades

### Data

Site

### Datos

* Datos**Address**: la calle y el número de este sitio
* Datos**Postal Code**: el código postal o postal de este sitio
* Datos**City**: La ciudad de este sitio
* Datos**Country**: El país de este sitio
* Datos**Latitude**: la latitud de este sitio
* Datos**Longitude**: la longitud de este sitio
* Datos**Url**: una URL que muestra este sitio en un sitio web de mapas
* Datos**Projected Area**: el área de la proyección de este objeto en el plano XY
* Datos**Perimeter**: la longitud del perímetro de este terreno
* Datos**Addition Volume**: el volumen de tierra que se agregará a este terreno
* Datos**Subtraction Volume**: el volumen de tierra que se eliminará de este terreno
* Datos**Extrusion Vector**: un vector de extrusión para usar cuando se realizan operaciones booleanas
* Datos**Remove Splitter**: elimina los divisores de la forma resultante
* Datos**Declination**: El ángulo entre el Norte verdadero y la dirección Norte en este documento, es decir, el eje Y. [introducido en la versión 0.18](/Release_notes_0.18/es "Release notes 0.18/es") Esto significa que por defecto el Norte apunta al eje Y, y el Este al eje X; el ángulo se incrementa en sentido contrario a las agujas del reloj. Esta propiedad se conocía anteriormente como Datos**Desviación Norte**.
* Datos**Fichero EPW**: Permite adjuntar un archivo EPW de la [Ladybug EPW data website](https://www.ladybug.tools/epwmap/) a este sitio. Esto es necesario para mostrar los diagramas de rosa de los vientos [introducido en la versión 0.19](/Release_notes_0.19/es "Release notes 0.19/es")

### View

Compass

* Vista**Compass** (`Bool`): Default is `False`. Shows or hides the compass.
* Vista**Compass Position** (`Vector`): The position of the compass relative to the site placement.
* Vista**Compass Rotation** (`Angle`): The rotation of the compass relative to the site.
* Vista**Update Declination** (`Bool`): Default is `False`. Update the declination value based on the compass rotation.

Site

* Vista**Orientation** (`Enumeration`): Default is `Project North`. When set to `True North` the whole geometry will be rotated to match the true north of this site.
* Vista**Solar Diagram** (`Bool`): Default is `False`. Shows or hides the sun path diagram. See [Solar and wind diagrams](#Solar_and_wind_diagrams).
* Vista**Solar Diagram Color** (`Color`): The color of the sun path diagram.
* Vista**Solar Diagram Position** (`Vector`): The position of the sun path diagram.
* Vista**Solar Diagram Scale** (`Float`): The scale of the sun path diagram.
* Vista**Wind Rose** (`Bool`): Default is `False`. Shows or hides the wind rose diagram (requires the **EPW File** data property filled, and the Ladybug Python module installed. See [Solar and wind diagrams](#Solar_and_wind_diagrams)).

## Flujo de trabajo típico

Comienza creando un objeto que represente tu terreno. Debe ser una superficie abierta, no un sólido. Por ejemplo, es fácil importar datos de malla, que se pueden convertir en una Forma de Parte desde el menú
**Pieza → Crear Forma desde Malla**. A continuación, cree un objeto Sitio, y establezca su propiedad Datos**Terreno** a la Pieza que acabamos de crear:

![](/images/Arch_site_example_01.jpg)

Cree algunos volúmenes (deben ser sólidos) que representen las áreas que desea que se excaven o rellenen. Haga doble clic en el objeto del Sitio en la Vista en árbol y agregue estos volúmenes a los grupos Adiciones o Restas. Haga clic en Aceptar.

![](/images/Arch_site_example_02.jpg)

La geometría del sitio se volverá a calcular y se volverán a calcular las áreas, el perímetro y las propiedades de volúmenes.

![](/images/Arch_site_example_03.jpg)

## Diagramas solares y eólicos

Si [Ladybug](https://www.ladybug.tools/ladybug.html) está instalado en su sistema, Arch Sites puede mostrar un diagrama solar y/o una rosa de los vientos. Para ello, Datos**Longitud**, Datos**Latitud** y Datos**Declinación** (antes Datos**Desviación Norte**) deben estar correctamente configurados, y Vista**Diagrama Solar** o Vista**Rosa de Viento** configurados a `true`. Respectivamente [introducido en la versión 0.17](/Release_notes_0.17/es "Release notes 0.17/es") y [introducido en la versión 0.19](/Release_notes_0.19/es "Release notes 0.19/es")

### Notes

* The diagram can be scaled, oriented and centered on a specific point in the model. It can also be turned on and off. At this point it is a visual rather than functional feature, and provided for display purposes only.
* If you don't have Ladybug, [pysolar](http://pysolar.org/) (version 0.7 and above) is still supported to generate sun path diagrams, but not wind roses. However, Ladybug is a much more powerful tool that will probably be used more in the future, so we recommend using it instead of pysolar. Ladybug can be installed simply via the [pip](https://github.com/ladybug-tools/ladybug?tab=readme-ov-file#installation) Python package manager.

![](/images/Freecad-solar-diagram.jpg)

## Scripting

## Guión

*Ver también:* [Borrador API](/index.php?title=Arch_API/es&action=edit&redlink=1 "Arch API/es (page does not exist)") y [Fundamentos de Guión FreeCAD](/FreeCAD_Scripting_Basics/es "FreeCAD Scripting Basics/es").

La herramienta Ubicación se puede utilizar en [macros](/Macros/es "Macros/es") y desde la consola de [Python](/Python/es "Python/es") utilizando la siguiente función:

```
Site = makeSite(objectslist=None, baseobj=None, name="Site")

```

* Crea un objeto `Site` a partir de `objectslist`, que es una lista de objetos, o `baseobj`, que es un `Shape` o `Terrain`.

Ejemplo:

```
import FreeCAD, Draft, Arch

p1 = FreeCAD.Vector(0, 0, 0)
p2 = FreeCAD.Vector(2000, 0, 0)
baseline = Draft.makeLine(p1, p2)
Wall = Arch.makeWall(baseline, length=None, width=150, height=2000)
FreeCAD.ActiveDocument.recompute()

Building = Arch.makeBuilding([Wall])
Site = Arch.makeSite([Building])

FreeCAD.ActiveDocument.recompute()
FreeCAD.Gui.ActiveDocument.ActiveView.viewIsometric()

```

### Diagrama solar

Siempre que el módulo `pysolar` esté presente, se puede añadir un diagrama solar al sitio. Establezca los ángulos de longitud, latitud y declinación según corresponda, así como una escala adecuada para el tamaño de su modelo.

At this time, the diagram serves only informative purposes and is there for visual display. For a sun path diagram that enables visualizing shadows and interactively changing dates and times, the best option is to use an external website that allows uploading 3D models. Some of them support .obj and .stl formats for instance, which can be exported to with FreeCAD.

Tenga en cuenta que se requiere Pysolar 0.7 o superior, y esta versión sólo funciona con Python 3.

```
Site.Longitude = -46.38
Site.Latitude = -23.33
Site.Declination = 30
# Uncomment if you want to show the compass
# Site.ViewObject.Compass = True

Site.ViewObject.SolarDiagram = True
Site.ViewObject.SolarDiagramScale = 10000
FreeCAD.ActiveDocument.recompute()

```

### Diagrama solar independiente del ubicación

Se puede crear un diagrama solar con la siguiente función, independientemente de cualquier sitio.

```
Node = makeSolarDiagram(longitude, latitude, scale=1, complete=False)

```

* Crea un diagrama solar como un nodo Pivy, utilizando `longitude` y `latitude`, con un `scale` opcional.
* Si `complete` es `True`, se dibujan los 12 meses, que muestran el [analemma](https://en.wikipedia.org/wiki/Analemma) solar completo.

```
import FreeCADGui, Arch

Node = Arch.makeSolarDiagram(-46.38, -23.33, scale=10000, complete=True)
FreeCAD.Gui.ActiveDocument.ActiveView.getSceneGraph().addChild(Node)

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Arch_Site/es&oldid=1561141>"