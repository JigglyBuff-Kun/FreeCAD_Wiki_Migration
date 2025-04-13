---
title: 工作台
---

像许多现代设计应用程序，如[Revit](http://en.wikipedia.org/wiki/Revit "wikipedia:Revit")或[CATIA](http://en.wikipedia.org/wiki/CATIA "wikipedia:CATIA")，FreeCAD 基于[工作台](http://en.wikipedia.org/wiki/Workbench "wikipedia:Workbench")的概念。工作台可以被认为是为特定任务分组的一组工具。在一个传统的家具车间里，你有一个工作桌子给木材工作的人，另一张桌子给金属件工作的人，也可能有第三张桌子给把所有这些部件组装在一起的人。

在 FreeCAD 中，相同的概念也适用。工具根据其相关任务分为工作台。

当您从一个工作台切换到另一个工作台时，界面上可用的工具发生变化。工具栏，命令栏和界面的其他部分可以切换到新的工作台，但是您的场景的内容不会改变。例如，您可以使用草图工作台开始绘制 2D 形状，然后使用零件工作台进一步处理它们。

请注意，有时工作台被称为“模块”。但是，工作台和模块是不同的实体。模块是 FreeCAD 的任何扩展，而 Workbench 是一个特殊的 GUI 配置，可以组合一些工具栏和菜单。通常每个模块都包含自己的工作台，因此交叉使用名称。

## 内建的工作台

### Current

每个 FreeCAD 安装都可以使用以下工作台：

- ![](/images/Freecad.svg) [Std Base](/Std_Base "Std Base"). This is not really a workbench, but rather a category of 'standard' commands and tools that can be used in all workbenches.

- ![](/images/Workbench_Assembly.svg) The [Assembly Workbench](/Assembly_Workbench "Assembly Workbench") for building and solving mechanical assemblies. [introduced in 1.0](/Release_notes_1.0 "Release notes 1.0")

- ![](/images/Workbench_BIM.svg) The [BIM Workbench](/BIM_Workbench "BIM Workbench") for working with architectural elements and creating [BIM](https://en.wikipedia.org/wiki/Building_information_modeling) models. It combines the Arch Workbench and the formerly external BIM Workbench available in 0.21 and below.

- ![](/images/Workbench_CAM.svg) The [CAM Workbench](/CAM_Workbench "CAM Workbench") is used to produce G-Code instructions. This workbench was called "Path Workbench" in 0.21 and below.

- ![](/images/Workbench_Draft.svg) The [Draft Workbench](/Draft_Workbench "Draft Workbench") contains 2D tools and basic 2D and 3D CAD operations.

- ![](/images/Workbench_FEM.svg) The [FEM Workbench](/FEM_Workbench "FEM Workbench") provides Finite Element Analysis (FEA) workflow.

- ![](/images/Workbench_Inspection.svg) The [Inspection Workbench](/Inspection_Workbench "Inspection Workbench") is made to give you specific tools for examination of shapes. Still in the early stages of development.

- ![](/images/Workbench_Material.svg) The [Material Workbench](/Material_Workbench "Material Workbench") handles the FreeCAD material system. [introduced in 1.0](/Release_notes_1.0 "Release notes 1.0")

- ![](/images/Workbench_Mesh.svg) The [Mesh Workbench](/Mesh_Workbench "Mesh Workbench") for working with triangulated meshes.

- ![](/images/Workbench_OpenSCAD.svg) The [OpenSCAD Workbench](/OpenSCAD_Workbench "OpenSCAD Workbench") for interoperability with OpenSCAD and repairing [constructive solid geometry](/Constructive_solid_geometry "Constructive solid geometry") (CSG) model history.

- ![](/images/Workbench_Part.svg) The [Part Workbench](/Part_Workbench "Part Workbench") for working with geometric primitives and boolean operations.

- ![](/images/Workbench_PartDesign.svg) The [Part Design Workbench](/PartDesign_Workbench "PartDesign Workbench") for building Part shapes from sketches.

- ![](/images/Workbench_Points.svg) The [Points Workbench](/Points_Workbench "Points Workbench") for working with point clouds.

- ![](/images/Workbench_Reverse_Engineering.svg) The [Reverse Engineering Workbench](/Reverse_Engineering_Workbench "Reverse Engineering Workbench") is intended to provide specific tools to convert shapes/solids/meshes into parametric FreeCAD-compatible features.

- ![](/images/Workbench_Robot.svg) The [Robot Workbench](/Robot_Workbench "Robot Workbench") for studying robot movements. Currently unmaintained.

- ![](/images/Workbench_Sketcher.svg) The [Sketcher Workbench](/Sketcher_Workbench "Sketcher Workbench") for working with geometry-constrained sketches.

- ![](/images/Workbench_Spreadsheet.svg) The [Spreadsheet Workbench](/Spreadsheet_Workbench "Spreadsheet Workbench") for creating and manipulating spreadsheet data.

- ![](/images/Workbench_Surface.svg) The [Surface Workbench](/Surface_Workbench "Surface Workbench") provides tools to create and modify surfaces. It is similar to the [Part Builder](/Part_Builder "Part Builder") Face from edges option.

- ![](/images/Workbench_TechDraw.svg) The [TechDraw Workbench](/TechDraw_Workbench "TechDraw Workbench") for producing technical drawings from 3D models. It is the successor of the [Drawing Workbench](/Drawing_Workbench "Drawing Workbench").

- ![](/images/Workbench_Test.svg) The [Test Framework Workbench](/Testing "Testing") is for debugging FreeCAD.

### Obsolete

The following workbenches are no longer included after version 0.21:

- ![](/images/Workbench_Start.svg) The [Start Workbench](/Start_Workbench "Start Workbench") allows you to quickly jump to one of the most common workbenches. This workbench has been replaced by the Start page that can be accessed via the [Help menu](/Std_Help_Menu "Std Help Menu").

- ![](/images/Workbench_Web.svg) The [Web Workbench](/Web_Workbench "Web Workbench") provides you with a browser window instead of the [3D view](/3D_view "3D view") within FreeCAD.

The following workbenches are no longer included after version 0.20:

- ![](/images/Workbench_Drawing.svg) The [Drawing Workbench](/Drawing_Workbench "Drawing Workbench") was used for producing technical drawings. The [TechDraw Workbench](/TechDraw_Workbench "TechDraw Workbench") is its more advanced replacement.

- ![](/images/Workbench_Image.svg) The [Image Workbench](/Image_Workbench "Image Workbench") was used for working with bitmap images. Its functionality has been integrated in [Std Base](/Std_Base "Std Base"). See [Std Import](/Std_Import "Std Import") and [Std ViewLoadImage](/Std_ViewLoadImage "Std ViewLoadImage").

- ![](/images/Workbench_Raytracing.svg) The [Raytracing Workbench](/Raytracing_Workbench "Raytracing Workbench") was used for ray-tracing (rendering). The external [Render Workbench](https://github.com/FreeCAD/FreeCAD-render) should be used instead.

## 外部工作台

FreeCAD 工作台很容易在[Python](http://www.python.org)中编程，所以很多人在 FreeCAD 代码库之外开发了额外的工作台。

[外部工作台](/External_workbenches/zh-cn "External workbenches/zh-cn")页面有一些关于其中的一些信息和教程，[FreeCAD Addons](https://github.com/FreeCAD/FreeCAD-addons)项目旨在收集它们，并使其可以从 FreeCAD 中轻松安装。亦可用[Addon Manager](/Std_AddonMgr "Std AddonMgr")进行安装，它在菜单中的位置为**Tools → ![](/images/Std_AddonMgr.svg) Addon manager**。

Retrieved from "<http://wiki.freecad.org/index.php?title=Workbenches/zh-cn&oldid=1540538>"
