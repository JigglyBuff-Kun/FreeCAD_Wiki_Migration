---
title: Assembly CreateJointRackPinion/pt-br
---
:::caution
This documentation is not finished. Please help and contribute documentation.GuiCommand modelexplains how commands should be documented. BrowseCategory:UnfinishedDocuto see more incomplete pages like this one. SeeCategory:Command Referencefor all commands.SeeWikiPagesto learn about editing the wiki pages, and go toHelp FreeCADto learn about other ways in which you can contribute.
:::

|  |
| --- |
| Assembly CreateJointRackPinion |
| Menu location |
| Assembly → Create Rack and Pinion Joint |
| Workbenches |
| [Assembly](/Assembly_Workbench "Assembly Workbench") |
| Default shortcut |
| Q |
| Introduced in version |
| 1.0 |
| See also |
| *None* |
|  |

## Descrição

The ![](/images/Assembly_CreateJointRackPinion.svg) [Assembly CreateJointRackPinion](/Assembly_CreateJointRackPinion "Assembly CreateJointRackPinion") tool creates a rack and pinion joint that couples the translation of a part of a slider joint and the rotation of a part of a revolute joint.

## Utilização

1. Optionally select two geometric entities of two different parts that have previously been used to define a Slider joint and a Revolute joint.
2. There are several ways to invoke the tool:
   * Press the ![](/images/Assembly_CreateJointRackPinion.svg) [Create Rack and Pinion Joint](/Assembly_CreateJointRackPinion "Assembly CreateJointRackPinion") button.
   * Select the **Assembly → ![](/images/Assembly_CreateJointRackPinion.svg) Create Rack and Pinion Joint** option from the menu.
   * Use the keyboard shortcut: Q.
3. The **Create Joint** dialog opens in the [Task panel](/Task_panel "Task panel") listing the pre-selected entities.
4. For further steps see [Assembly CreateJointFixed](/Assembly_CreateJointFixed#Usage "Assembly CreateJointFixed").

## Notas

* Pitch radius refers to the pitch circle of the pinion. It is stored in the Dados**Distance** property and is the basis to calculate the ratio between rotation and translation.

## Propriedades

See also: [Property editor](/Property_editor "Property editor").

A **RackPinion** object is derived from an [App FeaturePython](/App_FeaturePython "App FeaturePython") object and inherits all its properties. See [Assembly CreateJointFixed](/Assembly_CreateJointFixed#Properties "Assembly CreateJointFixed") for additional properties.

Retrieved from "<http://wiki.freecad.org/index.php?title=Assembly_CreateJointRackPinion/pt-br&oldid=1452302>"