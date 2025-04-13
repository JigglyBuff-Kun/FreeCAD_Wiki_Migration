---
title: Mesh Feature
---

## Introduction

![](/src/assets/images/Mesh_Tree.svg)

A [Mesh Feature](/Mesh_Feature "Mesh Feature") object, or formally a `Mesh::Feature`, is a simple element with an associated [mesh object](/Mesh_MeshObject "Mesh MeshObject") that can be displayed in the [3D view](/3D_view "3D view").

A Mesh Feature is similar conceptually to a [Part Feature](/Part_Feature "Part Feature"); the former is the base object for elements with "mesh" information, while the latter is the base object for elements with "geometrical shape" information.

Please note that the [FEM Workbench](/FEM_Workbench "FEM Workbench") also uses meshes, but it uses a different object, called [FEM FemMeshObject](/FEM_Mesh "FEM Mesh") (`Fem::FemMeshObject` class). This object is not derived from the Mesh Feature and has different properties.

![](/src/assets/images/FreeCAD_core_objects.svg)

Simplified diagram of the relationships between the core objects in FreeCAD

## Usage

Almost all mesh objects created by the commands available in the [Mesh Workbench](/Mesh_Workbench "Mesh Workbench") are [Mesh Features](/Mesh_Feature "Mesh Feature"). The parametric mesh objects created by the [Mesh BuildRegularSolid](/Mesh_BuildRegularSolid "Mesh BuildRegularSolid") command are the only exception. A [Mesh Feature](/Mesh_Feature "Mesh Feature") can also be created from the [Python console](/Python_console "Python console") as described in the [Scripting](#Scripting) section.

The `Mesh::Feature` is defined in the [Mesh Workbench](/Mesh_Workbench "Mesh Workbench") but can be used as the base class for [scripted objects](/Scripted_objects "Scripted objects") in all [workbenches](/Workbenches "Workbenches") that produce 2D and 3D meshes.

A `Mesh::Feature` has simple properties like a [placement](/Placement "Placement"), and visual properties to define the appearance of its edges and faces.

## Properties

See [Property](/Property "Property") for all property types that scripted objects can have.

The [Mesh Feature](/Mesh_Feature "Mesh Feature") (`Mesh::Feature` class) is derived from the basic [App GeoFeature](/App_GeoFeature "App GeoFeature") (`App::GeoFeature` class) and inherits all its properties. It also has several additional properties. Notably a Data**Mesh** property, which stores its [Mesh MeshObject](/Mesh_MeshObject "Mesh MeshObject"). This is the geometry that is shown in the [3D view](/3D_view "3D view").

These are the properties available in the [property editor](/Property_editor "Property editor"). Hidden properties can be shown by using the **Show hidden** command in the context menu of the [property editor](/Property_editor "Property editor").

### Data

Base

- Data (Hidden)**Proxy** (`PythonObject`): a custom class associated with this object. This only exists for the [Python](/Python "Python") version. See [Scripting](#Scripting).
- Data**Mesh** (`MeshKernel`): a [Mesh MeshObject](/Mesh_MeshObject "Mesh MeshObject") class associated with this object. It lists the number of `Points`, `Edges`, and `Faces` of the mesh.
- Data**Placement** (`Placement`): the position of the object in the [3D view](/3D_view "3D view"). The placement is defined by a `Base` point (vector), and a `Rotation` (axis and angle). See [Placement](/Placement "Placement").
  - Data**Angle**: the angle of rotation around the Data**Axis**. By default, it is `0°` (zero degrees).
  - Data**Axis**: the unit vector that defines the axis of rotation for the placement. Each component is a floating point value between `0` and `1`. If any value is above `1`, the vector is normalized so that the magnitude of the vector is `1`. By default, it is the positive Z axis, `(0, 0, 1)`.
  - Data**Position**: a vector with the 3D coordinates of the base point. By default, it is the origin `(0, 0, 0)`.
- Data**Label** (`String`): the user editable name of this object, it is an arbitrary UTF8 string.
- Data (Hidden)**Label2** (`String`): a longer, user editable description of this object, it is an arbitrary UTF8 string that may include newlines. By default, it is an empty string `""`.
- Data (Hidden)**Expression Engine** (`ExpressionEngine`): a list of expressions. By default, it is empty `[]`.
- Data (Hidden)**Visibility** (`Bool`): whether to display the object or not.

### View

Base

- View (Hidden)**Proxy** (`PythonObject`): a custom [viewprovider](/Viewprovider "Viewprovider") class associated with this object. This only exists for the [Python](/Python "Python") version. See [Scripting](#Scripting).

Display Options

- View**Bounding Box** (`Bool`): if it is `true`, the object will show the bounding box in the [3D view](/3D_view "3D view").
- View**Display Mode** (`Enumeration`): `Shaded` (no edges), `Wireframe` (no faces), `Flat Lines` (regular visualization), `Points` (only vertices).
- View**Show In Tree** (`Bool`): if it is `true`, the object appears in the [Tree view](/Tree_view "Tree view"). Otherwise, it is set as invisible.
- View**Visibility** (`Bool`): if it is `true`, the object appears in the [3D view](/3D_view "3D view"); otherwise it is invisible. By default this property can be toggled on and off by pressing the Space bar.

Object Style

- View (Hidden)**Coloring** (`Bool`): it defaults to `false`.
- View**Crease Angle** (`FloatConstraint`):
- View**Lighting** (`Enumeration`): `One side` (default), `Two side`; the illumination comes from two sides or one side in the [3D view](/3D_view "3D view").
- View**Line Color** (`Color`): a tuple of three floating point RGB values `(r,g,b)` to define the color of the edges in the [3D view](/3D_view "3D view"); by default it is `(0.0, 0.0, 0.0)`, which is displayed as `[0,0,0]` on base 255, completely black .
- View**Line Transparency** (`Percent`): an integer from `0` to `100` (a percentage) that determines the level of transparency of the edges in the [3D view](/3D_view "3D view"). A value of `100` indicates completely invisible edges; the edges are invisible but they can still be picked as long as View**Selectable** is `true`.
- View**Line Width** (`FloatConstraint`): a float that determines the width in pixels of the edges in the [3D view](/3D_view "3D view"). It defaults to `1.0`.
- View**Open Edges** (`Bool`): it defaults to `false`.
- View**Point Size** (`FloatConstraint`): similar to View**Line Width**, defines the size of the vertices.
- View**Shape Color** (`Color`): similar to View**Line Color**, defines the color of the faces. It defaults to `(0.8, 0.8, 0.8)`, which is displayed as `[204,204,204]` on base 255, a light gray.
- View (Hidden)**Shape Material** (`Material`): an [App Material](/index.php?title=App_Material&action=edit&redlink=1 "App Material (page does not exist)") associated with this object. By default it is empty.
- View**Transparency** (`Percent`): an integer from `0` to `100` (a percentage) that determines the level of transparency of the faces in the [3D view](/3D_view "3D view"). A value of `100` indicates completely invisible faces; the faces are invisible but they can still be picked as long as View**Selectable** is `true`.

Selection

- View**On Top When Selected** (`Enumeration`): `Disabled` (default), `Enabled`, `Object`, `Element`.
- View**Selectable** (`Bool`): if it is `true`, the object can be picked with the pointer in the [3D view](/3D_view "3D view"). Otherwise, the object cannot be selected until this option is set to `true`.
- View**Selection Style** (`Enumeration`): `Shape` (default), `BoundBox`. If the option is `Shape`, the entire shape (vertices, edges, and faces) will be highlighted in the [3D view](/3D_view "3D view"); if it is `BoundBox` only the bounding box will be highlighted.

## Scripting

_See also:_ [FreeCAD Scripting Basics](/FreeCAD_Scripting_Basics "FreeCAD Scripting Basics") and [scripted objects](/Scripted_objects "Scripted objects").

See [Part Feature](/Part_Feature "Part Feature") for the general information on adding objects to the document.

A Mesh Feature is created with the `addObject()` method of the document.

```
import FreeCAD as App

doc = App.newDocument()
obj = App.ActiveDocument.addObject("Mesh::Feature", "Name")
obj.Label = "Custom label"

```

For [Python](/Python "Python") subclassing you should create the `Mesh::FeaturePython` object.

```
import FreeCAD as App

doc = App.newDocument()
obj = App.ActiveDocument.addObject("Mesh::FeaturePython", "Name")
obj.Label = "Custom label"

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Mesh_Feature/en&oldid=1560726>"
