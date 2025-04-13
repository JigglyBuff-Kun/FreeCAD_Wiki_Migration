---
title: 导航立方
---
## Introduction

导航立方控制，或称**导航立方**是一种用于重新定位的图形用户界面。在默认情况下，它位于3D显示界面的右上角。如果您在标准的3D视图下查看，会发现它长相如下：

![](/images/Navigation_Cube_Example.png)

导航立方由以下几部分组成：

* 指向箭头
* 主导航立方
* 微型立方菜单

All parts, except the axis indicators, can be clicked.

## Usage

### Main cube

The main cube has 26 faces: 6 main faces, 12 rectangular edge faces ([introduced in 0.20](/Release_notes_0.20 "Release notes 0.20")), and 8 corner faces. Clicking any of them reorients the camera so that its direction is perpendicular to the selected face.

## 指向箭头

导航立方有6个指向箭头：4个三角箭头，位列上、下、左、右；以及2个弯曲箭头，分列上箭头的两侧。

### Reverse view button

Clicking the round button in the top right corner of the Navigation Cube rotates the [3D view](/3D_view "3D view") 180 degrees around the vertical axis of the view.

## 微型立方菜单

在导航立方的右下方有一个小立方体。点击此立方体将弹出一个菜单，借此来改变视图类型（正交视图（orthographic），透视视图（perspective），等角视图（isometric））或执行“缩放至适当视图（zoom to fit）”。

## Customization

### Preferences

The Navigation Cube is controlled by several preferences: **Edit → Preferences... → Display → Navigation → Navigation cube**. See [Preferences Editor](/Preferences_Editor#Navigation "Preferences Editor").

### Advanced parameters

Some advanced Navigation Cube parameters cannot be changed in the [Preferences Editor](/Preferences_Editor#Navigation "Preferences Editor"). These parameters can be set manually in the [Parameter editor](/Std_DlgParameter "Std DlgParameter").

To manually set colors:

1. Start the ![](/images/Std_DlgParameter.svg) [Parameter editor](/Std_DlgParameter "Std DlgParameter").
2. In the panel on the left browse to **BaseApp → Preferences → NaviCube**.
3. Right-click the panel on the right and select **New unsigned item** from the context menu.
4. Enter the name of one of these colors:
   * **BaseColor**: the base color of all elements, the default is `3806916544` (hex: `e2e8efc0`). This color can be also set in the [Preferences Editor](/Preferences_Editor#Navigation "Preferences Editor"). [introduced in 0.21](/Release_notes_0.21 "Release notes 0.21")
   * **EmphaseColor**: the color of the texts and lines, the default depends on the **BaseColor**. It is either black: `255` (hex: `000000ff`), or white: `4294967295` (hex: `ffffffff`). [introduced in 0.21](/Release_notes_0.21 "Release notes 0.21")
   * **HiliteColor**: the color used to highlight the faces and buttons, the default is `2867003391` (hex: `aae2ffff`).
5. The color value must be entered as a 32-bit unsigned integer. Translated to the hexadecimal format this integer has the form `RRGGBBAA`. Where `AA` stands for the alpha channel (a measure for the transparency), and the other three digit pairs stand for red, green and blue. To convert a hexadecimal value to an unsigned integer you can use the [Python console](/Python_console "Python console"), enter for example `int("323232ff", 16)`.
6. Optionally set more parameters.
7. Press the Close button.

The table below lists the other advanced Navigation Cube parameters that can be set in a similar manner. Use the information from the **Type** column to create a correct new item in step 3.

| Name | Description | Type | Default |
| --- | --- | --- | --- |
| BorderWidth | The width of the edges of the cube and the borders around the buttons in pixels. | Float | 1.1 |
| ChamferSize | The size of the edges and corners as a factor of the cube size. Values should be in the 0.05 - 0.18 range. [introduced in 0.21](/Release_notes_0.21 "Release notes 0.21") | Float | 0.12 |
| FontStretch | The font width as a percentage of the default width. Use 0 or 100 for the default font width. | Integer | 0 |
| FontWeight | The font weight. Higher values make the font more bold. The effect may depend on the font. Use 0 for the default font weight. | Integer | 0 |
| FontZoom | The size of the labels:  * `FontZoom = 1.0`: Make the labels as big as possible individually. * `0.0 < FontZoom < 1.0`: Idem but limit the maximum font size. * `FontZoom = 0.0`: Idem but use the same font size for all. * `FontZoom < 0.0`: Use the same font size for all, but scaled down.   [introduced in 0.21](/Release_notes_0.21 "Release notes 0.21") | Float | 0.3 |
| OffsetX | The offset of the cube in the X direction relative to its corner position in pixels. | Integer | 0 |
| OffsetY | The offset of the cube in the Y direction relative to its corner position in pixels. | Integer | 0 |
| ShowCS | Toggles the display of the coordinate system (the X, Y and Z axis indicators). | Boolean | true |
| TextBottom | The text on the bottom face of the cube. The default value should be translated. | String | BOTTOM |
| TextFront | The text on the front face of the cube. Idem. | String | FRONT |
| TextLeft | The text on the left face of the cube. Idem. | String | LEFT |
| TextRear | The text on the rear face of the cube. Idem. | String | REAR |
| TextRight | The text on the right face of the cube. Idem. | String | RIGHT |
| TextTop | The text on the top face of the cube. Idem | String | TOP |

Retrieved from "<http://wiki.freecad.org/index.php?title=Navigation_Cube/zh-cn&oldid=1277569>"