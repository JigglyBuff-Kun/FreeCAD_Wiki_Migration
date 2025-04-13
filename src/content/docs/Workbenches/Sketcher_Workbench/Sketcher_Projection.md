---
title: Sketcher Projection
---

|                                                                                         |
| --------------------------------------------------------------------------------------- |
| Sketcher Projection                                                                     |
| Menu location                                                                           |
| Sketch → Sketcher tools → Create external projection geometry                           |
| Workbenches                                                                             |
| [Sketcher](/Sketcher_Workbench "Sketcher Workbench")                                    |
| Default shortcut                                                                        |
| G X                                                                                     |
| Introduced in version                                                                   |
| 1.1                                                                                     |
| See also                                                                                |
| [Sketcher ConstructionMode](/Sketcher_ToggleConstruction "Sketcher ToggleConstruction") |
|                                                                                         |

## Description

The ![](/src/assets/images/Sketcher_Projection.svg) [Sketcher Projection](/Sketcher_Projection "Sketcher Projection") tool ([introduced in 1.1](/Release_notes_1.1 "Release notes 1.1")) projects edges and/or vertices belonging to objects outside the sketch onto the sketch plane. The projected geometry is called "external geometry". It stays parametrically linked to its source objects. External geometry is marked with a dedicated [color](/Sketcher_Preferences#Appearance "Sketcher Preferences") (default magenta). It can be defining geometry that is visible outside the sketch or construction geometry that is not visible outside the sketch.

## Usage

1. There are several ways to invoke the tool:
   - Press the ![](/src/assets/images/Sketcher_Projection.svg) [Create external projection geometry](/Sketcher_Projection "Sketcher Projection") button.
   - Select the **Sketcher → Sketcher tools → ![](/src/assets/images/Sketcher_Projection.svg) Create external projection geometry** option from the menu.
   - Right-click in the [3D view](/3D_view "3D view") and select the **![](/src/assets/images/Sketcher_Projection.svg) Create external projection geometry** option from the context menu.
   - Use the keyboard shortcut: G then X.
2. The cursor changes to a cross with the tool icon.
3. Select one or more external faces, edges and/or vertices. See [Notes](#Notes).
4. External geometry is created.
5. This tool always runs in continue mode: optionally keep selecting external faces, edges and/or vertices.
6. To finish, right-click or press Esc, or start another geometry or constraint creation tool.

## Notes

- All edges of a face are projected onto the sketch plane.
- External geometry is created as defining geometry or construction geometry according to the status of the [Toggle construction geometry](/Sketcher_ToggleConstruction "Sketcher ToggleConstruction") tool. This tool can also be used to toggle the mode of individual edges. Check the **Edit → Preferences... → Sketcher → General → Always add external geometry as reference** option to ignore the status of this tool and always add external geometry as construction geometry.

Retrieved from "<http://wiki.freecad.org/index.php?title=Sketcher_Projection/en&oldid=1560290>"
