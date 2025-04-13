---
title: Arch Floor/ja
---
:::caution
THIS COMMAND IS PART OF THE INTEGRATEDBIM WORKBENCHIN V1.0This page has been updated for that version.
:::

|  |
| --- |
| Arch Floor |
| メニューの場所 |
| Arch → Floor |
| ワークベンチ |
| [Arch](/Arch_Workbench/ja "Arch Workbench/ja") |
| デフォルトのショートカット |
| F L |
| 導入バージョン |
| - |
| 参照 |
| [Arch Building](/Arch_Building "Arch Building"), [Arch BuildingPart](/Arch_BuildingPart "Arch BuildingPart"), [Arch Site](/Arch_Site "Arch Site") |
|  |

## 説明

Arch Floorは床を作成するのに特に便利な追加プロパティを持った特殊なタイプのです。特徴的なのがheightプロパティを持っていることで、その子オブジェクト（[壁](/Arch_Wall "Arch Wall")や[骨組み](/Arch_Structure "Arch Structure")）ではそれを使ってその高さを自動で設定することができます。

As of 0.18 and above the Arch Floor is derived entirely from the [Arch BuildingPart](/Arch_BuildingPart "Arch BuildingPart") object, which is a general container to organize a building model not limited to floors or storeys. Older Floor objects can be converted to the new type by right clicking on them and choosing `Convert to BuildingPart`.

## 使用方法

＃オプションで、新しいフロアに含める1つ以上のオブジェクトを選択します
＃ ![](/images/Arch_Floor.svg) **Arch Floor**ボタンを押すか、 F、その後 Lキーを押します

## オプション

* After creating a floor, you can add more objects to it by drag and dropping them in the Tree View or by using the ![](/images/Arch_Add.svg) [Arch Add](/Arch_Add "Arch Add") tool.
* You can remove objects from a floor by drag and dropping them out of it the Tree View or by using the ![](/images/Arch_Remove.svg) [Arch Remove](/Arch_Remove "Arch Remove") tool.

## プロパティ

An Arch Floor object shares all properties from an [Arch BuildingPart](/Arch_BuildingPart "Arch BuildingPart"), with the データ**Ifc Type** set to `"Building Storey"`.

## Scripting

## スクリプト処理

Floorツールは、[マクロ](/Macros "Macros")やPythonコンソールから次の関数を使って使うことができます：

```
Floor = makeFloor(objectslist=None, baseobj=None, name="Floor")

```

* Creates a `Floor` object from `objectslist`, which is a list of objects.

例題:

```
import FreeCAD, Draft, Arch

p1 = FreeCAD.Vector(0, 0, 0)
p2 = FreeCAD.Vector(2000, 0, 0)
baseline = Draft.makeLine(p1, p2)
baseline2 = Draft.makeLine(p1, -1*p2)

Wall1 = Arch.makeWall(baseline, length=None, width=150, height=2000)
Wall2 = Arch.makeWall(baseline2, length=None, width=150, height=1800)
FreeCAD.ActiveDocument.recompute()

Floor = Arch.makeFloor([Wall1, Wall2])

Building = Arch.makeBuilding([Floor])
Site = Arch.makeSite(Building)
FreeCAD.ActiveDocument.recompute()

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Arch_Floor/ja&oldid=1537465>"