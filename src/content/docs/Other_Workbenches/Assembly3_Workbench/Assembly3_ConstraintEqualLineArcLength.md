---
title: Assembly3 ConstraintEqualLineArcLength
---

:::caution
This documentation is not finished. Please help and contribute documentation.GuiCommand modelexplains how commands should be documented. BrowseCategory:UnfinishedDocuto see more incomplete pages like this one. SeeCategory:Command Referencefor all commands.SeeWikiPagesto learn about editing the wiki pages, and go toHelp FreeCADto learn about other ways in which you can contribute.
:::

|                                                         |
| ------------------------------------------------------- |
| Assembly3 ConstraintEqualLineArcLength                  |
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

The ![](/images/Assembly_ConstraintEqualLineArcLength.svg) [Equal Line Arc Length](/Assembly3_ConstraintEqualLineArcLength "Assembly3 ConstraintEqualLineArcLength") command constrains the length of a 2D line like a non-subdivided wire which is made with ![](/images/Workbench_Draft.svg) [Draft Workbench](/Draft_Workbench "Draft Workbench") tools in relation with a ![](/images/Assembly_Workplane.svg) workplane.

It links the length of the 2D line with the length of an arc (2D or 3D?).

The length value of the selected line equals the length of selected arc.

```
Since I couldn't get this tool working here's the statement of the tool tip:

```

Add an "EqualLineArcLength" constraint to make a line of the same length as an arc.

## Usage

1. Select the 2D line to be constrained.
2. Select a 2D arc to read its length value.
3. Activate the ![](/images/Assembly_ConstraintEqualLineArcLength.svg) [Equal Line Arc Length](/Assembly3_ConstraintEqualLineArcLength "Assembly3 ConstraintEqualLineArcLength") command using the:
   - ![](/images/Assembly_ConstraintEqualLineArcLength.svg) [Equal Line Arc Length](/Assembly3_ConstraintEqualLineArcLength "Assembly3 ConstraintEqualLineArcLength") button.
4. Press the ![](/images/Assembly3_workbench_icon.svg) [Solve constraints](/Assembly3_ResolveConstraints "Assembly3 ResolveConstraints") or the ![](/images/Assembly_QuickSolve.svg) [Quick solve](/Assembly3_QuickSolve "Assembly3 QuickSolve") button to recompute

: : (if ![](/images/Assembly_AutoRecompute.svg) [Auto recompute](/Assembly3_AutoRecompute "Assembly3 AutoRecompute") and ![](/images/Assembly_SmartRecompute.svg) [Smart recompute](/Assembly3_SmartRecompute "Assembly3 SmartRecompute") are disabled).

Depending on the order of the selected line types following **errors** appear:

```
Constraint "EqualLineArcLength" requires the 1st element to be a linear edge
Constraint "EqualLineArcLength" requires the 2nd element to be an arc edge
Constraint "EqualLineArcLength" requires the 2nd element to be a circular edge

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Assembly3_ConstraintEqualLineArcLength/en&oldid=1028058>"
