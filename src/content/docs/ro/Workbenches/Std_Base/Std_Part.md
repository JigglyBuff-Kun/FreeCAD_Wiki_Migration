---
title: Piesă
---
|  |
| --- |
| Std Part |
| poziția meniului |
| None |
| Ateliere |
| All |
| scurtătură |
| *Nici unul* |
| Prezentat în versiune |
| 0.17 |
| A se vedea, de asemenea, |
| [Std Group](/Std_Group/ro "Std Group/ro"), [PartDesign Body](/PartDesign_Body/ro "PartDesign Body/ro") |
|  |

## Descriere

**Part**(piesa) este un container de uz general care ține împreună un grup de obiecte astfel încât ele pot fi mișcate ca o unitate. Piesa poate conține majoritatea obiectelor FreeCAD, cum ar fi corpurile PartDesign, obiecte ale atelierului Part, obiecte Mesh etc.

Piesa oferă un sistem local de coordonate la care se pot atașa schițe și alte obiecte.

Although it is primarily intended for solid bodies, the Std Part can be used to manage any object that has a [Placement](/Placement "Placement") property, so it can also contain [Mesh Features](/Mesh_Feature "Mesh Feature"), [sketches](/Sketch "Sketch"), and other objects derived from the [App GeoFeature](/App_GeoFeature "App GeoFeature") class.

O Piesă se află în bara de instrumente Structure care este afișată în toate atelierele de lucru.

The ![](/images/Std_Part.svg) [Std Part](/Std_Part "Std Part") tool is not defined by a particular workbench, but by the base system, thus it is found in the **structure toolbar** that is available in all [workbenches](/Workbenches "Workbenches"). To group objects arbitrarily without considering their position, use ![](/images/Std_Group.svg) [Std Group](/Std_Group "Std Group"); this object does not affect the placements of the elements that it contains, it is essentially just a folder that is used to keep the [Tree view](/Tree_view "Tree view") organized.

![](/images/Std_Part-tree.png)![](/images/Std_Part_example.png)

Left: elements inside a Std Part in the [Tree view](/Tree_view "Tree view"). Right: objects positioned in space, referred to the Origin of the Std Part.

## Cum se folosește

* Press the ![](/images/Std_Part.png) **Create part** button in the toolbar. The Part automatically becomes active.
* Double-click the Part in the Model tree to activate or deactivate it.
* To add objects to a Part, drag & drop them over the Part in the Model tree.
* To remove objects from a Part, drag & drop them out of the Part and on the document label at the top of the Model tree.

## Notes

* An object can only belong to a single Part.
* 3D operations like [Part Boolean](/Part_Boolean "Part Boolean") cannot be applied to Parts. For example, you cannot select two Parts, and perform a [Part Fuse](/Part_Fuse "Part Fuse") or [Part Cut](/Part_Cut "Part Cut").

## Proprietăți

The [Std Part](/Std_Part "Std Part"), internally called [App Part](/App_Part "App Part") (`App::Part` class), is derived from the [App GeoFeature](/App_GeoFeature "App GeoFeature") (`App::GeoFeature` class) and inherits all its properties. It also has several additional properties. Notably properties that help it manage information in the context of an assembly, for example, Date**Type**, Date**Id**, Date**License**, Date**LicenseURL** and Date**Group**.

These are the properties available in the [property editor](/Property_editor "Property editor"). Hidden properties can be shown by using the **Show hidden** command in the context menu of the [property editor](/Property_editor "Property editor").

### Data

Base

* Date**Id**: ID (Part number) of the item. This field is optional.
* Date**License**: the license under which the part is released.
* Date**License URL**: the Web address where the terms license can be found.
* Date**Placement**: specifies the orientation and position of the Part in the 3D space. See [Placement](/Placement "Placement").
* Date**Label**: the Label is the name given to the operation. This name can be changed at your convenience.
* Date**Group**: lists the referenced objects.

### View

Display Options

