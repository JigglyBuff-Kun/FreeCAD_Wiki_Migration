---
title: Assembly3 ConstraintPointsCoincident
---

:::caution
This documentation is not finished. Please help and contribute documentation.GuiCommand modelexplains how commands should be documented. BrowseCategory:UnfinishedDocuto see more incomplete pages like this one. SeeCategory:Command Referencefor all commands.SeeWikiPagesto learn about editing the wiki pages, and go toHelp FreeCADto learn about other ways in which you can contribute.
:::

|                                                         |
| ------------------------------------------------------- |
| Assembly3 ConstraintPointsCoincident                    |
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

The ![](/src/assets/images/Assembly_ConstraintPointCoincident.svg) [Assembly3 ConstraintPointsCoincident](/Assembly3_ConstraintPointsCoincident "Assembly3 ConstraintPointsCoincident") command builds a link between two objects of an assembly and fixes the distance between them and the orientation to each other. The selected elements of each object or more precisely their implicit coordinate systems (ICS) are used to position one object to another.

Assuming the first object is already locked in place by the ![](/src/assets/images/Assembly_ConstraintLock.svg) [Lock constraint](/Assembly3_ConstraintLock "Assembly3 ConstraintLock") then the following object is moved to a position where both ICSs' origins are in the same place.

Related to the first object the following object can still spin around the origin (around all three axes). This is leaving 3 degrees of freedom (DOFs) for each link unconstrained.

This constraint accepts any type of element!

## Usage

1. Place two objects into an assembly
2. Select one element of each object
3. Activate the ![](/src/assets/images/Assembly_ConstraintPointCoincident.svg) **Assembly3 ConstraintPointsCoincident** command using:
   - The ![](/src/assets/images/Assembly_ConstraintPointCoincident.svg) [Create "PointsCoincident" constraint](/Assembly3_ConstraintPointsCoincident "Assembly3 ConstraintPointsCoincident") button.

## Kinematic Equivalent

Used in kinematic context this constraint resembles a **ball** (and socket) **joint**.

In real life we cannot handle points and so spherical faces are used to represent the linked points.

![](/src/assets/images/Assembly3_ConstraintPointsCoincident-01.png) ![](/src/assets/images/Button_right.svg)
![](/src/assets/images/Assembly3_ConstraintPointsCoincident-02.png)

Constrained objects before and after running the solver

Retrieved from "<http://wiki.freecad.org/index.php?title=Assembly3_ConstraintPointsCoincident/en&oldid=1106047>"
