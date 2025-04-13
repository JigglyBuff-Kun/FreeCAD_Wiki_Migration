---
title: Borrador SeleccinarPlano
---
|  |
| --- |
| Borrador SeleccionarPlano |
| Ubicación en el Menú |
| Borrador -> Seleccionar Plano |
| Entornos de trabajo |
| [Borrador](/Draft_Workbench/es "Draft Workbench/es"), [Arquitectura](/Arch_Workbench/es "Arch Workbench/es") |
| Atajo de teclado por defecto |
| W P |
| Introducido en versión |
| - |
| Ver también |
| [Borrador PlanoTrabajoProxy](/Draft_WorkingPlaneProxy/es "Draft WorkingPlaneProxy/es"), [Borrador AlternarRejilla](/Draft_ToggleGrid/es "Draft ToggleGrid/es") |
|  |

## Descripción

El ![](/images/Workbench_Draft.svg) [Ambiente de Trabajo Borrador](/Draft_Workbench/es "Draft Workbench/es") cuenta con un sistema de planos de trabajo. Un plano en la [Vista 3D](/3D_view/es "3D view/es") indica dónde se construirá una forma de Borrador. Hay varios métodos para definir el plano de trabajo:

* A partir de una cara seleccionada
* De tres vértices seleccionados.
* A partir de la vista actual
* A partir de una vista predefinida: Planta, alzado o perfil
* Ninguno, en cuyo caso el plano de trabajo se adapta automáticamente a la vista actual cuando se inicia un comando, o a una cara si comienzas dibujando sobre una cara existente.

[introduced in 1.0](/Release_notes_1.0 "Release notes 1.0"): For each 3D view a separate working plane is stored.

The ![](/images/Draft_tray_button_plane.png) button in the [Draft Tray](/Draft_Tray "Draft Tray") changes depending on the current working plane. [introduced in 1.0](/Release_notes_1.0 "Release notes 1.0"): If the working plane is not set to **Auto** an asterisk (**\***) is appended to the button label if the origin of the working plane does not match the global origin.

![](/images/WorkingPlane_example.png)

Se pueden establecer diferentes planos de trabajo en los que dibujar las formas

## Usage with pre-selection

1. Selecciona una cara de un objeto existente en la [vista 3D](/3D_view/es "3D view/es"), o mantén pulsado Ctrl y selecciona tres vértices de cualquier objeto. [introducido en la versión 0.17](/Release_notes_0.17/es "Release notes 0.17/es")
2. Pulse el ![](/images/Draft_SelectPlane.svg) SeleccionarPlano, o haz clic con el botón derecho y selecciona **Utilidades → ![](/images/Draft_SelectPlane.svg) SeleccionarPlano**.

## Usage with post-selection

