---
title: Assembly3 AddZYWorkplane
---

:::caution
This documentation is not finished. Please help and contribute documentation.GuiCommand modelexplains how commands should be documented. BrowseCategory:UnfinishedDocuto see more incomplete pages like this one. SeeCategory:Command Referencefor all commands.SeeWikiPagesto learn about editing the wiki pages, and go toHelp FreeCADto learn about other ways in which you can contribute.
:::

|                                                         |
| ------------------------------------------------------- |
| Assembly3 AddZYWorkplane                                |
| Menu location                                           |
| Assembly3 → Workplane and origin → Add ZY workplane     |
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

The ![](/images/Assembly_Add_WorkplaneZY.svg) [Add ZY workplane](/Assembly3_AddZYWorkplane "Assembly3 AddZYWorkplane") command adds a ZY Workplane to an active assembly.

A Workplane object will be created inside the Parts container of the assembly tree and a related workplane item will be placed in the 3D view. It is placed at the assembly's origin and oriented according to the assembly's YZ plane, if the Assembly object was selected directly.

![](/images/Assembly_Add_Workplane-01.png) ![](/images/Assembly_AddZYWorkplane-04.png)

The assembly can also be selected indirectly by some item belonging to the assembly. Then the workplane is placed at the item's origin but it is still oriented according to the assembly's YZ plane.

Valid items are e.g. elements, bodies, vertexes, edges, faces, origins, and other workplanes from either the [Tree view](/Tree_view "Tree view") or the [3D view](/3D_view "3D view").

## Usage

1. Activate the ![](/images/Assembly_Add_WorkplaneZY.svg) **Add ZY workplane** command using one of the following:
   - The ![](/images/Assembly_Add_WorkplaneZY.svg) [Add ZY workplane](/Assembly3_AddZYWorkplane "Assembly3 AddZYWorkplane") button.
   - The **Assembly3 → Workplane and origin → ![](/images/Assembly_Add_WorkplaneZY.svg) Add ZY workplane** menu option.

Retrieved from "<http://wiki.freecad.org/index.php?title=Assembly3_AddZYWorkplane/en&oldid=1096284>"
