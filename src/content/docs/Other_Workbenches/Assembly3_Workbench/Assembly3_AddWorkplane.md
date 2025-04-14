---
title: Assembly3 AddWorkplane
---

:::caution
This documentation is not finished. Please help and contribute documentation.GuiCommand modelexplains how commands should be documented. BrowseCategory:UnfinishedDocuto see more incomplete pages like this one. SeeCategory:Command Referencefor all commands.SeeWikiPagesto learn about editing the wiki pages, and go toHelp FreeCADto learn about other ways in which you can contribute.
:::

|                                                         |
| ------------------------------------------------------- |
| Assembly3 AddWorkplane                                  |
| Menu location                                           |
| Assembly3 → Workplane and origin → Add workplane        |
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

The ![](/images/Assembly_Add_Workplane.svg) [Add workplane](/Assembly3_AddWorkplane "Assembly3 AddWorkplane") command adds a Workplane to an active assembly.

A Workplane object will be created inside the Parts container of the assembly tree and a related workplane item will be placed in the 3D view. It is placed at the assembly's origin and oriented according to the assembly's XY plane, if the Assembly object was selected directly.

![](/images/Assembly_Add_Workplane-01.png) ![](/images/Assembly_Add_Workplane-02.png)

The assembly can also be selected indirectly by some item belonging to the assembly. Then the workplane is placed at the item's origin and oriented according to this item's local XY plane.

Valid items are e.g. elements, bodies, vertexes, edges, faces, origins, and other workplanes from either the [Tree view](/Tree_view "Tree view") or the [3D view](/3D_view "3D view").

## Usage

1. Activate the ![](/images/Assembly_Add_Workplane.svg) **Add workplane** command using one of the following:
   - The ![](/images/Assembly_Add_Workplane.svg) [Add workplane](/Assembly3_AddWorkplane "Assembly3 AddWorkplane") button.
   - The **Assembly3 → Workplane and origin → ![](/images/Assembly_Add_Workplane.svg) Add workplane** menu option.

Retrieved from "<http://wiki.freecad.org/index.php?title=Assembly3_AddWorkplane/en&oldid=1096415>"
