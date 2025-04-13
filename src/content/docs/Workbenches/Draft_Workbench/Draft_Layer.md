---
title: Draft Layer
---

|                                                                                                                       |
| --------------------------------------------------------------------------------------------------------------------- |
| Draft Layer                                                                                                           |
| Menu location                                                                                                         |
| Utilities → New layer                                                                                                 |
| Workbenches                                                                                                           |
| [Draft](/Draft_Workbench "Draft Workbench")                                                                           |
| Default shortcut                                                                                                      |
| _None_                                                                                                                |
| Introduced in version                                                                                                 |
| 0.19                                                                                                                  |
| See also                                                                                                              |
| [Draft AutoGroup](/Draft_AutoGroup "Draft AutoGroup"), [Draft LayerManager](/Draft_LayerManager "Draft LayerManager") |
|                                                                                                                       |

## Description

The ![](/src/assets/images/Draft_Layer.svg) **Draft Layer** command creates a Draft Layer. A layer is a special kind of group with a number of [visual properties](#View). These properties, and any changes to them, are propagated to the objects placed inside the layer. The layers themselves are put in another special group: the Draft LayerContainer.

## Usage

1. There are several ways to invoke the command:
   - Press the ![](/src/assets/images/Draft_Layer.svg) [Layer](/Draft_Layer "Draft Layer") button.
   - Select the **Utilities → ![](/src/assets/images/Draft_Layer.svg) New layer** option from the menu, or from the [Tree view](/Tree_view "Tree view") or [3D view](/3D_view "3D view") context menu.
   - If the layer container already exists: right-click it in the [Tree view](/Tree_view "Tree view") and select the **![](/src/assets/images/Draft_NewLayer.svg) Add new layer** option from context menu.
2. If it does not exist the layer container is created first.
3. A layer is created and put in the layer container.
4. Optionally change the [properties](#Properties) of the layer.
5. Optionally put objects in the layer by drag and dropping them on the layer in the [Tree view](/Tree_view "Tree view"). Objects can also be put in a layer by editing the Data**Group** property of the layer.
6. Optionally [activate](#Layer_options) the layer.

## Context menu

### Layer container options

For a Draft LayerContainer these additional options are available in the [Tree view](/Tree_view "Tree view") context menu:

- **![](/src/assets/images/Draft_NewLayer.svg) Add new layer**: adds a new layer to the current document.
- **![](/src/assets/images/Draft_SetStyle.svg) Reassign properties of all layers**: removes [overrides](#Overrides) from objects in all layers by reassigning the properties of the layer they are in. [introduced in 1.1](/Release_notes_1.1 "Release notes 1.1")
- **![](/src/assets/images/Draft_Layers.svg) Merge layer duplicates**: merges all layers with the same base label.

: The base label of a layer is its Data**Label** stripped of trailing digits and spaces. All layers with the same base label are merged into a single layer with the Data**Label** set to that base label.

### Layer options

For a Draft Layer these additional options are available in the [Tree view](/Tree_view "Tree view") context menu:

- **![](/src/assets/images/Button_right.svg) [Activate this layer](/Draft_AutoGroup "Draft AutoGroup")**: activates the selected layer.
- **![](/src/assets/images/Draft_SetStyle.svg) Reassign properties of layer**: removes [overrides](#Overrides) from objects in the layer by reassigning the properties of the layer. [introduced in 1.1](/Release_notes_1.1 "Release notes 1.1")
- **![](/src/assets/images/Draft_SelectGroup.svg) [Select layer contents](/Draft_SelectGroup "Draft SelectGroup")**: selects the objects inside the selected layer.

## Drag and drop behavior

[introduced in 0.21](/Release_notes_0.21 "Release notes 0.21")

If you drop an object from a [Std Group](/Std_Group "Std Group"), or a group-like object such as an [Arch BuildingPart](/Arch_BuildingPart "Arch BuildingPart"), on a layer in the [Tree view](/Tree_view "Tree view"), it is not removed from the group, and vice versa. To remove an object from a layer it must be dropped on another layer or on the document node. There is no need to hold down the Ctrl key when dragging from or dropping on a layer.

## Overrides

[introduced in 1.1](/Release_notes_1.1 "Release notes 1.1")

Objects inside a layer can have overrides. The following logic applies:

- When an object is put in a layer it always adopts the properties of that layer.
- A property of the object that is subsequently changed is considered an override.
- When a property of the layer, or the object in the layer, is then changed so that they match again, there is no longer an override, and the property is synced again.

The layer container and all layers have a [context menu](#Context_menu) option to reassign properties and thereby remove overrides.

## Notes

- A new layer can also be created with the [Draft AutoGroup](/Draft_AutoGroup "Draft AutoGroup") command or with the [Draft LayerManager](/Draft_LayerManager "Draft LayerManager").

## Properties

See also: [Property editor](/Property_editor "Property editor").

A Draft Layer object is derived from an [App FeaturePython](/App_FeaturePython "App FeaturePython") object and inherits all its properties. It also has the following additional properties:

### Data

Layer

- Data**Group** (`LinkList`): specifies the objects that are inside the layer.

### View

Layer

The properties in this section are applied to objects that are put inside the layer. And any changes to these properties are propagated to them. For two properties, View**Line Color** and View**Shape Color**, this behavior is optional.

- View**Draw Style** (`Enumeration`): specifies the draw style of the layer: `Solid`, `Dashed`, `Dotted` or `Dashdot`
- View**Line Color** (`Color`): specifies the line color of the layer.
- View**Line Width** (`Float`): specifies the line width of the layer.
- View**Override Line Color Children** (`Bool`): specifies if changes to the View**Line Color** of the layer are propagated to the objects inside the layer.
- View**Override Shape Appearance Children** (`Bool`): specifies if changes to the View**Shape Appearance** of the layer are propagated to the objects inside the layer. [introduced in 1.0](/Release_notes_1.0 "Release notes 1.0")
- View**Shape Appearance** (`MaterialList`): specifies the shape appearance of the layer. [introduced in 1.0](/Release_notes_1.0 "Release notes 1.0")
- View (hidden)**Shape Color** (`Color`): specifies the shape color of the layer. It is kept synchronized with the **Diffuse Color** of the View**Shape Appearance**.
- View**Transparency** (`Percent`): specifies the transparency of the layer. It is kept synchronized with the **Transparency** of the View**Shape Appearance**.

Print

- View**Line Print Color** (`Color`): specifies the line print color of the layer.
- View**Use Print Color** (`Bool`): specifies if the View**Line Print Color** of the layer is used when a [TechDraw DraftView](/TechDraw_DraftView "TechDraw DraftView") is created from the objects inside the layer.

## Scripting

See also: [Autogenerated API documentation](https://freecad.github.io/SourceDoc/) and [FreeCAD Scripting Basics](/FreeCAD_Scripting_Basics "FreeCAD Scripting Basics").

To create a Draft Layer use the `make_layer` method of the Draft module. To add objects to, or remove objects from, a layer change its `Group` property.

```
import FreeCAD as App
import Draft

doc = App.newDocument()

layer = Draft.make_layer(line_color=(1.0, 0.0, 0.0, 0.0),
                         shape_color=(1.0, 1.0, 0.0, 0.0))

polygon1 = Draft.make_polygon(5, radius=1000)
polygon2 = Draft.make_polygon(3, radius=500)
polygon3 = Draft.make_polygon(6, radius=220)
layer.Group = [polygon1, polygon2, polygon3]

doc.recompute()

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Draft_Layer/en&oldid=1550423>"
