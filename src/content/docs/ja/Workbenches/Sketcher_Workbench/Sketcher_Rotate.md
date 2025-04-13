---
title: スケッチャー・軸周変換
---
|  |
| --- |
| Sketcher Rotate |
| Menu location |
| Sketch → Sketcher tools → Polar transform |
| Workbenches |
| [Sketcher](/Sketcher_Workbench "Sketcher Workbench") |
| Default shortcut |
| Z P |
| Introduced in version |
| 1.0 |
| See also |
| *None* |
|  |

## Description

The ![](/images/Sketcher_Rotate.svg) [Sketcher Rotate](/Sketcher_Rotate "Sketcher Rotate") tool rotates or optionally creates rotated copies of selected elements. Copies are evenly distributed along the rotation angle.

## Usage

See also: [Drawing aids](/Sketcher_Workbench#Drawing_aids "Sketcher Workbench").

Pos-OVP = Positional [On-View-Parameters](/Sketcher_Preferences#General "Sketcher Preferences").  
Dim-OVP = Dimensional On-View-Parameters.

1. Select one or more edges and/or [Point objects](/Sketcher_CreatePoint "Sketcher CreatePoint"). Constraints, except [Horizontal](/Sketcher_ConstrainHorizontal "Sketcher ConstrainHorizontal") and [Vertical](/Sketcher_ConstrainVertical "Sketcher ConstrainVertical") constraints, restricted to the selected elements are also processed. If the original elements are rotated, any other constraints associated with them will be deleted.
2. There are several ways to invoke the tool:
   * Press the ![](/images/Sketcher_Rotate.svg) [Polar transform](/Sketcher_Rotate "Sketcher Rotate") button.
   * Select the **Sketcher → Sketcher tools → ![](/images/Sketcher_Rotate.svg) Polar transform** option from the menu.
   * Right-click in the [3D view](/3D_view "3D view") and select the **![](/images/Sketcher_Rotate.svg) Polar transform** option from the context menu.
   * The keyboard shortcut: Z then P.
3. The cursor changes to a cross with the tool icon.
4. The **Rotate parameters** section is added at the top of the [Sketcher Dialog](/Sketcher_Dialog "Sketcher Dialog").
5. Optionally change the number of **Copies** (if the number is zero the original elements are rotated):
   * Enter a number.
   * Press the U key to increase the number.
   * Press the J key to decrease the number.
6. Optionally check the **Apply equal constraints** checkbox to exclude dimensional constraints from the operation, and instead apply ![](/images/Sketcher_ConstrainEqual.svg) [Equal constraints](/Sketcher_ConstrainEqual "Sketcher ConstrainEqual") between the original objects and their copies.
7. Pick the rotation center. Or with Pos-OVP: enter its X and/or Y coordinate.
8. Pick a point to define the reference angle. Or with Dim-OVP: enter it.
9. Pick a point to define rotation angle. Or with Dim-OVP: enter it.
10. The original elements are rotated or rotated copies are created. No Pos-OVP or Dim-OVP based constraints are added.

## Notes

* It can be advisable to use [Sketcher RemoveAxesAlignment](/Sketcher_RemoveAxesAlignment "Sketcher RemoveAxesAlignment") before using this tool.

Retrieved from "<http://wiki.freecad.org/index.php?title=Sketcher_Rotate/ja&oldid=1537965>"