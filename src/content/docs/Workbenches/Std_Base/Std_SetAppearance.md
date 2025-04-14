---
title: Std SetAppearance
---

|                                                                                                                                                                     |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Std SetAppearance                                                                                                                                                   |
| Menu location                                                                                                                                                       |
| View → Appearance...                                                                                                                                                |
| Workbenches                                                                                                                                                         |
| [Material](/Material_Workbench "Material Workbench"), [Part](/Part_Workbench "Part Workbench"), [PartDesign](/PartDesign_Workbench "PartDesign Workbench") and more |
| Default shortcut                                                                                                                                                    |
| Ctrl+D                                                                                                                                                              |
| Introduced in version                                                                                                                                               |
| -                                                                                                                                                                   |
| See also                                                                                                                                                            |
| [Std SetMaterial](/Std_SetMaterial "Std SetMaterial"), [Part ColorPerFace](/Part_ColorPerFace "Part ColorPerFace")                                                  |
|                                                                                                                                                                     |

## Description

The **Std SetAppearance** command sets the display properties of selected objects.

This page has been updated for version 1.0.

![](/images/Std_SetAppearance_Taskpanel.png)

The Display properties task panel

## Usage

1. Select one or more objects.
2. There are several ways to invoke the command:
   - Select the **View → ![](/images/Std_SetAppearance.svg) Appearance...** option from the menu.
   - Select the **![](/images/Std_SetAppearance.svg) Appearance...** option from the [Tree view](/Tree_view "Tree view") context menu or [3D view](/3D_view "3D view") context menu.
   - Use the keyboard shortcut: Ctrl+D.
3. The **Display properties** task panel opens. See [Options](#Options).
4. Change one or more properties.
5. The objects are updated immediately.
6. Optionally select one or more new objects whose properties you want to change.
7. Press the Close button to close the task panel and finish the command.

## Options

### Viewing mode

- Select a View**Display Mode** from the dropdown list. The available options are: `Flat lines`, `Shaded` (not for [Draft](/Draft_Workbench "Draft Workbench") objects), `Wireframe` and `Points`. See the [Std DrawStyle](/Std_DrawStyle "Std DrawStyle") command for more information.

### Material

- Select a material from the list.
  1. Optionally select a category from the dropdown list below the material list to filter the materials. The available categories are `Basic Appearance`, `Texture Appearance` (such materials are not yet available) and `All Materials`.
  2. Optionally press the Launch editor button to launch the [Material editor](/Material_Edit "Material Edit").
- **Custom appearance:** press the ... button to override the material appearance. The **Material properties** dialog box opens. See [Part ColorPerFace](/Part_ColorPerFace#Usage "Part ColorPerFace").
- **Color plot:** unsupported at this time.
- **Line color:** sets the View**Line Color** property. Press the button to open the Select color dialog box.
- **Point color:** sets the View**Point Color** property. Press the button to open the Select color dialog box.

### Display

- **Point size:** sets the View**Point Size** property (in pixels).
- **Line width:** sets the View**Line Width** property (in pixels).
- **Transparency:** sets the View**Transparency** property (in percentage). 0% is opaque, 100% is fully transparent.
- **Line transparency:** unsupported at this time.

## Notes

- The mentioned view properties can also be changed in the [Property editor](/Property_editor "Property editor").

Retrieved from "<http://wiki.freecad.org/index.php?title=Std_SetAppearance/en&oldid=1540624>"
