---
title: FEM Vincolo scambio termico
---

|                                                     |
| --------------------------------------------------- |
| Scambio termico                                     |
| Posizione nel menu                                  |
| Modello → Vincoli termici → Vincolo scambio termico |
| Ambiente                                            |
| [FEM](/FEM_Workbench/it "FEM Workbench/it")         |
| Avvio veloce                                        |
| _Nessuno_                                           |
| Introdotto nella versione                           |
| -                                                   |
| Vedere anche                                        |
| [Tutorial FEM](/FEM_tutorial/it "FEM tutorial/it")  |
|                                                     |

## Descrizione

Questo vincolo specifica lo scambio termico (film heat transfer) di una superficie a temperatura _T_ e con un coefficiente di scambio termico _h_ e una temperatura ambiente _T0_ . Il flusso di calore convettivo _q_ è in grado di soddisfare: **_q = h(T -T0)_**

## Utilizzo

1. Cliccare su ![](/images/FEM_ConstraintHeatflux.png) o scgliere Modello → **Vincoli termici** → ![](/images/FEM_ConstraintHeatflux.png) Vincolo Scambio termico dal menu principale.
2. Selezionare nella vista 3D la superficie a cui il vincolo deve essere applicato.
3. Inserire la temperatura della superficie desiderata, il coefficiente del materiale e la temperatura ambiente.

## Note

1. Il vincolo utilizza la \*FILM card in CalculiX. Il vincolo scambio termico è spiegato in <http://web.mit.edu/calculix_v2.7/CalculiX/ccx_2.7/doc/ccx/node203.html>

Retrieved from "<http://wiki.freecad.org/index.php?title=FEM_ConstraintHeatflux/it&oldid=1568132>"
