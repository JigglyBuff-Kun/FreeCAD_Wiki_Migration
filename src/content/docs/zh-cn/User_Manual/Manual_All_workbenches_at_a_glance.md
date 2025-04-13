---
title: 手册：一览所有工作台
---

As previously mentioned, FreeCAD offers various workbenches, each dedicated to different applications. Although the multitude of options might seem overwhelming at first, each workbench is designed to cater to specific tasks, making the overall workflow more efficient and tailored to various project requirements. For instance, the Part Design workbench is ideal for creating and modifying solid 3D models, while the Draft workbench is perfect for 2D drafting and drawing. This modular approach allows users to customize their interface and toolset according to their specific needs and preferences.

On this page, you will find information regarding the basic set of workbenches and their functionalities. For additional information, feel free to refer to each [workbench](/Workbenches "Workbenches") page in the FreeCAD documentation for a more complete list.

An interesting feature of FreeCAD is the ability to obtain additional information by hovering the mouse over a command. This tooltip functionality helps users understand what each command does, providing guidance and making it easier to learn and navigate the software.

![](/images/FreeCAD_022_ObjectDesc.png)

其中四个工作台也是成对设计的，其中一个完全包含在另一个工作台中：Arch 包含所有 Draft 工具，而 PartDesign 包含所有 Sketcher 工具。然而，为了清晰起见，它们在下面是分开列出的。

### Part

Part 工作台提供了处理实体零件的基本工具：原始几何体，例如立方体和球体，以及简单的几何操作和布尔操作。作为与 OpenCasCade（开放级联技术）的主要锚点，Part 工作台为 FreeCAD 的几何系统提供了基础，并且几乎所有其他工作台都会生成基于 Part 的几何体。

| 工具                                               | 描述                                               | 工具                                                 | 描述                                         |
| -------------------------------------------------- | -------------------------------------------------- | ---------------------------------------------------- | -------------------------------------------- |
| [盒子](/Part_Box "Part Box")                       | 绘制一个盒子                                       | [圆锥](/Part_Cone "Part Cone")                       | 绘制一个圆锥                                 |
| [圆柱](/Part_Cylinder "Part Cylinder")             | 绘制一个圆柱                                       | [球体](/Part_Sphere "Part Sphere")                   | 绘制一个球体                                 |
| [环面](/Part_Torus "Part Torus")                   | 绘制一个环面（圆环）                               | [创建基本几何体](/Part_Primitives "Part Primitives") | 创建其他各种参数几何体                       |
| [形状生成器](/Part_Builder "Part Builder")         | 从基本几何体创建更复杂的形状                       | [合并](/Part_Fuse "Part Fuse")                       | 合并（联合）两个对象                         |
| [共同部分](/Part_Common "Part Common")             | 提取两个对象的共同（交集）部分                     | [切割](/Part_Cut "Part Cut")                         | 从一个对象中切割（减去）另一个对象           |
| [连接](/Part_JoinConnect "Part JoinConnect")       | 连接围合对象的内部空间                             | [嵌入连接](/Part_JoinEmbed "Part JoinEmbed")         | 将一个围合对象嵌入到另一个围合对象中         |
| [切割连接](/Part_JoinCutout "Part JoinCutout")     | 在对象的墙壁上创建一个切割，用于放置另一个围合对象 | [拉伸](/Part_Extrude "Part Extrude")                 | 拉伸对象的平面面片                           |
| [圆角](/Part_Fillet "Part Fillet")                 | 圆角化对象的边缘                                   | [旋转](/Part_Revolve "Part Revolve")                 | 围绕轴线旋转一个对象（非实体），创建一个实体 |
| [剖面](/Part_Section "Part Section")               | 使用剖面平面与对象相交，创建一个剖面               | [横截面](/Part_CrossSections "Part CrossSections")   | 沿着对象创建多个横截面                       |
| [倒角](/Part_Chamfer "Part Chamfer")               | 倒角化对象的边缘                                   | [镜像](/Part_Mirror "Part Mirror")                   | 在给定的镜像平面上镜像选定的对象             |
| [生成曲面](/Part_RuledSurface "Part RuledSurface") | 在选定的曲线之间创建生成曲面                       | [扫描](/Part_Sweep "Part Sweep")                     | 沿着路径扫描一个或多个剖面                   |
| [放样](/Part_Loft "Part Loft")                     | 从一个剖面放样到另一个剖面                         | [偏移](/Part_Offset "Part Offset")                   | 创建原始对象的缩放副本                       |
| [厚度](/Part_Thickness "Part Thickness")           | 为形状的面片赋予厚度                               |

