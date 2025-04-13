---
title: パートデザインワークベンチ
---

![](/images/Workbench_PartDesign.svg)

PartDesign ワークベンチのアイコン

## 概要

![](/images/Workbench_PartDesign.svg) **パートデザイン（PartDesign、部品設計）ワークベンチ**は、ソリッドな部品をモデリングするためのツールです。主に製造・組み立てが可能な機械部品を作成することに重点を置いていますが、作成したソリッドな部品は、[BIM モデリング](/BIM_Workbench "BIM Workbench")、[有限要素解析](/FEM_Workbench "FEM Workbench")、[加工や 3D 印刷](/CAM_Workbench "CAM Workbench")などの目的にも利用できます。

パートデザインワークベンチでは、特徴に基づいてモデリングします。ボディーオブジェクトが、ある一つの部品を表します。ボディーオブジェクトは、内部座標系と、部品を定義する複数の特徴を保持します。特徴とは、多くの場合パラメトリックに定義したスケッチ（sketch）で、これを加算または減算的に適用します。例えば、[パッドツール](/PartDesign_Pad "PartDesign Pad")は、スケッチを押し出したソリッドを加算します。[ポケットツール](/PartDesign_Pocket "PartDesign Pocket")は、スケッチを押しだしたソリッドを減産します。一つ一つの特徴は累積的に適用されます。つまり、一つ前の特徴を基に次の特徴を適用します。プリミティブ（[円柱](/PartDesign_AdditiveCylinder "PartDesign AdditiveCylinder")、[球](/PartDesign_AdditiveSphere "PartDesign AdditiveSphere")他）やそのボディーの外側で作られた別のソリッドを特徴として使うこともできます。

モデルを作成する手順のより完全な説明は、[特徴の編集](/Feature_editing/ja "Feature editing/ja")ページを参照してください。その後で、[パートデザインで簡単な部品を作成する](/index.php?title=Creating_a_simple_part_with_PartDesign/ja&action=edit&redlink=1 "Creating a simple part with PartDesign/ja (page does not exist)")を参照して、部品の作成を始めてみてください。

The ![](/images/Workbench_Part.svg) [Part Workbench](/Part_Workbench "Part Workbench") provides an alternative [constructive solid geometry](/Constructive_solid_geometry "Constructive solid geometry") (CSG) methodology for building shapes. For a detailed discussion of the Part Workbench versus the Part Design Workbench see [Part and Part Design](/Part_and_PartDesign "Part and PartDesign").

![](/images/PartDesign_Workbench_Example.jpg)

## ツール

全てのパートデザインのツールは、パートデザインワークベンチを読み込むと表示される**パートデザイン**メニューおよびパートデザインツールバーにあります。

### パートデザイン補助ツール

- ![](/images/PartDesign_Body.svg) [ボディーを作成](/PartDesign_Body/ja "PartDesign Body/ja"): アクティブなドキュメント内に新しい[ボディー](/Body "Body")を作成し、そのボディーをアクティブにする。

- ![](/images/PartDesign_NewSketch.svg)![](/images/Toolbar_flyout_arrow_blue_background.svg) スケッチの作成:

: \- ![](/images/PartDesign_NewSketch.svg) [スケッチを作成](/PartDesign_NewSketch "PartDesign NewSketch"): 選択された面または基準平面の上に新しいスケッチを作成します。もし面が選択されていない場合は、タスクパネルから面を選択する必要があります。その後、ユーザーインタフェースが[スケッチャーワークベンチ](/Sketcher_Workbench "Sketcher Workbench")に切り替わり、スケッチの編集モードになります。

: \- ![](/images/Sketcher_MapSketch.svg) [スケッチをアタッチ](/Sketcher_MapSketch/ja "Sketcher MapSketch/ja")：スケッチを、アクティブなボディー中の選択した図形にアタッチします。

: \- ![](/images/Sketcher_EditSketch.svg) [スケッチを編集](/Sketcher_EditSketch/ja "Sketcher EditSketch/ja")：選択したスケッチを編集のために開きます。

- ![](/images/Sketcher_ValidateSketch.svg) [Validate sketch](/Sketcher_ValidateSketch "Sketcher ValidateSketch"): verifies the tolerance of different points and adjusts them.

- ![](/images/Part_CheckGeometry.svg) [Check geometry](/Part_CheckGeometry "Part CheckGeometry"): Checks the geometry of selected objects for errors.

- ![](/images/PartDesign_ShapeBinder.svg) [Create a shape binder](/PartDesign_ShapeBinder "PartDesign ShapeBinder"): creates a shape binder referencing geometry from a single parent object.

