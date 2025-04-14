---
title: FEM ResultsPurge
---

|                                              |
| -------------------------------------------- |
| FEM ResultsPurge                             |
| Menu location                                |
| Results → Purge results                      |
| Workbenches                                  |
| [FEM](/FEM_Workbench "FEM Workbench")        |
| Default shortcut                             |
| R P                                          |
| Introduced in version                        |
| -                                            |
| See also                                     |
| [FEM tutorial](/FEM_tutorial "FEM tutorial") |
|                                              |

## Description

**FEM ResultsPurge** deletes all [result objects](/FEM_ResultShow "FEM ResultShow") and all result meshes from the active analysis container in the [Tree view](/Tree_view "Tree view").

1.1 and above: Deletes all output objects from all solvers (CalculiX results objects, pipelines, filters and text reports).

If you only want to delete a result object and keep the result mesh, create a copy of the result mesh, then select the Result object in the tree view and delete it by pressing Del. This way the created copy of the mesh will remain. (Using FEM ResultsPurge would also delete the copy.)

## Usage

1. There are several ways to invoke the command:
   - Press the ![](/images/FEM_ResultsPurge.svg) [Purge results](/FEM_ResultsPurge "FEM ResultsPurge") button.
   - Select the **Results → ![](/images/FEM_ResultsPurge.svg) Purge results** option from the menu.
   - Use the keyboard shortcut: R then P.

Retrieved from "<http://wiki.freecad.org/index.php?title=FEM_ResultsPurge/en&oldid=1571152>"
