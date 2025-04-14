---
title: Sketcher CreateArcOfHyperbola
---

|                                                                                              |
| -------------------------------------------------------------------------------------------- |
| Sketcher CreateArcOfHyperbola                                                                |
| Menu location                                                                                |
| Sketch → Sketcher geometries → Create arc of hyperbola                                       |
| Workbenches                                                                                  |
| [Sketcher](/Sketcher_Workbench "Sketcher Workbench")                                         |
| Default shortcut                                                                             |
| G H                                                                                          |
| Introduced in version                                                                        |
| 0.17                                                                                         |
| See also                                                                                     |
| [Sketcher CreateArcOfParabola](/Sketcher_CreateArcOfParabola "Sketcher CreateArcOfParabola") |
|                                                                                              |

## Description

The ![](/images/Sketcher_CreateArcOfHyperbola.svg) [Sketcher CreateArcOfHyperbola](/Sketcher_CreateArcOfHyperbola "Sketcher CreateArcOfHyperbola") tool creates an arc of hyperbola.

![](/images/Sketcher_CreateArcOfHyperbola_Example.png)

Arc of hyperbola (white) with internal geometry (dark yellow)

## Usage

See also: [Drawing aids](/Sketcher_Workbench#Drawing_aids "Sketcher Workbench").

1. There are several ways to invoke the tool:
   - Press the ![](/images/Sketcher_CreateArcOfHyperbola.svg) [Arc of hyperbola by center, vertex, endpoints](/Sketcher_CreateArcOfHyperbola "Sketcher CreateArcOfHyperbola") button.
   - Select the **Sketcher → Sketcher geometries → ![](/images/Sketcher_CreateArcOfHyperbola.svg) Create arc of hyperbola** option from the menu.
   - Use the keyboard shortcut: G then H.
2. The cursor changes to a cross with the tool icon.
3. Pick the center of the major radius of the arc (labelled 1 in the image above).
4. Pick the vertex of the arc (labelled 2 in the image above), this also defines its major radius.
5. Pick the start point of the arc (labelled 3 or 4 in the image above), this also defines its curvature.
6. Pick the endpoint of the arc (labelled 3 or 4 in the image above).
7. The arc of hyperbola is created, including a set of internal geometry.
8. If the tool runs in [continue mode](/Sketcher_Workbench#Continue_modes "Sketcher Workbench"):
   1. Optionally keep creating arcs.
   2. To finish, right-click or press Esc, or start another geometry or constraint creation tool.

## Notes

- Elements of the internal geometry can be deleted. They can be recreated at any time with [Sketcher RestoreInternalAlignmentGeometry](/Sketcher_RestoreInternalAlignmentGeometry "Sketcher RestoreInternalAlignmentGeometry").

Retrieved from "<http://wiki.freecad.org/index.php?title=Sketcher_CreateArcOfHyperbola/en&oldid=1399484>"
