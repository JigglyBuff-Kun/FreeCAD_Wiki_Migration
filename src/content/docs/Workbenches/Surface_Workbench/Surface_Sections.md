---
title: Surface Sections
---

|                                                   |
| ------------------------------------------------- |
| Surface Sections                                  |
| Menu location                                     |
| Surface → Sections                                |
| Workbenches                                       |
| [Surface](/Surface_Workbench "Surface Workbench") |
| Default shortcut                                  |
| _None_                                            |
| Introduced in version                             |
| 0.19                                              |
| See also                                          |
| _None_                                            |
|                                                   |

## Description

![](/src/assets/images/Surface_Sections.svg) [Surface Sections](/Surface_Sections "Surface Sections") is used to create a surface from edges that represent transversal sections of a surface.

![](/src/assets/images/Surface_Sections_edges_example.png) ![](/src/assets/images/Surface_Sections_example.png)

Left: control edges (transversal sections). Right: surface produced from these edges.

## Usage

1. Make sure you have at least two edges or curves in space. For example, these can be created with tools of the ![](/src/assets/images/Workbench_Draft.svg) [Draft Workbench](/Draft_Workbench "Draft Workbench") or the ![](/src/assets/images/Workbench_Sketcher.svg) [Sketcher](/Sketcher_Workbench "Sketcher Workbench").
2. Press the ![](/src/assets/images/Surface_Sections.svg) [Surface sections](/Surface_Sections "Surface Sections") button.
3. Press Add edge.
4. Use the pointer to pick the desired edges in the [3D view](/3D_view "3D view"); a preview of the final shape will be shown after selecting two valid edges.
5. Press OK to complete the operation.

## Options

- Add edge: press once to start picking edges in the [3D view](/3D_view "3D view"). Individual lines such as ![](/src/assets/images/Draft_BSpline.svg) [Draft BSplines](/Draft_BSpline "Draft BSpline") and ![](/src/assets/images/Sketcher_CreateBSpline.svg) [Sketcher BSplines](/Sketcher_CreateBSpline "Sketcher CreateBSpline") can be chosen, as well as any edge from solid objects, like those of ![](/src/assets/images/PartDesign_Body.svg) [PartDesign Bodies](/PartDesign_Body "PartDesign Body") and ![](/src/assets/images/Part_Primitives.svg) [Part Primitives](/Part_Primitives "Part Primitives").
- Remove edge: press once to start picking edges in the [3D view](/3D_view "3D view"); these must be edges that were previously picked with Add edge.
- Right mouse button: open the context menu and select Remove, or press Del in the keyboard, to remove the currently selected edge in the list.
- **Drag**: drag the currently selected element in the list in order to change the order in which it will be processed; the list is processed from top to bottom.
- Press Cancel or Esc to abort the current operation.

## Properties

A [Surface Sections](/Surface_Sections "Surface Sections") (`Surface::Sections` class) is derived from the basic [Part Feature](/Part_Feature "Part Feature") (`Part::Feature` class, through the `Part::Spline` subclass), therefore it shares all the latter's properties.

In addition to the properties described in [Part Feature](/Part_Feature "Part Feature"), the Surface Sections has the following properties in the [property editor](/Property_editor "Property editor").

### Data

Sections

- Data**NSections** (`LinkSubList`): a list of edges that will be used to build the surface.

### View

Base

- View**Control Points** (`Bool`): it defaults to `false`; if set to `true`, it will show an overlay with the control points of the surface.

## Twisting of the surface

The shape of the surface depends on the direction of the chosen edges; if edges are selected and the result is a surface that "twists" on itself, one of the edges may need its list of vertices in the reverse order. See the information in ![](/src/assets/images/Surface_GeomFillSurface.svg) [GeomFillSurface](/Surface_GeomFillSurface "Surface GeomFillSurface") for a more complete explanation.

![](/src/assets/images/Surface_twisting_example_smooth.png) ![](/src/assets/images/Surface_twisting_example_twisted.png)

## Scripting

_See also:_ [FreeCAD Scripting Basics](/FreeCAD_Scripting_Basics "FreeCAD Scripting Basics").

The Surface Sections tool can be used in [macros](/Macros "Macros") and from the [Python](/Python "Python") console by adding the `Surface::Sections` object.

- The edges to be used to define the surface must be assigned as a [LinkSubList](/FeaturePython_Custom_Properties#App::PropertyLinkSubList "FeaturePython Custom Properties") to the `NSections` property of the object.
- All objects with edges need to be computed before they can be used as input for the properties of the Sections object.

```
import FreeCAD as App
import Draft

doc = App.newDocument()

pl1 = App.Placement()
obj1 = Draft.make_circle(50, placement=pl1, face=False, startangle=0, endangle=180)

pl2 = App.Placement(App.Vector(0, 0, 25), App.Rotation())
obj2 = Draft.make_circle(30, placement=pl2, face=False, startangle=0, endangle=180)

points3 = [App.Vector(18, -10, 50),
           App.Vector(12, 10, 50),
           App.Vector(-12, 10, 50),
           App.Vector(-18, -10, 50)]
obj3 = Draft.make_bspline(points3)

points4 = [App.Vector(15, -20, 100),
           App.Vector(0, 6, 100),
           App.Vector(-15, -20, 100)]
obj4 = Draft.make_bspline(points4)
doc.recompute()

surf = doc.addObject("Surface::Sections", "Surface")
surf.NSections = [(obj1, "Edge1"),
                  (obj2, "Edge1"),
                  (obj3, "Edge1"),
                  (obj4, "Edge1")]
doc.recompute()

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Surface_Sections/en&oldid=1493020>"
