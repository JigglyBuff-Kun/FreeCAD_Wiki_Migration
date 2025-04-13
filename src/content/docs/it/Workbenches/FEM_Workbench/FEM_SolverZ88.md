---
title: FEM Risolutore Z88
---

|                                                    |
| -------------------------------------------------- |
| Risolutore Z88                                     |
| Posizione nel menu                                 |
| Solve → Risolutore Z88                             |
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

Da fare

## Installation

To use the Z88 solver, the OpenSource version of Z88 (Z88OS) needs to be installed:

1. Download the ZIP file from the [Z88OS website](https://en.z88.de/download-z88os).
2. Extract the ZIP to a folder of your choice.
3. In the [FEM preferences](/FEM_Preferences "FEM Preferences") go to the Z88 tab and there set the path to the **z88r** binary. If you are on Windows this would be the path to the file z88r.exe that is in the subfolder ~\bin\win64 of the folder where your extracted the ZIP.

## Utilizzo

As a result you get an object called _Z88_xxx_results_ (depending on the run simulation) in the [Tree view](/Tree_view "Tree view"). This is the same kind of result object one gets when running the [CalculiX solver](/FEM_SolverCalculixCxxtools "FEM SolverCalculixCxxtools"). Starting from this, you can visualize the results using [Post Pipeline](/FEM_PostPipelineFromResult "FEM PostPipelineFromResult") and [Clip Filters](/FEM_Workbench#Menu:_Results "FEM Workbench").

## Preferences

See the [Z88 preferences](/FEM_Preferences#Z88 "FEM Preferences") for the possible solver settings like the used solver method.

Retrieved from "<http://wiki.freecad.org/index.php?title=FEM_SolverZ88/it&oldid=1244920>"
