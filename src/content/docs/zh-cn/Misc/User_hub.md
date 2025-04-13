---
title: 使用者入口
---

![](/images/User_hub.png)

---

这是 FreeCAD 为新手提供主要帮助的区域。

FreeCAD 正在持续开发中，所以可能存在缺少或过时的信息。如果你找不到你想要的信息，请不要犹豫，马上在 [FreeCAD 论坛](https://forum.freecad.org) 中进行咨询。

如果你想要为 FreeCAD 作出贡献，请[捐赠](/Donate "Donate")，或者参阅 [帮助 FreeCAD](/Help_FreeCAD/zh-cn "Help FreeCAD/zh-cn")页面。如果你想编辑这个维基，请到 [论坛](https://forum.freecad.org/viewtopic.php?f=21&t=6830) 中请求一个具有编辑权限的维基账号，并且你遵循 [WikiPages](/WikiPages "WikiPages") 中描述的通用指引进行编辑。

如果你有兴趣了解 FreeCAD 的开发是怎么开始，多年来是怎么进行的，请访问[历史](/History "History")页面。

## FreeCAD 的使用

## 简介

- [应用总览](/About_FreeCAD/zh-cn "About FreeCAD/zh-cn"): FreeCAD 概况的一个通览。
- [安装应用](/Installing/zh-cn "Installing/zh-cn"): 怎样把 FreeCAD 安装在[Windows](/Install_on_Windows/zh-cn "Install on Windows/zh-cn"), [Linux](/Install_on_Linux/zh-cn "Install on Linux/zh-cn")和[Mac](/Install_on_Mac/zh-cn "Install on Mac/zh-cn")系统上。
- [帮助文件的安装](/index.php?title=Installing_Helpfile/zh-cn&action=edit&redlink=1 "Installing Helpfile/zh-cn (page does not exist)"): 怎样安装基于这个维基的离线文档
- [起步入门](/Getting_started/zh-cn "Getting started/zh-cn"): 对各种好用的工具建立一个总体印象。
- [常见提问](/index.php?title=Frequently_asked_questions/zh-cn&action=edit&redlink=1 "Frequently asked questions/zh-cn (page does not exist)"): 经常被问到的题目，这里有答案。
- [指导教程](/Tutorials/zh-cn "Tutorials/zh-cn")涉及到了 FreeCAD 的不同方面。

#### 从其他软件迁移过来？

- [解决办法](/index.php?title=Workarounds/zh-cn&action=edit&redlink=1 "Workarounds/zh-cn (page does not exist)")
- [从 Fusion360 迁移至 FreeCAD](/index.php?title=Migrating_to_FreeCAD_from_Fusion360/zh-cn&action=edit&redlink=1 "Migrating to FreeCAD from Fusion360/zh-cn (page does not exist)")
- [从 OnShape 迁移至 FreeCAD](/index.php?title=Migrating_to_FreeCAD_from_OnShape/zh-cn&action=edit&redlink=1 "Migrating to FreeCAD from OnShape/zh-cn (page does not exist)")
- [从 SolidWorks 迁移至 FreeCAD](/index.php?title=Migrating_to_FreeCAD_from_SolidWorks/zh-cn&action=edit&redlink=1 "Migrating to FreeCAD from SolidWorks/zh-cn (page does not exist)")
- [从 Revit 迁移至 FreeCAD](/index.php?title=Migrating_to_FreeCAD_from_Revit/zh-cn&action=edit&redlink=1 "Migrating to FreeCAD from Revit/zh-cn (page does not exist)")
- [FreeCAD BIM migration guide](https://yorik.uncreated.net/blog/2020-010-freecad-bim-guide)
- [BIM 应用兼容性表](/BIM_application_compatibility_table "BIM application compatibility table")

### 基础应用

- [界面](/index.php?title=Interface/zh-cn&action=edit&redlink=1 "Interface/zh-cn (page does not exist)")：FreeCAD 的界面由屏幕上的各种图形元素组成，包括[3D 视图](/index.php?title=3D_view/zh-cn&action=edit&redlink=1 "3D view/zh-cn (page does not exist)")、[树视图](/index.php?title=Tree_view/zh-cn&action=edit&redlink=1 "Tree view/zh-cn (page does not exist)")、[属性编辑器](/Property_editor/zh-cn "Property editor/zh-cn")、[任务面板](/Task_panel/zh-cn "Task panel/zh-cn") 和[Python 控制台](/index.php?title=Python_console/zh-cn&action=edit&redlink=1 "Python console/zh-cn (page does not exist)")。
- [鼠标导航](/Mouse_navigation/zh-cn "Mouse navigation/zh-cn")：使用鼠标或触控板在三维视图中导航的不同类型。
- [选择方法](/index.php?title=Selection_methods/zh-cn&action=edit&redlink=1 "Selection methods/zh-cn (page does not exist)")：在软件中选择对象的不同方法。
- [对象名称](/index.php?title=Object_name/zh-cn&action=edit&redlink=1 "Object name/zh-cn (page does not exist)")： FreeCAD 对象有一个只读的`Name`，可以唯一地识别它们，还有一个`Label`，可以由用户编辑。
- [首选项编辑器](/Preferences_Editor/zh-cn "Preferences Editor/zh-cn")：该系统允许你控制基本系统和各个工作台的许多属性。
- [文件格式](/Import_Export/zh-cn "Import Export/zh-cn")：FreeCAD 可以读取和写入的不同文件格式。

### 工作台

[工作台](/Workbenches/zh-cn "Workbenches/zh-cn")是用于特定任务的工具集合。这些是与每个 FreeCAD 安装捆绑在一起的基本工作台：

- ![](/images/Freecad.svg) [标准工具](/Std_Base "Std Base"). 这些命令和工具存在于所有工作台中。

- ![](/images/Workbench_Assembly.svg) The [Assembly Workbench](/Assembly_Workbench "Assembly Workbench") for building and solving mechanical assemblies. [introduced in 1.0](/Release_notes_1.0 "Release notes 1.0")

- ![](/images/Workbench_BIM.svg) The [BIM Workbench](/BIM_Workbench "BIM Workbench") for working with architectural elements and creating [BIM](https://en.wikipedia.org/wiki/Building_information_modeling) models. It combines the Arch Workbench and the formerly external BIM Workbench available in 0.21 and below.

- ![](/images/Workbench_CAM.svg) The [CAM Workbench](/CAM_Workbench "CAM Workbench") is used to produce G-Code instructions. This workbench was called "Path Workbench" in 0.21 and below.

- ![](/images/Workbench_Draft.svg) [草图工作台](/Draft_Workbench "Draft Workbench") 包含 2D 工具和基本的 2D 和 3D CAD 操作。

- ![](/images/Workbench_FEM.svg) [FEM 工作台](/FEM_Workbench "FEM Workbench") 提供有限元分析 (FEA) 工作流程。

- ![](/images/Workbench_Inspection.svg) [Inspection Workbench](/Inspection_Workbench "Inspection Workbench") 旨在为您提供用于检查形状的特定工具。 它仍在开发中。

- ![](/images/Workbench_Material.svg) The [Material Workbench](/Material_Workbench "Material Workbench") handles the FreeCAD material system. [introduced in 1.0](/Release_notes_1.0 "Release notes 1.0")

- ![](/images/Workbench_Mesh.svg) [Mesh Workbench](/Mesh_Workbench "Mesh Workbench") 用于处理三角网格。

- ![](/images/Workbench_OpenSCAD.svg) [OpenSCAD 工作台](/OpenSCAD_Workbench "OpenSCAD Workbench") 与 OpenSCAD 的互操作性和修复 [构造立体几何](/Constructive_solid_geometry "Constructive solid geometry") (CSG) 模型历史。

- ![](/images/Workbench_Part.svg) [零件工作台](/Part_Workbench "Part Workbench") 用于处理几何图元和布尔运算。

- ![](/images/Workbench_PartDesign.svg) [零件设计工作台](/PartDesign_Workbench "PartDesign Workbench") 用于从草图构建零件形状。

- ![](/images/Workbench_Points.svg) 用于处理点云的 [Points Workbench](/Points_Workbench "Points Workbench")。

- ![](/images/Workbench_Reverse_Engineering.svg) [逆向工程工作台](/Reverse_Engineering_Workbench "Reverse Engineering Workbench") 旨在提供将形状/实体/网格转换为参数化 FreeCAD 兼容功能的特定工具。

- ![](/images/Workbench_Robot.svg) 用于研究机器人运动的 [Robot Workbench](/Robot_Workbench "Robot Workbench")。目前没有被维护

- ![](/images/Workbench_Sketcher.svg) [Sketcher Workbench](/Sketcher_Workbench "Sketcher Workbench") 用于处理几何约束草图。

- ![](/images/Workbench_Spreadsheet.svg) [Spreadsheet Workbench](/Spreadsheet_Workbench "Spreadsheet Workbench") 用于创建和操作电子表格数据。

- ![](/images/Workbench_Surface.svg) [Surface Workbench](/Surface_Workbench "Surface Workbench") 提供创建和修改表面的工具。 它类似于 [Part Builder](/Part_Builder "Part Builder") Face from edges 选项。

- ![](/images/Workbench_TechDraw.svg) [TechDraw Workbench](/TechDraw_Workbench "TechDraw Workbench") 用于从 3D 模型生成技术图纸。

- ![](/images/Workbench_Test.svg) [测试框架工作台](/Testing "Testing") 用于调试 FreeCAD。

### 宏

[Macros](/Macros "Macros") 是相对较小的 [Python](/Python "Python") 代码片段，用于执行基本 FreeCAD 系统中不可用的简单或复杂任务。

高级用户编写了各种 [macros](/Macros "Macros") 来增强 FreeCAD 的更多功能。

从 FreeCAD 0.17 开始，可以使用 [Addon Manager](/Std_AddonMgr "Std AddonMgr") 安装许多宏。 有关宏列表，请参阅 [宏食谱](/Macros_recipes "Macros recipes") 页面。 对于手动安装，请参阅[如何安装宏](/How_to_install_macros "How to install macros")。

### 外挂工作台

发烧友们为 FreeCAD 创建了各种各样的外挂工作台，他们虽然还没有集成到 FreeCAD 的源代码中，但是他们很容易安装到本地的 FreeCAD 上面。你可以 [在这里](/External_workbenches/zh-cn "External workbenches/zh-cn")看到所有已经可用的的工作台。
对于安装这些工作台的指导说明，你可以参考教程[如何安装附加工作台](/How_to_install_additional_workbenches "How to install additional workbenches")。

当许多宏或函数一起开发，并组织在工具栏和菜单中时，它们可以成为一个新的工作台。

[外部工作台](/External_workbenches "External workbenches") 是不属于基本 FreeCAD 系统一部分的功能集合，通常由经验丰富的用户开发，并针对特定需求。

从 FreeCAD 0.17 开始，可以使用 [Addon Manager](/Std_AddonMgr "Std AddonMgr") 安装许多工作台。 对于手动安装，请参阅[如何安装附加工作台](/How_to_install_additional_workbenches "How to install additional workbenches")。

## 参考

- [命令参考](/List_of_Commands "List of Commands")：FreeCAD 可用命令的一份完整清单。

## 在线帮助

这是 FreeCAD 的官方在线帮助文档。请注意整个在线帮助系统正在重造。它将用来生成一个.CHM 格式的文件，附着于 FreeCAD 二进制安装文件分发。目前，这个在线帮助总结了这个 wiki 最完整的的一些部分。

- [在线帮助系统 - 内容目录](/Online_Help_Toc/zh-cn "Online Help Toc/zh-cn")

## 更多内容

- 如果你想看到更多 FreeCAD 的高级用法，就应该去[发烧友入口](/Power_users_hub/zh-cn "Power users hub/zh-cn")看看。
- [建筑工作流程](http://yorik.uncreated.net/guestblog.php?tag=freecad)：给出了一个实例，说明 FreeCAD 开始能在建筑工作流程中找到一席之地了。
- 如果你想帮助 FreeCAD 项目，请直奔[帮助 FreeCAD](/Help_FreeCAD/zh-cn "Help FreeCAD/zh-cn")页面。
- [FreeCAD 社区贡献大厅](/FreeCAD_Community_Portal "FreeCAD Community Portal")列出了一些项目，它们围绕 FreeCAD，都是社区成员自己做的。
- 不明白一个词或说法在 FreeCAD 中的意思？试试查阅[词汇表](/Glossary "Glossary")吧。

Retrieved from "<http://wiki.freecad.org/index.php?title=User_hub/zh-cn&oldid=1560480>"