### Part Design

Part Design 工作台包含用于构建实体零件的高级工具，还包含 Sketcher 中的所有工具。由于 Part Design 工作台只能生成实体形状（Part Design 的第一规则），因此在设计用于制造的部品或用于 3D 打印的零件时，Part Design 是主工作台，您将始终获得可打印的对象。

| 工具                                                             | 描述                             | 工具                                                                 | 描述                                                       |
| ---------------------------------------------------------------- | -------------------------------- | -------------------------------------------------------------------- | ---------------------------------------------------------- |
| [拉伸](/PartDesign_Pad "PartDesign Pad")                         | 从选定的草图拉伸出一个固体对象   | [凸台](/PartDesign_Pocket "PartDesign Pocket")                       | 从选定的草图创建一个凸台，该草图必须映射到现有固体对象的面 |
| [旋转体](/PartDesign_Revolution "PartDesign Revolution")         | 围绕轴创建一个实体对象           | [凹槽](/PartDesign_Groove "PartDesign Groove")                       | 围绕轴创建一个凹槽                                         |
| [圆角](/PartDesign_Fillet "PartDesign Fillet")                   | 圆角化对象的边缘                 | [倒角](/PartDesign_Chamfer "PartDesign Chamfer")                     | 对象的边缘倒角                                             |
| [斜面](/PartDesign_Draft "PartDesign Draft")                     | 对对象的面施加角度斜面           | [镜像](/PartDesign_Mirrored "PartDesign Mirrored")                   | 在平面或面上镜像特征                                       |
| [线性阵列](/PartDesign_LinearPattern "PartDesign LinearPattern") | 创建特征的线性阵列               | [极坐标阵列](/PartDesign_PolarPattern "PartDesign PolarPattern")     | 创建特征的极坐标阵列                                       |
| [比例缩放](/PartDesign_Scaled "PartDesign Scaled")               | 将特征缩放到不同的大小           | [多重变换](/PartDesign_MultiTransform "PartDesign MultiTransform")   | 允许创建任何其他变换的组合，并应用于模型的特征             |
| [轴向向导](/PartDesign_WizardShaft "PartDesign WizardShaft")     | 从值表生成轴，并允许分析力和力矩 | [渐开线齿轮向导](/PartDesign_InvoluteGear "PartDesign InvoluteGear") | 允许您创建几种类型的齿轮                                   |

### Draft

Draft 工作台提供基本的 2D CAD 绘图工具，如直线、圆等，以及一系列通用的便捷工具，如移动、旋转或缩放。它还提供了几种绘图辅助功能，如网格和捕捉。它主要用于绘制 Arch 对象的指引线，但也可以作为 FreeCAD 的"瑞士军刀"使用。

