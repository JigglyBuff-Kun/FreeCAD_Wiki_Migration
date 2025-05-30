---
title: Díl Klín
---
|  |
| --- |
| Díl\_Klín |
| Umístění Menu |
| Díl -> [Díl Vytváření zákl.geom.tvarů](/Part_CreatePrimitives/cs "Part CreatePrimitives/cs") -> Klín |
| Pracovní stoly |
| [Modul Díl](/Part_Workbench/cs "Part Workbench/cs") |
| Výchozí zástupce |
| *Nikdo* |
| Představen ve verzi |
| - |
| Viz také |
| [Díl Vytváření zákl.geom.tvarů](/Part_CreatePrimitives/cs "Part CreatePrimitives/cs") |
|  |

## Description

Vytváří parametrický objekt Klín. Defaultně se za základnu považuje větší plocha a menší je vrchol.

![](/images/Part_Wedge_Example.png)

## Usage

See [Part Primitives](/Part_Primitives#Usage "Part Primitives").

## Example

![](/images/Part_Wedge_Scripting_Example.png)

Part Wedge from the scripting example

A Part Wedge object created with the [scripting example](#Scripting) below is shown here.

## Notes

* The values of the coordinates of the wedge must be such that a valid solid can be create. This means that the front and rear base shapes can both be single edges, but not if they are parallel. And if one of the base shapes is a vertex the other shape must be a rectangular face.

## Properties

See also: [Property editor](/Property_editor "Property editor").

A Part Wedge object is derived from a [Part Feature](/Part_Feature "Part Feature") object and inherits all its properties. It also has the following additional properties:

### Data

Attachment

The object has the same attachment properties as a [Part Part2DObject](/Part_Part2DObject#Data "Part Part2DObject").

Wedge

* Údaje**Xmin** (`Distance`): The lowest X coordinate of the front face of the wedge. The default is `0mm`.
* Údaje**Ymin** (`Distance`): The Y coordinate of the front face of the wedge. The default is `0mm`.
* Údaje**Zmin** (`Distance`): The lowest Z coordinate of the front face of the wedge. The default is `0mm`.
* Údaje**X2min** (`Distance`): The lowest X coordinate of the rear face of the wedge. The default is `2mm`.
* Údaje**Z2min** (`Distance`): The lowest Z coordinate of the rear face of the wedge. The default is `2mm`.
* Údaje**Xmax** (`Distance`): The highest X coordinate of the front face of the wedge. The default is `10mm`.
* Údaje**Ymax** (`Distance`): The Y coordinate of the rear face of the wedge. The default is `10mm`.
* Údaje**Zmax** (`Distance`): The highest Z coordinate of the front face of the wedge. The default is `10mm`.
* Údaje**X2max** (`Distance`): The highest X coordinate of the rear face of the wedge. The default is `8mm`.
* Údaje**Z2max** (`Distance`): The highest Z coordinate of the rear face of the wedge. The default is `8mm`.

## Scripting

See also: [Autogenerated API documentation](https://freecad.github.io/SourceDoc/), [Part scripting](/Part_scripting "Part scripting") and [FreeCAD Scripting Basics](/FreeCAD_Scripting_Basics "FreeCAD Scripting Basics").

A Part Wedge can be created with the `addObject()` method of the document:

```
wedge = FreeCAD.ActiveDocument.addObject("Part::Wedge", "myWedge")

```

* Where `"myWedge"` is the name for the object.
* The function returns the newly created object.

Example:

```
import FreeCAD as App

doc = App.activeDocument()

wedge = doc.addObject("Part::Wedge", "myWedge")
wedge.Xmin = 1
wedge.Ymin = 2
wedge.Zmin = 3
wedge.X2min = 4
wedge.Z2min = 6
wedge.Xmax = 15
wedge.Ymax = 20
wedge.Zmax = 55
wedge.X2max = 10
wedge.Z2max = 12
wedge.Placement = App.Placement(App.Vector(1, 2, 3), App.Rotation(75, 60, 30))

doc.recompute()

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Part_Wedge/cs&oldid=1106545>"