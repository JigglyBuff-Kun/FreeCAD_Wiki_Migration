---
title: Sketcher Afișați sau ascundeți geometria internă
---
|  |
| --- |
| Sketcher RestoreInternalAlignmentGeometry |
| poziția meniului |
| Sketch → Sketcher tools → Show/hide internal geometry |
| Ateliere |
| [Sketcher](/Sketcher_Workbench/ro "Sketcher Workbench/ro") |
| scurtătură |
| Ctrl+Shift+E |
| Prezentat în versiune |
| - |
| A se vedea, de asemenea, |
| *Nici unul* |
|  |

#### Descriere

Comanda șterge elemente neutilizate în geometria internă sau recreează elementele lipsă.

The ![](/images/Sketcher_RestoreInternalAlignmentGeometry.svg) [Sketcher RestoreInternalAlignmentGeometry](/Sketcher_RestoreInternalAlignmentGeometry "Sketcher RestoreInternalAlignmentGeometry") tool deletes the internal geometry of elements, or recreates missing internal geometry. The tool does not delete internal geometry that has associated constraints.

#### Utilizare

* Selectați un element al unei schițe care acceptă alinierea internă (în prezent, doar Elipsa / Arc).
* Apelați comanda făcând clic pe un buton de pe bara de instrumente, selectând elementul de meniu sau utilizând comanda rapidă de la tastatură.

Dacă există sloturi de aliniere libere pentru elementul selectat, se creează o nouă geometrie a construcției și se aliniază cu sloturile disponibile.
Dacă toate locațiile de aliniere sunt ocupate, geometria internă neutilizată este ștearsă (elementul este tratat ca nefolosit dacă nu este forțat să facă altceva).

1. Select one or more sketch elements that support internal geometry ([ellipse](/Sketcher_CreateEllipseByCenter "Sketcher CreateEllipseByCenter"), [arc of ellipse](/Sketcher_CreateArcOfEllipse "Sketcher CreateArcOfEllipse"), [arc of hyperbola](/Sketcher_CreateArcOfHyperbola "Sketcher CreateArcOfHyperbola"), [arc of parabola](/Sketcher_CreateArcOfParabola "Sketcher CreateArcOfParabola") or [B-spline](/Sketcher_CreateBSpline "Sketcher CreateBSpline")).
2. There are several ways to invoke the tool:
   * Press the ![](/images/Sketcher_RestoreInternalAlignmentGeometry.svg) [Show/hide internal geometry](/Sketcher_RestoreInternalAlignmentGeometry "Sketcher RestoreInternalAlignmentGeometry") button.
   * Select the **Sketch → Sketcher visual → ![](/images/Sketcher_RestoreInternalAlignmentGeometry.svg) Show/hide internal geometry** option from the menu.
   * Use the keyboard shortcut: Z then I.
3. Internal geometry is deleted for selected elements with a complete set of internal geometry, else missing internal geometry is recreated.

Retrieved from "<http://wiki.freecad.org/index.php?title=Sketcher_RestoreInternalAlignmentGeometry/ro&oldid=1414037>"