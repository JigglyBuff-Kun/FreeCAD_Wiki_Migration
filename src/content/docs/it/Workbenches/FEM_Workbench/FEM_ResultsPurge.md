---
title: FEM Azzera risultati
---

|                                                    |
| -------------------------------------------------- |
| Azzera risultati                                   |
| Posizione nel menu                                 |
| Risultati → Azzera risultati                       |
| Ambiente                                           |
| [FEM](/FEM_Workbench/it "FEM Workbench/it")        |
| Avvio veloce                                       |
| R P                                                |
| Introdotto nella versione                          |
| -                                                  |
| Vedere anche                                       |
| [Tutorial FEM](/FEM_tutorial/it "FEM tutorial/it") |
|                                                    |

## Descrizione

**FEM ResultsPurge** deletes all [result objects](/FEM_ResultShow "FEM ResultShow") and all result meshes from the active analysis container in the [Tree view](/Tree_view "Tree view").

1.1 and above: Deletes all output objects from all solvers (CalculiX results objects, pipelines, filters and text reports).

If you only want to delete a result object and keep the result mesh, create a copy of the result mesh, then select the Result object in the tree view and delete it by pressing Del. This way the created copy of the mesh will remain. (Using FEM ResultsPurge would also delete the copy.)

## Utilizzo

1. I diversi modi per richiamare il comando Azzera risultati:
   - Premere il pulsante ![](/images/FEM_PurgeResults.png)
   - Usare la scorciatoia da tastiera S S
   - Usare **Risultati → Azzera risultati**

Retrieved from "<http://wiki.freecad.org/index.php?title=FEM_ResultsPurge/it&oldid=1516261>"
