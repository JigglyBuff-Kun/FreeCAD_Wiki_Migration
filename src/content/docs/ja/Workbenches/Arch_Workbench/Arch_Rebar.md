---
title: Arch Rebar/コンクリート補強バー
---

:::caution
THIS COMMAND IS PART OF THE INTEGRATEDBIM WORKBENCHIN V1.0This page has been updated for that version.
:::

|                                                                                                                       |
| --------------------------------------------------------------------------------------------------------------------- |
| Arch Rebar                                                                                                            |
| メニューの場所                                                                                                        |
| Arch → Rebar                                                                                                          |
| ワークベンチ                                                                                                          |
| [Arch](/Arch_Module "Arch Module")                                                                                    |
| デフォルトのショートカット                                                                                            |
| R B                                                                                                                   |
| 導入バージョン                                                                                                        |
| -                                                                                                                     |
| 参照                                                                                                                  |
| [Arch Structure](/Arch_Structure "Arch Structure"), [Reinforcement Addon](/Reinforcement_Addon "Reinforcement Addon") |
|                                                                                                                       |

## 説明

Rebar ツールを使用すると、[Arch Structure](/Arch_Structure "Arch Structure")オブジェクトの中に [reinforcing bars](http://en.wikipedia.org/wiki/Rebar) を配置することができます。 Rebar オブジェクトは、[sketches](/Sketcher_Workbench "Sketcher Workbench") /[スケッチ](/Sketcher_Workbench "Sketcher Workbench")や[draft objects](/Draft_Workbench "Draft Workbench")/[ドラフトオブジェクト](/Draft_Workbench "Draft Workbench")などの 2D プロファイルに基づいており、構造オブジェクトの面に描画する必要があります。バーの数や直径、または構造要素の両端のオフセット距離など、リバーの構成を調整することができます。

Rebar objects are based on 2D profiles such as [Draft objects](/Draft_Workbench "Draft Workbench") and [Sketches](/Sketcher_Workbench "Sketcher Workbench"), that must be drawn on a face of the structural object. After creation you can adjust the properties of the rebar, including the number and diameter of the bars, and the offset distance between them and the faces of the structural element.

![](/images/Arch_Rebar_example.jpg)

上の図は、2 つの棒グラフを定義する 2 つのスケッチが描かれている構造オブジェクトを示しています。これらの 2 つのスケッチは、鉄筋オブジェクトに変換されます。

## 使用方法

1. Switch to the ![](/images/Workbench_BIM.svg) [BIM Workbench](/BIM_Workbench "BIM Workbench")
2. Create an ![](/images/Arch_Structure.svg) [Arch Structure](/Arch_Structure "Arch Structure") element.
3. Switch to the ![](/images/Workbench_Sketcher.svg) [Sketcher Workbench](/Sketcher_Workbench "Sketcher Workbench").
4. Select one face of the structural element.
5. Press the ![](/images/Sketcher_NewSketch.svg) [New Sketch](/Sketcher_NewSketch "Sketcher NewSketch") button to start a new sketch on the selected face.
6. Draw the diagram of your bar.
7. Press the ![](/images/Sketcher_LeaveSketch.svg) [Leave Sketch](/Sketcher_LeaveSketch "Sketcher LeaveSketch") button to finish.
8. Switch back to the ![](/images/Workbench_BIM.svg) [BIM Workbench](/BIM_Workbench "BIM Workbench").
9. Select the sketch you just drew.
10. Press the ![](/images/Arch_Rebar.svg) [Rebar](/Arch_Rebar "Arch Rebar") button, or press R then B keys.
11. Adjust the desired properties (your rebar might not appear immediately, if some of the properties create an impossible situation, such as the bar diameter being 0, or the offset distances being bigger than the length of the structural element).

Although normally a rebar is used inside an Arch Structure, since FreeCAD 0.19 the rebar can be created outside of any host object. To host a rebar inside an object, you just need to set its データ**Host**.

## オプション

- The rounding value is expressed in times the diameter. If your bar has a diameter of 5mm, a rounding value of 3 will create rounding at angles with a radius of 15mm.
- Default values for new rebars can be set in the Arch preferences settings.
- If a direction vector is not specified, the direction and distance along which the bars will spread is calculated automatically from the host structural object, by taking the normal direction of the base sketch, and taking its intersection with the structural object. If you specify a direction vector, the length of that vector will also be taken into account.
- The spacing value is calculated from the current amount of bars, and represents the distance between the axes of each bar. You must therefore subtract the bar diameter to obtain the size of the free space between bars.

## プロパティ

An Arch Rebar object shares the common properties and behaviors of all [Arch Components](/Arch_Component "Arch Component").

- データ**Amount**: The amount of bars.
- データ**Diameter**: The diameter of the bars.
- データ**Direction**: The direction (and length) along which the bars must spread. If the value is (0,0,0), the direction is calculated automatically from the host structural object.
- データ**Offset Start**: The offset distance between the border of the structural object and the first bar.
- データ**Offset End**: The offset distance between the border of the structural object and the last bar.
- データ**Rounding**: A rounding value to be applied to the corners of the bars, expressed in times the diameter.
- データ**Spacing**: The distance between the axes of each bar.

## スクリプト処理

_See also:_ [Arch API](/Arch_API "Arch API") and [FreeCAD Scripting Basics](/FreeCAD_Scripting_Basics "FreeCAD Scripting Basics").

Rebar ツールは、[マクロ](/Macros "Macros")や Python コンソールから次の関数を使って使うことができます：

```
Rebar = makeRebar(baseobj=None, sketch=None, diameter=None, amount=1, offset=None, name="Rebar")

```

- Creates a `Rebar` object from the given `baseobj`, which is an [Arch Structure](/Arch_Structure "Arch Structure"), and a `sketch` as profile.
  - `diameter`, `amount`, and `offset` are used to define the characteristics of the bars.
  - If no `diameter`, `amount`, or `offset` values are given, the default values from the [Arch Preferences](/Arch_Preferences "Arch Preferences") are used.

例題:

```
import FreeCAD, Arch, Part

Structure = Arch.makeStructure(None, length=1000, width=1000, height=3000)
Structure.ViewObject.Transparency = 80
FreeCAD.ActiveDocument.recompute()

p1 = FreeCAD.Vector(-400, 400, 0)
p2 = FreeCAD.Vector(400, 400, 0)
Sketch = FreeCAD.ActiveDocument.addObject('Sketcher::SketchObject', 'Sketch')
Sketch.MapMode = "FlatFace"
Sketch.Support = [(Structure, "Face6")]
Sketch.addGeometry(Part.LineSegment(p1, p2))
FreeCAD.ActiveDocument.recompute()

Rebar = Arch.makeRebar(Structure, Sketch, diameter=80, amount=7, offset=50)
Rebar.OffsetStart = 100
Rebar.OffsetEnd = 100
FreeCAD.ActiveDocument.recompute()

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Arch_Rebar/ja&oldid=1539722>"
