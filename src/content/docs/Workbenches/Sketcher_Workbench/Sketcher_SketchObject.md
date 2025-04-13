---
title: Sketcher SketchObject
---

## Introduction

![](/src/assets/images/Sketcher_Sketch.svg)

A [Sketcher SketchObject](/Sketcher_SketchObject "Sketcher SketchObject"), or formally a `Sketcher::SketchObject`, is the base element to create 2D objects with the [Sketcher Workbench](/Sketcher_Workbench "Sketcher Workbench").

The `Sketcher::SketchObject` is derived from the [Part Part2DObject](/Part_Part2DObject "Part Part2DObject"), which means it is a [Part Feature](/Part_Feature "Part Feature") object specialized for 2D geometry. Like the Part2DObject, the SketchObject can be attached to planes and faces. In addition, the SketchObject can handle geometrical constraints.

![](/src/assets/images/FreeCAD_core_objects.svg)

Simplified diagram of the relationships between the core objects in FreeCAD

## Usage

See [Sketcher NewSketch](/Sketcher_NewSketch "Sketcher NewSketch").

## Properties

See [Property](/Property "Property") for all property types that scripted objects can have.

The [Sketcher SketchObject](/Sketcher_SketchObject "Sketcher SketchObject") (`Sketcher::SketchObject` class) is derived from the [Part Part2DObject](/Part_Part2DObject "Part Part2DObject") (`Part::Part2DObject` class) and inherits all its properties.

The Sketcher SketchObject also has the following additional properties in the [property editor](/Property_editor "Property editor"). Hidden properties can be shown by using the **Show hidden** command in the context menu of the [property editor](/Property_editor "Property editor").

### Data

Sketch

- Data (Hidden)**Geometry** (`GeometryList`): a list of Part geometries that exist inside the sketch.
- Data**Constraints**: named constraints, if they exist; otherwise it is an empty list `[]`.
- Data**External Geometry** (`LinkSubList`): a list of Part geometries outside this Sketch that are used for reference.
- Data (Hidden)**Fully Constrained** (`Bool`): (read-only) if `true` the sketch is fully constrained.

### View

Auto Constraints

- View**Autoconstraints** (`Bool`): if `true` constraints are automatically added when geometry is drawn.
- View**Avoid Redundant** (`Bool`): if `true` redundant auto-constraints are avoided.

Grid

- View**Grid Auto** (`Bool`): if `true` the grid is resized based on the boundingbox of the geometry of the sketch.
- View**Grid Size** (`Length`): the size of the spacing of the local grid lines in the [3D view](/3D_view "3D view"); it defaults to `10 mm`.
- View**Show Grid** (`Bool`): if `true` a grid local to the object will be displayed in the [3D view](/3D_view "3D view"). This grid is independent of the [Draft Grid](/Draft_ToggleGrid "Draft ToggleGrid").

Visibility automation

- View**Editing Workbench** (`String`): name of the workbench to activate when editing the sketch; it defaults to `SketcherWorkbench`.
- View**Force Ortho** (`Bool`): if `true` the camera will be forced to [orthographic view mode](/Std_OrthographicCamera "Std OrthographicCamera") when the sketch is opened.
- View**Hide Dependent** (`Bool`): if `true` all objects that depend on the sketch are hidden when the sketch is opened.
- View**Restore Camera** (`Bool`): if `true` the camera position is saved before opening the sketch, and is restored after closing it.
- View**Section View** (`Bool`): if `true` only (parts of) objects behind the sketch plane are visible while the sketch is being edited.
- View**Show Links** (`Bool`): if `true` all objects used in links to external geometry are shown when the sketch is opened.
- View**Show Support** (`Bool`): if `true` all objects this sketch is attached to are shown when the sketch is opened.
- View (Hidden)**Tempo Vis** (`PythonObject`): a custom class associated with this object, that handles hiding and showing other objects when opening and closing the sketch.

## Scripting

_See also:_ [FreeCAD Scripting Basics](/FreeCAD_Scripting_Basics "FreeCAD Scripting Basics") and [scripted objects](/Scripted_objects "Scripted objects").

See [Part Feature](/Part_Feature "Part Feature") for the general information on adding objects to the document.

A SketchObject is created with the `addObject()` method of the document.

```
import FreeCAD as App

doc = App.newDocument()
obj = App.ActiveDocument.addObject("Sketcher::SketchObject", "Sketch")
obj.Label = "Custom label"

```

For [Python](/Python "Python") subclassing you should create the `Sketcher::SketchObjectPython` object.

```
import FreeCAD as App

doc = App.newDocument()
obj = App.ActiveDocument.addObject("Sketcher::SketchObjectPython", "CustomSketch")
obj.Label = "Custom label"

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Sketcher_SketchObject/en&oldid=1560743>"