| 工具                                                 | 描述                                   | 工具                                                   | 描述                                                               |
| ---------------------------------------------------- | -------------------------------------- | ------------------------------------------------------ | ------------------------------------------------------------------ |
| [直线](/Draft_Line "Draft Line")                     | 在两点之间绘制一条线段                 | [线段](/Draft_Wire "Draft Wire")                       | 绘制由多条线段（折线）组成的线段                                   |
| [圆](/Draft_Circle "Draft Circle")                   | 从中心和半径绘制一个圆                 | [弧线](/Draft_Arc "Draft Arc")                         | 从中心、半径、起始角度和终止角度绘制一个弧线段                     |
| [椭圆](/Draft_Ellipse "Draft Ellipse")               | 从两个角点绘制一个椭圆                 | [多边形](/Draft_Polygon "Draft Polygon")               | 从中心和半径绘制一个正多边形                                       |
| [矩形](/Draft_Rectangle "Draft Rectangle")           | 从两个对角点绘制一个矩形               | [文本](/Draft_Text "Draft Text")                       | 绘制多行文本注释                                                   |
| [标注](/Draft_Dimension "Draft Dimension")           | 绘制一个尺寸标注                       | [B 样条曲线](/Draft_BSpline "Draft BSpline")           | 从一系列点绘制 B 样条曲线                                          |
| [点](/Draft_Point "Draft Point")                     | 插入一个单点                           | [复合图形](/Draft_ShapeString "Draft ShapeString")     | 复合图形工具可以在当前文档中的给定点处插入代表文本字符串的复合图形 |
| [面绑定](/Draft_Facebinder "Draft Facebinder")       | 从现有对象的选择面创建一个新对象       | [贝塞尔曲线](/Draft_BezCurve "Draft BezCurve")         | 从一系列点绘制贝塞尔曲线                                           |
| [移动](/Draft_Move "Draft Move")                     | 将对象从一个位置移动或复制到另一个位置 | [旋转](/Draft_Rotate "Draft Rotate")                   | 围绕点旋转对象一定角度                                             |
| [偏移](/Draft_Offset "Draft Offset")                 | 将对象偏移到一定距离                   | [修剪、延伸或挤出](/Draft_Trimex "Draft Trimex")       | 修剪、延伸或挤出一个对象                                           |
| [升级](/Draft_Upgrade "Draft Upgrade")               | 将或连接对象转换为更高级别的对象       | [降级](/Draft_Downgrade "Draft Downgrade")             | 将或分离对象转换为较低级别的对象                                   |
| [缩放](/Draft_Scale "Draft Scale")                   | 相对于一个点缩放对象                   | [形状 2D 视图](/Draft_Shape2DView "Draft Shape2DView") | 创建一个二维对象，它是另一个对象的平面视图                         |
| [草图转换](/Draft_Draft2Sketch "Draft Draft2Sketch") | 将草图对象转换为草图或反之             | [矩形阵列](/Draft_OrthoArray "Draft OrthoArray")       | 从一个对象创建一个矩形阵列                                         |
| [复制](/Draft_Clone "Draft Clone")                   | 创建对象的链接副本                     | [镜像](/Draft_Mirror "Draft Mirror")                   | 沿一条线镜像对象                                                   |

|-
| ![](/images/Draft_Snap_Extension.svg) [Snap extension](/Draft_Snap_Extension "Draft Snap Extension")
| Snaps to an imaginary line that extends beyond the endpoints of straight edges
| ![](/images/Draft_Snap_Parallel.svg) [Snap parallel](/Draft_Snap_Parallel "Draft Snap Parallel")
| Snaps to an imaginary line parallel to straight edges
|-
| ![](/images/Draft_Snap_Special.svg) [Snap special](/Draft_Snap_Special "Draft Snap Special")
| Snaps to special points defined by the object.
| ![](/images/Draft_Snap_Near.svg) [Snap near](/Draft_Snap_Near "Draft Snap Near")
| Snaps to the nearest point on faces and edges
|-
| ![](/images/Draft_Snap_Ortho.svg) [Snap ortho](/Draft_Snap_Ortho "Draft Snap Ortho")
| Snaps to imaginary lines that cross the previous point at multiples of 45°.
| ![](/images/Draft_Snap_Grid.svg) [Snap grid](/Draft_Snap_Grid "Draft Snap Grid")
| Snaps to the intersections of grid lines.
|-
| ![](/images/Draft_Snap_WorkingPlane.svg) [Snap working plane](/Draft_Snap_WorkingPlane "Draft Snap WorkingPlane")
| Projects snap points onto the current [working plane](/Draft_SelectPlane "Draft SelectPlane")
| ![](/images/Draft_Snap_Dimensions.svg) [Snap dimensions](/Draft_Snap_Dimensions "Draft Snap Dimensions")
| Shows temporary X and Y dimensions
|}

### Sketcher

Sketcher 工作台包含用于构建和编辑复杂 2D 对象的工具，称为草图(sketch)。这些草图内的几何形状可以通过使用约束来精确地定位和关联。这些草图(sketch)对象主要是 PartDesign 几何体的构建模块，但在 FreeCAD 各处都有用。

