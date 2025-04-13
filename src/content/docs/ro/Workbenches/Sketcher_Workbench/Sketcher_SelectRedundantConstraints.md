---
title: Sketcher Selectează constrângerile redundante
---
|  |
| --- |
| Sketcher SelectRedundantConstraints |
| poziția meniului |
| Sketch → Sketcher tools → Select Redundant Constraints |
| Ateliere |
| [Sketcher](/Sketcher_Workbench/ro "Sketcher Workbench/ro") |
| scurtătură |
| Shift+Ctrl+R |
| Prezentat în versiune |
| 0.15 |
| A se vedea, de asemenea, |
| *Nici unul* |
|  |

## Description

## Descriere

Selectează constrângerile redundante dintr-o schiță.

If such constraints exist in a sketch the [Solver messages section of the Sketcher Dialog](/Sketcher_Dialog#Solver_messages "Sketcher Dialog") displays this message:

* Redundant constraints: (#, #, #)

Where *(#, #, #)* are the indices of the constraints. Clicking the underlined text will select the redundant constraints.

Please note that a sketch can also have redundant constraints if one of the other [solver messages](/Sketcher_Dialog#Solver_messages "Sketcher Dialog") is displayed.

## Utilizare

1. Intrați în modul edit al schiței.
2. Alegeți traseul  Sketch →  Sketcher tools → ![](/images/Sketcher_SelectRedundantConstraints.png) Select Redundant Constraints din meniul principal.
3. Constrângerile redundante ale schiței vor fi selectate.

## Notes

* Redundant constraints must be removed from the sketch.
* Instead of the proposed indices it is also possible to delete other constraints.

Retrieved from "<http://wiki.freecad.org/index.php?title=Sketcher_SelectRedundantConstraints/ro&oldid=1460758>"