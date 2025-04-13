---
title: Draft Wire
---
|  |
| --- |
| Draft Wire |
| Ubicación en el Menú |
| Croquis -> Polilínea |
| Entornos de trabajo |
| [Croquis](/Draft_Workbench/es "Draft Workbench/es"), [Arquitectura](/Arch_Workbench/es "Arch Workbench/es") |
| Atajo de teclado por defecto |
| P L |
| Introducido en versión |
| 0.7 |
| Ver también |
| [Línea Boceto](/Draft_Line/es "Draft Line/es"), [BSpline Boceto](/Draft_BSpline/es "Draft BSpline/es") |
|  |

## Description

#### Descripción

La herramienta Contorno crea polilíneas (secuencias de líneas formadas por varios segmentos) en el [plano de trabajo](/Draft_SelectPlane/es "Draft SelectPlane/es") actual. Toma el [Espesor de línea y color](/Draft_Linestyle/es "Draft Linestyle/es") previamente definidos en la pestaña de tareas. La herramienta Contorno se comporta como la herramienta [Línea](/Draft_Line/es "Draft Line/es"), con la excepción de que no termina tras indicar dos puntos.

The corners of a Draft Wire can be filleted (rounded) or chamfered by changing its Datos**Fillet Radius** or Datos**Chamfer Size** respectively. It is also possible to subdivide the edges of a Draft Wire by changing its Datos**Subdivisions** property.

![](/images/Draft_Polyline_example.jpg)

![](/images/Draft_Polyline_example.jpg)

## Create

### Usage

See also: [Draft Tray](/Draft_Tray "Draft Tray"), [Draft Snap](/Draft_Snap "Draft Snap") and [Draft Constrain](/Draft_Constrain "Draft Constrain").

#### Utilización

1. Presiona el botón ![](/images/Draft_Wire.png) Contorno, o presiona las teclas W y I
2. Selecciona un primer punto en la vista 3D, o escribe unas coordenadas
3. Selecciona puntos adicionales en la vista 3D, o escribe coordenadas
4. Presiona F o C, o haz doble clic en el último punto, o selecciona el primer punto para terminar o cerrar el contorno. Si el contorno es cerrado, también será una cara, aunque su apariencia sea alámbrica.

### Options

The single character keyboard shortcuts available in the task panel can be changed. See [Draft Preferences](/Draft_Preferences "Draft Preferences"). The shortcuts mentioned here are the default shortcuts (for version 1.0).

## Opciones

* Si se seleccionan  [Draft Lineas](/Draft_Line/es "Draft Line/es") conectadas al presionar el botón **Draft Wire**, se convertirán en un Wire y el comando terminara. [introduced in 0.17](/Release_notes_0.17 "Release notes 0.17")
* Presiona F o el botón ![](/images/Draft_FinishLine.png) **Terminar** para finalizar el contorno, dejándolo abierto
* Presiona C o el botón ![](/images/Draft_CloseLine.png) **Cerrar** o selecciona el primer punto para finalizar el contorno, pero haciendo que se cierre añadiendo un último segmento entre el último punto y el primero.
* Presiona X, Y o Z después de un punto para restringir el siguiente punto con respecto al eje dado.
* Para introducir coordenadas manualmente, simplemente introduce los números, presiona ENTER entre cada componente X, Y y Z.
* Presiona R o selecciona la casilla para activar / desactivar el modo **Relativo**. Si está activado el modo relativo, las coordenadas del siguiente punto son relativas al anterior. En caso contrario, son absolutas, desde el origen de coordenadas (0,0,0).
* Presiona T o selecciona la casilla para activar / desactivar el modo **Continuo**. Si está activado el modo continuo, la herramienta Contorno se iniciará después de que termines o cierres el contorno actual, permitiendo que dibujes otro contorno sin necesidad de pulsar el botón de Contorno otra vez.
* Presiona CTRL mientras dibujas para forzar el [ajuste](/Draft_Snap/es "Draft Snap/es") del punto a la ubicación de ajuste más cercana, independientemente de la distancia.
* Presiona SHIFT mientras dibujas para [restringir](/Draft_Constrain/es "Draft Constrain/es") tu siguiente punto horizontal o verticalmente en relación al último punto indicado.
* Presiona W o el botón ![](/images/Draft_Wipe.png) **Contorno** para eliminar el segmento existente y comenzar el contorno desde el último punto.
* Presiona CTRL+Z o el botón ![](/images/Draft_UndoLine.png) **Deshacer** para deshacer el último punto.
* Presiona I o el botón **Relleno** para que el Wire se muestre como una cara si esta cerrada.
* Presiona ESC o el botón **Cancelar** para abortar el comando Línea actual.
* Los Wires cerrados, cuando están en el modo de visualización "Líneas planas", pueden mostrar un patrón de sombreado, configurando a continuación la propiedad "Patrón".

## Join

### Usage

