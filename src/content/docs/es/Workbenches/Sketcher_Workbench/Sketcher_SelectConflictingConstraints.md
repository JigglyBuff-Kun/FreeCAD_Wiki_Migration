---
title: Croquizador SeleccionarRestriccionesConflictivas
---
|  |
| --- |
| Corquizador SeleccionarRestriccionesConflictivas |
| Ubicación en el Menú |
| Croquis → Corquizador Herramientas → Seleccionar Restricciones Conflictivas |
| Entornos de trabajo |
| [Corquizador](/Sketcher_Workbench/es "Sketcher Workbench/es") |
| Atajo de teclado por defecto |
| Shift+Ctrl+E |
| Introducido en versión |
| 0.15 |
| Ver también |
| *Ninguno* |
|  |

## Descripción

Selecciona las restricciones conflictivas de un croquis.

If such constraints exist in a sketch the [Solver messages section of the Sketcher Dialog](/Sketcher_Dialog#Solver_messages "Sketcher Dialog") displays this message:

* Over-constrained: (#, #, #)

Where *(#, #, #)* are the indices of the constraints. Clicking the underlined text will select the conflicting constraints.

## Utilización

1. Entre en el modo de edición del croquis.
2. Elige **Croquis → Croquizador Herramientas → ![](/images/Sketcher_SelectConflictingConstraints.svg) Seleccione Restricciones conflictivas** en el menú superior.
3. Se seleccionarán las restricciones conflictivas del croquis.

## Notes

* Conflicting constraints must be removed from the sketch.
* Instead of the proposed indices it is also possible to delete other constraints.

Retrieved from "<http://wiki.freecad.org/index.php?title=Sketcher_SelectConflictingConstraints/es&oldid=1400118>"