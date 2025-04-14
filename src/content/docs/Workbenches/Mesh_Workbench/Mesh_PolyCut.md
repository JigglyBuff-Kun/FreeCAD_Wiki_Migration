---
title: Mesh PolyCut
---

|                                                                                                           |
| --------------------------------------------------------------------------------------------------------- |
| Mesh PolyCut                                                                                              |
| Menu location                                                                                             |
| Meshes → Cutting → Cut mesh                                                                               |
| Workbenches                                                                                               |
| [Mesh](/Mesh_Workbench "Mesh Workbench")                                                                  |
| Default shortcut                                                                                          |
| _None_                                                                                                    |
| Introduced in version                                                                                     |
| -                                                                                                         |
| See also                                                                                                  |
| [Mesh PolyTrim](/Mesh_PolyTrim "Mesh PolyTrim"), [Mesh TrimByPlane](/Mesh_TrimByPlane "Mesh TrimByPlane") |
|                                                                                                           |

## Description

The **Mesh PolyCut** command cuts whole faces from mesh objects.

## Usage

1. During the command the [3D view](/3D_view "3D view") cannot be changed. It is advisable to properly line up the 3d view first.
2. Select one or more mesh objects.
3. There are several ways to invoke the command:
   - Press the ![](/images/Mesh_PolyCut.svg) [Cut mesh](/Mesh_PolyCut "Mesh PolyCut") button.
   - Select the **Meshes → Cutting → ![](/images/Mesh_PolyCut.svg) Cut mesh** option from the menu.
4. Define a polygon by picking points in the 3D view.
5. Select an option from the 3D view context menu:
   - **Inner**: removes the faces that are (partially) inside the polygon.
   - **Outer**: removes the faces that are completely outside the polygon.
   - **Split**: removes the faces that are completely outside the polygon, and creates a new mesh object containing them.
   - **Cancel**: cancels the command.

Retrieved from "<http://wiki.freecad.org/index.php?title=Mesh_PolyCut/en&oldid=1333049>"
