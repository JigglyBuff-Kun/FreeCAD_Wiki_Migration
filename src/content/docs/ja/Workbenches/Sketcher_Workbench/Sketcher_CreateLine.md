---
title: スケッチャー・線分を作成
---

|                                                                                                      |
| ---------------------------------------------------------------------------------------------------- |
| スケッチャー・線分を作成                                                                             |
| メニューの場所                                                                                       |
| スケッチ → スケッチャージオメトリ → 線分を作成                                                       |
| ワークベンチ                                                                                         |
| [スケッチャー](/Sketcher_Workbench/ja "Sketcher Workbench/ja")                                       |
| デフォルトのショートカット                                                                           |
| G L                                                                                                  |
| 導入バージョン                                                                                       |
| -                                                                                                    |
| 参照                                                                                                 |
| [スケッチャー・ポリライン（折れ線）を作成](/Sketcher_CreatePolyline/ja "Sketcher CreatePolyline/ja") |
|                                                                                                      |

## 概要

![](/images/Sketcher_CreateLine.svg) スケッチャー・線分を作成ツールは線分を作成するためのものです。[introduced in 1.0](/Release_notes_1.0 "Release notes 1.0")：[オンビューパラメター](/Sketcher_Preferences/ja#General "Sketcher Preferences/ja")を有効にしている場合、3 つのモードが使えます。

![](/images/Sketcher_LineExample1.png)

## 使い方

[作図支援](/Sketcher_Workbench/ja#Drawing_aids "Sketcher Workbench/ja")も参照してください。

位置 OVP = 位置[パラメター入力窓](/Sketcher_Preferences/ja#General "Sketcher Preferences/ja") [introduced in 1.0](/Release_notes_1.0 "Release notes 1.0")  
寸法 OVP = 寸法パラメター入力窓 [introduced in 1.0](/Release_notes_1.0 "Release notes 1.0")

1. 複数のツールの起動方法があります。
   - ![](/images/Sketcher_CreateLine.svg) 線分を作成ボタンを押す。
   * メニューから**スケッチ → スケッチャージオメトリ → ![](/images/Sketcher_CreateLine.svg) 線分を作成**オプションを選択する。
   * キーボード・ショートカット G L を使う。
2. カーソルが十字に変わり、その横にツールのアイコンが表示されます。
3. [ビュー上のパラメター入力窓](/Sketcher_Preferences/ja#General "Sketcher Preferences/ja")を有効にしている場合、[スケッチャーダイアログ](/Sketcher_Dialog/ja "Sketcher Dialog/ja")の上部に（[introduced in 1.0](/Release_notes_1.0 "Release notes 1.0")）**線分パラメター**部が追加表示されます。
4. M キーを押す、またはパラメター部のドロップダウンリストから選ぶことで、ツールのモードを変更できます。
   - ![](/images/Sketcher_CreateLineAngleLength.svg) **点、長さ、角度**：[introduced in 1.0](/Release_notes_1.0 "Release notes 1.0")
     1. 線分の始点を指定します。あるいは、位置 OVP が有効な場合は X、Y 座標を入力します。
     2. 線分の終点を指定します。あるいは、寸法 OVP が有効な場合は、線分の長さ、（スケッチの X 軸に対する）線分の角度を入力します。
   - ![](/images/Sketcher_CreateLineLengthWidth.svg) **点、幅、高さ**：[introduced in 1.0](/Release_notes_1.0 "Release notes 1.0")
     1. 線分の始点を指定します。あるいは、位置 OVP が有効な場合は X、Y 座標を入力します。
     2. 線分の終点を指定します。あるいは、寸法 OVP が有効な場合は、線分の X 軸、Y 軸方向の距離を入力します。
   - ![](/images/Sketcher_CreateLine.svg) **2 点**：
     1. 線分の始点を指定します。あるいは、位置 OVP が有効な場合は X、Y 座標を入力します。
     2. 線分の終点を指定します。あるいは、位置 OVP が有効な場合は X、Y 座標を入力します。
5. 線分が作成され、位置 OVP または寸法 OVP に基づく必要な拘束が付与されます。
6. [連続モード](/Sketcher_Workbench/ja#Continue_modes "Sketcher Workbench/ja")の場合は以下のようになります。
   1. 必要に応じて線分の作成を続けます。
   2. 編集を終了するためには、右クリック、Esc キーを押す、または別の作図または拘束ツールを起動します。.

Retrieved from "<http://wiki.freecad.org/index.php?title=Sketcher_CreateLine/ja&oldid=1547868>"
