---
title: Assembly3 ConstraintLengthRatio
---

:::caution
This documentation is not finished. Please help and contribute documentation.GuiCommand modelexplains how commands should be documented. BrowseCategory:UnfinishedDocuto see more incomplete pages like this one. SeeCategory:Command Referencefor all commands.SeeWikiPagesto learn about editing the wiki pages, and go toHelp FreeCADto learn about other ways in which you can contribute.
:::

|                                                         |
| ------------------------------------------------------- |
| Assembly3 ConstraintLengthRatio                         |
| Menu location                                           |
| _None_                                                  |
| Workbenches                                             |
| [Assembly3](/Assembly3_Workbench "Assembly3 Workbench") |
| Default shortcut                                        |
| _None_                                                  |
| Introduced in version                                   |
| -                                                       |
| See also                                                |
| _None_                                                  |
|                                                         |

## Description

This tool constrains the length of a 2D line like a non-subdivided wire made with the Draft workbench in relation with a work plane.

It links the length of the 2D line with the length of either another 2D line or a 3D line e.g. a straight edge element or a sketch line.

The length value of the first selected line equals the length value of the second line multiplied by a ratio value.

: (Or the length value of the second selected line equals the length value of the first line divided by a ratio value.)

## Usage

1. Select two lines, of which at least one should be a 2D line.
2. Press the ![](/images/Assembly_ConstraintLengthRatio.svg) [Length ratio](/Assembly3_ConstraintLengthRatio "Assembly3 ConstraintLengthRatio") button.
3. Set the **Ratio** value in the properties panel.
4. Press the ![](/images/Assembly3_workbench_icon.svg) [Solve constraints](/Assembly3_ResolveConstraints "Assembly3 ResolveConstraints") or the ![](/images/Assembly_QuickSolve.svg) [Quick solve](/Assembly3_QuickSolve "Assembly3 QuickSolve") button to recompute

: : (if ![](/images/Assembly_AutoRecompute.svg) [Auto recompute](/Assembly3_AutoRecompute "Assembly3 AutoRecompute") and ![](/images/Assembly_SmartRecompute.svg) [Smart recompute](/Assembly3_SmartRecompute "Assembly3 SmartRecompute") are disabled).

Retrieved from "<http://wiki.freecad.org/index.php?title=Assembly3_ConstraintLengthRatio/en&oldid=923331>"
