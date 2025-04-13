---
title: Draft Rectangle
---
|  |
| --- |
| Draft Rectangle |
| Ubicación en el Menú |
| Croquis → Rectángulo |
| Entornos de trabajo |
| [Croquis](/Draft_Workbench/es "Draft Workbench/es"), [Arquitectura](/Arch_Workbench/es "Arch Workbench/es") |
| Atajo de teclado por defecto |
| R E |
| Introducido en versión |
| 0.7 |
| Ver también |
| [Cubo](/Part_Box/es "Part Box/es") |
|  |

## Description

## Descripción

Esta herramienta dibuja un Rectángulo indicando dos puntos de su diagonal.

La herramienta rectángulo crea un rectángulo indicando dos puntos de su diagonal. Toma el [espesor de línea y color](/Draft_Linestyle/es "Draft Linestyle/es") previamente definidos en la Barra de herramientas de la bandeja de tiro. Opcionalmente, puede agregar un chaflán de 45 grados o un filete circular a cada esquina del rectángulo, y puede dividir el rectángulo en una serie de filas y / o columnas de igual tamaño.

The corners of a Draft Rectangle can be filleted (rounded) or chamfered by changing its Datos**Fillet Radius** or Datos**Chamfer Size** respectively. It is also possible to subdivide a Draft Rectangle by changing its Datos**Columns** and/or Datos**Rows** property.

![](/images/Draft_Rectangle_example.jpg)

![](/images/Draft_Rectangle_example.jpg)

## Usage

See also: [Draft Tray](/Draft_Tray "Draft Tray"), [Draft Snap](/Draft_Snap "Draft Snap") and [Draft Constrain](/Draft_Constrain "Draft Constrain").

## Utilización

1. Presiona el botón ![](/images/Draft_Rectangle.png) rectángulo, o presiona las teclas R y E
2. Designa un primer punto de la diagonal en la vista 3D, o escribe unas coordenadas
3. Designa el punto apuesto de la diagonal en la vista 3D, o escribe unas coordenadas. El rectángulo también será una cara, incluso aunque se muestre como en modo alámbrico.

## Options

The single character keyboard shortcuts available in the task panel can be changed. See [Draft Preferences](/Draft_Preferences "Draft Preferences"). The shortcuts mentioned here are the default shortcuts (for version 1.0).

## Opciones

* Presiona X, Y o Z después de un punto para restringir el siguiente punto respecto al eje dado.
* Para introducir coordenadas manualmente, simplemente introduce los números, presiona ENTER entre cada componente X, Y y Z.
* Presiona R o selecciona la casilla para activar/desactivar el botón **Relativas**. Si el modo relativas está activado, las coordenadas del siguiente punto son relativas al punto anterior. Si no, son absolutas, desde el origen de coordenadas (0,0,0).
* Presiona T o selecciona la casilla para activar/desactivar el botón **Continuo**. Si el modo continuo está activado, la herramienta rectángulo se reiniciará después de terminar, permitiendo que dibujes otro sin necesidad de presionar el botón de rectángulo de nuevo.
* Presiona CTRL mientras dibujas para forzar el [ajuste](/Draft_Snap/es "Draft Snap/es") de tu punto a la posición de ajuste más cercana, independientemente de la distancia.
* Presiona SHIFT mientras dibujas para [restringir](/Draft_Constrain/es "Draft Constrain/es") tu siguiente punto horizontal o verticalmente en relación al anterior.
* Presiona I o el botón **Relleno** para que el rectángulo se muestre como una cara después de que se ha cerrado. Esto simplemente establece la Vista-->Propiedad del rectángulo como "líneas planas" o "alámbrico", de modo que se puede cambiar después de forma sencilla.
* Presiona ESC o el botón **Cancelar** para abortar la línea de comando actual.
* Los rectángulos, cuando están en modo "Líneas planas", pueden mostrar un patrón de sombreado, al establecer su propiedad "patrón".

## Notes

* A Draft Rectangle can be edited with the [Draft Edit](/Draft_Edit "Draft Edit") command.

## Preferences

See also: [Preferences Editor](/Preferences_Editor "Preferences Editor") and [Draft Preferences](/Draft_Preferences "Draft Preferences").

* If the **Edit → Preferences... → Draft → General → Create Part primitives if possible** option is checked, the command will create a [Part Plane](/Part_Plane "Part Plane") instead of a Draft Rectangle.

