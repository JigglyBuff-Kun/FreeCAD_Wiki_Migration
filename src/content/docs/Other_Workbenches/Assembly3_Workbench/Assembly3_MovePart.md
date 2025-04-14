---
title: Assembly3 MovePart
---

:::caution
This documentation is not finished. Please help and contribute documentation.GuiCommand modelexplains how commands should be documented. BrowseCategory:UnfinishedDocuto see more incomplete pages like this one. SeeCategory:Command Referencefor all commands.SeeWikiPagesto learn about editing the wiki pages, and go toHelp FreeCADto learn about other ways in which you can contribute.
:::

|                                                         |
| ------------------------------------------------------- |
| Assembly3 MovePart                                      |
| Menu location                                           |
| Assembly3 → Move part                                   |
| Workbenches                                             |
| [Assembly3](/Assembly3_Workbench "Assembly3 Workbench") |
| Default shortcut                                        |
| A then M                                                |
| Introduced in version                                   |
| -                                                       |
| See also                                                |
| _None_                                                  |
|                                                         |

## Description

The ![](/images/Assembly_Move.svg) [Move part](/Assembly3_MovePart "Assembly3 MovePart") command provides a tool to move a part within an assembly context.  
 It consists of 3 rings to rotate the part and 6 handles (crossed double arrows) to move the part without rotation.  
 The rings and handles are positioned and oriented according to the selected object's implicit coordinate system (ICS).

![](/images/Assembly3_MovePart.png)

## Usage

1. Select either a face, an edge, or a vertex of the 3D part or the whole part in the assembly tree.
2. Activate the ![](/images/Assembly_Move.svg) **Move part** command using one of the following:
   - The ![](/images/Assembly_Move.svg) [Move part](/Assembly3_MovePart "Assembly3 MovePart") button.
   - The **Assembly3 → ![](/images/Assembly_Move.svg) Move part** menu option.
   - The keyboard shortcut: A then M.
3. Drag the rings and handles to reposition the part.
4. Press Esc to fix the position and leave the tool.

## Notes

The handles move the part parallel to one of the basic planes of the selected object's ICS; pressing and holding shift while dragging limits the movement to one axis.

Retrieved from "<http://wiki.freecad.org/index.php?title=Assembly3_MovePart/en&oldid=1060864>"
