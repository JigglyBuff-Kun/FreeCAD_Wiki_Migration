---
title: 부품설계 작업대의 하위형상 점착제
---
|  |
| --- |
| PartDesign SubShapeBinder |
| Menu location |
| Part Design → Create a sub-object(s) shape binder |
| Workbenches |
| [부품설계 작업대](/PartDesign_Workbench/ko "PartDesign Workbench/ko") |
| Default shortcut |
| *None* |
| Introduced in version |
| 0.19 |
| See also |
| [복제](/index.php?title=PartDesign_Clone/ko&action=edit&redlink=1 "PartDesign Clone/ko (page does not exist)") |
|  |

## 설명

부품설계 작업대의**하위형상 점착제** 도구는 하나 이상의 상위 개체의 형상을 참조하는 형상 점착제를 만듭니다. 하위형상 점착제는 일반적으로 [몸통](/PartDesign_Body/ko "PartDesign Body/ko") 내부에서 몸통 외부의 형상을 참조하는 데 사용됩니다. 몸통에서 직접 외부 형상을 사용하는 것은 허용되지 않으며 범위를 벗어나는 오류가 발생합니다. But a 하위형상 점착제 can also be used without being nested in a Body.

A SubShapeBinder will track the relative placement of the referenced geometry, which is useful in the context of creating [assemblies](/Assembly "Assembly"), but on top of that also has its own placement.

참조되는 도형은 하나 이상의 요소로 구성될 수 있습니다. 각 요소는 개별 객체(예: [몸통](/PartDesign_Body/ko "PartDesign Body/ko")), 하위 객체(예: [부품](/Std_Part/ko "Std Part/ko") 내부의 [상자](/Part_Box/ko "Part Box/ko") 또는 몸통 내부의 [스케치](/PartDesign_NewSketch/ko "PartDesign NewSketch/ko") 또는 [도형특징](/PartDesign_Feature/ko "PartDesign Feature/ko")), 또는 하위 요소(면, 모서리, 꼭지점)가 될 수 있습니다. 어떤 도형을 선택해야 하는지는 하위형상 점착제의 의도된 목적에 따라 달라집니다. 부울 연산의 경우 고체를 선택해야 하고, [깔판생성](/index.php?title=PartDesign_Pad/ko&action=edit&redlink=1 "PartDesign Pad/ko (page does not exist)")작업의 경우 면, 스케치 또는 와이어를 사용할 수 있습니다. 그리고 스케치의 [외부 도형](/index.php?title=Sketcher_External/ko&action=edit&redlink=1 "Sketcher External/ko (page does not exist)")의 경우 또는 스케치를 부착하려면 하위 요소의 조합이 적절할 수 있습니다. 요소는 여러 부모 객체에 속할 수 있으며, 하위형상 점착제가 중첩된 몸통에 속할 수도 있습니다. 하위형상 점착는 [링크 기반](/index.php?title=Std_LinkMake/ko&action=edit&redlink=1 "Std LinkMake/ko (page does not exist)")이므로 참조된 도형은 외부 문서에 속할 수도 있습니다.

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
* The 데이터**Support** property contains the links to the referenced geometry. The property is read only by default, but can be changed by following the instructions described under [Start with empty SubShapeBinder](#Start_with_empty_SubShapeBinder).
* A SubShapeBinder created from a sketch can have an opposite "tool direction". For example a [Pad](/PartDesign_Pad "PartDesign Pad") created from the sketch may extend in the +Y direction, while a [Pad](/PartDesign_Pad "PartDesign Pad"), with the same properties, created from the SubShapeBinder extends in the -Y direction. Toggling the 데이터**Reversed** property (or checkbox) will solve this.

## PartDesign SubShapeBinder vs. PartDesign ShapeBinder

See [PartDesign ShapeBinder](/PartDesign_ShapeBinder#PartDesign_SubShapeBinder_vs._PartDesign_ShapeBinder "PartDesign ShapeBinder").

## Properties

A PartDesign SubShapeBinder object is derived from a [Part Feature](/Part_Feature "Part Feature") object and inherits all its properties. It also has the following additional properties:

### Data

Base

* 데이터**Support** (`XLinkSubList`): support for the geometry.
* 데이터**Fuse** (`Bool`): if it is `true` it will fuse the solid linked shapes.
* 데이터**Make Face** (`Bool`): if it is `true` it will created a face for the linked wires.
* 데이터**Claim Children** (`PropertyBool`): if it is `true` it will claim the linked objects as children in the [tree view](/Tree_view "Tree view").
* 데이터**Relative** (`Bool`): if it is `true` it will enable relative sub-object linking.
* 데이터**Bind Mode** (`Enumeration`): binding mode, `Synchronized`, `Frozen`, `Detached`.
* 데이터**Partial Load** (`Bool`): if it is `true` it will enable partial loading of the objects.
* 데이터 (hidden)**Context** (`XLink`): container object of this binder object.
* 데이터**Bind Copy On Change** (`Enumeration`)
* 데이터**Refine** (`Bool`): if `true` redundant edges will be removed (for example after a boolean operation).
* 데이터 (hidden)**\_ Version** (`Integer`): version of this type of object.
* 데이터 (hidden)**\_ Copied Link** (`XLinkSub`)

Cache

* 데이터 (hidden)**Cache\_\*** (`Matrix`): unity matrix (separate property for each object in 데이터**Support**).

Offsetting

* 데이터**Offset**: 2D offset to apply. If Offset = 0, then no offset is applied. If Offset < 0, then the offset is applied inward.
* 데이터**Offset Join Type**: Join method of offsetting non-tangent joints. The method can be `Arcs`, `Tangent` or `Intersection`.
* 데이터**Offset Fill** (`Bool`): If `true`, a face is made between the new wire and the original wire. See also the 데이터**Make Face** property.
* 데이터**Offset Open Result** (`Bool`): Affects the way open wires are processed. If `false`, an open wire is made. If `true`, a closed wire is made from a double-sided offset, with rounds around open vertices.
* 데이터**Offset Intersection** (`Bool`): Affects the way compounds are processed. If `false`, all children are processed independently. If `true`, and children are edges and wires, the children are offset in a collective manner.

### View

Base

* 보기**Use Binder Style** (`Bool`): If `true` the colors of the binder object depend on the [fine-tuning](/Fine-tuning#PartDesign_Workbench "Fine-tuning") parameter **DefaultDatumColor**. If `false`, normal shape colors are applied.

## Links

* [New Sublink Link Feature](https://forum.freecadweb.org/viewtopic.php?t=41450), usage explanation with video.

Retrieved from "<http://wiki.freecad.org/index.php?title=PartDesign_SubShapeBinder/ko&oldid=1515550>"