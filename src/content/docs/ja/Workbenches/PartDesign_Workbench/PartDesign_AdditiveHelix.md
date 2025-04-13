---
title: PartDesign・加算らせん
---

|                                                                                            |
| ------------------------------------------------------------------------------------------ |
| パートデザイン・加算らせん                                                                 |
| メニューの場所                                                                             |
| Part Design → 加算フィーチャーを作成 → 加算らせん                                          |
| ワークベンチ                                                                               |
| [PartDesign](/PartDesign_Workbench "PartDesign Workbench")                                 |
| デフォルトのショートカット                                                                 |
| _なし_                                                                                     |
| 導入バージョン                                                                             |
| 0.19                                                                                       |
| 参照                                                                                       |
| [PartDesign・減算らせん](/PartDesign_SubtractiveHelix/ja "PartDesign SubtractiveHelix/ja") |
|                                                                                            |

## 概要

**加算らせん**ツールを使うと、選択したスケッチまたは 2D 図形（特徴図形）をらせん状のパスに従って動かすことでソリッド形状を作成できます。

![](/images/PartDesign_AdditiveHelix_example_overview.png)

_特徴図形（B）を軸（A）の周りで動かすことで、らせん形状（C）を作成します_。

## 使い方

1. らせん状に動かすスケッチ（特徴図形）を選択します。スケッチの代わりに、既存ソリッド図形の面を使うこともできます。
2. ![](/images/PartDesign_AdditiveHelix.svg) [パートデザイン・加算らせん](/PartDesign_AdditiveHelix "PartDesign AdditiveHelix")ボタンを押します。
3. らせんのパラメターを設定します（次節参照）。
4. 作成したらせん形状を確認し、自己交差しないように必要に応じてパラメターを調整します。
5. OK ボタンを押します。

## オプション

以下の**らせんのパラメター**によって、加算らせんを作成する際、スケッチ（特徴図形）をどのように動かすのかを指定できます。

![](/images/PartDesign_AdditiveHelix_taskpanel.png)

### 軸

以下のオプションは、スケッチをどのように動かすための軸を指定するためのものです。

- **通常のスケッチ軸**は、スケッチの原点を通るスケッチの法線を軸として指定します。[introduced in 0.20](/Release_notes_0.20 "Release notes 0.20")
- **水平スケッチ軸**は、水平軸（x 軸）を軸として選択します。新しいらせんを作る場合のデフォルトです。
- **垂直スケッチ軸**はスケッチの垂直軸（y 軸）を軸として選択します。
- **補助線**は、スケッチ中の補助線（構築ジオメトリ）を軸として選択します。ドロップダウンメニューには補助線の一覧が表示されます。例えば、1 つ目の補助線は「補助線 1」のように表示されます。
- **基本（X/Y/Z）軸**は、ボディーの X、Y、Z 軸を軸として選択します。
- **参照を選択...**は、3D ビュー上で、ボディー上の辺または[データム線](/PartDesign_Line "PartDesign Line")を軸として選択します。

### モード

らせんの形状を決めるためのパラメターです。選択肢は以下の通りです。

- **ピッチ-高さ-角度**は、1 回転あたりの高さ、全体の高さかららせんの形状を指定します。
- **ピッチ-ターン-角度**は、1 回転あたりの高さ、回転数かららせんの形状を指定します。
- **高さ-ターン-角度**は、全体の高さ、回転数かららせんの形状を指定します。
- **高さ-ターン-伸び**[introduced in 0.20](/Release_notes_0.20 "Release notes 0.20")は、全体の高さ、回転数、およびらせん半径の伸び（拡大）率でらせんの形状を指定します。したがって、高さを 0（伸びを正の値）とすると、（平面上の）渦巻き形状になります。高さと伸びを共に 0 とすると円になります。

### ピッチ

らせんの各回転間の距離です。

### 高さ

らせん全体の高さ（底面の中心と上面の中心間の距離）です。

### 回転

らせんの回転数です。全体の高さ ÷ ピッチとして定義されます。

### 円錐の角度

