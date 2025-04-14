---
title: Assembly3 ConstraintSameOrientation
---

:::caution
This documentation is not finished. Please help and contribute documentation.GuiCommand modelexplains how commands should be documented. BrowseCategory:UnfinishedDocuto see more incomplete pages like this one. SeeCategory:Command Referencefor all commands.SeeWikiPagesto learn about editing the wiki pages, and go toHelp FreeCADto learn about other ways in which you can contribute.
:::

|                                                         |
| ------------------------------------------------------- |
| Assembly3 ConstraintSameOrientation                     |
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

This tool builds a link between two or more objects of an assembly and matches their orientation. The selected elements of each object or more precisely their implicit coordinate systems (ICS) are used to position one object to another.

Assuming the first object is already locked in place by the ![](/images/Assembly_ConstraintLock.svg) [Lock constraint](/Assembly3_ConstraintLock "Assembly3 ConstraintLock") then the following objects are moved to positions where all ICSs have the same orientation i.e. all z-axes are parallel and all x-axes are parallel (making the y-axes parallel as well).

The offset of their origins in x-, y- and z-direction are not defined. Related to the first object the following objects can still move along the x-, y- and z-axis. This is leaving 3 degrees of freedom (DOFs) for each link unconstrained.

The constraint accepts planar faces.

## Usage

1. Place two or more objects into an assembly
2. Select one planar face element of each object
3. Press the ![](/images/Assembly_ConstraintSameOrientation.svg) [Same orientation](/Assembly3_ConstraintSameOrientation "Assembly3 ConstraintSameOrientation") button.

Retrieved from "<http://wiki.freecad.org/index.php?title=Assembly3_ConstraintSameOrientation/en&oldid=890497>"
