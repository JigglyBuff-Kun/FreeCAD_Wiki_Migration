---
title: スケッチャー・ダイアログ
---
## 概要

スケッチの編集中には（編集モードの際は）スケッチャー・ダイアログが[コンボビュー](/Combo_view "Combo view")のタスクタブに表示されます。

編集モードに入る方法は![](/images/Sketcher_EditSketch.svg) [スケッチャー・スケッチを編集](/Sketcher_EditSketch/ja "Sketcher EditSketch/ja")を、編集を終了する方法は![](/images/Sketcher_LeaveSketch.svg) [スケッチャー・スケッチを終了](/Sketcher_LeaveSketch/ja "Sketcher LeaveSketch/ja")を参照してください。

スケッチャーダイアログには下記のセクションがあります。

## ツールのパラメター

[introduced in 1.0](/Release_notes_1.0 "Release notes 1.0")

一部のツールは、ダイアログの上部にパラメターセクションを追加で表示します。利用可能なオプションやモードはツールによって異なります。

![](/images/Sketcher_Dialog_Line_parameters.png)

[スケッチャー・直線を作成](/Sketcher_CreateLine/ja "Sketcher CreateLine/ja")ツールのパラメターセクション

## ソルバーメッセージ

このセクションでは、スケッチの状態について示します。

表示されるメッセージの種類は以下の通りです。

