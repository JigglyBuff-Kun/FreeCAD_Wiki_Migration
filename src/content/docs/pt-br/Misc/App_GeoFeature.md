---
title: App GeoFeature/pt-br
---
## Introdução

![](/images/Feature.svg)

Um objeto [App GeoFeature](/App_GeoFeature "App GeoFeature"), ou formalmente um `App::GeoFeature`, é a classe base da maioria dos objetos que exibirão elementos geométricos na [Vista 3D](/3D_view/pt-br "3D view/pt-br"), porque inclui uma propriedade Dados**Placement**.

![](/images/FreeCAD_core_objects.svg)

Simplified diagram of the relationships between the core objects in FreeCAD

## Usage

The [App GeoFeature](/App_GeoFeature "App GeoFeature") is an internal object, so it cannot be created from the graphical interface. It is generally not meant to be used directly, rather it can be sub-classed to get a bare-bones object that only has a basic Dados**Placement** property to define its position in the [3D view](/3D_view "3D view").

Some of the most important derived objects are the following:

* The [Part Feature](/Part_Feature "Part Feature") class, the parent of most objects with 2D and 3D [topological shapes](/Part_TopoShape "Part TopoShape").
* The [Mesh Feature](/Mesh_Feature "Mesh Feature") class, the parent of most objects made from [meshes](/Mesh_MeshObject "Mesh MeshObject"), not solids.
* The [Fem FemMeshObject](/FEM_Mesh "FEM Mesh") class, the parent of finite element meshes created with the [FEM Workbench](/FEM_Workbench "FEM Workbench").
* The [CAM Feature](/index.php?title=CAM_Feature&action=edit&redlink=1 "CAM Feature (page does not exist)") class, the parent of paths created with the [CAM Workbench](/CAM_Workbench "CAM Workbench") for use in CNC machining.
* The [App Part](/App_Part "App Part") class, which defines [Std Parts](/Std_Part "Std Part") that can be used as containers of bodies to perform assemblies.

When creating this object in [Python](/Python "Python"), instead of sub-classing `App::GeoFeature`, you should sub-class `App::GeometryPython` because the latter includes a default view provider, and `Proxy` attributes for the object itself, and its view provider. See [Scripting](/App_GeoFeature#Scripting "App GeoFeature").

## Properties App GeoFeature

See [Property](/Property "Property") for all property types that scripted objects can have.

The [App GeoFeature](/App_GeoFeature "App GeoFeature") (`App::GeoFeature` class) is derived from the basic [App DocumentObject](/App_DocumentObject "App DocumentObject") (`App::DocumentObject` class) and inherits all its properties. In addition it has a Dados**Placement** property, which controls its position in the [3D view](/3D_view "3D view").

## Properties App GeometryPython

See [Property](/Property "Property") for all property types that scripted objects can have.

The [App GeometryPython](/App_GeoFeature "App GeoFeature") (`App::GeometryPython` class) is derived from the basic [App GeoFeature](/App_GeoFeature "App GeoFeature") (`App::GeoFeature` class) and inherits all its properties. It also has several additional properties.

These are the properties available in the [property editor](/Property_editor "Property editor"). Hidden properties can be shown by using the **Show hidden** command in the context menu of the [property editor](/Property_editor "Property editor").

### Data

Base

* Dados (Hidden)**Proxy** (`PythonObject`): a custom class associated with this object.
* Dados**Placement** (`Placement`): the position of the object in the [3D view](/3D_view "3D view"). The placement is defined by a `Base` point (vector), and a `Rotation` (axis and angle). See [Placement](/Placement "Placement").
  + Dados**Angle**: the angle of rotation around the Dados**Axis**. By default, it is `0°` (zero degrees).
  + Dados**Axis**: the unit vector that defines the axis of rotation for the placement. Each component is a floating point value between `0` and `1`. If any value is above `1`, the vector is normalized so that the magnitude of the vector is `1`. By default, it is the positive Z axis, `(0, 0, 1)`.
  + Dados**Position**: a vector with the 3D coordinates of the base point. By default, it is the origin `(0, 0, 0)`.
* Dados**Label** (`String`): the user editable name of this object, it is an arbitrary UTF8 string.
* Dados (Hidden)**Label2** (`String`): a longer, user editable description of this object, it is an arbitrary UTF8 string that may include newlines. By default, it is an empty string `""`.
* Dados (Hidden)**Expression Engine** (`ExpressionEngine`): a list of expressions. By default, it is empty `[]`.
* Dados (Hidden)**Visibility** (`Bool`): whether to display the object or not.

### View

Base

* Vista (Hidden)**Proxy** (`PythonObject`): a custom [viewprovider](/Viewprovider "Viewprovider") class associated with this object.

Display Options

* Vista**Bounding Box** (`Bool`): if it is `true`, the object will show the bounding box in the [3D view](/3D_view "3D view").
* Vista**Display Mode** (`Enumeration`): see the information in [App FeaturePython](/App_FeaturePython "App FeaturePython").
* Vista**Show In Tree** (`Bool`): see the information in [App FeaturePython](/App_FeaturePython "App FeaturePython").
* Vista**Visibility** (`Bool`): see the information in [App FeaturePython](/App_FeaturePython "App FeaturePython").

Object Style

* Vista**Shape Color** (`Color`): a tuple of three floating point RGB values `(r,g,b)` to define the color of the faces in the [3D view](/3D_view "3D view"); by default it is `(0.8, 0.8, 0.8)`, which is displayed as `[204, 204, 204]` on base 255, a  light gray .
* Vista (Hidden)**Shape Material** (`Material`): an [App Material](/index.php?title=App_Material&action=edit&redlink=1 "App Material (page does not exist)") associated with this object. By default it is empty.
* Vista**Transparency** (`Percent`): an integer from `0` to `100` that determines the level of transparency of the faces in the [3D view](/3D_view "3D view"). A value of `100` indicates completely invisible faces; the faces are invisible but they can still be picked as long as Vista**Selectable** is `true`.

Selection

* Vista**On Top When Selected** (`Enumeration`): see the information in [App FeaturePython](/App_FeaturePython "App FeaturePython").
* Vista**Selectable** (`Bool`): if it is `true`, the object can be picked with the pointer in the [3D view](/3D_view "3D view"). Otherwise, the object cannot be selected until this option is set to `true`.
* Vista**Selection Style** (`Enumeration`): see the information in [App FeaturePython](/App_FeaturePython "App FeaturePython").

## Scripting

*See also:* [FreeCAD Scripting Basics](/FreeCAD_Scripting_Basics "FreeCAD Scripting Basics") and [scripted objects](/Scripted_objects "Scripted objects").

See [Part Feature](/Part_Feature "Part Feature") for the general information on adding objects to the document.

A GeoFeature is created with the `addObject()` method of the document. If you would like to create an object with a 2D or 3D [topological shape](/Part_TopoShape "Part TopoShape"), it may be better to create one of the sub-classes specialized for handling shapes, for example [Part Feature](/Part_Feature "Part Feature") or [Part Part2DObject](/Part_Part2DObject "Part Part2DObject").

```
import FreeCAD as App

doc = App.newDocument()
obj = App.ActiveDocument.addObject("App::GeoFeature", "Name")
obj.Label = "Custom label"

```

For [Python](/Python "Python") subclassing you should create the `App::GeometryPython` object.

```
import FreeCAD as App

doc = App.newDocument()
obj = App.ActiveDocument.addObject("App::GeometryPython", "Name")
obj.Label = "Custom label"

```

Retrieved from "<http://wiki.freecad.org/index.php?title=App_GeoFeature/pt-br&oldid=1560719>"