---
title: FEM Vincolo fissaggio
---

|                                                    |
| -------------------------------------------------- |
| Vincolo fissaggio                                  |
| Posizione nel menu                                 |
| Modello → Vincoli meccanici → Vincolo fissaggio    |
| Ambiente                                           |
| [FEM](/FEM_Workbench/it "FEM Workbench/it")        |
| Avvio veloce                                       |
| _Nessuno_                                          |
| Introdotto nella versione                          |
| -                                                  |
| Vedere anche                                       |
| [Tutorial FEM](/FEM_tutorial/it "FEM tutorial/it") |
|                                                    |

## Descrizione

Crea un vincolo di fissaggio FEM per un elemento della geometria, bloccando tutti i 6 gradi di libertà dell'oggetto selezionato.

## Utilizzo

1. Cliccare su ![](/images/FEM_ConstraintFixed.png) o scegliere Modello → **Vincoli meccanici** → ![](/images/FEM_ConstraintFixed.png) Vincolo fissaggio dal menu principale.
2. Selezionare nella vista 3D l'oggetto a cui deve essere applicato il vincolo, che può essere
   1. vertice (angolo)
   2. bordo
   3. faccia

## Limitazioni

Non è possibile ceare combinazioni di tipi di oggetti all'interno dello stesso vincolo.
Utilizzare un vincolo di fissaggio per ogni tipo di oggetto.

## Notes

- This feature uses the [\*BOUNDARY card in CalculiX](https://web.mit.edu/calculix_v2.7/CalculiX/ccx_2.7/doc/ccx/node163.html).

Retrieved from "<http://wiki.freecad.org/index.php?title=FEM_ConstraintFixed/it&oldid=1418418>"
