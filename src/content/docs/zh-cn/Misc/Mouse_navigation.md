---
title: 鼠标模式
---
## Overview

FreeCAD的 '*鼠标模式* 由用于在3D空间视觉导航并与显示对象进行交互的命令组成。 FreeCAD支持多种鼠标型号导航。默认的导航风格被称为“CAD导航”，并且非常简单实用，但FreeCAD还提供了替代的导航样式，您可以根据自己的喜好进行选择。

For more information about selecting objects see [Selection methods](/Selection_methods "Selection methods").

For more information about manipulating objects see [Std TransformManip](/Std_TransformManip "Std TransformManip").

## Selecting a navigation style

* 在[首选项编辑器](/Preferences_Editor/zh-cn "Preferences Editor/zh-cn")，显示部分，“3D视图”选项卡;
* 通过在3D视图区域的空白处右键单击，然后在上下文菜单中选择“导航样式”。

## Available navigation styles

With all navigation styles, unless selecting objects from a sketch in edit mode, you must hold Ctrl to select multiple objects.

The following keyboard options are available for all styles:

* Ctrl + ![](/images/Ascii_043.svg) and Ctrl + ![](/images/Ascii_022.svg) or PgUp and PgDn to zoom in and out, respectively.
* The arrow keys, ![](/images/Ascii_017.svg)![](/images/Ascii_016.svg)![](/images/Ascii_030.svg)![](/images/Ascii_031.svg), to pan the view left/right and up/down.
* Shift + ![](/images/Ascii_017.svg) and Shift + ![](/images/Ascii_016.svg) to rotate the view by 90 degrees.

### Blender 导航

The Blender navigation style was modeled after [Blender](https://www.blender.org).

在 Blender 导航中，以[Blender](http://www.blender.org)为模型，没有单独的鼠标平移方式。为了平移视图，您必须按住 SHIFT键。2016年发生了改变，现在，您可以同时按住鼠标左右两键来移动视图。

| 选择对象 | 缩放视图 | 旋转视图 | 移动视图 | |
| --- | --- | --- | --- | --- |
|  |  |  |  | |
|  |  |  | Shift+ |  |
| Press the left mouse button over an object you want to select. | Use the mouse wheel to zoom in and out. | Hold the middle mouse button, then move the pointer. | Hold Shift and the middle mouse button, then move the pointer. Alternatively, hold both left and right mouse buttons, and then move the pointer. | |

### CAD navigation

### CAD导航（默认）

这是默认的导航样式，允许用户简单地控制视图，除了进行多选，不需要使用键盘键。

| 选择对象 | 缩放视图 | 旋转视图 第一种方法 | 旋转视图 另一种方法 | 移动视图 |
| --- | --- | --- | --- | --- |
|  |  |  |  |  |
|  |  |  |  |  |
| Press the left mouse button over an object you want to select. | Use the mouse wheel to zoom in and out. Clicking the middle mouse button re-centers the view on the location of the cursor. | Hold the middle mouse button, then press and hold the left mouse button, then move the pointer. 在按下鼠标中键时，指针所在位置确定了旋转中心。旋转操作如同令一个球绕其中心旋转。倘若开启了[spinning](/Spinning "Spinning")，那么，如果在鼠标停止移动之前松开了按键，则视图会继续旋转。 | Hold the middle mouse button, then press and hold the right mouse button, then move the pointer. 若采用这种方法，则放开中键不放右键依然可以进行视图旋转。  若用户惯用右手，便会发现此法较第一种方法更易使用。 | {{{Pan\_text}}} |
|  | Ctrl+Shift+ | Shift+ |  | Ctrl+ |
|  | {{{Zoom\_mode\_text}}} | {{{Rotate\_view\_mode\_text}}} |  | {{{Pan\_mode\_text}}} |

|Pan\_text=Hold the middle mouse button, then move the pointer.

|Zoom\_mode\_text=Zoom mode: hold the Ctrl and Shift keys, press the right mouse button once, then move the pointer.

|Rotate\_view\_mode\_text=Rotate mode: hold the Shift key, press the right mouse button once, then move the pointer.

|Pan\_mode\_text=Pan mode: hold the Ctrl key, press the right mouse button once, then move the pointer.
}}

