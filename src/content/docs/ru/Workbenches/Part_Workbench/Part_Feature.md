---
title: Part Конструктивный элемент
---
## Вступление

![](/images/Part_3D_object.svg)

A [Part Feature](/Part_Feature "Part Feature") object, or formally a `Part::Feature`, is a simple element with a [topological shape](/Part_TopoShape "Part TopoShape") that can be displayed in the [3D view](/3D_view "3D view").

The Part Feature is the parent class of most 2D (Draft, Sketcher) and 3D (Part, PartDesign) objects, with the exception of meshes, which are normally based on the [Mesh Feature](/Mesh_Feature "Mesh Feature"), or the [FEM FemMeshObject](/FEM_Mesh "FEM Mesh") for FEM objects.

![](/images/FreeCAD_core_objects.svg)

Simplified diagram of the relationships between the core objects in FreeCAD

## Применение

The [Part Feature](/Part_Feature "Part Feature") is an internal object, so it cannot be created from the graphical interface, only from the [Python console](/Python_console "Python console") as described in the [Scripting](#Scripting) section.

The `Part::Feature` is defined in the [Part Workbench](/Part_Workbench "Part Workbench") but can be used as the base class for [scripted objects](/Scripted_objects "Scripted objects") in all [workbenches](/Workbenches "Workbenches") that produce 2D and 3D geometrical shapes. Essentially all objects produced in the [Part Workbench](/Part_Workbench "Part Workbench") are instances of a `Part::Feature`.

`Part::Feature` is also the parent class of the [PartDesign Body](/PartDesign_Body "PartDesign Body"), of the [PartDesign Features](/PartDesign_Feature "PartDesign Feature"), and of the [Part Part2DObject](/Part_Part2DObject "Part Part2DObject"), which is specialized for 2D (planar) shapes.

Workbenches can add more properties to this basic element to produce an object with complex behavior.

## Свойства

See [Property](/Property "Property") for all property types that scripted objects can have.

The [Part Feature](/Part_Feature "Part Feature") (`Part::Feature` class) is derived from the basic [App GeoFeature](/App_GeoFeature "App GeoFeature") (`App::GeoFeature` class) and inherits all its properties. It also has several additional properties. Notably a Данные**Shape** property, which stores the [Part TopoShape](/Part_TopoShape "Part TopoShape") of the object. This is the geometry that is shown in the [3D view](/3D_view "3D view"). Other properties that this object has are those related to the appearance of its [TopoShape](/Part_TopoShape "Part TopoShape").

These are the properties available in the [property editor](/Property_editor "Property editor"). Hidden properties can be shown by using the **Show hidden** command in the context menu of the [property editor](/Property_editor "Property editor").

### Данные

Base

* Данные (Hidden)**Proxy** (`PythonObject`): a custom class associated with this object. This only exists for the [Python](/Python "Python") version. See [Scripting](#Scripting).
* Данные (Hidden)**Shape** (`PartShape`): a [Part TopoShape](/Part_TopoShape "Part TopoShape") class associated with this object.
* Данные**Placement** (`Placement`): the position of the object in the [3D view](/3D_view "3D view"). The placement is defined by a `Base` point (vector), and a `Rotation` (axis and angle). See [Placement](/Placement "Placement").
  + Данные**Angle**: the angle of rotation around the Данные**Axis**. By default, it is `0°` (zero degrees).
  + Данные**Axis**: the unit vector that defines the axis of rotation for the placement. Each component is a floating point value between `0` and `1`. If any value is above `1`, the vector is normalized so that the magnitude of the vector is `1`. By default, it is the positive Z axis, `(0, 0, 1)`.
  + Данные**Position**: a vector with the 3D coordinates of the base point. By default, it is the origin `(0, 0, 0)`.
* Данные**Label** (`String`): the user editable name of this object, it is an arbitrary UTF8 string.
* Данные (Hidden)**Label2** (`String`): a longer, user editable description of this object, it is an arbitrary UTF8 string that may include newlines. By default, it is an empty string `""`.
* Данные (Hidden)**Expression Engine** (`ExpressionEngine`): a list of expressions. By default, it is empty `[]`.
* Данные (Hidden)**Visibility** (`Bool`): whether to display the object or not.

### Вид

Most objects in FreeCAD have what is called a "[viewprovider](/Viewprovider "Viewprovider")", which is a class that defines the visual appearance of the object in the [3D view](/3D_view "3D view"), and in the [Tree view](/Tree_view "Tree view"). The default viewprovider of Part Feature objects defines the following properties. Scripted objects that are derived from Part Feature will have access to these properties as well.

Base

* Вид (hidden)**Proxy** (`PythonObject`): a custom [viewprovider](/Viewprovider "Viewprovider") class associated with this object. This only exists for the [Python](/Python "Python") version. See [Scripting](#Scripting).

Display Options

* Вид**Bounding Box** (`Bool`): if it is `true`, the object will show the bounding box in the [3D view](/3D_view "3D view").
* Вид**Display Mode** (`Enumeration`): `Flat Lines` (regular visualization), `Shaded` (no edges), `Wireframe` (no faces), `Points` (only vertices).
* Вид**Show In Tree** (`Bool`): it defaults to `true`, in which case the object will appear in the [Tree view](/Tree_view "Tree view"); otherwise, the object will be hidden in the tree view. Once an object in the tree is invisible, you can see it again by opening the context menu over the name of the document (right-click), and selecting ![](/images/CheckBoxTrue.svg) Show hidden items. Then the hidden item can be chosen and Вид**Show In Tree** can be switched back to `true`.
* Вид**Visibility** (`Bool`): if it is `true`, the object appears in the [3D view](/3D_view "3D view"); otherwise it is invisible. By default this property can be toggled on and off by pressing the Space bar.

Object style

* Вид**Angular Deflection** (`Angle`): it is a companion to Вид**Deviation**. It is another way to specify how finely to generate the mesh for rendering on screen or when exporting. The default value is `28.5 degrees`, or `0.5 radians`. This is the maximum value, the smaller the value the smoother the appearance will be in the [3D view](/3D_view "3D view"), and the finer the mesh that will be exported.
* Вид**Deviation** (`FloatConstraint`): it is a companion to Вид**Angular Deflection**. It is another way to specify how finely to generate the mesh for rendering on screen or when exporting. The default value is `0.5%`. This is the maximum value, the smaller the value the smoother the appearance will be in the [3D view](/3D_view "3D view"), and the finer the mesh that will be exported.
* Вид (hidden)**Diffuse Color** (`ColorList`): it is a list of RGB tuples defining colors, similar to Вид**Shape Color**. It defaults to a list of one `[(0.8, 0.8, 0.8)]`.
* Вид**Draw Style** (`Enumeration`): `Solid` (default), `Dashed`, `Dotted`, `Dashdot`; defines the style of the edges in the [3D view](/3D_view "3D view").
* Вид**Lighting** (`Enumeration`): `Two side` (default), `One side`; the illumination comes from two sides or one side in the [3D view](/3D_view "3D view").
* Вид**Line Color** (`Color`): a tuple of three floating point RGB values `(r,g,b)` to define the color of the edges in the [3D view](/3D_view "3D view"); by default it is `(0.09, 0.09, 0.09)`, which is displayed as `[25,25,25]` on base 255,  almost black .
* Вид (hidden)**Line Color Array** (`ColorList`): it is a list of RGB tuples defining colors, similar to Вид**Line Color**. It defaults to a list of one `[(0.09, 0.09, 0.09)]`.
* Вид (hidden)**Line Material** (`Material`): an [App Material](/index.php?title=App_Material&action=edit&redlink=1 "App Material (page does not exist)") associated with the edges in this object. By default it is empty.
* Вид**Line Width** (`FloatConstraint`): a float that determines the width in pixels of the edges in the [3D view](/3D_view "3D view"). It defaults to `2.0`.

* Вид**Point Color** (`Color`): similar to Вид**Line Color**, defines the color of the vertices.
* Вид (hidden)**Point Color Array** (`ColorList`): it is a list of RGB tuples defining colors, similar to Вид**Point Color**. It defaults to a list of one `[(0.09, 0.09, 0.09)]`.
* Вид (hidden)**Point Material** (`Material`): an [App Material](/index.php?title=App_Material&action=edit&redlink=1 "App Material (page does not exist)") associated with the vertices in this object. By default it is empty.
* Вид**Point Size** (`FloatConstraint`): similar to Вид**Line Width**, defines the size of the vertices.

* Вид**Shape Color** (`Color`): similar to Вид**Line Color**, defines the color of the faces. It defaults to `(0.8, 0.8, 0.8)`, which is displayed as `[204, 204, 204]` on base 255, a light gray.
* Вид (hidden)**Shape Material** (`Material`): an [App Material](/index.php?title=App_Material&action=edit&redlink=1 "App Material (page does not exist)") associated with this object. By default it is empty.
* Вид**Transparency** (`Percent`): an integer from `0` to `100` (a percentage) that determines the level of transparency of the faces in the [3D view](/3D_view "3D view"). A value of `100` indicates completely invisible faces; the faces are invisible but they can still be picked as long as Вид**Selectable** is `true`.

Selection

* Вид**On Top When Selected** (`Enumeration`): it controls the way in which the selection occurs in the [3D view](/3D_view "3D view") if the object has a [Shape](/Part_TopoShape "Part TopoShape"), and there are many objects partially covered by others. It defaults to `Disabled`, meaning that no special highlighting will occur; `Enabled` means that the object will appear on top of any other object when selected; `Object` means that the object will appear on top only if the entire object is selected in the [Tree view](/Tree_view "Tree view"); `Element` means that the object will appear on top only if a subelement (vertex, edge, face) is selected in the [3D view](/3D_view "3D view").
* Вид**Selectable** (`Bool`): if it is `true`, the object can be picked with the pointer in the [3D view](/3D_view "3D view"). Otherwise, the object cannot be selected until this option is set to `true`.
* Вид**Selection Style** (`Enumeration`): it controls the way the object is highlighted. If it is `Shape`, the entire shape (vertices, edges, and faces) will be highlighted in the [3D view](/3D_view "3D view"); if it is `BoundBox` a bounding box will appear surrounding the object and will be highlighted.

### Angular deflection and deviation

![](/images/View_property_Deviation.svg)

Angular Deflection and deviation parameters; d < linear deflection, α < angular deflection.

The deviation is a value in percentage that is related to the dimensions in millimeters of the bounding box of the object. The deviation in millimeters can be calculated as follows:

```
deviation_in_mm = (w + h + d)/3 * deviation/100

```

where `w`, `h`, `d` are the bounding box dimensions.

## Scripting

*See also:* [FreeCAD Scripting Basics](/FreeCAD_Scripting_Basics "FreeCAD Scripting Basics") and [scripted objects](/Scripted_objects "Scripted objects").

A Part Feature is created with the `addObject()` method of the document.

```
import FreeCAD as App

doc = App.newDocument()
obj = App.ActiveDocument.addObject("Part::Feature", "Name")
obj.Label = "Custom label"

```

For [Python](/Python "Python") subclassing, you should create a `Part::FeaturePython` object.

```
import FreeCAD as App

doc = App.newDocument()
obj = App.ActiveDocument.addObject("Part::FeaturePython", "Name")
obj.Label = "Custom label"

```

### Name

See also: [Object name](/Object_name "Object name") for more information on the properties of the `Name`.

The `addObject` method has two basic string arguments.

* The first argument indicates the type of object, in this case, `"Part::FeaturePython"`.
* The second argument is a string that defines the `Name` attribute. If it is not provided, it defaults to the same name as the class, that is, `"Part__FeaturePython"`. The `Name` can only include simple alphanumeric characters, and the underscore, `[_0-9a-zA-Z]`. If other symbols are given, these will be converted to underscores; for example, `"A+B:C*"` is converted to `"A_B_C_"`.

### Label

If desired, the `Label` attribute can be changed to a more meaningful text.

* The `Label` can accept any UTF8 string, including accents and spaces. Since the [Tree view](/Tree_view "Tree view") displays the `Label`, it is a good practice to change the `Label` to a more descriptive string.
* By default the `Label` is unique, just like the `Name`. However, this behavior can be changed in the [preferences editor](/Preferences_Editor "Preferences Editor"), **Edit → Preferences → General → Document → Allow duplicate object labels in one document**. This means that in general the `Label` may be repeated in the same document; when testing for a specific element the user should rely on the `Name` rather than on the `Label`.

Retrieved from "<http://wiki.freecad.org/index.php?title=Part_Feature/ru&oldid=1560693>"