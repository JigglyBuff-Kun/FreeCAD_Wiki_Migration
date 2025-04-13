---
title: 建筑墙体
---
:::caution
THIS COMMAND IS PART OF THE INTEGRATEDBIM WORKBENCHIN V1.0This page has been updated for that version.
:::

|  |
| --- |
| 建筑墙体 |
| 菜单位置 |
| Arch → Wall |
| 所属工作台 |
| [Arch](/Arch_Workbench "Arch Workbench") |
| 默认快捷键 |
| W A |
| 版本介紹 |
| - |
| 参阅 |
| [Arch Structure](/Arch_Structure "Arch Structure") |
|  |

## 描述

利用此工具可从头或基于其他[几何图形（shape）](/Part_Workbench "Part Workbench")或[网格（mesh）](/Mesh_Workbench "Mesh Workbench")对象来构建墙体。构建墙体并非一定要基于其他对象，仅需长、宽、高三种属性来描述其长方体外观即可。在利用存在的几何图形构建墙体时，可以以下列对象为基础：

* **线性2D对象**，例如线段、连线、弧线或草图，在利用这些对象绘制墙体时，您可以改变墙体的厚度，对齐方式(右对齐、左对齐或居中对齐)及其高度。唯独长度属性不可更改。
* **平面**，在利用此对象绘制墙体时，您只能改变高度属性。而无法更改长度与宽度属性。如果所基于的平面是一个顶点，however, the wall will use the width property instead of height, allowing you to build walls from space-like objects or mass studies.
* **实体**，在利用此对象绘制墙体时，长、宽、高三种属性皆不可改变。墙体简单地用此实体作为其外观形状。
* **网格**，在利用此对象绘制墙体时，所基于的网格必须为一个闭合、manifold的实体。

![](/images/Arch_Wall_example.jpg)

基于线段、连线、平面、实体与草图来构建墙体

我们也可以对的墙体执行添加或移除操作。在执行添加操作时，将令其他对象的形状与墙体相融；移除则是从墙体中去除目标对象。利用[Arch Add](/Arch_Add "Arch Add")与[Arch Remove](/Arch_Remove "Arch Remove")工具即可实现墙体的增减操作。Additions and subtractions have no influence over wall parameters such as height and width, which can still be changed. Walls can also have their height automatic, if they are included into a higher-level object such as [floors](/Arch_Floor "Arch Floor"). The height must be kept at 0, then the wall will adopt the height specified in the parent object.

当若干墙体相交的时候，您需要将它们置于同一[楼层（floor）](/Arch_Floor "Arch Floor")上，再实现它们在几何方面上的相交。

## 如何使用

### 从头绘制墙体

1. 按下![](/images/Arch_Wall.svg) Arch Wall按钮，或先后依次按下W与 A键
2. 在3D视图中点选第一个点，或输入一个 坐标
3. 在3D视图中点选第二个点，或输入一个 坐标

### 在所选对象的基础之上绘制墙体

1. 选择一个或多个基础几何对象(底图对象、草图等等)
2. 按下![](/images/Arch_Wall.svg) Arch Wall按钮，或先后依次按下W与A键
3. 调整需要修改的属性，如高度或宽度。

## 选项