| 工具                                                                              | 描述                                                                           | 工具                                                                                   | 描述                                                                                         |
| --------------------------------------------------------------------------------- | ------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| [Point](/Sketcher_CreatePoint "Sketcher CreatePoint")                             | 画出一点                                                                       | [Line](/Sketcher_CreateLine "Sketcher CreateLine")                                     | 以 2 个点绘制线段                                                                            |
| [Arc](/Sketcher_CreateArc "Sketcher CreateArc")                                   | 以中心，半径，起始角度和结束角度绘制弧段                                       | [Arc 3 points](/Sketcher_Create3PointArc "Sketcher Create3PointArc")                   | 以两个端点和圆周上的另一个点绘制弧段                                                         |
| [Circle](/Sketcher_CreateCircle "Sketcher CreateCircle")                          | 以中心和半径绘制一个圆                                                         | [Circle 3 points](/Sketcher_Create3PointCircle "Sketcher Create3PointCircle")          | 以圆周上的三个点绘制一个圆                                                                   |
| [Ellipse](/Sketcher_CreateEllipseByCenter "Sketcher CreateEllipseByCenter")       | 按中心点，主要半径点和小半径点绘制椭圆                                         | [Ellipse 3 points](/Sketcher_CreateEllipseBy3Points "Sketcher CreateEllipseBy3Points") | 根据大直径（2 点）和小半径点绘制椭圆                                                         |
| [Arc of ellipse](/Sketcher_CreateArcOfEllipse "Sketcher CreateArcOfEllipse")      | 按中心点，主要半径点，起点和终点绘制椭圆弧                                     | [Polyline](/Sketcher_CreatePolyline "Sketcher CreatePolyline")                         | 绘制由多个线段组成的线，有多种绘图模式                                                       |
| [Rectangle](/Sketcher_CreateRectangle "Sketcher CreateRectangle")                 | 以 2 个相对的点绘制一个矩形                                                    | [Triangle](/Sketcher_CreateTriangle "Sketcher CreateTriangle")                         | 绘制圈在构造几何圆中的正三角形                                                               |
| [Square](/Sketcher_CreateSquare "Sketcher CreateSquare")                          | 绘制圈在构造几何圆中的正方形                                                   | [Pentagon](/Sketcher_CreatePentagon "Sketcher CreatePentagon")                         | 绘制圈在构造几何圆中的正五边形                                                               |
| [Hexagon](/Sketcher_CreateHexagon "Sketcher CreateHexagon")                       | 绘制圈在构造几何圆中的正六边形                                                 | [Heptagon](/Sketcher_CreateHeptagon "Sketcher CreateHeptagon")                         | 绘制圈在构造几何圆中的正七边形                                                               |
| [Octagon](/Sketcher_CreateOctagon "Sketcher CreateOctagon")                       | 绘制圈在构造几何圆中的正八边形                                                 | [Slot](/Sketcher_CreateSlot "Sketcher CreateSlot")                                     | 通过选择一个半圆的中心和另一个半圆的端点绘制一个长腰孔                                       |
| [Fillet](/Sketcher_CreateFillet "Sketcher CreateFillet")                          | 在相交于一点的两条线之间制作圆角                                               | [Trimming](/Sketcher_Trimming "Sketcher Trimming")                                     | 相对于选定点，修剪直线，圆或圆弧                                                             |
| [External geometry](/Sketcher_External "Sketcher External")                       | 创建链接到外部几何体的边                                                       | [Construction mode](/Sketcher_ToggleConstruction "Sketcher ToggleConstruction")        | 切换元素是否处于构造模式。构造对象不会用于 3D 几何操作，只有在编辑包含它的 Sketch 时才可见。 |
| [Coincident](/Sketcher_ConstrainCoincident "Sketcher ConstrainCoincident")        | 让一个点固定于（与之重合）一个（或多个已经重合的）其他点上。                   | [Point on object](/Sketcher_ConstrainPointOnObject "Sketcher ConstrainPointOnObject")  | 将点绑定到另一个对象（例如直线，圆弧或轴线）上。                                             |
| [Vertical](/Sketcher_ConstrainVertical "Sketcher ConstrainVertical")              | 将选定的线或折线元素约束到真正的垂直方向。在应用此约束之前，可以选择多个对象。 | [Horizontal](/Sketcher_ConstrainHorizontal "Sketcher ConstrainHorizontal")             | 将选定的线或折线元素约束到真正的水平方向。在应用此约束之前，可以选择多个对象。               |
| [Parallel](/Sketcher_ConstrainParallel "Sketcher ConstrainParallel")              | 约束两条或更多条线，彼此平行。                                                 | [Perpendicular](/Sketcher_ConstrainPerpendicular "Sketcher ConstrainPerpendicular")    | 约束两条线彼此垂直，或约束线在弧的端点与弧垂直。                                             |
| [Tangent](/Sketcher_ConstrainTangent "Sketcher ConstrainTangent")                 | 在两个选定实体之间创建相切约束，或在两个线段之间创建共线约束。                 | [Equal length](/Sketcher_ConstrainEqual "Sketcher ConstrainEqual")                     | 约束两个选定实体彼此相等。如果在圆或弧上使用，则它们的半径将设置为相等。                     |
| [Symmetric](/Sketcher_ConstrainSymmetric "Sketcher ConstrainSymmetric")           | 相对某线约束两个点对称，或者相对第三个选定点约束前两个选定点对称。             | [Lock](/Sketcher_ConstrainLock "Sketcher ConstrainLock")                               | 通过设置相对于原点的垂直和水平距离来约束所选对象，从而锁定它的位置。                         |
| [Horizontal distance](/Sketcher_ConstrainDistanceX "Sketcher ConstrainDistanceX") | 指定两点或线段端点之间的水平距离。如果仅选择了一个对象，则设置为与原点的距离。 | [Vertical distance](/Sketcher_ConstrainDistanceY "Sketcher ConstrainDistanceY")        | 指定两点或线段端点之间的竖直距离。如果仅选择了一个对象，则设置为与原点的距离。               |
| [Distance](/Sketcher_ConstrainDistance "Sketcher ConstrainDistance")              | 约束所选线的长度，或约束两个点之间的距离。                                     | [Radius](/Sketcher_ConstrainRadius "Sketcher ConstrainRadius")                         | 通过约束半径来定义选定圆弧或圆的半径。                                                       |
| [Internal anglr](/Sketcher_ConstrainAngle "Sketcher ConstrainAngle")              | 定义两条选定线之间的内角。                                                     | [Map sketch](/Sketcher_MapSketch "Sketcher MapSketch")                                 | 将草图映射到先前选定的实体的面                                                               |
| [Merge](/Sketcher_MergeSketches "Sketcher MergeSketches")                         | 合并两个或多个草图                                                             | [Mirror](/Sketcher_MirrorSketch "Sketcher MirrorSketch")                               | 镜像某草图中选定的元素                                                                       |

