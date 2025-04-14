---
title: Assembly3 ConstraintSymmetricLine
---

:::caution
This documentation is not finished. Please help and contribute documentation.GuiCommand modelexplains how commands should be documented. BrowseCategory:UnfinishedDocuto see more incomplete pages like this one. SeeCategory:Command Referencefor all commands.SeeWikiPagesto learn about editing the wiki pages, and go toHelp FreeCADto learn about other ways in which you can contribute.
:::

|                                                         |
| ------------------------------------------------------- |
| Assembly3 ConstraintSymmetricLine                       |
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

This tool builds a link between two or three objects of an assembly. The selected elements of each object or more precisely their implicit coordinate systems (ICS) are used to position the objects to each other.

Based on one line element's ICS both other elements' ICSs' origins are positioned to have identical z-coordinates and the same x- and y-offsets in opposite directions.

## Usage

1. Place two objects into an assembly
2. Select two point elements of one object
3. Select a straight line element of the other object
4. Press the ![](/images/Assembly_ConstraintSymmetricLine.svg) [Symmetric line](/Assembly3_ConstraintSymmetricLine "Assembly3 ConstraintSymmetricLine") button.

Or

1. Place three objects into an assembly
2. Select one point element of the first two objects
3. Select a straight line element of the third object
4. Press the ![](/images/Assembly_ConstraintSymmetricLine.svg) [Symmetric line](/Assembly3_ConstraintSymmetricLine "Assembly3 ConstraintSymmetricLine") button.

Retrieved from "<http://wiki.freecad.org/index.php?title=Assembly3_ConstraintSymmetricLine/en&oldid=1028119>"