* The height, width and alignment of a wall can be set during drawing, via the task panel.
* When snapping a wall to an existing wall, both walls will be joined into one. The way the two walls are joined depends on their properties: If they have the same width, height and alignment, and if the option "join base sketches" is enabled in the Arch preferences, the resulting wall will be one object based on a sketch made of several segments. Otherwise, the latter wall will be added to the first one as addition.
* Press X, Y or Z after the first point to constrain the second point on the given axis.
* To enter coordinates manually, simply enter the numbers, then press Enter between each X, Y and Z component.
* Press R or click the checkbox to check/uncheck the **Relative** button. If relative mode is on, the coordinates of the second point are relative to the first one. If not, they are absolute, taken from the (0,0,0) origin point.
* Press Shift while drawing to [constrain](/Draft_Constrain "Draft Constrain") your second point horizontally or vertically in relation to the first one.
* Press Esc or the Cancel button to abort the current command.
* Double-clicking on the wall in the tree view after it is created allows you to enter edit mode and access and modify its additions and subtractions
* Multi-layer walls can be easily created by building several walls from the same baseline. By setting their Align property to either left or right, and specifying an Offset value, you can effectively construct several wall layers. Placing a window in such a wall layer will propagate the opening to the other wall layers based on the same baseline.
* Walls can also make use of [Multi-Materials](/Arch_MultiMaterial "Arch MultiMaterial"). When using a multi-material, the wall will become multi-layer, using the thicknesses specified by the multi-material. Any layer with a thickness of zero will have its thickness defined automatically by the remaining space defined by the Wall's Width value, after subtracting the other layers.
* Walls can be made to display blocks, instead of one single solid, by turning their 数据**Make Blocks** property on. The size and offset of blocks can be configured with different properties, and the amount of blocks is automatically calculated.

## Snapping

Snapping works a bit differently with Arch walls than other Arch and Draft objects. If a wall has a baseline object, snapping will anchor to the base object, instead of the wall geometry, allowing to easily align walls by their baseline. If, however, you specifically want to snap to the wall geometry, pressing Ctrl will switch snapping to the wall object.

![](/images/Arch_wall_snap.jpg)

Second wall snapping perpendicularly to the first one

## 属性

An Arch Wall object shares the common properties and behaviors of all [Arch Components](/Arch_Component "Arch Component").

### Data

Blocks

* 数据**Block Height**: The height of each block.
* 数据**Block Length**: The length of each block.
* 数据**Count Broken**: The number of broken blocks (read-only).
* 数据**Count Entire**: The number of entire blocks (read-only).
* 数据**Joint**: The size of the joints, the empty space, between blocks.
* 数据**Make Blocks**: Enables block generation.
* 数据**Offset First**: The horizontal offset of the first and every uneven line of blocks.
* 数据**Offset Second**: The horizontal offset of the second and every even line of blocks.

Component

