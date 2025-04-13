---
title: Sketcher ConstrainHorizontal スケッチャー
---
|  |
| --- |
| Sketcher ConstrainHorizontal |
| メニューの場所 |
| Sketch → Sketcher constraints → Constrain horizontally |
| ワークベンチ |
| [スケッチャー](/Sketcher_Workbench/ja "Sketcher Workbench/ja"), [パートデザイン](/PartDesign_Workbench/ja "PartDesign Workbench/ja") |
| デフォルトのショートカット |
| *なし* |
| 導入バージョン |
| - |
| 参照 |
| [Constraint Vertical](/index.php?title=Constraint_Vertical/ja&action=edit&redlink=1 "Constraint Vertical/ja (page does not exist)") |
|  |

## 概要

HorizontalConstraintは選択された線または画像の辺がスケッチの水平軸と平行なるように拘束を行います。

[introduced in 1.0](/Release_notes_1.0 "Release notes 1.0"): In most cases it is advisable to use the combined [Sketcher ConstrainHorVer](/Sketcher_ConstrainHorVer "Sketcher ConstrainHorVer") tool instead.

## 使用方法

See also: [Drawing aids](/Sketcher_Workbench#Drawing_aids "Sketcher Workbench").

### [Continue mode](/Sketcher_Workbench#Continue_modes "Sketcher Workbench")

![](/images/HorizontalConstraint1.png)

スケッチ上の線をクリックして選択します。

![](/images/HorizontalConstraint2.png)

線が暗緑色に変わります。

![](/images/HorizontalConstraint3.png)

Sketcher ConstraintsツールバーのHorizontalConstraintアイコン![](/images/Constraint_Horizontal.png)をクリックするか、スケッチャーワークベンチのSketcherメニューアイテム（あるいはパートデザインワークベンチのPart Designメニューアイテム）にあるSketcher constraintsサブメニューのConstrain horizontallyメニューアイテムを選択してHorizontalConstraintを適用します。すると選択された線がスケッチの水平軸に平行になるように拘束されます。

![](/images/HorizontalConstraint4.png)

複数の線を選択することもできます。

![](/images/HorizontalConstraint5.png)

上で示したように線を選択して拘束を適用すると、それらがスケッチの水平軸に平行になるように拘束されます。

### Run-once mode

1. Do one of the following:
   * Select two or more points.
   * Select one or more lines. Points can be included in the selection, but will be ignored.
2. Invoke the tool as explained above, or with the following additional option:
   * [introduced in 1.0](/Release_notes_1.0 "Release notes 1.0"): Right-click in the [3D view](/3D_view "3D view") and select the **![](/images/Sketcher_ConstrainHorizontal.svg) Constrain horizontal** option from the context menu.
3. Depending on the selection one or more constraints are added.

## Scripting

```
Sketch.addConstraint(Sketcher.Constraint('Horizontal', Line))

```

The [Sketcher scripting](/Sketcher_scripting "Sketcher scripting") page explains the values which can be used for `Line` and contains further examples on how to create constraints from Python scripts.

Retrieved from "<http://wiki.freecad.org/index.php?title=Sketcher_ConstrainHorizontal/ja&oldid=1540141>"