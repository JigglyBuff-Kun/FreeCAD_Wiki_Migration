---
title: 底图线段
---
|  |
| --- |
| Draft Line |
| Menu location |
| Draft → Line |
| Workbenches |
| [Draft](/Draft_Workbench "Draft Workbench"), [Arch](/Arch_Workbench "Arch Workbench") |
| Default shortcut |
| L I |
| Introduced in version |
| 0.7 |
| See also |
| [Draft Wire](/Draft_Wire "Draft Wire"), [Draft Point](/Draft_Point "Draft Point") |
|  |

## Description

## 描述

线段工具用于创建两点定义的线段。它根据[Draft Tray](/Draft_Tray "Draft Tray")中[Draft Linestyle](/Draft_Linestyle "Draft Linestyle")的设置来绘制线段。此工具与[Draft Wire](/Draft_Wire "Draft Wire")工具的行为基本相同，唯独线段工具在绘制完一条两点的线段即停止工作。

A Draft Line is in fact a [Draft Wire](/Draft_Wire "Draft Wire") with only two points.

![](/images/Draft_Line_example.jpg)

根据两点创建一条线段

## Usage

See also: [Draft Tray](/Draft_Tray "Draft Tray"), [Draft Snap](/Draft_Snap "Draft Snap") and [Draft Constrain](/Draft_Constrain "Draft Constrain").

## 如何使用

1. 按下![](/images/Draft_Line.svg) [Draft Line](/Draft_Line "Draft Line")按钮, 或先按L再按I键。
2. 在3D视图中单击第一个点，或输入坐标并按下![](/images/Draft_AddPoint.svg) add point按钮。
3. 在3D视图中单击第二个点，或输入坐标并按下![](/images/Draft_AddPoint.svg) add point键。

## Options

The single character keyboard shortcuts available in the task panel can be changed. See [Draft Preferences](/Draft_Preferences "Draft Preferences"). The shortcuts mentioned here are the default shortcuts (for version 1.0).

## 选项

* 设置好第一个点后，按X、Y或Z键来约束第二点的对应坐标。
* 为了手动输入坐标值，可以在每次输入X、Y与Z分量后按Enter键。
  + 您也通过指定"Length（长度）"与"Angle（角度）"的值来定义点的极坐标。点击"Angle"边上的复选框来约束线段所指向的角度。您还可以点击![](/images/Draft_AddPoint.svg) add point按钮来插入点。
* 按R键或点击relative复选框切换至*相对坐标*模式。如果开启了相对坐标模式，则第二个点的坐标将相对于第一个点而定（即以第一个点为基准）；否则两点采用绝对坐标定义，即基于原点(0,0,0)而定。
* 按T键或点击continue复选框切换至*连续*模式。如果开启了连续模式，则在指定某线段第二个端点后，线段绘制工具将自动重启并继续下条线段的绘制，而不必再次按线段工具按钮。
* 在将端点强制绘至最近[捕捉](/Draft_Snap "Draft Snap")位置时，按住Ctrl。
* 在绘制第二端点时，按住Shift键来[约束（constrain）](/Draft_Constrain "Draft Constrain")它的位置位于第一个点的水平方向或垂直方向。
* 按Ctrl+Z键或点击![](/images/Draft_UndoLine.png) Undo按钮来撤销最近绘制的线段。
* 按Esc键或点击Close按钮来终止当前命令。

## Notes

通过双击树状视图（tree view）中的元素或点击![](/images/Draft_Edit.svg) [Draft Edit](/Draft_Edit "Draft Edit")按钮即可编辑对应线段。届时，您就可将构成线段的点移动到预定的新位置。

## Preferences

See also: [Preferences Editor](/Preferences_Editor "Preferences Editor") and [Draft Preferences](/Draft_Preferences "Draft Preferences").

* To change the initial focus of the task panel to the **Length** input box: **Edit → Preferences... → Draft → General → Set focus on Length instead of X coordinate**. Note that you must move the pointer in the [3D view](/3D_view "3D view") for the change to take effect.
* If the **Edit → Preferences... → Draft → General → Create Part primitives if possible** option is checked, the command will create a [Part Line](/Part_Line "Part Line") instead of a Draft Line.

## Properties

## 属性

线段对象享有[Draft Wire](/Draft_Wire "Draft Wire")的所有属性，但是其中仅有部分属性适用于线段。

## Scripting

## 脚本

*参见:* [Draft API](/Draft_API "Draft API") 与 [FreeCAD Scripting Basics](/FreeCAD_Scripting_Basics "FreeCAD Scripting Basics")。

借助下列函数即可在[宏](/Macros "Macros")与[Python](/Python "Python")控制台中使用线段绘制工具：

```
line = make_line(p1, p2)
line = make_line(LineSegment)
line = make_line(Shape)

```

* 创建点`p1`与点`p2`间的一条 `Line`对象，每个点由其`FreeCAD.Vector`来定义，且以毫米为单位。
* 根据`Part.LineSegment`来创建一条`Line`对象。
* 从指定`Shape`的第一个顶点至最后一个顶点创建一条`Line`对象。

示例：

```
import FreeCAD as App
import Draft

doc = App.newDocument()

p1 = App.Vector(0, 0, 0)
p2 = App.Vector(1000, 500, 0)
p3 = App.Vector(-250, -500, 0)
p4 = App.Vector(500, 1000, 0)

line1 = Draft.make_line(p1, p2)
line2 = Draft.make_line(p3, p4)

doc.recompute()

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Draft_Line/zh-cn&oldid=1472847>"