- ![](/images/PartDesign_SubShapeBinder.svg) [Create a sub-object(s) shape binder](/PartDesign_SubShapeBinder "PartDesign SubShapeBinder"): creates a shape binder referencing geometry from one or more parent objects.

- ![](/images/PartDesign_Clone.svg) [Create a clone](/PartDesign_Clone "PartDesign Clone"): creates a clone of the selected body.

- ![](/images/PartDesign_Plane.svg)![](/images/Toolbar_flyout_arrow_blue_background.svg) Create a datum (1.0 and below):

: \- ![](/images/PartDesign_Plane.svg) [Create a datum plane](/PartDesign_Plane "PartDesign Plane"): creates a datum plane in the active body. (1.0 and below)

: \- ![](/images/PartDesign_Line.svg) [Create a datum line](/PartDesign_Line "PartDesign Line"): creates a datum line in the active body. (1.0 and below)

: \- ![](/images/PartDesign_Point.svg) [Create a datum point](/PartDesign_Point "PartDesign Point"): creates a datum point in the active body. (1.0 and below)

: \- ![](/images/PartDesign_CoordinateSystem.svg) [Create a local coordinate system](/PartDesign_CoordinateSystem "PartDesign CoordinateSystem"): creates a local coordinate system attached to datum geometry in the active body. (1.0 and below)

