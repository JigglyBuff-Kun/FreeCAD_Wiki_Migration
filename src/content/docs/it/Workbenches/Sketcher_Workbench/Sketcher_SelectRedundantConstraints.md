---
title: Sketcher Seleziona i vincoli ridondanti
---
|  |
| --- |
| Seleziona i vincoli ridondanti |
| Posizione nel menu |
| Sketch → Strumenti → Seleziona i vincoli ridondanti |
| Ambiente |
| [Sketcher](/Sketcher_Workbench/it "Sketcher Workbench/it") |
| Avvio veloce |
| Shift+Ctrl+R |
| Introdotto nella versione |
| 0.15 |
| Vedere anche |
| *Nessuno* |
|  |

## Description

## Descrizione

Seleziona i vincoli ridondanti di uno schizzo.

If such constraints exist in a sketch the [Solver messages section of the Sketcher Dialog](/Sketcher_Dialog#Solver_messages "Sketcher Dialog") displays this message:

* Redundant constraints: (#, #, #)

Where *(#, #, #)* are the indices of the constraints. Clicking the underlined text will select the redundant constraints.

Please note that a sketch can also have redundant constraints if one of the other [solver messages](/Sketcher_Dialog#Solver_messages "Sketcher Dialog") is displayed.

## Utilizzo

1. Entrare in modalità di modifica del disegno.
2. Scegliere  Sketch →  Strumenti → ![](/images/Sketcher_SelectRedundantConstraints.png) Seleziona i vincoli ridondanti dal menu in alto.
3. Vengono selezionati i vincoli che nello schizzo sono ridondanti.

## Notes

* Redundant constraints must be removed from the sketch.
* Instead of the proposed indices it is also possible to delete other constraints.

Retrieved from "<http://wiki.freecad.org/index.php?title=Sketcher_SelectRedundantConstraints/it&oldid=1460750>"