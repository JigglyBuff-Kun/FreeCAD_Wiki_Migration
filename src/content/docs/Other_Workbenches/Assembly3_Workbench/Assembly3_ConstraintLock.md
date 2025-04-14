---
title: Assembly3 ConstraintLock
---

:::caution
This documentation is not finished. Please help and contribute documentation.GuiCommand modelexplains how commands should be documented. BrowseCategory:UnfinishedDocuto see more incomplete pages like this one. SeeCategory:Command Referencefor all commands.SeeWikiPagesto learn about editing the wiki pages, and go toHelp FreeCADto learn about other ways in which you can contribute.
:::

|                                                         |
| ------------------------------------------------------- |
| Assembly3 ConstraintLock                                |
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

This tool links an object to the global coordinate system (GCS) of the assembly using the implicit coordinate system (ICS) of a selected element.

: - If a vertex is selected the coordinates of its ICS are fixed relative to the GCS.

    :   The object can still rotate around the vertex.

: - If a (straight) edge is selected the coordinates of its ICS and the direction of its z-axis are fixed relative to the GCS.

    :   The object can still rotate around the edge.

: - If a face is selected the coordinates and the orientation of its ICS are fixed relative to the GCS.

    :   The object is completely fixed to the GCS.

This can be used to define the fixed set in a static assembly as well as in a kinematic system.

## Usage

1. Place an object into an assembly.
2. Select one element of the object.
3. Press the ![](/images/Assembly_ConstraintLock.svg) [Locked](/Assembly3_ConstraintLock "Assembly3 ConstraintLock") button.

Retrieved from "<http://wiki.freecad.org/index.php?title=Assembly3_ConstraintLock/en&oldid=887284>"
