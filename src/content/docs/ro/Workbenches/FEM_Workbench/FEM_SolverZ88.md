---
title: FEM SolverZ88
---
|  |
| --- |
| FEM SolverZ88 |
| Menu location |
| Solve → solver Z88 |
| Workbenches |
| [FEM](/FEM_Workbench "FEM Workbench") |
| Default shortcut |
| *None* |
| Introduced in version |
| - |
| See also |
| [FEM tutorial](/FEM_tutorial "FEM tutorial") |
|  |

## Description

De completat

## Installation

To use the Z88 solver, the OpenSource version of Z88 (Z88OS) needs to be installed:

1. Download the ZIP file from the [Z88OS website](https://en.z88.de/download-z88os).
2. Extract the ZIP to a folder of your choice.
3. In the [FEM preferences](/FEM_Preferences "FEM Preferences") go to the Z88 tab and there set the path to the **z88r** binary. If you are on Windows this would be the path to the file z88r.exe that is in the subfolder ~\bin\win64 of the folder where your extracted the ZIP.

## Usage

As a result you get an object called *Z88\_xxx\_results* (depending on the run simulation) in the [Tree view](/Tree_view "Tree view"). This is the same kind of result object one gets when running the [CalculiX solver](/FEM_SolverCalculixCxxtools "FEM SolverCalculixCxxtools"). Starting from this, you can visualize the results using [Post Pipeline](/FEM_PostPipelineFromResult "FEM PostPipelineFromResult") and [Clip Filters](/FEM_Workbench#Menu:_Results "FEM Workbench").

## Preferences

See the [Z88 preferences](/FEM_Preferences#Z88 "FEM Preferences") for the possible solver settings like the used solver method.

Retrieved from "<http://wiki.freecad.org/index.php?title=FEM_SolverZ88/ro&oldid=1307454>"