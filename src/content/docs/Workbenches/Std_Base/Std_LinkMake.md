---
title: Std LinkMake
---

|                                                                                                                              |
| ---------------------------------------------------------------------------------------------------------------------------- |
| Std LinkMake                                                                                                                 |
| Menu location                                                                                                                |
| None                                                                                                                         |
| Workbenches                                                                                                                  |
| All                                                                                                                          |
| Default shortcut                                                                                                             |
| _None_                                                                                                                       |
| Introduced in version                                                                                                        |
| 0.19                                                                                                                         |
| See also                                                                                                                     |
| [Std Part](/Std_Part "Std Part"), [Std Group](/Std_Group "Std Group"), [PartDesign Body](/PartDesign_Body "PartDesign Body") |
|                                                                                                                              |

## Description

![](/src/assets/images/Std_LinkMake.svg) [Std LinkMake](/Std_LinkMake "Std LinkMake") creates an [App Link](/App_Link "App Link") (`App::Link` class), a type of object that references or links to another object in the same document, or in another document. It is especially designed to efficiently duplicate a single object multiple times, which helps with the creation of complex [assemblies](/Assembly "Assembly") from smaller subassemblies, and from multiple reusable components like screws, nuts, and similar fasteners.

The [App Link](/App_Link "App Link") object was newly introduced in v0.19; in the past, simple duplication of objects could be achieved with ![](/src/assets/images/Draft_Clone.svg) [Draft Clone](/Draft_Clone "Draft Clone"), but this is a less efficient solution due to its implementation, which essentially creates a copy of the internal [Shape](/Part_TopoShape "Part TopoShape") of the source object. Instead, a Link directly references the original Shape, so it is more memory-efficient.

By itself the [Link](/App_Link "App Link") object can behave like an array, duplicating its base object many times; this can be done by setting its Data**Element Count** property to `1` or larger. This "[Link Array](#Link_Array)" object can also be created with the different array tools of the ![](/src/assets/images/Workbench_Draft.svg) [Draft Workbench](/Draft_Workbench "Draft Workbench"), for example, ![](/src/assets/images/Draft_OrthoArray.svg) [Draft OrthoArray](/Draft_OrthoArray "Draft OrthoArray"), ![](/src/assets/images/Draft_PolarArray.svg) [Draft PolarArray](/Draft_PolarArray "Draft PolarArray"), and ![](/src/assets/images/Draft_CircularArray.svg) [Draft CircularArray](/Draft_CircularArray "Draft CircularArray").

When used with the ![](/src/assets/images/Workbench_PartDesign.svg) [PartDesign Workbench](/PartDesign_Workbench "PartDesign Workbench"), Links are intended to be used with ![](/src/assets/images/PartDesign_Body.svg) [PartDesign Bodies](/PartDesign_Body "PartDesign Body"), so it is recommended to set View**Display Mode Body** to `Tip` to select the features of the entire Body, and not the individual features. To create arrays of the internal [PartDesign Features](/PartDesign_Feature "PartDesign Feature"), use ![](/src/assets/images/PartDesign_LinearPattern.svg) [PartDesign LinearPattern](/PartDesign_LinearPattern "PartDesign LinearPattern"), ![](/src/assets/images/PartDesign_PolarPattern.svg) [PartDesign PolarPattern](/PartDesign_PolarPattern "PartDesign PolarPattern"), and ![](/src/assets/images/PartDesign_MultiTransform.svg) [PartDesign MultiTransform](/PartDesign_MultiTransform "PartDesign MultiTransform").

The ![](/src/assets/images/Std_LinkMake.svg) [Std LinkMake](/Std_LinkMake "Std LinkMake") tool is not defined by a particular workbench, but by the base system, thus it is found in the **structure toolbar** that is available in all [workbenches](/Workbenches "Workbenches"). The Link object, used in conjunction with ![](/src/assets/images/Std_Part.svg) [Std Part](/Std_Part "Std Part") to group various objects, forms the basis of the ![](/src/assets/images/Assembly3_workbench_icon.svg) [Assembly3](/Assembly3_Workbench "Assembly3 Workbench") and ![](/src/assets/images/Assembly4_workbench_icon.svg) [Assembly4 Workbenches](/Assembly4_Workbench "Assembly4 Workbench").

