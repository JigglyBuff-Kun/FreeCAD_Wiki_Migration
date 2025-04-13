---
title: Exibindo os graus de liberdade
---
|  |
| --- |
| Sketcher SelectElementsWithDoFs |
| Menu location |
| Sketch → Sketcher visual → Select unconstrained DoF |
| Workbenches |
| [Sketcher](/Sketcher_Workbench "Sketcher Workbench") |
| Default shortcut |
| Z F |
| Introduced in version |
| 0.18 |
| See also |
| *None* |
|  |

## Description

The ![](/images/Sketcher_SelectElementsWithDoFs.svg) [Sketcher SelectElementsWithDoFs](/Sketcher_SelectElementsWithDoFs "Sketcher SelectElementsWithDoFs") tool selects the not fully constrained elements in the sketch.

If such elements exist in a sketch the [Solver messages section of the Sketcher Dialog](/Sketcher_Dialog#Solver_messages "Sketcher Dialog") displays this message:

* Under constrained: n DoF(s)

Where *n* is the remaining number of degrees of freedom. Clicking the underlined text will select the under-constrained elements.

Please note that a sketch can also have redundant constraints if one of the other [solver messages](/Sketcher_Dialog#Solver_messages "Sketcher Dialog") is displayed.

## Usage

1. There are several ways to invoke the tool:
   * Click the underlined text in the Sketcher Dialog as described above.
   * Select the **Sketch → Sketcher visual → ![](/images/Sketcher_SelectElementsWithDoFs.svg) Select unconstrained DoF** option from the menu.
   * Use the keyboard shortcut: Z then F.
2. The under-constrained sketch elements are selected.
3. Optionally click in an empty area in the [3D view](/3D_view "3D view") to clear the selection.

Retrieved from "<http://wiki.freecad.org/index.php?title=Sketcher_SelectElementsWithDoFs/pt-br&oldid=1460744>"