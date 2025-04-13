---
title: Assembly3 LockMover
---

:::caution
This documentation is not finished. Please help and contribute documentation.GuiCommand modelexplains how commands should be documented. BrowseCategory:UnfinishedDocuto see more incomplete pages like this one. SeeCategory:Command Referencefor all commands.SeeWikiPagesto learn about editing the wiki pages, and go toHelp FreeCADto learn about other ways in which you can contribute.
:::

|                                                         |
| ------------------------------------------------------- |
| Assembly3 LockMover                                     |
| Menu location                                           |
| Assembly3 → Lock mover                                  |
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

The ![](/src/assets/images/Assembly_LockMover.svg) [Lock mover](/Assembly3_LockMover "Assembly3 LockMover") command is a toggle that prevents parts from being moved if they are fixed with a ![](/src/assets/images/Assembly_ConstraintLock.svg) [Locked](/Assembly3_ConstraintLock "Assembly3 ConstraintLock") constraint.

When activated, none of the mover commands ![](/src/assets/images/Assembly_Move.svg) [Move part](/Assembly3_MovePart "Assembly3 MovePart"), ![](/src/assets/images/Assembly_AxialMove.svg) [Axial move](/Assembly3_AxialMove "Assembly3 AxialMove"), or ![](/src/assets/images/Assembly_QuickMove.svg) [Quick move](/Assembly3_QuickMove "Assembly3 QuickMove") can be selected as long as the current selection contains a fixed object. This seems not to apply to 2D geometry (see [Notes](#Notes)).

## Usage

1. Activate the ![](/src/assets/images/Assembly_LockMover.svg) **Lock mover** command using one of the following:
   - The ![](/src/assets/images/Assembly_LockMover.svg) [Lock mover](/Assembly3_LockMover "Assembly3 LockMover") button.
   - The **Assembly3 → ![](/src/assets/images/Assembly_LockMover.svg) Lock mover** menu option.

## Notes

Selected **2D geometry**, such as Draft lines, arcs, and circles, fixed with the Locked constraint does not deactivate the mover tools. While circles and arcs still keep their position when a mover is applied to them, lines can be relocated and tilted.

Retrieved from "<http://wiki.freecad.org/index.php?title=Assembly3_LockMover/en&oldid=1163264>"
