---
title: マウス・ナビゲーション
---
## 概要

FreeCADの**マウス・ナビゲーション**は、3D空間を視覚的に移動し、表示されているオブジェクトを操作するためのコマンドです。FreeCADは複数のマウス・ナビゲーションスタイルをサポートしています。デフォルトのナビゲーションスタイルは[CADナビゲーション](#CAD_navigation)と呼ばれ、非常にシンプルで実用的です。FreeCADは他にもいくつかの別のナビゲーションスタイルを提供しています。ワークベンチで選択したナビゲーションスタイルが使われます。

オブジェクトの選択の詳細については、[オブジェクトの選択](/Selection_methods "Selection methods")を参照してください。

オブジェクトの操作については、[共通・変形操作](/Std_TransformManip "Std TransformManip")を参照してください。

## ナビゲーションスタイルの選択

1. 以下のいずれかの操作を行ってください：
   * [ステータス・バー](/Status_bar "Status bar")の![](/images/NavigationCAD_dark.svg)ボタンを押す。
   * [3Dビュー](/3D_view "3D view")の何もない領域を右クリックし、コンテキスト・メニューから**ナビゲーションスタイル**を選択する。
   * [設定](/Preferences_Editor#Navigation "Preferences Editor")で、メニューから**編集 → 設定**を選択し、**表示 → ナビゲーション → 3Dナビゲーション**を選択する。
2. リストからナビゲーションスタイルを選択する。
3. 必要に応じて**オービット・スタイル**を変更してください。 [ステータス・バー](/Status_bar "Status bar")の![](/images/NavigationCAD_dark.svg)ボタンを押し、**Settings → オービット・スタイル**を選択します。[設定](/Preferences_Editor#Navigation "Preferences Editor")を参照してください。
4. 必要に応じて**回転モード**を変更してください。[設定](/Preferences_Editor#Navigation "Preferences Editor")を参照してください。
5. **CAD**ナビゲーションスタイルを選択している場合、必要に応じて**アニメーションの有効化**を行ってください。[設定](/Preferences_Editor#Navigation "Preferences Editor")を参照してください。

## 選択可能なナビゲーションスタイル

いずれのナビゲーションスタイルにおいても、スケッチの編集モードでオブジェクトを選択する場合以外は、複数のオブジェクトを選択する場合はCtrlを押す必要があります

下記は全てのスタイルで有効です。

* Ctrl + ![](/images/Ascii_043.svg) および Ctrl + ![](/images/Ascii_022.svg) または PgUp と PgDn は、それぞれズームイン・ズームアウトです。
* 矢印キー ![](/images/Ascii_030.svg)![](/images/Ascii_031.svg)![](/images/Ascii_017.svg)![](/images/Ascii_016.svg) は、上下左右の並行移動です。
* Shift + ![](/images/Ascii_017.svg) および Shift + ![](/images/Ascii_016.svg) は、左右への90ど回転です。

### Blenderナビゲーション

Blenderナビゲーションスタイルは、[Blender](https://www.blender.org)に基づきます。

| 選択 | ズーム | 回転 | 平行移動 | |
| --- | --- | --- | --- | --- |
|  |  |  |  | |
|  |  |  | Shift+ |  |
| オブジェクトの上で左マウスボタンがオブジェクトの選択です。 | マウス・ホイールがズームイン・アウトです | マウスの中央ボタンを押しながらポインターを動かすと回転です。 | Shiftキーとマウスの中央ボタンを押しながらポインターを動かすと平行移動です。 あるいは、マウスの左右両ボタンを押しながらポインターを動かすと平行移動です。 | |

### CADナビゲーション

これはデフォルトのナビゲーションスタイルです。簡単に視点の制御ができます。また、複数選択以外ではキーボード上のキーを使う必要がありませ。

| 選択 | ズーム | 回転 1つ目の方法 | 回転 別の方法 | 平行移動 |
| --- | --- | --- | --- | --- |
|  |  |  |  |  |
|  |  |  |  |  |
| 左マウスボタンでオブジェクトの選択です。 | マウス・ホイールでズームイン・アウトです マウスの中央ボタンクリックで、カーソルの位置を中央にします | マウスの中央ボタンと左ボタンを押しながらポインターを左右に動かすと回転です。 ポインターを止める前にボタンを離しても、そのまま回転を続けるように設定できます。 | マウスの中央ボタンと右ボタンを押しながらポインターを左右に動かすと回転です。 この場合、右ボタンを押している間に中央ボタンを離しても大丈夫です  右利きの人には1つ目の方法よりもこちらのほうが使いやすいかもしません。 | マウスの中央ボタンを押しながらポインターを動かすと平行移動です。 |
|  | Ctrl+Shift+ | Shift+ |  | Ctrl+ |
|  | ズーム・モード: CtrlとShiftを押しながらマウスの右ボタンをクリックしてからポインターを動かすとズームです。 | 回転モード: Shiftを押しながらマウスの右ボタンをクリックしてからポインターを動かすと回転です |  | 平行移動モード: Ctrlを押しながらマウスの右ボタンをクリックしてからポインターを動かすと平行移動です。 |

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

## 特定のハードウェアのサポート

FreeCADは[3D入力デイバイス](/3D_input_devices "3D input devices")もサポートしています。

## Recommended navigation for macOS

On MacBooks with a trackpad the Gesture navigation works very well, but the gestures have a special meaning:

* Zoom: drag with two fingers.
* Rotate: drag with three fingers.
* Pan: Ctrl + three fingers.

Retrieved from "<http://wiki.freecad.org/index.php?title=Mouse_navigation/ja&oldid=1552137>"