---
title: Díl Bod
---
|  |
| --- |
| Díl Bod |
| Umístění Menu |
| Díl → [Vytváření zákl.geom.tvarů](/Part_CreatePrimitives/cs "Part CreatePrimitives/cs") → Bod |
| Pracovní stoly |
| [Díl](/Part_Workbench/cs "Part Workbench/cs"), [OpenSCAD](/OpenSCAD_Workbench/cs "OpenSCAD Workbench/cs") |
| Výchozí zástupce |
| *Nikdo* |
| Představen ve verzi |
| - |
| Viz také |
| .. |
|  |

## Description

## Popis

Bod (vrchol) základního geometrického tělesa je dostupný z dialogového okna Vytvoření základního geometrického tělesa v pracovní ploše Díl.

## Usage

See [Part Primitives](/Part_Primitives#Usage "Part Primitives").

## Properties

See also: [Property editor](/Property_editor "Property editor").

A Part Point object is derived from a [Part Feature](/Part_Feature "Part Feature") object and inherits all its properties. It also has the following additional properties:

### Data

Attachment

The object has the same attachment properties as a [Part Part2DObject](/Part_Part2DObject#Data "Part Part2DObject").

Base

* Údaje**X** (`Distance`): The X coordinate of the point. The default is `0mm`.
* Údaje**Y** (`Distance`): The Y coordinate of the point. The default is `0mm`.
* Údaje**Z** (`Distance`): The Z coordinate of the point. The default is `0mm`.

## Scripting

See also: [Autogenerated API documentation](https://freecad.github.io/SourceDoc/), [Part scripting](/Part_scripting "Part scripting") and [FreeCAD Scripting Basics](/FreeCAD_Scripting_Basics "FreeCAD Scripting Basics").

A Part Point can be created with the `addObject()` method of the document:

```
point = FreeCAD.ActiveDocument.addObject("Part::Vertex", "myPoint")

```

* Where `"myPoint"` is the name for the object.
* The function returns the newly created object.

Example:

```
import FreeCAD as App

doc = App.activeDocument()

point = doc.addObject("Part::Vertex", "myPoint")
point.X = 1
point.Y = 2
point.Z = 3

doc.recompute()

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Part_Point/cs&oldid=1106702>"