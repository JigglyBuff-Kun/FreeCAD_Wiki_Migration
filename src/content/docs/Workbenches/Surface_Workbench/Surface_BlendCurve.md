---
title: Surface BlendCurve
---

|                                                   |
| ------------------------------------------------- |
| Surface BlendCurve                                |
| Menu location                                     |
| Surface → Blend Curve                             |
| Workbenches                                       |
| [Surface](/Surface_Workbench "Surface Workbench") |
| Default shortcut                                  |
| _None_                                            |
| Introduced in version                             |
| 0.21                                              |
| See also                                          |
| _None_                                            |
|                                                   |

## Description

![](/src/assets/images/Surface_BlendCurve.svg) [Surface Blend Curve](/Surface_BlendCurve "Surface BlendCurve") creates a Bezier curve between two edges, with desired continuity.

The base geometry can belong to curves created with the [Draft Workbench](/Draft_Workbench "Draft Workbench") or the [Sketcher Workbench](/Sketcher_Workbench "Sketcher Workbench"), but can also belong to solid objects such as those created with the [Part Workbench](/Part_Workbench "Part Workbench").

![](/src/assets/images/Surface_BlendCurve_G3_example.png)
![](/src/assets/images/Surface_BlendCurve_Comb.png)

Surface Blend Curve joining 2 edges with G3 continuity. Orange polygon represent the control points. Curvature comb (from [Curves addon](/Curves_Workbench "Curves Workbench")) is smooth at contact points.

## Usage

1. Select two edges in the [3D view](/3D_view "3D view")
2. There are several ways to invoke the command:
   - Press the ![](/src/assets/images/Surface_BlendCurve.svg) [Surface Blend Curve](/Surface_BlendCurve "Surface BlendCurve") button.
   - Select the **Surface → ![](/src/assets/images/Surface_BlendCurve.svg) Blend Curve** option from the menu.
3. Adjust the curve shape in the object Data properties

## Properties

A [Surface Blend Curve](/Surface_BlendCurve "Surface BlendCurve") is derived from the basic [Part Feature](/Part_Feature "Part Feature") (`Part::Feature` class, through the `Part::Spline` subclass), therefore it shares all the latter's properties.

In addition to the properties described in [Part Feature](/Part_Feature "Part Feature"), the Surface Blend Curve has the following properties in the [property editor](/Property_editor "Property editor").

### Data

Blend Curve

- Data**Start Edge** (`LinkSub`): First input edge.
- Data**Start Continuity** (`Integer`): Geometric continuity value
- Data**Start Parameter** (`Float`): Normalized parameter along edge; from `0.0`(edge start) to `1.0`(edge end).
- Data**Start Size** (`Float`): Size of the tangent.
- Data**End Edge** (`LinkSub`): Second input edge.
- Data**End Continuity** (`Integer`): Geometric continuity value
- Data**End Parameter** (`Float`): Normalized parameter along edge; from `0.0`(edge start) to `1.0`(edge end).
- Data**End Size** (`Float`): Size of the tangent.

### View

Base

- View**Control Points** (`Bool`): it defaults to `false`; if set to `true`, it will show an overlay with the control points of the curve.

## Scripting

_See also:_ [FreeCAD Scripting Basics](/FreeCAD_Scripting_Basics "FreeCAD Scripting Basics").

The Blend Curve tool can be used in [macros](/Macros "Macros") and from the [Python](/Python "Python") console by adding the `Surface::FeatureBlendCurve` object.

- The edges to be used to define the curve must be assigned as [LinkSub](/FeaturePython_Custom_Properties#App::PropertyLinkSub "FeaturePython Custom Properties") to the `StartEdge` and `EndEdge` properties of the object.
- All objects with edges need to be computed before they can be used as input for the properties of the Blend Curve object.

```
import FreeCAD as App
import Draft

doc = App.newDocument()

points1 = [App.Vector(-20, -20, 0), App.Vector(-20, -8, 0), App.Vector(-17, 7, 0), App.Vector(-18, 25, 0)]
obj1 = Draft.make_bspline(points1)

points2 = [App.Vector(60, 26, 0), App.Vector(37, 4, 0), App.Vector(33, -20, 0)]
obj2 = Draft.make_bspline(points2)

doc.recompute()

bcurve = doc.addObject("Surface::FeatureBlendCurve","BlendCurve")
bcurve.StartEdge = (obj1, 'Edge1')
bcurve.EndEdge = (obj2, 'Edge1')
bcurve.EndParameter = 1.00
bcurve.StartSize = -5.00
bcurve.EndSize = -5.00

doc.recompute()

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Surface_BlendCurve/en&oldid=1463817>"
