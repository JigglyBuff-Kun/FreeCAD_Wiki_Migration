---
title: Assembly3 ConstraintPerpendicular
---

:::caution
This documentation is not finished. Please help and contribute documentation.GuiCommand modelexplains how commands should be documented. BrowseCategory:UnfinishedDocuto see more incomplete pages like this one. SeeCategory:Command Referencefor all commands.SeeWikiPagesto learn about editing the wiki pages, and go toHelp FreeCADto learn about other ways in which you can contribute.
:::

|                                                         |
| ------------------------------------------------------- |
| Assembly3 ConstraintPerpendicular                       |
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

This tool builds a link between two objects of an assembly and matches their orientation. The selected elements of each object or more precisely their implicit coordinate systems (ICS) are used to position one object to another.

Assuming the first object is already locked in place by the ![](/src/assets/images/Assembly_ConstraintLock.svg) [Lock constraint](/Assembly3_ConstraintLock "Assembly3 ConstraintLock") then the following object is moved to a position where both z-axes are perpendicular.

The offset of their origins in x-, y- and z-direction and the angles between the x-, and y-axes are not defined. Related to the first object the following object can still move along the x-, y- and z-axis and spin around both z-axes. This is leaving 5 degrees of freedom (DOFs) for each link unconstrained.

The constraint accepts straight edges and planar faces.

## Usage

1. Place two objects into an assembly.
2. Select one straight edge element or one planar face element of each object.
3. Press the ![](/src/assets/images/Assembly_ConstraintPerpendicular.svg) [Perpendicular](/Assembly3_ConstraintPerpendicular "Assembly3 ConstraintPerpendicular") button.

Retrieved from "<http://wiki.freecad.org/index.php?title=Assembly3_ConstraintPerpendicular/en&oldid=1074229>"
