---
title: 路径工作台
---

![](/images/Workbench_CAM.svg)

CAM workbench icon

## 简介

路径工作台用于从 FreeCAD 3D 模型中生成 [数控机床](https://en.wikipedia.org/wiki/CNC_router) 的机器指令。这些产品在数控机床 (如铣刀、车床、激光切割机或类似设备) 上生产真实世界的 3D 物体。通常，指令集是[G 代码](https://en.wikipedia.org/wiki/G-Code) 的方言。

![](/images/Pathwb.png)

FreeCAD 路径工作台工作流程以以下方式创建机器指令:

- 3D 模型是基本对象, 通常使用一个或多个 [零件设计](/PartDesign_Workbench "PartDesign Workbench"), [零件](/Part_Workbench "Part Workbench") 或 [底图](/Draft_Workbench "Draft Workbench") 工作台。
- [作业](/CAM_Job "CAM Job") 是在路径工作台中创建的。这包含了所有信息用于生成数控机床上处理作业的必要 G 代码: 有库存材料, 铣削有一个确定的 [工具集](/CAM_ToolBitLibraryOpen "CAM ToolBitLibraryOpen"), 它遵循某些命令控制速度和动作 (通常是 G 代码)。
- 根据作业操作的要求选择工具。
- 铣削路径的创建使用例如 [轮廓](/CAM_Profile "CAM Profile") 和 [袖珍](/CAM_Pocket_3D "CAM Pocket 3D") 操作。这些 路径对象 使用内部 FreeCAD G 代码方言, 独立于数控机床。

## General concepts

## 一般概念

路径工作台生成 G 代码，定义了在目标中铣削由 3D 模型表示的项目所需要的路径—在 [路径作业操作 FreeCAD G 代码方言](https://www.freecadweb.org/wiki/Path_scripting#FreeCAD.27s_internal_GCode_format)，然后通过选择合适的后处理器, 将其转换为目标数控控制器的相应方言。

G 代码是从路径作业中包含的指令和操作生成的。 作业工作流按将执行的顺序列出这些任务。通过添加路径操作、路径装饰、路径部分命令和路径修改—从路径菜单或 GUI 按钮。

The G-code is generated from directives and Operations contained in a CAM Job. The Job Workflow lists these in the order they will be executed. The list is populated by adding CAM Operations, Path Dressups, Supplemental Commands, and Path Modifications from the CAM Menu, or GUI buttons.

路径工作台提供了一个工具管理器（库，工具表），和 G 代码检查，和模拟工具。它链接到后处理器，和允许导入和导出工作模板。

路径工作台有一个外部依赖：

1. FreeCAD 3D 模型单位是在 Edit->Preference...->General->Units 选项卡的单位进行设置。后处理器配置定义了最终的 G 代码单位。
2. 宏文件路径和几何公差是在 Edit->Preferences...->Path->Job Preferences 选项卡中定义
3. 颜色在 Edit->Preferences...->Path->Path colors 选项卡中设置
4. 保存标记参数在 Edit->Preferences...->Path->Dressups 选项卡中设置
5. 基本 3D 模型质量支持路径 WB 要求-通过检查几何。

## Limitations

Some current limitations of which you should be aware are:

- Most of the CAM Tools are not true 3D tools but only 2.5D capable. This means that they take a fixed 2D shape and can cut it down to a given depth. However, there are two tools which produce true 3D paths: ![](/images/CAM_3DPocket.svg) [3D Pocket](/CAM_Pocket_3D "CAM Pocket 3D") and ![](/images/CAM_Surface.svg) [3D Surface](/CAM_Surface "CAM Surface") (which is still an [experimental feature](/CAM_experimental "CAM experimental") as of November 2020).
- Most of CAM workbench is designed for a simple, standard 3-axis (xyz) CNC mill/router, but lathe tools are under development in 0.19_pre.
- Most operations in CAM workbench will return paths based on a standard endmill tool/bit only, regardless of the tool/bit type assigned in a given tool controller with the exception of the ![](/images/CAM_Engrave.svg) [Engrave](/CAM_Engrave "CAM Engrave") and ![](/images/CAM_Surface.svg) [3D Surface](/CAM_Surface "CAM Surface") operations.
- The operations within the CAM workbench are not aware of clamping mechanisms in use to secure the model to your machine. Consequently, please review and simulate the paths you generate prior to sending the code to your machine. If necessary, model your clamping mechanisms in FreeCAD in order to better inspect the paths generated. Look for possible collisions with clamps or other obstacles along the paths.

## Units

Unit handling in CAM can be confusing. There are several points to understand:

1. FreeCAD base units for length and time are 'mm' and 's' respectively. Velocity is thus 'mm/s'. This is what FreeCAD stores internally regardless of anything else
2. The default unit schema uses the default units. If you're using the default schema and you enter a feed rate without a unit string, it will get entered as 'mm/s'
3. Most CNC machines expect feed rate in the form of either 'mm/min' or 'in/min'. Most post-processors will automatically convert the unit when generating gcode.

Schemas:

1. Changing schema in preferences changes default unit string for the input fields. If you're a CAM user and prefer to design in metric, it's highly recommended that you use the "Metric Small Parts & CNC" schema. If you design in US units, either the Imperial Decimal and Building US will work.
2. Changing your preferred unit schema will have no effect on output but will help avoid input errors.

Output:

1. Generating the correct unit in output is the responsibility of the post-processor and is done only at that time.
2. Machine output unit is completely unrelated to your selected unit schema.
3. Post-processors produce either metric (G21) output, Imperial (G20) output or are configurable.
4. Configurable post-processors default to metric (G21).
5. If you want your configurable post-processor to output imperial G-code (G20), set the correct argument in your job output configuration (ie --inches for linuxcnc). This can be stored in a job template and set as your default template to make it automatic for all future jobs.

CAM Inspection:

1. If you use the CAM Inspect tool to look at G-code, you will see it in 'mm/s' because it is not being post-processed.

## Heights and depths

## 路径命令

![](/images/Path-DepthsAndHeights.gif)

Visual reference for Depth properties (settings)

## Commands

Some commands are experimental and not available by default. To enable them see [CAM experimental](/CAM_experimental "CAM experimental").

### Project Commands

- ![](/images/Path-Job.png) [Job](/CAM_Job "CAM Job"): 创建一个新的 CNC 作业

* [File:CAM PostProcess.png](/index.php?title=Special:Upload&wpDestFile=CAM_PostProcess.png "File:CAM PostProcess.png") [Post Process](/CAM_Post "CAM Post"): 导出一个项目到 G 代码

* [File:CAM Sanity.png](/index.php?title=Special:Upload&wpDestFile=CAM_Sanity.png "File:CAM Sanity.png") [CAM Errors](/CAM_Sanity "CAM Sanity"): 检查已选择的作业是否有缺失值

- ![](/images/Path-ExportTemplate.png) [Export Template](/CAM_ExportTemplate "CAM ExportTemplate"): 导出当前作业作为一个模板

### Tool Commands

- [File:CAM Inspect.png](/index.php?title=Special:Upload&wpDestFile=CAM_Inspect.png "File:CAM Inspect.png") [G-Code Inspector](/CAM_Inspect "CAM Inspect"): 显示 G 代码以便检查

- [File:CAM Simulator.png](/index.php?title=Special:Upload&wpDestFile=CAM_Simulator.png "File:CAM Simulator.png") [Simulator](/CAM_Simulator "CAM Simulator"): 显示铣削操作, 就像在机器上做的那样

* ![](/images/CAM_SimulatorGL.svg) [CAM SimulatorGL](/CAM_SimulatorGL "CAM SimulatorGL"): Enables the new, improved CAM simulator. [introduced in 1.0](/Release_notes_1.0 "Release notes 1.0")

* ![](/images/Path-CompleteLoop.png) [Complete Loop](/CAM_SelectLoop "CAM SelectLoop"): 从两个选定的边完成一个循环

* ![](/images/CAM_OpActiveToggle.svg) [Toggle the Active State of the Operation](/CAM_OpActiveToggle "CAM OpActiveToggle"): Activates or de-activates a path operation.

* ![](/images/CAM_ToolBitLibraryOpen.svg) [ToolBit Library editor](/CAM_ToolBitLibraryOpen "CAM ToolBitLibraryOpen"): Opens an editor to manage ToolBit libraries.

* ![](/images/CAM_ToolBitDock.svg) [ToolBit Dock](/CAM_ToolBitDock "CAM ToolBitDock"): Toggles the ToolBit Dock.

### Basic Operations

- ![](/images/CAM_Profile.svg) [Profile](/CAM_Profile "CAM Profile"): Creates a profile operation of the entire model, or from one or more selected faces or edges.

- ![](/images/CAM_Pocket_Shape.svg) [Pocket Shape](/CAM_Pocket_Shape "CAM Pocket Shape"): Creates a pocketing operation from one or more selected pocket(s).

* [File:CAM Drilling.png](/index.php?title=Special:Upload&wpDestFile=CAM_Drilling.png "File:CAM Drilling.png") [Drilling](/CAM_Drilling "CAM Drilling"): 执行钻孔循环

- ![](/images/CAM_MillFace.svg) [Face](/CAM_MillFace "CAM MillFace"): Creates a surfacing path.

- ![](/images/CAM_Helix.svg) [Helix](/CAM_Helix "CAM Helix"): Creates a helical path.

- ![](/images/CAM_Adaptive.svg) [Adaptive](/CAM_Adaptive "CAM Adaptive"): Creates an adaptive clearing and profiling operation.

- ![](/images/CAM_Slot.svg) [Slot](/CAM_Slot "CAM Slot"): Creates a slotting operation from selected features or custom points. [_Experimental_](/CAM_experimental "CAM experimental").

- ![](/images/CAM_Engrave.svg) [Engrave](/CAM_Engrave "CAM Engrave"): Creates an engraving path.

- ![](/images/CAM_Deburr.svg) [Deburr](/CAM_Deburr "CAM Deburr"): Creates a deburr path.

### 路径装饰

### 3D Operations

- ![](/images/CAM_Pocket_3D.svg) [3D Pocket](/CAM_Pocket_3D "CAM Pocket 3D"): Creates a path for a 3D pocket.

- ![](/images/Path-3DSurface.png) [3D Surface](/CAM_Surface "CAM Surface"): 为 3D 表面创建路径

- ![](/images/CAM_Waterline.svg) [Waterline](/CAM_Waterline "CAM Waterline"): Creates a waterline path for a 3D surface. [_Experimental_](/CAM_experimental "CAM experimental").

### Path Dressup

- ![](/images/CAM_DressupAxisMap.svg) [Axis Map](/CAM_DressupAxisMap "CAM DressupAxisMap"): Remaps one axis to another.

- ![](/images/CAM_DressupPathBoundary.svg) [Boundary](/CAM_DressupPathBoundary "CAM DressupPathBoundary"): Adds a boundary dressup modification to a selected path.

* [File:CAM Dressup.png](/index.php?title=Special:Upload&wpDestFile=CAM_Dressup.png "File:CAM Dressup.png") [Dogbone Dressup](/CAM_DressupDogbone "CAM DressupDogbone"): Adds a dogbone dressup modification to a selected path

- ![](/images/CAM_DressupDragKnife.svg) [DragKnife](/CAM_DressupDragKnife "CAM DressupDragKnife"): Adds a dragknife dressup modification to a selected path.

- ![](/images/CAM_DressupLeadInOut.svg) [LeadInOut](/CAM_DressupLeadInOut "CAM DressupLeadInOut"): Adds a lead-in and/or lead-out point to a selected path.

- ![](/images/CAM_DressupRampEntry.svg) [RampEntry](/CAM_DressupRampEntry "CAM DressupRampEntry"): Adds ramp entry dressup modification to a selected path.

- ![](/images/CAM_DressupTag.svg) [Tag](/CAM_DressupTag "CAM DressupTag"): Adds a holding tag dressup modification to a selected path.

- ![](/images/CAM_DressupZCorrect.svg) [Z Depth Correction](/CAM_DressupZCorrect "CAM DressupZCorrect"): Corrects the Z depth using Probe Map.

### 部分命令

- [File:CAM Fixture.png](/index.php?title=Special:Upload&wpDestFile=CAM_Fixture.png "File:CAM Fixture.png") [Fixture](/CAM_Fixture "CAM Fixture"): 改变夹具的位置

- [File:CAM Comment.png](/index.php?title=Special:Upload&wpDestFile=CAM_Comment.png "File:CAM Comment.png") [Comment](/CAM_Comment "CAM Comment"): 插入一个注释到路径的 G 代码中

- [File:CAM Stop.png](/index.php?title=Special:Upload&wpDestFile=CAM_Stop.png "File:CAM Stop.png") [Stop](/CAM_Stop "CAM Stop"): 插入一个全部停止机器指令

- [File:CAM Custom.png](/index.php?title=Special:Upload&wpDestFile=CAM_Custom.png "File:CAM Custom.png") [Custom](/CAM_Custom "CAM Custom"): 插入自定义 G 代码

* ![](/images/CAM_Probe.svg) [Probe](/CAM_Probe "CAM Probe"): Creates a Probing Grid from a job stock.

* ![](/images/CAM_Shape.svg) [From Shape](/index.php?title=CAM_Shape/zh-cn&action=edit&redlink=1 "CAM Shape/zh-cn (page does not exist)"): Creates a path object from a selected Part object. [_Experimental_](/CAM_experimental "CAM experimental").

### 路径修改

- [File:CAM Copy.png](/index.php?title=Special:Upload&wpDestFile=CAM_Copy.png "File:CAM Copy.png") [Copy](/CAM_Copy "CAM Copy"): 创建选定路径对象的参数化副本

- [File:CAM Array.png](/index.php?title=Special:Upload&wpDestFile=CAM_Array.png "File:CAM Array.png") [Array](/CAM_Array "CAM Array"): 通过复制选定路径创建数组

- [File:CAM SimpleCopy.png](/index.php?title=Special:Upload&wpDestFile=CAM_SimpleCopy.png "File:CAM SimpleCopy.png") [Simple Copy](/CAM_SimpleCopy "CAM SimpleCopy"): 创建选定路径对象的非参数副本

### Specialty Operations

- ![](/images/CAM_ThreadMilling.svg) [Thread Milling](/CAM_ThreadMilling "CAM ThreadMilling"): Creates a CAM Thread Milling operation from features of a base object. [_Experimental_](/CAM_experimental "CAM experimental").

### Miscellaneous

- ![](/images/Path-Area.png) [Feature area](/CAM_Area "CAM Area"): 从从所选对象创建一个特征区域

- ![](/images/Path-Area-Workplane.png) [Feature area workplane](/CAM_Area_Workplane "CAM Area Workplane"): 创建一个特征区域工作面

## ToolBit architecture

Manage tools, bits, and the Tool Library. Based on the ToolBit architecture.

- [CAM Tools](/CAM_Tools "CAM Tools")
- [CAM ToolShape](/CAM_ToolShape "CAM ToolShape")
- [CAM ToolBit](/CAM_ToolBit "CAM ToolBit")
- [CAM ToolBit Library](/CAM_ToolBit_Library "CAM ToolBit Library")
- [CAM ToolController](/CAM_ToolController "CAM ToolController")

## Other

路径工作台与其它 CAM 软件包共享很多概念但是它有自己的特性。如果有什么不对劲的地方, 这可能是一个很好的开始。

## Preferences

- ![](/images/Preferences-cam.svg) [Preferences...](/CAM_Preferences "CAM Preferences"): Preferences available for the CAM Workbench.

## 脚本

See [CAM scripting](/CAM_scripting "CAM scripting").

## Tutorials

- [CAM Walkthrough for the Impatient](/CAM_Walkthrough_for_the_Impatient "CAM Walkthrough for the Impatient"): a quick tutorial to get familiar with CAM.

## Videos

- [FreeCAD Path: Custom paths with Python - Part 1 - 5](https://www.youtube.com/playlist?list=PLEuOia-QxyFKgzAeTyH62GKqWKVURiWJL): A playlist with a series of 5 videos in English by sliptonic. This series shows how to work with the [CAM Workbench](/CAM_Workbench "CAM Workbench").
- [FreeCAD CAM Path Workbench](https://www.youtube.com/playlist?list=PLUrr_kHPp4vhGdLlj6IemtF-OPUlRvSTC): A playlist with a series of 7 videos in English by CAD CAM Lessons.
- [FreeCAD CAM CNC](https://www.youtube.com/playlist?list=PLUrr_kHPp4vh2n6DcIlegK4dEKIFjmISJ): A playlist with a series of 8 videos in English by CAD CAM Lessons.
- Also see the [Computer-Aided Manufacturing (CAM) section](</Video_tutorials#Computer-Aided_Manufacturing_(CAM)> "Video tutorials") of the [Video tutorials](/Video_tutorials "Video tutorials") wiki page.

## Roadmap

- [CAM Development Roadmap](/CAM_Development_Roadmap "CAM Development Roadmap"): Read this if you are a developer and want to contribute to CAM.

Retrieved from "<http://wiki.freecad.org/index.php?title=CAM_Workbench/zh-cn&oldid=1494611>"
