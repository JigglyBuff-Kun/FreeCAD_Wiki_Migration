---
title: Arch Add
---

:::caution
THIS COMMAND IS PART OF THE INTEGRATEDBIM WORKBENCHIN V1.0This page has been updated for that version.
:::

|                                                 |
| ----------------------------------------------- |
| Arch Add                                        |
| メニューの場所                                  |
| Arch -> Add                                     |
| ワークベンチ                                    |
| [建築](/Arch_Workbench/ja "Arch Workbench/ja")  |
| デフォルトのショートカット                      |
| _なし_                                          |
| 導入バージョン                                  |
| -                                               |
| 参照                                            |
| [Arch Remove](/Arch_Remove/ja "Arch Remove/ja") |
|                                                 |

## 説明

Add ツールは 2 種類の操作を提供します：

- [シェイプ](/Part_Workbench/ja "Part Workbench/ja")ベースのオブジェクトを[壁](/index.php?title=Arch_Wall/ja&action=edit&redlink=1 "Arch Wall/ja (page does not exist)")や[骨組み](/Arch_Structure/ja "Arch Structure/ja")といった Arch コンポーネントに追加します。これらのオブジェクトは Arch コンポーネントのパーツとなってその高さや厚みといった基本プロパティを保持するだけでなく、その形状を変更する機能を提供します。
- [壁](/index.php?title=Arch_Wall/ja&action=edit&redlink=1 "Arch Wall/ja (page does not exist)")、[骨組み](/Arch_Structure/ja "Arch Structure/ja")あるいは[床](/Arch_Floor/ja "Arch Floor/ja")などのセルベースのオブジェクトといった Arch コンポーネントを追加します。
- [axis systems](/Arch_Axis "Arch Axis") に[structural objects](/Arch_Structure "Arch Structure")を追加する
- [section planes](/Arch_SectionPlane "Arch SectionPlane")にオブジェクトを追加する

The counterpart of this tool is the ![](/images/Arch_Remove.svg) [Arch Remove](/Arch_Remove "Arch Remove") tool.

![](/images/Arch_Add_example.jpg)

上の図では壁に直方体が追加されています。

## 使用方法

- 追加するオブジェクト（複数可）を選択してから"ホスト"となるオブジェクトを選択してください（最後に選択したものがホストオブジェクトになります）

* ![](/images/Arch_Add.png) **Add**ボタンを押してください

## Scripting

## スクリプト処理

Add ツールは、[マクロ](/Macros "Macros")や Python コンソールから次の関数を使って使うことができます：

: ```
addComponents(objectsList, host)

    ```

- Adds the given object or the objects from the given list as components to the given host Object. Use this for example to add windows to a wall, or to add walls to a floor.
- Returns nothing.

例題:

```
import FreeCAD, Arch, Draft, Part

p1 = FreeCAD.Vector(0, 0, 0)
p2 = FreeCAD.Vector(2000, 2000, 0)

Line = Draft.makeWire([p1, p2])
Wall = Arch.makeWall(Line, width=150, height=2000)

p3 = FreeCAD.Vector(0, 2000, 0)
p4 = FreeCAD.Vector(3000, 0, 0)

Line2 = Draft.makeWire([p3, p4])
Wall2 = Arch.makeWall(Line2, width=150, height=2000)
FreeCAD.ActiveDocument.recompute()

Arch.addComponents(Wall2, Wall)
FreeCAD.ActiveDocument.recompute()

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Arch_Add/ja&oldid=1432720>"
