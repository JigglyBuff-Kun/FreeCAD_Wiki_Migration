---
title: Arch Escaleras
---
:::caution
THIS COMMAND IS PART OF THE INTEGRATEDBIM WORKBENCHIN V1.0This page has been updated for that version.
:::

|  |
| --- |
| Arch Stairs |
| Ubicación en el Menú |
| Arch → Stairs |
| Entornos de trabajo |
| [Arch](/Arch_Workbench/es "Arch Workbench/es") |
| Atajo de teclado por defecto |
| S R |
| Introducido en versión |
| - |
| Ver también |
| *Ninguno* |
|  |

## Description

## Descripción

La herramienta de escaleras le permite construir automáticamente varios tipos de escaleras. Por el momento, solo se admiten escaleras rectas (con o sin un rellano central). Las escaleras se pueden construir desde cero, o desde una recta [line](/Draft_Line "Draft Line"), en cuyo caso las escaleras siguen la línea. Si la línea no es horizontal, pero tiene una inclinación vertical, las escaleras también seguirán su pendiente.

Consulte la entrada [Stairs en wikipedia](http://en.wikipedia.org/wiki/Stairs) para obtener una definición de los diferentes términos utilizados para describir las partes de las escaleras.

![](/images/Arch_Stairs_example.jpg)

*En la imagen de arriba, se crearon dos escaleras, una con una estructura masiva y un rellano, y otra con un único larguero.*

## Opciones

## Usage

## Utilización

Presiona el botón ![](/images/Arch_Stairs.png) Escaleras, o pulsa las teclas S, R

1. Ajuste las propiedades deseadas. Algunas partes de las escaleras, como la estructura, pueden no aparecer inmediatamente, ya que alguna de las propiedades lo hace imposible, como un grosor de estructura de 0.

![](/images/Stairs_and_Landing_02.png)

![](/images/Stairs_and_Landing_01.png)

![](/images/Arch_Stairs_Complex_Example.png)

Complex stairs based on a selection of lines and wired as shown on the left.  
In red the wires used for the landings at Z=1500mm, Z=3000mm and Z=4500mm.  
In black the lines connecting them used for the flights.

## Propiedades

An Arch Stairs object shares the common properties and behaviors of all [Arch Components](/Arch_Component "Arch Component").

### Data

Segment and Parts

* Datos**Abs Top** (`Vector`): (read-only) The absolute top level the stairs lead to.
* Datos**Last Segment** (`Link`): Last segment (flight or landing) of an Arch Stairs connecting to this segment. The start level of the stairs will be the end level of this last segment.
* Datos**Outline Left** (`VectorList`): The left outline of the stairs (read-only).
* Datos**Outline Left All** (`VectorList`): The left outline of all segments of the stairs (read-only).
* Datos**Outline Right** (`VectorList`): The right outline of the stairs (read-only).
* Datos**Outline Right All** (`VectorList`): The right outline of all segments of the stairs (read-only).
* Datos**Railing Height Left** (`Length`): Height of the left railing of the stairs or landing.
* Datos**Railing Height Right** (`Length`): Height of the right railing of the stairs or landing.
* Datos**Railing Left** (`LinkHidden`): The left railing object. [introduced in 0.20](/Release_notes_0.20 "Release notes 0.20"): Property type updated from `String` to `LinkHidden`.
* Datos**Railing Offset Left** (`Length`): Offset of the left railing from the edge of the stairs or landing.
* Datos**Railing Offset Right** (`Length`): Offset of the right railing from the edge of the stairs or landing.
* Datos**Railing Right** (`LinkHidden`): The right railing object. [introduced in 0.20](/Release_notes_0.20 "Release notes 0.20"): Property type updated from `String` to `LinkHidden`.

Stairs

* DATOS**Align**: La alineación de estas escaleras en su línea base, si corresponde.
* DATOS**Base**: La línea base de estas escaleras, si hay alguna.
* DATOS**Height**: La altura total de estas escaleras, si no se basa en una línea de base, o la línea de base es horizontal.
* DATOS**Length**: La longitud total de estas escaleras si no se define una línea de base.
* DATOS**Width**: El ancho de estas escaleras.

Escalones

* DATOS**Nosing**: El tamaño de la nariz.
* DATOS**Number of Steps**: La cantidad de escalones (peralte) en estas escaleras.
* DATOS**Riser Height**: La altura de los peraltes
* DATOS**Tread Depth**: La profundidad de las huellas.
* DATOS**Tread Thickness**: El grosor de las huellas.

Estructura

* DATOS**Landings**: El tipo de rellanos.
* DATOS**Stringer Offset**: El desplazamiento entre el borde de las escaleras y la estructura.
* DATOS**Stringer Width**: El ancho de los largueros.
* DATOS**Structure**: El tipo de estructura de estas escaleras.
* DATOS**Structure Thickness**: El espesor de la estructura.
* DATOS**Winders**: Tipo de escalones no rectangulares

## Limitations

## Limitaciones

* No disponible antes de la versión 0.14 de FreeCAD
* Solo escaleras rectas están disponibles en este momento
* Ver la entrada [foro](http://forum.freecadweb.org/viewtopic.php?f=23&t=6534) para las escaleras en círculo.
* Ver el [anuncio del foro](http://forum.freecadweb.org/viewtopic.php?f=9&t=4564).

## Scripting

## Programación

Las escaleras se pueden crear a partir de scripts de Python y [macros](/Macros/es "Macros/es") utilizando la siguiente función:

```
Stairs = makeStairs(baseobj=None, length=None, width=None, height=None, steps=None, name="Stairs")

```

* Crea un objeto de escaleras con los atributos dados.
* Devuelve el nuevo objeto de escaleras.

Ejemplo:

```
import Arch

Stairs = Arch.makeStairs(length=5000, width=1200, height=3000, steps=14)

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Arch_Stairs/es&oldid=1539749>"