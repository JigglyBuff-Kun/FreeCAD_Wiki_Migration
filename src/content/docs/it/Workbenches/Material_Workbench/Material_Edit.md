---
title: Editor del Materiale
---
|  |
| --- |
| Material Edit |
| Menu location |
| Materials → Edit... Model → Materials → Material editor |
| Workbenches |
| [Material](/Material_Workbench "Material Workbench"), [FEM](/FEM_Workbench "FEM Workbench") |
| Default shortcut |
| *None* |
| Introduced in version |
| 1.0 |
| See also |
| [FEM MaterialEditor](/FEM_MaterialEditor "FEM MaterialEditor") |
|  |

## Descrizione

The **Material Edit** tool provides access to the material editor which is part of the [material](/Material "Material") system of FreeCAD. The material system can be used by all workbenches. It handles the material properties and also the appearance properties of objects.

![](/images/Material_Edit_Dialog.png)

## Utilizzo

1. There are several ways to launch the editor:
   * [Material Workbench](/Material_Workbench "Material Workbench"):
     + Press the ![](/images/Material_Edit.svg) [Edit...](/Material_Edit "Material Edit") button.
     + Select the **Materials → ![](/images/Material_Edit.svg) Edit...** option from the menu.
   * [FEM Workbench](/FEM_Workbench "FEM Workbench"):
     + Press the ![](/images/FEM_MaterialEditor.svg) [Material editor](/FEM_MaterialEditor "FEM MaterialEditor") button.
     + Select the **Model → Materials → ![](/images/FEM_MaterialEditor.svg) Material editor** option from the menu.
   * All workbenches:
     1. Select an object.
     2. Do one of the following:
        + Select the **View → ![](/images/Material_Edit.svg) Material...** option from the menu.
        + Select the **![](/images/Material_Edit.svg) Material...** option from the [Tree view](/Tree_view "Tree view") or [3D view](/3D_view "3D view") context menu.
     3. The **Material** task panel opens.
     4. Press the Launch editor button.
2. Select a material from the multilevel list in the left panel. The following categories are available:
   * Favorites
   * Recent
   * System
     + Appearance
     + Fluid
     + Machining
     + Patterns
     + Standard
     + Test
   * User
3. Use the three tabs in the right panel of the editor to edit the properties of the selected material:
   * General:
     + Name
     + Author
     + License
     + Parent
     + Source URL
     + Source Reference
     + Tags
     + Description
   * Physical - various physical properties
   * Appearance:
     + Basic Rendering:
       - Ambient Color
       - Diffuse Color
       - Emissive Color
       - Shininess
       - Specular Color
       - Transparency
4. Optionally use the buttons on the General tab:
   * Press the New button to create a new material with empty properties.
   * Press the Inherit New button to create a new material with properties copied from the selected material.
   * Press the \* button to add the selected material to the favorites.
5. If material properties have been edited: press the Save button to save them.
6. Do one of the following:
   * Press the OK button to confirm the material selection and close the editor.
   * Press the Cancel button to cancel the material selection and close the editor. This will not cancel changes to material properties that have already been saved.
7. If the **Material** task panel is open: press the Close button to close it.

Retrieved from "<http://wiki.freecad.org/index.php?title=Material_Edit/it&oldid=1555210>"