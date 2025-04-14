---
title: Sketcher CreateSlot
---

|                                                                            |
| -------------------------------------------------------------------------- |
| Sketcher CreateSlot                                                        |
| Menu location                                                              |
| Sketch → Sketcher geometries → Create slot                                 |
| Workbenches                                                                |
| [Sketcher](/Sketcher_Workbench "Sketcher Workbench")                       |
| Default shortcut                                                           |
| G S                                                                        |
| Introduced in version                                                      |
| -                                                                          |
| See also                                                                   |
| [Sketcher CreateArcSlot](/Sketcher_CreateArcSlot "Sketcher CreateArcSlot") |
|                                                                            |

## Description

The ![](/images/Sketcher_CreateSlot.svg) [Sketcher CreateSlot](/Sketcher_CreateSlot "Sketcher CreateSlot") tool creates a slot, a closed polyline consisting of two semicircles connected by two parallel straight lines.

![](/images/SketcherCreateSlotExample.png)

## Usage

See also: [Drawing aids](/Sketcher_Workbench#Drawing_aids "Sketcher Workbench").

Pos-OVP = Positional [On-View-Parameters](/Sketcher_Preferences#General "Sketcher Preferences"). [introduced in 1.0](/Release_notes_1.0 "Release notes 1.0")  
Dim-OVP = Dimensional On-View-Parameters. [introduced in 1.0](/Release_notes_1.0 "Release notes 1.0")

1. There are several ways to invoke the tool:
   - Press the ![](/images/Sketcher_CreateSlot.svg) [Create slot](/Sketcher_CreateSlot "Sketcher CreateSlot") button.
   - Select the **Sketcher → Sketcher geometries → ![](/images/Sketcher_CreateSlot.svg) Create Slot** option from the menu.
   - The keyboard shortcut: G then S.
2. The cursor changes to a cross with the tool icon.
3. Pick the center of the first semicircle. Or with Pos-OVP: enter its X and/or Y coordinate.
4. Pick the center of the second semicircle. Or with Dim-OVP: enter the distance between the centers and/or angle of the slot. The angle is relative to the X axis of the sketch.
5. Pick a point to define the radius of the slot. Or with Dim-OVP: enter this radius.
6. The slot is created and applicable Pos-OVP and Dim-OVP based constraints are added.
7. If the tool runs in [continue mode](/Sketcher_Workbench#Continue_modes "Sketcher Workbench"):
   1. Optionally keep creating slots.
   2. To finish, right-click or press Esc, or start another geometry or constraint creation tool.

## Notes

- 0.21 and below ([introduced in 0.20](/Release_notes_0.20 "Release notes 0.20")): Holding Ctrl when picking the second center will constrain the slot to be drawn horizontally or vertically.
- [introduced in 1.0](/Release_notes_1.0 "Release notes 1.0"): [Angular snap](/Sketcher_Snap "Sketcher Snap") can be used to control the angle of the slot.
- [introduced in 0.20](/Release_notes_0.20 "Release notes 0.20"): A slot can also be constrained horizontally or vertically if the [Auto constraints](/Sketcher_Workbench#Auto_constraints "Sketcher Workbench") option is enabled.

Retrieved from "<http://wiki.freecad.org/index.php?title=Sketcher_CreateSlot/en&oldid=1402622>"
