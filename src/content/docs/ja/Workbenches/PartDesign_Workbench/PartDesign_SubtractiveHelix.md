---
title: PartDesign・減算らせん
---

|                                                                                      |
| ------------------------------------------------------------------------------------ |
| PartDesign・減算らせん                                                               |
| メニューの場所                                                                       |
| Part Design → 減算フィーチャーを作成 → 減算らせん                                    |
| ワークベンチ                                                                         |
| [PartDesign](/PartDesign_Workbench/ja "PartDesign Workbench/ja")                     |
| デフォルトのショートカット                                                           |
| _なし_                                                                               |
| 導入バージョン                                                                       |
| 0.19                                                                                 |
| 参照                                                                                 |
| [PartDesign・加算らせん](/PartDesign_AdditiveHelix/ja "PartDesign AdditiveHelix/ja") |
|                                                                                      |

## 概要

**減算らせん**ツールを使うと、選択したスケッチまたは 2D 図形（特徴図形）をらせん状のパスに従って動かした部分を切り取ることで、ソリッド形状を修正できます。

![](/images/PartDesign_SubtractiveHelix_example_overview.png)

_特徴図形（B）を軸（A）の周りで動かすことで、既存の形状かららせん形状（C）を取り去ります。_

## 使い方

1. らせん状に動かすスケッチ（特徴図形）を選択します。スケッチの代わりに、既存ソリッド図形の面を使うこともできます。
2. ![](/images/PartDesign_SubtractiveHelix.svg) [PartDesign・減算らせん](/PartDesign_SubtractiveHelix "PartDesign SubtractiveHelix")ボタンを押します。
3. らせんのパラメターを設定します（次節参照）。
4. 作成したらせん形状を確認し、自己交差しないように必要に応じてパラメターを調整します。
5. OK ボタンを押します。

## オプション

以下の**らせんのパラメター**によって、減算らせんを作成する際スケッチをどのように動かすのかを指定できます。

![](/images/PartDesign_SubtractiveHelix_taskpanel.png)

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

### 特徴図形の外側を切り取る

チェックした場合、特徴図形を動かした部分と既存ボディーの共通部分が残ります。

### ビューを更新

チェックした場合、パラメターを変更するたびに、ビューに表示するらせんの形状を更新します。

## 設定

- **ツール → パラメターを変更... → BaseApp → Preferences → Mod → PartDesign → SubtractiveHelixPreview**を`true`に設定すると、ボディーと交差しないらせんでもプレビューに表示します。デフォルトは`false`です。 [introduced in 0.20](/Release_notes_0.20 "Release notes 0.20")

## プロパティ

- データ**Pitch**：各回転間の軸方向の距離。
- データ**Height**：らせん全体の長さ（らせんの元の図形の上下の余分な部分は考慮しない）
- データ**Turns**：回転数（整数である必要はありません）。
- データ**Left Handed**：[左ネジ](#Left_handed)を参照してください。
- データ**Reversed**：[逆方向](#Reversed)を参照してください。
- データ**角度**：軸に沿って、らせんの半径のどのくらい増減するのかを、-89° から 89° の間の値で指定します。
- データ**Reference axis**：らせん軸。
- データ**Mode**：らせんのモード（pitch-height（ピッチ-高さ）、pitch-turns（ピッチ-回転数）、turns-height（回転数、高さ））
- データ**Outside**：true の場合、特徴図形を動かした部分と既存ボディーの共通部分が残ります。
- データ**Has Been Edited**：false の場合、らせんに外接する直方体を基に、自己交差を回避できるピッチの初期値を提案します。
- データ**Refine**：true または false。true の場合、不要なエッジを自動的に削除し、形状を滑らかにします。詳細は[パート・RefineShape](/Part_RefineShape/ja "Part RefineShape/ja")を参照してください。
- データ**Profile**：閉曲線を含むスケッチ、または面。
- データ**Midplane**：使用しない。
- データ**Up to face**：使用しない。
- データ**Allow multiple face**：使用しない。

## 補足

- ![](/images/PartDesign_ShapeBinder.svg) [ShapeBinder](/PartDesign_ShapeBinder/ja "PartDesign ShapeBinder/ja")を特徴図形として使うことはできません。
- ![](/images/PartDesign_SubShapeBinder.svg) [SubShapeBinder](/PartDesign_SubShapeBinder/ja "PartDesign SubShapeBinder/ja")を特徴図形として使う場合、それを[ツリー・ビュー](/Tree_view "Tree view")で選択すると失敗します。その代わりに、[3D ビュー](/3D_view/ja "3D view/ja")上で SubShapeBinder の面を指定してください。

Retrieved from "<http://wiki.freecad.org/index.php?title=PartDesign_SubtractiveHelix/ja&oldid=1540115>"
