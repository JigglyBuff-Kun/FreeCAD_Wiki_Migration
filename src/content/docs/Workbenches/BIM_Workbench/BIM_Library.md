---
title: BIM Library
---

|                                             |
| ------------------------------------------- |
| BIM Library                                 |
| Menu location                               |
| 3D/BIM → Generic 3D tools → Objects library |
| Workbenches                                 |
| [BIM](/BIM_Workbench "BIM Workbench")       |
| Default shortcut                            |
| _None_                                      |
| Introduced in version                       |
| -                                           |
| See also                                    |
| _None_                                      |
|                                             |

## Description

The **BIM Library** tool allows you to place, in the current model, an object from the [Parts Library](/Parts_Library_Workbench "Parts Library Workbench"), which must be installed via the ![](/src/assets/images/Std_AddonMgr.svg) [Addon Manager](/Std_AddonMgr "Std AddonMgr") for this tool to be available.

![](/src/assets/images/BIM_Library_screenshot.png)

The **Library browser** dialog in the [Task panel](/Task_panel "Task panel") on the left

## Usage

1. Press the ![](/src/assets/images/BIM_Library.svg) [Objects library](/BIM_Library "BIM Library") button

   : Result: In the [Combo view](/Combo_view "Combo view") → [Task panel](/Task_panel "Task panel"), a dialog titled **Library browser** is displayed

2. Click a file from the Library browser
3. Double-click it or press the Insert button
4. Click a point in the [3D view](/3D_view "3D view") or enter a coordinate manually to place the object

## Options

- [FCStd](/File_Format_FCStd "File Format FCStd"), STEP and [brep](/File_Format_FCStd#*.brep "File Format FCStd") files are supported. Only STEP and BREP files are placeable. FCStd files will not allow you to choose a placement, as they might be composed of a complex series of objects with significant positions. When choosing an FCStd file, its contents will be inserted at the position that is defined in the file.
- STEP and BREP objects are inserted as ![](/src/assets/images/Arch_Equipment.svg) [Equipment](/Arch_Equipment "Arch Equipment") with no separated base shape. Adding a base shape to these objects afterwards will destroy their current shape.
- On placing an object, you can choose their insertion point between original (the (`0,0,0`) point defined in the file), top, middle, bottom and left, center and right.
- The Library can work offline, in which case it relies on the Parts Library addon to be installed (and updated by the user), or online, in which case it browses directly from the [Parts Library Git repository](https://github.com/FreeCAD/FreeCAD-library) and allows to download directly from there.

Retrieved from "<http://wiki.freecad.org/index.php?title=BIM_Library/en&oldid=1517566>"