: [introduced in 1.1](/Release_notes_1.1 "Release notes 1.1"): these tools have been replaced by new [datum tools](/Std_Base#Part_Datums "Std Base").

### パートデザインモデリングツール

#### 加算的ツール

These are tools for creating base features or adding material to an existing body.

- ![](/images/PartDesign_Pad.svg) [Pad](/PartDesign_Pad "PartDesign Pad"): extrudes a solid from a selected sketch.

- ![](/images/PartDesign_Revolution.svg) [Revolution](/PartDesign_Revolution "PartDesign Revolution"): creates a solid by revolving a sketch around an axis. The sketch must form a closed profile.

- ![](/images/PartDesign_AdditiveLoft.svg) [Additive loft](/PartDesign_AdditiveLoft "PartDesign AdditiveLoft"): creates a solid by making a transition between two or more sketches.

- ![](/images/PartDesign_AdditivePipe.svg) [Additive pipe](/PartDesign_AdditivePipe "PartDesign AdditivePipe"): creates a solid by sweeping one or more sketches along an open or closed path.

- ![](/images/PartDesign_AdditiveHelix.svg) [加算らせん](/PartDesign_AdditiveHelix/ja "PartDesign AdditiveHelix/ja")：スケッチをらせん上を動かしたソリッド図形を作成します。

- ![](/images/PartDesign_AdditiveBox.svg)![](/images/Toolbar_flyout_arrow_blue_background.svg) Create an additive primitive:

: \- ![](/images/PartDesign_AdditiveBox.svg) [Additive box](/PartDesign_AdditiveBox "PartDesign AdditiveBox"): creates an additive box.

: \- ![](/images/PartDesign_AdditiveCylinder.svg) [Additive cylinder](/PartDesign_AdditiveCylinder "PartDesign AdditiveCylinder"): creates an additive cylinder.

: \- ![](/images/PartDesign_AdditiveSphere.svg) [Additive sphere](/PartDesign_AdditiveSphere "PartDesign AdditiveSphere"): creates an additive sphere.

: \- ![](/images/PartDesign_AdditiveCone.svg) [Additive cone](/PartDesign_AdditiveCone "PartDesign AdditiveCone"): creates an additive cone.

: \- ![](/images/PartDesign_AdditiveEllipsoid.svg) [Additive ellipsoid](/PartDesign_AdditiveEllipsoid "PartDesign AdditiveEllipsoid"): creates an additive ellipsoid.

: \- ![](/images/PartDesign_AdditiveTorus.svg) [Additive torus](/PartDesign_AdditiveTorus "PartDesign AdditiveTorus"): creates an additive torus.

: \- ![](/images/PartDesign_AdditivePrism.svg) [Additive prism](/PartDesign_AdditivePrism "PartDesign AdditivePrism"): creates an additive prism.

: \- ![](/images/PartDesign_AdditiveWedge.svg) [Additive wedge](/PartDesign_AdditiveWedge "PartDesign AdditiveWedge"): creates an additive wedge.

#### 減算的ツール

These are tools for subtracting material from an existing body.

- ![](/images/PartDesign_Pocket.svg) [Pocket](/PartDesign_Pocket "PartDesign Pocket"): creates a pocket from a selected sketch.

- ![](/images/PartDesign_Hole.svg) [Hole](/PartDesign_Hole "PartDesign Hole"): creates a hole feature from a selected sketch. The sketch must contain one or multiple circles.

- ![](/images/PartDesign_Groove.svg) [Groove](/PartDesign_Groove "PartDesign Groove"): creates a groove by revolving a sketch around an axis.

- ![](/images/PartDesign_SubtractiveLoft.svg) [Subtractive loft](/PartDesign_SubtractiveLoft "PartDesign SubtractiveLoft"): creates a solid shape by making a transition between two or more sketches and subtracts it from the active body.

- ![](/images/PartDesign_SubtractivePipe.svg) [Subtractive pipe](/PartDesign_SubtractivePipe "PartDesign SubtractivePipe"): creates a solid shape by sweeping one or more sketches along an open or closed path and subtracts it from the active body.

- ![](/images/PartDesign_SubtractiveHelix.svg) [減算らせん](/PartDesign_SubtractiveHelix/ja "PartDesign SubtractiveHelix/ja")：スケッチをらせん上を動かした結果をアクティブなボディーから削除したソリッド図形を作成します。

- ![](/images/PartDesign_SubtractiveBox.svg)![](/images/Toolbar_flyout_arrow_blue_background.svg) Create a subtractive primitive:

: \- ![](/images/PartDesign_SubtractiveBox.svg) [Subtractive box](/PartDesign_SubtractiveBox "PartDesign SubtractiveBox"): adds a subtractive box to the active body.

: \- ![](/images/PartDesign_SubtractiveCylinder.svg) [Subtractive cylinder](/PartDesign_SubtractiveCylinder "PartDesign SubtractiveCylinder"): adds a subtractive cylinder to the active body.

: \- ![](/images/PartDesign_SubtractiveSphere.svg) [Subtractive sphere](/PartDesign_SubtractiveSphere "PartDesign SubtractiveSphere"): adds a subtractive sphere to the active body.

: \- ![](/images/PartDesign_SubtractiveCone.svg) [Subtractive cone](/PartDesign_SubtractiveCone "PartDesign SubtractiveCone"): adds a subtractive cone to the active body.

: \- ![](/images/PartDesign_SubtractiveEllipsoid.svg) [Subtractive ellipsoid](/PartDesign_SubtractiveEllipsoid "PartDesign SubtractiveEllipsoid"): adds a subtractive ellipsoid to the active body.

: \- ![](/images/PartDesign_SubtractiveTorus.svg) [Subtractive torus](/PartDesign_SubtractiveTorus "PartDesign SubtractiveTorus"): adds a subtractive torus to the active body.

: \- ![](/images/PartDesign_SubtractivePrism.svg) [Subtractive prism](/PartDesign_SubtractivePrism "PartDesign SubtractivePrism"): adds a subtractive prism to the active body.

: \- ![](/images/PartDesign_SubtractiveWedge.svg) ‎[Subtractive wedge](/PartDesign_SubtractiveWedge "PartDesign SubtractiveWedge"): adds a subtractive wedge to the active body.

#### ブーリアン演算

- ![](/images/PartDesign_Boolean.svg) [Boolean operation](/PartDesign_Boolean "PartDesign Boolean"): imports one or more Bodies or PartDesign Clones into the active body and applies a Boolean operation.

### 仕上げツール

These tools apply a treatment to edges or faces.

- ![](/images/PartDesign_Fillet.svg) [Fillet](/PartDesign_Fillet "PartDesign Fillet"): fillets (rounds) edges of the active body.

- ![](/images/PartDesign_Chamfer.svg) [Chamfer](/PartDesign_Chamfer "PartDesign Chamfer"): chamfers edges of the active body.

- ![](/images/PartDesign_Draft.svg) [Draft](/PartDesign_Draft "PartDesign Draft"): applies an angular draft to selected faces of the active body.

- ![](/images/PartDesign_Thickness.svg) [Thickness](/PartDesign_Thickness "PartDesign Thickness"): creates a thick shell from the active body and opens selected face.

### 変形ツール

These are tools for transforming existing features.

- ![](/images/PartDesign_Mirrored.svg) [Mirrored](/PartDesign_Mirrored "PartDesign Mirrored"): mirrors one or more features.

- ![](/images/PartDesign_LinearPattern.svg) [Linear Pattern](/PartDesign_LinearPattern "PartDesign LinearPattern"): creates a linear pattern of one or more features.

- ![](/images/PartDesign_PolarPattern.svg) [Polar Pattern](/PartDesign_PolarPattern "PartDesign PolarPattern"): creates a polar pattern of one or more features.

- ![](/images/PartDesign_MultiTransform.svg) [Create MultiTransform](/PartDesign_MultiTransform "PartDesign MultiTransform"): creates a pattern by combining any of the transformations mentioned above, as well as the [Scaled](/PartDesign_Scaled "PartDesign Scaled") transformation.
  - ![](/images/PartDesign_Scaled.svg) [Scaled](/PartDesign_Scaled "PartDesign Scaled"): scales one or more features. This is not available as a separate transformation tool.

#### その他

Some additional functionality found in the Part Design menu:

- ![](/images/PartDesign_Sprocket.svg) [Sprocket](/PartDesign_Sprocket "PartDesign Sprocket"): creates a sprocket profile that can be padded.

- ![](/images/PartDesign_InvoluteGear.svg) [Involute gear](/PartDesign_InvoluteGear "PartDesign InvoluteGear"): creates an involute gear profile that can be padded.

- ![](/images/PartDesign_WizardShaft.svg) [Shaft design wizard](/PartDesign_WizardShaft "PartDesign WizardShaft"): Generates a shaft from a table of values and allows to analyze forces and moments. The shaft is made with a revolved sketch that can be edited.

### Context Menu items

- [Suppressed](/index.php?title=PartDesign_Suppressed&action=edit&redlink=1 "PartDesign Suppressed (page does not exist)"): checkbox to disable a specific feature without deleting it. [introduced in 1.0](/Release_notes_1.0 "Release notes 1.0")

- ![](/images/PartDesign_MoveTip.svg) [Set tip](/PartDesign_MoveTip "PartDesign MoveTip"): redefines the tip, which is the feature exposed outside of the Body.

- ![](/images/PartDesign_MoveFeature.svg) [Move object to other body](/PartDesign_MoveFeature "PartDesign MoveFeature"): moves the selected sketch, datum geometry or feature to another Body.

- ![](/images/PartDesign_MoveFeatureInTree.svg) [Move object after other object](/PartDesign_MoveFeatureInTree "PartDesign MoveFeatureInTree"): allows reordering of the Body tree by moving the selected sketch, datum geometry or feature to another position in the list of features.

#### Items shared with the Part workbench

- ![](/images/Std_SetAppearance.svg) [Appearance](/Std_SetAppearance "Std SetAppearance"): determines appearance of the whole part (color transparency etc.).

- ![](/images/Part_ColorPerFace.svg) [Color per face](/Part_ColorPerFace "Part ColorPerFace"): Assigns colors to individual faces of objects.

### 廃止されたツール

- ![](/images/PartDesign_Migrate.svg) [Migrate](/PartDesign_Migrate "PartDesign Migrate"): migrates files from FreeCAD versions below 0.17 to version 0.17. This tool is not available in 1.0 and above.

## Preferences

- ![](/images/Preferences-part_design.svg) [Preferences](/PartDesign_Preferences "PartDesign Preferences"): preferences available for PartDesign Tools.
- [Fine tuning](/Fine-tuning "Fine-tuning"): some extra parameters to fine-tune PartDesign behavior.

## チュートリアル

- [How to use FreeCAD](http://help-freecad-jpg87.fr/), a website describing the workflow for mechanical design.
- [Creating a simple part with PartDesign](/Creating_a_simple_part_with_PartDesign "Creating a simple part with PartDesign")
- [Basic Part Design Tutorial 019](/Basic_Part_Design_Tutorial_019 "Basic Part Design Tutorial 019")
- [PartDesign Bearingholder Tutorial I](/PartDesign_Bearingholder_Tutorial_I "PartDesign Bearingholder Tutorial I") (needs updating)
- [PartDesign Bearingholder Tutorial II](/PartDesign_Bearingholder_Tutorial_II "PartDesign Bearingholder Tutorial II") (needs updating)

## Examples

For some ideas of what can be achieved with Part Design tools, have a look at: [PartDesign examples](/PartDesign_Examples "PartDesign Examples").

![](/images/PartDesign_ExampleSphere-02.png)
![](/images/PartDesign_ExampleTorus-01.png)
![](/images/PartDesign_ExamplePad-09.png)
![](/images/PartDesign_ExampleSweep-02.png)
![](/images/PartDesign_ExampleSweep-05.png)
![](/images/PartDesign_ExampleSpring-04.png)

Retrieved from "<http://wiki.freecad.org/index.php?title=PartDesign_Workbench/ja&oldid=1544543>"
