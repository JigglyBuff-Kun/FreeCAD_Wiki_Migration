---
title: 建筑移除工具
---
:::caution
THIS COMMAND IS PART OF THE INTEGRATEDBIM WORKBENCHIN V1.0This page has been updated for that version.
:::

|  |
| --- |
| 建筑移除工具 |
| 菜单位置 |
| Arch → Remove |
| 所属工作台 |
| [Arch](/Arch_Workbench/zh-cn "Arch Workbench/zh-cn") |
| 默认快捷键 |
| *沒有* |
| 版本介紹 |
| - |
| 参阅 |
| [Arch Add/zh-cn](/Arch_Add/zh-cn "Arch Add/zh-cn") |
|  |

## 描述

移除工具允许您执行两种操作：

* 从建筑对象中移除一个子构件，例如像[建筑添加工具](/Arch_Add "Arch Add")示例中那样，将添加至墙体的立方体移除掉。
* 从如[墙体（wall）](/Arch_Wall "Arch Wall")或[结构构件（structure）](/Arch_Structure "Arch Structure")等建筑构件中去掉具有[形状（shape）](/Part_Workbench "Part Workbench")的对象。

[建筑添加](/Arch_Add "Arch Add")工具与本工具功能相反。

![](/images/Arch_Remove_example.jpg)

从墙体中去掉一个立方体，于是便留下了一个洞。

## 如何使用

1. 选中建筑对象中的某个子构件。
2. 按![](/images/Arch_Remove.svg) [Remove](/Arch_Remove "Arch Remove")按钮。

或者

1. 先选择待移除的（若干）对象，最后选择主建筑对象（也就是要从中去掉前面所选的对象）。
2. 按![](/images/Arch_Remove.svg) [Remove](/Arch_Remove "Arch Remove")按钮。

## Scripting

## 脚本

*参阅:* [Arch API](/Arch_API "Arch API") 与 [FreeCAD Scripting Basics](/FreeCAD_Scripting_Basics "FreeCAD Scripting Basics")。

通过下列函数就可以在[macros](/Macros "Macros")与[Python](/Python "Python")控制台中使用移除工具：

```
removeComponents(objectsList, host=None)

```

* 从父对象中去掉`objectsList`里的诸对象。
* 如果指定了`host`对象，此函数将试图从`host`中去掉与`objectsList`里诸对象的交集。

示例：

```
import FreeCAD, Draft, Arch

Line = Draft.makeWire([FreeCAD.Vector(0, 0, 0),FreeCAD.Vector(2000, 2000, 0)])
Wall = Arch.makeWall(Line, width=150, height=3000)

Box = FreeCAD.ActiveDocument.addObject("Part::Box", "Box")
Box.Length = 900
Box.Width = 450
Box.Height = 2000
FreeCAD.ActiveDocument.recompute()

Draft.rotate(Box, 45)
Draft.move(Box, FreeCAD.Vector(1000, 700, 0))

Arch.removeComponents(Box, Wall)
FreeCAD.ActiveDocument.recompute()

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Arch_Remove/zh-cn&oldid=1437759>"