* 空のスケッチ
* 過剰拘束: (#, #, #)
* 不正な拘束: (#, #, #)
* 冗長な拘束: (#, #, #)
* 部分的に冗長: (#, #, #)
* ソルバーの収束に失敗
* 未拘束: n DoF(s)
* 完全拘束

スケッチが（完全拘束に至っていない）未拘束中の場合は、自由度（DoF）が表示されます。アンダーラインの引かれた自由度の表示をクリックすると、未拘束の要素を選択します。詳細は![](/images/Sketcher_SelectElementsWithDoFs.svg) [スケッチャー・自由度で要素を選択](/Sketcher_SelectElementsWithDoFs/ja "Sketcher SelectElementsWithDoFs/ja")を参照してください。

もしスケッチに冗長な拘束や過剰拘束がある場合、関係する拘束の番号が表示されます。下線が引かれた拘束の番号をクリックすると、対応する拘束を選択します。詳細は![](/images/Sketcher_SelectRedundantConstraints.svg) [スケッチャー・冗長な拘束を選択](/Sketcher_SelectRedundantConstraints/ja "Sketcher SelectRedundantConstraints/ja")および![](/images/Sketcher_SelectConflictingConstraints.svg) [スケッチャー・過剰拘束を選択](/Sketcher_SelectConflictingConstraints/ja "Sketcher SelectConflictingConstraints/ja")を参照してください。

不正な拘束は、![](/images/Sketcher_ValidateSketch.svg) [スケッチャー・スケッチを検証](/Sketcher_ValidateSketch/ja "Sketcher ValidateSketch/ja")で修正できます。

赤色で表示されるメッセージには理由があります。これらは無視すべきでない問題があることを示しており、ソルバーの動作に影響を与えます。複数の問題が同時に発生することもありえますが、その場合は最初のメッセージだけが表示されます。

メッセージの色を変える方法は、[調整](/Fine-tuning/ja#Constraint_label_colors "Fine-tuning/ja")を参照してください。

利用可能なオプションは以下の通りです。

| オプション | 説明 |
| --- | --- |
|  | メニューを開きます。  * **自動更新**にチェックを入れると、スケッチに何らかの変更を加えるたび意ドキュメント全体を再計算します。複雑なドキュメントでは推奨しません。 |

## 高度なソルバー制御

このセクションは、[スケッチャー・設定](/Sketcher_Preferences/ja "Sketcher Preferences/ja")で**「高度なソルバー制御」セクションを表示**にチェックを入れたときのみ表示されます。

これらのオプションは、実用上はあまり役に立たないことに注意してください。ただし、ソルバーのテストや動作の理解には役に立つかもしれません。

利用可能なオプションは以下の通りです。

| Option | Description |
| --- | --- |
| **Default solver** | The solver that is used for solving the geometry. **[LevenbergMarquardt](https://en.wikipedia.org/wiki/Levenberg%E2%80%93Marquardt_algorithm)** and **DogLeg** are [trust region](https://en.wikipedia.org/wiki/Trust_region) optimization algorithms. The **BFGS** solver uses the [Broyden–Fletcher–Goldfarb–Shanno algorithm](https://en.wikipedia.org/wiki/Broyden%E2%80%93Fletcher%E2%80%93Goldfarb%E2%80%93Shanno_algorithm). |
| **DogLeg Gauss step** | This setting is only available for the solver **DogLeg**. It is the step type used in the DogLeg algorithm. |
| **Maximum iterations** | If the solver needs more iterations to find a convergence to a solution, it will stop and output that it failed. |
| **Sketch size multiplier** | If checked, the maximum iterations will be multiplied by the number of parameters. The idea is that bigger sketches would need more iterations to converge. |
| **Convergence** | The threshold for the squared error. This error is used to determine whether a solution converges or not. |
| **Eps/Eps1/Tau** | These settings are only available for the solver **LevenbergMarquardt**. You should only change something here if you fully understand how the LevenbergMarquardt solver works. |
| **Tolg/Tolx/Tolf** | These settings are only available for the solver **DogLeg**. You should only change something here if you fully understand how the DogLeg solver works. |
| **QR Algorithm** | During diagnosing the rank of the matrix is calculated which enables to further analyze the constraint system to determine if there are redundant/conflicting constraints. The rank revealing decomposition used in FreeCAD is QR. There are two algorithms: **Eigen Dense QR** is a dense matrix QR with full pivoting, which is the legacy proven algorithm that works very well but it is rather slow as the system grows. The **Eigen Sparse QR** algorithm is an optimization for sparse matrices (having lots of zeros), which is usually much faster, since FreeCAD's systems do have a lot of zeros. |
| **Pivot threshold** | When doing a QR, values under the pivot threshold are treated as zero. |
| **Redundant Solver** | The solver that is used during diagnosing to determine whether a group is redundant or conflicting. |
| **Red. Max Iterations** | The same as **Maximum iterations**, but for the redundant solving. |
| **Red. Sketch size multiplier** | The same as **Sketch size multiplier**, but for the redundant solving. |
| **Red. Convergence** | The same as **Convergence**, but for the redundant solving. |
| **R.Eps/R.Eps1/R.Tau** | The same as **Eps/Eps1/Tau**, but for the redundant solving. |
| **R.Tolg/R.Tolx/R.Tolf** | The same as **Tolg/Tolx/Tolf**, but for the redundant solving. |
| **Console Debug mode** | Setting to specify the verbosity of the console output. |
| Solve | This button explicitly starts the solver. |
| Restore Defaults | This button restores the default solver settings. |

## 拘束

このセクションには、スケッチの中の拘束の一覧が表示されます。ある拘束のチェックを外すと、その拘束はスケッチ上非表示になります。拘束は、スケッチ上と同じように、リスト上でも選択することができます。

拘束は、![](/images/Sketcher_SwitchVirtualSpace.svg) [スケッチャー・仮想スペース切り替え](/Sketcher_SwitchVirtualSpace/ja "Sketcher SwitchVirtualSpace/ja")でも表示・非表示を切り替えられます。

利用可能なオプションは以下の通りです。

| オプション | 説明 |
| --- | --- |
| フィルター | フィルターチェックボックスにチェックを入れると、プルダウンリストからどの種類の拘束を表示するのかを選択します。  * **全て**：全ての拘束。 * **ジオメトリック**：（水平・垂直と言った）幾何学的拘束。 * **データム**: [駆動](/Sketcher_ToggleDrivingConstraint/ja "Sketcher ToggleDrivingConstraint/ja")寸法拘束。現在正しく動作しません。参照寸法拘束を含む全て寸法拘束を表示します。 * **名前**：名前付き拘束。現在未実装です。 * **参照**：[参照](/Sketcher_ToggleDrivingConstraint "Sketcher ToggleDrivingConstraint")寸法制約。現在未実装です。 * **選択されている拘束**：現在選択されている拘束だけに絞ります。 * **関連する拘束**：現在選択されている要素に関わる拘束だけに絞ります。 |
|  | このボタンで、リストされた拘束の表示・非表示を切り替えます。 |
|  | メニューを開きます。  * **自動拘束**：チェックを入れると、新しい要素を追加したときに幾何拘束を自動で適用します。 * **冗長な要素を自動削除**：チェックを入れると、新しく設定した拘束が冗長な場合、それを自動的に削除します。 * **フィルターされた拘束のみ表示**：チェックを入れると、リストした拘束のみをスケッチに表示します。 * **拡張情報（ウィジェット内）**：チェックを入れると、下記の形式で拡張情報を表示します。   `[(GeoID1,PosID1),(GeoID2,PosID2),(GeoID3,PosID3)]`  GeoIDは内部ジオメトリ（要素）の0から始まるインデックス番号です。GeoID -1はx軸のことです。GeoID -2はy軸のことです。GeoID -3以下は外部ジオメトリに使います。  PosIDは以下のいずれかの値を取ります。  0 = 辺、1 = 始点、2 = 終点、3 = 中心点。  例えば、原点とスケッチ内の2番めの要素（インデックスは1）との間の距離制約の拡張情報は、次のようになります。  `[(-1,1),(1,3)]`   * **内部配置を非表示（ウィジェット内）**：チェックを入れると、内部アライメントに関わる拘束を非表示にします。 [内部ジオメトリの表示・非表示](/Sketcher_RestoreInternalAlignmentGeometry/ja "Sketcher RestoreInternalAlignmentGeometry/ja")ツールでもこれらの拘束を非表示にできますが、スケッチの内部アライメント自身も非表示にしてしまいます。 |
| **コンテキストメニュー** | リストの背景、あるいはリスト中の選択した拘束を右クリックすると、コンテキストメニューを開けます。以下のオプションがあります。  * **値を変更**：寸法制約の値を変更します。複数の拘束に対しては動作しません。リスト中の拘束あるいは[3Dビュー](/3D_view/ja "3D view/ja")上の拘束をダブルクリックすることでも変更できます。 * **参照への切り替え**：詳細は[スケッチャー・駆動/参照拘束の切り替え](/Sketcher_ToggleDrivingConstraint/ja "Sketcher ToggleDrivingConstraint/ja")を参照してください。 * **非アクティブ化**または**アクティブ化**：詳細は[スケッチャー・アクティブ/非アクティブの切り替え](/Sketcher_ToggleActiveConstraint/ja "Sketcher ToggleActiveConstraint/ja")を参照してください。 * **拘束を表示**：拘束にチェックを入れるのと同じですが、複数の拘束を同時に表示に切り替えられます。 * **拘束を非表示**：拘束のチェックを外すのと同じですが、複数の拘束を同時に非表示に切り替えられます。 * **要素を選択**：詳細は[スケッチャー・関連するジオメトリーを選択](/Sketcher_SelectElementsAssociatedWithConstraints/ja "Sketcher SelectElementsAssociatedWithConstraints/ja")を参照してください。 * **名前の変更**：拘束の名前を変更します。 * **スケッチを中央に配置**：選択した拘束を3Dビュー上で中心に表示します。 * **削除**：選択した拘束を削除します。Delキーでも削除できます。 * **拘束名を交換**：選択した拘束の名前を入れ替えます。2つの拘束が選択されており、そのいずれもにユーザーが名前を付与している場合にのみ動作します。 |

## 要素

このセクションには、スケッチ中の要素の一覧が表示されます。ある要素のチェックを外すと、その要素はスケッチ上非表示になります。要素は、スケッチ上と同じように、リスト上でも選択することができます。

利用可能なオプションは以下の通りです。

| オプション | 説明 |
| --- | --- |
| フィルター | フィルターチェックボックスにチェックを入れると、プルダウンリストからどの種類の要素を表示するのかを選択します。  * **標準**：通常のジオメトリ（以下の3つのカテゴリーに該当しないジオメトリー）。 * **構築**: [補助線（構築ジオメトリ）](/Sketcher_ToggleConstruction/ja "Sketcher ToggleConstruction/ja")。 * **内部**: [内部ジオメトリー](/Sketcher_RestoreInternalAlignmentGeometry/ja "Sketcher RestoreInternalAlignmentGeometry/ja")。 * **外部**: [外部ジオメトリー](/Sketcher_External/ja "Sketcher External/ja")。 * **全てのタイプ**：全てのジオメトリーのタイプ。以下で特定のタイプのみに絞ることもできます。   + **点**   + **直線**   + **円**   + **楕円**   + **円弧**   + **楕円弧**   + **双曲線弧**   + **放物線弧**   + **Bスプライン** |
|  | メニューを開きます。  * **拡張情報**：チェックを入れると、拡張情報を表示します。   内部ジオメトリーについては、リストの表示が  `<N>-<TYPE>`  から以下のように変わります。  `<TYPE>(Edge<N>#ID<GeoID>#<VLX>)[-Construction]`  <TYPE>：要素のタイプ。  <N>：要素作成順の1から始まるインデックス番号。  <GeoID>：詳細は[拘束](#Constraints)を参照してください。  <VLX>：要素のレイヤー。下記を参照してください。 |
|  | 各要素には、最大4つのボタンが並んでいます。このボタンで、要素の特定の部分だけを選択できます。表示されるのは、その要素に適用可能なものだけです。  * 1列目のボタン：要素の辺を選択します。 * 2列目のボタン：要素の始点を選択します。 * 3列目のボタン：要素の終点を選択します。 * 4列目のボタン：要素の中心点を選択します。   要素の表示文字列をクリックするのは、その要素で最初に利用可能なボタンを押すのと同じです。  *上記の例では、線分の辺と円弧の中心点を選択しています。*  *線分には中心点がないため、4つ目のボタンは表示されていません。* |
| **コンテキストメニュー** | リストの背景、あるいはリスト中の選択した要素を右クリックすると、コンテキストメニューを開けます。メニューには、幾何[拘束ツール](/Sketcher_Workbench/ja#Sketcher_constraints "Sketcher Workbench/ja")、寸法拘束ツールに加えて、以下のオプションがあります。  * **構築ジオメトリーの切り替え**：詳細は[スケッチャー・構築ジオメトリー（補助線）の切り替え](/Sketcher_ToggleConstruction/ja "Sketcher ToggleConstruction/ja")を参照してください。 * **拘束を選択**：詳細は[スケッチャー・関連する拘束を選択](/Sketcher_SelectConstraints/ja "Sketcher SelectConstraints/ja")を参照してください。 * **原点を選択**：詳細は[スケッチャー・原点を選択](/Sketcher_SelectOrigin/ja "Sketcher SelectOrigin/ja")を参照してください。 * **水平軸を選択**：詳細は[スケッチャー・水平軸を選択](/Sketcher_SelectHorizontalAxis/ja "Sketcher SelectHorizontalAxis/ja")を参照してください。 * **垂直軸を選択**：詳細は[スケッチャー・垂直軸を選択](/Sketcher_SelectVerticalAxis/ja "Sketcher SelectVerticalAxis/ja")を参照してください。 * **レイヤー**：3つのレイヤーがあります。   + **レイヤー0**：拡張情報中`VL0`と表示されます。これがデフォルトのレイヤーです。このレイヤー上の要素は実線で表示されます。   + **レイヤー1**：拡張情報中`VL1`と表示されます。このレイヤー上の要素は点線で表示されます。   + **非表示**：拡張情報中`VL2`と表示されます。このレイヤー上の要素はスケッチに表示されません。   レイヤー0とレイヤー１の点が[3Dビュー](/3D_view/ja "3D view/ja")上で重なった場合、レイヤー0の要素がレイヤー1の要素より優先されて選択されます。   * **削除**：選択した要素を削除します。Delキーでも削除できます。 |

Retrieved from "<http://wiki.freecad.org/index.php?title=Sketcher_Dialog/ja&oldid=1543773>"