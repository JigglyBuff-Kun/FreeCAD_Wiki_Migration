---
title: Assembly CreateJointDistance/pt-br
---
:::caution
This documentation is not finished. Please help and contribute documentation.GuiCommand modelexplains how commands should be documented. BrowseCategory:UnfinishedDocuto see more incomplete pages like this one. SeeCategory:Command Referencefor all commands.SeeWikiPagesto learn about editing the wiki pages, and go toHelp FreeCADto learn about other ways in which you can contribute.
:::

|  |
| --- |
| Assembly CreateJointDistance |
| Menu location |
| Assembly → Create Distance Joint |
| Workbenches |
| [Assembly](/Assembly_Workbench "Assembly Workbench") |
| Default shortcut |
| D |
| Introduced in version |
| 1.0 |
| See also |
| *None* |
|  |

## Descrição

The ![](/images/Assembly_CreateJointDistance.svg) [Assembly CreateJointDistance](/Assembly_CreateJointDistance "Assembly CreateJointDistance") tool creates a Distance joint between two selected parts, fixing the distance between both parts.

## Utilização

1. Optionally select two geometric entities of two different shapes. Other selections will be rejected.
2. There are several ways to invoke the tool:
   * Press the ![](/images/Assembly_CreateJointDistance.svg) [Create Distance Joint](/Assembly_CreateJointDistance "Assembly CreateJointDistance") button.
   * Select the **Assembly → ![](/images/Assembly_CreateJointDistance.svg) Create Distance Joint** option from the menu.
   * Use the keyboard shortcut: D.
3. The **Create Joint** dialog opens in the [Task panel](/Task_panel "Task panel") listing the pre-selected entities.
4. For further steps see [Assembly CreateJointFixed](/Assembly_CreateJointFixed#Usage "Assembly CreateJointFixed").

## Notas

Tool tip says a distance of 0 results in a co-planar joint between the selected planar elements, or a tangent joint between a cylindrical and a planar element. Neither seems to work in weekly build 0.22.-.37645.

## Propriedades

See also: [Property editor](/Property_editor "Property editor").

A **Distance** object is derived from an [App FeaturePython](/App_FeaturePython "App FeaturePython") object and inherits all its properties. See [Assembly CreateJointFixed](/Assembly_CreateJointFixed#Properties "Assembly CreateJointFixed") for additional properties.

Retrieved from "<http://wiki.freecad.org/index.php?title=Assembly_CreateJointDistance/pt-br&oldid=1452314>"