らせんに外接する円錐の角度。-89° から+89° の間の値を指定できます。

### 左ネジ

チェックすると、らせんの回転方向をデフォルトの時計回り（順ネジ）から半時計回り（逆ネジ）にします。

### 逆方向

チェックした場合、らせんの進む方向をデフォルトとは逆にします。

### ビューを更新

チェックした場合、パラメターを変更するたびに、ビューに表示するらせんの形状を更新します。

## 設定

- **ツール → パラメターを変更... → BaseApp → Preferences → Mod → PartDesign → AdditiveHelixPreview**を`true`に設定すると、ボディーと交差しないらせんでもプレビューに表示します。デフォルトは`false`です。 [introduced in 0.20](/Release_notes_0.20 "Release notes 0.20")

## プロパティ

- データ**Pitch**：各回転間の軸方向の距離。
- データ**Height**：らせん全体の長さ（らせんの元の図形の上下の余分な部分は考慮しない）
- データ**Turns**：回転数（整数である必要はありません）。
- データ**Left Handed**：[左ネジ](#Left_handed)を参照してください。
- データ**Reversed**：[逆方向](#Reversed)を参照してください。
- データ**角度**：軸に沿って、らせんの半径のどのくらい増減するのかを、-89° から 89° の間の値で指定します。
- データ**Reference axis**：らせん軸。
- データ**Mode**：らせんのモード（pitch-height（ピッチ-高さ）、pitch-turns（ピッチ-回転数）、turns-height（回転数、高さ））
- データ**Outside**：使用しない（減算らせんで使用する）
- データ**Has Been Edited**：false の場合、らせんに外接する直方体を基に、自己交差を回避できるピッチの初期値を提案します。
- データ**Refine**：true または false。true の場合、不要なエッジを自動的に削除し、形状を滑らかにします。詳細は[パート・RefineShape](/Part_RefineShape/ja "Part RefineShape/ja")を参照してください。
- データ**Profile**：閉曲線を含むスケッチ、または面。
- データ**Midplane**：使用しない。
- データ**Up to face**：使用しない。
- データ**Allow multiple face**：使用しない。

## 補足

- ![](/images/PartDesign_ShapeBinder.svg) [ShapeBinder](/PartDesign_ShapeBinder/ja "PartDesign ShapeBinder/ja")を特徴図形として使うことはできません。
- ![](/images/PartDesign_SubShapeBinder.svg) [SubShapeBinder](/PartDesign_SubShapeBinder/ja "PartDesign SubShapeBinder/ja")を特徴図形として使う場合、それを[ツリー・ビュー](/Tree_view "Tree view")で選択すると失敗します。その代わりに、[3D ビュー](/3D_view/ja "3D view/ja")上で SubShapeBinder の面を指定してください。

* らせんを構成する曲線を計算する浮動小数点演算の精度に限界があり、らせんの形状を正確に計算することは困難です。この結果、生成したらせん形状に対して（他の図形とのブーリアン計算をするなど）何らかの処理をする際、小さな変化に非常に敏感になってしまうことがあります。追加の処理が失敗すると、予測できない形でモデルが破損することがありえます。これを回避するためには、らせんと完全に重なりをもたせるか、あるいはらせんとは完全に分離しているか、どちらかにしてください。らせんの表面と他の図形の表面が一致するという完全一致にするとモデルが壊れやすくなります。例えば、ボルトの円柱の周りのネジ山のらせん、というのはこの典型的な例です。仮に一旦はうまくいったとしても、わずかに動かすだけでモデルが壊れてしまうかもしれません。

## 例

![](/images/PartDesign_AdditiveHelix_example_bspline.png)

スケッチで[B スプライン](/Sketcher_CreateBSpline "Sketcher CreateBSpline")を使用した例

![](/images/PartDesign_AdditiveHelix_example_twisting_pad.png)

スケッチに垂直ならせん軸の例。これは「ひねりをもったパッド」になります。

Retrieved from "<http://wiki.freecad.org/index.php?title=PartDesign_AdditiveHelix/ja&oldid=1540111>"
