---
title: Assembly3 AddPlacement
---

:::caution
This documentation is not finished. Please help and contribute documentation.GuiCommand modelexplains how commands should be documented. BrowseCategory:UnfinishedDocuto see more incomplete pages like this one. SeeCategory:Command Referencefor all commands.SeeWikiPagesto learn about editing the wiki pages, and go toHelp FreeCADto learn about other ways in which you can contribute.
:::

|                                                         |
| ------------------------------------------------------- |
| Assembly3 AddPlacement                                  |
| Menu location                                           |
| Assembly3 → Workplane and origin → Add placement        |
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

The ![](/images/Assembly_Add_Placement.svg) [Add placement](/Assembly3_AddPlacement "Assembly3 AddPlacement") command adds a Placement to an active assembly.

A Placement object will be created inside the Parts container of the assembly tree and a related placement item will be placed in the 3D view. It is placed at the assembly's origin and inherits the orientation of the assembly's local coordinate system, if the Assembly object was selected directly.

![](/images/Assembly3_AddPlacement-01.png) ![](/images/Assembly3_AddPlacement-02.png)

Left: Tree view. Right: A placement near the assembly origin (shown as file origin here)

The assembly can also be selected indirectly by some item belonging to the assembly. Then the placement is placed at the item's origin and inherits the orientation of this item's local coordinate system.

Valid items are e.g. elements, bodies, vertexes, edges, faces, origins, workplanes, and other placements from either the [Tree view](/Tree_view "Tree view") or the [3D view](/3D_view "3D view").

## Usage

1. Activate the ![](/images/Assembly_Add_Placement.svg) **Add placement** command using one of the following:
   - The ![](/images/Assembly_Add_Placement.svg) [Add placement](/Assembly3_AddPlacement "Assembly3 AddPlacement") button.
   - The **Assembly3 → Workplane and origin → ![](/images/Assembly_Add_Placement.svg) Add placement** menu option.

Retrieved from "<http://wiki.freecad.org/index.php?title=Assembly3_AddPlacement/en&oldid=1097335>"
