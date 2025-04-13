---
title: Assembly CreateJointGears
---

:::caution
This documentation is not finished. Please help and contribute documentation.GuiCommand modelexplains how commands should be documented. BrowseCategory:UnfinishedDocuto see more incomplete pages like this one. SeeCategory:Command Referencefor all commands.SeeWikiPagesto learn about editing the wiki pages, and go toHelp FreeCADto learn about other ways in which you can contribute.
:::

|                                                        |
| ------------------------------------------------------ |
| Assembly CreateJointGears                              |
| Menu location                                          |
| Assembly → Create Gear/Belt Joint → Create Gears Joint |
| Workbenches                                            |
| [Assembly](/Assembly_Workbench "Assembly Workbench")   |
| Default shortcut                                       |
| _None_                                                 |
| Introduced in version                                  |
| 1.0                                                    |
| See also                                               |
| _None_                                                 |
|                                                        |

## Description

The ![](/src/assets/images/Assembly_CreateJointGears.svg) [Assembly CreateJointGears](/Assembly_CreateJointGears "Assembly CreateJointGears") tool creates a gears joint that couples the rotation of two parts of two different revolute joints. In connection with the already existing joints this joint can be used to simulate spur gears, bevel gears, crown gears, friction wheel gears, etc.

## Usage

1. Optionally select two geometric entities of two different parts that have previously been used to define two Revolute joints.
2. There are several ways to invoke the tool:
   - Press the ![](/src/assets/images/Assembly_CreateJointGears.svg) [Create Gears Joint](/Assembly_CreateJointGears "Assembly CreateJointGears") button.
   - Select the **Assembly → Create Gear/Belt Joint → ![](/src/assets/images/Assembly_CreateJointGears.svg) Create Gears Joint** option from the menu.
3. The **Create Joint** dialog opens in the [Task panel](/Task_panel "Task panel") listing the pre-selected entities.
4. For further steps see [Assembly CreateJointFixed](/Assembly_CreateJointFixed#Usage "Assembly CreateJointFixed").

## Notes

- Radius1 and Radius2 refer to the pitch circle of gears or the outer diameter of friction wheels. They store their values in the Data**Distance** and Data**Distance2** properties and they define the ratio between both rotations.
- Since the values of both radii have no influence on the distance between the rotation axes and the units are canceled anyway you may consider to enter diameter values, or the number of teeth (no need to find the pitch diameter of bevel gears then) for both radii.
- Use the same value for both radii to connect both ends of a flexible shaft (if the rotations don't match, either reverse one Revolute joint or use the Belt joint instead of this one).

## Properties

See also: [Property editor](/Property_editor "Property editor").

A **Gears** object is derived from an [App FeaturePython](/App_FeaturePython "App FeaturePython") object and inherits all its properties. See [Assembly CreateJointFixed](/Assembly_CreateJointFixed#Properties "Assembly CreateJointFixed") for additional properties.

Retrieved from "<http://wiki.freecad.org/index.php?title=Assembly_CreateJointGears/en&oldid=1428754>"
