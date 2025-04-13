---
title: 刀路模拟
---
:::caution
This documentation is not finished. Please help and contribute documentation.GuiCommand modelexplains how commands should be documented. BrowseCategory:UnfinishedDocuto see more incomplete pages like this one. SeeCategory:Command Referencefor all commands.SeeWikiPagesto learn about editing the wiki pages, and go toHelp FreeCADto learn about other ways in which you can contribute.
:::

|  |
| --- |
| CAM Simulator |
| Menu location |
| CAM → CAM Simulator |
| Workbenches |
| [CAM](/CAM_Workbench "CAM Workbench") |
| Default shortcut |
| P M |
| Introduced in version |
| - |
| See also |
| [CAM Inspect](/CAM_Inspect "CAM Inspect") |
|  |

## 描述

此工具可以通过沿G-code路径扫略用于每个操作的刀具3D模型模拟刀路作业，当刀具和毛坯重叠时消去毛坯中的材料以提供可视化的作业运行效果。这可以在机床运行作业前上检查并杜绝错误。

![](/images/Path-Simulation.gif)

## Usage

## 使用

1. 按下![](/images/Path_Simulator.png) [模拟器](/Path_Simulator "Path Simulator")按钮
2. 取消不需要模拟的操作。
3. 调整速度和精度设定。
4. 从下拉菜单中选择需要模拟的作业。
5. 按下播放按钮播放或者回放操作的动画。按下快进按钮加快播放速度。
6. 暂停和单步功能用来解决特定铣削或者刀具移动。
7. 点击取消按钮将移除为模拟创建的毛坯料，如果你点击OK该项目将保留在你的作业中。

## 属性

1. 需求使用

* Data**回放速度**:虚拟回放速度，以G-Code行/秒为单位。
* Data**精度**: 模拟精度由指示模拟偏离实际作业的百分比来表现。对于交互式模拟，将精度减少到0.3工作速度最快。
* Data**作业**: 用于模拟基础的作业。
* Data**操作表**: 包含在模拟中的操作清单。

Retrieved from "<http://wiki.freecad.org/index.php?title=CAM_Simulator/zh&oldid=1486233>"