See [Arch Component](/Arch_Component#Properties "Arch Component").

IFC

See [Arch Component](/Arch_Component#Properties "Arch Component").

IFC Attributes

See [Arch Component](/Arch_Component#Properties "Arch Component").

Wall

:   ![](/images/Sketch_vs_Wall.jpg)

* 数据**Align**: The alignment of the wall on its baseline(s): Left, Right or Center. With Left and Right modes the side where the wall is created depends on the direction of each individual baseline. In other words, the direction of the individual edges of the Base object (Sketch/ArchSketch) is taken into account, giving finer control over each wall segment. See the diagram above for more details. Arcs in sketches are always counter-clockwise. When a curved segment of a wall is left aligned, the inner edge of the segment coincides with the arc in the sketch. See also **Override Align**.
* 数据**Area**: Area of the whole wall, separation into blocks makes no difference (read-only).
* 数据**Face**: The index of the face from the base object to use. If the value is not set or 0, the whole object is used.
* 数据**Height**: The height of the wall. Ignored if the wall is based on a solid. If set to zero, and the wall is inside a [floor](/Arch_Floor "Arch Floor") object with its height defined, the wall will automatically take the value of the floor height.
* 数据**Length**: The length of the wall. The value can be edited if the wall is based on an unconstrained sketch with a single edge, or on a [Draft Wire](/Draft_Wire "Draft Wire") with a single edge, else the value is read-only. [introduced in 1.0](/Release_notes_1.0 "Release notes 1.0") The value when the property is read-only is more accurate. It is based on the medium of the wall if segments have different 数据**Width**, 数据**Align** and/or 数据**Offset** properties. Note that there can still be inaccuracies if the wall is complex, for example if it has T-junctions or self-intersections. In such cases it is advisable to instead use the 数据**Horizontal Area** property for further calculations.
* 数据**Normal**: The extrusion direction for the wall. If set to (0,0,0), the extrusion direction is automatic.
* 数据**Offset**: The distance between the wall and its baseline. Works only if the **Align** property is set to Right or Left. The direction of the individual edges of the Base object (Sketch/ArchSketch) is taken into account, giving finer control over each wall segment. See also **Override Offset**.
* 数据**Override Align**: This overrides **Align** attribute to set align of each segment of wall. Ignored if Base object provides Aligns information, with getAligns() method (If a value is not 'Left, Right, Center', the value of 'Align' will be followed). ENHANCEMENT by ArchSketch: GUI 'Edit Wall Segment Align' Tool is provided in the external ![](/images/SketchArch_Workbench.svg) [SketchArch Add-on](https://github.com/paullee0/FreeCAD_SketchArch) to let users to set the values interactively. 'Toponaming-Tolerant' if ArchSketch is used in Base (and SketchArch Add-on is installed). Warning: Not 'Toponaming-Tolerant' if just Sketch is used.
* 数据**Override Width**: This overrides the **Width** property and allows setting a different width for each segment of the wall. The input is a list of numerical widths (without unit specifier), one for each segment of the wall. If a value in the list is 0, the corresponding segment will use the wall's **Width** property value, effectively clearing the override segment-wise. This property is ignored if the wall's base object provides widths information with the `getWidths()` method (such as sketches created with the external ![](/images/SketchArch_Workbench.svg) [SketchArch Add-on](https://github.com/paullee0/FreeCAD_SketchArch) do). That add-on also provides additional enhancements: a graphical *Edit Wall Segment Width* tool to enable users to set the width values interactively, and toponaming tolerance if an ArchSketch object is used as the wall's base object (and if the add-on is installed).
* 数据**Override Offset**: ([introduced in 1.0](/Release_notes_1.0 "Release notes 1.0")) This overrides **Offset** attribute to set offset of each segment of wall. Ignored if Base object provides Offsets information, with getOffsets() method (If a value is zero, the value of 'Offset' will be followed). ENHANCEMENT by ArchSketch: GUI 'Edit Wall Segment Offset' Tool is provided in the external ![](/images/SketchArch_Workbench.svg) [SketchArch Add-on](https://github.com/paullee0/FreeCAD_SketchArch) to let users to select the edges interactively. 'Toponaming-Tolerant' if ArchSketch is used in Base (and SketchArch Add-on is installed). Warning: Not 'Toponaming-Tolerant' if just Sketch is used. Property is ignored if Base ArchSketch provided the selected edges.
* 数据**Width**: The width of the wall. Ignored if the wall is based on a face or a solid. See also **Override Width**.

## Scripting

## 脚本

*参见:* [Arch API](/Arch_API "Arch API") 与 [FreeCAD Scripting Basics](/FreeCAD_Scripting_Basics "FreeCAD Scripting Basics").

借助下列函数即可在[宏](/Macros "Macros")与[Python](/Python "Python")控制台中使用墙体工具：

```
Wall = makeWall(baseobj=None, length=None, width=None, height=None, align="Center", face=None, name="Wall")

```

* Creates a `Wall` object from the given `baseobj`, which can be a [Draft object](/Draft_Workbench "Draft Workbench"), a [Sketch](/Sketcher_Workbench "Sketcher Workbench"), a face, or a solid.
  + If no `baseobj` is given, you can provide the numerical values for the `length`, `width` (thickness), and `height`.
  + If given, `face` can be used to give the index of a face from the underlying object, to build this wall on, instead of using the whole object.
* `align` can be `"Center"`, `"Left"` or `"Right"`.
* It returns `None` if the operation fails.

示例:

```
import FreeCAD, Draft, Arch

p1 = FreeCAD.Vector(0, 0, 0)
p2 = FreeCAD.Vector(2000, 0, 0)
baseline = Draft.makeLine(p1, p2)
Wall1 = Arch.makeWall(baseline, length=None, width=150, height=2000)
FreeCAD.ActiveDocument.recompute()

Wall2 = Arch.makeWall(None, length=2000, width=200, height=1000)
Draft.move(Wall2, FreeCAD.Vector(0, -1000, 0))
FreeCAD.ActiveDocument.recompute()

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Arch_Wall/zh-cn&oldid=1548499>"