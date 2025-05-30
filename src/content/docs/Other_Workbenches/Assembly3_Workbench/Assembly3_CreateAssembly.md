---
title: Assembly3 CreateAssembly
---

:::caution
This documentation is not finished. Please help and contribute documentation.GuiCommand modelexplains how commands should be documented. BrowseCategory:UnfinishedDocuto see more incomplete pages like this one. SeeCategory:Command Referencefor all commands.SeeWikiPagesto learn about editing the wiki pages, and go toHelp FreeCADto learn about other ways in which you can contribute.
:::

|                                                         |
| ------------------------------------------------------- |
| Assembly3 CreateAssembly                                |
| Menu location                                           |
| Assembly3 → Create assembly                             |
| Workbenches                                             |
| [Assembly3](/Assembly3_Workbench "Assembly3 Workbench") |
| Default shortcut                                        |
| A N                                                     |
| Introduced in version                                   |
| -                                                       |
| See also                                                |
| _None_                                                  |
|                                                         |

## Description

The ![](/images/Assembly_New_Assembly.svg) **Assembly3 CreateAssembly** command adds a new **Assembly** branch object to the model tree.

Each branch object is an ![](/images/Assembly_Assembly_Tree.svg) **Assembly** container and holds four group containers:

: - One for the ![](/images/Assembly_Assembly_Constraints_Tree.svg) **Constraints** (which is hidden as long as it is empty)
: - One for the ![](/images/Assembly_Assembly_Element_Tree.svg) **Elements**
: - One for the ![](/images/Assembly_Assembly_Part_Tree.svg) **Parts**
: - One for the ![](/images/Assembly_Assembly_Relation_Tree.svg) **Relations** (which is hidden by default and will be revealed when the ![](/images/Assembly_GotoRelation.svg) [Go to relation](/Assembly3_GoToRelation "Assembly3 GoToRelation") command is used)

The added **Assembly** object with all visible containers looks like this (0.20.pre and Link Branch):

![](/images/Assembly3_Example-Tree-07.png) ![](/images/Assembly3_Example-Tree-08.png)

## Usage

1. There are several ways to invoke the command:
   - Press the ![](/images/Assembly_New_Assembly.svg) [Create assembly](/Assembly3_CreateAssembly "Assembly3 CreateAssembly") button.
   - Select the **Assembly3 → ![](/images/Assembly_New_Assembly.svg) Create assembly** option from the menu.
   - Use the keyboard shortcut A then N
2. An Assembly container is created.

Retrieved from "<http://wiki.freecad.org/index.php?title=Assembly3_CreateAssembly/en&oldid=1508494>"
