---
title: Taslak Özel
---
|  |
| --- |
| Taslak Özel |
| Menü konumu |
| Taslak → [Yakalama](/Draft_Snap/tr "Draft Snap/tr") → Özel |
| Tezgahlar |
| [Taslak](/Draft_Workbench/tr "Draft Workbench/tr"), [Mimari](/Arch_Workbench/tr "Arch Workbench/tr") |
| Varsayılan kısayol |
| *Hiçbiri* |
| Versiyonda tanıtıldı |
| - |
| Ayrıca bkz |
| *Hiçbiri* |
|  |

## Description

### Açıklama

Bu anlık konum etkinleştirildiğinde, nesne tarafından tanımlanan özel anlık konumlar kullanılabilir. Bunlar şunları içerir:

![](/images/Draft_Snap_Special_example.png)

Snapping the second point of a line to a special point of an Arch Wall, which is a vertex of its Base object

## Usage

For general information about snapping see [Draft Snap](/Draft_Snap "Draft Snap").

1. Make sure snapping is enabled. See ![](/images/Draft_Snap_Lock.svg) [Draft Snap Lock](/Draft_Snap_Lock "Draft Snap Lock").
2. If **Draft Snap Special** is not active do one of the following:
   * Press the ![](/images/Draft_Snap_Special.svg) [Snap special](/Draft_Snap_Special "Draft Snap Special") button in the Draft snap toolbar.
   * [Draft](/Draft_Workbench "Draft Workbench"): Hold down the ![](/images/Draft_Snap_Lock.svg)![](/images/Toolbar_flyout_arrow.svg) button in the [Draft snap widget](/Draft_snap_widget "Draft snap widget") and in the menu that opens select the **![](/images/Draft_Snap_Special.svg) Snap special** option.
   * [BIM](/BIM_Workbench "BIM Workbench"): Select the **Snapping → ![](/images/Draft_Snap_Special.svg) Snap special** option from the menu, or from the [3D view](/3D_view "3D view") context menu.
3. Choose a Draft or BIM command to create your geometry.
4. Note that you can also change snap options while a command is active.
5. Move the cursor over a supported object.
6. The object is highlighted.
7. If a special point is found the point is marked and the ![](/images/Draft_Snap_Special.svg) icon is displayed near the cursor.
8. If the object has multiple special points: optionally move the cursor closer to another special point.
9. Click to confirm the point.

## Supported special points

* The vertices of the Veri**Base** object of ![](/images/Arch_Wall.svg) [Arch Walls](/Arch_Wall "Arch Wall").
* The Veri**Placement** point of ![](/images/Arch_Structure.svg) [Arch Structures](/Arch_Structure "Arch Structure").
* The Veri**Snap Points** of ![](/images/Arch_Equipment.svg) [Arch Equipment](/Arch_Equipment "Arch Equipment").

## Preferences

See [Draft Snap](/Draft_Snap#Preferences "Draft Snap").

Retrieved from "<http://wiki.freecad.org/index.php?title=Draft_Snap_Special/tr&oldid=1473433>"