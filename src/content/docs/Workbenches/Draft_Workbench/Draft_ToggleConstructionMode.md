---
title: Draft ToggleConstructionMode
---

|                                                                                                                                |
| ------------------------------------------------------------------------------------------------------------------------------ |
| Draft ToggleConstructionMode                                                                                                   |
| Menu location                                                                                                                  |
| Utilities → Toggle construction mode                                                                                           |
| Workbenches                                                                                                                    |
| [Draft](/Draft_Workbench "Draft Workbench"), [BIM](/BIM_Workbench "BIM Workbench")                                             |
| Default shortcut                                                                                                               |
| Draft: C M                                                                                                                     |
| Introduced in version                                                                                                          |
| -                                                                                                                              |
| See also                                                                                                                       |
| [Draft AddConstruction](/Draft_AddConstruction "Draft AddConstruction"), [Draft AutoGroup](/Draft_AutoGroup "Draft AutoGroup") |
|                                                                                                                                |

## Description

The ![](/images/Draft_ToggleConstructionMode.svg) **Draft ToggleConstructionMode** command switches Draft construction mode on or off. If construction mode is on new [Draft](/Draft_Workbench "Draft Workbench") objects are placed in a dedicated group and given a predefined color. This feature is intended for, often temporary, construction geometry used to provide new [snap points](/Draft_Snap "Draft Snap") for creating other objects. When the construction geometry is no longer needed the construction group can easily be [hidden](/Std_HideSelection "Std HideSelection") or [deleted](/Std_Delete "Std Delete").

![](/images/Draft_construction_mode_example.jpg)

Construction geometry, in blue, used to determine the center and radius of a circle

## Usage

1. There are several ways to invoke the command:
   - Press the ![](/images/Draft_tray_button_construction.png) button in the [Draft Tray](/Draft_Tray "Draft Tray"). This button is depressed if Draft construction mode is currently on.
   - [Draft](/Draft_Workbench "Draft Workbench"): Select the **Utilities → ![](/images/Draft_ToggleConstructionMode.svg) Toggle construction mode** option from the menu, or from the [Tree view](/Tree_view "Tree view") or [3D view](/3D_view "3D view") context menu.
   - Draft: Use the keyboard shortcut: C then M.
2. The button in the [Draft Tray](/Draft_Tray "Draft Tray") is updated.

## Notes

- If Draft construction mode is switched on the active [layer](/Draft_Layer "Draft Layer") is ignored.

## Preferences

- To change the label of the construction group: **Edit → Preferences... → Draft → General → Construction group label**.
- To change the color that is used: **Edit → Preferences... → Draft → General → Construction geometry color**.

Retrieved from "<http://wiki.freecad.org/index.php?title=Draft_ToggleConstructionMode/en&oldid=1513535>"
