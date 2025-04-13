---
title: Std Part
---

|                                                                                            |
| ------------------------------------------------------------------------------------------ |
| Std Part                                                                                   |
| Menu location                                                                              |
| None                                                                                       |
| Workbenches                                                                                |
| All                                                                                        |
| Default shortcut                                                                           |
| _None_                                                                                     |
| Introduced in version                                                                      |
| 0.17                                                                                       |
| See also                                                                                   |
| [Std Group](/Std_Group "Std Group"), [PartDesign Body](/PartDesign_Body "PartDesign Body") |
|                                                                                            |

## Description

![](/src/assets/images/Std_Part.svg) [Std Part](/Std_Part "Std Part") (internally called [App Part](/App_Part "App Part")) is a general purpose container that keeps together a group of objects so that they can be moved together as a unit in the [3D view](/3D_view "3D view").

The Std Part element was developed to be the basic building block to create mechanical [assemblies](/Assembly "Assembly"). In particular, it is meant to arrange objects that have a [Part TopoShape](/Part_TopoShape "Part TopoShape"), like [Part Primitives](/Part_Primitives "Part Primitives"), [PartDesign Bodies](/PartDesign_Body "PartDesign Body"), and other [Part Features](/Part_Feature "Part Feature"). The Std Part provides an [Origin object](#Origin) with local X, Y, and Z axes, and standard planes, that can be used as reference to position the contained objects. In addition, Std Parts may be nested inside other Std Parts to create a big assembly from smaller sub-assemblies.

Although it is primarily intended for solid bodies, the Std Part can be used to manage any object that has a [Placement](/Placement "Placement") property, so it can also contain [Mesh Features](/Mesh_Feature "Mesh Feature"), [sketches](/Sketch "Sketch"), and other objects derived from the [App GeoFeature](/App_GeoFeature "App GeoFeature") class.

Do not confuse the ![](/src/assets/images/PartDesign_Body.svg) [PartDesign Body](/PartDesign_Body "PartDesign Body") with the ![](/src/assets/images/Std_Part.svg) [Std Part](/Std_Part "Std Part"). The first one is a specific object used in the ![](/src/assets/images/Workbench_PartDesign.svg) [PartDesign Workbench](/PartDesign_Workbench "PartDesign Workbench"), intended to model a [single contiguous solid](/PartDesign_Body#Single_contiguous_solid "PartDesign Body") by means of [PartDesign Features](/PartDesign_Feature "PartDesign Feature"). On the other hand, the [Std Part](/Std_Part "Std Part") is not used for modelling, just to arrange different objects in space, with the intention to create [assemblies](/Assembly "Assembly").

The ![](/src/assets/images/Std_Part.svg) [Std Part](/Std_Part "Std Part") tool is not defined by a particular workbench, but by the base system, thus it is found in the **structure toolbar** that is available in all [workbenches](/Workbenches "Workbenches"). To group objects arbitrarily without considering their position, use ![](/src/assets/images/Std_Group.svg) [Std Group](/Std_Group "Std Group"); this object does not affect the placements of the elements that it contains, it is essentially just a folder that is used to keep the [Tree view](/Tree_view "Tree view") organized.

![](/src/assets/images/Std_Part-tree.png)![](/src/assets/images/Std_Part_example.png)

Left: elements inside a Std Part in the [Tree view](/Tree_view "Tree view"). Right: objects positioned in space, referred to the Origin of the Std Part.

## Usage

1. Press the ![](/src/assets/images/Std_Part.svg) [Create part](/Std_Part "Std Part") button.
2. An empty Part is created and automatically becomes _[active](/Std_Part#Active_status "Std Part")_.
3. To add objects to the Part, select them in [Tree view](/Tree_view "Tree view"), and drag and drop them onto the Part.
4. To remove objects from the Part, drag them out of the Part, and onto the document label at the top of the [Tree view](/Tree_view "Tree view").
5. Objects can also be added and removed by editing the Data**Group** property of the Part.

## Notes

- An object can only belong to a single Part.
- 3D operations like [Part Boolean](/Part_Boolean "Part Boolean") cannot be applied to Parts. For example, you cannot select two Parts, and perform a [Part Fuse](/Part_Fuse "Part Fuse") or [Part Cut](/Part_Cut "Part Cut").

## Properties

The [Std Part](/Std_Part "Std Part"), internally called [App Part](/App_Part "App Part") (`App::Part` class), is derived from the [App GeoFeature](/App_GeoFeature "App GeoFeature") (`App::GeoFeature` class) and inherits all its properties. It also has several additional properties. Notably properties that help it manage information in the context of an assembly, for example, Data**Type**, Data**Id**, Data**License**, Data**LicenseURL** and Data**Group**.

These are the properties available in the [property editor](/Property_editor "Property editor"). Hidden properties can be shown by using the **Show hidden** command in the context menu of the [property editor](/Property_editor "Property editor").

### Data

Base

- Data**Type** (`String`): a description for this object. By default, it is an empty string `""`.
- Data**Material** (`Link`): the material for this object.
- Data (Hidden)**Meta** (`Map`): map with additional meta information. By default, it is empty `{}`.
- Data**Id** (`String`): an identification or part number for this object. By default, it is an empty string `""`.
- Data (Hidden)**Uid** (`UUID`): the [universally unique identifier](https://en.wikipedia.org/wiki/Universally_unique_identifier) (UUID) (128-bit number) of the object. This is assigned at creation time.
- Data**License** (`String`): a field to specify the license for this object. By default, it is an empty string `""`.
- Data**LicenseURL** (`String`): a field to specify the web address to the license or contract for this object. By default, it is an empty string `""`.
- Data**Color** (`Color`): a tuple of four floating point RGBA values `(r,g,b,a)` to define the color of the object; by default it is `(1.0, 1.0, 1.0, 1.0)`, which is displayed as `[255,255,255]` on base 255, white color.
- Data**Placement** (`Placement`): the position of the object in the [3D view](/3D_view "3D view"). The placement is defined by a `Base` point (vector), and a `Rotation` (axis and angle). See [Placement](/Placement "Placement").
  - Data**Angle**: the angle of rotation around the Data**Axis**. By default, it is `0°` (zero degrees).
  - Data**Axis**: the unit vector that defines the axis of rotation for the placement. Each component is a floating point value between `0` and `1`. If any value is above `1`, the vector is normalized so that the magnitude of the vector is `1`. By default, it is the positive Z axis, `(0, 0, 1)`.
  - Data**Position**: a vector with the 3D coordinates of the base point. By default, it is the origin `(0, 0, 0)`.
- Data**Label** (`String`): the user editable name of this object, it is an arbitrary UTF8 string.
- Data (Hidden)**Label2** (`String`): a longer, user editable description of this object, it is an arbitrary UTF8 string that may include newlines. By default, it is an empty string `""`.
- Data (Hidden)**Expression Engine** (`ExpressionEngine`): a list of expressions. By default, it is empty `[]`.
- Data (Hidden)**Visibility** (`Bool`): whether to display the object or not.
- Data (Hidden)**Origin** (`Link`): the [App Origin](/App_OriginGroupExtension "App OriginGroupExtension") object that is the positional reference for all elements listed in Data**Group**.
- Data**Group** (`LinkList`): a list of referenced objects. By default, it is empty `[]`.
- Data (Hidden)**\_ Group Touched** (`Bool`): whether the group is touched or not.

### View

Display Options

- View**Display Mode** (`Enumeration`): `Group`.
- View**Show In Tree** (`Bool`): if it is `true`, the object appears in the [Tree view](/Tree_view "Tree view"). Otherwise, it is set as invisible.
- View**Visibility** (`Bool`): if it is `true`, the object appears in the [3D view](/3D_view "3D view"); otherwise it is invisible. By default this property can be toggled on and off by pressing the Space bar in the keyboard.

Selection

- View**On Top When Selected** (`Enumeration`): `Disabled` (default), `Enabled`, `Object`, `Element`.
- View**Selection Style** (`Enumeration`): `Shape` (default), `BoundBox`. If the option is `Shape`, the entire shape (vertices, edges, and faces) will be highlighted in the [3D view](/3D_view "3D view"); if it is `BoundBox` only the bounding box will be highlighted.

## Detailed explanation

### Active status

An open document can contain multiple Parts. But only one Part can be active. The active Part is displayed in the [tree view](/Tree_view "Tree view") with the background color specified by the **Active container** value in the [preferences editor](/Preferences_Editor#Colors "Preferences Editor") (by default, light blue). It will also be shown with bold text.

To activate or de-activate a Part:

- Double click on it on the [Tree view](/Tree_view "Tree view"), or
- Open the context menu (right click) and select **Active object**.

![](/src/assets/images/Std_Part_active.png)

Document with two Std Parts, of which the second one is active.

### Origin

The Origin consists of the three standard axes (X, Y, Z) and three standard planes (XY, XZ and YZ). [Sketches](/Sketch "Sketch") and other objects can be attached to these elements when creating them.

![](/src/assets/images/Part_Origin_tree.png) ![](/src/assets/images/Part_Origin_view.png)

Left: Part Origin in the [Tree view](/Tree_view "Tree view"). Right: representation of the Origin elements in the [3D view](/3D_view "3D view").

_Note:_ the Origin is an [App Origin](/App_OriginGroupExtension "App OriginGroupExtension") object (`App::Origin` class), while the axes and planes are objects of type `App::Line` and `App::Plane` respectively. Each of these elements can be hidden and unhidden individually with the Space bar; this is useful to choose the correct reference when creating other objects.

_Note 2:_ all elements inside the Part are referenced to the Part's Origin which means that the Part can be moved and rotated in reference to the global coordinate system without affecting the placement of the elements inside.

### Visibility Management

The Part's visibility supersedes the visibility of any object it contains. If the Part is hidden, the objects it contains will be hidden as well, even if their individual View**Visibility** property is set to `true`. If the Part is visible, then each object's View**Visibility** determines whether the object is shown or not.

![](/src/assets/images/Part_Visibility_off.png) ![](/src/assets/images/Part_Visibility_on.png)

The visibility of the Std Part determines whether the objects grouped under it are shown in the [3D view](/3D_view "3D view") or not. Left: the Part is hidden, so none of the objects will be shown in the [3D view](/3D_view "3D view"). Right: the Part is visible, so each object controls its own visibility.

## Scripting

_See also:_ [FreeCAD Scripting Basics](/FreeCAD_Scripting_Basics "FreeCAD Scripting Basics") and [scripted objects](/Scripted_objects "Scripted objects").

See [Part Feature](/Part_Feature "Part Feature") for the general information on adding objects to the document.

A Std Part ([App Part](/App_Part "App Part")) is created with the `addObject()` method of the document. Once a Part exists, other objects can be added to it with the `addObject()` or `addObjects()` methods.

```
import FreeCAD as App

doc = App.newDocument()
part = App.ActiveDocument.addObject("App::Part", "Part")

obj1 = App.ActiveDocument.addObject("PartDesign::Body", "Body")
obj2 = App.ActiveDocument.addObject("Part::Box", "Box")

part.addObjects([obj1, obj2])
App.ActiveDocument.recompute()

```

You cannot create a scripted `App::Part`. However, you can add `App::Part` behavior to a scripted `Part::FeaturePython` object by using the following code:

```
class MyGroup(object):
    def __init__(self, obj=None):
        self.Object = obj
        if obj:
            self.attach(obj)

    def dumps(self):
        return

    def loads(self, _state):
        return

    def attach(self, obj):
        obj.addExtension("App::OriginGroupExtensionPython")
        obj.Origin = FreeCAD.ActiveDocument.addObject("App::Origin", "Origin")

    def onDocumentRestored(self, obj):
        self.Object = obj

class ViewProviderMyGroup(object):
    def __init__(self, vobj=None):
        if vobj:
            vobj.Proxy = self
            self.attach(vobj)
        else:
            self.ViewObject = None

    def attach(self, vobj):
        vobj.addExtension("Gui::ViewProviderOriginGroupExtensionPython")
        self.ViewObject = vobj

    def dumps(self):
        return None

    def loads(self, _state):
        return None

App.ActiveDocument.addObject("Part::FeaturePython",
                             "Group",
                             MyGroup(),
                             ViewProviderMyGroup(),
                             True)

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Std_Part/en&oldid=1560686>"