## Usage

With selection:

1. Select an object in the [tree view](/Tree_view "Tree view") or [3D view](/3D_view "3D view") for which you wish to create a Link.
2. Press the ![](/src/assets/images/Std_LinkMake.svg) [Make link](/Std_LinkMake "Std LinkMake") button. The produced object has the same icon as the original object, but has an arrow overlay indicating it is a Link.

Without selection:

1. If no object is selected, press the ![](/src/assets/images/Std_LinkMake.svg) [Make link](/Std_LinkMake "Std LinkMake") button to create an empty ![](/src/assets/images/Link.svg) Link.
2. Go to the [property editor](/Property_editor "Property editor"), then click on the Data**Linked Object** property to open the [Link selection dialog](/Selection_methods "Selection methods") to choose an object, then press OK.
3. Instead of choosing an entire object in the [tree view](/Tree_view "Tree view"), you can also pick subelements (vertices, edges, or faces) of a single object in the [3D view](/3D_view "3D view"). In this case, the Link will duplicate only these subelements, and the arrow overlay will be different. This can also be done with ![](/src/assets/images/Std_LinkMakeRelative.svg) [Std LinkMakeRelative](/Std_LinkMakeRelative "Std LinkMakeRelative").

![](/src/assets/images/Std_Link_tree_example.png) ![](/src/assets/images/Std_Link_example.png)

(1) An object, (2) an empty Link, (3) a full Link to the first object (with overriding material), and (4) a Link to only some subelements of the object. The empty Link is not tied to the real object so it is not displayed in the [3D view](/3D_view "3D view").

## Usage: external documents

1. Start with a document that has at least one object which will be the source of the Link.
2. Open a new document or an existing document. For easier handling, use ![](/src/assets/images/Std_TreeMultiDocument.svg) [Std TreeMultiDocument](/Std_TreeMultiDocument "Std TreeMultiDocument") to show both documents in the [tree view](/Tree_view "Tree view"). Before you proceed, [save](/Std_Save "Std Save") both documents. The Link won't be able to find its source and target unless both documents are saved on disk.
3. In the first document, select the object that you wish to link; then switch tabs in the [main view area](/Main_view_area "Main view area") to switch to the second document.
4. Press ![](/src/assets/images/Std_LinkMake.svg) [Make link](/Std_LinkMake "Std LinkMake"). The produced object has the same icon as the original object, but has an additional arrow overlay indicating it is a Link coming from an external document.

_Notes:_

- When saving the document with the Link, it will also ask to [save](/Std_Save "Std Save") the source document which contains the original object.
- To include the original object in the document with the Link, use ![](/src/assets/images/Std_LinkImport.svg) [Std LinkImport](/Std_LinkImport "Std LinkImport") or ![](/src/assets/images/Std_LinkImportAll.svg) [Std LinkImportAll](/Std_LinkImportAll "Std LinkImportAll").

* ![](/src/assets/images/Std_LinkMake.svg) [Std LinkMake](/Std_LinkMake "Std LinkMake") can be used on an existing Link object, in order to create a Link to a Link which ultimately resolves to the original object in the source document. This can be used with ![](/src/assets/images/Std_LinkMakeRelative.svg) [Std LinkMakeRelative](/Std_LinkMakeRelative "Std LinkMakeRelative") to pick only certain subelements as well.

![](/src/assets/images/Std_Link_tree_documents_example.png) ![](/src/assets/images/Std_Link_documents_example.png)

(1, 2) Two objects from a source document linked into a target document, (3) a Link to the second Link (with overriding material), and (4) a Link to the subelements of the second Link.

### Dragging and dropping

Instead of switching document tabs, you can create Links by performing a drag and drop operation in the [tree view](/Tree_view "Tree view"): select the source object from the first document, drag it, then drop it into the second document's name while holding the Alt key in the keyboard.

Dragging and dropping results in different actions depending on the modifier key that is held.

- Without modifier key it simply moves the object from one document to the other; an inclined arrow is shown in the cursor.
- Holding the Ctrl key copies the object; a plus sign is shown in the cursor.
- Holding the Alt key creates a Link; a pair of chain links is shown in the cursor.

