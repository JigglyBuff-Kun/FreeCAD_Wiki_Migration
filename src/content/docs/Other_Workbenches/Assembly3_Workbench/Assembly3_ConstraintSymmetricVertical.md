---
title: Assembly3 ConstraintSymmetricVertical
---

:::caution
This documentation is not finished. Please help and contribute documentation.GuiCommand modelexplains how commands should be documented. BrowseCategory:UnfinishedDocuto see more incomplete pages like this one. SeeCategory:Command Referencefor all commands.SeeWikiPagesto learn about editing the wiki pages, and go toHelp FreeCADto learn about other ways in which you can contribute.
:::

|                                                         |
| ------------------------------------------------------- |
| Assembly3 ConstraintSymmetricVertical                   |
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

This tool builds a link between two objects of an assembly. The selected elements of each object or more precisely their implicit coordinate systems (ICS) are used to position the objects to each other.

Based on one planar element's ICS both other elements' ICSs' origins are positioned to have identical x- and z-coordinates and the same y-offset in opposite directions.

## Usage

1. Place two objects into an assembly
2. Select two point elements, two line elements or two planar elements of one object
3. Select a planar element of the other object
4. Press the ![](/src/assets/images/Assembly_ConstraintGeneral.svg) [Symmetric vertical](/Assembly3_ConstraintSymmetricVertical "Assembly3 ConstraintSymmetricVertical") button.

Retrieved from "<http://wiki.freecad.org/index.php?title=Assembly3_ConstraintSymmetricVertical/en&oldid=911305>"
