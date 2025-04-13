---
title: Sketcher Seleziona gli elementi con gradi di libertà
---
|  |
| --- |
| Seleziona il Risolutore dei gradi di libertà |
| Posizione nel menu |
| Sketch → Strumenti → Seleziona gli elementi con gradi di libertà |
| Ambiente |
| [Sketcher](/Sketcher_Workbench/it "Sketcher Workbench/it") |
| Avvio veloce |
| *Nessuno* |
| Introdotto nella versione |
| 0.18 |
| Vedere anche |
| *Nessuno* |
|  |

## Descrizione

Questo strumento ha lo scopo di aiutare a vincolare completamente uno schizzo evidenziando in verde gli elementi dello schizzo con residui gradi di libertà (DoF).

If such elements exist in a sketch the [Solver messages section of the Sketcher Dialog](/Sketcher_Dialog#Solver_messages "Sketcher Dialog") displays this message:

* Under constrained: n DoF(s)

Where *n* is the remaining number of degrees of freedom. Clicking the underlined text will select the under-constrained elements.

Please note that a sketch can also have redundant constraints if one of the other [solver messages](/Sketcher_Dialog#Solver_messages "Sketcher Dialog") is displayed.

## Utilizzo

1. There are several ways to invoke the tool:
   * Click the underlined text in the Sketcher Dialog as described above.
   * Select the **Sketch → Sketcher visual → ![](/images/Sketcher_SelectElementsWithDoFs.svg) Select unconstrained DoF** option from the menu.
   * Use the keyboard shortcut: Z then F.
2. The under-constrained sketch elements are selected.
3. Optionally click in an empty area in the [3D view](/3D_view "3D view") to clear the selection.

Retrieved from "<http://wiki.freecad.org/index.php?title=Sketcher_SelectElementsWithDoFs/it&oldid=1460745>"