---
title: Sketcher Copia de Carbón
---
|  |
| --- |
| Sketcher Copia de Carbón |
| Ubicación en el Menú |
| Sketch → Geometrías de croquis → Copia de Carbón |
| Entornos de trabajo |
| [Sketcher](/Sketcher_Workbench/es "Sketcher Workbench/es") |
| Atajo de teclado por defecto |
| *Ninguno* |
| Introducido en versión |
| 0.17 |
| Ver también |
| *Ninguno* |
|  |

## Descripción

The ![](/images/Sketcher_CarbonCopy.svg) [Sketcher CarbonCopy](/Sketcher_CarbonCopy "Sketcher CarbonCopy") tool copies all geometry and constraints from another sketch into the active sketch.

Dimensional constraints which exist before the copy function remain linked to the original sketch's dimensional constraints through [expressions](/Expressions "Expressions").

## Usage

1. Make sure you are in the edit mode of an existing [sketch](/Sketcher_NewSketch "Sketcher NewSketch"). This sketch is the target of the operation.
2. There are several ways to invoke the tool:
   * Press the ![](/images/Sketcher_CarbonCopy.svg) [Create carbon copy](/Sketcher_CarbonCopy "Sketcher CarbonCopy") button.
   * Select the **Sketcher → Sketcher tools → ![](/images/Sketcher_CarbonCopy.svg) Create carbon copy** option from the menu.
   * Use the keyboard shortcut: G then W.
3. The cursor changes to a cross with the tool icon.
4. Pick an edge from another sketch. This sketch is the source of the operation. See [Notes](#Notes).
5. Geometry elements as well as constraints are copied into the active sketch.
6. This tool always runs in continue mode: optionally copy additional sketches.
7. To finish, right-click or press Esc, or start another geometry or constraint creation tool.

## Notes

* In the [PartDesign Workbench](/PartDesign_Workbench "PartDesign Workbench") it is possible to select the sketch to carbon copy from outside the [Body](/PartDesign_Body "PartDesign Body") of the currently active sketch, but only if the Ctrl key is held down during selection.
* The sketch to carbon copy should be plane-parallel to the currently active sketch. If that is not the case the Ctrl and Alt keys must be held down during selection. This works for sketches located outside the active Body as well.
* If [construction mode](/Sketcher_ToggleConstruction "Sketcher ToggleConstruction") is active, copied geometry is created as construction geometry.
* The complete sketch is copied, it is not possible to select only a portion. But after copying you can delete unwanted elements.

Retrieved from "<http://wiki.freecad.org/index.php?title=Sketcher_CarbonCopy/es&oldid=1511314>"