---
title: FEM Risolutore Calculix
---

:::caution
Obsolete (1.0 and above).
:::

|                                                    |
| -------------------------------------------------- |
| Risolutore CalculiX                                |
| Posizione nel menu                                 |
| Solve → Risolutore CalculiX sperimentale           |
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

The **Solver CalculiX (new framework)** command creates a SolverCalculix object, which uses the same framework as Elmer and Z88 solvers (the code is not visible for the user). It is preferred to use the original framework ![](/images/FEM_SolverCalculixCxxtools.svg) [Solver CalculiX Standard](/FEM_SolverCalculixCxxtools "FEM SolverCalculixCxxtools") because it contains extra checks, e.g. showing the elements with nonpositive Jacobian which might cause solution difficulties.

## Utilizzo

1. Select **Solve → ![](/images/FEM_SolverCalculiX.svg) Solver CalculiX (new framework)** from the menu.

## Related

- [FEM CalculiX](/FEM_CalculiX "FEM CalculiX")

Retrieved from "<http://wiki.freecad.org/index.php?title=FEM_SolverCalculiX/it&oldid=1403184>"
