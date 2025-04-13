---
title: Sandbox Roy 043
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

The **Std LinkMake** command creates [App Links](/App_Link "App Link") (`App::Link` class). An App Link, or Link for short, is an object that references, links, to another object in the same document, or in another document. It is especially designed to efficiently duplicate a single object multiple times and forms the basis of the [Assembly3 Workbench](/Assembly3_Workbench "Assembly3 Workbench") and the [Assembly4 Workbench](/Assembly4_Workbench "Assembly4 Workbench").

A [Link](/App_Link "App Link") object can optionally behave like an array by duplicating its base object several times. This [Link Array](#Link_Array) object can also be created with the different array tools of the [Draft Workbench](/Draft_Workbench "Draft Workbench").

The **Std LinkMake** command is not defined by a particular workbench, but by the base system, thus it is found in the **structure toolbar** that is available in all [workbenches](/Workbenches "Workbenches").

## Usage

### Same document

1. Select one or more objects.
2. There are several ways to invoke the command:
   - Press the ![](/src/assets/images/Std_LinkMake.svg) [Make link](/Std_LinkMake "Std LinkMake") button.
   - Select the **Link actions → ![](/src/assets/images/Std_LinkMake.svg) Make link** option from the [Tree view](/Tree_view "Tree view") context menu or [3D view](/3D_view "3D view") context menu.
3. For each selected object a Link is created.

### External document

1. If required change the [Tree view](/Tree_view "Tree view") DocumentMode to MultiDocument with the ![](/src/assets/images/Std_TreeMultiDocument.svg) [Std TreeMultiDocument](/Std_TreeMultiDocument "Std TreeMultiDocument") command.
2. Open a source document and a target document.
3. Select one or more objects in the source document.
4. Switch to the target document by clicking its tab in the [Main view area](/Main_view_area "Main view area").
5. Press the ![](/src/assets/images/Std_LinkMake.svg) [Make link](/Std_LinkMake "Std LinkMake") button.
6. For each selected object a Link is created.

### Start with empty Link

1. Make sure no object is selected.
2. There are several ways to invoke the command:
   - Press the ![](/src/assets/images/Std_LinkMake.svg) [Make link](/Std_LinkMake "Std LinkMake") button.
   - Select the **Link actions → ![](/src/assets/images/Std_LinkMake.svg) Make link** option from the [Tree view](/Tree_view "Tree view") context menu or [3D view](/3D_view "3D view") context menu.
3. An empty Link is created.
4. In the [Property editor](/Property_editor "Property editor") click in the Data**Linked Object** field of the Link.
5. Press the ... button.
6. The **Link** dialog opens.
7. Do one of the following:
   - Select an object from the same document.
   - Switch to an external document by clicking its tab in the [Main view area](/Main_view_area "Main view area"), and select an object there.
8. In both cases you can also select a subelement from an object in the [3D view](/3D_view "3D view"). This will create a Sub-Link. See [Std LinkMakeRelative](/Std_LinkMakeRelative "Std LinkMakeRelative").
9. Press the OK button.

![](/src/assets/images/Std_Link_tree_example.png) ![](/src/assets/images/Std_Link_example.png)

(1) An object, (2) an empty Link, (3) a full Link to the first object (with overridden material), and (4) a Link to only some subelements of the object. The empty Link is not tied to a real object so it is not displayed in the [3D view](/3D_view "3D view").

![](/src/assets/images/Std_Link_tree_documents_example.png) ![](/src/assets/images/Std_Link_documents_example.png)

(1, 2) Two objects from a source document linked into a target document, (3) a Link to the second Link (its tab in the [Main view area](/Main_view_area "Main view area")), and (4) a Link to the subelements of the second Link.

### Drag and drop

You can also create Links by performing a drag and drop operation in the [Tree view](/Tree_view "Tree view").

1. Select one or more objects in the [Tree view](/Tree_view "Tree view").
2. Hold down the Alt key.
3. Drag the selection to the document label of the current document or an external document.
4. The cursor icon will change.
5. Drop the selection.

### Notes

- When linking to an object in an external document both the source document and the target document have to be saved at least once. This is required to determine the relative path for the Link.

## Link Array

A Link can be turned into an array where each element has its own placement and appearance.

1. Make sure the Data**Show Element** property of the Link is set to `true` (this is the default).
2. Change the Data**Element Count** of the Link to `1` or more. Using `1` results in an array with a single element, so you will typically use a value of `2` or more.
3. Each Link element in the array can be positioned individually by changing its own Data**Placement** property.
4. In a similar way, each element in the array can have its own appearance. See [Override appearance](#Override_appearance) below.
5. Once you are satisfied with the placement and properties of the Link elements in the array, you can change Data**Show Element** to `false` in order to hide them in the [Tree view](/Tree_view "Tree view").

![](/src/assets/images/Std_Link_tree_array_example.png) ![](/src/assets/images/Std_Link_array_example.png)

(1) Original object, and (2, 3, 4) a Link array with three elements, each in a different position. The first Link has an overridden material and transparent faces, the other two have custom face colors.

### Notes

- When creating this type of Link Array, you must place each of the elements manually. If you need a patterned array you should use the array tools of the [Draft Workbench](/Draft_Workbench "Draft Workbench"), like [Draft OrthoArray](/Draft_OrthoArray "Draft OrthoArray"), [Draft PolarArray](/Draft_PolarArray "Draft PolarArray"), and [Draft CircularArray](/Draft_CircularArray "Draft CircularArray"). These commands can create normal copies or Link copies depending on the options at creation time.

## Link to Std Part

![](/src/assets/images/Std_LinkMake.svg) [Std LinkMake](/Std_LinkMake "Std LinkMake") can be used on ![](/src/assets/images/Std_Part.svg) [Std Parts](/Std_Part "Std Part") in order to quickly duplicate groups of objects, [assemblies](/Assembly "Assembly"), positioned in space. A Link to a Part will keep the visibility of its child objects synchronized with that Part. If you hide a child object in the Link, it will be hidden in the original Part, as well as in all other Links to that Part.

## Link to Std Group

A regular ![](/src/assets/images/Std_Group.svg) [Std Group](/Std_Group "Std Group") does not have a Data**Placement** property, so it cannot control the position of its child objects. However when ![](/src/assets/images/Std_LinkMake.svg) [Std LinkMake](/Std_LinkMake "Std LinkMake") is used on a ![](/src/assets/images/Std_Group.svg) [Std Group](/Std_Group "Std Group") the resulting Link does have a Data**Placement** and, like a ![](/src/assets/images/Std_Part.svg) [Std Part](/Std_Part "Std Part"), can control the position of its child objects. A Link to a Group allows independent control of the visibility of its child objects.

## Link to PartDesign Body

A Link can be created from a [PartDesign Body](/PartDesign_Body "PartDesign Body"), but not from its individual features. To avoid selecting them instead of the Body, it is recommended to set the View**Display Mode Body** property to `Tip`.

## Link to Link

## Override appearance

By default a Link has the same appearance as the original Data**Linked Object**. There are two options, which can be combined, to override that.

### Override material

If the View**Override Material** property of a Link is set to `true`, its View**Shape Material** property will control its appearance. Note that if the View**Override Material** property of a Link Array is set to `true`, the individual View**Override Material** properties of its elements are ignored.

### Override colors

It is possible to change the appearance of individual subelements (vertices, edges and faces) of a Link. Sublements can also be child objects inside Links to Parts and Groups, and elements in a Link Array. Apart from changing their appearance, subelements can also be hidden.

1. Select a Link in the [Tree view](/Tree_view "Tree view").
2. Right-click and select the **Override colors...** option from the context menu.
3. The **Set element color** task panel opens.
4. Pick one or more subelements in the [3D view](/3D_view "3D view").
5. Do one of the following:
   - To change the appearance of the subelements:
     1. Press the Edit button.
     2. Specify the color and transparency in the **Select Color** dialog.
     3. The subelements receive the selected color and transparency, and are added to the list with a color swatch.
   - To hide the subelements:
     1. Press the Hide button.
     2. The subelements are hidden in the 3D view and are added to the list with an eye icon ![](/src/assets/images/Invisible.svg).
     3. When the cursor is over a hidden subelement in the list, it is temporarily made visible in the [3D view](/3D_view "3D view").
6. To remove custom attributes:
   1. Select one or more elements in the list.
   2. Press the Remove button.
7. Optionally press the Remove all button to remove all custom attributes from the Link.
8. Press the OK button to close task panel.

![](/src/assets/images/Std_Link_Std_Part_visibility_example.png) ![](/src/assets/images/Std_Link_Std_Part_visibility_example_3D.png)

A [Std Part](/Std_Part "Std Part") containing three objects, and a Link to that Part. In the Link, (1) the first object is made invisible, (2) the second object has some subelements with different colors, (3) the entire third object has a different color and a level of transparency.

### Notes

- The coloring of subelements is subject to the [topological naming problem](/Topological_naming_problem "Topological naming problem") so it should be done as the last modelling step, when the model is no longer subject to change.
- The individual elements in a Link Array are listed in the [Tree view](/Tree_view "Tree view") if Data**Show Element** is `true` and can then be shown or hidden by pressing the Space bar. This generally makes more sense than using the **Override colors...** option to control their visibility.
- If the **Alpha channel** option is missing in the **Select Color** dialog then add this Boolean preference: **Tools → Edit parameters... → BaseApp → Preferences → Dialog → DontUseNativeColorDialog**, and set it to `false`. See [Std DlgParameter](/Std_DlgParameter "Std DlgParameter") and [Fine-tuning](/Fine-tuning "Fine-tuning") for more information.

## Properties

The [App Link](/App_Link "App Link") (`App::Link` class) is derived from the basic [App DocumentObject](/App_DocumentObject "App DocumentObject") (`App::DocumentObject` class) and inherits all its properties.

The following are the specific properties available in the [Property editor](/Property_editor "Property editor"). The [App Link](/App_Link "App Link") will additionally show the properties of the original Data**Linked Object**. The names of these linked properties appear in green in the [Property editor](/Property_editor "Property editor"). Hidden properties can be shown by using the **Show hidden** command in the context menu of the [Property editor](/Property_editor "Property editor").

### Data

Link

- Data**Linked Object** (`XLink`): it indicates the source object of the [App Link](/App_Link "App Link"); this can be an entire object, or a subelement of it (vertex, edge, or face).
- Data**Link Transform** (`Bool`): it defaults to `false`, in which case the Link will override the Data**Linked Object'**s own placement. If it is set to `true`, the Link will be placed in the same position as the Data**Linked Object**, and its placement will be relative to the Data**Linked Object'**s placement. This can also be achieved with ![](/src/assets/images/Std_LinkMakeRelative.svg) [Std LinkMakeRelative](/Std_LinkMakeRelative "Std LinkMakeRelative").
- Data (Hidden)**Link Placement** (`Placement`): it is an offset applied on top of the Data**Placement** of the Data**Linked Object**. This property is normally hidden but appears if Data**Link Transform** is set to `true`; in this case, Data**Placement** now becomes hidden.
- Data**Placement** (`Placement`): the placement of the Link in absolute coordinates.
- Data**Show Element** (`Bool`): it defaults to `true`, in which case the [Tree view](/Tree_view "Tree view") will show the individual Link copies, as long as Data**Element Count** is `1` or larger.
- Data**Element Count** (`IntegerConstraint`): it defaults to `0`. If it is `1` or larger, the [App Link](/App_Link "App Link") will behave like an array, and will duplicate the same Data**Linked Object** many times. If Data**Show Elements** is `true`, each element in the array will be displayed in the [Tree view](/Tree_view "Tree view"), and each can have its own Data**Placement** modified. Each Link copy will have a name based on the Link's [Name](/Object_name "Object name"), augmented by `_iN`, where `N` is a number starting from `0`. For example, with a single `Link`, the copies will be named `Link_i0`, `Link_i1`, `Link_i2`, etc.
- Data**Link Execute** (`String`): name of the execute function that will run for this particular Link object. It defaults to `'appLinkExecute'`. Set it to `'None'` to disable it.
- Data (Hidden)**Colored Elements** (`LinkSubHidden`): list of Link elements that have had their color overriden.
- Data**Link Copy On Change** (`Enumeration`): `Disabled` or `Enabled`.
- Data**Scale** (`Float`): it defaults to `1.0`. It is a factor for uniform scaling in each direction `X`, `Y`, and `Z`. For example, a cube of `2 mm` x `2 mm` x `2 mm`, that is scaled by `2.0`, will result in a shape with dimensions `4 mm` x `4 mm` x `4 mm`.
- Data (Hidden)**Scale Vector** (`Vector`): the scale factor for each component `(X, Y, Z)` for all Link elements when Data**Element Count** is `1` or larger. If Data**Scale** is other than `1.0`, this same value will be used in the three components.
- Data**Scale List** (`VectorList`): the scale factor for each Link element.
- Data (Hidden)**Visibility List** (`BoolList`): _(read-only)_ the visibility state of each Link element, either `true` or `false`.
- Data (Hidden)**Placement List** (`PlacementList`): _(read-only)_ the placement for each Link element.
- Data (Hidden)**Element List** (`LinkList`): the list of Link elements.
- Data (Hidden)**\_ Link Touched** (`Bool`):
- Data (Hidden)**\_ Child Cache** (`LinkList`):
- Data (Hidden)**\_ Link Owner** (`Integer`):

Base

- Data (Hidden)**Proxy** (`PythonObject`): a custom class associated with this object. This only exists for the [Python](/Python "Python") version. See [Scripting](/Std_LinkMake#Scripting "Std LinkMake").

### View

Link

- View**Draw Style** (`Enumeration`): it defaults to `None`; it can be `Solid`, `Dashed`, `Dotted`; defines the style of the edges in the [3D view](/3D_view "3D view").
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
- View (hidden)**Proxy** (`PythonObject`): a custom [viewprovider](/Viewprovider "Viewprovider") class associated with this object. This only exists for the [Python](/Python "Python") version. See [Scripting](#Scripting).

Display Options

- View (Hidden)**Display Mode** (`Enumeration`): `Link` or `ChildView`.
- View**Show In Tree** (`Bool`): see the information in [App FeaturePython](/App_FeaturePython "App FeaturePython").
- View**Visibility** (`Bool`): see the information in [App FeaturePython](/App_FeaturePython "App FeaturePython").

Selection

- View**On Top When Selected** (`Enumeration`): see the information in [App FeaturePython](/App_FeaturePython "App FeaturePython").
- View**Selection Style** (`Enumeration`): see the information in [App FeaturePython](/App_FeaturePython "App FeaturePython").

## Scripting

_See also:_ [FreeCAD Scripting Basics](/FreeCAD_Scripting_Basics "FreeCAD Scripting Basics") and [scripted objects](/Scripted_objects "Scripted objects").

See [Part Feature](/Part_Feature "Part Feature") for the general information on adding objects to the document.

An App Link is created with the `addObject()` method of the document. its Data**Linked Object** can be defined by changing its `LinkedObject` property, or by using its `setLink` method.

```
import FreeCAD as App

doc = App.newDocument()
obj1 = App.ActiveDocument.addObject("Part::Box", "Box")
obj2 = App.ActiveDocument.addObject("Part::Cylinder", "Cylinder")
obj1.Placement.Base = App.Vector(10, 0, 0)
obj2.Placement.Base = App.Vector(0, 10, 0)

link1 = App.ActiveDocument.addObject("App::Link", "Link")
link2 = App.ActiveDocument.addObject("App::Link", "Link")

link1.LinkedObject = obj1
link2.setLink(obj2)
link1.Placement.Base = App.Vector(-10, -10, 0)
link2.Placement.Base = App.Vector(10, -10, 0)
link1.ViewObject.OverrideMaterial = True
App.ActiveDocument.recompute()

```

The basic `App::Link` doesn't have a Proxy object so it can't be fully used for sub-classing.

For [Python](/Python "Python") subclassing you should create a `App::LinkPython` object.

```
import FreeCAD as App

doc = App.newDocument()
obj = App.ActiveDocument.addObject("App::LinkPython", "Link")
obj.Label = "Custom label"

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Sandbox:Roy_043&oldid=1560700>"
