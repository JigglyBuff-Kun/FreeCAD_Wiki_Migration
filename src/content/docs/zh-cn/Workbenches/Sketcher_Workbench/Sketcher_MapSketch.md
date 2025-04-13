---
title: 草图工作台中的草图映射工具
---
|  |
| --- |
| 映射草图至面... |
| 菜单位置 |
| Part Design/Sketch → 映射草图至面... |
| 所属工作台 |
| [Sketcher](/Sketcher_Workbench/zh-cn "Sketcher Workbench/zh-cn"), [PartDesign](/PartDesign_Workbench/zh-cn "PartDesign Workbench/zh-cn") |
| 默认快捷键 |
| *沒有* |
| 版本介紹 |
| - |
| 参阅 |
| [创建草图](/Sketcher_NewSketch/zh-cn "Sketcher NewSketch/zh-cn") |
|  |

## Description

## 描述

此工具会将一个存在的草图映射至一个几何图形的面上。以此草图创建的PartDesign特征可针对相加特征（如两种挤出成型方式Pad与evolution）与基础实体融合，或针对相减特征（如两种挖槽方式Pocket与Groove）与基础实体相减。

请注意，此工具不能用于创建新的草图。仅限于进行草图映射，或将存在的草图重新映射至实体面或PartDesign特征。典型的使用场景：

* 草图被创建在一个标准的平面上(XY, XZ, YZ)，而您却想将其映射至一个实体面上，从而进一步在此构建一个特征。
* 草图被映射至实体的某个特定面上，而您却需要把它映射至另一个不同的面上。
* 修复一个坏掉的模型。

![](/images/Sketcher_MapSketch_00.png)

## Usage

## 如何使用

* 选择一个PartDesign特征上的面或一个实体上的面。
* 点击工具栏中的![Sketcher_MapSketch](/images/Sketcher_MapSketch.png) [Map sketch to face](/Sketcher_MapSketch "Sketcher MapSketch")图标（或前往当前所用工作台中的PartDesign或Sketch菜单找此工具）。
* 在打开的**Select sketch**对话窗口中的列表里选择待映射至面上的草图，并点击OK。
* 草图将自动在编辑模式下打开。

Retrieved from "<http://wiki.freecad.org/index.php?title=Sketcher_MapSketch/zh-cn&oldid=1387610>"