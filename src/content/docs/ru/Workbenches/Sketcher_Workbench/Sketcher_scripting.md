---
title: Программирование в Sketcher
---
## Creating a SketchObject using Python

We create a SketchObject like this:

```
import FreeCAD as App
import Part
import Sketcher

doc = App.newDocument()  

sketch = doc.addObject("Sketcher::SketchObject", "Sketch")
sketch.addGeometry(Part.LineSegment(App.Vector(1.2, 1.8, 0),
                                    App.Vector(5.2, 5.3, 0)), False)
sketch.addGeometry(Part.LineSegment(App.Vector(6.5, 1.5, 0),
                                    App.Vector(10.2, 5.0, 0)), False)
sketch.addGeometry(Part.LineSegment(App.Vector(12.2, 1.0, 0),
                                    App.Vector(15.4, 5.0, 0)), False)

doc.recompute()

```

It also adds three [lines](/Topological_data_scripting#Line "Topological data scripting") in the newly created Sketch.

## Создание ограничений через Python

A geometric constraint ![](/images/Sketcher_ConstrainCoincident.svg) ![](/images/Sketcher_ConstrainPointOnObject.svg) ![](/images/Sketcher_ConstrainVertical.svg) ![](/images/Sketcher_ConstrainHorizontal.svg) ![](/images/Sketcher_ConstrainParallel.svg) ![](/images/Sketcher_ConstrainPerpendicular.svg) ![](/images/Sketcher_ConstrainTangent.svg) ![](/images/Sketcher_ConstrainEqual.svg) ![](/images/Sketcher_ConstrainSymmetric.svg) and ![](/images/Sketcher_ConstrainBlock.svg) can be created from macros and from the Python console by using the following command:

```
sketch.addConstraint(Sketcher.Constraint(ConstraintType, EdgeOrPartOfEdge…))

```

A dimensional constraint ![](/images/Sketcher_ConstrainLock.svg) ![](/images/Sketcher_ConstrainDistanceX.svg) ![](/images/Sketcher_ConstrainDistanceY.svg) ![](/images/Sketcher_ConstrainDistance.svg) ![](/images/Sketcher_ConstrainRadius.svg) ![](/images/Sketcher_ConstrainDiameter.svg) ![](/images/Sketcher_ConstrainAngle.svg) and the special constraint ![](/images/Sketcher_ConstrainSnellsLaw.svg) [Snell's law](/Sketcher_ConstrainSnellsLaw "Sketcher ConstrainSnellsLaw") can be created from macros and from the Python console by using the following command:

```
sketch.addConstraint(Sketcher.Constraint(DimensionalConstraintType, EdgeOrPartOfEdge…, App.Units.Quantity("float_value unit")))

```

e.g.

```
sketch.addConstraint(Sketcher.Constraint(DimensionalConstraintType, EdgeOrPartOfEdge…, App.Units.Quantity("123.0 mm")))

```

The first argument `ConstraintType` is described below in [Constraint types](#Constraint_types).

A constraint can take up to six arguments which are edges or indicate which sub-part of an edge is used by the constraint. See the documentation of individual constraints for details on what combinations of edges and sub-parts of edges can be passed as arguments.
The main issue with this function is to identify correctly the line number and the vertex number of the lines you want to process.
The sections below describe how to [identify the numbering of a line](#Identifying_the_numbering_of_a_line), and how to [Identify the numbering of the sub-parts of a line](#Identifying_the_numbering_of_the_sub-parts_of_a_line).

## Типы ограничений

For geometric constraints, the first argument is one of the following. See the corresponding feature page for the possible combinations of arguments allowed for each constraint.

| Code | Icon | Feature |
| --- | --- | --- |
| `"Coincident"` |  | [Coincident](/Sketcher_ConstrainCoincident "Sketcher ConstrainCoincident") |
| `"PointOnObject"` |  | [Point On Object](/Sketcher_ConstrainPointOnObject "Sketcher ConstrainPointOnObject") |
| `"Vertical"` |  | [Vertical](/Sketcher_ConstrainVertical "Sketcher ConstrainVertical") |
| `"Horizontal"` |  | [Horizontal](/Sketcher_ConstrainHorizontal "Sketcher ConstrainHorizontal") |
| `"Parallel"` |  | [Parallel](/Sketcher_ConstrainParallel "Sketcher ConstrainParallel") |
| `"Perpendicular"` |  | [Perpendicular](/Sketcher_ConstrainPerpendicular "Sketcher ConstrainPerpendicular") |
| `"Tangent"` |  | [Tangent](/Sketcher_ConstrainTangent "Sketcher ConstrainTangent") |
| `"Equal"` |  | [Equal](/Sketcher_ConstrainEqual "Sketcher ConstrainEqual") |
| `"Symmetric"` |  | [Symmetric](/Sketcher_ConstrainSymmetric "Sketcher ConstrainSymmetric") |
| `"Block"` |  | [Block](/Sketcher_ConstrainBlock "Sketcher ConstrainBlock") |

For dimensional constraints, the first argument is one of the following. See the corresponding feature page for the possible combinations of arguments allowed for each constraint.

| Code | Icon | Feature |
| --- | --- | --- |
| `"DistanceX"` |  | [Horizontal distance](/Sketcher_ConstrainDistanceX "Sketcher ConstrainDistanceX") |
| `"DistanceY"` |  | [Vertical distance](/Sketcher_ConstrainDistanceY "Sketcher ConstrainDistanceY") |
| `"Distance"` |  | [Distance](/Sketcher_ConstrainDistance "Sketcher ConstrainDistance") |
| `"Radius"` |  | [Radius](/Sketcher_ConstrainRadius "Sketcher ConstrainRadius") |
| `"Diameter"` |  | [Diameter](/Sketcher_ConstrainDiameter "Sketcher ConstrainDiameter") |
| `"Angle"` |  | [Angle](/Sketcher_ConstrainAngle "Sketcher ConstrainAngle") |
| `"AngleViaPoint"` |  | [Angle](/Sketcher_ConstrainAngle "Sketcher ConstrainAngle") |

The ![](/images/Sketcher_ConstrainSnellsLaw.svg) [Snell's law](/Sketcher_ConstrainSnellsLaw "Sketcher ConstrainSnellsLaw") constraints behave like dimensional contraints for the purposes of scripting. Again, see the corresponding feature page for the possible combinations of arguments allowed for each constraint.

| Code | Icon | Feature |
| --- | --- | --- |
| `"SnellsLaw"` |  | [Snell's law](/Sketcher_ConstrainSnellsLaw "Sketcher ConstrainSnellsLaw") |

The ![](/images/Sketcher_ConstrainLock.svg) [Lock](/Sketcher_ConstrainLock "Sketcher ConstrainLock") constraint is a GUI command which creates a ![](/images/Sketcher_ConstrainDistanceX.svg) [Horizontal distance](/Sketcher_ConstrainDistanceX "Sketcher ConstrainDistanceX") and a ![](/images/Sketcher_ConstrainDistanceY.svg) [Vertical distance](/Sketcher_ConstrainDistanceY "Sketcher ConstrainDistanceY") constraint, it is not a constraint of its own.

## Identifying the numbering of a line

I have drawn three lines as shown in the following figure.

![](/images/PartDesignConstraintPointOnPointScriptingFigure1.jpg)

By moving the cursor of the mouse above the line you can see the line number at the bottom left of the FreeCAD windows, see next figure.

![](/images/PartDesignConstraintPointOnPointScriptingFigure2.jpg)

Unfortunately the numbering displayed on the FreeCAD windows start from 1 whereas the numbering of the line used to script start from 0: this means that you have to subtract one each time you want to refer to a line.

Positive numbers indicate sketch edges (straight lines, circles, conics, B-splines, and so on). The following values can be used to denote elements that are not sketch edges:

* `-1` denotes the horizontal x axis
* `-2` denotes the vertical y axis
* `-n` denotes the external geometry element number `n-3` (e.g. the external geometry element with index 0 in the flattened list `sketch.ExternalGeometry` would be denoted by -3, the following element in the flattened list would be -4 and so on).

## Identifying the numbering of the sub-parts of a line

When qualifying which part of a line is affected by a constraint, the following values can be used:

* `0` to indicate that the constraint affects the entire edge.
* `1` to indicate that the constraint affects the start point of the edge (a full circle has no starting point).
* `2` to indicate that the constraint affects the endpoint of the edge.
* `3` to indicate that the constraint affects the center point of the edge. Can only be used for circles, circular arcs, ellipses and elliptical arcs.
* `n` to indicate that the constraint affects the n-th pole of a B-spline.

The vertices indicated by 1 and 2 are numbered according to their order of creation. To find out the order of their creation (If you have a lot of lines, you cannot remember which vertex you have created first), you just have to move the cursor of your mouse above the two vertices of one line, see following figure.

![](/images/PartDesignConstraintPointOnPointScriptingFigure3.jpg)

If you read e.g. 4 and 5, it means that the vertex with the lower number (4 in this example) will be referenced by using the number 1 (first in the script command and the vertex with the higher number (5 in this example) will be referenced by using the number 2 in the script command.

## Пример

Let us take the previous example of the three lines. The subsequent figure indicates the numbering of each line and their vertices according to the convention for scripting.

![](/images/PartDesignConstraintPointOnPointScriptingFigure3Bis.jpg)

**blue text:** numbering of line, **black text:** numbering of vertices

The command `sketch.addConstraint(Sketcher.Constraint("Coincident", 1, 2, 2, 1))` yields following result:

![](/images/PartDesignConstraintPointOnPointScriptingFigure4.jpg)

The full code to draw the three lines and add a Coincident constraint on two points from two lines is like this:

```
import FreeCAD as App
import Part
import Sketcher

doc = App.newDocument()  

sketch = doc.addObject("Sketcher::SketchObject", "Sketch")
sketch.addGeometry(Part.LineSegment(App.Vector(1.2, 1.8, 0),
                                    App.Vector(5.2, 5.3, 0)), False)
sketch.addGeometry(Part.LineSegment(App.Vector(6.5, 1.5, 0),
                                    App.Vector(10.2, 5.0, 0)), False)
sketch.addGeometry(Part.LineSegment(App.Vector(12.2, 1.0, 0),
                                    App.Vector(15.4, 5.0, 0)), False)
sketch.addConstraint(Sketcher.Constraint("Coincident", 1, 2, 2, 1))

doc.recompute()

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Sketcher_scripting/ru&oldid=1419115>"