---
title: Assembly CreateJointBelt
---

:::caution
This documentation is not finished. Please help and contribute documentation.GuiCommand modelexplains how commands should be documented. BrowseCategory:UnfinishedDocuto see more incomplete pages like this one. SeeCategory:Command Referencefor all commands.SeeWikiPagesto learn about editing the wiki pages, and go toHelp FreeCADto learn about other ways in which you can contribute.
:::

|                                                       |
| ----------------------------------------------------- |
| Assembly CreateJointBelt                              |
| Menu location                                         |
| Assembly → Create Gear/Belt Joint → Create Belt Joint |
| Workbenches                                           |
| [Assembly](/Assembly_Workbench "Assembly Workbench")  |
| Default shortcut                                      |
| _None_                                                |
| Introduced in version                                 |
| 1.0                                                   |
| See also                                              |
| _None_                                                |
|                                                       |

## Description

The ![](/images/Assembly_CreateJointBelt.svg) [Assembly CreateJointBelt](/Assembly_CreateJointBelt "Assembly CreateJointBelt") tool creates a belt joint that couples the rotation of two parts of two different revolute joints. In connection with the already existing joints this joint can be used to simulate belt drives, timing gears, etc.

## Usage

1. Optionally select two geometric entities of two different parts that have previously been used to define two Revolute joints.
2. There are several ways to invoke the tool:
   - Press the ![](/images/Assembly_CreateJointBelt.svg) [Create Belt Joint](/Assembly_CreateJointBelt "Assembly CreateJointBelt") button.
   - Select the **Assembly → Create Gear/Belt Joint → ![](/images/Assembly_CreateJointBelt.svg) Create Belt Joint** option from the menu.
3. The **Create Joint** dialog opens in the [Task panel](/Task_panel "Task panel") listing the pre-selected entities.
4. For further steps see [Assembly CreateJointFixed](/Assembly_CreateJointFixed#Usage "Assembly CreateJointFixed").

## Notes

- Radius1 and Radius2 refer to the pitch circle of timing gears or the outer diameter of pulleys. They store their values in the Data**Distance** and Data**Distance2** properties and they define the ratio between both rotations.
- Use the same value for both radii to connect both ends of a flexible shaft (if the rotations don't match, either reverse one [Revolute joint](/Assembly_CreateJointRevolute "Assembly CreateJointRevolute") or use the [Gear joint](/Assembly_CreateJointGears "Assembly CreateJointGears") instead of this one).

## Properties

See also: [Property editor](/Property_editor "Property editor").

A **Belt** object is derived from an [App FeaturePython](/App_FeaturePython "App FeaturePython") object and inherits all its properties. See [Assembly CreateJointFixed](/Assembly_CreateJointFixed#Properties "Assembly CreateJointFixed") for additional properties.

Retrieved from "<http://wiki.freecad.org/index.php?title=Assembly_CreateJointBelt/en&oldid=1478275>"
