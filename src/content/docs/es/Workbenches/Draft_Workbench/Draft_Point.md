---
title: Draft Punto
---
|  |
| --- |
| Draft Point |
| Ubicación en el Menú |
| Boceto → Punto |
| Entornos de trabajo |
| [Boceto](/Draft_Workbench/es "Draft Workbench/es"), [Arquitectura](/Arch_Workbench/es "Arch Workbench/es") |
| Atajo de teclado por defecto |
| P T |
| Introducido en versión |
| - |
| Ver también |
| *Ninguno* |
|  |

## Descripción

La herramienta punto crea un punto simple en el [plano de trabajo](/Draft_SelectPlane/es "Draft SelectPlane/es") actual, útil para servir como referencia para ubicar otros objetos después. Toma el [color](/Draft_Linestyle/es "Draft Linestyle/es") previamente establecido en la pestaña de tareas.

![](/images/Draft_point_example.jpg)

## Utilización

See also: [Draft Tray](/Draft_Tray "Draft Tray"), [Draft Snap](/Draft_Snap "Draft Snap") and [Draft Constrain](/Draft_Constrain "Draft Constrain").

1. Presiona el botón ![](/images/Draft_Point.png) punto, o presiona las teclas P y T
2. Designa un punto en la vista 3D, o escribe unas coordenadas coordenadas

## Opciones

The single character keyboard shortcuts available in the task panel can be changed. See [Draft Preferences](/Draft_Preferences "Draft Preferences"). The shortcuts mentioned here are the default shortcuts (for version 1.0).

* Para introducir coordenadas manualmente, simplemente introduce los números, y presiona ENTER entre cada componente X, Y y Z.
* Presiona ESC o el botón **Cancelar** para evitar el comando actual.

## Notes

* Use ![](/images/Draft_Snap_Endpoint.svg) [Draft Snap Endpoint](/Draft_Snap_Endpoint "Draft Snap Endpoint") to snap to Draft points.

## Propiedades

See also: [Property editor](/Property_editor "Property editor").

A Draft Point object is derived from a [Part Feature](/Part_Feature "Part Feature") object and inherits all its properties. It also has the following additional properties:

### Data

Draft

* Datos**X**: La coordenada X del punto
* Datos**Y**: La coordenada Y del punto
* Datos**Z**: La coordenada Z del punto

### View

Draft

* Vista**Pattern** (`Enumeration`): not used.
* Vista**Pattern Size** (`Float`): not used.

## Scripting

## Archivos de guión

La herramienta punto se puede utilizar en [macros](/Macros/es "Macros/es") y desde la consola Python utilizando la siguiente función:

```
point = make_point(X=0, Y=0, Z=0, color=None, name="Point", point_size=5)
point = make_point(point, Y=0, Z=0, color=None, name="Point", point_size=5)

```

* crea un punto en las coordenadas indicadas. Si no se indican las coordenadas X, Y y Z, el punto se creará en el origen de coordenadas (0,0,0). Devuelve el objeto recién creado.

Example:

```
import FreeCAD as App
import Draft

doc = App.newDocument()

point1 = Draft.make_point(1600, 1400, 0)

p2 = App.Vector(-3200, 1800, 0)
point2 = Draft.make_point(p2, color=(0.5, 0.3, 0.6), point_size=10)

doc.recompute()

```

Example:

This code creates `N` random points within a square of side `2L`. It makes a loop creating `N` points, that may appear anywhere from `-L` to `+L` on both X and Y. It also chooses a random color and size for each point. Change `N` to change the number of points, and change `L` to change the area covered by the points.

```
import random
import FreeCAD as App
import Draft

doc = App.newDocument()

L = 1000
centered = App.Placement(App.Vector(-L, -L, 0), App.Rotation())
rectangle = Draft.make_rectangle(2*L, 2*L, placement=centered)

N = 10
for i in range(N):
    x = 2*L*random.random() - L
    y = 2*L*random.random() - L
    z = 0
    r = random.random()
    g = random.random()
    b = random.random()
    size = 15*random.random() + 5
    Draft.make_point(x, y, z, color=(r, g, b), point_size=size)

doc.recompute()

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Draft_Point/es&oldid=1513458>"