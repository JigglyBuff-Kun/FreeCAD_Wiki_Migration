---
title: Kreslení Kreslení2Náčrt
---
|  |
| --- |
| Kreslení Kreslení2Náčrt |
| Umístění Menu |
| Kreslení -> Nákres do Náčrtu |
| Pracovní stoly |
| [Kreslení](/Draft_Workbench/cs "Draft Workbench/cs"), [Architektura](/Arch_Workbench/cs "Arch Workbench/cs") |
| Výchozí zástupce |
| *Nikdo* |
| Představen ve verzi |
| - |
| Viz také |
| *Nikdo* |
|  |

## Description

## Popis

Tento nástroj konvertuje [objekty Kreslení](/Draft_Workbench/cs "Draft Workbench/cs") do [objektu Náčrt](/Sketcher_Workbench/cs "Sketcher Workbench/cs") a naopak.

![](/images/Draft_Draft2Sketch_example.png)

![](/images/Draft_Draft2Sketch_example.jpg)

## Usage

## Použití

1. Vyberte objekt Kreslení nebo Náčrt
2. Stiskněte tlačítko ![](/images/Draft_Draft2Sketch.png) Kreslení2Náčrt

## Notes

* Non-Draft objects that are totally planar can also be converted.
* The command can only handle objects made up out of straight lines, circular arcs, elliptical arcs, B-Splines and Bézier curves.
* [Draft BezCurves](/Draft_BezCurve "Draft BezCurve") will be approximated by [Sketcher BSplines](/Sketcher_CreateBSpline "Sketcher CreateBSpline").
* The external [KicadStepUp Workbench](/KicadStepUp_Workbench "KicadStepUp Workbench") contains a command to convert a [Draft BSpline](/Draft_BSpline "Draft BSpline") into a series of [Sketcher Arcs](/Sketcher_CreateArc "Sketcher CreateArc"). For more information see the forum topic [BSplines to Shape2DView and Sketcher](https://forum.freecadweb.org/viewtopic.php?f=9&t=25082).
* [This other forum topic](https://forum.freecadweb.org/viewtopic.php?f=3&t=58781#p505207) contains a macro for such a conversion.

## Scripting

## Skriptování

Není dostupné, podívejte se na dokumentaci [Modulu Náčrt](/Sketcher_Workbench/cs "Sketcher Workbench/cs") jak vytvořit náčrt pomocí skriptování.

To convert objects to a sketch use the `make_sketch` method ([introduced in 0.19](/Release_notes_0.19 "Release notes 0.19")) of the Draft module. This method replaces the deprecated `makeSketch` method.

```
sketch = make_sketch(objects_list, autoconstraints=False, addTo=None, delete=False, name="Sketch", radiusPrecision=-1, tol=1e-3)

```

* `objects_list` contains the objects to be converted. It is either a single object or a list of objects. `Draft` objects, `Part::Feature` objects and `Part.Shape` objects are supported.
* If `autoconstraints` is `True` coincident constraints are added to nodes belonging to the same source object.
* `addTo` is the existing sketch object the geometry is added to. If not supplied a new sketch is created.
* If `delete` is `True` the source objects are deleted.
* `name` is the name for the new sketch.
* `radiusPrecision` indicates how radius constraints should be handled:
  + Use `-1` to disable radius constraints.
  + Use `0` to add individual radius constraints.
  + Use a positive number to round radii according to this precision, and to add equal constraints between curves with equal radii.
* `tol` is the tolerance used to check if shapes are planar and co-planar. Use `-1` for a strict analysis.
* `sketch` is returned with the sketch object.

To convert a sketch to Draft objects use the `draftify` method of the Draft module.

```
draftify(objectslist, makeblock=False, delete=True)

```

* `objectslist` contains the objects to be converted. It is either a single object or a list of objects.
* If `makeblock` is `True` the converted objects are grouped in a `Part::Part2DObject`.
* If `delete` is `True` the source objects are deleted.

Example:

```
import FreeCAD as App
import Draft

doc = App.newDocument()

rectangle = Draft.make_rectangle(2000, 1000)
circle = Draft.make_circle(500)
doc.recompute()

sketch_from_draft = Draft.make_sketch([rectangle, circle], autoconstraints=True, delete=False, radiusPrecision=0)
doc.recompute()

draft_from_sketch = Draft.draftify(sketch_from_draft, delete=False)
doc.recompute()

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Draft_Draft2Sketch/cs&oldid=1008279>"