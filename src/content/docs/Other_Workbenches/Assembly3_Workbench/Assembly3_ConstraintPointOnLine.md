---
title: Assembly3 ConstraintPointOnLine
---

:::caution
This documentation is not finished. Please help and contribute documentation.GuiCommand modelexplains how commands should be documented. BrowseCategory:UnfinishedDocuto see more incomplete pages like this one. SeeCategory:Command Referencefor all commands.SeeWikiPagesto learn about editing the wiki pages, and go toHelp FreeCADto learn about other ways in which you can contribute.
:::

|                                                         |
| ------------------------------------------------------- |
| Assembly3 ConstraintPointOnLine                         |
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

This tool builds a link between two objects of an assembly and fixes the distance between them and the orientation to each other. The selected elements of each object or more precisely their implicit coordinate systems (ICS) are used to position one object to another.

Assuming the first object is already locked in place by the ![](/src/assets/images/Assembly_ConstraintLock.svg) [Lock constraint](/Assembly3_ConstraintLock "Assembly3 ConstraintLock") then the following object is moved to a position where the point elements's origin lies on the line element's z-axis.

Point elements have no stretch in any direction (zero length) and so there's no orientation detectable i.e. their ICS are only to match other elements' settings. The orientation of the ICSs always stays the same as the global coordinate system's orientation and can not be used to reduce any degrees of freedom related to rotation.
Straight elements have an origin and a direction which is represented by the ICS's z-axis. A direction of the x- and y-axis is not detectable and so rotation around the z-axis can not be used to reduce DOFs. (It doesn't apply in combination with point elements anyway...)

Related to the first object the following object can still move along the z-axis and spin around all three axes. This is leaving 4 degrees of freedom (DOFs) for each link unconstrained.

## Usage

1. Place two objects into an assembly.
2. Select one point element of one object and one straight edge element of the other object.
3. Press the ![](/src/assets/images/Assembly_ConstraintPointOnLine.svg) [Point on line](/Assembly3_ConstraintPointOnLine "Assembly3 ConstraintPointOnLine") button.

Retrieved from "<http://wiki.freecad.org/index.php?title=Assembly3_ConstraintPointOnLine/en&oldid=887499>"