1. The end points of the [Draft Lines](/Draft_Line "Draft Line") and/or Draft Wires to be joined must be exactly coincident. If required first adjust points to ensure that this is the case.
2. Select two or more [Draft Lines](/Draft_Line "Draft Line") and/or Draft Wires.
3. There are several ways to invoke the command:
   * Press the ![](/images/Draft_Wire.svg) [Draft Wire](/Draft_Wire "Draft Wire") button.
   * Select the **Drafting → ![](/images/Draft_Wire.svg) Polyline** option from the menu.
   * Use the keyboard shortcut: P then L.

## Notes

* A Draft Wire can be edited with the [Draft Edit](/Draft_Edit "Draft Edit") command.
* A Draft Wire can be converted to a [Draft BSpline](/Draft_BSpline "Draft BSpline") with the [Draft WireToBSpline](/Draft_WireToBSpline "Draft WireToBSpline") command.
* [Draft Lines](/Draft_Line "Draft Line") and Draft Wires can also be joined with the [Draft Join](/Draft_Join "Draft Join") command or the [Draft Upgrade](/Draft_Upgrade "Draft Upgrade") command.

## Properties

See also: [Property editor](/Property_editor "Property editor").

A Draft Wire object is derived from a [Part Part2DObject](/Part_Part2DObject "Part Part2DObject") and inherits all its properties. It also has the following additional properties:

### Data

Draft

* Datos**Area** (`Area`): (read-only) specifies the area of the face of the wire. The value will be `0.0` if Datos**Make Face** is `false` or the face cannot be created.
* Datos**Base** (`Link`)
* Datos**Chamfer Size** (`Length`): specifies the length of the chamfers at the corners of the wire.
* Datos**Closed** (`Bool`): specifies if the wire is closed or not. If the wire is initially open this value is `false`, setting it to `true` will draw a line segment to close the wire. If the wire is initially closed this value is `true`, setting it to `false` will remove the last line segment and make the wire open.
* Datos**End** (`VectorDistance`): specifies the end point of the wire.
* Datos**Fillet Radius** (`Length`): specifies the radius of the fillets at the corners of the wire.
* Datos**Length** (`Length`): (read-only) specifies the total length of the wire.
* Datos**Make Face** (`Bool`): specifies if the wire makes a face or not. If it is `true` a face is created, otherwise only the edges are considered part of the object. This property only works if Datos**Closed** is `true` and if the wire does not self-intersect.
* Datos**Points** (`VectorList`): specifies the points of the wire in its local coordinate system.
* Datos**Start** (`VectorDistance`): specifies the start point of the wire.
* Datos**Subdivisions** (`Integer`): specifies the number of subdivisions for each edge of the wire. If it is `1` each edge will be divided into `2` equal segments. Subdivisions are applied before chamfers and fillets.
* Datos**Tool** (`Link`)

### View

Draft

* Vista**Arrow Size** (`Length`): specifies the size of the symbol displayed at the end of the wire.
* Vista**Arrow Type** (`Enumeration`): specifies the type of symbol displayed at the end of the wire, which can be `Dot`, `Circle`, `Arrow`, `Tick` or `Tick-2`.
* Vista**End Arrow** (`Bool`): specifies whether to show a symbol at the end of the wire, so it can be used as an annotation line.
* Vista**Pattern** (`Enumeration`): specifies the [Draft Pattern](/Draft_Pattern "Draft Pattern") with which to fill the face of the closed wire. This property only works if Datos**Make Face** is `true` and if Vista**Display Mode** is `Flat Lines`.
* Vista**Pattern Size** (`Float`): specifies the size of the [Draft Pattern](/Draft_Pattern "Draft Pattern").

## Programación

La herramienta Contorno se puede utilizar en [macros](/Macros/es "Macros/es") y desde la consola de [Python](/Python "Python") utilizando la siguiente función:

See also: [Autogenerated API documentation](https://freecad.github.io/SourceDoc/) and [FreeCAD Scripting Basics](/FreeCAD_Scripting_Basics "FreeCAD Scripting Basics").

To create a Draft Wire use the `make_wire` method ([introduced in 0.19](/Release_notes_0.19 "Release notes 0.19")) of the Draft module. This method replaces the deprecated `makeWire` method.

```
wire = make_wire(pointslist, closed=False, placement=None, face=None, support=None)
wire = make_wire(Part.Wire, closed=False, placement=None, face=None, support=None)

```

* Crea un objeto Contorno a partir de la lista de vectores dada o a partir del contorno dado.
  + Si cerrado es True o si el primer y último puntos son idénticos, el contorno es cerrado.
  + Si el modo de cara es True (y el contorno está cerrado), el contorno se mostrará relleno.
* Se utilizaran el espesor de línea y color actuales.
* Devuelve el objeto recién creado.

Ejemplo:

```
import FreeCAD as App
import Draft

doc = App.newDocument()

p1 = App.Vector(0, 0, 0)
p2 = App.Vector(1000, 1000, 0)
p3 = App.Vector(2000, 0, 0)

wire1 = Draft.make_wire([p1, p2, p3], closed=True)
wire2 = Draft.make_wire([p1, 2*p3, 1.3*p2], closed=True)
wire3 = Draft.make_wire([1.3*p3, p1, -1.7*p2], closed=True)

doc.recompute()

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Draft_Wire/es&oldid=1472865>"