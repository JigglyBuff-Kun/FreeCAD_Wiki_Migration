---
title: Std ToggleNavigation
---

|                                    |
| ---------------------------------- |
| Std ToggleNavigation               |
| Menu location                      |
| View → Toggle navigation/Edit mode |
| Workbenches                        |
| All                                |
| Default shortcut                   |
| Esc                                |
| Introduced in version              |
| -                                  |
| See also                           |
| _None_                             |
|                                    |

## Description

The **Std ToggleNavigation** command is intended for certain inspection operations and certain interactive mesh editing operations. These operations are quite 'expensive' and therefore rely on an edit mode during which most navigation options are disabled. With this command it is possible to temporarily switch from edit mode to navigation mode, and, after changing the [3D view](/3D_view "3D view"), switch back to edit mode.

Do not confuse this command with the [Std Edit](/Std_Edit "Std Edit") command.

## Usage

_An example to demonstrate the command:_

1. Switch to the ![](/images/Workbench_Mesh.svg) [Mesh Workbench](/Mesh_Workbench "Mesh Workbench").
2. Press the ![](/images/Mesh_BuildRegularSolid.svg) [Regular solid...](/Mesh_BuildRegularSolid "Mesh BuildRegularSolid") button.
3. The **Regular Solid** dialog box opens.
4. Choose **Ellipsoid** from the dropdown list.
5. Press the Create button.
6. Press the Close button to close the dialog box.
7. Select the mesh object.
8. Press the ![](/images/Mesh_PolyCut.svg) [Cut mesh](/Mesh_PolyCut "Mesh PolyCut") button.
9. Pick points in the 3D view to define a polygon that overlaps one half of the mesh.
10. Right-click and choose **Inner** from the context menu.
11. The result is an open mesh with a boundary.
12. Make sure the mesh is still selected.
13. Press the ![](/images/Mesh_AddFacet.svg) [Add triangle](/Mesh_AddFacet "Mesh AddFacet") button to start the [Mesh AddFacet](/Mesh_AddFacet "Mesh AddFacet") command.
14. If you hover over a boundary point a yellow marker will appear and a left-click will select it.
15. Optionally select two more points and add a triangle to the mesh.
16. You are now in edit mode and it is impossible to rotate or pan the 3D view, although zooming still works.
17. Invoke the **Std ToggleNavigation** command to switch to navigation mode:
    - Select the **View → ![](/images/Std_ToggleNavigation.svg) Toggle navigation/Edit mode** option from the menu.
    - Or use the keyboard shortcut: Esc.
18. Now you can rotate and pan the 3D view, but you cannot pick points to add triangles.
19. Invoke the **Std ToggleNavigation** command to switch back to edit mode:
    - Select the **View → ![](/images/Std_ToggleNavigation.svg) Toggle navigation/Edit mode** option from the menu.
    - Or use the keyboard shortcut: Esc.
20. You can again pick points and add triangles.
21. Right-click in the 3D view and choose **Finish** from the context menu to end the [Mesh AddFacet](/Mesh_AddFacet "Mesh AddFacet") command.

Retrieved from "<http://wiki.freecad.org/index.php?title=Std_ToggleNavigation/en&oldid=1453420>"
