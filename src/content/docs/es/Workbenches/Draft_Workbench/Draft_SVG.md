---
title: Draft SVG
---
## Description

Draft SVG is a software module used by the ![](/images/Std_Open.svg) [Std Open](/Std_Open "Std Open"), ![](/images/Std_Import.svg) [Std Import](/Std_Import "Std Import") and ![](/images/Std_Export.svg) [Std Export](/Std_Export "Std Export") commands to handle the [SVG](/SVG "SVG") file format.

![](/images/Screenshot_inkscape.jpg)

Inkscape drawing exported to SVG, which is subsequently opened in FreeCAD

### Apertura

Esta función importa archivos SVG como objetos 2D con los que se puede trabajar, en contra al modulo de dibujo que importa archivos SVG como hojas de dibujo.
Los siguientes objetos SVG son importados de momento:

* Objetos PATH
* Objetos LINE
* Objetos RECT
* Objetos CIRCLE
* Objetos ELLIPSE
* Objetos POLYGON
* Objetos POLYLINE

The following SVG objects can be imported:

* PATH objects
* LINE objects
* RECT objects
* CIRCLE objects
* ELLIPSE objects
* POLYGON objects
* POLYLINE objects

### Limitations

FreeCAD will not import path objects that have only one point ([forum discussion](https://forum.freecadweb.org/viewtopic.php?f=3&t=43856)).

### Exportación

Los siguientes objetos se pueden exportar a archivos SVG:

* Líneas y wires (polilíneas)
* Arcos y circunferencias
* Caras
* Textos
* Cotas

The following FreeCAD objects can be exported:

* Lines and wires (polylines)
* Arcs and circles
* Faces
* Texts
* Dimensions

Recuerda que SVG es un formato 2D, de modo que toda la información de Z será desagregada (todos los objetos se aplanarán).

SVG is a 2D format, so all Z information will be disregarded (all objects will be flattened).

### Manejando unidades

Cuando se exporta, una unidad de usuario por ejemplo igual a un milímetro.

When exporting, a User Unit (px) equals one millimeter.

Cuando se importa, los atributos de ancho, altura y viewBox se respetan. Todos los elementos se escalan a su tamaño en milímetros, que es la unidad interna de FreeCAD. Si el SVG no contiene información de su tamaño físico, se asume que tiene una resolución de 90 DPI.
Utilizar unidades absolutas en los atributos dentro del SVG no debería permitirse. Las unidades relativas como em,ex y % no son soportadas actualmente.

El editor de SVG Inkscape actualmente trabaja sólo con documentos con 90 DPI. Sin importar que unidad se seleccione en Inkscape. Todas las salidas tienen que considerar convertirse a 90 DPI y **redondeadas** a 6 decimales. Como FreeCAD (y el estándar de SVG) es agnóstico con la precisión de los redondeos realizados en Inkscape dichos valores no serán redondeados en la entrada. Y permanecerán otros valores en milímetros.

Si necesitas que el SVG importado no se redondee, trabaja en unidades de usuario (px) en Inkscape. Se puede realizar un escalado después de importar a FreeCAD o cambiando los atributos de ancho, alto y viewBox.

### Preferencias

Los siguientes parámetros se pueden especificar en la pestaña [Preferencias de Croquizado](/Draft_Preferences/es "Draft Preferences/es") (menú Editar -> Preferencias -> Croquis):

* Importar/exportar -> Importar estilo: Esto permite seleccionar el modo que los objetos del archivo SVG se dibujarán en FreeCAD. Puedes escoger entre:
  + Ninguno: Este es el método más rápido, no se realiza ninguna conversión, todos los objetos serán negros con un espesor de línea de 2px (por defecto en FreeCAD)
  + Utilizar color y espesor de línea por defecto: Todos los objetos importados cogerán el color y espesor de línea actuales de la barra de comandos de Croquis
  + Color original y espesor de línea: Los objetos mantendrán el color y espesor de línea (si estaba especificado) que tenían en el archivo SVG
* Importar/exportar -> Exportar estilo:
  + Traducidos: Todos los elementos están traducidos de modo que sus coordenadas son positivas. Esto debería ayudar en la visualización e impresión. El sistema de coordenadas de salida no es consistente entre elementos exportados individualmente.
  + Sin refinar: La posición de todos los elementos preservada. Está pensado para el uso de CAM por ejemplo en PyCAM. Las capas o rodajas exportadas individualmente coincidirán.
* Ajustes generales -> Nivel de precisión interno:
  + Este valor se utiliza para comprobar si un segmento de curva de bezier tiene que considerarse como una línea recta. Si importas caminos detallados, como texto renderizado, podrías querer incrementar este valor por encima de 6.

See [Import Export Preferences](/Import_Export_Preferences "Import Export Preferences").

## Scripting

See also: [Autogenerated API documentation](https://freecad.github.io/SourceDoc/) and [FreeCAD Scripting Basics](/FreeCAD_Scripting_Basics "FreeCAD Scripting Basics").

To export objects to SVG use the `export` method of the importSVG module.

```
importSVG.export(exportList, filename)

```

* For the Windows OS: use a / (forward slash) as the path separator in `filename`.

Example:

```
import FreeCAD as App
import Draft
import importSVG

doc = App.newDocument()

polygon1 = Draft.make_polygon(3, radius=500)
polygon2 = Draft.make_polygon(5, radius=1500)

doc.recompute()

objects = [polygon1, polygon2]
importSVG.export(objects, "/home/user/Pictures/myfile.svg")

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Draft_SVG/es&oldid=1422563>"