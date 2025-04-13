---
title: Draft Equidistancia
---
|  |
| --- |
| Draft Offset |
| Ubicación en el Menú |
| Croquis → Equidistancia |
| Entornos de trabajo |
| [Croquis](/Draft_Workbench/es "Draft Workbench/es"), [Arquitectura](/Arch_Workbench/es "Arch Workbench/es") |
| Atajo de teclado por defecto |
| O S |
| Introducido en versión |
| - |
| Ver también |
| [Part 2D Offset](/index.php?title=Part_Offset2D/es&action=edit&redlink=1 "Part Offset2D/es (page does not exist)") |
|  |

## Descripción

La herramienta Equidistancia crea una equidistacia de los objetos seleccionados a una distancia dada sobre el [plano de trabajo](/Draft_SelectPlane/es "Draft SelectPlane/es") actual. Si no se han seleccionado objetos, te invitará a seleccionar uno. Simplemente te pregunta por un punto, dando la distancia de la equidistancia de los objetos seleccionados.

![](/images/Draft_Offset_example.jpg)

Offsetting a Draft Wire

## Utilización

See also: [Draft Snap](/Draft_Snap "Draft Snap") and [Draft Constrain](/Draft_Constrain "Draft Constrain").

1. Selecciona los objetos a los que quieras crear una equidistancia
2. Presiona el botón ![](/images/Draft_Offset.png) Equidistancia, o presiona las teclas O y S
3. Designa un punto en la vista 3D, o escribe una distancia

## Opciones

The single character keyboard shortcuts available in the task panel can be changed. See [Draft Preferences](/Draft_Preferences "Draft Preferences"). The shortcuts mentioned here are the default shortcuts (for version 1.0).

* Presiona T o selecciona la casilla para activar/desactivar el botón **Continuar**. Si el modo continuar está activado, la herramienta equidistancia se reiniciará al terminar permitiendo hacer otra equidistancia o copiar objetos de nuevo sin necesidad de volver a presionar el botón de equidistancia.
* Presionando ALT o C o seleccionando el botón **Copiar** se creará una copia de los objetos, en lugar de moverlos. Si mantienes presionada la tecla ALT después de seleccionar el segundo punto, podrás hacer más copias, hasta que liberes la tecla ALT.
* Presiona CTRL mientras dibujas para forzar el [ajuste](/Draft_Snap/es "Draft Snap/es") de tu punto a la posición de ajuste más cercana, independientemente de la distancia.
* Presionando SHIFT se [restringirá](/Draft_Constrain/es "Draft Constrain/es") al segmento actual en lugar de seleccionar el más cercano.
* Presiona ESC o el botón **Cancelar** para abortar el comando actual.

## Notes

* To create an offset version of a [Draft BSpline](/Draft_BSpline "Draft BSpline") its points are offset individually, and from the new points a new spline is calculated. This new spline is not parallel to the original spline. For an exact parallel offset of a [Draft BSpline](/Draft_BSpline "Draft BSpline") the [Part Offset2D](/Part_Offset2D "Part Offset2D") command should be used.
* The Draft Offset command cannot handle [Draft BezCurves](/Draft_BezCurve "Draft BezCurve"). Use the [Part Offset2D](/Part_Offset2D "Part Offset2D") command instead.

## Scripting

## Programación

La herramienta Equidistancia se puede utilizar en [macros](/Macros/es "Macros/es") y desde la consola de Python utilizando la siguiente función:

```
offset_obj = offset(obj, delta, copy=False, bind=False, sym=False, occ=False)

```

* Crea una equidistancia del contorno dado aplicando el vector indicado a su primer vértice.
* Si copymode es True, se crea otro objeto, en otro caso es el mismo objeto el que se equidistancia. Si bind es True, y el contorno dado está abierto, el original y el contorno equidistante estarán enlazados por sus puntos finales, creando una cara.
* Si sym es True, la equidistancia se crea hacia ambos lados, siendo el ancho total la longitud del vector dado.
* Devuelve el objeto equidistante (o su copia si copymode es True).

Ejemplo:

```
import FreeCAD as App
import Draft

doc = App.newDocument()

p1 = App.Vector(0, 0, 0)
p2 = App.Vector(1500, 2000, 0)
p3 = App.Vector(4000, 0, 0)

wire = Draft.make_wire([p1, p2, p3])
doc.recompute()

vector = App.Vector(-200, 150, 0)
offset1 = Draft.offset(wire, vector, copy=True, bind=True, sym=True)
offset2 = Draft.offset(wire, 3*vector, copy=True)
offset3 = Draft.offset(wire, 6*vector, copy=True)
offset4 = Draft.offset(wire, 9*vector, copy=True)
offset5 = Draft.offset(wire, 1.5*vector, copy=True, occ=True)

doc.recompute()

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Draft_Offset/es&oldid=1473151>"