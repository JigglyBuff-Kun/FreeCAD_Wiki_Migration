---
title: Draft Trimex
---
|  |
| --- |
| Draft Trimex |
| Ubicación en el Menú |
| Croquis -> Recortar/Extender |
| Entornos de trabajo |
| [Croquis](/Draft_Workbench/es "Draft Workbench/es"), [Arquitectura](/Arch_Workbench/es "Arch Workbench/es") |
| Atajo de teclado por defecto |
| T R |
| Introducido en versión |
| - |
| Ver también |
| [Extrusión](/Part_Extrude/es "Part Extrude/es") |
|  |

## Descripción

Esta herramienta recorta/corta y extiende líneas y polilíneas, y extruye caras.

![](/images/Draft_trimex_example.jpg)

Top: a Draft Wire extended and then trimmed.  
Bottom: a face extruded into a solid body.

## Trim or extend

### Usage

1. Selecciona el contorno que quieres recortar o extender, o selecciona una cara que quieras extruir
2. Presiona el botón ![](/images/Draft_Trimex.png) Recortar, o presiona las teclas T y R
3. Designa un punto en la vista 3D

### Options

The single character keyboard shortcuts available in the task panel can be changed. See [Draft Preferences](/Draft_Preferences "Draft Preferences"). The shortcuts mentioned here are the default shortcuts.

* Hold down Alt to invert the default result of the command.
* Hold down Shift to restrict the operation to the current segment of a [Draft Wire](/Draft_Wire "Draft Wire").
* Press S to switch [Draft snapping](/Draft_Snap "Draft Snap") on or off.

Here is an example to explain the modifier keys. The left edge or the bottom edge of the U-shaped wire was extended. All [Draft Snaps](/Draft_Snap "Draft Snap") were turned off.

![](/images/Draft_Trimex_example2.png)

* Recortar o extender se decide de forma automática en función de la posición del cursor
* Si mueves el cursor sobre otro objeto, la operación de recortar/extender se ajustará a dicho objeto o segmento
* Presionando SHIFT se realizará una [restricción](/Draft_Constrain/es "Draft Constrain/es") al segmento que está siendo actualmente recortado o extendido.
* Presionando ALT se invertirá la dirección del recorte
* Cuando el objeto seleccionado es una cara, o cuando se selecciona una cara de un objeto existente, la herramienta de recortar/extender cambia al modo extruir. En modo extruir, presionando SHIFT se restringe la extrusión a la normal a la cara.

## Extrude

### Usage

See also: [Draft Snap](/Draft_Snap "Draft Snap") and [Draft Constrain](/Draft_Constrain "Draft Constrain").

1. It can be helpful to first change the [Draft working plane](/Draft_SelectPlane "Draft SelectPlane") so that it is not coplanar with the face you want to extrude.
2. Optionally select a single face or an object with a single face.
3. There are several ways to invoke the command:
   * Press the ![](/images/Draft_Trimex.svg) [Draft Trimex](/Draft_Trimex "Draft Trimex") button.
   * Select the **Modification → ![](/images/Draft_Trimex.svg) Trimex** option from the menu.
   * Use the keyboard shortcut: T then R.
4. If you have not yet selected an object or a face: select an object with a single face in the [3D view](/3D_view "3D view").
5. The **Trimex** task panel opens. See [Options](#Options_2) for more information.
6. To define the extrusion direction and distance do one of the following:
   * Pick a point in the [3D view](/3D_view "3D view") that does no lie on the same plane as the face.
   * Make sure the pointer is on the correct side of the face in the [3D view](/3D_view "3D view") and enter a **Distance**.

### Options

The modifier key mentioned here can be changed. See [Draft Preferences](/Draft_Preferences "Draft Preferences").

* Hold Shift to extrude in a direction that is not parallel to the normal of the face.

## Scripting

## Programación

No disponible. Mira la herramienta [Extrusión](/Part_Extrude/es "Part Extrude/es").

```
extrusion = extrude(obj, vector, solid=False)

```

* `obj` is the object to be extruded.
* `vector` is the extrusion direction and distance.
* If `solid` is `True` a solid is created instead of a shell.
* `extrusion` is returned with the created object.

Example:

```
import FreeCAD as App
import Draft

doc = App.newDocument()

rectangle = Draft.make_rectangle(1500, 500)
doc.recompute()

vector = App.Vector(0, 0, 300)
solid = Draft.extrude(rectangle, vector, solid=True)
doc.recompute()

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Draft_Trimex/es&oldid=1352697>"