## Propiedades

* Datos**Length**: Especifica la longitud del rectángulo
* Datos**Width**: Especifica el ancho del rectángulo
* Datos**Fillet Radius**: Especifica el radio de curvatura a dar a las esquinas del rectángulo
* Datos **Fillet Radius**: especifica el radio del filete de 90 grados en cada esquina del rectángulo

* Datos **Rows**: divide el rectángulo (horizontalmente) en filas de igual tamaño. Todo el rectángulo es 1 fila, por defecto

* Datos **Columns**: divide el rectángulo (verticalmente) en columnas de igual tamaño. Todo el rectángulo es 1 columna, por defecto.

* Datos **Make Face**: llena el rectángulo con una cara
* Vista**Texture Image**: Permite indicar la ruta de una imagen a ser mapeada sobre el rectángulo. Depende de ti dar al rectángulo la misma proporción que a la imagen si quieres evitar distorsiones. Dejándolo en blanco se eliminará la imagen.
* Vista **Pattern**: especifica un patrón de sombreado para rellenar el cable.

  +

* Vista **Pattern Size**: especifica el tamaño del patrón de sombreado

See also: [Property editor](/Property_editor "Property editor").

A Draft Rectangle object is derived from a [Part Part2DObject](/Part_Part2DObject "Part Part2DObject") and inherits all its properties. It also has the following additional properties:

### Data

Draft

* Datos**Area** (`Area`): (read-only) specifies the area of the face of the rectangle. The value will be `0.0` if Datos**Make Face** if `false`.
* Datos**Chamfer Size** (`Length`): specifies the length of the chamfers at the corners of the rectangle.
* Datos**Columns** (`Integer`): specifies the number of equal-sized columns in which the rectangle is divided.
* Datos**Fillet Radius** (`Length`): specifies the radius of the fillets at the corners of the rectangle.
* Datos**Height** (`Distance`): specifies the height of the rectangle.
* Datos**Length** (`Distance`): specifies the length of the rectangle.
* Datos**Make Face** (`Bool`): specifies if the rectangle makes a face or not. If it is `true` a face is created, otherwise only the perimeter is considered part of the object.
* Datos**Rows** (`Integer`): specifies the number of equal-sized rows in which the rectangle is divided.

### View

Draft

* Vista**Pattern** (`Enumeration`): specifies the [Draft Pattern](/Draft_Pattern "Draft Pattern") with which to fill the face of the rectangle. This property only works if Datos**Make Face** is `true` and if Vista**Display Mode** is `Flat Lines`.
* Vista**Pattern Size** (`Float`): specifies the size of the [Draft Pattern](/Draft_Pattern "Draft Pattern").
* Vista**Texture Image** (`File`): specifies the path of the image file to be mapped onto the face of the rectangle. Blanking this property will remove the image. The rectangle should have the same proportions as the image to avoid distortions.

## Scripting

## Archivos de guión

La herramienta rectángulo puede utilizarse en [macros](/Macros/es "Macros/es") y desde la consola de [Python](/Python "Python") utilizando la siguiente función:

To create a Draft Rectangle use the `make_rectangle` method ([introduced in 0.19](/Release_notes_0.19 "Release notes 0.19")) of the Draft module. This method replaces the deprecated `makeRectangle` method.

```
rectangle = make_rectangle(length, height, placement=None, face=None, support=None)

```

* Crea un objeto rectángulo `Rectangle` con longitud `length` en dirección X y altura `height` en dirección Y.
* Si se indica una ubicación, se utiliza.
* Si facemode es False, el rectángulo se mostrará en modo alámbrico, en otro caso como una cara.
* Se utilizarán el espesor de línea y color actuales de Boceto.
* Devuelve el objeto recién creado.

Ejemplo:

```
import FreeCAD as App
import Draft

doc = App.newDocument()

rectangle1 = Draft.make_rectangle(4000, 1000)
rectangle2 = Draft.make_rectangle(1000, 4000)

zaxis = App.Vector(0, 0, 1)
p3 = App.Vector(1000, 1000, 0)
place3 = App.Placement(p3, App.Rotation(zaxis, 45))

rectangle3 = Draft.make_rectangle(3500, 250, placement=place3)

doc.recompute()

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Draft_Rectangle/es&oldid=1472955>"