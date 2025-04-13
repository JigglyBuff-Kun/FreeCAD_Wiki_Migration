---
title: スケッチャーSketcher ConstrainEqual
---
|  |
| --- |
| Constraint EqualLength |
| メニューの場所 |
| Sketch → Sketcher constraints → Constrain equal |
| ワークベンチ |
| [スケッチャー](/Sketcher_Workbench/ja "Sketcher Workbench/ja"), [パートデザイン](/PartDesign_Workbench/ja "PartDesign Workbench/ja") |
| デフォルトのショートカット |
| *なし* |
| 導入バージョン |
| - |
| 参照 |
| [Constraint Radius](/index.php?title=Constraint_Radius/ja&action=edit&redlink=1 "Constraint Radius/ja (page does not exist)") |
|  |

## 概要

ConstrainEqualはライン、ポリライン、長方形に含まれる複数の線分が等しい長さになるように拘束を行います。円弧や円に対して適用した場合はその半径が等しくなるように拘束を行います。異なるタイプの幾何プリミティブ間（例えば線分と円弧）に適用することはできません。

## Usage

See also: [Drawing aids](/Sketcher_Workbench#Drawing_aids "Sketcher Workbench").

### [Continue mode](/Sketcher_Workbench#Continue_modes "Sketcher Workbench")

1. Make sure there is no selection.
2. There are several ways to invoke the tool:
   * Press the ![](/images/Sketcher_ConstrainEqual.svg) [Constrain equal](/Sketcher_ConstrainEqual "Sketcher ConstrainEqual") button.
   * Select the **Sketch → Sketcher constraints → ![](/images/Sketcher_ConstrainEqual.svg) Constrain equal** option from the menu.
   * [introduced in 1.0](/Release_notes_1.0 "Release notes 1.0"): Right-click in the [3D view](/3D_view "3D view") and select the **Constrain → ![](/images/Sketcher_ConstrainEqual.svg) Constrain equal** option from the context menu.
   * Use the keyboard shortcut: E.
3. The cursor changes to a cross with the tool icon.
4. Select two edges of the same type.
5. A constraint is added.
6. Optionally keep creating constraints.
7. To finish, right-click or press Esc, or start another geometry or constraint creation tool.

### Run-once mode

1. Select two or more edges of the same type.
2. Invoke the tool as explained above, or with the following additional option:
   * [introduced in 1.0](/Release_notes_1.0 "Release notes 1.0"): Right-click in the [3D view](/3D_view "3D view") and select the **![](/images/Sketcher_ConstrainEqual.svg) Constrain equal** option from the context menu.
3. Depending on the selection one or more constraints are added.

## Scripting

```
Sketch.addConstraint(Sketcher.Constraint('Equal', Edge1, Edge2))

```

The [Sketcher scripting](/Sketcher_scripting "Sketcher scripting") page explains the values which can be used for `Edge1` and `Edge2` and contains further examples on how to create constraints from Python scripts.

Retrieved from "<http://wiki.freecad.org/index.php?title=Sketcher_ConstrainEqual/ja&oldid=1540139>"