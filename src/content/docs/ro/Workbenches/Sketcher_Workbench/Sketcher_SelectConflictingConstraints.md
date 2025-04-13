---
title: Sketcher Selectați constrângeri conflictuale
---
|  |
| --- |
| Sketcher SelectConflictingConstraints |
| Menu location |
| Sketch → Sketcher tools → Select Conflicting Constraints |
| Workbenches |
| [Sketcher](/Sketcher_Workbench "Sketcher Workbench") |
| Default shortcut |
| Shift+Ctrl+E |
| Introduced in version |
| 0.15 |
| See also |
| *None* |
|  |

## Descriere

Selectează constrângerile conflictuale dintr-o schiță.

If such constraints exist in a sketch the [Solver messages section of the Sketcher Dialog](/Sketcher_Dialog#Solver_messages "Sketcher Dialog") displays this message:

* Over-constrained: (#, #, #)

Where *(#, #, #)* are the indices of the constraints. Clicking the underlined text will select the conflicting constraints.

#### Utilizaare

1. Intrați în modul edit al schiței.
2. Alegeți traseul  Sketch →  Sketcher tools → ![](/images/Sketcher_SelectConflictingConstraints.png) Select Conflicting Constraints din meniul principal.
3. Constrângerile conflictuale ale schiței vor fi selectate.

## Notes

* Conflicting constraints must be removed from the sketch.
* Instead of the proposed indices it is also possible to delete other constraints.

Retrieved from "<http://wiki.freecad.org/index.php?title=Sketcher_SelectConflictingConstraints/ro&oldid=1414014>"