For the Ctrl and Alt modifiers, dragging and dropping can also be done with a single document. That is, dragging an object and dropping it into the same document's name can be used to create multiple copies or multiple Links to it.

## Groups

![](/src/assets/images/Std_LinkMake.svg) [Std LinkMake](/Std_LinkMake "Std LinkMake") can be used on ![](/src/assets/images/Std_Part.svg) [Std Parts](/Std_Part "Std Part") in order to quickly duplicate groups of objects positioned in space, that is, [assemblies](/Assembly "Assembly").

![](/src/assets/images/Std_Link_tree_Std_Part_example.png)

Link created from a [Std Part](/Std_Part "Std Part"); the objects are not duplicated but they are listed under the original container and under the Link container.

A regular ![](/src/assets/images/Std_Group.svg) [Std Group](/Std_Group "Std Group") does not possess a Data**Placement** property, so it cannot control the position of the objects inside of it. However, when ![](/src/assets/images/Std_LinkMake.svg) [Std LinkMake](/Std_LinkMake "Std LinkMake") is used with ![](/src/assets/images/Std_Group.svg) [Std Group](/Std_Group "Std Group"), the resulting Link behaves essentially like a ![](/src/assets/images/Std_Part.svg) [Std Part](/Std_Part "Std Part"), and can also be moved in space.

![](/src/assets/images/Std_Link_tree_Std_Group_example.png) ![](/src/assets/images/Std_Link_Std_Group_example.png)

Link created from a [Std Group](/Std_Group "Std Group"); the objects are not duplicated but they are listed under the original container and under the Link container. The Link (with overriding material) can be moved in space, just like a [Std Part](/Std_Part "Std Part").

A Link to a ![](/src/assets/images/Std_Part.svg) [Std Part](/Std_Part "Std Part") will keep the visibility of the objects synchronized with the original Part; so if you hide one object in a Link, it will be hidden in all Links and in the original object. On the other hand a Link to a ![](/src/assets/images/Std_Group.svg) [Std Group](/Std_Group "Std Group") will allow independent control of the visibilities.

![](/src/assets/images/Std_Link_tree_Std_Part_visibility.png) ![](/src/assets/images/Std_Link_tree_Std_Group_visibility.png)

Left: [Std Part](/Std_Part "Std Part") with two objects, and two Links to the Part; the visibility of the objects is synchronized. Right: [Std Group](/Std_Group "Std Group") with two objects, and two Links to the Group; the visibility of the objects is independently controlled in each group.

## Overriding appearance

When a Link is created, by default the View**Override Material** is `false`, so the Link will have the same appearance as the original Data**Linked Object**.

When View**Override Material** is set to `true`, the View**Shape Material** property will now control the appearance of the Link.

Regardless of the state of View**Override Material**, it is possible to individually set the appearance of the subelements (vertices, edges, faces) of a Link.

1. Select the Link in the [tree view](/Tree_view "Tree view"). Open the context menu (right-click), and pick **Override colors**.
2. Now pick the individual subelements that you want in the [3D view](/3D_view "3D view"), press Edit, and change the properties including transparency.
3. To remove the custom attributes, select the elements in the list, and press Remove.
4. When you are satisfied with the result, press OK to close the dialog.

_Note:_ as of v0.19, the coloring of the subelements is subject to the [topological naming problem](/Topological_naming_problem "Topological naming problem") so it should be done as the last modelling step, when the model is not subject to change any more.

![](/src/assets/images/Std_Link_override_color_example.png)

(1) An original object, (2) a Link with overriding material, and (3) a second Link with individual modified subelements.

## Link Array

_See also:_ [Draft OrthoArray](/Draft_OrthoArray "Draft OrthoArray").

When a Link is created, by default its Data**Element Count** is `0`, so only a single Link object will be visible in the [tree view](/Tree_view "Tree view").

Given that Data**Show Element** is `true` by default, when Data**Element Count** is set to `1` or more, automatically more Links will be created below the first one; each new Link can be placed in the desired position by changing its own Data**Placement** property.

