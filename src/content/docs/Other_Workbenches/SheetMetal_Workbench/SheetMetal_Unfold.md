---
title: SheetMetal Unfold
---

:::caution
This documentation is not finished. Please help and contribute documentation.GuiCommand modelexplains how commands should be documented. BrowseCategory:UnfinishedDocuto see more incomplete pages like this one. SeeCategory:Command Referencefor all commands.SeeWikiPagesto learn about editing the wiki pages, and go toHelp FreeCADto learn about other ways in which you can contribute.
:::

|                                                                                           |
| ----------------------------------------------------------------------------------------- |
| SheetMetal Unfold                                                                         |
| Menu location                                                                             |
| SheetMetal → Unfold                                                                       |
| Workbenches                                                                               |
| [SheetMetal](/SheetMetal_Workbench "SheetMetal Workbench")                                |
| Default shortcut                                                                          |
| U                                                                                         |
| Introduced in version                                                                     |
| -                                                                                         |
| See also                                                                                  |
| [SheetMetal UnattendedUnfold](/SheetMetal_UnattendedUnfold "SheetMetal UnattendedUnfold") |
|                                                                                           |

## Description

The ![](/src/assets/images/SheetMetal_Unfold.svg) **SheetMetal Unfold** command unfolds a sheet metal object.

## Usage

1. Select a planar face of the sheet metal part.
2. There are several ways to invoke the command:
   - Press the ![](/src/assets/images/SheetMetal_Unfold.svg) [Unfold](/SheetMetal_Unfold "SheetMetal Unfold") button.
   - Select the **Sheet Metal → ![](/src/assets/images/SheetMetal_Unfold.svg) [Unfold](/SheetMetal_Unfold "SheetMetal Unfold")** option from the menu.
   - Right-click in the [Tree view](/Tree_view "Tree view") or the [3D view](/3D_view "3D view") and select the **Sheet Metal → ![](/src/assets/images/SheetMetal_Unfold.svg) [Unfold](/SheetMetal_Unfold "SheetMetal Unfold")** option from the context menu.
   - Use the keyboard shortcut: U.
3. An **Unfold** object is created and the **Unfold properties** [Task panel](/Task_panel "Task panel") opens.
   - Optionally press the Face button and select a different planar face to re-position the Unfold object.
   - If you don't use a **Material Definition Sheet** (see [Notes](#Notes)) set **Material Settings**:
     1. Set the **Material Definition Sheet** option to `Manual K-Factor`.
     2. Adjust the **Manual K-Factor** value (see [Notes](#Notes)).
     3. Optionally toggle the **ANSI** or **DIN** radio buttons (see [Notes](#Notes)).
   - If you need 2D geometry to export set **Unfold Sketch Generation** options:
     1. Check **Generate projection sketch**
     2. An **Unfold_Sketch** object is added to the Unfold object.
     3. Optionally adjust the color of the Unfold_Sketch object.
     4. To separate bend lines and internal lines from perimeter lines:
        - check **Separate projection layers**.
        - An **Unfold_Sketch_Bends** object and an **Unfold_Sketch_Internal** object are added to the Unfold object.
        - Optionally adjust **Bend lines color** and **Internal lines color**.
     5. Optionally toggle the export file format via **DXF** and **SVG** radio buttons.
     6. Press the Export button to open the **Export unfold sketch** dialog and save the file.
   - Optionally adjust the **Unfold Transparency**.
   - If you prefer to disable automatic updates: Check **Manual update**.
     - Press the Update button to apply changes made within the task panel.
4. Press the OK button to finish the command and close the task panel.
5. Optionally adjust the parameters in the [Property editor](/Property_editor "Property editor").

### Task panel

A [Task panel](/Task_panel "Task panel") was introduced in version 0.6.10

Double-click an existing Unfold object in the [Tree view](/Tree_view "Tree view") to re-open the task panel and edit the parameters.

![](/src/assets/images/SheetMetal_Unfold-Task.png)

- **Material Definition Sheet**: Toggles the **Material Sheet** property.
- **Manual K-Factor**: Sets the **KFactor** property.
- **Standard**: Radio buttons toggle the **KFactor Standard** property.
- **Generate projection sketch** checkbox: Toggles the **Generate Sketch** property and activates:
  - Top color selector for the **Unfold_Sketch** object.
  - **Separate projection layers** checkbox: Toggles the **Separate Sketch Layers** property and activates:
    - **Bend lines color** color selector for the **Unfold_Sketch_Bends** object.
    - **Internal lines color** color selector for the **Unfold_Sketch_Internal** object.
  - **DXF** and **SVG** radio buttons: Toggle the export file format.
  - Export button: Opens the **Export unfold sketch** dialog to save the export file.
- **Unfold Transparency**: Sets the **Transparency** view property of the Unfold object.
- **Manual update** checkbox: Toggles the **Manual Recompute** property and activates:
  - Update button: Enables to update the Unfold object and the related Sketches while the task panel is open.

## Notes

- See the [Material Definition Sheet](https://github.com/shaise/FreeCAD_SheetMetal#material-definition-sheet) and [K-factor](https://github.com/shaise/FreeCAD_SheetMetal#physical-material-definitions) sections of the project page for more information.
- For an explanation of the different value ranges of ISO and ANSI K-factors see the table on [this](https://de.wikipedia.org/wiki/Biegeverkürzung#Korrektur_durch_den_sog._k-Faktor) page (in German).
- A new SheetMetal Unfolder was introduced in version 0.7.0. A **Revert To Old Unfolder** preference was also added.

## Properties

See also: [Property editor](/Property_editor "Property editor").

A SheetMetal Unfold object is derived from a [Part Feature](/Part_Feature "Part Feature") object and inherits all its properties. It has no additional properties.

## Limitations

- The sheet metal should have a constant thickness.
- Flat faces should not contain split lines.
- Flat faces must be truly planar and not B-spline approximations.
- Faces of bend angles must be truly cylindrical and also not B-spline approximations.
- Versions before 0.5.00: The Unfold feature is not parametric. If the model is modified you have to unfold it again.

Retrieved from "<http://wiki.freecad.org/index.php?title=SheetMetal_Unfold/en&oldid=1545501>"
