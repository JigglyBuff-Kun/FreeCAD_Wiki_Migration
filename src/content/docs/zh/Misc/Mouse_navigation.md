---
title: 鼠标控制模式
---
## Overview

```
Freecad的鼠标控制模式由用于三维空间可视化导航和与显示对象交互的命令组成.Freecad支持多个鼠标控制导航样模式。默认的导航样式被称为“CAD导航”，非常简单和实用，但FreeCad还提供了多种可选的导航样式，您可以根据自己的喜好进行选择。

```

For more information about selecting objects see [Selection methods](/Selection_methods "Selection methods").

For more information about manipulating objects see [Std TransformManip](/Std_TransformManip "Std TransformManip").

## Selecting a navigation style

* 在[首选项编辑器](/Preferences_Editor "Preferences Editor")中，选择的 **编辑 → 首选项 → 显示 → 3D视图 → 3D导航**

在三维视图区域的空白处单击鼠标右键，然后在弹出菜单中选择**导航样式 →...**”。

## Available navigation styles

With all navigation styles, unless selecting objects from a sketch in edit mode, you must hold Ctrl to select multiple objects.

The following keyboard options are available for all styles:

* Ctrl + ![](/images/Ascii_043.svg) and Ctrl + ![](/images/Ascii_022.svg) or PgUp and PgDn to zoom in and out, respectively.
* The arrow keys, ![](/images/Ascii_017.svg)![](/images/Ascii_016.svg)![](/images/Ascii_030.svg)![](/images/Ascii_031.svg), to pan the view left/right and up/down.
* Shift + ![](/images/Ascii_017.svg) and Shift + ![](/images/Ascii_016.svg) to rotate the view by 90 degrees.

### Blender导航

The Blender navigation style was modeled after [Blender](https://www.blender.org).

Blender导航样式参照[Blender](http://www.blender.org)的操作。以前一直需要按下SHIFT配合鼠标才能完成视图平移. 在2016年Blender增加了一个功能改变了这一情况。现在可以通过同时按下鼠标左键和右键进行视图平移。

| 选取 | 缩放 | 旋转视图 | 平移 | |
| --- | --- | --- | --- | --- |
|  |  |  |  | |
|  |  |  | Shift+ |  |
| Press the left mouse button over an object you want to select. | Use the mouse wheel to zoom in and out. | Hold the middle mouse button, then move the pointer. | Hold Shift and the middle mouse button, then move the pointer. Alternatively, hold both left and right mouse buttons, and then move the pointer. | |

### CAD navigation

### CAD导航(默认)

这是默认的导航样式，其允许用户对视图进行简单的控制，并且不需要使用键盘键，除非进行多个选择。

| 选择 | 缩放 | 旋转视图 第一种方法 | 旋转视图 替代方法 | 平移 |
| --- | --- | --- | --- | --- |
|  |  |  |  |  |
|  |  |  |  |  |
| Press the left mouse button over an object you want to select. | Use the mouse wheel to zoom in and out. Clicking the middle mouse button re-centers the view on the location of the cursor. | Hold the middle mouse button, then press and hold the left mouse button, then move the pointer. 鼠标中键按下时光标的位置决定了旋转操作的旋转中心。旋转操作就像旋转一个围绕中心旋转的球。如果在停止鼠标移动之前释放按钮，视图将继续[旋转](/Spinning "Spinning")(此选项启用时)。 | Hold the middle mouse button, then press and hold the right mouse button, then move the pointer. 该方法下鼠标中键可以在鼠标右键按下后放开。  习惯用右手的用户可能会觉得这种方法比第一种方法要容易些。 | {{{Pan\_text}}} |
|  | Ctrl+Shift+ | Shift+ |  | Ctrl+ |
|  | {{{Zoom\_mode\_text}}} | {{{Rotate\_view\_mode\_text}}} |  | {{{Pan\_mode\_text}}} |

|Pan\_text=Hold the middle mouse button, then move the pointer.

|Zoom\_mode\_text=Zoom mode: hold the Ctrl and Shift keys, press the right mouse button once, then move the pointer.

|Rotate\_view\_mode\_text=Rotate mode: hold the Shift key, press the right mouse button once, then move the pointer.

|Pan\_mode\_text=Pan mode: hold the Ctrl key, press the right mouse button once, then move the pointer.
}}

### 手势导航

This style was tailored for use with a touchscreen and pen. Nevertheless, it can also be used with a mouse, and is recommended for use when using a Mac with a trackpad.

这种导航风格是0.16版引入的为触摸屏和笔的可用性而量身定做的，但也可以配合鼠标使用。

| 选择 | 缩放 | 旋转视图 | 平移 | | 倾斜视图 |
| --- | --- | --- | --- | --- | --- |
|  |  |  |  | |  |
|  |  |  |  | |  |
| Press the left mouse button over an object you want to select. | 使用鼠标滚轮缩放。 | 按住鼠标左键，然后移动鼠标。 在[草图工作台](/Sketcher_Workbench "Sketcher Workbench")和其他编辑模式下，此行为被禁用。按下鼠标按钮进入旋转模式的同时时按住键Alt。 | Hold the right mouse button, then move the pointer. | | 按住鼠标左键和右键，然后将鼠标移到一边。 |
|  |  |  |  |  |  |
| Tap to select. | 将两个手指（捏）拉近或拉远。 | Drag with one finger to rotate. 在[草图工作台](/Sketcher_Workbench "Sketcher Workbench")中按下Alt 。 | Drag with two fingers. 或者，轻按并按住，然后拖动。这将使用鼠标右键模拟平移。 | | Rotate the imaginary line formed by two touch points. 在v0.18上，默认情况下禁用此方法。要启用，请转到**编辑→首选项→显示**，然后取消选中“禁用触摸屏倾斜手势”复选框。 |

