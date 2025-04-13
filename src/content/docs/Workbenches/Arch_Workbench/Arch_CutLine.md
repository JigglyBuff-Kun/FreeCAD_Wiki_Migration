---
title: Arch CutLine
---

:::caution
THIS COMMAND IS OBSOLETEIt is not available in1.0 and above. UseArch CutPlaneinstead.
:::

|                                                 |
| ----------------------------------------------- |
| Arch CutLine                                    |
| Menu location                                   |
| Arch → Cut with line                            |
| Workbenches                                     |
| [Arch](/Arch_Workbench "Arch Workbench")        |
| Default shortcut                                |
| _None_                                          |
| Introduced in version                           |
| 0.19                                            |
| See also                                        |
| [Arch CutPlane](/Arch_CutPlane "Arch CutPlane") |
|                                                 |

## Description

The **Arch CutLine** tool cuts a solid Arch object like an [Arch Wall](/Arch_Wall "Arch Wall") or [Arch Structure](/Arch_Structure "Arch Structure") with a straight edge. Based on that edge and the normal of the [Draft working plane](/Draft_SelectPlane "Draft SelectPlane") a cutting face is generated.

![](/src/assets/images/Arch_CutLine_example_1.png) ![](/src/assets/images/Arch_CutLine_example_2.png)

[Arch Wall](/Arch_Wall "Arch Wall") cut by a line. Left: subtractive box that appears when using the tool. Right: resulting wall after the cut is done.

## Usage

1. If required align the working plane:
   - The selected edge may not be parallel to the normal of the working plane.
   - The generated cutting face will be perpendicular to the working plane.
2. Select the object to be cut in the [Tree view](/Tree_view "Tree view") or the [3D view](/3D_view "3D view").
3. Select a straight edge. This must be selected in the [3D view](/3D_view "3D view").
4. Press the ![](/src/assets/images/Arch_CutLine.svg) [Cut with line](/Arch_CutLine "Arch CutLine") button.
5. Choose **Behind** or **Front** to indicate on which side of the cutting face material should be removed.
6. Press the OK button.

## Scripting

_See also:_ [Arch API](/Arch_API "Arch API") and [FreeCAD Scripting Basics](/FreeCAD_Scripting_Basics "FreeCAD Scripting Basics").

Retrieved from "<http://wiki.freecad.org/index.php?title=Arch_CutLine/en&oldid=1467143>"
