---
title: Navegación Ratón
---
## Overview

## Vista general

La **Navegación Ratón** de FreeCAD consiste en los comandos utilizados para navegar visualmente por el espacio tridimensional e interactuar con los objetos mostrados. Actualmente hay 3 esquemas diferentes de navegación con el ratón en FreeCAD. El estilo de navegación por defecto se denomina "Navegación CAD", y es muy simple y práctico, pero FreeCAD también tiene dos estilos de navegación alternativos modelados según la navegación de Inventor y Blender.

For more information about selecting objects see [Selection methods](/Selection_methods "Selection methods").

For more information about manipulating objects see [Std TransformManip](/Std_TransformManip "Std TransformManip").

## Selecting a navigation style

* En el [Editor de Preferencias](/Preferences_Editor/es "Preferences Editor/es"), sección Display, pestaña *Vista 3D*;
* Pulsando con el botón derecho en un área vacía de la vista 3D y seleccionando *Estilo de navegación* en el menú contextual.

## Available navigation styles

With all navigation styles, unless selecting objects from a sketch in edit mode, you must hold Ctrl to select multiple objects.

The following keyboard options are available for all styles:

* Ctrl + ![](/images/Ascii_043.svg) and Ctrl + ![](/images/Ascii_022.svg) or PgUp and PgDn to zoom in and out, respectively.
* The arrow keys, ![](/images/Ascii_017.svg)![](/images/Ascii_016.svg)![](/images/Ascii_030.svg)![](/images/Ascii_031.svg), to pan the view left/right and up/down.
* Shift + ![](/images/Ascii_017.svg) and Shift + ![](/images/Ascii_016.svg) to rotate the view by 90 degrees.

### Navegación de Blender

The Blender navigation style was modeled after [Blender](https://www.blender.org).

En la Navegación de Blender, no se puede hacer un encuadre sólo con el ratón. Para hacer un encuadre, debes mantener presionada la tecla SHIFT.

| Selección | Encuadre | Zoom | Rotar vista |
| --- | --- | --- | --- |
|  |  |  |  |
| [Selección](/File:Select-mouse.svg "Selección") | shift+[Encuadre](/File:Pan-mouse.svg "Encuadre") o | [Zoom](/File:Zoom-mouse.svg "Zoom") | [Rotar vista](/File:Pan-mouse.svg "Rotar vista") |
| Presiona el botón izquierdo del ratón sobre el objeto que quieras seleccionar. | Mantén presionada la tecla de mayúsculas (shift) y pulsa el botón del medio del ratón, o mantenga presionados los botones Izquierda y Derecha y mueva. | Utiliza la rueda del ratón para alejar o acercar la vista. | Pulsa y arrastra con el botón del medio del ratón. |

| Select | Zoom | Rotate view | Pan | |
| --- | --- | --- | --- | --- |
|  |  |  |  | |
|  |  |  | Shift+ |  |
| Press the left mouse button over an object you want to select. | Use the mouse wheel to zoom in and out. | Hold the middle mouse button, then move the pointer. | Hold Shift and the middle mouse button, then move the pointer. Alternatively, hold both left and right mouse buttons, and then move the pointer. | |

|Shift=Shift

|Select\_text=Press the left mouse button over an object you want to select.

|Zoom\_text=Use the mouse wheel to zoom in and out.

|Rotate\_view\_text=Hold the middle mouse button, then move the pointer.

|Pan\_text=Hold Shift and the middle mouse button, then move the pointer.

Alternatively, hold both left and right mouse buttons, and then move the pointer.
}}

### CAD navigation

### Navegación CAD

Este es el estilo de navegación por defecto y permite al usuario un control simple de la vista, y no requiere el uso del teclado con la excepción de la realización de selecciones múltiples.

