---
title: 底图连线
---
|  |
| --- |
| Draft Wire |
| Menu location |
| Drafting → Polyline 2D Drafting → Polyline |
| Workbenches |
| [Draft](/Draft_Workbench "Draft Workbench"), [BIM](/BIM_Workbench "BIM Workbench") |
| Default shortcut |
| P L |
| Introduced in version |
| 0.7 |
| See also |
| [Draft Line](/Draft_Line "Draft Line"), [Draft BSpline](/Draft_BSpline "Draft BSpline") |
|  |

## Description

## 描绘

利用连线工具可创建一条折线(一系列互连的线段)。本工具利用[底图工具栏](/Draft_Tray "Draft Tray")中的[底图线条样式](/Draft_Linestyle "Draft Linestyle")进行绘制。除了允许用户输入2个以上的点之外，连线工具与[底图线段](/Draft_Line "Draft Line")工具的行为完全相同。

The corners of a Draft Wire can be filleted (rounded) or chamfered by changing its 数据**Fillet Radius** or 数据**Chamfer Size** respectively. It is also possible to subdivide the edges of a Draft Wire by changing its 数据**Subdivisions** property.

![](/images/Draft_Polyline_example.jpg)

多点定一连线

## Create

### Usage

See also: [Draft Tray](/Draft_Tray "Draft Tray"), [Draft Snap](/Draft_Snap "Draft Snap") and [Draft Constrain](/Draft_Constrain "Draft Constrain").

## 如何使用

1. 按下![](/images/Draft_Wire.svg) Draft Wire按钮，或先按W键再按I键。
2. 在3D视图中点击第一个点，或输入一个坐标再按![](/images/Draft_AddPoint.svg) add point按钮。
3. 在3D视图中单击另一个点，或输入一个坐标再按![](/images/Draft_AddPoint.svg) add point按钮。
4. 按Esc键或Close按钮来结束本次编辑。

### Options

The single character keyboard shortcuts available in the task panel can be changed. See [Draft Preferences](/Draft_Preferences "Draft Preferences"). The shortcuts mentioned here are the default shortcuts (for version 1.0).

## 选项

* 按A键或![](/images/Draft_FinishLine.png) Finish按钮来结束当前连线的绘制，并关闭对此连线的编辑。
* 按O键或![](/images/Draft_CloseLine.png) Close按钮令当前连线闭合，即一条线段将连接当前连线首尾两点，从而构成一个面。而构成一个面则最少需要三个点。
* 按W键或![](/images/Draft_Wipe.svg) Wipe按钮来移除刚画好的线段，但是将继续保持从前一个点的位置继续编辑连线。
* 按U键或![](/images/Draft_SelectPlane.svg) [Set WP](/Draft_SelectPlane "Draft SelectPlane")按钮根据前一个点的方位来调整当前的工作平面。
* 在创建一个点后，按X、Y或 Z键来在对应轴上约束下一个点。
* 为了手动输入坐标，每当设置好X、Y、Z分量后都要按下Enter键。当您需要以特定坐标值插入一个点时，可点击![](/images/Draft_AddPoint.svg) 按钮。
* 按R键或点击relative多选框切换至*相对* 模式。若开启了相对模式，则后一个相对于前一个的坐标而定；否则采用绝对坐标，即相对原点(0,0,0)定后一个点的坐标。
* 按T键或点击continue多选框切换至*连续（绘制）*模式。若开启了连续模式，则连线工具在绘制一条连线后会自动重启，即允许您在不用点击连线工具的情况下，继续绘制下一条连线。
* 按L键或点击filled多选框切换至*填充*模式。若开启了填充模式，则一条闭合的连线将创建出一个填充面(数据**Make Face** `true`); 否则，闭合的连线将不会创建出一个面(数据**Make Face** `false`)。

:   *请注意:* 若连线存在自相交的情况，便不能对其进行填充存在，因为它将无法创建对应真面（proper face）。如果对连线填充后却无法看到它本身的形状，就手动将数据**Make Face**设置为`false`来查看连线。

* 按住Ctrl键，将当前所绘点强制放在与之最近的[捕捉](/Draft_Snap "Draft Snap")位置处。
* 按住Shift键，将下一个点的位置[约束](/Draft_Constrain "Draft Constrain")于上一个的水平方向或垂直方向上。
* 按Ctrl+Z组合键或点击![](/images/Draft_UndoLine.png) Undo按钮来撤销当前操作，返回上一个操作点。
* 按Esc键或Close按钮来终止当前连线命令；但此前绘制好的线段仍会保留。

## Join

### Usage

