---
title: Draft Shape2DView
---
|  |
| --- |
| Draft Shape2DView |
| Menyplacering |
| Draft -> Shape 2D View |
| Arbetsbänkar |
| [Draft](/Draft_Workbench/sv "Draft Workbench/sv"), [Arch](/Arch_Workbench/sv "Arch Workbench/sv") |
| Standard genväg |
| *Ingen* |
| Introducerad i version |
| - |
| Se även |
| *Ingen* |
|  |

#### Beskrivning

The ![](/images/Draft_Shape2DView.svg) **Draft Shape2DView** command creates 2D projections from selected objects, usually 3D solids or [Arch SectionPlanes](/Arch_SectionPlane "Arch SectionPlane"). The projections are placed in the [3D view](/3D_view "3D view").

Draft Shape2DView projections can be displayed on a [TechDraw Workbench](/TechDraw_Workbench "TechDraw Workbench") page using the [TechDraw DraftView](/TechDraw_DraftView "TechDraw DraftView") command. Alternatively the [TechDraw Workbench](/TechDraw_Workbench "TechDraw Workbench") offer its own projection commands. But these create projections that are only displayed on the drawing page and not in the [3D view](/3D_view "3D view").

![](/images/Draft_Shape2DView_example.jpg)

Projection of solid shapes onto the XY plane

#### Bruk

1. Optionally rotate the [3D view](/3D_view "3D view"). The camera direction in the [3D view](/3D_view "3D view") determines the projection vector. For example, a [top view](/Std_ViewTop "Std ViewTop") will project onto the XY plane. The projection vector is ignored for projections created from [Arch SectionPlanes](/Arch_SectionPlane "Arch SectionPlane").
2. Optionally select one or more objects.
3. There are several ways to invoke the command:
   * Press the ![](/images/Draft_Shape2DView.svg) [Shape 2D view](/Draft_Shape2DView "Draft Shape2DView") button.
   * Select the **Modification → ![](/images/Draft_Shape2DView.svg) Shape 2D view** option from the menu.
4. If you have not yet selected an object: select an object in the [3D view](/3D_view "3D view").
5. The projected objects are created on the XY plane.

## How to produce plans and sections with different linewidths

![](/images/Draft_shape2dview_example_plan.png)

Drawings with different linewidths for viewed and cut lines can easily be produced by using two shape2Dview objects from a same [Arch SectionPlane](/Arch_SectionPlane "Arch SectionPlane"). One of the shape2Dview objects has its projection mode set to **Solid**, which renders the viewed lines, and another set to **Cut lines** or **Cut faces** to render the cut lines. The two shape2Dviews are then placed at the same location, one on top of the other.

## Properties

See also: [Property editor](/Property_editor "Property editor").

A Draft Shape2DView object is derived from a [Part Part2DObject](/Part_Part2DObject "Part Part2DObject") and inherits all its properties. It also has the following additional properties:

### Data

Draft

* Data**Auto Update** (`Bool`): specifies if the projection should be automatically recomputed if the Data**Base** object changes. Selecting `false` can be useful if there are many Draft Shape2DViews in a document or if they are complex. If set to `false` the [Std Refresh](/Std_Refresh "Std Refresh") command must be used to update the projection.
* Data**Base** (`Link`): specifies the object to be projected.
* Data**Clip** (`Bool`): if this is True, the contents are clipped to the borders of the section plane, if applicable. This overrides the base object's Clip property.
* Data**Face Numbers** (`IntegerList`): specifies the indices of the faces to be projected. Only works if Data**Projection Mode** is `Individual Faces`.
* Data**Fuse Arch** (`Bool`): specifies if [BIM objects](/BIM_Workbench "BIM Workbench") of the same type and material are fused or not.
* Data**Hidden Lines** (`Bool`): specifies if hidden lines are shown or not.
* Data**In Place** (`Bool`): only works if the selected object is an [Arch SectionPlane](/Arch_SectionPlane "Arch SectionPlane"), and Data**Projection Mode** is `Cutlines` or `Cutfaces`, specifies if the projection will appear co-planar with the section plane.
* Data**Projection** (`Vector`): specifies the direction of the projection. Ignored if Data**Base** is an [Arch SectionPlane](/Arch_SectionPlane "Arch SectionPlane").
* Data**Projection Mode** (`Enumeration`): specifies the projection mode. The following modes are available:
  + `Solid`: projects the entire selected object.
  + `Individual Faces`: only projects the faces in the Data**Face Numbers** list.
  + `Cutlines`: only works if the selected object is an [Arch SectionPlane](/Arch_SectionPlane "Arch SectionPlane"), projects only the edges cut by the section plane.
  + `Cutfaces`: only works if the selected object is an [Arch SectionPlane](/Arch_SectionPlane "Arch SectionPlane"), projects the areas cut through solids by the section plane as faces.
  + `Solid faces`: projects the entire selected object by cutting faces one by one. Can be used if the `Solid` mode gives wrong results.
* Data**Segment Length** (`Float`): specifies the size in millimeters of linear segments if Data**Tessellation** is `true`.
* Data**Tessellation** (`Bool`): specifies if tessellation should be performed. Tessellation means that curves are replaced by sequences of line segments. This can be computationally intensive if the Data**Segment Length** is too short.
* Data**Visible Only** (`Bool`): specifies if the projection should only be recomputed if it is visible.
* Data**Exclusion Points** (`Vector list`): A list of exclusion points. Any edge passing through any of those points will not be drawn.
* Data**Exclusion Names** (`String list`): A list of object names. Any viewed or cut child object with a name in that list will not be drawn. [introduced in 0.21](/Release_notes_0.21 "Release notes 0.21")

### View

Draft

* Vy**Pattern** (`Enumeration`): not used.
* Vy**Pattern Size** (`Float`): not used.

## Scripting

## Skript

To create a 2D projection use the `make_shape2dview` method ([introduced in 0.19](/Release_notes_0.19 "Release notes 0.19")) of the Draft module. This method replaces the deprecated `makeShape2DView` method.

```
shape2dview = make_shape2dview(baseobj, projectionVector=None, facenumbers=[])

```

* `baseobj` is the object to be projected.
* `projectionVector` is the projection vector. If not supplied the Z axis is used.
* `facenumbers` is a list of face numbers (0-based). If supplied only these faces are considered.
* `shape2dview` is returned with the created 2D projection.

Change the `ProjectionMode` property of the created object if required. It can be: `"Solid"`, `"Individual Faces"`, `"Cutlines"`, `"Cutfaces"` or `"Solid faces"`.

Example:

```
import FreeCAD as App
import Draft

doc = App.newDocument()

box = doc.addObject("Part::Box", "Box")
box.Length = 2300
box.Width = 500
box.Height = 1000

shape1 = Draft.make_shape2dview(box)

shape2 = Draft.make_shape2dview(box, App.Vector(1, -1, 1))

shape3 = Draft.make_shape2dview(box, App.Vector(-1, 1, 1), [0, 5])
shape3.ProjectionMode = "Individual Faces"

doc.recompute()

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Draft_Shape2DView/sv&oldid=1513516>"