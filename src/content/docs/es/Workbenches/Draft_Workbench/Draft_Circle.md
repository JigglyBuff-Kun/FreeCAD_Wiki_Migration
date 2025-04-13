---
title: Draft Círculo
---
|  |
| --- |
| Draft Círculo |
| Ubicación en el Menú |
| Boceto → Circunferencia |
| Entornos de trabajo |
| [Croquis](/Draft_Workbench/es "Draft Workbench/es"), [Arquitectura](/Arch_Workbench/es "Arch Workbench/es") |
| Atajo de teclado por defecto |
| C I |
| Introducido en versión |
| 0.7 |
| Ver también |
| [Arco](/Draft_Arc/es "Draft Arc/es") |
|  |

## Description

#### Descripción

La herramienta Circunferencia crea una circunferencia en el [plano de trabajo](/Draft_SelectPlane/es "Draft SelectPlane/es") actual introduciendo dos puntos, el centro y el radio, o seleccionando las tangentes o cualquier combinación de ellas. Toma el [espesor de línea y color](/Draft_Linestyle/es "Draft Linestyle/es") previamente establecido en la pestaña de tareas. Esta herramienta funciona del mismo modo que la herramienta [Arco](/Draft_Arc/es "Draft Arc/es"), excepto que termina después de introducir el radio.

A Draft Circle can be turned into an arc by setting its Datos**First Angle** and Datos**Last Angle** properties to different values.

![](/images/Draft_Circle_example.jpg)

![](/images/Draft_Circle_example.jpg)

## Usage

See also: [Draft Tray](/Draft_Tray "Draft Tray"), [Draft Snap](/Draft_Snap "Draft Snap") and [Draft Constrain](/Draft_Constrain "Draft Constrain").

#### Utilización

1. Presiona el botón ![](/images/Draft_Circle.png) Circunferencia, o presiona las teclas C y I
2. Selecciona un primer punto en la vista 3D, o escribe una coordenadas
3. Selecciona un segundo punto en la vista 3D, o introduce un valor de radio.

## Options

The single character keyboard shortcuts available in the task panel can be changed. See [Draft Preferences](/Draft_Preferences "Draft Preferences"). The shortcuts mentioned here are the default shortcuts (for version 1.0).

## Opciones

* El principal uso de la herramienta circunferencia es indicando dos puntos, el centro y un punto en la circunferencia, definiendo el radio.
* Presionando ALT, puedes indicar una tangencia en lugar del centro o del radio. Puedes por tanto construir varios tipos de circunferencias seleccionando una, dos o tres tangencias.
* Para introducir coordenadas manualmente, simplemente introduce los números y presiona ENTER entre cada componente X, Y y Z.
* Presiona T o pulsa la casilla activar / desactivar el modo **Continuo**. Si está definido el modo continuo, la herramienta Circunferencia se iniciará después de indicar el segundo punto, permitiendo que dibujes otra circunferencia sin presionar el botón de circunferencia de nuevo.
* Presiona CTRL mientras dibujas para forzar el [ajuste](/Draft_Snap/es "Draft Snap/es") de tu punto a la posición de ajuste más cercana, independientemente de la distancia.
* Presiona SHIFT mientras dibujas para [restringir](/Draft_Constrain/es "Draft Constrain/es") tu segundo punto horizontal o verticalmente en relación al primero.
* Presiona I o el botón de **Relleno** para que la circunferencia se muestre como una cara después de que se cierre. Esto simplemente establece Vista -> Propiedad de la circunferencia a "Líneas planas" o "Alámbricas", sde modo que se pueda cambiar fácilmente más adelante.
* Presiona ESC o el botón **Cancelar** para abortar el comando línea actual.
* La circunferencia se puede convertir en un arco después de crearse, estableciendo las propiedades del primer ángulo y último ángulo a valores diferentes.

## Notes

* A Draft Circle can be edited with the [Draft Edit](/Draft_Edit "Draft Edit") command.

## Preferences

See also: [Preferences Editor](/Preferences_Editor "Preferences Editor") and [Draft Preferences](/Draft_Preferences "Draft Preferences").

* If the **Edit → Preferences... → Draft → General → Create Part primitives if possible** option is checked, the command will create a [Part Circle](/Part_Circle "Part Circle") instead of a Draft Circle.

## Properties

See also: [Property editor](/Property_editor "Property editor").

A Draft Circle object is derived from a [Part Part2DObject](/Part_Part2DObject "Part Part2DObject") and inherits all its properties. It also has the following additional properties:

### Data

Draft

* Datos**Area** (`Area`): (read-only) specifies the area of the face of the circle. The value will be `0.0` if Datos**Make Face** if `false` or the face cannot be created.
* Datos**First Angle** (`Angle`): specifies the start angle of the circle, normally `0°`.
* Datos**Last Angle** (`Angle`): specifies the end angle of the circle, normally `0°`.
* Datos**Make Face** (`Bool`): specifies if the circle makes a face or not. If it is `true` a face is created, otherwise only the perimeter is considered part of the object. This property only works if the Datos**First Angle** and Datos**Last Angle** have the same value. Note that `0°` and `360°` are not considered the same.
* Datos**Radius** (`Length`): specifies the radius of the circle.

### View

Draft

* Vista**Pattern** (`Enumeration`): specifies the [Draft Pattern](/Draft_Pattern "Draft Pattern") with which to fill the face of the circle. This property only works if Datos**Make Face** is `true` and if Vista**Display Mode** is `Flat Lines`.
* Vista**Pattern Size** (`Float`): specifies the size of the [Draft Pattern](/Draft_Pattern "Draft Pattern").

## Scripting

## Archivos de guión

La herramienta Circunferencia se puede utilizar en [macros](/Macros/es "Macros/es") y desde la consola utilizando la siguiente función:

To create a Draft Circle use the `make_circle` method ([introduced in 0.19](/Release_notes_0.19 "Release notes 0.19")) of the Draft module. This method replaces the deprecated `makeCircle` method.

```
circle = make_circle(radius, placement=None, face=None, startangle=None, endangle=None, support=None)
circle = make_circle(Part.Edge, placement=None, face=None, startangle=None, endangle=None, support=None)

```

* Crea un objeto circunferencia con el valor de radio dado.
* Si se indica una ubicación, se utiliza. Si el modo de cara es falso, la circunferencia se mostrará como una estructura alámbrica, en otro caso como una cara.
* Si se indican un ángulo de inicio Y un ángulo final (en grados), se utilizarán y el objeto se mostrará como un arco.
* Devuelve el objeto recién creado.

Ejemplo:

```
import FreeCAD as App
import Draft

doc = App.newDocument()

circle1 = Draft.make_circle(200)

zaxis = App.Vector(0, 0, 1)
p2 = App.Vector(1000, 1000, 0)
place2 = App.Placement(p2, App.Rotation(zaxis, 0))
circle2 = Draft.make_circle(500, placement=place2)

p3 = App.Vector(-1000, -1000, 0)
place3 = App.Placement(p3, App.Rotation(zaxis, 0))
circle3 = Draft.make_circle(750, placement=place3)

doc.recompute()

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Draft_Circle/es&oldid=1472925>"