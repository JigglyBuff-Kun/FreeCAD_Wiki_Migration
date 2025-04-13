---
title: 特徴の編集
---
## 概要

This page explains the feature editing workflow of the ![](/images/Workbench_PartDesign.svg) [PartDesign Workbench](/PartDesign_Workbench "PartDesign Workbench").

## Body

Working in PartDesign requires first creating a ![](/images/PartDesign_Body.svg) [Body](/PartDesign_Body "PartDesign Body"). The Body is a container intended to hold a single contiguous solid. When a Body is created, an Origin object, a local coordinate system consisting of standard reference planes (XY, XZ, YZ) and axes (X, Y, Z), is automatically added. The solid is then built by adding features. Each [feature](/PartDesign_Feature "PartDesign Feature") is cumulative and adds to or subtracts from the result of the previous feature.

![](/images/PartDesign_Feature_example.png)

Feature editing in practice. From left to right:  
Body with a [box](/PartDesign_AdditiveBox "PartDesign AdditiveBox") feature.  
Body with a box and a [chamfer](/PartDesign_Chamfer "PartDesign Chamfer") feature.  
Body with a box, a chamfer and a [pocket](/PartDesign_Pocket "PartDesign Pocket") feature.

A document can contain multiple Bodies, but only one Body can be active. New features are added to the active Body. A Body can be activated or deactivated by double clicking it in the [Tree view](/Tree_view "Tree view"). The activate Body is highlighted in the Tree view.

![](/images/PartDesign_Body_tree.png)

### What is a contiguous solid?

A contiguous solid is an object like a casting or something machined from a single block of metal. If the object involves nails, screws or glue, it is not a contiguous solid. As a practical example, a wooden chair would be made of multiple Bodies, with one for each of its sub-components (legs, slats, seat, etc).

In FreeCAD version 1.0 an experimental property was introduced that allows the Body to have non-contiguous solids. This can also be set in the [Preferences](/PartDesign_Preferences#General "PartDesign Preferences") as default for newly created Bodies. This is not intended to be used to build, as in the example, a chair in one Body. It is meant to allow features that may produce disconnected solids that will be made contiguous by later features.

When a model requires multiple Bodies, like the wooden chair, the general purpose ![](/images/Std_Part.svg) [Part container](/Std_Part "Std Part") can be used to group them and move the whole as a unit.

### Body visibility management

By default a Body presents its most recent feature to the outside. This feature is the Tip of the Body. The Tip also marks the location where new features are added. It is possible to temporarily redefine the Tip to a feature in the middle of the Body to insert new objects (features, sketches or datum geometry) there. As a new feature is added to the Body, visibility of the previous feature is turned off, and the new feature becomes the Tip.

There can only be one feature visible at a time. It is possible to [toggle the visibility](/Std_ToggleVisibility "Std ToggleVisibility") of any feature in the Body, by selecting it in the Tree view and pressing the Spacebar, in effect going back in the history of the Body. Note that changing the visibility of features does not change the Tip of the Body.

### Moving and Reordering Objects

The features of a Body can be reordered, or moved to a different Body. Select the feature and right-click to get a context menu that offers both options. The operation may be prevented if the object has dependencies in the source Body, such as being attached to a face. To move a sketch to another Body, it should not contain links to external geometry.

![](/images/PartDesign_workflow.svg)

Schematic representation of the PartDesign workflow.

## Datum geometry

Datum geometry consists of custom planes, lines, points or externally linked shapes. They can be created for use as reference by sketches and features. There are many [attachment](/Part_EditAttachment "Part EditAttachment") options for datum objects.

In FreeCAD, datum planes make sense if you are placing sketches in non-standard orientations, that is, on planes offset or rotated around the three main axes. But since sketches can also be placed in non-standard orientations and have the same attachment options as datum planes, there is often no need to use them. Datum planes make the most sense if there is more than one sketch with the same non-standard orientation. Adjusting the orientation of the datum plane will then adjust all associated sketches and the features created from those sketches.

Although FreeCAD version 1.0 already has code to mitigate the [topological naming problem](/Topological_naming_problem "Topological naming problem"), it is still best practice to attach both sketches and datum planes to the base planes of the Body's Origin whenever possible. Referencing generated geometry (geometry that is the result of a feature operation, for example a pad or pocket) may yet result in less stable models. See [Advice for creating stable models](#Advice_for_creating_stable_models) below.

## 安定したモデリングのためのアドバイス

あるパラメターの値を変更すると、それに続く操作が新しい値に基づいて自動的に変更される、というのが、パラメトリック・モデリングのアイディアです。しかし、[トポロジカル・ネーミング問題](/Topological_naming_problem "Topological naming problem")のために、大きな変更が加わると、モデルが破損してしまうことがありえます。以下のデザイン原則を守ることで、モデルの破損を最小限に抑えることができます：

* スケッチや基準ジオメトリ（ローカル座標系など）を、作成したソリッドな部品の面、辺、頂点などにアタッチしないでください。その代わりに、基準平面や座標軸にアタッチしてください。基準平面や座標軸にアタッチしたスケッチや基準ジオメトリは、予期しない形で別のものにアタッチされてしまうことがありません。必要に応じて、アタッチ時にオフセット設定してください。
* 「マスター・スケッチ」を使ってください。マスター・スケッチは、モデルの他の部分より先に作るので、基準平面あるいは座標軸のみを参照します。
  + マスター・スケッチは、モデルの基本図形だけを含める形で、極力シンプルにしてください。
  + 後続の特徴を作る際に、マスター・スケッチの要素を参照することができます。
  + マスター・スケッチは、Bodyの最初のスケッチとするか、Bodyの外側に作ってください。Bodyの最初のスケッチとした場合は、外部参照として直接利用できます。Bodyの外側で作った場合は、![](/images/PartDesign_ShapeBinder.svg) [ShapeBinder](/PartDesign_ShapeBinder "PartDesign ShapeBinder")または![](/images/PartDesign_SubShapeBinder.svg) [SubShapeBinder](/PartDesign_SubShapeBinder "PartDesign SubShapeBinder")を使用して参照できます。
* ShapeBinderあるいはSubShapeBinderを、生成したジオメトリーを基に作成しないでください。もし（Sub）ShapeBinderが基にしているスケッチからジオメトリーが削除されると問題を引き起こす可能性があることに留意してください。
* 常に、生成されたジオメトリーではなく、スケッチまたはスケッチの中のジオメトリーを参照するように努めてください。もしどうしても生成されたジオメトリーを参照するしかない場合は、それを最初の特徴の中で生成してください。そうすれば、後続の操作の変更は影響しません。
* フィレットや面取りといった仕上げは、可能な限り最後に適用してください。

## チュートリアル

The [tutorials](/Tutorials "Tutorials") page provides some examples of using the feature editing method of the [PartDesign Workbench](/PartDesign_Workbench "PartDesign Workbench").

* [Creating a simple part with PartDesign](/Creating_a_simple_part_with_PartDesign "Creating a simple part with PartDesign")
* [Basic Part Design Tutorial 019](/Basic_Part_Design_Tutorial_019 "Basic Part Design Tutorial 019")
* [Basic Attachment Tutorial](/Basic_Attachment_Tutorial "Basic Attachment Tutorial")

## Related

* [Constructive solid geometry](/Constructive_solid_geometry "Constructive solid geometry")

Retrieved from "<http://wiki.freecad.org/index.php?title=Feature_editing/ja&oldid=1531156>"