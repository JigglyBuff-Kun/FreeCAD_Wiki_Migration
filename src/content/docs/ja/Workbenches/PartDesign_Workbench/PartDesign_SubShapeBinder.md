---
title: パートデザイン・SubShapeBinder
---
|  |
| --- |
| PartDesign SubShapeBinder |
| Menu location |
| Part Design → Create a sub-object(s) shape binder |
| Workbenches |
| [PartDesign](/PartDesign_Workbench "PartDesign Workbench") |
| Default shortcut |
| *None* |
| Introduced in version |
| 0.19 |
| See also |
| [PartDesign Clone](/PartDesign_Clone "PartDesign Clone") |
|  |

## Description

The **PartDesign SubShapeBinder** tool creates a shape binder referencing geometry from one or more parent objects. A SubShapeBinder is typically used inside a [PartDesign Body](/PartDesign_Body "PartDesign Body") to reference geometry outside the Body. Using external geometry directly in a Body is not allowed and will lead to out of scope errors. But a SubShapeBinder can also be used without being nested in a Body.

A SubShapeBinder will track the relative placement of the referenced geometry, which is useful in the context of creating [assemblies](/Assembly "Assembly"), but on top of that also has its own placement.

The referenced geometry can consist of one or multiple elements. Each element can be an individual object (for example a [PartDesign Body](/PartDesign_Body "PartDesign Body")), a subobject (for example a [Part Box](/Part_Box "Part Box") inside a [Std Part](/Std_Part "Std Part"), or a [sketch](/PartDesign_NewSketch "PartDesign NewSketch") or [Feature](/PartDesign_Feature "PartDesign Feature") inside a Body), or a subelement (a face, edge or vertex). Which geometry should be selected depends on the intended purpose of the SubShapeBinder. For a Boolean operation you would need to select a solid. For a [Pad operation](/PartDesign_Pad "PartDesign Pad") a face, a sketch or a planar wire can be used. And for the [external geometry](/Sketcher_External "Sketcher External") in a sketch, or to attach a sketch, any combination of subelements may be appropriate. Elements can belong to different parent objects, and can even belong to the Body the SubShapeBinder is nested in. Because a SubShapeBinder is [Link-based](/Std_LinkMake "Std LinkMake") the referenced geometry can also belong to an external document.

![](/images/PartDesign_SubShapeBinder_example_1.png) ![](/images/PartDesign_SubShapeBinder_example_2.png)

On the left two solids created in two separate [Bodies](/PartDesign_Body "PartDesign Body").  
On the right two SubShapeBinders referencing geometry from the first Body, nested in the second Body, and moved to a different position.

![](/images/PartDesign_SubShapeBinder_example_3.png)

The two SubShapeBinders are used to create a [Boolean cut](/PartDesign_Boolean "PartDesign Boolean") and a [Pad](/PartDesign_Pad "PartDesign Pad") in the second Body.

## Usage

### Same document

