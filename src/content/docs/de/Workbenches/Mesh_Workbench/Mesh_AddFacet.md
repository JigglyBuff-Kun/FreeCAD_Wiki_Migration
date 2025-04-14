---
title: Polygonnetz FacetteHinzufügen
---

|                                                                                                                                            |
| ------------------------------------------------------------------------------------------------------------------------------------------ |
| Mesh AddFacet                                                                                                                              |
| Menu location                                                                                                                              |
| Meshes → Add triangle                                                                                                                      |
| Workbenches                                                                                                                                |
| [Mesh](/Mesh_Workbench "Mesh Workbench")                                                                                                   |
| Default shortcut                                                                                                                           |
| _None_                                                                                                                                     |
| Introduced in version                                                                                                                      |
| -                                                                                                                                          |
| See also                                                                                                                                   |
| [Mesh FillupHoles](/Mesh_FillupHoles "Mesh FillupHoles"), [Mesh FillInteractiveHole](/Mesh_FillInteractiveHole "Mesh FillInteractiveHole") |
|                                                                                                                                            |

## Beschreibung

The **Mesh AddFacet** command adds faces along a boundary of an open mesh object. It can be used to fill holes.

## Anwendung

1. During the command edit mode will be active. In this mode it is impossible to rotate or pan the [3D view](/3D_view "3D view"), although zooming still works. But you can temporarily switch out of edit mode with the [Std ToggleNavigation](/Std_ToggleNavigation "Std ToggleNavigation") command should you need to change the view.
2. Select a single open mesh object.
3. There are several ways to invoke the command:
   - Press the ![](/images/Mesh_AddFacet.svg) [Add triangle](/Mesh_AddFacet "Mesh AddFacet") button.
   - Select the **Meshes → ![](/images/Mesh_AddFacet.svg) Add triangle** option from the menu.
4. If you hover over a vertex along a boundary of the mesh a yellow marker will appear and a left-click will select it.
5. Select two additional points to define a triangular face. The order of the three points, clockwise or counterclockwise, determines the direction of the normal of the face.
6. A menu pops up with the following options:
   - **Add triangle**: adds the face to the mesh.
   - **Flip normal**: flips the normal of the face. After selecting this option a left-click will again show the menu.
   - **Clear**: removes the selected points.
7. Optionally add more faces.
8. Choose **Finish** from the 3D view contex menu to finish the command.

## Hinweise

- For a clear indication of the orientation of the faces of mesh objects make sure the Ansicht**Lighting** property of the mesh objects is set to `One side`. The color of the back side of their faces will then depend on the backlight settings: **Edit → Preferences... → Display → 3D View → Backlight color - Intensity**. See: [Preferences Editor](/Preferences_Editor#3D_View "Preferences Editor").

Retrieved from "<http://wiki.freecad.org/index.php?title=Mesh_AddFacet/de&oldid=1332900>"