1. Invoke the command as explained above.
2. The **Working plane setup** task panel opens. See [Options](#Options) for more information.
3. Do one of the following:
   * Select a single object. See the [previous paragraph](#Usage_with_pre-selection).
   * Select one or more subelements. See the [previous paragraph](#Usage_with_pre-selection).
4. Click anywhere in the [3D view](/3D_view "3D view") to confirm the selection and finish the command.
5. The working plane and the button in the [Draft Tray](/Draft_Tray "Draft Tray") are updated.

## Usage with presets

1. Pulse el ![](/images/Draft_SelectPlane.svg) SeleccinarPlano, o utilice Borrador → Utilidades → ![](/images/Draft_SelectPlane.svg) SeleccinarPlano del menú superior, o el atajo de teclado W y luego P
2. Seleccione el desplazamiento, el espaciado de la cuadrícula y las líneas principales
3. Seleccione uno de los preajustes: ![](/images/View-top.svg) XY (superior), ![](/images/View-front.svg) XZ (frontal), ![](/images/View-right.svg) YZ (lateral), ![](/images/View-isometric.svg) View, o ![](/images/View-axonometric.svg) Auto.

## Opciones

* Pulse el ![](/images/View-top.svg) XY (top) para establecer el plano de trabajo en el plano XY. Para dibujar fácilmente en este plano, debes establecer la vista en la parte superior o inferior (la normal está en la dirección Z positiva o negativa). Pulsa 2 o 5 para cambiar rápidamente a estas vistas.
* Pulse el ![](/images/View-front.svg) XZ (frontal) para establecer el plano de trabajo en el plano XZ. Para dibujar fácilmente en este plano, debes fijar la vista en la parte delantera o trasera (la normal está en la dirección Y negativa o positiva). Pulsa 1 o 4 para cambiar rápidamente a estas vistas.
* Pulse el ![](/images/View-right.svg) YZ (lateral) para establecer el plano de trabajo en el plano YZ. Para dibujar fácilmente en este plano, debes fijar la vista en el lado izquierdo o derecho (la normal está en la dirección X positiva o negativa). Pulsa 3 o 6 para cambiar rápidamente a estas vistas.
* Pulse el botón ![](/images/View-isometric.svg) Vista para establecer el plano de trabajo en la vista 3D actual, perpendicular al eje de la cámara y pasando por el origen (0,0,0).
* Pulse el botón ![](/images/View-axonometric.svg) Auto para desajustar cualquier plano de trabajo actual, y establecer automáticamente un plano de trabajo cuando se utiliza una herramienta. Cuando se selecciona una herramienta de dibujo, la rejilla se actualiza automáticamente a la vista actual; entonces, si la vista se gira, y se selecciona otra herramienta, la rejilla se redibuja en la nueva vista. Esto equivale a pulsar ![](/images/View-isometric.svg) Vista automáticamente antes de usar una herramienta.
* Establecer el valor de "Desplazamiento" para fijar el plano de trabajo a una determinada distancia perpendicular del plano seleccionado.
* Establezca el valor de "Espaciado de la rejilla" para definir el espacio entre cada línea de la rejilla.
* Ajuste el valor "Grid size" para definir la extensión total del plano de la cuadrícula.
* Ajuste el valor "Línea principal cada" para dibujar una línea ligeramente más gruesa en la cuadrícula en el valor establecido. Por ejemplo, si el espaciado de la cuadrícula es de 0,5 m, y hay una línea principal cada 20 líneas, habrá una línea ligeramente más gruesa cada 10 m.
* Haga clic en la casilla "Centrar el plano en la vista" para dibujar el plano y la cuadrícula más cerca de la vista de la cámara en la vista 3D.
* Pulse Esc o el botón Close para abortar el comando actual.
* La rejilla muestra un borde adicional con el espacio de la línea principal indicado en la esquina inferior izquierda [introduced in 0.19](/Release_notes_0.19 "Release notes 0.19"). Esto se puede desactivar a través de Edición->Preferencias->Borrador->Rejilla y ajuste->Mostrar borde de la rejilla

## Notes

* It can be useful to align the [3D view](/3D_view "3D view") with the selected Draft working plane. For example after switching the working plane to Front you may want to switch to the [Front view](/Std_ViewFront "Std ViewFront") as well.
* The grid can be toggled with the [Draft ToggleGrid](/Draft_ToggleGrid "Draft ToggleGrid") command.
* By double-clicking [Draft WorkingPlaneProxies](/Draft_WorkingPlaneProxy "Draft WorkingPlaneProxy") in the [Tree view](/Tree_view "Tree view") you can quickly switch between working planes.

## Preferences

See also: [Preferences Editor](/Preferences_Editor "Preferences Editor") and [Draft Preferences](/Draft_Preferences "Draft Preferences").

* The grid settings in the task panel as well as several other grid settings are available as preferences: **Edit → Preferences... → Draft → Grid and snapping**.
* The Snapping radius can also be changed on-the-fly (see [Draft Snap](/Draft_Snap#Preferences "Draft Snap")) or by changing: **Tools → Edit parameters... → BaseApp → Preferences → Mod → Draft → snapRange**.

## Scripting

## Guión

*Ver también:* [Fundamentos de Guión FreeCAD](/FreeCAD_Scripting_Basics/es "FreeCAD Scripting Basics/es"). Véase la [WorkingPlane API](http://www.freecadweb.org/api/DraftWorkingPlane.html).

[introduced in 1.0](/Release_notes_1.0 "Release notes 1.0"):

The WorkingPlane module offers two classes to create working plane objects: the `PlaneBase` class and the `PlaneGui` class. The second class inherits from the first. Objects of the `PlaneGui` class interact with the GUI (the [Draft Tray](/Draft_Tray "Draft Tray") button), the [3D view](/3D_view "3D view") and the [grid](/Draft_Snap_Grid "Draft Snap Grid"). `PlaneBase` objects do not.

Use the `get_working_plane()` method of the WorkingPlane module to get an instance of the `PlaneGui` class linked to the current 3D view. The method either returns the existing working plane linked to the view or creates a new working plane if required.

```
import FreeCAD as App
import WorkingPlane

wp = WorkingPlane.get_working_plane()

origin = App.Vector(0, 0, 0)
normal = App.Vector(1, 1, 1).normalize()
offset = 17
wp.align_to_point_and_axis(origin, normal, offset)

point = App.Vector(10, 15, 2)
projection = wp.project_point(point)
print(projection)

```

The `PlaneBase` class can be used to create working planes independent of the GUI:

```
import WorkingPlane

wp = WorkingPlane.PlaneBase()

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Draft_SelectPlane/es&oldid=1473288>"