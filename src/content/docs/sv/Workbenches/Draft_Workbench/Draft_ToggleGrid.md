---
title: Draft ToggleGrid
---
|  |
| --- |
| Draft ToggleGrid |
| Menyplacering |
| Draft → Utilities → Toggle grid |
| Arbetsbänkar |
| [Draft](/Draft_Workbench/sv "Draft Workbench/sv"), [Arch](/Arch_Workbench/sv "Arch Workbench/sv") |
| Standard genväg |
| *Ingen* |
| Introducerad i version |
| - |
| Se även |
| *Ingen* |
|  |

## Description

The ![](/images/Draft_ToggleGrid.svg) **Draft ToggleGrid** command changes the visibility of the grid.

[introduced in 1.0](/Release_notes_1.0 "Release notes 1.0"): Each [3D view](/3D_view "3D view") has its own grid that can either always be visible, only be visible during commands, or invisible. The initial visibility of the grid in new views depends on the [preferences](#Preferences).

## Usage

1. The command can be used while another command is active.
2. There are several ways to invoke the command:
   * Press the ![](/images/Draft_ToggleGrid.svg) [Toggle grid](/Draft_ToggleGrid "Draft ToggleGrid") button in the Draft snap toolbar.
   * [Draft](/Draft_Workbench "Draft Workbench"): Press the ![](/images/Draft_ToggleGrid.svg) [Toggle grid](/Draft_ToggleGrid "Draft ToggleGrid") button in the [Draft snap widget](/Draft_snap_widget "Draft snap widget").
   * Draft: Select the **Utilities → ![](/images/Draft_ToggleGrid.svg) Toggle grid** option from the menu, or from the [Tree view](/Tree_view "Tree view") or [3D view](/3D_view "3D view") context menu.
   * [BIM](/BIM_Workbench "BIM Workbench"): Select the **Snapping → ![](/images/Draft_ToggleGrid.svg) Toggle grid** option from the menu, or from the 3D view context menu.
   * Use the keyboard shortcut: G then R. This shortcut cannot be used if another command is active.
3. The visibility of the grid belonging to the current 3D view has changed:
   * If no other command is active:
     + If the grid was invisible it is now always visible.
     + If the grid was visible it is now no longer always visible, but the grid's visibility during commands remains unchanged.
   * If another command is active:
     + If the grid was invisible it is now only visible during commands.
     + If the grid was visible it is now no longer visible during commands and no longer always visible.

## Preferences

See also: [Preferences Editor](/Preferences_Editor "Preferences Editor") and [Draft Preferences](/Draft_Preferences "Draft Preferences").

* Several grid preferences are available: **Edit → Preferences... → Draft → Grid and snapping**.
* To keep the grid when switching to other workbenches see [Fine-tuning](/Fine-tuning#Draft_Workbench "Fine-tuning").

Retrieved from "<http://wiki.freecad.org/index.php?title=Draft_ToggleGrid/sv&oldid=1473497>"