### Maya手势导航

In Maya-Gesture Navigation, panning, zooming, and rotating the view require the Alt key together with a mouse button; therefore, a three-button mouse is required. It's also possible to use gestures as this style was developed over the [Gesture navigation](#Gesture_navigation) style.

在maya手势导航中，所有视图移动都是ALT 和鼠标按钮激活的，因此需要有一个3按钮鼠标才能正确使用此导航模式。另外，也可以使用手势，因为该模式是在常规手势导航模式基础上下开发的。

| 选取 | 缩放 | | 旋转视图 | 平移 | {{{Tilt\_view\_name}}} |
| --- | --- | --- | --- | --- | --- |
|  |  | |  |  |  |
|  |  | Alt+ | Alt+ | Alt+ | Alt+ |
| Press the left mouse button over an object you want to select. | Use the mouse wheel to zoom in and out. Alternatively, hold Alt and the right mouse button, then move the pointer. | | Hold Alt and the left mouse button, then move the pointer. | Hold Alt and the middle mouse button, then move the pointer. | Hold Alt and both left and right mouse buttons, and then move the pointer sideways. |

### OpenCascade

The OpenCascade navigation style was modeled after [OpenCascade](https://www.opencascade.com/).

| 选择 | 缩放 | | 旋转视图 | | 平移 | |
| --- | --- | --- | --- | --- | --- | --- |
|  |  | |  | |  | |
|  |  | Ctrl+ |  | Ctrl+ |  | Ctrl+ |
| Press the left mouse button over an object you want to select. | Use the mouse wheel to zoom in and out. 或者，按住Ctrl和鼠标左键，然后移动指针。 | | 按住Ctrl和鼠标右键，然后移动指针。 | | 按住鼠标中键，然后移动鼠标。 | |

|Rotate\_view\_text=Hold the middle mouse button, then press and hold the right mouse button, then move the pointer.

Alternatively, hold Ctrl and the right mouse button, then move the pointer.

|Pan\_text=Hold the middle mouse button, then move the pointer. It is possible to hold Ctrl.
}}

### OpenInventor navigation

### openinventor导航

在Openinventor导航中，参照[Open Inventor](http://en.wikipedia.org/wiki/Open_Inventor)(不要与Autodesk的inventor混淆)的操作，不能仅靠鼠标进行选取操作。要选择对象，必须按住Ctrl键。

该模式不基于Autodesk Inventor

| 选择 | 缩放 | | 旋转视图 | 平移 |
| --- | --- | --- | --- | --- |
|  |  | |  |  |
| Shift+ |  |  |  |  |
| Hold Shift, then press the left mouse button over an object you want to select. Hold Ctrl instead to select multiple objects. | Use the mouse wheel to zoom in and out. 或者，按住鼠标中键，然后按住鼠标左键，然后移动指针。 | | 按住鼠标左键，然后移动指针。 | 按住鼠标中键，然后移动鼠标。 |

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

### Revit导航

The Revit navigation style was modeled after [Revit](https://en.wikipedia.org/wiki/Autodesk_Revit).

| 选择 | 缩放 | 旋转视图 | | Pan | |
| --- | --- | --- | --- | --- | --- |
|  |  |  | |  | |
|  |  | Shift+ |  |  |  |
| Press the left mouse button over an object you want to select. | 使用鼠标滚轮放大和缩小。 | Hold Shift and the middle mouse button, then move the pointer. 或者，按住鼠标中键，然后按住鼠标右键，然后移动指针。 | | 按住鼠标中键，然后移动指针。 | |

|Pan\_text=Hold the middle mouse button, then move the pointer.

或者，按住鼠标左键和右键，然后移动指针。

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

### 触控板导航

With the Touchpad navigation style, panning, zooming, and rotating the view require a modifier key together with the touchpad. This style can also be used with a mouse.

触控板导航中,平移、缩放或视图旋转操作都需要一个辅助按键和触控板一起配合。

| 选取 | 缩放 | 旋转视图 | | 平移 |
| --- | --- | --- | --- | --- |
|  |  |  | |  |
|  | Ctrl+Shift+ | Alt+ | Shift+ | Shift+ |
| 在要选择的对象上按鼠标左键。 | 使用 PageUp和PageDown进行缩放操作. | 按住Alt,然后移动鼠标. | | 按住 Shift,然后移动鼠标. |

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

FreeCAD 也支持一些[3D输入设备](/3D_input_devices "3D input devices").

## Mac OS X问题

最近我们[在论坛中](http://forum.freecadweb.org/viewtopic.php？f=3&t=3592&start=0)收到了来自Mac用户的报告称这些鼠标按钮和按键组合不能正常工作。不幸的是，没有一个开发人员拥有Mac，其他的常规志愿者也没有。我们需要您的帮助来确定哪些鼠标按钮和组合键有效，以便我们可以更新此wiki。

Retrieved from "<http://wiki.freecad.org/index.php?title=Mouse_navigation/zh&oldid=1552135>"