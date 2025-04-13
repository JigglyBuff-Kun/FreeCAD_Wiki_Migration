---
title: 刀路工作台
---

![](/images/Workbench_CAM.svg)

CAM workbench icon

## 简介

刀路工作台用于从 FreeCAD 3D 模型生成[CNC 机器](https://en.wikipedia.org/wiki/CNC_router)指令。它们可以在 CNC 机床上生产真实的 3D 产品，如铣床，车床，激光切割机等。 通常，指令是[G-Code](https://en.wikipedia.org/wiki/G-Code)语言。

![](/images/Pathwb.png)

FreeCAD 刀路工作台按如下工作流程创建这些机器指令：

- 使用[零件设计工作台](/PartDesign_Workbench/zh "PartDesign Workbench/zh")，[零件工作台](/Part_Workbench/zh "Part Workbench/zh") 或[草图工作台](/Draft_Workbench/zh "Draft Workbench/zh")中的一个或多个创建作为基础对象的 3D 模型。
- 在[刀路工作台](/Path_Workbench "Path Workbench")中创建[刀路作业](/CAM_Job/zh "CAM Job/zh")。 这包含用于生成在 CNC 铣床上处理作业的 G-code 所有必要的信息：有库存材料，工厂有一定的[刀具包](/CAM_ToolBitLibraryOpen "CAM ToolBitLibraryOpen")，它遵循某些命令(通常是 G-Code)控制速度和运动。
- 根据作业操作的要求选择刀具。
- 使用例如 [轮廓线](/CAM_Profile "CAM Profile")和[开槽](/CAM_Pocket_3D "CAM Pocket 3D")操作创建铣削路径。 这些刀路对象使用 FreeCAD 内部独立于 CNC 机器的 G-Code 语言。
- 使用与您的机器匹配的 G-Code 形式导出作业。

## General concepts

## 一般概念

刀路工作台生成 G-code，用于定义铣削产品的刀具运行路径，产品外形通过[刀路作业操作 FreeCAD G-Code 指令](https://www.freecadweb.org/wiki/Path_scripting#FreeCAD.27s_internal_GCode_format)模拟铣削后的 3D 数模所呈现，该 G-code 指令通过选择适合的前置处理程序被转换为适合目标 CNC 控制器的指令。
G-code 由包含在刀路作业中的指令和操作生成。作业工作流将这些指令和操作按其执行顺序列出。该列表通过添加刀路操作、刀路修剪、刀路分步命令和通过刀路菜单或者图形界面按钮刀路修改完成。

The G-code is generated from directives and Operations contained in a CAM Job. The Job Workflow lists these in the order they will be executed. The list is populated by adding CAM Operations, Path Dressups, Supplemental Commands, and Path Modifications from the CAM Menu, or GUI buttons.

刀路工作台提供刀具管理器（库，刀具表），G-code 检查和铣削模拟工具。它连接前置处理程序并允许导入和导出工作模板。

刀路工作台的外部依赖包括：

1. 在 **编辑 → 首选项 → General → 单位标签的单位设定**中设置的 FreeCAD 的 3D 数模尺寸单位。前置处理程序设置定义了最终的 G-code 尺寸单位。
2. 宏文件路径和几何公差在**编辑 → 首选项 → 刀路 → 作业偏好设定**标签中设置.
3. 颜色在**编辑 → 首选项 → 刀路 → 刀路颜色**标签中设置.
4. 持有标记参数在**编辑 → 首选项 → 刀路 → 修剪**标签中设置.
5. 基础 3D 数模品质支持刀路 WB 需求，通过几何体检查。

## Limitations

Some current limitations of which you should be aware are:

- Most of the CAM Tools are not true 3D tools but only 2.5D capable. This means that they take a fixed 2D shape and can cut it down to a given depth. However, there are two tools which produce true 3D paths: ![](/images/CAM_3DPocket.svg) [3D Pocket](/CAM_Pocket_3D "CAM Pocket 3D") and ![](/images/CAM_Surface.svg) [3D Surface](/CAM_Surface "CAM Surface") (which is still an [experimental feature](/CAM_experimental "CAM experimental") as of November 2020).
- Most of CAM workbench is designed for a simple, standard 3-axis (xyz) CNC mill/router, but lathe tools are under development in 0.19_pre.
- Most operations in CAM workbench will return paths based on a standard endmill tool/bit only, regardless of the tool/bit type assigned in a given tool controller with the exception of the ![](/images/CAM_Engrave.svg) [Engrave](/CAM_Engrave "CAM Engrave") and ![](/images/CAM_Surface.svg) [3D Surface](/CAM_Surface "CAM Surface") operations.
- The operations within the CAM workbench are not aware of clamping mechanisms in use to secure the model to your machine. Consequently, please review and simulate the paths you generate prior to sending the code to your machine. If necessary, model your clamping mechanisms in FreeCAD in order to better inspect the paths generated. Look for possible collisions with clamps or other obstacles along the paths.

## 单位

刀路工作台中的单位处理可能会令人感到困惑。 有几点需要了解：

1. FreeCAD 基本单位的长度和时间分别为'mm'和's'。 因此速度单位为'mm/s'。 这就是 FreeCAD 内部存储的东西，与其他无关。
2. 默认单位模式使用默认单位。如果您使用默认模式并输入没有单位给进率，则给进率的单位为'mm/s'
3. 大多数数控机床都需要的进给速率为“mm/min”或“in/min”。 大多数后置处理程序会在生成 G-code 时自动转换单位。

模式：

1. 更改首选项中的模式会更改输入字段的默认单位。 如果您是刀路工作台用户并且更喜欢以公制设计，则强烈建议您使用“公制小零件和 CNC”模式。 如果您使用美国单位进行设计，可以使用英制十进制和美制
2. 更改首选单元模式对输出没有影响，但有助于避免输入错误

输出：

1. 在输出中生成正确的单位是后处理器的责任，且这一操作仅在那时完成
2. 机器输出单元与您选择的单元模式完全无关
3. 后处理程序产生公制（G21）或英制（G20）输出，还可进行配置。
4. 可配置的后处理程序默认为公制（G21）
5. 如果您希望可配置的后处理器输出英制 G-code（G20），请在作业输出配置中设置正确的参数（即--incs for linuxcnc）。 这可以存储在作业模板中，并设置为默认模板，以使其自动适用于所有未来的作业。

刀路检查

1. 如果你使用刀路检查工具查看 G-code，你将在其中看到'mm/s'，应为它还没有被进行后置处理。

## Heights and depths

## 刀路命令

![](/images/Path-DepthsAndHeights.gif)

Visual reference for Depth properties (settings)

## Commands

Some commands are experimental and not available by default. To enable them see [CAM experimental](/CAM_experimental "CAM experimental").

### Project Commands

- ![](/images/Path-Job.png) [刀路作业](/CAM_Job/zh "CAM Job/zh"):创建一个新的 CNC 作业。

* [File:CAM PostProcess.png](/index.php?title=Special:Upload&wpDestFile=CAM_PostProcess.png "File:CAM PostProcess.png") [后置处理](/index.php?title=CAM_Post/zh&action=edit&redlink=1 "CAM Post/zh (page does not exist)"): 将一个项目导出为 G-code。

* [File:CAM Sanity.png](/index.php?title=Special:Upload&wpDestFile=CAM_Sanity.png "File:CAM Sanity.png") [刀路错误](/CAM_Sanity "CAM Sanity"): 检查选定作业中的缺失值

- ![](/images/Path-ExportTemplate.png) [导出模板](/CAM_ExportTemplate/zh "CAM ExportTemplate/zh"): 将当前作业导出为模板。

### Tool Commands

- [File:CAM Inspect.png](/index.php?title=Special:Upload&wpDestFile=CAM_Inspect.png "File:CAM Inspect.png") [G-Code 检查器](/CAM_Inspect/zh "CAM Inspect/zh"): 显示需要检查的 G-code。

- [File:CAM Simulator.png](/index.php?title=Special:Upload&wpDestFile=CAM_Simulator.png "File:CAM Simulator.png") [刀路模拟](/CAM_Simulator/zh "CAM Simulator/zh"): 展示铣削操作在机器上的运行。

* ![](/images/CAM_SimulatorGL.svg) [CAM SimulatorGL](/CAM_SimulatorGL "CAM SimulatorGL"): Enables the new, improved CAM simulator. [introduced in 1.0](/Release_notes_1.0 "Release notes 1.0")

* ![](/images/Path-CompleteLoop.png) [收尾循环](/CAM_SelectLoop/zh "CAM SelectLoop/zh"): 在选定的两个边上完成收尾循环。

* ![](/images/CAM_OpActiveToggle.svg) [Toggle the Active State of the Operation](/CAM_OpActiveToggle "CAM OpActiveToggle"): Activates or de-activates a path operation.

* ![](/images/CAM_ToolBitLibraryOpen.svg) [ToolBit Library editor](/CAM_ToolBitLibraryOpen "CAM ToolBitLibraryOpen"): Opens an editor to manage ToolBit libraries.

* ![](/images/CAM_ToolBitDock.svg) [ToolBit Dock](/CAM_ToolBitDock "CAM ToolBitDock"): Toggles the ToolBit Dock.

### Basic Operations

- ![](/images/CAM_Profile.svg) [Profile](/CAM_Profile "CAM Profile"): Creates a profile operation of the entire model, or from one or more selected faces or edges.

* [File:CAM Pocket.png](/index.php?title=Special:Upload&wpDestFile=CAM_Pocket.png "File:CAM Pocket.png") [开槽](/index.php?title=CAM_Pocket_Shape/zh&action=edit&redlink=1 "CAM Pocket Shape/zh (page does not exist)"):创建选定的一个或多个选定挖槽的开槽操作。

* [File:CAM Drilling.png](/index.php?title=Special:Upload&wpDestFile=CAM_Drilling.png "File:CAM Drilling.png") [钻孔](/CAM_Drilling "CAM Drilling"): 执行钻孔循环

- ![](/images/Path-Face.png) [面铣削](/CAM_MillFace "CAM MillFace"): 创建一个面铣削刀路

- ![](/images/Path-Helix.png) [螺旋](/CAM_Helix "CAM Helix"): 创建螺旋刀路。

- ![](/images/CAM_Adaptive.svg) [Adaptive](/CAM_Adaptive "CAM Adaptive"): Creates an adaptive clearing and profiling operation.

- ![](/images/CAM_Slot.svg) [Slot](/CAM_Slot "CAM Slot"): Creates a slotting operation from selected features or custom points. [_Experimental_](/CAM_experimental "CAM experimental").

- ![](/images/Path-Engrave.png) [雕刻](/CAM_Engrave "CAM Engrave"):创建雕刻刀路

- ![](/images/CAM_Deburr.svg) [Deburr](/CAM_Deburr "CAM Deburr"): Creates a deburr path.

### 刀路修剪

### 3D Operations

- ![](/images/Path-3DPocket.png) [3D 开槽](/CAM_Pocket_3D "CAM Pocket 3D"):创建 3D 开槽刀路

- ![](/images/Path-3DSurface.png) [3D 面](/CAM_Surface "CAM Surface"): 创建 3D 面刀路

- ![](/images/CAM_Waterline.svg) [Waterline](/CAM_Waterline "CAM Waterline"): Creates a waterline path for a 3D surface. [_Experimental_](/CAM_experimental "CAM experimental").

### Path Dressup

- ![](/images/CAM_DressupAxisMap.svg) [Axis Map](/CAM_DressupAxisMap "CAM DressupAxisMap"): Remaps one axis to another.

- ![](/images/CAM_DressupPathBoundary.svg) [Boundary](/CAM_DressupPathBoundary "CAM DressupPathBoundary"): Adds a boundary dressup modification to a selected path.

* [File:CAM DressupDogbone.png](/index.php?title=Special:Upload&wpDestFile=CAM_DressupDogbone.png "File:CAM DressupDogbone.png") [避位角修剪](/CAM_DressupDogbone "CAM DressupDogbone"): 在选定的刀路上添加避位角修剪。

* [File:CAM DressupDragKnife.png](/index.php?title=Special:Upload&wpDestFile=CAM_DressupDragKnife.png "File:CAM DressupDragKnife.png") [拖刀修剪](/CAM_DressupDragKnife "CAM DressupDragKnife"): 在选定刀路上添加一个拖刀修剪。

* [File:CAM DressupLeadInOut.png](/index.php?title=Special:Upload&wpDestFile=CAM_DressupLeadInOut.png "File:CAM DressupLeadInOut.png") [引入引出点修剪](/CAM_DressupLeadInOut "CAM DressupLeadInOut"): 在选定道路上添加引入引出点。

* [File:CAM DressupRampEntry.png](/index.php?title=Special:Upload&wpDestFile=CAM_DressupRampEntry.png "File:CAM DressupRampEntry.png") [斜坡修剪](/CAM_DressupRampEntry "CAM DressupRampEntry"): 在选定的刀路上添加斜坡修剪。

* [File:CAM DressupTag.png](/index.php?title=Special:Upload&wpDestFile=CAM_DressupTag.png "File:CAM DressupTag.png") [夹持耳修剪](/CAM_DressupTag "CAM DressupTag") 在选定刀路上添加一个夹持耳修剪。

- ![](/images/CAM_DressupZCorrect.svg) [Z Depth Correction](/CAM_DressupZCorrect "CAM DressupZCorrect"): Corrects the Z depth using Probe Map.

### Supplemental Commands

- [File:CAM Fixture.png](/index.php?title=Special:Upload&wpDestFile=CAM_Fixture.png "File:CAM Fixture.png") [夹具](/CAM_Fixture "CAM Fixture"): 改变夹具位置

- [File:CAM Comment.png](/index.php?title=Special:Upload&wpDestFile=CAM_Comment.png "File:CAM Comment.png") [备注](/CAM_Comment "CAM Comment"): 在刀路 G-code 中加入备注

- [File:CAM Stop.png](/index.php?title=Special:Upload&wpDestFile=CAM_Stop.png "File:CAM Stop.png") [停止](/CAM_Stop "CAM Stop"): 插入机器停止指令

- [File:CAM Custom.png](/index.php?title=Special:Upload&wpDestFile=CAM_Custom.png "File:CAM Custom.png") [自定义](/CAM_Custom "CAM Custom"): 插入自定义 G-code

* ![](/images/CAM_Probe.svg) [Probe](/CAM_Probe "CAM Probe"): Creates a Probing Grid from a job stock.

- [File:CAM GcodeFromShape.png](/index.php?title=Special:Upload&wpDestFile=CAM_GcodeFromShape.png "File:CAM GcodeFromShape.png") [从形状生成的 Gcode](/CAM_Shape "CAM Shape"): 从选定的零件对象创建刀路对象

### 刀路修改

- [File:CAM Copy.png](/index.php?title=Special:Upload&wpDestFile=CAM_Copy.png "File:CAM Copy.png") [副本](/CAM_Copy "CAM Copy"): 创建所选刀路对象的参数化副本。

- [File:CAM Array.png](/index.php?title=Special:Upload&wpDestFile=CAM_Array.png "File:CAM Array.png") [数组](/CAM_Array "CAM Array"): 通过复制选定的刀路创建数组。

- [File:CAM SimpleCopy.png](/index.php?title=Special:Upload&wpDestFile=CAM_SimpleCopy.png "File:CAM SimpleCopy.png") [简化副本](/CAM_SimpleCopy "CAM SimpleCopy"): 创建选定刀路的非参数化副本。

### Specialty Operations

- ![](/images/CAM_ThreadMilling.svg) [Thread Milling](/CAM_ThreadMilling "CAM ThreadMilling"): Creates a CAM Thread Milling operation from features of a base object. [_Experimental_](/CAM_experimental "CAM experimental").

### Miscellaneous

- ![](/images/Path-Area.png) [特征区域](/CAM_Area "CAM Area"):为所选对象创建特征区域

- ![](/images/Path-Area-Workplane.png) [特征区域工作面](/CAM_Area_Workplane "CAM Area Workplane"): 创建一个特征区域工作面

## ToolBit architecture

Manage tools, bits, and the Tool Library. Based on the ToolBit architecture.

- [CAM Tools](/CAM_Tools "CAM Tools")
- [CAM ToolShape](/CAM_ToolShape "CAM ToolShape")
- [CAM ToolBit](/CAM_ToolBit "CAM ToolBit")
- [CAM ToolBit Library](/CAM_ToolBit_Library "CAM ToolBit Library")
- [CAM ToolController](/CAM_ToolController "CAM ToolController")

## Other

刀路工作台与其他 CAM 软件包共享许多概念，但有其独特之处。 如果出现问题，这个特点可能是一个很好的排错起点。

### 首选项

- ![](/images/Std_DlgParameter.png) [首选项...](/CAM_Preferences "CAM Preferences"): 刀路工具中的首选项。

## 脚本编写

见 [刀路脚本](/Path_scripting "Path scripting")页。

## Tutorials

- [CAM Walkthrough for the Impatient](/CAM_Walkthrough_for_the_Impatient "CAM Walkthrough for the Impatient"): a quick tutorial to get familiar with CAM.

## Videos

- [FreeCAD Path: Custom paths with Python - Part 1 - 5](https://www.youtube.com/playlist?list=PLEuOia-QxyFKgzAeTyH62GKqWKVURiWJL): A playlist with a series of 5 videos in English by sliptonic. This series shows how to work with the [CAM Workbench](/CAM_Workbench "CAM Workbench").
- [FreeCAD CAM Path Workbench](https://www.youtube.com/playlist?list=PLUrr_kHPp4vhGdLlj6IemtF-OPUlRvSTC): A playlist with a series of 7 videos in English by CAD CAM Lessons.
- [FreeCAD CAM CNC](https://www.youtube.com/playlist?list=PLUrr_kHPp4vh2n6DcIlegK4dEKIFjmISJ): A playlist with a series of 8 videos in English by CAD CAM Lessons.
- Also see the [Computer-Aided Manufacturing (CAM) section](</Video_tutorials#Computer-Aided_Manufacturing_(CAM)> "Video tutorials") of the [Video tutorials](/Video_tutorials "Video tutorials") wiki page.

## Roadmap

- [CAM Development Roadmap](/CAM_Development_Roadmap "CAM Development Roadmap"): Read this if you are a developer and want to contribute to CAM.

Retrieved from "<http://wiki.freecad.org/index.php?title=CAM_Workbench/zh&oldid=1494597>"
