---
title: Part DatumPlane
---
|  |
| --- |
| Part DatumPlane |
| Menu location |
| *None* |
| Workbenches |
| All |
| Default shortcut |
| *None* |
| Introduced in version |
| 1.1 |
| See also |
| [Part CoordinateSystem](/Part_CoordinateSystem "Part CoordinateSystem"), [Part DatumLine](/Part_DatumLine "Part DatumLine"), [Part DatumPoint](/Part_DatumPoint "Part DatumPoint") |
|  |

## Description

The **Part DatumPlane** command creates a datum plane object that can be attached to other objects. A datum plane is one of several [datum objects](/Std_Base#Part_Datums "Std Base"). A datum object is typically used to attach multiple other objects to. If the position or orientation of a datum object changes, all objects attached to it will follow.

A datum object can also provide a geometric reference for a feature or operation. Depending on its type it may for example be used as a direction vector, a rotation axis or a mirror plane.

## Usage

See [Part CoordinateSystem](/Part_CoordinateSystem#Usage "Part CoordinateSystem").

## Notes

See [Part CoordinateSystem](/Part_CoordinateSystem#Notes "Part CoordinateSystem").

## Properties

See also: [Property editor](/Property_editor "Property editor").

A `Part::DatumPlane` object is derived from an `App::Plane` object. All its properties are inherited except those listed under Attachment.

### Data

Attachment

The object has the same attachment properties as a [Part Part2DObject](/Part_Part2DObject#Data "Part Part2DObject").

Base

* Data**Role** (`String`): Role of the datum in the coordinate system.
* Data**Placement** (`Placement`): See [Part Feature](/Part_Feature#Data "Part Feature").
* Data**Label** (`String`): Idem.
* Data (hidden)**Label2** (`String`): Idem.
* Data (hidden)**Expression Engine** (`ExpressionEngine`): Idem.
* Data (hidden)**Visibility** (`Bool`): Idem.

### View

Display Options

* View**Bounding Box** (`Bool`): See [Part Feature](/Part_Feature#View "Part Feature").
* View**Display Mode** (`Enumeration`): Idem.
* View**Show In Tree** (`Bool`): Idem.
* View**Visibility** (`Bool`): Idem.

Object Style

* View**Shape Appearance** (`MaterialList`): See [Part Feature](/Part_Feature#View "Part Feature").
* View**Transparency** (`Percent`): Idem.

Selection

* View**On Top When Selected** (`Enumeration`): See [Part Feature](/Part_Feature#View "Part Feature").
* View**Selectable** (`Bool`): Idem.
* View**Selection Style** (`Enumeration`): Idem.

## Scripting

```
import FreeCAD as App

doc = App.newDocument()
obj = doc.addObject("Part::DatumPlane", "DatumPlane")
doc.recompute()

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Part_DatumPlane/en&oldid=1538027>"