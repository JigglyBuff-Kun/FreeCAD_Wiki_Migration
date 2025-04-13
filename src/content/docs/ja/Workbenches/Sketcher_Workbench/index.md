---
title: スケッチャーワークベンチ
---

![](/images/Workbench_Sketcher.svg)

スケッチッチャーワークベンチのアイコン

## 概要

![](/images/Workbench_Sketcher.svg) スケッチッチャーワークベンチ（Sketcher）で、他のワークベンチで利用するための 2D スケッチを作成できます。2D スケッチは多くの CAD モデルの出発点であり、通常は 3D 形状を作成するための断面形状（プロファイル）や軌道（パス）を定義します。モデルは、最終的な形状を作り上げるために複数のスケッチに依存する場合があります。

![](/images/Workbench_Part.svg) [パートワークベンチ](/Part_Workbench/ja "Part Workbench/ja")で定義されるブーリアン操作と組み合わせることで、スケッチッチャーワークベンチは、[空間領域構成法](/Constructive_solid_geometry/ja "Constructive solid geometry/ja")（CSG）によるソリッド構築手法の重要な要素となります。2D スケッチは、そのままブーリアン演算に利用されたり、他の操作の基礎として用いられたりすることで、CSG プロセス全体において中核的な役割を果たします。また、![](/images/Workbench_PartDesign.svg) [パートデザインワークベンチ](/PartDesign_Workbench/ja "PartDesign Workbench/ja")の操作とも連携し、ソリッド作成における[特徴の編集](/Feature_editing/ja "Feature editing/ja")手法の基本的な構成要素となります。さらに、多くの他のワークベンチでもスケッチが活用されています。

