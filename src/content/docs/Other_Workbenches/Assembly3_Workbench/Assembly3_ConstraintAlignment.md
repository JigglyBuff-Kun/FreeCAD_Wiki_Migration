---
title: Assembly3 ConstraintAlignment
---

:::caution
This documentation is not finished. Please help and contribute documentation.GuiCommand modelexplains how commands should be documented. BrowseCategory:UnfinishedDocuto see more incomplete pages like this one. SeeCategory:Command Referencefor all commands.SeeWikiPagesto learn about editing the wiki pages, and go toHelp FreeCADto learn about other ways in which you can contribute.
:::

|                                                         |
| ------------------------------------------------------- |
| Assembly3 ConstraintAlignment                           |
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

This tool links two or more objects of an assembly and matches their orientations. The selected elements of each object or more precisely their implicit coordinate systems (ICSs) are used to position one object in relation to another.

Assuming the first object is already locked in place by the ![](/images/Assembly_ConstraintLock.svg) [Lock constraint](/Assembly3_ConstraintLock "Assembly3 ConstraintLock") then the following objects are moved to positions where the x-y-planes of all ICSs are coplanar and the z-axes point in the same direction.

The offset of their z-axes and the angle between their x-axes (and y-axes as well) are not defined.
Related to the first object the following objects can still move along the x- and y-direction and spin around the z-axis.
This is leaving 3 degrees of freedom (DOFs) for each link unconstrained.

## Usage

1. Place two or more objects into an assembly.
2. Select one planar face element of each object.
3. Press the ![](/images/Assembly_ConstraintAlignment.svg) [Alignment](/Assembly3_ConstraintAlignment "Assembly3 ConstraintAlignment") button.

Retrieved from "<http://wiki.freecad.org/index.php?title=Assembly3_ConstraintAlignment/en&oldid=887215>"
