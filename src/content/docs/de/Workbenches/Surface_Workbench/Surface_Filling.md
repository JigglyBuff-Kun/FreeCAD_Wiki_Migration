---
title: Surface Füllfläche
---

|                                                         |
| ------------------------------------------------------- |
| Surface Füllfläche                                      |
| Menüeintrag                                             |
| Surface → Filling                                       |
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

![](/src/assets/images/Surface_Filling.svg) Surface Füllfläche erstellt eine Oberfläche aus einer Reihe von verbundenen Randkurven. Die Krümmung der Oberfläche kann zusätzlich über Kanten und Knotenpunkte innerhalb der Fläche sowie einer Stützfläche gesteuert werden.

Die Basisgeometrie kann zu Kurven, die mit den Arbeitsbereichen [Draft](/Draft_Workbench/de "Draft Workbench/de") oder [Sketcher](/Sketcher_Workbench/de "Sketcher Workbench/de") erstellt wurden, gehören, aber auch zu Festkörperobjekten, die mit demArbeitsbereich [Part](/Part_Workbench/de "Part Workbench/de") erzeugt wurden.

![](/src/assets/images/Surface_Filling_example.png)

Zwei gefüllte Oberflächen, umrandet von vier Kanten auf der XY-Ebene. Die Oberfläche auf der rechten Seite wird zusätzlich durch eine Kante beeinflusst, die nicht zur Umrandung gehört.

## Anwendung

