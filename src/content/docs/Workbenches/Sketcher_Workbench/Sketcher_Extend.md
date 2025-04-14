---
title: Sketcher Extend
---

|                                                             |
| ----------------------------------------------------------- |
| Sketcher Extend                                             |
| Menu location                                               |
| Sketch → Sketcher tools → Extend edge                       |
| Workbenches                                                 |
| [Sketcher](/Sketcher_Workbench "Sketcher Workbench")        |
| Default shortcut                                            |
| G Q                                                         |
| Introduced in version                                       |
| 0.17                                                        |
| See also                                                    |
| [Sketcher Trimming](/Sketcher_Trimming "Sketcher Trimming") |
|                                                             |

## Description

The ![](/images/Sketcher_Extend.svg) [Sketcher Extend](/Sketcher_Extend "Sketcher Extend") tool extends or shortens a line or an arc to an arbitrary location, or to a target edge or point.

![](/images/Sketcher_Extend_example_01.png)

Shown on the left (1), the two sketch elements before the operation; in the middle (2), the line is being extended to the arc; on the right (3), the final result.

## Usage

See also: [Drawing aids](/Sketcher_Workbench#Drawing_aids "Sketcher Workbench").

1. There are several ways to invoke the tool:
   - Press the ![](/images/Sketcher_Extend.svg) [Sketcher Extend edge](/Sketcher_Extend "Sketcher Extend") button.
   - Select the **Sketcher → Sketcher tools → ![](/images/Sketcher_Extend.svg) Extend edge** option from the menu.
   - Right-click in the [3D view](/3D_view "3D view") and select the **![](/images/Sketcher_Extend.svg) Extend edge** option from the context menu.
   - Use the keyboard shortcut: G then Q.
2. If there is a previous selection it is cleared. The tool does not accept a pre-selection.
3. The cursor changes to a cross with the tool icon.
4. Select a line or an arc.
5. Move the cursor in the direction to extend or shorten.
6. Do one of the following:
   - Click an arbitrary point.
   - To extend/shorten to another edge ([Auto constraints](/Sketcher_Workbench#Auto_constraints "Sketcher Workbench") must be enabled): Place the cursor over the target edge. When it is highlighted and the ![](/images/Sketcher_ConstrainPointOnObject.svg) [Point on object constraint](/Sketcher_ConstrainPointOnObject "Sketcher ConstrainPointOnObject") icon appears besides the cursor, click to confirm. The constraint is added.
   - To extend/shorten to a point (Auto constraints must be enabled): Place the cursor over the target point. when it is highlighted and the ![](/images/Sketcher_ConstrainCoincident.svg) [Coincident constraint](/Sketcher_ConstrainCoincident "Sketcher ConstrainCoincident") icon appears besides the cursor, click to confirm. The constraint is added.
7. If the tool runs in [continue mode](/Sketcher_Workbench#Continue_modes "Sketcher Workbench"):
   1. Optionally keep extending/shortening edges.
   2. To finish, click in an empty area in the [3D view](/3D_view "3D view"), right-click or press Esc, or start another geometry or constraint creation tool.

## Notes

- If not fully constrained, the target edge or point may be modified as well.

Retrieved from "<http://wiki.freecad.org/index.php?title=Sketcher_Extend/en&oldid=1413916>"
