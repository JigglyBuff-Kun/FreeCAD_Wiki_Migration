---
title: スケッチャー・スケッチを作成
---

|                                                                                                                                                                                                                                                            |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| スケッチャー・スケッチを作成                                                                                                                                                                                                                               |
| メニューの場所                                                                                                                                                                                                                                             |
| スケッチ → スケッチを作成                                                                                                                                                                                                                                  |
| ワークベンチ                                                                                                                                                                                                                                               |
| [スケッチッチャー](/Sketcher_Workbench/ja "Sketcher Workbench/ja")                                                                                                                                                                                         |
| デフォルトのショートカット                                                                                                                                                                                                                                 |
| _なし_                                                                                                                                                                                                                                                     |
| 導入バージョン                                                                                                                                                                                                                                             |
| -                                                                                                                                                                                                                                                          |
| 参照                                                                                                                                                                                                                                                       |
| [パートデザイン・スケッチを作成](/PartDesign_NewSketch/ja "PartDesign NewSketch/ja")、[スケッチ・スケッチをアタッチ](/Sketcher_MapSketch/ja "Sketcher MapSketch/ja")、[スケッチ・スケッチの方向を変更](/Sketcher_ReorientSketch "Sketcher ReorientSketch") |
|                                                                                                                                                                                                                                                            |

## 概要

T![](/images/Sketcher_NewSketch.svg) [スケッチャー・スケッチを作成](/Sketcher_NewSketch "Sketcher NewSketch")ツールは、新しいスケッチを作成し、[スケッチャー・ダイアログ](/Sketcher_Dialog "Sketcher Dialog")を開いて編集モードに入ります。

![](/images/Workbench_PartDesign.svg) [PartDesign ワークベンチ](/PartDesign_Workbench "PartDesign Workbench")にも[新しいスケッチを作成](/PartDesign_NewSketch "PartDesign NewSketch")するツールがあります。[PartDesign ボディー](/PartDesign_Body "PartDesign Body")について作業している場合は、そちらのツールを使うようにしてください。

## 使い方

1. スケッチを既存の形状に[アタッチ（関連付ける）](/index.php?title=Part_EditAttachment/ja&action=edit&redlink=1 "Part EditAttachment/ja (page does not exist)")場合は、形状（Shape）をもつオブジェクト、または 1 つ以上の頂点・辺・面、または平面を選択してください。
2. 以下のいずれかの方法でツールを起動できます。
   - ![](/images/Sketcher_NewSketch.svg) スケッチを作成ボタンを押す。
   * メニューから**Sketch → ![](/images/Sketcher_NewSketch.svg) スケッチを作成**を選択する。
3. 形状を選択した場合は次のようにします。
   1. **スケッチのアタッチ**ダイアログが開きます。
   2. プロダウンリストから[アタッチ方法](/Part_EditAttachment#Attachment_modes/ja "Part EditAttachment")を選択するか、あるいは**アタッチしない**を選択して無視します。
   3. OK ボタンを押します。
4. 形状を選択しない、または**アタッチしない**を選択した場合は次のようにします。
   1. **方向を選択**ダイアログが開きます。
   2. スケッチの基準となる（スケッチのローカル座標系に基づく）平面を指定します。
      - **逆方向**にチェックを入れない場合は以下のいずれかを指定します。
        - 上面：**XY 平面**
        - 正面：**XZ 平面**
        - 右側面：**YZ**
      - **逆方向**にチェックを入れた場合は以下のいずれかを指定します。
        - 底面：**XY 平面**
        - 背面：**XZ 平面**
        - 左側面**YZ 平面**
   3. 必要に応じて**オフセット**を指定します。オフセットには、ローカル座標系の Z、Y、X 軸に沿った距離を指定します。
   4. OK ボタンを押します。
5. スケッチが作成されます。
6. 編集モードに入り、[スケッチャー・ダイアログ](/Sketcher_Dialog/ja "Sketcher Dialog/ja")が開きます。
7. 編集を終了する方法は、![](/images/Sketcher_LeaveSketch.svg) [スケッチの編集を終了](/Sketcher_LeaveSketch/ja "Sketcher LeaveSketch/ja")を参照してください。

## 補足

- 既存のスケッチは、[スケッチャー・スケッチをアタッチ](/Sketcher_MapSketch/ja "Sketcher MapSketch/ja")を使用して、別のオブジェクトにアタッチし直すことができます。また、[スケッチャー・スケッチの方向を変更](/Sketcher_ReorientSketch/ja "Sketcher ReorientSketch/ja")を使用して、アタッチを解除し、代わりに向きを指定することもできます。

Retrieved from "<http://wiki.freecad.org/index.php?title=Sketcher_NewSketch/ja&oldid=1544181>"
