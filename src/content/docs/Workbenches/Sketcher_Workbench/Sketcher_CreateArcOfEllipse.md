---
title: Sketcher CreateArcOfEllipse
---

|                                                                                                    |
| -------------------------------------------------------------------------------------------------- |
| Sketcher CreateArcOfEllipse                                                                        |
| Menu location                                                                                      |
| Sketch → Sketcher geometries → Create arc of ellipse                                               |
| Workbenches                                                                                        |
| [Sketcher](/Sketcher_Workbench "Sketcher Workbench")                                               |
| Default shortcut                                                                                   |
| G E A                                                                                              |
| Introduced in version                                                                              |
| 0.15                                                                                               |
| See also                                                                                           |
| [Sketcher CreateEllipseByCenter](/Sketcher_CreateEllipseByCenter "Sketcher CreateEllipseByCenter") |
|                                                                                                    |

## Description

The ![](/src/assets/images/Sketcher_CreateArcOfEllipse.svg) [Sketcher CreateArcOfEllipse](/Sketcher_CreateArcOfEllipse "Sketcher CreateArcOfEllipse") tool creates an arc of ellipse.

![](/src/assets/images/Sketcher_CreateArcOfEllipse_Example.png)

Arc of ellipse (white) with internal geometry (dark yellow)

## Usage

See also: [Drawing aids](/Sketcher_Workbench#Drawing_aids "Sketcher Workbench").

1. There are several ways to invoke the tool:
   - Press the ![](/src/assets/images/Sketcher_CreateArcOfEllipse.svg) [Arc of ellipse by center, radius, endpoints](/Sketcher_CreateArcOfEllipse "Sketcher CreateArcOfEllipse") button.
   - Select the **Sketcher → Sketcher geometries → ![](/src/assets/images/Sketcher_CreateArcOfEllipse.svg) Create arc of ellipse** option from the menu.
   - Use the keyboard shortcut: G then E, then A.
2. The cursor changes to a cross with the tool icon.
3. Pick the center of the arc.
4. Pick an endpoint of one of the axes of the arc, this also defines one of its radii.
5. Pick the start point of the arc, this also defines the other radius of the arc.
6. Pick the endpoint of the arc.
7. The arc of ellipse is created, including a set of internal geometry (major axis, minor axis and two foci).
8. If the tool runs in [continue mode](/Sketcher_Workbench#Continue_modes "Sketcher Workbench"):
   1. Optionally keep creating arcs.
   2. To finish, right-click or press Esc, or start another geometry or constraint creation tool.

## Notes

- Elements of the internal geometry can be deleted. They can be recreated at any time with [Sketcher RestoreInternalAlignmentGeometry](/Sketcher_RestoreInternalAlignmentGeometry "Sketcher RestoreInternalAlignmentGeometry").
- Once created, the major and minor axes of an arc of ellipse are strict and cannot be swapped by resizing. This is a consequence of the solver parametrization and the same strict behavior of [OpenCASCADE](/OpenCASCADE "OpenCASCADE"). An arc of ellipse must be rotated to swap its axes.

Retrieved from "<http://wiki.freecad.org/index.php?title=Sketcher_CreateArcOfEllipse/en&oldid=1413718>"
