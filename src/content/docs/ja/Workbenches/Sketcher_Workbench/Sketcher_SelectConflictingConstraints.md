---
title: スケッチャー・競合する拘束を選択
---
|  |
| --- |
| Sketcher SelectConflictingConstraints |
| Menu location |
| Sketch → Sketcher visual → Select conflicting constraints |
| Workbenches |
| [Sketcher](/Sketcher_Workbench "Sketcher Workbench") |
| Default shortcut |
| Z P C |
| Introduced in version |
| 0.15 |
| See also |
| *None* |
|  |

## Description

The ![](/images/Sketcher_SelectConflictingConstraints.svg) [Sketcher SelectConflictingConstraints](/Sketcher_SelectConflictingConstraints "Sketcher SelectConflictingConstraints") tool selects the conflicting constraints in the sketch.

If such constraints exist in a sketch the [Solver messages section of the Sketcher Dialog](/Sketcher_Dialog#Solver_messages "Sketcher Dialog") displays this message:

* Over-constrained: (#, #, #)

Where *(#, #, #)* are the indices of the constraints. Clicking the underlined text will select the conflicting constraints.

## Usage

1. There are several ways to invoke the tool:
   * Click the underlined text in the Sketcher Dialog as described above.
   * Select the **Sketch → Sketcher visual → ![](/images/Sketcher_SelectConflictingConstraints.svg) Select conflicting constraints** option from the menu.
   * Use the keyboard shortcut: Z then P, then C.
2. The conflicting constraints are selected.
3. Optionally click in an empty area in the [3D view](/3D_view "3D view") to clear the selection.

## Notes

* Conflicting constraints must be removed from the sketch.
* Instead of the proposed indices it is also possible to delete other constraints.

Retrieved from "<http://wiki.freecad.org/index.php?title=Sketcher_SelectConflictingConstraints/ja&oldid=1535599>"