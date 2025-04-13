---
title: Assembly3 ConstraintEqualAngle
---

:::caution
This documentation is not finished. Please help and contribute documentation.GuiCommand modelexplains how commands should be documented. BrowseCategory:UnfinishedDocuto see more incomplete pages like this one. SeeCategory:Command Referencefor all commands.SeeWikiPagesto learn about editing the wiki pages, and go toHelp FreeCADto learn about other ways in which you can contribute.
:::

|                                                         |
| ------------------------------------------------------- |
| Assembly3 ConstraintEqualAngle                          |
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

This tool builds a link between two objects of an assembly and fixes one angle between them in relation to another angle's value. The selected elements of each object or more precisely their implicit coordinate systems (ICS) are used to position one object to another.

It can handle 3D line elements and planar face elements as well as 2D line elements within a work plane.

The line directions as well as the face normals are represented by each ICS's z-axis and so it actually fixes the angle between both elements' z-axes (on basis of another angle between two z-axes).

## Usage

1. Place two objects into an assembly
2. Select one line element or one planar face element of each object
3. Select two more line or one planar face elements to extract the value of the angle between them
4. Press the ![](/src/assets/images/Assembly_ConstraintEqualAngle.svg) [Equal angle](/Assembly3_ConstraintEqualAngle "Assembly3 ConstraintEqualAngle") button.

: In addition the "Flip element" function of the elements properties panel may be needed if ICSs are not orientated as expected.

Retrieved from "<http://wiki.freecad.org/index.php?title=Assembly3_ConstraintEqualAngle/en&oldid=948616>"
