---
title: Assembly3 TracePartMove
---

:::caution
This documentation is not finished. Please help and contribute documentation.GuiCommand modelexplains how commands should be documented. BrowseCategory:UnfinishedDocuto see more incomplete pages like this one. SeeCategory:Command Referencefor all commands.SeeWikiPagesto learn about editing the wiki pages, and go toHelp FreeCADto learn about other ways in which you can contribute.
:::

|                                                         |
| ------------------------------------------------------- |
| Assembly3 TracePartMove                                 |
| Menu location                                           |
| Assembly3 → Trace part move                             |
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

The ![](/images/Assembly_Trace.svg) [Trace part move](/Assembly3_TracePartMove "Assembly3 TracePartMove") command traces one single point of a kinematic assembly, when one of the assembled objects is moved with either the ![](/images/Assembly_Move.svg) [Move part](/Assembly3_MovePart "Assembly3 MovePart") tool or the ![](/images/Assembly_AxialMove.svg) [Axial move](/Assembly3_AxialMove "Assembly3 AxialMove") tool.

## Usage

1. Optionally select a wire object:
   - A point to trace itself.
   - An edge or face to trace the center point of its shape.
2. Activate the ![](/images/Assembly_Trace.svg) **Trace part move** command using one of the following:
   - The ![](/images/Assembly_Trace.svg) [Trace part move](/Assembly3_TracePartMove "Assembly3 TracePartMove") button.
   - The **Assembly3 → ![](/images/Assembly_Trace.svg) Trace part move** menu option.
3. Select one object of the assembly and move it using one of the following:
   - The ![](/images/Assembly_Move.svg) [Move part](/Assembly3_MovePart "Assembly3 MovePart") tool.
   - The ![](/images/Assembly_AxialMove.svg) [Axial move](/Assembly3_AxialMove "Assembly3 AxialMove") tool.
4. Press the esc key or the OK button (Axial move only) to finish tracing.
5. Find an AsmTrace object in the [Tree view](/Tree_view "Tree view").

## Notes

- If you don't select any shape in the first step, you will be tracing the shape that was selected in the third step.
- To change the element to trace, you need to disable this tool before selecting a new element and enabling it again.
- If you control the movement with another tool such as this [kinematic controller](/Tutorial_KinematicController "Tutorial KinematicController") that allows to use a mover tool in parallel, you could use this tool to alter the assembly step by step and use the mover tool to add a point and connecting line on each step. It is possible to use the mover tool as a trigger by picking and dragging any of the arrows - just a tiny bit until the next point and line appears (use transparency if necessary).

: (I hope there will be a more elegant way in the future)

Retrieved from "<http://wiki.freecad.org/index.php?title=Assembly3_TracePartMove/en&oldid=1168425>"
