---
title: Mesh FillInteractiveHole
---

|                                                                                                           |
| --------------------------------------------------------------------------------------------------------- |
| Mesh FillInteractiveHole                                                                                  |
| Menu location                                                                                             |
| Meshes → Close hole                                                                                       |
| Workbenches                                                                                               |
| [Mesh](/Mesh_Workbench "Mesh Workbench")                                                                  |
| Default shortcut                                                                                          |
| _None_                                                                                                    |
| Introduced in version                                                                                     |
| -                                                                                                         |
| See also                                                                                                  |
| [Mesh FillupHoles](/Mesh_FillupHoles "Mesh FillupHoles"), [Mesh AddFacet](/Mesh_AddFacet "Mesh AddFacet") |
|                                                                                                           |

## Description

The **Mesh FillInteractiveHole** command fills selected holes in mesh objects.

## Usage

1. There are several ways to invoke the command:
   - Press the ![](/src/assets/images/Mesh_FillInteractiveHole.svg) [Close hole](/Mesh_FillInteractiveHole "Mesh FillInteractiveHole") button.
   - Select the **Meshes → ![](/src/assets/images/Mesh_FillInteractiveHole.svg) Close hole** option from the menu.
2. The cursor changes to a triangle icon.
3. Select a face that shares an edge with the hole you wish to close.
4. The hole is closed.
5. Optionally repeat this to close additional holes.
6. If required you can use [Std Undo](/Std_Undo "Std Undo") to undo the last action of the command.
7. Select the **Leave hole-filling mode** option from the [3D view](/3D_view "3D view") context menu to finish the command.

## Notes

- If the edges of a hole do not lie in the same plane, the result of the command can depend on the selected face.

Retrieved from "<http://wiki.freecad.org/index.php?title=Mesh_FillInteractiveHole/en&oldid=1332983>"
