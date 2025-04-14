---
title: FEM MaterialEditor
---

:::caution
THIS VERSION OF THE COMMAND IS OBSOLETEIt was changed in1.0 and aboveand accessesMaterial Edit.
:::

|                                                                                                        |
| ------------------------------------------------------------------------------------------------------ |
| FEM MaterialEditor                                                                                     |
| Menu location                                                                                          |
| Model → Materials → Material editor                                                                    |
| Workbenches                                                                                            |
| [FEM](/FEM_Workbench "FEM Workbench"), [BIM](/BIM_Workbench "BIM Workbench")                           |
| Default shortcut                                                                                       |
| _None_                                                                                                 |
| Introduced in version                                                                                  |
| 0.18                                                                                                   |
| See also                                                                                               |
| [Arch SetMaterial](/Arch_SetMaterial "Arch SetMaterial"), [FEM tutorial](/FEM_tutorial "FEM tutorial") |
|                                                                                                        |

| Solvers |
| ------- |
| All     |

## Description

The **Material Editor** allows you to edit and save the information contained in a [FreeCAD material](/Material "Material"). Currently such materials are used by the ![](/images/Workbench_FEM.svg) [FEM](/FEM_Workbench "FEM Workbench") and ![](/images/Workbench_BIM.svg) [BIM](/BIM_Workbench "BIM Workbench") workbenches.

![](/images/Material_editor.png)

## Usage

The material editor can currently be accessed by either:

1. ![](/images/Workbench_BIM.svg) [BIM Workbench](/BIM_Workbench "BIM Workbench"):
   - The ![](/images/BIM_Material.svg) [Material](/BIM_Material "BIM Material") button.
   - The menu **Manage → ![](/images/BIM_Material.svg) Material** entry.
2. ![](/images/Workbench_FEM.svg) [FEM Workbench](/FEM_Workbench "FEM Workbench"):
   - The ![](/images/FEM_MaterialEditor.svg) [Material editor](/FEM_MaterialEditor "FEM MaterialEditor") button.
   - The menu **Model → Materials → ![](/images/FEM_MaterialEditor.svg) Material editor** entry.

## Options

- **Browser button**: Opens the contents of the URL property in a browser
- **Material card**: Allows to choose a preset to fill in the fields
- Open: Opens a .FCMat file
- Save as: Saves the contents of the editor as a new .FCMat file
- **Preview**: Not implemented yet
- **Properties editor**: Allows to edit the contents of the material properties
- Add property: Allows to add a new custom property
- Delete property: Deletes a selected property. Only custom properties can be deleted

## Notes

- The OK and Cancel buttons have the same effect when the Material editor is not used to edit directly the material property of an existing object.

Retrieved from "<http://wiki.freecad.org/index.php?title=FEM_MaterialEditor/en&oldid=1540639>"
