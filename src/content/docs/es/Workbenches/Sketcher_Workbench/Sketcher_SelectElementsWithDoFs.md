---
title: Croquizador SeleccionarElementosConGdL
---
|  |
| --- |
| Croquizador SeleccionarElementosConGdL |
| Ubicación en el Menú |
| Croquis → Croquizador Herramientas → Seleccionar GdL del solucionador |
| Entornos de trabajo |
| [Croquizador](/Sketcher_Workbench/es "Sketcher Workbench/es") |
| Atajo de teclado por defecto |
| *Ninguno* |
| Introducido en versión |
| 0.18 |
| Ver también |
| *Ninguno* |
|  |

## Descripción

Esta herramienta está pensada para ayudar a restringir completamente un croquis resaltando en verde los elementos del croquis con grados de libertad (GdL) (inglés: DoF Degrees of Freedom) restantes.

If such elements exist in a sketch the [Solver messages section of the Sketcher Dialog](/Sketcher_Dialog#Solver_messages "Sketcher Dialog") displays this message:

* Under constrained: n DoF(s)

Where *n* is the remaining number of degrees of freedom. Clicking the underlined text will select the under-constrained elements.

Please note that a sketch can also have redundant constraints if one of the other [solver messages](/Sketcher_Dialog#Solver_messages "Sketcher Dialog") is displayed.

## Utilización

1. There are several ways to invoke the tool:
   * Click the underlined text in the Sketcher Dialog as described above.
   * Select the **Sketch → Sketcher visual → ![](/images/Sketcher_SelectElementsWithDoFs.svg) Select unconstrained DoF** option from the menu.
   * Use the keyboard shortcut: Z then F.
2. The under-constrained sketch elements are selected.
3. Optionally click in an empty area in the [3D view](/3D_view "3D view") to clear the selection.

Retrieved from "<http://wiki.freecad.org/index.php?title=Sketcher_SelectElementsWithDoFs/es&oldid=1460748>"