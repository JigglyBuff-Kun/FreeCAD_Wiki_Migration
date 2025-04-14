---
title: Assembly3 ConstraintAngle
---

:::caution
This documentation is not finished. Please help and contribute documentation.GuiCommand modelexplains how commands should be documented. BrowseCategory:UnfinishedDocuto see more incomplete pages like this one. SeeCategory:Command Referencefor all commands.SeeWikiPagesto learn about editing the wiki pages, and go toHelp FreeCADto learn about other ways in which you can contribute.
:::

|                                                         |
| ------------------------------------------------------- |
| Assembly3 ConstraintAngle                               |
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

This tool builds a link between two objects of an assembly and matches their orientation. The selected elements of each object or more precisely their implicit coordinate systems (ICS) are used to position one object to another.

The angle between two elements i.e. the angle between their z-axes is fixed.

The offset of their origins in x-, y- and z-direction and the angles between the x-, and y-axes are not defined. Related to the first object the following object can still move along the x-, y- and z-axis and spin around both z-axes. This is leaving 5 degrees of freedom (DOFs) for each link unconstrained.

The constraint accepts straight edges and planar faces.

## Usage

1. Place two or more objects into an assembly.
2. Select one straight edge element or one planar face element of each object.
3. Press the ![](/images/Assembly_ConstraintAngle.svg) Create "Angle" Constraint button.
4. Optionally change the value of the Data**Angle** property.

## Notes

2D: This constraint seems to be the only way to control an angle in a skeleton sketch (2D kinematic assembly); Prove me wrong, PLEASE!

- Its Data**Angle** (`Angle`) property allows any positive value, but 0° and 180° exactly are puzzling the solver.
- It flips direction if angles greater than 180° are used and as a result 135° and 225° give the same positions for the involved elements.

: It is useless if you want to simulate a full rotation and so ruins the principle of using a skeleton sketch for a lot of kinematic tasks such as driving a piston by a rotating crank coupled with a con-rod.

Retrieved from "<http://wiki.freecad.org/index.php?title=Assembly3_ConstraintAngle/en&oldid=1150745>"
