---
title: Part DatumLine
---
|  |
| --- |
| Part DatumLine |
| Menu location |
| *None* |
| Workbenches |
| All |
| Default shortcut |
| *None* |
| Introduced in version |
| 1.1 |
| See also |
| [Part CoordinateSystem](/Part_CoordinateSystem "Part CoordinateSystem"), [Part DatumPlane](/Part_DatumPlane "Part DatumPlane"), [Part DatumPoint](/Part_DatumPoint "Part DatumPoint") |
|  |

## Description

The **Part DatumLine** command creates a datum line object that can be attached to other objects. A datum line is one of several [datum objects](/Std_Base#Part_Datums "Std Base"). A datum object is typically used to attach multiple other objects to. If the position or orientation of a datum object changes, all objects attached to it will follow.

A datum object can also provide a geometric reference for a feature or operation. Depending on its type it may for example be used as a direction vector, a rotation axis or a mirror plane.

## Usage

See [Part CoordinateSystem](/Part_CoordinateSystem#Usage "Part CoordinateSystem").

## Notes

See [Part CoordinateSystem](/Part_CoordinateSystem#Notes "Part CoordinateSystem").

## Properties

See also: [Property editor](/Property_editor "Property editor").

A `Part::DatumLine` object is derived from an `App::Line` object. All its properties are inherited except those listed under Attachment.

### Data

See [Part DatumPlane](/Part_DatumPlane#Data "Part DatumPlane").

### View

See [Part DatumPlane](/Part_DatumPlane#View "Part DatumPlane").

## Scripting

```
import FreeCAD as App

doc = App.newDocument()
obj = doc.addObject("Part::DatumLine", "DatumLine")
doc.recompute()

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Part_DatumLine/en&oldid=1538020>"