### 手势导航（v0.16）

This style was tailored for use with a touchscreen and pen. Nevertheless, it can also be used with a mouse, and is recommended for use when using a Mac with a trackpad.

这种导航风格是针对触摸屏和笔的可用性量身定制的，但也可以与鼠标一起使用。

| 选择对象 | 缩放视图 | 旋转视图 | 移动视图 | | 倾斜视图 |
| --- | --- | --- | --- | --- | --- |
|  |  |  |  | |  |
|  |  |  |  | |  |
| Press the left mouse button over an object you want to select. | 用鼠标滚轮来进行缩放。 | 按住鼠标左键，再移动鼠标指针。 在[Sketcher](/Sketcher_Workbench "Sketcher Workbench")和其他编辑模式下，禁用此动作：按住Alt键并按下鼠标左键进入旋转模式。 | Hold the right mouse button, then move the pointer. | | 按住鼠标左右两键，再向一侧移动鼠标指针。 |
|  |  |  |  |  |  |
| Tap to select. | 二指合拢或张开拖动来进行缩放。 | Drag with one finger to rotate. 在[Sketcher](/Sketcher_Workbench "Sketcher Workbench")中时，按住Alt键。 | Drag with two fingers. 或者点击并按住，再进行拖拽。这模拟的是用鼠标右键来移动视图。 | | Rotate the imaginary line formed by two touch points. 在v0.18版中，此方法默认禁用。若要开启，请依次选择**Edit → Preferences → Display**，并反选"Disable touchscreen tilt gesture" 复选框。 |

### Maya 手势导航

In Maya-Gesture Navigation, panning, zooming, and rotating the view require the Alt key together with a mouse button; therefore, a three-button mouse is required. It's also possible to use gestures as this style was developed over the [Gesture navigation](#Gesture_navigation) style.

在Maya手势导航中，按 ALT和鼠标按钮激活所有视图动作，以便为了正确使用此导航模式，需要一个3按钮鼠标。或者，可以使用手势，因为这种模式是通过正常的手势导航模式开发的。

| 选择对象 | 缩放视图 | | 旋转视图 | 移动视图 | {{{Tilt\_view\_name}}} |
| --- | --- | --- | --- | --- | --- |
|  |  | |  |  |  |
|  |  | Alt+ | Alt+ | Alt+ | Alt+ |
| Press the left mouse button over an object you want to select. | Use the mouse wheel to zoom in and out. Alternatively, hold Alt and the right mouse button, then move the pointer. | | Hold Alt and the left mouse button, then move the pointer. | Hold Alt and the middle mouse button, then move the pointer. | Hold Alt and both left and right mouse buttons, and then move the pointer sideways. |

### OpenCascade navigation

The OpenCascade navigation style was modeled after [OpenCascade](https://www.opencascade.com/).

| 选择对象 | 缩放视图 | | 旋转视图 | | 移动视图 | |
| --- | --- | --- | --- | --- | --- | --- |
|  |  | |  | |  | |
|  |  | Ctrl+ |  | Ctrl+ |  | Ctrl+ |
| Press the left mouse button over an object you want to select. | Use the mouse wheel to zoom in and out. 或者按住Ctrl与鼠标左键，再移动鼠标指针。 | | 按住Ctrl与鼠标右键，再移动鼠标指针。 | | 按住鼠标中键，再移动鼠标指针。 | |

|Rotate\_view\_text=Hold the middle mouse button, then press and hold the right mouse button, then move the pointer.

Alternatively, hold Ctrl and the right mouse button, then move the pointer.

|Pan\_text=Hold the middle mouse button, then move the pointer. It is possible to hold Ctrl.
}}

### OpenInventor navigation

### Inventor 导航

