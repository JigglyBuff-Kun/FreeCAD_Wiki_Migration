---
title: スケッチャー・仮想スペース切り替え
---
|  |
| --- |
| Sketcher SwitchVirtualSpace |
| Menu location |
| Sketch → Sketcher visual → Switch virtual space |
| Workbenches |
| [Sketcher](/Sketcher_Workbench "Sketcher Workbench") |
| Default shortcut |
| Z Z |
| Introduced in version |
| 0.17 |
| See also |
| *None* |
|  |

## Description

The ![](/images/Sketcher_SwitchVirtualSpace.svg) [Sketcher SwitchVirtualSpace](/Sketcher_SwitchVirtualSpace "Sketcher SwitchVirtualSpace") tool either (un)hides constraints or switches the visible virtual space.

A sketch has two virtual spaces that can contain constraints. All constraints are created in the main virtual space, but they can be hidden which moves them to the other virtual space.

## Usage

### (Un)hide constraints

1. Select one or more constraints. Constraints that are not visible in the current virtual space can be selected in the [Constraints section of the Sketcher Dialog](/Sketcher_Dialog#Constraints "Sketcher Dialog").
2. There are several ways to invoke the tool:
   * Press the ![](/images/Sketcher_SwitchVirtualSpace.svg) [Switch virtual space](/Sketcher_SwitchVirtualSpace "Sketcher SwitchVirtualSpace") button.
   * Select the **Sketch → Sketcher visual → ![](/images/Sketcher_SwitchVirtualSpace.svg) Switch virtual space** option from the menu.
   * Use the keyboard shortcut: Z then Z.

### Switch virtual space

1. Make sure no constraints have been selected.
2. Invoke the tool as described above.
3. Hidden constraints are made visible and unhidden constraints invisible, or vice versa.

## Notes

* Constraints can also be (un)hidden from the [Sketcher Dialog](/Sketcher_Dialog#Constraints "Sketcher Dialog").
* The virtual space setting of a sketch is only used in the current session, it is not stored in the FreeCAD file.

Retrieved from "<http://wiki.freecad.org/index.php?title=Sketcher_SwitchVirtualSpace/ja&oldid=1535615>"