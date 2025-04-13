---
title: Sketcher Maparea unei schițe pe o fațetă
---
|  |
| --- |
| Sketcher MapSketch |
| Menu location |
| Part Design/Sketch → Map sketch to face... |
| Workbenches |
| [Sketcher](/Sketcher_Workbench "Sketcher Workbench"), [PartDesign](/PartDesign_Workbench "PartDesign Workbench") |
| Default shortcut |
| *None* |
| Introduced in version |
| - |
| See also |
| [Create a new sketch](/Sketcher_NewSketch "Sketcher NewSketch") |
|  |

## Description

## Descriere

Acest instrument pune o schiță existentă pe fața unei forme. PartDesign features created from this sketch will be fused with the underlying solid for additive features (Pad, Revolution) or be subtracted from the underlying solid in case of subtractive features (Pocket, Groove).

Rețineți că acest instrument nu este utilizat pentru a crea schițe noi. It only maps, or remaps an existing sketch to the face of a solid or a PartDesign feature. Typical use cases are:

* The sketch was created on a standard plane (XY, XZ, YZ) and you want to map it to the face of a solid in order to build a feature upon it.
* The sketch was mapped on a specific face of a solid but you need to map it to a different face.
* Repairing a broken model.

![](/images/Sketcher_MapSketch_00.png)

## Usage

## Cum se utilizează

* Select the face of a PartDesign feature or a solid.
* Click on the ![Sketcher_MapSketch](/images/Sketcher_MapSketch.png) [Map sketch to face](/Sketcher_MapSketch "Sketcher MapSketch") icon in the toolbar (or go to the PartDesign or Sketch menu depending on which workbench is active)
* In the **Select sketch** dialog window that opens, select from the list the sketch to map to the face and click OK.
* The sketch is automatically opened in edit mode.

Retrieved from "<http://wiki.freecad.org/index.php?title=Sketcher_MapSketch/ro&oldid=1387641>"