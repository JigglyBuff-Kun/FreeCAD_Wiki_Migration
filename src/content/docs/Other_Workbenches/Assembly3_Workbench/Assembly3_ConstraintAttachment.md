---
title: Assembly3 ConstraintAttachment
---

:::caution
This documentation is not finished. Please help and contribute documentation.GuiCommand modelexplains how commands should be documented. BrowseCategory:UnfinishedDocuto see more incomplete pages like this one. SeeCategory:Command Referencefor all commands.SeeWikiPagesto learn about editing the wiki pages, and go toHelp FreeCADto learn about other ways in which you can contribute.
:::

|                                                         |
| ------------------------------------------------------- |
| Assembly3 ConstraintAttachment                          |
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

This tool builds a link between two objects of an assembly and fixes the distance between them and their orientation to each other. The selected elements of each object or more precisely their element coordinate systems (ECS) are used to reposition the objects relative to each other.

This link leaves no degree of freedom (DOF) unconstrained.

## Usage

1. Place two objects into an assembly.
2. Select one element of each object.
3. Press the ![](/images/Part_Attachment.svg) [Create "Attachment" constraint](/Assembly3_ConstraintAttachment "Assembly3 ConstraintAttachment") button.
4. The objects are rearranged so that their ECSs share the same origin and have the same orientation.

Retrieved from "<http://wiki.freecad.org/index.php?title=Assembly3_ConstraintAttachment/en&oldid=1168429>"