1. Press the ![](/src/assets/images/Surface_Filling.svg) [Filling](/Surface_Filling "Surface Filling") button.
2. The **Boundaries** task panel opens. See [Options](#Options).
3. Select two or more edges in the [3D view](/3D_view "3D view"):
   - There is no need to press the Add edge button in the **Boundaries** section at this time.
   - The edges must be selected in consecutive order.
   - The edges must be connected, but the complete boundary need not be closed.
   - The complete boundary should not self-intersect.
   - For a 360° circular boundary two semicircular edges can be selected.
4. A preview of the final shape will be shown once enough valid geometry has been selected.
5. Optionally select a **Support surface**. See [Example](#Example).
6. Optionally select one or more **Edge constraints**.
7. Optionally select one or more **Vertex constraints**.
8. Press OK button.

## Optionen

- In the **Boundaries** section a support surface and boundary edges can specified:

  - Press the Support surface button and select a face in the [3D view](/3D_view "3D view") to add a support surface.
    - Click the ![](/src/assets/images/Edit-cleartext.svg) icon to remove the support surface.
  - Press the Add edge button once to start selecting boundary edges in the [3D view](/3D_view "3D view").
  - There are several ways to deselect boundary edges:
    - Press the Remove edge button once to start deselecting edges in the [3D view](/3D_view "3D view").
    - Select an edge in the list and press Delete.
    - Right-click an edge in the list and select **Remove** from the context menu.

- In the **Edge constraints** section non-boundary edges can be specified:

  - The selection options are similar to those for boundary edges.

- In the **Vertex constraints** section non-boundary vertices can be specified:

  - The selection options are similar to those for boundary edges.

- Press Esc or the Cancel button to abort the operation.

## Beispiel

Die **Stützfläche** Stellt eine weitere Randbedingung für die Oberfläche dar. Das folgende einfache Beispiel gibt einen Eindruck davon, wie dies funktioniert:

1. In the ![](/src/assets/images/Workbench_Part.svg) [Part Workbench](/Part_Workbench "Part Workbench") create a ![](/src/assets/images/Part_Cylinder.svg)[cylinder](/Part_Cylinder "Part Cylinder") and set its Daten**Angle** to `180°`.
2. Switch to the ![](/src/assets/images/Workbench_Surface.svg) [Surface Workbench](/Surface_Workbench "Surface Workbench") and press the ![](/src/assets/images/Surface_Filling.svg) [Filling](/Surface_Filling "Surface Filling") button.
3. Select the two semi-circular edges and the two straight edges that connect them.
4. The result matches the four boundary edges, but the inner shape is quite different from the cylindrical face.
5. Edit the Surface object and for the **Support surface** select the cylindrical face.
6. The modified shape matches the cylindrical face much more closely.

## Eigenschaften

A [Surface Filling](/Surface_Filling "Surface Filling") (`Surface::Filling` class) is derived from the basic [Part Feature](/Part_Feature "Part Feature") (`Part::Feature` class, through the `Part::Spline` subclass), therefore it shares all the latter's properties.

In addition to the properties described in [Part Feature](/Part_Feature "Part Feature"), the Surface Filling has the following properties in the [property editor](/Property_editor "Property editor").

### Daten

Filling

- Daten**Boundary Edges** (`LinkSubList`): boundary edges; C0 is required for edges without a corresponding face.
- Daten**Boundary Faces** (`StringList`):
- Daten**Boundary Order** (`IntegerList`): order of constraint on boundary faces; `0`, `1`, and `2` are possible.
- Daten**Unbound Edges** (`LinkSubList`): unbound constraint edges; C0 is required for edges without a corresponding face.
- Daten**Unbound Faces** (`StringList`):
- Daten**Unbound Order** (`IntegerList`): order of constraint on unbound faces; `0`, `1`, and `2` are possible.
- Daten**Free Faces** (`LinkSubList`): free constraint on a face.
- Daten**Free Order** (`IntegerList`): order of constraint on free faces.
- Daten**Points** (`LinkSubList`): constraint points on surface.
- Daten**Initial Face** (`LinkSub`): initial surface to use.
- Daten**Degree** (`Integer`): starting degree, it defaults to `3`.
- Daten**Points On Curve** (`Integer`): number of points on an edge for constraint.
- Daten**Iterations** (`Integer`): number of iterations, it defaults to `2`.
- Daten**Anisotropy** (`Bool`): it defaults to `false`.
- Daten**Tolerance2d** (`Float`): 2D tolerance, it defaults to `0.0`.
- Daten**Tolerance3d** (`Float`): 3D tolerance, it defaults to `0.0`.
- Daten**Tol Angular** (`Float`): G1 tolerance, it defaults to `0.01`.
- Daten**Tol Curvature** (`Float`): G2 tolerance, it defaults to `0.10`.
- Daten**Maximum Degree** (`Integer`): maximum curve degree, it defaults to `8`.
- Daten**Maximum Segments** (`Integer`): maximum number of segments, it defaults to `9`.

### Ansicht

Base

- Ansicht**Control Points** (`Bool`): it defaults to `false`; if set to `true`, it will show an overlay with the control points of the surface.

## Skripten

_Siehe auch:_ [FreeCAD Grundlagen Skripten](/FreeCAD_Scripting_Basics/de "FreeCAD Scripting Basics/de").

The Surface Filling tool can be used in [macros](/Macros "Macros") and from the [Python](/Python "Python") console by adding the `Surface::Filling` object.

- The edges to be used to define the surface must be assigned as a [LinkSubList](/FeaturePython_Custom_Properties#App::PropertyLinkSubList "FeaturePython Custom Properties") to the `BoundaryEdges` property of the object.
- Auxiliary edges and vertices must be assigned as a [LinkSubLists](/FeaturePython_Custom_Properties#App::PropertyLinkSubList "FeaturePython Custom Properties") to the `UnboundEdges` and `Points` properties of the object.
- All objects with edges need to be computed before they can be used as input for the properties of the Filling object.

```
import FreeCAD as App
import Draft

doc = App.newDocument()

a = App.Vector(-20, -20, 0)
b = App.Vector(-18, 25, 0)
c = App.Vector(60, 26, 0)
d = App.Vector(33, -20, 0)

points1 = [a, App.Vector(-20, -8, 0), App.Vector(-17, 7, 0), b]
obj1 = Draft.make_bspline(points1)

points2 = [b, App.Vector(0, 25, 0), c]
obj2 = Draft.make_bspline(points2)

points3 = [c, App.Vector(37, 4, 0), d]
obj3 = Draft.make_bspline(points3)

points4 = [d, App.Vector(-2, -18, 0), a]
obj4 = Draft.make_bspline(points4)
doc.recompute()

surf = doc.addObject("Surface::Filling", "Surface")
surf.BoundaryEdges = [(obj1, "Edge1"),
                      (obj2, "Edge1"),
                      (obj3, "Edge1"),
                      (obj4, "Edge1")]
doc.recompute()

# ---------------------------------------------------------
points_spl = [App.Vector(-10, 0, 2),
              App.Vector(4, 0, 7),
              App.Vector(18, 0, -5),
              App.Vector(25, 0, 0),
              App.Vector(30, 0, 0)]
aux_edge = Draft.make_bspline(points_spl)
doc.recompute()

surf.UnboundEdges = [(aux_edge, "Edge1")]
doc.recompute()

# ---------------------------------------------------------
aux_v1 = Draft.make_line(App.Vector(-13, -12, 5),
                         App.Vector(-13, -12, -5))
aux_v2 = Draft.make_line(App.Vector(-3, 18, 5),
                         App.Vector(-3, 18, -5))
doc.recompute()

surf.Points = [(aux_v1, "Vertex2"),
               (aux_v2, "Vertex1")]
doc.recompute()

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Surface_Filling/de&oldid=1463776>"