In similar way, each element of the array can have its own appearance changed, either by the View**Override Material** and View**Shape Material** properties, or by using the **Override colors** menu on the entire array and then selecting individual faces; this is described in [Overriding appearance](#Overriding_appearance).

![](/src/assets/images/Std_Link_tree_array_example.png) ![](/src/assets/images/Std_Link_array_example.png)

(1) Original object, and (2, 3, 4) a Link array with three elements, each in a different position. The first Link has overridden material and transparent faces, the other two have custom face colors.

Once you are satisfied with the placement and properties of the Link elements in the array, you may change Data**Show Element** to `false` in order hide the individual Links in the [tree view](/Tree_view "Tree view"); this has the benefit of making the system more responsive, particularly if you have many objects in the document.

When creating this type of Link array, you must place each of the elements manually; however, if you would like to use specific patterns to place the copies, you may use the array tools of the ![](/src/assets/images/Workbench_Draft.svg) [Draft Workbench](/Draft_Workbench "Draft Workbench"), like ![](/src/assets/images/Draft_OrthoArray.svg) [Draft OrthoArray](/Draft_OrthoArray "Draft OrthoArray"), ![](/src/assets/images/Draft_PolarArray.svg) [Draft PolarArray](/Draft_PolarArray "Draft PolarArray"), and ![](/src/assets/images/Draft_CircularArray.svg) [Draft CircularArray](/Draft_CircularArray "Draft CircularArray"); these commands can create normal copies or Link copies depending on the options at creation time.

## Visibility

When Data**Show Element** is `true` and individual elements are listed in the [tree view](/Tree_view "Tree view") in a [Link Array](#Link_Array), each Link can be shown or hidden by pressing the Space bar in the keyboard.

Another way to hide the individual elements is using the **Override colors** menu.

1. Select the array, open the **Override colors** menu (right click).
2. In the [3D view](/3D_view "3D view"), pick any subelement from any Link in the array.
3. Press Hide. An icon of an eye ![](/src/assets/images/Invisible.svg) should appear, indicating that this element has been hidden from the [3D view](/3D_view "3D view"). The object will temporarily show itself when the cursor hovers over the ![](/src/assets/images/Invisible.svg) icon.
4. You can click OK to confirm the operation and close the dialog. The Link will remain hidden even if it is shown as visible in the [tree view](/Tree_view "Tree view").

![](/src/assets/images/Std_Link_array_visibility_example.png)

Element color dialog that is available when opening the context menu of a Link object in the tree view.

If you wish to restore the visibility of this array element, enter the dialog once more, pick the eye icon, then click on Remove to remove the hidden status, and click OK to confirm and close the dialog. The element will be visible in the [3D view](/3D_view "3D view") again.

When the Link is for a ![](/src/assets/images/Std_Part.svg) [Std Part](/Std_Part "Std Part") or a ![](/src/assets/images/Std_Group.svg) [Std Group](/Std_Part "Std Part"), the **Override colors** menu works in similar way as with arrays; it allows controlling the face color, entire object color, and visibility of the objects in the group.

![](/src/assets/images/Std_Link_Std_Part_visibility_example.png) ![](/src/assets/images/Std_Link_Std_Part_visibility_example_3D.png)

A [Std Part](/Std_Part "Std Part") containing three objects, and a Link to that Part; in the Link, (1) the first object is made invisible, (2) the second object has some subelements with different colors, (3) the entire third object has a different color and level of transparency.

## Properties

An [App Link](/App_Link "App Link") (`App::Link` class) is derived from the basic [App DocumentObject](/App_DocumentObject "App DocumentObject") (`App::DocumentObject` class), therefore it has the latter's basic properties like Data**Label** and Data**Label2**.

The following are the specific properties available in the [property editor](/Property_editor "Property editor"). Hidden properties can be shown by using the **Show hidden** command in the context menu of the [property editor](/Property_editor "Property editor").

### Data

Link

- Data (LockDynamic, Hidden)**ColoredElements** (`LinkSubHidden`): list of Link elements that have had their color overriden.
- Data (LockDynamic)**Element Count** (`IntegerConstraint`): Link element count. It defaults to `0`. If it is `1` or larger, the [App Link](/App_Link "App Link") will behave like an array, and will duplicate the same Data**Linked Object** many times. If Data**Show Elements** is `true`, each element in the array will be displayed in the [tree view](/Tree_view "Tree view"), and each can have its own Data**Placement** modified. Each Link copy will have a name based on the Link's [Name](/Object_name "Object name"), augmented by `_iN`, where `N` is a number starting from `0`. For example, with a single `Link`, the copies will be named `Link_i0`, `Link_i1`, `Link_i2`, etc.
- Data (Immutable, Hidden, LockDynamic)**ElementList** (`LinkList`): the list of Link elements.
- Data (LockDynamic)**LinkClaimChild** (`Bool`): Claim the linked object as a child
- Data (LockDynamic)**LinkCopyOnChange** (`Enumeration`):
  - `Disabled`: disable the creation of a copy of the linked object, triggered by a change of any of its properties set as `CopyOnChange`.
  - `Enabled`: enable a deep copy of the linked object if any of its properties marked as `CopyOnChange` are changed. After the deep copy is performed, there won't be any linkage between the original and the copied object. Therefore, changes in the original object won't be reflected in the copies. Note: this is a preparatory state, the actual copy will only happen once `CopyOnChange` properties are changed. See the `Owned` state.
  - `Owned`: indicates that the linked object has been copied, and the copy is owned by the Link. This state is set by the Link automatically, not by the user. The workflow is as follows: if the state is `Enabled` and the user modifies any properties previously set as `CopyOnChange`, then the state is changed to `Owned`. That's the point in time when the Link will perform the deep copy of the linked object. In this state, the link will not try to sync any changes of the original linked object back to the copy.
  - `Tracking`: same as `Enabled`, but additionally the copy will be automatically refreshed if the original source object changes.
- Data (Hidden, LockDynamic)**LinkCopyOnChangeGroup** (`Link`): Linked to a internal group object for holding on change copies
- Data (Hidden, LockDynamic)**LinkCopyOnChangeSource** (`XLink`): The copy on change source object
- Data (Hidden, LockDynamic)**LinkCopyOnChangeTouched** (`Bool`): Indicating the copy on change source object has been changed
- Data (LockDynamic)**LinkExecute** (`String`): name of the execute function that will run for this particular Link object. It defaults to `'appLinkExecute'`. Set it to `'None'` to disable it.
- Data (Hidden, LockDynamic)**Link Placement** (`Placement`): it is an offset applied on top of the Data**Placement** of the Data**Linked Object**. This property is normally hidden but appears if Data**Link Transform** is set to `true`; in this case, Data**Placement** now becomes hidden.
- Data**Link Transform** (`Bool`): it defaults to `false`, in which case the Link will override the Data**Linked Object'**s own placement. If it is set to `true`, the Link will be placed in the same position as the Data**Linked Object**, and its placement will be relative to the Data**Linked Object'**s placement. This can also be achieved with ![](/src/assets/images/Std_LinkMakeRelative.svg) [Std LinkMakeRelative](/Std_LinkMakeRelative "Std LinkMakeRelative").
- Data**Linked Object** (`XLink`): it indicates the source object of the [App Link](/App_Link "App Link"); this can be an entire object, or a subelement of it (vertex, edge, or face).
- Data**Placement** (`Placement`): the placement of the Link in absolute coordinates.
- Data (LockDynamic)**PlacementList** (`PlacementList`): The placement for each Link element
- Data**Scale** (`Float`): it defaults to `1.0`. It is a factor for uniform scaling in each direction `X`, `Y`, and `Z`. For example, a cube of `2 mm` x `2 mm` x `2 mm`, that is scaled by `2.0`, will result in a shape with dimensions `4 mm` x `4 mm` x `4 mm`.
- Data**Scale List** (`VectorList`): the scale factor for each Link element.
- Data (Hidden)**Scale Vector** (`Vector`): the scale factor for each component `(X, Y, Z)` for all Link elements when Data**Element Count** is `1` or larger. If Data**Scale** is other than `1.0`, this same value will be used in the three components.
- Data**Show Element** (`Bool`): it defaults to `true`, in which case the [tree view](/Tree_view "Tree view") will show the individual Link copies, as long as Data**Element Count** is `1` or larger.
- Data (NoPersist, ReadOnly, Hidden)**\_ChildCache** (`LinkList`): TBD
- Data (Hidden, Output)**\_LinkOwner** (`Integer`): TBD
- Data (NoPersist, Hidden)**\_LinkTouched** (`Bool`): TBD

Base

- Data (Hidden)**Proxy** (`PythonObject`): a custom class associated with this object. This only exists for the [Python](/Python "Python") version. See [Scripting](/Std_LinkMake#Scripting "Std LinkMake").

The [App Link](/App_Link "App Link") object will additionally show the properties of the original Data**Linked Object**, so the [property editor](/Property_editor "Property editor") may have groups of properties like Attachment, Box, Draft, etc.

### View

Link

- View**Draw Style** (`Enumeration`): it defaults to `None`; it can be `Solid`, `Dashed`, `Dotted`, `Dashdot`; defines the style of the edges in the [3D view](/3D_view "3D view").
- View**Line Width** (`FloatConstraint`): a float that determines the width in pixels of the edges in the [3D view](/3D_view "3D view"). It defaults to `2.0`.
- View**Override Material** (`Bool`): it defaults to `false`; if set to `true` it will override the Data**Linked Object'**s material, and it will display the colors defined in View**Shape Material**.
- View**Point Size** (`FloatConstraint`): similar to View**Line Width**, defines the size of the vertices.
- View**Selectable** (`Bool`): if it is `true`, the object can be picked with the pointer in the [3D view](/3D_view "3D view"). Otherwise, the object cannot be selected until this option is set to `true`.

- View**Shape Material** (`Material`): this property includes sub-properties that describe the appearance of the object.
  - View**Diffuse Color**, it defaults to `(0.4, 1.0, 1.0)`, which is displayed as `[102, 255, 255]` on base 255, light blue .
  - View**Ambient Color**, it defaults to `(0.2, 0.2, 0.2)`, which is displayed as `[51, 51, 51]` on base 255, dark gray .
  - View**Specular Color**, it defaults to `(0.0, 0.0, 0.0)`, which is displayed as `[0, 0, 0]` on base 255, black .
  - View**Emissive Color**, it defaults to `(0.0, 0.0, 0.0)`, which is displayed as `[0, 0, 0]` on base 255, black .
  - View**Shininess**, it defaults to `0.2`
  - View**Transparency**, it defaults to `0.0`.

Base

- View (Hidden)**Child View Provider** (`PersistentObject`):
- View (Hidden)**Material List** (`MaterialList`): _(read-only)_ if individual materials have been added, they will be listed here.
- View (Hidden)**Override Color List** (`ColorList`): _(read-only)_ if the individual faces or edges of the link have been overridden they will be listed here.
- View (Hidden)**Override Material List** (`BoolList`): _(read-only)_ if the individual materials of the link have been overridden they will be listed here.

Display Options

- View**Display Mode** (`Enumeration`): `'Link'` or `'ChildView'`.
- View**Show In Tree** (`Bool`): see the information in [App FeaturePython](/App_FeaturePython "App FeaturePython").
- View**Visibility** (`Bool`): see the information in [App FeaturePython](/App_FeaturePython "App FeaturePython").

Selection

- View**On Top When Selected** (`Enumeration`): see the information in [App FeaturePython](/App_FeaturePython "App FeaturePython").
- View**Selection Style** (`Enumeration`): see the information in [App FeaturePython](/App_FeaturePython "App FeaturePython").

It will additionally show the view properties of the original Data**Linked Object**.

## Inheritance

An [App Link](/App_Link "App Link") is formally an instance of the class `App::Link`, whose parent is the basic [App DocumentObject](/App_DocumentObject "App DocumentObject") (`App::DocumentObject` class). It is a very low level object, which can be used with most other document objects.

![](/src/assets/images/FreeCAD_core_objects.svg)

Simplified diagram of the relationships between the core objects in the program. The `App::Link` object is a core component of the system, it does not depend on any workbench, but it can be used with most objects created in all workbenches.

## Scripting

_See also:_ [FreeCAD Scripting Basics](/FreeCAD_Scripting_Basics "FreeCAD Scripting Basics"), and [scripted objects](/Scripted_objects "Scripted objects").

See [Part Feature](/Part_Feature "Part Feature") for the general information.

An App Link is created with the `addObject()` method of the document. It can define its Data**Linked Object** by overriding its `LinkedObject` attribute, or by using its `setLink` method.

```
import FreeCAD as App

doc = App.newDocument()
bod1 = App.ActiveDocument.addObject("Part::Box", "Box")
bod2 = App.ActiveDocument.addObject("Part::Cylinder", "Cylinder")
bod1.Placement.Base = App.Vector(10, 0, 0)
bod2.Placement.Base = App.Vector(0, 10, 0)

obj1 = App.ActiveDocument.addObject("App::Link", "Link")
obj2 = App.ActiveDocument.addObject("App::Link", "Link")

obj1.LinkedObject = bod1
obj2.setLink(bod2)
obj1.Placement.Base = App.Vector(-10, -10, 0)
obj2.Placement.Base = App.Vector(10, -10, 0)
obj1.ViewObject.OverrideMaterial = True
App.ActiveDocument.recompute()

```

The basic `App::Link` doesn't have a Proxy object so it can't be fully used for sub-classing.

Therefore, for [Python](/Python "Python") subclassing, you should create the `App::LinkPython` object.

```
import FreeCAD as App

doc = App.newDocument()
obj = App.ActiveDocument.addObject("App::LinkPython", "Link")
obj.Label = "Custom label"

```

## Further reading

If you want to skip the historical details, go to the [user-oriented introduction to links](https://github.com/realthunder/FreeCAD_assembly3/wiki/Link).

The [App Link](/App_Link "App Link") object was introduced after 2 years of development and prototyping. This component was thought and developed almost single-handedly by user _realthunder_. The motivations and design implementations behind this project are described in his GitHub page, [Link](https://github.com/realthunder/FreeCAD_assembly3/wiki/Link). In order to accomplish this feature, several core changes to FreeCAD were made; these were also extensively documented in [Core-Changes](https://github.com/realthunder/FreeCAD_assembly3/wiki/Core-Changes).

The App Link project started after the redesign of the [PartDesign Workbench](/PartDesign_Workbench "PartDesign Workbench") was complete in v0.17. The history of App Link can be traced to some essential forum threads:

- [Why an object can only be inside one App::Part?](https://forum.freecadweb.org/viewtopic.php?f=19&t=21505) (March 2017)
- [Introducing App::Link/XLink](https://forum.freecadweb.org/viewtopic.php?f=10&t=21586) (March 2017)
- [Links](https://forum.freecadweb.org/viewtopic.php?f=20&t=22216) (May 2017)
- [Realthunder Link implementation: Architecture discussion](https://forum.freecadweb.org/viewtopic.php?f=20&t=23015) (June 2017)
- [PR #876: Link, stage one, context aware selection](https://forum.freecadweb.org/viewtopic.php?f=17&t=23419) (July 2017)
- [Preview: Link, stage two, API groundwork](https://forum.freecadweb.org/viewtopic.php?f=17&t=23626) (July 2017)
- [Assembly3 preview](https://forum.freecadweb.org/viewtopic.php?f=20&t=25712) (December 2017)
- [Merging of my Link branch](https://forum.freecadweb.org/viewtopic.php?f=10&t=29542) (June 2018)

Finally, the pull request and merge happened:

- [App::Link: the big merge](https://forum.freecadweb.org/viewtopic.php?f=27&t=38621), old thread (July 2019), [pull request #2350](https://github.com/FreeCAD/FreeCAD/pull/2350) (the BIG merge), [LinkMerge branch](https://github.com/realthunder/FreeCAD/tree/LinkMerge).
- [App::Link: the big merge](https://forum.freecadweb.org/viewtopic.php?f=8&t=37757), main thread (July 2019)
- [A simple path description of Link, 019, Link stage, Asm3, merge?](https://forum.freecadweb.org/viewtopic.php?p=329054#p329054) (August 2019)
- [PR#2559: expose link and navigation actions](https://forum.freecadweb.org/viewtopic.php?f=17&t=39672), an introduction to the Link feature in 0.19 (September 2019).

Other miscellaneous "links" about Link include:

- [Dynamic linked object](/Dynamic_linked_object "Dynamic linked object") - A pattern with Link and assemblies that aims to reduce duplication of assembly related logic such as orientation, positioning, or number of instances.

Retrieved from "<http://wiki.freecad.org/index.php?title=Std_LinkMake/en&oldid=1560677>"
