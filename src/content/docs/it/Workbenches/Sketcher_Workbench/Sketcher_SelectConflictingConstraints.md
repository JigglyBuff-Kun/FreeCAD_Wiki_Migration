---
title: Sketcher Seleziona i vincoli in conflitto
---
|  |
| --- |
| Seleziona i vincoli in conflitto |
| Posizione nel menu |
| Schizzo → Strumenti → Seleziona i vincoli in conflitto |
| Ambiente |
| [Sketcher](/Sketcher_Workbench/it "Sketcher Workbench/it") |
| Avvio veloce |
| Z P C |
| Introdotto nella versione |
| 0.15 |
| Vedere anche |
| *Nessuno* |
|  |

## Descrizione

Seleziona i vincoli in conflitto di uno schizzo.

If such constraints exist in a sketch the [Solver messages section of the Sketcher Dialog](/Sketcher_Dialog#Solver_messages "Sketcher Dialog") displays this message:

* Over-constrained: (#, #, #)

Where *(#, #, #)* are the indices of the constraints. Clicking the underlined text will select the conflicting constraints.

## Utilizzo

1. Entrare in modalità di modifica del disegno.
2. Selezionare dal menu in alto **Schizzo → Strumenti → ![](/images/Sketcher_SelectConflictingConstraints.svg) Seleziona i vincoli in conflitto**.
3. Vengono selezionati i vincoli dello schizzo che sono in conflitto.

## Notes

* Conflicting constraints must be removed from the sketch.
* Instead of the proposed indices it is also possible to delete other constraints.

Retrieved from "<http://wiki.freecad.org/index.php?title=Sketcher_SelectConflictingConstraints/it&oldid=1414012>"