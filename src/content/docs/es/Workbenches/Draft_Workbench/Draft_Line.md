---
title: Borrador Linea
---
|  |
| --- |
| Borrador Linea |
| Ubicación en el Menú |
| Borrador → Línea |
| Entornos de trabajo |
| [Borrador](/Draft_Workbench/es "Draft Workbench/es"), [Arquitectura](/Arch_Workbench/es "Arch Workbench/es") |
| Atajo de teclado por defecto |
| L I |
| Introducido en versión |
| 0.7 |
| Ver también |
| [Borrador Hilo](/Draft_Wire/es "Draft Wire/es"), [Borrador Punto](/Draft_Point/es "Draft Point/es") |
|  |

## Descripción

La herramienta Línea crea una línea recta definida por dos puntos. Utiliza el [Estilo de Línea de Borrador](/Draft_Linestyle/es "Draft Linestyle/es") establecido en la [Bandeja de Borrador](/Draft_Tray/es "Draft Tray/es"). La herramienta Línea se comporta exactamente como la herramienta [Borrador Hilo](/Draft_Wire/es "Draft Wire/es"), excepto que se detiene después de dos puntos.

A Draft Line is in fact a [Draft Wire](/Draft_Wire "Draft Wire") with only two points.

![](/images/Draft_Line_example.jpg)

Línea creada por dos puntos

## Utilización

See also: [Draft Tray](/Draft_Tray "Draft Tray"), [Draft Snap](/Draft_Snap "Draft Snap") and [Draft Constrain](/Draft_Constrain "Draft Constrain").

1. Pulse el ![](/images/Draft_Line.svg) Línea de Borrador, o utilice el botón Borrador → ![](/images/Draft_Line.svg) Línea del menú superior, o utiliza el atajo de teclado: L y luego I.
2. Haga clic en un primer punto en la vista 3D, o escriba una coordenada y pulse el ![](/images/Draft_AddPoint.svg) añadir punto.
3. Haz clic en un segundo punto en la vista 3D, o escribe una coordenada y pulsa el ![](/images/Draft_AddPoint.svg) añadir punto.

## Options

The single character keyboard shortcuts available in the task panel can be changed. See [Draft Preferences](/Draft_Preferences "Draft Preferences"). The shortcuts mentioned here are the default shortcuts (for version 1.0).

## Opciones

* Pulse X, Y o Z después del primer punto para restringir el segundo punto en el eje dado.
* Para introducir las coordenadas manualmente, simplemente introduzca los números y luego pulse Enter entre cada componente X, Y y Z.
  + También puede definir las coordenadas polares del punto dando un valor a "Longitud" y "Ángulo". Haga clic en la casilla de verificación junto a "Ángulo" para restringir el puntero al ángulo especificado.
  + Puede pulsar el ![](/images/Draft_AddPoint.svg) añadir un punto cuando tenga los valores deseados para insertar el punto.
* Pulse R o haga clic en la casilla para activar el modo *relativo*. Si el modo relativo está activado, las coordenadas del segundo punto son relativas al primero; si no, son absolutas, tomadas desde el origen (0,0,0).
* Pulse T o haga clic en la casilla para activar el modo *continuar*. Si el modo de continuar está activado, la herramienta Línea se reiniciará después de dar el segundo punto, lo que le permitirá dibujar otro segmento de línea sin tener que volver a pulsar el botón de la herramienta.
* Mantén pulsado Ctrl mientras dibujas para forzar [snapping](/Draft_Snap "Draft Snap") tu punto a la ubicación de snap más cercana, independientemente de la distancia.
* Mantén pulsado Shift mientras dibujas para [restringir](/Draft_Constrain/es "Draft Constrain/es") tu segundo punto horizontal o verticalmente en relación con el primero.
* Pulse Ctrl+Z o pulse el ![](/images/Draft_UndoLine.svg) Deshacer para deshacer el último punto.
* Pulse Esc o el botón Close para abortar el comando actual.

## Notes

La línea puede editarse haciendo doble clic en el elemento en la vista de árbol, o pulsando el ![](/images/Draft_Edit.svg) [Borrador de edición](/Draft_Edit/es "Draft Edit/es"). A continuación, puede mover los puntos a una nueva posición.

## Preferences

See also: [Preferences Editor](/Preferences_Editor "Preferences Editor") and [Draft Preferences](/Draft_Preferences "Draft Preferences").

* To change the initial focus of the task panel to the **Length** input box: **Edit → Preferences... → Draft → General → Set focus on Length instead of X coordinate**. Note that you must move the pointer in the [3D view](/3D_view "3D view") for the change to take effect.
* If the **Edit → Preferences... → Draft → General → Create Part primitives if possible** option is checked, the command will create a [Part Line](/Part_Line "Part Line") instead of a Draft Line.

## Properties

## Propiedades

Un objeto Línea comparte todas las propiedades de un ![](/images/Draft_Wire.svg) [Borrador Hilo](/Draft_Wire/es "Draft Wire/es"), sin embargo, sólo algunas de estas propiedades son aplicables a la Línea.

## Scripting

## Guión

*Ver también:* [Borrador API](/Draft_API/es "Draft API/es") y [Fundamentos de Guión FreeCAD](/FreeCAD_Scripting_Basics/es "FreeCAD Scripting Basics/es").

To create a Draft Line use the `make_line` method ([introduced in 0.19](/Release_notes_0.19 "Release notes 0.19")) of the Draft module. This method replaces the deprecated `makeLine` method.

```
line = make_line(p1, p2)
line = make_line(LineSegment)
line = make_line(Shape)

```

* Crea un objeto `Line` entre los puntos `p1` y `p2`, cada uno definido por su `FreeCAD.Vector`, con unidades en milímetros.
* Crea un objeto `Line` a partir de un `Part.LineSegment`.
* Crea un objeto `Line` desde el primer vértice hasta el último del `Shape` dado.

Ejemplo:

```
import FreeCAD as App
import Draft

doc = App.newDocument()

p1 = App.Vector(0, 0, 0)
p2 = App.Vector(1000, 500, 0)
p3 = App.Vector(-250, -500, 0)
p4 = App.Vector(500, 1000, 0)

line1 = Draft.make_line(p1, p2)
line2 = Draft.make_line(p3, p4)

doc.recompute()

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Draft_Line/es&oldid=1472855>"