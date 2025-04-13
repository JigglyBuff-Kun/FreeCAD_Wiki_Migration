---
title: Part DatumPoint
---
|  |
| --- |
| Part DatumPoint |
| Menu location |
| *None* |
| Workbenches |
| All |
| Default shortcut |
| *None* |
| Introduced in version |
| 1.1 |
| See also |
| [Part CoordinateSystem](/Part_CoordinateSystem "Part CoordinateSystem"), [Part DatumPlane](/Part_DatumPlane "Part DatumPlane"), [Part DatumLine](/Part_DatumLine "Part DatumLine") |
|  |

## Description

The **Part DatumPoint** command creates a datum point object that can be attached to other objects. A datum point is one of several [datum objects](/Std_Base#Part_Datums "Std Base"). A datum object is typically used to attach multiple other objects to. If the position or orientation of a datum object changes, all objects attached to it will follow.

## Usage

See [Part CoordinateSystem](/Part_CoordinateSystem#Usage "Part CoordinateSystem").

## Notes

See [Part CoordinateSystem](/Part_CoordinateSystem#Notes "Part CoordinateSystem").

## Properties

See also: [Property editor](/Property_editor "Property editor").

A `Part::DatumPoint` object is derived from an `App::Point` object. All its properties are inherited except those listed under Attachment.

### Data

See [Part DatumPlane](/Part_DatumPlane#Data "Part DatumPlane").

### View

See [Part DatumPlane](/Part_DatumPlane#View "Part DatumPlane").

## Scripting

```
import FreeCAD as App

doc = App.newDocument()
obj = doc.addObject("Part::DatumPoint", "DatumPoint")
doc.recompute()

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Part_DatumPoint/en&oldid=1537376>"