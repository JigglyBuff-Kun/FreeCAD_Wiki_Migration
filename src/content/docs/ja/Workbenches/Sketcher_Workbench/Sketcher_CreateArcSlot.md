---
title: スケッチャー・円弧状の長円形を作成
---

|                                                                                |
| ------------------------------------------------------------------------------ |
| スケッチャー・円弧状の長円形を作成                                             |
| メニューの場所                                                                 |
| スケッチ → スケッチャージオメトリ → 円弧状の長円形を作成                       |
| ワークベンチ                                                                   |
| [スケッチャー](/Sketcher_Workbench/ja "Sketcher Workbench/ja")                 |
| デフォルトのショートカット                                                     |
| G S 2                                                                          |
| 導入バージョン                                                                 |
| 1.0                                                                            |
| 参照                                                                           |
| [スケッチャー・長円形を作成](/Sketcher_CreateSlot/ja "Sketcher CreateSlot/ja") |
|                                                                                |

## 概要

The ![](/images/Sketcher_CreateArcSlot.svg) [Sketcher CreateArcSlot](/Sketcher_CreateArcSlot "Sketcher CreateArcSlot") tool creates an arc slot, a closed polyline consisting of two parallel concentric arcs closed by two semicircles or two radial straight lines.

![](/images/Sketcher_CreateArcSlot_Example.png)

Arc slot with arc ends (left) and flat ends (right)

## 使い方

See also: [Drawing aids](/Sketcher_Workbench#Drawing_aids "Sketcher Workbench").

Pos-OVP = Positional [On-View-Parameters](/Sketcher_Preferences#General "Sketcher Preferences").  
Dim-OVP = Dimensional On-View-Parameters.

1. There are several ways to invoke the tool:
   - Press the ![](/images/Sketcher_CreateArcSlot.svg) [Create arc slot](/Sketcher_CreateArcSlot "Sketcher CreateArcSlot") button.
   - Select the **Sketcher → Sketcher geometries → ![](/images/Sketcher_CreateArcSlot.svg) Create arc slot** option from the menu.
   - The keyboard shortcut: G then S, then 2.
2. The cursor changes to a cross with the tool icon.
3. The **Arc Slot parameters** section is added at the top of the [Sketcher Dialog](/Sketcher_Dialog "Sketcher Dialog").
4. Optionally press the M key or select from the dropdown list in the parameters section to change the tool mode:
   - ![](/images/Sketcher_CreateArcSlot.svg) **Arc ends**:
     1. Pick the center of the arc slot. Or with Pos-OVP: enter its X and/or Y coordinate.
     2. Pick the center of the first semicircle, this also defines the radius of the (virtual) centerline of the slot. Or with Dim-OVP: enter the radius and/or start angle of the slot. The angle is relative to the X axis of the sketch. No constraint is created for this angle.
     3. Pick the center of the second semicircle. Or with Dim-OVP: enter the aperture angle of the centerline arc.
     4. Pick a point to define the radius of the semicircles. Or with Dim-OVP: enter this radius.
   - ![](/images/Sketcher_CreateRectangleSlot.svg) **Flat ends**:
     1. Pick the center of the arc slot. Or with Pos-OVP: enter its X and/or Y coordinate.
     2. Pick the start point of the first arc, this also defines its radius. Or with Dim-OVP: enter the radius and/or start angle of the first arc. The angle is relative to the X axis of the sketch. No constraint is created for this angle.
     3. Pick the end point of the first arc. Or with Dim-OVP: enter the aperture angle of the arc.
     4. Pick a point to define the width of the slot. Or with Dim-OVP: enter this width.
5. The slot is created and applicable Pos-OVP and Dim-OVP based constraints are added.
6. If the tool runs in [continue mode](/Sketcher_Workbench#Continue_modes "Sketcher Workbench"):
   1. Optionally keep creating slots.
   2. To finish, right-click or press Esc, or start another geometry or constraint creation tool.

## 補足

- The points picked to define either the radius of the semicircles or the offset of inner and outer arcs don't have to touch the geometry, the distance from the cursor to the slot center actually controls the value.
- In **Arc ends** mode the first radius applies to a virtual center arc, while it applies to one of the outline arcs in **Flat ends** mode.
- If the entered width value in **Flat ends** mode is positive the constrained arc becomes the inner arc, for a negative value it will be the outer arc.

Retrieved from "<http://wiki.freecad.org/index.php?title=Sketcher_CreateArcSlot/ja&oldid=1547135>"
