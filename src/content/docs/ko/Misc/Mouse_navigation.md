---
title: Mouse용 탐색기
---
## 내용요약

프리캐드의 **마우스용 탐색기** 는 3D 공간을 가시적으로 탐색하는 것, 상대적인 물체의 모습을 표시 하는 것 등의 명령들로 구성되어 있습니다. FreeCAD supports multiple mouse navigation styles. The default navigation style is referred to as [CAD Navigation](#CAD_navigation), and is very simple and practical, but FreeCAD also provides several alternative navigation styles to choose from. The selected style is used for all workbenches.

For more information about selecting objects see [Selection methods](/Selection_methods "Selection methods").

For more information about manipulating objects see [Std TransformManip](/Std_TransformManip "Std TransformManip").

## Selecting a navigation style

1. Do one of the following:
   * Press the ![](/images/NavigationCAD_dark.svg) button in the [Status bar](/Status_bar "Status bar").
   * Right-click an empty area in the [3D view](/3D_view "3D view"), and select **Navigation styles** from the context menu.
   * Use the [Preferences Editor](/Preferences_Editor#Navigation "Preferences Editor"). In the menu select **Edit → Preferences** and then **Display → Navigation → 3D Navigation**.
2. Select a style from the list.
3. Optionally change the **Orbit style**: press the ![](/images/NavigationCAD_dark.svg) button in the [Status bar](/Status_bar "Status bar") and then choose **Settings → Orbit style**. See [Preferences Editor](/Preferences_Editor#Navigation "Preferences Editor").
4. Optionally change the **Rotation mode**. See [Preferences Editor](/Preferences_Editor#Navigation "Preferences Editor").
5. If the **CAD** navigation style is selected: optionally change the **Enable animation** setting. See [Preferences Editor](/Preferences_Editor#Navigation "Preferences Editor").

## Available navigation styles

With all navigation styles, unless selecting objects from a sketch in edit mode, you must hold Ctrl to select multiple objects.

The following keyboard options are available for all styles:

* Ctrl + ![](/images/Ascii_043.svg) and Ctrl + ![](/images/Ascii_022.svg) or PgUp and PgDn to zoom in and out, respectively.
* The arrow keys, ![](/images/Ascii_017.svg)![](/images/Ascii_016.svg)![](/images/Ascii_030.svg)![](/images/Ascii_031.svg), to pan the view left/right and up/down.
* Shift + ![](/images/Ascii_017.svg) and Shift + ![](/images/Ascii_016.svg) to rotate the view by 90 degrees.

### Blender navigation

The Blender navigation style was modeled after [Blender](https://www.blender.org).

| Select | Zoom | Rotate view | Pan | |
| --- | --- | --- | --- | --- |
|  |  |  |  | |
|  |  |  | Shift+ |  |
| Press the left mouse button over an object you want to select. | Use the mouse wheel to zoom in and out. | Hold the middle mouse button, then move the pointer. | Hold Shift and the middle mouse button, then move the pointer. Alternatively, hold both left and right mouse buttons, and then move the pointer. | |

### CAD navigation

This is the default navigation style. It allows the user a simple control of the view, and does not require the use of keyboard keys except to make multi-selections.

| Select | Zoom | Rotate view First method | Rotate view Alternate method | Pan |
| --- | --- | --- | --- | --- |
|  |  |  |  |  |
|  |  |  |  |  |
| Press the left mouse button over an object you want to select. | Use the mouse wheel to zoom in and out. Clicking the middle mouse button re-centers the view on the location of the cursor. | Hold the middle mouse button, then press and hold the left mouse button, then move the pointer. If the buttons are released before you stop the mouse motion, the view continues spinning, if this is enabled. | Hold the middle mouse button, then press and hold the right mouse button, then move the pointer. With this method the middle mouse button may be released after the right mouse button is held pressed.  Users who use the mouse with their right hand may find this method easier than the first method. | Hold the middle mouse button, then move the pointer. |
|  | Ctrl+Shift+ | Shift+ |  | Ctrl+ |
|  | Zoom mode: hold the Ctrl and Shift keys, press the right mouse button once, then move the pointer. | Rotate mode: hold the Shift key, press the right mouse button once, then move the pointer. |  | Pan mode: hold the Ctrl key, press the right mouse button once, then move the pointer. |

### Gesture navigation

This style was tailored for use with a touchscreen and pen. Nevertheless, it can also be used with a mouse, and is recommended for use when using a Mac with a trackpad.

| Select | Zoom | Rotate view | Pan | | Tilt view |
| --- | --- | --- | --- | --- | --- |
|  |  |  |  | |  |
|  |  |  |  | |  |
| Press the left mouse button over an object you want to select. | Use the mouse wheel to zoom in and out. | Hold the left mouse button, then move the pointer. In [Sketcher](/Sketcher_Workbench "Sketcher Workbench") and other edit modes, this behavior is disabled. Hold Alt when pressing the mouse button to enter rotation mode.  To set the camera's focus point for rotation, click a point with the middle mouse button. Alternatively, aim the cursor at a point and press H on the keyboard. | Hold the right mouse button, then move the pointer. | | Hold both left and right mouse buttons, then move the pointer sideways. |
|  |  |  |  |  |  |
| Tap to select. | Drag two fingers (pinch) closer or farther apart. | Drag with one finger to rotate. Hold Alt when in the [Sketcher](/Sketcher_Workbench "Sketcher Workbench"). | Drag with two fingers. Alternatively, tap and hold, then drag. This simulates the pan with the right mouse button. | | Rotate the imaginary line formed by two touch points. This method is disabled by default. To enable, go to **Edit → Preferences → Display → Navigation**, and uncheck the "Disable touchscreen tilt gesture" checkbox. |

### Maya-Gesture navigation

In Maya-Gesture Navigation, panning, zooming, and rotating the view require the Alt key together with a mouse button; therefore, a three-button mouse is required. It's also possible to use gestures as this style was developed over the [Gesture navigation](#Gesture_navigation) style.

| Select | Zoom | | Rotate view | Pan | Tilt view |
| --- | --- | --- | --- | --- | --- |
|  |  | |  |  |  |
|  |  | Alt+ | Alt+ | Alt+ | Alt+ |
| Press the left mouse button over an object you want to select. | Use the mouse wheel to zoom in and out. Alternatively, hold Alt and the right mouse button, then move the pointer. | | Hold Alt and the left mouse button, then move the pointer. | Hold Alt and the middle mouse button, then move the pointer. | Hold Alt and both left and right mouse buttons, and then move the pointer sideways. |

### OpenCascade navigation

The OpenCascade navigation style was modeled after [OpenCascade](https://www.opencascade.com/).

| Select | Zoom | | Rotate view | | Pan | |
| --- | --- | --- | --- | --- | --- | --- |
|  |  | |  | |  | |
|  |  | Ctrl+ |  | Ctrl+ |  | Ctrl+ |
| Press the left mouse button over an object you want to select. | Use the mouse wheel to zoom in and out. Alternatively, hold Ctrl and the left mouse button, then move the pointer. | | Hold the middle mouse button, then press and hold the right mouse button, then move the pointer. Alternatively, hold Ctrl and the right mouse button, then move the pointer. | | Hold the middle mouse button, then move the pointer. It is possible to hold Ctrl. | |

### OpenInventor navigation

OpenInventor navigation (formerly Inventor) was modeled after [Open Inventor](http://en.wikipedia.org/wiki/Open_Inventor). In order to select objects, you must hold the Shift or Ctrl key.

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

### Touchpad navigation

With the Touchpad navigation style, panning, zooming, and rotating the view require a modifier key together with the touchpad. This style can also be used with a mouse.

| Select | Zoom | Rotate view | | Pan |
| --- | --- | --- | --- | --- |
|  |  |  | |  |
|  | Ctrl+Shift+ | Alt+ | Shift+ | Shift+ |
| Press the left mouse button over an object you want to select. | Hold Ctrl and Shift, then move the pointer. | Hold Alt, then move the pointer. Alternatively, hold Shift and the left button, then move the pointer. | | Hold Shift, then move the pointer. |

## Hardware support

FreeCAD also supports some [3D input devices](/3D_input_devices "3D input devices").

## Recommended navigation for macOS

On MacBooks with a trackpad the Gesture navigation works very well, but the gestures have a special meaning:

* Zoom: drag with two fingers.
* Rotate: drag with three fingers.
* Pan: Ctrl + three fingers.

Retrieved from "<http://wiki.freecad.org/index.php?title=Mouse_navigation/ko&oldid=1552133>"