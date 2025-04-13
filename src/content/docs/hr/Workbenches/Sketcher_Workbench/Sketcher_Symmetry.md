---
title: Sketcher Symmetry/hr
---
|  |
| --- |
| Sketcher Symmetry |
| Menu location |
| Sketch → Sketcher tools → Symmetry |
| Workbenches |
| [Sketcher](/Sketcher_Workbench "Sketcher Workbench") |
| Default shortcut |
| Z S |
| Introduced in version |
| 0.16 |
| See also |
| [Sketcher MirrorSketch](/Sketcher_MirrorSketch "Sketcher MirrorSketch") |
|  |

## Opis

The ![](/images/Sketcher_Symmetry.svg) [Sketcher Symmetry](/Sketcher_Symmetry "Sketcher Symmetry") creates mirrored copies of selected elements.

## Usage

See also: [Drawing aids](/Sketcher_Workbench#Drawing_aids "Sketcher Workbench").

1. Select one or more edges and/or points.
2. There are several ways to invoke the tool:
   * Press the ![](/images/Sketcher_Symmetry.svg) [Symmetry](/Sketcher_Symmetry "Sketcher Symmetry") button.
   * Select the **Sketch → Sketcher tools → ![](/images/Sketcher_Symmetry.svg) Symmetry** option from the menu.
   * The keyboard shortcut: Z then S.
3. The cursor changes to a cross with the tool icon.
4. The **Symmetry parameters** section ([introduced in 1.0](/Release_notes_1.0 "Release notes 1.0")) is added at the top of the [Sketcher Dialog](/Sketcher_Dialog "Sketcher Dialog").
5. Optionally press the U key or check the **Delete original geometries** checkbox to only keep the mirrored elements. [introduced in 1.0](/Release_notes_1.0 "Release notes 1.0")
6. Optionally press the J key or check the **Create Symmetry constraints** checkbox to add a [Symmetric constraint](/Sketcher_ConstrainSymmetric "Sketcher ConstrainSymmetric") between each original and mirrored point. [introduced in 1.0](/Release_notes_1.0 "Release notes 1.0")
7. Select a line or a sketch axis to define the symmetry line, or a point to define the symmetry point.
8. Mirrored copies are created. Constraints restricted to the selected elements are also processed.
   * If **Create Symmetry constraints** has been selected Symmetric constraints are added.
   * If **Delete original geometries** has been selected the original geometry is removed.

Retrieved from "<http://wiki.freecad.org/index.php?title=Sketcher_Symmetry/hr&oldid=1484222>"