| Select | Zoom | Rotate view First method | Rotate view Alternate method | Pan |
| --- | --- | --- | --- | --- |
|  |  |  |  |  |
|  |  |  |  |  |
| Press the left mouse button over an object you want to select. | Use the mouse wheel to zoom in and out. Clicking the middle mouse button re-centers the view on the location of the cursor. | Hold the middle mouse button, then press and hold the left mouse button, then move the pointer. If the buttons are released before you stop the mouse motion, the view continues spinning, if this is enabled. | Hold the middle mouse button, then press and hold the right mouse button, then move the pointer. With this method the middle mouse button may be released after the right mouse button is held pressed.  Users who use the mouse with their right hand may find this method easier than the first method. | Hold the middle mouse button, then move the pointer. |
|  | Ctrl+Shift+ | Shift+ |  | Ctrl+ |
|  | Zoom mode: hold the Ctrl and Shift keys, press the right mouse button once, then move the pointer. | Rotate mode: hold the Shift key, press the right mouse button once, then move the pointer. |  | Pan mode: hold the Ctrl key, press the right mouse button once, then move the pointer. |

### Navegación Gestual

This style was tailored for use with a touchscreen and pen. Nevertheless, it can also be used with a mouse, and is recommended for use when using a Mac with a trackpad.

This navigation style was tailored for usability with touchscreen and pen, but is very usable with mouse too.

| Select | Zoom | Rotate view | Pan | | Tilt view |
| --- | --- | --- | --- | --- | --- |
|  |  |  |  | |  |
|  |  |  |  | |  |
| Press the left mouse button over an object you want to select. | Use the mouse wheel to zoom in and out. | Hold the left mouse button, then move the pointer. In [Sketcher](/Sketcher_Workbench "Sketcher Workbench") and other edit modes, this behavior is disabled. Hold Alt when pressing the mouse button to enter rotation mode.  To set the camera's focus point for rotation, click a point with the middle mouse button. Alternatively, aim the cursor at a point and press H on the keyboard. | Hold the right mouse button, then move the pointer. | | Hold both left and right mouse buttons, and then move the pointer sideways. |
|  |  |  |  |  |  |
| Tap to select. | Drag two fingers (pinch) closer or farther apart. | Drag with one finger to rotate. Hold Alt when in the [Sketcher](/Sketcher_Workbench "Sketcher Workbench"). | Drag with two fingers. Alternatively, tap and hold, then drag. This simulates the pan with the right mouse button. | | Rotate the imaginary line formed by two touch points. On v0.18 this method is disabled by default. To enable, go to **Edit → Preferences → Display**, and untick "Disable touchscreen tilt gesture" checkbox. |

|Select\_text=Press the left mouse button over an object you want to select.

|Zoom\_text=Use the mouse wheel to zoom in and out.

|Rotate\_view\_text=Hold the left mouse button, then move the pointer.
In [Sketcher](/Sketcher_Workbench "Sketcher Workbench") and other edit modes, this behavior is disabled. Hold Alt when pressing the mouse button to enter rotation mode.

To set the camera's focus point for rotation, click a point with the middle mouse button. Alternatively, aim the cursor at a point and press H on the keyboard.

|Pan\_text=Hold the right mouse button, then move the pointer.

|Tilt\_view\_text=Hold both left and right mouse buttons, then move the pointer sideways.

|Select\_gesture\_text=Tap to select.

|Zoom\_gesture\_text=Drag two fingers (pinch) closer or farther apart.

|Rotate\_view\_gesture\_text=Drag with one finger to rotate.

Hold Alt when in the [Sketcher](/Sketcher_Workbench "Sketcher Workbench").

|Pan\_gesture\_text=Drag with two fingers.

Alternatively, tap and hold, then drag. This simulates the pan with the right mouse button.

|Tilt\_view\_gesture\_text=Rotate the imaginary line formed by two touch points.

This method is disabled by default. To enable, go to **Edit → Preferences → Display → Navigation**, and uncheck the "Disable touchscreen tilt gesture" checkbox.
}}

### Navegación Maya-Gestual

In Maya-Gesture Navigation, panning, zooming, and rotating the view require the Alt key together with a mouse button; therefore, a three-button mouse is required. It's also possible to use gestures as this style was developed over the [Gesture navigation](#Gesture_navigation) style.

