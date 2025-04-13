---
title: Navigarea în 3 D Modelul de Mouse
---
## Overview

**Modelul mouse-ului** in FreeCAD este constituit din comenzi folosite la navigarea spațiului 3D și interacțiunea cu obiectele afișate. In versiunea actuală există trei moduri diferite de navigare. Modul implicit este numit "Navigare CAD" și este foarte simplu și practic, dar FreeCAD are două stiluri alternative modelate dupa navigarea în Inventor si Blender.

For more information about selecting objects see [Selection methods](/Selection_methods "Selection methods").

For more information about manipulating objects see [Std TransformManip](/Std_TransformManip "Std TransformManip").

## Selecting a navigation style

* In dialogul pentru [preferinte](/Preferences_Editor/ro "Preferences Editor/ro"), secțiunea Afișare, tab-ul *Vizualizare 3D*;
* Click-dreapta în spațiul liber în zona de vizualizare 3D, selectând *Stil de navigare* în meniul contextual.

## Available navigation styles

With all navigation styles, unless selecting objects from a sketch in edit mode, you must hold Ctrl to select multiple objects.

The following keyboard options are available for all styles:

* Ctrl + ![](/images/Ascii_043.svg) and Ctrl + ![](/images/Ascii_022.svg) or PgUp and PgDn to zoom in and out, respectively.
* The arrow keys, ![](/images/Ascii_017.svg)![](/images/Ascii_016.svg)![](/images/Ascii_030.svg)![](/images/Ascii_031.svg), to pan the view left/right and up/down.
* Shift + ![](/images/Ascii_017.svg) and Shift + ![](/images/Ascii_016.svg) to rotate the view by 90 degrees.

### Navigare Tip Blender

The Blender navigation style was modeled after [Blender](https://www.blender.org).

Blender Navigation a fost modelat după [Blender](http://www.blender.org). Anterior nu a existat o panoramare cu mouse-ul și a fost necesară utilizarea tastei  SHIFT pentru a panorama vederea. Acest lucru s-a schimbat în 2016, cu o adăugare de caracteristici. Pentru a panorama vizualizarea, puteți apăsa acum butoanele mouse-ului stânga și dreapta și trageți în vizualizare.

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

### Navigare CAD (implicita)

Acesta este modul de navigare implicit și permite utilizatorului un control simplu al vizualizării; nu este nevoie de folosirea tastaturii decât pentru selecție multiplă.

| Selectare | Translatie | Zoom | Rotire |
| --- | --- | --- | --- |
|  |  |  |  |
| [pentru selectie](/File:Select-mouse.svg "pentru selectie") | [pentru translatie](/File:Pan-mouse.svg "pentru translatie") | [pentru a mari sau micsora](/File:Zoom-mouse.svg "pentru a mari sau micsora") | [pentru a roti vizualizarea](/File:Rotate-mouse.svg "pentru a roti vizualizarea") |
| Apasati butonul stanga al mouse-ului deasupra obiectului de selectat. Apasarea tastei CTRL permite selectarea mai multor obiecte. | Apasati butonul din mijloc si miscati mouse-ul pentru a translata vizualizarea. | Folositi rotita mouse-ului pentru a mari sau micsora. | Apasati mai intai butonul din mijloc al mouse-ului, tineti-l apasat si apasati butonul stanga al mouse-ului si mutati-l in directia dorita. Functioneaza ca o bila ce se roteste in jurul centrului. Daca eliberati butoanele inainte de a inceta miscarea vizualizarea va continua sa se [roteascain](/Spinning/ro "Spinning/ro") jurul centrului, daca aceasta caracteristica e activata. Dublu-click folosind butonul mijlociu pe oricare parte a unui obiect seteaza noul centru de rotatie si panorameaza pe acest punct. |

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

### Navigarea prin Gesturi(v0.16)

This style was tailored for use with a touchscreen and pen. Nevertheless, it can also be used with a mouse, and is recommended for use when using a Mac with a trackpad.

Acest stil de navigare a fost adaptat pentru utilizarea cu touchscreen și stiloul, dar este foarte ușor de utilizat cu mouse-ul.

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

### Navigare tip Maya

In Maya-Gesture Navigation, panning, zooming, and rotating the view require the Alt key together with a mouse button; therefore, a three-button mouse is required. It's also possible to use gestures as this style was developed over the [Gesture navigation](#Gesture_navigation) style.

În navigația Maya-Gesture, toate mișcările de vizualizare sunt activate prin apăsarea butonului  ALT și a butonului mouse-ului, astfel încât să fie necesar un mouse cu 3 butoane pentru a utiliza corect acest mod de navigare. Alternativ, este posibil să utilizați gesturi, deoarece acest mod a fost dezvoltat în modul normal de navigare prin gesturi.

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

### Navigare Tip Inventor

In acest tip de navigare modelată după [Open Inventor](http://en.wikipedia.org/wiki/Open_Inventor) (a nu se confunda cu Autodesk Inventor) nu exista selectie cu mouse-ul. Pentru selectare trebuie apasată tasta CTRL.

| Selectare | Translatie | Zoom | Rotire |
| --- | --- | --- | --- |
|  |  |  |  |
| ctrl +[pentru selectare](/File:Select-mouse.svg "pentru selectare") | [pentru translatie](/File:Pan-mouse.svg "pentru translatie") | [pentru marire sau micsorare](/File:Zoom-mouse.svg "pentru marire sau micsorare") sau [pentru marire sau micsorare](/File:Rotate-mouse.svg "pentru marire sau micsorare") | [pentru a roti](/File:Select-mouse.svg "pentru a roti") |
| Tineti CTRL apasat si apasati butonul stanga al mouse-ului deasupra unui obiect ce doriti sa fie selectat. | Faceti click cu butonul stanga al mouse-ului si miscati obiectul. | Folositi rotita mouse-ului pentru marire si micsorare sau apasati si tinei butonul din mijloc si apasati butonul din stnga. | Faceti click si trageti folosind butonul stanga al mouse-ului pentru a roti |

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

### Navigarea cu Touchpad-ul

With the Touchpad navigation style, panning, zooming, and rotating the view require a modifier key together with the touchpad. This style can also be used with a mouse.

În Navigatorul cu touchpad, nici panningul, nici zoom-ul, nici rotirea vizualizării nu sunt operații numai pentru mouse (sau doar touchpad).

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

## Suport Hardware

FreeCAD suportă și un număr de [dispozitive 3D](/3D_input_devices/ro "3D input devices/ro").

## Probleme la Mac OS X

Recent am primit rapoarte [pe forum](http://forum.freecadweb.org/viewtopic.php?f=3&t=3592&start=0) de la utilizatorii de Mac la care acele combinații de taste și butoane de mouse nu funcționează conform așteptărilor. Din păcate, niciunul dintre dezvoltatori nu deține un Mac, nici ceilalți contributori obișnuiți. Avem nevoie de ajutorul tău pentru a determina ce butoane și combinații de taste ale mouse-ului funcționează astfel încât să putem actualiza acest

Retrieved from "<http://wiki.freecad.org/index.php?title=Mouse_navigation/ro&oldid=1552129>"