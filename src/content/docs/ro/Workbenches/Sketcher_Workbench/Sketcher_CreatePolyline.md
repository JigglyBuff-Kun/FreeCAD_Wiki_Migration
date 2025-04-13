---
title: Sketcher Polilinie
---
|  |
| --- |
| Sketcher CreatePolyline |
| poziția meniului |
| Sketch → Sketcher geometries → Create polyline |
| Ateliere |
| [Sketcher](/Sketcher_Workbench/ro "Sketcher Workbench/ro") |
| scurtătură |
| *Nici unul* |
| Prezentat în versiune |
| - |
| A se vedea, de asemenea, |
| [Sketcher Line](/index.php?title=Sketcher_CreateLine/ro&action=edit&redlink=1 "Sketcher CreateLine/ro (page does not exist)") |
|  |

## Descriere

Această unealtă funcționează ca un instrument [Sketcher CreateLine](/index.php?title=Sketcher_CreateLine/ro&action=edit&redlink=1 "Sketcher CreateLine/ro (page does not exist)"), dar crează linii și arce de cerc conectate prin vârfuri/vertex-uri. Când pornește instrumentul, indicatorul mouse se modifică într-o cruce albă și o iconiță roșie tip polilinie. coordonatele indicatorului sunt afișate alături în albastru și în timp real.

![](/images/Sketcher_PolylineExample1.png)

*Polyline începe cu o linie, un arc de cerc tangent, un arc de cerc perpendicular și apoi cu o linie tangentă*

## Cum se folosește

See also: [Drawing aids](/Sketcher_Workbench#Drawing_aids "Sketcher Workbench").

1. There are several ways to invoke the tool:
   * Press the ![](/images/Sketcher_CreatePolyline.svg) [Create polyline](/Sketcher_CreatePolyline "Sketcher CreatePolyline") button.
   * Select the **Sketcher → Sketcher geometries → ![](/images/Sketcher_CreatePolyline.svg) Create polyline** option from the menu.
   * Right-click in the [3D view](/3D_view "3D view") and select the **![](/images/Sketcher_CreatePolyline.svg) Create polyline** option from the context menu.
   * Use the keyboard shortcut: G then M.
2. The cursor changes to a cross with the tool icon.
3. The modes of the tool require a previous segment. Do one of the following:
   * Pick two points to define a line segment.
   * Pick the endpoint of an existing line or arc segment ([Auto constraints](/Sketcher_Workbench#Auto_constraints "Sketcher Workbench") must be enabled).
4. Optionally press the M key one or more times to cycle through the modes for the next segment. The available modes are:
   * Line perpendicular to the previous segment.
   * Line tangential to the previous segment (this is the initial mode if the previous segment is an arc).
   * Arc tangential to the previous segment.
   * Arc perpendicular (left) to the previous segment.
   * Arc perpendicular (right) to the previous segment.
   * Line only connected to the previous segment.
5. While in any of the arc modes, optionally hold down the Ctrl key to snap the arc to increments of 45° relative to the previous segment.
6. Pick the endpoint of the segment.
7. Optionally repeat this to create more segments.
8. To finish the input do one of the following:
   * Snap to the start point to create a closed polyline.
   * Right-click or press Esc to create an open polyline.
9. The polyline segments have been created and applicable constraints have been added.
10. If the tool runs in [continue mode](/Sketcher_Workbench#Continue_modes "Sketcher Workbench"):
    1. Optionally keep creating polylines.
    2. To finish, right-click or press Esc, or start another geometry or constraint creation tool.

Retrieved from "<http://wiki.freecad.org/index.php?title=Sketcher_CreatePolyline/ro&oldid=1404817>"