| Selección | Zoom | | Rotar la vista | Pan | {{{Tilt\_view\_name}}} |
| --- | --- | --- | --- | --- | --- |
|  |  | |  |  |  |
|  |  | {KEY+ | {KEY+ | {KEY+ | {KEY+ |
| {{{Select\_text}}} | {{{Zoom\_text}}} | | {{{Rotate\_view\_text}}} | {{{Pan\_text}}} | {{{Tilt\_view\_text}}} |

|Select\_text=Presione el botón izquierdo del ratón sobre un objeto que desee seleccionar.
|Pan\_text=Mantenga pulsados Alt y el botón central del ratón, luego mueva el puntero.
|Zoom\_text=Mantenga pulsados Alt y el botón derecho del ratón, luego mueva el puntero.

|Alt=Alt

|Select\_text=Press the left mouse button over an object you want to select.

|Zoom\_text=Use the mouse wheel to zoom in and out.

Alternatively, hold Alt and the right mouse button, then move the pointer.

|Rotate\_view\_text=Hold Alt and the left mouse button, then move the pointer.

|Pan\_text=Hold Alt and the middle mouse button, then move the pointer.

|Tilt\_view\_text=Hold Alt and both left and right mouse buttons, and then move the pointer sideways.
}}

### OpenCascade

The OpenCascade navigation style was modeled after [OpenCascade](https://www.opencascade.com/).

| Select | Zoom | | Rotate view | | Pan | |
| --- | --- | --- | --- | --- | --- | --- |
|  |  | |  | |  | |
|  |  | Ctrl+ |  | Ctrl+ |  | Ctrl+ |
| Press the left mouse button over an object you want to select. | Use the mouse wheel to zoom in and out. Alternatively, hold Ctrl and the left mouse button, then move the pointer. | | Hold the middle mouse button, then press and hold the right mouse button, then move the pointer. Alternatively, hold Ctrl and the right mouse button, then move the pointer. | | Hold the middle mouse button, then move the pointer. It is possible to hold Ctrl. | |

### OpenInventor navigation

### Navegación de Inventor

La navegación de OpenInventor (antes Inventor) fue modelada según [Open Inventor](http://en.wikipedia.org/wiki/Open_Inventor). Para seleccionar los objetos, debe mantener pulsada la tecla Ctrl.

Este modo no está basado en el Autodesk Inventor.

| Select | Zoom | | Rotate view | Pan |
| --- | --- | --- | --- | --- |
|  |  | |  |  |
| Shift+ |  |  |  |  |
| Hold Shift, then press the left mouse button over an object you want to select. Hold Ctrl instead to select multiple objects. | Use the mouse wheel to zoom in and out. Alternatively, hold the middle mouse button, then press and hold the left mouse button, then move the pointer. | | Hold the left mouse button, then move the pointer. | Hold the middle mouse button, then move the pointer. |

### OpenSCAD navigation

The OpenSCAD navigation style was modeled after [OpenSCAD](https://openscad.org/).

| Select | Zoom | | | Rotate view | | Pan |
| --- | --- | --- | --- | --- | --- | --- |
|  |  | | |  | |  |
|  |  |  | Shift+ |  |  |  |
| Press the left mouse button over an object you want to select. 0.21 and below Hold Ctrl and Shift when pressing the mouse button to drag an object in a sketch in edit mode. | Use the mouse wheel to zoom in and out. Alternatively, hold the middle mouse button, then move the pointer.  Or hold Shift and the right mouse button, then move the pointer. | | | Hold the left mouse button, then move the pointer. Alternatively, and when a sketch is in edit mode, hold the middle mouse button, then press and hold the right mouse button, then move the pointer. | | Hold the right mouse button, then move the pointer. |

### Navegación Revit

The Revit navigation style was modeled after [Revit](https://en.wikipedia.org/wiki/Autodesk_Revit).

| Select | Zoom | Rotate view | | Pan | |
| --- | --- | --- | --- | --- | --- |
|  |  |  | |  | |
|  |  | Shift+ |  |  |  |
| Press the left mouse button over an object you want to select. | Use the mouse wheel to zoom in and out. | Hold Shift and the middle mouse button, then move the pointer. Alternatively, hold the middle mouse button, then press and hold the right mouse button, then move the pointer. | | Hold the middle mouse button, then move the pointer. Alternatively, hold both left and right mouse buttons, then move the pointer. | |

### SolidWorks navigation

[introduced in 1.1](/Release_notes_1.1 "Release notes 1.1")

The SolidWorks navigation style was modeled after [SolidWorks](https://en.wikipedia.org/wiki/SolidWorks).

| Select | Zoom | | Rotate view | Pan |
| --- | --- | --- | --- | --- |
|  |  | |  |  |
|  |  | Shift+ |  | Ctrl+ |
| Press the left mouse button over an object you want to select. | Use the mouse wheel to zoom in and out. Alternatively, hold Shift and the middle mouse button, then move the pointer.  Clicking the middle mouse button re-centers the view on the location of the cursor. | | Hold the middle mouse button, then move the pointer. | Hold Ctrl and the middle mouse button, then move the pointer. |

### TinkerCAD navigation

The TinkerCAD navigation style was modeled after [TinkerCAD](https://en.wikipedia.org/wiki/Tinkercad).

| Select | Zoom | Rotate view | Pan |
| --- | --- | --- | --- |
|  |  |  |  |
|  |  |  |  |
| Press the left mouse button over an object you want to select. | Use the mouse wheel to zoom in and out. | Press the right mouse button, then move the pointer. | Hold the middle mouse button, then move the pointer. |

### Navegación Touchpad

With the Touchpad navigation style, panning, zooming, and rotating the view require a modifier key together with the touchpad. This style can also be used with a mouse.

En la Navegación Touchpad, ni el barrido, ni el acercamiento, ni la rotación de vista son operaciones exclusivas del ratón (o del touchpad).

| Select | Pan | Zoom | Rotate View |
| --- | --- | --- | --- |
|  |  |  |  |
| [to Select](/File:Select-touchpad.png "to Select") | shift+[to Pan](/File:Touchpad.png "to Pan") | PgUp / PgDn | alt+[to Rotate](/File:Touchpad.png "to Rotate") |
| Press the left mouse button over an object you want to select. | Hold shift and move the object around. | Use PgUp and PgDn to zoom in and out. | Hold alt and move the pointer. |
|  |  | *or* | *or* |
|  |  | shift+ctrl+[to Zoom](/File:Select-touchpad.png "to Zoom") | shift+ctrl+[to ROtate](/File:Touchpad.png "to ROtate") |
|  |  | Hold down both the shift and the ctrl keys, press the left mouse button, and move the pointer. | Hold down both the shift and the ctrl keys and move the pointer. |

| Select | Zoom | Rotate view | | Pan |
| --- | --- | --- | --- | --- |
|  |  |  | |  |
|  | Ctrl+Shift+ | Alt+ | Shift+ | Shift+ |
| Press the left mouse button over an object you want to select. | Use PageUp and PageDown to zoom in and out. | Hold Alt, then move the pointer. | | Hold Shift, then move the pointer. |

|Ctrl=Ctrl
|Shift=Shift
|Alt=Alt

|Select\_text=Press the left mouse button over an object you want to select.

|Zoom\_text=Hold Ctrl and Shift, then move the pointer.

|Rotate\_view\_text=Hold Alt, then move the pointer.

Alternatively, hold Shift and the left button, then move the pointer.

|Pan\_text=Hold Shift, then move the pointer.
}}

## Soporte de Hardware

FreeCAD también soporta algún [Dispositivo de entrada 3D](/3D_input_devices/es "3D input devices/es").

## Problemas en Mac OS X

Recientemente hemos recibido reportes [en el foro](http://forum.freecadweb.org/viewtopic.php?f=3&t=3592&start=0) de usuarios Mac que esas combinaciones de ratón y tecla no funcionan como se espera. Desafortunadamente, ninguno de los desarrolladores posee una Mac, tampoco otros contribuidores regulares. Necesitamos de tu ayuda para determinar que combinaciones de ratón y tecla funcionan para poder actualizar este wiki.

Retrieved from "<http://wiki.freecad.org/index.php?title=Mouse_navigation/es&oldid=1552128>"