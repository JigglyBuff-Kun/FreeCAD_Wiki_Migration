---
title: Assembly3 ConstraintAxial
---

:::caution
This documentation is not finished. Please help and contribute documentation.GuiCommand modelexplains how commands should be documented. BrowseCategory:UnfinishedDocuto see more incomplete pages like this one. SeeCategory:Command Referencefor all commands.SeeWikiPagesto learn about editing the wiki pages, and go toHelp FreeCADto learn about other ways in which you can contribute.
:::

|                                                         |
| ------------------------------------------------------- |
| Assembly3 ConstraintAxial                               |
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

This tool builds a link between two or more objects of an assembly and matches their orientation. The selected elements of each object or more precisely their implicit coordinate systems (ICS) are used to position one object to another.

Assuming the first object is already locked in place by the ![](/images/Assembly_ConstraintLock.svg) [Lock constraint](/Assembly3_ConstraintLock "Assembly3 ConstraintLock") then the following objects are moved to positions where the z-axes are collinear .

The offset of their origins on their common z-axis and the angle between their x-axes (and y-axes as well) are not defined. Related to the first object the following objects can still move along and spin around the z-axis. This is leaving 2 degrees of freedom (DOFs) for each link unconstrained.

The constraint accepts

: - straight edges, which become collinear,
: - planar faces, which are aligned using their surface normal axis,
: - cylindrical faces, which are aligned using the axial direction.

Different types of geometry elements can be mixed.

## Usage

1. Place two or more objects into an assembly.
2. Select one element of each object.
3. Activate the ![](/images/Assembly_ConstraintAxial.svg) **Assembly3 ConstraintAxial** command using:
   - The ![](/images/Assembly_ConstraintAxial.svg) [Create "AxialAlignment" constraint](/Assembly3_ConstraintAxial "Assembly3 ConstraintAxial") button.

## Kinematic Equivalent

Used in kinematic context this constraint resembles a **cylindrical joint**.

In real life we cannot handle axes and so cylindrical faces are used to represent the linked axes.

![](/images/Assembly3_ConstraintAxial-01.png) ![](/images/Button_right.svg)
![](/images/Assembly3_ConstraintAxial-02.png) ![](/images/Button_right.svg)
![](/images/Assembly3_ConstraintAxial-03.png)

Constrained objects before and after running the solver and then slid along the axis

Retrieved from "<http://wiki.freecad.org/index.php?title=Assembly3_ConstraintAxial/en&oldid=1106037>"
