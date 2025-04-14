---
title: Part Part2DObject
---

## Introduction

![](/images/Tree_Part2D.svg)

A [Part Part2DObject](/Part_Part2DObject "Part Part2DObject"), or formally a `Part::Part2DObject`, is a simple element with a [topological shape](/Part_TopoShape "Part TopoShape") that can be displayed in the [3D view](/3D_view "3D view").

The `Part::Part2DObject` is derived from the [Part Feature](/Part_Feature "Part Feature"), but is specialized for 2D geometry, given that its shape will lie on a plane. This plane is defined by its Data**Placement** property (position, normal, and rotation). However, the plane can also be defined by supporting geometrical elements, such as the plane created by three arbitrary vertices, or a face of a solid body.

![](/images/FreeCAD_core_objects.svg)

Simplified diagram of the relationships between the core objects in FreeCAD

## Usage

The [Part Part2DObject](/Part_Part2DObject "Part Part2DObject") is an internal object, so it cannot be created from the graphical interface, only from the [Python console](/Python_console "Python console") as described in the [Scripting](#Scripting) section.

The `Part::Part2DObject` is defined in the [Part Workbench](/Part_Workbench "Part Workbench") but can be used as the base class for [scripted objects](/Scripted_objects "Scripted objects") in all [workbenches](/Workbenches "Workbenches") that produce 2D geometrical shapes. For example, it is the base object for sketches ([Sketcher SketchObject](/Sketcher_SketchObject "Sketcher SketchObject")), and for most objects created with the [Draft Workbench](/Draft_Workbench "Draft Workbench").

Workbenches can add more properties to this basic element to produce an object with complex behavior.

## Properties

See [Property](/Property "Property") for all property types that scripted objects can have.

The [Part Part2DObject](/Part_Part2DObject "Part Part2DObject") (`Part::Part2DObject` class) is derived from the [Part Feature](/Part_Feature "Part Feature") (`Part::Feature` class) and inherits all its properties.

The Part Part2DObject also has the following additional properties in the [property editor](/Property_editor "Property editor"). Hidden properties can be shown by using the **Show hidden** command in the context menu of the [property editor](/Property_editor "Property editor").

### Data

Attachment

- Data (Hidden)**Attacher Type** (`String`): class name of the attach engine object driving the attachment. It defaults to `Attacher::AttachEnginePlane`.
- Data**Support** (`LinkSubList`): it is the plane or face supporting the 2D geometry. It defaults to an empty list `[]`.
- Data**Map Mode** (`Enumeration`): `Deactivated` by default. This property determines a plane which the object will use as reference for 2D geometry. Clicking on the ellipsis ... (three dots), to the right of the entry field starts the [Part EditAttachment](/Part_EditAttachment "Part EditAttachment") command that allows selecting the supporting plane by picking different elements in the [3D view](/3D_view "3D view"). The different modes are: `Deactivated`, `Translate origin`, `Object's XY`, `Object's XZ`, `Object's YZ`, `Plane face`, `Tangent to surface`, `Normal to edge`, `Frenet NB`, `Frenet TN`, `Frenet TB`, `Concentric`, `Revolution section`, `Plane by 3 points`, `Normal to 3 points`, `Folding`, `Inertia 2-3`, `Align O-N-X`, `Align O-N-Y`, `Align O-X-Y`, `Align O-X-N`, `Align O-Y-N`, `Align O-Y-X`.
- Data**Map Reversed** (`Bool`): it defaults to `false`; if it is `true` the Z direction will be reversed. For example, a [sketch](/Sketch "Sketch") will be flipped upside down. Hidden if Data**Map Mode** is `Deactivated`.
- Data (Hidden)**Map Path Parameter** (`Float`): sets point of curve to map a [sketch](/Sketch "Sketch") to. It goes from `0` to `1`, which corresponds to the `start` and `end`. It defaults to `0`.
- Data**Attachment Offset** (`Placement`): the position of the object in the [3D view](/3D_view "3D view"), with respect to the attachment object's placement. The placement is defined by a `Base` point (vector), and a `Rotation` (axis and angle). See [Placement](/Placement "Placement"). Hidden if Data**Map Mode** is `Deactivated`.

## Scripting

_See also:_ [FreeCAD Scripting Basics](/FreeCAD_Scripting_Basics "FreeCAD Scripting Basics") and [scripted objects](/Scripted_objects "Scripted objects").

See [Part Feature](/Part_Feature "Part Feature") for the general information on adding objects to the document.

A Part2DObject is created with the `addObject()` method of the document.

```
import FreeCAD as App

doc = App.newDocument()
obj = App.ActiveDocument.addObject("Part::Part2DObject", "Name")
obj.Label = "Custom label"

```

For [Python](/Python "Python") subclassing you should create a `Part::Part2DObjectPython` object.

```
import FreeCAD as App

doc = App.newDocument()
obj = App.ActiveDocument.addObject("Part::Part2DObjectPython", "Name")
obj.Label = "Custom label"

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Part_Part2DObject/en&oldid=1560754>"