スケッチャーの特徴はなんといっても[拘束](#Constraints)です。これによって 2 次元形状を、長さ、角度、（水平、垂直、直角、といった形状間の）関係性などの条件に厳密に従って拘束することが可能です。また拘束用ソルバーによって 2 次元形状の拘束範囲を計算したり、スケッチの自由度を対話的にチェックしたりすることが可能です。

スケッチャーは 2D 製図のためのものではありません。スケッチをもとにソリッド形状を作成すると、スケッチは自動的に非表示になります。拘束条件はスケッチの編集モード時のみ表示されます。もし単に 2D 図面を印刷したく、2D 図面から 3D のモデルを作るのではないのであれば、[ドラフトワークベンチ](/Draft_Workbench/ja "Draft Workbench/ja")の利用を検討してください。

![](/images/FC_ConstrainedSketch.png)

完全に拘束されたスケッチ

## 拘束

拘束は、オブジェクトの自由度を制限するために使用されます。例えば、線分は拘束がない場合は 4 つの自由度（あるいは「DoF」と略されます）を持ちます。つまり水平方向、垂直方向への移動と拡大縮小と回転が可能です。

水平拘束、垂直拘束、あるいは（他のラインか座標軸の一つに対する）角度拘束を適用すると回転が制限され自由度は 3 つに減ります。片方の短点を原点に対してロックすることでさらに 2 つの自由度が減ります。最後にサイズ拘束を適用すれば最後の自由度が無くなります。こうしてラインは**完全拘束**状態になります。

複数のオブジェクトがある場合は相互に拘束が可能です。2 本の線分があった場合、点一致拘束を使用することでそれぞれの端点をつなぎ合わせることができます。また 2 本のラインの間の角度を設定したり、2 本のラインが垂直になるよう設定することも可能です。線分を円弧や円の接線となるように拘束することもできます。このように様々な種類の拘束があります。複数の図形からなる複雑なスケッチを拘束するのには複数のやり方があることが通常です。そのような複雑なスケッチが**完全拘束**になったとは、実際に与えた拘束条件によって、可能なやり方の一つが完成した、というふうに考えられます。

拘束には二種類あります。幾何拘束と寸法拘束です。これらについては下の[ツール](#Tools)で詳しく説明します。

### 拘束条件の編集

[寸法拘束（制約型）](/Sketcher_ToggleDrivingConstraint/ja "Sketcher ToggleDrivingConstraint/ja")が作成され、かつ**寸法拘束を作る際に寸法を聞く** [設定](/Sketcher_Preferences/ja#Display "Sketcher Preferences/ja")が選択されていると（デフォルト）、ダイアログが開き寸法を編集できます。

![Sketcher_Edit_Constraint.png](/images/Sketcher_Edit_Constraint.png)

値あるいは[数式](/Expressions/ja "Expressions/ja")を寸法として入力できます。他の数式からその拘束の値を参照するために、名前を付与することもできます。**参照**チェックボックスをチェックすることで、拘束条件を[参照型](/Sketcher_ToggleDrivingConstraint/ja "Sketcher ToggleDrivingConstraint/ja")（参照型拘束は、実際には図形を拘束せず、単に寸法を表示するだけのもの）に変更することもできます。

次のいずれかの方法で寸法拘束の値を編集できます。

- [3D ビュー](/3D_view/ja "3D view/ja")上で拘束の値をダブルクリックする。
- [スケッチャー・ダイアログ](/Sketcher_Dialog/ja "Sketcher Dialog/ja")中の拘束の値をダブルクリックする。
- スケッチャー・ダイアログ中の拘束で右クリックし、メニューから**値の変更**を選択する。

### 拘束の表示位置の変更

3D ビュー中の寸法拘束は、ドラッグすることで位置を変更できます。表示されている寸法拘束の値の上でマウスに左ボタンをおして動かします。幾何拘束のシンボルの表示位置は自動的に決まるので、移動できません。

## 特徴として用いるスケッチ

作成したスケッチを、ソリッドな部品を作成するための特徴として使う場合、下記のルールに合致している必要があります。

- スケッチには閉曲線だけがあるようにしなければなりません。それがどれほど小さくても、端点に隙間があってはいけません。
- 閉曲線は、穴をつくるために入れ子にすることはできますが、自分自身や他の曲線と交差してはいけません。
- 曲線は、他の曲線とエッジを共有してはいけません。エッジの重複は避けてください。
- T 字接続、つまり 2 本以上のエッジが一つの点を共有したり点がエッジに接触する、ということは避けてください。

これらのルールは、（デフォルトでは青で示される）補助線には適用しません。補助線は編集モード以外では表示されません。あるいは、スケッチを（ソリッドな部品を作る以外の）別の目的で作るときも関係ありません。スケッチを特徴として利用する際、ワークベンチやツールによっては、更に追加の条件がある場合があります。

## 作図支援

スケッチ・ワークベンチには、図形を作成し拘束を適用する際に役立つ、支援ツール等の様々な機能があります。

### 連続モード

連続モードには 2 つの種類があります。**図形作成「連続モード」**と**拘束作成「連続モード」**です。[設定](/Sketcher_Preferences/ja#Display "Sketcher Preferences/ja")においてこれらをチェック（デフォルト）している場合、図形作成後、ツールが自動的に再起動します。連続モードを抜けるには Esc キーを押すか、右マウスボタンをクリックしてください。すでに図形作成連続モードが何らかの入力を受け付けている場合は、Esc を何回か押す必要があります。 また、別の図形の作成や拘束の作成を開始すれば、直前の連続モードから抜けます。どのツールも起動されていない状況で Esc を押すと、スケッチ編集モードから抜けてしまうことに注意してください。もし期せずに Esc を度々押してしまうようであれば、[設定](/Sketcher_Preferences/ja#General "Sketcher Preferences/ja")の**Esc でスケッチ編集モードを終了する**のチェックを外してください。

### 自動拘束

スケッチ編集で**自動拘束（Auto constraints）** が有効（デフォルト）の場合、拘束条件が自動的に適用されます。カーソルが正しい位置にあると、システムが自動で提案する拘束条件のアイコンをカーソルの横に表示します。この状態で左クリックすると、その拘束条件が適用されます。自動拘束条件を付与するのかどうかは、各スケッチごと[スケッチ・ワークベンチ・ダイアログ](/Sketcher_Dialog/ja#Constraints "Sketcher Dialog/ja")で変更するか、[設定](/Property_editor/ja "Property editor/ja")でスケッチの ビュー**Autoconstraints** プロパティをで変更することで設定を調整できます。

以下の拘束が自動的に適用されます。

- ![](/images/Sketcher_ConstrainCoincident.svg) [一致（Coincident）](/Sketcher_ConstrainCoincident/ja "Sketcher ConstrainCoincident/ja")
- ![](/images/Sketcher_ConstrainPointOnObject.svg) [点がオブジェクト上にある（Point on object）](/Sketcher_ConstrainPointOnObject/ja "Sketcher ConstrainPointOnObject/ja")
- ![](/images/Sketcher_ConstrainHorizontal.svg) [水平（Horizontal）](/Sketcher_ConstrainHorizontal/ja "Sketcher ConstrainHorizontal/ja")
- ![](/images/Sketcher_ConstrainVertical.svg) [垂直（Vertical）](/Sketcher_ConstrainVertical/ja "Sketcher ConstrainVertical/ja")
- ![](/images/Sketcher_ConstrainTangent.svg) [接線（Tangent）](/Sketcher_ConstrainTangent/ja "Sketcher ConstrainTangent/ja")
- [introduced in 1.0](/Release_notes_1.0 "Release notes 1.0"): ![](/images/Sketcher_ConstrainSymmetric.svg) [対称（Symmetric）](/Sketcher_ConstrainSymmetric/ja "Sketcher ConstrainSymmetric/ja")（線分の中点）

### スナップ

[introduced in 0.21](/Release_notes_0.21 "Release notes 0.21")

グリッド線、グリッド線の交点、図形のエッジ、線分や円弧の中点、特定の角度に[スナップ](/Sketcher_Snap/ja "Sketcher Snap/ja")させることが可能です。スナップ自体は拘束条件を生成しません。例えば、[自動拘束条件付与](#Auto_constraints)を有効にしている場合、エッジにスナップすると[点がオブジェクト上にある（Point on object）拘束条件](/Sketcher_ConstrainPointOnObject/ja "Sketcher ConstrainPointOnObject/ja")を適用しますが、単に線分上の点を選択するだけでも同じ結果になります。

### ビュー上でのパラメター設定

[introduced in 1.0](/Release_notes_1.0 "Release notes 1.0")

[設定](/Sketcher_Preferences/ja#General "Sketcher Preferences/ja")での選択に応じて、寸法のみ、あるいは寸法と位置の両方を、ビュー上で編集できるようにすることが可能です。位置パラメターを入力すると、円の中心や線分の開始点といったものの座標を正確に指定できます。寸法パラメターを入力すると、円の半径や線分の長さや角度と言ったものを正確に指定できます。ビュー上でのパラメター設定は、すべてのツールに対応しているわけではありません。

![](/images/Sketcher_On_view_parameters_positional.png)

位置パラメターの入力して円の中心点を指定

![](/images/Sketcher_On_view_parameters_dimensional.png)

寸法パラメターの入力して円の半径を指定

値を入力し、Enter または Tab で確定すると、その結果として連携して拘束条件を自動的に追加します。例えば X 座標と Y 座標のように、同時に 2 つのパラメターが表示されている場合、片方だけ値を入力し（訳注：その結果連携して拘束条件が追加される）、他方はビュー上で位置を指定するだけでも構いません（訳注：この場合拘束条件は追加されません）。オブジェクトによっては、完全拘束状態にするには拘束を追加しなければならないことがあります。ビュー上でのパラメター入力に連携した拘束条件は、[自動拘束](/Sketcher_Dialog/ja#Constraints "Sketcher Dialog/ja")よりも優先されます。

![](/images/Sketcher_ArcExample3.png)

円弧を作成し、ビュー上からすべてのパラメターを設定した結果、関連する拘束が自動的に生成されています。

### 座標表示

[設定](/Sketcher_Preferences/ja#Display "Sketcher Preferences/ja")**編集中にカーソルの横に座標を表示**を有効にしている場合、現在のツールに応じてパラメター（座標、半径、長さ、角度）をカーソルの横に表示します。ビュー上でパラメター設定をしている間は表示されません。

## 図形要素の選択方法

スケッチの編集中に図形を選択するには以下の方法があります。

### 3D ビュー上での要素の選択

FreeCAD の他のワークベンチと同様、[3D ビュー w](/3D_view/ja "3D view/ja")上、クリックで要素を選択できます。スケッチッチャーワークベンチでは、複数の要素を選択する場合に、必ずしも Ctrl キーを押す必要はありません。ただし、Ctrl を押すことも可能で、この場合誤って違う場所をクリックしても、それまでの選択がクリアされないという利点があります。辺、点、拘束をこの方法で選択することができます。

### 3D ビュー上での矩形選択

3D ビュー上での矩形選択は、[共通・矩形選択](/Std_BoxSelection/ja "Std BoxSelection/ja")や[共通・矩形要素選択](/Std_BoxElementSelection/ja "Std BoxElementSelection/ja")を使わなくても実行できます。

1. どのツールもアクティブになっていないことを確認します
2. 以下のいずれかの操作をします。
   - 空白の領域をクリックし、左から右にドラッグして、矩形内に完全に収まる要素を選択します。
   - 空白の領域をクリックし、右から左にドラッグして、矩形に接触または交差する要素を選択します。

辺、点は矩形選択できますが、拘束条件は矩形選択できません。

### 接続要素選択

[introduced in 1.0](/Release_notes_1.0 "Release notes 1.0")

3D ビュー上でエッジをダブルクリックすると、その端点に直接または間接に接続されているすべてのエッジを一括選択します。この際、端点が[一致拘束](/Sketcher_ConstrainCoincident/ja "Sketcher ConstrainCoincident/ja")されている必要ありません。単に端点が同じ座標であれば、接続されているとみなします。

### ダイアログ上で選択

[スケッチャー・ダイアログ](/Sketcher_Dialog/ja "Sketcher Dialog/ja")　では、「要素」セクションのリストでエッジと点を選択できます。同様に、「拘束」セクションで拘束条件を選択できます。

## コピー・カット・ペースト

[introduced in 1.0](/Release_notes_1.0 "Release notes 1.0")

標準的なキーボードショートカット Ctrl+C、Ctrl+X、Ctrl+V でスケッチャー上で選択した要素と拘束をコピー、カット、ペーストできます。これらのツールは**スケッチ → スケッチャーツール**メニューからも利用できます。同じスケッチ内で使用できるだけでなく、別のスケッチや別の FreeCAD インスタンスにペーストすることも可能です。データーは Python コードの形でクリップボードにコピーされるため、他の（例えばフォーラムで共有する、といった）他の方法でも利用可能です。

## ツール

スケッチッチャーワークベンチの各ツールは、**スケッチ**メニューやツールバーからアクセスできます。[introduced in 0.21](/Release_notes_0.21 "Release notes 0.21"): ほとんどすべてのスケッチッチャーワークベンチのツールバーは、スケッチが編集モードのときにだけ表示されます。例外は、[スケッチャー・ツールバー](#Sketcher_toolbar)で、これはスケッチが編集モードでないときのみ表示されます。

いくつかのツールは、スケッチが編集モードの時に、[3D ビュー](/3D_view/ja "3D view/ja")のコンテキスト・メニュー、あるいは[スケッチャー・ダイアログ](/Sketcher_Dialog/ja "Sketcher Dialog/ja")のコンテキスト・メニューからアクセスできます。

[introduced in 0.21](/Release_notes_0.21 "Release notes 0.21"): スケッチが編集モードにある場合、構造体ツールバーは非表示になります。これは、このツールバー上のツールがすべて編集モードでは使用できないためです。

### 一般ツール

#### スケッチャー・ツールバー

- ![](/images/Sketcher_NewSketch.svg) [スケッチを作成](/Sketcher_NewSketch/ja "Sketcher NewSketch/ja")：新しいスケッチを作成し、[スケッチャー・ダイアログ](/Sketcher_Dialog/ja "Sketcher Dialog/ja")を開いて編集モードに入ります。

- ![](/images/Sketcher_EditSketch.svg) [スケッチを編集](/Sketcher_EditSketch/ja "Sketcher EditSketch/ja")：スケッチャー・ダイアログを開き、既存スケッチを編集します。

- ![](/images/Sketcher_MapSketch.svg) [スケッチをアタッチ](/Sketcher_MapSketch/ja "Sketcher MapSketch/ja")：スケッチを選択した図形にアタッチします。

- ![](/images/Sketcher_ReorientSketch.svg) [スケッチの方向を変更](/Sketcher_ReorientSketch/ja "Sketcher ReorientSketch/ja")：スケッチを主平面のいずれかに配置し、オプションでオフセットを指定します。スケッチをデタッチするためにも使用できます。

- ![](/images/Sketcher_ValidateSketch.svg) [スケッチを検証](/Sketcher_ValidateSketch/ja "Sketcher ValidateSketch/ja")： 編集できなくなったスケッチや無効な拘束があるスケッチを分析して修復します。また、欠落している一致拘束を追加することもできます。

- ![](/images/Sketcher_MergeSketches.svg) [スケッチをマージ](/Sketcher_MergeSketches/ja "Sketcher MergeSketches/ja")：2 つ以上のスケッチをマージした新しいスケッチを作成します。

- ![](/images/Sketcher_MirrorSketch.svg) [スケッチを鏡像化](/Sketcher_MirrorSketch/ja "Sketcher MirrorSketch/ja")：x 軸、y 軸、または原点に対して鏡像となるスケッチを作成します。

#### スケッチャー編集モード・ツールバー

- ![](/images/Sketcher_LeaveSketch.svg) [スケッチの編集を終了](/Sketcher_LeaveSketch/ja "Sketcher LeaveSketch/ja")：スケッチ編集モードを終了し、[スケッチャー・ダイアログ](/Sketcher_Dialog/ja "Sketcher Dialog/ja")を閉じます。

- ![](/images/Sketcher_ViewSketch.svg) [スケッチを表示](/Sketcher_ViewSketch/ja "Sketcher ViewSketch/ja")：[3D ビュー](/3D_view/ja "3D view/ja")をスケッチ平面に垂直にします。

- ![](/images/Sketcher_ViewSection.svg) [セクション表示](/Sketcher_ViewSection/ja "Sketcher ViewSection/ja")：セクション表示（スケッチ平面の手前にあるオブジェクトやその一部を非表示する）を切り替えます。

#### スケッチャー編集ツール・ツールバー

- ![](/images/Sketcher_Grid.svg) [グリッドの表示を切り替え](/Sketcher_Grid/ja "Sketcher Grid/ja")： 現在編集中のスケッチでグリッドの表示、非表示を切り替えます。設定は関連メニューで変更可能です。[introduced in 0.21](/Release_notes_0.21 "Release notes 0.21")

- ![](/images/Sketcher_Snap.svg) [スナップの切り替え](/Sketcher_Snap/ja "Sketcher Snap/ja")：すべてのスケッチでスナップの有効/無効を切り替えます。設定は関連メニューで変更可能です。[introduced in 0.21](/Release_notes_0.21 "Release notes 0.21")

- ![](/images/Sketcher_RenderingOrder.svg) [レンダリング順を設定](/Sketcher_RenderingOrder/ja "Sketcher RenderingOrder/ja")：すべてのスケッチの描画順序を関連メニューで変更できます。[introduced in 0.21](/Release_notes_0.21 "Release notes 0.21")

#### その他

- ![](/images/Sketcher_StopOperation.svg) [操作を停止](/Sketcher_StopOperation/ja "Sketcher StopOperation/ja"): 現在実行中の図形作成ツールや拘束作成ツールを停止します（訳注：ESC を押すのと同じ）。

### スケッチャー図形

以下は図形を作成するためのツールです。

- ![](/images/Sketcher_CreatePoint.svg) [点を作成](/Sketcher_CreatePoint/ja "Sketcher CreatePoint/ja")：点を作成します。

- ![](/images/Sketcher_CreatePolyline.svg) [ポリライン（折れ線）を作成](/Sketcher_CreatePolyline/ja "Sketcher CreatePolyline/ja")：端点同士が接続された一連の線分または円弧を作成します。複数のモードがあります。

- ![](/images/Sketcher_CreateLine.svg) [線分を作成](/Sketcher_CreateLine/ja "Sketcher CreateLine/ja")：線分を作成します。[introduced in 1.0](/Release_notes_1.0 "Release notes 1.0")：3 つのモードがあります。

- ![](/images/Sketcher_CreateArc.svg)![](/images/Toolbar_flyout_arrow_blue_background.svg) 円弧を作成：

- ![](/images/Sketcher_CreateArc.svg) [中心点から円弧を作成](/Sketcher_CreateArc/ja "Sketcher CreateArc/ja")：中心点と、2 つの端点を指定して円弧を作成します。[introduced in 1.0](/Release_notes_1.0 "Release notes 1.0")：端点と円弧状の点を指定して作成するモードもあります。

- ![](/images/Sketcher_Create3PointArc.svg) [3 点指定円弧を作成](/Sketcher_Create3PointArc/ja "Sketcher Create3PointArc/ja")：端点と、円弧状の点を指定して円弧を作成します。[introduced in 1.0](/Release_notes_1.0 "Release notes 1.0")：[中心を指定して円弧を作成](/Sketcher_CreateArc/ja "Sketcher CreateArc/ja")と同じツールになりました。初期モードが違うだけです。

- ![](/images/Sketcher_CreateArcOfEllipse.svg) [楕円弧を作成](/Sketcher_CreateArcOfEllipse/ja "Sketcher CreateArcOfEllipse/ja")：楕円弧を作成します。

- ![](/images/Sketcher_CreateArcOfHyperbola.svg) [双曲線の円弧を作成](/Sketcher_CreateArcOfHyperbola/ja "Sketcher CreateArcOfHyperbola/ja")：双曲線の円弧を作成します。

- ![](/images/Sketcher_CreateArcOfParabola.svg) [放物線の円弧を作成](/Sketcher_CreateArcOfParabola/ja "Sketcher CreateArcOfParabola/ja")：放物線の円弧を作成します。

- ![](/images/Sketcher_CreateCircle.svg)![](/images/Toolbar_flyout_arrow_blue_background.svg) 円・楕円を作成：

- ![](/images/Sketcher_CreateCircle.svg) [中心を指定して円を作成](/Sketcher_CreateCircle/ja "Sketcher CreateCircle/ja")：中心点と、円周上の点を指定して円を作成します。[introduced in 1.0](/Release_notes_1.0 "Release notes 1.0")：円周上の 3 点を指定して作成するモードもあります。

- ![](/images/Sketcher_Create3PointCircle.svg) [3 点で円を作成](/Sketcher_Create3PointCircle/ja "Sketcher Create3PointCircle/ja")：円周上の 3 点を指定して円を作成します。[introduced in 1.0](/Release_notes_1.0 "Release notes 1.0")：[中心を指定して円を作成](/Sketcher_CreateCircle/ja "Sketcher CreateCircle/ja")と同じツールになりました。初期モードが違うだけです。

- ![](/images/Sketcher_CreateEllipseByCenter.svg) [中心点を指定して楕円を作成](/Sketcher_CreateEllipseByCenter/ja "Sketcher CreateEllipseByCenter/ja")：中心点と、軸の端点、楕円周上の点を指定して楕円を作成します。[introduced in 1.0](/Release_notes_1.0 "Release notes 1.0")：軸の両端点と楕円周上の点をしていして作成するモードもあります。

- ![](/images/Sketcher_CreateEllipseBy3Points.svg) [3 点を指定して楕円を作成](/Sketcher_CreateEllipseBy3Points/ja "Sketcher CreateEllipseBy3Points/ja")：軸の両端テント楕円周上の点を指定して楕円を作成します。[introduced in 1.0](/Release_notes_1.0 "Release notes 1.0")：[中心点を指定して楕円を作成](/Sketcher_CreateEllipseByCenter "Sketcher CreateEllipseByCenter")と同じツールになりました。初期モードが違うだけです。

- ![](/images/Sketcher_CreateRectangle.svg)![](/images/Toolbar_flyout_arrow_blue_background.svg) 長方形を作成：

- ![](/images/Sketcher_CreateRectangle.svg) [長方形を作成](/Sketcher_CreateRectangle/ja "Sketcher CreateRectangle/ja")：角の一つと幅、高さを指定して長方形を作成します。[introduced in 1.0](/Release_notes_1.0 "Release notes 1.0")：4 つのモードがあります。角の丸めとフレームはオプションの設定項目です。

- ![](/images/Sketcher_CreateRectangle_Center.svg) [中心配置長方形](/Sketcher_CreateRectangle_Center/ja "Sketcher CreateRectangle Center/ja")：中心と幅、高さを指定して長方形を作成します。[introduced in 1.0](/Release_notes_1.0 "Release notes 1.0")：[長方形を作成](/Sketcher_CreateRectangle/ja "Sketcher CreateRectangle/ja")と同じツールになりました。初期モードが違うだけです。

- ![](/images/Sketcher_CreateOblong.svg) [角丸長方形](/Sketcher_CreateOblong/ja "Sketcher CreateOblong/ja")：角が丸い長方形を作成します。（訳注：[長方形を作成](/Sketcher_CreateRectangle/ja "Sketcher CreateRectangle/ja")でオプションの「角の丸め」を指定したものと同じです）。

- ![](/images/Sketcher_CreateHexagon.svg)![](/images/Toolbar_flyout_arrow_blue_background.svg) 正多角形を作成：

- ![](/images/Sketcher_CreateTriangle.svg) [正三角形](/Sketcher_CreateTriangle/ja "Sketcher CreateTriangle/ja")：正三角形を作成します。[introduced in 1.0](/Release_notes_1.0 "Release notes 1.0")：[正多角形](/Sketcher_CreateRegularPolygon/ja "Sketcher CreateRegularPolygon/ja")と同じツールになりました。エッジの数として 3 を指定しているだけです。

- ![](/images/Sketcher_CreateSquare.svg) [正方形](/Sketcher_CreateSquare/ja "Sketcher CreateSquare/ja")：正方形を作成します。[introduced in 1.0](/Release_notes_1.0 "Release notes 1.0")：[正多角形](/Sketcher_CreateRegularPolygon/ja "Sketcher CreateRegularPolygon/ja")と同じツールになりました。エッジの数として 4 を指定しているだけです。

- ![](/images/Sketcher_CreatePentagon.svg) [正五角形](/Sketcher_CreatePentagon/ja "Sketcher CreatePentagon/ja")：正五角形を作成します。[introduced in 1.0](/Release_notes_1.0 "Release notes 1.0")：[正多角形](/Sketcher_CreateRegularPolygon/ja "Sketcher CreateRegularPolygon/ja")と同じツールになりました。エッジの数として 5 を指定しているだけです。

- ![](/images/Sketcher_CreateHexagon.svg) [正六角形](/Sketcher_CreateHexagon/ja "Sketcher CreateHexagon/ja")：正六角形を作成します。[introduced in 1.0](/Release_notes_1.0 "Release notes 1.0")：[正多角形](/Sketcher_CreateRegularPolygon/ja "Sketcher CreateRegularPolygon/ja")と同じツールになりました。エッジの数として 6 を指定しているだけです。

- ![](/images/Sketcher_CreateHeptagon.svg) [正七角形](/Sketcher_CreateHeptagon/ja "Sketcher CreateHeptagon/ja")：正七角形を作成します。[introduced in 1.0](/Release_notes_1.0 "Release notes 1.0")：[正多角形](/Sketcher_CreateRegularPolygon/ja "Sketcher CreateRegularPolygon/ja")と同じツールになりました。エッジの数として 7 を指定しているだけです。

- ![](/images/Sketcher_CreateOctagon.svg) [正八角形](/Sketcher_CreateOctagon/ja "Sketcher CreateOctagon/ja")：正八角形を作成します。[introduced in 1.0](/Release_notes_1.0 "Release notes 1.0")：[正多角形](/Sketcher_CreateRegularPolygon/ja "Sketcher CreateRegularPolygon/ja")と同じツールになりました。エッジの数として 8 を指定しているだけです。

- ![](/images/Sketcher_CreateRegularPolygon.svg) [正多角形](/Sketcher_CreateRegularPolygon/ja "Sketcher CreateRegularPolygon/ja")：エッジの数を指定して正多角形を作成します。

- ![](/images/Sketcher_CreateSlot.svg)![](/images/Toolbar_flyout_arrow_blue_background.svg) 長円形を作成：

- ![](/images/Sketcher_CreateSlot.svg) [長円形を作成](/Sketcher_CreateSlot/ja "Sketcher CreateSlot/ja")：長円形を作成します。

- ![](/images/Sketcher_CreateArcSlot.svg) [円弧状の長円形を作成](/Sketcher_CreateArcSlot/ja "Sketcher CreateArcSlot/ja")：円弧状の長円形を作成します。[introduced in 1.0](/Release_notes_1.0 "Release notes 1.0")

- ![](/images/Sketcher_CreateBSpline.svg)![](/images/Toolbar_flyout_arrow_blue_background.svg) B スプラインを作成：

- ![](/images/Sketcher_CreateBSpline.svg) [制御点による B スプライン](/Sketcher_CreateBSpline/ja "Sketcher CreateBSpline/ja")：制御点を指定して B スプライン曲線を作成します。[introduced in 1.0](/Release_notes_1.0 "Release notes 1.0")：ノット点を指定するモードもあります。

- ![](/images/Sketcher_CreatePeriodicBSpline.svg) [制御点による周期的 B スプライン](/Sketcher_CreatePeriodicBSpline/ja "Sketcher CreatePeriodicBSpline/ja")：制御点を指定して、周期的（閉じた）B スプライン曲線を作成します。[introduced in 1.0](/Release_notes_1.0 "Release notes 1.0")：[制御点による B スプライン](/Sketcher_CreateBSpline/ja "Sketcher CreateBSpline/ja")と同じツールになりました。初期モードが違うだけです。

- ![](/images/Sketcher_CreateBSplineByInterpolation.svg) [ノットによる B スプライン](/Sketcher_CreateBSplineByInterpolation/ja "Sketcher CreateBSplineByInterpolation/ja")：ノットを指定して B スプライン曲線を作成します。[introduced in 1.0](/Release_notes_1.0 "Release notes 1.0")：[制御点による B スプライン](/Sketcher_CreateBSpline/ja "Sketcher CreateBSpline/ja")と同じツールになりました。初期モードが違うだけです。

- ![](/images/Sketcher_CreatePeriodicBSplineByInterpolation.svg) [ノットによる周期的 B スプライン](/Sketcher_CreatePeriodicBSplineByInterpolation/ja "Sketcher CreatePeriodicBSplineByInterpolation/ja")：ノットを指定して、周期的（閉じた）B スプライン曲線を作成します。[introduced in 1.0](/Release_notes_1.0 "Release notes 1.0")：[制御点による B スプライン](/Sketcher_CreateBSpline/ja "Sketcher CreateBSpline/ja")と同じツールになりました。初期モードが違うだけです。

- ![](/images/Sketcher_ToggleConstruction.svg) [構築ジオメトリの切り替え](/Sketcher_ToggleConstruction/ja "Sketcher ToggleConstruction/ja")：図形ツール、または既存の図形の構築モード（補助線）を切り替えます。

### スケッチャー拘束

以下は[拘束](#Constraints)を作成するためのツールです。いくつかの拘束には、[付随拘束](/Sketcher_helper_constraint/ja "Sketcher helper constraint/ja")の使用が必要です。

- ![](/images/Sketcher_Dimension.svg)![](/images/Toolbar_flyout_arrow_blue_background.svg) 寸法拘束：

- ![](/images/Sketcher_Dimension.svg) [寸法](/Sketcher_Dimension/ja "Sketcher Dimension/ja")：選択内容（コンテキスト）に応じた拘束ツールです。現在選択しているものに応じて適切な寸法拘束または幾何拘束を提案します。[introduced in 1.0](/Release_notes_1.0 "Release notes 1.0")

- ![](/images/Sketcher_ConstrainDistanceX.svg) [水平距離拘束](/Sketcher_ConstrainDistanceX/ja "Sketcher ConstrainDistanceX/ja")：2 点間または線分の両端点間の水平距離を指定します。もし 1 点だけが選択されている場合は、原点との水平距離になります。

- ![](/images/Sketcher_ConstrainDistanceY.svg) [垂直距離拘束](/Sketcher_ConstrainDistanceY/ja "Sketcher ConstrainDistanceY/ja")：2 点間または線分の両端点間の垂直距離を指定します。もし 1 点だけが選択されている場合は、原点との垂直距離になります。

- ![](/images/Sketcher_ConstrainDistance.svg) [距離拘束](/Sketcher_ConstrainDistance/ja "Sketcher ConstrainDistance/ja")：2 点間の距離、線分の長さ、点と線分の距離（垂線の長さ）、[introduced in 0.21](/Release_notes_0.21 "Release notes 0.21")2 つの円または円弧間の距離、円または円弧と線分の間の距離、または[introduced in 1.0](/Release_notes_1.0 "Release notes 1.0")円弧の長さを指定します。

- ![](/images/Sketcher_ConstrainRadiam.svg) [半径/直径を自動拘束](/Sketcher_ConstrainRadiam/ja "Sketcher ConstrainRadiam/ja")：円弧または B スプライン曲線の重み円の半径、または円の直径を指定します。

- ![](/images/Sketcher_ConstrainRadius.svg) [半径拘束](/Sketcher_ConstrainRadius/ja "Sketcher ConstrainRadius/ja")：円、円弧、または B スプラインスプライン曲線の重み円の半径を指定します。

- ![](/images/Sketcher_ConstrainDiameter.svg) [直径拘束](/Sketcher_ConstrainDiameter/ja "Sketcher ConstrainDiameter/ja")：円、円弧の直径を指定します。

- ![](/images/Sketcher_ConstrainAngle.svg) [角度を拘束](/Sketcher_ConstrainAngle/ja "Sketcher ConstrainAngle/ja")：2 つの線分、線分と水平座標軸、または円弧の開口角度を指定します。

- ![](/images/Sketcher_ConstrainLock.svg) [ロック拘束](/Sketcher_ConstrainLock/ja "Sketcher ConstrainLock/ja")：点に対して[水平距離拘束](/Sketcher_ConstrainDistanceX/ja "Sketcher ConstrainDistanceX/ja")と[垂直距離拘束](/Sketcher_ConstrainDistanceY/ja "Sketcher ConstrainDistanceY/ja")を適用します。1 点だけが選択されている場合は、その点と原点の間の水平および垂直距離を指定します。複数の点が選択されている場合は、最後の選択点と、それ以外の点の間の水平および垂直距離を指定します。

- ![](/images/Sketcher_ConstrainCoincidentUnified.svg) [一致拘束（統合）](/Sketcher_ConstrainCoincidentUnified/ja "Sketcher ConstrainCoincidentUnified/ja")：複数個の点が一致していること、または複数個の点が線分または座標軸上にあること、または同心円であるよう拘束します。[一致拘束](/Sketcher_ConstrainCoincident/ja "Sketcher ConstrainCoincident/ja")および[点がオブジェクト上にある拘束](/Sketcher_ConstrainPointOnObject/ja "Sketcher ConstrainPointOnObject/ja")ツールを統合したものです。[introduced in 1.0](/Release_notes_1.0 "Release notes 1.0")

- ![](/images/Sketcher_ConstrainCoincident.svg) [一致拘束](/Sketcher_ConstrainCoincident/ja "Sketcher ConstrainCoincident/ja")：複数個の点が一致していること、または同心円であるよう拘束します。

- ![](/images/Sketcher_ConstrainPointOnObject.svg) [点がオブジェクト上にある拘束](/Sketcher_ConstrainPointOnObject/ja "Sketcher ConstrainPointOnObject/ja")：複数この点が線分または座標軸にあるよう拘束します。

- ![](/images/Sketcher_ConstrainHorVer.svg)![](/images/Toolbar_flyout_arrow_blue_background.svg)水平・垂直拘束：

- ![](/images/Sketcher_ConstrainHorVer.svg) [水平/垂直拘束](/Sketcher_ConstrainHorVer/ja "Sketcher ConstrainHorVer/ja")：2 つの線分、または複数個の点の並びが、水平または垂直のいずれか現在の傾きに近い方になるよう拘束します。[水平拘束](/Sketcher_ConstrainHorizontal/ja "Sketcher ConstrainHorizontal/ja")および[垂直拘束](/Sketcher_ConstrainVertical/ja "Sketcher ConstrainVertical/ja")ツールを統合したものです。。[introduced in 1.0](/Release_notes_1.0 "Release notes 1.0")

- ![](/images/Sketcher_ConstrainHorizontal.svg) [水平拘束](/Sketcher_ConstrainHorizontal/ja "Sketcher ConstrainHorizontal/ja")：2 つの線分、または複数個の点の並びが水平になるよう拘束します。

- ![](/images/Sketcher_ConstrainVertical.svg) [垂直拘束](/Sketcher_ConstrainVertical/ja "Sketcher ConstrainVertical/ja"): 2 つの線分、または複数個の点の並びが垂直になるよう拘束します。

- ![](/images/Sketcher_ConstrainParallel.svg) [並行拘束](/Sketcher_ConstrainParallel/ja "Sketcher ConstrainParallel/ja")：選択した複数の線分が平行になるよう拘束します。

- ![](/images/Sketcher_ConstrainPerpendicular.svg) [直角拘束](/Sketcher_ConstrainPerpendicular/ja "Sketcher ConstrainPerpendicular/ja")：2 つの線分、または 2 つのエッジ（曲線）、またはエッジと座標軸が垂直になるよう拘束します。2 つのエッジがある点で直行するよう拘束する場合、その点と各エッジとに一致拘束も適用します。

- ![](/images/Sketcher_ConstrainTangent.svg) [正接拘束または共線拘束](/Sketcher_ConstrainTangent/ja "Sketcher ConstrainTangent/ja")：2 つのエッジ、またはエッジと座標軸が接するよう拘束します。2 つのエッジがある点で接するよう拘束する場合、その点と各エッジとに一致拘束も適用します。

- ![](/images/Sketcher_ConstrainEqual.svg) [等値拘束](/Sketcher_ConstrainEqual/ja "Sketcher ConstrainEqual/ja")：もし 2 つのエッジが直線なら、それらが同じ長さを持つように拘束します。B スプライン以外の曲線なら、同じ曲率を持つように拘束します。

- ![](/images/Sketcher_ConstrainSymmetric.svg) [対称拘束](/Sketcher_ConstrainSymmetric/ja "Sketcher ConstrainSymmetric/ja")：2 つの点が、線、座標軸、または第 3 の点に対して対称になるよう拘束します。

- ![](/images/Sketcher_ConstrainBlock.svg) [固定拘束](/Sketcher_ConstrainBlock/ja "Sketcher ConstrainBlock/ja")：この拘束だけで、エッジの位置を固定するよう拘束します。主に B スプライン曲線のためのものです。

- ![](/images/Sketcher_ConstrainSnellsLaw.svg) [屈折率拘束（スネルの法則）](/Sketcher_ConstrainSnellsLaw/ja "Sketcher ConstrainSnellsLaw/ja")：光が境界を通過するときの屈折の法則（[[スネルの法則](https://ja.wikipedia.org/wiki/%E3%82%B9%E3%83%8D%E3%83%AB%E3%81%AE%E6%B3%95%E5%89%87)]）に基づき、2 つの線分の関係を拘束します。

- ![](/images/Sketcher_ToggleDrivingConstraint.svg)![](/images/Toolbar_flyout_arrow_blue_background.svg) 拘束の切り替え：

- ![](/images/Sketcher_ToggleDrivingConstraint.svg) [駆動拘束/参照拘束の切り替え](/Sketcher_ToggleDrivingConstraint/ja "Sketcher ToggleDrivingConstraint/ja")：寸法拘束ツールまたは選択した寸法拘束を、駆動モード参照モード間で切り替えます。

- ![](/images/Sketcher_ToggleActiveConstraint.svg) [拘束の有効化/無効化](/Sketcher_ToggleActiveConstraint/ja "Sketcher ToggleActiveConstraint/ja")：選択した拘束の有効、無効を切り替えます。

### スケッチャー・ツール

- ![](/images/Sketcher_CreateFillet.svg)![](/images/Toolbar_flyout_arrow_blue_background.svg) フィレットまたは面取りの作成：

- ![](/images/Sketcher_CreateFillet.svg) [フレットを作成](/Sketcher_CreateFillet/ja "Sketcher CreateFillet/ja")：2 つの並行でないエッジの間にフィレットを作成します。[introduced in 1.0](/Release_notes_1.0 "Release notes 1.0")：このツールでは面取りを作成するモードもあります。

- ![](/images/Sketcher_CreateChamfer.svg) [面取りを作成](/Sketcher_CreateChamfer/ja "Sketcher CreateChamfer/ja")：2 つの平行でないエッジの間に面取りを作成します。[フィレットを作成](/Sketcher_CreateFillet/ja "Sketcher CreateFillet/ja")と同じツールになりました。初期モードが違うだけです。[introduced in 1.0](/Release_notes_1.0 "Release notes 1.0")

- ![](/images/Sketcher_Trimming.svg)![](/images/Toolbar_flyout_arrow_blue_background.svg) エッジの編集：

- ![](/images/Sketcher_Trimming.svg) [エッジをトリム](/Sketcher_Trimming/ja "Sketcher Trimming/ja")：他のエッジとの交点までの区間をトリミングします。

- ![](/images/Sketcher_Split.svg) [エッジを分割](/Sketcher_Split/ja "Sketcher Split/ja")：エッジを分割し、ほとんどの制約を引き継ぎます。

- ![](/images/Sketcher_Extend.svg) [エッジを延長](/Sketcher_Extend/ja "Sketcher Extend/ja")：線分または円弧を、任意の位置、または目標となる円や点まで延長または短縮します。

- ![](/images/Sketcher_External.svg) [外部ジオメトリを作成](/Sketcher_External/ja "Sketcher External/ja")：スケッチの外部にあるオブジェクトのエッジや点をスケッチ平面に投影します。1.0 and below

- ![](/images/Sketcher_Projection.svg)![](/images/Toolbar_flyout_arrow_blue_background.svg) 外部ジオメトリ：

- ![](/images/Sketcher_Projection.svg) [外部投影ジオメトリの作成](/Sketcher_Projection/ja "Sketcher Projection/ja")：外部オブジェクトのエッジや点をスケッチ平面に投影します。[introduced in 1.1](/Release_notes_1.1 "Release notes 1.1")

- ![](/images/Sketcher_Intersection.svg) [外部交差ジオメトリの作成](/Sketcher_Intersection/ja "Sketcher Intersection/ja")：外部オブジェクトとスケッチ平面の交差をを基にエッジを作成します。

- ![](/images/Sketcher_CarbonCopy.svg) [カーボンコピーを作成](/Sketcher_CarbonCopy/ja "Sketcher CarbonCopy/ja")：別のスケッチのすべての要素と拘束を、現在アクティブなスケッチにコピーします。

- ![](/images/Sketcher_SelectOrigin.svg) [原点を選択](/Sketcher_SelectOrigin/ja "Sketcher SelectOrigin/ja")：原点を選択（状態に）します。

- ![](/images/Sketcher_SelectHorizontalAxis.svg) [水平軸を選択](/Sketcher_SelectHorizontalAxis/ja "Sketcher SelectHorizontalAxis/ja")：水平軸（x 座標軸）を選択（状態に）します。

- ![](/images/Sketcher_SelectVerticalAxis.svg) [垂直軸を選択](/Sketcher_SelectVerticalAxis/ja "Sketcher SelectVerticalAxis/ja")：垂直軸（y 座標軸）を選択（状態に）します。

- ![](/images/Sketcher_Translate.svg) [配列変換](/Sketcher_Translate/ja "Sketcher Translate/ja")：選択した要素を移動、または（オプションで）コピーします。[introduced in 1.0](/Release_notes_1.0 "Release notes 1.0")

- ![](/images/Sketcher_Rotate.svg) [軸周変換](/Sketcher_Rotate/ja "Sketcher Rotate/ja")：選択した要素を軸の周りで回転させる、または（オプションで）回転させたコピーを作成します。[introduced in 1.0](/Release_notes_1.0 "Release notes 1.0")

- ![](/images/Sketcher_Scale.svg) [スケール変換](/Sketcher_Scale/ja "Sketcher Scale/ja")：選択した要素を拡大・縮小、または（オプションで）拡大縮小したコピーを作成します。[introduced in 1.0](/Release_notes_1.0 "Release notes 1.0")

- ![](/images/Sketcher_Offset.svg) [オフセット](/Sketcher_Offset/ja "Sketcher Offset/ja")：選択した要素から等距離の位置に新たな図形を作成します。[introduced in 1.0](/Release_notes_1.0 "Release notes 1.0")

- ![](/images/Sketcher_Symmetry.svg) [対称](/Sketcher_Symmetry/ja "Sketcher Symmetry/ja")：選択した要素の対称コピーを作成します。

- ![](/images/Sketcher_RemoveAxesAlignment.svg) [軸方向の拘束を解除](/Sketcher_RemoveAxesAlignment/ja "Sketcher RemoveAxesAlignment/ja")：[水平拘束](/Sketcher_ConstrainHorizontal/ja "Sketcher ConstrainHorizontal/ja")および[垂直拘束](/Sketcher_ConstrainVertical/ja "Sketcher ConstrainVertical/ja")を[並行拘束](/Sketcher_ConstrainParallel/ja "Sketcher ConstrainParallel/ja")および[直角拘束](/Sketcher_ConstrainPerpendicular/ja "Sketcher ConstrainPerpendicular/ja")に置き換えることで、選択した辺の座標軸方向の拘束を解除（軸に対して回転できるように）します。

- ![](/images/Sketcher_DeleteAllGeometry.svg) [すべてのジオメトリーを削除](/Sketcher_DeleteAllGeometry/ja "Sketcher DeleteAllGeometry/ja")：スケッチ内のすべての要素と拘束を削除します。

- ![](/images/Sketcher_DeleteAllConstraints.svg) [すべての拘束を削除](/Sketcher_DeleteAllConstraints/ja "Sketcher DeleteAllConstraints/ja")：スケッチ内の据えての拘束を削除します。

- ![](/images/Edit-copy.svg) スケッチ内でコピー：[コピー・カット・ペースト](#Copy,_cut_and_paste)を参照してください。

- ![](/images/Edit-cut.svg) スケッチ内でカット：[コピー・カット・ペースト](#Copy,_cut_and_paste)を参照してください。

- ![](/images/Edit-paste.svg) スケッチ内でペースト：[コピー・カット・ペースト](#Copy,_cut_and_paste)を参照してください。

### B スプラインツール

- ![](/images/Sketcher_BSplineConvertToNURBS.svg) [ジオメトリを B-スプラインに変換](/Sketcher_BSplineConvertToNURBS/ja "Sketcher BSplineConvertToNURBS/ja")：選択したエッジを B スプラインに変換します。

- ![](/images/Sketcher_BSplineIncreaseDegree.svg) [B スプラインの次数を増やす](/Sketcher_BSplineIncreaseDegree/ja "Sketcher BSplineIncreaseDegree/ja")：B スプラインの次数を増やします。

- ![](/images/Sketcher_BSplineDecreaseDegree.svg) [B スプラインの次数を減らす](/Sketcher_BSplineDecreaseDegree/ja "Sketcher BSplineDecreaseDegree/ja")：B スプラインの次数を減らします。

- ![](/images/Sketcher_BSplineIncreaseKnotMultiplicity.svg) [ノット多重度を増やす](/Sketcher_BSplineIncreaseKnotMultiplicity/ja "Sketcher BSplineIncreaseKnotMultiplicity/ja")：B スプラインのノット多重度を増やします。

- ![](/images/Sketcher_BSplineDecreaseKnotMultiplicity.svg) [ノット多重度を減らす](/Sketcher_BSplineDecreaseKnotMultiplicity/ja "Sketcher BSplineDecreaseKnotMultiplicity/ja")：B スプラインのノット多重度を減らします。

- ![](/images/Sketcher_BSplineInsertKnot.svg) [ノットを挿入](/Sketcher_BSplineInsertKnot/ja "Sketcher BSplineInsertKnot/ja")：B スプラインにノットを挿入する、または既存のノット多重度を増やします。

- ![](/images/Sketcher_JoinCurves.svg) [曲線を結合](/Sketcher_JoinCurves/ja "Sketcher JoinCurves/ja")：2 つの B スプラインまたは他の種類のエッジを結合し、新しい B スプラインを作ります。[introduced in 0.21](/Release_notes_0.21 "Release notes 0.21")

### スケッチャー表示ツール

- ![](/images/Sketcher_SelectElementsWithDoFs.svg) [未拘束の自由度を選択](/Sketcher_SelectElementsWithDoFs/ja "Sketcher SelectElementsWithDoFs/ja")：スケッチ内で完全拘束になっていない要素を選択状態にします。

- ![](/images/Sketcher_SelectConstraints.svg) [関連する拘束を選択](/Sketcher_SelectConstraints/ja "Sketcher SelectConstraints/ja")：選択された要素に関連する拘束を選択状態にします。

- ![](/images/Sketcher_SelectElementsAssociatedWithConstraints.svg) [関連する要素を選択](/Sketcher_SelectElementsAssociatedWithConstraints/ja "Sketcher SelectElementsAssociatedWithConstraints/ja")：選択された拘束に関連する要素を選択状態にします。

- ![](/images/Sketcher_SelectRedundantConstraints.svg) [冗長な拘束を選択](/Sketcher_SelectRedundantConstraints/ja "Sketcher SelectRedundantConstraints/ja")：スケッチ内の冗長な拘束を選択状態にします。

- ![](/images/Sketcher_SelectConflictingConstraints.svg) [競合する拘束を選択](/Sketcher_SelectConflictingConstraints/ja "Sketcher SelectConflictingConstraints/ja")：スケッチ内の競合する拘束を選択状態にします。

- ![](/images/Sketcher_ArcOverlay.svg) [円弧の補助円を表示/非表示](/Sketcher_ArcOverlay/ja "Sketcher ArcOverlay/ja")：スケッチ内すべての円弧の補助円（円弧がその一部となっている仮想的な円）の表示、非表示を切り替えます。[introduced in 1.0](/Release_notes_1.0 "Release notes 1.0")

- ![](/images/Sketcher_BSplinePolygon.svg)![](/images/Toolbar_flyout_arrow_blue_background.svg) B スプライン補助情報の表示設定：

- ![](/images/Sketcher_BSplineDegree.svg) [B スプライン次数の表示/非表示](/Sketcher_BSplineDegree/ja "Sketcher BSplineDegree/ja")：スケッチ内すべての B スプラインの次数の表示、非表示を切り替えます。

- ![](/images/Sketcher_BSplinePolygon.svg) [B スプライン制御ポリゴンの表示/非表示](/Sketcher_BSplinePolygon/ja "Sketcher BSplinePolygon/ja")：スケッチ内すべての B スプラインの制御ポリゴンの表示、非表示を切り替えます。

- ![](/images/Sketcher_BSplineComb.svg) [B スプライン曲率コームの表示/非表示](/Sketcher_BSplineComb/ja "Sketcher BSplineComb/ja")：スケッチ内すべての B スプラインのスプラインの曲率コームの表示、非表示を切り替えます。

- ![](/images/Sketcher_BSplineKnotMultiplicity.svg) [B スプラインノット多重度の表示/非表示](/Sketcher_BSplineKnotMultiplicity/ja "Sketcher BSplineKnotMultiplicity/ja")：スケッチ内すべての B スプラインのスプラインのノット多重度の表示、非表示を切り替えます。

- ![](/images/Sketcher_BSplinePoleWeight.svg) [B スプライン制御点重みの表示/非表示](/Sketcher_BSplinePoleWeight/ja "Sketcher BSplinePoleWeight/ja")：スケッチ内すべての B スプラインのスプラインの制御点の重みの表示、非表示を切り替えます。

- ![](/images/Sketcher_RestoreInternalAlignmentGeometry.svg) [内部ジオメトリの表示/非表示](/Sketcher_RestoreInternalAlignmentGeometry/ja "Sketcher RestoreInternalAlignmentGeometry/ja")：要素の内部ジオメトリ（訳注：たとえば楕円の長軸や短軸）を削除、または欠落している内部ジオメトリを再作成します。

- ![](/images/Sketcher_SwitchVirtualSpace.svg) [仮想スペース切り替え](/Sketcher_SwitchVirtualSpace/ja "Sketcher SwitchVirtualSpace/ja")：選択した拘束をもう一つの仮想スペースに移動する（訳注：そのため表示されなくなります）、または表示される仮想スペースをもう一つのものに切り替えます。

### 廃止されたツール

- ![](/images/Sketcher_Clone.svg) [Clone](/Sketcher_Clone "Sketcher Clone"): Clones a Sketcher element. 1.0 and above で廃止されました。

- ![](/images/Sketcher_CloseShape.svg) [Close shape](/Sketcher_CloseShape "Sketcher CloseShape"): Creates a closed shape by applying coincident constraints to endpoints. 0.21 and above で廃止されました。

- ![](/images/Sketcher_CreatePointFillet.svg) [Corner-preserving fillet](/Sketcher_CreatePointFillet "Sketcher CreatePointFillet"): Creates a fillet between two non-parallel lines while preserving their corner point. 1.0 and above で廃止されました。

- ![](/images/Sketcher_ConnectLines.svg) [Connect edges](/Sketcher_ConnectLines "Sketcher ConnectLines"): Connect Sketcher elements by applying coincident constraints to endpoints. 0.21 and above で廃止されました。

- ![](/images/Sketcher_Copy.svg) [Copy](/Sketcher_Copy "Sketcher Copy"): Copies a Sketcher element. 1.0 and above で廃止されました。

- ![](/images/Sketcher_Move.svg) [Move](/Sketcher_Move "Sketcher Move"): Moves the selected geometry taking as reference the last selected point. 1.0 and above で廃止されました。

- ![](/images/Sketcher_RectangularArray.svg) [Rectangular array](/Sketcher_RectangularArray "Sketcher RectangularArray"): Creates an array of selected Sketcher elements. 1.0 and above で廃止されました。

## 設定

- ![](/images/Workbench_Sketcher.svg) [スケッチャー・設定](/Sketcher_Preferences/ja "Sketcher Preferences/ja")：スケッチャーの設定。

## ベストプラクティス

各 FreeCAD のユーザーは自分なりの作業スタイルを確立していくものですが、以下のような一般的な原則に従うと効率的です。

- 複雑なスケッチを 1 つ作るよりも、シンプルなスケッチを複数作る方が管理が簡単です。例えば、最初のスケッチで基礎となる 3D 形状（押し出しや回転）を作成し、2 つ目のスケッチで穴や切り欠き（ポケット）を追加する、という方法です。後から詳細部分を 3D オブジェクト上で追加することもできます。例えばフィレットがたくさんある場合、それをスケッチ上で作成せず、3D オブジェクト上で追加するのが一般的です。
- 常に閉じた曲線を作ります。閉じた曲線にしないと、スケッチから生成されるのはソリッドではなく開いた面の集合になってしまいます。もし一部の図形をソリッド生成に含めたくない場合は、構造要素（補助線）ツールを使ってその図形を構造要素（補助線）に指定してください。
- 自動拘束追加機能を使うことで、手動で追加する拘束の数を減らすことができます。
- 一般的には、幾何拘束を先に作成し、次に寸法拘束を作成し、最後にスケッチを固定します。ただし、これは厳密に守るべきルールというわけではありません。スケッチ全体を完成させる前に、いくつかの図形だけを先に拘束してしまったほうが操作が楽になることもあります。
- もしスケッチが対称ならば、ロック拘束を使って、原点を中心に合わせると便利です。もしスケッチが非対称なら、点の一つを原点に合わせるか、ロック距離にわかりやすい値を選ぶと良いでしょう。
- 長さ拘束と、水平・垂直拘束のどちらを適用するか迷ったら、水平・垂直拘束を優先してください。水平・垂直拘束は計算付加が軽いためです。
- 推奨される拘束は、水平拘束、垂直拘束、水平距離拘束、垂直距離拘束、点と点の接線拘束です。可能ならば避けたほうが良い拘束は、（一般）距離拘束、エッジとエッジの接線拘束、オブジェクト上への点固定拘束、対称拘束です。
- 完全拘束になり図形が緑色になった後でも、スケッチの有効性に（訳注：例えば見た目では繋がっているように見る端点が実は繋がっていないなど）不安がある場合は、一旦スケッチを閉じた後で![](/images/Sketcher_ValidateSketch.svg) [スケッチを検証](/Sketcher_ValidateSketch/ja "Sketcher ValidateSketch/ja")ツールを使って見てください。

## チュートリアル

- Chrisb による[Sketcher Lecture](https://forum.freecadweb.org/viewtopic.php?f=36&t=30104)（スケッチャー講義）。これは、80 ページを超えるスケッチャーの詳細な解説の PDF ドキュメントです。スケッチャーの基礎からはじまり、図形の作成やそれぞれの拘束などの詳細までを解説指定明日。
- [スケッチャー基本チュートリアル](/Basic_Sketcher_Tutorial/ja "Basic Sketcher Tutorial/ja")は初心者のためのものです。
- [スケッチャー簡易チュートリアル - 拘束の実践方法](/Sketcher_Micro_Tutorial_-_Constraint_Practices/ja "Sketcher Micro Tutorial - Constraint Practices/ja")
- [スケッチの要件](/Sketcher_requirement_for_a_sketch/ja "Sketcher requirement for a sketch/ja") スケッチの最小要件と完全拘束の条件。

## スクリプティング

[スケッチャー・スクリプティング](/Sketcher_scripting/ja "Sketcher scripting/ja")に、Python スクリプトから拘束をどのように作成したらいいのかの例があります。

## 例

スケッチャーツールでできることのアイディアが、[スケッチャーの例](/Sketcher_Examples/ja "Sketcher Examples/ja")にあります。

![](/images/Sketcher_ExampleHinge-01.gif)
![](/images/Sketcher_ExampleHinge-15.png)

Retrieved from "<http://wiki.freecad.org/index.php?title=Sketcher_Workbench/ja&oldid=1547453>"
