---
title: Surface KurveAufNetz
---

|                                                         |
| ------------------------------------------------------- |
| Surface KurveAufNetz                                    |
| Menüeintrag                                             |
| Surface → Curve on mesh                                 |
| Arbeitsbereich                                          |
| [Surface](/Surface_Workbench/de "Surface Workbench/de") |
| Standardtastenkürzel                                    |
| _Keiner_                                                |
| Eingeführt in Version                                   |
| 0.17                                                    |
| Siehe auch                                              |
| _Keiner_                                                |
|                                                         |

## Beschreibung

![](/src/assets/images/Surface_CurveOnMesh.svg) [Surface KurveAufNetz](/Surface_CurveOnMesh "Surface CurveOnMesh") erstellt angenäherte Spline-Abschnitte auf der Oberfläche eines ausgewählten [Netzes](/Mesh_Workbench/de "Mesh Workbench/de").

Ist das Objekt kein [Netzsondern](/Mesh/de "Mesh/de") eine parametrische [Form](/Shape/de "Shape/de") oder Fläche, muss es als erstes mit ![](/src/assets/images/Mesh_FromPartShape.svg) [Mesh AusPartForm](/Mesh_FromPartShape/de "Mesh FromPartShape/de") in ein Netz konvertiert werden.

Diese auf der Oberfläche des Netzes erstellten Kanten können später genuzt werden, um die Oberfläche parametrisch nachzubauen mit Werkzeugen wie ![](/src/assets/images/Surface_GeomFillSurface.svg) [GeomFüllfläche](/Surface_GeomFillSurface/de "Surface GeomFillSurface/de") und ![](/src/assets/images/Surface_Sections.svg) [Querschnitte](/Surface_Sections/de "Surface Sections/de").

![](/src/assets/images/Surface_CurveOnMesh_mesh_example.png) ![](/src/assets/images/Surface_CurveOnMesh_example.png)

![](/src/assets/images/Surface_CurveOnMesh_surface_example.png)

Above left: mesh object with selected points on the surface. Above right: splines created by picking several points on the mesh. Lower left: a parametric surface reconstructed from the approximated splines, using [Surface Sections](/Surface_Sections "Surface Sections").

## Anwendung

1. Make sure you have a [mesh object](/Mesh "Mesh"). This can be created by the ![](/src/assets/images/Workbench_Mesh.svg) [Mesh Workbench](/Mesh_Workbench "Mesh Workbench"), or by importing a mesh file type, like STL, [OBJ](/Arch_OBJ "Arch OBJ"), or [DAE](/Arch_DAE "Arch DAE"). If a solid object or solid file type (STEP) is used, it can be converted to a mesh using ![](/src/assets/images/Mesh_FromPartShape.svg) [Mesh FromPartShape](/Mesh_FromPartShape "Mesh FromPartShape").
2. Press ![](/src/assets/images/Surface_CurveOnMesh.svg) [Curve on mesh](/Surface_CurveOnMesh "Surface CurveOnMesh").
3. Press Start.
4. Using the mouse pointer, pick points on the surface of the mesh in the [3D view](/3D_view "3D view"); pick as many points as necessary to draw a smooth preview line.
5. When enough points have been added, right click on the [3D view](/3D_view "3D view") to open the context menu, and select **Create**. Depending on how smooth the original mesh is, one spline or multiple splines will be created in the [tree view](/Tree_view "Tree view").
6. Repeat the sequence Start → Pick → **Create**, to add more approximated splines.
7. The new spline will be created, and will appear in the [tree view](/Tree_view "Tree view"), immediately after choosing **Create**; the [task panel](/Task_panel "Task panel") will remain active.
8. Press Close to close the [task panel](/Task_panel "Task panel"), and terminate the command completely.

After pressing Start, the context menu (right-click) in the [3D view](/3D_view "3D view") shows various options beside **Create**.

- **Close wire**: if at least three points have been picked, this option will be available to join the last point to the first point with a line.
- **Clear**: it will erase the tentative points that have been picked on the mesh, and will allow you to pick new ones.
- **Cancel**: it will erase the tentative points that have been picked, and will stop the picking operation. Press Start again to pick points once more.

## Optionen

_(Editor: this information must be verified)_

**Wire** section:

- **Snap tolerances to vertices**: it defaults to `10 px`; it indicates the minimum distance between one point and another when picking with the pointer.
- **Split threshold**: it defaults to `45 deg`; it indicates the angular deviation from one point in the mesh to another point necessary to create a new spline instead of extending the previous spline.

**Spline approximation**, if it is ![](/src/assets/images/CheckBoxTrue.svg) checked, it will create spline objects, otherwise, it will create simple straight line objects (polyline).

- **Tolerance to mesh**: it defaults to `0.2`. It is a parameter that takes into account the imperfections of the mesh; the smaller this number the more precise it will consider the mesh, particularly if it is a very fine mesh.
- **Continuity**: it defaults to `C2`. It determines the continuity of the spline; it can be `C0` (touching), `C1` (tangent), `C2` (curvature), and `C3` (acceleration curvature).
- **Maximum curve degree**: it defaults to `5`. It determines the maximum degree of the spline to approximate the surface; it can be a value from `1` to `8`.

## Eigenschaften

If ![](/src/assets/images/CheckBoxFalse.svg) Spline approximation is unchecked, the [Curve on mesh](/Surface_CurveOnMesh "Surface CurveOnMesh") tool creates a basic [Part Feature](/Part_Feature "Part Feature").

If ![](/src/assets/images/CheckBoxTrue.svg) Spline approximation is checked, the [Curve on mesh](/Surface_CurveOnMesh "Surface CurveOnMesh") tool creates a ![](/src/assets/images/Part_Spline.svg) [Part Spline](/index.php?title=Part_Spline&action=edit&redlink=1 "Part Spline (page does not exist)") (`Part::Spline` class) which is derived from the basic [Part Feature](/Part_Feature "Part Feature") (`Part::Feature` class), therefore it shares all the latter's properties.

In addition to the properties described in [Part Feature](/Part_Feature "Part Feature"), the Part Spline has the following properties in the [property editor](/Property_editor "Property editor").

### Ansicht

Base

- Ansicht**Control Points** (`Bool`): it defaults to `false`; if set to `true`, it will show an overlay with the control points of the surface.

Retrieved from "<http://wiki.freecad.org/index.php?title=Surface_CurveOnMesh/de&oldid=1493028>"
