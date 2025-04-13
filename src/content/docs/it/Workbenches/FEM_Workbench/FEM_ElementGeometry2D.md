---
title: FEM Spessore di una lastra
---
|  |
| --- |
| FEM ElementGeometry2D |
| Posizione nel menu |
| Model → Spessore di una lastra |
| Ambiente |
| [FEM](/FEM_Workbench/it "FEM Workbench/it") |
| Avvio veloce |
| C S |
| Introdotto nella versione |
| - |
| Vedere anche |
| [FEM tutorial](/FEM_tutorial/it "FEM tutorial/it") |
|  |

## Descrizione

Spessore di una lastra viene utilizzato per definire lo spessore degli elementi FEM 2D, tutti o posizionati sulla superficie scelta.

## Utilizzo

1. Premere il pulsante ![](/images/FEM_ElementGeometry2D.png) Spessore di una lastra, o premere i tasti C e poi S.
2. Definire un parametro di spessore.
3. Opzionalmente, fare clic su `Aggiungi` nel pannello Azioni e poi fare clic sull'icona. Se la selezione della faccia è libera, tutte le facce rimanenti (lo spessore non definito da altri oggetti Spessore di una lastra) vengono assegnate automaticamente.

## Limitazioni

* L'analisi combinata di elementi di shell con elementi solidi o bordi non è supportata nella versione corrente (FreeCAD 0.18).

## Proprietà

Dati**Thickness**: specifica lo spessore della shell.

## Note

Per visualizzare i risultati dal risolutore CalculiX sulla mesh espansa allo spessore prescritto, la proprietà `Beam Shell Result Output 3D` in [FEM SolverCalculixCxxtools](/FEM_SolverCalculixCxxtools/it "FEM SolverCalculixCxxtools/it") deve essere impostata su `True`.

Retrieved from "<http://wiki.freecad.org/index.php?title=FEM_ElementGeometry2D/it&oldid=1460081>"