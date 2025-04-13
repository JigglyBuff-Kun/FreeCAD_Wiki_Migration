---
title: FEM LöserZ88
---
|  |
| --- |
| FEM SolverZ88 |
| Menu location |
| Solve → Solver Z88 |
| Workbenches |
| [FEM](/FEM_Workbench "FEM Workbench") |
| Default shortcut |
| S Z |
| Introduced in version |
| - |
| See also |
| [FEM tutorial](/FEM_tutorial "FEM tutorial") |
|  |

## Beschreibung

The [SolverZ88](/FEM_SolverZ88 "FEM SolverZ88") command enables usage of the [Z88](https://en.wikipedia.org/wiki/Z88_FEM_software) solver. It may be used for:

1. Setting analysis parameters
2. Selecting working directory
3. Running the Z88 solver

## Installation

To use the Z88 solver, the OpenSource version of Z88 (Z88OS) needs to be installed:

1. Download the ZIP file from the [Z88OS website](https://en.z88.de/download-z88os).
2. Extract the ZIP to a folder of your choice.
3. In the [FEM preferences](/FEM_Preferences "FEM Preferences") go to the Z88 tab and there set the path to the **z88r** binary. If you are on Windows this would be the path to the file z88r.exe that is in the subfolder ~\bin\win64 of the folder where your extracted the ZIP.

## Anwendung

1. Create an ![](/images/FEM_Analysis.svg) [Analysis container](/FEM_Analysis "FEM Analysis").
2. There are several ways to invoke the command:
   * Select **Solve → ![](/images/FEM_SolverZ88.svg) Solver Z88** option from the menu.
   * Use the keyboard shortcut: S then Z.
3. Double-click the ![](/images/FEM_SolverZ88.svg) SolverZ88 object.
4. Select the **Analysis type**.
5. Press the Write button.
6. Press the Run button.

As a result you get an object called *Z88\_xxx\_results* (depending on the run simulation) in the [Tree view](/Tree_view "Tree view"). This is the same kind of result object one gets when running the [CalculiX solver](/FEM_SolverCalculixCxxtools "FEM SolverCalculixCxxtools"). Starting from this, you can visualize the results using [Post Pipeline](/FEM_PostPipelineFromResult "FEM PostPipelineFromResult") and [Clip Filters](/FEM_Workbench#Menu:_Results "FEM Workbench").

## Einstellungen

See the [Z88 preferences](/FEM_Preferences#Z88 "FEM Preferences") for the possible solver settings like the used solver method.

Retrieved from "<http://wiki.freecad.org/index.php?title=FEM_SolverZ88/de&oldid=1569026>"