---
title: Surface CurveOnMesh
---
|  |
| --- |
| Surface CurveOnMesh |
| Menu location |
| Surface → CurveOnMesh |
| Workbenches |
| [Surface](/Surface_Workbench "Surface Workbench") |
| Default shortcut |
| *None* |
| Introduced in version |
| - |
| See also |
| *None* |
|  |

## Descriere

![](/images/Surface_CurveOnMesh.svg) [Surface CurveOnMesh](/Surface_CurveOnMesh "Surface CurveOnMesh") creates approximated spline segments on top of a selected [mesh](/Mesh_Workbench "Mesh Workbench").

If the object is not a [Mesh](/Mesh "Mesh"), but a parametric [Shape](/Shape "Shape") or surface, it must be converted first to a mesh using ![](/images/Mesh_FromPartShape.svg) [Mesh FromPartShape](/Mesh_FromPartShape "Mesh FromPartShape").

These edges created on top of the mesh may be further used to re-create the surface in a parametric way by using tools such as ![](/images/Surface_GeomFillSurface.svg) [GeomFillSurface](/Surface_GeomFillSurface "Surface GeomFillSurface") and ![](/images/Surface_Sections.svg) [Sections](/Surface_Sections "Surface Sections").

![](/images/Surface_CurveOnMesh_mesh_example.png) ![](/images/Surface_CurveOnMesh_example.png)

![](/images/Surface_CurveOnMesh_surface_example.png)

Above left: mesh object with selected points on the surface. Above right: splines created by picking several points on the mesh. Lower left: a parametric surface reconstructed from the approximated splines, using [Surface Sections](/Surface_Sections "Surface Sections").

## Cum se folosește

1. Selectațiîn meiul **Surface → CurveOnMesh**.
2. Pași detaliați sunt necesari.
3. Definii opțiunile și apăsați OK.

After pressing Start, the context menu (right-click) in the [3D view](/3D_view "3D view") shows various options beside **Create**.

* **Close wire**: if at least three points have been picked, this option will be available to join the last point to the first point with a line.
* **Clear**: it will erase the tentative points that have been picked on the mesh, and will allow you to pick new ones.
* **Cancel**: it will erase the tentative points that have been picked, and will stop the picking operation. Press Start again to pick points once more.

## Opţiuni

*(Editor: this information must be verified)*

**Wire** section:

* **Snap tolerances to vertices**: it defaults to `10 px`; it indicates the minimum distance between one point and another when picking with the pointer.
* **Split threshold**: it defaults to `45 deg`; it indicates the angular deviation from one point in the mesh to another point necessary to create a new spline instead of extending the previous spline.

**Spline approximation**, if it is ![](/images/CheckBoxTrue.svg) checked, it will create spline objects, otherwise, it will create simple straight line objects (polyline).

* **Tolerance to mesh**: it defaults to `0.2`. It is a parameter that takes into account the imperfections of the mesh; the smaller this number the more precise it will consider the mesh, particularly if it is a very fine mesh.
* **Continuity**: it defaults to `C2`. It determines the continuity of the spline; it can be `C0` (touching), `C1` (tangent), `C2` (curvature), and `C3` (acceleration curvature).
* **Maximum curve degree**: it defaults to `5`. It determines the maximum degree of the spline to approximate the surface; it can be a value from `1` to `8`.

## Proprietăți

* Date**Property**: descrierea proprietății
* Vizualizare**Property**: descrierea proprietății

If ![](/images/CheckBoxTrue.svg) Spline approximation is checked, the [Curve on mesh](/Surface_CurveOnMesh "Surface CurveOnMesh") tool creates a ![](/images/Part_Spline.svg) [Part Spline](/index.php?title=Part_Spline&action=edit&redlink=1 "Part Spline (page does not exist)") (`Part::Spline` class) which is derived from the basic [Part Feature](/Part_Feature "Part Feature") (`Part::Feature` class), therefore it shares all the latter's properties.

In addition to the properties described in [Part Feature](/Part_Feature "Part Feature"), the Part Spline has the following properties in the [property editor](/Property_editor "Property editor").

### View

Base

* Vizualizare**Control Points** (`Bool`): it defaults to `false`; if set to `true`, it will show an overlay with the control points of the surface.

Retrieved from "<http://wiki.freecad.org/index.php?title=Surface_CurveOnMesh/ro&oldid=1273419>"