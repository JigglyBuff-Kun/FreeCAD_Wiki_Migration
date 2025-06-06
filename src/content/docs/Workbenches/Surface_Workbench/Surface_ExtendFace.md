---
title: Surface ExtendFace
---

|                                                   |
| ------------------------------------------------- |
| Surface ExtendFace                                |
| Menu location                                     |
| Surface → Extend face                             |
| Workbenches                                       |
| [Surface](/Surface_Workbench "Surface Workbench") |
| Default shortcut                                  |
| _None_                                            |
| Introduced in version                             |
| 0.17                                              |
| See also                                          |
| _None_                                            |
|                                                   |

## Description

![](/images/Surface_ExtendFace.svg) [Surface ExtendFace](/Surface_ExtendFace "Surface ExtendFace") extrapolates an existing face or surface at its boundaries with its local U and V parameters.

![](/images/Surface_ExtendFace_base_example.png) ![](/images/Surface_ExtendFace_example.png)

Left: original face. Right: extended face.

## Usage

1. Make sure you have an object that has faces. The object could be created with the ![](/images/Workbench_Surface.svg) [Surface Workbench](/Surface_Workbench "Surface Workbench") but it could also be any other object, for example, created with ![](/images/Workbench_Part.svg) [Part](/Part_Workbench "Part Workbench") or ![](/images/Workbench_PartDesign.svg) [PartDesign](/PartDesign_Workbench "PartDesign Workbench").
2. Select the face to extend by clicking on it on the [3D view](/3D_view "3D view").
3. Press ![](/images/Surface_ExtendFace.svg) [Extend face](/Surface_ExtendFace "Surface ExtendFace").

## Options

This command doesn't have any options. Either it works with the selection or not.

## Properties

A [Surface Extend](/Surface_ExtendFace "Surface ExtendFace") object (`Surface::Extend` class) is derived from the basic [Part Feature](/Part_Feature "Part Feature") (`Part::Feature` class, through the `Part::Spline` subclass), therefore it shares all the latter's properties.

In addition to the properties described in [Part Feature](/Part_Feature "Part Feature"), the Surface Filling has the following properties in the [property editor](/Property_editor "Property editor").

### Data

Base

- Data**Face** (`LinkSub`): the subelement from an object that will be extended; it must be a face.
- Data**Tolerance** (`FloatConstraint`): it defaults to `0.1`.

- Data**Extend UNeg** (`FloatConstraint`): it defaults to `0.05`. The ratio of the local U parameter that will be extended in the negative direction.
- Data**Extend UPos** (`FloatConstraint`): it defaults to `0.05`. The ratio of the local U parameter that will be extended in the positive direction.
- Data**Extend USymetric** (`Bool`): it defaults to `true`, in which case Data**Extend UNeg** and Data**Extend UPos** will have the same value.

- Data**Extend VNeg** (`FloatConstraint`): it defaults to `0.05`. The ratio of the local V that will be extended in the negative direction.
- Data**Extend VPos** (`FloatConstraint`): it defaults to `0.05`. The ratio of the local V direction that will be extended in the positive direction.
- Data**Extend VSymetric** (`Bool`): it defaults to `true`, in which case Data**Extend VNeg** and Data**Extend VPos** will have the same value.

- Data**SampleU** (`IntegerConstraint`): it defaults to `32`.
- Data**SampleV** (`IntegerConstraint`): it defaults to `32`.

### View

Base

- View**Control Points** (`Bool`): it defaults to `false`; if set to `true`, it will show an overlay with the control points of the surface.

## Scripting

_See also:_ [FreeCAD Scripting Basics](/FreeCAD_Scripting_Basics "FreeCAD Scripting Basics").

The Surface Extend tool can be used in [macros](/Macros "Macros") and from the [Python](/Python "Python") console by adding the `Surface::Extend` object.

- The face to extend must be assigned as a [LinkSub](/FeaturePython_Custom_Properties#App::PropertyLinkSub "FeaturePython Custom Properties") to the `Face` property of the object. It must contain only a single face.

```
import FreeCAD as App
import Draft

doc = App.newDocument()

a = App.Vector(-20, -20, 0)
b = App.Vector(-18, 25, 0)
c = App.Vector(60, 26, 0)
d = App.Vector(33, -20, 0)

points = [a, App.Vector(-20, -8, 0), b, c,
          App.Vector(37, 4, 0), d,
          App.Vector(-2, -18, 0), a]
obj = Draft.make_bspline(points)
doc.recompute()

if App.GuiUp:
    obj.ViewObject.Visibility = False

surf = doc.addObject("Surface::Filling", "Surface")
surf.BoundaryEdges = [(obj, "Edge1")]
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
surf_extended = doc.addObject("Surface::Extend", "Surface")
surf_extended.Face = [surf, "Face1"]
doc.recompute()

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Surface_ExtendFace/en&oldid=1463807>"
