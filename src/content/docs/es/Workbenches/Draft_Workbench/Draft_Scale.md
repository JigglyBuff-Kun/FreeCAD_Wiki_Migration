---
title: Draft Scale/es
---
|  |
| --- |
| Draft Scale |
| Ubicación en el Menú |
| Croquis -> Escala |
| Entornos de trabajo |
| [Croquis](/Draft_Workbench/es "Draft Workbench/es"), [Arquitectura](/Arch_Workbench/es "Arch Workbench/es") |
| Atajo de teclado por defecto |
| S C |
| Introducido en versión |
| - |
| Ver también |
| [Clonar](/Draft_Clone/es "Draft Clone/es") |
|  |

## Descripción

Esta herramienta escala los objetos seleccionados con respecto a un punto base. Si no se han seleccionado objetos, te invitará a seleccionarlos.

The command can be used on 2D objects created with the [Draft Workbench](/Draft_Workbench "Draft Workbench") or [Sketcher Workbench](/Sketcher_Workbench "Sketcher Workbench"), but also on many 3D objects such as those created with the [Part Workbench](/Part_Workbench "Part Workbench"), [PartDesign Workbench](/PartDesign_Workbench "PartDesign Workbench") or [BIM Workbench](/BIM_Workbench "BIM Workbench").

![](/images/Draft_Scale_example.png)

Scaling an object around a base point

## Utilización

See also: [Draft Snap](/Draft_Snap "Draft Snap") and [Draft Constrain](/Draft_Constrain "Draft Constrain").

1. Selecciona los objetos que quieres escalar
2. Presiona el botón ![](/images/Draft_Scale.png) Escala, o presiona las teclas S y C
3. Indica un primer punto en la vista 3D, o escribe unas coordenadas para definir el punto base del escalado. Indica otro punto en la vista 3D, o escribe unas coordenadas
4. Otro menú con opciones de escalado se abrirá. Rellena las diferentes opciones y pulsa OK para aceptar

## Opciones

### First task panel

The single character keyboard shortcuts available in the task panel can be changed. See [Draft Preferences](/Draft_Preferences "Draft Preferences"). The shortcuts mentioned here are the default shortcuts.

* To manually enter the coordinates for the base point enter the X, Y and Z component, and press Enter after each. Or you can press the ![](/images/Draft_AddPoint.svg) Enter point button when you have the desired values. It is advisable to move the pointer out of the [3D view](/3D_view "3D view") before entering coordinates.
* Press G or click the **Global** checkbox to toggle global mode. If global mode is on, coordinates are relative to the global coordinate system, else they are relative to the [working plane](/Draft_SelectPlane "Draft SelectPlane") coordinate system.
* Press S to switch [Draft snapping](/Draft_Snap "Draft Snap") on or off.
* Press the Close button to abort the command.

### Second task panel

* Para introducir coordenadas manualmente, simplemente introduce los números, presiona ENTER entre cada componente X, Y y Z.
* Las componentes X, Y, Z del segundo punto definen el factor de escala. Por ejemplo, (1,1,1) no hará nada, (2,2,2) utilizará un factor de escala scale 2x en todas las direcciones, (-1,1,1) hará una simetría en la dirección X.
* Presionando ALT o C o pulsando el botón **Copiar** se creará una copia de los objetos, en lugar de escalar los originales. Si mantienes presionada ALT después de indicar el segundo punto, podrás crear más copias, hasta que liberes la tecla ALT.
* Presiona CTRL mientras dibujas para forzar el [ajuste](/Draft_Snap/es "Draft Snap/es") de tu punto a la ubicación de ajuste más cercana, independientemente de la distancia.
* Presionando SHIFT se bloqueará la relación de las coordenadas X e Y, de modo que la forma no se distorsione.
* Presionando ESC o el botón **Cancelar** para abortar el comando actual.
* El objeto resultante es una [clonación](/Draft_Clone/es "Draft Clone/es"), que permite cambiar el valor de escala después de que se ha creado.

## Notes

* The command can also scale [Image Planes](/Image_CreateImagePlane "Image CreateImagePlane"), but not in clone mode.

## Preferences

See also: [Preferences Editor](/Preferences_Editor "Preferences Editor") and [Draft Preferences](/Draft_Preferences "Draft Preferences").

* To reselect the base objects after copying objects: **Edit → Preferences... → Draft → General → Select base objects after copying**.

## Scripting

## Programación

La herramienta de Escalar se puede utilizar en [macros](/Macros/es "Macros/es") y desde la consola de Python utilizando la siguiente instrucción:

```
scaled_list = scale(objectslist, scale=Vector(1,1,1), center=Vector(0,0,0), copy=False)

```

* Escala los objetos contenidos en objects (que pueden ser una lista de objetos o un objeto) por los factores de escala definidos por el vector dado (en direcciones X, Y y Z) con respecto al centro dado.
* Si legacy es True, se utiliza el modo directo (antiguo), en caso contrario se crea una copia paramétrica.
* Si copy es True, los objetos en realidad no se mueven sino que se crean copias en su lugar.
* Devuelve los objetos (o sus copias).

Ejemplo:

```
import FreeCAD as App
import Draft

doc = App.newDocument()

pts = [App.Vector(0, 0, 0), App.Vector(500, 500, 0), App.Vector(600, 0, 0)]
wire1 = Draft.make_wire(pts, closed=True)
doc.recompute()

scale1 = App.Vector(2.3, 0.75, 0)
wire2 = Draft.scale(wire1, scale1, copy=True)
doc.recompute()

scale2 = App.Vector(-2, -1.5, 0)
wires = Draft.scale([wire1, wire2], scale2, copy=True)
doc.recompute()

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Draft_Scale/es&oldid=1513404>"