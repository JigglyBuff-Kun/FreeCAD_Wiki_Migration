---
title: Sketcher "Показать/скрыть внутреннюю геометрию"
---
|  |
| --- |
| Показать/скрыть внутреннюю геометрию |
| Расположение в меню |
| Sketch → Инструменты для эскиза → Показать/скрыть внутреннюю геометрию |
| Верстаки |
| [Sketcher](/Sketcher_Workbench/ru "Sketcher Workbench/ru") |
| Быстрые клавиши |
| Ctrl+Shift+E |
| Представлено в версии |
| - |
| См. также |
| *Нет* |
|  |

## Описание

The ![](/images/Sketcher_RestoreInternalAlignmentGeometry.svg) [Sketcher RestoreInternalAlignmentGeometry](/Sketcher_RestoreInternalAlignmentGeometry "Sketcher RestoreInternalAlignmentGeometry") tool deletes the internal geometry of elements, or recreates missing internal geometry. The tool does not delete internal geometry that has associated constraints.

## Применение

1. Select one or more sketch elements that support internal geometry ([ellipse](/Sketcher_CreateEllipseByCenter "Sketcher CreateEllipseByCenter"), [arc of ellipse](/Sketcher_CreateArcOfEllipse "Sketcher CreateArcOfEllipse"), [arc of hyperbola](/Sketcher_CreateArcOfHyperbola "Sketcher CreateArcOfHyperbola"), [arc of parabola](/Sketcher_CreateArcOfParabola "Sketcher CreateArcOfParabola") or [B-spline](/Sketcher_CreateBSpline "Sketcher CreateBSpline")).
2. There are several ways to invoke the tool:
   * Press the ![](/images/Sketcher_RestoreInternalAlignmentGeometry.svg) [Show/hide internal geometry](/Sketcher_RestoreInternalAlignmentGeometry "Sketcher RestoreInternalAlignmentGeometry") button.
   * Select the **Sketch → Sketcher visual → ![](/images/Sketcher_RestoreInternalAlignmentGeometry.svg) Show/hide internal geometry** option from the menu.
   * Use the keyboard shortcut: Z then I.
3. Internal geometry is deleted for selected elements with a complete set of internal geometry, else missing internal geometry is recreated.

Retrieved from "<http://wiki.freecad.org/index.php?title=Sketcher_RestoreInternalAlignmentGeometry/ru&oldid=1414042>"