---
title: Part CoordinateSystem
---

|                                                                                                                                                                  |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Part CoordinateSystem                                                                                                                                            |
| Menu location                                                                                                                                                    |
| _None_                                                                                                                                                           |
| Workbenches                                                                                                                                                      |
| All                                                                                                                                                              |
| Default shortcut                                                                                                                                                 |
| _None_                                                                                                                                                           |
| Introduced in version                                                                                                                                            |
| 1.1                                                                                                                                                              |
| See also                                                                                                                                                         |
| [Part DatumPlane](/Part_DatumPlane "Part DatumPlane"), [Part DatumLine](/Part_DatumLine "Part DatumLine"), [Part DatumPoint](/Part_DatumPoint "Part DatumPoint") |
|                                                                                                                                                                  |

## Description

The **Part CoordinateSystem** command creates a coordinate system object that can be attached to other objects. A coordinate system is one of several [datum objects](/Std_Base#Part_Datums "Std Base"). A datum object is typically used to attach multiple other objects to. If the position or orientation of a datum object changes, all objects attached to it will follow.

A datum object can also provide a geometric reference for a feature or operation. Depending on its type it may for example be used as a direction vector, a rotation axis or a mirror plane.

## Usage

1. Optionally activate the correct container, for example a ![](/src/assets/images/PartDesign_Body.svg) [PartDesign Body](/PartDesign_Body "PartDesign Body"), a ![](/src/assets/images/Std_Part.svg) [Std Part](/Std_Part "Std Part") or an ![](/src/assets/images/Assembly_CreateAssembly.svg) [Assembly](/Assembly_CreateAssembly "Assembly CreateAssembly"). If multiple containers are active, the datum object is added to the active container that was created first.
2. Optionally select the geometry the datum object should be attached to.
3. Press the ![](/src/assets/images/Part_CoordinateSystem.svg) [Create coordinate system](/Part_CoordinateSystem "Part CoordinateSystem") button.
4. The **Attachment** task panel opens.
5. If no geometry has been selected: optionally press the OK button to finish the command without attaching the datum object.
6. For further steps see [Part EditAttachment](/Part_EditAttachment#Usage "Part EditAttachment"). Continue from step 7 on that page if geometry has been preselected.

## Notes

- A datum object can also be put into a container by dropping it on the container in the [Tree view](/Tree_view "Tree view").
- The attachment of a datum object can be changed by editing its Data**Map Mode** property. See [Part EditAttachment](/Part_EditAttachment#Usage "Part EditAttachment").
- The [Part DatumPlane](/Part_DatumPlane "Part DatumPlane") and [Part DatumLine](/Part_DatumLine "Part DatumLine") objects, and the planes and axes of the Part CoordinateSystem object are infinite.

## Properties

See also: [Property editor](/Property_editor "Property editor").

A Part CoordinateSystem object, formally a `Part::LocalCoordinateSystem` object, is derived from an `App::LocalCoordinateSystem` object. All its properties are inherited except those listed under Attachment.

### Data

Attachment

The object has the same attachment properties as a [Part Part2DObject](/Part_Part2DObject#Data "Part Part2DObject").

Base

- Data (hidden)**Origin Features** (`LinkList`): The axes, planes and origin point controlled by the coordinate system.
- Data**Placement** (`Placement`): See [Part Feature](/Part_Feature#Data "Part Feature").
- Data**Label** (`String`): Idem.
- Data (hidden)**Label2** (`String`): Idem.
- Data (hidden)**Expression Engine** (`ExpressionEngine`): Idem.
- Data (hidden)**Visibility** (`Bool`): Idem.
- Data**Group** (`LinkList`):
- Data (hidden)**\_ Group Touched** (`Bool`):

### View

Display Options

- View**Display Mode** (`Enumeration`): See [Part Feature](/Part_Feature#View "Part Feature").
- View**Show In Tree** (`Bool`): Idem.
- View**Visibility** (`Bool`): Idem.

Selection

- View**On Top When Selected** (`Enumeration`): See [Part Feature](/Part_Feature#View "Part Feature").
- View**Selection Style** (`Enumeration`): Idem.

## Scripting

```
import FreeCAD as App

doc = App.newDocument()

body = doc.addObject("PartDesign::Body", "Body")
lcs = doc.addObject("Part::LocalCoordinateSystem", "LCS")
lcs.Visibility = True
body.addObjects([lcs])

orig = body.Origin
plane = next(f for f in orig.OriginFeatures if f.Role == "XZ_Plane")
lcs.AttachmentSupport = [(orig, (plane.Name + ".", ))]
lcs.AttachmentOffset = App.Placement(App.Vector(), App.Vector(1, 0, 0), 45)
lcs.MapMode = "FlatFace"

doc.recompute()

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Part_CoordinateSystem/en&oldid=1538012>"