### Arch

Arch 工作台包含用于处理 [BIM](https://en.wikipedia.org/wiki/Building_information_modeling) 项目（土木工程和建筑）的工具，还包含 Draft 工作台中的所有工具。Arch 工作台的主要用途是创建 BIM 对象或为使用其他工作台构建的对象提供 BIM 属性，以便导出到[IFC](https://en.wikipedia.org/wiki/Industry_Foundation_Classes) 里。

| 工具                                     | 描述                                     | 工具                                               | 描述                                         |
| ---------------------------------------- | ---------------------------------------- | -------------------------------------------------- | -------------------------------------------- |
| [墙体](/Arch_Wall "Arch Wall")           | 从头开始创建墙体或使用选定的对象作为基础 | [结构体](/Arch_Structure "Arch Structure")         | 从头开始创建结构元素或使用选定的对象作为基础 |
| [钢筋](/Arch_Rebar "Arch Rebar")         | 在选定的结构元素中创建钢筋加固           | [地板](/Arch_Floor "Arch Floor")                   | 创建包括选定对象的地板                       |
| [建筑](/Arch_Building "Arch Building")   | 创建包括选定对象的建筑                   | [场地](/Arch_Site "Arch Site")                     | 创建包括选定对象的场地                       |
| [窗户](/Arch_Window "Arch Window")       | 使用选定对象作为基础创建窗户             | [剖面平面](/Arch_SectionPlane "Arch SectionPlane") | 将剖面平面对象添加到文档中                   |
| [轴线系统](/Arch_Axis "Arch Axis")       | 向文档添加轴线系统                       | [屋顶](/Arch_Roof "Arch Roof")                     | 从选定的面创建倾斜的屋顶                     |
| [空间](/Arch_Space "Arch Space")         | 在文档中创建空间对象                     | [楼梯](/Arch_Stairs "Arch Stairs")                 | 在文档中创建楼梯对象                         |
| [面板](/Arch_Panel "Arch Panel")         | 从选定的 2D 对象创建面板对象             | [框架](/Arch_Frame "Arch Frame")                   | 从选定的布局创建框架对象                     |
| [设备](/Arch_Equipment "Arch Equipment") | 创建设备或家具对象                       | [材质](/Arch_SetMaterial "Arch SetMaterial")       | 将材质属性分配给选定对象                     |
| [日程表](/Arch_Schedule "Arch Schedule") | 创建不同类型的日程表                     | [剖面平面](/Arch_CutPlane "Arch CutPlane")         | 根据平面剖面切割对象                         |
| [添加](/Arch_Add "Arch Add")             | 向组件添加对象                           | [移除](/Arch_Remove "Arch Remove")                 | 从组件中减去或移除对象                       |
| [测量](/Arch_Survey "Arch Survey")       | 进入或离开测量模式                       |

### 其他内置工作台

上面概括介绍了 FreeCAD 最重要的几个工具，但还有更多工作台可用，包括：

- [TechDraw 工作台](/TechDraw_Workbench "TechDraw Workbench") 用于从 3D 模型生成技术图纸。
- [Mesh 工作台](/Mesh_Workbench "Mesh Workbench") 可以处理 [多边形网格](https://en.wikipedia.org/wiki/Polygon_mesh)。虽然网格不是 FreeCAD 中首选的几何类型，因为它们缺乏精度和对曲线的支持，但网格仍然具有许多用途，并且在 FreeCAD 中得到了完全支持。网格工作台还提供了许多将零件转换为网格和将网格转换为零件的工具。
- [Raytracing 工作台](/Raytracing_Workbench "Raytracing Workbench") 提供了与外部渲染器（如 povray 或 luxrender）进行交互的工具。在 FreeCAD 内部，该工作台允许您从模型中生成高质量的渲染图像。
- [Spreadsheet 工作台](/Spreadsheet_Workbench "Spreadsheet Workbench") 允许创建和操作电子表格数据，这些数据可以从 FreeCAD 模型中提取。电子表格单元格还可以在 FreeCAD 的许多区域中引用，允许将它们用作主数据结构。
- [FEM 工作台](/FEM_Workbench "FEM Workbench") 处理 [有限元分析](https://en.wikipedia.org/wiki/Finite_element_method)，允许进行 FEM 计算的预处理和后处理，并以图形方式显示结果。

### 外部工作台

还有许多其他由 FreeCAD 社区成员制作的非常有用的工作台。虽然它们未包含在标准的 FreeCAD 安装中，但它们可以很容易地作为插件安装。它们都在 [FreeCAD-addons](https://github.com/FreeCAD/FreeCAD-addons) 存储库中引用。其中最发达的包括：

- [图纸标注工作台](https://github.com/hamish2014/FreeCAD_drawing_dimensioning) 提供许多新工具，可直接在图纸上工作，并允许您添加尺寸、注释和其他技术符号，并对它们的外观进行精确控制。**图纸标注工作台已不再维护。**
- [紧固件工作台](https://github.com/shaise/FreeCAD_FastenersWB) 提供了各种现成的紧固件对象，如螺钉、螺栓、杆、垫圈和螺帽。有许多选项和设置可供选择。
- [A2plus](https://github.com/kbwbe/A2plus) 工作台提供了一系列用于安装和处理 [装配体](https://en.wikipedia.org/wiki/Assembly_modelling) 的工具。

**延伸阅读**

- [完整的工作台列表](/Workbenches "Workbenches")
- [Part 工作台](/Part_Workbench "Part Workbench")
- [Draft 工作台](/Draft_Workbench "Draft Workbench")
- [Sketcher and Part Design 工作台](/PartDesign_Workbench "PartDesign Workbench")
- [Arch 工作台](/Arch_Workbench "Arch Workbench")
- [TechDraw 工作台](/TechDraw_Workbench "TechDraw Workbench")
- [FEM 工作台](/FEM_Workbench "FEM Workbench")
- [FreeCAD-addons 存储库](https://github.com/FreeCAD/FreeCAD-addons)

Retrieved from "<http://wiki.freecad.org/index.php?title=Manual:All_workbenches_at_a_glance/zh-cn&oldid=1521711>"
