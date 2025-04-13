---
title: SheetMetal UnattendedUnfold
---

:::caution
This documentation is not finished. Please help and contribute documentation.GuiCommand modelexplains how commands should be documented. BrowseCategory:UnfinishedDocuto see more incomplete pages like this one. SeeCategory:Command Referencefor all commands.SeeWikiPagesto learn about editing the wiki pages, and go toHelp FreeCADto learn about other ways in which you can contribute.
:::

|                                                             |
| ----------------------------------------------------------- |
| SheetMetal UnattendedUnfold                                 |
| Menu location                                               |
| SheetMetal → Unattended Unfold                              |
| Workbenches                                                 |
| [SheetMetal](/SheetMetal_Workbench "SheetMetal Workbench")  |
| Default shortcut                                            |
| U                                                           |
| Introduced in version                                       |
| -                                                           |
| See also                                                    |
| [SheetMetal Unfold](/SheetMetal_Unfold "SheetMetal Unfold") |
|                                                             |

## Description

The ![](/src/assets/images/SheetMetal_UnattendedUnfold.svg) [SheetMetal UnattendedUnfold](/SheetMetal_UnattendedUnfold "SheetMetal UnattendedUnfold") command unfolds a sheet metal object.

This command is not available by default, see [Notes](#Notes).

If the parent body of a selected planar face has been subject to unfolding before, this command will skip the menu in the task panel. Otherwise it will show an error message asking for either "set a Manual K-factor" or "use a Material Definition Sheet".

With the first use of the ![](/src/assets/images/SheetMetal_Unfold.svg) [Unfold](/SheetMetal_Unfold "SheetMetal Unfold") command the parent body's label received a suffix (such as _\_material_0.5din_) and after that it is ready to be used with this command.

## Usage

1. Select one planar face of a sheet metal part.
2. There are several ways to invoke the command:
   - Press the ![](/src/assets/images/SheetMetal_UnattendedUnfold.svg) [Unattended Unfold](/SheetMetal_UnattendedUnfold "SheetMetal UnattendedUnfold") button.
   - Select the **Sheet Metal → ![](/src/assets/images/SheetMetal_UnattendedUnfold.svg) [Unattended Unfold](/SheetMetal_UnattendedUnfold "SheetMetal UnattendedUnfold")** option from the menu.
   - Right-click in the [Tree view](/Tree_view "Tree view") or the [3D view](/3D_view "3D view") and select the **Sheet Metal → ![](/src/assets/images/SheetMetal_UnattendedUnfold.svg) [Unattended Unfold](/SheetMetal_UnattendedUnfold "SheetMetal UnattendedUnfold")** option from the context menu.
   - Use the keyboard shortcut: U.
3. An **Unfold** object will be created.
4. Optionally adjust the parameters in the [Property editor](/Property_editor "Property editor").

## Notes

To make this command available, first enable Engineering Mode in the preferences. Go to **Edit → Preferences → SheetMetal → General Settings**, and set **Engineering UX Mode** to `Enabled`. Changing this preference requires a restart of FreeCAD.

## Properties

See also: [Property editor](/Property_editor "Property editor").

A SheetMetal Unfold object is derived from a [Part Feature](/Part_Feature "Part Feature") object and inherits all its properties. It has no additional properties.

## Limitations

See ![](/src/assets/images/SheetMetal_Unfold.svg) [Unfold](/SheetMetal_Unfold "SheetMetal Unfold") for limitations.

Retrieved from "<http://wiki.freecad.org/index.php?title=SheetMetal_UnattendedUnfold/en&oldid=1544908>"
