---
title: Assembly3 ConstraintArcLineTangent
---

:::caution
This documentation is not finished. Please help and contribute documentation.GuiCommand modelexplains how commands should be documented. BrowseCategory:UnfinishedDocuto see more incomplete pages like this one. SeeCategory:Command Referencefor all commands.SeeWikiPagesto learn about editing the wiki pages, and go toHelp FreeCADto learn about other ways in which you can contribute.
:::

|                                                         |
| ------------------------------------------------------- |
| Assembly3 ConstraintArcLineTangent                      |
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

The ![](/images/Assembly_ConstraintArcLineTangent.svg) [Arc line tangent](/Assembly3_ConstraintArcLineTangent "Assembly3 ConstraintArcLineTangent") command builds a link between two objects of an assembly. The selected elements of each object or more precisely their implicit coordinate systems (ICS) are used to position one object to another.

```
Since I couldn't get this tool working here's just the statement of the tool tip:

```

Add an "Arc line tangent" constraint to make a line tangent to an arc at the start or end point of the arc.

## Usage

1. Place two objects into an assembly
2. Select an arc element of one object
3. Select a line element of the second object
4. Press the ![](/images/Assembly_ConstraintArcLineTangent.svg) [Arc line tangent](/Assembly3_ConstraintArcLineTangent "Assembly3 ConstraintArcLineTangent") button.

Depending on the order of the selected lines following **errors** appear:

```
Constraint "ArcLineTangent" requires the 1st element to be a circular edge
Constraint "ArcLineTangent" requires the 1st element to be an arc edge

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Assembly3_ConstraintArcLineTangent/en&oldid=1054198>"
