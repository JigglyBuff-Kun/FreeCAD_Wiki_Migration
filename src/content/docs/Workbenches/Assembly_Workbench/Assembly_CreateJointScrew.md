---
title: Assembly CreateJointScrew
---

:::caution
This documentation is not finished. Please help and contribute documentation.GuiCommand modelexplains how commands should be documented. BrowseCategory:UnfinishedDocuto see more incomplete pages like this one. SeeCategory:Command Referencefor all commands.SeeWikiPagesto learn about editing the wiki pages, and go toHelp FreeCADto learn about other ways in which you can contribute.
:::

|                                                      |
| ---------------------------------------------------- |
| Assembly CreateJointScrew                            |
| Menu location                                        |
| Assembly → Create Screw Joint                        |
| Workbenches                                          |
| [Assembly](/Assembly_Workbench "Assembly Workbench") |
| Default shortcut                                     |
| W                                                    |
| Introduced in version                                |
| 1.0                                                  |
| See also                                             |
| _None_                                               |
|                                                      |

## Description

The ![](/images/Assembly_CreateJointScrew.svg) [Assembly CreateJointScrew](/Assembly_CreateJointScrew "Assembly CreateJointScrew") tool creates a screw joint (helical joint) that couples the translation of a part of a slider joint and the rotation of a part of a revolute joint. In connection with the already existing joints this joint can be used to simulate a lead screw gear.

## Usage

1. Optionally select two geometric entities of two different shapes that have previously been used to define a Slider joint and a Revolute joint.
2. There are several ways to invoke the tool:
   - Press the ![](/images/Assembly_CreateJointScrew.svg) [Create Screw Joint](/Assembly_CreateJointScrew "Assembly CreateJointScrew") button.
   - Select the **Assembly → ![](/images/Assembly_CreateJointScrew.svg) Create Screw Joint** option from the menu.
   - Use the keyboard shortcut: W.
3. The **Create Joint** dialog opens in the [Task panel](/Task_panel "Task panel") listing the pre-selected entities.
4. For further steps see [Assembly CreateJointFixed](/Assembly_CreateJointFixed#Usage "Assembly CreateJointFixed").

## Notes

- Pitch radius refers to the pitch of a (lead) screw. It is stored in Data**Distance** and defines the translation per one turn of the screw.

## Properties

See also: [Property editor](/Property_editor "Property editor").

A **Screw** object is derived from an [App FeaturePython](/App_FeaturePython "App FeaturePython") object and inherits all its properties. See [Assembly CreateJointFixed](/Assembly_CreateJointFixed#Properties "Assembly CreateJointFixed") for additional properties.

Retrieved from "<http://wiki.freecad.org/index.php?title=Assembly_CreateJointScrew/en&oldid=1428804>"
