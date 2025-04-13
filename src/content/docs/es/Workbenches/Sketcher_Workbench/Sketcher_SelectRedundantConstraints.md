---
title: Corquizador SeleccionarRestriccionesRedundantes
---
|  |
| --- |
| Corquizador SeleccionarRestriccionesRedundantes |
| Ubicación en el Menú |
| Croquis → Corquizador Herramientas → Seleccionar Restricciones Redundantes |
| Entornos de trabajo |
| [Corquizador](/Sketcher_Workbench/es "Sketcher Workbench/es") |
| Atajo de teclado por defecto |
| Shift+Ctrl+R |
| Introducido en versión |
| 0.15 |
| Ver también |
| *Ninguno* |
|  |

## Description

## Descripción

Selecciona las restricciones redundantes de un croquis.

If such constraints exist in a sketch the [Solver messages section of the Sketcher Dialog](/Sketcher_Dialog#Solver_messages "Sketcher Dialog") displays this message:

* Redundant constraints: (#, #, #)

Where *(#, #, #)* are the indices of the constraints. Clicking the underlined text will select the redundant constraints.

Please note that a sketch can also have redundant constraints if one of the other [solver messages](/Sketcher_Dialog#Solver_messages "Sketcher Dialog") is displayed.

## Utilización

1. Entre en el modo de edición del croquis.
2. Elige **Croquis → Croquizador Herramientas → ![](/images/Sketcher_SelectRedundantConstraints.svg) Seleccione Restricciones redundantes** en el menú superior.
3. Se seleccionarán las restricciones redundantes del croquis.

## Notes

* Redundant constraints must be removed from the sketch.
* Instead of the proposed indices it is also possible to delete other constraints.

Retrieved from "<http://wiki.freecad.org/index.php?title=Sketcher_SelectRedundantConstraints/es&oldid=1460755>"