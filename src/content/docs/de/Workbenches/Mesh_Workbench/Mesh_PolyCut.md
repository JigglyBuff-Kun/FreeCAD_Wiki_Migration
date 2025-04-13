---
title: Mesh PolygonSchnitt
---

|                                                                                                                         |
| ----------------------------------------------------------------------------------------------------------------------- |
| Mesh PolygonSchnitt                                                                                                     |
| Menüeintrag                                                                                                             |
| Netze → Schneiden → Netz schneiden                                                                                      |
| Arbeitsbereich                                                                                                          |
| [Mesh](/Mesh_Workbench "Mesh Workbench")                                                                                |
| Standardtastenkürzel                                                                                                    |
| _Keiner_                                                                                                                |
| Eingeführt in Version                                                                                                   |
| -                                                                                                                       |
| Siehe auch                                                                                                              |
| [Mesh PolygonTrim](/Mesh_PolyTrim/de "Mesh PolyTrim/de"), [Mesh EbenenTrim](/Mesh_TrimByPlane/de "Mesh TrimByPlane/de") |
|                                                                                                                         |

## Beschreibung

Der Befehl **Mesh PolygonSchnitt** schneidet ganze Facetten (Dreiecke) von einem Mesh-Objekt ab.

## Anwendung

1. During the command the [3D view](/3D_view "3D view") cannot be changed. It is advisable to properly line up the 3d view first.
2. Select one or more mesh objects.
3. There are several ways to invoke the command:
   - Press the ![](/src/assets/images/Mesh_PolyCut.svg) [Cut mesh](/Mesh_PolyCut "Mesh PolyCut") button.
   - Select the **Meshes → Cutting → ![](/src/assets/images/Mesh_PolyCut.svg) Cut mesh** option from the menu.
4. Define a polygon by picking points in the 3D view.
5. Select an option from the 3D view context menu:
   - **Inner**: removes the faces that are (partially) inside the polygon.
   - **Outer**: removes the faces that are completely outside the polygon.
   - **Split**: removes the faces that are completely outside the polygon, and creates a new mesh object containing them.
   - **Cancel**: cancels the command.

Retrieved from "<http://wiki.freecad.org/index.php?title=Mesh_PolyCut/de&oldid=1333038>"
