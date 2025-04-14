---
title: Assembly3 ConstraintPointOnCircle
---

:::caution
This documentation is not finished. Please help and contribute documentation.GuiCommand modelexplains how commands should be documented. BrowseCategory:UnfinishedDocuto see more incomplete pages like this one. SeeCategory:Command Referencefor all commands.SeeWikiPagesto learn about editing the wiki pages, and go toHelp FreeCADto learn about other ways in which you can contribute.
:::

|                                                         |
| ------------------------------------------------------- |
| Assembly3 ConstraintPointOnCircle                       |
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

Assuming the first object is already locked in place by the ![](/images/Assembly_ConstraintLock.svg) [Lock constraint](/Assembly3_ConstraintLock "Assembly3 ConstraintLock") then the following object is moved to a position where the point element's origin lies on the circular element's xy-plane with an offset from the z-axis (matching x and y values according to the radius).

Point elements have no stretch in any direction (zero length) and so there's no orientation detectable i.e. their ICS are only to match other elements' settings. The orientation of the ICSs always stays the same as the global coordinate system's orientation and can not be used to reduce any degrees of freedom related to rotation.

The position on the circular element (arc length from the start point) is not defined. Related to the first object the following object can still spin around the origin (around all three axes). This is leaving 4 degrees of freedom (DOFs) for each link unconstrained.

## Usage

1. Place two objects into an assembly.
2. Select one point element of one object and one circular face or edge element of the other object.
3. Press the ![](/images/Assembly_ConstraintPointOnCircle.svg) [Point on circle](/Assembly3_ConstraintPointOnCircle "Assembly3 ConstraintPointOnCircle") button.

Retrieved from "<http://wiki.freecad.org/index.php?title=Assembly3_ConstraintPointOnCircle/en&oldid=910185>"
