---
title: Draft Polygon
---
|  |
| --- |
| Draft Polygon |
| Ubicación en el Menú |
| Croquis → Polígono |
| Entornos de trabajo |
| [Croquis](/Draft_Workbench/es "Draft Workbench/es"), [Arquitectura](/Arch_Workbench/es "Arch Workbench/es") |
| Atajo de teclado por defecto |
| P G |
| Introducido en versión |
| - |
| Ver también |
| *Ninguno* |
|  |

## Description

## Descripción

La herramienta polígono crea un polígono regular designando dos puntos, el centro y un segundo punto definiendo un radio. Toma el [espesor de línea y color](/Draft_Linestyle/es "Draft Linestyle/es") previamente establecidos en la pestaña de tareas.

A Draft Polygon can be switched from inscribed to circumscribed by changing its Datos**Draw Mode** property. The corners of a Draft Polygon can be filleted (rounded) or chamfered by changing its Datos**Fillet Radius** or Datos**Chamfer Size** respectively.

![](/images/Draft_polygon_example.jpg)

![](/images/Draft_polygon_example.jpg)

## Usage

See also: [Draft Tray](/Draft_Tray "Draft Tray"), [Draft Snap](/Draft_Snap "Draft Snap") and [Draft Constrain](/Draft_Constrain "Draft Constrain").

El punto puede indicarse con el ratón en una vista 3D o introduciendo coordenadas desde el teclado.

## Utilización

1. Presiona el botón ![](/images/Draft_Polygon.png) Polígono, o presiona las teclas P y G
2. Designa un primer punto en la vista 3D, o escribe unas coordenadas para indicar el centro
3. Ajusta el número deseado de dados en el letrero de diálogo de opciones,
4. Designa otro punto en la vista 3D, o escribe un valor de radio para definir el radio del polígono. El polígono será también una cara, aunque se muestre en modo alámbrico.

## Options

The single character keyboard shortcuts available in the task panel can be changed. See [Draft Preferences](/Draft_Preferences "Draft Preferences"). The shortcuts mentioned here are the default shortcuts (for version 1.0).

## Opciones

* Paras introducir coordenadas manualmente, simplemente introduce los números y presiona ENTER entre cada componente X, Y y Z.
* Presiona T o selecciona la casilla para activar/desactivar el botón **Continuar**. Si el modo continuar está activado, la herramienta polígono se reiniciará después de terminar permitiendo que dibujes otro sin presionar el botón de polígono de nuevo.
* Presiona CTRL mientras dibujas para forzar el [ajuste](/Draft_Snap/es "Draft Snap/es") de tu punto a la ubicación de ajuste más cercana, independientemente de la distancia.
* Presiona SHIFT mientras dibujas para [restringir](/Draft_Constrain/es "Draft Constrain/es") tu siguiente punto horizontal o verticalmente en relación al último punto indicado.
* Presiona I o el botón **Relleno** para que el polígono se muestre como una cara. Esto simplemente establece las propiedades de vista del rectángulo como "líneas planas" o "alámbricas", de modo que se pueda cambiar después de forma sencilla.
* Presiona ESC o el botón **Cancelar** para abortar el comando actual.
* Los polígonos, cuando se encuentran en el modo de visualización "Líneas planas", pueden mostrar un patrón de sombreado, estableciendo su propiedad "Patrón" a continuación.

## Notes

* A Draft Polygon can be edited with the [Draft Edit](/Draft_Edit "Draft Edit") command.

## Preferences

See also: [Preferences Editor](/Preferences_Editor "Preferences Editor") and [Draft Preferences](/Draft_Preferences "Draft Preferences").

* If the **Edit → Preferences... → Draft → General → Create Part primitives if possible** option is checked, the command will create a [Part RegularPolygon](/Part_RegularPolygon "Part RegularPolygon") instead of a Draft Polygon.

## Propiedades

* Datos**Radius**: El radio de la circunferencia de definición
* Datos**Draw Mode**: Especifica si el polígono es inscrito o circunscrito a la circunferencia
* Datos **Chaflán tamaño**: Especifica el tamaño de las esquinas achaflanadas
* Datos**Faces Number**: El número de lados del polígono
* Datos**Fillet Radius**: Especifica el radio de curvatura a dar a los vértices del rectángulo
* Datos **Make Face**: llena el polígono con una cara

 \* Vista **Pattern**: especifica un patrón de sombreado para rellenar el cable con
 \* Vista **Pattern Size**: especifica el tamaño del patrón de sombreado

See also: [Property editor](/Property_editor "Property editor").

A Draft Polygon object is derived from a [Part Part2DObject](/Part_Part2DObject "Part Part2DObject") and inherits all its properties. It also has the following additional properties:

### Data

Draft

* Datos**Area** (`Area`): (read-only) specifies the area of the face of the polygon. The value will be `0.0` if Datos**Make Face** if `false`.
* Datos**Chamfer Size** (`Length`): specifies the length of the chamfers at the corners of the polygon.
* Datos**Draw Mode** (`Enumeration`): specifies if the polygon is `inscribed` in a circle or `circumscribed` around a circle.
* Datos**Faces Number** (`Integer`): specifies the number of sides of the polygon.
* Datos**Fillet Radius** (`Length`): specifies the radius of the fillets at the corners of the polygon.
* Datos**Make Face** (`Bool`): specifies if the polygon makes a face or not. If it is `true` a face is created, otherwise only the perimeter is considered part of the object.
* Datos**Radius** (`Length`): specifies the radius of the circle that defines the polygon.

### View

Draft

* Vista**Pattern** (`Enumeration`): specifies the [Draft Pattern](/Draft_Pattern "Draft Pattern") with which to fill the face of the polygon. This property only works if Datos**Make Face** is `true` and if Vista**Display Mode** is `Flat Lines`.
* Vista**Pattern Size** (`Float`): specifies the size of the [Draft Pattern](/Draft_Pattern "Draft Pattern").

## Scripting

## Archivos de guión

La herramienta polígono puede utilizarse en [macros](/Macros/es "Macros/es") y desde la consola de Python utilizando la siguiente función:

To create a Draft Polygon use the `make_polygon` method ([introduced in 0.19](/Release_notes_0.19 "Release notes 0.19")) of the Draft module. This method replaces the deprecated `makePolygon` method.

```
polygon = make_polygon(nfaces, radius=1, inscribed=True, placement=None, face=None, support=None)

```

* Crea un objeto polígono con el número de caras y el radio dados.
* Siinscribed es False, el polígono es circunscrito a la circunferencia con el radio dado, en otro caso es inscrito.
* Si face es True, la forma resultante se muestra como una cara, en otro caso como una estructura alámbrica.
* Devuelve el objeto recién creado.

Ejemplo:

```
import FreeCAD as App
import Draft

doc = App.newDocument()

polygon1 = Draft.make_polygon(4, radius=500)
polygon2 = Draft.make_polygon(5, radius=750)

zaxis = App.Vector(0, 0, 1)
p3 = App.Vector(1000, 1000, 0)
place3 = App.Placement(p3, App.Rotation(zaxis, 90))

Polygon3 = Draft.make_polygon(6, radius=1450, placement=place3)

doc.recompute()

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Draft_Polygon/es&oldid=1472970>"