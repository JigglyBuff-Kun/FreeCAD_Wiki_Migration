---
title: スケッチャー・構築ジオメトリー（補助線）の切り替え
---

|                                                                |
| -------------------------------------------------------------- |
| スケッチャー・構築ジオメトリー（補助線）の切り替え             |
| メニューの場所                                                 |
| スケッチ → スケッチャージオメトリ → 構築ジオメトリーの切り替え |
| ワークベンチ                                                   |
| [スケッチャー](/Sketcher_Workbench/ja "Sketcher Workbench/ja") |
| デフォルトのショートカット                                     |
| G N                                                            |
| 導入バージョン                                                 |
| -                                                              |
| 参照                                                           |
| _なし_                                                         |
|                                                                |

## 概要

The ![](/images/Sketcher_ToggleConstruction.svg) スケッチャー・構築ジオメトリの切り替えツールは、図形ツールの作図モードと構築（補助線）モードを切り替えます。または、既存の図形を構築（補助線）ジオメトリに変更する（または戻す）ものです。

構築（補助線）ジオメトリは、デフォルトでは青い[色](/Sketcher_Preferences/ja#Appearance "Sketcher Preferences/ja")と（[introduced in 1.0](/Release_notes_1.0 "Release notes 1.0")）線種で、通常のジオメトリと区別できます。構築（補助線）ジオメトリは、スケッチの中で他のジオメトリや拘束を定義する補助をするもので、スケッチの外では見えません。ただし、[パートデザイン・回転押し出し](/PartDesign_Revolution/ja "PartDesign Revolution/ja")の回転軸として構築（補助線）ジオメトリの線分を指定することはできます。

![](/images/Sketcher_ConstructionMode_fr_01.png)

## 使い方

### 図形ツールの切り替え

1. 図形が何も選択されていないことを確認します。
2. 複数のツールの起動方法があります。
   - ![](/images/Sketcher_ToggleConstruction.svg) 構築ジオメトリの切り替えボタンを押す。
   * メニューから**スケッチ → スケッチャージオメトリ → ![](/images/Sketcher_ToggleConstruction.svg) 構築ジオメトリの切り替え**オプションを選択する。
   * [3D ビューで](/3D_view "3D view")右クリックし、コンテキストメニューから**![](/images/Sketcher_ToggleConstruction.svg) 構築ジオメトリの切り替え**オプションを選択する。
   * キーボード・ショートカット G N を使う。
3. ジオメトリ作成時のモードは以下の間で交互に切り替わります。
   - 通常モードでは、メニューおよびツールバーのアイコンの色は白で、（デフォルトでは白い色で 3D ビュー上に表示される）通常のジオメトリを作成します。アイコンは![](/images/Sketcher_ToggleConstruction.svg)となります。
   - 構築（補助線）モードでは、メニューおよびツールバーのアイコンの色は青で、（デフォルトでは青い色で 3D ビュー上に表示される）構築ジオメトリを作成します。アイコンは![](/images/Sketcher_ToggleConstruction_Constr.svg)となります。

### 既存図形の切り替え

1. スケッチ内の 1 つ以上の要素を選択します。
2. 上記と同じ方法でツールを起動します。さらに、追加して以下の方法でも起動できます。
   - [スケッチャーダイアログ](/Sketcher_Dialog/ja "Sketcher Dialog/ja")の**要素**部で右クリックし、コンテキストメニューから**![](/images/Sketcher_ToggleConstruction.svg) 構築ジオメトリの切り替え**オプションを選択する。
3. 選択した図形が、通常モードから構築モード、またはその逆で切り替わります。色も合わせて変わります。
4. 図形ツールのモードは変わりません。

Retrieved from "<http://wiki.freecad.org/index.php?title=Sketcher_ToggleConstruction/ja&oldid=1547259>"
