---
title: スケッチャー・辺をトリム
---
|  |
| --- |
| Sketcher Trimming |
| Menu location |
| Sketch → Sketcher tools → Trim edge |
| Workbenches |
| [Sketcher](/Sketcher_Workbench "Sketcher Workbench") |
| Default shortcut |
| G T |
| Introduced in version |
| 0.12 |
| See also |
| [Sketcher Split](/Sketcher_Split "Sketcher Split"), [Sketcher Extend](/Sketcher_Extend "Sketcher Extend") |
|  |

## Description

The ![](/images/Sketcher_Trimming.svg) [Sketcher Trimming](/Sketcher_Trimming "Sketcher Trimming") tool trims an edge at the nearest intersections with other edges. If the selected edge does not intersect other edges it will be deleted.

## Usage

See also: [Drawing aids](/Sketcher_Workbench#Drawing_aids "Sketcher Workbench").

1. There are several ways to invoke the tool:
   * Press the ![](/images/Sketcher_Trimming.svg) [Trim edge](/Sketcher_Trimming "Sketcher Trimming") button.
   * Select the **Sketcher → Sketcher tools → ![](/images/Sketcher_Trimming.svg) Trim edge** option from the menu.
   * Right-click in the [3D view](/3D_view "3D view") and select the **![](/images/Sketcher_Trimming.svg) Trim edge** option from the context menu.
   * Use the keyboard shortcut: G then T.
2. If there is a previous selection it is cleared. The tool does not accept a pre-selection.
3. The cursor changes to a cross with the tool icon.
4. There are two modes:
   * Single-click trim:
     1. Move the cursor over a portion of an edge to be trimmed.
     2. The edge is highlighted and the trim points are marked with temporary circles.
     3. Click to confirm.
     4. The edge is trimmed at the marked points.
   * Hold-and-drag trim: [introduced in 1.0](/Release_notes_1.0 "Release notes 1.0")
     1. Hold down the left mouse button.
     2. Move the cursor over portions of edges to be trimmed.
     3. Trimming occurs immediately.
     4. Release the left mouse button.
5. If a portion is cut out, existing applicable constraints are transferred to the resulting new edge. [Point on object constraints](/Sketcher_ConstrainPointOnObject "Sketcher ConstrainPointOnObject") are added between the endpoint(s) of the trimmed edge and the cutting edge(s).
6. This tool always runs in continue mode: optionally keep trimming edges.
7. To finish, click in an empty area in the [3D view](/3D_view "3D view"), right-click or press Esc, or start another geometry or constraint creation tool.

Retrieved from "<http://wiki.freecad.org/index.php?title=Sketcher_Trimming/ja&oldid=1535364>"