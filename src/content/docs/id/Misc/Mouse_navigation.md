---
title: Mouse Model
---
## Overview

Penggunaan mouse di FreeCAD berisi perintah - perintah yang digunakan untuk navigasi pada tampilan 3D dan berinteraksi dengan objek yang di tampilkan. Ada tiga mode navigasi yang berbeda. Navigasi standar (default) mengarah pada "CAD Navigation,"yang sangat simpel dan praktis, tetapi FreeCAD juga memiliki 2 alternativ mode navigasi yaitu mode Inventor dan mode Blender.

For more information about selecting objects see [Selection methods](/Selection_methods "Selection methods").

For more information about manipulating objects see [Std TransformManip](/Std_TransformManip "Std TransformManip").

## Selecting a navigation style

* Di menu Edit, [Preferences Editor](/Preferences_Editor "Preferences Editor"), pilih pada bagian Display, klik pada tab *3D View* ;
* Dengan klik-kanan pada bagian tampilan 3d yang kosong, kemudian klik *Navigation style* dan pilih mode yang diinginkan.

## Available navigation styles

With all navigation styles, unless selecting objects from a sketch in edit mode, you must hold Ctrl to select multiple objects.

The following keyboard options are available for all styles:

* Ctrl + ![](/images/Ascii_043.svg) and Ctrl + ![](/images/Ascii_022.svg) or PgUp and PgDn to zoom in and out, respectively.
* The arrow keys, ![](/images/Ascii_017.svg)![](/images/Ascii_016.svg)![](/images/Ascii_030.svg)![](/images/Ascii_031.svg), to pan the view left/right and up/down.
* Shift + ![](/images/Ascii_017.svg) and Shift + ![](/images/Ascii_016.svg) to rotate the view by 90 degrees.

### Blender Navigation

The Blender navigation style was modeled after [Blender](https://www.blender.org).

Pada mode navigasi Blender, tidak ada perintah pan (menggeser layar 3D). Untuk melalukan penggeseran layar (pan) kamu harus menekan tombol SHIFT.

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

### CAD Navigation (default)

Mode ini adalah Nnavigasi standar bawaan dan memungkinkan pemakai mengendalikan tampilan dengan mudah, dan tidak memerlukan tombol keyboard kecuali untuk memilih multi objek.

| Select | Zoom | Rotate view First method | Rotate view Alternate method | Pan |
| --- | --- | --- | --- | --- |
|  |  |  |  |  |
|  |  |  |  |  |
| Press the left mouse button over an object you want to select. Holding down Ctrl allows the selection of multiple objects. | Use the mouse wheel to zoom in and out. Clicking the middle mouse button re-centers the view on the location of the cursor. | Hold the middle mouse button, then press and hold the left mouse button, then move the pointer. The cursor location when the middle mouse button is pressed determines the center of rotation. Rotation works like spinning a ball which rotates around its center. If the buttons are released before you stop the mouse motion, the view continues [spinning](/Spinning "Spinning"), if this is enabled.  A double click with the middle mouse button sets a new center of rotation. | Hold the middle mouse button, then press and hold the right mouse button, then move the pointer. With this method the middle mouse button may be released after the right mouse button is held pressed.  Users who use the mouse with their right hand may find this method easier than the first method. | Hold the middle mouse button, then move the pointer. |
|  | Ctrl+Shift+ | Shift+ |  | Ctrl+ |
|  | Zoom mode: hold the Ctrl and Shift keys, press the right mouse button once, then move the pointer. [introduced in 0.17](/Release_notes_0.17 "Release notes 0.17") | Rotate mode: hold the Shift key, press the right mouse button once, then move the pointer. [introduced in 0.17](/Release_notes_0.17 "Release notes 0.17") |  | Pan mode: hold the Ctrl key, press the right mouse button once, then move the pointer. [introduced in 0.17](/Release_notes_0.17 "Release notes 0.17") |

| Select | Zoom | Rotate view First method | Rotate view Alternate method | Pan |
| --- | --- | --- | --- | --- |
|  |  |  |  |  |
|  |  |  |  |  |
| Press the left mouse button over an object you want to select. | Use the mouse wheel to zoom in and out. Clicking the middle mouse button re-centers the view on the location of the cursor. | Hold the middle mouse button, then press and hold the left mouse button, then move the pointer. If the buttons are released before you stop the mouse motion, the view continues spinning, if this is enabled. | Hold the middle mouse button, then press and hold the right mouse button, then move the pointer. With this method the middle mouse button may be released after the right mouse button is held pressed.  Users who use the mouse with their right hand may find this method easier than the first method. | Hold the middle mouse button, then move the pointer. |
|  | Ctrl+Shift+ | Shift+ |  | Ctrl+ |
|  | Zoom mode: hold the Ctrl and Shift keys, press the right mouse button once, then move the pointer. | Rotate mode: hold the Shift key, press the right mouse button once, then move the pointer. |  | Pan mode: hold the Ctrl key, press the right mouse button once, then move the pointer. |

### Gesture Navigation (v0.16)

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

### Maya-Gesture Navigation

In Maya-Gesture Navigation, panning, zooming, and rotating the view require the Alt key together with a mouse button; therefore, a three-button mouse is required. It's also possible to use gestures as this style was developed over the [Gesture navigation](#Gesture_navigation) style.

In Maya-Gesture Navigation, all view movements are activated pressing ALT and a mouse button, so that it will be needed to have a 3 button mouse in order to correctly use this navigation mode. Alternately it's possible to use gestures as this mode was been developed over the normal Gesture Navigation mode.

| Select | Zoom | | Rotate view | Pan | {{{Tilt\_view\_name}}} |
| --- | --- | --- | --- | --- | --- |
|  |  | |  |  |  |
|  |  | Alt+ | Alt+ | Alt+ | Alt+ |
| Press the left mouse button over an object you want to select. | Hold Alt and the right mouse button, then move the pointer. Alternatively, use the mouse wheel to zoom in and out. | | Hold Alt and the left mouse button, then move the pointer. | Hold Alt and the middle mouse button, then move the pointer. | {{{Tilt\_view\_text}}} |

|Alt=Alt

|Select\_text=Press the left mouse button over an object you want to select.

|Zoom\_text=Use the mouse wheel to zoom in and out.

Alternatively, hold Alt and the right mouse button, then move the pointer.

|Rotate\_view\_text=Hold Alt and the left mouse button, then move the pointer.

|Pan\_text=Hold Alt and the middle mouse button, then move the pointer.

|Tilt\_view\_text=Hold Alt and both left and right mouse buttons, and then move the pointer sideways.
}}