* Vizualizare**Display Mode** (`Enumeration`): `Group`.
* Vizualizare**Show In Tree** (`Bool`): if it is `true`, the object appears in the [Tree view](/Tree_view "Tree view"). Otherwise, it is set as invisible.
* Vizualizare**Visibility** (`Bool`): if it is `true`, the object appears in the [3D view](/3D_view "3D view"); otherwise it is invisible. By default this property can be toggled on and off by pressing the Space bar in the keyboard.

Selection

* Vizualizare**On Top When Selected** (`Enumeration`): `Disabled` (default), `Enabled`, `Object`, `Element`.
* Vizualizare**Selection Style** (`Enumeration`): `Shape` (default), `BoundBox`. If the option is `Shape`, the entire shape (vertices, edges, and faces) will be highlighted in the [3D view](/3D_view "3D view"); if it is `BoundBox` only the bounding box will be highlighted.

## Detailed explanation

### Status Active

A FreeCAD document can contain multiple Parts. Only one Part can be active at a time. An active Part will be displayed in the tree with a light blue background color.

An open document can contain multiple Parts. But only one Part can be active. The active Part is displayed in the [tree view](/Tree_view "Tree view") with the background color specified by the **Active container** value in the [preferences editor](/Preferences_Editor#Colors "Preferences Editor") (by default, light blue). It will also be shown with bold text.

To activate or de-activate a Part:

* Double click on it on the [Tree view](/Tree_view "Tree view"), or
* Open the context menu (right click) and select **Active object**.

![](/images/Std_Part_active.png)

Document with two Std Parts, of which the second one is active.

### Origini

The Origin consists of the three standard axes (X, Y, Z) and three standard planes (XY, XZ and YZ). Sketches can be attached to these planes. All elements inside the Part are referenced to the Part's Origin; which means that the Part can be moved and rotated in reference to the global coordinate system without affecting the placement of elements inside it.

The Origin consists of the three standard axes (X, Y, Z) and three standard planes (XY, XZ and YZ). [Sketches](/Sketch "Sketch") and other objects can be attached to these elements when creating them.

![](/images/Part_Origin_tree.png) ![](/images/Part_Origin_view.png)

Left: Part Origin in the [Tree view](/Tree_view "Tree view"). Right: representation of the Origin elements in the [3D view](/3D_view "3D view").

*Note:* the Origin is an [App Origin](/App_OriginGroupExtension "App OriginGroupExtension") object (`App::Origin` class), while the axes and planes are objects of type `App::Line` and `App::Plane` respectively. Each of these elements can be hidden and unhidden individually with the Space bar; this is useful to choose the correct reference when creating other objects.

*Note 2:* all elements inside the Part are referenced to the Part's Origin which means that the Part can be moved and rotated in reference to the global coordinate system without affecting the placement of the elements inside.

### Managementul Vizibilității

The Part's visibility supersedes the visibility of any object it contains. If the Part is hidden, the objects it contains will be hidden as well, even if their visibility is set to true. Multiple objects inside a Part can be visible at a time.

The Part's visibility supersedes the visibility of any object it contains. If the Part is hidden, the objects it contains will be hidden as well, even if their individual Vizualizare**Visibility** property is set to `true`. If the Part is visible, then each object's Vizualizare**Visibility** determines whether the object is shown or not.

![](/images/Part_Visibility_off.png) ![](/images/Part_Visibility_on.png)

The visibility of the Std Part determines whether the objects grouped under it are shown in the [3D view](/3D_view "3D view") or not. Left: the Part is hidden, so none of the objects will be shown in the [3D view](/3D_view "3D view"). Right: the Part is visible, so each object controls its own visibility.

## Scripting

*See also:* [FreeCAD Scripting Basics](/FreeCAD_Scripting_Basics "FreeCAD Scripting Basics") and [scripted objects](/Scripted_objects "Scripted objects").

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

Retrieved from "<http://wiki.freecad.org/index.php?title=Std_Part/ro&oldid=1560685>"