1. If there are multiple Bodies in the document: optionally [activate the Body](/PartDesign_Body#Active_status "PartDesign Body") the SubShapeBinder should be nested in.
2. Select the required geometry. Subelements can only be selected in the [3D view](/3D_view "3D view").
3. There are several ways to invoke the tool:
   * Press the ![](/images/PartDesign_SubShapeBinder.svg) [PartDesign SubShapeBinder](/PartDesign_SubShapeBinder "PartDesign SubShapeBinder") button.
   * Select the **Part Design → ![](/images/PartDesign_SubShapeBinder.svg) Create a sub-object(s) shape binder** option from the menu.
4. The SubShapeBinder is created.
5. If there is only one Body in the document the SubShapeBinder is automatically added to it and the Body is activated. If this is the case and the SubShapeBinder should not be nested, it can be dragged out of the Body and dropped onto the ![](/images/Document.svg) document node in the [Tree view](/Tree_view "Tree view").

### External document

1. If required open the source document (the external document) and the target document. Both documents must have been saved at least once.
2. If there are multiple Bodies in the target document: optionally activate the Body the SubShapeBinder should be nested in.
3. Select the required geometry in the source document. Subelements can only be selected in the [3D view](/3D_view "3D view").
4. Switch to the target document by clicking its tab in the [Main view area](/Main_view_area "Main view area").
5. Invoke the tool as described above.

### Start with empty SubShapeBinder

1. Follow the instructions described under [Same document](#Same_document) above but without selecting geometry.
2. An empty SubShapeBinder is created.
3. Select the required geometry. Subelements can only be selected in the [3D view](/3D_view "3D view").
4. In the [Tree view](/Tree_view "Tree view") drag and drop the selection onto the SubShapeBinder. If you have selected subelements their parent objects are highlighted in the [Tree view](/Tree_view "Tree view"), indicating the objects to be dragged.
5. Optionally add more geometry in the same manner.
6. To replace already referenced geometry hold down Ctrl during the drag and drop operation.

## Notes

* 2D offsetting is supported for some shape types, included planar faces, edges and wires. Because offsetting is a difficult operation for the software it does not always succeed.
* A SubShapeBinder that is not nested in a Body can be used as the [Base Feature](/PartDesign_Body#Base_Feature "PartDesign Body") for a new Body.
* The データ**Support** property contains the links to the referenced geometry. The property is read only by default, but can be changed by following the instructions described under [Start with empty SubShapeBinder](#Start_with_empty_SubShapeBinder).
* A SubShapeBinder created from a sketch can have an opposite "tool direction". For example a [Pad](/PartDesign_Pad "PartDesign Pad") created from the sketch may extend in the +Y direction, while a [Pad](/PartDesign_Pad "PartDesign Pad"), with the same properties, created from the SubShapeBinder extends in the -Y direction. Toggling the データ**Reversed** property (or checkbox) will solve this.

## PartDesign SubShapeBinder vs. PartDesign ShapeBinder

See [PartDesign ShapeBinder](/PartDesign_ShapeBinder#PartDesign_SubShapeBinder_vs._PartDesign_ShapeBinder "PartDesign ShapeBinder").

## Properties

A PartDesign SubShapeBinder object is derived from a [Part Feature](/Part_Feature "Part Feature") object and inherits all its properties. It also has the following additional properties:

### Data

Base

* データ**Support** (`XLinkSubList`): support for the geometry.
* データ**Fuse** (`Bool`): if it is `true` it will fuse the solid linked shapes.
* データ**Make Face** (`Bool`): if it is `true` it will created a face for the linked wires.
* データ**Claim Children** (`PropertyBool`): if it is `true` it will claim the linked objects as children in the [tree view](/Tree_view "Tree view").
* データ**Relative** (`Bool`): if it is `true` it will enable relative sub-object linking.
* データ**Bind Mode** (`Enumeration`): binding mode, `Synchronized`, `Frozen`, `Detached`.
* データ**Partial Load** (`Bool`): if it is `true` it will enable partial loading of the objects.
* データ (hidden)**Context** (`XLink`): container object of this binder object.
* データ**Bind Copy On Change** (`Enumeration`)
* データ**Refine** (`Bool`): if `true` redundant edges will be removed (for example after a boolean operation).
* データ (hidden)**\_ Version** (`Integer`): version of this type of object.
* データ (hidden)**\_ Copied Link** (`XLinkSub`)

Cache

* データ (hidden)**Cache\_\*** (`Matrix`): unity matrix (separate property for each object in データ**Support**).

Offsetting

* データ**Offset**: 2D offset to apply. If Offset = 0, then no offset is applied. If Offset < 0, then the offset is applied inward.
* データ**Offset Join Type**: Join method of offsetting non-tangent joints. The method can be `Arcs`, `Tangent` or `Intersection`.
* データ**Offset Fill** (`Bool`): If `true`, a face is made between the new wire and the original wire. See also the データ**Make Face** property.
* データ**Offset Open Result** (`Bool`): Affects the way open wires are processed. If `false`, an open wire is made. If `true`, a closed wire is made from a double-sided offset, with rounds around open vertices.
* データ**Offset Intersection** (`Bool`): Affects the way compounds are processed. If `false`, all children are processed independently. If `true`, and children are edges and wires, the children are offset in a collective manner.

### View

Base

* ビュー**Use Binder Style** (`Bool`): If `true` the colors of the binder object depend on the [fine-tuning](/Fine-tuning#PartDesign_Workbench "Fine-tuning") parameter **DefaultDatumColor**. If `false`, normal shape colors are applied.

## Links

* [New Sublink Link Feature](https://forum.freecadweb.org/viewtopic.php?t=41450), usage explanation with video.

Retrieved from "<http://wiki.freecad.org/index.php?title=PartDesign_SubShapeBinder/ja&oldid=1539429>"