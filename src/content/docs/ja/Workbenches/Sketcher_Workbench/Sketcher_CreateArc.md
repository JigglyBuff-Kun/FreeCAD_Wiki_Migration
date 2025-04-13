---
title: スケッチャー・中心点から円弧を作成
---

|                                                                                              |
| -------------------------------------------------------------------------------------------- |
| スケッチャー・中心点から円弧を作成                                                           |
| メニューの場所                                                                               |
| スケッチ → スケッチャージオメトリ → 中心点から円弧を作成                                     |
| ワークベンチ                                                                                 |
| [スケッチャー](/Sketcher_Workbench/ja "Sketcher Workbench/ja")                               |
| デフォルトのショートカット                                                                   |
| G A                                                                                          |
| 導入バージョン                                                                               |
| -                                                                                            |
| 参照                                                                                         |
| [スケッチャー・中心を指定して円を作成](/Sketcher_CreateCircle/ja "Sketcher CreateCircle/ja") |
|                                                                                              |

## 概要

![](/images/Sketcher_CreateArc.svg) スケッチャー・中心点から円弧を作成ツールは、中心点を指定して円弧を作成するためのものです。[introduced in 1.0](/Release_notes_1.0 "Release notes 1.0")：または、両端と円弧上の点を指定して作成することもできます。

![](/images/Sketcher_ArcExample3.png)

中心点を指定するモードで円弧を作成し、ビュー上のパラメター入力窓から全てのパラメターを指定して拘束を自動生成した。

## 使い方

[作図支援](/Sketcher_Workbench/ja#Drawing_aids "Sketcher Workbench/ja")も参照してください。

位置 OVP = 位置[パラメター入力窓](/Sketcher_Preferences/ja#General "Sketcher Preferences/ja") [introduced in 1.0](/Release_notes_1.0 "Release notes 1.0")  
寸法 OVP = 寸法パラメター入力窓 [introduced in 1.0](/Release_notes_1.0 "Release notes 1.0")

1. 複数のツールの起動方法があります。
   - ![](/images/Sketcher_CreateArc.svg) 中心から円弧を作成ボタンを押す。
   * メニューから**スケッチ → スケッチャージオメトリ → ![](/images/Sketcher_CreateArc.svg) 中心から円弧を作成**オプションを選択する。
   * [3D ビュー](/3D_view/ja "3D view/ja")で右クリックし、コンテキストメニューから**![](/images/Sketcher_CreateArc.svg) 中心から円弧を作成**オプションを選択する。
   * キーボード・ショートカット G A を使う。
2. カーソルが十字に変わり、その横にツールのアイコンが表示されます。
3. [スケッチャーダイアログ](/Sketcher_Dialog/ja "Sketcher Dialog/ja")の上部に（[introduced in 1.0](/Release_notes_1.0 "Release notes 1.0")）**円弧パラメター**部が追加表示されます。
4. M キーを押す、またはパラメター部のドロップダウンリストから選ぶことで、ツールのモードを変更できます。
   - ![](/images/Sketcher_CreateArc.svg) **中心**：
     1. 円弧の中心を指定するか、位置 OVP が有効な場合は中心の X、Y 座標を入力します。
     2. 円弧の始点を指定する（合わせて円弧の半径も決まる）か、寸法 OVP が有効な場合は半径、（スケッチの X 軸に対する）始点の角度を入力します。この角度については拘束は生成されません。
     3. 円弧の終点を指定するか、寸法 OVP が有効な場合は円弧の開口角度を入力します。
   - ![](/images/Sketcher_Create3PointArc.svg) **円上の 3 点**：[introduced in 1.0](/Release_notes_1.0 "Release notes 1.0")
     1. 円弧の始点と終点を指定するか、位置 OVP が有効な場合は始点と終点の X、Y 座標を入力します。
     2. 半径を決めるために別の点を指定するか、位置 OVP が有効な場合は別の点の X、Y 座標を入力します。この 3 点目については拘束は生成されません。
5. 円弧が作成され、位置 OVP または寸法 OVP に基づく必要な拘束が付与されます。
6. [連続モード](/Sketcher_Workbench/ja#Continue_modes "Sketcher Workbench/ja")の場合は以下のようになります。
   1. 必要に応じて円弧の作成を続けます。
   2. 編集を終了するためには、右クリック、Esc キーを押す、または別の作図または拘束ツールを起動します。

Retrieved from "<http://wiki.freecad.org/index.php?title=Sketcher_CreateArc/ja&oldid=1548091>"
