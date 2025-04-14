---
title: App FeaturePython
---

## Introduction

An ![](/images/Feature.svg) [App FeaturePython](/App_FeaturePython "App FeaturePython") object, or formally an `App::FeaturePython`, is a simple instance of the [App DocumentObject](/App_DocumentObject "App DocumentObject") in [Python](/Python "Python").

This is a simple object that by default doesn't have many properties, for example it doesn't have a [placement](/Placement "Placement") or a [topological shape](/Part_TopoShape "Part TopoShape"). Depending on the properties that are assigned to it, it can be used to manage different types of data.

![](/images/FreeCAD_core_objects.svg)

Simplified diagram of the relationships between the core objects in FreeCAD

## Usage

The [App FeaturePython](/App_FeaturePython "App FeaturePython") is an internal object, so it cannot be created from the graphical interface. It is meant to be sub-classed by classes that will handle different types of data.

For example, the [Draft Text](/Draft_Text "Draft Text"), [Draft Dimension](/Draft_Dimension "Draft Dimension"), and [Draft WorkingPlaneProxy](/Draft_WorkingPlaneProxy "Draft WorkingPlaneProxy") objects of the [Draft Workbench](/Draft_Workbench "Draft Workbench") are `App::FeaturePython` objects with a custom icon and additional properties. They hold data but not an actual [Part TopoShape](/Part_TopoShape "Part TopoShape").

If the desired object should have a placement, a shape, an attachment or other complex properties, it is better to create one of the more complex classes, for example, [App GeoFeature](/App_GeoFeature "App GeoFeature"), [Part Feature](/Part_Feature "Part Feature"), or [Part Part2DObject](/Part_Part2DObject "Part Part2DObject").

## Properties

See [Property](/Property "Property") for all property types that scripted objects can have.

The [App FeaturePython](/App_FeaturePython "App FeaturePython") (`App::FeaturePython` class) is derived from the basic [App DocumentObject](/App_DocumentObject "App DocumentObject") (`App::DocumentObject` class) and inherits all its properties. It also has several additional properties.

These are the properties available in the [property editor](/Property_editor "Property editor"). Hidden properties can be shown by using the **Show hidden** command in the context menu of the [property editor](/Property_editor "Property editor").

### Data

Base

- Data (Hidden)**Proxy** (`PythonObject`): a custom class associated with this object.
- Data**Label** (`String`): the user editable name of this object, it is an arbitrary UTF8 string.
- Data (Hidden)**Label2** (`String`): a longer, user editable description of this object, it is an arbitrary UTF8 string that may include newlines. By default, it is an empty string `""`.
- Data (Hidden)**Expression Engine** (`ExpressionEngine`): a list of expressions. By default, it is empty `[]`.
- Data (Hidden)**Visibility** (`Bool`): whether to display the object or not.

### View

Base

- View (Hidden)**Proxy** (`PythonObject`): a custom [viewprovider](/Viewprovider "Viewprovider") class associated with this object.

Display Options

- View**Display Mode** (`Enumeration`): it is empty by default.
- View**Show In Tree** (`Bool`): it defaults to `true`, in which case the object will appear in the [Tree view](/Tree_view "Tree view"); otherwise, the object will be hidden in the tree view. Once an object in the tree is invisible, you can see it again by opening the context menu over the name of the document (right-click), and selecting ![](/images/CheckBoxTrue.svg) Show hidden items. Then the hidden item can be chosen and View**Show In Tree** can be switched back to `true`.
- View**Visibility** (`Bool`): it defaults to `true`, in which case the object will be visible in the [3D view](/3D_view "3D view") if it has a [Shape](/Part_TopoShape "Part TopoShape"), otherwise it will be invisible. By default this property can be toggled on and off by selecting the object, and pressing the Space bar.

Selection

- View**On Top When Selected** (`Enumeration`): it controls the way in which the selection occurs in the [3D view](/3D_view "3D view") if the object has a [Shape](/Part_TopoShape "Part TopoShape"), and there are many objects partially covered by others. It defaults to `Disabled`, meaning that no special highlighting will occur; `Enabled` means that the object will appear on top of any other object when selected; `Object` means that the object will appear on top only if the entire object is selected in the [Tree view](/Tree_view "Tree view"); `Element` means that the object will appear on top only if a subelement (vertex, edge, face) is selected in the [3D view](/3D_view "3D view").
- View**Selection Style** (`Enumeration`): it controls the way the object is highlighted if it has a [Shape](/Part_TopoShape "Part TopoShape"). If it is `Shape`, the entire shape (vertices, edges, and faces) will be highlighted in the [3D view](/3D_view "3D view"); if it is `BoundBox` a bounding box will appear surrounding the object and will be highlighted.

## Scripting

_See also:_ [FreeCAD Scripting Basics](/FreeCAD_Scripting_Basics "FreeCAD Scripting Basics") and [scripted objects](/Scripted_objects "Scripted objects").

See [Part Feature](/Part_Feature "Part Feature") for the general information on adding objects to the document.

An App FeaturePython is created with the `addObject()` method of the document.

```
import FreeCAD as App

doc = App.newDocument()
obj = App.ActiveDocument.addObject("App::FeaturePython", "Name")
obj.Label = "Custom label"

```

Retrieved from "<http://wiki.freecad.org/index.php?title=App_FeaturePython/en&oldid=1560738>"
