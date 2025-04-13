---
title: 刀路模板导出
---
|  |
| --- |
| CAM ExportTemplate |
| Menu location |
| CAM → Export Template |
| Workbenches |
| [CAM](/CAM_Workbench "CAM Workbench") |
| Default shortcut |
| *None* |
| Introduced in version |
| - |
| See also |
| [CAM SetupSheet](/CAM_SetupSheet "CAM SetupSheet") |
|  |

## 描述

导出作业模板提供了一个便捷的机制以保存来自现有作业中的通常使用的作业定义。在作业创建的过程中允许导入作业模板个促进了今后很大程度上相似的作业的设置。

编辑->首选项...->刀路->作业属性标签, 默认->模板用来设置默认模板。

## 使用

1. 从任何配置好的刀路作业中都能通过刀路->菜单，或者在组合视图中右键单击点击作业节点以调用16px 导出模板命令.
2. 从导出模板配置对话框中选择需要包含的元素。
3. 点击OK并保存模板。模板命必须遵循job\_<template name>.json这样的命名方式，而job\_前缀和扩展名不会在选择组合框中显示。刀路工作台读取模板的前提是需要将模板保存在刀路首选项中配置的宏文件夹或者刀路文件夹中。

## 可选项

## Post Processing

## 后期处理

* 后期处理器选择
* 后期处理器参数
* 输出文件名

## Stock

## 堆栈

* 规模：堆栈尺寸
* 位置：堆栈位置

## Setup Sheet

## 设置页

* 加工高度
* 加工深度
* 刀具旋转速度

## Tool controllers

## 刀具控制器

* 选择刀具控制器

Retrieved from "<http://wiki.freecad.org/index.php?title=CAM_ExportTemplate/zh&oldid=1386408>"