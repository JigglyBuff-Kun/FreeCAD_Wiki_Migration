---
title: Arch PipeConnector/パイプコネクタ
---

:::caution
THIS COMMAND IS PART OF THE INTEGRATEDBIM WORKBENCHIN V1.0This page has been updated for that version.
:::

|                                                                                                                                                                       |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Arch PipeConnector                                                                                                                                                    |
| メニューの場所                                                                                                                                                        |
| Arch → Pipe Tools → Pipe Connector                                                                                                                                    |
| ワークベンチ                                                                                                                                                          |
| [Arch](/Arch_Workbench/ja "Arch Workbench/ja")                                                                                                                        |
| デフォルトのショートカット                                                                                                                                            |
| P C                                                                                                                                                                   |
| 導入バージョン                                                                                                                                                        |
| 0.17                                                                                                                                                                  |
| 参照                                                                                                                                                                  |
| [Arch Pipe/ja](/Arch_Pipe/ja "Arch Pipe/ja"), [Arch Equipment/ja](/index.php?title=Arch_Equipment/ja&action=edit&redlink=1 "Arch Equipment/ja (page does not exist)") |
|                                                                                                                                                                       |

## 説明

[introduced in 0.17](/Release_notes_0.17 "Release notes 0.17")
このツールを使用すると、 [Arch Pipes](/Arch_Pipe "Arch Pipe")で選択された 2 つまたは 3 つのパイプの間にコーナー接続または "T"接続を作成できます。

## 使用方法

＃2 本または 3 本のパイプ[アーチパイプ](/Arch_Pipe "Arch Pipe")を選択します。 3 本のパイプを選択する場合は、2 本を正確に位置合わせする必要があります。
＃![](/images/Arch_PipeConnector.png) [Arch PipeConnector](/Arch_PipeConnector "Arch PipeConnector")ボタンを押すか、 P キーを押してから C キーを押します。

## プロパティ

- データ**Radius**: このコネクタの曲率半径

## 典型的なワークフロー

[Arch Pipe#Typical_workflow](/Arch_Pipe#Typical_workflow "Arch Pipe") を参照してください。

## Scripting

## スクリプト処理

Pipe Connector ツールは、[マクロ](/Macros "Macros")や Python コンソールから次の関数を使って使うことができます：

```
Connector = makePipeConnector(pipes, radius=0, name="Connector")

```

- Creates a `Connector` object from the given `pipes`, which is a list of [Arch Pipes](/Arch_Pipe "Arch Pipe"), and optionally a `radius` of curvature.
  - The base objects ([Draft Wires](/Draft_Wire "Draft Wire")) of the [Arch Pipes](/Arch_Pipe "Arch Pipe") should share an endpoint so they create a proper, smooth connector.

Example:

```
import FreeCAD, Draft, Arch

p1 = FreeCAD.Vector(-1000, 0, 0)
p2 = FreeCAD.Vector(-2000, 0, 0)
p3 = FreeCAD.Vector(-2000, 0, 0)
p4 = FreeCAD.Vector(-2000, -1000, 0)
p5 = FreeCAD.Vector(-2000, -1000, 0)
p6 = FreeCAD.Vector(-4000, -1000, 0)
Line1 = Draft.makeWire([p1, p2])
Line2 = Draft.makeWire([p3, p4])
Line3 = Draft.makeWire([p5, p6])

Pipe1 = Arch.makePipe(Line1, 150)
Pipe2 = Arch.makePipe(Line2, 150)
Pipe3 = Arch.makePipe(Line3, 150)
FreeCAD.ActiveDocument.recompute()

Conn = Arch.makePipeConnector([Pipe1, Pipe2])
Conn2 = Arch.makePipeConnector([Pipe2, Pipe3])
FreeCAD.ActiveDocument.recompute()

Line4 = Draft.move(Line1, FreeCAD.Vector(-500, 1000, 0), copy=True)
Line5 = Draft.move(Line2, FreeCAD.Vector(-500, 1000, 0), copy=True)
Pipe4 = Arch.makePipe(Line4, 100)
Pipe5 = Arch.makePipe(Line5, 100)
FreeCAD.ActiveDocument.recompute()

Conn3 = Arch.makePipeConnector([Pipe4, Pipe5], radius=400)
FreeCAD.ActiveDocument.recompute()

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Arch_PipeConnector/ja&oldid=1437707>"
