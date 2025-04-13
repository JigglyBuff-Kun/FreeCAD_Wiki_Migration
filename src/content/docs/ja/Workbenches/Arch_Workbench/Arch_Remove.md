---
title: Removeツール
---

:::caution
THIS COMMAND IS PART OF THE INTEGRATEDBIM WORKBENCHIN V1.0This page has been updated for that version.
:::

|                                                |
| ---------------------------------------------- |
| Remove ツール                                  |
| メニューの場所                                 |
| Arch -> Remove                                 |
| ワークベンチ                                   |
| [建築](/Arch_Workbench/ja "Arch Workbench/ja") |
| デフォルトのショートカット                     |
| _なし_                                         |
| 導入バージョン                                 |
| -                                              |
| 参照                                           |
| [Arch Add](/Arch_Add/ja "Arch Add/ja")         |
|                                                |

## 説明

Remove ツールは 2 種類の操作を提供します：

- Arch オブジェクトからサブコンポーネントを取り除きます。例えば[Arch Add](/index.php?title=Arch_Add/jp&action=edit&redlink=1 "Arch Add/jp (page does not exist)")の例のような壁に追加されていた直方体を壁から取り除きます。
- [シェイプ](/index.php?title=Part_Module/jp&action=edit&redlink=1 "Part Module/jp (page does not exist)")ベースのオブジェクトを[壁](/index.php?title=Arch_Wall/jp&action=edit&redlink=1 "Arch Wall/jp (page does not exist)")や[骨組み](/index.php?title=Arch_Structure/jp&action=edit&redlink=1 "Arch Structure/jp (page does not exist)")といった Arch コンポーネントから減算します。

The counterpart of this tool is the ![](/images/Arch_Add.svg) [Arch Add](/Arch_Add "Arch Add") tool.

![](/images/Arch_Remove_example.jpg)

上の図では壁から直方体を減算しています

## 使用方法

- Arch オブジェクト内のサブコンポーネントを選択してください。**あるいは**
- 減算されるオブジェクト（複数可）を選択してからそれらを減算する Arch コンポーネントを選択してください（Arch コンポーネントは最後に選択しなければなりません）

* ![](/images/Arch_Remove.png) **Remove**ボタンを押してください

Or

1. Select objects to be subtracted, the last object selected must the Arch object from which the other objects will be subtracted.
2. Press the ![](/images/Arch_Remove.svg) [Remove component](/Arch_Remove "Arch Remove") button, or **Modify → ![](/images/Arch_Remove.svg) Remove component** from the top menu.

## Scripting

## スクリプト処理

The Remove tool can be used in [macros](/Macros "Macros") and from the [Python](/Python "Python") console by using the following function:

```
removeComponents(objectsList, host=None)

```

- Removes the given objects in `objectsList` from their parents.
- If a `host` object is specified, this function will try adding the objects in `objectsList` as holes to the `host`.

Example:

```
import FreeCAD, Draft, Arch

Line = Draft.makeWire([FreeCAD.Vector(0, 0, 0),FreeCAD.Vector(2000, 2000, 0)])
Wall = Arch.makeWall(Line, width=150, height=3000)

Box = FreeCAD.ActiveDocument.addObject("Part::Box", "Box")
Box.Length = 900
Box.Width = 450
Box.Height = 2000
FreeCAD.ActiveDocument.recompute()

Draft.rotate(Box, 45)
Draft.move(Box, FreeCAD.Vector(1000, 700, 0))

Arch.removeComponents(Box, Wall)
FreeCAD.ActiveDocument.recompute()

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Arch_Remove/ja&oldid=1437756>"
