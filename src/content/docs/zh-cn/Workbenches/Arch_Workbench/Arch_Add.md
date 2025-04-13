---
title: 建筑添加工具
---
:::caution
THIS COMMAND IS PART OF THE INTEGRATEDBIM WORKBENCHIN V1.0This page has been updated for that version.
:::

|  |
| --- |
| 建筑添加工具 |
| 菜单位置 |
| Arch → Add |
| 所属工作台 |
| [Arch](/Arch_Workbench "Arch Workbench") |
| 默认快捷键 |
| *沒有* |
| 版本介紹 |
| - |
| 参阅 |
| [Arch Remove](/Arch_Remove "Arch Remove") |
|  |

## 描述

借助本建筑添加工具您将能够实现以下4种操作：

* 将具有[形状（shape）](/Part_Workbench "Part Workbench")的对象添加至[墙体（wall）](/Arch_Wall "Arch Wall")或[结构构件（structure）](/Arch_Structure "Arch Structure")等建筑构件。这会令那些对象成为建筑构件的一部分，即令您在不改动宽高等属性的情况下，方便地修改其形状。
* 将[墙体（wall）](/Arch_Wall "Arch Wall")或[结构构件（structure）](/Arch_Structure "Arch Structure")等建筑构件添加至基于组织的[楼层（floor）](/Arch_Floor "Arch Floor")等建筑对象。
* 将[建筑坐标系（axis system）](/Arch_Axis "Arch Axis")添加至 [结构构件（structural object）](/Arch_Structure "Arch Structure")。
* 将对象添加至[剖面（section plane）](/Arch_SectionPlane "Arch SectionPlane")。

[建筑移除](/Arch_Remove "Arch Remove")工具与本工具功能相反。

![](/images/Arch_Add_example.jpg)

将立方体添加至墙体，从而融为一体。

## 如何使用

1. 先选择待添加的（若干）对象。最后选择主建筑对象。
2. 按![](/images/Arch_Add.svg) [Add](/Arch_Add "Arch Add")按钮。

## Scripting

## 脚本

*参阅:* [Arch API](/Arch_API "Arch API") 与 [FreeCAD Scripting Basics](/FreeCAD_Scripting_Basics "FreeCAD Scripting Basics")。

借助下列函数即可在[宏](/Macros "Macros")与[Python](/Python "Python")控制台中使用添加工具：

:   ```
    addComponents(objectsList, host)

    ```

* 将`objectsList`中的对象添加至`host`对象。
  + `objectsList`可以是单个对象或一组对象。

示例：

```
import FreeCAD, Arch, Draft, Part

p1 = FreeCAD.Vector(0, 0, 0)
p2 = FreeCAD.Vector(2000, 2000, 0)

Line = Draft.makeWire([p1, p2])
Wall = Arch.makeWall(Line, width=150, height=2000)

p3 = FreeCAD.Vector(0, 2000, 0)
p4 = FreeCAD.Vector(3000, 0, 0)

Line2 = Draft.makeWire([p3, p4])
Wall2 = Arch.makeWall(Line2, width=150, height=2000)
FreeCAD.ActiveDocument.recompute()

Arch.addComponents(Wall2, Wall)
FreeCAD.ActiveDocument.recompute()

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Arch_Add/zh-cn&oldid=1432717>"