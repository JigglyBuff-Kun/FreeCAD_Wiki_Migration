---
title: 导入导出
---
## Introduction

此页面收集可以从FreeCAD导入或导出的不同文件格式。大多数这些文件格式由特定的模块实现。为了导入或导出该格式，不需要加载此模块，但必须加载该模块以显示相应的首选项页面。

## Related

See the following pages for additional information:

* [Import Export Preferences](/Import_Export_Preferences "Import Export Preferences")
* [FreeCAD Howto Import Export](/FreeCAD_Howto_Import_Export "FreeCAD Howto Import Export")

## Overview of file formats

| 格式 | 描述 | 导入 | 导出 | 模块 | 参数页 |
| --- | --- | --- | --- | --- | --- |
| [FCStd](/Fcstd_file_format "Fcstd file format") | FreeCAD的原生文件格式 | 是 | 是 | 内建 | 否 |
| [FCMat](/Material "Material") | FreeCAD 材质卡片 | 是 | 是 | 内建 | 否 |
| [FCMacro](/Macros "Macros") | FreeCAD 宏 | 是 | 是 | 内建 | 否 |
| STEP | 工程模型中使用最广泛的交换格式之一 | 是 | 是 | [Part](/Part_Workbench "Part Workbench") | 是 |
| STPZ | 工程模型中广泛使用的STEP交换格式的压缩版本 | 是 | 是 | [Part](/Part_Workbench "Part Workbench") | 是 |
| IGES | 有点老，但仍然经常使用的二进制格式 | 是 | 是 | [Part](/Part_Workbench "Part Workbench") | 是 |
| BREP | OpenCasCade 的原生格式 | 是 | 是 | [Part](/Part_Workbench "Part Workbench") | 否 |
| [DXF](/Draft_DXF "Draft DXF") | Autodesk 交换格式. 仅支持 2D 几何图形 | 是 | 是 | [Draft](/Draft_Workbench "Draft Workbench") | 是 |
| [DWG](/FreeCAD_and_DWG_Import "FreeCAD and DWG Import") | Autocad 主要格式. 仅支持 2D 几何图形. 要求安装 [外部软件](/FreeCAD_and_DWG_Import "FreeCAD and DWG Import"). | 是 | 是 | [Draft](/Draft_Workbench "Draft Workbench") | 是 |
| [SVG](/Draft_SVG "Draft SVG") | 2D格式广泛用于矢量图形 | 是 | 是 | [Draft](/Draft_Workbench "Draft Workbench") / [Drawing](/Drawing_Workbench "Drawing Workbench") | 是 |
| [OCA](/Draft_OCA "Draft OCA") | Open CAD 的格式（过时的2D格式） | 是 | 是 | [Draft](/Draft_Workbench "Draft Workbench") | 是 |
| [IFC](/Arch_IFC "Arch IFC") | 行业基础类，用于交换BIM模型。需要安装[外部软件](/Arch_IFC "Arch IFC")。 | 是 | 是 | [Arch](/Arch_Workbench "Arch Workbench") | 是 |
| [DAE](/Arch_DAE "Arch DAE") | Collada格式，用于交换网格几何图形。 | 是 | 是 | [Arch](/Arch_Workbench "Arch Workbench") | 是 |
| [OBJ](/Arch_OBJ "Arch OBJ") | 网格交换格式 | 是 | 是 | [Arch](/Arch_Workbench "Arch Workbench") / [Mesh](/Mesh_Workbench "Mesh Workbench") | 否 |
| STL | 多数用于 3D 打印的网格交换格式 | 是 | 是 | [Mesh](/Mesh_Workbench "Mesh Workbench") | 否 |
| BMS | 二进制网格交换格式 | 是 | 是 | [Mesh](/Mesh_Workbench "Mesh Workbench") | 否 |
| AST | 网格交换格式 | 是 | 是 | [Mesh](/Mesh_Workbench "Mesh Workbench") | 否 |
| OFF | 网格交换格式 | 是 | 是 | [Mesh](/Mesh_Workbench "Mesh Workbench") | 否 |
| PLY | 网格交换格式 / 点集 | 是 | 是 | [Mesh](/Mesh_Workbench "Mesh Workbench") / [Points](/Points_Workbench "Points Workbench") | 否 |
| INP | Abaqus格式 | 是 | 是 | [FEM](/FEM_Workbench "FEM Workbench") | 否 |
| POLY | Tetgen格式 | 否 | 是 | [FEM](/FEM_Workbench "FEM Workbench") | 否 |
| UNV | FEM 交换格式 | 是 | 是 | [FEM](/FEM_Workbench "FEM Workbench") | 否 |
| MED | FEM 交换格式 | 是 | 是 | [FEM](/FEM_Workbench "FEM Workbench") | 否 |
| DAT | FEM 交换格式 (FEM) 或者 2D 翼型 (airfoil profile 底图) | 是 | 是 | [FEM](/FEM_Workbench "FEM Workbench") / [Draft](/Draft_Workbench "Draft Workbench") | 否 |
| BDF | FEM 交换格式 | 是 | 否 | [FEM](/FEM_Workbench "FEM Workbench") | 否 |
| FRD | CalculiX 产生格式 | 是 | 否 | [FEM](/FEM_Workbench "FEM Workbench") | 否 |
| NC | G-代码 文件格式 | 是 | 是 | [Path](/Path_Workbench "Path Workbench") | 否 |
| GC | G-代码 文件格式 | 是 | 是 | [Path](/Path_Workbench "Path Workbench") | 否 |
| NCC | G-代码 文件格式 | 是 | 是 | [Path](/Path_Workbench "Path Workbench") | 否 |
| NGC | G-代码 文件格式 | 是 | 是 | [Path](/Path_Workbench "Path Workbench") | 否 |
| CNC | G-代码 文件格式 | 是 | 是 | [Path](/Path_Workbench "Path Workbench") | 否 |
| TAP | G-代码 文件格式 | 是 | 是 | [Path](/Path_Workbench "Path Workbench") | 否 |
| GCODE | G-代码 文件格式 | 是 | 是 | [Path](/Path_Workbench "Path Workbench") | 否 |
| EMN | IDF 文件格式 | 是 | 否 | Idf | 否 |
| IV | OpenInventor 文件格式 | 是 | 是 | 内建 | 否 |
| VRML | Web 3D format | 是 | 是 | 内建 | 否 |
| WebGL (HTML) | Web 3D format | 否 | 是 | [Arch](/Arch_Workbench "Arch Workbench") | 否 |
| SCAD | OpenSCAD 文件格式 | 是 | 是 | [OpenSCAD](/OpenSCAD_Workbench "OpenSCAD Workbench") | 否 |
| CSG | OpenSCAD 建构实体几何 | 是 | 是 | [OpenSCAD](/OpenSCAD_Workbench "OpenSCAD Workbench") | 否 |
| ASC | 点集格式 | 是 | 否 | [Points](/Points_Workbench "Points Workbench") | 否 |
| POV | Povray 格式 | 否 | 是 | [Raytracing](/Raytracing_Workbench "Raytracing Workbench") | 否 |
| CSV | 逗号分隔值电子表格 | 是 | 是 | [Spreadsheet](/Spreadsheet_Workbench "Spreadsheet Workbench") | 否 |
| PDF | Adobe便携文件格式 | 否 | 是 | 内建 | 否 |

Retrieved from "<http://wiki.freecad.org/index.php?title=Import_Export/zh-cn&oldid=958518>"