---
title: FEM LöserSteuerung
---
|  |
| --- |
| FEM SolverControl |
| Menu location |
| Solve → Solver job control |
| Workbenches |
| [FEM](/FEM_Workbench "FEM Workbench") |
| Default shortcut |
| S T |
| Introduced in version |
| - |
| See also |
| [FEM Run solver calculations](/FEM_SolverRun "FEM SolverRun") |
|  |

## Beschreibung

This command is used to control the FEM solver (write the input file, edit it, and trigger the solver).

## Anwendung

1. Select the Solver object in the [Tree view](/Tree_view "Tree view"), e.g., for CalcuilX solver ![](/images/FEM_SolverCalculixCxxtools.svg) **SolverCcxTools**.
2. There are several ways to invoke the command:
   * Press the ![](/images/FEM_SolverControl.svg) [Solver job control](/FEM_SolverControl "FEM SolverControl") button.
   * Select the **Solve → ![](/images/FEM_SolverControl.svg) Solver job control** option from the menu.
   * Use the keyboard shortcut: S then T.
3. Optionally, edit working directory.
4. Optionally, select analysis type.
5. Click Write .inp file to write the input file.
6. Optionally, click Edit .inp file.
   * Input file will open so you can edit it and save by Ctrl+S.
7. Click Run CalculiX to trigger the solver.
   * The solution may take considerable time for large models.

## Notes

* Default working directory can be changed in **Edit → Preferences → FEM**
* Controls for other solvers may differ.
* The simplified version of the command is ![](/images/FEM_SolverRun.svg) [Run solver calculation](/FEM_SolverRun "FEM SolverRun").

Retrieved from "<http://wiki.freecad.org/index.php?title=FEM_SolverControl/de&oldid=1569190>"