### OpenCascade navigation

The OpenCascade navigation style was modeled after [OpenCascade](https://www.opencascade.com/).

| Select | Zoom | | Rotate view | | Pan | |
| --- | --- | --- | --- | --- | --- | --- |
|  |  | |  | |  | |
|  |  | Ctrl+ |  | Ctrl+ |  | Ctrl+ |
| Press the left mouse button over an object you want to select. | Use the mouse wheel to zoom in and out. Alternatively, hold Ctrl and the left mouse button, then move the pointer. | | Hold the middle mouse button, then press and hold the right mouse button, then move the pointer. Alternatively, hold Ctrl and the right mouse button, then move the pointer. | | Hold the middle mouse button, then move the pointer. It is possible to hold Ctrl. | |

### OpenInventor navigation

### Inventor Navigation

Mode navigasi Inventor, tidak ada pemilihan objek pada mode ini. Untuk memilih objek kita harus menekan tombol CTRL.

| Select | Zoom | | Rotate view | Pan |
| --- | --- | --- | --- | --- |
|  |  | |  |  |
| {{{Shift}}}+ |  |  |  |  |
| Hold Ctrl, then press the left mouse button over an object you want to select. | Use the mouse wheel to zoom in and out. Alternatively, hold the middle mouse button, then press and hold the left mouse button, then move the pointer. | | Hold the left mouse button, then move the pointer. | Hold the middle mouse button, then move the pointer. |

This style is not based on Autodesk Inventor.

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

### Revit navigation

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

### Touchpad Navigation

With the Touchpad navigation style, panning, zooming, and rotating the view require a modifier key together with the touchpad. This style can also be used with a mouse.

In Touchpad Navigation, neither panning, nor zooming, nor rotating the view, are mouse-only (or touchpad-only) operations.

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

## Hardware support

FreeCAD juga mendukung beberapa jenis dari [3D input devices](/3D_input_devices "3D input devices").

## Recommended navigation for macOS

On MacBooks with a trackpad the Gesture navigation works very well, but the gestures have a special meaning:

* Zoom: drag with two fingers.
* Rotate: drag with three fingers.
* Pan: Ctrl + three fingers.

Retrieved from "<http://wiki.freecad.org/index.php?title=Mouse_navigation/id&oldid=1552131>"