1. The end points of the [Draft Lines](/Draft_Line "Draft Line") and/or Draft Wires to be joined must be exactly coincident. If required first adjust points to ensure that this is the case.
2. Select two or more [Draft Lines](/Draft_Line "Draft Line") and/or Draft Wires.
3. There are several ways to invoke the command:
   * Press the ![](/images/Draft_Wire.svg) [Draft Wire](/Draft_Wire "Draft Wire") button.
   * Select the **Drafting → ![](/images/Draft_Wire.svg) Polyline** option from the menu.
   * Use the keyboard shortcut: P then L.

## Notes

双击树状视图中的元素或点击![](/images/Draft_Edit.svg) [Draft Edit](/Draft_Edit "Draft Edit")按钮即可编辑连线。接下来，您可以将其中的点移到一个新位置，或点击![](/images/Draft_AddPoint.svg) add point或![](/images/Draft_DelPoint.svg) remove point按钮再点选连线来增添其中的点。

## Properties

See also: [Property editor](/Property_editor "Property editor").

A Draft Wire object is derived from a [Part Part2DObject](/Part_Part2DObject "Part Part2DObject") and inherits all its properties. It also has the following additional properties:

### Data

Draft

### 数据

* 数据**Start**: 指定连线中的第一个点。
* 数据**End**: 指定连线中的最后一个点，如果是闭合连线则不计入初始点。
* 数据**Closed**: 指定连线是否闭合。如果连线原本是开放的，此值为`false`；将其设置为`true`则为会原连线再绘制一条线段使之闭合。如果连线原本就是闭合的，此值为`true`；将其设置为`false`则会从连线中去掉最后一条线段，令其变为开放连线。
* 数据**Chamfer Size**: specifies the size of the chamfers (straight segments) created on the corners of the wire.
* 数据**Fillet Radius**: specifies the radius of the fillets (arc segments) created on the corners of the wire.
* 数据**Make Face**: 指定是否令连线构成一个面。如果为`true`则创建一个面，否则仅绘制本对象中的边。如果数据**Closed**为`true`时，本属性才会生效。

:   *请注意:*如果连线自相交，则不要将数据**Make Face**设置为`true`，因为在这种情况下不能用它来创建一个真面（proper face）。

* 数据**Subdivisions**: 指定连线中每条线段内的内部节点数量。[introduced in 0.16](/Release_notes_0.16 "Release notes 0.16")
* 数据**Length**: 指定整条连线的长度（只读属性）。

### View

Draft

### 视图

* 视图**End Arrow**: 如果此项为`true`，将在连线最后一点上显示一个符号，因此可将其用作一条注解线（annotation line）。
* 视图**Arrow Size**: 指定连线末尾处所示符号的大小。
* 视图**Arrow Type**: 指定连线末尾处所示的符号类型，可以为"Dot（点）", "Circle（圈）", "Arrow（箭头）", 或"Tick"。
* 视图**Pattern**: 指定一种[图案](/Draft_Pattern "Draft Pattern")来填写闭合连线所构成的面。只有在数据**Make Face**为`true`且视图**Display Mode**为"Flat Lines"时，此属性才会生效。
* 视图**Pattern Size**: 指定[图案](/Draft_Pattern "Draft Pattern")的大小。

## 脚本

*参见:* [Draft API](/Draft_API "Draft API")与[FreeCAD Scripting Basics](/FreeCAD_Scripting_Basics "FreeCAD Scripting Basics")。

借助下列函数即可在[宏](/Macros "Macros")与[Python](/Python "Python")控制台中使用连线绘制工具：

```
wire = make_wire(pointslist, closed=False, placement=None, face=None, support=None)
wire = make_wire(Part.Wire, closed=False, placement=None, face=None, support=None)

```

* 利用指定的一个点列表`pointslist`来创建一个`Wire`对象。
  + 列表中的每个点都被定义为`FreeCAD.Vector`，单位为毫米。
  + 或者, 输入也可以是一个`Part.Wire`，从中提取各点。
* 如果`closed`为`True`，或者如果连线中的第一个点与最后一个点为同一点，则连线是闭合的。
* 如果指定了`placement`，则在此位置创建连线；否则在原点处创建连线。
* 如果`face`为`True`，且连线是闭合的，则连线将构成一个面，即表现为一个填充图形。

示例：

```
import FreeCAD as App
import Draft

doc = App.newDocument()

p1 = App.Vector(0, 0, 0)
p2 = App.Vector(1000, 1000, 0)
p3 = App.Vector(2000, 0, 0)

wire1 = Draft.make_wire([p1, p2, p3], closed=True)
wire2 = Draft.make_wire([p1, 2*p3, 1.3*p2], closed=True)
wire3 = Draft.make_wire([1.3*p3, p1, -1.7*p2], closed=True)

doc.recompute()

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Draft_Wire/zh-cn&oldid=1472875>"