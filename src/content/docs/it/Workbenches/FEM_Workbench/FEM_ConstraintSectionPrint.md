---
title: FEM Stampa sezione dei vincoli
---
|  |
| --- |
| FEM ConstraintSectionPrint |
| Menu location |
| Model → Geometrical analysis features → Section print feature |
| Workbenches |
| [FEM](/FEM_Workbench "FEM Workbench") |
| Default shortcut |
| *None* |
| Introduced in version |
| 0.19 |
| See also |
| *None* |
|  |

| Solvers |
| --- |
| CalculiX |

## Description

Prints the predefined facial output variables (forces and moments) to the data file.

[introduced in 1.0](/Release_notes_1.0 "Release notes 1.0"): Can also print heat flux and drag stress (the latter requires the support for 3D fluid analyses with CalculiX which has not yet been implemented).

## Usage

1. There are several ways to invoke the command:
   * Press the ![](/images/FEM_ConstraintSectionPrint.svg) [Section print feature](/FEM_ConstraintSectionPrint "FEM ConstraintSectionPrint") button.
   * Select the **Model → Geometrical analysis features → ![](/images/FEM_ConstraintSectionPrint.svg) Section print feature** option from the menu.
2. Press the Add button and select a single face for which the output will be printed.
3. [introduced in 1.0](/Release_notes_1.0 "Release notes 1.0"): From the *Variable* list, select the variable that you want to print: *Section Force*, *Heat Flux* or *Drag Stress*.

## Notes

* The feature uses the \*SECTION PRINT card in CalculiX.

Retrieved from "<http://wiki.freecad.org/index.php?title=FEM_ConstraintSectionPrint/it&oldid=1460039>"