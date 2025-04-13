---
title: Skicář Změna orientace
---
|  |
| --- |
| Skicář Změna orientace |
| Umístění Menu |
| Návrh dílu → Změna orientace náčrtu |
| Pracovní stoly |
| [Skicář](/Sketcher_Workbench/cs "Sketcher Workbench/cs"), [Návrh dílu](/PartDesign_Workbench/cs "PartDesign Workbench/cs") |
| Výchozí zástupce |
| *Nikdo* |
| Představen ve verzi |
| - |
| Viz také |
| [Vyznač náčrt](/Sketcher_MapSketch/cs "Sketcher MapSketch/cs"), [Nový náčrt](/Sketcher_NewSketch/cs "Sketcher NewSketch/cs") |
|  |

## Popis

The ![](/images/Sketcher_ReorientSketch.svg) [Sketcher ReorientSketch](/Sketcher_ReorientSketch "Sketcher ReorientSketch") tool places a sketch on one of the main planes with an optional offset. It can also be used to detach a sketch.

## Usage

1. Select a sketch.
2. There are several ways to invoke the tool:
   * Press the ![](/images/Sketcher_ReorientSketch.svg) [Reorient sketch](/Sketcher_ReorientSketch "Sketcher ReorientSketch") button (not available in the [PartDesign Workbench](/PartDesign_Workbench "PartDesign Workbench")).
   * Select the **Sketch → ![](/images/Sketcher_ReorientSketch.svg) Reorient sketch** option from the menu.
3. If the sketch is attached:
   1. The **Sketch has support** dialog opens.
   2. Press the Yes button to detach the sketch.
4. The **Choose orientation** dialog opens.
5. Optionally press the Cancel button to only detach the sketch and finish the tool.
6. Specify the plane for the orientation. The plane is relative to the local coordinate system the sketch is in:
   * If the **Reverse direction** checkbox is not checked:
     + Top: **XY-Plane**
     + Front: **XZ-Plane**
     + Right: **YZ-Plane**
   * If the **Reverse direction** checkbox is checked:
     + Bottom: **XY-Plane**
     + Rear: **XZ-Plane**
     + Left: **YZ-Plane**
7. Optionally change the **Offset**. The offset is measured along the Z, Y or X axis of the local coordinate system.
8. Press the OK button.

Retrieved from "<http://wiki.freecad.org/index.php?title=Sketcher_ReorientSketch/cs&oldid=1388283>"