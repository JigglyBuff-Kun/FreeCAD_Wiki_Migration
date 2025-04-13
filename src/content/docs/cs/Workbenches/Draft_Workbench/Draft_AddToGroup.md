---
title: Kreslení Přidat do skupiny
---
|  |
| --- |
| Kreslení Přidat do skupiny |
| Umístění Menu |
| Draft -> Display option -> Add to group |
| Pracovní stoly |
| [Kreslení](/Draft_Workbench/cs "Draft Workbench/cs"), [Architektura](/Arch_Workbench/cs "Arch Workbench/cs") |
| Výchozí zástupce |
| *Nikdo* |
| Představen ve verzi |
| - |
| Viz také |
| [Draft SelectGroup](/Draft_SelectGroup/cs "Draft SelectGroup/cs"), [Std Group](/index.php?title=Std_Group/cs&action=edit&redlink=1 "Std Group/cs (page does not exist)") |
|  |

## Description

The ![](/images/Draft_AddToGroup.svg) **Draft AddToGroup** command adds objects to a [Std Group](/Std_Group "Std Group") or a group-like [BIM](/BIM_Workbench "BIM Workbench") object. It can also ungroup objects.

## Usage

1. Select one or more objects.
2. There are several ways to invoke the command:
   * Press the ![](/images/Draft_AddToGroup.svg) [Add to group...](/Draft_AddToGroup "Draft AddToGroup") button.
   * Select the **Utilities → ![](/images/Draft_AddToGroup.svg) Add to group...** option from the menu, or from the [Tree view](/Tree_view "Tree view") or [3D view](/3D_view "3D view") context menu.
3. A menu is displayed near the cursor. Do one of the following:
   * Select **![](/images/List-remove.svg) Ungroup** to remove the objects from the group they are in.
   * Select the group you want to add the objects to.
   * Select **![](/images/List-add.svg) Add to new group...** to add the objects to a new group:
     1. The **Create new group** dialog box opens. [introduced in 1.1](/Release_notes_1.1 "Release notes 1.1")
     2. Enter a **Group name**.
     3. Press the OK button.

## Notes

* Objects can also be moved to a group by drag and dropping them on the group in the [Tree view](/Tree_view "Tree view").
* This command can be used to move objects to the [Draft construction group](/Draft_ToggleConstructionMode "Draft ToggleConstructionMode"), but, contrary to the [Draft AddConstruction](/Draft_AddConstruction "Draft AddConstruction") command, it does not apply the [construction geometry color](/Draft_ToggleConstructionMode#Preferences "Draft ToggleConstructionMode").
* For more information about organizing your model see [Document structure](/Document_structure "Document structure") and [Arch tutorial](/Arch_tutorial#Organizing_your_model "Arch tutorial").

Retrieved from "<http://wiki.freecad.org/index.php?title=Draft_AddToGroup/cs&oldid=1550450>"