---
title: Skicář Lomená čára
---
|  |
| --- |
| Skicář Lomená čára |
| Umístění Menu |
| Náčrt → Skicář Konstrukce → Vytvořit Lomenou čáru |
| Pracovní stoly |
| [Skicář](/Sketcher_Workbench/cs "Sketcher Workbench/cs") |
| Výchozí zástupce |
| *Nikdo* |
| Představen ve verzi |
| - |
| Viz také |
| [Skicář Přímka](/Sketcher_CreateLine/cs "Sketcher CreateLine/cs") |
|  |

## Popis

Tento nástroj funguje podobně jako [Skicář Přímka](/Sketcher_CreateLine/cs "Sketcher CreateLine/cs"), ale vytváří postupně přímkové segmenty, které jsou spojeny v jejich vrcholech.
Při spuštění nástroje se ukazatel myši změní na bílý křížek s červenou ikonou lomené čáry.
Souřadnice ukazatele jsou vedle zobrazovány v reálném čase.

![](/images/Sketcher_PolylineExample1.png)

Polyline started with a line, a tangent arc, a perpendicular arc then a tangent line.

## Použití

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

Retrieved from "<http://wiki.freecad.org/index.php?title=Sketcher_CreatePolyline/cs&oldid=1404811>"