在[Open Inventor](http://en.wikipedia.org/wiki/Open_Inventor)（不要与Autodesk Inventor混淆）建模后的 Inventor 导航中，没有鼠标选择。为了选择对象，您必须按住 CTRL键。

此模式并非基于Autodesk Inventor。

| 选择对象 | 缩放视图 | | 旋转视图 | 移动视图 |
| --- | --- | --- | --- | --- |
|  |  | |  |  |
| Shift+ |  |  |  |  |
| Hold Shift, then press the left mouse button over an object you want to select. Hold Ctrl instead to select multiple objects. | Use the mouse wheel to zoom in and out. 或者按住鼠标中键，再按下鼠标左键，最后移动鼠标指针。 | | 按住鼠标左键，再移动鼠标指针。 | 按住鼠标中键，并移动鼠标指针。 |

|Rotate\_view\_text=Hold the left mouse button, then move the pointer.

|Pan\_text=Hold the middle mouse button, then move the pointer.
}}

### OpenSCAD navigation

The OpenSCAD navigation style was modeled after [OpenSCAD](https://openscad.org/).

| Select | Zoom | | | Rotate view | | Pan |
| --- | --- | --- | --- | --- | --- | --- |
|  |  | | |  | |  |
|  |  |  | Shift+ |  |  |  |
| Press the left mouse button over an object you want to select. 0.21 and below Hold Ctrl and Shift when pressing the mouse button to drag an object in a sketch in edit mode. | Use the mouse wheel to zoom in and out. Alternatively, hold the middle mouse button, then move the pointer.  Or hold Shift and the right mouse button, then move the pointer. | | | Hold the left mouse button, then move the pointer. Alternatively, and when a sketch is in edit mode, hold the middle mouse button, then press and hold the right mouse button, then move the pointer. | | Hold the right mouse button, then move the pointer. |

### Revit 导航

The Revit navigation style was modeled after [Revit](https://en.wikipedia.org/wiki/Autodesk_Revit).

| 选择对象 | 缩放视图 | 旋转视图 | | 移动视图 | |
| --- | --- | --- | --- | --- | --- |
|  |  |  | |  | |
|  |  | Shift+ |  |  |  |
| Press the left mouse button over an object you want to select. | 用鼠标滚轮来进行缩放。 | Hold Shift and the middle mouse button, then move the pointer. 或者按住鼠标中键，再按住鼠标右键，最后移动指针。 | | 按住鼠标中间，再移动鼠标指针。 | |

|Pan\_text=Hold the middle mouse button, then move the pointer.

或者按下鼠标左右两键，再移动鼠标指针。

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

### 触摸板导航

With the Touchpad navigation style, panning, zooming, and rotating the view require a modifier key together with the touchpad. This style can also be used with a mouse.

在触摸板导航中，既不是平移，也不是缩放，也不是旋转视图，仅限于鼠标（或仅限触摸板）操作。

| 选择对象 | 缩放视图 | 旋转视图 | | 移动视图 |
| --- | --- | --- | --- | --- |
|  |  |  | |  |
|  | Ctrl+Shift+ | Alt+ | Shift+ | Shift+ |
| 在待选对象上点击鼠标左键。 | 用PageUp与PageDown键来进行缩放。 | 按住Alt键，再移动指针。 | | 按住Shift键，再移动指针。 |

|Ctrl=Ctrl
|Shift=Shift
|Alt=Alt

|Select\_text=Press the left mouse button over an object you want to select.

|Zoom\_text=Hold Ctrl and Shift, then move the pointer.

|Rotate\_view\_text=Hold Alt, then move the pointer.

Alternatively, hold Shift and the left button, then move the pointer.

|Pan\_text=Hold Shift, then move the pointer.
}}

## 硬件支持

FreeCAD 同样支持一些 [3D 输入设备](/3D_input_devices/zh-cn "3D input devices/zh-cn").

## Mac OS X 问题

最近我们从[论坛](http://forum.freecadweb.org/viewtopic.php?f=3&t=3592&start=0)的Mac用户那里得到报告，那些鼠标按键和按键组合不能像预期的那样工作。不幸的是，没有一个开发者拥有Mac，也不是其他的常规贡献者。我们需要您的帮助来确定哪些鼠标按键和按键组合起作用，以便我们可以更新此维基。

Retrieved from "<http://wiki.freecad.org/index.php?title=Mouse_navigation/zh-cn&oldid=1552143>"