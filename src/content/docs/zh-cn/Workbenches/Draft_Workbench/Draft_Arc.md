---
title: 底图绘弧
---
|  |
| --- |
| Draft Arc |
| 菜单位置 |
| Draft → Arc |
| 所属工作台 |
| [Draft](/Draft_Workbench/zh-cn "Draft Workbench/zh-cn"), [Arch](/Arch_Workbench/zh-cn "Arch Workbench/zh-cn") |
| 默认快捷键 |
| A R |
| 版本介紹 |
| 0.7 |
| 参阅 |
| [Draft Circle](/Draft_Circle/zh-cn "Draft Circle/zh-cn"), [Draft Ellipse](/Draft_Ellipse/zh-cn "Draft Ellipse/zh-cn") |
|  |

## 描述

底图绘弧工具通过用户输入的4个点（圆的中心点、半径、第一个点与最后一个点），或通过拾取切线，或上述若干组合来在当前的[work plane](/index.php?title=Draft_SelectPlane/zh-cn&action=edit&redlink=1 "Draft SelectPlane/zh-cn (page does not exist)")上创建一个圆弧。它将根据[Draft Tray](/Draft_Tray/zh-cn "Draft Tray/zh-cn")中的[Draft Linestyle](/Draft_Linestyle/zh-cn "Draft Linestyle/zh-cn")来创建圆弧。

A Draft Arc is in fact a [Draft Circle](/Draft_Circle "Draft Circle") with a 数据**First Angle** that is not the same as its 数据**Last Angle**.

![](/images/Draft_Arc_example.jpg)

通过中心点、半径、弧的初始点、弧的结束点这4点所定义的圆弧

## Usage

See also: [Draft Tray](/Draft_Tray "Draft Tray"), [Draft Snap](/Draft_Snap "Draft Snap") and [Draft Constrain](/Draft_Constrain "Draft Constrain").

## 如何使用

1. 按下![](/images/Draft_Arc.png) Draft Arc按钮，或先按A键再按R键。
2. 在3D视图中点击第一个点，或输入一个 坐标并按![](/images/Draft_AddPoint.svg) add point按钮。
3. 在3D视图中点击第二个点，或输入一个半径值。
4. 在3D视图中点击第三个点，或输入一个起始角度。
5. 在3D视图中点击第四个点，或输入一个张角。

## Options

The single character keyboard shortcuts available in the task panel can be changed. See [Draft Preferences](/Draft_Preferences "Draft Preferences"). The shortcuts mentioned here are the default shortcuts (for version 1.0).

## 选项

* 绘弧工具的主要用法就是通过拾取四个点：中点、一个圆周上的点，弧的起始及其终点。
  + 通过按Alt键，您能以一条切线而非拾取的点来定义弧所基于的圆。就此，您可以通过选择的一个、两个或三个切线来构建若干种不同的圆。
* 弧的方向取决于鼠标的移动操作。如果您在输入第三个点后，沿着顺时针移动鼠标，则所创的弧为顺时针。为了令其为逆时针方向，可令鼠标简单地向第三个点的另一侧移动，直到弧以另一个方向开始绘制。
* 为了手动输入坐标，可在简单地输入每一个X、Y、Z分量后，再按Enter键。当您需要在特定位置处插入点时，可以按![](/images/Draft_AddPoint.svg) add point按钮。
* 按T或点击*continue*多选框切换至连续模式。如果您开启了连续模式，则绘制完一条弧后，将立即重新开始绘制下一条弧，这可使您在绘制另一条弧时，无需再次按绘制弧工具按钮。
* 按住Ctrl可将您正在绘制的点强制[捕捉](/Draft_Snap "Draft Snap")至最近的捕捉位置上，这与距离无关。
* 按住Shift可将您正在绘制的点[约束](/Draft_Constrain "Draft Constrain")在相对于中点的水平方向或垂直方向。
* 按Esc或Close按钮来终止当前命令。

## Notes

通过双击树状视图（tree view）中的元素或点击![](/images/Draft_Edit.svg) [Draft Edit](/index.php?title=Draft_Edit/zh-cn&action=edit&redlink=1 "Draft Edit/zh-cn (page does not exist)")按钮即可编辑对应弧。届时，您就可将中心点移动到预定的新位置。

## Preferences

See also: [Preferences Editor](/Preferences_Editor "Preferences Editor") and [Draft Preferences](/Draft_Preferences "Draft Preferences").

* If the **Edit → Preferences... → Draft → General → Create Part primitives if possible** option is checked, the command will create a [Part Circle](/Part_Circle "Part Circle") instead of a Draft Circle.

## Properties

## 属性

弧对象享有[Draft Circle](/Draft_Circle/zh-cn "Draft Circle/zh-cn")中的所有属性，但是有些属性仅对圆形而言才有意义。

## Scripting

## 脚本

*参见:* [Draft API](/index.php?title=Draft_API/zh-cn&action=edit&redlink=1 "Draft API/zh-cn (page does not exist)") 与 [FreeCAD Scripting Basics](/FreeCAD_Scripting_Basics/zh-cn "FreeCAD Scripting Basics/zh-cn")。

在[宏](/Macros "Macros")中与[Python](/index.php?title=Python/zh-cn&action=edit&redlink=1 "Python/zh-cn (page does not exist)")控制台中可使用弧形工具，方法是使用绘制圆的函数，再辅以额外的参数。
参见[底图圆形工具](/Draft_Circle/zh-cn "Draft Circle/zh-cn")中的有关信息。

示例：

```
import FreeCAD as App
import Draft

doc = App.newDocument()

arc1 = Draft.make_circle(200, startangle=0, endangle=90)
arc2 = Draft.make_circle(500, startangle=20, endangle=160)
arc3 = Draft.make_circle(750, startangle=-30, endangle=-150)

doc.recompute()

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Draft_Arc/zh-cn&oldid=1472895>"